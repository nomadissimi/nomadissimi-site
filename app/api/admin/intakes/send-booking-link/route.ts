import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { sendBookingLinkEmail } from "@/lib/email/sendBookingLinkEmail";

//whoever is listed here will be able to send booking links and update intake status to "booking link sent"

const ADMIN_EMAILS = [
  "sylviasanchez1506@gmail.com",
  "marco.bellomo1997@gmail.com",
];

export async function POST(req: Request) {
  try {
    const supabase = await createSupabaseServerClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const isAdmin =
      !!user?.email &&
      ADMIN_EMAILS.map((email) => email.toLowerCase()).includes(
        user.email.toLowerCase()
      );

    if (!isAdmin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { intakeId, bookingUrl } = body ?? {};

    if (!intakeId || !bookingUrl) {
      return NextResponse.json(
        { error: "Missing intakeId or bookingUrl" },
        { status: 400 }
      );
    }

    const { data: intake, error: intakeError } = await supabaseAdmin
      .from("client_intakes")
      .select("id, first_name, last_name, email, intake_type")
      .eq("id", intakeId)
      .single();

    if (intakeError || !intake) {
      return NextResponse.json(
        { error: "Could not find intake" },
        { status: 404 }
      );
    }

    await sendBookingLinkEmail({
      clientName: `${intake.first_name ?? ""} ${intake.last_name ?? ""}`.trim(),
      clientEmail: intake.email,
      bookingUrl,
      intakeType: intake.intake_type,
    });

    const { error: updateError } = await supabaseAdmin
      .from("client_intakes")
      .update({
        status: "booking link sent",
        booking_link_url: bookingUrl,
        booking_link_sent_at: new Date().toISOString(),
      })
      .eq("id", intakeId);

    if (updateError) {
      return NextResponse.json(
        { error: "Email sent but failed to update status" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("send booking link route error:", error);
    return NextResponse.json(
      { error: "Failed to send booking link" },
      { status: 500 }
    );
  }
}


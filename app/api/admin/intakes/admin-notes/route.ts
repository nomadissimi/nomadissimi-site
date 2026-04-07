import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

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
    const { intakeId, adminNotes } = body ?? {};

    if (!intakeId) {
      return NextResponse.json(
        { error: "Missing intakeId" },
        { status: 400 }
      );
    }

   const { error } = await supabaseAdmin
  .from("client_intakes")
  .update({
    admin_notes: adminNotes ?? "",
    admin_notes_updated_at: new Date().toISOString(),
    admin_notes_updated_by: user.email?.toLowerCase() ?? null,
  })
  .eq("id", intakeId);

    if (error) {
      return NextResponse.json(
        { error: error.message || "Failed to save admin notes" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to save admin notes" },
      { status: 500 }
    );
  }
}


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
    const { id, status } = body ?? {};

    const allowedStatuses = [
      "new",
      "reviewed",
      "booking link sent",
      "completed",
    ];

    if (!id || !status || !allowedStatuses.includes(status)) {
      return NextResponse.json(
        { error: "Invalid request" },
        { status: 400 }
      );
    }

    const { error } = await supabaseAdmin
      .from("client_intakes")
      .update({ status })
      .eq("id", id);

    if (error) {
      console.error("status update error:", error);
      return NextResponse.json(
        { error: "Failed to update status" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("admin intake status route error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}


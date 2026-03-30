import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { randomToken, sha256 } from "@/lib/crypto";

export const runtime = "nodejs";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");

  if (!token) {
    return NextResponse.redirect(new URL("/checkout/cancel", req.url));
  }

const tokenHash = sha256(token + process.env.MAGICLINK_SECRET!);

const { data: magicLink, error: magicLinkError } = await supabaseAdmin
  .from("magic_links")
  .select(`
    id,
    entitlement_id,
    expires_at,
    used_at,
    entitlements (
      email
    )
  `)
  .eq("token_hash", tokenHash)
  .single();

  if (magicLinkError || !magicLink) {
    return NextResponse.redirect(new URL("/checkout/cancel", req.url));
  }

  if (magicLink.used_at) {
    return NextResponse.redirect(new URL("/checkout/cancel", req.url));
  }

  if (new Date(magicLink.expires_at).getTime() < Date.now()) {
    return NextResponse.redirect(new URL("/checkout/cancel", req.url));
  }

  const rawSessionToken = randomToken(32);
  const sessionHash = sha256(rawSessionToken + process.env.SESSION_SECRET!);

  const sessionExpires = new Date();
  sessionExpires.setDate(sessionExpires.getDate() + 30);

const buyerEmail =
  Array.isArray(magicLink.entitlements)
    ? magicLink.entitlements[0]?.email
    : (magicLink.entitlements as { email?: string } | null)?.email;

const normalizedEmail = buyerEmail?.toLowerCase() ?? null;

if (normalizedEmail) {
  const { data: existingSessions } = await supabaseAdmin
    .from("sessions")
    .select("id, expires_at, revoked_at, created_at")
    .eq("email", normalizedEmail)
    .is("revoked_at", null)
    .order("created_at", { ascending: true });

  const activeSessions =
    existingSessions?.filter(
      (item) => new Date(item.expires_at).getTime() >= Date.now()
    ) ?? [];

  if (activeSessions.length >= 2) {
    const sessionsToRevoke = activeSessions.slice(0, activeSessions.length - 1);

    for (const oldSession of sessionsToRevoke) {
      await supabaseAdmin
        .from("sessions")
        .update({ revoked_at: new Date().toISOString() })
        .eq("id", oldSession.id);
    }
  }
}

const { error: sessionError } = await supabaseAdmin.from("sessions").insert({
  entitlement_id: magicLink.entitlement_id,
  email: normalizedEmail,
  session_hash: sessionHash,
  expires_at: sessionExpires.toISOString(),
});


  if (sessionError) {
    return NextResponse.redirect(new URL("/checkout/cancel", req.url));
  }

 await supabaseAdmin
  .from("magic_links")
  .update({ used_at: new Date().toISOString() })
  .eq("id", magicLink.id);

const response = NextResponse.redirect(new URL("/premium/library", req.url));

response.cookies.set("nm_session", rawSessionToken, {
  httpOnly: true,
  secure: true,
  sameSite: "lax",
  path: "/",
  expires: sessionExpires,
});

return response;
}




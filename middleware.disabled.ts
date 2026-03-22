import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { sha256 } from "@/lib/crypto";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (!pathname.startsWith("/premium")) {
    return NextResponse.next();
  }

  if (pathname === "/premium/access") {
    return NextResponse.next();
  }

  const rawSession = req.cookies.get("nm_session")?.value;

  if (!rawSession) {
    return NextResponse.redirect(new URL("/checkout/cancel", req.url));
  }

  const sessionHash = sha256(rawSession + process.env.SESSION_SECRET!);

  const { data: session } = await supabaseAdmin
    .from("sessions")
    .select("id, entitlement_id, expires_at, revoked_at")
    .eq("session_hash", sessionHash)
    .single();

  if (!session) {
    return NextResponse.redirect(new URL("/checkout/cancel", req.url));
  }

  if (session.revoked_at) {
    return NextResponse.redirect(new URL("/checkout/cancel", req.url));
  }

  if (new Date(session.expires_at).getTime() < Date.now()) {
    return NextResponse.redirect(new URL("/checkout/cancel", req.url));
  }

  const { data: entitlement } = await supabaseAdmin
    .from("entitlements")
    .select("id, expires_at, revoked_at")
    .eq("id", session.entitlement_id)
    .single();

  if (!entitlement) {
    return NextResponse.redirect(new URL("/checkout/cancel", req.url));
  }

  if (entitlement.revoked_at) {
    return NextResponse.redirect(new URL("/checkout/cancel", req.url));
  }

  if (new Date(entitlement.expires_at).getTime() < Date.now()) {
    return NextResponse.redirect(new URL("/checkout/cancel", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/premium/:path*"],
};



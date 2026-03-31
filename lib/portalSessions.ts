import { cookies, headers } from "next/headers";
import crypto from "crypto";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

const PORTAL_SESSION_COOKIE = "nm_portal_device";
const MAX_ACTIVE_SESSIONS = 2;

function sha256(value: string) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function randomToken() {
  return crypto.randomBytes(32).toString("hex");
}

export async function ensurePortalSession(params: {
  userId: string;
  email: string;
}) {
  const cookieStore = await cookies();
  const headerStore = await headers();

  let rawToken = cookieStore.get(PORTAL_SESSION_COOKIE)?.value;

  if (!rawToken) {
    rawToken = randomToken();

    cookieStore.set(PORTAL_SESSION_COOKIE, rawToken, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });
  }

  const sessionTokenHash = sha256(
    rawToken + (process.env.SESSION_SECRET || "fallback-session-secret"),
  );

  const userAgent = headerStore.get("user-agent") || null;

  const forwardedFor = headerStore.get("x-forwarded-for") || "";
  const ip = forwardedFor.split(",")[0]?.trim() || null;
  const ipHash = ip ? sha256(ip) : null;

  const nowIso = new Date().toISOString();

  const { data: existing } = await supabaseAdmin
    .from("portal_sessions")
    .select("id, revoked_at")
    .eq("session_token_hash", sessionTokenHash)
    .maybeSingle();

  if (existing?.revoked_at) {
    return { isRevoked: true as const };
  }

  if (!existing) {
    await supabaseAdmin.from("portal_sessions").insert({
      user_id: params.userId,
      email: params.email.toLowerCase(),
      session_token_hash: sessionTokenHash,
      user_agent: userAgent,
      ip_hash: ipHash,
      last_seen_at: nowIso,
    });
  } else {
    await supabaseAdmin
      .from("portal_sessions")
      .update({
        last_seen_at: nowIso,
        user_agent: userAgent,
        ip_hash: ipHash,
      })
      .eq("id", existing.id);
  }

  const { data: activeSessions } = await supabaseAdmin
    .from("portal_sessions")
    .select("id, created_at")
    .eq("user_id", params.userId)
    .is("revoked_at", null)
    .order("created_at", { ascending: false });

  if (activeSessions && activeSessions.length > MAX_ACTIVE_SESSIONS) {
    const sessionsToRevoke = activeSessions.slice(MAX_ACTIVE_SESSIONS);
    const idsToRevoke = sessionsToRevoke.map((s) => s.id);

    if (idsToRevoke.length > 0) {
      await supabaseAdmin
        .from("portal_sessions")
        .update({ revoked_at: nowIso })
        .in("id", idsToRevoke);
    }
  }

  const { data: current } = await supabaseAdmin
    .from("portal_sessions")
    .select("revoked_at")
    .eq("session_token_hash", sessionTokenHash)
    .maybeSingle();

  if (current?.revoked_at) {
    return { isRevoked: true as const };
  }

  return { isRevoked: false as const };
}

export async function getCurrentPortalSessionTokenHash() {
  const cookieStore = await cookies();
  const rawToken = cookieStore.get(PORTAL_SESSION_COOKIE)?.value;

  if (!rawToken) return null;

  return sha256(
    rawToken + (process.env.SESSION_SECRET || "fallback-session-secret"),
  );
}

export async function listActivePortalSessions(userId: string) {
  const { data, error } = await supabaseAdmin
    .from("portal_sessions")
    .select("id, user_agent, created_at, last_seen_at, session_token_hash")
    .eq("user_id", userId)
    .is("revoked_at", null)
    .order("last_seen_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
}
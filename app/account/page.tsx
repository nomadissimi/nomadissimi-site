import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import {
  ensurePortalSession,
  getCurrentPortalSessionTokenHash,
  listActivePortalSessions,
} from "@/lib/portalSessions";
import AccountClient from "./AccountClient";

export default async function AccountPage() {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.email) {
    redirect("/login?next=/account");
  }

  const buyerEmail = user.email.toLowerCase();

  const portalSession = await ensurePortalSession({
    userId: user.id,
    email: buyerEmail,
  });

  if (portalSession.isRevoked) {
    redirect("/session-expired");
  }

  const [sessions, currentSessionHash] = await Promise.all([
    listActivePortalSessions(user.id),
    getCurrentPortalSessionTokenHash(),
  ]);

  const sessionSummaries = sessions.map((session) => ({
    id: session.id,
    userAgent: session.user_agent,
    createdAt: session.created_at,
    lastSeenAt: session.last_seen_at,
    isCurrent: currentSessionHash
      ? session.session_token_hash === currentSessionHash
      : false,
  }));

  return <AccountClient email={buyerEmail} sessions={sessionSummaries} />;
}

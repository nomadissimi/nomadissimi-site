"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/browser";

export default function AccountPage() {
  const router = useRouter();

  const [email, setEmail] = useState<string | null>(null);
  const [newPassword, setNewPassword] = useState("");
  const [loadingPassword, setLoadingPassword] = useState(false);
  const [loadingSession, setLoadingSession] = useState(true);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const supabase = createSupabaseBrowserClient();

    supabase.auth.getUser().then(({ data, error }) => {
      if (error || !data.user) {
        router.push("/login?next=/account");
        return;
      }

      setEmail(data.user.email ?? null);
      setLoadingSession(false);
    });
  }, [router]);

  async function handlePasswordUpdate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoadingPassword(true);
    setMessage(null);
    setError(null);

    const supabase = createSupabaseBrowserClient();

    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    setLoadingPassword(false);

    if (error) {
      setError(error.message);
      return;
    }

    setMessage("Your password has been updated.");
    setNewPassword("");
  }

  async function handleSignOut() {
    const supabase = createSupabaseBrowserClient();
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  }

  if (loadingSession) {
    return (
      <main className="min-h-screen bg-[#FBF8F2] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-black/10 bg-white/70 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
          <p className="sans text-sm text-black/60">Loading your account...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FBF8F2] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="flex justify-between gap-4">
          <Link
            href="/premium/library"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-black/70 transition hover:bg-white"
          >
            ← Back to your private library
          </Link>
        </div>

        <div className="rounded-[28px] border border-black/10 bg-white/70 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
          <p className="sans text-xs tracking-[0.22em] uppercase text-black/45">
            Nomadissimi portal
          </p>

          <h1 className="serif mt-3 text-3xl md:text-5xl font-semibold tracking-[0.01em] text-black leading-tight">
            Account
          </h1>

          <p className="mt-4 sans text-[16px] leading-[1.8] text-black/65">
            Manage your portal access and account settings.
          </p>

          <div className="mt-8 rounded-[24px] border border-black/10 bg-[#FBF8F2] p-6">
            <p className="sans text-xs uppercase tracking-[0.16em] text-black/45">
              Signed in as
            </p>
            <p className="mt-2 sans text-[16px] text-black/80">{email}</p>
          </div>

          <div className="mt-6 rounded-[24px] border border-black/10 bg-[#FBF8F2] p-6">
            <h2 className="serif text-2xl text-black">Change password</h2>

            <form onSubmit={handlePasswordUpdate} className="mt-5 space-y-4">
              <div>
                <label className="mb-2 block sans text-sm text-black/70">
                  New password
                </label>
                <input
                  type="password"
                  required
                  minLength={8}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-black outline-none transition focus:border-black/20"
                  placeholder="At least 8 characters"
                />
              </div>

              {error ? (
                <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              ) : null}

              {message ? (
                <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                  {message}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={loadingPassword}
                className="inline-flex items-center justify-center rounded-full bg-[#4B5D44] px-6 py-3 text-white shadow-[0_14px_40px_rgba(75,93,68,0.25)] transition hover:bg-[#3E4E38] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loadingPassword ? "Saving..." : "Update password"}
              </button>
            </form>
          </div>

          <div className="mt-6 rounded-[24px] border border-black/10 bg-[#FBF8F2] p-6">
            <h2 className="serif text-2xl text-black">Session management</h2>
            <p className="mt-3 sans text-[15px] leading-[1.8] text-black/60">
              Active device and session controls are coming next.
            </p>
          </div>

          <div className="mt-8">
            <button
              type="button"
              onClick={handleSignOut}
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-black/70 transition hover:bg-[#FBF8F2] hover:text-black"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}


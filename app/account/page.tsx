"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/browser";

export default function AccountPage() {
  const router = useRouter();

  const [email, setEmail] = useState<string | null>(null);

  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loadingSession, setLoadingSession] = useState(true);
  const [loadingEmail, setLoadingEmail] = useState(false);
  const [loadingPassword, setLoadingPassword] = useState(false);
  const [signingOut, setSigningOut] = useState(false);

  const [emailMessage, setEmailMessage] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);

  const [passwordMessage, setPasswordMessage] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  useEffect(() => {
    const supabase = createSupabaseBrowserClient();

    supabase.auth.getUser().then(({ data, error }) => {
      if (error || !data.user) {
        router.push("/login?next=/account");
        return;
      }

      const currentEmail = data.user.email ?? null;
      setEmail(currentEmail);
      setNewEmail(currentEmail ?? "");
      setLoadingSession(false);
    });
  }, [router]);

  async function handleEmailUpdate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoadingEmail(true);
    setEmailMessage(null);
    setEmailError(null);

    const supabase = createSupabaseBrowserClient();

    const trimmedEmail = newEmail.trim().toLowerCase();

    if (!trimmedEmail) {
      setLoadingEmail(false);
      setEmailError("Please enter a valid email.");
      return;
    }

    if (trimmedEmail === email?.toLowerCase()) {
      setLoadingEmail(false);
      setEmailError("This is already your current email.");
      return;
    }

    const { error } = await supabase.auth.updateUser({
      email: trimmedEmail,
    });

    setLoadingEmail(false);

    if (error) {
      setEmailError(error.message);
      return;
    }

    setEmailMessage(
      "We sent a confirmation email to your new address. Please confirm it before the change takes effect.",
    );
  }

  async function handlePasswordUpdate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoadingPassword(true);
    setPasswordMessage(null);
    setPasswordError(null);

    if (newPassword.length < 8) {
      setLoadingPassword(false);
      setPasswordError("Your new password must be at least 8 characters.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setLoadingPassword(false);
      setPasswordError("Your passwords do not match.");
      return;
    }

    const supabase = createSupabaseBrowserClient();

    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    setLoadingPassword(false);

    if (error) {
      setPasswordError(error.message);
      return;
    }

    setPasswordMessage("Your password has been updated.");
    setNewPassword("");
    setConfirmPassword("");
  }

  async function handleSignOut() {
    setSigningOut(true);
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
            Manage your portal email, password, and account access.
          </p>

          <div className="mt-8 rounded-[24px] border border-black/10 bg-[#FBF8F2] p-6">
            <p className="sans text-xs uppercase tracking-[0.16em] text-black/45">
              Signed in as
            </p>
            <p className="mt-2 sans text-[16px] text-black/80">{email}</p>
          </div>

          <div className="mt-6 rounded-[24px] border border-black/10 bg-[#FBF8F2] p-6">
            <h2 className="serif text-2xl text-black">Change email</h2>

            <p className="mt-3 sans text-[15px] leading-[1.8] text-black/60">
              If you update your email, we’ll send a confirmation link to the
              new address before the change takes effect.
            </p>

            <form onSubmit={handleEmailUpdate} className="mt-5 space-y-4">
              <div>
                <label className="mb-2 block sans text-sm text-black/70">
                  New email
                </label>
                <input
                  type="email"
                  required
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-black outline-none transition focus:border-black/20"
                  placeholder="you@example.com"
                />
              </div>

              {emailError ? (
                <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {emailError}
                </div>
              ) : null}

              {emailMessage ? (
                <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                  {emailMessage}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={loadingEmail}
                className="inline-flex items-center justify-center rounded-full bg-[#4B5D44] px-6 py-3 text-white shadow-[0_14px_40px_rgba(75,93,68,0.25)] transition hover:bg-[#3E4E38] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loadingEmail ? "Saving..." : "Update email"}
              </button>
            </form>
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

              <div>
                <label className="mb-2 block sans text-sm text-black/70">
                  Confirm new password
                </label>
                <input
                  type="password"
                  required
                  minLength={8}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-black outline-none transition focus:border-black/20"
                  placeholder="Repeat your new password"
                />
              </div>

              {passwordError ? (
                <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {passwordError}
                </div>
              ) : null}

              {passwordMessage ? (
                <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                  {passwordMessage}
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
            <h2 className="serif text-2xl text-black">Sign out</h2>

            <p className="mt-3 sans text-[15px] leading-[1.8] text-black/60">
              Sign out of your Nomadissimi portal on this device.
            </p>

            <div className="mt-5">
              <button
                type="button"
                onClick={handleSignOut}
                disabled={signingOut}
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-black/70 transition hover:bg-[#FBF8F2] hover:text-black disabled:cursor-not-allowed disabled:opacity-60"
              >
                {signingOut ? "Signing out..." : "Sign out"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

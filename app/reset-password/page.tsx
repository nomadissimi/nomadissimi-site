"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/browser";

export default function ResetPasswordPage() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const supabase = createSupabaseBrowserClient();

    supabase.auth.getSession().then(({ data, error }) => {
      if (error || !data.session) {
        setError("This reset link is invalid or has expired.");
      }
      setCheckingSession(false);
    });
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const supabase = createSupabaseBrowserClient();

    const { error } = await supabase.auth.updateUser({
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    setSuccess(true);

    setTimeout(() => {
      router.push("/password-reset-success");
      router.refresh();
    }, 900);
  }

  return (
    <main className="min-h-screen bg-[#FBF8F2] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl rounded-[28px] border border-black/10 bg-white/70 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
        <p className="sans text-xs tracking-[0.22em] uppercase text-black/45">
          Nomadissimi portal
        </p>

        <h1 className="serif mt-3 text-3xl md:text-5xl font-semibold tracking-[0.01em] text-black leading-tight">
          Choose a new password
        </h1>

        <p className="mt-4 sans text-[16px] leading-[1.8] text-black/65">
          Set a new password for your portal account.
        </p>

        {checkingSession ? (
          <div className="mt-8 rounded-2xl border border-black/10 bg-[#FBF8F2] px-4 py-3 text-sm text-black/60">
            Checking your reset link...
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block sans text-sm text-black/70">
                New password
              </label>
              <input
                type="password"
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-black outline-none transition focus:border-black/20"
                placeholder="At least 8 characters"
              />
            </div>

            {error ? (
              <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            ) : null}

            {success ? (
              <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                Password updated. Taking you to the next step...
              </div>
            ) : null}

            <button
              type="submit"
              disabled={loading || !!error}
              className="inline-flex items-center justify-center rounded-full bg-[#4B5D44] px-6 py-3 text-white shadow-[0_14px_40px_rgba(75,93,68,0.25)] transition hover:bg-[#3E4E38] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Saving..." : "Save new password"}
            </button>
          </form>
        )}

        <div className="mt-8 sans text-sm text-black/55">
          <Link href="/login" className="hover:text-black/75">
            Back to login
          </Link>
        </div>
      </div>
    </main>
  );
}

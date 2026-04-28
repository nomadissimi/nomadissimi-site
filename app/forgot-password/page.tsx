"use client";

import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { createSupabaseBrowserClient } from "@/lib/supabase/browser";
import Link from "next/link";
import { House } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const supabase = createSupabaseBrowserClient();

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    setLoading(false);

    if (error) {
      console.error("resetPasswordForEmail error:", error);

      const message =
        typeof error === "object" && error !== null
          ? JSON.stringify(error, Object.getOwnPropertyNames(error), 2)
          : String(error);

      setError(message);
      return;
    }

    setSuccess(true);
  }

  return (
    <main className="min-h-screen bg-[#FBF8F2] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl rounded-[28px] border border-black/10 bg-white/70 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
        <p className="sans text-xs tracking-[0.22em] uppercase text-black/45">
          Nomadissimi portal
        </p>

        <h1 className="serif mt-3 text-3xl md:text-5xl font-semibold tracking-[0.01em] text-black leading-tight">
          Reset your password
        </h1>

        <p className="mt-4 sans text-[16px] leading-[1.8] text-black/65">
          Enter your email and we’ll send you a secure password reset link.
          Please make sure to use the same email you used when making your
          purchase. 
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block sans text-sm text-black/70">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-black outline-none transition focus:border-black/20"
              placeholder="you@example.com"
            />
          </div>

          {error ? (
            <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 whitespace-pre-wrap break-words">
              {error}
            </div>
          ) : null}

          {success ? (
            <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
              Password reset email sent. Check your inbox.
            </div>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center rounded-full bg-[#4B5D44] px-6 py-3 text-white shadow-[0_14px_40px_rgba(75,93,68,0.25)] transition hover:bg-[#3E4E38] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send reset link"}
          </button>

           <p className="sans text-sm leading-[1.7] text-black/45">
         If you don’t see the email within a couple minutes, please check
          your spam or promotions folder.
        </p>

        </form>

        <div className="mt-8">
          <Link
            href="/login"
            className="group inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#FBF8F2] px-4 py-2.5 sans text-sm text-black/70 transition hover:border-black/15 hover:bg-white hover:text-black"
          >
            <ChevronLeft
              aria-hidden="true"
              className="h-4 w-4 transition-transform group-hover:-translate-x-0.5"
            />
            <span>Back to login</span>
          </Link>
        </div>
      </div>
      <div className="mt-6 text-center">
  <Link
    href="/"
    className="inline-flex items-center gap-2 sans text-sm text-black/50 transition hover:text-black/70"
  >
    <House aria-hidden="true" className="h-4 w-4" />
    <span>Back to homepage</span>
  </Link>
</div>
    </main>
  );
}

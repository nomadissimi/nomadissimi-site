"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight, KeyRound } from "lucide-react";
import { createSupabaseBrowserClient } from "@/lib/supabase/browser";
import PasswordField from "@/components/ui/PasswordField";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/premium/library";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createSupabaseBrowserClient();

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim().toLowerCase(),
      password,
    });

    if (error) {
      setLoading(false);
      setError(error.message);
      return;
    }

    if (!data.session) {
      setLoading(false);
      setError("We couldn’t start your session. Please try again.");
      return;
    }

    window.location.assign(next);
  }

  return (
    <>
      <p className="mt-4 sans text-[16px] leading-[1.8] text-black/65">
        Access your private library, guides, and portal content. Use the same
        email address you used at checkout whenever possible.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div>
          <label className="mb-2 block sans text-sm text-black/70">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value.toLowerCase())}
            className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-black outline-none transition focus:border-black/20"
            placeholder="you@example.com"
            autoComplete="email"
          />
        </div>

        <PasswordField
          label="Password"
          name="password"
          value={password}
          onChange={setPassword}
          autoComplete="current-password"
          required
          placeholder="Your password"
          helperText="You can reveal your password if you want to double-check your typing."
        />

        {error ? (
          <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-[15px] leading-[1.55] text-red-700">
            {error}
          </div>
        ) : null}

        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center rounded-full bg-[#4B5D44] px-6 py-3 text-white shadow-[0_14px_40px_rgba(75,93,68,0.25)] transition hover:bg-[#3E4E38] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Log in"}
        </button>

        <p className="sans text-sm leading-[1.7] text-black/45">
          After login, we’ll take you straight into your private library.
        </p>
      </form>

      <div className="mt-8 space-y-3">
        <Link
          href="/create-account"
          className="group inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#FBF8F2] px-4 py-2.5 sans text-sm text-black/70 transition hover:border-black/15 hover:bg-white hover:text-black"
        >
          <ArrowRight
            aria-hidden="true"
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          />
          <span>Create your portal account</span>
        </Link>

        <div>
          <Link
            href="/forgot-password"
            className="group inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#FBF8F2] px-4 py-2.5 sans text-sm text-black/70 transition hover:border-black/15 hover:bg-white hover:text-black"
          >
            <KeyRound aria-hidden="true" className="h-4 w-4" />
            <span>Forgot your password?</span>
          </Link>
        </div>
      </div>
    </>
  );
}


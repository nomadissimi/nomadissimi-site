"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/browser";
import PasswordField from "@/components/ui/PasswordField";
import { ArrowRight, KeyRound } from "lucide-react";

export default function CreateAccountForm() {
  const searchParams = useSearchParams();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const emailFromUrl = searchParams.get("email");
    if (emailFromUrl) {
      setEmail(emailFromUrl.trim().toLowerCase());
    }
  }, [searchParams]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail) {
      setLoading(false);
      setError("Please enter your email address.");
      return;
    }

    if (password.length < 8) {
      setLoading(false);
      setError("Your password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setLoading(false);
      setError("Your passwords do not match yet.");
      return;
    }

    const supabase = createSupabaseBrowserClient();

    const { data, error } = await supabase.auth.signUp({
      email: normalizedEmail,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/email-confirmed`,
      },
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    const identities = data.user?.identities ?? [];

    if (data.user && identities.length === 0) {
      setError(
        "An account already exists with this email address. Please log in instead, or reset your password if needed.",
      );
      return;
    }

    setSuccess(true);
    setEmail(normalizedEmail);
  }

  return (
    <>
      <p className="mt-4 sans text-[16px] leading-[1.8] text-black/65">
        Please use the same email address you used at checkout so your purchases can
        appear inside your private library.
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
          autoComplete="new-password"
          required
          minLength={8}
          placeholder="At least 8 characters"
          helperText="Use at least 8 characters and choose something you can comfortably retype."
        />

        <PasswordField
          label="Confirm password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={setConfirmPassword}
          autoComplete="new-password"
          required
          minLength={8}
          placeholder="Repeat your password"
        />

        {error ? (
          <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-[15px] leading-[1.55] text-red-700">
            {error}
          </div>
        ) : null}

        {success ? (
          <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-[15px] leading-[1.55] text-green-700">
            Your account has been created successfully. Check your email to
            confirm your address, then log in when you’re ready.
          </div>
        ) : null}

        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center rounded-full bg-[#4B5D44] px-6 py-3 text-white shadow-[0_14px_40px_rgba(75,93,68,0.25)] transition hover:bg-[#3E4E38] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Creating account..." : "Create account"}
        </button>
      </form>

      <div className="mt-8 space-y-3">
        <Link
          href="/login"
          className="group inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#FBF8F2] px-4 py-2.5 sans text-sm text-black/70 transition hover:border-black/15 hover:bg-white hover:text-black"
        >
          <ArrowRight
            aria-hidden="true"
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          />
          <span>Already have an account? Log in</span>
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

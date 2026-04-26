"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/browser";
import PasswordField from "@/components/ui/PasswordField";

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

    // Supabase duplicate-email behavior can still return a "user" object.
    // If identities is empty, this usually means the user already exists.
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
        Use the same email address you used at checkout so your purchases can
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
          <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        ) : null}

        {success ? (
          <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
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

      <div className="mt-8 sans text-sm text-black/55 space-y-2">
        <div>
          <Link href="/login" className="hover:text-black/75">
            Already have an account? Log in
          </Link>
        </div>
        <div>
          <Link href="/forgot-password" className="hover:text-black/75">
            Forgot your password?
          </Link>
        </div>
      </div>
    </>
  );
}

import { Suspense } from "react";
import LoginForm from "./LoginForm";
import Link from "next/link";
import { House } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#FBF8F2] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl rounded-[28px] border border-black/10 bg-white/70 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
        <p className="sans text-xs tracking-[0.22em] uppercase text-black/45">
          Nomadissimi portal
        </p>

        <h1 className="serif mt-3 text-3xl md:text-5xl font-semibold tracking-[0.01em] text-black leading-tight">
          Log in
        </h1>

        <Suspense
          fallback={
            <div className="mt-8 rounded-2xl border border-black/10 bg-[#FBF8F2] px-4 py-3 text-sm text-black/60">
              Loading login...
            </div>
          }
        >
          <LoginForm />
        </Suspense>
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

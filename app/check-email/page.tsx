// app/check-email/page.tsx
import Link from "next/link";

export default function CheckEmailPage() {
  return (
    <main className="min-h-[70vh] bg-[#FBF8F2]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <p className="sans text-xs tracking-[0.22em] uppercase text-black/50">
          Nomadissimi
        </p>

        <h1 className="serif mt-4 text-4xl md:text-5xl font-semibold tracking-[0.01em]">
          One more step...
        </h1>

        <div className="mt-6 h-px w-16 bg-[#C9A86A]/40" />

        <p className="sans mt-4 text-lg md:text-xl text-black/70 leading-relaxed">
          We’ve sent you a confirmation email.
          <br />
          Please check your inbox and click the link to confirm your
          subscription.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          {/* Secondary */}
          <Link
            href="/"
            className="
      inline-flex items-center justify-center
      rounded-full
      px-7 py-3
      sans text-sm tracking-wide
      text-black/70
      bg-white
      shadow-[0_8px_24px_rgba(0,0,0,0.06)]
      hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)]
      hover:text-black
      transition-all duration-300
    "
          >
            Back to Home
          </Link>

          {/* Soft primary */}
          <Link
            href="/#packages"
            className="
      inline-flex items-center justify-center
      rounded-full
      px-8 py-3
      sans text-sm tracking-wide
      text-[#4B5D44]
      border border-[#4B5D44]/30
      hover:bg-[#4B5D44]/5
      transition-all duration-300
    "
          >
            Explore Visa Packages
          </Link>
        </div>

        <p className="sans mt-6 text-sm text-black/55">
          If you don’t see it within a couple minutes, please check your
          Promotions or Spam folder.
        </p>
      </div>
    </main>
  );
}

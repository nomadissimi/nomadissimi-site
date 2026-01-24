// app/thanks/page.tsx
import Link from "next/link";

export default function ThanksPage() {
  return (
    <main className="min-h-[70vh] bg-[#FBF8F2]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <p className="sans text-xs tracking-[0.22em] uppercase text-black/50">
          Nomadissimi
        </p>

        <h1 className="serif mt-4 text-4xl md:text-5xl font-semibold tracking-[0.01em]">
          You’re in.
        </h1>

        {/* subtle editorial divider */}
        <div className="mt-6 h-px w-16 bg-[#C9A86A]/40" />

        <p className="sans mt-4 text-lg md:text-xl text-black/70 leading-relaxed">
          Thanks for confirming your email. Your free starter guide is on its
          way to your inbox.
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

          {/* Primary */}
          <Link
            href="/#packages"
            className="
      inline-flex items-center justify-center
      rounded-full
      px-8 py-3
      sans text-sm tracking-wide
      text-white
      bg-[#4B5D44]
      shadow-[0_14px_40px_rgba(75,93,68,0.35)]
      hover:shadow-[0_20px_60px_rgba(75,93,68,0.45)]
      hover:-translate-y-[1px]
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

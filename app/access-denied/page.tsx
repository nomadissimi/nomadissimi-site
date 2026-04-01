import Link from "next/link";

export default function AccessDeniedPage() {
  return (
    <main className="min-h-screen bg-[#FBF8F2] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl rounded-[28px] border border-black/10 bg-white/70 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
        <p className="sans text-xs tracking-[0.22em] uppercase text-black/45">
          Nomadissimi portal
        </p>

        <h1 className="serif mt-3 text-3xl md:text-5xl font-semibold tracking-[0.01em] text-black leading-tight">
          This guide is not included in your access
        </h1>

        <p className="mt-4 max-w-xl sans text-[16px] leading-[1.8] text-black/65">
          You’re signed in, but this specific guide is not currently included in
          your portal access.
        </p>

        <div className="mt-7 rounded-2xl border border-black/10 bg-[#FBF8F2] px-5 py-4">
          <p className="sans text-[15px] leading-[1.75] text-black/70">
            If you believe this is a mistake, return to your private library
            first and double-check your available materials. If something still
            looks off, contact us and we’ll help.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/premium/library"
            className="inline-flex items-center justify-center rounded-full bg-[#4B5D44] px-6 py-3 text-white shadow-[0_14px_40px_rgba(75,93,68,0.25)] transition hover:bg-[#3E4E38]"
          >
            Back to your private library
          </Link>

          <Link
            href="/contact"
            className="sans text-sm text-black/55 transition hover:text-black/75"
          >
            Contact support →
          </Link>
        </div>
      </div>
    </main>
  );
}

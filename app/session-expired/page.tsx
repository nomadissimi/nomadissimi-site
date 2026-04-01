import Link from "next/link";

export default function SessionExpiredPage() {
  return (
    <main className="min-h-screen bg-[#FBF8F2] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl rounded-[28px] border border-black/10 bg-white/70 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
        <p className="sans text-xs tracking-[0.22em] uppercase text-black/45">
          Nomadissimi portal
        </p>

        <h1 className="serif mt-3 text-3xl md:text-5xl font-semibold tracking-[0.01em] text-black leading-tight">
          This session has expired
        </h1>

        <p className="mt-4 max-w-xl sans text-[16px] leading-[1.8] text-black/65">
          Your portal access may have been signed out because a newer device was
          used.
        </p>

        <div className="mt-7 rounded-2xl border border-black/10 bg-[#FBF8F2] px-5 py-4">
          <p className="sans text-[15px] leading-[1.75] text-black/70">
            For content protection, portal access is limited to 2 active
            devices. If a newer device signs in, an older session may be signed
            out automatically.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-full bg-[#4B5D44] px-6 py-3 text-white shadow-[0_14px_40px_rgba(75,93,68,0.25)] transition hover:bg-[#3E4E38]"
          >
            Log in again
          </Link>

          <Link
            href="/account"
            className="sans text-sm text-black/55 transition hover:text-black/75"
          >
            Go to account →
          </Link>
        </div>
      </div>
    </main>
  );
}

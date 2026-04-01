import Link from "next/link";

export default function EmailConfirmedPage() {
  return (
    <main className="min-h-screen bg-[#FBF8F2] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl rounded-[28px] border border-black/10 bg-white/70 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
        <p className="sans text-xs tracking-[0.22em] uppercase text-black/45">
          Nomadissimi portal
        </p>

        <h1 className="serif mt-3 text-3xl md:text-5xl font-semibold tracking-[0.01em] text-black leading-tight">
          Your email is confirmed
        </h1>

        <p className="mt-4 max-w-xl sans text-[16px] leading-[1.8] text-black/65">
          Your portal account is now ready. You can log in and access your private library.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-full bg-[#4B5D44] px-6 py-3 text-white shadow-[0_14px_40px_rgba(75,93,68,0.25)] transition hover:bg-[#3E4E38]"
          >
            Log in
          </Link>

          <Link
            href="/premium/library"
            className="sans text-sm text-black/55 transition hover:text-black/75"
          >
            Go to your library →
          </Link>
        </div>

        
      </div>
    </main>
  );
}
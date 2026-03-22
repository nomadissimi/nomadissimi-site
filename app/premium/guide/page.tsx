export default function PremiumGuidePage() {
  return (
    <main className="min-h-screen bg-[#FBF8F2] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-[28px] border border-black/10 bg-white/70 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
        <p className="sans text-xs tracking-[0.22em] uppercase text-black/45">
          Private access
        </p>

        <h1 className="serif mt-3 text-3xl md:text-5xl font-semibold tracking-[0.01em] text-black">
          Nomadissimi Premium Guide
        </h1>

        <p className="sans mt-4 text-[16px] leading-[1.8] text-black/65">
          You’re in. This is your protected guide area.
        </p>

        <div className="mt-8 rounded-2xl border border-black/10 bg-[#FBF8F2] px-5 py-4">
          <p className="sans text-[15px] leading-[1.8] text-black/70">
            We’ll replace this placeholder with your actual guide content next.
          </p>
        </div>
      </div>
    </main>
  );
}

// app/checkout/cancel/page.tsx
import Link from "next/link";

export default function CancelPage() {
  return (
    <section className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-[#4B5D44]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-[#C9A86A]/15 blur-3xl" />
      </div>

      <div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-[#FBF8F2] shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
        {/* soft top accent */}
        <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#C9A86A]/70 to-transparent" />

        <div className="px-7 py-8 sm:px-10 sm:py-10">
          <p className="sans text-xs tracking-[0.22em] uppercase text-black/45">
            No worries — nothing was charged
          </p>

          <h1 className="serif mt-3 text-3xl md:text-4xl font-semibold tracking-[0.01em] text-[#1A1A1A]">
            Want to come back to it?
          </h1>

          <p className="sans mt-4 text-[15.5px] md:text-[16.5px] leading-[1.85] text-black/70 max-w-2xl">
            Your checkout didn’t go through, and{" "}
            <span className="text-black/80">
              no payment was taken. If Italy is still on your mind
            </span>
            , you can return when you’re ready, and we’ll be here.
          </p>

          {/* gentle “why buy” callout */}
          <div className="mt-6 rounded-2xl border border-black/10 bg-white/60 px-5 py-4">
            <p className="sans text-[14.5px] leading-[1.75] text-black/70">
              Most people who purchase do it because
              <span className="font-semibold text-black/80">
                {" "}
                they want clarity without trial-and-error.
              </span>{" "}
              If you’d like a calm, structured path (with insider knowledge),
              you’re in the right place.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/#packages"
              className="inline-flex items-center justify-center text-center whitespace-nowrap
    rounded-full px-7 py-3
    serif text-[18px] font-semibold tracking-[0.08em]
    bg-[#4B5D44] text-white
    shadow-[0_14px_40px_rgba(75,93,68,0.28)]
    hover:bg-[#3E4E38] hover:-translate-y-[1px]
    transition-all duration-300"
            >
              Return to packages
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full px-7 py-3
    serif text-[18px] font-semibold tracking-[0.08em]
    bg-white/80 text-[#4B5D44]
    border border-black/10
    hover:bg-white hover:-translate-y-[1px]
    transition-all duration-300"
            >
              Homepage
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-7 py-3
                sans text-[14px] font-semibold tracking-[0.14em] uppercase
                text-black/60 hover:text-black/75
                transition"
            >
              Have a question? Contact us →
            </Link>
          </div>

          {/* micro reassurance */}
          <p className="sans mt-6 text-xs text-black/45">
            Tip: If the checkout failed because of a bank/security prompt, try
            again in an incognito window or with another payment method.
          </p>
        </div>
      </div>
    </section>
  );
}

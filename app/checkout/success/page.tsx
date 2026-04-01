// app/checkout/success/page.tsx
import Link from "next/link";

export default function SuccessPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-18">
      <div
        className="
          relative overflow-hidden rounded-[28px]
          border border-black/10
          bg-[#FBF8F2]
          shadow-[0_24px_80px_rgba(0,0,0,0.08)]
        "
      >
        {/* subtle ambient glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#4B5D44]/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#C9A86A]/15 blur-3xl" />
        </div>

        <div className="relative px-7 py-8 sm:px-10 sm:py-10">
          {/* Eyebrow */}
          <p className="sans text-xs tracking-[0.22em] uppercase text-black/45">
            Order confirmed • you’re in!
          </p>

          <h1 className="serif mt-3 text-3xl md:text-4xl font-semibold tracking-[0.01em] text-black">
            Welcome! Your Italian chapter starts now.
          </h1>

          <p className="sans mt-4 text-[16px] md:text-[17px] leading-[1.75] text-black/65 max-w-2xl">
            We’ve received your order and emailed you with next steps to access
            your private portal. If you don’t see the email within a few
            minutes, check your spam or promotions folder.
          </p>

          <p className="sans mt-4 text-[16px] md:text-[17px] leading-[1.75] text-black/65 max-w-2xl">
            Use the same email address you used at checkout when creating your
            portal account, and your purchases will appear automatically inside
            your private library.
          </p>

          <p className="sans mt-4 text-[16px] md:text-[17px] leading-[1.75] text-black/65 max-w-2xl">
            See you inside...
          </p>

          {/* Cozy reassurance */}
          <div className="mt-7 rounded-2xl border border-black/10 bg-white/65 px-5 py-4 shadow-[0_10px_28px_rgba(0,0,0,0.05)]">
            <p className="sans text-[15px] md:text-[16px] text-black/75 leading-[1.7]">
              Depending on what you purchased, your deliverables may include
              private portal access, PDF resources, and/or separate consultation
              scheduling emails. If your package includes portal materials (most
              do), just create your account using the same email you used at
              checkout and your access will appear inside your private library
              automatically.
            </p>
          </div>

          {/* Single CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <Link
              href="/create-account"
              className="
      inline-flex items-center justify-center text-center whitespace-nowrap
      rounded-full px-7 py-3
      serif text-[18px] font-semibold tracking-[0.08em]
      bg-[#4B5D44] text-white
      shadow-[0_14px_40px_rgba(75,93,68,0.28)]
      hover:bg-[#3E4E38] hover:-translate-y-[1px]
      transition-all duration-300
    "
            >
              Create your portal account
            </Link>

            <Link
              href="/login"
              className="
      inline-flex items-center justify-center text-center whitespace-nowrap
      rounded-full px-6 py-3
      sans text-[15px] text-black/70
      border border-black/10 bg-white/70
      hover:bg-white hover:text-black
      transition-all duration-300
    "
            >
              Log in
            </Link>

            <Link
              href="/contact"
              className="sans text-xs tracking-[0.22em] uppercase text-black/55 hover:text-[#4B5D44] transition"
            >
              Need help? Contact us →
            </Link>
          </div>

          <p className="sans mt-6 text-sm text-black/50 leading-relaxed">
            FYI: some banks add an extra verification step. If yours did, your
            portal access email may arrive a few minutes later than usual.
          </p>
        </div>
      </div>
    </section>
  );
}

// components/blog/ConsultCTA.tsx
import Link from "next/link";

type Props = {
  title?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function ConsultCTA({
  title = "Ready to move to Italy?",
  body = "See you inside.",
  primaryLabel = "Book a consultation",
  primaryHref = "/#packages",
  secondaryLabel = "Explore visa packages",
  secondaryHref = "/#packages",
}: Props) {
  return (
    <section className="not-prose my-6">
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

        {/* CONTENT */}
        <div className="relative px-8 pt-4 pb-7 sm:px-10 sm:pt-5 sm:pb-8">
          <h3 className="not-prose serif text-[20px] sm:text-[24px] leading-[1.15] tracking-[-0.008em] text-[#4B5D44]">
            {title}
          </h3>

          <div className="mt-4 h-px w-14 bg-[#C9A86A]/60" />

          <p className="sans mt-3 text-[17px] text-black/63">{body}</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            {/* PRIMARY BUTTON */}
            <Link
              href={primaryHref}
              className="
                inline-flex items-center justify-center
                rounded-full px-7 py-3
                sans text-sm tracking-wide
                !text-white no-underline
                bg-[#4B5D44]
                shadow-[0_14px_40px_rgba(75,93,68,0.3)]
                hover:bg-[#415239]
                hover:shadow-[0_18px_60px_rgba(75,93,68,0.38)]
                hover:-translate-y-[1px]
                transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-[#4B5D44]/40
              "
            >
              {primaryLabel}
            </Link>

            {/* SECONDARY BUTTON */}
            <Link
              href={secondaryHref}
              className="
                inline-flex items-center justify-center
                rounded-full px-7 py-3
                sans text-sm tracking-wide
                text-[#4B5D44] no-underline
                bg-white/80
                border border-black/10
                shadow-[0_10px_28px_rgba(0,0,0,0.06)]
                hover:bg-white
                hover:shadow-[0_14px_36px_rgba(0,0,0,0.08)]
                transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-[#C9A86A]/35
              "
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

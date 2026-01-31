// components/blog/CTA.tsx
import Link from "next/link";

type Props = {
  title?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
};

export default function CTA({
  title = "Prefer to start quietly?",
  body = "Get the starter guide with realistic timelines, requirements, and common mistakes to avoid.",
  primaryLabel = "Get the free guide",
  primaryHref = "/#guide",
}: Props) {
  return (
    <section className="not-prose my-10">
      <div
        className="
          rounded-[24px]
          bg-[#F3EEE6]
          border border-black/10
          shadow-[0_18px_60px_rgba(0,0,0,0.06)]
          p-6 sm:p-7
        "
      >
        <h3 className="serif text-[38px] sm:text-[44px] leading-[1.05] text-black">
          {title}
        </h3>

        <div className="mt-4 h-px w-12 bg-[#C9A86A]/55" />

        <p className="sans mt-4 text-[16px] leading-[1.7] text-black/70 max-w-2xl">
          {body}
        </p>

        <div className="mt-6">
          <Link
            href={primaryHref}
            className="
              inline-flex items-center justify-center
              rounded-full px-6 py-3
              sans text-sm tracking-wide
              text-[#4B5D44] no-underline
              bg-white/80
              border border-black/10
              shadow-[0_10px_28px_rgba(0,0,0,0.06)]
              hover:bg-white
              hover:shadow-[0_14px_36px_rgba(0,0,0,0.08)]
              transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-[#4B5D44]/25
            "
          >
            {primaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

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
  title = "Want a clearer next step?",
  body = "Nomadissimi helps you understand where you stand, what route fits, and how to move forward without avoidable mistakes.",
  primaryLabel = "Explore visa packages",
  primaryHref = "/#packages",
  secondaryLabel = "Or start with the free guide",
  secondaryHref = "/#guide",
}: Props) {
  return (
    <section className="not-prose my-10">
      <div
        className="
          rounded-[26px]
          border border-black/10
          bg-[#FBF8F2]
          shadow-[0_18px_60px_rgba(0,0,0,0.06)]
          px-6 py-6 sm:px-8 sm:py-7
        "
      >
        <h3 className="serif text-[34px] sm:text-[42px] leading-[1.06] tracking-[-0.012em] text-[#4B5D44]">
          {title}
        </h3>

        <div className="mt-4 h-px w-14 bg-[#C9A86A]/60" />

        <p className="sans mt-4 max-w-2xl text-[16px] sm:text-[17px] leading-[1.75] text-black/72">
          {body}
        </p>

        <div className="mt-6">
          <Link
            href={primaryHref}
            className="
              inline-flex items-center justify-center
              rounded-full px-7 py-3
              sans text-[15px] tracking-wide
              !text-white no-underline
              bg-[#4B5D44]
              shadow-[0_14px_40px_rgba(75,93,68,0.24)]
              hover:bg-[#415239]
              hover:shadow-[0_18px_52px_rgba(75,93,68,0.30)]
              transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-[#4B5D44]/35
            "
          >
            {primaryLabel}
          </Link>

          {(secondaryLabel || secondaryHref) && (
            <div className="mt-4">
              <Link
                href={secondaryHref}
                className="
                  sans text-[15px] text-[#4B5D44]/88 no-underline
                  underline underline-offset-4
                  hover:text-[#4B5D44]
                  transition-colors
                "
              >
                {secondaryLabel}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
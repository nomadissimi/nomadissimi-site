import Link from "next/link";

type BlogCTAVariant = "soft" | "highIntent";

type Props = {
  variant?: BlogCTAVariant;
  title?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function BlogCTA({
  variant = "soft",
  title,
  body,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: Props) {
  const isHighIntent = variant === "highIntent";

  const resolved = isHighIntent
    ? {
        title: title ?? "Want a clearer next step?",
        body:
          body ??
          "Nomadissimi helps you understand where you stand, what route fits, and how to move forward without avoidable mistakes.",
        primaryLabel: primaryLabel ?? "Explore visa packages",
        primaryHref: primaryHref ?? "/#packages",
        secondaryLabel: secondaryLabel ?? "Or start with the free guide",
        secondaryHref: secondaryHref ?? "/#guide",
      }
    : {
        title: title ?? "Prefer to start quietly?",
        body:
          body ??
          "Get the free starter guide with practical first steps, common mistakes, and a clearer sense of what moving to Italy really involves.",
        primaryLabel: primaryLabel ?? "Get the free guide",
        primaryHref: primaryHref ?? "/#guide",
        secondaryLabel: secondaryLabel ?? "",
        secondaryHref: secondaryHref ?? "",
      };

  return (
    <section className="not-prose my-10">
      <div
        className={[
          "rounded-[26px] border border-black/10",
          "shadow-[0_18px_60px_rgba(0,0,0,0.06)]",
          "px-6 py-6 sm:px-8 sm:py-7",
          isHighIntent ? "bg-[#FBF8F2]" : "bg-[#F3EEE6]",
        ].join(" ")}
      >
        <h3
          className={[
            "serif tracking-[-0.012em] leading-[1.06]",
            "text-[34px] sm:text-[42px]",
            isHighIntent ? "text-[#4B5D44]" : "text-[#4B5D44]",
          ].join(" ")}
        >
          {resolved.title}
        </h3>

        <div className="mt-4 h-px w-14 bg-[#C9A86A]/60" />

        <p className="sans mt-4 max-w-2xl text-[16px] sm:text-[17px] leading-[1.75] text-black/72">
          {resolved.body}
        </p>

        <div className="mt-6">
          <Link
            href={resolved.primaryHref}
            className={[
              "inline-flex items-center justify-center rounded-full",
              "px-7 py-3 sans text-[15px] tracking-wide no-underline",
              "transition-all duration-300 focus:outline-none",
              isHighIntent
                ? "!text-white bg-[#4B5D44] shadow-[0_14px_40px_rgba(75,93,68,0.24)] hover:bg-[#415239] hover:shadow-[0_18px_52px_rgba(75,93,68,0.30)] focus:ring-2 focus:ring-[#4B5D44]/35"
                : "text-[#4B5D44] bg-white/88 border border-black/10 shadow-[0_10px_28px_rgba(0,0,0,0.06)] hover:bg-white hover:shadow-[0_14px_34px_rgba(0,0,0,0.08)] focus:ring-2 focus:ring-[#4B5D44]/25",
            ].join(" ")}
          >
            {resolved.primaryLabel}
          </Link>

          {isHighIntent && resolved.secondaryLabel && resolved.secondaryHref ? (
            <div className="mt-4">
              <Link
                href={resolved.secondaryHref}
                className="sans text-[15px] text-[#4B5D44]/88 no-underline underline underline-offset-4 hover:text-[#4B5D44] transition-colors"
              >
                {resolved.secondaryLabel}
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
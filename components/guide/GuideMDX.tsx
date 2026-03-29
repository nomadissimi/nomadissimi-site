import { ReactNode } from "react";

type BoxProps = {
  title?: string;
  children: ReactNode;
};

export function GuideCallout({ title, children }: BoxProps) {
  return (
    <div className="nm-guide-callout">
      {title ? <div className="nm-guide-callout-title">{title}</div> : null}
      <div className="guide-prose max-w-none">{children}</div>
    </div>
  );
}

export function GuideTip({ title, children }: BoxProps) {
  return (
    <div className="nm-guide-tip">
      {title ? (
        <div className="sans text-xs tracking-[0.18em] uppercase text-[#4B5D44]/70">
          {title}
        </div>
      ) : null}
      <div className={`${title ? "mt-2" : ""} guide-prose max-w-none`}>
        {children}
      </div>
    </div>
  );
}

export function GuideWarning({ title, children }: BoxProps) {
  return (
    <div className="nm-guide-warning">
      {title ? (
        <div className="sans text-xs tracking-[0.18em] uppercase text-[#9B6B1E]/80">
          {title}
        </div>
      ) : null}
      <div className={`${title ? "mt-3" : ""} guide-prose max-w-none`}>
        {children}
      </div>
    </div>
  );
}

export function GuideDivider() {
  return <div className="nm-guide-divider" />;
}

export function GuideCard({ title, children }: BoxProps) {
  return (
    <div className="rounded-[24px] border border-black/10 bg-white/80 px-5 py-5 shadow-[0_12px_30px_rgba(0,0,0,0.04)] my-6">
      {title ? (
        <h3 className="serif text-[24px] font-semibold text-[#2B2B2B] mb-3">
          {title}
        </h3>
      ) : null}
      <div className="guide-prose max-w-none">{children}</div>
    </div>
  );
}

type ListProps = {
  title?: string;
  items: ReactNode[];
};

export function GuideChecklist({
  title = "Checklist",
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-[26px] border border-black/10 bg-white/88 px-5 py-5 shadow-[0_12px_30px_rgba(0,0,0,0.04)] my-6">
      <div className="sans text-xs tracking-[0.18em] uppercase text-[#4B5D44]/70">
        {title}
      </div>

      <div className="mt-4 guide-checklist max-w-none">{children}</div>
    </div>
  );
}

export function GuideSteps({
  title = "Step by step",
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-[24px] border border-[#D8D1C5] bg-[#FFFCF7] px-5 py-5 shadow-[0_12px_30px_rgba(0,0,0,0.04)] my-6">
      <div className="sans text-xs tracking-[0.18em] uppercase text-[#7E7566]">
        {title}
      </div>

      <div className="mt-4 guide-prose max-w-none">{children}</div>
    </div>
  );
}

export function GuideRecap({
  title = "Quick recap",
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-[24px] border border-[#C9A86A]/35 bg-gradient-to-br from-[#FFFAF2] to-[#FFF4E6] px-5 py-5 shadow-[0_14px_34px_rgba(201,168,106,0.10)] my-6">
      <div className="sans text-xs tracking-[0.18em] uppercase text-[#9B6B1E]/80">
        {title}
      </div>

      <div className="mt-4 guide-prose max-w-none">{children}</div>
    </div>
  );
}

export function GuideBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#C9A86A]/45 bg-[#FFF8EE] px-3 py-1 sans text-[11px] uppercase tracking-[0.14em] text-[#7E7566]">
      {children}
    </span>
  );
}

export function GuideNote({ title, children }: BoxProps) {
  return (
    <div className="rounded-[22px] border border-[#D8D1C5] bg-[#FBF8F2] px-5 py-5 shadow-[0_10px_24px_rgba(0,0,0,0.03)] my-6">
      {title ? (
        <div className="sans text-xs tracking-[0.18em] uppercase text-[#7E7566]">
          {title}
        </div>
      ) : null}
      <div className={`${title ? "mt-3" : ""} guide-prose max-w-none`}>
        {children}
      </div>
    </div>
  );
}

export function GuideCompare({
  leftTitle,
  rightTitle,
  left,
  right,
}: {
  leftTitle: string;
  rightTitle: string;
  left: ReactNode;
  right: ReactNode;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 my-6">
      <div className="rounded-[24px] border border-black/10 bg-white/85 px-5 py-5 shadow-[0_12px_30px_rgba(0,0,0,0.04)]">
        <h3 className="serif text-[24px] font-semibold text-[#2B2B2B]">
          {leftTitle}
        </h3>
        <div className="mt-3 sans text-[16px] leading-[1.9] text-black/80">
          {left}
        </div>
      </div>

      <div className="rounded-[24px] border border-black/10 bg-white/85 px-5 py-5 shadow-[0_12px_30px_rgba(0,0,0,0.04)]">
        <h3 className="serif text-[24px] font-semibold text-[#2B2B2B]">
          {rightTitle}
        </h3>
        <div className="mt-3 sans text-[16px] leading-[1.9] text-black/80">
          {right}
        </div>
      </div>
    </div>
  );
}

export function GuideTOC({
  title = "In this chapter",
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-[24px] border border-[#D8D1C5] bg-gradient-to-br from-[#FBF8F2] to-[#F7F2E8] px-5 py-5 shadow-[0_12px_30px_rgba(0,0,0,0.04)] my-6">
      <div className="sans text-xs tracking-[0.18em] uppercase text-[#7E7566]">
        {title}
      </div>
      <div className="mt-4 sans text-[16px] leading-[1.9] text-black/80">
        {children}
      </div>
    </div>
  );
}

export function GuideStat({
  label,
  value,
}: {
  label: string;
  value: ReactNode;
}) {
  return (
    <div className="inline-flex flex-col rounded-[20px] border border-[#C9A86A]/35 bg-[#FFF8EE] px-4 py-3 shadow-[0_10px_24px_rgba(201,168,106,0.08)] my-3">
      <span className="sans text-[11px] uppercase tracking-[0.14em] text-[#7E7566]">
        {label}
      </span>
      <span className="serif mt-1 text-[28px] leading-none text-[#2B2B2B]">
        {value}
      </span>
    </div>
  );
}

export function GuideColumns({ children }: { children: ReactNode }) {
  return <div className="grid gap-4 md:grid-cols-2 my-6">{children}</div>;
}

export function GuideQuote({
  children,
  author,
}: {
  children: ReactNode;
  author?: ReactNode;
}) {
  return (
    <figure className="rounded-[24px] border border-[#D8D1C5] bg-gradient-to-br from-[#FFF9F1] to-[#FFF4E6] px-6 py-6 shadow-[0_12px_30px_rgba(201,168,106,0.08)] my-6">
      <blockquote className="serif text-[28px] leading-[1.45] text-[#2B2B2B]">
        {children}
      </blockquote>
      {author ? (
        <figcaption className="mt-4 sans text-sm tracking-[0.08em] uppercase text-[#7E7566]">
          {author}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function GuideIconRow({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 rounded-[22px] border border-black/10 bg-white/85 px-5 py-5 shadow-[0_10px_24px_rgba(0,0,0,0.04)] my-6">
      <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EEF5EC] text-[#4B5D44] text-[20px]">
        {icon}
      </div>
      <div>
        <h3 className="serif text-[24px] font-semibold text-[#2B2B2B]">
          {title}
        </h3>
        <div className="mt-3 guide-prose max-w-none">{children}</div>
      </div>
    </div>
  );
}

export function GuideMiniCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-[20px] border border-black/10 bg-[#FFFCF7] px-4 py-4 shadow-[0_10px_24px_rgba(0,0,0,0.03)]">
      <h4 className="serif text-[20px] font-semibold text-[#2B2B2B]">
        {title}
      </h4>
      <div className="mt-2 sans text-[15px] leading-[1.85] text-black/80">
        {children}
      </div>
    </div>
  );
}

export function GuideSectionIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-[28px] border border-[#D8D1C5] bg-gradient-to-br from-[#FBF8F2] to-[#F7F2E8] px-6 py-6 shadow-[0_12px_34px_rgba(0,0,0,0.05)] my-6">
      {eyebrow ? (
        <div className="sans text-xs tracking-[0.18em] uppercase text-[#7E7566]">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="serif mt-3 text-[30px] md:text-[38px] leading-[1.12] font-semibold text-[#2B2B2B]">
        {title}
      </h2>
      <div className="mt-4 sans text-[16px] leading-[1.9] text-black/80">
        {children}
      </div>
    </div>
  );
}

export function GuideHighlight({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-[10px] bg-[#FFF4DE] px-2 py-1 text-black/90">
      {children}
    </span>
  );
}

export function GuideSpacer({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const map = {
    sm: "h-4",
    md: "h-8",
    lg: "h-12",
  };

  return <div className={map[size]} aria-hidden="true" />;
}

export function GuideImageCard({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="nm-figure my-6">
      <img src={src} alt={alt} />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

export function GuideFlourish() {
  return (
    <div className="my-8 flex items-center justify-center" aria-hidden="true">
      <div className="flex items-center gap-3">
        <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#C9A86A]/70" />
        <span className="text-[#C9A86A] text-[18px]">✦</span>
        <span className="h-px w-16 bg-gradient-to-r from-[#C9A86A]/70 via-[#4B5D44]/45 to-transparent" />
        <span className="text-[#4B5D44]/80 text-[14px]">❦</span>
        <span className="h-px w-10 bg-gradient-to-r from-[#C9A86A]/70 to-transparent" />
      </div>
    </div>
  );
}

export function GuideIcon({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#C9A86A]/40 bg-[#FFF8EE] text-[#4B5D44] shadow-[0_10px_24px_rgba(201,168,106,0.10)]">
      <span className="text-[20px] leading-none">{children}</span>
    </span>
  );
}

export function GuideHeroAccent({
  eyebrow,
  title,
  subtitle,
  icon,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden rounded-[30px] border border-[#D8D1C5] bg-gradient-to-br from-[#FFFCF7] via-[#FBF8F2] to-[#F6F1E8] px-7 py-7 shadow-[0_18px_50px_rgba(0,0,0,0.05)] my-6">
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#C9A86A]/8 blur-3xl" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-20 w-20 rounded-full bg-[#4B5D44]/6 blur-3xl" />

      {eyebrow ? (
        <div className="sans text-xs tracking-[0.18em] uppercase text-[#7E7566]">
          {eyebrow}
        </div>
      ) : null}

      <div className="mt-3 flex items-start gap-4">
        {icon ? (
          <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C9A86A]/35 bg-[#FFF8EE] text-[#4B5D44]">
            <span className="text-[16px] leading-none">{icon}</span>
          </div>
        ) : null}

        <div className="min-w-0">
          <h2 className="serif text-[32px] md:text-[42px] leading-[1.08] font-semibold text-[#2B2B2B]">
            {title}
          </h2>

          {subtitle ? (
            <div className="mt-3 sans text-[16px] leading-[1.85] text-black/72 max-w-3xl">
              {subtitle}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function GuideStamp({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center justify-center rounded-full border border-dashed border-[#C9A86A]/55 px-4 py-2 text-[#9B6B1E]/85 bg-[#FFF8EE] shadow-[0_8px_20px_rgba(201,168,106,0.08)] rotate-[-4deg]">
      <span className="sans text-[11px] uppercase tracking-[0.16em]">
        {children}
      </span>
    </div>
  );
}

export function GuideIllustrationCard({
  icon,
  title,
  children,
}: {
  icon?: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden rounded-[26px] border border-[#D8D1C5] bg-gradient-to-br from-white to-[#FBF8F2] px-5 py-5 shadow-[0_14px_34px_rgba(0,0,0,0.05)] my-6">
      <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 rounded-full bg-[#C9A86A]/8 blur-2xl" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-16 w-16 rounded-full bg-[#4B5D44]/8 blur-2xl" />

      <div className="flex items-start gap-4">
        {icon ? <GuideIcon>{icon}</GuideIcon> : null}

        <div>
          <h3 className="serif text-[24px] font-semibold text-[#2B2B2B]">
            {title}
          </h3>
          <div className="mt-3 guide-prose max-w-none">{children}</div>
        </div>
      </div>
    </div>
  );
}

type QuizItemProps = {
  question: string;
  a: ReactNode;
  b: ReactNode;
};

export function GuideQuiz({
  title = "Quick quiz",
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-[24px] border border-[#D8D1C5] bg-white/88 px-5 py-5 shadow-[0_10px_24px_rgba(0,0,0,0.04)] my-6">
      <div className="sans text-xs tracking-[0.18em] uppercase text-[#7E7566]">
        {title}
      </div>

      <div className="mt-5 space-y-5">{children}</div>
    </div>
  );
}
export function GuideQuizItem({ question, a, b }: QuizItemProps) {
  return (
    <div className="border-b border-black/8 pb-5 last:border-b-0 last:pb-0">
      <h4 className="serif text-[22px] font-semibold text-[#2B2B2B] leading-snug">
        {question}
      </h4>

      <div className="mt-3 space-y-2">
        <div className="rounded-[14px] border border-[#D8D1C5] bg-[#FBF8F2] px-4 py-3">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-6 min-w-6 items-center justify-center rounded-full border border-[#C9A86A]/40 bg-[#FFF8EE] px-2 text-[12px] sans tracking-[0.08em] text-[#7E7566]">
              A
            </span>
            <div className="guide-prose max-w-none">{a}</div>
          </div>
        </div>

        <div className="rounded-[14px] border border-[#D8D1C5] bg-[#FBF8F2] px-4 py-3">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-6 min-w-6 items-center justify-center rounded-full border border-[#C9A86A]/40 bg-[#FFF8EE] px-2 text-[12px] sans tracking-[0.08em] text-[#7E7566]">
              B
            </span>
            <div className="guide-prose max-w-none">{b}</div>
          </div>
        </div>
      </div>
    </div>
  );
}


export function GuideSoftPink({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-[24px] border border-[#E7C9D3] bg-gradient-to-br from-[#FFF8FB] to-[#FFF2F7] px-5 py-5 shadow-[0_12px_30px_rgba(180,90,120,0.06)] my-6">
      {title ? (
        <div className="sans text-xs tracking-[0.18em] uppercase text-[#A06A7A]">
          {title}
        </div>
      ) : null}
      <div className={`${title ? "mt-3" : ""} guide-prose max-w-none`}>
        {children}
      </div>
    </div>
  );
}

export function GuideSoftPurple({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-[24px] border border-[#D9D2F3] bg-gradient-to-br from-[#FAF8FF] to-[#F3EFFF] px-5 py-5 shadow-[0_12px_30px_rgba(110,90,180,0.06)] my-6">
      {title ? (
        <div className="sans text-xs tracking-[0.18em] uppercase text-[#6F61A8]">
          {title}
        </div>
      ) : null}
      <div className={`${title ? "mt-3" : ""} guide-prose max-w-none`}>
        {children}
      </div>
    </div>
  );
}

export function GuideDecisionBox({
  title = "Decision point",
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-[26px] border border-[#C9A86A]/35 bg-gradient-to-br from-[#FFFCF7] via-[#FFF8EE] to-[#F8F2E8] px-5 py-5 shadow-[0_14px_34px_rgba(201,168,106,0.10)] my-6">
      <div className="sans text-xs tracking-[0.18em] uppercase text-[#9B6B1E]/80">
        {title}
      </div>
      <div className="mt-4 guide-prose max-w-none">
        {children}
      </div>
    </div>
  );
}

export function GuideSectionBreak({
  label,
}: {
  label: string;
}) {
  return (
    <div className="my-10 flex items-center gap-4" aria-hidden="true">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C9A86A]/55" />
      <span className="sans text-[11px] uppercase tracking-[0.18em] text-[#7E7566] whitespace-nowrap">
        {label}
      </span>
      <div className="h-px flex-1 bg-gradient-to-r from-[#C9A86A]/55 to-transparent" />
    </div>
  );
}


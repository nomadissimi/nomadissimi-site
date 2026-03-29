import { ReactNode } from "react";

type BoxProps = {
  title?: string;
  children: ReactNode;
};

export function GuideCallout({ title, children }: BoxProps) {
  return (
    <div className="nm-guide-callout">
      {title ? <div className="nm-guide-callout-title">{title}</div> : null}
      <div className="sans text-[16px] leading-[1.9] text-black/80">
        {children}
      </div>
    </div>
  );
}

export function GuideTip({ title = "Big-sis tip", children }: BoxProps) {
  return (
    <div className="nm-guide-tip">
      <div className="sans text-xs tracking-[0.18em] uppercase text-[#4B5D44]/70">
        {title}
      </div>
      <div className="mt-2 serif text-[24px] leading-tight text-[#2B2B2B]">
        ✦
      </div>
      <div className="mt-3 sans text-[16px] leading-[1.9] text-black/80">
        {children}
      </div>
    </div>
  );
}

export function GuideWarning({ title = "Important", children }: BoxProps) {
  return (
    <div className="nm-guide-warning">
      <div className="sans text-xs tracking-[0.18em] uppercase text-[#9B6B1E]/80">
        {title}
      </div>
      <div className="mt-3 sans text-[16px] leading-[1.9] text-black/82">
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
      <div className="sans text-[16px] leading-[1.9] text-black/80">
        {children}
      </div>
    </div>
  );
}

type ListProps = {
  title?: string;
  items: ReactNode[];
};

export function GuideChecklist({ title = "Checklist", items }: ListProps) {
  return (
    <div className="rounded-[24px] border border-black/10 bg-white/85 px-5 py-5 shadow-[0_12px_30px_rgba(0,0,0,0.04)] my-6">
      <div className="sans text-xs tracking-[0.18em] uppercase text-[#4B5D44]/70">
        {title}
      </div>

      <ul className="mt-4 space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EEF5EC] text-[#4B5D44]">
              ✓
            </span>
            <div className="sans text-[16px] leading-[1.9] text-black/82">
              {item}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function GuideSteps({ title = "Step by step", items }: ListProps) {
  return (
    <div className="rounded-[24px] border border-[#D8D1C5] bg-[#FFFCF7] px-5 py-5 shadow-[0_12px_30px_rgba(0,0,0,0.04)] my-6">
      <div className="sans text-xs tracking-[0.18em] uppercase text-[#7E7566]">
        {title}
      </div>

      <ol className="mt-4 space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-4">
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4B5D44] text-white sans text-sm">
              {index + 1}
            </span>
            <div className="sans text-[16px] leading-[1.9] text-black/82 pt-0.5">
              {item}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function GuideRecap({ title = "Quick recap", items }: ListProps) {
  return (
    <div className="rounded-[24px] border border-[#C9A86A]/35 bg-gradient-to-br from-[#FFFAF2] to-[#FFF4E6] px-5 py-5 shadow-[0_14px_34px_rgba(201,168,106,0.10)] my-6">
      <div className="sans text-xs tracking-[0.18em] uppercase text-[#9B6B1E]/80">
        {title}
      </div>

      <ul className="mt-4 space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="mt-[6px] h-2.5 w-2.5 shrink-0 rounded-full bg-[#C9A86A]" />
            <div className="sans text-[16px] leading-[1.9] text-black/82">
              {item}
            </div>
          </li>
        ))}
      </ul>
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

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


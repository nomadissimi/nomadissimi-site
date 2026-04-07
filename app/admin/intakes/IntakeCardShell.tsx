"use client";

import { useState } from "react";

export default function IntakeCardShell({
  header,
  children,
  defaultOpen = false,
}: {
  header: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <article className="rounded-[24px] border border-black/10 bg-[#FBF8F2] p-6">
      <div className="flex flex-col gap-4">
        {header}

        <div className="flex justify-start">
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 sans text-[12px] uppercase tracking-[0.14em] text-black/60 transition hover:bg-black/[0.03] hover:text-black/80"
          >
            <span>{open ? "Hide details" : "Show details"}</span>
            <span aria-hidden="true">{open ? "−" : "+"}</span>
          </button>
        </div>

        {open ? <div className="space-y-6">{children}</div> : null}
      </div>
    </article>
  );
}


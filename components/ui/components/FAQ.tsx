"use client";

import { useId, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

type QA = { q: string; a: ReactNode };

const faqs: QA[] = [
  {
    q: "Who is Italy’s Digital Nomad Visa for?",
    a: (
      <>
        Non-EU citizens who work remotely for foreign clients/employers and can
        demonstrate sufficient, stable income. Exact evidence can vary by
        consulate — we verify your specifics and tailor the file to bring
        exactly what <em>your</em> consulate wants.
      </>
    ),
  },
  {
    q: "How long does the process take?",
    a: (
      <>
        From first call to your visa sticker, plan on{" "}
        <strong>6-12 weeks</strong>. Timelines depend on consulate backlogs and
        how quickly you can gather a few documents we’ll list for you. We keep
        you moving with a clear checklist and reminders.
      </>
    ),
  },
  {
    q: "What do your packages include?",
    a: (
      <>
        A personal checklist in plain English, document templates, coaching on
        eligibility &amp; “what counts,” appointment guidance, and a full review
        of your file before you submit. Higher tiers add mock interview prep and
        hands-on help scheduling &amp; tracking.
      </>
    ),
  },
  {
    q: "Will you book the consulate appointment for me?",
    a: (
      <>
        Yes on our guided packages. Availability varies by consulate. We watch
        openings, advise the best timing, and prep you so you walk in confident.
      </>
    ),
  },
  {
    q: "Do I need an Italian bank account or lease first?",
    a: (
      <>
        No. You apply with foreign income and proof of accommodation that fits
        consulate rules (hotel/Airbnb/letter of invitation/lease depending on
        location). We’ll tell you exactly what works in your jurisdiction.
      </>
    ),
  },
  {
    q: "Can my spouse/partner and kids come?",
    a: (
      <>
        Yes — family reunion is possible. We’ll map your path (timing, documents
        and the right order of steps) so you don’t lose time.
      </>
    ),
  },
  {
    q: "What about taxes?",
    a: (
      <>
        The visa is an immigration permission; taxes are separate. We brief you
        on the basics and connect you to vetted cross-border tax pros when
        you’re ready.
      </>
    ),
  },
  {
    q: "What’s your refund policy?",
    a: (
      <>
        If we review your profile and you’re truly ineligible, we’ll refund the
        unused portion of your fee. If you change your mind mid-process, we
        simply bill you for the work completed so far.
      </>
    ),
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="mx-auto max-w-5xl px-4 md:px-6 py-8 md:py-10"
    >
      <div className="text-center mb-8 md:mb-10">
        <h2 id="faq-title" className="serif text-3xl md:text-5xl font-semibold">
          Frequently Asked Questions
        </h2>
        <p className="sans mt-2 text-[#2B2B2B]/70">
          The essentials and more, answered.
        </p>
      </div>

      <ul className="space-y-2">
        {faqs.map((qa, i) => (
          <FAQItem key={i} {...qa} />
        ))}
      </ul>
    </section>
  );
}

function FAQItem({ q, a }: QA) {
  const [open, setOpen] = useState(false);
  const baseId = useId();
  const panelId = `${baseId}-panel`;
  const buttonId = `${baseId}-button`;

  return (
    <li className="list-none">
      <div className="card rounded-lg border border-black/5 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden">
        <button
          id={buttonId}
          type="button"
          aria-controls={panelId}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="flex w-full items-center justify-between gap-2 px-3 md:px-4 py-0 min-h-[34px] text-left leading-tight"
        >
          <span className="serif text-[1.25rem] md:text-[1.35rem] font-semibold">
            {q}
          </span>

          {/* rotating chevron */}
          <motion.span
            className="ml-auto grid h-6 w-6 place-items-center rounded-md text-[#5b5b5b]"
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.085l3.71-3.854a.75.75 0 111.08 1.04l-4.24 4.4a.75.75 0 01-1.08 0l-4.24-4.4a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="content"
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="px-3 pb-3 pt-1 md:px-5 md:pb-5 md:pt-2">
                <div className="sans text-[17px] leading-7 text-[#2B2B2B]">
                  {a}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </li>
  );
}

"use client";

import { useId, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

type QA = { q: string; a: ReactNode };

const faqs: QA[] = [
  {
    q: "Who is Italy’s Digital Nomad Visa for?",
    a: (
      <>
        Italy’s Digital Nomad Visa is designed for non-EU citizens who work
        remotely using technology, whether you’re self-employed, freelance, or
        employed by a company outside Italy. Applicants need to show
        professional experience and a stable income, but don’t worry — we’ll
        help you understand what “qualified” actually means in real life (not
        just on government websites). In short: if you can do your job from
        anywhere, why not do it from Italy?
      </>
    ),
  },
  {
    q: "How long does the process take?",
    a: (
      <>
        From your first call to the visa sticker in your passport, plan for a
        few months. Timelines vary depending on your consulate’s backlog and how
        quickly you can gather the required documents. We’ll map it all out for
        you step-by-step so you always know what’s next. (Italy runs on
        espresso, not speed -- but we’ll keep you moving.)
      </>
    ),
  },
  {
    q: "Why work with Nomadissimi instead of doing it myself?",
    a: (
      <>
        Because we’ve been through it, and we know the many places where people
        get stuck. Instead of losing months to confusing consulate websites or
        unreliable online forums, you’ll have a clear, personalized roadmap,
        expert oversight, and people who genuinely care about your Italian
        dream.
      </>
    ),
  },
  {
    q: "What do your packages include?",
    a: (
      <>
        Each package is designed for a different level of support: from an
        initial roadmap to full concierge guidance. You can see the complete
        breakdown on our Visa Packages page, or you can write to us and we can
        help you pick the right fit.
      </>
    ),
  },
  {
    q: "What happens after I buy one of your visa packages?",
    a: (
      <>
        Once you book, you’ll receive an intake form so we can better understand
        your specific profile, visa goals, and timeline. This helps us optimize
        your consultation, so we can get straight into your tailored strategy.
      </>
    ),
  },
  {
    q: "Will you book the consulate appointment for me?",
    a: (
      <>
        We’ll guide you on exactly how to secure your slot and what to expect,
        but consulate bookings must be completed by the applicant directly for
        privacy and security reasons. But don’t worry: we’ve got the tips and
        timing tricks to help you land one successfully.
      </>
    ),
  },
  {
    q: "What happens after my visa is approved?",
    a: (
      <>
        That’s when the real Italian adventure begins! It's also one of the most
        important (and time-sensitive) steps that starts right away. Within days
        of landing, you’ll need to register your residency and apply for your
        Permesso di Soggiorno, your official residence permit. It’s a crucial
        step that many people overlook or delay, and missing the deadline can
        cause serious complications later. Our "Residence Registration" Add-On
        gives you step-by-step guidance through the process: from completing
        your kit to booking your appointments and submitting your fingerprints.
        We make sure you get it done correctly and on time, so your new Italian
        life begins without stress or surprises.
      </>
    ),
  },
  {
    q: "What about taxes?",
    a: (
      <>
        Your visa is an immigration permission, not a tax setup. They’re two
        different worlds (and Italy’s tax world is a labyrinth of its own). We
        offer a Tax & Partita IVA Consultation Add-On that gives you tips on how
        to open your professional activity in Italy, understand key tax
        benefits, and avoid the common pitfalls most newcomers face.
      </>
    ),
  },
  {
    q: "Do I need an Italian bank account or lease first?",
    a: (
      <>
        There's a lot of misinformation online, but this is one of the key
        details we clarify during your consultation. We’ll make sure you know
        what’s required (and what isn’t) before you take any big steps.
      </>
    ),
  },
  {
    q: "Can my spouse/partner and kids come?",
    a: (
      <>
        It depends, family reunion is possible in certain cases. La dolce vita
        is even sweeter when shared, but please note that the request for family
        reunification is done once you have already become an Italian resident.
      </>
    ),
  },
  {
    q: "What if my visa is rejected?",
    a: (
      <>
        Rejections are rare when everything is prepared correctly, but
        ultimately, the final decision lies with the Italian government and its
        affiliated entities. No consulting agency or law firm can guarantee an
        approval, and if someone promises you that… run! Our role is to minimize
        risk through careful strategy, organization, and personalized
        preparation... giving you the strongest possible chance of success.
      </>
    ),
  },
  {
    q: "What’s your refund policy?",
    a: (
      <>
        All sales are final and non-refundable. We take pride in offering
        attentive, high-touch support from the moment you join us.
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

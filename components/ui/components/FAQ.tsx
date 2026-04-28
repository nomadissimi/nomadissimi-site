"use client";

import { useId, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

type QA = { q: string; a: ReactNode };

const faqs: QA[] = [
  {
    q: "💻 Who is Italy’s Digital Nomad Visa for?",
    a: (
      <>
        Italy’s Digital Nomad Visa is designed for non-EU citizens who work
        remotely using technology, whether you’re self-employed, freelance, or
        employed by a company outside Italy. Applicants need to show
        professional experience and a stable income, but don’t worry - we’ll
        help you understand what “qualified” actually means in real life (not
        just on vague websites). In short: if you can do your job from anywhere,
        why not do it from Italy? 😎
      </>
    ),
  },
  {
    q: "⏳ How long does the visa process take?",
    a: (
      <>
        From your first call to the visa sticker in your passport, plan for a
        few months. We're not here to sell you a fake completion date, since
        actual timelines vary depending on your consulate’s backlog and how
        quickly you can gather the required documents. We keep it real with you,
        and we map out the process for you step-by-step so you always know
        what’s next. ☕️ Italy runs on espresso pauses and aperitivo, not speed
        (but we’ll help you keep your momentum).
      </>
    ),
  },
  {
    q: "✈️ Why work with Nomadissimi instead of doing it myself?",
    a: (
      <>
        Because the process is never as simple as it first appears. There are
        many hidden details, timing tricks, and confusing sub-steps. People lose
        time when they rely on scattered consulate pages, outdated forum advice,
        contradictory online opinions, or generic AI answers that miss the
        details of their specific case and deliver confident (yet very wrong)
        hallucinations. <br />
        <br /> We’ve been through it, and we know the many places where people
        get stuck. With us, you’ll have a{" "}
        <strong>clear, thoroughly researched roadmap,</strong> expert oversight,
        and people who genuinely care about your Italian dream. We help you
        understand not just what to gather, but how the process fits together
        from start to finish. 🥂
      </>
    ),
  },
  {
    q: "⭐️ What makes Nomadissimi different from other agencies?",
    a: (
      <>
        Nomadissimi is built from direct proximity to the country itself. We
        live in Italy. Marco is 100% Italian, born and raised, with a real
        understanding of how Italian bureaucracy, culture, and systems work on
        the ground. Sylvia made the move to Italy herself and understands both
        the logistical and emotional reality of doing this as a foreigner and
        integrating into a new culture, learning its language, and building
        connections.
        <br />
        <br />
        Our work is not generic, outsourced, or built around surface-level
        selling. It is built to help people move and integrate well. Our
        guidance is lived, local, and rooted in authentic respect for Italy and
        for the people moving here. 💚🤍❤️
        <br />
        <br />
        We are also intentionally boutique. We do not believe in treating people
        like anonymous case files, using pressure-heavy fear tactics, or
        wrapping a bureaucratic process in inflated promises. We believe people
        deserve honesty, structure, and support that is truly connected to the
        country they are moving to.
        <br />
        <br />
        Visibility is not the same as depth. Some brands are very good at
        marketing themselves and posting exaggerated claims on social media.
        That does not always mean they are the most qualified, the most local,
        or the most personally invested in helping someone build a real life in
        Italy.{" "}
        <strong>
          We are, and we show up for our clients in a way that reflects that.
        </strong>{" "}
        Nomadissimi was built for people who want useful knowledge, tested local
        insight, and thoughtful support that takes both the visa and the life
        beyond it seriously.
      </>
    ),
  },
  {
    q: "📚 What do your packages include?",
    a: (
      <>
        Nomadissimi currently offers two main categories of support.
        <br />
        <br />
        The first is our <strong>visa package line</strong>, which is built
        around the private Nomadissimi Visa Portal. All three visa packages
        include access to that portal, and then differ in how much personalized
        support you want around it: from a more self-guided roadmap to deeper
        strategy, private consultations, and higher-touch guidance.
        <br />
        <br />
        The second is our <strong>post-visa and integration support</strong>.
        These offers are designed for the next layers of the move and include
        dedicated new portals of their own, such as our Residence Registration
        Portal and our Tax & Partita IVA Portal. We also offer our{" "}
        <strong>La Dolce Vita</strong> support by popular demand: a more
        personal space for questions about Italian culture, daily life, and the
        real-world side of settling into Italy well. These post-visa resources
        also include bonus access to our Codice Fiscale Portal, since it is one
        of the practical building blocks of getting set up in Italy properly.
        <br />
        <br />
        <strong>
          So whether you are still preparing your visa application or you
          already have your visa and want help with what comes next, we offer
          support for both stages of the move.
        </strong>{" "}
        You can write to us if you want help choosing the right fit for your
        needs and goals, or if you want to mix and match support across both
        categories. We’re here to help you build the best possible experience of
        moving to Italy, not to sell you a boring one-size-fits-all package.
      </>
    ),
  },
  {
    q: "💳 What happens after I buy one of your packages?",
    a: (
      <>
        Once your payment is confirmed, you will be prompted to create your
        account, where you will obtain access to your portal and detailed
        instructions. <br />
        <br /> 📞 If your package includes a private consultation, you’ll
        receive an intake form so we can better understand your specific
        profile, visa goals, and timeline. This helps us optimize your call, so
        we can get straight into your tailored strategy.
      </>
    ),
  },
  {
    q: "📆 Will you book the consulate appointment for me?",
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
    q: "🏦 Do I need an Italian bank account or lease first?",
    a: (
      <>
        There's a lot of misinformation online, but this is one of the key
        details we clarify during your consultation. We’ll make sure you know
        what’s required (and what isn’t) before you take any big steps.
      </>
    ),
  },

  {
    q: "💍 Can my spouse/partner and kids come?",
    a: (
      <>
        It depends. Italy allows family reunification in certain cases,
        including for spouses and dependent children. La dolce vita is even
        sweeter when shared, but please note that the request for family
        reunification is done once you have already become an Italian resident
        and can take more time.
      </>
    ),
  },
  {
    q: "☹️ What if my visa is rejected?",
    a: (
      <>
        Rejections are rare when everything is prepared correctly, but
        ultimately, the final decision lies with the Italian government and its
        affiliated entities.{" "}
        <strong>
          🚩 No consulting agency or law firm can guarantee an approval, and if
          someone promises you that… run!
        </strong>{" "}
        Our role is to minimize risk through careful strategy, organization, and
        personalized preparation, giving you the strongest possible chance of
        success.
      </>
    ),
  },
  {
    q: "🎉 What happens after my visa is approved?",
    a: (
      <>
        That’s when the real Italian adventure begins! It's also one of the most
        important (and time-sensitive) steps that starts right away. ⚠️ Within
        DAYS of landing, you’ll need to register your residency and apply for
        your Permesso di Soggiorno, your official residence permit.
        <br />
        <br />
        <strong>
          It’s a crucial step that many people overlook or delay, and missing
          the deadline can cause serious complications later.
        </strong>{" "}
        Our best-selling "Residence Registration" Portal gives you step-by-step
        guidance through the process: from completing your kit to booking your
        appointments and submitting your fingerprints. We make sure you get it
        done correctly and on time, so your new Italian life begins without
        stress or surprises.
      </>
    ),
  },
  {
    q: "💰 What about taxes?",
    a: (
      <>
        Your visa is an immigration permission, not a tax setup. They’re two
        different worlds (and Italy’s tax world is a labyrinth of its own). We
        offer a dedicated Tax & Partita IVA Portal that gives you tips on how to
        open your professional activity in Italy, understand key tax benefits,
        and avoid the common pitfalls most newcomers face.
      </>
    ),
  },

  {
    q: "🇮🇹 Can Nomadissimi help me if I already have my visa?",
    a: (
      <>
        Yes, you can absolutely still work with Nomadissimi even if you already
        have your Italian visa.{" "}
        <strong>We support so much more than the visa process!</strong> 😄 We
        also help with the next layers of the move, including residence
        registration, taxes, codice fiscale, and our La Dolce Vita consultations
        for the real-life side of settling into Italy well.
        <br />
        <br /> These resources are available to anyone moving to Italy. One of
        our core purposes is helping people integrate into Italy, not just
        arrive and live in a bubble detached from reality. We love and respect
        Italy deeply, and we want the people moving here to understand its
        culture, navigate its systems more confidently, and build a life that
        feels grounded and connected. 🍕 <br /> <br />
        So if your visa is already handled, but you still want help landing
        smoothly and adjusting well, you are in the right place.
      </>
    ),
  },
  {
    q: "🌈 Is Nomadissimi an inclusive space?",
    a: (
      <>
        Absolutely! ❤️ Nomadissimi is proudly LGBTQ+ friendly,
        neurodivergent-aware, and built with love. We provide a warm, respectful
        space for clients of <strong>all</strong> identities, ethnicities,
        spiritual paths, family structures, and ways of moving through the
        world.
        <br />
        <br />
        You don’t need to over-explain, perform, or shrink your life here. One
        of our favorite things about doing what we do is meeting wonderful
        people from multiple walks of life. We believe diversity is beautiful,
        and we are here to support you.
        <br />
        <br />
        We’ll guide you clearly, communicate respectfully, and adapt where we
        can. Italian bureaucracy is rigid enough, but not us!
      </>
    ),
  },

  {
    q: "📝 What’s your refund policy?",
    a: (
      <>
        All sales are final and non-refundable. Because Nomadissimi products
        include immediate access to private digital resources, carefully
        researched guidance, and, depending on the package, reserved time and
        support from our team, we do not offer refunds once a purchase has been
        made.
        <br />
        <br /> We take our work seriously and put a lot of care into building
        resources that are thoughtful, strategic, and genuinely useful from the
        moment you join us. That is also why we encourage clients to read each
        package carefully before purchasing and to message us if they need help
        choosing the right fit.
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
          Click on each arrow on the right to view the answers.
        </p>
      </div>

      <ul className="space-y-1.5 md:space-y-2">
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
      <div className="card rounded-[14px] border border-black/5 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden">
        <button
          id={buttonId}
          type="button"
          aria-controls={panelId}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="flex w-full items-center justify-between gap-2 px-3 md:px-4 py-0 min-h-[22px] md:min-h-[24px] text-left"
        >
          {/* Question text */}
          <span className="serif text-[1.25rem] md:text-[1.35rem] font-semibold text-[#4B5D44]">
            {q}
          </span>

          {/* rotating chevron */}
          <motion.span
            className="ml-auto grid h-5 w-5 place-items-center rounded-md text-[#5b5b5b]"
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
              <div className="px-5 pb-4 pt-2.5 md:px-6 md:pb-5 md:pt-3">
                <div className="border-t border-black/5 pt-3 md:pt-4">
                  <div className="sans text-[15.5px] md:text-[16px] leading-[1.75] text-[#2B2B2B]">
                    {a}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </li>
  );
}

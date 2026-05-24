import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Italy Residence Registration Support | Nomadissimi",
  description:
    "Boutique Italy residence registration support for digital nomads, remote workers, and new arrivals. Clear help with permesso, comune registration, and post-arrival practical setup.",
  alternates: {
    canonical: "/residence",
  },
};

export default function ResidencePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Nomadissimi residence support best for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nomadissimi residence support is best for people who have already moved to Italy, are about to arrive, or have recently received visa approval and want clear help with the residence registration process. It is especially useful for digital nomads, remote workers, freelancers, and internationally mobile clients who want practical support with permesso, comune registration, and related early steps.",
        },
      },
      {
        "@type": "Question",
        name: "What does the Residence Registration Portal help with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Residence Registration Portal helps clients understand the key practical steps after arrival in Italy, including the residence permit process, comune registration, how to think about required documents, and the early administrative tasks that can feel confusing or time-sensitive.",
        },
      },
      {
        "@type": "Question",
        name: "Why is residence registration in Italy stressful for new arrivals?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Residence registration in Italy can feel stressful because it involves multiple offices, timing-sensitive steps, unclear local expectations, and a process that often differs in tone and practice from place to place. Many new arrivals are prepared for the visa, but not for the practical bureaucracy that starts immediately after reaching Italy.",
        },
      },
      {
        "@type": "Question",
        name: "Does Nomadissimi only help with the visa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Nomadissimi helps clients beyond the visa as well, including residence registration, tax-related orientation, codice fiscale, and the practical realities of settling into life in Italy more smoothly and strategically.",
        },
      },
    ],
  };

  return (
    <>
      <main className="min-h-screen bg-[#F8F5EF] text-[#1F1F1F]">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 md:pt-24 md:pb-14">
          <p className="sans text-xs md:text-sm uppercase tracking-[0.18em] text-[#4B5D44]/65">
            Nomadissimi residence support
          </p>

          <h1 className="serif mt-4 text-4xl md:text-5xl lg:text-6xl leading-[1.08] font-semibold tracking-[0.01em] max-w-4xl">
            Italy residence registration support, without the panic spiral
          </h1>

          <p className="serif mt-3 max-w-3xl text-[24px] md:text-[30px] leading-[1.3] text-black/65 tracking-[-0.01em]">
            Because getting approved is one thing. Settling in correctly is
            another.
          </p>

          <p className="sans mt-6 max-w-3xl text-[18px] md:text-[20px] leading-[1.85] text-black/72">
            Nomadissimi helps new arrivals navigate the early practical
            bureaucracy of life in Italy with more calm, more structure, and far
            less confusion — especially when the residence process starts
            feeling bigger, messier, and more local than expected.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/#settling"
              className="inline-flex items-center justify-center rounded-full bg-[#4B5D44] px-6 py-3 serif text-[18px] text-white transition hover:bg-[#3E4E38]"
            >
              Explore residence support
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-black/12 bg-white px-6 py-3 serif text-[18px] text-[#1F1F1F] transition hover:bg-[#F7F2EA]"
            >
              Contact us
            </Link>
          </div>

          <div className="mt-8 h-px w-28 bg-gradient-to-r from-transparent via-[#C9A86A]/70 to-transparent" />
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 md:pb-10">
          <div className="rounded-[30px] border border-black/8 bg-white/70 p-7 md:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.06)]">
            <h2 className="serif text-3xl md:text-4xl font-semibold leading-tight">
              What this page is about
            </h2>

            <div className="mt-5 space-y-5 sans text-[16px] md:text-[17px] leading-[1.9] text-black/75">
              <p>
                Many people prepare intensely for the visa, only to discover
                that the real-life setup after arrival in Italy comes with its
                own stress, its own local logic, and its own deadlines.
              </p>

              <p>
                Residence registration is one of the first major practical steps
                after arrival, and it can feel especially disorienting when you
                are already tired, newly moved, adjusting to a different system,
                and trying not to make mistakes that could slow everything down.
              </p>

              <p>
                Nomadissimi helps make that early phase feel more understandable
                and more manageable, with support designed around the way Italy
                actually works on the ground.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-[28px] border border-black/8 bg-[#FBF7F0] p-7 shadow-[0_18px_50px_rgba(0,0,0,0.04)]">
              <h2 className="serif text-2xl md:text-3xl font-semibold">
                Who this is best for
              </h2>

              <ul className="mt-5 space-y-4 sans text-[16px] leading-[1.8] text-black/75">
                <li>
                  People who have recently arrived in Italy or are about to
                  arrive soon
                </li>
                <li>
                  Digital nomads, remote workers, and freelancers moving into
                  the post-visa phase
                </li>
                <li>
                  Clients who feel unsure about permesso, comune registration,
                  or local practical steps
                </li>
                <li>
                  New arrivals who want more than vague advice or improvised
                  guesswork
                </li>
                <li>
                  People who want boutique support while building a real life in
                  Italy, not just getting through paperwork
                </li>
              </ul>
            </div>

            <div className="rounded-[28px] border border-black/8 bg-[#FBF7F0] p-7 shadow-[0_18px_50px_rgba(0,0,0,0.04)]">
              <h2 className="serif text-2xl md:text-3xl font-semibold">
                What clients usually need help with
              </h2>

              <ul className="mt-5 space-y-4 sans text-[16px] leading-[1.8] text-black/75">
                <li>Understanding the early residence process after arrival</li>
                <li>
                  Knowing what practical steps matter first and what can wait
                </li>
                <li>
                  Making sense of the residence permit process without
                  unnecessary confusion
                </li>
                <li>
                  Clarifying comune registration and local documentation logic
                </li>
                <li>
                  Reducing stress around timing-sensitive post-arrival steps
                </li>
                <li>
                  Feeling more grounded in the first weeks of life in Italy
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
          <div className="rounded-[30px] border border-[#E5D6BA] bg-[linear-gradient(135deg,#FFFDF9_0%,#FBF6EE_48%,#F7F1E6_100%)] p-7 md:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.05)]">
            <h2 className="serif text-3xl md:text-4xl font-semibold leading-tight">
              Why residence registration feels harder than people expect
            </h2>

            <div className="mt-6 grid gap-5">
              <div>
                <h3 className="serif text-[24px] md:text-[28px]">
                  The visa was only phase one
                </h3>
                <p className="sans mt-2 text-[16px] md:text-[17px] leading-[1.85] text-black/75">
                  A lot of people assume the difficult part ends once the visa
                  is approved. In reality, approval often opens the door to a
                  second layer of bureaucracy that feels much more immediate,
                  much more practical, and sometimes much more confusing.
                </p>
              </div>

              <div>
                <h3 className="serif text-[24px] md:text-[28px]">
                  Italian systems are local and highly contextual
                </h3>
                <p className="sans mt-2 text-[16px] md:text-[17px] leading-[1.85] text-black/75">
                  Residence-related steps in Italy are not always experienced in
                  a perfectly uniform way. Local expectations, office culture,
                  and sequencing can feel surprisingly nuanced. That is part of
                  what makes this stage stressful for newcomers.
                </p>
              </div>

              <div>
                <h3 className="serif text-[24px] md:text-[28px]">
                  You are doing bureaucracy while also starting a new life
                </h3>
                <p className="sans mt-2 text-[16px] md:text-[17px] leading-[1.85] text-black/75">
                  This phase often happens while you are also adjusting to a new
                  place, housing, language, routines, and the emotional weight
                  of a major move. That is exactly why support should feel
                  calmer, clearer, and more grounded than what most people find
                  online.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-8 md:pb-10">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="serif text-4xl md:text-5xl font-semibold leading-[1.05]">
              Residence Registration Portal
            </h2>

            <div className="max-w-4xl mx-auto px-2 text-center mt-4 space-y-4">
              <p className="sans text-[17px] md:text-[19px] leading-[1.75] tracking-[-0.01em] text-[#2F2F2F]">
                One of the first major practical steps after arrival in Italy.
                <span className="text-[#4B5D44] font-medium">
                  {" "}
                  An 8-day deadline you can’t miss.
                </span>
              </p>

              <p className="sans text-[15px] md:text-[17px] leading-[1.85] text-[#555555] max-w-3xl mx-auto">
                This package is designed to help you navigate the residence
                process with more confidence, more order, and less unnecessary
                panic.
              </p>
            </div>

            <div className="mt-6 h-px w-28 mx-auto bg-gradient-to-r from-transparent via-[#C9A86A]/70 to-transparent" />
          </div>

          <div className="mx-auto max-w-3xl">
            <SupportOfferCard
              title="Residence Registration Portal"
              badge="⏳ Time-sensitive step"
              blurb="One of the first major practical steps after arrival in Italy. An 8-day deadline you can’t miss."
              ctaHref="/#settling"
              ctaText="Get Your Residence"
              amount="299"
              oldPrice="€499"
              bullets={[
                <>
                  <strong>
                    Access to our best-selling Residence Registration Portal:
                  </strong>{" "}
                  8 descriptive chapters covering the full residence process,
                  the documents involved, and the steps people most often get
                  confused by.
                </>,
                <>
                  <strong>Private 30-minute consultation</strong> walking you
                  through the essential documents you must obtain once you move
                  to Italy.
                </>,
                <>
                  How to obtain your <strong>residence permit</strong> (the
                  famous Permesso di soggiorno): kit, appointments,
                  fingerprints.
                </>,
                <>
                  Insider guidance on the{" "}
                  <strong>Comune residency registration</strong>, a crucial yet
                  often misunderstood step.
                </>,
                <>
                  How to obtain your <strong>Italian ID card</strong>.
                </>,
                <>
                  <strong>
                    Bonus access to our dedicated Codice Fiscale Portal
                  </strong>
                  .
                </>,
                <>
                  <strong>30 days of email support</strong> from our team.
                </>,
              ]}
            />
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="serif text-4xl md:text-5xl font-semibold">
              What comes next after residence
            </h2>

            <div className="max-w-4xl mx-auto px-2 mt-5 space-y-5">
              <p className="sans text-[18px] md:text-[21px] leading-[1.75] tracking-[-0.01em] text-[#2F2F2F]">
                Settling in well is not a single task.
                <span className="text-[#4B5D44] font-medium">
                  {" "}
                  It is a sequence.
                </span>
              </p>

              <p className="sans text-[16px] md:text-[18px] leading-[1.9] text-[#555555] max-w-4xl mx-auto">
                Once the residence process starts making sense, many clients
                begin thinking about the next practical layers too: codice
                fiscale, taxes, professional setup, healthcare, renting, and the
                broader realities of living well in Italy.
              </p>

              <p className="sans text-[16px] md:text-[18px] leading-[1.9] text-[#4B5D44] max-w-4xl mx-auto">
                That is why Nomadissimi also offers support for{" "}
                <Link
                  href="/tax"
                  className="underline underline-offset-2 transition hover:text-[#2F4530]"
                >
                  tax and Partita IVA orientation
                </Link>{" "}
                and the real-life side of{" "}
                <Link
                  href="/#settling"
                  className="underline underline-offset-2 transition hover:text-[#2F4530]"
                >
                  settling in Italy
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-start">
            <MiniSupportCard
              title="Tax & Partita IVA Portal"
              blurb="Italy has tax opportunities most newcomers miss. Choosing the right path early can make an enormous difference."
              ctaHref="/tax"
              ctaText="Discover Tax Path"
              amount="299"
              oldPrice="€499"
              bullets={[
                "12 chapters on Italian tax setup and practical structuring",
                "30-minute strategic consultation",
                "Guidance on tax benefits and regime questions",
                "Crypto income support included",
              ]}
            />

            <MiniSupportCard
              title="La Dolce Vita Integration"
              blurb="A practical support package for the real-life side of moving to Italy — beyond the paperwork and beyond the postcards."
              ctaHref="/#settling"
              ctaText="Settle in Smoothly"
              amount="199"
              oldPrice="€399"
              bullets={[
                "Lifestyle and regional guidance",
                "Renting and healthcare insights",
                "Cultural adaptation support",
                "Practical help for living in Italy more confidently",
              ]}
            />
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="text-center rounded-[32px] border border-black/8 bg-[#4B5D44] px-6 py-10 md:px-10 md:py-12 shadow-[0_26px_70px_rgba(75,93,68,0.22)]">
            <h2 className="serif text-3xl md:text-4xl font-semibold text-white leading-tight">
              Need help getting your first steps in Italy right?
            </h2>

            <p className="sans mt-4 max-w-2xl mx-auto text-[16px] md:text-[17px] leading-[1.85] text-white/82">
              Explore the Residence Registration Portal, choose the level of
              support that fits where you are, or contact us if you want help
              deciding what makes the most sense next.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3">
              <Link
                href="/#settling"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 serif text-[18px] text-[#1F1F1F] transition hover:bg-[#F7F2EA]"
              >
                Explore residence support
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 serif text-[18px] text-white transition hover:bg-white/10"
              >
                Contact us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Script
        id="faq-schema-residence"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

function SupportOfferCard({
  title,
  badge,
  blurb,
  bullets,
  ctaHref,
  ctaText,
  amount,
  oldPrice,
}: {
  title: string;
  badge?: string;
  blurb: string;
  bullets: React.ReactNode[];
  ctaHref: string;
  ctaText: string;
  amount: string;
  oldPrice: string;
}) {
  return (
    <div className="rounded-[30px] border border-[#DCDDD8] bg-[#F3F6F1] p-7 md:p-8 shadow-[0_18px_46px_rgba(0,0,0,0.04)] h-full flex flex-col">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="serif text-[28px] md:text-[32px] leading-[1.15] text-[#1F1F1F]">
            {title}
          </h3>
          {badge ? (
            <div className="mt-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#D9B16E]/45 bg-[#FBF4E7] px-3 py-1 text-[12px] md:text-[13px] font-medium tracking-[0.08em] uppercase text-[#8B5E2B] shadow-[0_4px_14px_rgba(201,168,106,0.10)]">
                {badge}
              </span>
            </div>
          ) : null}
        </div>

        <span className="serif text-[28px] md:text-[30px] font-semibold text-[#4B5D44]">
          <span className="text-black/35 mr-1">€</span>
          {amount}
        </span>
      </div>

      <p className="mt-4 sans text-[15px] md:text-[16px] leading-[1.75] text-black/70">
        {blurb}
      </p>

      <div className="mt-5 space-y-4 sans text-[15px] md:text-[16px] leading-[1.8] text-black/75 flex-1">
        {bullets.map((bullet, index) => (
          <div key={index} className="flex items-start gap-3">
            <span className="mt-[8px] h-2.5 w-2.5 rounded-full bg-[#C9A86A] shrink-0" />
            <div>{bullet}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-black/10 text-center">
        <Link
          href={ctaHref}
          className="inline-flex w-full items-center justify-center rounded-2xl bg-[#4B5D44] px-5 py-4 text-center shadow-[0_10px_26px_rgba(75,93,68,0.22)] transition hover:bg-[#3E4E38] hover:-translate-y-[1px]"
        >
          <span className="flex flex-col items-center">
            <span className="serif text-[20px] md:text-[22px] font-medium tracking-[0.04em] leading-[1.02] text-white">
              {ctaText}
            </span>

            <span className="-mt-1 flex items-baseline gap-1">
              <span className="sans tabular-nums text-[14px] text-white/65">
                €
              </span>
              <span className="sans tabular-nums text-[20px] md:text-[21px] font-semibold text-white leading-none">
                {amount}
              </span>
            </span>

            <span className="text-[13px] text-white/55 mt-[3px]">
              Regularly {oldPrice}
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}

function MiniSupportCard({
  title,
  blurb,
  bullets,
  ctaHref,
  ctaText,
  amount,
  oldPrice,
}: {
  title: string;
  blurb: string;
  bullets: string[];
  ctaHref: string;
  ctaText: string;
  amount: string;
  oldPrice: string;
}) {
  return (
    <div className="rounded-[30px] border border-black/8 bg-white/75 p-7 md:p-8 shadow-[0_18px_46px_rgba(0,0,0,0.04)] h-full flex flex-col">
      <div className="flex items-start justify-between gap-4">
        <h3 className="serif text-[26px] md:text-[30px] leading-[1.15] text-[#1F1F1F]">
          {title}
        </h3>

        <span className="serif text-[28px] md:text-[30px] font-semibold text-[#4B5D44]">
          <span className="text-black/35 mr-1">€</span>
          {amount}
        </span>
      </div>

      <p className="mt-4 sans text-[15px] md:text-[16px] leading-[1.75] text-black/70">
        {blurb}
      </p>

      <div className="mt-5 space-y-3 sans text-[15px] md:text-[16px] leading-[1.8] text-black/75 flex-1">
        {bullets.map((bullet, index) => (
          <div key={index} className="flex items-start gap-3">
            <span className="mt-[8px] h-2.5 w-2.5 rounded-full bg-[#C9A86A] shrink-0" />
            <div>{bullet}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-black/10 text-center">
        <Link
          href={ctaHref}
          className="inline-flex w-full items-center justify-center rounded-2xl bg-[#4B5D44] px-5 py-4 text-center shadow-[0_10px_26px_rgba(75,93,68,0.22)] transition hover:bg-[#3E4E38] hover:-translate-y-[1px]"
        >
          <span className="flex flex-col items-center">
            <span className="serif text-[20px] md:text-[22px] font-medium tracking-[0.04em] leading-[1.02] text-white">
              {ctaText}
            </span>

            <span className="-mt-1 flex items-baseline gap-1">
              <span className="sans tabular-nums text-[14px] text-white/65">
                €
              </span>
              <span className="sans tabular-nums text-[20px] md:text-[21px] font-semibold text-white leading-none">
                {amount}
              </span>
            </span>

            <span className="text-[13px] text-white/55 mt-[3px]">
              Regularly {oldPrice}
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}

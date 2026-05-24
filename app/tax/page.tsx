import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Italy Tax & Partita IVA Support | Nomadissimi",
  description:
    "Boutique Italy tax and Partita IVA support for digital nomads, remote workers, freelancers, and founders. Clearer guidance on tax setup, residency, and practical next steps in Italy.",
  alternates: {
    canonical: "/tax",
  },
};

export default function TaxPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Nomadissimi tax support best for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nomadissimi tax support is best for digital nomads, remote workers, freelancers, founders, and internationally mobile professionals who want clearer guidance on Italian tax questions, Partita IVA decisions, and early professional setup after moving to Italy.",
        },
      },
      {
        "@type": "Question",
        name: "What does the Tax & Partita IVA Portal help with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Tax & Partita IVA Portal helps clients understand Italian tax basics, how to think about professional setup, what tax opportunities may exist, what common mistakes to avoid, and how to approach practical decisions with more clarity and less guesswork.",
        },
      },
      {
        "@type": "Question",
        name: "Does Nomadissimi replace a commercialista?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nomadissimi does not replace a commercialista for formal accounting or filing work. It helps clients become far more informed, ask better questions, understand their likely pathways, and make more strategic early decisions before or alongside professional accounting support.",
        },
      },
      {
        "@type": "Question",
        name: "Why do tax questions matter so early when moving to Italy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tax questions matter early because the choices people make at the beginning can shape how they work, invoice, structure their activity, and navigate residency and professional life in Italy. Clarity early on can prevent confusion, expensive mistakes, and unnecessary stress later.",
        },
      },
    ],
  };

  return (
    <>
      <main className="min-h-screen bg-[#F8F5EF] text-[#1F1F1F]">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 md:pt-24 md:pb-14">
          <p className="sans text-xs md:text-sm uppercase tracking-[0.18em] text-[#4B5D44]/65">
            Nomadissimi tax support
          </p>

          <h1 className="serif mt-4 text-4xl md:text-5xl lg:text-6xl leading-[1.08] font-semibold tracking-[0.01em] max-w-4xl">
            Italy tax and Partita IVA support, with more clarity and less
            second-guessing
          </h1>

          <p className="serif mt-3 max-w-3xl text-[24px] md:text-[30px] leading-[1.3] text-black/65 tracking-[-0.01em]">
            Because the right setup early can change everything later.
          </p>

          <p className="sans mt-6 max-w-3xl text-[18px] md:text-[20px] leading-[1.85] text-black/72">
            Nomadissimi helps freelancers, founders, remote workers, and
            internationally mobile professionals understand the early tax and
            professional questions that shape life in Italy, so you can move
            with more strategy, more calm, and fewer expensive wrong turns.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/#settling"
              className="inline-flex items-center justify-center rounded-full bg-[#4B5D44] px-6 py-3 serif text-[18px] text-white transition hover:bg-[#3E4E38]"
            >
              Explore tax support
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
                Moving to Italy is not only a paperwork story. It is also a
                work, tax, and professional-structure story, especially if you
                are self-employed, remote, internationally paid, building a
                business, or earning income across borders.
              </p>

              <p>
                This is the page for people who know they need more than vague
                tax chatter, random forum advice, or “just ask an accountant”
                without first understanding the bigger picture.
              </p>

              <p>
                Nomadissimi helps you approach Italian tax and Partita IVA
                questions with more perspective, better preparation, and a much
                stronger sense of what actually matters early on.
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
                  Freelancers, self-employed professionals, and founders moving
                  to Italy
                </li>
                <li>
                  Remote workers trying to understand how Italian tax reality may
                  affect them
                </li>
                <li>
                  People considering whether they may need a Partita IVA
                </li>
                <li>
                  New arrivals who want to understand early tax questions before
                  making rushed decisions
                </li>
                <li>
                  Clients who want boutique strategic guidance rather than a
                  dry, purely transactional experience
                </li>
              </ul>
            </div>

            <div className="rounded-[28px] border border-black/8 bg-[#FBF7F0] p-7 shadow-[0_18px_50px_rgba(0,0,0,0.04)]">
              <h2 className="serif text-2xl md:text-3xl font-semibold">
                What clients usually need help with
              </h2>

              <ul className="mt-5 space-y-4 sans text-[16px] leading-[1.8] text-black/75">
                <li>
                  Understanding what Italian tax questions matter early on
                </li>
                <li>
                  Thinking through possible professional setup and Partita IVA
                  needs
                </li>
                <li>
                  Understanding tax benefits and regime possibilities more
                  clearly
                </li>
                <li>
                  Avoiding common setup mistakes that become costly later
                </li>
                <li>
                  Clarifying what to ask a commercialista and what to prepare in
                  advance
                </li>
                <li>
                  Feeling more confident around income structure, timing, and
                  next decisions
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
          <div className="rounded-[30px] border border-[#E5D6BA] bg-[linear-gradient(135deg,#FFFDF9_0%,#FBF6EE_48%,#F7F1E6_100%)] p-7 md:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.05)]">
            <h2 className="serif text-3xl md:text-4xl font-semibold leading-tight">
              Why these questions matter so much
            </h2>

            <div className="mt-6 grid gap-5">
              <div>
                <h3 className="serif text-[24px] md:text-[28px]">
                  The early setup shapes everything after
                </h3>
                <p className="sans mt-2 text-[16px] md:text-[17px] leading-[1.85] text-black/75">
                  The choices you make early can affect how you invoice, how you
                  organize work, how you think about tax residency, and what
                  your professional life in Italy actually looks like. Clarity
                  at the beginning can save an enormous amount of stress later.
                </p>
              </div>

              <div>
                <h3 className="serif text-[24px] md:text-[28px]">
                  Italy has opportunities many newcomers miss
                </h3>
                <p className="sans mt-2 text-[16px] md:text-[17px] leading-[1.85] text-black/75">
                  Italy is often spoken about only in terms of bureaucracy, but
                  there are also tax and structuring opportunities that many
                  newcomers do not fully understand at first. The problem is not
                  always the lack of options. It is the lack of clear guidance.
                </p>
              </div>

              <div>
                <h3 className="serif text-[24px] md:text-[28px]">
                  You do not need more noise
                </h3>
                <p className="sans mt-2 text-[16px] md:text-[17px] leading-[1.85] text-black/75">
                  Many clients come in carrying fragments of advice from social
                  media, forums, expat groups, and secondhand accountant stories.
                  What they need instead is a more strategic understanding of
                  the landscape, so they can ask better questions and make more
                  grounded decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-8 md:pb-10">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="serif text-4xl md:text-5xl font-semibold leading-[1.05]">
              Tax & Partita IVA Portal
            </h2>

            <div className="max-w-4xl mx-auto px-2 text-center mt-4 space-y-4">
              <p className="sans text-[17px] md:text-[19px] leading-[1.75] tracking-[-0.01em] text-[#2F2F2F]">
                Italy has tax opportunities most newcomers miss.
                <span className="text-[#4B5D44] font-medium">
                  {" "}
                  Choosing the right path early can change a lot.
                </span>
              </p>

              <p className="sans text-[15px] md:text-[17px] leading-[1.85] text-[#555555] max-w-3xl mx-auto">
                This package is designed to help you understand the practical
                setup side of working and structuring yourself in Italy, with
                more insight and less confusion.
              </p>
            </div>

            <div className="mt-6 h-px w-28 mx-auto bg-gradient-to-r from-transparent via-[#C9A86A]/70 to-transparent" />
          </div>

          <div className="mx-auto max-w-3xl">
            <MainOfferCard
              title="Tax & Partita IVA Portal"
              blurb="Italy has tax opportunities most newcomers miss. This package helps you understand Italy’s tax regimes so you can make informed decisions early. Choosing the right path from the start can mean keeping thousands more in your pocket."
              ctaHref="/#settling"
              ctaText="Discover Tax Path"
              amount="299"
              oldPrice="€499"
              bullets={[
                <>
                  <strong>Access to our Tax & Partita IVA Portal:</strong> 12
                  insightful chapters explaining the practical setup side of
                  working and structuring yourself in Italy.
                </>,
                <>
                  <strong>Strategic 30-minute consultation</strong> to discuss
                  opening a professional activity (Partita IVA).
                </>,
                <>
                  Breakdown of key <strong>tax benefits</strong> that could help
                  you save more.
                </>,
                <>
                  Are you paid in <strong>crypto</strong>? How does that work?
                  We cover that too.
                </>,
                <>
                  <strong>Bonus access to our dedicated Codice Fiscale Portal</strong>,
                  as it is an important building block for your tax and
                  professional setup.
                </>,
                <>
                  <strong>Common mistakes to avoid</strong> when setting up your
                  Italian tax situation.
                </>,
              ]}
            />
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="serif text-4xl md:text-5xl font-semibold">
              What makes Nomadissimi different here too
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-start">
            <div className="rounded-[30px] border border-black/8 bg-white/75 p-7 md:p-8 shadow-[0_18px_46px_rgba(0,0,0,0.04)]">
              <h3 className="serif text-[26px] md:text-[30px] leading-[1.15]">
                More clarity before the formal accounting stage
              </h3>

              <p className="mt-4 sans text-[15px] md:text-[16px] leading-[1.8] text-black/72">
                Nomadissimi does not pretend to replace a commercialista for
                formal filings or accounting work. What we do is help clients
                understand the landscape far better before or alongside that
                stage, so the questions they ask — and the decisions they make —
                are stronger from the beginning.
              </p>
            </div>

            <div className="rounded-[30px] border border-black/8 bg-white/75 p-7 md:p-8 shadow-[0_18px_46px_rgba(0,0,0,0.04)]">
              <h3 className="serif text-[26px] md:text-[30px] leading-[1.15]">
                Boutique strategy, not generic tax noise
              </h3>

              <p className="mt-4 sans text-[15px] md:text-[16px] leading-[1.8] text-black/72">
                Our model is designed around depth, specificity, and practical
                relevance for internationally mobile people building a life in
                Italy. That means a more personal, more strategic experience
                than what most people get from broad online advice or purely
                transactional support.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="serif text-4xl md:text-5xl font-semibold">
              What comes next after tax clarity
            </h2>

            <div className="max-w-4xl mx-auto px-2 mt-5 space-y-5">
              <p className="sans text-[18px] md:text-[21px] leading-[1.75] tracking-[-0.01em] text-[#2F2F2F]">
                A well-built life in Italy is not only about one category.
                <span className="text-[#4B5D44] font-medium">
                  {" "}
                  The pieces connect.
                </span>
              </p>

              <p className="sans text-[16px] md:text-[18px] leading-[1.9] text-[#555555] max-w-4xl mx-auto">
                Clients thinking about tax often also need support with{" "}
                <Link
                  href="/residence"
                  className="underline underline-offset-2 transition hover:text-[#4B5D44]"
                >
                  residence registration
                </Link>
                , codice fiscale, local systems, healthcare, lifestyle
                adaptation, and the broader practical side of settling in.
              </p>

              <p className="sans text-[16px] md:text-[18px] leading-[1.9] text-[#4B5D44] max-w-4xl mx-auto">
                That is why Nomadissimi’s ecosystem is designed to help you move
                beyond isolated questions and into a more coherent, more
                sustainable life in Italy.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-start">
            <MiniSupportCard
              title="Residence Registration Portal"
              blurb="A practical post-arrival support package for one of the first major bureaucratic steps in Italy."
              ctaHref="/residence"
              ctaText="Get Your Residence"
              amount="299"
              oldPrice="€499"
              bullets={[
                "8 chapters on residence registration and post-arrival process",
                "30-minute practical consultation",
                "Permesso and comune guidance",
                "Bonus Codice Fiscale Portal access",
              ]}
            />

            <MiniSupportCard
              title="La Dolce Vita Integration"
              blurb="A practical support package for the real-life side of moving to Italy — beyond systems and beyond forms."
              ctaHref="/#settling"
              ctaText="Settle in Smoothly"
              amount="199"
              oldPrice="€399"
              bullets={[
                "Lifestyle and regional guidance",
                "Renting and healthcare insights",
                "Cultural adaptation support",
                "A smoother path into daily life in Italy",
              ]}
            />
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="text-center rounded-[32px] border border-black/8 bg-[#4B5D44] px-6 py-10 md:px-10 md:py-12 shadow-[0_26px_70px_rgba(75,93,68,0.22)]">
            <h2 className="serif text-3xl md:text-4xl font-semibold text-white leading-tight">
              Need help making the right tax decisions early?
            </h2>

            <p className="sans mt-4 max-w-2xl mx-auto text-[16px] md:text-[17px] leading-[1.85] text-white/82">
              Explore the Tax & Partita IVA Portal, choose the level of support
              that fits your situation, or contact us if you want help
              understanding what makes the most sense next.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3">
              <Link
                href="/#settling"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 serif text-[18px] text-[#1F1F1F] transition hover:bg-[#F7F2EA]"
              >
                Explore tax support
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
        id="faq-schema-tax"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

function MainOfferCard({
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
  bullets: React.ReactNode[];
  ctaHref: string;
  ctaText: string;
  amount: string;
  oldPrice: string;
}) {
  return (
    <div className="rounded-[30px] border border-[#DCDDD8] bg-[#F3F6F1] p-7 md:p-8 shadow-[0_18px_46px_rgba(0,0,0,0.04)] h-full flex flex-col">
      <div className="flex items-start justify-between gap-4">
        <h3 className="serif text-[28px] md:text-[32px] leading-[1.15] text-[#1F1F1F]">
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


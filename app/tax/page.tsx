import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Italy Tax and Partita IVA Support",
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
        name: "What does the Tax and Partita IVA support help with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nomadissimi helps clients understand Italian tax basics, think more clearly about professional setup, understand early regime questions, and make more strategic decisions before or alongside formal accounting support.",
        },
      },
      {
        "@type": "Question",
        name: "Does Nomadissimi replace a commercialista?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Nomadissimi does not replace a commercialista for formal accounting or filing work. It helps clients become more informed, ask better questions, and make stronger early decisions.",
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
            professional questions that shape life in Italy.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/#settling"
              className="inline-flex items-center justify-center rounded-full bg-[#4B5D44] px-6 py-3 serif text-[18px] text-white transition hover:bg-[#3E4E38]"
            >
              View tax support
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
              What this service helps with
            </h2>

            <div className="mt-5 space-y-5 sans text-[16px] md:text-[17px] leading-[1.9] text-black/75">
              <p>
                Moving to Italy is not only a paperwork story. It is also a
                work, tax, and professional-structure story, especially if you
                are self-employed, internationally paid, building a business, or
                earning across borders.
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
                  Remote workers trying to understand how Italian tax reality
                  may affect them
                </li>
                <li>
                  People considering whether they may need a Partita IVA
                </li>
                <li>
                  New arrivals who want to understand early tax questions before
                  making rushed decisions
                </li>
              </ul>
            </div>

            <div className="rounded-[28px] border border-black/8 bg-[#FBF7F0] p-7 shadow-[0_18px_50px_rgba(0,0,0,0.04)]">
              <h2 className="serif text-2xl md:text-3xl font-semibold">
                What clients usually need help with
              </h2>

              <ul className="mt-5 space-y-4 sans text-[16px] leading-[1.8] text-black/75">
                <li>Understanding what Italian tax questions matter early on</li>
                <li>Thinking through possible professional setup</li>
                <li>Understanding regime and benefit questions more clearly</li>
                <li>Avoiding common setup mistakes that become costly later</li>
                <li>Clarifying what to ask a commercialista</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
          <div className="rounded-[30px] border border-[#E5D6BA] bg-[linear-gradient(135deg,#FFFDF9_0%,#FBF6EE_48%,#F7F1E6_100%)] p-7 md:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.05)]">
            <h2 className="serif text-3xl md:text-4xl font-semibold leading-tight">
              Why these questions matter so early
            </h2>

            <div className="mt-6 grid gap-5">
              <div>
                <h3 className="serif text-[24px] md:text-[28px]">
                  Early choices shape later outcomes
                </h3>
                <p className="sans mt-2 text-[16px] md:text-[17px] leading-[1.85] text-black/75">
                  The choices you make early can affect how you work, invoice,
                  organize your activity, and navigate professional life in
                  Italy.
                </p>
              </div>

              <div>
                <h3 className="serif text-[24px] md:text-[28px]">
                  Italy has opportunities many newcomers miss
                </h3>
                <p className="sans mt-2 text-[16px] md:text-[17px] leading-[1.85] text-black/75">
                  Italy is often spoken about only in terms of bureaucracy, but
                  there are also real structuring and tax opportunities many
                  newcomers do not fully understand at first.
                </p>
              </div>

              <div>
                <h3 className="serif text-[24px] md:text-[28px]">
                  You do not need more online noise
                </h3>
                <p className="sans mt-2 text-[16px] md:text-[17px] leading-[1.85] text-black/75">
                  Many clients come in carrying fragments of advice from expat
                  groups, social media, and secondhand stories. What they
                  actually need is a clearer strategic view of the landscape.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="text-center rounded-[32px] border border-black/8 bg-[#4B5D44] px-6 py-10 md:px-10 md:py-12 shadow-[0_26px_70px_rgba(75,93,68,0.22)]">
            <h2 className="serif text-3xl md:text-4xl font-semibold text-white leading-tight">
              Need help making the right tax decisions early?
            </h2>

            <p className="sans mt-4 max-w-2xl mx-auto text-[16px] md:text-[17px] leading-[1.85] text-white/82">
              Explore tax support, or contact us if you want help understanding
              what makes the most sense next.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3">
              <Link
                href="/#settling"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 serif text-[18px] text-[#1F1F1F] transition hover:bg-[#F7F2EA]"
              >
                View tax support
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
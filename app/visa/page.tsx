import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Italy Digital Nomad Visa Support",
  description:
    "Boutique Italy visa support for digital nomads, remote workers, and freelancers. Clear guidance, strategic preparation, and a more human path to moving to Italy.",
  alternates: {
    canonical: "/visa",
  },
};

export default function VisaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Nomadissimi visa support best for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nomadissimi visa support is best for digital nomads, remote workers, freelancers, founders, and online professionals who want a clearer and more strategic path to moving to Italy.",
        },
      },
      {
        "@type": "Question",
        name: "What does Nomadissimi help with on the visa side?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nomadissimi helps clients understand the Italian digital nomad visa process more clearly, prepare more strategically, and move through eligibility, document planning, and next steps with less confusion.",
        },
      },
      {
        "@type": "Question",
        name: "Does Nomadissimi only help with the visa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Nomadissimi also supports clients beyond the visa, including residence registration, tax-related orientation, and practical settling-in guidance for life in Italy.",
        },
      },
    ],
  };

  return (
    <>
      <main className="min-h-screen bg-[#F8F5EF] text-[#1F1F1F]">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 md:pt-24 md:pb-14">
          <p className="sans text-xs md:text-sm uppercase tracking-[0.18em] text-[#4B5D44]/65">
            Nomadissimi visa support
          </p>

          <h1 className="serif mt-4 text-4xl md:text-5xl lg:text-6xl leading-[1.08] font-semibold tracking-[0.01em] max-w-4xl">
            Italy digital nomad visa support, with more clarity and less chaos
          </h1>

          <p className="serif mt-3 max-w-3xl text-[24px] md:text-[30px] leading-[1.3] text-black/65 tracking-[-0.01em]">
            A boutique, strategic approach for remote workers, freelancers, and
            online professionals moving to Italy.
          </p>

          <p className="sans mt-6 max-w-3xl text-[18px] md:text-[20px] leading-[1.85] text-black/72">
            Nomadissimi helps digital nomads and remote workers prepare for
            Italy’s visa process with more structure, stronger guidance, and far
            less overwhelm.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/#packages"
              className="inline-flex items-center justify-center rounded-full bg-[#4B5D44] px-6 py-3 serif text-[18px] text-white transition hover:bg-[#3E4E38]"
            >
              Explore visa plans
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-black/12 bg-white px-6 py-3 serif text-[18px] text-[#1F1F1F] transition hover:bg-[#F7F2EA]"
            >
              Help me choose
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
                This is for people who are serious about Italy, but do not want
                to spend the next few months drowning in vague consulate
                language, scattered online advice, and endless second-guessing.
              </p>

              <p>
                Nomadissimi helps make the visa process feel more organized,
                more strategic, and much more human, especially for clients who
                want more than a generic checklist and less than a cold,
                impersonal agency experience.
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
                  Digital nomads and remote workers planning a serious move to
                  Italy
                </li>
                <li>
                  Freelancers, founders, and online professionals who want a
                  stronger path forward
                </li>
                <li>
                  Applicants who want structure without the cold feeling of a
                  generic agency
                </li>
                <li>
                  People overwhelmed by consulate instructions, document
                  strategy, and scattered online information
                </li>
              </ul>
            </div>

            <div className="rounded-[28px] border border-black/8 bg-[#FBF7F0] p-7 shadow-[0_18px_50px_rgba(0,0,0,0.04)]">
              <h2 className="serif text-2xl md:text-3xl font-semibold">
                What clients usually need help with
              </h2>

              <ul className="mt-5 space-y-4 sans text-[16px] leading-[1.8] text-black/75">
                <li>Understanding whether they actually qualify</li>
                <li>Clarifying the strongest route forward</li>
                <li>Organizing documents in a calmer, more strategic way</li>
                <li>Preparing for consular expectations with more confidence</li>
                <li>Avoiding weak documentation, delays, and wrong turns</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
          <div className="rounded-[30px] border border-[#E5D6BA] bg-[linear-gradient(135deg,#FFFDF9_0%,#FBF6EE_48%,#F7F1E6_100%)] p-7 md:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.05)]">
            <h2 className="serif text-3xl md:text-4xl font-semibold leading-tight">
              What makes Nomadissimi different
            </h2>

            <div className="mt-6 grid gap-5">
              <div>
                <h3 className="serif text-[24px] md:text-[28px]">
                  Italy specialization — from the inside
                </h3>
                <p className="sans mt-2 text-[16px] md:text-[17px] leading-[1.85] text-black/75">
                  Nomadissimi is focused specifically on Italy rather than broad
                  global immigration. That gives our work more depth, more
                  specificity, and more practical relevance.
                </p>
              </div>

              <div>
                <h3 className="serif text-[24px] md:text-[28px]">
                  Boutique support
                </h3>
                <p className="sans mt-2 text-[16px] md:text-[17px] leading-[1.85] text-black/75">
                  Our approach is intentionally more personal, more strategic,
                  and more grounded than generic high-volume relocation support.
                </p>
              </div>

              <div>
                <h3 className="serif text-[24px] md:text-[28px]">
                  Beyond the visa
                </h3>
                <p className="sans mt-2 text-[16px] md:text-[17px] leading-[1.85] text-black/75">
                  Your visa is not the end of the move. It is the beginning of
                  real life in Italy. That is why Nomadissimi also helps clients
                  prepare for{" "}
                  <Link
                    href="/residence"
                    className="underline underline-offset-2 transition hover:text-[#4B5D44]"
                  >
                    residence setup
                  </Link>
                  ,{" "}
                  <Link
                    href="/tax"
                    className="underline underline-offset-2 transition hover:text-[#4B5D44]"
                  >
                    tax orientation
                  </Link>
                  , and broader practical settling-in support.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="text-center rounded-[32px] border border-black/8 bg-[#4B5D44] px-6 py-10 md:px-10 md:py-12 shadow-[0_26px_70px_rgba(75,93,68,0.22)]">
            <h2 className="serif text-3xl md:text-4xl font-semibold text-white leading-tight">
              Ready to move to Italy with more clarity?
            </h2>

            <p className="sans mt-4 max-w-2xl mx-auto text-[16px] md:text-[17px] leading-[1.85] text-white/82">
              Explore the Nomadissimi visa plans, or contact us if you want help
              deciding where to begin.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3">
              <Link
                href="/#packages"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 serif text-[18px] text-[#1F1F1F] transition hover:bg-[#F7F2EA]"
              >
                Explore visa plans
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
        id="faq-schema-visa"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
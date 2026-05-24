import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Italy Relocation Services",
  description:
    "Explore Nomadissimi’s boutique Italy relocation services for digital nomads, remote workers, freelancers, and internationally mobile clients: visa support, residence registration, tax orientation, and settling-in guidance.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does Nomadissimi offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nomadissimi offers boutique Italy relocation support across the main practical phases of the move: visa support, residence registration, tax and Partita IVA orientation, and settling-in guidance for life in Italy.",
        },
      },
      {
        "@type": "Question",
        name: "Which Nomadissimi service is right for me?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The right service depends on where you are in the process. People still preparing their move usually start with visa support. People who have already arrived often need residence registration support. People thinking about professional setup or tax questions generally need tax support.",
        },
      },
      {
        "@type": "Question",
        name: "Does Nomadissimi only help before the move?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Nomadissimi helps clients both before and after the move, including visa preparation, residence registration, tax orientation, and practical settling-in support for life in Italy.",
        },
      },
    ],
  };

  return (
    <>
      <main className="min-h-screen bg-[#F8F5EF] text-[#1F1F1F]">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 md:pt-24 md:pb-14">
          <p className="sans text-xs md:text-sm uppercase tracking-[0.18em] text-[#4B5D44]/65">
            Nomadissimi services
          </p>

          <h1 className="serif mt-4 text-4xl md:text-5xl lg:text-6xl leading-[1.08] font-semibold tracking-[0.01em] max-w-4xl">
            Boutique Italy relocation services, from visa to real life
          </h1>

          <p className="serif mt-3 max-w-3xl text-[24px] md:text-[30px] leading-[1.3] text-black/65 tracking-[-0.01em]">
            Because moving to Italy is not one question. It is a sequence.
          </p>

          <p className="sans mt-6 max-w-3xl text-[18px] md:text-[20px] leading-[1.85] text-black/72">
            Nomadissimi supports digital nomads, remote workers, freelancers,
            founders, and internationally mobile clients across the main
            practical phases of moving to Italy.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/visa"
              className="inline-flex items-center justify-center rounded-full bg-[#4B5D44] px-6 py-3 serif text-[18px] text-white transition hover:bg-[#3E4E38]"
            >
              Start with visa support
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
              How to use this page
            </h2>

            <div className="mt-5 space-y-5 sans text-[16px] md:text-[17px] leading-[1.9] text-black/75">
              <p>
                If you are still figuring out your route into Italy, start with{" "}
                <Link
                  href="/visa"
                  className="underline underline-offset-2 transition hover:text-[#4B5D44]"
                >
                  visa support
                </Link>
                .
              </p>

              <p>
                If your visa is approved or you are already arriving, the next
                step is often{" "}
                <Link
                  href="/residence"
                  className="underline underline-offset-2 transition hover:text-[#4B5D44]"
                >
                  residence registration support
                </Link>
                .
              </p>

              <p>
                If your questions are about professional setup, tax logic, or
                whether you may need a Partita IVA, start with{" "}
                <Link
                  href="/tax"
                  className="underline underline-offset-2 transition hover:text-[#4B5D44]"
                >
                  tax support
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
            <ServiceCard
              title="Visa support"
              description="For people still preparing their move and trying to understand eligibility, document strategy, and how to build a stronger application."
              href="/visa"
              cta="Explore visa support"
            />

            <ServiceCard
              title="Residence support"
              description="For people who have already arrived in Italy or are about to, and need clearer help with residence registration, permesso, and early post-arrival bureaucracy."
              href="/residence"
              cta="Explore residence support"
            />

            <ServiceCard
              title="Tax support"
              description="For freelancers, founders, remote workers, and self-employed clients who want more clarity on tax questions, professional setup, and Partita IVA decisions."
              href="/tax"
              cta="Explore tax support"
            />
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
                  Italy specialization
                </h3>
                <p className="sans mt-2 text-[16px] md:text-[17px] leading-[1.85] text-black/75">
                  Nomadissimi is focused specifically on Italy rather than broad
                  global immigration. That gives the work more depth, more
                  specificity, and more practical relevance.
                </p>
              </div>

              <div>
                <h3 className="serif text-[24px] md:text-[28px]">
                  Boutique support
                </h3>
                <p className="sans mt-2 text-[16px] md:text-[17px] leading-[1.85] text-black/75">
                  The model is intentionally more personal, more strategic, and
                  more human than generic high-volume immigration support.
                </p>
              </div>

              <div>
                <h3 className="serif text-[24px] md:text-[28px]">
                  A connected service ecosystem
                </h3>
                <p className="sans mt-2 text-[16px] md:text-[17px] leading-[1.85] text-black/75">
                  Italy is not a one-step process. That is why Nomadissimi is
                  built as an ecosystem, helping clients navigate not only entry
                  into Italy, but the practical realities of building a life
                  there.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="text-center rounded-[32px] border border-black/8 bg-[#4B5D44] px-6 py-10 md:px-10 md:py-12 shadow-[0_26px_70px_rgba(75,93,68,0.22)]">
            <h2 className="serif text-3xl md:text-4xl font-semibold text-white leading-tight">
              Not sure where to begin?
            </h2>

            <p className="sans mt-4 max-w-2xl mx-auto text-[16px] md:text-[17px] leading-[1.85] text-white/82">
              Explore the service pages, or contact us if you want help deciding
              what makes the most sense for your stage and your move.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3">
              <Link
                href="/visa"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 serif text-[18px] text-[#1F1F1F] transition hover:bg-[#F7F2EA]"
              >
                Start with visa support
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
        id="faq-schema-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

function ServiceCard({
  title,
  description,
  href,
  cta,
}: {
  title: string;
  description: string;
  href: string;
  cta: string;
}) {
  return (
    <div className="rounded-[30px] border border-black/8 bg-white/75 p-7 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)] h-full flex flex-col transition hover:-translate-y-[2px]">
      <h2 className="serif text-[28px] md:text-[32px] leading-[1.12] text-[#1F1F1F]">
        {title}
      </h2>

      <p className="mt-4 sans text-[15px] md:text-[16px] leading-[1.75] text-black/72 flex-1">
        {description}
      </p>

      <div className="mt-6 pt-6 border-t border-black/10">
        <Link
          href={href}
          className="inline-flex w-full items-center justify-center rounded-2xl bg-[#4B5D44] px-5 py-4 text-center transition hover:bg-[#3E4E38]"
        >
          <span className="serif text-[20px] md:text-[22px] font-medium tracking-[0.04em] leading-[1.02] text-white">
            {cta}
          </span>
        </Link>
      </div>
    </div>
  );
}

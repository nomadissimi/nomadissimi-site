import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Italy Relocation Services | Nomadissimi",
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
          text: "The right service depends on where you are in the process. People still preparing their move usually start with visa support. People who have already arrived or are about to arrive often need residence registration support. People thinking about professional setup, tax questions, or Partita IVA generally need tax support. Clients wanting broader lifestyle and integration help often choose settling-in guidance.",
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
      {
        "@type": "Question",
        name: "What makes Nomadissimi different from generic immigration agencies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nomadissimi is focused specifically on Italy and built around a boutique, strategic, and human model rather than high-volume generic immigration support. Its approach combines international relocation perspective with on-the-ground Italian insight, helping clients navigate both bureaucracy and the lived reality of building a life in Italy.",
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
            practical phases of moving to Italy — with more clarity, more
            strategy, and far less chaos.
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
                If your questions are about professional setup, tax logic,
                structuring your work in Italy, or whether you may need a
                Partita IVA, start with{" "}
                <Link
                  href="/tax"
                  className="underline underline-offset-2 transition hover:text-[#4B5D44]"
                >
                  tax and Partita IVA support
                </Link>
                .
              </p>

              <p>
                If what you need is broader lifestyle and practical settling-in
                guidance, you will probably want one of the post-arrival support
                options connected through our{" "}
                <Link
                  href="/#settling"
                  className="underline underline-offset-2 transition hover:text-[#4B5D44]"
                >
                  settling-in services
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-[28px] border border-black/8 bg-[#FBF7F0] p-7 shadow-[0_18px_50px_rgba(0,0,0,0.04)]">
              <h2 className="serif text-2xl md:text-3xl font-semibold">
                Who we are best for
              </h2>

              <ul className="mt-5 space-y-4 sans text-[16px] leading-[1.8] text-black/75">
                <li>
                  Digital nomads and remote workers planning a move to Italy
                </li>
                <li>
                  Freelancers, founders, and internationally mobile
                  professionals
                </li>
                <li>
                  People who want boutique, strategic support rather than
                  generic high-volume service
                </li>
                <li>
                  Clients who care about both the paperwork and the life they
                  are building
                </li>
                <li>
                  People who feel overwhelmed by scattered or contradictory
                  information
                </li>
              </ul>
            </div>

            <div className="rounded-[28px] border border-black/8 bg-[#FBF7F0] p-7 shadow-[0_18px_50px_rgba(0,0,0,0.04)]">
              <h2 className="serif text-2xl md:text-3xl font-semibold">
                What Nomadissimi helps with
              </h2>

              <ul className="mt-5 space-y-4 sans text-[16px] leading-[1.8] text-black/75">
                <li>Visa preparation and application strategy</li>
                <li>Residence registration and post-arrival setup</li>
                <li>Tax and Partita IVA orientation</li>
                <li>Codice fiscale and local systems context</li>
                <li>Settling into life in Italy more smoothly and intelligently</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="serif text-4xl md:text-5xl font-semibold leading-[1.05]">
              Explore the service ecosystem
            </h2>

            <p className="sans mt-4 max-w-3xl mx-auto text-[17px] md:text-[19px] leading-[1.75] text-black/72">
              Each Nomadissimi service is designed for a different phase of the
              move, but they all connect. The goal is not just to solve one
              problem. It is to help you build a more coherent path into life in
              Italy.
            </p>

            <div className="mt-6 h-px w-28 mx-auto bg-gradient-to-r from-transparent via-[#C9A86A]/70 to-transparent" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
            <ServiceCard
              eyebrow="Start here"
              title="Visa support"
              href="/visa"
              description="For people still preparing their move and trying to understand eligibility, document strategy, and how to build a stronger application with less overwhelm."
              bullets={[
                "Digital nomad visa support",
                "Private Visa Portal access",
                "Document strategy and consultations",
                "Different support levels depending on how hands-on you want the process to be",
              ]}
              cta="Explore visa support"
            />

            <ServiceCard
              eyebrow="After approval"
              title="Residence support"
              href="/residence"
              description="For people who have already arrived in Italy or are about to, and need clearer help with residence registration, permesso, and early post-arrival bureaucracy."
              bullets={[
                "Residence Registration Portal",
                "Practical guidance on key early steps",
                "Support around local bureaucracy and time-sensitive process stages",
                "A calmer transition into the first weeks of life in Italy",
              ]}
              cta="Explore residence support"
            />

            <ServiceCard
              eyebrow="Professional setup"
              title="Tax & Partita IVA support"
              href="/tax"
              description="For freelancers, founders, remote workers, and self-employed clients who want more clarity on tax questions, professional setup, and strategic early decisions."
              bullets={[
                "Tax & Partita IVA Portal",
                "Professional setup orientation",
                "Tax regime and early-structure clarity",
                "A stronger foundation before or alongside formal accounting support",
              ]}
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
                  Italy specialization — from the inside
                </h3>
                <p className="sans mt-2 text-[16px] md:text-[17px] leading-[1.85] text-black/75">
                  Nomadissimi is focused specifically on Italy rather than broad
                  global immigration. That gives our work more depth, more
                  specificity, and more practical relevance.
                </p>
                <p className="sans mt-3 text-[16px] md:text-[17px] leading-[1.85] text-black/75">
                  Our approach combines international relocation perspective
                  with on-the-ground Italian insight. It is shaped not only by
                  the lived experience of moving abroad, but also by native
                  familiarity with Italian bureaucracy, regional culture, and
                  the way Italian systems actually work in real life.
                </p>
              </div>

              <div>
                <h3 className="serif text-[24px] md:text-[28px]">
                  Boutique support
                </h3>
                <p className="sans mt-2 text-[16px] md:text-[17px] leading-[1.85] text-black/75">
                  We are intentionally not a giant agency. Our model is designed
                  around clarity, trust, nuance, and personal attention. That
                  means a more thoughtful experience and a more grounded way of
                  moving through a major life transition.
                </p>
              </div>

              <div>
                <h3 className="serif text-[24px] md:text-[28px]">
                  More than one transaction
                </h3>
                <p className="sans mt-2 text-[16px] md:text-[17px] leading-[1.85] text-black/75">
                  Italy is not a one-step process. It is a chain of decisions.
                  That is why Nomadissimi is built as an ecosystem: not only to
                  help you with one isolated problem, but to support a more
                  complete and better-integrated move.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="serif text-4xl md:text-5xl font-semibold">
              Not sure where to begin?
            </h2>

            <p className="sans mt-4 max-w-3xl mx-auto text-[17px] md:text-[19px] leading-[1.75] text-black/72">
              Here is the simplest way to think about it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-start">
            <DecisionCard
              title="If you are still preparing your move"
              body="Start with visa support. That is where you clarify the route, understand document strategy, and begin building a stronger application."
              href="/visa"
              cta="Go to visa support"
            />

            <DecisionCard
              title="If your visa is approved or you are already arriving"
              body="Start with residence support. That is where the practical post-arrival steps begin to matter immediately."
              href="/residence"
              cta="Go to residence support"
            />

            <DecisionCard
              title="If your main questions are about work, tax, or setup"
              body="Start with tax and Partita IVA support. This is especially important for freelancers, self-employed professionals, founders, and internationally paid clients."
              href="/tax"
              cta="Go to tax support"
            />

            <DecisionCard
              title="If you want broader practical life support in Italy"
              body="Explore the settling-in support options for lifestyle, local systems, healthcare, renting, and a smoother integration into daily life."
              href="/#settling"
              cta="Explore settling-in support"
            />
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="text-center rounded-[32px] border border-black/8 bg-[#4B5D44] px-6 py-10 md:px-10 md:py-12 shadow-[0_26px_70px_rgba(75,93,68,0.22)]">
            <h2 className="serif text-3xl md:text-4xl font-semibold text-white leading-tight">
              Ready to choose the right kind of support?
            </h2>

            <p className="sans mt-4 max-w-2xl mx-auto text-[16px] md:text-[17px] leading-[1.85] text-white/82">
              Explore the dedicated service pages, or contact us if you want
              help deciding what makes the most sense for your stage, your
              priorities, and your move.
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
  eyebrow,
  title,
  href,
  description,
  bullets,
  cta,
}: {
  eyebrow: string;
  title: string;
  href: string;
  description: string;
  bullets: string[];
  cta: string;
}) {
  return (
    <div className="rounded-[30px] border border-black/8 bg-white/75 p-7 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)] h-full flex flex-col transition hover:-translate-y-[2px]">
      <p className="sans text-[12px] uppercase tracking-[0.16em] text-[#4B5D44]/62">
        {eyebrow}
      </p>

      <h3 className="serif mt-3 text-[28px] md:text-[32px] leading-[1.12] text-[#1F1F1F]">
        {title}
      </h3>

      <p className="mt-4 sans text-[15px] md:text-[16px] leading-[1.75] text-black/72">
        {description}
      </p>

      <div className="mt-5 space-y-3 sans text-[15px] md:text-[16px] leading-[1.8] text-black/75 flex-1">
        {bullets.map((bullet, index) => (
          <div key={index} className="flex items-start gap-3">
            <span className="mt-[8px] h-2.5 w-2.5 rounded-full bg-[#C9A86A] shrink-0" />
            <div>{bullet}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-black/10">
        <Link
          href={href}
          className="inline-flex w-full items-center justify-center rounded-2xl bg-[#4B5D44] px-5 py-4 text-center shadow-[0_10px_26px_rgba(75,93,68,0.22)] transition hover:bg-[#3E4E38] hover:-translate-y-[1px]"
        >
          <span className="serif text-[20px] md:text-[22px] font-medium tracking-[0.04em] leading-[1.02] text-white">
            {cta}
          </span>
        </Link>
      </div>
    </div>
  );
}

function DecisionCard({
  title,
  body,
  href,
  cta,
}: {
  title: string;
  body: string;
  href: string;
  cta: string;
}) {
  return (
    <div className="rounded-[30px] border border-black/8 bg-[#FBF7F0] p-7 md:p-8 shadow-[0_18px_46px_rgba(0,0,0,0.04)] h-full flex flex-col">
      <h3 className="serif text-[26px] md:text-[30px] leading-[1.15] text-[#1F1F1F]">
        {title}
      </h3>

      <p className="mt-4 sans text-[15px] md:text-[16px] leading-[1.8] text-black/72 flex-1">
        {body}
      </p>

      <div className="mt-6 pt-6 border-t border-black/10">
        <Link
          href={href}
          className="inline-flex w-full items-center justify-center rounded-2xl border border-[#C9A86A]/65 bg-white px-5 py-4 text-center transition hover:bg-[#F9F5EE] hover:-translate-y-[1px] hover:shadow-[0_10px_24px_rgba(193,168,125,0.14)]"
        >
          <span className="serif text-[20px] md:text-[22px] font-medium tracking-[0.04em] leading-[1.02] text-[#1A1A1A]">
            {cta}
          </span>
        </Link>
      </div>
    </div>
  );
}
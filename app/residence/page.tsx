import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Italy Residence Registration Support",
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
          text: "Nomadissimi residence support is best for people who have already moved to Italy, are about to arrive, or have recently received visa approval and want clearer help with the residence registration process.",
        },
      },
      {
        "@type": "Question",
        name: "What does the Residence Registration Portal help with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Residence Registration Portal helps clients understand the key practical steps after arrival in Italy, including residence permit questions, comune registration, and the early administrative process that often feels confusing or time-sensitive.",
        },
      },
      {
        "@type": "Question",
        name: "Does Nomadissimi only help with the visa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Nomadissimi also helps clients beyond the visa, including residence registration, tax-related orientation, codice fiscale, and the practical realities of settling into life in Italy more smoothly and strategically.",
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
            less confusion.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/#settling"
              className="inline-flex items-center justify-center rounded-full bg-[#4B5D44] px-6 py-3 serif text-[18px] text-white transition hover:bg-[#3E4E38]"
            >
              View residence support
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
                Many people prepare intensely for the visa, only to discover
                that the real-life setup after arrival in Italy comes with its
                own stress, local logic, and practical deadlines.
              </p>

              <p>
                Residence registration is one of the first major practical steps
                after arrival, and it can feel especially disorienting when you
                are newly moved, adjusting to a different system, and trying not
                to make mistakes that slow everything down.
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
              </ul>
            </div>

            <div className="rounded-[28px] border border-black/8 bg-[#FBF7F0] p-7 shadow-[0_18px_50px_rgba(0,0,0,0.04)]">
              <h2 className="serif text-2xl md:text-3xl font-semibold">
                What clients usually need help with
              </h2>

              <ul className="mt-5 space-y-4 sans text-[16px] leading-[1.8] text-black/75">
                <li>Understanding the early residence process after arrival</li>
                <li>Knowing what practical steps matter first</li>
                <li>Making sense of the residence permit process</li>
                <li>Clarifying comune registration and local documentation</li>
                <li>
                  Reducing stress around timing-sensitive post-arrival steps
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
          <div className="rounded-[30px] border border-[#E5D6BA] bg-[linear-gradient(135deg,#FFFDF9_0%,#FBF6EE_48%,#F7F1E6_100%)] p-7 md:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.05)]">
            <h2 className="serif text-3xl md:text-4xl font-semibold leading-tight">
              Why this phase feels harder than people expect
            </h2>

            <div className="mt-6 grid gap-5">
              <div>
                <h3 className="serif text-[24px] md:text-[28px]">
                  The visa was only phase one
                </h3>
                <p className="sans mt-2 text-[16px] md:text-[17px] leading-[1.85] text-black/75">
                  Approval often opens the door to a second layer of bureaucracy
                  that feels more immediate, more practical, and sometimes more
                  confusing.
                </p>
              </div>

              <div>
                <h3 className="serif text-[24px] md:text-[28px]">
                  Italian systems are local and contextual
                </h3>
                <p className="sans mt-2 text-[16px] md:text-[17px] leading-[1.85] text-black/75">
                  Residence-related steps are not always experienced in a
                  perfectly uniform way. Local expectations and office culture
                  can feel surprisingly nuanced for newcomers.
                </p>
              </div>

              <div>
                <h3 className="serif text-[24px] md:text-[28px]">
                  You are doing bureaucracy while starting a new life
                </h3>
                <p className="sans mt-2 text-[16px] md:text-[17px] leading-[1.85] text-black/75">
                  This phase often happens while you are also adjusting to
                  housing, language, routines, and the emotional weight of a
                  major move. That is exactly why support should feel calmer and
                  clearer.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="text-center rounded-[32px] border border-black/8 bg-[#4B5D44] px-6 py-10 md:px-10 md:py-12 shadow-[0_26px_70px_rgba(75,93,68,0.22)]">
            <h2 className="serif text-3xl md:text-4xl font-semibold text-white leading-tight">
              Need help getting your first steps in Italy right?
            </h2>

            <p className="sans mt-4 max-w-2xl mx-auto text-[16px] md:text-[17px] leading-[1.85] text-white/82">
              Explore residence support, or contact us if you want help deciding
              what makes the most sense next.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3">
              <Link
                href="/#settling"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 serif text-[18px] text-[#1F1F1F] transition hover:bg-[#F7F2EA]"
              >
                View residence support
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

import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Italy Digital Nomad Visa Support | Nomadissimi",
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
          text: "Nomadissimi visa support is best for digital nomads, remote workers, freelancers, founders, and online professionals who want a clearer and more strategic path to moving to Italy. It is especially suited to people who feel overwhelmed by scattered information, vague consulate instructions, or the stress of trying to prepare everything alone.",
        },
      },
      {
        "@type": "Question",
        name: "What is included in the Nomadissimi visa support experience?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every Nomadissimi visa plan includes access to the Nomadissimi Visa Portal, a structured approach to documents and eligibility, and practical guidance designed to reduce confusion and help clients move forward more confidently. Higher-support plans also include consultations, document review, follow-up support, and soft-landing benefits after approval.",
        },
      },
      {
        "@type": "Question",
        name: "Does Nomadissimi help only with the visa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Nomadissimi also helps clients understand what comes after approval, including residence registration, codice fiscale, tax-related orientation, and practical settling-in support so the move to Italy feels smoother in real life, not only on paper.",
        },
      },
      {
        "@type": "Question",
        name: "What makes Nomadissimi different from generic immigration agencies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nomadissimi is focused specifically on Italy and built around a boutique, human, and strategic model rather than high-volume generic immigration support. Its approach combines international relocation perspective with on-the-ground Italian insight, helping clients navigate both bureaucracy and the lived reality of building a life in Italy.",
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
            less overwhelm. We turn a scattered, confusing process into
            something more organized, more strategic, and much more human.
          </p>

          <div className="mt-8 h-px w-28 bg-gradient-to-r from-transparent via-[#C9A86A]/70 to-transparent" />
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 md:pb-10">
          <div className="rounded-[30px] border border-black/8 bg-white/70 p-7 md:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.06)]">
            <h2 className="serif text-3xl md:text-4xl font-semibold leading-tight">
              What this page is about
            </h2>

            <div className="mt-5 space-y-5 sans text-[16px] md:text-[17px] leading-[1.9] text-black/75">
              <p>
                This is the page for people who already know they are serious
                about Italy, but do not want to spend the next few months
                drowning in Reddit threads, vague consulate wording, and
                contradictory advice online.
              </p>

              <p>
                Every Nomadissimi visa plan is built around the same core: a
                private portal, a smarter document process, and guidance that
                helps you move forward with less chaos.
              </p>

              <p>
                What changes from plan to plan is how much personalized review,
                strategic support, and hands-on assistance you want around that
                portal.
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
                  Digital nomads and remote workers exploring a serious move to
                  Italy
                </li>
                <li>
                  Freelancers, founders, and online professionals trying to
                  understand their strongest path forward
                </li>
                <li>
                  Applicants who want structured support without the cold feeling
                  of a generic agency
                </li>
                <li>
                  People who feel overwhelmed by consulate instructions,
                  document strategy, and scattered online information
                </li>
                <li>
                  Clients who want both practical visa help and a smoother soft
                  landing into real life in Italy
                </li>
              </ul>
            </div>

            <div className="rounded-[28px] border border-black/8 bg-[#FBF7F0] p-7 shadow-[0_18px_50px_rgba(0,0,0,0.04)]">
              <h2 className="serif text-2xl md:text-3xl font-semibold">
                What clients usually need help with
              </h2>

              <ul className="mt-5 space-y-4 sans text-[16px] leading-[1.8] text-black/75">
                <li>Understanding whether they actually qualify</li>
                <li>Clarifying the difference between possible pathways</li>
                <li>Organizing documents in a stronger, calmer way</li>
                <li>
                  Preparing for consular expectations without second-guessing
                  everything
                </li>
                <li>
                  Avoiding expensive delays, weak documentation, and wrong turns
                </li>
                <li>
                  Knowing what happens after approval, not just before it
                </li>
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
                <p className="sans mt-3 text-[16px] md:text-[17px] leading-[1.85] text-black/75">
                  Our work combines international relocation perspective with
                  on-the-ground Italian insight. It is shaped not only by the
                  lived experience of moving abroad, but also by native
                  familiarity with Italian bureaucracy, regional culture, and
                  the way Italian systems actually work in real life.
                </p>
              </div>

              <div>
                <h3 className="serif text-[24px] md:text-[28px]">
                  A private portal, not a vague PDF
                </h3>
                <p className="sans mt-2 text-[16px] md:text-[17px] leading-[1.85] text-black/75">
                  The Nomadissimi Visa Portal is not a dry download and not a
                  random folder of notes. It is a members-only immersive
                  roadmap, designed to help you understand eligibility,
                  structure your case, and prepare documents with more clarity
                  and confidence.
                </p>
              </div>

              <div>
                <h3 className="serif text-[24px] md:text-[28px]">
                  Boutique support
                </h3>
                <p className="sans mt-2 text-[16px] md:text-[17px] leading-[1.85] text-black/75">
                  We are intentionally not a giant agency. Our model is built
                  around clarity, trust, nuance, and personal attention. That
                  means a more thoughtful process and a client experience that
                  feels grounded, strategic, and respectful.
                </p>
              </div>

              <div>
                <h3 className="serif text-[24px] md:text-[28px]">
                  Beyond the visa
                </h3>
                <p className="sans mt-2 text-[16px] md:text-[17px] leading-[1.85] text-black/75">
                  Your visa is not the end of the move. It is the beginning of
                  real life in Italy. That is why Nomadissimi also helps clients
                  prepare for the next layers too, including{" "}
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
                  , and settling in well.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-8 md:pb-10">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="serif text-4xl md:text-5xl font-semibold leading-[1.05]">
              Choose your visa plan
            </h2>

            <div className="max-w-4xl mx-auto px-2 text-center mt-4 space-y-4">
              <p className="sans text-[17px] md:text-[19px] leading-[1.75] tracking-[-0.01em] text-[#2F2F2F]">
                Every Nomadissimi visa plan is built around the same core:
                <span className="text-[#4B5D44] font-medium">
                  {" "}
                  a private portal, a smarter document process, and guidance
                  that helps you move forward with less chaos.
                </span>
              </p>

              <p className="sans text-[15px] md:text-[17px] leading-[1.85] text-[#555555] max-w-3xl mx-auto">
                What changes from plan to plan is how much personalized review,
                strategic support, and hands-on assistance you want around that
                portal.
              </p>

              <p className="serif text-[24px] md:text-[28px] leading-[1.45] text-[#1F1F1F] max-w-3xl mx-auto">
                Let’s turn the dream into an attainable goal.
              </p>

              <p className="sans text-sm md:text-base text-[#2B2B2B]/70 italic">
                ✨ Special pricing for a limited time ✨
              </p>
            </div>

            <div className="mt-6 h-px w-28 mx-auto bg-gradient-to-r from-transparent via-[#C9A86A]/70 to-transparent" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
            <PricingCard
              badge="💡 Clarity"
              accent="#4B5D44"
              title="Choose Clarity"
              amount="99"
              oldPrice="€199"
              bestFor="Best for applicants who want a calm, self-guided start with solid structure before paying for more hands-on support."
              ctaHref="/#packages"
              bullets={[
                <>
                  <strong>
                    Private access to the Nomadissimi Visa Portal:
                  </strong>{" "}
                  our members-only 22-chapter immersive roadmap covering
                  eligibility, application structure, what to prepare, where to
                  get it, and how to stay organized. Access valid for one full
                  year.
                </>,
                <>
                  <strong>“Next Steps Playbook”</strong> to help you move from
                  visa research mode into deeper preparation with more
                  confidence.
                </>,
              ]}
            />

            <PricingCard
              badge="🔍 Guidance"
              accent="#AEC2A1"
              title="Choose Guidance"
              amount="399"
              oldPrice="€599"
              bestFor="Best for applicants who want the portal plus expert eyes on their case, documents, and next decisions."
              ctaHref="/#packages"
              featured
              bullets={[
                <>
                  <strong>Everything inside Clarity</strong>, including the full
                  Nomadissimi Visa Portal and the “Next Steps Playbook.”
                </>,
                <>
                  <strong>45-minute private strategy consultation</strong> to
                  review your case, timing, and application direction once you
                  have gone through the material and are ready for sharper
                  guidance.
                </>,
                <>
                  <strong>Professional document review</strong> so you can catch
                  issues earlier.
                </>,
                <>
                  <strong>30 days of follow-up email support</strong>.
                </>,
                <>
                  <strong>10% off our Residence Registration Portal</strong> for
                  a smoother landing once your visa is approved.
                </>,
              ]}
            />

            <PricingCard
              badge="💎 Concierge"
              accent="#C9A86A"
              title="Choose Concierge"
              amount="699"
              oldPrice="€999"
              bestFor="Best for clients who want the most strategic and high-touch Nomadissimi support from planning through soft landing."
              ctaHref="/#packages"
              bullets={[
                <>
                  <strong>Everything inside Clarity</strong>, including the full
                  Nomadissimi Visa Portal and the “Next Steps Playbook.”
                </>,
                <>
                  <strong>45-minute deep-dive strategy session</strong> tailored
                  to your timeline, case complexity, and application direction.
                </>,
                <>
                  <strong>
                    Additional 45-minute refinement consultation
                  </strong>{" "}
                  with consulate interview preparation so you feel more prepared
                  for your visa appointment.
                </>,
                <>
                  <strong>Comprehensive document review</strong> with deeper
                  oversight and more detailed feedback.
                </>,
                <>
                  <strong>60 days of follow-up email support</strong> with
                  priority response from our team.
                </>,
                <>
                  <strong>Early access to the Codice Fiscale Portal</strong> so
                  you can understand one of the first practical essentials of
                  life in Italy.
                </>,
                <>
                  <strong>15% off our Residence Registration Portal</strong> for
                  a more organized landing after visa approval.
                </>,
              ]}
            />
          </div>

          <div className="mt-8 md:mt-10 flex justify-center">
            <div className="max-w-2xl rounded-[28px] border border-[#E8DCC6] bg-[#FBF7F0] px-6 py-5 md:px-8 md:py-6 text-center shadow-[0_12px_34px_rgba(0,0,0,0.04)]">
              <p className="sans text-[12px] md:text-[13px] uppercase tracking-[0.16em] text-[#4B5D44]/62">
                Having trouble deciding?
              </p>

              <p className="mt-3 serif text-[25px] md:text-[30px] leading-[1.25] text-[#1F1F1F]">
                Not sure which plan fits you best?
              </p>

              <p className="mt-3 sans text-[15px] md:text-[16px] leading-[1.65] text-[#2B2B2B]/70 max-w-xl mx-auto">
                Send us a message and we’ll help you choose the Nomadissimi
                option that best fits your case, goals, and level of support.
              </p>

              <div className="mt-5">
                <Link
                  href="/contact"
                  className="serif inline-flex items-center justify-center px-5 py-2.5 border border-[#C9A86A]/65 bg-white text-[#1A1A1A] text-[17px] md:text-[18px] tracking-[0.03em] transition-all duration-300 ease-out hover:bg-[#F9F5EE] hover:-translate-y-[1px] hover:shadow-[0_10px_24px_rgba(193,168,125,0.14)]"
                >
                  Help me choose
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-6 md:mt-8 mb-6 md:mb-8 flex justify-center">
          <div className="relative w-28 h-px bg-gradient-to-r from-transparent via-[#8A9B7B]/55 to-transparent">
            <span className="absolute -top-[5px] left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-[#C9A86A]/75" />
          </div>
        </div>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 md:pb-10">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="serif text-4xl md:text-5xl font-semibold">
              Live in Italy like a pro
            </h2>

            <div className="max-w-4xl mx-auto px-2 mt-5 space-y-5">
              <p className="sans text-[18px] md:text-[21px] leading-[1.75] tracking-[-0.01em] text-[#2F2F2F]">
                Your visa is not the end of the process.
                <span className="text-[#4B5D44] font-medium">
                  {" "}
                  It is the beginning of real life in Italy.
                </span>
              </p>

              <p className="sans text-[16px] md:text-[18px] leading-[1.9] text-[#555555] max-w-4xl mx-auto">
                Once approval lands, the next layer begins: residence
                registration, codice fiscale, taxes, local systems, and all the
                practical details that shape whether your move feels smooth or
                stressful.
              </p>

              <p className="sans text-[16px] md:text-[18px] leading-[1.9] text-[#4B5D44] max-w-4xl mx-auto">
                These portals are designed to help you build your life in Italy
                more seamlessly. They are available both for existing
                Nomadissimi visa clients and for people who are already moving
                to Italy and want dedicated support for the next practical
                steps.
              </p>

              <p className="serif text-[24px] md:text-[28px] leading-[1.45] text-[#1F1F1F] max-w-4xl mx-auto">
                Welcome to la dolce vita,
                <span className="text-[#4B5D44]">
                  {" "}
                  done the right way.
                </span>
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
            <SupportCard
              title="Residence Registration Portal"
              badge="⏳ Time-sensitive step"
              blurb="One of the first major practical steps after arrival in Italy. An 8-day deadline you can’t miss."
              ctaHref="/residence"
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
                  <strong>Bonus access to our Codice Fiscale Portal</strong>.
                </>,
                <>
                  <strong>30 days of email support</strong> from our team.
                </>,
              ]}
            />

            <SupportCard
              title="Tax & Partita IVA Portal"
              blurb="Italy has tax opportunities most newcomers miss. Choosing the right path early can mean keeping thousands more in your pocket."
              ctaHref="/tax"
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
                  Guidance for people receiving or planning to receive income in{" "}
                  <strong>crypto</strong>.
                </>,
                <>
                  <strong>Bonus access to our Codice Fiscale Portal</strong> as
                  an important building block for your tax and professional
                  setup.
                </>,
                <>
                  <strong>Common mistakes to avoid</strong> when setting up your
                  Italian tax situation.
                </>,
              ]}
            />

            <SupportCard
              title="La Dolce Vita Integration"
              blurb="A practical support package for the real-life side of moving to Italy — beyond the paperwork and beyond the postcards."
              ctaHref="/#settling"
              ctaText="Settle in Smoothly"
              amount="199"
              oldPrice="€399"
              bullets={[
                <>
                  <strong>Personalized 30-minute cultural consultation</strong>{" "}
                  to help you feel more prepared for life in Italy.
                </>,
                <>
                  Guidance on <strong>where to live</strong> based on your
                  lifestyle and priorities.
                </>,
                <>
                  How <strong>renting works in Italy</strong>: contracts, fees,
                  condominio, TARI, and more.
                </>,
                <>
                  <strong>Healthcare</strong>: how to access care like an
                  Italian without surprise bills.
                </>,
                <>
                  Insider regional and cultural insights from our local team:
                  north, center, south, cities vs coast, and the lifestyle
                  differences between them.
                </>,
                <>
                  <strong>Bonus access to our Codice Fiscale Portal</strong>.
                </>,
              ]}
            />
          </div>

          <div className="flex flex-col items-center mt-8">
            <Link
              href="/#settling"
              className="inline-flex items-center justify-center gap-4 rounded-2xl bg-[#4B5D44] px-6 py-4 md:px-8 md:py-5 text-center shadow-[0_14px_36px_rgba(75,93,68,0.22)] transition hover:bg-[#3E4E38] hover:-translate-y-[1px]"
            >
              <span className="serif text-[22px] md:text-[24px] font-semibold tracking-[0.03em] text-white/95">
                “Welcome to Italy” Bundle
              </span>

              <span className="flex items-baseline gap-1.5">
                <span className="sans tabular-nums text-[15px] text-white/70">
                  €
                </span>
                <span className="sans tabular-nums font-semibold text-[24px] md:text-[26px] leading-none text-white">
                  599
                </span>
                <span className="ml-1 sans text-[13px] tracking-[0.12em] uppercase text-white/75">
                  valued at €1,397
                </span>
              </span>
            </Link>

            <p className="mt-4 max-w-3xl text-center sans text-[15px] md:text-[16px] leading-[1.75] text-black/65">
              Get access to the written materials and portals from the
              Residence, Tax, and Dolce Vita packages, plus one private
              comprehensive 1-hour “Welcome to Italy” consultation covering
              residence registration, taxation, and lifestyle integration.
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="text-center rounded-[32px] border border-black/8 bg-[#4B5D44] px-6 py-10 md:px-10 md:py-12 shadow-[0_26px_70px_rgba(75,93,68,0.22)]">
            <h2 className="serif text-3xl md:text-4xl font-semibold text-white leading-tight">
              Ready to move to Italy with more clarity?
            </h2>

            <p className="sans mt-4 max-w-2xl mx-auto text-[16px] md:text-[17px] leading-[1.85] text-white/82">
              Explore the Nomadissimi visa plans, choose the level of support
              that fits you best, or contact us if you want help deciding where
              to begin.
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

function PricingCard({
  badge,
  title,
  amount,
  oldPrice,
  bullets,
  bestFor,
  ctaHref,
  accent,
  featured = false,
}: {
  badge: string;
  title: string;
  amount: string;
  oldPrice: string;
  bullets: React.ReactNode[];
  bestFor: string;
  ctaHref: string;
  accent: string;
  featured?: boolean;
}) {
  const badgeClass =
    accent === "#4B5D44"
      ? "bg-[#EEF3EB] text-[#4B5D44] border-[#D8E3D1]"
      : accent === "#AEC2A1"
        ? "bg-[#F2F6EF] text-[#5B7054] border-[#D9E5D1]"
        : "bg-[#FBF4E7] text-[#8B5E2B] border-[#E8D7B8]";

  return (
    <div
      className={`rounded-[30px] border p-7 md:p-8 shadow-[0_22px_60px_rgba(0,0,0,0.05)] flex flex-col h-full transition hover:-translate-y-[2px] ${
        featured
          ? "border-[#DCCAA8] bg-[linear-gradient(135deg,#FFFDF9_0%,#FBF6EE_52%,#F7F1E6_100%)]"
          : "border-black/8 bg-white/75"
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <span
          className={`inline-flex items-center rounded-full border px-3 py-1 serif text-[15px] md:text-[16px] ${badgeClass}`}
        >
          {badge}
        </span>
      </div>

      <div className="mt-6 space-y-4 sans text-[15px] md:text-[16px] leading-[1.8] text-black/75">
        {bullets.map((bullet, index) => (
          <div key={index} className="flex items-start gap-3">
            <span className="mt-[8px] h-2.5 w-2.5 rounded-full bg-[#C9A86A] shrink-0" />
            <div>{bullet}</div>
          </div>
        ))}
      </div>

      <p className="mt-5 sans text-sm leading-[1.7] text-black/55">
        Best for: {bestFor}
      </p>

      <div className="mt-6 pt-6 border-t border-black/10">
        <Link
          href={ctaHref}
          className="inline-flex w-full items-center justify-center rounded-2xl bg-[#4B5D44] px-5 py-4 text-center shadow-[0_10px_26px_rgba(75,93,68,0.22)] transition hover:bg-[#3E4E38] hover:-translate-y-[1px]"
        >
          <span className="flex flex-col items-center text-center">
            <span className="serif text-[20px] md:text-[22px] font-medium tracking-[0.04em] leading-[1.02] text-white">
              {title}
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
              instead of {oldPrice}
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}

function SupportCard({
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
          <h3 className="serif text-[26px] md:text-[30px] leading-[1.15] text-[#1F1F1F]">
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
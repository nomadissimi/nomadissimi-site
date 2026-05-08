import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Nomadissimi",
  description:
    "Learn what makes Nomadissimi different: boutique Italy relocation support for digital nomads, remote workers, freelancers, and internationally mobile clients.",
  alternates: {
    canonical: "/why-nomadissimi",
  },
};

export default function WhyNomadissimiPage() {
  return (
    <main className="min-h-screen bg-[#F8F5EF] text-[#1F1F1F]">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 md:pt-24 md:pb-14">
        <p className="sans text-xs md:text-sm uppercase tracking-[0.18em] text-[#4B5D44]/65">
          Why Nomadissimi
        </p>

        <h1 className="serif mt-4 text-4xl md:text-5xl lg:text-6xl leading-[1.08] font-semibold tracking-[0.01em] max-w-4xl">
          Moving to Italy should feel exciting, not confusing.
        </h1>

        <p className="sans mt-6 max-w-3xl text-[18px] md:text-[20px] leading-[1.85] text-black/72">
          Nomadissimi is a boutique Italy relocation and consultation business
          for digital nomads, remote workers, freelancers, and internationally
          mobile clients who want a clearer, more strategic path to building a
          life in Italy.
        </p>

        <div className="mt-8 h-px w-28 bg-gradient-to-r from-transparent via-[#C9A86A]/70 to-transparent" />
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 md:pb-10">
        <div className="rounded-[30px] border border-black/8 bg-white/70 p-7 md:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.06)]">
          <h2 className="serif text-3xl md:text-4xl font-semibold leading-tight">
            What Nomadissimi is
          </h2>

          <div className="mt-5 space-y-5 sans text-[16px] md:text-[17px] leading-[1.9] text-black/75">
            <p>
              Nomadissimi helps people navigate the real-life complexity of
              moving to Italy with more clarity, confidence, and context.
            </p>

            <p>
              We specialize in Italy-focused support across visa preparation,
              residence setup, tax-related orientation, and settling-in
              decisions. Our work is designed for people who want more than a
              checklist and less than the cold, impersonal feeling of a generic
              immigration agency.
            </p>

            <p>
              This is not mass-market relocation support. It is a more personal,
              more strategic, and more human approach to building a life in
              Italy.
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
              <li>Digital nomads and remote workers exploring a move to Italy</li>
              <li>Freelancers and self-employed people trying to understand their next steps</li>
              <li>Clients who want boutique, personalized support rather than a high-volume agency experience</li>
              <li>People who feel overwhelmed by fragmented or contradictory information online</li>
              <li>Clients who care not only about paperwork, but also about quality of life, regional fit, and settling in well</li>
            </ul>
          </div>

          <div className="rounded-[28px] border border-black/8 bg-[#FBF7F0] p-7 shadow-[0_18px_50px_rgba(0,0,0,0.04)]">
            <h2 className="serif text-2xl md:text-3xl font-semibold">
              Who we are probably not for
            </h2>

            <ul className="mt-5 space-y-4 sans text-[16px] leading-[1.8] text-black/75">
              <li>People looking for a generic global immigration directory</li>
              <li>Clients who want ultra-cheap, high-volume, one-size-fits-all support</li>
              <li>People expecting unrealistic guarantees or miracle promises</li>
              <li>Clients who do not want to engage thoughtfully with the move process</li>
              <li>People who want a purely transactional service with no lifestyle or strategic context</li>
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
              <h3 className="serif text-[24px] md:text-[28px]">Italy specialization</h3>
              <p className="sans mt-2 text-[16px] md:text-[17px] leading-[1.85] text-black/75">
                Nomadissimi is focused on Italy rather than broad global immigration. That gives our work more depth, more specificity, and more practical relevance.
              </p>
            </div>

            <div>
              <h3 className="serif text-[24px] md:text-[28px]">Boutique support</h3>
              <p className="sans mt-2 text-[16px] md:text-[17px] leading-[1.85] text-black/75">
                We are intentionally not a giant agency. Our model is designed around clarity, trust, nuance, and personal attention.
              </p>
            </div>

            <div>
              <h3 className="serif text-[24px] md:text-[28px]">Administrative and lifestyle guidance</h3>
              <p className="sans mt-2 text-[16px] md:text-[17px] leading-[1.85] text-black/75">
                Moving to Italy is not only about getting in. It is about understanding how to live well once you arrive. We care about both bureaucracy and lived experience.
              </p>
            </div>

            <div>
              <h3 className="serif text-[24px] md:text-[28px]">A modern client fit</h3>
              <p className="sans mt-2 text-[16px] md:text-[17px] leading-[1.85] text-black/75">
                Our work is especially suited to freelancers, founders, remote workers, and internationally mobile people building independent lives across borders.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
        <div className="rounded-[30px] border border-black/8 bg-white/70 p-7 md:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.06)]">
          <h2 className="serif text-3xl md:text-4xl font-semibold leading-tight">
            What clients come to us for
          </h2>

          <ul className="mt-6 grid gap-4 sans text-[16px] md:text-[17px] leading-[1.85] text-black/75">
            <li>Understanding whether Italy is the right fit</li>
            <li>Preparing for digital nomad or remote worker relocation</li>
            <li>Clarifying visa and document strategy</li>
            <li>Navigating residence and practical setup after arrival</li>
            <li>Understanding early tax-related questions and next decisions</li>
            <li>Reducing confusion, overwhelm, and expensive wrong turns</li>
          </ul>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="text-center rounded-[32px] border border-black/8 bg-[#4B5D44] px-6 py-10 md:px-10 md:py-12 shadow-[0_26px_70px_rgba(75,93,68,0.22)]">
          <h2 className="serif text-3xl md:text-4xl font-semibold text-white leading-tight">
            Ready to move to Italy with more clarity?
          </h2>

          <p className="sans mt-4 max-w-2xl mx-auto text-[16px] md:text-[17px] leading-[1.85] text-white/82">
            Explore our services, choose the level of support that fits you best,
            or contact us if you want help deciding where to begin.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/#packages"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 serif text-[18px] text-[#1F1F1F] transition hover:bg-[#F7F2EA]"
            >
              Explore services
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
  );
}
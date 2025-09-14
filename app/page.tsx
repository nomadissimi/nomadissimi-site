"use client";
import Image from "next/image";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import FAQ from "../components/ui/components/FAQ";
import Link from "next/link";
import CheckoutButton from "../components/ui/CheckoutButton";

type CheckoutButtonProps = {
  priceId: string;
  plan: string;
  label?: string;
  className?: string;
};

function Aceituna({ className = "" }: { className?: string }) {
  return (
    // ↓ make the defaults tiny so the parent can control spacing easily
    <div className={`mt-2 mb-2 flex justify-center ${className}`}>
      <Image
        src="/aceituna.png"
        alt=""
        width={600}
        height={180}
        aria-hidden
        className="h-10 w-auto sm:h-14 drop-shadow-[0_2px_6px_rgba(0,0,0,.08)]"
      />
    </div>
  );
}

function FadeIn({
  children,
  delay = 0,
  y = 0,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Page() {
  return (
    <>
      <NomadissimiLanding /> {/* your real page */}
    </>
  );
}

// --- Olive sprig divider ---
function OliveDivider({ className = "" }) {
  return (
    <svg
      viewBox="0 0 220 36"
      className={`h-8 text-[#D9C19D] ${className}`}
      aria-hidden="true"
      role="img"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* left + right elegant lines */}
        <path d="M2 18 C 38 6, 76 6, 108 18" />
        <path d="M218 18 C 182 6, 144 6, 112 18" />
        {/* twig stem */}
        <path d="M110 18 C 114 14, 118 12, 122 12" />
        <path d="M110 18 C 106 14, 102 12, 98 12" />
        {/* leaves (filled) */}
        <path
          d="M124 11 C 129 8, 133 8, 136 11 C 131 14, 127 14, 124 11 Z"
          fill="currentColor"
        />
        <path
          d="M96 11 C 91 8, 87 8, 84 11 C 89 14, 93 14, 96 11 Z"
          fill="currentColor"
        />
        {/* center olive */}
        <circle cx="110" cy="18" r="3" fill="currentColor" />
      </g>
    </svg>
  );
}
// --- /Olive sprig divider ---

function NomadissimiLanding() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll(); // set initial state
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <header
        className={`sticky top-0 z-50 backdrop-blur transition-all duration-300
    ${
      scrolled
        ? "bg-[#FDFBF7]/95 border-b border-black/5 shadow-[0_8px_30px_rgba(0,0,0,.04)]"
        : "bg-transparent border-transparent shadow-none"
    }`}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
          <a href="#top" className="flex items-center gap-4">
            <span className="text-2xl">✈️</span>
            <span className="serif text-2xl md:text-3xl font-semibold tracking-tight">
              Nomadissimi
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm sans">
            <a href="#how" className="hover:opacity-80">
              How it works
            </a>
            <a href="#packages" className="hover:opacity-80">
              Packages
            </a>
            <a href="#settling" className="hover:opacity-80">
              Settling in Italy
            </a>
            <a href="#faq" className="hover:opacity-80">
              FAQ
            </a>
          </nav>
          <div className="flex items-center gap-4 sm:gap-5">
            <a
              href="#guide"
              className="btn btn-champagne hidden sm:inline-flex px-5 md:px-6 py-2.5 rounded-2xl shadow-sm ring-1 ring-[#C9A86A]/25 hover:ring-[#C9A86A]/40 transition"
            >
              Free Starter Guide
            </a>

            <a
              href="#book"
              className="btn btn-primary px-5 md:px-6 py-2.5 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              Book a Call
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-14 pb-10"
      >
        {/* ⬇️ This grid makes it two columns on desktop, stacked on mobile */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT column */}
          <FadeIn y={12}>
            <div>
              <div className="inline-flex items-center gap-2 chip mb-4 sans">
                <span>We take the stress. You take the plane.</span>
              </div>

              <h1 className="serif text-4xl md:text-5xl xl:text-6xl leading-[1.1] font-semibold tracking-[0.01em]">
                Escape the chaos. Move to Italy without the headaches.
              </h1>

              <p className="sans mt-4 text-lg/7 text-[#2B2B2B]/80">
                Nomadissimi is the specialized relocation agency for digital
                nomads, remote workers, and online freelancers who want{" "}
                <em>la dolce vita</em>... minus the Italian bureaucracy
                nightmare.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#guide" className="btn btn-champagne">
                  Get the free starter guide
                </a>
                <a href="#book" className="btn btn-primary">
                  Book a consultation
                </a>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 text-sm sans">
                <Feature
                  icon={
                    <Image
                      src="/iconchecklist.png"
                      alt=""
                      width={28}
                      height={28}
                      className="h-7 w-7"
                      priority
                    />
                  }
                  title="Clear checklists"
                  desc="English + Italian, explained simply."
                />

                <Feature
                  icon={
                    <Image
                      src="/icontimeline.png"
                      alt=""
                      width={28}
                      height={28}
                      className="h-7 w-7"
                    />
                  }
                  title="Timeline plan"
                  desc="Milestones to your consulate day."
                />

                <Feature
                  icon={
                    <Image
                      src="/icontools.png"
                      alt=""
                      width={28}
                      height={28}
                      className="h-7 w-7"
                    />
                  }
                  title="Done-with-you tools"
                  desc="Notion tracker, templates & automations."
                />

                <Feature
                  icon={
                    <Image
                      src="/iconguidance.png"
                      alt=""
                      width={28}
                      height={28}
                      className="h-7 w-7"
                    />
                  }
                  title="Realistic guidance"
                  desc="Honest assessment. No false promises."
                />
              </div>
            </div>
          </FadeIn>

          {/* RIGHT column */}
          <FadeIn delay={0.15} y={20}>
            <div className="relative">
              <div className="aspect-[4/3] md:aspect-[5/4] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
                <img
                  src="/hero-italy.jpg"
                  alt="Sunlit Italian coastline with cypress trees and terracotta villas"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ——— Hero narrative ——— */}
      <FadeIn y={16}>
        <div className="card">
          <h2 className="serif text-3xl md:text-4xl font-semibold">
            Italy isn’t just a move, it’s an upgrade to your entire lifestyle.
          </h2>
          {/* Indented body copy */}
          <div className="lg:pr-72">
            <div className="pl-6 md:pl-8 lg:pl-12">
              <p className="lead-soft mt-4">
                Imagine an Aperitivo in Florence, remote work with Sicilian
                views, weekends in Rome… you name it. All this is possible
                thanks to Italy's new Digital Nomad Visa.
              </p>
              <p className="lead-soft mt-4">
                <strong>
                  But let’s be honest: applying solo is frustrating and slow.
                </strong>{" "}
                Information is scattered, requirements shift by consulate, and
                small mistakes cost months.
              </p>
            </div>
          </div>

          {/* Reality vs How we help — luxe two columns */}
          <div className="mt-7 mx-auto max-w-4xl grid md:grid-cols-2 gap-5 md:gap-6">
            <div className="truth-card">
              {/* left card keeps the old pill */}
              <span className="pill inline-flex mb-4 md:mb-5">
                The ugly truth
              </span>
              <ul className="truth-list">
                <li className="flex items-start gap-3">
                  <img
                    src="/brokenheart.png"
                    alt=""
                    aria-hidden="true"
                    className="mt-1.5 h-[18px] w-[18px] sm:h-5 sm:w-5 flex-none opacity-90 drop-shadow-[0_0.5px_0_rgba(0,0,0,0.12)]"
                  />
                  <span>
                    Consulate websites are vague; Reddit is noisy and often
                    wrong.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <img
                    src="/brokenheart.png"
                    alt=""
                    aria-hidden="true"
                    className="mt-1.5 h-[18px] w-[18px] sm:h-5 sm:w-5 flex-none opacity-90 drop-shadow-[0_0.5px_0_rgba(0,0,0,0.12)]"
                  />
                  <span>
                    Translations and complicated bureaucracy eat time and
                    energy.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <img
                    src="/brokenheart.png"
                    alt=""
                    aria-hidden="true"
                    className="mt-1.5 h-[18px] w-[18px] sm:h-5 sm:w-5 flex-none opacity-90 drop-shadow-[0_0.5px_0_rgba(0,0,0,0.12)]"
                  />
                  <span>
                    Little details and misunderstandings lead to rejections and
                    expensive do-overs.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <img
                    src="/brokenheart.png"
                    alt=""
                    aria-hidden="true"
                    className="mt-1.5 h-[18px] w-[18px] sm:h-5 sm:w-5 flex-none opacity-90 drop-shadow-[0_0.5px_0_rgba(0,0,0,0.12)]"
                  />
                  <span>
                    Meanwhile, your plans to move to Italy get more and more
                    delayed.
                  </span>
                </li>
              </ul>
            </div>

            <div className="truth-card">
              {/* right card uses luxe green */}
              <span className="pill pill-luxe-green inline-flex mb-4 md:mb-5">
                How we help
              </span>

              <ul className="mt-4 space-y-4 text-[#2B2B2B]/85">
                <li className="flex items-start gap-3 leading-relaxed">
                  <Image
                    src="/checkmarkgreen.png"
                    alt=""
                    width={18}
                    height={18}
                    aria-hidden="true"
                    className="mt-1.5 flex-none"
                  />
                  <span>
                    Clear answers on eligibility + consulate-specific
                    requirements.
                  </span>
                </li>

                <li className="flex items-start gap-3 leading-relaxed">
                  <Image
                    src="/checkmarkgreen.png"
                    alt=""
                    width={18}
                    height={18}
                    aria-hidden="true"
                    className="mt-1.5 flex-none"
                  />
                  <span>Personalized checklists & specialized timelines.</span>
                </li>

                <li className="flex items-start gap-3 leading-relaxed">
                  <Image
                    src="/checkmarkgreen.png"
                    alt=""
                    width={18}
                    height={18}
                    aria-hidden="true"
                    className="mt-1.5 flex-none"
                  />
                  <span>
                    Professional document review + mock interview coaching.
                  </span>
                </li>

                <li className="flex items-start gap-3 leading-relaxed">
                  <Image
                    src="/checkmarkgreen.png"
                    alt=""
                    width={18}
                    height={18}
                    aria-hidden="true"
                    className="mt-1.5 flex-none"
                  />
                  <span>
                    Calm, responsive guidance all the way to visa day.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <p className="luxe-closer text-center mt-8 pl-6 md:pl-8 lg:pl-12">
            Instead of drowning in paperwork, you’ll be sipping Aperols.{" "}
            <span className="gold-text">
              We take care of the boring so you can live beautifully.
            </span>
            <span className="sparkle-track" aria-hidden>
              <span className="sparkle glide-1">✦</span>
              <span className="sparkle glide-2">✧</span>
              <span className="sparkle glide-3">✦</span>
            </span>
          </p>
        </div>
      </FadeIn>

      {/* Meet Nomadissimi + Benefits */}
      <section
        id="how"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"
      >
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="card lux-card">
            <h3 className="serif text-3xl md:text-4xl font-semibold">
              Meet Nomadissimi
            </h3>
            <div className="mt-2 mb-2">
              <GoldRule />
            </div>

            {/* unified copy size */}
            <p className="sans text-[18px] md:text-[19px] leading-[1.85] text-[#2B2B2B]/90">
              We’re a specialized agency run by people who’ve lived through the
              Italian bureaucratic circus and know every trick. Big agencies
              treat you like a case number. We treat you like family moving into
              our neighborhood.
            </p>

            {/* Bullet list */}
            <ul className="mt-7 md:mt-12 space-y-4 md:space-y-5">
              <li className="flex items-start gap-4 md:gap-5">
                <Image
                  src="/iconspaghetti.png"
                  alt=""
                  width={40}
                  height={40}
                  className="mt-1 h-9 w-9 md:h-10 md:w-10 flex-none drop-shadow-[0_1px_2px_rgba(0,0,0,.12)]"
                  aria-hidden="true"
                />
                <p className="sans text-[18px] md:text-[19px] leading-[1.85]">
                  We speak the language of visas, bureaucracy, and pasta.
                </p>
              </li>

              <li className="flex items-start gap-4 md:gap-5">
                <Image
                  src="/iconlemon.png"
                  alt=""
                  width={40}
                  height={40}
                  className="mt-1 h-9 w-9 md:h-10 md:w-10 flex-none drop-shadow-[0_1px_2px_rgba(0,0,0,.12)]"
                  aria-hidden="true"
                />
                <p className="sans text-[18px] md:text-[19px] leading-[1.85]">
                  We know the consulates, the pitfalls, the hidden tricks.
                </p>
              </li>

              <li className="flex items-start gap-4 md:gap-5">
                <Image
                  src="/iconpizza.png"
                  alt=""
                  width={40}
                  height={40}
                  className="mt-1 h-9 w-9 md:h-10 md:w-10 flex-none drop-shadow-[0_1px_2px_rgba(0,0,0,.12)]"
                  aria-hidden="true"
                />
                <p className="sans text-[18px] md:text-[19px] leading-[1.85]">
                  We guide you with clarity and care.
                </p>
              </li>

              <li className="flex items-start gap-4 md:gap-5">
                <Image
                  src="/iconsinglewine.png"
                  alt=""
                  width={40}
                  height={40}
                  className="mt-1 h-9 w-9 md:h-10 md:w-10 flex-none drop-shadow-[0_1px_2px_rgba(0,0,0,.12)]"
                  aria-hidden="true"
                />
                <p className="sans text-[18px] md:text-[19px] leading-[1.85]">
                  With us, you won’t just move to Italy… you’ll land softly into{" "}
                  <em>la dolce vita</em>.
                </p>
              </li>
            </ul>
          </div>

          <div className="card">
            <h4 className="serif text-3xl md:text-4xl font-semibold">
              Italy is calling...
            </h4>

            {/* add items-stretch + a hair more gap */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 mt-4 items-stretch">
              <Benefit
                imgSrc="/1.png"
                alt="Lower cost of living"
                text="Lower cost of living vs. countries like the US and UK"
              />

              <Benefit
                imgSrc="/2.png"
                alt="Healthcare"
                text={
                  <>
                    <span>Top-tier affordable healthcare</span>
                    <br />
                  </>
                }
              />

              <Benefit
                imgSrc="/4.png"
                alt="Safety and quality of life"
                text={
                  <>
                    <span>Clean ingredients & fresh, real food</span>
                    <br />
                  </>
                }
              />

              <Benefit
                imgSrc="/3.png"
                alt="Travel freedom"
                text="Full Schengen access to travel throughout Europe"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="packages"
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-12 pb-12 md:pb-14 border-t border-[#C9A86A]/30"
      >
        <div className="text-center mb-6 md:mb-11">
          <FadeIn>
            <h3 className="serif text-4xl md:text-5xl font-semibold">
              Choose your visa plan:
            </h3>
          </FadeIn>
          <FadeIn delay={0.05}>
            <p className="sans text-[#2B2B2B]/70 mt-4 md:mt-6">
              How much support would you like?
            </p>
          </FadeIn>
          <p className="sans text-sm md:text-base text-[#2B2B2B]/70 mt-1 italic">
            Act now: Limited edition pricing!
          </p>
          <GoldRule />
        </div>

        {/* cards are narrower so they don't touch page edges */}
        <div className="mx-auto max-w-[1000px]">
          <div className="grid md:grid-cols-3 gap-5 lg:gap-8 items-start">
            <FadeIn y={18}>
              <PackageCard
                badge="💡 Clarity"
                price="€297"
                accent="#4B5D44"
                bullets={[
                  <>
                    {" "}
                    <strong>Personalized roadmap</strong> of requirements &
                    timeline (email){" "}
                  </>,
                  <>
                    {" "}
                    <strong>Clear checklist</strong> + Notion board with
                    templates{" "}
                  </>,
                  <>
                    {" "}
                    <strong>14 days</strong> of follow-up email support for
                    quick clarifications{" "}
                  </>,
                ]}
                bestFor="Independent nomads who want clear, concise direction"
                ctaText="Choose Clarity"
              />
            </FadeIn>

            <FadeIn delay={0.08} y={18}>
              <PackageCard
                badge=" 🔍 Guidance"
                price="€697"
                accent="#D97B4E"
                featured
                bullets={[
                  <>
                    {" "}
                    <strong>45-min strategy call</strong> (eligibility,
                    consulate, docs){" "}
                  </>,
                  <>
                    {" "}
                    <strong>Personalized document checklist</strong> + advanced
                    templates{" "}
                  </>,
                  <>
                    {" "}
                    <strong>Professional document review</strong> with written
                    feedback{" "}
                  </>,
                  <>
                    {" "}
                    <strong>30 days</strong> of email support{" "}
                  </>,
                  <>
                    {" "}
                    <strong>10% off</strong> our Comune & Questura add-on{" "}
                  </>,
                ]}
                bestFor="Applicants who want reassurance and professional oversight."
              >
                <CheckoutButton
                  plan="Guidance"
                  priceId={process.env.NEXT_PUBLIC_PRICE_GUIDANCE!}
                />
              </PackageCard>
            </FadeIn>

            <FadeIn delay={0.16} y={18}>
              <PackageCard
                badge="💎 Concierge"
                price="€997"
                accent="#C9A86A"
                bullets={[
                  <>
                    {" "}
                    <strong>45-min deep-dive strategy call</strong>{" "}
                    (eligibility, positioning, consulate){" "}
                  </>,
                  <>
                    {" "}
                    <strong>Premium consulate-specific timeline</strong> +
                    reminders{" "}
                  </>,
                  <>
                    {" "}
                    <strong>Comprehensive document review</strong> (income,
                    contracts, CVs, insurance…){" "}
                  </>,
                  <>
                    {" "}
                    <strong>Follow-up 45-min refinement call</strong> +
                    dedicated <strong>mock interview coaching</strong>{" "}
                  </>,
                  <>
                    {" "}
                    <strong>60 days</strong> email support & priority response{" "}
                  </>,
                  <>
                    {" "}
                    <strong>Codice Fiscale guidance</strong> +{" "}
                    <strong>Next-Steps Playbook</strong>{" "}
                  </>,
                  <>
                    {" "}
                    <strong>20% off</strong> our Comune & Questura add-on{" "}
                  </>,
                ]}
                bestFor="Nomads who want a trusted partner at every step."
                ctaText="Choose Concierge"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      <section
        id="settling"
        className="section-divider-top max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"
      >
        {/* 👇 add this wrapper if you like a boutique width */}
        <div className="mx-auto max-w-5xl">
          <div className="relative grid md:grid-cols-3 gap-6 md:gap-8">
            {/* three <AddonCard /> as you already have */}
          </div>
        </div>

        <div className="text-center mb-9">
          <h3 className="serif text-3xl md:text-4xl font-semibold">
            Once you’re in Italy…
          </h3>
          <Aceituna />
          {/* remove p’s top margin; if you still want it closer, swap mt-0 → -mt-1 */}
          <p className="sans text-[#2B2B2B]/70 mt-0 max-w-5xl mx-auto px-4">
            {" "}
            Getting your Italian visa is just the beginning. We offer exclusive
            add-ons for our visa clients that will help you settle in Italy.
          </p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1 */}
          <FadeIn y={14}>
            <AddonCard
              title="Comune & Questura Essentials — €297"
              items={[
                <>
                  Dedicated 30-min <strong>consultation</strong> walking you
                  through your <strong>residence permit</strong> (yes, it's
                  different from your visa and it's a crucial next step)
                </>,
                <>
                  <strong>Permesso di soggiorno</strong> kit, appointments,
                  fingerprints
                </>,
                <>
                  Instructions for{" "}
                  <strong>Comune residency registration (Anagrafe)</strong>
                </>,
                <>
                  <strong>Email support</strong> until the registration is
                  complete
                </>,
              ]}
            />
          </FadeIn>

          {/* Card 2 */}
          <FadeIn delay={0.08} y={14}>
            <AddonCard
              title="Partita IVA & Tax Regime Consultation — €397"
              items={[
                <>
                  Personalized 30-min <strong>consultation</strong> to discuss
                  opening a <strong>professional activity (Partita IVA)</strong>
                </>,
                <>
                  Breakdown of key <strong>tax benefits</strong> that could{" "}
                  <strong>save you thousands</strong>
                </>,
                <>
                  <strong>Practical roadmap</strong> of things they don’t tell
                  you (but we do)
                </>,
              ]}
            />
          </FadeIn>

          {/* Card 3 */}
          <FadeIn delay={0.16} y={14}>
            <AddonCard
              title="Nomad Survival Kit — €97"
              items={[
                <>
                  <strong>Banking Guide:</strong> Which banks/fintechs are
                  easiest + how to avoid hidden fees
                </>,
                <>
                  <strong>Insurance Guide:</strong> Health, travel, property —
                  vetted providers
                </>,
                <>
                  <strong>SIM & Connectivity:</strong> Best mobile plans and
                  eSIM tips
                </>,
              ]}
            />
          </FadeIn>
        </div>
        <div className="mt-8 md:mt-10 flex flex-col items-center gap-3 w-full">
          <a
            href="#book"
            className="btn bg-[#4B5D44] hover:brightness-95 text-white text-base md:text-lg px-6 py-4 rounded-full inline-flex items-center gap-2 shadow-lg"
          >
            <span aria-hidden className="mr-0 -ml-1">
              <Image
                src="/icongift.png"
                alt=""
                width={28}
                height={28}
                sizes="28px"
                className="h-6 w-6 md:h-7 md:w-7 drop-shadow-[0_2px_6px_rgba(0,0,0,.12)]"
                priority
              />
            </span>

            <span className="leading-none">
              "Welcome to Italy" Bundle: <span className="price">€497</span>
            </span>
          </a>
          <p className="sans text-sm md:text-base text-[#2B2B2B]/70 text-center leading-relaxed">
            <strong>Get all 3 add-ons together</strong>
            <span className="block">(normally €694)</span>
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-divider-top max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-6 md:pb-8 mb-0">
        <div className="grid md:grid-cols-2 gap-6">
          <FadeIn y={14}>
            <blockquote className="card italic serif text-xl leading-relaxed">
              “Worth every euro. They made the most confusing process feel
              simple. I actually enjoyed it.”
            </blockquote>
          </FadeIn>
          <FadeIn delay={0.08} y={14}>
            <blockquote className="card italic serif text-xl leading-relaxed">
              “Real people who care. Clear checklists and fast replies.”
            </blockquote>
          </FadeIn>
        </div>
      </section>

      {/* Lead magnet */}

      {/* --- FAQ --- */}
      <section id="faq" className="mt-12 md:mt-16 scroll-mt-28">
        <FAQ />
      </section>

      <section
        id="guide"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-6"
      >
        {/* 👇 olive divider */}
        <div className="mb-6 md:mb-8 flex justify-center">
          <OliveDivider className="opacity-80 h-6 md:h-8" />
        </div>

        <FadeIn y={14}>
          <div className="card">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="serif text-3xl font-semibold">
                  Get the Free Starter Guide
                </h4>
                <p className="sans mt-2 text-[#2B2B2B]/80">
                  Drop your email and we’ll send the PDF + Prenotami tips.
                </p>
              </div>
              <form
                className="sans grid sm:grid-cols-[1fr_auto] gap-3"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4B5D44] bg-white"
                />
                <button className="btn btn-primary">Send me the guide</button>
                <label className="text-xs text-[#2B2B2B]/70 sm:col-span-2 flex items-start gap-2 mt-1">
                  <input type="checkbox" required className="mt-0.5" />
                  <span>
                    I agree to the service terms and privacy policy. Occasional
                    emails only. Unsubscribe anytime.
                  </span>
                </label>
              </form>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Final CTA + Footer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
        <FadeIn y={10}>
          <h4 className="serif text-3xl md:text-4xl font-semibold">
            Your Italian chapter starts now.
          </h4>
          <p className="sans mt-2 text-[#2B2B2B]/80">
            You can keep Googling and getting frustrated… or you can get on a
            plane and start enjoying your Italian dream.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#book" className="btn btn-primary">
              Contact us
            </a>
            <a href="#packages" className="btn btn-champagne">
              Let's get that visa
            </a>
          </div>
        </FadeIn>
      </section>

      <footer className="bg-[#4B5D44] text-white mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="serif text-xl font-semibold">
                © 2025 Nomadissimi — All rights reserved.
              </p>
              <p className="sans text-white/80 text-sm">
                Made with espresso and radical kindness.
              </p>
            </div>
            <nav className="flex gap-6 sans text-sm">
              <Link href="/terms" className="underline">
                Terms
              </Link>
              <Link href="/privacy" className="underline">
                Privacy
              </Link>
              <Link href="/cookies" className="underline">
                Cookies
              </Link>
              <a href="#book" className="hover:underline">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}

type FeatureProps = {
  icon: ReactNode; // or: icon: string | ReactNode if you want to still allow emojis
  title: string;
  desc: string;
};

function Feature({ icon, title, desc }: FeatureProps) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-black/5 ring-1 ring-black/10">
        {typeof icon === "string" ? (
          <span className="text-lg leading-none">{icon}</span>
        ) : (
          icon
        )}
      </span>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-[--ink-500]">{desc}</p>
      </div>
    </li>
  );
}

function Benefit({
  text,
  imgSrc,
  alt,
  icon,
}: {
  text: ReactNode;
  imgSrc?: string;
  alt?: string;
  icon?: string;
}) {
  return (
    <div className="benefit-tile">
      <div className="lux-illus">
        {imgSrc ? (
          <Image
            src={imgSrc}
            alt={alt ?? ""}
            width={44}
            height={44}
            className="object-contain"
            priority={false}
          />
        ) : (
          <span className="text-2xl">{icon}</span>
        )}
      </div>

      <p className="benefit-text">{text}</p>
    </div>
  );
}

function GoldRule() {
  return (
    <div className="relative mx-auto my-6 w-28 h-px bg-[#C9A86A]/50">
      <span className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#C9A86A]/70"></span>
    </div>
  );
}

function PackageCard({
  badge,
  price,
  bullets,
  bestFor,
  ctaText,
  className,
  children,
  accent,
  featured,
}: {
  badge: string;
  price: string;
  bullets: ReactNode[];
  bestFor: string;
  ctaText?: string;
  className?: string;
  children?: React.ReactNode;
  accent: string;
  featured?: boolean;
}) {
  // capsule color keyed to your accent
  const capClass =
    accent === "#4B5D44"
      ? "cap-olive"
      : accent === "#D97B4E"
      ? "cap-peach"
      : "cap-gold";

  // split currency so we can gray-out the symbol
  const trimmed = price.trim();
  const isEuro = trimmed.startsWith("€");
  const currency = isEuro ? "€" : "";
  const amount = isEuro ? trimmed.slice(1) : trimmed;

  return (
    <div
      className={`card relative flex flex-col ${
        featured ? "featured-gradient" : ""
      } transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)] hover:ring-1 ring-[#C9A86A]/25`}
      style={
        featured
          ? {
              boxShadow: "0 16px 48px rgba(217,123,78,0.18)",
              borderColor: "#D97B4E",
            }
          : {}
      }
    >
      {/* Header row — NOW with extra bottom margin */}
      <div className="w-full flex items-center justify-between gap-4 mb-4 md:mb-5">
        <span className={`cap ${capClass} serif`}>{badge}</span>

        <span
          className="price serif text-2xl md:text-3xl font-bold tracking-[0.01em]"
          style={{ color: accent }}
        >
          {currency && (
            <span className="text-black/40 mr-1 align-[-0.05em]">
              {currency}
            </span>
          )}
          <span>{amount}</span>
        </span>
      </div>

      {/* Bullets — add more top margin */}
      <ul className="mt-5 space-y-3 text-sm sans">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2">
            <span>•</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <p className="mt-5 text-sm text-[#2B2B2B]/70 sans">Best for: {bestFor}</p>

      <div className="mt-6 pt-6 border-t border-black/10">
        {children ? (
          children
        ) : ctaText ? (
          <a href="#book" className="btn w-full bg-[#4B5D44] text-white">
            {ctaText}
          </a>
        ) : null}
      </div>
    </div>
  );
}

function AddonCard({ title, items }: { title: string; items: ReactNode[] }) {
  // Split "Name — €297" into parts so we can gray-out the €
  const [name, pricePart = ""] = title.split("—").map((s) => s.trim());
  const isEuro = pricePart.startsWith("€");
  const amount = isEuro ? pricePart.slice(1) : pricePart;

  return (
    <div className="addon-card h-full">
      <div className="addon-header">
        <h5 className="addon-title">{name}</h5>
        <span className="addon-price">
          {isEuro && (
            <span className="text-black/40 mr-1 align-[-0.05em]">€</span>
          )}
          <span className="text-[#4B5C44]">{amount}</span>
        </span>
      </div>

      <ul className="addon-list">
        {items.map((it, i) => (
          <li key={i} className="flex gap-2">
            <span className="addon-bullet">→</span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

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
        className={`sticky top-0 z-50 backdrop-blur bg-[#F8F5EF]/95 border-b border-black/5 shadow-[0_8px_20px_rgba(0,0,0,0.03)] transition-all duration-300`}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0"
            aria-label="Nomadissimi home"
          >
            <Image
              src="/logo.png"
              alt="Nomadissimi"
              width={800} // intrinsic size (can be larger than display)
              height={140}
              priority
              className="h-10 w-auto md:h-12 lg:h-14" // ⬅️ bump these up to taste
              sizes="(max-width: 768px) 160px, (max-width: 1024px) 200px, 240px"
            />
            <span className="sr-only">Nomadissimi</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-12 text-[18px] font-serif tracking-wide">
            <a
              href="#how"
              className="hover:text-[#4B5D44] transition-colors duration-200"
            >
              Who We Are
            </a>
            <a
              href="#packages"
              className="hover:text-[#4B5D44] transition-colors duration-200"
            >
              Visa Packages
            </a>
            <a
              href="#settling"
              className="hover:text-[#4B5D44] transition-colors duration-200"
            >
              Settling in Italy
            </a>
            <a
              href="#faq"
              className="hover:text-[#4B5D44] transition-colors duration-200"
            >
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-4 sm:gap-5">
            <a
              href="#guide"
              className="btn btn-champagne hidden sm:inline-flex px-5 md:px-6 py-2.5 rounded-2xl shadow-sm ring-1 ring-[#C9A86A]/25 hover:ring-[#C9A86A]/40 transition"
            >
              Free Guide
            </a>

            <a
              href="#book"
              className="btn btn-primary px-5 md:px-6 py-2.5 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              Book
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
              <p className="serif italic text-lg md:text-xl text-neutral-700 tracking-tight mt-1 mb-6">
                We take the stress. You take the plane.
              </p>

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
                  desc="What you need, in your language."
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
                  title="More than the visa"
                  desc="Insider tips and add-ons to settle in Italy like a pro."
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
                  desc="Trackers and templates to ensure you're ready."
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
          <h2 className="serif text-3xl md:text-4xl font-semibold text-center">
            Italy isn’t just a move, it’s an upgrade to your entire lifestyle.
          </h2>
          {/* Centered + constrained */}
          <div className="mx-auto max-w-4xl px-4 text-center mt-4 space-y-6">
            <p className="lead-soft">
              If you’re reading this, there’s probably a part of you that’s
              done: done with burnout, expensive housing, artificial food, and
              the feeling that life’s happening somewhere else. You’ve scrolled
              the dreamy Italy photos, saved the “move abroad” TikToks, maybe
              even searched “how to get an Italian visa” at 2 am.
              <strong>
                You don’t need more dry information: you need a roadmap, and
                someone who’s actually done it.
              </strong>{" "}
              Imagine aperitivo in Florence, remote work with Sicilian views,
              and weekends in Rome — all possible now thanks to Italy’s new
              Digital Nomad Visa.
            </p>

            {/* Insert horizontal pictures */}

            <h2 className="serif text-3xl md:text-3xl font-semibold text-center">
              But let’s be honest: applying solo is frustrating and slow.
            </h2>

            <p className="lead-soft">
              Information is scattered, requirements are unclear, and small
              mistakes cost months. That’s where Nomadissimi comes in: your
              boutique guide through the red tape, helping you turn the Italian
              daydream into your next real address.
            </p>
            {/* Baby luxe divider */}
            <hr className="my-8 border-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8A86B]/40 to-transparent" />
          </div>

          {/* Reality vs How we help — luxe two columns */}
          <div className="mt-7 mx-auto max-w-4xl grid md:grid-cols-2 gap-5 md:gap-6">
            <div className="truth-card">
              {/* left card with same style as right for visual harmony */}
              <span className="pill pill-luxe-neutral inline-flex mb-4 md:mb-5">
                The ugly truth
              </span>

              <ul className="truth-list leading-relaxed tracking-normal space-y-4 text-[#2B2B2B]/85">
                <li className="flex items-start gap-3">
                  <img
                    src="/brokenheart.png"
                    alt=""
                    aria-hidden="true"
                    className="mt-1.5 h-[18px] w-[18px] sm:h-5 sm:w-5 flex-none opacity-90"
                  />
                  <span>
                    <span className="font-semibold">
                      Confusing information:
                    </span>{" "}
                    Consulate websites are vague, Reddit is chaotic, and much of
                    the online advice is outdated or flat-out wrong… leaving you
                    overwhelmed and misinformed.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <img
                    src="/brokenheart.png"
                    alt=""
                    aria-hidden="true"
                    className="mt-1.5 h-[18px] w-[18px] sm:h-5 sm:w-5 flex-none opacity-90"
                  />
                  <span>
                    <span className="font-semibold">Bureaucratic burnout:</span>{" "}
                    Translations, document formatting, and constantly changing
                    requirements drain your time, energy, and peace of mind.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <img
                    src="/brokenheart.png"
                    alt=""
                    aria-hidden="true"
                    className="mt-1.5 h-[18px] w-[18px] sm:h-5 sm:w-5 flex-none opacity-90"
                  />
                  <span>
                    <span className="font-semibold">Uncertainty:</span> Going
                    solo, it’s hard to know if you’re doing it right. Small
                    mistakes can lead to rejections, delays, and expensive
                    do-overs.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <img
                    src="/brokenheart.png"
                    alt=""
                    aria-hidden="true"
                    className="mt-1.5 h-[18px] w-[18px] sm:h-5 sm:w-5 flex-none opacity-90"
                  />
                  <span>
                    <span className="font-semibold">Stalled plans:</span>{" "}
                    Without guidance or momentum, months pass with no
                    progress—and the dream of Italy keeps getting pushed to
                    “someday.”
                  </span>
                </li>
              </ul>
            </div>

            {/* Right column of how we help */}
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
                    <strong>Clarity from the start:</strong> guidance on
                    eligibility, pathways, and timing so you can stop guessing
                    and start moving.
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
                    <strong>Coaching and document strategy:</strong> the tools
                    you need so you walk into your visa appointment fully
                    prepared, confident, and ready to succeed.
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
                    <strong>Beyond the visa:</strong> We help you register your
                    residency, secure your Permesso di Soggiorno, understand
                    taxes, and integrate like a local, not a lost tourist.
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
                    <strong>A true soft landing:</strong> Practical tools and
                    support to help you not just move to Italy, but settle and
                    enjoy your life in Italy.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <p className="luxe-closer text-center mt-8 pl-6 md:pl-8 lg:pl-12">
            Instead of drowning in paperwork, you’ll be sipping Aperols under
            the Italian sun.{" "}
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
              We are a specialized agency built by two worlds: expats who
              successfully made the move to Italy and Italian locals who know
              the systems, the culture, and the shortcuts...
              <strong>
                we’ve lived both sides: the dreamer and the insider.
              </strong>{" "}
              That’s why our guidance isn’t theoretical. It’s lived, local, and
              proven. Big agencies treat you like a case number. We treat you
              like family moving into our neighborhood.
              {/* Baby luxe divider */}
              <hr className="my-8 border-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8A86B]/40 to-transparent" />
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
                  We guide you with realism, clarity, and care.
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
                text="Lower cost of living and higher quality of life."
              />

              <Benefit
                imgSrc="/2.png"
                alt="Healthcare"
                text={
                  <>
                    <span>Top-tier affordable healthcare.</span>
                    <br />
                  </>
                }
              />

              <Benefit
                imgSrc="/4.png"
                alt="Safety and quality of life"
                text={
                  <>
                    <span>Clean ingredients & fresh, real food.</span>
                    <br />
                  </>
                }
              />

              <Benefit
                imgSrc="/3.png"
                alt="Travel freedom"
                text="Full Schengen access to travel throughout Europe."
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
            <p className="sans text-[#2B2B2B]/70 mt-4 md:mt-3">
              How much support would you like on your journey to Italy?
            </p>
            <p className="sans text-[#2B2B2B]/70 mt-2 md:mt-1">
              Let’s turn the dream into a clear, confident plan
            </p>
          </FadeIn>
          <p className="sans text-sm md:text-base text-[#2B2B2B]/70 mt-1 italic">
            ✨ Special pricing for a limited time ✨
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
                    timeline{" "}
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
                bestFor="For independent nomads who want a clear, structured start"
                ctaText="Choose Clarity"
              />
            </FadeIn>

            <FadeIn delay={0.08} y={18}>
              <PackageCard
                badge=" 🔍 Guidance"
                price="€697"
                accent="#aec2a1"
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
          <h3 className="serif text-4xl md:text-5xl font-semibold">
            Live in Italy Like a Pro...
          </h3>
          {/* remove p’s top margin; if you still want it closer, swap mt-0 → -mt-1 */}
          <p className="sans text-[#2B2B2B]/70 mt-4 max-w-5xl mx-auto px-3">
            {" "}
            Your visa is just the beginning, the key that unlocks your Italian
            chapter.
            <p className="sans text-[#2B2B2B]/70 mt-0 md:mt-1 px-3">
              But once that approval lands, real life in Italy begins: more
              paperwork, residency registration, taxes, and all those little
              <em> “Wait, how do I ____ ?”</em> moments.{" "}
              <strong>That’s where we stay by your side. </strong>
              Because settling in should feel like a soft landing, not another
              guessing game. Our "In-Italy" Add-ons help you register, settle,
              and actually enjoy the life you came here for.
            </p>
            Welcome to la dolce vita, done the right way.
          </p>
          <Aceituna />
        </div>

        <div className="relative grid md:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1 — Residence Registration */}
          <FadeIn y={14}>
            <AddonCard
              title="Residence Registration — €297"
              blurb={
                <span className="text-[#1E1E1E] leading-relaxed">
                  Get set up legally and smoothly —{" "}
                  <em>permesso kit, fingerprints, and Comune registration</em>{" "}
                  handled with expertise and care.
                </span>
              }
              items={[
                <>
                  Dedicated 30-min <strong>consultation</strong> walking you
                  through your <strong>residence permit</strong> (crucial next
                  step beyond the visa)
                </>,
                <>
                  <strong>Permesso di soggiorno kit</strong>, appointments,
                  fingerprints
                </>,
                <>
                  <strong>Comune residency registration</strong> (Anagrafe)
                  insider guidance
                </>,
                <>
                  <strong>Email support</strong> until your registration is
                  fully approved
                </>,
              ]}
              footer={
                <div className="text-center mt-8">
                  <CheckoutButton
                    plan="Residence Registration"
                    priceId={process.env.NEXT_PUBLIC_PRICE_RESIDENCE!}
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full
          bg-gradient-to-b from-[#F9F5EE] to-[#EFE7DA]
          text-[#1A1A1A] font-serif text-lg tracking-wide
          ring-1 ring-[#C9A86A]/70 shadow-[0_8px_24px_rgba(193,168,125,0.22)]
          hover:shadow-[0_12px_36px_rgba(193,168,125,0.32)]
          hover:scale-[1.02] transition-all duration-300"
                    label="Residence, Sorted"
                  />
                  <p className="mt-2 text-xs text-[#4B4B4B] font-sans">
                    Secure Stripe checkout • No extra fees
                  </p>
                </div>
              }
              className="bg-[#F3F6F1] border border-[#DCDDD8] rounded-3xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.03)]"
            />
          </FadeIn>

          {/* Card 2 — Tax & Partita IVA */}
          <FadeIn delay={0.08} y={14}>
            <AddonCard
              title="Tax & Partita IVA Consultation — €297"
              blurb={
                <span className="text-[#1E1E1E] leading-relaxed">
                  A clear, personalized path to opening your{" "}
                  <em>professional activity</em> — taxes, benefits, and next
                  steps demystified.
                </span>
              }
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
              footer={
                <div className="text-center mt-8">
                  <CheckoutButton
                    plan="Tax & Partita IVA"
                    priceId={process.env.NEXT_PUBLIC_PRICE_PARTITA!}
                    label="Discover Tax Path"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full
          bg-gradient-to-b from-[#F9F5EE] to-[#EFE7DA]
          text-[#1A1A1A] font-serif text-lg tracking-wide
          ring-1 ring-[#C9A86A]/70 shadow-[0_8px_24px_rgba(193,168,125,0.22)]
          hover:shadow-[0_12px_36px_rgba(193,168,125,0.32)]
          hover:scale-[1.02] transition-all duration-300"
                  />
                  <p className="mt-2 text-xs text-[#4B4B4B] font-sans">
                    Secure Stripe checkout • No extra fees
                  </p>
                </div>
              }
              className="bg-[#F3F6F1] border border-[#DCDDD8] rounded-3xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.03)]"
            />
          </FadeIn>

          {/* Card 3 — La Dolce Vita */}
          <FadeIn delay={0.16} y={14}>
            <AddonCard
              title="La Dolce Vita Integration — €97"
              blurb={
                <span className="text-[#1E1E1E] leading-relaxed">
                  This exclusive package gives you insider guidance on the
                  real-life side of moving to Italy.
                </span>
              }
              items={[
                <>
                  <strong>Where to live</strong> (based on your lifestyle and
                  priorities, not just Instagram pictures)
                </>,
                <>
                  <strong>How renting actually works in Italy:</strong>{" "}
                  contracts, fees, condominio, TARI…
                </>,
                <>
                  <strong>Healthcare:</strong> how to access care like an
                  Italian (without surprise bills)
                </>,
                <>
                  <strong>Insider regional & cultural insights</strong> from our
                  team — north/center/south, cities vs. coast, and how each
                  region shapes your lifestyle
                </>,
              ]}
              footer={
                <div className="text-center mt-8">
                  <CheckoutButton
                    plan="La Dolce Vita Integration"
                    priceId={process.env.NEXT_PUBLIC_PRICE_DOLCE!}
                    label="Time to Settle In"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full
          bg-gradient-to-b from-[#F9F5EE] to-[#EFE7DA]
          text-[#1A1A1A] font-serif text-lg tracking-wide
          ring-1 ring-[#C9A86A]/70 shadow-[0_8px_24px_rgba(193,168,125,0.22)]
          hover:shadow-[0_12px_36px_rgba(193,168,125,0.32)]
          hover:scale-[1.02] transition-all duration-300"
                  />
                  <p className="mt-2 text-xs text-[#4B4B4B] font-sans">
                    Secure Stripe checkout • No extra fees
                  </p>
                </div>
              }
              className="bg-[#F3F6F1] border border-[#DCDDD8] rounded-3xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.03)]"
            />
          </FadeIn>
        </div>

        {/* The big welcome to italy bundle button */}
        <div className="flex flex-col items-center mt-8">
          <button className="btn-bundle-luxe">
            <Image
              src="/icongift.png"
              alt="Gift Icon"
              width={36} // increased size for better harmony
              height={36}
              className="h-9 w-9 md:h-10 md:w-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
              priority
            />
            "Welcome to Italy" Bundle: €450
          </button>
          <p className="price-subtext">
            Get all 3 add-ons together <br />
            <span className="text-[#4B5D44] font-medium">(normally €594)</span>
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-divider-top max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-6 md:pb-8 mb-0">
        <div className="grid md:grid-cols-2 gap-6">
          <FadeIn y={14}>
            <blockquote className="card italic serif text-xl leading-relaxed">
              <strong>
                “Worth every euro. They made the most confusing application much
                more doable and I actually enjoyed it. All the team was
                professional and kind. Stop thinking about it and go for it.”
              </strong>{" "}
              --Rafael, Software Engineer from Illinois
            </blockquote>
          </FadeIn>
          <FadeIn delay={0.08} y={14}>
            <blockquote className="card italic serif text-xl leading-relaxed">
              <strong>
                “I’d been sitting on the idea of moving to Italy for years.
                After my call with nomadissimi, it stopped feeling impossible.
                I’m writing this from my flat in Florence.”
              </strong>{" "}
              --Samantha, Marketing Analyst from Canada
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
                  Get the Free Guide
                </h4>
                <p className="sans mt-2 text-[#2B2B2B]/80">
                  Drop your email and we’ll send you your free starter guide.
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
            If you’re still reading this, something in you already knows it’s
            time. Give yourself the chance to see what life feels like when you
            stop waiting for it to start. You can keep Googling and getting
            frustrated… or you can get on a plane and start enjoying your
            Italian dream.
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
      {/* Header row — NOW with extra tom margin */}
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

type AddonCardProps = {
  title: string;
  items: ReactNode[];
  blurb?: ReactNode; // NEW
  footer?: ReactNode; // NEW
  className?: string;
};

function AddonCard({
  title,
  items,
  blurb,
  footer,
  className = "",
}: AddonCardProps) {
  // Split "Name — €297" into parts so we can gray-out the €
  const [name, pricePart = ""] = title.split("—").map((s) => s.trim());
  const isEuro = pricePart.startsWith("€");
  const amount = isEuro ? pricePart.slice(1) : pricePart;

  return (
    <div className={`addon-card h-full ${className}`}>
      <div className="addon-header">
        <h5 className="addon-title">{name}</h5>
        <span className="addon-price">
          {isEuro && (
            <span className="text-black/40 mr-1 align-[-0.05em]">€</span>
          )}
          <span className="text-[#4B5C44]">{amount}</span>
        </span>
      </div>

      {/* NEW: short blurb under the title */}
      {blurb ? (
        <p className="mt-2 text-sm md:text-[15px] text-[#2B2B2B]/70 leading-relaxed">
          {blurb}
        </p>
      ) : null}

      <ul className="addon-list mt-4">
        {items.map((it, i) => (
          <li key={i} className="flex gap-2 leading-relaxed text-[#2B2B2B]/85">
            <span className="addon-bullet text-[#C9A86A] select-none">→</span>
            <span>{it}</span>
          </li>
        ))}
      </ul>

      {/* NEW: footer area (e.g., Stripe button) */}
      {footer && (
        <div className="mt-6 flex justify-center">
          {" "}
          {/* ⬅ centered */}
          {footer}
        </div>
      )}
    </div>
  );
}

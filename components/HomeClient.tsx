"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { ReactNode, RefObject } from "react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import FAQ from "../components/ui/components/FAQ";
import Link from "next/link";
import CheckoutButton from "../components/ui/CheckoutButton";
import HeroVideo from "../components/ui/components/HeroVideo";
import ItalyImageStrip from "../components/ui/components/ItalyImageStrip";
import FadeInOnScroll from "../components/ui/components/FadeInOnScroll";
import BlogPreviewClient from "@/components/BlogPreviewClient";
import type { BlogPostPreview } from "@/lib/blog-types";
import { STRIPE_PRICE_IDS } from "@/lib/stripe-price-ids";

type Props = {
  blogPosts: BlogPostPreview[];
};

export default function NomadissimiLanding({ blogPosts }: Props) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement | null>(null);

  async function handleGuideSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        throw new Error("Subscription failed");
      }

      setSuccess(true);
      setEmail("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* YOUR EXISTING PAGE CONTENT */}
      <header className="sticky top-0 z-50 bg-[#F8F5EF] border-b border-black/8 shadow-[0_4px_14px_rgba(0,0,0,0.03)]">
        {" "}
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
          <nav className="hidden md:flex items-center gap-8 lg:gap-12 text-[17px] font-serif tracking-wide">
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
              href="#blog"
              className="hover:text-[#4B5D44] transition-colors duration-200 md:mr-2 lg:mr-0"
            >
              Blog
            </a>
            <a
              href="#faq"
              className="hover:text-[#4B5D44] transition-colors duration-200 md:mr-2 lg:mr-0"
            >
              FAQ
            </a>
          </nav>

          {/* nav bar cta buttons) */}
          <div className="flex items-center gap-3 sm:gap-4 md:ml-2 lg:ml-4">
            {/* divider dot (only on desktop nav) */}
            <span className="hidden md:inline-block mx-1 h-1 w-1 rounded-full bg-[#C9A86A]/70" />
            {/* Free Guide — quiet couture */}
            <a
              href="#guide"
              className="serif relative hidden sm:inline-flex items-center justify-center
             px-4 py-2.5
             border border-[#C9A86A]/60
             bg-transparent text-[#4B5D44]
             text-[18px] font-semibold tracking-[0.08em]
             overflow-hidden
             transition-all duration-300 ease-out
             hover:bg-[#F9F5EE] hover:-translate-y-[1px]
             hover:shadow-[0_8px_22px_rgba(193,168,125,0.18)]"
            >
              <span className="relative z-10">Free Guide</span>

              {/* micro shimmer (hover only) */}
              <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 hover:opacity-100">
                <span className="absolute -left-1/2 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-[#C9A86A]/35 to-transparent animate-[shimmerOnce_1.6s_ease-out]" />
              </span>
            </a>

            {/* Book (desktop → visa plans top) */}
            <Link
              href="/login"
              className="hidden md:inline-flex serif items-center justify-center
    px-4 py-2.5
    border border-[#4B5D44]
    bg-[#4B5D44] text-white
    text-[18px] font-semibold tracking-[0.08em]
    transition-all duration-300 ease-out
    hover:bg-[#3E4E38] hover:-translate-y-[1px]
    hover:shadow-[0_10px_26px_rgba(75,93,68,0.22)]"
            >
              Member Login
            </Link>

            {/*  mobile nav CTA block, old Book, now member login */}
            <Link
              href="/login"
              className="inline-flex md:hidden serif items-center justify-center
    px-4 py-2.5
    border border-[#4B5D44]
    bg-[#4B5D44] text-white
    text-[18px] font-semibold tracking-[0.08em]
    transition-all duration-300 ease-out
    hover:bg-[#3E4E38] hover:-translate-y-[1px]
    hover:shadow-[0_10px_26px_rgba(75,93,68,0.22)]"
            >
              Member Login
            </Link>

            <span className="hidden md:inline-block mx-1 h-1 w-1 rounded-full bg-[#C9A86A]/70" />
          </div>

          {/* Mobile menu button (only shows on small screens) */}
          <button
            ref={menuBtnRef}
            type="button"
            aria-label="Open menu"
            aria-haspopup="dialog"
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen(true)}
            className="inline-flex md:hidden items-center justify-center rounded-xl p-2.5 ring-1 ring-black/10 hover:bg-black/5 transition"
          >
            {/* simple hamburger */}
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      </header>

      {/* Hero */}
      <section
        id="top"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 md:pt-10 pb-8 md:pb-10"
      >
        {/* ⬇️ This grid makes it two columns on desktop, stacked on mobile */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center md:items-start overflow-x-hidden">
          {" "}
          {/* LEFT column */}
          <FadeIn y={12}>
            <div className="md:-translate-y-3 lg:-translate-y-4">
              <p className="serif italic text-[24px] md:text-[30px] leading-[1.3] text-[#5A5A5A] tracking-[-0.01em] mt-1 mb-7">
                We take the stress. You take the plane.
              </p>

              <h1 className="serif text-4xl md:text-5xl xl:text-6xl leading-[1.1] font-semibold tracking-[0.01em]">
                Move to Italy without the headaches or expensive lawyers.
              </h1>

              <div className="mt-5 max-w-[680px]">
                <p className="sans mt-4 text-[18px] md:text-[19px] leading-[1.9] text-[#4A4A4A]">
                  Nomadissimi is the specialized relocation agency for digital
                  nomads, remote workers, and online freelancers who want la
                  dolce vita without drowning in Italian bureaucracy.{" "}
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:flex sm:flex-row">
                {" "}
                <a
                  href="#guide"
                  className="relative inline-flex items-center justify-center text-center pl-6 pr-5 py-3 md:pl-8 md:pr-7 md:py-3.5 rounded-2xl
bg-gradient-to-b from-[#F9F5EE] to-[#EFE7DA]
text-[#1A1A1A] font-serif text-[15px] md:text-lg leading-tight tracking-wide
ring-1 ring-[#C9A86A]/60 shadow-[0_2px_12px_rgba(193,168,125,0.15)]
transition-all duration-300 ease-out
w-full
before:absolute before:inset-0 before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.6),transparent)]
before:opacity-0 before:translate-x-[-100%] before:transition-all before:duration-500
hover:before:opacity-80 hover:before:translate-x-[100%]
hover:shadow-[0_4px_20px_rgba(193,168,125,0.28)] hover:scale-[1.02]"
                >
                  Get the free starter guide
                </a>
                <Link
                  href="#packages"
                  className="relative inline-flex items-center justify-center text-center px-4 py-3 md:px-7 md:py-3.5 rounded-2xl
      bg-[#4B5D44]
      text-white font-serif text-[15px] md:text-lg leading-tight tracking-wide
      shadow-[0_2px_12px_rgba(75,93,68,0.25)]
      transition-all duration-300 ease-out overflow-hidden
      w-full
      before:absolute before:inset-0 before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.4),transparent)]
      before:opacity-0 before:translate-x-[-100%] before:transition-all before:duration-500
      hover:before:opacity-80 hover:before:translate-x-[100%]
      hover:shadow-[0_4px_20px_rgba(75,93,68,0.4)] hover:scale-[1.02]"
                >
                  Choose your plan
                </Link>
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
                  title="Private member portals"
                  desc="Detailed instructions, resources, and tips in an interactive way."
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
                  title="Beyond the visa"
                  desc="Support for real life in Italy too: residence, taxes, codice fiscale, and settling in well."
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
                  title="Step-by-step structure"
                  desc="Clear roadmaps and practical tools that reduce overwhelm."
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
                  desc="Honest assessment and transparent pricing. No false promises."
                />
              </div>
            </div>
          </FadeIn>
          {/* RIGHT column */}
          <FadeIn delay={0.15} y={20}>
            <div className="md:translate-y-4 lg:translate-y-5">
              <div className="aspect-[4/3] md:aspect-[5/4] rounded-3xl overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.14)]">
                <div
                  className="group relative aspect-[4/3] md:aspect-[5/4] overflow-hidden bg-[#F8F5EF]
rounded-tl-[56px] rounded-tr-[14px] rounded-br-[72px] rounded-bl-[14px]
transition-all duration-[900ms] ease-[cubic-bezier(.19,1,.22,1)]
shadow-[0_22px_80px_rgba(0,0,0,0.14)]
hover:-translate-y-2 hover:shadow-[0_42px_140px_rgba(0,0,0,0.20)]"
                  style={{
                    clipPath:
                      "path('M0,40 C0,15 15,0 40,0 H92% C96%,0 100%,4% 100%,8% V92% C100%,96% 96%,100% 92%,100% H18% C10%,100% 0,94% 0,86% Z')",
                  }}
                >
                  <HeroVideo
                    mp4Src="/hero/hero.mp4"
                    poster="/hero/poster.jpg"
                  />

                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[900ms]
bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.18)_45%,transparent_70%)]"
                  />
                </div>
              </div>

              <div className="hidden md:flex justify-center mt-8 lg:mt-10 opacity-[0.9]">
                <Image
                  src="/hero/silueta.png"
                  alt=""
                  width={460}
                  height={260}
                  aria-hidden="true"
                  className="h-auto w-[360px] lg:w-[430px]"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ——— Hero narrative ——— */}
      <FadeIn y={16}>
        <div className="card">
          <h2 className="serif text-[30px] md:text-[32px] xl:text-[38px] font-semibold text-center leading-[1.12] tracking-[-0.015em] max-w-6xl mx-auto">
            <span className="block">
              Italy is so much more than just a move: it’s an upgrade to your
              entire lifestyle.
            </span>
          </h2>
          {/* Centered + constrained */}
          <div className="mx-auto max-w-4xl px-4 text-center mt-5 md:mt-6 space-y-5">
            <p className="lead-soft">
              If you’re reading this, there’s probably a part of you that’s
              done: done with burnout, expensive housing, artificial food, and
              the feeling that life’s happening somewhere else. You’ve scrolled
              the dreamy Italy photos, saved the “move abroad” videos, maybe
              even searched “how to get an Italian visa” at 2 am. You don’t need
              more dry information:{" "}
              <strong>
                you need a roadmap, and someone who’s actually done it.
              </strong>{" "}
              Imagine aperitivo in Florence, remote work with Sicilian views,
              and weekends in Rome... all possible now thanks to Italy’s new
              Digital Nomad Visa.
            </p>

            {/* Insert horizontal pictures */}

            <div className="my-10">
              <ItalyImageStrip />
            </div>

            <h2 className="serif text-3xl md:text-3xl font-semibold text-center mt-8">
              But let’s be honest: applying solo is frustrating and slow.
            </h2>

            <p className="lead-soft">
              Information is scattered, requirements are unclear, and small
              mistakes cost months. That’s where Nomadissimi comes in: your
              boutique guide through the bureaucracy, helping you turn the
              Italian daydream into your next real address, and protecting your
              nervous system in the process!
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
                    Consulate websites are vague, Reddit is chaotic, AI
                    hallucinates, and much of the online advice is outdated or
                    flat-out wrong… leaving you overwhelmed and misinformed.
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
                    Without qualified guidance, months pass with no progress—and
                    the dream of Italy keeps getting pushed to “someday.”
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
                    <strong>Clarity from the start:</strong> efficient guidance
                    on eligibility, pathways, and timing so you can stop
                    guessing and start moving. We show you how to optimize your
                    application in full detail.
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
                    <strong>Coaching and document strategy:</strong> the keys
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
                    <strong>Beyond the visa:</strong> We carefully guide you on
                    how to register your residency, secure your Permesso di
                    Soggiorno, understand taxes, and integrate like a proficient
                    local.
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
                    <strong>Quality support adapted to real life:</strong>{" "}
                    During onboarding (for consultation packages), we ask about
                    communication preferences, accessibility needs, or anything
                    else that may shape your relocation. Bureaucracy is rigid,
                    but not us! ☺️
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* COUTURE QUOTE (no stars) */}
          <div className="relative mx-auto max-w-6xl px-6 py-8 md:py-10">
            {/* couture line */}
            <div className="mb-2 flex justify-center ">
              <div className="relative h-px w-52 bg-gradient-to-r from-transparent via-[#C9A86A]/70 to-transparent overflow-hidden">
                {/* one-time shimmer sweep */}
                <span
                  className="pointer-events-none absolute -left-24 top-0 h-full w-24 bg-gradient-to-r from-transparent via-white/70 to-transparent"
                  style={{
                    animation: "shimmerOnce 2.6s ease-out 0.2s 1 both",
                  }}
                />
              </div>
            </div>

            {/* fade-in wrapper */}
            <FadeInOnScroll className="mt-3 md:mt-4 text-center">
              {/* main italic line */}
              <p className="serif italic text-[22px] md:text-[28px] leading-[1.35] text-black/65 tracking-[0.01em] mx-auto px-6 md:px-10 max-w-[1200px] text-balance">
                Instead of drowning in paperwork, you’ll be sipping Aperols
                under the Italian sun.
              </p>

              {/* gold response line */}
              <p className="serif mt-2 md:mt-3 text-[20px] md:text-[24px] leading-[1.35] text-[#C9A86A] tracking-[0.03em] mx-auto px-6 md:px-10 max-w-[1200px] text-balance">
                We take care of the boring so you can live beautifully.
              </p>
            </FadeInOnScroll>
          </div>
        </div>
      </FadeIn>

      {/* Meet Nomadissimi + Benefits  aka how it works*/}
      <section
        id="how"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"
      >
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="card lux-card">
            <h3 className="serif text-3xl md:text-4xl font-semibold">
              Meet Nomadissimi
            </h3>

            <div className="mt-2 mb-4">
              <GoldRule />
            </div>

            <p className="sans mt-4 text-[15px] md:text-[16px] leading-[1.68] text-[#2B2B2B]/84">
              Nomadissimi was built from a rare combination: an international,
              multilingual perspective shaped by the real experience of moving
              abroad, and a deeply local expertise of how Italy works on the
              ground.
            </p>

            <p className="sans mt-4 text-[15px] md:text-[16px] leading-[1.68] text-[#2B2B2B]/84">
              Based in Sicily, Sylvie and Marco built Nomadissimi to offer
              Italian relocation support that feels more personal, competent,
              and realistic. Together, they bring cultural fluency, emotional
              intelligence, and grounded knowledge of Italian immigration and
              integration systems.
            </p>

            <div className="mt-4 grid gap-5 md:grid-cols-2">
              <div className="overflow-hidden rounded-[24px] border border-[#E6DCCB] bg-white/70 p-2.5 shadow-[0_12px_26px_rgba(0,0,0,0.045)]">
                <Image
                  src="/about/sylvia.jpg"
                  alt="Sylvie, co-founder of Nomadissimi"
                  width={900}
                  height={1200}
                  className="aspect-square w-full object-cover object-center rounded-[22px]"
                />
              </div>

              <div className="overflow-hidden rounded-[24px] border border-[#E6DCCB] bg-white/70 p-2.5 shadow-[0_12px_26px_rgba(0,0,0,0.045)]">
                <Image
                  src="/about/marco.jpg"
                  alt="Marco, co-founder of Nomadissimi"
                  width={900}
                  height={1200}
                  className="aspect-square w-full object-cover object-center rounded-[22px]"
                />
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="serif text-[28px] md:text-[30px] text-[#1C1C1C]">
                <span className="text-[#C9A86A]/70">·</span> Sylvie & Marco{" "}
                <span className="text-[#C9A86A]/70">·</span>
              </p>
              <p className="sans mt-1 text-[11px] uppercase tracking-[0.16em] text-[#4B5D44]/68">
                Co-Founders of Nomadissimi
              </p>
            </div>

            <p className="sans mt-4 text-[15px] md:text-[16px] leading-[1.68] text-[#2B2B2B]/84">
              Sylvie is a Colombian-American tech builder, business strategist,
              and global-minded creative who made the move to Italy. Marco is a
              dynamic researcher and born-and-raised Italian, with a thorough
              understanding of Italian bureaucracy, laws, and culture. That’s
              why our guidance isn’t theoretical or abstract. It’s lived, local,
              and proven.
            </p>

            <p className="sans mt-4 text-[15px] md:text-[16px] leading-[1.68] text-[#2B2B2B]/84">
              Big agencies treat you like a generic case number. We treat you
              like family moving into our neighborhood.{" "}
              <strong>
                We believe relocation support should feel clear, professional,
                and respectful.
              </strong>{" "}
              Nomadissimi warmly welcomes clients of all backgrounds, sexual
              orientations, and identities. You are safe here.
            </p>
          </div>

          <div className="card p-7 md:p-8 h-full">
            {/* Title */}
            <h4 className="serif text-3xl md:text-4xl font-semibold">
              Italy is calling...
            </h4>

            {/* Couture rule under title */}
            <div className="mt-3 h-px w-24 bg-gradient-to-r from-transparent via-[#C9A86A]/70 to-transparent" />

            {/* Visual moment */}
            <div className="mt-6 relative">
              <div className="relative overflow-hidden border border-black/10 bg-white shadow-[0_18px_60px_rgba(0,0,0,0.08)]">
                {/* IMPORTANT: group wrapper so only the IMAGE fades */}
                <div className="group">
                  <video
                    className="
    nomadissimi-decorative-video
    pointer-events-none w-full h-[150px] md:h-[170px] object-cover
    transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]
    group-hover:-translate-y-[2.5px]
    group-hover:scale-[1.02]
  "
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-hidden="true"
                    tabIndex={-1}
                    disablePictureInPicture
                  >
                    <source src="/italyiscallingvideo.mp4" type="video/mp4" />
                  </video>

                  {/* soft shadow bloom */}
                  <div
                    className="
      pointer-events-none absolute inset-0
      opacity-0 group-hover:opacity-100
      transition-opacity duration-700
      shadow-[0_22px_60px_rgba(0,0,0,0.18)]
    "
                  />

                  {/* optional couture light pass */}
                  <span
                    className="
      pointer-events-none absolute -left-1/2 top-0 h-full w-1/2
      opacity-0 group-hover:opacity-100
      bg-gradient-to-r from-transparent via-white/20 to-transparent
      transition-opacity duration-700
    "
                  />

                  {/* gradient overlay stays the same */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />

                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="serif text-white text-xl leading-tight">
                      A calmer life and new adventures.
                    </p>
                  </div>
                </div>
              </div>

              {/* tiny caption like a magazine */}
              <div className="mt-3 relative text-xs sans text-black/50">
                <span className="hidden md:inline tracking-[0.18em]">▶▶▶</span>
                <span className="absolute right-0 top-0 tracking-[0.18em] text-right">
                  OH HEY, ITALY LOOKS GOOD ON YOU
                </span>
              </div>
            </div>

            {/* Callouts grid */}
            <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sans">
              {" "}
              {/* CALLOUT 1 — Piggy */}
              <div className="group relative border border-black/10 bg-white px-5 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition hover:-translate-y-[2px] hover:shadow-[0_18px_46px_rgba(0,0,0,0.10)]">
                <div className="absolute right-0 top-0 h-px w-16 bg-gradient-to-l from-[#C9A86A]/70 to-transparent" />
                <div className="absolute right-0 top-0 h-16 w-px bg-gradient-to-b from-[#C9A86A]/50 to-transparent" />

                <div className="flex items-start gap-4">
                  {/* icon stamp (same square size, bigger icon inside) */}
                  <div className="relative shrink-0 overflow-hidden border border-black/10 bg-[#F9F5EE] p-3 shadow-[0_6px_18px_rgba(0,0,0,0.06)] transition-all duration-500 ease-out group-hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)] group-hover:-translate-y-[1px]">
                    {/* soft light sweep */}
                    <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <span className="absolute -inset-[40%] rotate-12 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                    </span>
                    <Image
                      src="/piggy.png"
                      alt=""
                      width={64}
                      height={64}
                      aria-hidden
                      className="w-10 h-10 object-contain scale-[1.18]"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="serif text-[20px] md:text-[21px] font-semibold leading-snug text-[#1F1F1F]">
                      Lower cost of living
                    </p>

                    <p className="sans mt-2 text-[15px] text-black/60 leading-relaxed">
                      Where quality of life meets accessibility
                    </p>

                    <div className="mt-4 h-px w-10 bg-black/10" />
                  </div>
                </div>
              </div>
              {/* CALLOUT 2 — Healthcare */}
              <div className="group relative border border-black/10 bg-white px-5 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition hover:-translate-y-[2px] hover:shadow-[0_18px_46px_rgba(0,0,0,0.10)]">
                <div className="absolute right-0 top-0 h-px w-16 bg-gradient-to-l from-[#4B5D44]/60 to-transparent" />
                <div className="absolute right-0 top-0 h-16 w-px bg-gradient-to-b from-[#4B5D44]/45 to-transparent" />

                <div className="flex items-start gap-4">
                  <div className="relative shrink-0 overflow-hidden border border-black/10 bg-[#F9F5EE] p-3 shadow-[0_6px_18px_rgba(0,0,0,0.06)] transition-all duration-500 ease-out group-hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)] group-hover:-translate-y-[1px]">
                    {/* soft light sweep */}
                    <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <span className="absolute -inset-[40%] rotate-12 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                    </span>
                    <Image
                      src="/healthcare.png"
                      alt=""
                      width={64}
                      height={64}
                      aria-hidden
                      className="w-10 h-10 object-contain scale-[1.18]"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="serif text-[20px] md:text-[21px] font-semibold leading-snug text-[#1F1F1F]">
                      Affordable healthcare
                    </p>
                    <p className="sans mt-2 text-[15px] text-black/60 leading-relaxed">
                      Top-tier service, without the price shock
                    </p>
                    <div className="mt-4 h-px w-10 bg-black/10" />
                  </div>
                </div>
              </div>
              {/* CALLOUT 3 — Real ingredients */}
              <div className="group relative border border-black/10 bg-white px-5 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition hover:-translate-y-[2px] hover:shadow-[0_18px_46px_rgba(0,0,0,0.10)]">
                <div className="absolute right-0 top-0 h-px w-16 bg-gradient-to-l from-[#C9A86A]/70 to-transparent" />
                <div className="absolute right-0 top-0 h-16 w-px bg-gradient-to-b from-[#C9A86A]/50 to-transparent" />

                <div className="flex items-start gap-4">
                  <div className="relative shrink-0 overflow-hidden border border-black/10 bg-[#F9F5EE] p-3 shadow-[0_6px_18px_rgba(0,0,0,0.06)] transition-all duration-500 ease-out group-hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)] group-hover:-translate-y-[1px]">
                    {/* soft light sweep */}
                    <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <span className="absolute -inset-[40%] rotate-12 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                    </span>
                    <Image
                      src="/realingredients.png"
                      alt=""
                      width={64}
                      height={64}
                      aria-hidden
                      className="w-10 h-10 object-contain scale-[1.18]"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="serif text-[20px] md:text-[21px] font-semibold leading-snug text-[#1F1F1F]">
                      Fresh, real food
                    </p>
                    <p className="sans mt-2 text-[15px] text-black/60 leading-relaxed">
                      A variety of clean and delicious ingredients. UNESCO
                      cuisine
                    </p>
                    <div className="mt-4 h-px w-10 bg-black/10" />
                  </div>
                </div>
              </div>
              {/* CALLOUT 4 — Schengen */}
              <div className="group relative border border-black/10 bg-white px-5 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition hover:-translate-y-[2px] hover:shadow-[0_18px_46px_rgba(0,0,0,0.10)]">
                <div className="absolute right-0 top-0 h-px w-16 bg-gradient-to-l from-[#4B5D44]/60 to-transparent" />
                <div className="absolute right-0 top-0 h-16 w-px bg-gradient-to-b from-[#4B5D44]/45 to-transparent" />

                <div className="flex items-start gap-4">
                  <div className="relative shrink-0 overflow-hidden border border-black/10 bg-[#F9F5EE] p-3 shadow-[0_6px_18px_rgba(0,0,0,0.06)] transition-all duration-500 ease-out group-hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)] group-hover:-translate-y-[1px]">
                    {/* soft light sweep */}
                    <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <span className="absolute -inset-[40%] rotate-12 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                    </span>
                    <Image
                      src="/schengen.png"
                      alt=""
                      width={64}
                      height={64}
                      aria-hidden
                      className="w-10 h-10 object-contain scale-[1.18]"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="serif text-[20px] md:text-[21px] font-semibold leading-snug text-[#1F1F1F]">
                      Full Schengen access
                    </p>
                    <p className="sans mt-2 text-[15px] text-black/60 leading-relaxed">
                      Travel freely throughout Europe beyond the 90-day limit
                    </p>
                    <div className="mt-4 h-px w-10 bg-black/10" />
                  </div>
                </div>
              </div>
            </div>

            <hr className="my-8 border-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8A86B]/40 to-transparent" />

            {/* tiny caption like a magazine */}
            <div className="mt-3 text-center text-s sans text-black/50">
              <span className="inline-block tracking-[0.18em]">
                What are you waiting for?
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* What is the Nomadissimi Portal? */}
      <section
        id="portal"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-18"
      >
        <div className="mx-auto max-w-6xl">
          <FadeIn y={14}>
            <div className="text-center max-w-4xl mx-auto">
              <p className="sans text-[12px] md:text-[13px] uppercase tracking-[0.18em] text-[#4B5D44]/65">
                The Nomadissimi difference
              </p>

              <h3 className="serif text-4xl md:text-5xl xl:text-[58px] font-semibold mt-3 leading-[1.08] tracking-[-0.01em]">
                What is the Nomadissimi
                <span className="block mt-1 md:mt-2">Visa Portal?</span>
              </h3>

              <p className="sans text-[#2B2B2B]/72 mt-5 text-lg md:text-[21px] leading-[1.75] max-w-3xl mx-auto">
                A private members-only portal that turns the Italian visa
                process into something clearer, calmer, and much more organized.
              </p>

              <div className="mt-5">
                <GoldRule />
              </div>
            </div>
          </FadeIn>

          <div className="mt-10 grid lg:grid-cols-[1.08fr_0.92fr] gap-6 md:gap-8 items-stretch">
            {/* LEFT: editorial feature card */}
            <FadeIn y={18}>
              <div className="relative overflow-hidden rounded-[34px] border border-[#E2D4BC] bg-[linear-gradient(135deg,#FFFDF9_0%,#FBF6EE_48%,#F7F1E6_100%)] p-7 md:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.07)]">
                {/* glow layers */}
                <div className="pointer-events-none absolute -top-20 -right-16 h-52 w-52 rounded-full bg-[#C9A86A]/12 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-24 -left-12 h-56 w-56 rounded-full bg-[#4B5D44]/8 blur-3xl" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[#DCC7A0]/55 bg-white/80 shadow-[0_10px_24px_rgba(0,0,0,0.05)]">
                      <span className="text-[24px]" aria-hidden="true">
                        ✦
                      </span>
                    </div>

                    <div>
                      <p className="sans text-[12px] uppercase tracking-[0.16em] text-[#4B5D44]/68">
                        Private member experience
                      </p>
                      <p className="serif text-[24px] md:text-[28px] font-semibold text-[#1C1C1C]">
                        More than a checklist. Much more.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-5 sans text-[17px] md:text-[18px] leading-[1.9] text-[#2B2B2B]/88">
                    <p>
                      The Nomadissimi Visa Portal is <strong>not</strong> a
                      random folder of documents and it is <strong>not</strong>{" "}
                      a boring PDF download.
                    </p>

                    <p>
                      It is an interactive <strong>22-chapter portal</strong>{" "}
                      built to walk you through the process in full: from
                      understanding whether you are applying as a
                      <strong> digital nomad or remote worker</strong>, to
                      gathering documents, preparing the bureaucratic sub-steps
                      behind them, and assembling a very strong consulate
                      packet.
                    </p>

                    <p>
                      Inside, we define the complicated parts clearly. We
                      explain the visa categories, the eligibility rules, the
                      complex “highly qualified worker” requirement, the
                      different routes you can take, and the misunderstood
                      pieces that tend to send people into a spiral halfway
                      through.
                    </p>

                    <p>
                      We dissect the full process with
                      <strong>
                        {" "}
                        illustrative examples, quizzes, detailed checklists,
                        big-sis tips, and decision guides
                      </strong>{" "}
                      that help you understand each component and what smaller
                      tricky requirements sit behind it.
                    </p>
                  </div>

                  <div className="mt-7 rounded-[26px] border border-white/70 bg-white/70 px-5 py-5 shadow-[0_12px_30px_rgba(0,0,0,0.04)] backdrop-blur">
                    <p className="serif mx-auto max-w-[620px] text-center text-[21px] md:text-[24px] leading-[1.28] text-[#1F1F1F]">
                      Think of it as the difference between being handed a list
                      of confusing requirements and being shown how to prepare
                      the whole case from beginning to end.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* RIGHT: structured portal contents panel */}
            <FadeIn delay={0.08} y={18}>
              <div className="h-full rounded-[34px] border border-black/8 bg-white p-6 md:p-7 shadow-[0_28px_70px_rgba(0,0,0,0.06)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="sans text-[12px] uppercase tracking-[0.16em] text-[#4B5D44]/65">
                      Inside the portal
                    </p>
                    <h4 className="serif text-[30px] md:text-[34px] font-semibold mt-2 leading-[1.08]">
                      What you get
                    </h4>
                  </div>

                  <div className="hidden md:grid h-12 w-12 place-items-center rounded-2xl bg-[#F7F1E8] border border-[#E7D9BF] text-[22px] shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
                    🇮🇹
                  </div>
                </div>

                <div className="mt-5 h-px w-24 bg-gradient-to-r from-[#C9A86A]/75 to-transparent" />

                <div className="mt-6 space-y-4">
                  <PortalFeatureRow
                    iconSrc="/iconspaghetti.png"
                    title="What, where, when, HOW"
                    desc="Not just what to gather, but what each document is, when and where to obtain it, and how it fits into your case."
                  />

                  <PortalFeatureRow
                    iconSrc="/iconlemon.png"
                    title="Constantly updated information"
                    desc="This is not a static document. The living portal is maintained so it can stay far more useful than a one-time dry PDF download."
                  />

                  <PortalFeatureRow
                    iconSrc="/iconpizza.png"
                    title="Myths debunked"
                    desc="We clarify the parts people most often get wrong, so you can move with more confidence and fewer wrong turns."
                  />

                  <PortalFeatureRow
                    iconSrc="/iconsinglewine.png"
                    title="More than the visa"
                    desc="Once your visa is approved, Nomadissimi also offers dedicated portals for residence, taxes, codice fiscale, and insider help on how to settle in Italy and enjoy your new move to the fullest."
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Visa packages nav bar jump */}
      <section
        id="packages"
        className="scroll-mt-28 md:scroll-mt-38 pt-2 md:pt-4"
      >
        {" "}
        <div className="text-center mb-6 md:mb-11">
          <FadeIn>
            <h3 className="serif text-4xl md:text-5xl font-semibold leading-[1.05]">
              Choose your visa plan
            </h3>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="max-w-[1100px] mx-auto px-4 text-center mt-3 md:mt-4">
              <p className="sans text-[17px] md:text-[19px] leading-[1.7] tracking-[-0.01em] text-[#2F2F2F] max-w-[980px] mx-auto text-balance">
                Every Nomadissimi visa plan is built around the same core:
                <span className="text-[#4B5D44] font-medium">
                  {" "}
                  a private portal, a smarter document process, and guidance
                  that helps you move forward with less chaos.
                </span>
              </p>

              <p className="sans mt-5 text-[15px] md:text-[17px] leading-[1.8] text-[#5A5A5A] max-w-[860px] mx-auto text-balance">
                What changes from plan to plan is how much personalized review,
                strategic support, and hands-on assistance you want around that
                portal.
              </p>
            </div>
          </FadeIn>

          <p className="serif mt-5 text-[24px] md:text-[28px] leading-[1.45] text-[#1F1F1F] max-w-4xl mx-auto">
            Let's turn the dream
            <span className="text-[#4B5D44]"> into an attainable goal.</span>
          </p>

          <p className="sans text-sm md:text-base text-[#2B2B2B]/70 mt-2 italic">
            ✨ Special pricing for a limited time ✨
          </p>

          <GoldRule />
        </div>
        {/* cards are narrower so they don't touch page edges */}
        <div className="mx-auto max-w-[1180px] mb-16 md:mb-22">
          {" "}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
            {" "}
            <FadeIn y={18}>
              <PackageCard
                badge="💡 Clarity"
                accent="#4B5D44"
                bullets={[
                  {
                    icon: "star",

                    content: (
                      <>
                        <strong>
                          Private access to the Nomadissimi Visa Portal
                        </strong>
                        : our members-only 22-chapter immersive roadmap covering
                        eligibility, application structure, what to prepare,
                        where to get it, and how to stay organized. Access valid
                        for one full year.
                      </>
                    ),
                  },
                  {
                    icon: "dot",

                    content: (
                      <>
                        <strong>“Next Steps Playbook"</strong> to help you move
                        from visa research mode into deeper preparation with
                        more confidence.
                      </>
                    ),
                  },
                ]}
                bestFor="Best for applicants who want a calm, self-guided start with solid structure before paying for more hands-on support."
              >
                <CheckoutButton
                  plan="Clarity"
                  priceId={process.env.NEXT_PUBLIC_PRICE_CLARITY!}
                  className={packagesCta}
                  label={
                    <span className="flex flex-col items-center text-center">
                      {/* Line 1 — title (slightly bigger, tighter) */}
                      <span className="serif text-[20px] md:text-[24px] font-medium tracking-[0.045em] leading-[1.02]">
                        Choose Clarity
                      </span>

                      {/* Line 2 — price (tightened + clearer hierarchy) */}
                      <span className="-mt-1 flex items-baseline gap-1">
                        <span className="sans tabular-nums text-[14px] text-white/65">
                          €
                        </span>

                        <span className="sans tabular-nums text-[20px] md:text-[21px] font-semibold text-white leading-none">
                          99
                        </span>

                        <span className="sans tabular-nums text-[13px] tracking-[0.12em] text-white/65"></span>
                      </span>
                      {/* Line 3 — anchor price */}
                      <span className="text-s text-white/50 mt-[3px]">
                        instead of €199
                      </span>
                    </span>
                  }
                />
              </PackageCard>
            </FadeIn>
            <FadeIn delay={0.08} y={18}>
              <PackageCard
                badge="🔍 Guidance"
                accent="#AEC2A1"
                featured
                bullets={[
                  {
                    icon: "dot",
                    content: (
                      <>
                        <strong>Everything inside Clarity</strong>, including
                        the full Nomadissimi Visa Portal and the "Next Steps
                        Playbook."
                      </>
                    ),
                  },
                  {
                    icon: "phone",
                    content: (
                      <>
                        <strong>45-minute private strategy consultation</strong>{" "}
                        to review your case, timing, and application direction
                        once you have gone through the material and are ready
                        for sharper guidance.
                      </>
                    ),
                  },
                  {
                    icon: "dot",
                    content: (
                      <>
                        <strong>Professional document review</strong> so you can
                        catch issues earlier.
                      </>
                    ),
                  },
                  {
                    icon: "dot",
                    content: (
                      <>
                        <strong>30 days of follow-up email support</strong>{" "}
                      </>
                    ),
                  },

                  {
                    icon: "dot",
                    content: (
                      <>
                        <strong>
                          10% off our Residence Registration portal
                        </strong>{" "}
                        for a smoother landing once your visa is approved.
                      </>
                    ),
                  },
                ]}
                bestFor="Best for applicants who want the portal plus expert eyes on their case, documents, and next decisions."
              >
                <CheckoutButton
                  plan="Guidance"
                  priceId={process.env.NEXT_PUBLIC_PRICE_GUIDANCE!}
                  className={packagesCta}
                  label={
                    <span className="flex flex-col items-center text-center">
                      {/* Line 1 — title (slightly bigger, tighter) */}
                      <span className="serif text-[20px] md:text-[24px] font-medium tracking-[0.045em] leading-[1.02]">
                        Choose Guidance
                      </span>

                      {/* Line 2 — price (tightened + clearer hierarchy) */}
                      <span className="-mt-1 flex items-baseline gap-1">
                        <span className="sans tabular-nums text-[14px] text-white/65">
                          €
                        </span>

                        <span className="sans tabular-nums text-[20px] md:text-[21px] font-semibold text-white leading-none">
                          399
                        </span>

                        <span className="sans tabular-nums text-[13px] tracking-[0.12em] text-white/65"></span>
                      </span>
                      {/* Line 3 — anchor price */}
                      <span className="text-s text-white/50 mt-[3px]">
                        instead of €599
                      </span>
                    </span>
                  }
                />
              </PackageCard>
            </FadeIn>
            <FadeIn delay={0.16} y={18}>
              <PackageCard
                badge="💎 Concierge"
                accent="#C9A86A"
                bullets={[
                  {
                    icon: "dot",
                    content: (
                      <>
                        <strong>Everything inside Clarity</strong>, including
                        the full Nomadissimi Visa Portal and the "Next Steps
                        Playbook."
                      </>
                    ),
                  },
                  {
                    icon: "phone",
                    content: (
                      <>
                        <strong>45-minute deep-dive strategy session</strong>{" "}
                        tailored to your timeline, case complexity, and
                        application direction.
                      </>
                    ),
                  },
                  {
                    icon: "phone",
                    content: (
                      <>
                        <strong>
                          Additional 45-minute refinement consultation
                        </strong>{" "}
                        with
                        <strong> consulate interview preparation</strong> so you
                        feel more prepared for your visa appointment.
                      </>
                    ),
                  },
                  {
                    icon: "dot",
                    content: (
                      <>
                        <strong>Comprehensive document review</strong> with
                        deeper oversight and more detailed feedback.
                      </>
                    ),
                  },
                  {
                    icon: "dot",
                    content: (
                      <>
                        <strong>60 days of follow-up email support</strong> with
                        priority response from our team.
                      </>
                    ),
                  },
                  {
                    icon: "star",
                    content: (
                      <>
                        <strong>
                          Early access to the Codice Fiscale Portal
                        </strong>{" "}
                        so you can understand one of the first practical
                        essentials of life in Italy.
                      </>
                    ),
                  },
                  {
                    icon: "dot",
                    content: (
                      <>
                        <strong>
                          15% off our Residence Registration portal
                        </strong>{" "}
                        for a more organized landing after visa approval.
                      </>
                    ),
                  },
                ]}
                bestFor="Best for clients who want the most strategic and high-touch Nomadissimi support from planning through soft landing."
              >
                <CheckoutButton
                  plan="Concierge"
                  priceId={process.env.NEXT_PUBLIC_PRICE_CONCIERGE!}
                  className={packagesCta}
                  label={
                    <span className="flex flex-col items-center text-center">
                      {/* Line 1 — title (slightly bigger, tighter) */}
                      <span className="serif text-[20px] md:text-[24px] font-medium tracking-[0.045em] leading-[1.02]">
                        Choose Concierge
                      </span>

                      {/* Line 2 — price (tightened + clearer hierarchy) */}
                      <span className="-mt-1 flex items-baseline gap-1">
                        <span className="sans tabular-nums text-[14px] text-white/65">
                          €
                        </span>

                        <span className="sans tabular-nums text-[20px] md:text-[21px] font-semibold text-white leading-none">
                          699
                        </span>

                        <span className="sans tabular-nums text-[13px] tracking-[0.12em] text-white/65"></span>
                      </span>
                      {/* Line 3 — anchor price */}
                      <span className="text-s text-white/50 mt-[3px]">
                        instead of €999
                      </span>
                    </span>
                  }
                />
              </PackageCard>
            </FadeIn>
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
                  className="serif inline-flex items-center justify-center px-5 py-2.5
        border border-[#C9A86A]/65 bg-white text-[#1A1A1A]
        text-[17px] md:text-[18px] tracking-[0.03em]
        transition-all duration-300 ease-out
        hover:bg-[#F9F5EE] hover:-translate-y-[1px]
        hover:shadow-[0_10px_24px_rgba(193,168,125,0.14)]"
                >
                  Help me choose
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-10 md:mt-12 mb-8 md:mb-10 flex justify-center">
        <div className="relative w-28 h-px bg-gradient-to-r from-transparent via-[#8A9B7B]/55 to-transparent">
          <span className="absolute -top-[5px] left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-[#C9A86A]/75" />
        </div>
      </div>

      <section
        id="settling"
        className="scroll-mt-28 md:scroll-mt-34 mt-6 md:mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* 👇 add this wrapper if you like a boutique width */}
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative grid md:grid-cols-3 gap-6 md:gap-8">
            {/* three <AddonCard /> as you already have */}
          </div>
        </div>

        <div className="text-center mb-10">
          <h3 className="serif text-4xl md:text-5xl font-semibold">
            Live in Italy Like a Pro...
          </h3>

          <div className="max-w-5xl mx-auto px-3 mt-5">
            <p className="sans text-[18px] md:text-[21px] leading-[1.75] tracking-[-0.01em] text-[#2F2F2F]">
              Your visa is not the end of the process.
              <span className="text-[#4B5D44] font-medium">
                {" "}
                It is the beginning of real life in Italy.
              </span>
            </p>

            <p className="sans mt-5 text-[16px] md:text-[18px] leading-[1.9] text-[#555555] max-w-4xl mx-auto">
              Once approval lands, the next layer begins: residence
              registration, codice fiscale, taxes, local systems... and all the
              practical details that shape whether your move feels smooth or
              stressful.
            </p>

            <p className="sans mt-5 text-[16px] md:text-[18px] leading-[1.9] text-[#4B5D44] max-w-4xl mx-auto">
              These portals are designed to help you build your life in Italy
              seamlessly. They are available both for existing Nomadissimi visa
              clients and for people who are already moving to Italy and want
              dedicated support for the next practical steps.
            </p>

            <p className="serif mt-5 text-[24px] md:text-[28px] leading-[1.45] text-[#1F1F1F] max-w-4xl mx-auto">
              Welcome to la dolce vita,
              <span className="text-[#4B5D44]"> done the right way.</span>
            </p>
          </div>

          <Aceituna className="mt-4" />
        </div>

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"></div>
        <div className="relative grid md:grid-cols-3 gap-6 md:gap-8">
          {" "}
          {/* Card 1 — Residence Registration */}
          <FadeIn y={14}>
            <AddonCard
              title="Residence Registration Portal"
              badge={
                <span className="inline-flex items-center gap-2 rounded-full border border-[#D9B16E]/45 bg-[#FBF4E7] px-3 py-1 text-[12px] md:text-[13px] font-medium tracking-[0.08em] uppercase text-[#8B5E2B] shadow-[0_4px_14px_rgba(201,168,106,0.10)]">
                  <span aria-hidden="true">⏳</span>
                  Time-sensitive step
                </span>
              }
              blurb={
                <span className="text-[#1E1E1E] leading-relaxed">
                  One of the first major practical steps after arrival in Italy.{" "}
                  <strong>An 8-day deadline you can't miss.</strong>{" "}
                </span>
              }
              items={[
                <>
                  <strong>
                    Access to our best-selling Residence Registration Portal:
                  </strong>{" "}
                  8 descriptive chapters covering the full residence process,
                  the documents involved, and the steps people most often get
                  confused by.
                </>,
                <>
                  <strong>📞 Private 30-minute consultation</strong> walking you
                  through the essential documents you must obtain once you move
                  to Italy.
                </>,
                <>
                  How to obtain your <strong> residence permit</strong> (the
                  famous Permesso di soggiorno): kit, appointments,
                  fingerprints.
                </>,
                <>
                  Insider guidance on the
                  <strong> Comune residency registration</strong> (crucial yet
                  often misunderstood step)
                </>,
                <>
                  How to obtain your <strong>Italian ID card</strong> (yes,
                  another essential)
                </>,
                <>
                  🎁 Bonus access to our dedicated{" "}
                  <strong>Codice Fiscale Portal</strong>
                </>,
                <>
                  <strong>30 days of email support</strong> from our team.
                </>,
              ]}
              footer={
                <div className="text-center mt-8">
                  <CheckoutButton
                    plan="Residence Registration"
                    priceId={STRIPE_PRICE_IDS.residence}
                    className="addon-cta"
                    label={
                      <AddonCtaLabel
                        title="Get Your Residence"
                        amount="299"
                        oldPrice="499"
                      />
                    }
                  />
                </div>
              }
              className="bg-[#F3F6F1] border border-[#DCDDD8] rounded-3xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.03)]"
            />
          </FadeIn>
          {/* Card 2 — Tax & Partita IVA */}
          <FadeIn delay={0.08} y={14}>
            <AddonCard
              title="Tax & Partita IVA Portal"
              blurb={
                <span className="text-[#1E1E1E] leading-relaxed">
                  <strong>
                    Italy has tax opportunities most newcomers miss.
                  </strong>{" "}
                  This package helps you understand Italy's tax regimes so you
                  can make informed decisions early. Choosing the right path
                  from the start can mean keeping thousands more in your
                  pocket.{" "}
                </span>
              }
              items={[
                <>
                  <strong>Access to our Tax & Partita IVA Portal:</strong> 12
                  insightful chapters explaining the practical setup side of
                  working and structuring yourself in Italy.
                </>,
                <>
                  <strong>📞 Strategic 30-minute consultation</strong> to
                  discuss opening a professional activity (Partita IVA)
                </>,
                <>
                  Breakdown of key <strong>tax benefits</strong> that could help
                  you <strong>save more</strong>
                </>,
                <>
                  Are you <strong>paid in crypto?</strong> How does that work?
                  We cover that too.
                </>,
                <>
                  🎁 Bonus access to our dedicated{" "}
                  <strong>Codice Fiscale Portal</strong>, as it is an important
                  building block for your tax and professional setup.
                </>,
                <>
                  <strong>Common mistakes to avoid</strong> when setting up your
                  tax situation. Trust us, these can get costly!
                </>,
              ]}
              footer={
                <div className="text-center mt-8">
                  <CheckoutButton
                    plan="Tax & Partita IVA"
                    priceId={STRIPE_PRICE_IDS.partita}
                    className="addon-cta"
                    label={
                      <AddonCtaLabel
                        title="Discover Tax Path"
                        amount="299"
                        oldPrice="499"
                      />
                    }
                  />
                </div>
              }
              className="bg-[#F3F6F1] border border-[#DCDDD8] rounded-3xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.03)]"
            />
          </FadeIn>
          {/* Card 3 — La Dolce Vita */}
          <FadeIn delay={0.16} y={14}>
            <AddonCard
              title="La Dolce Vita Integration"
              blurb={
                <span className="text-[#1E1E1E] leading-relaxed">
                  By popular demand, we created this package to help you
                  navigate the
                  <strong> real-life side of moving to Italy.</strong> It
                  includes a practical written guide plus a private consultation
                  where you can ask your questions and get more personalized
                  support as you adjust into life in Italy.
                </span>
              }
              items={[
                <>
                  <strong>
                    📞 Personalized 30-minute cultural & lifestyle consultation:
                  </strong>{" "}
                  bring your questions, receive real-world guidance, and feel
                  prepared for life in Italy beyond the postcards
                </>,
                <>
                  <strong>Where to live</strong> (based on your lifestyle and
                  priorities, not just Instagram pictures)
                </>,
                <>
                  <strong>How renting works in Italy:</strong> contracts, fees,
                  condominio, TARI, and more.
                </>,
                <>
                  <strong>Healthcare:</strong> how to access care like an
                  Italian (without surprise bills)
                </>,
                <>
                  <strong>Insider regional & cultural insights</strong> from our
                  local team: north, center, south, cities vs. coast, and how
                  each region shapes your lifestyle.
                </>,

                <>
                  🎁 Bonus access to our dedicated{" "}
                  <strong>Codice Fiscale Portal</strong> because it is a crucial
                  part of accessing local systems.
                </>,
              ]}
              footer={
                <div className="text-center mt-8">
                  <CheckoutButton
                    plan="Time to Settle In"
                    priceId={STRIPE_PRICE_IDS.settle}
                    className="addon-cta"
                    label={
                      <AddonCtaLabel
                        title="Settle in Smoothly"
                        amount="199"
                        oldPrice="399"
                      />
                    }
                  />
                </div>
              }
              className="bg-[#F3F6F1] border border-[#DCDDD8] rounded-3xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.03)]"
            />
          </FadeIn>
        </div>

        {/* The big welcome to italy bundle button */}
        <div className="flex flex-col items-center mt-8">
          <CheckoutButton
            plan="Welcome Bundle"
            priceId={STRIPE_PRICE_IDS.bundle}
            className="btn-bundle-luxe bundle-ray group relative overflow-hidden flex items-center justify-center gap-4"
            label={
              <span className="flex items-center justify-center gap-4 w-full">
                <Image
                  src="/icongift.png"
                  alt="Gift Icon"
                  width={36}
                  height={36}
                  className="h-9 w-9 md:h-10 md:w-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
                  priority
                />

                <span className="serif font-semibold tracking-[0.03em] text-white/95">
                  “Welcome to Italy” Bundle
                </span>

                <span className="flex items-baseline gap-1.5">
                  <span className="sans tabular-nums text-[15px] text-white/70">
                    €
                  </span>
                  <span className="sans tabular-nums font-semibold text-[22px] md:text-[24px] leading-none text-white">
                    599
                  </span>
                  <span className="ml-1 sans text-[13px] tracking-[0.12em] uppercase text-white/75">
                    - valued at €1,397
                  </span>
                </span>
              </span>
            }
          />

          <p className="price-subtext">
            • Get access to all the written materials and portals from the
            Residence, Tax, and Dolce Vita packages.
          </p>

          <p className="price-subtext">
            • Includes one private comprehensive 1-hr “Welcome to Italy"
            consultation covering residence registration, taxation, and
            lifestyle integration.
          </p>
        </div>
      </section>

      {/* ✅ Long, sleek divider between Packages and Testimonials */}
      <div className="mx-auto max-w-7xl">
        <div className="h-px bg-gradient-to-r from-transparent via-black/10 to-transparent my-12 md:my-16" />
      </div>

      {/* ✅ Testimonials Section (title + cards all in one) */}
      <section
        id="testimonials"
        className="scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 md:pt-8 pb-6 md:pb-8"
      >
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="serif text-4xl md:text-5xl font-semibold leading-tight">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <FadeIn y={14}>
            <blockquote className="card italic serif text-xl leading-relaxed">
              “I’d been sitting on the idea of moving to Europe for a while. I
              found out about the new digital nomad visa for Italy but was lost
              on the application. After my call with Nomadissimi, it stopped
              feeling impossible, and I have advanced a lot in the process.
              Thanks again!”{" "}
              <strong>-Rafael, Software Engineer from Illinois</strong>
            </blockquote>
          </FadeIn>

          <FadeIn delay={0.08} y={14}>
            <blockquote className="card italic serif text-xl leading-relaxed">
              “Worth it. They made the most confusing paperwork much more doable
              and I have to say that I am enjoying it. The visa portal is super
              easy to use, and all the team has been professional and kind. As
              someone managing a big international move while juggling health
              issues, having clear guidance has made all the difference.”{" "}
              <strong>-Samantha, Marketing Analyst from Canada</strong>
            </blockquote>
          </FadeIn>
        </div>
      </section>

      {/* Blog preview section */}
      <section
        id="blog"
        className="
    scroll-mt-[96px] md:scroll-mt-[112px]
    pt-6 md:pt-8
    pb-8 md:pb-12
  "
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogPreviewClient posts={blogPosts} />
        </div>
      </section>

      {/* Divider before FAQ */}
      <div className="flex justify-center my-2">
        <div className="relative w-24 h-[2px] rounded-full bg-gradient-to-r from-[#C9A86A] via-[#E6D8B9] to-[#C9A86A] overflow-hidden">
          <div className="absolute inset-0 shimmer" />
        </div>
      </div>

      {/* --- FAQ --- */}
      <div className="relative">
        <section id="faq" className="scroll-mt-24 pt-2">
          <FAQ />
        </section>
      </div>

      <div className="mb-6 flex justify-center">
        <div className="h-px w-40 bg-gradient-to-r from-transparent via-[#C9A86A]/60 to-transparent" />
      </div>

      {/* --- get the free guide newsletter --- */}
      <section
        id="guide"
        className="scroll-mt-28 md:scroll-mt-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-6"
      >
        <FadeIn y={14}>
          <div
            className="group relative bg-white border border-black/5
             shadow-[0_30px_80px_rgba(0,0,0,0.08)]
             px-8 py-8 md:px-10 md:py-10
             transition-all duration-500 ease-out
             hover:-translate-y-[2px]
             hover:shadow-[0_40px_110px_rgba(0,0,0,0.12)]"
          >
            {/* soft editorial “light” on hover */}
            <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500">
              <span className="absolute -top-24 -left-24 h-56 w-56 rounded-full bg-[#C9A86A]/10 blur-2xl" />
              <span className="absolute -bottom-28 -right-28 h-64 w-64 rounded-full bg-[#4B5D44]/8 blur-2xl" />
            </span>

            {/* keep your existing content below */}

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="serif text-3xl font-semibold">
                  Get a free sample of the Visa Portal
                </h4>
                <p className="sans mt-2 text-[#2B2B2B]/80">
                  Enter your email and we’ll send you an initial sample of the
                  Visa Portal and occasional Nomadissimi updates.
                </p>
              </div>

              <form
                className="sans grid sm:grid-cols-[1fr_auto] gap-3"
                action="https://app.kit.com/forms/8987671/subscriptions"
                method="post"
              >
                <input
                  type="email"
                  name="email_address"
                  required
                  placeholder="you@example.com"
                  className="w-full border border-black/10 bg-white px-4 py-3
      text-[16px] md:text-[17px]
      focus:outline-none focus:ring-2 focus:ring-[#4B5D44]/40"
                />

                <button
                  type="submit"
                  className="bg-[#4B5D44] text-white px-6 py-3"
                >
                  Send me the guide
                </button>

                <label className="text-xs text-[#2B2B2B]/70 flex items-start gap-2 mt-1 sm:col-span-2">
                  <input
                    type="checkbox"
                    name="consent"
                    value="yes"
                    required
                    className="mt-0.5"
                  />
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
            stop waiting for it to start. You can keep Googling, overthinking
            every step, and getting frustrated… or you can get on a plane and
            start enjoying your Italian dream. You’re in good hands.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/contact"
              className="serif inline-flex items-center justify-center px-6 py-3 md:px-7 md:py-3.5
             border border-[#4B5D44] bg-[#4B5D44] text-white
             text-[21px] md:text-[22px] font-medium tracking-[0.06em]
             transition-all duration-300 ease-out
             hover:bg-[#3E4E38] hover:-translate-y-[2px] hover:shadow-[0_14px_36px_rgba(75,93,68,0.22)]
             active:translate-y-[1px]"
            >
              Contact us
            </a>

            <a
              href="#packages"
              className="serif relative inline-flex items-center justify-center px-6 py-3 md:px-7 md:py-3.5
             border border-[#C9A86A]/70 bg-transparent text-[#1A1A1A]
             text-[21px] md:text-[22px] font-semibold tracking-[0.06em]
             overflow-hidden
             transition-all duration-300 ease-out
             hover:bg-[#F9F5EE] hover:-translate-y-[2px] hover:shadow-[0_14px_36px_rgba(193,168,125,0.18)]
             active:translate-y-[1px]"
            >
              <span className="relative z-10">Let’s get that visa</span>

              {/* couture shimmer (hover only) */}
              <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100">
                <span className="absolute -left-1/2 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-[#C9A86A]/35 to-transparent animate-[shimmerOnce_1.8s_ease-out]" />
              </span>
            </a>
          </div>
        </FadeIn>
      </section>

      {/* Brand Reinforcement Logo - Refined Spacing */}
      <div className="flex justify-center pt-[2px] pb-[12px] md:pt-[4px] md:pb-[20px]">
        <Image
          src="/logo.png"
          alt="Nomadissimi Logo"
          width={900}
          height={300}
          className="h-12 w-auto md:h-14 lg:h-16 opacity-95 drop-shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:opacity-100 transition duration-300"
        />
      </div>

      <footer className="bg-[#4B5D44] text-white mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-24 md:pb-10">
          {" "}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="serif text-xl font-semibold">
                © 2026 Nomadissimi — All rights reserved.
              </p>
              <p className="sans text-white/80 text-sm">
                Unauthorized use or reproduction is strictly prohibited.
              </p>

              <p className="sans text-white/80 text-sm">
                Made with love and espresso.
              </p>
            </div>
            <nav
              className="
    flex flex-wrap items-center justify-center md:justify-end
    gap-x-4 gap-y-3
    font-serif
    text-[14px]
    tracking-[0.12em]
    uppercase
    text-white/80
  "
            >
              <Link
                href="/terms"
                className="relative transition hover:text-white after:absolute after:left-0 after:-bottom-[2px] after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-white/70 after:transition-transform hover:after:scale-x-100"
              >
                Terms
              </Link>

              <span className="mx-2 hidden text-white/40 md:inline">·</span>
              <Link
                href="/privacy"
                className="relative transition hover:text-white after:absolute after:left-0 after:-bottom-[2px] after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-white/70 after:transition-transform hover:after:scale-x-100"
              >
                Privacy
              </Link>

              <span className="mx-2 hidden text-white/40 md:inline">·</span>

              <Link
                href="/cookies"
                className="relative transition hover:text-white after:absolute after:left-0 after:-bottom-[2px] after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-white/70 after:transition-transform hover:after:scale-x-100"
              >
                Cookies
              </Link>

              <span className="mx-2 hidden text-white/40 md:inline">·</span>

              <a
                href="/contact"
                className="relative transition hover:text-white after:absolute after:left-0 after:-bottom-[2px] after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-white/70 after:transition-transform hover:after:scale-x-100"
              >
                Contact
              </a>
            </nav>
          </div>
          <div className="mt-5 flex justify-center md:justify-start">
            <button
              type="button"
              className="sans text-white/90 underline underline-offset-4 transition hover:text-white"
              onClick={() => window.__openCookiePrefs?.()}
            >
              Cookie Preferences
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}

// Elegant olive CTA for the package cards (smaller than hero)
const packagesCta =
  "relative inline-flex items-center justify-center text-center " +
  "px-5 py-3 md:px-6 md:py-3 rounded-2xl " +
  "bg-[#4B5D44] text-white font-serif text-[15px] md:text-base font-normal leading-tight tracking-wide " +
  "shadow-[0_2px_12px_rgba(75,93,68,0.22)] transition-all duration-300 ease-out overflow-hidden " +
  "w-full " + // full width inside the card
  "before:absolute before:inset-0 before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.35),transparent)] " +
  "before:opacity-0 before:translate-x-[-100%] before:transition-all before:duration-500 " +
  "hover:before:opacity-80 hover:before:translate-x-[100%] " +
  "hover:shadow-[0_6px_22px_rgba(75,93,68,0.32)] hover:scale-[1.01]";

type CheckoutButtonProps = {
  priceId: string;
  plan: string;
  label?: string;
  className?: string;
};

function AddonCtaLabel({
  title,
  amount,
  oldPrice,
}: {
  title: string;
  amount: string; // "299", "199"
  oldPrice?: string; // "499", "399"
}) {
  return (
    <span className="flex flex-col items-center">
      <span className="addon-cta-title">{title}</span>

      <span className="addon-cta-priceRow">
        <span className="addon-cta-euro">€</span>
        <span className="addon-cta-amount">{amount}</span>
      </span>

      {oldPrice ? (
        <span className="addon-cta-oldPrice">Regularly €{oldPrice}</span>
      ) : null}
    </span>
  );
}

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

function CalloutIcon({
  name,
  className = "",
}: {
  name: "piggy" | "healthcare" | "realingredients" | "schengen";
  className?: string;
}) {
  const src =
    name === "piggy"
      ? "/icons/piggy.svg"
      : name === "healthcare"
        ? "/icons/healthcare.svg"
        : name === "realingredients"
          ? "/icons/realingredients.svg"
          : "/icons/schengen.svg";

  return (
    <span
      className={
        "grid place-items-center w-12 h-12 border border-black/10 bg-[#FBF7F0] " +
        "shadow-[0_8px_18px_rgba(0,0,0,0.05)] " +
        className
      }
    >
      <Image
        src={src}
        alt=""
        width={64}
        height={64}
        aria-hidden
        className="w-10 h-10 object-contain scale-[1.12]"
      />
    </span>
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

type FeatureProps = {
  icon: ReactNode; // or: icon: string | ReactNode if you want to still allow emojis
  title: string;
  desc: string;
};

function Feature({ icon, title, desc }: FeatureProps) {
  return (
    <li className="flex items-start gap-3.5">
      <span className="mt-1 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F8F5EF] border border-[#E7DDCC] shadow-[0_8px_20px_rgba(0,0,0,0.04)]">
        {typeof icon === "string" ? (
          <span className="text-lg leading-none">{icon}</span>
        ) : (
          icon
        )}
      </span>

      <div className="pt-[2px]">
        <p className="sans text-[17px] md:text-[18px] font-medium tracking-[-0.01em] text-[#1F1F1F]">
          {title}
        </p>
        <p className="sans mt-1 text-[15px] md:text-[16px] leading-[1.75] text-[#5A5A5A]">
          {desc}
        </p>
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

function PortalFeatureRow({
  title,
  desc,
  iconSrc,
}: {
  title: string;
  desc: string;
  iconSrc?: string;
}) {
  return (
    <div className="rounded-[26px] border border-black/8 bg-[#FFFDFC] px-5 py-5 shadow-[0_10px_26px_rgba(0,0,0,0.035)]">
      <div className="flex items-start gap-4">
        {iconSrc ? (
          <div className="mt-1 flex-none">
            <Image
              src={iconSrc}
              alt=""
              width={40}
              height={40}
              aria-hidden="true"
              className="h-10 w-10 object-contain"
            />
          </div>
        ) : (
          <span
            aria-hidden="true"
            className="mt-[10px] inline-block h-2.5 w-2.5 rounded-full bg-[#C9A86A] flex-none"
          />
        )}

        <div className="min-w-0">
          <h5 className="serif text-[22px] md:text-[24px] leading-[1.2] text-[#1F1F1F]">
            {title}
          </h5>
          <p className="sans mt-1.5 text-[15px] md:text-[16px] leading-[1.42] text-[#2B2B2B]/72">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

function WelcomeCtaLabel({ title, amount }: { title: string; amount: string }) {
  return (
    <span className="flex items-center gap-6">
      <span className="serif text-[22px] md:text-[23px] font-semibold tracking-[0.04em] text-white">
        {title}
      </span>

      <span className="flex items-baseline gap-1.5">
        <span className="text-[14px] text-white/65">€</span>
        <span className="text-[22px] md:text-[24px] font-semibold text-white leading-none">
          {amount}
        </span>
        <span className="text-[13px] tracking-[0.14em] uppercase text-white/65 ml-1">
          " "
        </span>
      </span>
    </span>
  );
}

// Elegant olive CTA (refined size + shimmer)
const greenCta =
  "relative inline-flex items-center justify-center text-center px-6 py-3 md:px-7 md:py-3.5 rounded-2xl " +
  "bg-[#4B5D44] text-white font-serif text-base md:text-lg leading-tight tracking-wide " +
  "shadow-[0_2px_12px_rgba(75,93,68,0.25)] transition-all duration-300 ease-out overflow-hidden " +
  "w-full sm:w-auto " +
  "before:absolute before:inset-0 before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.4),transparent)] " +
  "before:opacity-0 before:translate-x-[-100%] before:transition-all before:duration-500 " +
  "hover:before:opacity-80 hover:before:translate-x-[100%] " +
  "hover:shadow-[0_4px_20px_rgba(75,93,68,0.4)] hover:scale-[1.02]";

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
  price?: string;
  bullets: {
    icon?: "dot" | "phone" | "star" | "sparkle" | "check" | "olive";
    content: ReactNode;
  }[];
  bestFor: string;
  ctaText?: string;
  className?: string;
  children?: React.ReactNode;
  accent: string;
  featured?: boolean;
}) {
  function PackageBulletIcon({
    icon,
  }: {
    icon: "dot" | "phone" | "star" | "sparkle" | "check" | "olive";
  }) {
    if (icon === "phone") {
      return (
        <span
          aria-hidden="true"
          className="inline-flex h-5 w-5 items-center justify-center text-[13px] leading-none"
        >
          📞
        </span>
      );
    }

    if (icon === "star") {
      return (
        <span
          aria-hidden="true"
          className="inline-flex h-5 w-5 items-center justify-center text-[14px] leading-none text-[#C9A86A]"
        >
          ✦
        </span>
      );
    }

    if (icon === "sparkle") {
      return (
        <span
          aria-hidden="true"
          className="inline-flex h-5 w-5 items-center justify-center text-[14px] leading-none text-[#C9A86A]"
        >
          ✨
        </span>
      );
    }

    if (icon === "check") {
      return (
        <span
          aria-hidden="true"
          className="inline-flex h-5 w-5 items-center justify-center text-[14px] leading-none text-[#4B5D44]"
        >
          ✓
        </span>
      );
    }

    if (icon === "olive") {
      return (
        <span
          aria-hidden="true"
          className="inline-flex h-5 w-5 items-center justify-center text-[14px] leading-none"
        >
          🫒
        </span>
      );
    }

    return (
      <span
        aria-hidden="true"
        className="inline-block h-2.5 w-2.5 rounded-full bg-[#C9A86A]"
      />
    );
  }

  // capsule color keyed to your accent
  const capClass =
    accent === "#4B5D44"
      ? "cap-olive"
      : accent === "#D97B4E"
        ? "cap-peach"
        : "cap-gold";

  // split currency so we can gray-out the symbol
  const hasPrice = typeof price === "string" && price.length > 0;

  const trimmed = hasPrice ? price.trim() : "";
  const isEuro = hasPrice && trimmed.startsWith("€");
  const currency = isEuro ? "€" : "";
  const amount = isEuro ? trimmed.slice(1) : trimmed;

  return (
    <div
      className={`card package-card relative flex flex-col ${
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
      <div
        className={[
          "w-full flex items-center gap-4 mb-4 md:mb-5",
          hasPrice ? "justify-between" : "justify-center text-center",
        ].join(" ")}
      >
        {" "}
        <span className={`cap ${capClass} serif ${hasPrice ? "" : "mx-auto"}`}>
          {badge}
        </span>{" "}
        {hasPrice && (
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
        )}
      </div>

      {/* Bullets — add more top margin */}
      <ul className="mt-4 space-y-4 text-[15px] md:text-[16px] leading-[1.8] sans">
        {bullets.map((bullet, i) => (
          <li
            key={i}
            className="grid grid-cols-[18px_minmax(0,1fr)] gap-x-4 items-start"
          >
            <span className="pt-[4px] flex justify-center">
              <PackageBulletIcon icon={bullet.icon ?? "dot"} />
            </span>

            <span className="package-bullet-copy block">{bullet.content}</span>
          </li>
        ))}
      </ul>

      <p className="mt-5 text-sm text-[#2B2B2B]/70 sans">Best for: {bestFor}</p>

      <div className="mt-6 pt-6 border-t border-black/10">
        {children ? (
          children
        ) : ctaText ? (
          <a href="#book" className={packagesCta}>
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
  blurb?: ReactNode;
  footer?: ReactNode;
  badge?: ReactNode;
  className?: string;
};

function AddonCard({
  title,
  items,
  blurb,
  footer,
  badge,
  className = "",
}: AddonCardProps) {
  // Split "Name — €297" into parts so we can gray-out the €
  const [name, pricePart = ""] = title.split("—").map((s) => s.trim());
  const isEuro = pricePart.startsWith("€");
  const amount = isEuro ? pricePart.slice(1) : pricePart;

  return (
    <div
      className={`addon-card h-full w-full max-w-[360px] mx-auto ${className}`}
    >
      <div className="addon-header">
        <div className="min-w-0">
          <h5 className="addon-title">{name}</h5>
          {badge ? <div className="mt-3">{badge}</div> : null}
        </div>

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

function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;

    requestAnimationFrame(() => {
      if (drawerRef.current) {
        drawerRef.current.scrollTop = 0;
      }
    });
  }, [open]);

  const go = (hash: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClose();

    setTimeout(() => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.location.hash = hash;
      }
    }, 100);
  };

  if (!mounted || !open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[99999] md:hidden">
      <div
        className="absolute inset-0 bg-black/35"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={drawerRef}
        className="absolute top-0 right-0 h-screen w-[86vw] max-w-[360px] bg-[#FFFDF8] border-l border-black/10 shadow-[-12px_0_40px_rgba(0,0,0,0.12)] overflow-y-auto"
      >
        <div className="flex items-center justify-between px-5 pt-6 pb-4">
          <span className="serif text-[32px] leading-none text-black">
            Menu
          </span>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-black hover:bg-black/5"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="mx-5 h-px bg-[#E8DEC9]" />

        <div className="px-5 py-5">
          <div className="rounded-[28px] border border-black/10 bg-white/55 px-4 py-4">
            <div className="flex flex-col">
              <a
                href="#how"
                onClick={go("#how")}
                className="rounded-2xl px-4 py-4 sans text-[18px] text-black hover:bg-black/[.04]"
              >
                Who We Are
              </a>

              <a
                href="#packages"
                onClick={go("#packages")}
                className="rounded-2xl px-4 py-4 sans text-[18px] text-black hover:bg-black/[.04]"
              >
                Visa Packages
              </a>

              <a
                href="#settling"
                onClick={go("#settling")}
                className="rounded-2xl px-4 py-4 sans text-[18px] text-black hover:bg-black/[.04]"
              >
                Settling in Italy
              </a>

              <a
                href="#faq"
                onClick={go("#faq")}
                className="rounded-2xl px-4 py-4 sans text-[18px] text-black hover:bg-black/[.04]"
              >
                FAQ
              </a>

              <a
                href="#blog"
                onClick={go("#blog")}
                className="rounded-2xl px-4 py-4 sans text-[18px] text-black hover:bg-black/[.04]"
              >
                Blog
              </a>
            </div>
          </div>
        </div>

        <div className="px-5 pb-6">
          <div className="rounded-[28px] border border-black/10 bg-white/55 px-4 py-4">
            <div className="flex flex-col gap-3">
              <a
                href="#guide"
                onClick={go("#guide")}
                className="inline-flex w-full items-center justify-center rounded-full border border-[#D8BF8A] bg-[#FBF8F2] px-5 py-4 serif text-[18px] font-semibold text-black"
              >
                Free Starter Guide
              </a>

              <Link
                href="/contact"
                onClick={() => onClose()}
                className="inline-flex w-full items-center justify-center rounded-full bg-[#4B5D44] px-5 py-4 serif text-[18px] font-semibold text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

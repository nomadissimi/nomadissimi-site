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

type Props = {
  blogPosts: BlogPost[];
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
              <a
                href="#packages"
                className="hidden md:inline-flex serif items-center justify-center
    px-4 py-2.5
    border border-[#4B5D44]
    bg-[#4B5D44] text-white
    text-[18px] font-semibold tracking-[0.08em]
    transition-all duration-300 ease-out
    hover:bg-[#3E4E38] hover:-translate-y-[1px]
    hover:shadow-[0_10px_26px_rgba(75,93,68,0.22)]"
              >
                Book
              </a>

              {/* Book (mobile → Guidance card) */}
              <a
                href="#guidance"
                className="inline-flex md:hidden serif items-center justify-center
    px-4 py-2.5
    border border-[#4B5D44]
    bg-[#4B5D44] text-white
    text-[18px] font-semibold tracking-[0.08em]
    transition-all duration-300 ease-out
    hover:bg-[#3E4E38] hover:-translate-y-[1px]
    hover:shadow-[0_10px_26px_rgba(75,93,68,0.22)]"
              >
                Book
              </a>

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
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <MobileDrawer
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
          />
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
                  <a
                    href="#guide"
                    className="relative inline-flex items-center justify-center text-center px-6 py-3 md:px-7 md:py-3.5 rounded-2xl
             bg-gradient-to-b from-[#F9F5EE] to-[#EFE7DA]
             text-[#1A1A1A] font-serif text-base md:text-lg leading-tight tracking-wide
             ring-1 ring-[#C9A86A]/60 shadow-[0_2px_12px_rgba(193,168,125,0.15)]
             transition-all duration-300 ease-out
             overflow-hidden w-full sm:w-auto
             before:absolute before:inset-0 before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.6),transparent)]
             before:opacity-0 before:translate-x-[-100%] before:transition-all before:duration-500
             hover:before:opacity-80 hover:before:translate-x-[100%]
             hover:shadow-[0_4px_20px_rgba(193,168,125,0.28)] hover:scale-[1.02]"
                  >
                    Get the free starter guide
                  </a>

                  <a
                    href="#book"
                    className="relative inline-flex items-center justify-center text-center px-6 py-3 md:px-7 md:py-3.5 rounded-2xl
             bg-[#4B5D44]
             text-white font-serif text-base md:text-lg leading-tight tracking-wide
             shadow-[0_2px_12px_rgba(75,93,68,0.25)]
             transition-all duration-300 ease-out overflow-hidden
             w-full sm:w-auto
             before:absolute before:inset-0 before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.4),transparent)]
             before:opacity-0 before:translate-x-[-100%] before:transition-all before:duration-500
             hover:before:opacity-80 hover:before:translate-x-[100%]
             hover:shadow-[0_4px_20px_rgba(75,93,68,0.4)] hover:scale-[1.02]"
                  >
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
                the feeling that life’s happening somewhere else. You’ve
                scrolled the dreamy Italy photos, saved the “move abroad”
                TikToks, maybe even searched “how to get an Italian visa” at 2
                am. You don’t need more dry information:{" "}
                <strong>
                  you need a roadmap, and someone who’s actually done it.
                </strong>{" "}
                Imagine aperitivo in Florence, remote work with Sicilian views,
                and weekends in Rome — all possible now thanks to Italy’s new
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
                boutique guide through the red tape, helping you turn the
                Italian daydream into your next real address.
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
                      Consulate websites are vague, Reddit is chaotic, and much
                      of the online advice is outdated or flat-out wrong…
                      leaving you overwhelmed and misinformed.
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
                      <span className="font-semibold">
                        Bureaucratic burnout:
                      </span>{" "}
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
                      <strong>Beyond the visa:</strong> We guide you on how to
                      register your residency, secure your Permesso di
                      Soggiorno, understand taxes, and integrate like a local,
                      not a lost tourist.
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
              <div className="mt-2 mb-2">
                <GoldRule />
              </div>

              {/* unified copy size */}
              <p className="sans text-[18px] md:text-[19px] leading-[1.85] text-[#2B2B2B]/90">
                We are a specialized agency built by two worlds: expats who
                successfully made the move to Italy and Italian locals who know
                the systems, the culture, and the shortcuts...{" "}
                <strong>
                  we’ve lived both sides: the dreamer and the insider.
                </strong>{" "}
                That’s why our guidance isn’t theoretical. It’s lived, local,
                and proven. Big agencies treat you like a generic case number.
                We treat you like family moving into our neighborhood.
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
                    With us, you won’t just move to Italy… you’ll land softly
                    into <em>la dolce vita</em>.
                  </p>
                </li>
              </ul>
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
      w-full h-[150px] md:h-[170px] object-cover
      transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]
      group-hover:-translate-y-[2.5px]
      group-hover:scale-[1.02]
    "
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
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
                        A calmer life. A richer one.
                      </p>
                    </div>
                  </div>
                </div>

                {/* tiny caption like a magazine */}
                <div className="mt-3 relative text-xs sans text-black/50">
                  <span className="tracking-[0.12em]">▶▶▶</span>

                  <span className="absolute right-0 top-0 tracking-[0.18em] text-right">
                    OH HEY, ITALY LOOKS GOOD ON YOU
                  </span>
                </div>
              </div>

              {/* Callouts grid */}
              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        cuisine.
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
                        Travel throughout Europe beyond the 90-day limit
                      </p>
                      <div className="mt-4 h-px w-10 bg-black/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visa packages nav bar jump */}
        <section id="packages" className="scroll-mt-28 md:scroll-mt-38">
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
          <div className="mx-auto max-w-[1000px] mb-20 md:mb-28">
            <div className="grid md:grid-cols-3 gap-5 lg:gap-8 items-start">
              <FadeIn y={18}>
                <PackageCard
                  badge="💡 Clarity"
                  accent="#4B5D44"
                  bullets={[
                    <>
                      <strong>Personalized document checklist</strong> +
                      detailed explanations
                    </>,
                    <>
                      <strong>30 days</strong> of follow-up email support for
                      quick clarifications
                    </>,
                    <>
                      <strong>"Next Steps"</strong> Playbook
                    </>,
                  ]}
                  bestFor="For independent nomads who want a clear, structured start"
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
                            297
                          </span>

                          <span className="sans tabular-nums text-[13px] tracking-[0.12em] text-white/65">
                            + VAT
                          </span>
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
                    <>
                      <strong>📞 45-min strategy consultation call</strong>{" "}
                      (eligibility, requirements, documents)
                    </>,
                    <>
                      <strong>Personalized document checklist</strong> with
                      clear explanations
                    </>,
                    <>
                      <strong>Professional document review</strong> with
                      feedback
                    </>,
                    <>
                      <strong>60 days</strong> of follow-up email support
                    </>,
                    <>
                      <strong>"Next Steps"</strong> Playbook
                    </>,
                    <>
                      <strong>10% off</strong> Residence Registration add-on
                    </>,
                  ]}
                  bestFor="Applicants who want reassurance and professional oversight."
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
                            697
                          </span>

                          <span className="sans tabular-nums text-[13px] tracking-[0.12em] text-white/65">
                            + VAT
                          </span>
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
                    <>
                      <strong>
                        📞 45-min deep-dive strategy consultation call
                      </strong>{" "}
                      (eligibility, requirements, docs)
                    </>,
                    <>
                      <strong>Personalized document checklist</strong> +
                      detailed explanations
                    </>,
                    <>
                      <strong>Comprehensive document review</strong> with
                      feedback
                    </>,
                    <>
                      <strong>📞 Additional 45-min refinement call</strong> +
                      dedicated mock <strong>interview coaching</strong> for
                      your consulate appointment
                    </>,
                    <>
                      <strong>90 days</strong> of follow-up email support &{" "}
                      <strong>PRIORITY</strong> response
                    </>,
                    <>
                      <strong>Codice Fiscale</strong> breakdown
                    </>,
                    <>
                      <strong>"Next Steps"</strong> Playbook
                    </>,
                    <>
                      <strong>15% off</strong> our Residence Registration add-on
                    </>,
                  ]}
                  bestFor="Nomads who want a trusted partner at every step and a more detailed help."
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
                            997
                          </span>

                          <span className="sans tabular-nums text-[13px] tracking-[0.12em] text-white/65">
                            + VAT
                          </span>
                        </span>
                      </span>
                    }
                  />
                </PackageCard>
              </FadeIn>
            </div>
          </div>
        </section>

        <section
          id="settling"
          className="scroll-mt-28 md:scroll-mt-34 mt-10 md:mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* 👇 add this wrapper if you like a boutique width */}
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
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

          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"></div>
          <div className="relative grid md:grid-cols-3 gap-6 md:gap-8 px-4 sm:px-6 lg:px-8">
            {/* Card 1 — Residence Registration */}
            <FadeIn y={14}>
              <AddonCard
                title="Residence Registration"
                blurb={
                  <span className="text-[#1E1E1E] leading-relaxed">
                    <strong>
                      This is what makes your stay in Italy official and legal!
                    </strong>{" "}
                    ⚠️ Get set up in Italy as a resident smoothly.{" "}
                    <em>
                      Permesso di soggiorno, Comune registration, Italian ID
                      card...
                    </em>{" "}
                    explained with expertise and care.
                  </span>
                }
                items={[
                  <>
                    <strong>📞 Dedicated 30-minute consultation</strong> walking
                    you through the essential documents you must obtain once you
                    move to Italy.
                  </>,

                  <>
                    How to obtain your{" "}
                    <strong>
                      {" "}
                      residence permit (the famous Permesso di soggiorno):
                    </strong>{" "}
                    kit, appointments, fingerprints. It might seem a bit
                    dauting, but don't worry: we explain it to you.
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
                    <strong>Email support</strong> for 30 days
                  </>,
                ]}
                footer={
                  <div className="text-center mt-8">
                    <CheckoutButton
                      plan="Residence Registration"
                      priceId={process.env.NEXT_PUBLIC_PRICE_RESIDENCE!}
                      className="addon-cta"
                      label={
                        <AddonCtaLabel
                          title="Get Your Residence"
                          amount="297"
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
                title="Tax & Partita IVA Consultation"
                blurb={
                  <span className="text-[#1E1E1E] leading-relaxed">
                    <strong>
                      Italy has tax opportunities most newcomers don’t know
                      exist.
                    </strong>{" "}
                    Discover the different tax regimes. Choosing the right path
                    from the start can mean keeping thousands more in your
                    pocket.{" "}
                  </span>
                }
                items={[
                  <>
                    <strong>📞 Personalized 30-minute consultation</strong> to
                    discuss opening a{" "}
                    <strong>professional activity (Partita IVA)</strong>
                  </>,
                  <>
                    Breakdown of key <strong>tax benefits</strong> that could
                    help you <strong>save more</strong>
                  </>,

                  <>
                    Critical details so you can plan ahead and make decisions
                    confidently
                  </>,
                  <>
                    Are you <strong>paid in crypto?</strong> How does that work?
                    We cover that too.
                  </>,
                  <>
                    <strong>Common mistakes to avoid</strong> when setting up
                    your tax situation. Trust us, these can get costly!
                  </>,
                ]}
                footer={
                  <div className="text-center mt-8">
                    <CheckoutButton
                      plan="Tax & Partita IVA"
                      priceId={process.env.NEXT_PUBLIC_PRICE_PARTITA!}
                      className="addon-cta"
                      label={
                        <AddonCtaLabel title="Discover Tax Path" amount="197" />
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
                    This exclusive package gives you insider guidance on the
                    <strong> real-life</strong> side of moving to Italy.
                  </span>
                }
                items={[
                  <>
                    <strong>
                      📞 Personalized 30-minute cultural & lifestyle
                      consultation:
                    </strong>{" "}
                    ask your questions, get real-world guidance, and feel
                    prepared for life in Italy beyond the postcards
                  </>,
                  <>
                    <strong>Where to live</strong> (based on your lifestyle and
                    priorities, not just Instagram pictures)
                  </>,
                  <>
                    <strong>How renting actually works in Italy:</strong>{" "}
                    contracts, fees, condominio, TARI, and more.
                  </>,
                  <>
                    <strong>Healthcare:</strong> how to access care like an
                    Italian (without surprise bills)
                  </>,
                  <>
                    <strong>Insider regional & cultural insights</strong> from
                    our local team: north/center/south, cities vs. coast, and
                    how each region shapes your lifestyle
                  </>,
                  <>
                    <strong>Email support</strong> for 30 days
                  </>,
                ]}
                footer={
                  <div className="text-center mt-8">
                    <CheckoutButton
                      plan="Time to Settle In"
                      priceId={process.env.NEXT_PUBLIC_PRICE_SETTLE!}
                      className="addon-cta"
                      label={
                        <AddonCtaLabel
                          title="Settle in Smoothly"
                          amount="147"
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
            <button className="btn-bundle-luxe bundle-ray group relative overflow-hidden">
              {" "}
              <Image
                src="/icongift.png"
                alt="Gift Icon"
                width={36} // increased size for better harmony
                height={36}
                className="h-9 w-9 md:h-10 md:w-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
                priority
              />
              {/* Title */}
              <span className="serif font-semibold tracking-[0.03em] text-white/95">
                “Welcome to Italy”
              </span>
              {/* dot Separator */}
              <span className="mx-3 opacity-35">•</span>
              {/* Price group */}
              <span className="flex items-baseline gap-1.5">
                {/* Euro */}
                <span className="sans tabular-nums text-[15px] text-white/70">
                  €
                </span>

                {/* Amount — readable, not serif */}
                <span className="sans tabular-nums font-semibold text-[22px] md:text-[24px] leading-none text-white">
                  547
                </span>

                {/* VAT — clearer but secondary */}
                <span className="ml-1 sans text-[13px] tracking-[0.12em] uppercase text-white/75">
                  + VAT
                </span>
              </span>
            </button>
            <p className="price-subtext">
              Get all 3 add-ons together <br />
              <span className="text-[#4B5D44] font-medium">
                (valued at €641)
              </span>
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
                <strong>
                  “I’d been sitting on the idea of moving to Europe for a while.
                  I found out about the new digital nomad visa for Italy but was
                  lost on the application. After my call with nomadissimi, it
                  stopped feeling impossible, and I have advanced a lot in
                  process. Thanks again!”
                </strong>{" "}
                --Rafael, Software Engineer from Illinois
              </blockquote>
            </FadeIn>

            <FadeIn delay={0.08} y={14}>
              <blockquote className="card italic serif text-xl leading-relaxed">
                <strong>
                  “Worth it. They made the most confusing paperwork much more
                  doable and I actually enjoyed it. All the team was
                  professional and kind.”
                </strong>{" "}
                --Samantha, Marketing Analyst from Canada
              </blockquote>
            </FadeIn>
          </div>
        </section>

        {/* ——— Subtle gold shimmer (tighter) ——— */}
        <div className="flex justify-center mt-6 mb-3 md:mt-8 md:mb-4">
          {" "}
          <div className="relative">
            <div className="w-24 h-[3px] bg-gradient-to-r from-[#C9A86A] via-[#E6D8B9] to-[#C9A86A] rounded-full overflow-hidden">
              <div className="absolute inset-0 shimmer" />
            </div>
          </div>
        </div>

        {/* Blog preview section */}
        <section
          id="blog"
          className="scroll-mt-28 md:scroll-mt-36 pt-2 md:pt-2 pb-6 md:pb-16"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <BlogPreviewClient posts={blogPosts} />
          </div>
        </section>

        {/* rest of your page */}
        {/* --- FAQ --- */}
        <div className="-mt-2 md:-mt-4 [&_h2]:mt-0 [&_section]:pt-0">
          <section id="faq" className="scroll-mt-24 pt-6 md:pt-8">
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
                    Get the Free Guide
                  </h4>
                  <p className="sans mt-2 text-[#2B2B2B]/80">
                    Drop your email and we’ll send you your free starter guide.
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
                    <input type="checkbox" required className="mt-0.5" />
                    <span>
                      I agree to the service terms and privacy policy.
                      Occasional emails only. Unsubscribe anytime.
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
              time. Give yourself the chance to see what life feels like when
              you stop waiting for it to start. You can keep Googling and
              getting frustrated… or you can get on a plane and start enjoying
              your Italian dream.
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="serif text-xl font-semibold">
                  © 2025 Nomadissimi — All rights reserved.
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
    flex items-center
    gap-3
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

                <span className="mx-2 text-white/40">·</span>

                <Link
                  href="/privacy"
                  className="relative transition hover:text-white after:absolute after:left-0 after:-bottom-[2px] after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-white/70 after:transition-transform hover:after:scale-x-100"
                >
                  Privacy
                </Link>

                <span className="mx-2 text-white/40">·</span>

                <Link
                  href="/cookies"
                  className="relative transition hover:text-white after:absolute after:left-0 after:-bottom-[2px] after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-white/70 after:transition-transform hover:after:scale-x-100"
                >
                  Cookies
                </Link>

                <span className="mx-2 text-white/40">·</span>

                <a
                  href="/contact"
                  className="relative transition hover:text-white after:absolute after:left-0 after:-bottom-[2px] after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-white/70 after:transition-transform hover:after:scale-x-100"
                >
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </footer>
      </div>
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
}: {
  title: string;
  amount: string; // "297", "197", "97"
}) {
  return (
    <span className="flex flex-col items-center">
      <span className="addon-cta-title">{title}</span>

      <span className="addon-cta-priceRow">
        <span className="addon-cta-euro">€</span>
        <span className="addon-cta-amount">{amount}</span>
        <span className="addon-cta-vat">+ VAT</span>
      </span>
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
          + VAT
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
  const hasPrice = typeof price === "string" && price.length > 0;

  const trimmed = hasPrice ? price.trim() : "";
  const isEuro = hasPrice && trimmed.startsWith("€");
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
    <div
      className={`addon-card h-full w-full max-w-[360px] mx-auto ${className}`}
    >
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

function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  // lock scroll when open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const go = (hash: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
    // wait a beat so close feels smooth
    setTimeout(() => {
      window.location.hash = hash;
    }, 80);
  };

  return (
    <div
      className={[
        "fixed inset-0 z-[99999] md:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      ].join(" ")}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={[
          "absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-200",
          open ? "opacity-100" : "opacity-0",
        ].join(" ")}
      />

      {/* Panel */}
      <aside
        className={[
          "absolute right-0 top-0 h-full w-[84%] max-w-[360px]",
          "bg-[#FFFDF8] ring-1 ring-black/10 shadow-2xl rounded-l-3xl",
          "p-5 flex flex-col",
          "transition-transform duration-200 ease-out",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="serif text-xl font-semibold tracking-tight">
            Menu
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex items-center justify-center p-2 rounded-lg hover:bg-black/5 transition"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="mt-5 h-px bg-gradient-to-r from-transparent via-[#C9A86A]/50 to-transparent" />

        {/* Links */}
        <div className="mt-4 rounded-2xl bg-[#FFFDF8] ring-1 ring-black/10 shadow-[0_18px_50px_rgba(0,0,0,0.08)] p-2 relative z-10">
          <nav className="mt-4 flex flex-col gap-2.5 text-[15px] sans text-black">
            <a
              href="#how"
              onClick={go("#how")}
              className="px-3 py-3 bg-[#FFFDF8] rounded-xl hover:bg-black/[.04] active:bg-black/[.06]"
            >
              Who We Are
            </a>
            <a
              href="#packages"
              onClick={go("#packages")}
              className="px-3 py-3 bg-[#FFFDF8]  rounded-xl hover:bg-black/[.04] active:bg-black/[.06]"
            >
              Visa Packages
            </a>
            <a
              href="#settling"
              onClick={go("#settling")}
              className="px-3 py-3 rounded-xl hover:bg-black/[.04] active:bg-black/[.06]"
            >
              Settling in Italy
            </a>
            <a
              href="#faq"
              onClick={go("#faq")}
              className="px-3 py-3 rounded-xl hover:bg-black/[.04] active:bg-black/[.06]"
            >
              FAQ
            </a>
            <a
              href="/blog"
              onClick={() => onClose()}
              className="px-3 py-3 rounded-xl hover:bg-black/[.04] active:bg-black/[.06]"
            >
              Blog
            </a>
          </nav>
        </div>

        {/* Divider */}
        <div className="mt-2 h-px bg-gradient-to-r from-transparent via-[#C9A86A]/50 to-transparent" />

        {/* CTAs */}
        <div className="mt-3 rounded-2xl bg-[#FFFDF8] ring-1 ring-black/10 shadow-[0_18px_50px_rgba(0,0,0,0.08)] p-3 relative z-10">
          <div className="mt-2 grid grid-cols-1 gap-2">
            <a
              href="#guide"
              onClick={go("#guide")}
              className="btn btn-champagne w-full justify-center"
            >
              Free Starter Guide
            </a>
            <a
              href="#book"
              onClick={go("#book")}
              className="btn btn-primary w-full justify-center"
            >
              Book a Call
            </a>
          </div>
        </div>

        <div className="mt-auto pt-5 text-xs text-[#2B2B2B]/60">
          <div className="flex items-center gap-2"></div>
        </div>
      </aside>
    </div>
  );
}

// components/SiteNav.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function SiteNav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[#F8F5EF]/95 border-b border-black/5 shadow-[0_8px_20px_rgba(0,0,0,0.03)] transition-all duration-300">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0"
          aria-label="Nomadissimi home"
        >
          <Image
            src="/logo.png"
            alt="Nomadissimi"
            width={800}
            height={140}
            priority
            className="h-10 w-auto md:h-12 lg:h-14"
            sizes="(max-width: 768px) 160px, (max-width: 1024px) 200px, 240px"
          />
          <span className="sr-only">Nomadissimi</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12 text-[17px] font-serif tracking-wide">
          <a
            href="/#how"
            className="hover:text-[#4B5D44] transition-colors duration-200"
          >
            Who We Are
          </a>
          <a
            href="/#packages"
            className="hover:text-[#4B5D44] transition-colors duration-200"
          >
            Visa Packages
          </a>
          <a
            href="/#settling"
            className="hover:text-[#4B5D44] transition-colors duration-200"
          >
            Settling in Italy
          </a>
          <a
            href="/#faq"
            className="hover:text-[#4B5D44] transition-colors duration-200 md:mr-2 lg:mr-0"
          >
            FAQ
          </a>
        </nav>

        {/* Nav bar CTA buttons */}
        <div className="flex items-center gap-3 sm:gap-4 md:ml-2 lg:ml-4">
          {/* divider dot (only on desktop nav) */}
          <span className="hidden md:inline-block mx-1 h-1 w-1 rounded-full bg-[#C9A86A]/70" />

          {/* Free Guide — quiet couture */}
          <a
            href="/#guide"
            className="group serif relative hidden sm:inline-flex items-center justify-center
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
            <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              <span className="absolute -left-1/2 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-[#C9A86A]/35 to-transparent animate-[shimmerOnce_1.6s_ease-out]" />
            </span>
          </a>

          {/* Book (desktop → visa plans top) */}
          <a
            href="/#packages"
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
            href="/#guidance"
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

        {/* Mobile menu button (placeholder, so file compiles cleanly) */}
        <button
          type="button"
          aria-label="Open menu"
          className="inline-flex md:hidden items-center justify-center rounded-xl p-2.5 ring-1 ring-black/10 hover:bg-black/5 transition"
        >
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
    </header>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/italystrip/1.jpg",
  "/italystrip/2.jpg",
  "/italystrip/3.jpg",
  "/italystrip/4.jpg",
  "/italystrip/5.jpg",
  "/italystrip/6.jpg",
  "/italystrip/7.jpg",
  "/italystrip/8.jpg",
  "/italystrip/9.jpg",
  "/italystrip/10.jpg",
  "/italystrip/11.jpg",
  "/italystrip/12.jpg",
  "/italystrip/13.jpg",
  "/italystrip/14.jpg",
  "/italystrip/15.jpg",
];

export default function ItalyImageStrip() {
  return (
    <div className="my-10">
      {/* editorial label */}
      <div className="mx-auto mb-4 flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <p className="serif text-sm tracking-[0.22em] text-black/55 uppercase">
          Italy, unfiltered... no need for AI
        </p>
        {/* top right gradient line */}
        <div className="ml-auto -mr-6 sm:-mr-10 lg:-mr-16 h-px w-36 bg-gradient-to-r from-transparent via-[#E6D8B9] to-[#C9A86A]/90 animate-couture-line" />
      </div>

      {/* edge fade mask */}
      <div
        className="relative overflow-hidden -mx-6 sm:-mx-8 lg:-mx-16"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        }}
      >
        {/* the strip */}
        <div
          className="flex w-max animate-italy-scroll gap-8 px-4 sm:px-6 lg:px-8"
          style={{ animationDuration: "44s" }}
        >
          {[...images, ...images].map((src, i) => (
            <figure key={i} className="group relative h-44 w-72 flex-shrink-0">
              {/* “magazine print” frame */}
              <div
                className="relative h-full w-full overflow-hidden rounded-none bg-[#F8F5EF]
                              ring-1 ring-black/10
                              shadow-[0_22px_80px_rgba(0,0,0,0.10)]
                              transition-transform duration-700 ease-out
                              group-hover:-translate-y-1"
              >
                <Image
                  src={src}
                  alt="Italy lifestyle"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  sizes="288px"
                />

                {/* soft depth (not heavy) */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/20" />

                {/* subtle paper sheen on hover (quiet luxe) */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700
                                bg-[linear-gradient(120deg,transparent_25%,rgba(255,255,255,0.18)_45%,transparent_70%)]"
                />
              </div>

              {/* tiny “caption line” like a magazine spread */}
              <div className="mt-3 h-px w-10 bg-black/15" />
            </figure>
          ))}
        </div>
      </div>

      {/* bottom-left gold shimmer line (below the strip) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6">
        <div className="mr-auto -ml-6 sm:-ml-10 lg:-ml-16 h-px w-36 bg-gradient-to-r from-[#C9A86A]/90 via-[#E6D8B9] to-transparent animate-couture-line" />
      </div>

      {/* general division */}
    </div>
  );
}

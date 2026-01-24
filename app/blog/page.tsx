// app/blog/page.tsx
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog | Nomadissimi",
  description:
    "Editorial guides for Italy’s Digital Nomad Visa, relocation, cost of living, and la dolce vita.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
      {/* header */}
      <div className="text-center max-w-3xl mx-auto">
        <p className="serif text-sm tracking-[0.22em] text-black/55">
          NOMADISSIMI JOURNAL
        </p>
        <h1 className="serif text-4xl md:text-5xl font-semibold mt-3">
          Italy, unfiltered.
        </h1>
        <div className="mt-6 h-px w-44 mx-auto bg-gradient-to-r from-transparent via-[#C9A86A]/70 to-transparent" />
        <p className="sans mt-6 text-[#2B2B2B]/75 text-[17px] md:text-[18px] leading-relaxed">
          Practical, boutique guidance for digital nomads who want the dream —
          without the bureaucracy spiral.
        </p>
      </div>

      {/* grid */}
      <div className="mt-12 md:mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="group block border border-black/10 bg-white shadow-[0_18px_60px_rgba(0,0,0,0.06)]
                       transition hover:-translate-y-[2px] hover:shadow-[0_26px_70px_rgba(0,0,0,0.10)]"
          >
            <div className="relative overflow-hidden">
              <div className="absolute right-0 top-0 h-px w-20 bg-gradient-to-l from-[#C9A86A]/70 to-transparent" />
              <div className="absolute right-0 top-0 h-20 w-px bg-gradient-to-b from-[#C9A86A]/50 to-transparent" />

              {p.cover ? (
                <Image
                  src={p.cover}
                  alt=""
                  width={1200}
                  height={700}
                  className="h-[190px] w-full object-cover transition duration-500 ease-out group-hover:scale-[1.02]"
                />
              ) : (
                <div className="h-[190px] bg-gradient-to-br from-[#F9F5EE] to-[#EFE7DA]" />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0 opacity-70" />
            </div>

            <div className="p-6">
              <p className="sans text-xs tracking-[0.18em] text-black/45">
                {p.date} • {p.readingMinutes} MIN READ
              </p>
              <h2 className="serif text-[22px] font-semibold mt-3 leading-snug">
                {p.title}
              </h2>
              <p className="sans mt-3 text-black/60 leading-relaxed">
                {p.excerpt}
              </p>

              <div className="mt-5 flex items-center gap-2">
                <span className="h-px w-10 bg-black/10" />
                <span className="sans text-sm text-black/55 group-hover:text-black transition">
                  Read
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import type { BlogPostPreview } from "@/lib/blog-types";
import { motion, type Variants } from "framer-motion";

const gridVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

type Props = {
  posts: BlogPostPreview[];
};

function formatDate(input: string) {
  // expects ISO-ish date like "2025-12-22" or full ISO string
  const d = new Date(input);
  if (Number.isNaN(d.getTime())) return input; // fallback: show raw string
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogPreviewClient({ posts }: Props) {
  if (!posts?.length) return null;

  return (
    <section className="pt-3 md:pt-4 pb-1">
      <div className="text-center mb-10 md:mb-12">
        <h2 className="serif text-3xl md:text-4xl font-medium">
          From the Nomadissimi Journal
        </h2>
        <div className="mx-auto mt-4 h-px w-16 bg-[#C8A86B]/60" />
      </div>

      <motion.div
        className="
    grid
    grid-cols-1
    md:grid-cols-2
    lg:grid-cols-3
      gap-x-8
    gap-y-10
    max-w-[1200px]
    mx-auto
  "
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {" "}
        {posts
          .slice()
          .sort((a, b) => {
            if (!a.date || !b.date) return 0;
            return new Date(b.date).getTime() - new Date(a.date).getTime();
          })
          .slice(0, 3)
          .map((post) => (
            <motion.article
              key={post.slug}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="
  group
  bg-[#F7F2EA]
  rounded-2xl
  overflow-hidden
  shadow-[0_12px_32px_rgba(0,0,0,0.05)]
  ring-1 ring-black/5
  max-w-[360px]
  mx-auto
"
            >
              {/* Cover */}
              <div className="relative w-full aspect-[3/2] bg-black/5">
                {" "}
                {post.cover ? (
                  <Link
                    href={`/blog/${post.slug}`}
                    aria-label={`Read ${post.title}`}
                  >
                    <Image
                      src={post.cover}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 560px"
                      priority={false}
                    />
                  </Link>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-black/0" />
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Date */}
                {post.date ? (
                  <p className="sans text-[16px] tracking-[0.12em] uppercase text-black/45 mb-3">
                    {formatDate(post.date)}
                  </p>
                ) : null}

                {/* Title (clickable) */}
                <h3 className="serif text-[22px] leading-snug line-clamp-3">
                  {" "}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-[#4B5D44] transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>

                {/* Excerpt — intentionally short */}
                {post.excerpt ? (
                  <p className="sans mt-2 text-[15px] leading-relaxed text-black/60 line-clamp-3">
                    {post.excerpt}
                  </p>
                ) : null}

                {/* Read → */}
                <div className="mt-6">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 sans font-semibold text-[#4B5D44] hover:opacity-85 transition"
                  >
                    Read <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
      </motion.div>
      {/* View more */}
      <div className="mt-8 mb-2 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 serif text-[22px] font-medium text-[#4B5D44] hover:opacity-80 transition"
        >
          View more blog posts <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}

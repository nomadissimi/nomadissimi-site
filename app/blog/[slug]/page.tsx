// app/blog/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostPage } from "@/lib/blog";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const page = await getPostPage(params.slug);
  if (!page) return {};
  return {
    title: `${page.meta.title} | Nomadissimi Journal`,
    description: page.meta.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const page = await getPostPage(params.slug);
  if (!page) return notFound();

  const { meta, html } = page;

  return (
    <div className="bg-[#FFFCF7]">
      <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-8 pb-14 md:pt-10 md:pb-16">
        <Link
          href="/blog"
          className="sans inline-flex items-center gap-2 text-sm text-[#4B5D44] hover:text-[#3E4F3A] transition hover:translate-x-[-2px]"
        >
          <span aria-hidden>←</span> Back to Journal
        </Link>

        <header className="mt-6">
          <p className="sans text-xs tracking-[0.22em] uppercase text-black/45">
            {meta.date} • {meta.readingMinutes} min read
          </p>

          <h1 className="serif mt-3 text-4xl md:text-5xl font-semibold tracking-[0.01em]">
            {meta.title}
          </h1>

          <p className="sans mt-3 text-base md:text-lg text-black/60 leading-relaxed max-w-2xl">
            {meta.excerpt}
          </p>

          {meta.cover ? (
            <div className="mt-8 overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_18px_60px_rgba(0,0,0,0.06)]">
              <div className="relative aspect-[16/9]">
                <Image
                  src={meta.cover}
                  alt=""
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          ) : (
            <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-[#C9A86A]/70 to-transparent opacity-70" />
          )}
        </header>

        <article
          className="
    blog-prose prose prose-neutral max-w-none mt-10
    prose-p:leading-[1.95]
    prose-headings:font-semibold 
prose-headings:tracking-[0.01em]
prose-h2:!text-[#4B5D45]
prose-h3:!text-[#4B5D45]
prose-h2:mt-14
prose-h2:mb-4
prose-h3:mt-10
prose-h3:mb-3
    prose-h1:serif prose-h1:text-[clamp(2.1rem,4vw,3rem)] prose-h1:leading-[1.08]
    prose-h2:serif prose-h2:text-[clamp(1.45rem,2.2vw,1.9rem)] prose-h2:leading-[1.2]
    prose-h3:serif
    prose-a:text-[#4B5D44] prose-a:underline prose-a:underline-offset-[3px]
    prose-a:decoration-[#C9A86A]/60 hover:prose-a:decoration-[#C9A86A]/90
    prose-img:rounded-[18px] prose-img:border prose-img:border-black/10
    prose-img:shadow-[0_18px_50px_rgba(0,0,0,0.08)]
    prose-blockquote:not-italic prose-blockquote:rounded-2xl
    prose-blockquote:border-l-[#C9A86A]/70
    prose-blockquote:bg-[#FFF9F1]/70
    prose-code:rounded-xl prose-code:bg-black/[0.04] prose-code:px-2 prose-code:py-0.5
  "
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </main>
    </div>
  );
}

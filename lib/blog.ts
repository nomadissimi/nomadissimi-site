// lib/blog.ts
import "server-only";

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";

import type { BlogPostPreview } from "./blog-types";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type BlogFrontmatter = {
  title: string;
  date: string; // YYYY-MM-DD
  excerpt: string;
  cover?: string;
  tags?: string[];
};

export function getAllPosts(): BlogPostPreview[] {
  // ✅ prevent ENOENT if folder doesn't exist yet
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  const posts: BlogPostPreview[] = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const fullPath = path.join(BLOG_DIR, filename);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(raw);

    const fm = data as Partial<BlogFrontmatter>;
    if (!fm.title || !fm.date || !fm.excerpt) {
      throw new Error(
        `Missing required frontmatter in ${filename}. Required: title, date, excerpt.`
      );
    }

    const rt = readingTime(content);

    return {
      slug,
      title: fm.title,
      date: fm.date,
      excerpt: fm.excerpt,
      cover: fm.cover,
      tags: fm.tags ?? [],
      readingMinutes: Math.max(1, Math.round(rt.minutes)),
    };
  });

  posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  return posts;
}

export async function renderMarkdownToHtml(markdown: string) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(markdown);

  return String(file);
}

export async function getPostPage(slug: string) {
  const fullPath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  const fm = data as Partial<BlogFrontmatter>;

  if (!fm.title || !fm.date || !fm.excerpt) {
    throw new Error(
      `Missing required frontmatter in ${slug}.md. Required: title, date, excerpt.`
    );
  }

  const rt = readingTime(content);

  const meta: BlogPostPreview = {
    slug,
    title: fm.title,
    date: fm.date,
    excerpt: fm.excerpt,
    cover: fm.cover,
    tags: fm.tags ?? [],
    readingMinutes: Math.max(1, Math.round(rt.minutes)),
  };

  const html = await renderMarkdownToHtml(content);
  return { meta, html };
}
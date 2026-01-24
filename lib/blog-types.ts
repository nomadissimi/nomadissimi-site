// lib/blog-types.ts

export type BlogPostPreview = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  excerpt: string;
  cover?: string;
  tags?: string[];
  readingMinutes: number;
};
// components/BlogPreviewSection.tsx
import BlogPreviewClient from "@/components/BlogPreviewClient";
import { getAllPosts } from "@/lib/blog";

export default async function BlogPreviewSection() {
  const posts = getAllPosts()
    .sort(
      (a, b) =>
        new Date(b.date || "").getTime() - new Date(a.date || "").getTime()
    )
    .slice(0, 3); // ← MOST RECENT 3

  return <BlogPreviewClient posts={posts} />;
}

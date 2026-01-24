// components/BlogPreviewSection.tsx
import BlogPreviewClient from "@/components/BlogPreviewClient";
import { getAllPosts } from "@/lib/blog";

export default async function BlogPreviewSection() {
  const posts = getAllPosts();

  return <BlogPreviewClient posts={posts} />;
}

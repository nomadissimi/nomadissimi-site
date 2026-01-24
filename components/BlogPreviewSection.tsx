// components/BlogPreviewSection.tsx
import BlogPreview from "@/components/BlogPreview";
import { getAllPosts } from "@/lib/blog";

export default function BlogPreviewSection() {
  const posts = getAllPosts();
  return <BlogPreview posts={posts} />;
}

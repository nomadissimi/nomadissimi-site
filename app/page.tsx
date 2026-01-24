// app/page.tsx
import NomadissimiLanding from "@/components/HomeClient";
import { getAllPosts } from "@/lib/blog";

export default function Page() {
  const blogPosts = getAllPosts().slice(0, 3);

  return <NomadissimiLanding blogPosts={blogPosts} />;
}



// app/blog/layout.tsx
import SiteNav from "@/components/SiteNav";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F8F5EF]">
      <SiteNav />

      {/* subtle “homepage” container vibe */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="pt-10 pb-16">{children}</div>
      </div>
    </div>
  );
}

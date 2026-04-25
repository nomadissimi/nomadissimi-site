import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getGuidePortal,
  getVisaGuideSampleChapter,
  getVisaGuideSampleChapters,
} from "@/lib/guide";

type Props = {
  params: {
    slug: string;
  };
};

export default function VisaPortalSampleChapterPage({ params }: Props) {
  const portal = getGuidePortal("visa");
  const chapters = getVisaGuideSampleChapters();
  const activeChapter = getVisaGuideSampleChapter(params.slug);

  if (!activeChapter) notFound();

  return (
    <div className="min-h-screen bg-[#F7F5F0]">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
        <div className="mb-6 rounded-[28px] border border-[#E2D4BC] bg-white/70 px-5 py-5 md:px-7 md:py-6">
          <p className="sans text-[12px] uppercase tracking-[0.16em] text-[#4B5D44]/65">
            Public sample
          </p>
          <h1 className="serif mt-2 text-3xl md:text-4xl lg:text-5xl leading-[1.06]">
            Preview the Nomadissimi Visa Portal
          </h1>
          <p className="sans mt-3 max-w-3xl text-[16px] md:text-[17px] leading-[1.7] text-black/68">
            Explore a sample of the first three chapters and get a feel for how
            the portal is structured before you buy.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[340px_minmax(0,1fr)]">
          {/* Sidebar */}
          <aside className="rounded-[32px] border border-[#E2D4BC] bg-white/80 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.04)]">
            <p className="sans text-[12px] uppercase tracking-[0.14em] text-black/40">
              Sample portal
            </p>

            <h2 className="serif mt-4 text-[33px] leading-[1.15]">
              {portal.title}
            </h2>

            <div className="mt-6 space-y-3">
              {chapters.map((chapter, index) => {
                const isActive = chapter.slug === activeChapter.slug;

                return (
                  <Link
                    key={chapter.slug}
                    href={`/visa-portal-sample/${chapter.slug}`}
                    className={[
                      "block rounded-[22px] px-5 py-4 transition",
                      isActive
                        ? "bg-[#556B4F] text-white"
                        : "bg-[#FBF7F0] text-black hover:bg-[#F4EEDF]",
                    ].join(" ")}
                  >
                    <p
                      className={`sans text-[12px] uppercase tracking-[0.12em] ${
                        isActive ? "text-white/70" : "text-black/40"
                      }`}
                    >
                      Chapter {index + 1}
                    </p>
                    <p className="serif mt-1 text-[17px] leading-[1.45]">
                      {chapter.title}
                    </p>
                  </Link>
                );
              })}

              {/* Fake Chapter 4 CTA */}
              <div className="rounded-[22px] border border-[#E5D8C2] bg-[#FFFDF9] px-5 py-4">
                <p className="sans text-[12px] uppercase tracking-[0.12em] text-black/40">
                  Chapter 4
                </p>
                <p className="serif mt-1 text-[17px] leading-[1.45] text-black/78">
                  Want full access?
                </p>
                <p className="sans mt-3 text-[15px] leading-[1.7] text-black/66">
                  Unlock the complete Visa Portal to continue with the rest of
                  the roadmap, deeper document guidance, and the full
                  step-by-step structure.
                </p>

                <Link
                  href="/#visa-packages"
                  className="mt-4 inline-flex rounded-full bg-[#556B4F] px-5 py-3 text-white transition hover:opacity-90"
                >
                  Unlock the full portal
                </Link>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main className="rounded-[32px] border border-[#E2D4BC] bg-white/85 p-6 md:p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.04)]">
            <p className="sans text-[12px] uppercase tracking-[0.14em] text-black/40">
              Sample chapter
            </p>

            <h3 className="serif mt-3 text-4xl md:text-5xl lg:text-[58px] leading-[1.04]">
              {activeChapter.title}
            </h3>

            <div className="mt-8">
              {/* replace this with your actual markdown / MDX renderer */}
              <div className="whitespace-pre-wrap sans text-[17px] leading-[1.9] text-black/80">
                {activeChapter.content}
              </div>
            </div>

            <div className="mt-10 rounded-[26px] border border-[#E2D4BC] bg-[#FBF7F0] px-6 py-6">
              <p className="sans text-[12px] uppercase tracking-[0.14em] text-[#4B5D44]/65">
                Continue inside the full portal
              </p>
              <h4 className="serif mt-2 text-[28px] leading-[1.2]">
                Ready for the full roadmap?
              </h4>
              <p className="sans mt-3 max-w-2xl text-[16px] leading-[1.7] text-black/68">
                The full Nomadissimi Visa Portal includes all 22 chapters, the
                complete document strategy, and the deeper guidance behind each
                step of the process.
              </p>

              <Link
                href="/#visa-packages"
                className="mt-5 inline-flex rounded-full bg-[#556B4F] px-5 py-3 text-white transition hover:opacity-90"
              >
                Get full access
              </Link>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

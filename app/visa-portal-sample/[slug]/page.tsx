import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  GuideCallout,
  GuideTip,
  GuideWarning,
  GuideDivider,
  GuideCard,
  GuideChecklist,
  GuideTaxSnapshot,
  GuideUnlockCard,
  GuideTaxCompare,
  GuideQuickFacts,
  GuideMistakeBox,
  GuideSteps,
  GuideRecap,
  GuideBadge,
  GuideNote,
  GuideCompare,
  GuideTOC,
  GuideStat,
  GuideColumns,
  GuideQuote,
  GuideIconRow,
  GuideMiniCard,
  GuideSectionIntro,
  GuideHighlight,
  GuideSpacer,
  GuideImageCard,
  GuideFlourish,
  GuideQuiz,
  GuideIcon,
  GuideBigSis,
  GuideRoadmap,
  GuideOfficeCard,
  GuideBlueNote,
  GuideItaliaNote,
  NavyBadge,
  PlumBadge,
  TealBadge,
  GuideSoftPink,
  GuideSoftPurple,
  GuideSoftTeal,
  GuideDecisionBox,
  GuideSectionBreak,
  GuideHeroAccent,
  GuideStamp,
  GuideIllustrationCard,
  GuideQuizItem,
  GuideTaxCompareCard,
} from "@/components/guide/GuideMDX";

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

  const sampleNavItems = [
    ...chapters.map((chapter) => ({
      slug: chapter.slug,
      title: chapter.title,
      isCta: false,
    })),
    {
      slug: "full-access",
      title: "Keys to Italy: Your Must-Have Document Checklist",
      isCta: true,
    },
  ];

  const activeChapter =
    params.slug === "full-access"
      ? null
      : getVisaGuideSampleChapter(params.slug);

  if (params.slug !== "full-access" && !activeChapter) notFound();

  return (
    <div className="min-h-screen bg-[#F7F5F0]">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
        <div className="mb-6 rounded-[28px] border border-[#E2D4BC] bg-white/70 px-5 py-5 md:px-7 md:py-6">
          <p className="sans text-[12px] uppercase tracking-[0.16em] text-[#4B5D44]/65">
            Free sample
          </p>
          <h1 className="serif mt-2 text-3xl leading-[1.06] md:text-4xl lg:text-5xl">
            Preview the Nomadissimi Visa Portal
          </h1>
          <p className="sans mt-3 max-w-3xl text-[16px] leading-[1.7] text-black/68 md:text-[17px]">
            Explore a sample of the first three chapters and get a feel for how
            the portal is structured.
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
              {sampleNavItems.map((item, index) => {
                const isActive =
                  item.slug === "full-access"
                    ? params.slug === "full-access"
                    : activeChapter?.slug === item.slug;

                return (
                  <Link
                    key={item.slug}
                    href={`/visa-portal-sample/${item.slug}`}
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
                      {item.title}
                    </p>

                    {item.isCta && (
                      <p
                        className={`sans mt-3 text-[14px] leading-[1.65] ${
                          isActive ? "text-white/78" : "text-black/62"
                        }`}
                      >
                        Unlock the complete Visa Portal to continue with the
                        rest of the roadmap.
                      </p>
                    )}
                  </Link>
                );
              })}
            </div>
          </aside>

          {/* Main content */}
          <main className="rounded-[32px] border border-[#E2D4BC] bg-white/85 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.04)] md:p-8 lg:p-10">
            {params.slug === "full-access" ? (
              <>
                <p className="sans text-[12px] uppercase tracking-[0.14em] text-black/40">
                  Chapter 4
                </p>

                <h3 className="serif mt-3 text-4xl leading-[1.04] md:text-5xl lg:text-[58px]">
                  Ready for the full portal?
                </h3>

                <p className="sans mt-5 text-[17px] leading-[1.85] text-black/76">
                  In the full guide, this chapter is where the visa starts
                  becoming much more concrete. We walk you through the real
                  document checklist, explain what each item is, why Italy asks
                  for it, and what usually sits behind it.
                </p>

                <GuideSoftPurple title="What happens next">
                  <div className="text-[17px] md:text-[18px] leading-[1.75] text-black/72">
                    Then, in the 18 chapters that follow, we break everything
                    down piece by piece (and sub-piece by sub-piece): the
                    different qualification routes, the supporting documents,
                    the bureaucratic terminology, the hidden sub-steps, and the
                    details that can quietly make or break your case. In other
                    words, this is where you stop looking at the visa as one big
                    intimidating pile and start understanding how to build it
                    strategically.
                  </div>
                </GuideSoftPurple>

                <div className="mt-8 max-w-3xl">
                  <p className="sans mt-5 text-[17px] leading-[1.85] text-black/76">
                    And if you want a more high-touch experience, our
                    consultation packages build on top of the portal with direct
                    support from our team. Depending on the option you choose,
                    that can include private strategy calls, professional
                    document review, follow-up support by email, and bonus
                    access to other Nomadissimi resources that help you prepare
                    more intelligently and land in Italy with more confidence.
                  </p>
                </div>

                <div className="mt-10 grid gap-4 md:grid-cols-2">
                  <div className="rounded-[24px] border border-[#E2D4BC] bg-[#FBF7F0] p-6">
                    <h4 className="serif text-[28px] leading-[1.2]">
                      What’s inside
                    </h4>

                    <ul className="mt-5 space-y-4">
                      {[
                        "22 structured chapters designed to walk you through the full process",
                        "Constantly updated information inside a living portal, not a static PDF",
                        "Practical checklists that make the process easier to track and prepare",
                        "Decision guides that help you understand which route applies to your case",
                        "Illustrative examples, golden rules, fun facts, and key tips throughout the guide",
                        "A complete roadmap designed to give you tangible guidance for next steps",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#E2D4BC] bg-white text-[14px] text-[#C9A86A]">
                            ✦
                          </span>
                          <p className="sans text-[16px] leading-[1.75] text-black/74">
                            {item}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-[24px] border border-[#E2D4BC] bg-white p-6">
                    <h4 className="serif text-[28px] leading-[1.2]">
                      Why people buy it
                    </h4>

                    <p className="sans mt-4 text-[16px] leading-[1.75] text-black/72">
                      <strong>
                        What drains people is not just the bureaucracy.
                      </strong>{" "}
                      It is the fragmented information, the contradictory
                      wording, AI tools that can sound convincing while
                      hallucinating and quietly twisting key details, the missed
                      sub-steps, and the time lost cleaning up avoidable
                      mistakes.
                    </p>

                    <p className="sans mt-4 text-[16px] leading-[1.75] text-black/72">
                      This is not a process we recommend navigating alone and
                      guessing. Our carefully-designed portal helps you move
                      strategically with more confidence and efficiency.
                    </p>

                    <Link
                      href="/#visa-packages"
                      className="mt-6 inline-flex rounded-full bg-[#556B4F] px-6 py-3 text-white transition hover:opacity-90"
                    >
                      Unlock the full portal
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <>
                <p className="sans text-[12px] uppercase tracking-[0.14em] text-black/40">
                  Sample chapter
                </p>

                <h3 className="serif mt-3 text-4xl leading-[1.04] md:text-5xl lg:text-[58px]">
                  {activeChapter!.title}
                </h3>

                <article className="guide-prose mt-8 max-w-none">
                  <MDXRemote
                    source={activeChapter!.content}
                    components={{
                      GuideCallout,
                      GuideTip,
                      GuideQuizItem,
                      GuideWarning,
                      GuideDivider,
                      GuideBigSis,
                      GuideItaliaNote,
                      GuideCard,
                      GuideRoadmap,
                      GuideOfficeCard,
                      GuideBlueNote,
                      GuideQuiz,
                      GuideChecklist,
                      GuideSteps,
                      GuideRecap,
                      GuideBadge,
                      NavyBadge,
                      PlumBadge,
                      TealBadge,
                      GuideNote,
                      GuideCompare,
                      GuideTOC,
                      GuideStat,
                      GuideColumns,
                      GuideQuote,
                      GuideIconRow,
                      GuideMiniCard,
                      GuideSoftPink,
                      GuideSoftPurple,
                      GuideSoftTeal,
                      GuideDecisionBox,
                      GuideSectionBreak,
                      GuideSectionIntro,
                      GuideHighlight,
                      GuideSpacer,
                      GuideImageCard,
                      GuideFlourish,
                      GuideIcon,
                      GuideHeroAccent,
                      GuideStamp,
                      GuideIllustrationCard,
                      GuideTaxSnapshot,
                      GuideUnlockCard,
                      GuideTaxCompare,
                      GuideTaxCompareCard,
                      GuideQuickFacts,
                      GuideMistakeBox,
                    }}
                  />
                </article>
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

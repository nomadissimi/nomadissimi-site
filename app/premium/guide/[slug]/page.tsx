import Link from "next/link";
import { cookies } from "next/headers";
import { redirect, notFound } from "next/navigation";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { getGuideAccessFromProducts } from "@/lib/portalAccess";
import { GuideContentGuard } from "@/components/guide/GuideContentGuard";
import { sha256 } from "@/lib/crypto";
import {
  detectGuideThemeFromSlug,
  getGuideChapter,
  getGuideChapters,
  getGuidePortal,
} from "@/lib/guide";
import { MDXRemote } from "next-mdx-remote/rsc";

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
  GuideDecisionBox,
  GuideSectionBreak,
  GuideHeroAccent,
  GuideStamp,
  GuideIllustrationCard,
  GuideQuizItem,
  GuideTaxCompareCard,
} from "@/components/guide/GuideMDX";

export default async function PremiumGuideChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const cookieStore = await cookies();
  const rawSession = cookieStore.get("nm_session")?.value;

  if (!rawSession) {
    redirect("/checkout/cancel");
  }

  const sessionHash = sha256(rawSession + process.env.SESSION_SECRET!);

  const { data: session } = await supabaseAdmin
    .from("sessions")
    .select("id, email, entitlement_id, expires_at, revoked_at")
    .eq("session_hash", sessionHash)
    .single();

  if (!session || session.revoked_at) {
    redirect("/checkout/cancel");
  }

  if (new Date(session.expires_at).getTime() < Date.now()) {
    redirect("/checkout/cancel");
  }

  const buyerEmail = session.email?.toLowerCase();

  if (!buyerEmail) {
    redirect("/checkout/cancel");
  }

  const { data: entitlements } = await supabaseAdmin
    .from("entitlements")
    .select("product, expires_at, revoked_at")
    .eq("email", buyerEmail);

  const activeProducts =
    entitlements
      ?.filter(
        (item) =>
          !item.revoked_at &&
          new Date(item.expires_at).getTime() >= Date.now() &&
          !!item.product,
      )
      .map((item) => item.product as string) ?? [];

  const { slug } = await params;

  const guideTheme = detectGuideThemeFromSlug(slug) ?? "visa";
  const portal = getGuidePortal(guideTheme);

  const ownedGuideKeys = getGuideAccessFromProducts(activeProducts);

  if (!ownedGuideKeys.includes(guideTheme)) {
    redirect("/premium/library");
  }

  const chapters = getGuideChapters(guideTheme);
  const chapter = getGuideChapter(guideTheme, slug);

  if (!chapter) {
    notFound();
  }

  const chapterIndex = chapters.findIndex((item) => item.slug === slug);
  const previousChapter = chapterIndex > 0 ? chapters[chapterIndex - 1] : null;
  const nextChapter =
    chapterIndex < chapters.length - 1 ? chapters[chapterIndex + 1] : null;

  const activeChapterClasses =
    guideTheme === "residence"
      ? "bg-[#2F466B] text-white shadow-[0_12px_30px_rgba(47,70,107,0.22)]"
      : guideTheme === "tax"
        ? "bg-[#6E4B7E] text-white shadow-[0_12px_30px_rgba(110,75,126,0.22)]"
        : guideTheme === "codice-fiscale"
          ? "bg-[#3B6F69] text-white shadow-[0_12px_30px_rgba(59,111,105,0.22)]"
          : "bg-[#4B5D44] text-white shadow-[0_12px_30px_rgba(75,93,68,0.22)]";

  const primaryButtonClasses =
    guideTheme === "residence"
      ? "bg-[#2F466B] text-white shadow-[0_14px_40px_rgba(47,70,107,0.25)] hover:bg-[#263A59]"
      : guideTheme === "tax"
        ? "bg-[#6E4B7E] text-white shadow-[0_14px_40px_rgba(110,75,126,0.25)] hover:bg-[#5C3D69]"
        : guideTheme === "codice-fiscale"
          ? "bg-[#3B6F69] text-white shadow-[0_14px_40px_rgba(59,111,105,0.25)] hover:bg-[#315E59]"
          : "bg-[#4B5D44] text-white shadow-[0_14px_40px_rgba(75,93,68,0.25)] hover:bg-[#3E4E38]";

  const topLibraryButtonClasses =
    guideTheme === "residence"
      ? "bg-[#2F466B] text-white shadow-[0_10px_28px_rgba(47,70,107,0.20)] hover:bg-[#263A59]"
      : guideTheme === "tax"
        ? "bg-[#6E4B7E] text-white shadow-[0_10px_28px_rgba(110,75,126,0.20)] hover:bg-[#5C3D69]"
        : guideTheme === "codice-fiscale"
          ? "bg-[#3B6F69] text-white shadow-[0_10px_28px_rgba(59,111,105,0.20)] hover:bg-[#315E59]"
          : "bg-[#4B5D44] text-white shadow-[0_10px_28px_rgba(75,93,68,0.20)] hover:bg-[#3E4E38]";

  return (
    <main className="min-h-screen bg-[#FBF8F2] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-5">
          <Link
            href="/premium/library"
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 transition ${topLibraryButtonClasses}`}
          >
            ← Back to your private library
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[300px_minmax(0,1fr)]">
          <aside className="h-fit rounded-[28px] border border-black/10 bg-white/70 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
            <p className="sans text-xs tracking-[0.22em] uppercase text-black/45">
              Private guide
            </p>

            <h2 className="serif mt-3 text-2xl font-semibold text-black leading-tight">
              {portal.title}
            </h2>

            <div className="mt-6 space-y-2 max-h-[72vh] overflow-auto pr-1">
              {chapters.map((item, index) => {
                const isActive = item.slug === chapter.slug;

                return (
                  <Link
                    key={item.slug}
                    href={`/premium/guide/${item.slug}`}
                    className={`block rounded-2xl px-4 py-3 transition ${
                      isActive
                        ? activeChapterClasses
                        : "bg-[#FBF8F2] text-black/70 hover:bg-white"
                    }`}
                  >
                    <p className="sans text-[11px] uppercase tracking-[0.18em] opacity-60">
                      Chapter {index + 1}
                    </p>
                    <p className="serif mt-1 text-[18px] leading-snug">
                      {item.title}
                    </p>
                  </Link>
                );
              })}
            </div>
          </aside>

          <section className="rounded-[28px] border border-black/10 bg-white/70 p-7 md:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
            <GuideContentGuard />
            <div className="flex flex-wrap items-center gap-3">
              <p className="sans text-xs tracking-[0.22em] uppercase text-black/45">
                Chapter {chapterIndex + 1}
              </p>
            </div>

            <h1 className="serif mt-3 text-3xl md:text-5xl font-semibold tracking-[0.01em] text-black leading-tight">
              {chapter.title}
            </h1>

            <article className="mt-8 guide-prose max-w-none select-none">
              <MDXRemote
                source={chapter.content}
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

            <div className="mt-10 flex flex-col gap-3 border-t border-black/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                {previousChapter ? (
                  <Link
                    href={`/premium/guide/${previousChapter.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#FBF8F2] px-5 py-3 text-black/70 transition hover:bg-white"
                  >
                    ← {previousChapter.title}
                  </Link>
                ) : (
                  <div />
                )}
              </div>

              <div>
                {nextChapter ? (
                  <Link
                    href={`/premium/guide/${nextChapter.slug}`}
                    className={`inline-flex items-center gap-2 rounded-full px-5 py-3 transition ${primaryButtonClasses}`}
                  >
                    {nextChapter.title} →
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </div>

            <div className="mt-10 flex justify-center border-t border-black/10 pt-6">
              <Link
                href="/premium/library"
                className="inline-flex items-center justify-center rounded-[14px] border border-black/10 bg-white px-4 py-3 text-[15px] text-black/60 transition hover:bg-[#FBF8F2] hover:text-black/80"
              >
                Back to your private library
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

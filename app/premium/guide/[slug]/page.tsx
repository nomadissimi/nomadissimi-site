import Link from "next/link";
import { cookies } from "next/headers";
import { redirect, notFound } from "next/navigation";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { sha256 } from "@/lib/crypto";
import { getVisaGuideChapter, getVisaGuideChapters } from "@/lib/guide";
import { MDXRemote } from "next-mdx-remote/rsc";

import {
  GuideCallout,
  GuideTip,
  GuideWarning,
  GuideDivider,
  GuideCard,
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
    .select("id, entitlement_id, expires_at, revoked_at")
    .eq("session_hash", sessionHash)
    .single();

  if (!session || session.revoked_at) {
    redirect("/checkout/cancel");
  }

  if (new Date(session.expires_at).getTime() < Date.now()) {
    redirect("/checkout/cancel");
  }

  const { data: entitlement } = await supabaseAdmin
    .from("entitlements")
    .select("id, product, expires_at, revoked_at")
    .eq("id", session.entitlement_id)
    .single();

  if (!entitlement || entitlement.revoked_at) {
    redirect("/checkout/cancel");
  }

  if (new Date(entitlement.expires_at).getTime() < Date.now()) {
    redirect("/checkout/cancel");
  }

  const { slug } = await params;
  const chapters = getVisaGuideChapters();
  const chapter = getVisaGuideChapter(slug);

  if (!chapter) {
    notFound();
  }

  const chapterIndex = chapters.findIndex((item) => item.slug === slug);
  const previousChapter = chapterIndex > 0 ? chapters[chapterIndex - 1] : null;
  const nextChapter =
    chapterIndex < chapters.length - 1 ? chapters[chapterIndex + 1] : null;

  return (
    <main className="min-h-screen bg-[#FBF8F2] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-[300px_minmax(0,1fr)]">
        <aside className="h-fit rounded-[28px] border border-black/10 bg-white/70 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
          <p className="sans text-xs tracking-[0.22em] uppercase text-black/45">
            Private guide
          </p>

          <h2 className="serif mt-3 text-2xl font-semibold text-black leading-tight">
            The Nomadissimi Digital Nomad Visa Master Guide
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
                      ? "bg-[#4B5D44] text-white shadow-[0_12px_30px_rgba(75,93,68,0.22)]"
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
          <p className="sans text-xs tracking-[0.22em] uppercase text-black/45">
            Chapter {chapterIndex + 1}
          </p>

          <h1 className="serif mt-3 text-3xl md:text-5xl font-semibold tracking-[0.01em] text-black leading-tight">
            {chapter.title}
          </h1>

          <article className="mt-8 guide-prose max-w-none">
            <MDXRemote
              source={chapter.content}
              components={{
                GuideCallout,
                GuideTip,
                GuideWarning,
                GuideDivider,
                GuideCard,
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
                  className="inline-flex items-center gap-2 rounded-full bg-[#4B5D44] px-5 py-3 text-white shadow-[0_14px_40px_rgba(75,93,68,0.25)] transition hover:bg-[#3E4E38]"
                >
                  {nextChapter.title} →
                </Link>
              ) : (
                <Link
                  href="/premium/guide"
                  className="inline-flex items-center gap-2 rounded-full bg-[#4B5D44] px-5 py-3 text-white shadow-[0_14px_40px_rgba(75,93,68,0.25)] transition hover:bg-[#3E4E38]"
                >
                  Back to guide home →
                </Link>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

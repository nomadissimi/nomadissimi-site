import Link from "next/link";
import { cookies } from "next/headers";
import { redirect, notFound } from "next/navigation";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { sha256 } from "@/lib/crypto";

const chapters = [
  {
    slug: "welcome",
    title: "Welcome",
    description: "A warm introduction to the guide and how to use it.",
    content: `
Welcome to The Nomadissimi Digital Nomad Visa Master Guide.

This guide was built to help you move through the Italian Digital Nomad Visa process with more clarity, fewer false assumptions, and a more realistic understanding of what consulates actually care about.

You are not reading a generic checklist.

You are reading a structured, practical guide designed to help you understand the visa in real life.
    `,
  },
  {
    slug: "unlock-italy",
    title: "Unlock Italy",
    description: "Distinctions, eligibility, and how the visa really works.",
    content: `
This chapter explains the real logic behind Italy’s Digital Nomad Visa.

We’ll look at who the visa is for, what makes it different from other routes, and how eligibility is actually interpreted in practice.
    `,
  },
  {
    slug: "starting-requirements",
    title: "Starting Requirements, Explained",
    description: "A grounded breakdown of the baseline requirements.",
    content: `
Here we break down the initial requirements in plain language.

The goal is not just to list them, but to explain what they mean, how they interact, and where applicants often get confused.
    `,
  },
  {
    slug: "highly-qualified-worker",
    title: "Proving You’re a Highly Qualified Worker",
    description: "What this requirement means and how to evidence it properly.",
    content: `
This is one of the most misunderstood parts of the application.

In this chapter, we explain what “highly qualified” can mean, what evidence may help support that classification, and why this matters.
    `,
  },
  {
    slug: "other-requirements",
    title: "The Other Requirements That Matter",
    description: "The details applicants often underestimate.",
    content: `
Beyond headline eligibility, there are secondary requirements that still shape outcomes.

This section covers those often-overlooked details and how to prepare for them.
    `,
  },
  {
    slug: "remote-work-only",
    title: "Remote Work Only",
    description:
      "Why the visa is specifically for remote workers and how that changes your application.",
    content: `
This visa is not a general relocation visa.

It is tied to remote professional activity, and your application needs to make that unmistakably clear.
    `,
  },
  {
    slug: "perfect-packet-strategy",
    title: "The Perfect Packet Strategy",
    description:
      "How to assemble a clean, convincing, consulate-friendly application packet.",
    content: `
This chapter is about presentation, coherence, and strategic assembly.

A strong application is not just about having documents — it is about making the entire packet feel clean, complete, and easy to evaluate.
    `,
  },
];

function getChapter(slug: string) {
  return chapters.find((chapter) => chapter.slug === slug);
}

function getChapterIndex(slug: string) {
  return chapters.findIndex((chapter) => chapter.slug === slug);
}

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
  const chapter = getChapter(slug);

  if (!chapter) {
    notFound();
  }

  const chapterIndex = getChapterIndex(slug);
  const previousChapter = chapterIndex > 0 ? chapters[chapterIndex - 1] : null;
  const nextChapter =
    chapterIndex < chapters.length - 1 ? chapters[chapterIndex + 1] : null;

  return (
    <main className="min-h-screen bg-[#FBF8F2] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
        {/* Sidebar */}
        <aside className="h-fit rounded-[24px] border border-black/10 bg-white/70 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
          <p className="sans text-xs tracking-[0.22em] uppercase text-black/45">
            Private guide
          </p>

          <h2 className="serif mt-3 text-2xl font-semibold text-black leading-tight">
            The Nomadissimi Digital Nomad Visa Master Guide
          </h2>

          <div className="mt-6 space-y-2">
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

        {/* Chapter content */}
        <section className="rounded-[28px] border border-black/10 bg-white/70 p-7 md:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
          <p className="sans text-xs tracking-[0.22em] uppercase text-black/45">
            Chapter {chapterIndex + 1}
          </p>

          <h1 className="serif mt-3 text-3xl md:text-5xl font-semibold tracking-[0.01em] text-black leading-tight">
            {chapter.title}
          </h1>

          <p className="sans mt-4 text-[16px] md:text-[17px] leading-[1.8] text-black/60 max-w-3xl">
            {chapter.description}
          </p>

          <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />

          <article className="mt-8 max-w-3xl">
            <div className="space-y-6 sans text-[16px] leading-[1.95] text-black/78 whitespace-pre-line">
              {chapter.content}
            </div>
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

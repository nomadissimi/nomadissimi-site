import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { sha256 } from "@/lib/crypto";
import { getVisaGuideChapters } from "@/lib/guide";

export default async function PremiumGuidePage() {
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

  const chapters = getVisaGuideChapters();

  return (
    <main className="min-h-screen bg-[#FBF8F2] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[32px] border border-black/10 bg-white/70 shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
          <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#C9A86A]/70 to-transparent" />

          <div className="px-6 py-8 md:px-10 md:py-10">
            <p className="sans text-xs tracking-[0.22em] uppercase text-black/45">
              Private access
            </p>

            <h1 className="serif mt-3 text-3xl md:text-5xl font-semibold tracking-[0.01em] text-black leading-tight">
              The Nomadissimi Digital Nomad Visa Master Guide
            </h1>

            <p className="sans mt-4 max-w-3xl text-[16px] md:text-[17px] leading-[1.85] text-black/65">
              Your private guide portal. Open any chapter below to continue
              reading.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {chapters.map((chapter, index) => (
                <Link
                  key={chapter.slug}
                  href={`/premium/guide/${chapter.slug}`}
                  className="group rounded-[24px] border border-black/10 bg-[#FFFCF7] p-5 shadow-[0_14px_40px_rgba(0,0,0,0.04)] transition hover:-translate-y-[2px] hover:bg-white"
                >
                  <p className="sans text-[11px] uppercase tracking-[0.18em] text-black/45">
                    Chapter {index + 1}
                  </p>

                  <h2 className="serif mt-3 text-[24px] leading-snug text-[#2B2B2B] group-hover:text-[#4B5D44]">
                    {chapter.title}
                  </h2>

                  <div className="mt-5 inline-flex items-center gap-2 sans text-sm text-[#4B5D44]">
                    Open chapter <span aria-hidden>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

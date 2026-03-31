import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { sha256 } from "@/lib/crypto";
import { getGuideAccessFromProducts } from "@/lib/portalAccess";
import type { GuideTheme } from "@/lib/guide";

type GuideCard = {
  key: GuideTheme;
  title: string;
  description: string;
  href: string;
  buttonClass: string;
  badgeLabel: string;
  badgeClass: string;
};

const GUIDE_CARD_CONFIG: Record<GuideTheme, GuideCard> = {
  visa: {
    key: "visa",
    title: "Visa Guide",
    description:
      "Whether you are a digital nomad (freelancer) or remote worker (employee), we show you what you need, step by step.",
    href: "/premium/guide/visa-welcome",
    buttonClass:
      "bg-[#4B5D44] text-white shadow-[0_14px_40px_rgba(75,93,68,0.25)] hover:bg-[#3E4E38]",
    badgeLabel: "Visa portal",
    badgeClass: "border-[#D9CFB7] bg-[#FBF6EA] text-[#8B6B2F]",
  },
  residence: {
    key: "residence",
    title: "Residence Registration Guide",
    description:
      "From tourist to official Italian resident. Permesso di soggiorno, Comune, Italian ID card and all that...",
    href: "/premium/guide/residence-welcome-home-your-italian-chapter-begins",
    buttonClass:
      "bg-[#2F466B] text-white shadow-[0_14px_40px_rgba(47,70,107,0.25)] hover:bg-[#263A59]",
    badgeLabel: "Residence portal",
    badgeClass: "border-[#AEBBD1] bg-[#F4F8FC] text-[#2F466B]",
  },
  tax: {
    key: "tax",
    title: "Tax & Partita IVA Guide",
    description:
      "Avoid headaches and understand the Italian Tax Regimes, deductions, and how to set up your business in Italy",
    href: "/premium/guide/tax-welcome",
    buttonClass:
      "bg-[#6E4B7E] text-white shadow-[0_14px_40px_rgba(110,75,126,0.25)] hover:bg-[#5C3D69]",
    badgeLabel: "Tax portal",
    badgeClass: "border-[#D8C6E0] bg-[#FBF5FC] text-[#6E4B7E]",
  },
  "codice-fiscale": {
    key: "codice-fiscale",
    title: "Codice Fiscale Guide",
    description:
      "Your practical guide to Italy’s essential fiscal code. How to obtain it and what it’s useful for.",
    href: "/premium/guide/codice-fiscale-welcome",
    buttonClass:
      "bg-[#3B6F69] text-white shadow-[0_14px_40px_rgba(59,111,105,0.25)] hover:bg-[#315E59]",
    badgeLabel: "Mini guide",
    badgeClass: "border-[#BFD9D4] bg-[#F3FBF8] text-[#3B6F69]",
  },
};

export default async function PremiumLibraryPage() {
  const cookieStore = await cookies();
  const rawSession = cookieStore.get("nm_session")?.value;

  if (!rawSession) {
    redirect("/checkout/cancel");
  }

  const sessionHash = sha256(rawSession + process.env.SESSION_SECRET!);

  const { data: session } = await supabaseAdmin
    .from("sessions")
    .select("id, email, expires_at, revoked_at")
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

  const ownedGuideKeys = getGuideAccessFromProducts(activeProducts);
  const ownedGuides = ownedGuideKeys.map((key) => GUIDE_CARD_CONFIG[key]);

  return (
    <main className="min-h-screen bg-[#FBF8F2] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[28px] border border-black/10 bg-white/70 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
        <p className="sans text-xs tracking-[0.22em] uppercase text-black/45">
          Private library
        </p>

        <h1 className="serif mt-3 text-3xl md:text-5xl font-semibold tracking-[0.01em] text-black leading-tight">
          Your Nomadissimi Portal
        </h1>

        <p className="mt-4 sans text-[16px] leading-[1.8] text-black/70">
          Logged in as {buyerEmail}.
        </p>

        <p className="mt-1 sans text-[15px] leading-[1.8] text-black/50">
          Everything you’ve purchased lives here, beautifully organized and
          ready whenever you need it. You currently have access to{" "}
          {ownedGuides.length} private guide
          {ownedGuides.length === 1 ? "" : "s"}.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {ownedGuides.length > 0 ? (
            ownedGuides.map((guide) => (
              <Link
                key={guide.key}
                href={guide.href}
                className="group block rounded-[24px] border border-black/10 bg-[#FBF8F2] p-6 shadow-[0_14px_36px_rgba(0,0,0,0.05)] transition duration-200 hover:-translate-y-[3px] hover:border-black/15 hover:bg-white/80 hover:shadow-[0_20px_48px_rgba(0,0,0,0.08)]"
              >
                <span
                  className={`inline-flex rounded-full border px-3 py-1 sans text-[11px] uppercase tracking-[0.14em] ${guide.badgeClass}`}
                >
                  {guide.badgeLabel}
                </span>

                <h2 className="mt-4 serif text-2xl leading-tight text-black">
                  {guide.title}
                </h2>

                <p className="mt-3 sans text-[15px] leading-[1.75] text-black/65">
                  {guide.description}
                </p>

                <div className="mt-5">
                  <span
                    className={`inline-flex items-center gap-2 rounded-full px-5 py-3 transition group-hover:scale-[1.02] ${guide.buttonClass}`}
                  >
                    Open guide →
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <div className="rounded-[24px] border border-black/10 bg-[#FBF8F2] p-5">
              <p className="sans text-[15px] leading-[1.75] text-black/65">
                No active guide access was found for this account.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

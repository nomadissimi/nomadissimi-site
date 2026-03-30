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
};

const GUIDE_CARD_CONFIG: Record<GuideTheme, GuideCard> = {
  visa: {
    key: "visa",
    title: "Visa Guide",
    description: "Your Digital Nomad Visa master guide.",
    href: "/premium/guide/visa-welcome",
    buttonClass:
      "bg-[#4B5D44] text-white shadow-[0_14px_40px_rgba(75,93,68,0.25)] hover:bg-[#3E4E38]",
  },
  residence: {
    key: "residence",
    title: "Residence Registration Guide",
    description: "From tourist to official Italian resident.",
    href: "/premium/guide/residence-welcome-home-your-italian-chapter-begins",
    buttonClass:
      "bg-[#2F466B] text-white shadow-[0_14px_40px_rgba(47,70,107,0.25)] hover:bg-[#263A59]",
  },
  tax: {
    key: "tax",
    title: "Tax & Partita IVA Guide",
    description: "Your Italian tax and Partita IVA path.",
    href: "/premium/guide/tax-welcome",
    buttonClass:
      "bg-[#6E4B7E] text-white shadow-[0_14px_40px_rgba(110,75,126,0.25)] hover:bg-[#5C3D69]",
  },
  "codice-fiscale": {
    key: "codice-fiscale",
    title: "Codice Fiscale Mini Guide",
    description: "Your practical guide to Italy’s essential fiscal code.",
    href: "/premium/guide/codice-fiscale-welcome",
    buttonClass:
      "bg-[#3B6F69] text-white shadow-[0_14px_40px_rgba(59,111,105,0.25)] hover:bg-[#315E59]",
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
          Your Nomadissimi guides
        </h1>

        <p className="mt-4 sans text-[16px] leading-[1.8] text-black/70">
          Logged in as {buyerEmail}.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {ownedGuides.length > 0 ? (
            ownedGuides.map((guide) => (
              <div
                key={guide.key}
                className="rounded-[24px] border border-black/10 bg-[#FBF8F2] p-5 shadow-[0_12px_34px_rgba(0,0,0,0.04)]"
              >
                <h2 className="serif text-2xl leading-tight text-black">
                  {guide.title}
                </h2>

                <p className="mt-3 sans text-[15px] leading-[1.75] text-black/65">
                  {guide.description}
                </p>

                <div className="mt-5">
                  <Link
                    href={guide.href}
                    className={`inline-flex items-center gap-2 rounded-full px-5 py-3 transition ${guide.buttonClass}`}
                  >
                    Open guide →
                  </Link>
                </div>
              </div>
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

import type { GuideTheme } from "@/lib/guide";

export type ProductCode =
  | "visa-clarity"
  | "visa-guidance"
  | "visa-concierge"
  | "addon-residence"
  | "addon-partita"
  | "addon-settle"
  | "bundle";

export const PRICE_ID_TO_PRODUCT: Record<string, ProductCode> = {
  [process.env.NEXT_PUBLIC_PRICE_CLARITY!]: "visa-clarity",
  [process.env.NEXT_PUBLIC_PRICE_GUIDANCE!]: "visa-guidance",
  [process.env.NEXT_PUBLIC_PRICE_CONCIERGE!]: "visa-concierge",
  [process.env.NEXT_PUBLIC_PRICE_RESIDENCE!]: "addon-residence",
  [process.env.NEXT_PUBLIC_PRICE_PARTITA!]: "addon-partita",
  [process.env.NEXT_PUBLIC_PRICE_SETTLE!]: "addon-settle",
  [process.env.NEXT_PUBLIC_PRICE_BUNDLE!]: "bundle",
};

export const PRODUCT_PORTAL_ACCESS: Record<ProductCode, GuideTheme[]> = {
  "visa-clarity": ["visa"],
  "visa-guidance": ["visa"],
  "visa-concierge": ["visa", "codice-fiscale"],

  "addon-residence": ["residence", "codice-fiscale"],
  "addon-partita": ["tax", "codice-fiscale"],
  "addon-settle": ["codice-fiscale"],

  bundle: ["residence", "tax", "codice-fiscale"],
};

export function getProductFromPriceId(
  priceId: string | null | undefined
): ProductCode | null {
  if (!priceId) return null;
  return PRICE_ID_TO_PRODUCT[priceId] ?? null;
}

export function productCanAccessGuide(
  product: string | null | undefined,
  guideTheme: GuideTheme
): boolean {
  if (!product) return false;

  const access = PRODUCT_PORTAL_ACCESS[product as ProductCode];
  if (!access) return false;

  return access.includes(guideTheme);
}

export function getGuideAccessFromProducts(products: string[]): GuideTheme[] {
  const set = new Set<GuideTheme>();

  for (const product of products) {
    const guides = PRODUCT_PORTAL_ACCESS[product as ProductCode] ?? [];
    for (const guide of guides) {
      set.add(guide);
    }
  }

  return Array.from(set);
}


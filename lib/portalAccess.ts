import type { GuideTheme } from "@/lib/guide";
import { getProductByPriceId } from "@/lib/products";

export type LegacyProductCode =
  | "visa-clarity"
  | "visa-guidance"
  | "visa-concierge"
  | "addon-residence"
  | "addon-partita"
  | "addon-settle"
  | "bundle";

export type AccessCode = LegacyProductCode | GuideTheme;

const LEGACY_PRODUCT_PORTAL_ACCESS: Record<LegacyProductCode, GuideTheme[]> = {
  "visa-clarity": ["visa"],
  "visa-guidance": ["visa"],
  "visa-concierge": ["visa", "codice-fiscale"],

  "addon-residence": ["residence", "codice-fiscale"],
  "addon-partita": ["tax", "codice-fiscale"],
  "addon-settle": ["codice-fiscale"],

  bundle: ["residence", "tax", "codice-fiscale"],
};

const DIRECT_PORTAL_ACCESS: Record<GuideTheme, GuideTheme[]> = {
  visa: ["visa"],
  residence: ["residence"],
  tax: ["tax"],
  "codice-fiscale": ["codice-fiscale"],
};

export function getProductFromPriceId(
  priceId: string | null | undefined
): string | null {
  if (!priceId) return null;

  const product = getProductByPriceId(priceId);
  return product?.key ?? null;
}

export function productCanAccessGuide(
  product: string | null | undefined,
  guideTheme: GuideTheme
): boolean {
  if (!product) return false;

  const directAccess = DIRECT_PORTAL_ACCESS[product as GuideTheme];
  if (directAccess) {
    return directAccess.includes(guideTheme);
  }

  const legacyAccess =
    LEGACY_PRODUCT_PORTAL_ACCESS[product as LegacyProductCode];
  if (legacyAccess) {
    return legacyAccess.includes(guideTheme);
  }

  return false;
}

export function getGuideAccessFromProducts(products: string[]): GuideTheme[] {
  const set = new Set<GuideTheme>();

  for (const product of products) {
    const directAccess = DIRECT_PORTAL_ACCESS[product as GuideTheme] ?? [];
    for (const guide of directAccess) {
      set.add(guide);
    }

    const legacyAccess =
      LEGACY_PRODUCT_PORTAL_ACCESS[product as LegacyProductCode] ?? [];
    for (const guide of legacyAccess) {
      set.add(guide);
    }
  }

  return Array.from(set);
}


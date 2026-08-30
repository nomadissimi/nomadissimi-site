import type { GuideTheme } from "@/lib/guide";
import {
  getProductByKey,
  getProductByPriceId,
} from "@/lib/products";

export type LegacyProductCode =
  | "visa-clarity"
  | "visa-guidance"
  | "visa-concierge"
  | "addon-residence"
  | "addon-partita"
  | "addon-settle"
  | "bundle";

export type AccessCode = LegacyProductCode | GuideTheme;

const LEGACY_PRODUCT_PORTAL_ACCESS: Record<
  LegacyProductCode,
  GuideTheme[]
> = {
  "visa-clarity": ["visa"],

  "visa-guidance": ["visa"],

  "visa-concierge": ["visa", "codice-fiscale"],

  "addon-residence": [
    "residence",
    "codice-fiscale",
  ],

  "addon-partita": [
    "tax",
    "codice-fiscale",
  ],

  "addon-settle": [
    "integration",
    "codice-fiscale",
  ],

  bundle: [
    "residence",
    "tax",
    "codice-fiscale",
    "integration",
  ],
};

const DIRECT_PORTAL_ACCESS: Record<
  GuideTheme,
  GuideTheme[]
> = {
  visa: ["visa"],
  residence: ["residence"],
  tax: ["tax"],
  "codice-fiscale": ["codice-fiscale"],
  integration: ["integration"],
};

function getPortalAccessForProduct(
  product: string,
): GuideTheme[] {
  /*
   * 1. Direct portal entitlement:
   *    "visa", "tax", "integration", etc.
   */
  const directAccess =
    DIRECT_PORTAL_ACCESS[product as GuideTheme];

  if (directAccess) {
    return directAccess;
  }

  /*
   * 2. Current product configuration:
   *    "clarity", "guidance", "dolceVita", etc.
   */
  const configuredProduct = getProductByKey(product);

  if (configuredProduct) {
    return configuredProduct.portalKeys as GuideTheme[];
  }

  /*
   * 3. Older product codes kept for backwards compatibility.
   */
  const legacyAccess =
    LEGACY_PRODUCT_PORTAL_ACCESS[
      product as LegacyProductCode
    ];

  if (legacyAccess) {
    return legacyAccess;
  }

  return [];
}

export function getProductFromPriceId(
  priceId: string | null | undefined,
): string | null {
  if (!priceId) return null;

  const product = getProductByPriceId(priceId);

  return product?.key ?? null;
}

export function productCanAccessGuide(
  product: string | null | undefined,
  guideTheme: GuideTheme,
): boolean {
  if (!product) return false;

  return getPortalAccessForProduct(product).includes(
    guideTheme,
  );
}

export function getGuideAccessFromProducts(
  products: string[],
): GuideTheme[] {
  const set = new Set<GuideTheme>();

  for (const product of products) {
    const guides = getPortalAccessForProduct(product);

    for (const guide of guides) {
      set.add(guide);
    }
  }

  return Array.from(set);
}
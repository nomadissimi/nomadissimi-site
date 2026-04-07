export type IntakeType =
  | "visa"
  | "tax"
  | "residence"
  | "dolce-vita"
  | "general";

export type PortalKey =
  | "visa"
  | "residence"
  | "tax"
  | "codice-fiscale";

export type ProductConfig = {
  key: string;
  label: string;
  priceId: string;
  portalKeys: PortalKey[];
  intakeType?: IntakeType;
  sendIntakeEmail: boolean;
};

export const PRODUCTS: Record<string, ProductConfig> = {
  clarity: {
    key: "clarity",
    label: "Clarity",
    priceId: "price_1TCWNAQnDSGgUETvOdUz6HWc",
    portalKeys: ["visa"],
    sendIntakeEmail: false,
  },

  guidance: {
    key: "guidance",
    label: "Guidance",
    priceId: "price_1TCWOyQnDSGgUETvlWFkViOj",
    portalKeys: ["visa"],
    intakeType: "visa",
    sendIntakeEmail: true,
  },

  concierge: {
    key: "concierge",
    label: "Concierge",
    priceId: "price_1TCWRaQnDSGgUETvbaY9Z4Ca",
    portalKeys: ["visa", "codice-fiscale"],
    intakeType: "visa",
    sendIntakeEmail: true,
  },

  residence: {
    key: "residence",
    label: "Residence Registration",
    priceId: "price_1TCZe1QnDSGgUETvSo0TTqMz",
    portalKeys: ["residence", "codice-fiscale"],
    intakeType: "residence",
    sendIntakeEmail: true,
  },

  partita: {
    key: "partita",
    label: "Tax & Partita IVA",
    priceId: "price_1TCZf5QnDSGgUETvLgvOOghB",
    portalKeys: ["tax", "codice-fiscale"],
    intakeType: "tax",
    sendIntakeEmail: true,
  },

  dolceVita: {
    key: "dolceVita",
    label: "La Dolce Vita",
    priceId: "price_1TCZfuQnDSGgUETvfoegwJ4J",
    portalKeys: ["codice-fiscale"],
    intakeType: "dolce-vita",
    sendIntakeEmail: true,
  },

  bundle: {
    key: "bundle",
    label: "Welcome to Italy Bundle",
    priceId: "price_1TCZgvQnDSGgUETvyzjPlw0M",
    portalKeys: ["residence", "tax", "codice-fiscale"],
    intakeType: "general",
    sendIntakeEmail: true,
  },

  generalConsultation: {
    key: "generalConsultation",
    label: "General Consultation",
    priceId: "price_1TJYKKQnDSGgUETvjeWQIpn4",
    portalKeys: [],
    intakeType: "general",
    sendIntakeEmail: true,
  },
};

export function getProductByPriceId(priceId: string) {
  return Object.values(PRODUCTS).find((product) => product.priceId === priceId);
}
export const STRIPE_PRICE_IDS = {
  clarity: "price_1TCWNAQnDSGgUETvOdUz6HWc",
  guidance: "price_1TCWOyQnDSGgUETvlWFkViOj",
  concierge: "price_1TCWRaQnDSGgUETvbaY9Z4Ca",

  residence: "price_1TCZe1QnDSGgUETvSo0TTqMz",
  partita: "price_1TCZf5QnDSGgUETvLgvOOghB",
  settle: "price_1TCZfuQnDSGgUETvfoegwJ4J",
  bundle: "price_1TCZgvQnDSGgUETvyzjPlw0M",
} as const;

export type StripePriceKey = keyof typeof STRIPE_PRICE_IDS;
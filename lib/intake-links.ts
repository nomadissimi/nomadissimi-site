const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.nomadissimi.com";

export const INTAKE_LINKS = {
  visa: `${SITE_URL}/client/intake/visa`,
  tax: `${SITE_URL}/client/intake/tax`,
  residence: `${SITE_URL}/client/intake/residence`,
  dolceVita: `${SITE_URL}/client/intake/dolce-vita`,
  bundle: `${SITE_URL}/client/intake/bundle`,
  general: `${SITE_URL}/client/intake/general`,
} as const;


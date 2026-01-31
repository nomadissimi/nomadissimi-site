
// lib/cookieConsent.ts
export type ConsentState = {
  necessary: true;        // always true
  analytics: boolean;     // GA, Plausible, etc
  marketing: boolean;     // Meta pixel, etc (optional)
};

const KEY = "nm_cookie_consent_v1";

export function getConsent(): ConsentState | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${KEY}=`));
  if (!match) return null;

  try {
    const value = decodeURIComponent(match.split("=")[1] || "");
    return JSON.parse(value) as ConsentState;
  } catch {
    return null;
  }
}

export function setConsent(consent: ConsentState) {
  if (typeof document === "undefined") return;
  const value = encodeURIComponent(JSON.stringify(consent));
  // 180 days is common; adjust if you want
  document.cookie = `${KEY}=${value}; Path=/; Max-Age=${60 * 60 * 24 * 180}; SameSite=Lax`;
}

export function clearConsent() {
  if (typeof document === "undefined") return;
  document.cookie = `${KEY}=; Path=/; Max-Age=0; SameSite=Lax`;
}

export const CONSENT_KEY = KEY;


export function trackEvent(
  event: string,
  params?: Record<string, any>
) {
  if (typeof window === "undefined") return;
  if (!("gtag" in window)) return;

  // @ts-ignore
  window.gtag("event", event, params);
}


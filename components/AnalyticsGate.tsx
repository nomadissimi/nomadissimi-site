
"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { getConsent } from "@/lib/cookieConsent";

export default function AnalyticsGate() {
  const [allow, setAllow] = useState(false);

  useEffect(() => {
    const sync = () => {
      const consent = getConsent();
      setAllow(!!consent?.analytics);
    };
    sync();
    window.addEventListener("nm-consent-updated", sync);
    return () => window.removeEventListener("nm-consent-updated", sync);
  }, []);

  if (!allow) return null;

  return (
  <Script
    src="https://plausible.io/js/script.js"
    data-domain="nomadissimi.com"
    strategy="afterInteractive"
  />
);

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

  // Example: Google Analytics 4
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}


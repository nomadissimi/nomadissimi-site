import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

import type { Metadata } from "next";

import CookieBanner from "@/components/CookieBanner";
import AnalyticsGate from "@/components/AnalyticsGate";

import "./globals.css";
import { Cormorant_Garamond, Inter } from "next/font/google";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});
const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title:
    "Nomadissi​mi — Escape the chaos. Move to Italy without the headaches.",
  description:
    "Boutique guidance for Italy’s Digital Nomad Visa. Clear checklists, expert reviews, and a soft landing into la dolce vita.",
  icons: {
    icon: "/favicon.png", // change the filename if your icon is something else
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          id="cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="086525e3-6bc3-4a7f-bff2-e99eb94fa83d"
          data-blockingmode="auto"
          type="text/javascript"
          strategy="beforeInteractive"
        ></script>
      </head>
      <body
        className={`${serif.variable} ${sans.variable} subpixel-antialiased`}
      >
        {/* Permanent portal root for the mobile drawer */}
        {children}
        <Script
          src="https://f.convertkit.com/ckjs/ck.5.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

import type { Metadata, Viewport } from "next";

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
  title: "Nomadissimi — Move to Italy affordably and clearly.",
  description:
    "Specialized guidance for Italy’s Digital Nomad Visa and Residence Permits. Interactive portals, practical resources and a soft landing into la dolce vita.",
  icons: {
    icon: "/favicon.png",

    shortcut: "/favicon.png",

    apple: "/favicon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
        <AnalyticsGate />
      </body>
    </html>
  );
}

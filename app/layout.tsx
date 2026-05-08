import Script from "next/script";
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";

import OrganizationSchema from "@/components/seo/OrganizationSchema";
import AnalyticsGate from "@/components/AnalyticsGate";

import "./globals.css";

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
  metadataBase: new URL("https://www.nomadissimi.com"),
  title: {
    default: "Nomadissimi | Move to Italy affordably and clearly",
    template: "%s | Nomadissimi",
  },
  description:
    "Affordable and quality Italy relocation support for digital nomads, remote workers, freelancers, and internationally mobile clients who want a clearer, more strategic path to building a life in Italy.",
  keywords: [
    "move to Italy",
    "Italy relocation",
    "digital nomad visa Italy",
    "Italy digital nomad",
    "Italy remote worker visa",
    "move to Italy freelancer",
    "Italy residence support",
    "Italy tax consultation",
    "settling in Italy",
    "Nomadissimi",
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.nomadissimi.com",
    siteName: "Nomadissimi",
    title: "Nomadissimi | Move to Italy with Clarity",
    description:
      "Boutique Italy relocation support for digital nomads, remote workers, freelancers, and internationally mobile clients.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nomadissimi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nomadissimi | Move to Italy with Clarity",
    description:
      "Boutique Italy relocation support for digital nomads, remote workers, freelancers, and internationally mobile clients.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
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
        />
      </head>
      <body
        className={`${serif.variable} ${sans.variable} subpixel-antialiased`}
      >
        <OrganizationSchema />
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
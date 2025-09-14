import type { Metadata } from "next";

import Script from "next/script";

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
  title: "Nomadissimi — Escape the chaos. Move to Italy without the headaches.",
  description:
    "Boutique guidance for Italy’s Digital Nomad Visa. Clear checklists, expert reviews, and a soft landing into la dolce vita.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>{/* Cookiebot script… */}</head>
      <body
        className={`${serif.variable} ${sans.variable} subpixel-antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Andaz — The Makeup Artist | Bridal & Occasion Makeup",
  description:
    "Certified bridal, party, and occasion makeup artistry with premium products and personal attention. Beauty, made timeless — book your session with Andaz.",
  keywords: [
    "makeup artist",
    "bridal makeup",
    "wedding makeup",
    "party makeup",
    "editorial makeup",
    "engagement makeup",
  ],
  authors: [{ name: "Andaz" }],
  openGraph: {
    title: "Andaz — The Makeup Artist",
    description: "Editorial-grade makeup artistry. Beauty, made timeless.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>{children}</body>
    </html>
  );
}

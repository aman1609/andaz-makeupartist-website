import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Andaz Raj - Professional Makeup Artist in Bengaluru",
  description: "Transform your look with Bengaluru's premier makeup artist. Specializing in bridal, party, and editorial makeup. Book your session today!",
  keywords: ["makeup artist", "bridal makeup", "Bengaluru", "wedding makeup", "party makeup", "professional makeup"],
  authors: [{ name: "Andaz Raj" }],
  openGraph: {
    title: "Andaz Raj - Professional Makeup Artist",
    description: "Transform your look with Bengaluru's premier makeup artist",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}

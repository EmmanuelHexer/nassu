import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://nassu.org"),
  title: {
    default: "NASSU - National Sports Supporters Union",
    template: "%s | NASSU"
  },
  description: "The National Sports Supporters Union (NASSU) is an independent, democratic organization giving sports fans a collective voice to influence clubs and advocate for supporter rights.",
  keywords: ["sports supporters union", "fan advocacy", "supporter rights", "sports fans", "football supporters", "NASSU"],
  authors: [{ name: "NASSU" }],
  creator: "NASSU",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nassu.org",
    title: "NASSU - National Sports Supporters Union",
    description: "Independent sports supporters union advocating for fan rights and giving supporters a collective voice.",
    siteName: "NASSU",
  },
  twitter: {
    card: "summary_large_image",
    title: "NASSU - National Sports Supporters Union",
    description: "Independent sports supporters union advocating for fan rights and giving supporters a collective voice.",
    creator: "@nassu",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://nassuashanti.com"),
  title: {
    default: "NASSU - Ashanti Region Sports Supporters Union | Kumasi",
    template: "%s | NASSU Ashanti"
  },
  description: "NASSU is the Ashanti Region's premier football supporters union based at Baba Yara Sports Stadium in Kumasi. We unite 300+ supporters fighting for fair treatment, affordable access, and stronger voices in Ghana football.",
  keywords: [
    "NASSU",
    "Ashanti sports supporters",
    "Kumasi football fans",
    "Baba Yara Stadium",
    "Asante Kotoko supporters",
    "Ghana football union",
    "Ashanti Region football",
    "Kumasi supporters union",
    "GPL supporters",
    "Ghana Premier League fans",
    "football advocacy Ghana",
    "supporter rights Ashanti"
  ],
  authors: [{ name: "NASSU Ashanti" }],
  creator: "NASSU",
  publisher: "NASSU - National Sports Supporters Union",
  applicationName: "NASSU Ashanti",
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: "https://nassuashanti.com",
    title: "NASSU - Ashanti Region Sports Supporters Union | Baba Yara Stadium Kumasi",
    description: "Based at Baba Yara Sports Stadium in Kumasi, NASSU unites 300+ Ashanti football supporters fighting for fair treatment, affordable tickets, and stronger voices in Ghana football.",
    siteName: "NASSU Ashanti",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NASSU - Ashanti Region Sports Supporters Union",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NASSU Ashanti - Kumasi Football Supporters Union",
    description: "300+ Ashanti supporters united at Baba Yara Stadium fighting for fair treatment and affordable access to Ghana football.",
    creator: "@nassu_ghana",
    images: ["/og-image.jpg"],
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
  alternates: {
    canonical: "https://nassuashanti.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    icon: [
      { url: "/icon.png" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/icon.png" },
    ],
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

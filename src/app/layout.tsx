import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/ui/Preloader";
import DynamicQuoteModal from "@/components/ui/DynamicQuoteModal";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Self-hosted, zero-blocking Google Fonts optimized via Next.js Font Engine
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-display",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FFFFFF",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aonictech.com"),
  alternates: {
    canonical: "https://aonictech.com",
  },
  title: {
    default: "AONIC TECH | Digital Solutions, Software & Industrial Materials Import",
    template: "%s | AONIC TECH",
  },
  description:
    "We build your brand, your website, and your POS software, and we supply certified titanium, rare-earth magnets, and electronic chips to your factory floor with doorstep delivery.",
  keywords: [
    "Website Development",
    "POS Billing Software",
    "GST Invoicing",
    "Titanium Import India",
    "Rare Earth Magnets N52",
    "Electronic Chip Sourcing",
    "AONIC TECH",
  ],
  authors: [{ name: "AONIC TECH Private Limited" }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/company-logo-mark.png", sizes: "any", type: "image/png" },
    ],
    apple: [
      { url: "/images/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://aonictech.com",
    siteName: "AONIC TECH",
    title: "AONIC TECH — Digital Solutions & Industrial Materials Import",
    description:
      "Your brand, your website and your software, and specialty materials delivered to your factory floor.",
    images: [
      {
        url: "/images/company-logo-mark.png",
        width: 1140,
        height: 1140,
        alt: "AONIC TECH Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-[#0E0E25] font-sans selection:bg-[#1926A0] selection:text-white">
        <Preloader />
        <DynamicQuoteModal />
        <Navbar />
        <main className="flex-1 pt-16 sm:pt-20 overflow-x-hidden">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/ui/Preloader";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FFFFFF",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aonictech.com"),
  title: {
    default: "Aonictech | Digital Solutions, Software & Industrial Materials Import",
    template: "%s | Aonictech",
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
    "Aonictech",
  ],
  authors: [{ name: "Aonictech Private Limited" }],
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
    siteName: "Aonictech",
    title: "Aonictech — Digital Solutions & Industrial Materials Import",
    description:
      "Your brand, your website and your software, and specialty materials delivered to your factory floor.",
    images: [
      {
        url: "/images/company-logo-mark.png",
        width: 1140,
        height: 1140,
        alt: "Aonictech Logo",
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[#0E0E25] font-sans selection:bg-[#1926A0] selection:text-white">
        <Preloader />
        <Navbar />
        <main className="flex-1 pt-16 sm:pt-20 overflow-x-hidden">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

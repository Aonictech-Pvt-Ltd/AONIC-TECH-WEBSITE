import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/ui/Preloader";

export const metadata: Metadata = {
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
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://aonictech.com",
    siteName: "Aonictech",
    title: "Aonictech — Digital Solutions & Industrial Materials Import",
    description:
      "Your brand, your website and your software, and specialty materials delivered to your factory floor.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-brand-dark-950 text-slate-100 font-sans selection:bg-brand-digital-500 selection:text-white">
        <Preloader />
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

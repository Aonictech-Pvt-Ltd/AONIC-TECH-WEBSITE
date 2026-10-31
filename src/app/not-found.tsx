import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { 
  Home, 
  ArrowRight, 
  Layers, 
  Code2, 
  FileQuestion 
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

export const metadata: Metadata = {
  title: "404 - Page Not Found | AONIC TECH",
  description: "The requested page could not be located. Explore our digital software and industrial material import services.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-[#0E0E25] flex flex-col justify-between pt-28 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Ambient Atmospheric Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-[#1926A0]/10 via-[#757CB6]/10 to-[#FFDB18]/15 blur-[100px] sm:blur-[140px] pointer-events-none rounded-full" />

      <main className="max-w-3xl mx-auto my-auto text-center relative z-10 py-8">
        {/* Error Code Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1926A0]/10 border border-[#1926A0]/25 text-[#1926A0] text-xs font-bold uppercase tracking-widest mb-6">
          <FileQuestion className="w-4 h-4 text-[#1926A0]" />
          HTTP 404 • Page Not Found
        </div>

        {/* Large 404 Headline */}
        <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black tracking-tight text-[#0E0E25]">
          4<span className="text-[#1926A0]">0</span>4
        </h1>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0E0E25] mt-3 mb-4">
          The page you requested does not exist.
        </h2>

        <p className="text-sm sm:text-base lg:text-lg text-[#0E0E25]/75 max-w-xl mx-auto leading-relaxed mb-10">
          The link may be outdated, mistyped, or moved to a new section. Use the links below to return to our primary operations.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-12">
          <Link
            href="/"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#1926A0] hover:bg-[#131e80] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors shadow-lg shadow-[#1926A0]/25 flex items-center justify-center gap-2 border border-[#1926A0] min-h-[44px]"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>

          <a
            href={COMPANY_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#63A26B] hover:bg-[#528959] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors shadow-lg shadow-[#63A26B]/25 flex items-center justify-center gap-2 min-h-[44px]"
          >
            <WhatsAppIcon variant="outline" className="w-4 h-4 text-white fill-white" />
            WhatsApp
          </a>
        </div>

        {/* Dual Niche Quick Exploration Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left pt-6 border-t border-[#757CB6]/20">
          {/* Digital Solutions Quick Card */}
          <Link
            href="/services?tab=digital"
            className="p-5 sm:p-6 rounded-2xl bg-white border border-[#757CB6]/25 hover:border-[#1926A0] transition-all shadow-sm hover:shadow-lg group flex items-start gap-4"
          >
            <div className="p-3 rounded-xl bg-[#1926A0]/10 text-[#1926A0] shrink-0 group-hover:scale-105 transition-transform">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#1926A0]">
                Digital Division
              </span>
              <h3 className="text-base font-bold text-[#0E0E25] mt-0.5 group-hover:text-[#1926A0] transition-colors flex items-center gap-1.5">
                Websites & POS Software
                <ArrowRight className="w-3.5 h-3.5 text-[#757CB6] group-hover:text-[#1926A0] group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-xs text-[#0E0E25]/70 mt-1">
                Custom restaurant websites, GST billing software, and custom applications.
              </p>
            </div>
          </Link>

          {/* Industrial Materials Quick Card */}
          <Link
            href="/services?tab=industrial"
            className="p-5 sm:p-6 rounded-2xl bg-white border border-[#757CB6]/25 hover:border-[#FFDB18] transition-all shadow-sm hover:shadow-lg group flex items-start gap-4"
          >
            <div className="p-3 rounded-xl bg-[#FFDB18]/25 text-[#0E0E25] shrink-0 group-hover:scale-105 transition-transform border border-[#FFDB18]/50">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0E0E25]">
                Industrial Division
              </span>
              <h3 className="text-base font-bold text-[#0E0E25] mt-0.5 group-hover:text-[#1926A0] transition-colors flex items-center gap-1.5">
                Specialty Materials & Sourcing
                <ArrowRight className="w-3.5 h-3.5 text-[#757CB6] group-hover:text-[#1926A0] group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-xs text-[#0E0E25]/70 mt-1">
                Titanium Grade 5, rare-earth magnets, and electronic chips with port clearance.
              </p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}


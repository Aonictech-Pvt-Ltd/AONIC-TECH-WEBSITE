import React from "react";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  Calendar, 
  ArrowUpRight,
  MessageCircle,
  Linkedin,
  Facebook,
  Instagram,
  Youtube
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import Logo from "@/components/ui/Logo";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0E0E25] border-t border-[#757CB6]/20 text-slate-300">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 sm:pt-16 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8">
          
          {/* ========================================================================= */}
          {/* COLUMN 1 (LEFT): Company Logo, Headquarters & Google Maps Link           */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 space-y-6">
            {/* Company Logo Card */}
            <Link href="/" className="inline-block group">
              <Logo size={46} variant="dark" />
            </Link>

            {/* Headquarters Section */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-bold text-[#FFDB18] tracking-widest uppercase">
                HEADQUARTERS
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
                14-7, P & T Colony, Dilsukhnagar, Hyderabad,<br />
                Telangana - 500060
              </p>

              {/* Google Maps Link with Brand Yellow Vector Location Pin */}
              <div className="pt-2">
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#FFDB18] hover:text-white transition-colors group"
                >
                  {/* Clean SVG Vector Location Pin in Brand Yellow (#FFDB18) */}
                  <div className="w-6 h-6 rounded-lg bg-[#FFDB18]/20 border border-[#FFDB18]/50 flex items-center justify-center shrink-0 group-hover:bg-[#FFDB18] transition-all">
                    <svg
                      className="w-3.5 h-3.5 text-[#FFDB18] group-hover:text-[#0E0E25] transition-colors"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <span className="underline decoration-[#FFDB18]/50 underline-offset-4 group-hover:decoration-white">Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FFDB18] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* COLUMN 2 (MIDDLE): EXPLORE LINKS                                          */}
          {/* ========================================================================= */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-[#FFDB18] tracking-widest uppercase">
              EXPLORE
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-[#FFDB18] text-slate-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#FFDB18] text-slate-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FFDB18] text-slate-300 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#FFDB18] text-slate-300 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#FFDB18] text-slate-300 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FFDB18] text-slate-300 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* ========================================================================= */}
          {/* COLUMN 3 (RIGHT): CONTACT US & CIRCULAR SOCIAL LINKS                     */}
          {/* ========================================================================= */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-[#FFDB18] tracking-widest uppercase">
                CONTACT US
              </h4>
              <ul className="space-y-3.5 text-sm">
                <li>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="flex items-center gap-3 text-slate-300 hover:text-[#FFDB18] transition-colors group"
                  >
                    <Mail className="w-4 h-4 text-[#FFDB18] shrink-0" />
                    <span className="truncate">{COMPANY_INFO.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="flex items-center gap-3 text-slate-300 hover:text-[#FFDB18] transition-colors group font-mono"
                  >
                    <Phone className="w-4 h-4 text-[#FFDB18] shrink-0" />
                    <span>{COMPANY_INFO.displayPhone}</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links Circular Outlined Icons */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-[#FFDB18] tracking-widest uppercase">
                SOCIAL LINKS
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href={COMPANY_INFO.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[#FFDB18]/40 hover:border-[#FFDB18] hover:bg-[#FFDB18]/15 text-[#FFDB18] flex items-center justify-center transition-all group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href={COMPANY_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[#FFDB18]/40 hover:border-[#FFDB18] hover:bg-[#FFDB18]/15 text-[#FFDB18] flex items-center justify-center transition-all group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href={COMPANY_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[#FFDB18]/40 hover:border-[#FFDB18] hover:bg-[#FFDB18]/15 text-[#FFDB18] flex items-center justify-center transition-all group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href={COMPANY_INFO.social.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[#FFDB18]/40 hover:border-[#FFDB18] hover:bg-[#FFDB18]/15 text-[#FFDB18] flex items-center justify-center transition-all group"
                  aria-label="X (Twitter)"
                >
                  <Youtube className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* BOTTOM LEGAL STRIP: Copyright on Left, Location & Terms on Right          */}
      {/* ========================================================================= */}
      <div className="border-t border-[#757CB6]/20 bg-[#070716] pt-6 pb-28 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:pr-36 lg:pr-44 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="text-center sm:text-left">
            © {currentYear} {COMPANY_INFO.legalName}. All rights reserved.
          </div>

          <div className="flex items-center text-xs text-slate-300">
            <Link href="/privacy-and-terms" className="hover:text-[#FFDB18] transition-colors underline decoration-[#757CB6]/40 underline-offset-4">
              Privacy Policy & Terms
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* FLOATING ACTION BUTTONS (Bottom Right: WhatsApp & Phone Side-by-Side)    */}
      {/* ========================================================================= */}
      <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2.5 sm:gap-3 pb-[env(safe-area-inset-bottom,0px)]">
        {/* Phone Button */}
        <a
          href={`tel:${COMPANY_INFO.phone}`}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-[#1926A0] border-2 border-[#1926A0] hover:bg-[#1926A0] hover:text-white flex items-center justify-center shadow-xl sm:shadow-2xl shadow-indigo-900/25 hover:scale-105 active:scale-95 transition-all group relative"
          title={`Call us at ${COMPANY_INFO.displayPhone}`}
          aria-label="Call Office"
        >
          <Phone className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110" />
          <span className="sr-only">Call {COMPANY_INFO.displayPhone}</span>
          <span className="hidden sm:block absolute -top-10 left-1/2 -translate-x-1/2 bg-[#0E0E25] border border-[#757CB6]/30 text-white text-xs font-semibold px-2.5 py-1 rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Call Office
          </span>
        </a>

        {/* WhatsApp Button in Official Brand Green (#63A26B) */}
        <a
          href={COMPANY_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#63A26B] hover:bg-[#528959] text-white flex items-center justify-center shadow-xl sm:shadow-2xl shadow-[#63A26B]/40 hover:scale-105 active:scale-95 transition-all group relative"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon variant="outline" className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-white" />
          <span className="sr-only">Chat with us on WhatsApp</span>
          <span className="hidden sm:block absolute -top-10 left-1/2 -translate-x-1/2 bg-[#0E0E25] border border-[#757CB6]/30 text-white text-xs font-semibold px-2.5 py-1 rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat on WhatsApp
          </span>
        </a>
      </div>
    </footer>
  );
}

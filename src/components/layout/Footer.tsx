import React from "react";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Award, 
  ArrowUpRight,
  MessageSquare
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark-900 border-t border-slate-800 text-slate-400 text-sm">
      {/* Top CTA Strip */}
      <div className="border-b border-slate-800/80 bg-gradient-to-r from-brand-digital-900/30 via-slate-900 to-brand-industrial-900/30 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                Have a project or material requirement in mind?
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm">
                Get a custom quote within 24 hours. Small quantities welcome.
              </p>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-initial px-4 py-2.5 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-600/30 transition-colors flex items-center justify-center gap-2 text-xs font-semibold"
              >
                <MessageSquare className="w-4 h-4" />
                Chat on WhatsApp
              </a>
              <Link
                href="/contact"
                className="flex-1 md:flex-initial px-5 py-2.5 rounded-xl bg-brand-digital-600 hover:bg-brand-digital-500 text-white font-semibold text-xs tracking-wider uppercase transition-colors shadow-lg shadow-brand-digital-500/20 text-center"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-digital-500 to-brand-industrial-500 p-[1.5px]">
                <div className="w-full h-full bg-brand-dark-900 rounded-[6px] flex items-center justify-center">
                  <span className="font-extrabold text-white text-base">A</span>
                </div>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                AONICTECH
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              {COMPANY_INFO.tagline}
            </p>
            <div className="pt-2 flex items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-[11px] text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>GST Registered</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-[11px] text-slate-300">
                <Award className="w-3.5 h-3.5 text-brand-industrial-400" />
                <span>IEC Authorized</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-brand-digital-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-digital-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-digital-400 transition-colors">
                  Services (Digital & Industrial)
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-brand-digital-400 transition-colors">
                  Projects & Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-digital-400 transition-colors">
                  Contact Us / Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Showcase */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/services" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Website & E-Commerce Dev</span>
                  <span className="text-[10px] text-brand-digital-400">Digital</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>POS & GST Billing Software</span>
                  <span className="text-[10px] text-brand-digital-400">Software</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Brand & Packaging Design</span>
                  <span className="text-[10px] text-brand-digital-400">Design</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Titanium & Specialty Alloys</span>
                  <span className="text-[10px] text-brand-industrial-400">Industrial</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Rare-Earth Elements & Magnets</span>
                  <span className="text-[10px] text-brand-industrial-400">Industrial</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Electronic Chip IC Sourcing</span>
                  <span className="text-[10px] text-brand-industrial-400">Industrial</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-digital-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-digital-400 shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="hover:text-white transition-colors font-mono"
                >
                  {COMPANY_INFO.displayPhone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-digital-400 shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400">
                <Clock className="w-4 h-4 text-brand-industrial-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Compliance Strip */}
      <div className="border-t border-slate-800/80 bg-brand-dark-950/70 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {currentYear} {COMPANY_INFO.legalName}. All rights reserved.
          </div>

          {/* Business Credentials Badges */}
          <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-400">
            <span>
              <strong className="text-slate-300">GSTIN:</strong> {COMPANY_INFO.gstin}
            </span>
            <span className="text-slate-600">•</span>
            <span>
              <strong className="text-slate-300">IEC:</strong> {COMPANY_INFO.iecNumber}
            </span>
            <span className="text-slate-600">•</span>
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-600">•</span>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

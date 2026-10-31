import React from "react";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Award, 
  MessageSquare,
  Navigation
} from "lucide-react";
import Logo from "@/components/ui/Logo";
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

      {/* Main Footer Grid: Google Maps on the LEFT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1 (LEFT): Company Logo, Registered Address & Embedded Google Maps */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Logo size={40} />
            </Link>
            <p className="text-sm leading-relaxed text-slate-300">
              {COMPANY_INFO.tagline}
            </p>

            {/* Google Maps Location Embed on the LEFT */}
            <div className="pt-1">
              <div className="flex items-center justify-between mb-2 text-sm font-semibold text-white">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-brand-digital-400" />
                  Our Location
                </span>
                <span className="text-xs text-slate-400 font-mono">Dilsukhnagar, HYD</span>
              </div>
              
              <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 group shadow-md">
                <iframe
                  title="Aonictech Registered Office - Dilsukhnagar Hyderabad"
                  src={COMPANY_INFO.googleMapsEmbedUrl}
                  width="100%"
                  height="135"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(85%)" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full transition-opacity group-hover:opacity-95"
                />
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-2.5 right-2.5 px-3 py-1.5 rounded-lg bg-brand-dark-950/95 border border-slate-700 text-xs font-semibold text-brand-digital-400 hover:text-white flex items-center gap-1.5 shadow-md backdrop-blur-sm transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Open in Google Maps
                </a>
              </div>
              <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                {COMPANY_INFO.address}
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links & Legal */}
          <div>
            <h4 className="text-base font-bold text-white tracking-wider uppercase mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <Link href="/" className="hover:text-brand-digital-400 text-slate-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-digital-400 text-slate-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-digital-400 text-slate-300 transition-colors">
                  Services (Digital & Industrial)
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-brand-digital-400 text-slate-300 transition-colors">
                  Projects & Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-digital-400 text-slate-300 transition-colors">
                  Contact Us / Get a Quote
                </Link>
              </li>
              <li className="pt-2 border-t border-slate-800">
                <Link href="/privacy" className="hover:text-brand-digital-400 transition-colors text-slate-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-brand-digital-400 transition-colors text-slate-300">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Capabilities */}
          <div>
            <h4 className="text-base font-bold text-white tracking-wider uppercase mb-5">
              Core Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <Link href="/services" className="hover:text-white text-slate-300 transition-colors flex items-center justify-between">
                  <span>Website & E-Commerce Dev</span>
                  <span className="text-xs text-brand-digital-400 font-mono">Digital</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white text-slate-300 transition-colors flex items-center justify-between">
                  <span>POS & GST Billing Software</span>
                  <span className="text-xs text-brand-digital-400 font-mono">Software</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white text-slate-300 transition-colors flex items-center justify-between">
                  <span>Brand & Packaging Design</span>
                  <span className="text-xs text-brand-digital-400 font-mono">Design</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white text-slate-300 transition-colors flex items-center justify-between">
                  <span>Titanium & Specialty Alloys</span>
                  <span className="text-xs text-brand-industrial-400 font-mono">Industrial</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white text-slate-300 transition-colors flex items-center justify-between">
                  <span>Rare-Earth Elements & Magnets</span>
                  <span className="text-xs text-brand-industrial-400 font-mono">Industrial</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white text-slate-300 transition-colors flex items-center justify-between">
                  <span>Electronic Chip IC Sourcing</span>
                  <span className="text-xs text-brand-industrial-400 font-mono">Industrial</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 (RIGHT): Direct Contact Info & Working Hours */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white tracking-wider uppercase mb-5">
              Get in Touch
            </h4>
            
            <ul className="space-y-3.5 text-sm font-medium">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-digital-400 shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="hover:text-white text-slate-200 transition-colors font-mono"
                >
                  {COMPANY_INFO.displayPhone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-digital-400 shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-white text-slate-200 transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <Clock className="w-4 h-4 text-brand-industrial-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.workingHours}</span>
              </li>
            </ul>

            <div className="pt-2 flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs text-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>GST Registered: <strong className="font-mono text-white">{COMPANY_INFO.gstin}</strong></span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs text-slate-200">
                <Award className="w-4 h-4 text-brand-industrial-400" />
                <span>IEC Number: <strong className="font-mono text-white">{COMPANY_INFO.iecNumber}</strong></span>
              </div>
            </div>
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
            <Link href="/privacy" className="hover:text-brand-digital-400 text-slate-300 transition-colors font-medium">
              Privacy Policy
            </Link>
            <span className="text-slate-600">•</span>
            <Link href="/terms" className="hover:text-brand-digital-400 text-slate-300 transition-colors font-medium">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

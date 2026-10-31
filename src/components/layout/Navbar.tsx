"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  MessageSquare, 
  ArrowRight,
  Code2,
  Cpu,
  Layers,
  Shield,
  Sparkles
} from "lucide-react";
import Logo from "@/components/ui/Logo";
import { COMPANY_INFO } from "@/data/company";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setServicesDropdown(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { 
      label: "Services", 
      href: "/services", 
      hasDropdown: true 
    },
    { label: "Projects", href: "/projects" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0E0E25]/92 backdrop-blur-md border-b border-[#757CB6]/20 shadow-lg shadow-black/60 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" id="navbar-brand-logo" className="group hover:opacity-95 transition-opacity">
            <Logo size={40} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setServicesDropdown(true)}
                    onMouseLeave={() => setServicesDropdown(false)}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center gap-1.5 px-4 py-2 rounded-lg text-[15px] font-semibold transition-colors",
                        isActive
                          ? "text-[#FFDB18] bg-[#FFDB18]/10 border border-[#FFDB18]/20"
                          : "text-slate-200 hover:text-white hover:bg-[#141434]"
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          servicesDropdown ? "rotate-180 text-[#FFDB18]" : "text-slate-400"
                        )}
                      />
                    </Link>

                    {/* Mega Dropdown Menu */}
                    {servicesDropdown && (
                      <div className="absolute top-full left-0 w-[620px] p-5 bg-[#0E0E25]/98 backdrop-blur-2xl border border-[#757CB6]/30 rounded-2xl shadow-2xl shadow-black/90 grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
                        {/* Digital Solutions Column (Royal Blue & Lavender) */}
                        <div className="p-4 rounded-xl bg-gradient-to-b from-[#1926A0]/15 to-transparent border border-[#1926A0]/30">
                          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#1926A0]/30">
                            <Code2 className="w-4 h-4 text-[#757CB6]" />
                            <span className="text-xs font-bold text-[#b8bce0] uppercase tracking-wider">
                              Digital Solutions
                            </span>
                          </div>
                          <ul className="space-y-2 text-sm">
                            <li>
                              <Link
                                href="/services#digital-web"
                                className="block p-2 rounded-lg hover:bg-[#1926A0]/20 text-slate-300 hover:text-white transition-colors"
                              >
                                <span className="font-semibold text-white block text-sm">Website Development</span>
                                <span className="text-[#b8bce0] text-xs">Restaurants, shops & startups</span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services#digital-pos"
                                className="block p-2 rounded-lg hover:bg-[#1926A0]/20 text-slate-300 hover:text-white transition-colors"
                              >
                                <span className="font-semibold text-white block text-sm">POS & Billing Software</span>
                                <span className="text-[#b8bce0] text-xs">GST billing, inventory & reports</span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services#digital-ecommerce"
                                className="block p-2 rounded-lg hover:bg-[#1926A0]/20 text-slate-300 hover:text-white transition-colors"
                              >
                                <span className="font-semibold text-white block text-sm">E-Commerce & Custom Apps</span>
                                <span className="text-[#b8bce0] text-xs">Payment gateways & automations</span>
                              </Link>
                            </li>
                          </ul>
                        </div>

                        {/* Industrial Supply Column (Yellow & Black) */}
                        <div className="p-4 rounded-xl bg-gradient-to-b from-[#FFDB18]/10 to-transparent border border-[#FFDB18]/30">
                          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#FFDB18]/30">
                            <Layers className="w-4 h-4 text-[#FFDB18]" />
                            <span className="text-xs font-bold text-[#FFDB18] uppercase tracking-wider">
                              Industrial Supply
                            </span>
                          </div>
                          <ul className="space-y-2 text-sm">
                            <li>
                              <Link
                                href="/services#industrial-titanium"
                                className="block p-2 rounded-lg hover:bg-[#FFDB18]/15 text-slate-300 hover:text-white transition-colors"
                              >
                                <span className="font-semibold text-white block text-sm">Titanium & Specialty Alloys</span>
                                <span className="text-slate-300 text-xs">Grade 1 to 5, sheets, rods, wire</span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services#industrial-rare-earth"
                                className="block p-2 rounded-lg hover:bg-[#FFDB18]/15 text-slate-300 hover:text-white transition-colors"
                              >
                                <span className="font-semibold text-white block text-sm">Rare-Earth & Magnets</span>
                                <span className="text-slate-300 text-xs">Neodymium N52 & high-temp grades</span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services#industrial-chips"
                                className="block p-2 rounded-lg hover:bg-[#FFDB18]/15 text-slate-300 hover:text-white transition-colors"
                              >
                                <span className="font-semibold text-white block text-sm">IC Chips & Low MOQ Sourcing</span>
                                <span className="text-slate-300 text-xs">Doorstep delivery + test certs</span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-[15px] font-semibold transition-colors",
                    isActive
                      ? "text-[#FFDB18] bg-[#FFDB18]/10 border border-[#FFDB18]/20 font-bold"
                      : "text-slate-200 hover:text-white hover:bg-[#141434]"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Quick Contact & Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* WhatsApp Quick Chat in Green (#63A26B) */}
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2.5 rounded-xl bg-[#63A26B]/20 border border-[#63A26B]/40 text-[#63A26B] hover:text-white hover:bg-[#63A26B]/30 transition-all flex items-center gap-2 text-xs font-semibold shadow-sm shadow-[#63A26B]/15"
              title="Chat with us on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 fill-[#63A26B]/20" />
              <span className="hidden xl:inline text-slate-200">WhatsApp</span>
            </a>

            {/* Direct Phone Call in Lavender (#757CB6) */}
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="px-3.5 py-2.5 rounded-xl bg-[#0E0E25] border border-[#757CB6]/30 text-slate-200 hover:text-white hover:border-[#757CB6] transition-all flex items-center gap-2 text-xs font-semibold"
              title={`Call us at ${COMPANY_INFO.displayPhone}`}
            >
              <Phone className="w-4 h-4 text-[#757CB6]" />
              <span className="hidden xl:inline font-mono">{COMPANY_INFO.displayPhone}</span>
            </a>

            {/* Primary Get a Quote CTA in Royal Blue (#1926A0) */}
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#1926A0] via-[#2736c9] to-[#1926A0] hover:from-[#2736c9] hover:to-[#4d5be3] text-white text-xs uppercase tracking-wider font-bold shadow-md shadow-[#1926A0]/35 hover:shadow-[#1926A0]/50 transition-all flex items-center gap-1.5 active:scale-95 border border-[#757CB6]/30"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <Link
              href="/contact"
              className="px-3 py-1.5 rounded-lg bg-[#1926A0] text-white text-xs font-semibold border border-[#757CB6]/30"
            >
              Quote
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-[#141434] text-slate-200 hover:text-white border border-[#757CB6]/20"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer in #0E0E25 Dark Navy */}
      {isOpen && (
        <div className="lg:hidden bg-[#0E0E25]/98 border-b border-[#757CB6]/30 px-4 pt-3 pb-6 space-y-3 animate-in fade-in duration-200 shadow-2xl">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "block px-3 py-2.5 rounded-lg text-base font-semibold",
                  pathname === link.href
                    ? "text-[#FFDB18] bg-[#FFDB18]/10 border border-[#FFDB18]/20"
                    : "text-slate-200 hover:bg-[#141434]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-[#757CB6]/20 grid grid-cols-2 gap-2 text-center text-xs">
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#63A26B]/20 border border-[#63A26B]/40 text-[#63A26B] flex items-center justify-center gap-2 font-semibold"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="p-2.5 rounded-lg bg-[#141434] border border-[#757CB6]/30 text-slate-200 flex items-center justify-center gap-2 font-semibold"
            >
              <Phone className="w-4 h-4 text-[#757CB6]" />
              Call Office
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

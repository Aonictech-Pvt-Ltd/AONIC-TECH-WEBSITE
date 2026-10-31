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
  Layers
} from "lucide-react";
import Logo from "@/components/ui/Logo";
import { COMPANY_INFO } from "@/data/company";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // If preloader already completed in this window session
    if (typeof window !== "undefined" && (window as any).__AONIC_PRELOADED__) {
      setLogoVisible(true);
    }

    const handleDocked = () => {
      setLogoVisible(true);
    };

    window.addEventListener("aonic-preloader-docked", handleDocked);
    // Safety fallback so logo always displays even if animation is skipped
    const safetyTimer = setTimeout(() => {
      setLogoVisible(true);
    }, 3600);

    return () => {
      window.removeEventListener("aonic-preloader-docked", handleDocked);
      clearTimeout(safetyTimer);
    };
  }, []);

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
          ? "bg-white/95 backdrop-blur-md border-b border-[#757CB6]/20 shadow-md py-3"
          : "bg-white/80 backdrop-blur-sm border-b border-[#757CB6]/15 py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with smooth handoff from Preloader */}
          <Link 
            href="/" 
            id="navbar-brand-logo" 
            className={cn(
              "group hover:opacity-95 transition-opacity duration-200",
              logoVisible ? "opacity-100" : "opacity-0"
            )}
          >
            <Logo size={42} variant="light" />
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
                          ? "text-[#1926A0] bg-[#1926A0]/10 border border-[#1926A0]/20 font-bold"
                          : "text-[#0E0E25] hover:text-[#1926A0] hover:bg-[#757CB6]/10"
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          servicesDropdown ? "rotate-180 text-[#1926A0]" : "text-[#757CB6]"
                        )}
                      />
                    </Link>

                    {/* Mega Dropdown Menu */}
                    {servicesDropdown && (
                      <div className="absolute top-full left-0 w-[620px] p-5 bg-white/98 backdrop-blur-2xl border border-[#757CB6]/30 rounded-2xl shadow-2xl grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
                        {/* Digital Solutions Column (Royal Blue & Lavender) */}
                        <div className="p-4 rounded-xl bg-[#1926A0]/5 border border-[#1926A0]/20">
                          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#1926A0]/20">
                            <Code2 className="w-4 h-4 text-[#1926A0]" />
                            <span className="text-xs font-bold text-[#1926A0] uppercase tracking-wider">
                              Digital Solutions
                            </span>
                          </div>
                          <ul className="space-y-2 text-sm">
                            <li>
                              <Link
                                href="/services#digital-web"
                                className="block p-2 rounded-lg hover:bg-[#1926A0]/10 text-[#0E0E25] transition-colors"
                              >
                                <span className="font-bold text-[#0E0E25] block text-sm">Website Development</span>
                                <span className="text-[#757CB6] text-xs">Restaurants, shops & startups</span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services#digital-pos"
                                className="block p-2 rounded-lg hover:bg-[#1926A0]/10 text-[#0E0E25] transition-colors"
                              >
                                <span className="font-bold text-[#0E0E25] block text-sm">POS & Billing Software</span>
                                <span className="text-[#757CB6] text-xs">GST billing, inventory & reports</span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services#digital-ecommerce"
                                className="block p-2 rounded-lg hover:bg-[#1926A0]/10 text-[#0E0E25] transition-colors"
                              >
                                <span className="font-bold text-[#0E0E25] block text-sm">E-Commerce & Custom Apps</span>
                                <span className="text-[#757CB6] text-xs">Payment gateways & automations</span>
                              </Link>
                            </li>
                          </ul>
                        </div>

                        {/* Industrial Supply Column (Yellow & Black) */}
                        <div className="p-4 rounded-xl bg-[#FFDB18]/10 border border-[#FFDB18]/40">
                          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#FFDB18]/40">
                            <Layers className="w-4 h-4 text-[#0E0E25]" />
                            <span className="text-xs font-bold text-[#0E0E25] uppercase tracking-wider">
                              Industrial Supply
                            </span>
                          </div>
                          <ul className="space-y-2 text-sm">
                            <li>
                              <Link
                                href="/services#industrial-titanium"
                                className="block p-2 rounded-lg hover:bg-[#FFDB18]/25 text-[#0E0E25] transition-colors"
                              >
                                <span className="font-bold text-[#0E0E25] block text-sm">Titanium & Specialty Alloys</span>
                                <span className="text-[#0E0E25]/75 text-xs">Grade 1 to 5, sheets, rods, wire</span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services#industrial-rare-earth"
                                className="block p-2 rounded-lg hover:bg-[#FFDB18]/25 text-[#0E0E25] transition-colors"
                              >
                                <span className="font-bold text-[#0E0E25] block text-sm">Rare-Earth & Magnets</span>
                                <span className="text-[#0E0E25]/75 text-xs">Neodymium N52 & high-temp grades</span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services#industrial-chips"
                                className="block p-2 rounded-lg hover:bg-[#FFDB18]/25 text-[#0E0E25] transition-colors"
                              >
                                <span className="font-bold text-[#0E0E25] block text-sm">IC Chips & Low MOQ Sourcing</span>
                                <span className="text-[#0E0E25]/75 text-xs">Doorstep delivery + test certs</span>
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
                      ? "text-[#1926A0] bg-[#1926A0]/10 border border-[#1926A0]/20 font-bold"
                      : "text-[#0E0E25] hover:text-[#1926A0] hover:bg-[#757CB6]/10"
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
              className="px-3.5 py-2.5 rounded-xl bg-[#63A26B]/15 border border-[#63A26B]/40 text-[#63A26B] hover:text-white hover:bg-[#63A26B] transition-all flex items-center gap-2 text-xs font-semibold shadow-sm"
              title="Chat with us on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="hidden xl:inline font-semibold">WhatsApp</span>
            </a>

            {/* Direct Phone Call */}
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="px-3.5 py-2.5 rounded-xl bg-white border border-[#757CB6]/30 text-[#0E0E25] hover:text-[#1926A0] hover:border-[#1926A0] transition-all flex items-center gap-2 text-xs font-semibold shadow-sm"
              title={`Call us at ${COMPANY_INFO.displayPhone}`}
            >
              <Phone className="w-4 h-4 text-[#757CB6]" />
              <span className="hidden xl:inline font-mono">{COMPANY_INFO.displayPhone}</span>
            </a>

            {/* Primary Get a Quote CTA in Royal Blue (#1926A0) */}
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-xl bg-[#1926A0] hover:bg-[#131e80] text-white text-xs uppercase tracking-wider font-bold shadow-md shadow-[#1926A0]/25 transition-all flex items-center gap-1.5 active:scale-95 border border-[#1926A0]"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <Link
              href="/contact"
              className="px-3 py-1.5 rounded-lg bg-[#1926A0] text-white text-xs font-semibold"
            >
              Quote
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-white text-[#0E0E25] hover:bg-[#757CB6]/10 border border-[#757CB6]/20"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-[#757CB6]/30 px-4 pt-3 pb-6 space-y-3 animate-in fade-in duration-200 shadow-xl">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "block px-3 py-2.5 rounded-lg text-base font-semibold",
                  pathname === link.href
                    ? "text-[#1926A0] bg-[#1926A0]/10 border border-[#1926A0]/20 font-bold"
                    : "text-[#0E0E25] hover:bg-[#757CB6]/10"
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
              className="p-2.5 rounded-lg bg-[#63A26B]/15 border border-[#63A26B]/40 text-[#63A26B] flex items-center justify-center gap-2 font-semibold"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="p-2.5 rounded-lg bg-white border border-[#757CB6]/30 text-[#0E0E25] flex items-center justify-center gap-2 font-semibold"
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

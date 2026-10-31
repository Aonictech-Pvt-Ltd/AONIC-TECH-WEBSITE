"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  ArrowRight,
  Code2, 
  Layers
} from "lucide-react";
import Logo from "@/components/ui/Logo";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { COMPANY_INFO } from "@/data/company";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reveal logo smoothly when preloader docks into header
  useEffect(() => {
    const handleDocked = () => {
      setLogoVisible(true);
    };
    window.addEventListener("aonic-preloader-docked", handleDocked);

    // Fallback safety: ensure logo is visible if animation is completed or skipped
    const timer = setTimeout(() => {
      setLogoVisible(true);
    }, 4000);

    return () => {
      window.removeEventListener("aonic-preloader-docked", handleDocked);
      clearTimeout(timer);
    };
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
    { label: "Blog", href: "/blog" },
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
          {/* Brand Logo with smooth handoff from Preloader */}
          <Link 
            href="/" 
            id="navbar-brand-logo" 
            className={cn(
              "group shrink-0 flex items-center transition-opacity duration-150",
              logoVisible ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
          >
            <Logo size={36} variant="light" className="sm:hidden" />
            <Logo size={42} variant="light" className="hidden sm:flex" />
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
                      <div className="absolute top-full left-0 w-[620px] p-5 bg-white border border-[#757CB6]/30 rounded-2xl shadow-2xl grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
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

          {/* Primary Action: Get a Quote CTA in Royal Blue (#1926A0) */}
          <div className="hidden sm:flex items-center">
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#1926A0] hover:bg-[#131e80] text-white text-xs uppercase tracking-wider font-bold shadow-md shadow-[#1926A0]/25 transition-all flex items-center gap-1.5 active:scale-95 border border-[#1926A0]"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button (Quote removed for clean, spacious mobile ergonomics) */}
          <div className="flex sm:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-white text-[#0E0E25] hover:bg-[#757CB6]/10 border border-[#757CB6]/20 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-[#757CB6]/30 px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-2 duration-200 shadow-2xl max-h-[calc(100vh-4rem)] overflow-y-auto touch-scroll">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              
              if (link.hasDropdown) {
                return (
                  <div key={link.label} className="space-y-1">
                    <div className="flex items-center justify-between px-3 py-2.5 rounded-xl font-semibold text-base">
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex-1",
                          isActive ? "text-[#1926A0] font-bold" : "text-[#0E0E25]"
                        )}
                      >
                        {link.label}
                      </Link>
                      <button
                        onClick={() => setServicesDropdown(!servicesDropdown)}
                        className="p-1 rounded-lg text-[#757CB6] hover:bg-[#757CB6]/10"
                        aria-label="Toggle Services List"
                      >
                        <ChevronDown
                          className={cn(
                            "w-5 h-5 transition-transform duration-200",
                            servicesDropdown ? "rotate-180 text-[#1926A0]" : ""
                          )}
                        />
                      </button>
                    </div>

                    {servicesDropdown && (
                      <div className="pl-3 pr-1 py-2 space-y-3 bg-[#757CB6]/5 rounded-xl border border-[#757CB6]/20">
                        <div>
                          <div className="text-[11px] font-bold text-[#1926A0] uppercase tracking-wider px-2 mb-1.5 flex items-center gap-1.5">
                            <Code2 className="w-3.5 h-3.5" />
                            Digital Solutions
                          </div>
                          <div className="space-y-1 text-sm">
                            <Link
                              href="/services#digital-web"
                              onClick={() => setIsOpen(false)}
                              className="block px-2.5 py-1.5 rounded-lg text-[#0E0E25] hover:bg-[#1926A0]/10 text-xs font-semibold"
                            >
                              Website Development
                            </Link>
                            <Link
                              href="/services#digital-pos"
                              onClick={() => setIsOpen(false)}
                              className="block px-2.5 py-1.5 rounded-lg text-[#0E0E25] hover:bg-[#1926A0]/10 text-xs font-semibold"
                            >
                              POS & Billing Software
                            </Link>
                            <Link
                              href="/services#digital-ecommerce"
                              onClick={() => setIsOpen(false)}
                              className="block px-2.5 py-1.5 rounded-lg text-[#0E0E25] hover:bg-[#1926A0]/10 text-xs font-semibold"
                            >
                              E-Commerce & Custom Apps
                            </Link>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-[#757CB6]/15">
                          <div className="text-[11px] font-bold text-[#0E0E25] uppercase tracking-wider px-2 mb-1.5 flex items-center gap-1.5">
                            <Layers className="w-3.5 h-3.5" />
                            Industrial Supply
                          </div>
                          <div className="space-y-1 text-sm">
                            <Link
                              href="/services#industrial-titanium"
                              onClick={() => setIsOpen(false)}
                              className="block px-2.5 py-1.5 rounded-lg text-[#0E0E25] hover:bg-[#FFDB18]/25 text-xs font-semibold"
                            >
                              Titanium & Specialty Alloys
                            </Link>
                            <Link
                              href="/services#industrial-rare-earth"
                              onClick={() => setIsOpen(false)}
                              className="block px-2.5 py-1.5 rounded-lg text-[#0E0E25] hover:bg-[#FFDB18]/25 text-xs font-semibold"
                            >
                              Rare-Earth & Magnets
                            </Link>
                            <Link
                              href="/services#industrial-chips"
                              onClick={() => setIsOpen(false)}
                              className="block px-2.5 py-1.5 rounded-lg text-[#0E0E25] hover:bg-[#FFDB18]/25 text-xs font-semibold"
                            >
                              IC Chips & Low MOQ Sourcing
                            </Link>
                          </div>
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
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-2.5 rounded-xl text-base font-semibold min-h-[44px] flex items-center",
                    isActive
                      ? "text-[#1926A0] bg-[#1926A0]/10 border border-[#1926A0]/20 font-bold"
                      : "text-[#0E0E25] hover:bg-[#757CB6]/10"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Quick CTA */}
          <a
            href={COMPANY_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full py-3 px-4 rounded-xl bg-[#1926A0] hover:bg-[#131e80] text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#1926A0]/25 border border-[#1926A0] min-h-[44px]"
          >
            Get a Customized Quote
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Quick Actions */}
          <div className="pt-2 border-t border-[#757CB6]/20 grid grid-cols-2 gap-2 text-center text-xs">
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-[#63A26B]/15 border border-[#63A26B]/40 text-[#63A26B] flex items-center justify-center gap-2 font-bold min-h-[44px]"
            >
              <WhatsAppIcon variant="outline" className="w-4 h-4 text-[#63A26B]" />
              WhatsApp
            </a>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="p-3 rounded-xl bg-white border border-[#757CB6]/30 text-[#0E0E25] flex items-center justify-center gap-2 font-bold min-h-[44px]"
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

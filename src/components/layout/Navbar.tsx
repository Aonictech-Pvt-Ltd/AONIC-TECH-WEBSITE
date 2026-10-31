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
          ? "bg-brand-dark-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-digital-500 to-brand-industrial-500 p-[2px] shadow-lg shadow-brand-digital-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-brand-dark-950 rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-digital-400 to-brand-industrial-400 text-xl tracking-tight">
                  A
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                AONICTECH
                <span className="w-1.5 h-1.5 rounded-full bg-brand-digital-400 animate-pulse" />
              </span>
              <span className="text-[10px] font-medium tracking-wider uppercase text-slate-400">
                Digital & Industrial
              </span>
            </div>
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
                        "flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                        isActive
                          ? "text-brand-digital-400 bg-brand-digital-500/10"
                          : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          servicesDropdown ? "rotate-180 text-brand-digital-400" : ""
                        )}
                      />
                    </Link>

                    {/* Mega Dropdown Menu */}
                    {servicesDropdown && (
                      <div className="absolute top-full left-0 w-[580px] p-4 bg-brand-dark-900/95 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-2xl shadow-black/80 grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
                        {/* Digital Solutions Column */}
                        <div className="p-3 rounded-xl bg-gradient-to-b from-brand-digital-500/5 to-transparent border border-brand-digital-500/10">
                          <div className="flex items-center gap-2 mb-2 pb-2 border-b border-brand-digital-500/20">
                            <Code2 className="w-4 h-4 text-brand-digital-400" />
                            <span className="text-xs font-semibold text-brand-digital-400 uppercase tracking-wider">
                              Digital Solutions
                            </span>
                          </div>
                          <ul className="space-y-1.5 text-xs">
                            <li>
                              <Link
                                href="/services#digital-web"
                                className="block p-1.5 rounded hover:bg-slate-800/80 text-slate-300 hover:text-white"
                              >
                                <span className="font-medium text-white block">Website Development</span>
                                <span className="text-slate-400 text-[11px]">Restaurants, shops & startups</span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services#digital-pos"
                                className="block p-1.5 rounded hover:bg-slate-800/80 text-slate-300 hover:text-white"
                              >
                                <span className="font-medium text-white block">POS & Billing Software</span>
                                <span className="text-slate-400 text-[11px]">GST billing, inventory & reports</span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services#digital-ecommerce"
                                className="block p-1.5 rounded hover:bg-slate-800/80 text-slate-300 hover:text-white"
                              >
                                <span className="font-medium text-white block">E-Commerce & Custom Apps</span>
                                <span className="text-slate-400 text-[11px]">Payment gateways & automations</span>
                              </Link>
                            </li>
                          </ul>
                        </div>

                        {/* Industrial Supply Column */}
                        <div className="p-3 rounded-xl bg-gradient-to-b from-brand-industrial-500/5 to-transparent border border-brand-industrial-500/10">
                          <div className="flex items-center gap-2 mb-2 pb-2 border-b border-brand-industrial-500/20">
                            <Layers className="w-4 h-4 text-brand-industrial-400" />
                            <span className="text-xs font-semibold text-brand-industrial-400 uppercase tracking-wider">
                              Industrial Supply
                            </span>
                          </div>
                          <ul className="space-y-1.5 text-xs">
                            <li>
                              <Link
                                href="/services#industrial-titanium"
                                className="block p-1.5 rounded hover:bg-slate-800/80 text-slate-300 hover:text-white"
                              >
                                <span className="font-medium text-white block">Titanium & Specialty Alloys</span>
                                <span className="text-slate-400 text-[11px]">Grade 1 to 5, sheets, rods, wire</span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services#industrial-rare-earth"
                                className="block p-1.5 rounded hover:bg-slate-800/80 text-slate-300 hover:text-white"
                              >
                                <span className="font-medium text-white block">Rare-Earth & Magnets</span>
                                <span className="text-slate-400 text-[11px]">Neodymium N52 & high-temp grades</span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services#industrial-chips"
                                className="block p-1.5 rounded hover:bg-slate-800/80 text-slate-300 hover:text-white"
                              >
                                <span className="font-medium text-white block">IC Chips & Low MOQ Sourcing</span>
                                <span className="text-slate-400 text-[11px]">Doorstep delivery + test certs</span>
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
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "text-brand-digital-400 bg-brand-digital-500/10 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Quick Contact & Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* WhatsApp Quick Chat */}
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/80 text-emerald-400 hover:text-emerald-300 hover:bg-slate-800 hover:border-emerald-500/40 transition-all flex items-center gap-2 text-xs font-medium"
              title="Chat with us on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 fill-emerald-500/20" />
              <span className="hidden xl:inline text-slate-300">WhatsApp</span>
            </a>

            {/* Direct Phone Call */}
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/80 text-slate-300 hover:text-white hover:bg-slate-800 transition-all flex items-center gap-2 text-xs font-medium"
              title={`Call us at ${COMPANY_INFO.displayPhone}`}
            >
              <Phone className="w-4 h-4 text-brand-digital-400" />
              <span className="hidden xl:inline font-mono">{COMPANY_INFO.displayPhone}</span>
            </a>

            {/* Primary Get a Quote CTA */}
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-digital-600 to-brand-digital-500 hover:from-brand-digital-500 hover:to-brand-digital-400 text-white text-xs uppercase tracking-wider font-semibold shadow-md shadow-brand-digital-500/20 hover:shadow-brand-digital-500/30 transition-all flex items-center gap-1.5 active:scale-95"
            >
              Get a Quote
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <Link
              href="/contact"
              className="px-3 py-1.5 rounded-lg bg-brand-digital-600 text-white text-xs font-semibold"
            >
              Quote
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-brand-dark-900/98 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in fade-in duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "block px-3 py-2.5 rounded-lg text-base font-medium",
                  pathname === link.href
                    ? "text-brand-digital-400 bg-brand-digital-500/10 font-semibold"
                    : "text-slate-300 hover:bg-slate-800"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-2 text-center text-xs">
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-emerald-400 flex items-center justify-center gap-2 font-medium"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="p-2.5 rounded-lg bg-slate-800 text-slate-200 flex items-center justify-center gap-2 font-medium"
            >
              <Phone className="w-4 h-4 text-brand-digital-400" />
              Call Office
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

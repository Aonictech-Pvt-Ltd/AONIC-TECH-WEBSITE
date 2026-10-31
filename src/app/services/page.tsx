"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Globe, 
  ShoppingCart, 
  Calculator, 
  Code2, 
  Sparkles, 
  Palette, 
  ShieldAlert, 
  Magnet, 
  Cpu, 
  Layers, 
  SearchCheck, 
  Truck, 
  Check, 
  ArrowRight, 
  Search, 
  ChevronRight
} from "lucide-react";
import { DIGITAL_SERVICES, INDUSTRIAL_SERVICES } from "@/data/services";
import { MATERIALS_CATALOG } from "@/data/materials";
import { COMPANY_INFO } from "@/data/company";
import { cn } from "@/lib/utils";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<"digital" | "industrial">("digital");
  const [searchMaterial, setSearchMaterial] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const iconMap: Record<string, React.ReactNode> = {
    Globe: <Globe className="w-6 h-6" />,
    ShoppingCart: <ShoppingCart className="w-6 h-6" />,
    Calculator: <Calculator className="w-6 h-6" />,
    Code2: <Code2 className="w-6 h-6" />,
    Sparkles: <Sparkles className="w-6 h-6" />,
    Palette: <Palette className="w-6 h-6" />,
    ShieldAlert: <ShieldAlert className="w-6 h-6" />,
    Magnet: <Magnet className="w-6 h-6" />,
    Cpu: <Cpu className="w-6 h-6" />,
    Layers: <Layers className="w-6 h-6" />,
    SearchCheck: <SearchCheck className="w-6 h-6" />,
    Truck: <Truck className="w-6 h-6" />,
  };

  const filteredMaterials = MATERIALS_CATALOG.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchMaterial.toLowerCase()) ||
      item.grade.toLowerCase().includes(searchMaterial.toLowerCase()) ||
      item.forms.some((f) => f.toLowerCase().includes(searchMaterial.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-white text-[#0E0E25]">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-3xl sm:text-5xl font-black text-[#0E0E25] tracking-tight mb-4">
          Dual-Niche Capabilities Under One Roof
        </h1>
        <p className="text-[#0E0E25]/75 text-base sm:text-lg max-w-2xl mx-auto">
          Choose your sector below to explore our tailor-made software solutions or certified industrial material imports.
        </p>

        {/* Niche Switcher Tabs */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:inline-flex sm:flex-row p-1.5 rounded-2xl bg-white border border-[#757CB6]/30 shadow-md w-full sm:w-auto gap-1 sm:gap-0">
          <button
            onClick={() => setActiveTab("digital")}
            className={cn(
              "flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold transition-all min-h-[44px]",
              activeTab === "digital"
                ? "bg-[#1926A0] text-white shadow-md shadow-[#1926A0]/25 border border-[#1926A0]"
                : "text-[#0E0E25] hover:text-[#1926A0]"
            )}
          >
            <Code2 className="w-4 h-4" />
            Digital Solutions & Branding
          </button>
          <button
            onClick={() => setActiveTab("industrial")}
            className={cn(
              "flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold transition-all min-h-[44px]",
              activeTab === "industrial"
                ? "bg-[#FFDB18] text-[#000000] font-black shadow-md shadow-[#FFDB18]/25 border border-[#FFDB18]"
                : "text-[#0E0E25] hover:text-[#1926A0]"
            )}
          >
            <Layers className="w-4 h-4 text-[#000000]" />
            Industrial Materials & Supply
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* NICHE 1: DIGITAL SOLUTIONS & BRANDING CONTENT                             */}
      {/* ========================================================================= */}
      {activeTab === "digital" && (
        <div className="max-w-7xl mx-auto space-y-20 animate-in fade-in duration-300">
          {/* Niche Intro Banner */}
          <div className="p-8 rounded-3xl bg-[#1926A0]/5 border-2 border-[#1926A0]/20 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1926A0]">
                For Restaurants, Retail Shops, Startups & Local Businesses
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0E0E25]">
                Your Brand, Your Website, and Your Software
              </h2>
              <p className="text-[#0E0E25]/75 text-sm max-w-2xl">
                We design and engineer digital systems that convert casual visitors into paying customers. Every website and POS system is custom-configured for fast checkout and high local SEO ranking.
              </p>
            </div>
            <a
              href={`https://wa.me/918121696009?text=${encodeURIComponent("Hi Aonictech, I would like to request a quotation for digital solutions & software services.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-6 py-3 rounded-xl bg-[#1926A0] hover:bg-[#131e80] text-white font-bold text-xs tracking-wider uppercase transition-colors shadow-md shadow-[#1926A0]/25"
            >
              Request Quote
            </a>
          </div>

          {/* 6 Digital Services Grid */}
          <div>
            <h3 className="text-xl font-black text-[#0E0E25] mb-6 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1926A0]" />
              6 Core Digital Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DIGITAL_SERVICES.map((srv) => (
                <div
                  key={srv.id}
                  className="p-7 rounded-2xl bg-white border border-[#757CB6]/25 shadow-sm hover:shadow-xl hover:border-[#1926A0]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-[#1926A0]/10 text-[#1926A0] border border-[#1926A0]/20">
                        {iconMap[srv.icon]}
                      </div>
                      {srv.badge && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#1926A0]/10 text-[#1926A0] border border-[#1926A0]/20">
                          {srv.badge}
                        </span>
                      )}
                    </div>
                    <h4 className="text-xl font-bold text-[#0E0E25] mb-2">{srv.title}</h4>
                    <p className="text-sm text-[#0E0E25]/75 leading-relaxed mb-4">
                      {srv.shortDesc}
                    </p>

                    <div className="space-y-2 mb-6">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#757CB6] block">
                        What's Included:
                      </span>
                      {srv.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-[#0E0E25]">
                          <Check className="w-4 h-4 text-[#1926A0] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#757CB6]/20 flex items-center justify-between">
                    <span className="text-sm text-[#0E0E25] font-bold">{srv.priceNote}</span>
                    <a
                      href={`https://wa.me/918121696009?text=${encodeURIComponent(`Hi Aonictech, I would like to enquire about: ${srv.title}. Could you provide details and pricing?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-[#1926A0] hover:text-[#131e80] flex items-center gap-1"
                    >
                      Enquire <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* POS & Billing Software Spotlight */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border-2 border-[#1926A0]/30 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1926A0]">
                  Featured Digital Product
                </span>
                <h3 className="text-2xl sm:text-4xl font-black text-[#0E0E25]">
                  QuickServe POS & GST Billing Software
                </h3>
                <p className="text-sm text-[#0E0E25]/75 leading-relaxed">
                  Tired of slow checkouts and confusing tax calculations? QuickServe is built specifically for high-speed retail counters, restaurants, and shops. Generate GST invoices in 3 seconds, manage stock, and monitor daily revenue from anywhere.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-[#757CB6]/10 border border-[#757CB6]/25 text-[#0E0E25] font-medium">
                    ⚡ 3-Sec Fast Checkout
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#757CB6]/10 border border-[#757CB6]/25 text-[#0E0E25] font-medium">
                    🧾 Automated GST Invoicing
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#757CB6]/10 border border-[#757CB6]/25 text-[#0E0E25] font-medium">
                    📦 Live Inventory Tracking
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#757CB6]/10 border border-[#757CB6]/25 text-[#0E0E25] font-medium">
                    🖨️ Thermal Receipt Printing
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#757CB6]/10 border border-[#757CB6]/25 text-[#0E0E25] font-medium">
                    📊 Daily Profit/Loss Reports
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#757CB6]/10 border border-[#757CB6]/25 text-[#0E0E25] font-medium">
                    👥 Staff Roles & Passwords
                  </div>
                </div>
                <div className="pt-4 flex flex-wrap gap-4">
                  <a
                    href={`https://wa.me/918121696009?text=${encodeURIComponent("Hi Aonictech, I would like to request a free 15-minute live demo of your QuickServe POS billing software.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-[#1926A0] hover:bg-[#131e80] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-[#1926A0]/25"
                  >
                    Request Free 15-Min Live Demo
                  </a>
                  <Link
                    href="/projects"
                    className="px-6 py-3 rounded-xl bg-white border border-[#757CB6]/30 hover:border-[#1926A0] text-[#0E0E25] font-bold text-xs transition-colors flex items-center gap-1.5"
                  >
                    View POS Case Study <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-2xl bg-white border-2 border-[#757CB6]/25 shadow-md text-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#757CB6]/20 text-[#757CB6]">
                  <span className="font-mono font-bold">POS Terminal Preview</span>
                  <span className="px-2 py-0.5 rounded bg-[#63A26B]/15 text-[#63A26B] font-bold text-[10px]">Active Session</span>
                </div>
                <div className="space-y-2 text-[#0E0E25]">
                  <div className="flex justify-between p-2 rounded bg-[#757CB6]/10">
                    <span className="font-medium">Espresso Coffee x 2</span>
                    <span className="font-mono font-bold">₹240.00</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-[#757CB6]/10">
                    <span className="font-medium">Croissant Butter x 1</span>
                    <span className="font-mono font-bold">₹120.00</span>
                  </div>
                  <div className="flex justify-between text-[#757CB6] pt-2 border-t border-[#757CB6]/20 font-medium">
                    <span>CGST + SGST (5%)</span>
                    <span className="font-mono font-bold text-[#0E0E25]">₹18.00</span>
                  </div>
                  <div className="flex justify-between text-[#0E0E25] font-black text-sm pt-1">
                    <span>Total Net Amount</span>
                    <span className="font-mono text-[#63A26B] font-black">₹378.00</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-[#1926A0]/10 border border-[#1926A0]/20 text-[#1926A0] text-[11px] font-semibold text-center">
                  Thermal printer auto-triggers receipt upon UPI / Cash receipt
                </div>
              </div>
            </div>
          </div>

          {/* Website Packages Comparison Matrix */}
          <div>
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1926A0]">
                Transparent Pricing
              </span>
              <h3 className="text-2xl font-black text-[#0E0E25] mt-1">
                Website Development Packages
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Starter */}
              <div className="p-7 rounded-2xl bg-white border border-[#757CB6]/25 shadow-sm space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-[#0E0E25]">Starter Website</h4>
                  <p className="text-xs text-[#757CB6] mt-1">For single shops, clinics & local services</p>
                  <div className="mt-4 text-2xl font-extrabold text-[#0E0E25]">₹12,000</div>
                  <span className="text-[11px] text-[#757CB6]">One-time development</span>
                </div>
                <ul className="space-y-2.5 text-xs text-[#0E0E25]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1926A0]" /> Up to 5 Responsive Pages
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1926A0]" /> Mobile & Tablet Optimized
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1926A0]" /> WhatsApp Quick Contact Button
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1926A0]" /> Google Maps & Business Setup
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1926A0]" /> 1 Year Free SSL Certificate
                  </li>
                </ul>
                <a
                  href={`https://wa.me/918121696009?text=${encodeURIComponent("Hi Aonictech, I am interested in the Starter Digital Package (₹12,000). Please share details.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-2.5 rounded-xl bg-white border border-[#757CB6]/30 hover:border-[#1926A0] text-[#0E0E25] text-xs font-bold text-center transition-colors shadow-sm"
                >
                  Choose Starter
                </a>
              </div>

              {/* Standard */}
              <div className="p-7 rounded-2xl bg-white border-2 border-[#1926A0] relative space-y-6 shadow-xl shadow-[#1926A0]/10">
                <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-[#1926A0] text-white text-[10px] font-bold uppercase tracking-wider">
                  Most Popular
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#0E0E25]">Business Growth</h4>
                  <p className="text-xs text-[#757CB6] mt-1">For multi-service businesses & startups</p>
                  <div className="mt-4 text-2xl font-black text-[#1926A0]">₹24,000</div>
                  <span className="text-[11px] text-[#757CB6]">One-time development</span>
                </div>
                <ul className="space-y-2.5 text-xs text-[#0E0E25]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1926A0]" /> Up to 10 Custom Pages
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1926A0]" /> Dynamic Quote & Lead System
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1926A0]" /> On-Page SEO & Schema Markup
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1926A0]" /> Speed Audit (95+ Lighthouse Score)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1926A0]" /> 6 Months Dedicated Support
                  </li>
                </ul>
                <a
                  href={`https://wa.me/918121696009?text=${encodeURIComponent("Hi Aonictech, I am interested in the Business Growth Package (₹24,000). Please share details.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-2.5 rounded-xl bg-[#1926A0] hover:bg-[#131e80] text-white text-xs font-bold text-center transition-colors shadow-md shadow-[#1926A0]/25"
                >
                  Choose Business
                </a>
              </div>

              {/* Premium / E-Commerce */}
              <div className="p-7 rounded-2xl bg-white border border-[#757CB6]/25 shadow-sm space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-[#0E0E25]">Custom / E-Commerce</h4>
                  <p className="text-xs text-[#757CB6] mt-1">For digital storefronts & custom portals</p>
                  <div className="mt-4 text-2xl font-extrabold text-[#0E0E25]">₹45,000+</div>
                  <span className="text-[11px] text-[#757CB6]">Tailored to exact scope</span>
                </div>
                <ul className="space-y-2.5 text-xs text-[#0E0E25]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1926A0]" /> Full Payment Gateway (UPI/Cards)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1926A0]" /> Admin Inventory & Order Portal
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1926A0]" /> WhatsApp Automated Order Alerts
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1926A0]" /> Shipping Carrier Integration
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1926A0]" /> 1 Year Priority Maintenance
                  </li>
                </ul>
                <a
                  href={`https://wa.me/918121696009?text=${encodeURIComponent("Hi Aonictech, I am interested in Custom / E-Commerce Software Solutions. Please share quotation details.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-2.5 rounded-xl bg-white border border-[#757CB6]/30 hover:border-[#1926A0] text-[#0E0E25] text-xs font-bold text-center transition-colors shadow-sm"
                >
                  Get Custom Scope
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* NICHE 2: INDUSTRIAL MATERIALS IMPORT & SUPPLY CONTENT                     */}
      {/* ========================================================================= */}
      {activeTab === "industrial" && (
        <div className="max-w-7xl mx-auto space-y-20 animate-in fade-in duration-300">
          {/* Niche Intro Banner */}
          <div className="p-8 rounded-3xl bg-[#FFDB18]/15 border-2 border-[#FFDB18]/50 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0E0E25]">
                Workshops, R&D Labs, Small Factories & Electronics Units
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0E0E25]">
                Global Materials, Delivered to Your Doorstep
              </h2>
              <p className="text-[#0E0E25]/75 text-sm max-w-2xl">
                We eliminate the friction of importing exotic alloys and components. Low MOQ prototyping batches, EN 10204 3.1 Mill Test Certificates, full customs handling, and GST tax invoice included.
              </p>
            </div>
            <a
              href={`https://wa.me/918121696009?text=${encodeURIComponent("Hi Aonictech, I would like to request an Industrial Material RFQ (alloys, rare-earths, or chips).")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-6 py-3 rounded-xl bg-[#FFDB18] hover:bg-[#ffe34d] text-black font-black text-xs tracking-wider uppercase transition-colors shadow-md shadow-[#FFDB18]/25 border border-[#FFDB18]"
            >
              Request Material RFQ
            </a>
          </div>

          {/* 6 Industrial Services Grid */}
          <div>
            <h3 className="text-xl font-black text-[#0E0E25] mb-6 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFDB18]" />
              6 Specialized Import Capabilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {INDUSTRIAL_SERVICES.map((srv) => (
                <div
                  key={srv.id}
                  className="p-7 rounded-2xl bg-white border border-[#757CB6]/25 shadow-sm hover:shadow-xl hover:border-[#FFDB18] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-[#FFDB18]/20 text-[#0E0E25] border border-[#FFDB18]/40">
                        {iconMap[srv.icon]}
                      </div>
                      {srv.badge && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#FFDB18]/25 text-[#0E0E25] border border-[#FFDB18]/40">
                          {srv.badge}
                        </span>
                      )}
                    </div>
                    <h4 className="text-xl font-bold text-[#0E0E25] mb-2">{srv.title}</h4>
                    <p className="text-sm text-[#0E0E25]/75 leading-relaxed mb-4">
                      {srv.shortDesc}
                    </p>

                    <div className="space-y-2 mb-6">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#757CB6] block">
                        Specifications & Scope:
                      </span>
                      {srv.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-[#0E0E25]">
                          <Check className="w-4 h-4 text-[#FFDB18] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#757CB6]/20 flex items-center justify-between">
                    <span className="text-sm text-[#0E0E25] font-bold">{srv.priceNote}</span>
                    <a
                      href={`https://wa.me/918121696009?text=${encodeURIComponent(`Hi Aonictech, I would like to enquire about: ${srv.title}. Please provide supply specifications and quotes.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-[#0E0E25] hover:text-[#1926A0] flex items-center gap-1"
                    >
                      Enquire <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Materials Catalog Table */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-black text-[#0E0E25]">Materials & Alloys Catalog</h3>
                <p className="text-xs text-[#757CB6]">
                  Global market rates fluctuate with LME indices. Filter items and click "Enquire" for today's landed price.
                </p>
              </div>

              {/* Search & Category Filter */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-64">
                  <Search className="w-4 h-4 absolute left-3 top-3.5 sm:top-3 text-[#757CB6]" />
                  <input
                    type="text"
                    placeholder="Search Titanium, N52, STM32..."
                    value={searchMaterial}
                    onChange={(e) => setSearchMaterial(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 sm:py-2 rounded-xl bg-white border border-[#757CB6]/30 text-[#0E0E25] text-base sm:text-xs focus:outline-none focus:border-[#1926A0] shadow-sm"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2.5 sm:py-2 rounded-xl bg-white border border-[#757CB6]/30 text-[#0E0E25] text-base sm:text-xs focus:outline-none focus:border-[#1926A0] shadow-sm font-medium min-h-[44px] sm:min-h-0"
                >
                  <option value="All">All Categories</option>
                  <option value="Titanium & Alloys">Titanium & Alloys</option>
                  <option value="Rare-Earth Elements">Rare-Earth Elements</option>
                  <option value="Electronic Chips (ICs)">Electronic Chips (ICs)</option>
                  <option value="Specialty Metals">Specialty Metals</option>
                </select>
              </div>
            </div>

            {/* Table */}
            <div className="block sm:hidden text-center text-[11px] text-[#757CB6] pb-1 font-mono">
              ← Scroll horizontally to see full specifications →
            </div>
            <div className="overflow-x-auto rounded-2xl border border-[#757CB6]/25 bg-white shadow-sm touch-scroll">
              <table className="w-full text-left text-xs min-w-[640px]">
                <thead className="bg-[#757CB6]/10 text-[#0E0E25] uppercase font-mono text-[10px] border-b border-[#757CB6]/20">
                  <tr>
                    <th className="py-4 px-5">Material & Grade</th>
                    <th className="py-4 px-4">Available Forms</th>
                    <th className="py-4 px-4">Standard / Assay</th>
                    <th className="py-4 px-4">Min Order (MOQ)</th>
                    <th className="py-4 px-4">Test Certificate</th>
                    <th className="py-4 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#757CB6]/15 text-sm">
                  {filteredMaterials.map((mat) => (
                    <tr key={mat.id} className="hover:bg-[#757CB6]/5 transition-colors">
                      <td className="py-4 px-5">
                        <div className="font-bold text-[#0E0E25] text-base">{mat.name}</div>
                        <span className="text-xs text-[#757CB6] font-mono font-bold">{mat.grade}</span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex flex-wrap gap-1.5">
                          {mat.forms.map((f, i) => (
                            <span key={i} className="px-2.5 py-1 rounded-md bg-[#757CB6]/15 text-xs text-[#0E0E25] font-medium">
                              {f}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="py-4 px-4 text-[#0E0E25] font-mono text-xs">
                        {mat.standards}
                      </td>
                      <td className="py-4 px-4 font-black text-[#63A26B] text-sm">
                        {mat.moq}
                      </td>
                      <td className="py-4 px-4 text-[#757CB6] text-xs font-medium">
                        {mat.testCert}
                      </td>
                      <td className="py-4 px-4 text-right">
                        <a
                          href={`https://wa.me/918121696009?text=${encodeURIComponent(`Hi Aonictech, I would like to enquire about importing: ${mat.name} (${mat.grade}). Please provide quotation and MOQ details.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-xl bg-[#FFDB18] hover:bg-[#ffe34d] text-[#000000] font-black text-xs uppercase tracking-wider transition-colors inline-block shadow-sm border border-[#FFDB18]"
                        >
                          Enquire
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Sourcing & Doorstep Delivery Workflow */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#757CB6]/25 shadow-md space-y-8">
            <div className="text-center max-w-xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-[#757CB6]">
                Transparent Supply Chain
              </span>
              <h3 className="text-2xl font-black text-[#0E0E25] mt-1">
                How Industrial Import Works
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-5 rounded-2xl bg-white border border-[#757CB6]/25 shadow-sm space-y-3">
                <span className="text-xs font-mono font-black text-[#1926A0] block">STEP 01</span>
                <h4 className="text-base font-bold text-[#0E0E25]">Send Requirement</h4>
                <p className="text-xs text-[#0E0E25]/75 leading-relaxed">
                  Provide your alloy grade, required form (rod/sheet/powder), dimensions, and quantity needed.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#757CB6]/25 shadow-sm space-y-3">
                <span className="text-xs font-mono font-black text-[#757CB6] block">STEP 02</span>
                <h4 className="text-base font-bold text-[#0E0E25]">Mill Verification & Quote</h4>
                <p className="text-xs text-[#0E0E25]/75 leading-relaxed">
                  We check accredited global mills, verify chemical assay specs, and send you an all-inclusive landed quote.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#757CB6]/25 shadow-sm space-y-3">
                <span className="text-xs font-mono font-black text-[#FFDB18] block">STEP 03</span>
                <h4 className="text-base font-bold text-[#0E0E25]">Customs & Inspection</h4>
                <p className="text-xs text-[#0E0E25]/75 leading-relaxed">
                  We handle Indian customs clearance, duty calculation, Bill of Entry, and laboratory spectrometer test validation.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#757CB6]/25 shadow-sm space-y-3">
                <span className="text-xs font-mono font-black text-[#63A26B] block">STEP 04</span>
                <h4 className="text-base font-bold text-[#0E0E25]">Doorstep Delivery</h4>
                <p className="text-xs text-[#0E0E25]/75 leading-relaxed">
                  Insured surface transport delivered to your factory floor with EN 10204 3.1 MTC and GST tax invoice for 100% ITC.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

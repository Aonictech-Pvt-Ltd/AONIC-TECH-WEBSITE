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
  FileCheck, 
  HelpCircle,
  Clock,
  ShieldCheck,
  ChevronRight,
  ExternalLink
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
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Dual-Niche Capabilities Under One Roof
        </h1>
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
          Choose your sector below to explore our tailor-made software solutions or certified industrial material imports.
        </p>

        {/* Niche Switcher Tabs */}
        <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-[#0E0E25] border border-[#757CB6]/30 shadow-xl">
          <button
            onClick={() => setActiveTab("digital")}
            className={cn(
              "flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all",
              activeTab === "digital"
                ? "bg-gradient-to-r from-[#1926A0] to-[#2736c9] text-white shadow-lg shadow-[#1926A0]/40 border border-[#757CB6]/40"
                : "text-slate-300 hover:text-white"
            )}
          >
            <Code2 className="w-4 h-4 text-[#757CB6]" />
            Digital Solutions & Branding
          </button>
          <button
            onClick={() => setActiveTab("industrial")}
            className={cn(
              "flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all",
              activeTab === "industrial"
                ? "bg-[#FFDB18] text-[#000000] font-black shadow-lg shadow-[#FFDB18]/30 border border-[#FFDB18]"
                : "text-slate-300 hover:text-white"
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
          <div className="p-8 rounded-3xl bg-gradient-to-r from-brand-digital-950 via-brand-dark-900 to-slate-900 border border-brand-digital-500/20 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-digital-400">
                For Restaurants, Retail Shops, Startups & Local Businesses
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Your Brand, Your Website, and Your Software
              </h2>
              <p className="text-slate-400 text-sm max-w-2xl">
                We design and engineer digital systems that convert casual visitors into paying customers. Every website and POS system is custom-configured for fast checkout and high local SEO ranking.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 px-6 py-3 rounded-xl bg-brand-digital-600 hover:bg-brand-digital-500 text-white font-semibold text-xs tracking-wider uppercase transition-colors"
            >
              Request Quote
            </Link>
          </div>

          {/* 6 Digital Services Grid */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-digital-400" />
              6 Core Digital Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DIGITAL_SERVICES.map((srv) => (
                <div
                  key={srv.id}
                  className="p-7 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-brand-digital-500/10 text-brand-digital-400 border border-brand-digital-500/20">
                        {iconMap[srv.icon]}
                      </div>
                      {srv.badge && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-brand-digital-500/20 text-brand-digital-300 border border-brand-digital-500/30">
                          {srv.badge}
                        </span>
                      )}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{srv.title}</h4>
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      {srv.shortDesc}
                    </p>

                    <div className="space-y-2 mb-6">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                        What's Included:
                      </span>
                      {srv.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                          <Check className="w-4 h-4 text-brand-digital-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-sm text-slate-300 font-semibold">{srv.priceNote}</span>
                    <Link
                      href="/contact"
                      className="text-sm font-bold text-brand-digital-400 hover:text-brand-digital-300 flex items-center gap-1"
                    >
                      Enquire <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* POS & Billing Software Spotlight */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-brand-dark-900 to-brand-digital-950 border border-brand-digital-500/30">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-digital-400">
                  Featured Digital Product
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                  QuickServe POS & GST Billing Software
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Tired of slow checkouts and confusing tax calculations? QuickServe is built specifically for high-speed retail counters, restaurants, and shops. Generate GST invoices in 3 seconds, manage stock, and monitor daily revenue from anywhere.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-200">
                    ⚡ 3-Sec Fast Checkout
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-200">
                    🧾 Automated GST Invoicing
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-200">
                    📦 Live Inventory Tracking
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-200">
                    🖨️ Thermal Receipt Printing
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-200">
                    📊 Daily Profit/Loss Reports
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-200">
                    👥 Staff Roles & Passwords
                  </div>
                </div>
                <div className="pt-4 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="px-6 py-3 rounded-xl bg-brand-digital-600 hover:bg-brand-digital-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-brand-digital-600/30"
                  >
                    Request Free 15-Min Live Demo
                  </Link>
                  <Link
                    href="/projects"
                    className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors flex items-center gap-1.5"
                  >
                    View POS Case Study <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-2xl bg-brand-dark-950/80 border border-slate-800 text-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400">
                  <span className="font-mono">POS Terminal Preview</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px]">Active Session</span>
                </div>
                <div className="space-y-2 text-slate-300">
                  <div className="flex justify-between p-2 rounded bg-slate-900/60">
                    <span>Espresso Coffee x 2</span>
                    <span className="font-mono">₹240.00</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-slate-900/60">
                    <span>Croissant Butter x 1</span>
                    <span className="font-mono">₹120.00</span>
                  </div>
                  <div className="flex justify-between text-slate-400 pt-2 border-t border-slate-800">
                    <span>CGST + SGST (5%)</span>
                    <span className="font-mono">₹18.00</span>
                  </div>
                  <div className="flex justify-between text-white font-bold text-sm pt-1">
                    <span>Total Net Amount</span>
                    <span className="font-mono text-emerald-400">₹378.00</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-brand-digital-500/10 border border-brand-digital-500/20 text-brand-digital-300 text-[11px] text-center">
                  Thermal printer auto-triggers receipt upon UPI / Cash receipt
                </div>
              </div>
            </div>
          </div>

          {/* Website Packages Comparison Matrix */}
          <div>
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-digital-400">
                Transparent Pricing
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Website Development Packages
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Starter */}
              <div className="p-7 rounded-2xl glass-panel space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-white">Starter Website</h4>
                  <p className="text-xs text-slate-400 mt-1">For single shops, clinics & local services</p>
                  <div className="mt-4 text-2xl font-extrabold text-white">₹12,000</div>
                  <span className="text-[11px] text-slate-400">One-time development</span>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-digital-400" /> Up to 5 Responsive Pages
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-digital-400" /> Mobile & Tablet Optimized
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-digital-400" /> WhatsApp Quick Contact Button
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-digital-400" /> Google Maps & Business Setup
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-digital-400" /> 1 Year Free SSL Certificate
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="block w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold text-center transition-colors"
                >
                  Choose Starter
                </Link>
              </div>

              {/* Standard */}
              <div className="p-7 rounded-2xl glass-panel border-2 border-brand-digital-500 relative space-y-6 shadow-xl shadow-brand-digital-500/10">
                <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-brand-digital-600 text-white text-[10px] font-bold uppercase tracking-wider">
                  Most Popular
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Business Growth</h4>
                  <p className="text-xs text-slate-400 mt-1">For multi-service businesses & startups</p>
                  <div className="mt-4 text-2xl font-extrabold text-brand-digital-400">₹24,000</div>
                  <span className="text-[11px] text-slate-400">One-time development</span>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-digital-400" /> Up to 10 Custom Pages
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-digital-400" /> Dynamic Quote & Lead System
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-digital-400" /> On-Page SEO & Schema Markup
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-digital-400" /> Speed Audit (95+ Lighthouse Score)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-digital-400" /> 6 Months Dedicated Support
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="block w-full py-2.5 rounded-xl bg-brand-digital-600 hover:bg-brand-digital-500 text-white text-xs font-semibold text-center transition-colors shadow-md shadow-brand-digital-600/30"
                >
                  Choose Business
                </Link>
              </div>

              {/* Premium / E-Commerce */}
              <div className="p-7 rounded-2xl glass-panel space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-white">Custom / E-Commerce</h4>
                  <p className="text-xs text-slate-400 mt-1">For digital storefronts & custom portals</p>
                  <div className="mt-4 text-2xl font-extrabold text-white">₹45,000+</div>
                  <span className="text-[11px] text-slate-400">Tailored to exact scope</span>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-digital-400" /> Full Payment Gateway (UPI/Cards)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-digital-400" /> Admin Inventory & Order Portal
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-digital-400" /> WhatsApp Automated Order Alerts
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-digital-400" /> Shipping Carrier Integration
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-digital-400" /> 1 Year Priority Maintenance
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="block w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold text-center transition-colors"
                >
                  Get Custom Scope
                </Link>
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
          <div className="p-8 rounded-3xl bg-gradient-to-r from-brand-industrial-950 via-brand-dark-900 to-slate-900 border border-brand-industrial-500/20 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-industrial-400">
                Workshops, R&D Labs, Small Factories & Electronics Units
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Global Materials, Delivered to Your Doorstep
              </h2>
              <p className="text-slate-400 text-sm max-w-2xl">
                We eliminate the friction of importing exotic alloys and components. Low MOQ prototyping batches, EN 10204 3.1 Mill Test Certificates, full customs handling, and GST tax invoice included.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 px-6 py-3 rounded-xl bg-brand-industrial-600 hover:bg-brand-industrial-500 text-white font-semibold text-xs tracking-wider uppercase transition-colors"
            >
              Request Material RFQ
            </Link>
          </div>

          {/* 6 Industrial Services Grid */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-industrial-400" />
              6 Specialized Import Capabilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {INDUSTRIAL_SERVICES.map((srv) => (
                <div
                  key={srv.id}
                  className="p-7 rounded-2xl glass-panel glass-panel-industrial-hover flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-brand-industrial-500/10 text-brand-industrial-400 border border-brand-industrial-500/20">
                        {iconMap[srv.icon]}
                      </div>
                      {srv.badge && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-brand-industrial-500/20 text-brand-industrial-300 border border-brand-industrial-500/30">
                          {srv.badge}
                        </span>
                      )}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{srv.title}</h4>
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      {srv.shortDesc}
                    </p>

                    <div className="space-y-2 mb-6">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                        Specifications & Scope:
                      </span>
                      {srv.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                          <Check className="w-4 h-4 text-brand-industrial-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-sm text-slate-300 font-semibold">{srv.priceNote}</span>
                    <Link
                      href={`/contact?service=Material&item=${encodeURIComponent(srv.title)}`}
                      className="text-sm font-bold text-brand-industrial-400 hover:text-brand-industrial-300 flex items-center gap-1"
                    >
                      Enquire <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Materials Catalog Table */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-white">Materials & Alloys Catalog</h3>
                <p className="text-xs text-slate-400">
                  Global market rates fluctuate with LME indices. Filter items and click "Enquire" for today's landed price.
                </p>
              </div>

              {/* Search & Category Filter */}
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-64">
                  <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search Titanium, N52, STM32..."
                    value={searchMaterial}
                    onChange={(e) => setSearchMaterial(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-brand-industrial-500"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-brand-industrial-500"
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
            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-brand-dark-900">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-950/80 text-slate-300 uppercase font-mono text-[10px] border-b border-slate-800">
                  <tr>
                    <th className="py-4 px-5">Material & Grade</th>
                    <th className="py-4 px-4">Available Forms</th>
                    <th className="py-4 px-4">Standard / Assay</th>
                    <th className="py-4 px-4">Min Order (MOQ)</th>
                    <th className="py-4 px-4">Test Certificate</th>
                    <th className="py-4 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-sm">
                  {filteredMaterials.map((mat) => (
                    <tr key={mat.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-4 px-5">
                        <div className="font-bold text-white text-base">{mat.name}</div>
                        <span className="text-xs text-brand-industrial-400 font-mono font-semibold">{mat.grade}</span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex flex-wrap gap-1.5">
                          {mat.forms.map((f, i) => (
                            <span key={i} className="px-2.5 py-1 rounded-md bg-slate-800 text-xs text-slate-200 font-medium">
                              {f}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="py-4 px-4 text-slate-200 font-mono text-xs">
                        {mat.standards}
                      </td>
                      <td className="py-4 px-4 font-bold text-[#63A26B] text-sm">
                        {mat.moq}
                      </td>
                      <td className="py-4 px-4 text-slate-300 text-xs">
                        {mat.testCert}
                      </td>
                      <td className="py-4 px-4 text-right">
                        <Link
                          href={`/contact?service=Material&item=${encodeURIComponent(mat.name)}`}
                          className="px-4 py-2 rounded-xl bg-[#FFDB18] hover:bg-[#ffe34d] text-[#000000] font-bold text-xs uppercase tracking-wider transition-colors inline-block shadow-md shadow-[#FFDB18]/20"
                        >
                          Enquire
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Sourcing & Doorstep Delivery Workflow */}
          <div className="p-8 sm:p-12 rounded-3xl glass-panel space-y-8">
            <div className="text-center max-w-xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-industrial-400">
                Transparent Supply Chain
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                How Industrial Import Works
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                <span className="text-xs font-mono font-bold text-brand-industrial-400 block">STEP 01</span>
                <h4 className="text-base font-bold text-white">Send Requirement</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Provide your alloy grade, required form (rod/sheet/powder), dimensions, and quantity needed.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                <span className="text-xs font-mono font-bold text-brand-industrial-400 block">STEP 02</span>
                <h4 className="text-base font-bold text-white">Mill Verification & Quote</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We check accredited global mills, verify chemical assay specs, and send you an all-inclusive landed quote.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                <span className="text-xs font-mono font-bold text-brand-industrial-400 block">STEP 03</span>
                <h4 className="text-base font-bold text-white">Customs & Inspection</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We handle Indian customs clearance, duty calculation, Bill of Entry, and laboratory spectrometer test validation.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                <span className="text-xs font-mono font-bold text-brand-industrial-400 block">STEP 04</span>
                <h4 className="text-base font-bold text-white">Doorstep Delivery</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
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

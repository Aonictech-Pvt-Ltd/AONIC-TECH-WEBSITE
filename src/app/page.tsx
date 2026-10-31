import React from "react";
import Link from "next/link";
import { 
  Code2, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  Calculator, 
  ShoppingCart, 
  ShieldAlert, 
  Magnet, 
  Cpu, 
  Truck, 
  ShieldCheck, 
  Award, 
  MessageSquare, 
  ChevronRight,
  TrendingUp,
  FileCheck
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { DIGITAL_SERVICES, INDUSTRIAL_SERVICES } from "@/data/services";
import { PROJECTS_DATA } from "@/data/projects";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const featuredProjects = PROJECTS_DATA.slice(0, 3);

  return (
    <div className="space-y-28 pb-24">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION                                                           */}
      {/* ========================================================================= */}
      <section className="relative pt-14 sm:pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Ambient Gradient Background Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-brand-digital-600/15 via-transparent to-brand-industrial-500/15 blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-5xl mx-auto text-center space-y-8 relative">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-700 text-xs sm:text-sm font-semibold text-slate-300 shadow-md">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span>Dual-Niche Enterprise • Digital Engineering & Global Materials</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.12]">
            Your brand, your software,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-digital-400 via-sky-300 to-brand-digital-200">
              and your materials.
            </span>{" "}
            <br />
            <span className="text-slate-200 text-3xl sm:text-5xl lg:text-6xl font-extrabold">
              All under one roof.
            </span>
          </h1>

          <p className="text-slate-300 text-lg sm:text-2xl max-w-3xl mx-auto leading-relaxed font-normal">
            We build high-converting websites and custom POS software for your business, and supply certified titanium alloys, magnets, and electronic chips to your factory floor.
          </p>

          {/* Dual Action Gateway Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/services?tab=digital"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-brand-digital-600 to-brand-digital-500 hover:from-brand-digital-500 hover:to-brand-digital-400 text-white font-bold text-sm sm:text-base uppercase tracking-wider shadow-xl shadow-brand-digital-500/25 transition-all flex items-center justify-center gap-2.5 group active:scale-95"
            >
              <Code2 className="w-5 h-5 text-brand-digital-200 group-hover:scale-110 transition-transform" />
              Digital Solutions & Software
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </Link>

            <Link
              href="/services?tab=industrial"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border-2 border-brand-industrial-500/40 hover:border-brand-industrial-500 text-white font-bold text-sm sm:text-base uppercase tracking-wider transition-all flex items-center justify-center gap-2.5 group active:scale-95 shadow-md shadow-brand-industrial-500/10"
            >
              <Layers className="w-5 h-5 text-brand-industrial-400 group-hover:scale-110 transition-transform" />
              Industrial Supply & Import
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>

          {/* Trust strip below hero */}
          <div className="pt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-sm text-slate-300 border-t border-slate-800/80 font-medium">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>GST Verified Billing</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Award className="w-5 h-5 text-brand-industrial-400" />
              <span>IEC Authorized Importer</span>
            </div>
            <div className="flex items-center gap-2.5">
              <FileCheck className="w-5 h-5 text-brand-digital-400" />
              <span>EN 10204 3.1 Mill Test Certs</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Truck className="w-5 h-5 text-sky-400" />
              <span>Insured Doorstep Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. TWO NICHE HIGHLIGHT CARDS                                              */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-digital-400">
            Two Specialized Divisions
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-2">
            Choose Your Side in 5 Seconds
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Digital Solutions */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-brand-dark-900 via-slate-900 to-brand-digital-950/60 border border-brand-digital-500/20 hover:border-brand-digital-500/50 transition-all shadow-xl group">
            <div className="p-4 rounded-2xl bg-brand-digital-500/10 border border-brand-digital-500/20 text-brand-digital-400 w-fit mb-6">
              <Code2 className="w-8 h-8" />
            </div>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-digital-400">
              For Shops, Restaurants & Startups
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 mb-4">
              Digital Solutions & Branding
            </h3>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 font-normal">
              "{COMPANY_INFO.niches.digital.tagline}"
            </p>

            <ul className="space-y-3.5 mb-8 text-sm sm:text-base text-slate-300 font-medium">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-digital-400 shrink-0" />
                <span>Responsive Websites with Local SEO & WhatsApp Order Integrations</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-digital-400 shrink-0" />
                <span>QuickServe POS & GST Billing Software with Thermal Printing</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-digital-400 shrink-0" />
                <span>Brand Identity, Logos, Restaurant Menus & Packaging Designs</span>
              </li>
            </ul>

            <Link
              href="/services"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-brand-digital-600 hover:bg-brand-digital-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors shadow-md shadow-brand-digital-600/30"
            >
              Explore Digital Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>

          {/* Card 2: Industrial Materials */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-brand-dark-900 via-slate-900 to-brand-industrial-950/60 border border-brand-industrial-500/20 hover:border-brand-industrial-500/50 transition-all shadow-xl group">
            <div className="p-4 rounded-2xl bg-brand-industrial-500/10 border border-brand-industrial-500/20 text-brand-industrial-400 w-fit mb-6">
              <Layers className="w-8 h-8" />
            </div>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-industrial-400">
              For Workshops, R&D Labs & Factories
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 mb-4">
              Industrial Materials Import & Supply
            </h3>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 font-normal">
              "{COMPANY_INFO.niches.industrial.tagline}"
            </p>

            <ul className="space-y-3.5 mb-8 text-sm sm:text-base text-slate-300 font-medium">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-industrial-400 shrink-0" />
                <span>Certified Titanium (Gr 1, 2, 5, 9) in Rods, Sheets, Wire & 3D Powder</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-industrial-400 shrink-0" />
                <span>Neodymium N52 Magnets, Rare-Earth Ingot Alloys & Electronic ICs</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-industrial-400 shrink-0" />
                <span>Low-MOQ Prototyping Batches (1kg–5kg) with Doorstep Port Customs Handling</span>
              </li>
            </ul>

            <Link
              href="/services"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-brand-industrial-600 hover:bg-brand-industrial-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors shadow-md shadow-brand-industrial-600/30"
            >
              Explore Materials Catalog
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WHY CHOOSE US (4 KEY PILLARS)                                          */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 rounded-3xl glass-panel space-y-12">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400">
              Why Aonictech
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-2">
              Built on Reliability & Direct Execution
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-7 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3.5">
              <div className="w-11 h-11 rounded-xl bg-brand-digital-500/10 text-brand-digital-400 flex items-center justify-center font-bold text-base">
                01
              </div>
              <h3 className="text-lg font-bold text-white">All-In-One Partner</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                No need to manage 5 different agencies. We build your online store, set up your billing desk, and supply your workshop materials.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3.5">
              <div className="w-11 h-11 rounded-xl bg-brand-industrial-500/10 text-brand-industrial-400 flex items-center justify-center font-bold text-base">
                02
              </div>
              <h3 className="text-lg font-bold text-white">Low MOQ Flexibility</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Global mills demand tons. We break bulk into 1kg–10kg prototyping batches for researchers, innovators, and precision machine shops.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3.5">
              <div className="w-11 h-11 rounded-xl bg-brand-digital-500/10 text-brand-digital-400 flex items-center justify-center font-bold text-base">
                03
              </div>
              <h3 className="text-lg font-bold text-white">Custom-Tailored Software</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We don't sell bloated cookie-cutter software. Our POS and web apps are configured directly around your specific daily checkout flow.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3.5">
              <div className="w-11 h-11 rounded-xl bg-brand-industrial-500/10 text-brand-industrial-400 flex items-center justify-center font-bold text-base">
                04
              </div>
              <h3 className="text-lg font-bold text-white">Doorstep Delivery & MTC</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Every material delivery includes full Indian customs clearance, genuine laboratory test certificates, and GST tax invoices for ITC.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. FEATURED PROJECTS SHOWCASE                                             */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-digital-400">
              Proven Track Record
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-2">
              Featured Work & Deliveries
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-sm font-bold text-brand-digital-400 hover:text-brand-digital-300 flex items-center gap-1.5"
          >
            View all projects & case studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="p-7 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <span
                    className={cn(
                      "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider",
                      project.niche === "digital"
                        ? "bg-brand-digital-500/20 text-brand-digital-300"
                        : "bg-brand-industrial-500/20 text-brand-industrial-300"
                    )}
                  >
                    {project.category}
                  </span>
                  <span className="text-slate-400 font-mono text-xs">{project.clientType}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {project.solution}
                </p>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-sm mb-5">
                  <span className="text-xs uppercase font-bold text-slate-400 block mb-1">
                    Measurable Result
                  </span>
                  <span className="text-emerald-400 font-semibold">{project.metrics}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.techOrMaterials.slice(0, 2).map((item, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-slate-800 text-xs text-slate-300 font-mono">
                      {item}
                    </span>
                  ))}
                </div>
                <Link
                  href="/projects"
                  className="text-xs sm:text-sm font-semibold text-brand-digital-400 hover:text-white"
                >
                  Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. HOW WE WORK (4-STEP WORKFLOW)                                          */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400">
            Frictionless Process
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-2">
            From Requirement to Delivery
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-7 rounded-2xl glass-panel space-y-3">
            <span className="text-3xl font-black text-brand-digital-400 font-display">01</span>
            <h3 className="text-lg font-bold text-white">Share Requirement</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Tell us your website scope or specify the alloy grade, form, and quantity required.
            </p>
          </div>

          <div className="p-7 rounded-2xl glass-panel space-y-3">
            <span className="text-3xl font-black text-brand-digital-400 font-display">02</span>
            <h3 className="text-lg font-bold text-white">Transparent Quote</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Receive a fixed scope proposal or a landed mill import quote with customs and timeline.
            </p>
          </div>

          <div className="p-7 rounded-2xl glass-panel space-y-3">
            <span className="text-3xl font-black text-brand-industrial-400 font-display">03</span>
            <h3 className="text-lg font-bold text-white">Build or Source</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              We engineer your software or inspect overseas materials with laboratory spectrometers.
            </p>
          </div>

          <div className="p-7 rounded-2xl glass-panel space-y-3">
            <span className="text-3xl font-black text-brand-industrial-400 font-display">04</span>
            <h3 className="text-lg font-bold text-white">Deliver & Support</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Deployment to production or doorstep transport with test certificates & GST invoice.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. CALL TO ACTION STRIP                                                   */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-16 rounded-3xl bg-gradient-to-r from-brand-digital-950 via-brand-dark-900 to-brand-industrial-950 border border-slate-800 text-center space-y-6 shadow-2xl">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Tell Us What You Need
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you need a modern restaurant website, customized POS billing, or certified titanium rods delivered to your workshop.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-9 py-4 rounded-xl bg-brand-digital-600 hover:bg-brand-digital-500 text-white font-bold text-sm uppercase tracking-wider transition-colors shadow-lg shadow-brand-digital-600/30"
            >
              Get a Free Quote
            </Link>
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-9 py-4 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp: {COMPANY_INFO.displayPhone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

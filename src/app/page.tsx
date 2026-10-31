import React from "react";
import Link from "next/link";
import { 
  Code2, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Truck, 
  ShieldCheck, 
  Award, 
  MessageSquare, 
  FileCheck
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { PROJECTS_DATA } from "@/data/projects";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const featuredProjects = PROJECTS_DATA.slice(0, 3);

  return (
    <div className="space-y-28 pb-24 bg-white text-[#0E0E25]">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION                                                           */}
      {/* ========================================================================= */}
      <section className="relative pt-14 sm:pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
        {/* Ambient Gradient Background Glows using Royal Blue, Lavender & Yellow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-gradient-to-tr from-[#1926A0]/10 via-[#757CB6]/10 to-[#FFDB18]/12 blur-[130px] pointer-events-none rounded-full" />

        <div className="max-w-5xl mx-auto text-center space-y-8 relative">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[#757CB6]/30 text-xs sm:text-sm font-semibold text-[#0E0E25] shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#63A26B] animate-ping" />
            <span>Dual-Niche Enterprise • Digital Engineering & Global Materials</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#0E0E25] tracking-tight leading-[1.12]">
            Your brand, your software,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1926A0] via-[#757CB6] to-[#1926A0]">
              and your materials.
            </span>{" "}
            <br />
            <span className="text-[#0E0E25]/80 text-3xl sm:text-5xl lg:text-6xl font-extrabold">
              All under one roof.
            </span>
          </h1>

          <p className="text-[#0E0E25]/75 text-lg sm:text-2xl max-w-3xl mx-auto leading-relaxed font-normal">
            We build high-converting websites and custom POS software for your business, and supply certified titanium alloys, magnets, and electronic chips to your factory floor.
          </p>

          {/* Dual Action Gateway Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/services?tab=digital"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#1926A0] hover:bg-[#131e80] text-white font-bold text-sm sm:text-base uppercase tracking-wider shadow-xl shadow-[#1926A0]/25 transition-all flex items-center justify-center gap-2.5 group active:scale-95 border border-[#1926A0]"
            >
              <Code2 className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              Digital Solutions & Software
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </Link>

            <Link
              href="/services?tab=industrial"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#FFDB18] hover:bg-[#ffe34d] text-[#000000] font-black text-sm sm:text-base uppercase tracking-wider transition-all flex items-center justify-center gap-2.5 group active:scale-95 shadow-xl shadow-[#FFDB18]/25 border border-[#FFDB18]"
            >
              <Layers className="w-5 h-5 text-[#000000] group-hover:scale-110 transition-transform" />
              Industrial Supply & Import
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>

          {/* Trust strip below hero */}
          <div className="pt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-sm text-[#0E0E25]/80 border-t border-[#757CB6]/20 font-medium">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-[#63A26B]" />
              <span>GST Verified Billing</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Award className="w-5 h-5 text-[#FFDB18]" />
              <span>IEC Authorized Importer</span>
            </div>
            <div className="flex items-center gap-2.5">
              <FileCheck className="w-5 h-5 text-[#757CB6]" />
              <span>EN 10204 3.1 Mill Test Certs</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Truck className="w-5 h-5 text-[#1926A0]" />
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
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#1926A0]">
            Two Specialized Divisions
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0E0E25] mt-2">
            Choose Your Side in 5 Seconds
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Digital Solutions */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border-2 border-[#1926A0]/25 hover:border-[#1926A0] transition-all shadow-xl hover:shadow-2xl hover:shadow-[#1926A0]/10 group">
            <div className="p-4 rounded-2xl bg-[#1926A0]/10 border border-[#1926A0]/20 text-[#1926A0] w-fit mb-6">
              <Code2 className="w-8 h-8" />
            </div>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1926A0]">
              For Shops, Restaurants & Startups
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#0E0E25] mt-2 mb-4">
              Digital Solutions & Branding
            </h3>
            <p className="text-base sm:text-lg text-[#0E0E25]/75 leading-relaxed mb-6 font-normal">
              "{COMPANY_INFO.niches.digital.tagline}"
            </p>

            <ul className="space-y-3.5 mb-8 text-sm sm:text-base text-[#0E0E25] font-medium">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1926A0] shrink-0" />
                <span>Responsive Websites with Local SEO & WhatsApp Order Integrations</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1926A0] shrink-0" />
                <span>QuickServe POS & GST Billing Software with Thermal Printing</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1926A0] shrink-0" />
                <span>Brand Identity, Logos, Restaurant Menus & Packaging Designs</span>
              </li>
            </ul>

            <Link
              href="/services?tab=digital"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#1926A0] hover:bg-[#131e80] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors shadow-md shadow-[#1926A0]/25 border border-[#1926A0]"
            >
              Explore Digital Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>

          {/* Card 2: Industrial Materials */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border-2 border-[#FFDB18]/60 hover:border-[#FFDB18] transition-all shadow-xl hover:shadow-2xl hover:shadow-[#FFDB18]/15 group">
            <div className="p-4 rounded-2xl bg-[#FFDB18]/25 border border-[#FFDB18]/50 text-[#0E0E25] w-fit mb-6">
              <Layers className="w-8 h-8" />
            </div>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0E0E25]">
              For Workshops, R&D Labs & Factories
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#0E0E25] mt-2 mb-4">
              Industrial Materials Import & Supply
            </h3>
            <p className="text-base sm:text-lg text-[#0E0E25]/75 leading-relaxed mb-6 font-normal">
              "{COMPANY_INFO.niches.industrial.tagline}"
            </p>

            <ul className="space-y-3.5 mb-8 text-sm sm:text-base text-[#0E0E25] font-medium">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FFDB18] shrink-0" />
                <span>Certified Titanium (Gr 1, 2, 5, 9) in Rods, Sheets, Wire & 3D Powder</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FFDB18] shrink-0" />
                <span>Neodymium N52 Magnets, Rare-Earth Ingot Alloys & Electronic ICs</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FFDB18] shrink-0" />
                <span>Low-MOQ Prototyping Batches (1kg–5kg) with Doorstep Port Customs Handling</span>
              </li>
            </ul>

            <Link
              href="/services?tab=industrial"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#FFDB18] hover:bg-[#ffe34d] text-[#000000] font-black text-xs sm:text-sm uppercase tracking-wider transition-colors shadow-md shadow-[#FFDB18]/25 border border-[#FFDB18]"
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
        <div className="p-8 sm:p-14 rounded-3xl bg-white border border-[#757CB6]/25 shadow-md space-y-12">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#757CB6]">
              Why Aonictech
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0E0E25] mt-2">
              Built on Reliability & Direct Execution
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-7 rounded-2xl bg-white border border-[#757CB6]/25 shadow-sm space-y-3.5 hover:border-[#1926A0]/40 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-[#1926A0]/10 text-[#1926A0] flex items-center justify-center font-bold text-base">
                01
              </div>
              <h3 className="text-lg font-bold text-[#0E0E25]">All-In-One Partner</h3>
              <p className="text-sm text-[#0E0E25]/75 leading-relaxed">
                No need to manage 5 different agencies. We build your online store, set up your billing desk, and supply your workshop materials.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-[#757CB6]/25 shadow-sm space-y-3.5 hover:border-[#FFDB18] transition-colors">
              <div className="w-11 h-11 rounded-xl bg-[#FFDB18]/25 text-[#0E0E25] flex items-center justify-center font-bold text-base">
                02
              </div>
              <h3 className="text-lg font-bold text-[#0E0E25]">Low MOQ Flexibility</h3>
              <p className="text-sm text-[#0E0E25]/75 leading-relaxed">
                Global mills demand tons. We break bulk into 1kg–10kg prototyping batches for researchers, innovators, and precision machine shops.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-[#757CB6]/25 shadow-sm space-y-3.5 hover:border-[#1926A0]/40 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-[#1926A0]/10 text-[#1926A0] flex items-center justify-center font-bold text-base">
                03
              </div>
              <h3 className="text-lg font-bold text-[#0E0E25]">Custom-Tailored Software</h3>
              <p className="text-sm text-[#0E0E25]/75 leading-relaxed">
                We don't sell bloated cookie-cutter software. Our POS and web apps are configured directly around your specific daily checkout flow.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-[#757CB6]/25 shadow-sm space-y-3.5 hover:border-[#FFDB18] transition-colors">
              <div className="w-11 h-11 rounded-xl bg-[#FFDB18]/25 text-[#0E0E25] flex items-center justify-center font-bold text-base">
                04
              </div>
              <h3 className="text-lg font-bold text-[#0E0E25]">Doorstep Delivery & MTC</h3>
              <p className="text-sm text-[#0E0E25]/75 leading-relaxed">
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
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1926A0]">
              Proven Track Record
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0E0E25] mt-2">
              Featured Work & Deliveries
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-sm font-bold text-[#1926A0] hover:text-[#131e80] flex items-center gap-1.5"
          >
            View all projects & case studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="p-7 rounded-2xl bg-white border border-[#757CB6]/25 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <span
                    className={cn(
                      "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider",
                      project.niche === "digital"
                        ? "bg-[#1926A0]/10 text-[#1926A0]"
                        : "bg-[#FFDB18]/25 text-[#0E0E25]"
                    )}
                  >
                    {project.category}
                  </span>
                  <span className="text-[#757CB6] font-mono text-xs">{project.clientType}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#0E0E25] mb-2.5 leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-[#0E0E25]/75 leading-relaxed mb-5">
                  {project.solution}
                </p>

                <div className="p-3.5 rounded-xl bg-[#63A26B]/10 border border-[#63A26B]/30 text-sm mb-5">
                  <span className="text-xs uppercase font-bold text-[#63A26B] block mb-1">
                    Measurable Result
                  </span>
                  <span className="text-[#0E0E25] font-bold">{project.metrics}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#757CB6]/20 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.techOrMaterials.slice(0, 2).map((item, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-[#757CB6]/15 text-xs text-[#0E0E25] font-mono">
                      {item}
                    </span>
                  ))}
                </div>
                <Link
                  href="/projects"
                  className="text-xs sm:text-sm font-bold text-[#1926A0] hover:text-[#131e80]"
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
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#757CB6]">
            Frictionless Process
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0E0E25] mt-2">
            From Requirement to Delivery
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-7 rounded-2xl bg-white border border-[#757CB6]/25 shadow-sm space-y-3">
            <span className="text-3xl font-black text-[#1926A0] font-display">01</span>
            <h3 className="text-lg font-bold text-[#0E0E25]">Share Requirement</h3>
            <p className="text-sm text-[#0E0E25]/75 leading-relaxed">
              Tell us your website scope or specify the alloy grade, form, and quantity required.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-[#757CB6]/25 shadow-sm space-y-3">
            <span className="text-3xl font-black text-[#757CB6] font-display">02</span>
            <h3 className="text-lg font-bold text-[#0E0E25]">Transparent Quote</h3>
            <p className="text-sm text-[#0E0E25]/75 leading-relaxed">
              Receive a fixed scope proposal or a landed mill import quote with customs and timeline.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-[#757CB6]/25 shadow-sm space-y-3">
            <span className="text-3xl font-black text-[#FFDB18] font-display">03</span>
            <h3 className="text-lg font-bold text-[#0E0E25]">Build or Source</h3>
            <p className="text-sm text-[#0E0E25]/75 leading-relaxed">
              We engineer your software or inspect overseas materials with laboratory spectrometers.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-[#757CB6]/25 shadow-sm space-y-3">
            <span className="text-3xl font-black text-[#63A26B] font-display">04</span>
            <h3 className="text-lg font-bold text-[#0E0E25]">Deliver & Support</h3>
            <p className="text-sm text-[#0E0E25]/75 leading-relaxed">
              Deployment to production or doorstep transport with test certificates & GST invoice.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. CALL TO ACTION STRIP                                                   */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-16 rounded-3xl bg-gradient-to-r from-[#1926A0] via-[#131e80] to-[#0E0E25] text-center space-y-6 shadow-2xl text-white">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Tell Us What You Need
          </h2>
          <p className="text-white/85 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you need a modern restaurant website, customized POS billing, or certified titanium rods delivered to your workshop.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-9 py-4 rounded-xl bg-[#FFDB18] hover:bg-[#ffe34d] text-[#000000] font-black text-sm uppercase tracking-wider transition-colors shadow-lg shadow-black/30 border border-[#FFDB18]"
            >
              Get a Free Quote
            </Link>
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-9 py-4 rounded-xl bg-[#63A26B] hover:bg-[#4c8553] text-white font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-lg shadow-black/30"
            >
              <WhatsAppIcon variant="outline" className="w-5 h-5 text-white fill-white" />
              WhatsApp: {COMPANY_INFO.displayPhone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

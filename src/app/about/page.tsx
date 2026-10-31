import React from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  Award, 
  Code2, 
  Layers, 
  Clock, 
  Scale, 
  ArrowRight
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function AboutPage() {
  const values = [
    {
      title: "Radical Transparency",
      desc: "No hidden freight costs, no surprise import duties, and no opaque software subscriptions. What we quote is what you pay.",
      icon: <Scale className="w-5 h-5 text-[#1926A0]" />,
    },
    {
      title: "Uncompromising Quality",
      desc: "From clean, maintainable Next.js source code to certified EN 10204 3.1 Mill Test Certificates for every gram of alloy supplied.",
      icon: <Award className="w-5 h-5 text-[#FFDB18]" />,
    },
    {
      title: "On-Time Doorstep Logistics",
      desc: "We coordinate end-to-end customs clearances at Indian ports and insured express road freight directly to your workshop gate.",
      icon: <Clock className="w-5 h-5 text-[#63A26B]" />,
    },
    {
      title: "Low MOQ Accessibility",
      desc: "Bridging the gap between giant global mills and independent innovators by providing small sample batches from 1kg upwards.",
      icon: <ShieldCheck className="w-5 h-5 text-[#757CB6]" />,
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 space-y-20 bg-white text-[#0E0E25]">
      {/* Header Banner */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#757CB6]/30 text-xs font-semibold text-[#0E0E25] shadow-sm">
          Corporate Background & Leadership
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-[#0E0E25] tracking-tight">
          Engineering the Future in Software & Materials
        </h1>
        <p className="text-[#0E0E25]/75 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {COMPANY_INFO.name} was founded to solve two critical operational challenges: helping businesses build high-performance digital software, and supplying advanced global raw materials directly to Indian workshops.
        </p>
      </div>

      {/* Our Story & Dual Synergy */}
      <div className="max-w-7xl mx-auto">
        <div className="p-6 sm:p-10 lg:p-14 rounded-2xl sm:rounded-3xl bg-white border border-[#757CB6]/25 shadow-md space-y-6 sm:space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1926A0]">
                Our Genesis
              </span>
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-[#0E0E25]">
                Why One Enterprise Covers Tech & Industrial Materials
              </h2>
              <p className="text-[#0E0E25]/85 text-sm sm:text-base lg:text-lg leading-relaxed">
                In modern manufacturing and commerce, high-tech software and advanced materials are inextricably linked. Fast-growing enterprises require both intuitive digital storefronts and precision billing software to serve their clients, while their fabrication floors require certified titanium alloys, rare-earth magnets, and genuine microcontroller chips.
              </p>
              <p className="text-[#0E0E25]/75 text-xs sm:text-base leading-relaxed">
                Historically, procuring exotic materials required navigating opaque international brokers with impossible 500kg minimums, while finding dependable developers meant dealing with fragmented agencies. Aonictech unites both disciplines under one roof: modern web engineering on one side, and verified global sourcing with port clearance on the other.
              </p>
            </div>

            <div className="lg:col-span-5 p-5 sm:p-7 rounded-xl sm:rounded-2xl bg-[#757CB6]/10 border border-[#757CB6]/25 space-y-4 sm:space-y-5">
              <h3 className="text-sm sm:text-base font-bold text-[#0E0E25] uppercase tracking-wider pb-2 sm:pb-3 border-b border-[#757CB6]/20">
                The Dual-Niche Structure
              </h3>
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#1926A0]/20 space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-[#1926A0] font-bold text-xs sm:text-sm uppercase tracking-wider">
                  <Code2 className="w-4 h-4 sm:w-5 sm:h-5" /> Division 1: Digital Solutions
                </div>
                <p className="text-xs sm:text-sm text-[#0E0E25]/80 leading-relaxed">
                  Modern web portals, E-commerce storefronts, and QuickServe POS billing software with automated GST filing for shops & restaurants.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#FFDB18]/50 space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-[#0E0E25] font-bold text-xs sm:text-sm uppercase tracking-wider">
                  <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-[#0E0E25]" /> Division 2: Industrial Materials
                </div>
                <p className="text-xs sm:text-sm text-[#0E0E25]/80 leading-relaxed">
                  Titanium alloys, Neodymium N52 magnets, STM32 IC chips, low-MOQ supply, customs clearance, and doorstep delivery with MTC test certificates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <div className="p-6 sm:p-9 rounded-2xl sm:rounded-3xl bg-white border border-[#757CB6]/25 shadow-sm space-y-3 sm:space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1926A0]">
            Our Purpose
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#0E0E25]">Our Mission</h3>
          <p className="text-[#0E0E25]/75 text-sm sm:text-base leading-relaxed">
            To empower Indian shops, startups, and manufacturers with rapid, dependable access to world-class software technology and certified advanced industrial materials—free of unnecessary bureaucracy and exorbitant minimum orders.
          </p>
        </div>

        <div className="p-6 sm:p-9 rounded-2xl sm:rounded-3xl bg-white border border-[#757CB6]/25 shadow-sm space-y-3 sm:space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0E0E25]">
            Our Destination
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#0E0E25]">Our Vision</h3>
          <p className="text-[#0E0E25]/75 text-sm sm:text-base leading-relaxed">
            To be recognized as India's most trusted agile enterprise partner, where any business owner or CNC engineer can initiate software development or import specialized alloys with single-window accountability.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#757CB6]">
            Operational Principles
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0E0E25] mt-1">
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div key={i} className="p-7 rounded-2xl bg-white border border-[#757CB6]/25 shadow-sm space-y-3.5 hover:shadow-md transition-shadow">
              <div className="p-3.5 rounded-xl bg-[#757CB6]/10 border border-[#757CB6]/20 w-fit">
                {v.icon}
              </div>
              <h3 className="text-lg font-bold text-[#0E0E25]">{v.title}</h3>
              <p className="text-sm text-[#0E0E25]/75 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Legal Credentials & Registrations */}
      <div className="max-w-7xl mx-auto p-8 sm:p-12 rounded-3xl bg-[#757CB6]/10 border border-[#757CB6]/25 space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#63A26B]">
            Compliance & Transparency
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-[#0E0E25] mt-1">
            Official Registrations & Standards
          </h3>
          <p className="text-sm text-[#0E0E25]/75 mt-2 leading-relaxed">
            Every transaction is conducted under strict regulatory compliance with the Government of India and international standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="p-5 rounded-xl bg-white border border-[#757CB6]/20 shadow-sm space-y-2">
            <span className="text-xs text-[#757CB6] uppercase font-bold tracking-wider block">GSTIN Registration</span>
            <span className="font-mono text-[#0E0E25] text-base font-bold block">{COMPANY_INFO.gstin}</span>
            <span className="text-[#63A26B] text-xs font-semibold block">100% Eligible for ITC</span>
          </div>

          <div className="p-5 rounded-xl bg-white border border-[#757CB6]/20 shadow-sm space-y-2">
            <span className="text-xs text-[#757CB6] uppercase font-bold tracking-wider block">Import Export Code (IEC)</span>
            <span className="font-mono text-[#0E0E25] text-base font-bold block">{COMPANY_INFO.iecNumber}</span>
            <span className="text-[#0E0E25]/75 text-xs block">DGFT Authorized Customs Clearance</span>
          </div>

          <div className="p-5 rounded-xl bg-white border border-[#757CB6]/20 shadow-sm space-y-2">
            <span className="text-xs text-[#757CB6] uppercase font-bold tracking-wider block">Quality Standards</span>
            <span className="font-mono text-[#0E0E25] text-base font-bold block">ASTM / AMS / DIN / ISO</span>
            <span className="text-[#0E0E25]/75 text-xs block">EN 10204 3.1 Mill Test Certificates</span>
          </div>

          <div className="p-5 rounded-xl bg-white border border-[#757CB6]/20 shadow-sm space-y-2">
            <span className="text-xs text-[#757CB6] uppercase font-bold tracking-wider block">Software Tech Stack</span>
            <span className="font-mono text-[#0E0E25] text-base font-bold block">Next.js • React • Supabase</span>
            <span className="text-[#0E0E25]/75 text-xs block">TypeScript • Tailwind CSS • Vercel</span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto text-center space-y-5">
        <h3 className="text-2xl sm:text-3xl font-black text-[#0E0E25]">Ready to collaborate with Aonictech?</h3>
        <p className="text-sm sm:text-base text-[#0E0E25]/75 max-w-xl mx-auto leading-relaxed">
          Tell us about your digital requirements or request a landed quotation for specialized alloys.
        </p>
        <a
          href={COMPANY_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-9 py-4 rounded-xl bg-[#1926A0] hover:bg-[#131e80] text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-[#1926A0]/25 transition-all"
        >
          Work With Us <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

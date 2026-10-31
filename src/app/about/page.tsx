import React from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  Award, 
  Code2, 
  Layers, 
  CheckCircle2, 
  Clock, 
  Scale, 
  ArrowRight,
  Cpu,
  Globe2,
  FileText
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function AboutPage() {
  const values = [
    {
      title: "Radical Transparency",
      desc: "No hidden freight costs, no surprise import duties, and no opaque software subscriptions. What we quote is what you pay.",
      icon: <Scale className="w-5 h-5 text-brand-digital-400" />,
    },
    {
      title: "Uncompromising Quality",
      desc: "From clean, maintainable Next.js source code to certified EN 10204 3.1 Mill Test Certificates for every gram of alloy supplied.",
      icon: <Award className="w-5 h-5 text-brand-industrial-400" />,
    },
    {
      title: "On-Time Doorstep Logistics",
      desc: "We coordinate end-to-end customs clearances at Indian ports and insured express road freight directly to your workshop gate.",
      icon: <Clock className="w-5 h-5 text-emerald-400" />,
    },
    {
      title: "Low MOQ Accessibility",
      desc: "Bridging the gap between giant global mills and independent innovators by providing small sample batches from 1kg upwards.",
      icon: <ShieldCheck className="w-5 h-5 text-sky-400" />,
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 space-y-20">
      {/* Header Banner */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-semibold text-slate-300">
          Corporate Background & Leadership
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Engineering the Future in Software & Materials
        </h1>
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {COMPANY_INFO.name} was founded to solve two critical operational challenges: helping businesses build high-performance digital software, and supplying advanced global raw materials directly to Indian workshops.
        </p>
      </div>

      {/* Our Story & Dual Synergy */}
      <div className="max-w-7xl mx-auto">
        <div className="p-8 sm:p-14 rounded-3xl glass-panel space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-digital-400">
                Our Genesis
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Why One Enterprise Covers Tech & Industrial Materials
              </h2>
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
                In modern manufacturing and commerce, high-tech software and advanced materials are inextricably linked. Fast-growing enterprises require both intuitive digital storefronts and precision billing software to serve their clients, while their fabrication floors require certified titanium alloys, rare-earth magnets, and genuine microcontroller chips.
              </p>
              <p className="text-slate-300 text-base leading-relaxed">
                Historically, procuring exotic materials required navigating opaque international brokers with impossible 500kg minimums, while finding dependable developers meant dealing with fragmented agencies. Aonictech unites both disciplines under one roof: modern web engineering on one side, and verified global sourcing with port clearance on the other.
              </p>
            </div>

            <div className="lg:col-span-5 p-7 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-5">
              <h3 className="text-base font-bold text-white uppercase tracking-wider pb-3 border-b border-slate-800">
                The Dual-Niche Structure
              </h3>
              <div className="p-5 rounded-xl bg-brand-digital-500/10 border border-brand-digital-500/20 space-y-2">
                <div className="flex items-center gap-2 text-brand-digital-400 font-bold text-sm uppercase tracking-wider">
                  <Code2 className="w-5 h-5" /> Division 1: Digital Solutions
                </div>
                <p className="text-sm text-slate-200 leading-relaxed">
                  Modern web portals, E-commerce storefronts, and QuickServe POS billing software with automated GST filing for shops & restaurants.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-brand-industrial-500/10 border border-brand-industrial-500/20 space-y-2">
                <div className="flex items-center gap-2 text-brand-industrial-400 font-bold text-sm uppercase tracking-wider">
                  <Layers className="w-5 h-5" /> Division 2: Industrial Materials
                </div>
                <p className="text-sm text-slate-200 leading-relaxed">
                  Titanium alloys, Neodymium N52 magnets, STM32 IC chips, low-MOQ supply, customs clearance, and doorstep delivery with MTC test certificates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-9 rounded-3xl glass-panel space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-digital-400">
            Our Purpose
          </span>
          <h3 className="text-2xl font-bold text-white">Our Mission</h3>
          <p className="text-slate-300 text-base leading-relaxed">
            To empower Indian shops, startups, and manufacturers with rapid, dependable access to world-class software technology and certified advanced industrial materials—free of unnecessary bureaucracy and exorbitant minimum orders.
          </p>
        </div>

        <div className="p-9 rounded-3xl glass-panel space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-industrial-400">
            Our Destination
          </span>
          <h3 className="text-2xl font-bold text-white">Our Vision</h3>
          <p className="text-slate-300 text-base leading-relaxed">
            To be recognized as India's most trusted agile enterprise partner, where any business owner or CNC engineer can initiate software development or import specialized alloys with single-window accountability.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Operational Principles
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div key={i} className="p-7 rounded-2xl glass-panel space-y-3.5">
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 w-fit">
                {v.icon}
              </div>
              <h3 className="text-lg font-bold text-white">{v.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Legal Credentials & Registrations (Crucial for Import Trust) */}
      <div className="max-w-7xl mx-auto p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            Compliance & Transparency
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Official Registrations & Standards
          </h3>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            Every transaction is conducted under strict regulatory compliance with the Government of India and international standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="p-5 rounded-xl bg-brand-dark-900 border border-slate-800 space-y-2">
            <span className="text-xs text-slate-400 uppercase font-bold tracking-wider block">GSTIN Registration</span>
            <span className="font-mono text-white text-base font-bold block">{COMPANY_INFO.gstin}</span>
            <span className="text-slate-300 text-xs block">100% Eligible for Input Tax Credit</span>
          </div>

          <div className="p-5 rounded-xl bg-brand-dark-900 border border-slate-800 space-y-2">
            <span className="text-xs text-slate-400 uppercase font-bold tracking-wider block">Import Export Code (IEC)</span>
            <span className="font-mono text-white text-base font-bold block">{COMPANY_INFO.iecNumber}</span>
            <span className="text-slate-300 text-xs block">DGFT Authorized Customs Clearance</span>
          </div>

          <div className="p-5 rounded-xl bg-brand-dark-900 border border-slate-800 space-y-2">
            <span className="text-xs text-slate-400 uppercase font-bold tracking-wider block">Quality Standards</span>
            <span className="font-mono text-white text-base font-bold block">ASTM / AMS / DIN / ISO</span>
            <span className="text-slate-300 text-xs block">EN 10204 3.1 Mill Test Certificates</span>
          </div>

          <div className="p-5 rounded-xl bg-brand-dark-900 border border-slate-800 space-y-2">
            <span className="text-xs text-slate-400 uppercase font-bold tracking-wider block">Software Tech Stack</span>
            <span className="font-mono text-white text-base font-bold block">Next.js • React • Supabase</span>
            <span className="text-slate-300 text-xs block">TypeScript • Tailwind CSS • Vercel</span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto text-center space-y-5">
        <h3 className="text-2xl sm:text-3xl font-black text-white">Ready to collaborate with Aonictech?</h3>
        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
          Tell us about your digital requirements or request a landed quotation for specialized alloys.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-9 py-4 rounded-xl bg-brand-digital-600 hover:bg-brand-digital-500 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-brand-digital-600/30 transition-all"
        >
          Work With Us <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

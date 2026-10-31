"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  BookOpen, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Bell, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Search,
  ExternalLink,
  Lock,
  ChevronRight
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { cn } from "@/lib/utils";

interface ArticleTeaser {
  id: string;
  category: "Digital Solutions" | "Industrial Materials" | "POS & Retail";
  tag: string;
  title: string;
  excerpt: string;
  techTags: string[];
  readTime: string;
  status: "In Peer Review" | "Under Curation" | "Drafting";
  author: string;
}

const UPCOMING_ARTICLES: ArticleTeaser[] = [
  {
    id: "pos-offline-first",
    category: "POS & Retail",
    tag: "High-Traffic POS Architecture",
    title: "Architecting Zero-Downtime Offline-First Retail POS with SQLite & Cloud Sync",
    excerpt: "How we engineered a local-first billing engine for high-traffic food courts and retail stores that processes transactions during ISP blackouts and reconciles inventory with sub-millisecond local locks.",
    techTags: ["SQLite Local-First", "Next.js", "Offline Sync", "Thermal Printing"],
    readTime: "7 min read",
    status: "In Peer Review",
    author: "Aonictech Digital Engineering Lab",
  },
  {
    id: "titanium-grades-metallurgy",
    category: "Industrial Materials",
    tag: "Specialty Alloy Metallurgy",
    title: "Grade 1 to Grade 5 Titanium: Mechanical Limits, Annealing & CNC Machinability",
    excerpt: "A comprehensive breakdown of yield strength, thermal dissipation, and tool-wear mitigation when milling Ti-6Al-4V versus commercially pure titanium in Indian workshop environments.",
    techTags: ["Ti-6Al-4V", "CNC Machining", "EN 10204 3.1", "Alloy Metallurgy"],
    readTime: "9 min read",
    status: "Under Curation",
    author: "Industrial Materials Division",
  },
  {
    id: "nextjs-high-throughput",
    category: "Digital Solutions",
    tag: "Modern Web Architecture",
    title: "High-Throughput Next.js App Router: Dynamic ISR vs Static Catalogs",
    excerpt: "Optimizing Core Web Vitals, server cache tags, and sub-100ms TTFB for complex industrial product catalogs and digital storefronts with tens of thousands of SKUs.",
    techTags: ["Next.js App Router", "Server Components", "Cache-Control", "SEO"],
    readTime: "6 min read",
    status: "Drafting",
    author: "Frontend & Performance Team",
  },
  {
    id: "neodymium-n52-magnets",
    category: "Industrial Materials",
    tag: "Rare-Earth Elements",
    title: "Procuring High-Grade Neodymium (NdFeB) N52 Magnets: Thermal Limits & Plating",
    excerpt: "Navigating Curie temperatures, Ni-Cu-Ni corrosion barriers, demagnetization curves, and RoHS/REACH compliance audits for brushless motors and precision sensor assemblies.",
    techTags: ["NdFeB N52", "Curie Temperature", "Corrosion Barriers", "RoHS"],
    readTime: "8 min read",
    status: "In Peer Review",
    author: "Rare-Earth Sourcing Group",
  },
  {
    id: "b2b-portal-security",
    category: "Digital Solutions",
    tag: "DevOps & Security",
    title: "Hardening B2B Client Portals: Rate Limiting, Upstash Redis & Role-Based Access",
    excerpt: "Practical defense-in-depth patterns for guarding public quote endpoints, enterprise authentication, and tenant data isolation in multi-division web portals.",
    techTags: ["Rate Limiting", "Upstash Redis", "Auth Hygiene", "OWASP 2026"],
    readTime: "5 min read",
    status: "Drafting",
    author: "Security & Cloud Ops",
  },
  {
    id: "dgft-customs-clearance",
    category: "Industrial Materials",
    tag: "Trade & Logistics",
    title: "Navigating DGFT Norms & Port Customs: Landed Cost Optimization in India",
    excerpt: "A field guide to HSN classification, Bill of Entry port clearance, duty concessions, and verified door-to-door transit insurance for specialty raw materials.",
    techTags: ["DGFT IEC", "Customs Clearance", "GST ITC", "Doorstep Delivery"],
    readTime: "10 min read",
    status: "Under Curation",
    author: "Logistics & Trade Compliance",
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const categories = ["All", "Digital Solutions", "Industrial Materials", "POS & Retail"];

  const filteredArticles = UPCOMING_ARTICLES.filter((article) => {
    if (activeCategory === "All") return true;
    return article.category === activeCategory;
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setSubmitting(true);
    // Client-side simulated subscription state
    setTimeout(() => {
      setSubmitting(false);
      setSubscribed(true);
      try {
        localStorage.setItem("aonic_blog_subscriber", email);
      } catch (err) {}
    }, 600);
  };

  return (
    <div className="bg-white min-h-screen text-[#0E0E25]">
      {/* ========================================================================= */}
      {/* HERO SECTION                                                              */}
      {/* ========================================================================= */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-[#757CB6]/20 overflow-hidden">
        {/* Soft Background Accents */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1926A0]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#FFDB18]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1926A0]/10 border border-[#1926A0]/20 text-[#1926A0] text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#FFDB18] shadow-sm animate-pulse" />
              Aonictech Insights & Tech Dispatch
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0E0E25] tracking-tight leading-[1.15]">
              Engineering Dispatch & Material Science
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-[#0E0E25]/80 font-normal leading-relaxed">
              In-depth architectural breakdowns, real benchmark figures, and certified metallurgy papers curated directly from our digital labs and global supply lines.
            </p>
          </div>

          {/* ========================================================================= */}
          {/* COMING SOON ANNOUNCEMENT & NOTIFICATION BOX                                */}
          {/* ========================================================================= */}
          <div className="mt-12 sm:mt-16 max-w-3xl mx-auto p-6 sm:p-10 rounded-3xl bg-white border-2 border-[#1926A0]/25 shadow-xl shadow-[#1926A0]/10 relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-48 h-48 bg-[#FFDB18]/15 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6 relative z-10 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFDB18]/25 border border-[#FFDB18] text-[#000000] text-xs font-black uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-[#000000]" />
                    Coming Soon • Launching Q1 2027
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0E0E25] mt-2">
                    Phase 1 Technical Papers Under Active Curation
                  </h2>
                </div>
                <div className="shrink-0 p-3 rounded-2xl bg-[#1926A0]/10 border border-[#1926A0]/20 text-[#1926A0]">
                  <BookOpen className="w-7 h-7" />
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#0E0E25]/75 leading-relaxed">
                Our editorial team is finalizing deep-dive technical publications covering high-throughput software architectures and certified material testing protocols. Subscribe below to receive notification the moment our initial dispatch drops.
              </p>

              {/* Email Notification Form */}
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="pt-2 flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your corporate or work email..."
                    className="flex-1 px-4 py-3.5 rounded-xl bg-white border border-[#757CB6]/40 text-[#0E0E25] placeholder:text-[#757CB6] text-sm focus:outline-none focus:border-[#1926A0] focus:ring-2 focus:ring-[#1926A0]/20 transition-all shadow-sm"
                  />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-6 py-3.5 rounded-xl bg-[#1926A0] hover:bg-[#131e80] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#1926A0]/25 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
                  >
                    <Bell className="w-4 h-4 text-[#FFDB18]" />
                    {submitting ? "Subscribing..." : "Notify Me When Live"}
                  </button>
                </form>
              ) : (
                <div className="p-4 rounded-xl bg-[#63A26B]/15 border border-[#63A26B]/40 flex items-center gap-3 text-sm text-[#0E0E25] font-semibold animate-in fade-in duration-300">
                  <CheckCircle2 className="w-5 h-5 text-[#63A26B] shrink-0" />
                  <span>
                    You're on the priority notification list! We'll email you at <strong className="text-[#0E0E25] font-bold">{email}</strong> as soon as the first paper is published.
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SNEAK PEEK ARTICLES SECTION                                               */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10">
          {/* Section Header & Category Filters */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#757CB6]/20">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#757CB6] block">
                Editorial Pipeline Preview
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#0E0E25] tracking-tight mt-1">
                Upcoming Technical Deep Dives
              </h2>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-4 py-2 rounded-xl text-xs font-bold tracking-wider transition-all",
                    activeCategory === cat
                      ? "bg-[#1926A0] text-white shadow-md shadow-[#1926A0]/20"
                      : "bg-[#757CB6]/10 text-[#0E0E25] hover:bg-[#757CB6]/20 border border-[#757CB6]/20"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className="group p-6 sm:p-7 rounded-2xl bg-white border border-[#757CB6]/25 shadow-sm hover:shadow-xl hover:border-[#1926A0]/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Category & Status Bar */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-1 rounded-md bg-[#1926A0]/10 text-[#1926A0] font-bold text-[11px] uppercase tracking-wider">
                      {article.tag}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#FFDB18]/20 text-[#0E0E25] font-black text-[10px] uppercase tracking-wider border border-[#FFDB18]/50">
                      <Clock className="w-3 h-3 text-[#0E0E25]" />
                      {article.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#0E0E25] group-hover:text-[#1926A0] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-[#0E0E25]/75 leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {article.techTags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded bg-[#757CB6]/10 text-[#0E0E25] font-mono text-[10px] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Meta & Coming Soon Notice */}
                <div className="pt-6 mt-6 border-t border-[#757CB6]/20 flex items-center justify-between text-xs text-[#757CB6]">
                  <span className="font-medium">{article.readTime}</span>
                  <span className="inline-flex items-center gap-1 font-bold text-[#1926A0] group-hover:translate-x-1 transition-transform">
                    Coming Soon <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* EDITORIAL STANDARDS SECTION                                               */}
      {/* ========================================================================= */}
      <section className="py-16 bg-[#757CB6]/5 border-y border-[#757CB6]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#757CB6]">
              Our Content Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0E0E25]">
              Rigorous Engineering. Zero Fluff.
            </h2>
            <p className="text-sm sm:text-base text-[#0E0E25]/75">
              Every publication released by Aonictech is vetted by practitioners who write the code and inspect the alloys.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 rounded-2xl bg-white border border-[#757CB6]/25 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#1926A0]/10 text-[#1926A0] flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="text-lg font-bold text-[#0E0E25]">Production Benchmark Data</h3>
              <p className="text-xs sm:text-sm text-[#0E0E25]/75 leading-relaxed">
                We publish real throughput metrics, memory profiles, and stress test graphs from live restaurant POS deployments and web services.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#757CB6]/25 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FFDB18]/25 text-[#000000] flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="text-lg font-bold text-[#0E0E25]">Certified Chemical Analysis</h3>
              <p className="text-xs sm:text-sm text-[#0E0E25]/75 leading-relaxed">
                Metallurgy papers include authentic EN 10204 3.1 Mill Test Certificates, spectroscopic chemical assays, and machinability parameters.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#757CB6]/25 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#63A26B]/15 text-[#63A26B] flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="text-lg font-bold text-[#0E0E25]">Dual-Niche Synergy</h3>
              <p className="text-xs sm:text-sm text-[#0E0E25]/75 leading-relaxed">
                Where modern digital software intersects with tangible industrial supply, providing practical lessons for founders, engineers, and workshop heads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BOTTOM ACTION BANNER                                                      */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-[#1926A0] via-[#131e80] to-[#0E0E25] text-white text-center space-y-6 shadow-2xl">
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            Have an Immediate Technical or Sourcing Requirement?
          </h2>
          <p className="text-sm sm:text-base text-white/85 max-w-2xl mx-auto leading-relaxed">
            You don't have to wait for our publications. Our engineering and materials procurement teams are available directly via WhatsApp and phone for custom inquiries.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#63A26B] hover:bg-[#528959] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg shadow-black/30 min-h-[44px]"
            >
              <WhatsAppIcon variant="outline" className="w-5 h-5 text-white fill-white" />
              WhatsApp
            </a>
            <Link
              href="/services"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2 border border-white/20 min-h-[44px]"
            >
              Explore Our Core Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


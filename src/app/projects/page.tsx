"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Key, 
  Terminal
} from "lucide-react";
import { PROJECTS_DATA } from "@/data/projects";
import { cn } from "@/lib/utils";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "Websites",
    "E-Commerce",
    "POS Software",
    "Custom Software",
    "Material Supply",
  ];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 space-y-16 bg-white text-[#0E0E25]">
      {/* Header Banner */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#757CB6]/30 text-[#1926A0] text-xs font-semibold uppercase tracking-wider shadow-sm">
          Proven Commercial Results
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-[#0E0E25] tracking-tight">
          Our Work & Material Deliveries
        </h1>
        <p className="text-[#0E0E25]/75 text-base sm:text-lg max-w-2xl mx-auto">
          Explore real-world software deployments, high-speed POS billing systems, and certified industrial alloy shipments delivered to our clients.
        </p>

        {/* Filter Tabs */}
        <div className="mt-6 sm:mt-8 flex sm:flex-wrap items-center sm:justify-center gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar touch-scroll w-full px-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm shrink-0 whitespace-nowrap min-h-[40px] flex items-center justify-center",
                activeCategory === cat
                  ? "bg-[#1926A0] text-white shadow-md shadow-[#1926A0]/25"
                  : "bg-white border border-[#757CB6]/30 text-[#0E0E25] hover:border-[#1926A0]"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* POS Software Interactive Sandbox Demo Highlight */}
      {(activeCategory === "All" || activeCategory === "POS Software") && (
        <div className="max-w-7xl mx-auto p-6 sm:p-10 lg:p-12 rounded-2xl sm:rounded-3xl bg-white border-2 border-[#1926A0]/30 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#1926A0]/10 text-[#1926A0] border border-[#1926A0]/20 inline-block">
                Interactive Software Sandbox
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#0E0E25]">
                QuickServe POS & GST Billing Sandbox
              </h2>
              <p className="text-[#0E0E25]/80 text-base sm:text-lg leading-relaxed">
                Test our lightning-fast checkout system directly. Try adding items to the cart, calculating GST taxes automatically, and previewing thermal receipt output.
              </p>
              <div className="p-5 rounded-xl bg-[#757CB6]/10 border border-[#757CB6]/25 space-y-2.5 text-sm">
                <div className="flex items-center gap-2 text-[#1926A0] font-bold">
                  <Key className="w-4 h-4" /> Demo Sandbox Credentials:
                </div>
                <div className="font-mono text-[#0E0E25] text-sm flex flex-wrap gap-5 font-medium">
                  <span>
                    Email: <span className="font-bold text-[#1926A0]">demo@aonictech.com</span>
                  </span>
                  <span>
                    Password: <span className="font-bold text-[#1926A0]">demo123</span>
                  </span>
                </div>
              </div>
              <div className="pt-2 flex flex-wrap gap-3.5">
                <Link
                  href="/contact?service=POS+Demo"
                  className="px-6 py-3 rounded-xl bg-[#1926A0] hover:bg-[#131e80] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-[#1926A0]/25"
                >
                  Schedule Guided Walkthrough
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-xl bg-white border border-[#757CB6]/30 hover:border-[#1926A0] text-[#0E0E25] text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  Custom Software Enquiry
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-white border border-[#757CB6]/30 shadow-md space-y-4 text-xs sm:text-sm font-mono">
              <div className="flex items-center justify-between text-[#0E0E25] pb-2 border-b border-[#757CB6]/20 font-bold">
                <span className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#1926A0]" />
                  Terminal #01 (QuickServe)
                </span>
                <span className="text-[#63A26B]">STATUS: ONLINE</span>
              </div>
              <div className="space-y-1.5 text-[#0E0E25] text-xs font-medium">
                <div>[13:01:14] Barcode Scanned: SKU-84920 (Espresso Roast)</div>
                <div>[13:01:15] Stock auto-deducted: -1 unit (Rem: 48)</div>
                <div>[13:01:16] Applied GST Slab: 5% (CGST 2.5% + SGST 2.5%)</div>
                <div className="text-[#63A26B] font-bold">[13:01:17] Thermal ESC/POS Print Triggered (2.8 sec total)</div>
              </div>
              <div className="pt-2 border-t border-[#757CB6]/20 text-xs text-[#757CB6] font-medium">
                ✓ Full offline billing support (syncs automatically upon reconnection)
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="p-8 rounded-2xl bg-white border border-[#757CB6]/25 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span
                  className={cn(
                    "px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider",
                    project.niche === "digital"
                      ? "bg-[#1926A0]/10 text-[#1926A0] border border-[#1926A0]/20"
                      : "bg-[#FFDB18]/25 text-[#0E0E25] border border-[#FFDB18]/40"
                  )}
                >
                  {project.category}
                </span>
                <span className="text-[#757CB6] text-xs font-mono font-medium">{project.clientType}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#0E0E25] mb-4 leading-snug">
                {project.title}
              </h3>

              <div className="space-y-4 mb-6 text-sm">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#757CB6] block mb-1">
                    The Challenge
                  </span>
                  <p className="text-[#0E0E25]/75 leading-relaxed">{project.problem}</p>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#757CB6] block mb-1">
                    What We Built / Supplied
                  </span>
                  <p className="text-[#0E0E25] leading-relaxed font-medium">{project.solution}</p>
                </div>
              </div>

              {/* Measurable Metric Box */}
              <div className="p-4 rounded-xl bg-[#63A26B]/10 border border-[#63A26B]/25 text-sm mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#63A26B] block mb-1">
                  Commercial Impact
                </span>
                <span className="text-[#0E0E25] font-black text-base">{project.metrics}</span>
              </div>

              {/* Testimonial Quote if present */}
              {project.testimonial && (
                <div className="p-4 rounded-xl bg-[#757CB6]/10 border border-[#757CB6]/20 mb-6 text-sm italic text-[#0E0E25]/85 leading-relaxed">
                  "{project.testimonial.quote}"
                  <span className="block not-italic text-xs font-bold text-[#0E0E25] mt-2">
                    — {project.testimonial.author}, {project.testimonial.company}
                  </span>
                </div>
              )}
            </div>

            <div>
              {/* Tech / Materials Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#757CB6]/20 mb-5">
                {project.techOrMaterials.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-md bg-[#757CB6]/15 text-xs text-[#0E0E25] font-mono font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href="/contact"
                className="w-full py-3 rounded-xl bg-[#1926A0] hover:bg-[#131e80] text-white text-sm font-bold flex items-center justify-center gap-2 transition-colors shadow-md shadow-[#1926A0]/20"
              >
                Discuss Similar Project <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="max-w-4xl mx-auto p-10 sm:p-14 rounded-3xl bg-white border border-[#757CB6]/25 shadow-md text-center space-y-5">
        <h3 className="text-2xl sm:text-3xl font-black text-[#0E0E25]">
          Have a similar software project or custom material RFQ?
        </h3>
        <p className="text-sm sm:text-base text-[#0E0E25]/75 max-w-xl mx-auto leading-relaxed">
          We provide transparent timelines, clear deliverables, and door-to-door execution.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#1926A0] hover:bg-[#131e80] text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-[#1926A0]/25 transition-all"
        >
          Contact Our Team <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

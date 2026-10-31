"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  FolderGit2, 
  Layers, 
  Code2, 
  CheckCircle2, 
  ExternalLink, 
  ArrowRight, 
  ShieldCheck, 
  Key, 
  Terminal,
  Cpu,
  Truck
} from "lucide-react";
import { PROJECTS_DATA, ProjectItem } from "@/data/projects";
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
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header Banner */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-digital-500/10 border border-brand-digital-500/20 text-brand-digital-400 text-xs font-semibold uppercase tracking-wider">
          Proven Commercial Results
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Our Work & Material Deliveries
        </h1>
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
          Explore real-world software deployments, high-speed POS billing systems, and certified industrial alloy shipments delivered to our clients.
        </p>

        {/* Filter Tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2.5 rounded-xl text-sm font-semibold transition-all",
                activeCategory === cat
                  ? "bg-brand-digital-600 text-white shadow-md shadow-brand-digital-600/30"
                  : "bg-brand-dark-900 border border-slate-800 text-slate-300 hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* POS Software Interactive Sandbox Demo Highlight */}
      {(activeCategory === "All" || activeCategory === "POS Software") && (
        <div className="max-w-7xl mx-auto p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-brand-dark-900 to-brand-digital-950 border border-brand-digital-500/30 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-brand-digital-500/20 text-brand-digital-300 border border-brand-digital-500/30 inline-block">
                Interactive Software Sandbox
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                QuickServe POS & GST Billing Sandbox
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Test our lightning-fast checkout system directly. Try adding items to the cart, calculating GST taxes automatically, and previewing thermal receipt output.
              </p>
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2.5 text-sm">
                <div className="flex items-center gap-2 text-brand-digital-400 font-bold">
                  <Key className="w-4 h-4" /> Demo Sandbox Credentials:
                </div>
                <div className="font-mono text-slate-200 text-sm flex flex-wrap gap-5">
                  <span>
                    Email: <span className="text-white font-semibold">demo@aonictech.com</span>
                  </span>
                  <span>
                    Password: <span className="text-white font-semibold">demo123</span>
                  </span>
                </div>
              </div>
              <div className="pt-2 flex flex-wrap gap-3.5">
                <Link
                  href="/contact?service=POS+Demo"
                  className="px-6 py-3 rounded-xl bg-brand-digital-600 hover:bg-brand-digital-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-brand-digital-600/30"
                >
                  Schedule Guided Walkthrough
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Custom Software Enquiry
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl glass-panel space-y-4 text-xs sm:text-sm font-mono">
              <div className="flex items-center justify-between text-slate-300 pb-2 border-b border-slate-800 font-semibold">
                <span className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-brand-digital-400" />
                  Terminal #01 (QuickServe)
                </span>
                <span className="text-emerald-400">STATUS: ONLINE</span>
              </div>
              <div className="space-y-1.5 text-slate-200 text-xs">
                <div>[13:01:14] Barcode Scanned: SKU-84920 (Espresso Roast)</div>
                <div>[13:01:15] Stock auto-deducted: -1 unit (Rem: 48)</div>
                <div>[13:01:16] Applied GST Slab: 5% (CGST 2.5% + SGST 2.5%)</div>
                <div className="text-emerald-400 font-bold">[13:01:17] Thermal ESC/POS Print Triggered (2.8 sec total)</div>
              </div>
              <div className="pt-2 border-t border-slate-800 text-xs text-slate-400">
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
            className="p-8 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span
                  className={cn(
                    "px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider",
                    project.niche === "digital"
                      ? "bg-brand-digital-500/20 text-brand-digital-300 border border-brand-digital-500/30"
                      : "bg-brand-industrial-500/20 text-brand-industrial-300 border border-brand-industrial-500/30"
                  )}
                >
                  {project.category}
                </span>
                <span className="text-slate-400 text-xs font-mono">{project.clientType}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
                {project.title}
              </h3>

              <div className="space-y-4 mb-6 text-sm">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    The Challenge
                  </span>
                  <p className="text-slate-300 leading-relaxed">{project.problem}</p>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    What We Built / Supplied
                  </span>
                  <p className="text-slate-200 leading-relaxed font-medium">{project.solution}</p>
                </div>
              </div>

              {/* Measurable Metric Box */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-sm mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Commercial Impact
                </span>
                <span className="text-emerald-400 font-bold text-base">{project.metrics}</span>
              </div>

              {/* Testimonial Quote if present */}
              {project.testimonial && (
                <div className="p-4 rounded-xl bg-brand-digital-500/5 border border-brand-digital-500/15 mb-6 text-sm italic text-slate-300 leading-relaxed">
                  "{project.testimonial.quote}"
                  <span className="block not-italic text-xs font-bold text-white mt-2">
                    — {project.testimonial.author}, {project.testimonial.company}
                  </span>
                </div>
              )}
            </div>

            <div>
              {/* Tech / Materials Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800 mb-5">
                {project.techOrMaterials.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-md bg-slate-800/80 text-xs text-slate-200 font-mono font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href="/contact"
                className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-bold flex items-center justify-center gap-2 transition-colors"
              >
                Discuss Similar Project <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="max-w-4xl mx-auto p-10 sm:p-14 rounded-3xl glass-panel text-center space-y-5">
        <h3 className="text-2xl sm:text-3xl font-black text-white">
          Have a similar software project or custom material RFQ?
        </h3>
        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
          We provide transparent timelines, clear deliverables, and door-to-door execution.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-digital-600 hover:bg-brand-digital-500 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-brand-digital-600/30 transition-all"
        >
          Contact Our Team <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

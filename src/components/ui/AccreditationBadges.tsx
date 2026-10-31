"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, Globe2, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AccreditationBadges({ className }: { className?: string }) {
  return (
    <section className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}>
      {/* Kicker & Title */}
      <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1926A0]/10 border border-[#1926A0]/20 text-[#1926A0] text-xs font-bold uppercase tracking-wider mb-2">
          <span className="w-2 h-2 rounded-full bg-[#63A26B]" />
          Verified Corporate & Government Credentials
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#0E0E25] tracking-tight">
          Enterprise Stability & Licensed Global Trade
        </h2>
      </div>

      {/* 3 Badges in a Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {/* ========================================================================= */}
        {/* BADGE 1: MSME / UDYAM CERTIFIED                                           */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-[#757CB6]/25 hover:border-[#63A26B]/50 transition-all shadow-sm hover:shadow-xl hover:shadow-[#63A26B]/5 group flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              {/* Vector Emblem */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#63A26B]/10 border border-[#63A26B]/30 flex items-center justify-center p-2.5 text-[#63A26B] group-hover:scale-105 transition-transform shrink-0">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  {/* Gear Wheel (Industry) */}
                  <circle cx="32" cy="32" r="26" stroke="#63A26B" strokeWidth="2.5" strokeDasharray="4 2" />
                  <circle cx="32" cy="32" r="21" stroke="#0E0E25" strokeWidth="1.5" />
                  {/* Center Shield */}
                  <path
                    d="M32 14L44 20V32C44 40 38 46 32 49C26 46 20 40 20 32V20L32 14Z"
                    fill="#1926A0"
                    stroke="#FFDB18"
                    strokeWidth="1.5"
                  />
                  {/* Growth Sprout Leaves */}
                  <path
                    d="M32 38C32 38 29 32 25 32C21 32 24 38 27 39C30 40 32 38 32 38Z"
                    fill="#63A26B"
                  />
                  <path
                    d="M32 38C32 38 35 30 40 30C43 30 41 36 38 38C35 39 32 38 32 38Z"
                    fill="#FFDB18"
                  />
                  {/* Central Pillar Stem */}
                  <path d="M32 42V33" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="32" cy="24" r="3" fill="#FFFFFF" />
                </svg>
              </div>

              {/* Status Pill */}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#63A26B]/15 text-[#63A26B] font-bold text-[11px] uppercase tracking-wider border border-[#63A26B]/30">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Govt. Recognized
              </span>
            </div>

            <div className="space-y-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#757CB6] block">
                Ministry of MSME • Govt. of India
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#0E0E25] group-hover:text-[#1926A0] transition-colors leading-snug">
                MSME / Udyam Certified
              </h3>
              <p className="text-xs sm:text-sm text-[#0E0E25]/75 leading-relaxed">
                Formally recognized under the Micro, Small and Medium Enterprises Development Act. Signals government recognition, operational stability, and structured enterprise delivery.
              </p>
            </div>
          </div>

          <div className="pt-4 mt-5 border-t border-[#757CB6]/20 flex items-center justify-between text-xs font-semibold text-[#0E0E25]">
            <span className="flex items-center gap-1.5 text-[#63A26B]">
              <span className="w-2 h-2 rounded-full bg-[#63A26B]" />
              Udyam Registered Enterprise
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BADGE 2: AUTHORIZED IMPORT/EXPORT ENTITY (IEC)                             */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-[#757CB6]/25 hover:border-[#FFDB18] transition-all shadow-sm hover:shadow-xl hover:shadow-[#FFDB18]/10 group flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              {/* Vector Emblem */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#FFDB18]/20 border border-[#FFDB18]/50 flex items-center justify-center p-2.5 text-[#0E0E25] group-hover:scale-105 transition-transform shrink-0">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  {/* Globe Grid */}
                  <circle cx="32" cy="32" r="26" stroke="#1926A0" strokeWidth="2" />
                  <ellipse cx="32" cy="32" rx="13" ry="26" stroke="#757CB6" strokeWidth="1.5" />
                  <line x1="6" y1="32" x2="58" y2="32" stroke="#757CB6" strokeWidth="1.5" />
                  <line x1="12" y1="20" x2="52" y2="20" stroke="#757CB6" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="12" y1="44" x2="52" y2="44" stroke="#757CB6" strokeWidth="1" strokeDasharray="2 2" />
                  {/* Customs Anchor & Compass Wings */}
                  <path
                    d="M32 16V46M24 38C24 43 28 46 32 46C36 46 40 43 40 38M20 28H44"
                    stroke="#FFDB18"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Center Star Clearance Point */}
                  <circle cx="32" cy="20" r="3.5" fill="#FFDB18" stroke="#0E0E25" strokeWidth="1" />
                </svg>
              </div>

              {/* Status Pill */}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFDB18]/25 text-[#0E0E25] font-black text-[11px] uppercase tracking-wider border border-[#FFDB18]/50">
                <Globe2 className="w-3.5 h-3.5 text-[#0E0E25]" />
                DGFT Licensed
              </span>
            </div>

            <div className="space-y-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#757CB6] block">
                Ministry of Commerce & Industry • DGFT
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#0E0E25] group-hover:text-[#1926A0] transition-colors leading-snug">
                Authorized Import/Export Entity
              </h3>
              <p className="text-xs sm:text-sm text-[#0E0E25]/75 leading-relaxed">
                Granted official Import Export Code (IEC) authorization by the Director General of Foreign Trade. Legally certified for cross-border logistics, port customs clearance, and global materials trade.
              </p>
            </div>
          </div>

          <div className="pt-4 mt-5 border-t border-[#757CB6]/20 flex items-center justify-between text-xs font-semibold text-[#0E0E25]">
            <span className="flex items-center gap-1.5 text-[#0E0E25]">
              <span className="w-2 h-2 rounded-full bg-[#FFDB18]" />
              Authorized Foreign Trade Entity
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BADGE 3: PRIVATE LIMITED INCORPORATION                                     */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-[#757CB6]/25 hover:border-[#1926A0]/50 transition-all shadow-sm hover:shadow-xl hover:shadow-[#1926A0]/10 group flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              {/* Vector Emblem */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#1926A0]/10 border border-[#1926A0]/30 flex items-center justify-center p-2.5 text-[#1926A0] group-hover:scale-105 transition-transform shrink-0">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  {/* Corporate Crest Heraldry */}
                  <path
                    d="M32 8L50 16V32C50 44 42 52 32 56C22 52 14 44 14 32V16L32 8Z"
                    fill="#FFFFFF"
                    stroke="#1926A0"
                    strokeWidth="2.5"
                  />
                  {/* Inner Laurel Wreath */}
                  <path
                    d="M24 34C24 38 27 42 32 44C37 42 40 38 40 34"
                    stroke="#FFDB18"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  {/* Pillars of Governance */}
                  <line x1="26" y1="23" x2="26" y2="35" stroke="#1926A0" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="32" y1="21" x2="32" y2="35" stroke="#1926A0" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="38" y1="23" x2="38" y2="35" stroke="#1926A0" strokeWidth="2.5" strokeLinecap="round" />
                  {/* Capital Pediment */}
                  <path d="M22 21H42" stroke="#0E0E25" strokeWidth="2" strokeLinecap="round" />
                  <path d="M20 37H44" stroke="#0E0E25" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="32" cy="15" r="2.5" fill="#FFDB18" />
                </svg>
              </div>

              {/* Status Pill */}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1926A0]/10 text-[#1926A0] font-bold text-[11px] uppercase tracking-wider border border-[#1926A0]/25">
                <Building2 className="w-3.5 h-3.5" />
                Incorporated Company
              </span>
            </div>

            <div className="space-y-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#757CB6] block">
                Ministry of Corporate Affairs (MCA)
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#0E0E25] group-hover:text-[#1926A0] transition-colors leading-snug">
                Incorporated Private Limited
              </h3>
              <p className="text-xs sm:text-sm text-[#0E0E25]/75 leading-relaxed">
                A legally registered corporate entity under the Companies Act 2013. Assures enterprise partners and clients of full corporate compliance, verified GSTIN billing, and audited stability.
              </p>
            </div>
          </div>

          <div className="pt-4 mt-5 border-t border-[#757CB6]/20 flex items-center justify-between text-xs font-semibold text-[#0E0E25]">
            <span className="flex items-center gap-1.5 text-[#1926A0]">
              <span className="w-2 h-2 rounded-full bg-[#1926A0]" />
              Formally Incorporated Private Limited
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}


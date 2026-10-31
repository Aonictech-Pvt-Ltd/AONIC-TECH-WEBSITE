"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export default function Logo({ className, size = 40, showText = true }: LogoProps) {
  const [useCustomImg, setUseCustomImg] = useState(false);

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Logo Emblem Icon - Guaranteed Instant Render */}
      <div 
        className="relative shrink-0 rounded-xl overflow-hidden shadow-lg shadow-brand-digital-500/10 flex items-center justify-center transition-transform group-hover:scale-105"
        style={{ width: size, height: size }}
      >
        {useCustomImg ? (
          <img
            src="/images/logo.png"
            alt="Aonictech Logo"
            width={size}
            height={size}
            className="w-full h-full object-contain"
            onError={() => setUseCustomImg(false)}
          />
        ) : (
          /* Pure Vector Inline Emblem - Zero Network Delay, 100% High-DPI Sharp */
          <svg
            viewBox="0 0 100 100"
            width="100%"
            height="100%"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="navDigital" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
              <linearGradient id="navIndustrial" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
            </defs>

            {/* Background container */}
            <rect width="100" height="100" rx="22" fill="#080c14" />
            <rect
              width="96"
              height="96"
              x="2"
              y="2"
              rx="20"
              stroke="url(#navDigital)"
              strokeWidth="1.5"
              strokeOpacity="0.4"
            />

            {/* Left Digital Pillar of 'A' */}
            <path
              d="M 50 16 L 22 84 L 35 84 L 50 44 Z"
              fill="url(#navDigital)"
            />

            {/* Right Industrial Pillar of 'A' */}
            <path
              d="M 50 16 L 78 84 L 65 84 L 50 44 Z"
              fill="url(#navIndustrial)"
            />

            {/* Center Dynamic Crossbeam */}
            <polygon
              points="33,58 67,58 61,66 39,66"
              fill="#ffffff"
              opacity="0.95"
            />

            {/* Core Synergy Node */}
            <circle cx="50" cy="38" r="4.5" fill="#38bdf8" />
            <circle cx="50" cy="38" r="2.5" fill="#ffffff" />
          </svg>
        )}
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col">
          <span className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-1.5 leading-none">
            AONICTECH
            <span className="w-1.5 h-1.5 rounded-full bg-brand-digital-400 animate-pulse" />
          </span>
          <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-slate-400 mt-1">
            Digital & Industrial
          </span>
        </div>
      )}
    </div>
  );
}

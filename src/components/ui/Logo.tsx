"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  variant?: "light" | "dark";
}

export default function Logo({ 
  className, 
  size = 42, 
  showText = true,
  variant = "light" 
}: LogoProps) {
  const isDark = variant === "dark";

  return (
    <div className={cn("flex items-center gap-2 sm:gap-3", className)}>
      {/* Official Company Circuit Emblem */}
      <div 
        className="relative shrink-0 rounded-xl overflow-hidden p-0.5 flex items-center justify-center transition-transform group-hover:scale-105"
        style={{ width: size, height: size }}
      >
        <img
          src="/images/company-logo-mark.png"
          alt="AONIC TECH Official Logo"
          width={size}
          height={size}
          className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(25,38,160,0.4)]"
          loading="eager"
        />
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col">
          <span 
            className={cn(
              "text-xl sm:text-2xl font-black tracking-tight leading-none transition-colors",
              isDark ? "text-white" : "text-[#0E0E25]"
            )}
          >
            AONIC TECH
          </span>
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.14em] sm:tracking-[0.16em] uppercase text-[#757CB6] mt-0.5 sm:mt-1">
            Digital & Industrial
          </span>
        </div>
      )}
    </div>
  );
}

"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  variant?: "light" | "dark";
  animated?: boolean;
}

/**
 * Official AONIC TECH Brand Logo Component
 * 
 * Unified rendering across Preloader, Header (Navbar), and Footer.
 * 
 * Layout (showText = true):
 *   [Animated Circuit WebP Emblem] + [AONIC TECH text]
 *   This is the SAME visual layout used everywhere — preloader, header, and footer.
 *   When `animated = true`, the letters have a staggered reveal entrance animation.
 *   When `animated = false`, everything renders instantly with no animation.
 * 
 * Emblem-only (showText = false):
 *   [Animated Circuit WebP Emblem] centered, square aspect ratio.
 */
const BRAND_CHARS = ["A", "O", "N", "I", "C", " ", "T", "E", "C", "H"];

export default function Logo({ 
  className, 
  size = 42, 
  showText = true,
  variant = "light",
  animated = false
}: LogoProps) {
  const isDark = variant === "dark";

  // Unified WebP Emblem + Text Layout (used in Preloader, Header, and Footer)
  if (showText) {
    const emblemSize = Math.round(size * 1.45);

    return (
      <div className={cn("flex items-center gap-3 sm:gap-3.5 shrink-0", className)}>
        {/* Animated Circuit WebP Emblem — consistent across all placements */}
        <div 
          className="relative shrink-0 overflow-hidden flex items-center justify-center"
          style={{ width: emblemSize, height: emblemSize }}
        >
          <img
            src="/images/logo-animated.webp"
            alt="AONIC TECH"
            width={emblemSize}
            height={emblemSize}
            className="w-[185%] max-w-none h-auto object-contain shrink-0"
            loading="eager"
            decoding="sync"
          />
        </div>

        {/* Brand Typography — identical layout in all contexts */}
        <span 
          className={cn(
            "text-base sm:text-lg font-black tracking-[0.16em] sm:tracking-[0.20em] leading-none transition-colors inline-flex items-center select-none",
            isDark ? "text-white" : "text-[#0E0E25]"
          )}
        >
          {BRAND_CHARS.map((char, index) => (
            <span
              key={index}
              className="inline-block"
              style={animated ? {
                animation: "letterReveal 420ms cubic-bezier(0.16, 1, 0.3, 1) both",
                animationDelay: `${400 + index * 75}ms`,
              } : undefined}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
      </div>
    );
  }

  // Emblem-only (square, no text) — used where space is tight
  const emblemSize = Math.round(size * 1.2);
  return (
    <div 
      className={cn(
        "relative shrink-0 overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105", 
        className
      )}
      style={{ width: emblemSize, height: emblemSize }}
    >
      <img
        src="/images/logo-animated.webp"
        alt="AONIC TECH Emblem"
        width={emblemSize}
        height={emblemSize}
        className="w-[185%] max-w-none h-auto object-contain shrink-0"
        loading="eager"
        decoding="sync"
      />
    </div>
  );
}

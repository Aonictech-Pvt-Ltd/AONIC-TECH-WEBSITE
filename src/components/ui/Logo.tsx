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
 * - Static Master Lockup (Header Navbar & Footer):
 *   Light (Header): /images/company-logo.png (100% transparent background, Dark Navy text + circuit emblem)
 *   Dark (Footer):  /images/company-logo-white.png (100% transparent background, White text + circuit emblem)
 *   Aspect ratio: 4435 / 1228 = 3.61156
 *   Zero white box / zero border: completely seamless on both white header and #0E0E25 dark navy footer.
 * 
 * - Animated Refresh Intro (used exclusively in Preloader):
 *   /images/logo-animated.webp with circuit draw animation + staggered "AONIC TECH" reveal.
 * 
 * - Emblem-only mark (showText = false):
 *   /images/company-logo-mark.png (1560 x 1560, 100% transparent background)
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

  // Animated Refresh Intro Variant (Used exclusively in Preloader on pure white canvas)
  if (animated) {
    const emblemSize = Math.round(size * 1.45);

    return (
      <div className={cn("flex items-center gap-3.5 sm:gap-4 shrink-0", className)}>
        {/* Animated Circuit WebP - 100% Borderless with multiply blend on white canvas */}
        <div 
          className="relative shrink-0 overflow-hidden flex items-center justify-center"
          style={{ width: emblemSize, height: emblemSize }}
        >
          <img
            src="/images/logo-animated.webp"
            alt="AONIC TECH"
            width={emblemSize}
            height={emblemSize}
            className="w-[185%] max-w-none h-auto object-contain shrink-0 mix-blend-multiply"
            loading="eager"
            decoding="sync"
          />
        </div>

        {/* Staggered Letter-by-Letter Typography */}
        {showText && (
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
                style={{
                  animation: "letterReveal 420ms cubic-bezier(0.16, 1, 0.3, 1) both",
                  animationDelay: `${400 + index * 75}ms`,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        )}
      </div>
    );
  }

  // Official master horizontal lockup with 100% transparent background (Aspect ratio: 4435 / 1228 = 3.61156)
  // Perfectly seamless in Header (light) and Footer (dark) — zero white box, zero sticker effect
  if (showText) {
    const width = Math.round(size * 3.61156);
    return (
      <div 
        className={cn(
          "relative shrink-0 flex items-center transition-transform group-hover:scale-[1.02]", 
          className
        )}
        style={{ height: size, width }}
      >
        <img
          src={isDark ? "/images/company-logo-white.png" : "/images/company-logo.png"}
          alt="AONIC TECH"
          width={width}
          height={size}
          className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(25,38,160,0.25)]"
          loading="eager"
          decoding="sync"
        />
      </div>
    );
  }

  // Official master emblem mark (1:1 square, 100% transparent background)
  return (
    <div 
      className={cn(
        "relative shrink-0 flex items-center justify-center transition-transform group-hover:scale-105", 
        className
      )}
      style={{ width: size, height: size }}
    >
      <img
        src="/images/company-logo-mark.png"
        alt="AONIC TECH Emblem"
        width={size}
        height={size}
        className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(25,38,160,0.35)]"
        loading="eager"
        decoding="sync"
      />
    </div>
  );
}

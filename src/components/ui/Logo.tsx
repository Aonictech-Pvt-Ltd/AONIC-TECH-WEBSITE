"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  variant?: "light" | "dark";
}

/**
 * Official AONIC TECH Brand Logo Component
 * 
 * Powered by high-resolution master assets:
 * - Horizontal Logo (emblem + brand typography):
 *   Light: /images/company-logo.png
 *   Dark:  /images/company-logo-white.png
 *   Aspect ratio: 4435 / 1228 = 3.61156
 * - Square Emblem Mark (circuits & node matrix):
 *   /images/company-logo-mark.png (1560 x 1560)
 */
export default function Logo({ 
  className, 
  size = 42, 
  showText = true,
  variant = "light" 
}: LogoProps) {
  const isDark = variant === "dark";

  // Official master horizontal lockup (Aspect ratio: 4435 / 1228 = 3.61156)
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

  // Official master emblem mark (1:1 square)
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

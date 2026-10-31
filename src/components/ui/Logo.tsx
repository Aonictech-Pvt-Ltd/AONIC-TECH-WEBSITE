"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export default function Logo({ className, size = 40, showText = true }: LogoProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Logo Emblem */}
      <div 
        className="relative shrink-0 rounded-xl overflow-hidden shadow-lg transition-transform"
        style={{ width: size, height: size }}
      >
        {!imgError ? (
          <img
            src="/images/logo.png"
            alt="Aonictech Logo"
            width={size}
            height={size}
            className="w-full h-full object-contain"
            onError={() => {
              // Try svg if png is missing
              setImgError(true);
            }}
          />
        ) : (
          <img
            src="/images/logo.svg"
            alt="Aonictech Logo Emblem"
            width={size}
            height={size}
            className="w-full h-full object-contain"
          />
        )}
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col">
          <span className="text-xl font-black tracking-tight text-white flex items-center gap-1.5 leading-none">
            AONICTECH
            <span className="w-1.5 h-1.5 rounded-full bg-brand-digital-400 animate-pulse" />
          </span>
          <span className="text-[10px] font-semibold tracking-widest uppercase text-slate-400 mt-1">
            Digital & Industrial
          </span>
        </div>
      )}
    </div>
  );
}

"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export default function Preloader() {
  // Stages:
  // 1. "logo-center": Logo alone in dead center
  // 2. "reveal-name": Logo shifts a bit left and brand name opens to its right
  // 3. "glide-to-header": Complete logo + name unit glides to top-left in the header
  // 4. "done": Unmounted
  const [stage, setStage] = useState<"logo-center" | "reveal-name" | "glide-to-header" | "done">("logo-center");
  const [glideCoords, setGlideCoords] = useState<{ x: number; y: number; scale: number } | null>(null);
  const brandUnitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Step 1: Wait 300ms showing logo alone, then shift left & open name
    const tReveal = setTimeout(() => {
      setStage("reveal-name");
    }, 300);

    // Step 2: At 850ms, glide the assembled brand unit from center to top-left header
    const tGlide = setTimeout(() => {
      const navTarget = document.getElementById("navbar-brand-logo");
      const currentUnit = brandUnitRef.current;

      if (navTarget && currentUnit) {
        const targetRect = navTarget.getBoundingClientRect();
        const currentRect = currentUnit.getBoundingClientRect();

        const deltaX = targetRect.left - currentRect.left;
        const deltaY = targetRect.top - currentRect.top;
        const scale = targetRect.height / currentRect.height || 1;

        setGlideCoords({ x: deltaX, y: deltaY, scale });
      } else {
        // Fallback coordinates if navbar hasn't finished layout
        setGlideCoords({
          x: -(window.innerWidth / 2) + 90,
          y: -(window.innerHeight / 2) + 36,
          scale: 0.9,
        });
      }

      setStage("glide-to-header");
    }, 850);

    // Step 3: Complete transition and cleanly unmount at 1350ms
    const tDone = setTimeout(() => {
      setStage("done");
    }, 1350);

    return () => {
      clearTimeout(tReveal);
      clearTimeout(tGlide);
      clearTimeout(tDone);
    };
  }, []);

  if (stage === "done") {
    return null;
  }

  const isNameRevealed = stage === "reveal-name" || stage === "glide-to-header";
  const isGliding = stage === "glide-to-header";

  return (
    <div
      className={cn(
        "fixed inset-0 z-[9999] pointer-events-none transition-opacity duration-450 ease-out select-none",
        isGliding ? "opacity-0" : "opacity-100"
      )}
    >
      {/* Background Curtain Overlay */}
      <div className="absolute inset-0 bg-brand-dark-950 pointer-events-auto" />

      {/* Atmospheric Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-digital-500/20 rounded-full blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-industrial-500/15 rounded-full blur-[90px] pointer-events-none" />

      {/* Centered Staging Area */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        {/* The Master Brand Unit that glides to top-left */}
        <div
          ref={brandUnitRef}
          style={
            isGliding && glideCoords
              ? {
                  transform: `translate3d(${glideCoords.x}px, ${glideCoords.y}px, 0) scale(${glideCoords.scale})`,
                  transformOrigin: "top left",
                  transition: "transform 500ms cubic-bezier(0.16, 1, 0.3, 1), opacity 450ms ease-out",
                }
              : {
                  transform: "translate3d(0, 0, 0) scale(1)",
                  transition: "transform 500ms cubic-bezier(0.16, 1, 0.3, 1)",
                }
          }
          className="relative flex items-center z-10 transition-all duration-400 ease-out"
        >
          {/* Logo Emblem (Solo at first in dead center, shifts left as name expands) */}
          <div className="relative shrink-0 flex items-center justify-center">
            {/* Spinning Halo Glow */}
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-brand-digital-500 via-sky-400 to-brand-industrial-500 opacity-70 blur-sm animate-spin duration-1000" />
            
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-brand-dark-950 p-[2px] shadow-2xl border border-white/10 flex items-center justify-center overflow-hidden">
              <img
                src="/images/logo.png"
                alt="Aonictech Logo"
                className="w-full h-full object-contain p-1"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/images/logo.svg";
                }}
              />
            </div>
          </div>

          {/* Company Name Opening to the Right */}
          <div
            className={cn(
              "overflow-hidden transition-all duration-400 ease-out flex flex-col justify-center",
              isNameRevealed
                ? "max-w-[300px] sm:max-w-[360px] opacity-100 ml-3.5"
                : "max-w-0 opacity-0 ml-0"
            )}
          >
            <div className="whitespace-nowrap pr-2">
              <span className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-1.5 leading-none">
                AONICTECH
                <span className="w-1.5 h-1.5 rounded-full bg-brand-digital-400 animate-pulse" />
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.22em] uppercase text-slate-400 block mt-1">
                Digital & Industrial
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

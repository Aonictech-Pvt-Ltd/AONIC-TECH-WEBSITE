"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export default function Preloader() {
  // Stages:
  // 1. "solo-center": Only the logo in the dead center (fade & scale in)
  // 2. "reveal-name": Logo glides gently to the left while "AONICTECH" unfolds to the right
  // 3. "pause": Brief absorption beat with the full brand assembled in center
  // 4. "glide-to-header": Whole assembled mark glides to the top-left header
  // 5. "done": Clean unmount
  const [stage, setStage] = useState<"solo-center" | "reveal-name" | "glide-to-header" | "done">("solo-center");
  const [targetOffset, setTargetOffset] = useState<{ x: number; y: number; scale: number } | null>(null);
  
  const stageRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Give the viewer time to take in the solo centered logo (0 to 750ms)
    const t1 = setTimeout(() => {
      setStage("reveal-name");
    }, 750);

    // 2. After name is fully revealed and held (at 2100ms), begin smooth flight to header
    const t2 = setTimeout(() => {
      const navTarget = document.getElementById("navbar-brand-logo");
      const currentUnit = stageRef.current;

      if (navTarget && currentUnit) {
        const navRect = navTarget.getBoundingClientRect();
        const curRect = currentUnit.getBoundingClientRect();

        // Calculate exact translate vector from center stage to navbar position
        const deltaX = navRect.left - curRect.left;
        const deltaY = navRect.top - curRect.top;
        const scaleRatio = navRect.height / curRect.height || 0.88;

        setTargetOffset({ x: deltaX, y: deltaY, scale: scaleRatio });
      } else {
        // Fallback offset if navbar isn't mounted yet
        setTargetOffset({
          x: -(window.innerWidth / 2) + 90,
          y: -(window.innerHeight / 2) + 36,
          scale: 0.88,
        });
      }

      setStage("glide-to-header");
    }, 2100);

    // 3. Complete and unmount after the flight lands smoothly (at 3300ms)
    const t3 = setTimeout(() => {
      setStage("done");
    }, 3300);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (stage === "done") {
    return null;
  }

  const isRevealed = stage === "reveal-name" || stage === "glide-to-header";
  const isGliding = stage === "glide-to-header";

  return (
    <div
      className={cn(
        "fixed inset-0 z-[9999] pointer-events-none select-none",
        isGliding ? "opacity-0" : "opacity-100"
      )}
      style={{
        transition: "opacity 900ms cubic-bezier(0.4, 0, 0.2, 1)",
        willChange: "opacity",
      }}
    >
      {/* Deep Obsidian Background Backdrop */}
      <div className="absolute inset-0 bg-[#06090e] pointer-events-auto" />

      {/* Atmospheric Cinematic Ambient Glows */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-digital-500/12 rounded-full blur-[140px] pointer-events-none"
        style={{
          animation: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        }}
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-brand-industrial-500/10 rounded-full blur-[130px] pointer-events-none" 
      />

      {/* Full-Viewport Staging Wrapper */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        {/* Master Brand Container (Flies to top-left on Phase 3) */}
        <div
          ref={stageRef}
          style={
            isGliding && targetOffset
              ? {
                  transform: `translate3d(${targetOffset.x}px, ${targetOffset.y}px, 0) scale(${targetOffset.scale})`,
                  transformOrigin: "top left",
                  transition: "transform 1100ms cubic-bezier(0.22, 1, 0.36, 1)",
                  willChange: "transform",
                  backfaceVisibility: "hidden",
                }
              : {
                  transform: "translate3d(0, 0, 0) scale(1)",
                  transition: "transform 1100ms cubic-bezier(0.22, 1, 0.36, 1)",
                  willChange: "transform",
                  backfaceVisibility: "hidden",
                }
          }
          className="relative flex items-center z-10"
        >
          {/* Logo Emblem: In Phase 1, centered alone; in Phase 2, shifts smoothly left */}
          <div
            ref={logoRef}
            className="relative shrink-0 flex items-center justify-center"
            style={{
              transition: "transform 950ms cubic-bezier(0.16, 1, 0.3, 1)",
              willChange: "transform",
            }}
          >
            {/* Subtle Radiant Halo */}
            <div 
              className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-brand-digital-500/60 via-sky-400/40 to-brand-industrial-500/60 blur-md opacity-70"
              style={{
                animation: "spin 12s linear infinite",
              }}
            />

            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#080c14] p-[2px] shadow-2xl border border-white/15 flex items-center justify-center overflow-hidden">
              <img
                src="/images/logo.png"
                alt="Aonictech Logo"
                className="w-full h-full object-contain p-1.5"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/images/logo.svg";
                }}
              />
            </div>
          </div>

          {/* Name & Subtitle: Smoothly expands & unveils to the right */}
          <div
            className="overflow-hidden flex flex-col justify-center"
            style={{
              maxWidth: isRevealed ? "360px" : "0px",
              opacity: isRevealed ? 1 : 0,
              marginLeft: isRevealed ? "16px" : "0px",
              transition: "max-width 950ms cubic-bezier(0.16, 1, 0.3, 1), opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) 150ms, margin-left 950ms cubic-bezier(0.16, 1, 0.3, 1)",
              willChange: "max-width, opacity, margin-left",
            }}
          >
            <div 
              className="whitespace-nowrap pr-2"
              style={{
                transform: isRevealed ? "translate3d(0, 0, 0)" : "translate3d(-24px, 0, 0)",
                transition: "transform 900ms cubic-bezier(0.16, 1, 0.3, 1) 100ms",
                willChange: "transform",
              }}
            >
              <span className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-2 leading-none">
                AONICTECH
                <span className="w-1.5 h-1.5 rounded-full bg-brand-digital-400 animate-pulse" />
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.24em] uppercase text-slate-400 block mt-1.5">
                Digital & Industrial
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

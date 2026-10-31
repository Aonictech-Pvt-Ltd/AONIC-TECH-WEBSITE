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
      {/* Deep Obsidian Background Backdrop (#0E0E25 Dark Navy) */}
      <div className="absolute inset-0 bg-[#0E0E25] pointer-events-auto" />

      {/* Atmospheric Cinematic Ambient Glows */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#1926A0]/20 rounded-full blur-[140px] pointer-events-none"
        style={{
          animation: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        }}
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#FFDB18]/15 rounded-full blur-[130px] pointer-events-none" 
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#757CB6]/15 rounded-full blur-[100px] pointer-events-none" 
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
            {/* Radiant Halo using user's Royal Blue, Lavender & Yellow */}
            <div 
              className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-[#1926A0]/70 via-[#757CB6]/50 to-[#FFDB18]/70 blur-md opacity-80"
              style={{
                animation: "spin 12s linear infinite",
              }}
            />

            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#0E0E25] p-2 shadow-2xl border border-[#757CB6]/40 flex items-center justify-center overflow-hidden">
              <img
                src="/images/company-logo-mark.png"
                alt="Aonictech Official Logo Emblem"
                className="w-full h-full object-contain filter drop-shadow-[0_4px_16px_rgba(25,38,160,0.6)]"
                loading="eager"
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
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFDB18] shadow-sm shadow-[#FFDB18] animate-pulse" />
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.24em] uppercase text-[#757CB6] block mt-1.5">
                Digital & Industrial
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

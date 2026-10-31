"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export default function Preloader() {
  // Stages:
  // 1. "solo-center": Grand circuit emblem prominently displayed in center of screen
  // 2. "reveal-name": Emblem glides gently left as "AONICTECH" unfolds to the right
  // 3. "glide-to-header": Assembled brand mark glides smoothly into the navbar header position
  // 4. "done": Clean unmount after handoff
  const [stage, setStage] = useState<"solo-center" | "reveal-name" | "glide-to-header" | "done">("solo-center");
  const [targetOffset, setTargetOffset] = useState<{ x: number; y: number; scale: number } | null>(null);
  
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Give the viewer time to absorb the grand centered emblem (900ms)
    const t1 = setTimeout(() => {
      setStage("reveal-name");
    }, 900);

    // 2. After brand mark is assembled and held (at 2300ms), calculate precise coordinates and start glide
    const t2 = setTimeout(() => {
      const navTarget = document.getElementById("navbar-brand-logo");
      const currentUnit = stageRef.current;

      if (navTarget && currentUnit) {
        const navRect = navTarget.getBoundingClientRect();
        const curRect = currentUnit.getBoundingClientRect();

        // Exact translate vector from center stage to navbar position
        const deltaX = navRect.left - curRect.left;
        const deltaY = navRect.top - curRect.top;
        const scaleRatio = navRect.height > 0 && curRect.height > 0
          ? navRect.height / curRect.height
          : 0.35;

        setTargetOffset({ x: deltaX, y: deltaY, scale: scaleRatio });
      } else {
        // Fallback offset if navbar isn't mounted yet
        setTargetOffset({
          x: -(window.innerWidth / 2) + 90,
          y: -(window.innerHeight / 2) + 36,
          scale: 0.35,
        });
      }

      setStage("glide-to-header");
    }, 2300);

    // 3. Complete glide, notify Navbar to reveal static logo, and unmount
    const t3 = setTimeout(() => {
      if (typeof window !== "undefined") {
        (window as any).__AONIC_PRELOADED__ = true;
        window.dispatchEvent(new Event("aonic-preloader-docked"));
      }
      setStage("done");
    }, 3550);

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
    <div className="fixed inset-0 z-[9999] pointer-events-none select-none">
      {/* 
        Ultra-Clean White Theme Backdrop (#FFFFFF)
        Smoothly fades out over 1000ms during glide, revealing the website underneath 
      */}
      <div 
        className={cn(
          "absolute inset-0 bg-white transition-opacity duration-1000 ease-out",
          isGliding ? "opacity-0" : "opacity-100"
        )}
      />

      {/* Atmospheric Ambient Glows (#1926A0 Royal Blue, #FFDB18 Yellow & #757CB6 Lavender) */}
      <div 
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[850px] h-[650px] sm:h-[850px] bg-[#1926A0]/12 rounded-full blur-[160px] pointer-events-none transition-opacity duration-700",
          isGliding ? "opacity-0" : "opacity-100"
        )}
      />
      <div 
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[650px] h-[500px] sm:h-[650px] bg-[#FFDB18]/15 rounded-full blur-[140px] pointer-events-none transition-opacity duration-700",
          isGliding ? "opacity-0" : "opacity-100"
        )}
      />
      <div 
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-[#757CB6]/15 rounded-full blur-[110px] pointer-events-none transition-opacity duration-700",
          isGliding ? "opacity-0" : "opacity-100"
        )}
      />

      {/* Full-Viewport Staging Wrapper */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        {/* Master Brand Container that glides smoothly into the navbar */}
        <div
          ref={stageRef}
          style={
            isGliding && targetOffset
              ? {
                  transform: `translate3d(${targetOffset.x}px, ${targetOffset.y}px, 0) scale(${targetOffset.scale})`,
                  transformOrigin: "0 0",
                  transition: "transform 1200ms cubic-bezier(0.16, 1, 0.3, 1)",
                  willChange: "transform",
                  backfaceVisibility: "hidden",
                }
              : {
                  transform: "translate3d(0, 0, 0) scale(1)",
                  transformOrigin: "0 0",
                  transition: "transform 1200ms cubic-bezier(0.16, 1, 0.3, 1)",
                  willChange: "transform",
                  backfaceVisibility: "hidden",
                }
          }
          className="relative flex items-center z-10"
        >
          {/* Logo Emblem: Sized prominently (120px to 144px) with high visual authority */}
          <div
            className="relative shrink-0 flex items-center justify-center"
            style={{
              transition: "transform 900ms cubic-bezier(0.16, 1, 0.3, 1)",
              willChange: "transform",
            }}
          >
            {/* Radiant Ambient Aura behind emblem */}
            <div 
              className={cn(
                "absolute -inset-4 sm:-inset-6 rounded-3xl bg-gradient-to-r from-[#1926A0]/25 via-[#757CB6]/30 to-[#FFDB18]/30 blur-xl transition-opacity duration-500",
                isGliding ? "opacity-0" : "opacity-100"
              )}
            />

            {/* Emblem Card Container: Prominent size for impactful first impression */}
            <div 
              className={cn(
                "relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-3xl p-3 sm:p-4 flex items-center justify-center transition-all duration-700 overflow-hidden",
                isGliding 
                  ? "bg-transparent border-transparent shadow-none" 
                  : "bg-white shadow-2xl shadow-[#1926A0]/15 border-2 border-[#757CB6]/30"
              )}
            >
              <img
                src="/images/company-logo-mark.png"
                alt="Aonictech Official Logo Emblem"
                className="w-full h-full object-contain filter drop-shadow-[0_4px_16px_rgba(25,38,160,0.3)]"
                loading="eager"
              />
            </div>
          </div>

          {/* Name & Subtitle: Smoothly expands & unveils to the right in high scale */}
          <div
            className="overflow-hidden flex flex-col justify-center"
            style={{
              maxWidth: isRevealed ? "650px" : "0px",
              opacity: isRevealed ? 1 : 0,
              marginLeft: isRevealed ? "24px" : "0px",
              transition: "max-width 950ms cubic-bezier(0.16, 1, 0.3, 1), opacity 750ms cubic-bezier(0.16, 1, 0.3, 1) 120ms, margin-left 950ms cubic-bezier(0.16, 1, 0.3, 1)",
              willChange: "max-width, opacity, margin-left",
            }}
          >
            <div 
              className="whitespace-nowrap pr-4"
              style={{
                transform: isRevealed ? "translate3d(0, 0, 0)" : "translate3d(-30px, 0, 0)",
                transition: "transform 900ms cubic-bezier(0.16, 1, 0.3, 1) 100ms",
                willChange: "transform",
              }}
            >
              <span className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#0E0E25] flex items-center gap-2 sm:gap-3 leading-none">
                AONICTECH
                <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#FFDB18] shadow-md shadow-[#FFDB18] animate-pulse" />
              </span>
              <span className="text-xs sm:text-base md:text-lg font-bold tracking-[0.24em] uppercase text-[#757CB6] block mt-2 sm:mt-3">
                Digital & Industrial
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

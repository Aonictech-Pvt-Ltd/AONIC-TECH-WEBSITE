"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export default function Preloader() {
  // Stages:
  // 1. "solo-center": Only the official circuit emblem alone in center of screen
  // 2. "reveal-name": Emblem glides gently left as "AONICTECH" unfolds to the right
  // 3. "glide-to-header": Assembled brand mark glides smoothly into the navbar header position
  // 4. "done": Clean unmount after handoff
  const [stage, setStage] = useState<"solo-center" | "reveal-name" | "glide-to-header" | "done">("solo-center");
  const [targetOffset, setTargetOffset] = useState<{ x: number; y: number; scale: number } | null>(null);
  
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Give the viewer time to see the solo emblem in center (850ms)
    const t1 = setTimeout(() => {
      setStage("reveal-name");
    }, 850);

    // 2. After brand mark is assembled and absorbed (at 2200ms), calculate precise coordinates and start glide
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
          : 0.88;

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
    }, 2200);

    // 3. Complete glide, notify Navbar to reveal static logo, and unmount
    const t3 = setTimeout(() => {
      if (typeof window !== "undefined") {
        (window as any).__AONIC_PRELOADED__ = true;
        window.dispatchEvent(new Event("aonic-preloader-docked"));
      }
      setStage("done");
    }, 3450);

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
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#1926A0]/10 rounded-full blur-[140px] pointer-events-none transition-opacity duration-700",
          isGliding ? "opacity-0" : "opacity-100"
        )}
      />
      <div 
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#FFDB18]/15 rounded-full blur-[130px] pointer-events-none transition-opacity duration-700",
          isGliding ? "opacity-0" : "opacity-100"
        )}
      />
      <div 
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#757CB6]/15 rounded-full blur-[100px] pointer-events-none transition-opacity duration-700",
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
          {/* Logo Emblem: In Phase 1, centered alone; in Phase 2, shifts smoothly left */}
          <div
            className="relative shrink-0 flex items-center justify-center"
            style={{
              transition: "transform 900ms cubic-bezier(0.16, 1, 0.3, 1)",
              willChange: "transform",
            }}
          >
            {/* Soft Ambient Ring during staging */}
            <div 
              className={cn(
                "absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#1926A0]/20 via-[#757CB6]/20 to-[#FFDB18]/25 blur-sm transition-opacity duration-500",
                isGliding ? "opacity-0" : "opacity-100"
              )}
            />

            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white p-1 shadow-md border border-[#757CB6]/30 flex items-center justify-center overflow-hidden">
              <img
                src="/images/company-logo-mark.png"
                alt="Aonictech Official Logo Emblem"
                className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(25,38,160,0.35)]"
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
              marginLeft: isRevealed ? "12px" : "0px",
              transition: "max-width 900ms cubic-bezier(0.16, 1, 0.3, 1), opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) 120ms, margin-left 900ms cubic-bezier(0.16, 1, 0.3, 1)",
              willChange: "max-width, opacity, margin-left",
            }}
          >
            <div 
              className="whitespace-nowrap pr-2"
              style={{
                transform: isRevealed ? "translate3d(0, 0, 0)" : "translate3d(-20px, 0, 0)",
                transition: "transform 850ms cubic-bezier(0.16, 1, 0.3, 1) 100ms",
                willChange: "transform",
              }}
            >
              <span className="text-xl sm:text-2xl font-black tracking-tight text-[#0E0E25] flex items-center gap-1.5 leading-none">
                AONICTECH
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFDB18] shadow-sm shadow-[#FFDB18] animate-pulse" />
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.16em] uppercase text-[#757CB6] block mt-1">
                Digital & Industrial
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

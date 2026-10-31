"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export default function Preloader() {
  const [mounted, setMounted] = useState(false);
  const [stage, setStage] = useState<"solo-center" | "reveal-name" | "glide-to-header" | "fading" | "done">("solo-center");
  const [isMobile, setIsMobile] = useState(false);
  const [coords, setCoords] = useState<{
    centerX: number;
    centerY: number;
    centerScale: number;
    targetX: number;
    targetY: number;
  } | null>(null);

  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mount on client on every load/refresh
    setMounted(true);
    const mobile = window.innerWidth < 640;
    setIsMobile(mobile);

    // Give DOM a frame to compute layout
    const initTimer = setTimeout(() => {
      const navTarget = document.getElementById("navbar-brand-logo");
      const currentUnit = stageRef.current;

      if (navTarget && currentUnit) {
        const navRect = navTarget.getBoundingClientRect();
        const curRect = currentUnit.getBoundingClientRect();
        const centerScale = mobile ? 1.75 : 2.2;
        const emblemSize = mobile ? 36 : 42;

        // Position emblem dead center of screen initially
        const centerX = (window.innerWidth - emblemSize * centerScale) / 2 - curRect.left;
        const centerY = (window.innerHeight - emblemSize * centerScale) / 2 - curRect.top;

        // Destination at navbar logo position
        const targetX = navRect.left - curRect.left;
        const targetY = navRect.top - curRect.top;

        setCoords({
          centerX,
          centerY,
          centerScale,
          targetX,
          targetY,
        });
      }
    }, 50);

    // Stage 1: Reveal Brand Name alongside center emblem
    const t1 = setTimeout(() => {
      setStage("reveal-name");
    }, 850);

    // Stage 2: Glide smoothly directly to header
    const t2 = setTimeout(() => {
      setStage("glide-to-header");
    }, 2050);

    // Stage 3: Perfectly docked, smoothly fade out preloader overlay
    const t3 = setTimeout(() => {
      setStage("fading");
    }, 3250);

    // Stage 4: Clean unmount after seamless handoff
    const t4 = setTimeout(() => {
      setStage("done");
    }, 3600);

    return () => {
      clearTimeout(initTimer);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  if (!mounted || stage === "done") {
    return null;
  }

  const isRevealed = stage === "reveal-name" || stage === "glide-to-header" || stage === "fading";
  const isGliding = stage === "glide-to-header" || stage === "fading";
  const emblemSize = isMobile ? 36 : 42;

  // Determine transform based on stage
  let transformStyle = "translate3d(0, 0, 0) scale(1)";
  if (coords) {
    if (isGliding) {
      transformStyle = `translate3d(${coords.targetX}px, ${coords.targetY}px, 0) scale(1)`;
    } else {
      transformStyle = `translate3d(${coords.centerX}px, ${coords.centerY}px, 0) scale(${coords.centerScale})`;
    }
  }

  return (
    <div
      id="aonic-preloader-root"
      className={cn(
        "fixed inset-0 z-[9999] pointer-events-none select-none transition-opacity duration-300",
        stage === "fading" ? "opacity-0" : "opacity-100"
      )}
    >
      {/* 
        Pure White Canvas (#FFFFFF)
        Smoothly fades out during glide, unveiling the live site beneath 
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
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[650px] lg:w-[850px] h-[320px] sm:h-[650px] lg:h-[850px] bg-[#1926A0]/15 rounded-full blur-[90px] sm:blur-[160px] pointer-events-none transition-opacity duration-700",
          isGliding ? "opacity-0" : "opacity-100"
        )}
      />
      <div
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[500px] lg:w-[650px] h-[280px] sm:h-[500px] lg:h-[650px] bg-[#FFDB18]/15 rounded-full blur-[80px] sm:blur-[140px] pointer-events-none transition-opacity duration-700",
          isGliding ? "opacity-0" : "opacity-100"
        )}
      />
      <div
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] sm:w-[400px] lg:w-[500px] h-[240px] sm:h-[400px] lg:h-[500px] bg-[#757CB6]/15 rounded-full blur-[70px] sm:blur-[110px] pointer-events-none transition-opacity duration-700",
          isGliding ? "opacity-0" : "opacity-100"
        )}
      />

      {/* Staging Anchor */}
      <div className="fixed inset-0 pointer-events-none">
        {/* 
          Master Brand Unit
          Glides seamlessly and lands with pixel-level precision on top of the navbar logo
        */}
        <div
          ref={stageRef}
          style={{
            transform: transformStyle,
            transformOrigin: "0 0",
            transition: isGliding
              ? "transform 1150ms cubic-bezier(0.16, 1, 0.3, 1)"
              : "transform 800ms cubic-bezier(0.16, 1, 0.3, 1)",
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
          className={cn(
            "absolute top-0 left-0 flex items-center",
            isMobile ? "gap-2" : "gap-3"
          )}
        >
          {/* Emblem Container: Exact match with Logo.tsx */}
          <div
            className="relative shrink-0 rounded-xl overflow-hidden p-0.5 flex items-center justify-center"
            style={{ width: emblemSize, height: emblemSize }}
          >
            {/* Radiant Ambient Aura behind emblem */}
            <div
              className={cn(
                "absolute -inset-2.5 rounded-2xl bg-gradient-to-r from-[#1926A0]/30 via-[#757CB6]/35 to-[#FFDB18]/35 blur-md transition-opacity duration-500",
                isGliding ? "opacity-0" : "opacity-100"
              )}
            />

            <img
              src="/images/company-logo-mark.png"
              alt="Aonictech Official Logo"
              width={emblemSize}
              height={emblemSize}
              className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(25,38,160,0.4)] relative z-10"
              loading="eager"
            />
          </div>

          {/* Brand Text: Exact match with Logo.tsx */}
          <div
            className="overflow-hidden flex flex-col justify-center"
            style={{
              maxWidth: isRevealed ? "320px" : "0px",
              opacity: isRevealed ? 1 : 0,
              transition: "max-width 800ms cubic-bezier(0.16, 1, 0.3, 1), opacity 650ms cubic-bezier(0.16, 1, 0.3, 1) 80ms",
              willChange: "max-width, opacity",
            }}
          >
            <div className="whitespace-nowrap flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight leading-none text-[#0E0E25] flex items-center gap-1.5">
                AONICTECH
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FFDB18] shadow-sm shadow-[#FFDB18] animate-pulse shrink-0" />
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.14em] sm:tracking-[0.16em] uppercase text-[#757CB6] mt-0.5 sm:mt-1">
                Digital & Industrial
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

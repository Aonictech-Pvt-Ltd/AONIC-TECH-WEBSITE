"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/Logo";

export default function Preloader() {
  const [stage, setStage] = useState<"center" | "gliding" | "docked" | "done">("center");
  const [targetCoords, setTargetCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const gliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reset scroll to top on fresh load/refresh
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }

    // Schedule glide to header at 1100ms
    const glideTimer = setTimeout(() => {
      const navTarget = document.getElementById("navbar-brand-logo");
      if (navTarget) {
        const navRect = navTarget.getBoundingClientRect();
        // Calculate translation needed from screen center to navbar logo center
        const targetX = (navRect.left + navRect.width / 2) - (window.innerWidth / 2);
        const targetY = (navRect.top + navRect.height / 2) - (window.innerHeight / 2);

        setTargetCoords({ x: targetX, y: targetY });
        setStage("gliding");
      } else {
        // Fallback: if navbar logo is not found, fade out cleanly
        setStage("docked");
        window.dispatchEvent(new CustomEvent("aonic-preloader-docked"));
      }
    }, 1100);

    // Schedule docking complete at 2150ms (1100ms + 1050ms glide)
    const dockTimer = setTimeout(() => {
      setStage("docked");
      window.dispatchEvent(new CustomEvent("aonic-preloader-docked"));
    }, 2150);

    // Schedule complete unmount at 2350ms
    const finishTimer = setTimeout(() => {
      setStage("done");
    }, 2350);

    return () => {
      clearTimeout(glideTimer);
      clearTimeout(dockTimer);
      clearTimeout(finishTimer);
    };
  }, []);

  if (stage === "done") {
    return null;
  }

  const isGliding = stage === "gliding" || stage === "docked";

  return (
    <div
      id="aonic-preloader-root"
      className={cn(
        "fixed inset-0 z-[9999] select-none transition-opacity duration-300",
        stage === "docked" ? "opacity-0 pointer-events-none" : "opacity-100",
        isGliding ? "pointer-events-none" : "pointer-events-auto"
      )}
    >
      {/* 
        Pure White Canvas (#FFFFFF)
        Covers the page during intro, smoothly fades out during glide revealing the website
      */}
      <div
        className={cn(
          "absolute inset-0 bg-white transition-opacity duration-700 ease-out",
          isGliding ? "opacity-0" : "opacity-100"
        )}
      />

      {/* Atmospheric Brand Glows (#1926A0 Royal Blue, #FFDB18 Yellow & #757CB6 Lavender) */}
      <div
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[#1926A0]/15 rounded-full blur-[90px] sm:blur-[150px] pointer-events-none transition-opacity duration-700",
          isGliding ? "opacity-0" : "opacity-100"
        )}
      />
      <div
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] sm:w-[480px] h-[260px] sm:h-[480px] bg-[#FFDB18]/15 rounded-full blur-[80px] sm:blur-[130px] pointer-events-none transition-opacity duration-700",
          isGliding ? "opacity-0" : "opacity-100"
        )}
      />
      <div
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[380px] h-[220px] sm:h-[380px] bg-[#757CB6]/15 rounded-full blur-[70px] sm:blur-[100px] pointer-events-none transition-opacity duration-700",
          isGliding ? "opacity-0" : "opacity-100"
        )}
      />

      {/* Flexbox Centering Stage */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        {/* 
          Master Brand Unit
          Starts dead center, then glides with high precision into the navbar logo spot
        */}
        <div
          ref={gliderRef}
          style={{
            transform: isGliding
              ? `translate3d(${targetCoords.x}px, ${targetCoords.y}px, 0) scale(1)`
              : "translate3d(0, 0, 0) scale(var(--logo-intro-scale, 1.4))",
            transformOrigin: "center center",
            transition: stage === "gliding"
              ? "transform 1050ms cubic-bezier(0.16, 1, 0.3, 1)"
              : "none",
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
          className="relative flex items-center shrink-0"
        >
          {/* Radiant Ambient Aura behind emblem in center */}
          <div
            className={cn(
              "absolute -inset-4 rounded-2xl bg-gradient-to-r from-[#1926A0]/25 via-[#757CB6]/30 to-[#FFDB18]/25 blur-xl pointer-events-none transition-opacity duration-500",
              isGliding ? "opacity-0" : "opacity-100"
            )}
          />

          {/* Exact responsive Logo instances matching Navbar.tsx */}
          <Logo size={36} variant="light" className="sm:hidden" />
          <Logo size={42} variant="light" className="hidden sm:flex" />
        </div>
      </div>
    </div>
  );
}

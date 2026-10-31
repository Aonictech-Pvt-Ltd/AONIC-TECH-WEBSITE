"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export default function Preloader() {
  const [phase, setPhase] = useState<"center" | "expand" | "glide" | "done">("center");
  const [targetPos, setTargetPos] = useState<{ x: number; y: number; scale: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Phase 1: Fast Name Expand from Logo (at 150ms)
    const tExpand = setTimeout(() => {
      setPhase("expand");
    }, 150);

    // Phase 2: Start Glide towards Top-Left Navbar (at 650ms)
    const tGlide = setTimeout(() => {
      // Calculate target navbar logo coordinates
      const navLogo = document.getElementById("navbar-brand-logo");
      const centerEl = containerRef.current;

      if (navLogo && centerEl) {
        const navRect = navLogo.getBoundingClientRect();
        const centerRect = centerEl.getBoundingClientRect();

        // Calculate translation delta to align center with navLogo
        const deltaX = navRect.left - centerRect.left;
        const deltaY = navRect.top - centerRect.top;
        const scale = navRect.height / centerRect.height || 0.85;

        setTargetPos({ x: deltaX, y: deltaY, scale });
      } else {
        // Fallback translation if element not ready
        setTargetPos({ x: -(window.innerWidth / 2) + 100, y: -(window.innerHeight / 2) + 36, scale: 0.8 });
      }

      setPhase("glide");
    }, 650);

    // Phase 3: Transition Complete & Unmount (at 1250ms)
    const tDone = setTimeout(() => {
      setPhase("done");
    }, 1250);

    return () => {
      clearTimeout(tExpand);
      clearTimeout(tGlide);
      clearTimeout(tDone);
    };
  }, []);

  if (phase === "done") {
    return null;
  }

  const isExpanded = phase === "expand" || phase === "glide";
  const isGliding = phase === "glide";

  return (
    <div
      className={cn(
        "fixed inset-0 z-[9999] pointer-events-none transition-opacity duration-500 ease-out select-none",
        isGliding ? "opacity-0" : "opacity-100"
      )}
    >
      {/* Background Curtain Overlay */}
      <div className="absolute inset-0 bg-brand-dark-950 pointer-events-auto" />

      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-digital-500/20 rounded-full blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-industrial-500/15 rounded-full blur-[90px] pointer-events-none" />

      {/* Center Fixed Stage */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        {/* Animated Flying Container */}
        <div
          ref={containerRef}
          style={
            isGliding && targetPos
              ? {
                  transform: `translate3d(${targetPos.x}px, ${targetPos.y}px, 0) scale(${targetPos.scale})`,
                  transformOrigin: "top left",
                  transition: "transform 550ms cubic-bezier(0.16, 1, 0.3, 1), opacity 450ms ease-in",
                }
              : {
                  transform: "translate3d(0, 0, 0) scale(1)",
                  transition: "transform 550ms cubic-bezier(0.16, 1, 0.3, 1)",
                }
          }
          className="relative flex items-center gap-3.5 z-10"
        >
          {/* Logo Emblem with Glow */}
          <div className="relative shrink-0">
            {/* Spinning Halo */}
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-brand-digital-500 to-brand-industrial-500 opacity-60 blur-sm animate-spin duration-1000" />
            
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

          {/* Name Opening / Expanding Horizontally from the Logo */}
          <div
            className={cn(
              "overflow-hidden transition-all duration-400 ease-out flex flex-col justify-center",
              isExpanded ? "max-w-[280px] sm:max-w-[340px] opacity-100" : "max-w-0 opacity-0"
            )}
          >
            <div className="whitespace-nowrap pr-2">
              <span className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-1.5 leading-none">
                AONICTECH
                <span className="w-1.5 h-1.5 rounded-full bg-brand-digital-400 animate-pulse" />
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 block mt-1">
                Digital & Industrial
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Preloader() {
  const [loadingPhase, setLoadingPhase] = useState<"logo" | "text" | "complete" | "hidden">("logo");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 1. Initial logo glow & pop: 0 to 450ms
    const timer1 = setTimeout(() => {
      setLoadingPhase("text");
    }, 450);

    // 2. Progress line animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 5;
      });
    }, 70);

    // 3. Complete phase (fade out): after 1.8s
    const timer2 = setTimeout(() => {
      setLoadingPhase("complete");
    }, 1800);

    // 4. Remove completely from DOM after fade-out transition: 2.3s
    const timer3 = setTimeout(() => {
      setLoadingPhase("hidden");
    }, 2300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearInterval(progressInterval);
    };
  }, []);

  if (loadingPhase === "hidden") {
    return null;
  }

  const isTextOpen = loadingPhase === "text" || loadingPhase === "complete";
  const isClosing = loadingPhase === "complete";

  return (
    <div
      className={cn(
        "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-brand-dark-950 transition-opacity duration-700 ease-in-out select-none",
        isClosing ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      {/* Ambient Radial Background Glows */}
      <div className="absolute w-[500px] h-[500px] bg-brand-digital-500/15 rounded-full blur-[120px] pointer-events-none -translate-x-20 -translate-y-10 animate-pulse" />
      <div className="absolute w-[450px] h-[450px] bg-brand-industrial-500/15 rounded-full blur-[120px] pointer-events-none translate-x-20 translate-y-10 animate-pulse" />

      {/* Center Stage Container */}
      <div className="relative flex flex-col items-center">
        {/* Main Logo & Opening Name Row */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Logo with Orbital Halo */}
          <div className="relative">
            {/* Spinning Gradient Halo Ring */}
            <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-r from-brand-digital-500 via-sky-400 to-brand-industrial-500 opacity-70 blur-md animate-spin duration-1000" />
            
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-brand-dark-950 p-[2px] shadow-2xl border border-white/10 flex items-center justify-center overflow-hidden">
              <img
                src="/images/logo.png"
                alt="Aonictech Logo"
                className="w-full h-full object-contain p-1"
                onError={(e) => {
                  // Fallback to SVG if user hasn't added custom PNG yet
                  (e.target as HTMLImageElement).src = "/images/logo.svg";
                }}
              />
            </div>
          </div>

          {/* Name Opening / Expanding Horizontally from the Logo */}
          <div
            className={cn(
              "overflow-hidden transition-all duration-700 ease-out flex flex-col justify-center",
              isTextOpen ? "max-w-[400px] opacity-100" : "max-w-0 opacity-0"
            )}
          >
            <div className="whitespace-nowrap pr-2">
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white flex items-center gap-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-300">
                  AONICTECH
                </span>
                <span className="w-2 h-2 rounded-full bg-brand-digital-400 animate-ping" />
              </h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-brand-digital-400">
                  DIGITAL
                </span>
                <span className="text-slate-600 font-bold">•</span>
                <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-brand-industrial-400">
                  INDUSTRIAL
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Progress Line & Loading Indicator */}
        <div
          className={cn(
            "mt-8 w-48 sm:w-64 space-y-2 transition-all duration-500",
            isTextOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <div className="h-1 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
            <div
              className="h-full bg-gradient-to-r from-brand-digital-500 via-sky-400 to-brand-industrial-500 rounded-full transition-all duration-75 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
            <span className="tracking-widest uppercase">Initializing Portal</span>
            <span>{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

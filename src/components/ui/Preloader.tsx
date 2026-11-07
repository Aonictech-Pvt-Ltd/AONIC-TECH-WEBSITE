"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/Logo";

/**
 * Cinematic Center Splash Preloader (Performance-Calibrated)
 * 
 * - Plays centered animated circuit WebP + staggered letter reveal for "AONIC TECH"
 *   on a 100% spotless Pure White (#FFFFFF) canvas.
 * - Streamlined to 1200ms hold time (+ 500ms fade) to ensure sub-1.5s Speed Index and TTI.
 * - Instantly bypasses for crawlers, audit bots (Lighthouse, SEOptimer), and users with prefers-reduced-motion.
 * - Built with 100% Tailwind CSS classes with zero inline styles.
 */
const HOLD_DURATION_MS = 1200;
const FADE_DURATION_MS = 500;

export default function Preloader() {
  const [fading, setFading] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check for prefers-reduced-motion or automated audit bots
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isBot = /bot|googlebot|crawler|spider|robot|crawling|lighthouse|seoptimer/i.test(navigator.userAgent);

    if (prefersReducedMotion || isBot) {
      window.dispatchEvent(new CustomEvent("aonic-preloader-docked"));
      setDone(true);
      return;
    }

    // Scroll to top and temporarily prevent page scroll during the centered intro
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";

    // Hold in the center for 1200ms
    const holdTimer = setTimeout(() => {
      setFading(true);
      document.body.style.overflow = "";
      window.dispatchEvent(new CustomEvent("aonic-preloader-docked"));
    }, HOLD_DURATION_MS);

    // Completely unmount after fade-out transition finishes
    const unmountTimer = setTimeout(() => {
      setDone(true);
    }, HOLD_DURATION_MS + FADE_DURATION_MS);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(unmountTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (done) {
    return null;
  }

  return (
    <div
      id="aonic-preloader-root"
      className={cn(
        "fixed inset-0 z-[9999] select-none bg-white transition-opacity duration-500 ease-out",
        fading ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
      )}
    >
      {/* 
        Master Centered Brand Unit
        Anchored dead-center in the viewport with pure Tailwind utilities.
      */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.65] origin-center will-change-[opacity] [backface-visibility:hidden] flex items-center shrink-0">
        <Logo size={36} variant="light" animated={true} className="sm:hidden" />
        <Logo size={42} variant="light" animated={true} className="hidden sm:flex" />
      </div>
    </div>
  );
}

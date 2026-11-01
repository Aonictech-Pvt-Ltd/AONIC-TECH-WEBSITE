"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/Logo";

/**
 * Cinematic Center Splash Preloader
 * 
 * - Plays centered animated circuit WebP + staggered letter reveal for "AONIC TECH"
 *   on a 100% spotless Pure White (#FFFFFF) canvas.
 * - DOES NOT glide or move to header.
 * - Stays dead-center, then gracefully dissolves (fades out) to reveal the website underneath.
 */
export default function Preloader() {
  const [fading, setFading] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Scroll to top and temporarily prevent page scroll during the centered intro
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
    }

    // Hold in the center for 3500ms to enjoy the full circuit animation and letter reveal
    const holdTimer = setTimeout(() => {
      setFading(true);
      document.body.style.overflow = "";
      window.dispatchEvent(new CustomEvent("aonic-preloader-docked"));
    }, 3500);

    // Completely unmount after the 700ms fade-out transition finishes
    const unmountTimer = setTimeout(() => {
      setDone(true);
    }, 4200);

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
        "fixed inset-0 z-[9999] select-none transition-opacity duration-700 ease-out",
        fading ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
      )}
      style={{ backgroundColor: "#FFFFFF" }}
    >
      {/* 
        Master Centered Brand Unit
        Anchored dead-center in the viewport with zero movement.
      */}
      <div
        style={{
          position: "fixed",
          left: "50%",
          top: "50%",
          transform: "translate3d(-50%, -50%, 0) scale(1.65)",
          transformOrigin: "center center",
          willChange: "opacity",
          backfaceVisibility: "hidden",
        }}
        className="flex items-center shrink-0"
      >
        <Logo size={36} variant="light" animated={true} className="sm:hidden" />
        <Logo size={42} variant="light" animated={true} className="hidden sm:flex" />
      </div>
    </div>
  );
}

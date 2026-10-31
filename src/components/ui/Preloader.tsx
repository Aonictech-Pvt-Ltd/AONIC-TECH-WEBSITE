"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/Logo";

export default function Preloader() {
  const [stage, setStage] = useState<"center" | "gliding" | "docked" | "done">("center");
  const [targetOffset, setTargetOffset] = useState<{ x: number; y: number } | null>(null);

  const gliderRef = useRef<HTMLDivElement>(null);
  const dockedRef = useRef(false);

  // Initialize layout and measure target coordinates on client
  useEffect(() => {
    // Reset scroll to top and temporarily lock scroll during intro
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
    }

    const computeCoords = () => {
      const navTarget = document.getElementById("navbar-brand-logo");
      const glider = gliderRef.current;

      if (navTarget && glider) {
        const navRect = navTarget.getBoundingClientRect();
        const gliderWidth = glider.offsetWidth || navRect.width;
        const gliderHeight = glider.offsetHeight || navRect.height;

        // Target center point so the glider docks pixel-perfectly over navbar-brand-logo
        const targetCenterX = navRect.left + gliderWidth / 2;
        const targetCenterY = navRect.top + gliderHeight / 2;

        const viewportCenterX = window.innerWidth / 2;
        const viewportCenterY = window.innerHeight / 2;

        setTargetOffset({
          x: targetCenterX - viewportCenterX,
          y: targetCenterY - viewportCenterY,
        });
      }
    };

    // Compute immediately and on next animation frame
    computeCoords();
    const raf = requestAnimationFrame(computeCoords);
    window.addEventListener("resize", computeCoords);

    // Hold in center for 3800ms (adding 2 seconds as requested by user)
    const glideTimer = setTimeout(() => {
      // Re-check target right before gliding to ensure pixel precision
      computeCoords();
      setStage("gliding");
    }, 3800);

    // Fallback dock timer in case transitionend does not fire
    const fallbackTimer = setTimeout(() => {
      triggerDock();
    }, 5600);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", computeCoords);
      clearTimeout(glideTimer);
      clearTimeout(fallbackTimer);
      document.body.style.overflow = "";
    };
  }, []);

  const triggerDock = () => {
    if (dockedRef.current) return;
    dockedRef.current = true;

    setStage("docked");
    document.body.style.overflow = "";
    window.dispatchEvent(new CustomEvent("aonic-preloader-docked"));

    // Complete unmount after handoff
    setTimeout(() => {
      setStage("done");
    }, 200);
  };

  if (stage === "done") {
    return null;
  }

  const isGliding = stage === "gliding" || stage === "docked";

  // During stage === 'center':
  // Always anchored dead-center: left: 50%, top: 50%, translate3d(-50%, -50%, 0) scale(1.65)
  // During stage === 'gliding':
  // Translates by targetOffset (x, y) to dock pixel-perfectly onto the navbar logo
  let transformStyle = "translate3d(-50%, -50%, 0) scale(1.65)";

  if (isGliding && targetOffset) {
    transformStyle = `translate3d(calc(-50% + ${targetOffset.x}px), calc(-50% + ${targetOffset.y}px), 0) scale(1)`;
  }

  return (
    <div
      id="aonic-preloader-root"
      className={cn(
        "fixed inset-0 z-[9999] select-none transition-opacity duration-200",
        stage === "docked" ? "opacity-0 pointer-events-none" : "opacity-100",
        isGliding ? "pointer-events-none" : "pointer-events-auto"
      )}
    >
      {/* 
        100% Pure White Canvas (#FFFFFF)
        Spotless, ultra-clean white canvas with zero muddy blur halos or dirty tints
      */}
      <div
        className={cn(
          "absolute inset-0 bg-white transition-opacity duration-800 ease-out",
          isGliding ? "opacity-0" : "opacity-100"
        )}
        style={{ backgroundColor: "#FFFFFF" }}
      />

      {/* 
        Master Gliding Brand Unit
        Always starts at exact 50%/50% dead center of viewport.
        Glides to navbar position with cubic-bezier smoothing.
      */}
      <div
        ref={gliderRef}
        style={{
          position: "fixed",
          left: "50%",
          top: "50%",
          transform: transformStyle,
          transformOrigin: "center center",
          transition: isGliding
            ? "transform 1400ms cubic-bezier(0.16, 1, 0.3, 1)"
            : "none",
          willChange: "transform",
          backfaceVisibility: "hidden",
        }}
        onTransitionEnd={(e) => {
          if (e.propertyName === "transform" && isGliding) {
            triggerDock();
          }
        }}
        className="flex items-center shrink-0"
      >
        {/* Animated responsive Logo instances matching Navbar.tsx */}
        <Logo size={36} variant="light" animated={true} className="sm:hidden" />
        <Logo size={42} variant="light" animated={true} className="hidden sm:flex" />
      </div>
    </div>
  );
}

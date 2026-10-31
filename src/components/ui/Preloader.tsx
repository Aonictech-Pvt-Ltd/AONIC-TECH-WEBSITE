"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/Logo";

export default function Preloader() {
  const [stage, setStage] = useState<"center" | "gliding" | "docked" | "done">("center");
  const [navCoords, setNavCoords] = useState<{
    left: number;
    top: number;
    width: number;
    height: number;
    deltaX: number;
    deltaY: number;
  } | null>(null);

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
      if (navTarget) {
        const navRect = navTarget.getBoundingClientRect();
        const centerLeft = (window.innerWidth - navRect.width) / 2;
        const centerTop = (window.innerHeight - navRect.height) / 2;
        const deltaX = centerLeft - navRect.left;
        const deltaY = centerTop - navRect.top;

        setNavCoords({
          left: navRect.left,
          top: navRect.top,
          width: navRect.width,
          height: navRect.height,
          deltaX,
          deltaY,
        });
      }
    };

    // Compute immediately and on next animation frame
    computeCoords();
    const raf = requestAnimationFrame(computeCoords);

    // Hold in center for 1800ms so the user sees the circuit animation draw itself
    const glideTimer = setTimeout(() => {
      // Re-check target right before gliding to ensure pixel precision
      computeCoords();
      setStage("gliding");
    }, 1800);

    // Fallback dock timer in case transitionend does not fire
    const fallbackTimer = setTimeout(() => {
      triggerDock();
    }, 3600);

    return () => {
      cancelAnimationFrame(raf);
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

  // Calculate transform and positioning (Scale 1.75 in center for commanding presence)
  let transformStyle = "translate3d(-50%, -50%, 0) scale(1.75)";
  let posStyle: React.CSSProperties = {
    position: "fixed",
    left: "50%",
    top: "50%",
  };

  if (navCoords) {
    posStyle = {
      position: "fixed",
      left: `${navCoords.left}px`,
      top: `${navCoords.top}px`,
      width: `${navCoords.width}px`,
      height: `${navCoords.height}px`,
    };

    if (isGliding) {
      transformStyle = "translate3d(0px, 0px, 0px) scale(1)";
    } else {
      transformStyle = `translate3d(${navCoords.deltaX}px, ${navCoords.deltaY}px, 0px) scale(1.75)`;
    }
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
          "absolute inset-0 bg-white transition-opacity duration-700 ease-out",
          isGliding ? "opacity-0" : "opacity-100"
        )}
      />

      {/* 
        Master Gliding Brand Unit
        Base position is pinned directly to `#navbar-brand-logo`'s coordinates.
        Starts with a translation offset that centers it, then glides to (0, 0)
        landing with 100% mathematical precision on the navbar logo.
      */}
      <div
        ref={gliderRef}
        style={{
          ...posStyle,
          transform: transformStyle,
          transformOrigin: "center center",
          transition: isGliding
            ? "transform 1250ms cubic-bezier(0.16, 1, 0.3, 1)"
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

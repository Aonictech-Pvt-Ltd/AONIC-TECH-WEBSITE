import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, act } from "@testing-library/react";
import React from "react";
import Preloader from "@/components/ui/Preloader";

describe("Component: Preloader", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders on pure white canvas initially", () => {
    render(<Preloader />);
    const root = document.getElementById("aonic-preloader-root");
    expect(root).toBeInTheDocument();
    expect(root).toHaveClass("opacity-100");
  });

  it("dispatches docking event and dissolves after animation duration", () => {
    const dockedListener = vi.fn();
    window.addEventListener("aonic-preloader-docked", dockedListener);

    render(<Preloader />);

    // Advance 1200ms (calibrated hold time)
    act(() => {
      vi.advanceTimersByTime(1200);
    });

    expect(dockedListener).toHaveBeenCalledTimes(1);

    const root = document.getElementById("aonic-preloader-root");
    expect(root).toHaveClass("opacity-0");

    // Advance 500ms (unmount transition)
    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(document.getElementById("aonic-preloader-root")).toBeNull();

    window.removeEventListener("aonic-preloader-docked", dockedListener);
  });
});


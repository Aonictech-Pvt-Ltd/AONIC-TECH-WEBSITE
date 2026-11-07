import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, act } from "@testing-library/react";
import React from "react";
import ProtectedEmail from "@/components/ui/ProtectedEmail";

describe("Component: ProtectedEmail", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders obfuscated non-plain-text parts initially", () => {
    render(<ProtectedEmail user="contactus" domain="aonictech.com" />);
    const link = screen.getByRole("link", { name: /send email to aonic tech/i });
    expect(link).toHaveAttribute("href", "#");
    expect(link).toHaveTextContent("contactus@aonictech.com");
  });

  it("updates href to mailto link after hydration delay", () => {
    render(<ProtectedEmail user="contactus" domain="aonictech.com" />);
    act(() => {
      vi.advanceTimersByTime(200);
    });
    const link = screen.getByRole("link", { name: /send email to aonic tech/i });
    expect(link).toHaveAttribute("href", "mailto:contactus@aonictech.com");
  });
});

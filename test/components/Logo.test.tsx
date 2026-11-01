import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import Logo from "@/components/ui/Logo";

describe("Component: Logo", () => {
  it("renders light variant for header by default", () => {
    render(<Logo />);
    const logoImg = screen.getByRole("img", { name: /AONIC TECH/i });
    expect(logoImg).toBeInTheDocument();
    expect(logoImg).toHaveAttribute("src", "/images/company-logo.png");
  });

  it("renders dark variant for corporate footer", () => {
    render(<Logo variant="dark" />);
    const logoImg = screen.getByRole("img", { name: /AONIC TECH/i });
    expect(logoImg).toBeInTheDocument();
    expect(logoImg).toHaveAttribute("src", "/images/company-logo-white.png");
  });

  it("renders emblem-only mark when showText is false", () => {
    render(<Logo showText={false} />);
    const logoImg = screen.getByRole("img", { name: /AONIC TECH Emblem/i });
    expect(logoImg).toBeInTheDocument();
    expect(logoImg).toHaveAttribute("src", "/images/company-logo-mark.png");
  });

  it("renders animated intro variant when animated is true", () => {
    render(<Logo animated={true} />);
    const logoImg = screen.getByRole("img", { name: /AONIC TECH/i });
    expect(logoImg).toBeInTheDocument();
    expect(logoImg).toHaveAttribute("src", "/images/logo-animated.webp");
    // Should display individual animated letters
    expect(screen.getByText("A")).toBeInTheDocument();
    expect(screen.getByText("O")).toBeInTheDocument();
    expect(screen.getByText("T")).toBeInTheDocument();
  });
});

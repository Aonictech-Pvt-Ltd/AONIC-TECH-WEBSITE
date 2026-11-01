import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, act, waitFor } from "@testing-library/react";
import React from "react";
import QuoteModal from "@/components/ui/QuoteModal";

describe("Component: QuoteModal", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("opens when custom event 'open-quote-modal' is dispatched", () => {
    render(<QuoteModal />);

    // Initially modal is closed
    expect(screen.queryByRole("dialog")).toBeNull();

    // Dispatch open event
    act(() => {
      window.dispatchEvent(new CustomEvent("open-quote-modal"));
    });

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Full Name \*/i)).toBeInTheDocument();
  });

  it("closes when the X button is clicked", () => {
    render(<QuoteModal />);

    act(() => {
      window.dispatchEvent(new CustomEvent("open-quote-modal"));
    });

    expect(screen.getByRole("dialog")).toBeInTheDocument();

    const closeBtn = screen.getByRole("button", { name: /Close quote modal/i });
    fireEvent.click(closeBtn);

    expect(screen.queryByRole("dialog")).toBeNull();
  });

  it("submits quote request successfully", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        success: true,
        message: "Your inquiry has been submitted successfully.",
        formattedPhone: "+91 97041 66455",
      }),
    } as any);

    render(<QuoteModal />);

    act(() => {
      window.dispatchEvent(new CustomEvent("open-quote-modal"));
    });

    fireEvent.change(screen.getByPlaceholderText(/Full Name \*/i), {
      target: { value: "Anita Rao" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Phone Number \*/i), {
      target: { value: "9876543210" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Email Address \*/i), {
      target: { value: "anita@example.com" },
    });
    fireEvent.change(
      screen.getByPlaceholderText(/Your Message/i),
      {
        target: { value: "Titanium Grade 5 round bar pricing required." },
      }
    );

    fireEvent.click(screen.getByRole("button", { name: /Request Quote/i }));

    await waitFor(() => {
      expect(screen.getByText(/Quote Request Received!/i)).toBeInTheDocument();
    });
  });
});

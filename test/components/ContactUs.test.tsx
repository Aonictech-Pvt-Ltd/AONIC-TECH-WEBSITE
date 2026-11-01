import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import ContactUs from "@/components/ui/ContactUs";

describe("Component: ContactUs", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("renders the contact form fields and submit button", () => {
    render(<ContactUs />);

    expect(screen.getByPlaceholderText(/Enter your name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/10-digit mobile number/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/name@company.com/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Tell us what you are looking for/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Get your quote/i })).toBeInTheDocument();
  });

  it("shows error message when submitted with empty fields", async () => {
    render(<ContactUs />);

    const submitBtn = screen.getByRole("button", { name: /Get your quote/i });
    fireEvent.click(submitBtn);

    expect(await screen.findByText(/Please enter your full name/i)).toBeInTheDocument();
  });

  it("validates phone number format before submission", async () => {
    render(<ContactUs />);

    fireEvent.change(screen.getByPlaceholderText(/Enter your name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText(/10-digit mobile number/i), {
      target: { value: "123" }, // invalid phone
    });

    fireEvent.click(screen.getByRole("button", { name: /Get your quote/i }));

    expect(
      await screen.findByText(/Please enter a valid 10-digit mobile number/i)
    ).toBeInTheDocument();
  });

  it("submits the form successfully and displays confirmation view", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        success: true,
        message: "Your inquiry has been submitted successfully.",
        formattedPhone: "+91 97041 66455",
      }),
    } as any);

    render(<ContactUs />);

    fireEvent.change(screen.getByPlaceholderText(/Enter your name/i), {
      target: { value: "Santosh Sharma" },
    });
    fireEvent.change(screen.getByPlaceholderText(/10-digit mobile number/i), {
      target: { value: "9704166455" },
    });
    fireEvent.change(screen.getByPlaceholderText(/name@company.com/i), {
      target: { value: "santosh@aonictech.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Tell us what you are looking for/i), {
      target: { value: "We need custom web software with billing POS integration." },
    });

    fireEvent.click(screen.getByRole("button", { name: /Get your quote/i }));

    await waitFor(() => {
      expect(screen.getByText(/Quote Request Dispatched!/i)).toBeInTheDocument();
    });

    expect(global.fetch).toHaveBeenCalledWith(
      "/api/contact",
      expect.objectContaining({
        method: "POST",
      })
    );
  });
});

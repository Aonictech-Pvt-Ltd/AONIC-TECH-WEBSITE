import { describe, it, expect } from "vitest";
import { cn, escapeHtml, sanitizeSubject, sanitizeInput } from "@/lib/utils";

describe("Utility: cn (Tailwind Class Merger)", () => {
  it("combines class names correctly", () => {
    expect(cn("px-4", "py-2")).toBe("px-4 py-2");
  });

  it("handles conditional classes and falsy values", () => {
    const isPrimary = true;
    const isSecondary = false;
    expect(cn("btn", isPrimary && "btn-primary", isSecondary && "btn-secondary", null, undefined)).toBe(
      "btn btn-primary"
    );
  });

  it("resolves Tailwind conflicting utilities via tailwind-merge", () => {
    expect(cn("bg-red-500", "bg-blue-500")).toBe("bg-blue-500");
    expect(cn("p-4", "p-2")).toBe("p-2");
  });
});

describe("Utility: escapeHtml (XSS & HTML Injection Sanitizer)", () => {
  it("escapes all dangerous HTML characters", () => {
    const dangerous = `<script>alert("XSS & 'injection'")</script>`;
    const safe = escapeHtml(dangerous);
    expect(safe).toBe(
      "&lt;script&gt;alert(&quot;XSS &amp; &#39;injection&#39;&quot;)&lt;&#x2F;script&gt;".replace("&#x2F;", "/") // Note: < > & " '
    );
    expect(safe).not.toContain("<");
    expect(safe).not.toContain(">");
    expect(safe).not.toContain('"');
    expect(safe).not.toContain("'");
  });

  it("handles clean strings without modification", () => {
    const clean = "Hello World 123 - AONIC TECH";
    expect(escapeHtml(clean)).toBe(clean);
  });

  it("safely handles null, undefined, and non-strings", () => {
    expect(escapeHtml(null)).toBe("");
    expect(escapeHtml(undefined)).toBe("");
    expect(escapeHtml(12345)).toBe("12345");
  });
});

describe("Utility: sanitizeSubject (CRLF Header Injection Protection)", () => {
  it("strips newline and carriage return characters", () => {
    const raw = "New Inquiry\r\nBcc: attacker@evil.com\r\nSubject: Spoofed";
    const clean = sanitizeSubject(raw);
    expect(clean).not.toContain("\r");
    expect(clean).not.toContain("\n");
    expect(clean).toBe("New Inquiry Bcc: attacker@evil.com Subject: Spoofed");
  });

  it("enforces maximum length cap", () => {
    const long = "A".repeat(200);
    expect(sanitizeSubject(long, 50).length).toBe(50);
  });
});

describe("Utility: sanitizeInput (Control Character Removal & Length Bound)", () => {
  it("strips ASCII control characters and null bytes", () => {
    const tainted = "User\x00Name\x08With\x1FBads";
    const cleaned = sanitizeInput(tainted);
    expect(cleaned).toBe("UserNameWithBads");
  });

  it("trims whitespace and enforces max length", () => {
    const text = "   Important Project Details   ";
    expect(sanitizeInput(text, 10)).toBe("Important");
  });

  it("returns empty string for non-string inputs", () => {
    expect(sanitizeInput(null)).toBe("");
    expect(sanitizeInput(undefined)).toBe("");
    expect(sanitizeInput(12345 as any)).toBe("");
  });
});


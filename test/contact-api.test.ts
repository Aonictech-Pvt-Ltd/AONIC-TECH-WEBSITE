import { describe, it, expect, vi, beforeEach } from "vitest";
import { NextRequest } from "next/server";
import { POST } from "@/app/api/contact/route";

describe("Contact & Quote API Route: POST /api/contact", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const createRequest = (body: any, headers: Record<string, string> = {}) => {
    return new NextRequest("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "cf-connecting-ip": "127.0.0.1",
        ...headers,
      },
      body: JSON.stringify(body),
    });
  };

  it("returns 400 when phone number is missing", async () => {
    const req = createRequest({
      name: "Rahul Sharma",
      email: "rahul@example.com",
      description: "Need a modern web application for logistics",
    });

    const res = await POST(req);
    const data = await res.json();

    expect(res.status).toBe(400);
    expect(data.error).toMatch(/Phone number is required/i);
  });

  it("returns 400 when phone number is invalid or malformed", async () => {
    const req = createRequest({
      name: "Rahul Sharma",
      phone: "12345", // invalid
      email: "rahul@example.com",
      description: "Need a modern web application for logistics",
    });

    const res = await POST(req);
    const data = await res.json();

    expect(res.status).toBe(400);
    expect(data.error).toMatch(/valid 10-digit mobile number/i);
  });

  it("returns 400 when email is missing or invalid", async () => {
    const reqNoEmail = createRequest({
      name: "Rahul Sharma",
      phone: "9704166455",
      description: "Need a modern web application for logistics",
    });

    const resNoEmail = await POST(reqNoEmail);
    const dataNoEmail = await resNoEmail.json();
    expect(resNoEmail.status).toBe(400);
    expect(dataNoEmail.error).toMatch(/Email address is required/i);

    const reqBadEmail = createRequest({
      name: "Rahul Sharma",
      phone: "9704166455",
      email: "not-an-email",
      description: "Need a modern web application for logistics",
    });

    const resBadEmail = await POST(reqBadEmail);
    const dataBadEmail = await resBadEmail.json();
    expect(resBadEmail.status).toBe(400);
    expect(dataBadEmail.error).toMatch(/valid email address/i);
  });

  it("returns 400 when description/message is under 5 characters", async () => {
    const req = createRequest({
      name: "Rahul Sharma",
      phone: "9704166455",
      email: "rahul@example.com",
      description: "Hi", // only 2 chars
    });

    const res = await POST(req);
    const data = await res.json();

    expect(res.status).toBe(400);
    expect(data.error).toMatch(/minimum 5 characters/i);
  });

  it("processes valid submission successfully and returns formatted phone number", async () => {
    const req = createRequest({
      name: "Santosh Sharma",
      phone: "9704166455",
      email: "santosh@aonictech.com",
      serviceType: "Web & Custom App Development",
      description: "We require a high performance Next.js application with Supabase integration.",
    });

    const res = await POST(req);
    const data = await res.json();

    expect(res.status).toBe(200);
    expect(data.success).toBe(true);
    expect(data.formattedPhone).toBe("+91 97041 66455");
    expect(data.message).toMatch(/submitted successfully/i);
  });

  it("sanitizes dangerous XSS payloads in inputs without failure", async () => {
    const req = createRequest({
      name: '<script>alert("hacked")</script>',
      phone: "9704166455",
      email: "hacker@test.com",
      description: 'Testing injection <img src=x onerror=alert(1)> with quotes & apostrophes: "test" and \'test\'',
      materialName: "<b style='color:red;'>Titanium</b>",
    });

    const res = await POST(req);
    const data = await res.json();

    expect(res.status).toBe(200);
    expect(data.success).toBe(true);
  });
});


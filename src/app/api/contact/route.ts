import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";
import { contactRateLimiter, checkRateLimit } from "@/lib/redis";
import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js";
import { escapeHtml, sanitizeSubject, sanitizeInput } from "@/lib/utils";

// Initialize Supabase Client if keys exist
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

// Initialize Resend Email Client if key exists
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;
const targetEmail = process.env.NOTIFICATION_EMAIL || "aonictech.pvtltd@gmail.com";

/**
 * Extracts and sanitizes the client IP address from proxy headers.
 * Prioritizes trusted edge headers (cf-connecting-ip, x-real-ip) before x-forwarded-for.
 */
function getClientIp(req: NextRequest): string {
  const cfIp = req.headers.get("cf-connecting-ip");
  if (cfIp) return cfIp.trim().replace(/[^a-fA-F0-9:.]/g, "");

  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp.trim().replace(/[^a-fA-F0-9:.]/g, "");

  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    const firstIp = forwarded.split(",")[0]?.trim();
    if (firstIp) return firstIp.replace(/[^a-fA-F0-9:.]/g, "");
  }

  return "127.0.0.1";
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);

    // 1. Rate limiting check (Upstash Redis sliding window: 5 requests / 10 mins)
    const { success } = await checkRateLimit(contactRateLimiter, `contact_${ip}`);
    if (!success) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a few minutes before submitting again or message us on WhatsApp." },
        { status: 429 }
      );
    }

    let body: any;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON payload." },
        { status: 400 }
      );
    }

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Request payload must be a JSON object." },
        { status: 400 }
      );
    }

    const {
      name,
      phone,
      email,
      description,
      message,
      serviceType,
      materialName,
      materialGrade,
      materialForm,
      quantity,
      deliveryLocation,
    } = body;

    // 2. Comprehensive Field Validation & Input Sanitization
    // A. Phone Validation via libphonenumber-js (checks Indian numbers or international with country code)
    if (!phone || typeof phone !== "string") {
      return NextResponse.json(
        { error: "Phone number is required." },
        { status: 400 }
      );
    }

    const cleanPhoneInput = sanitizeInput(phone, 30);
    const isPhoneValid =
      isValidPhoneNumber(cleanPhoneInput, "IN") || isValidPhoneNumber(cleanPhoneInput);

    if (!isPhoneValid) {
      return NextResponse.json(
        { error: "Please enter a valid 10-digit mobile number or international number with country code." },
        { status: 400 }
      );
    }

    // Format phone to clean international format (e.g. +91 97041 66455)
    let formattedPhone = cleanPhoneInput;
    let rawDigits = cleanPhoneInput.replace(/[^0-9]/g, "");
    try {
      const parsed = parsePhoneNumber(cleanPhoneInput, "IN");
      if (parsed) {
        formattedPhone = parsed.formatInternational();
        rawDigits = parsed.number.replace("+", "");
      }
    } catch {
      // fallback to clean input
    }

    // B. Email Validation
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email address is required." },
        { status: 400 }
      );
    }

    const cleanEmail = sanitizeInput(email, 254).toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      return NextResponse.json(
        { error: "Please enter a valid email address (e.g. name@company.com)." },
        { status: 400 }
      );
    }

    // C. Description / Message Validation & Length Cap
    const rawDesc = typeof description === "string" ? description : typeof message === "string" ? message : "";
    const clientDesc = sanitizeInput(rawDesc, 4000);
    if (!clientDesc || clientDesc.length < 5) {
      return NextResponse.json(
        { error: "Please describe your project, software, or material requirements (minimum 5 characters)." },
        { status: 400 }
      );
    }

    const clientName = sanitizeInput(name, 100) || "Website Visitor";
    const selectedService = sanitizeInput(serviceType, 150) || "General Inquiry / Direct Contact";
    const matName = sanitizeInput(materialName, 150);
    const matGrade = sanitizeInput(materialGrade, 150);
    const matForm = sanitizeInput(materialForm, 150);
    const qty = sanitizeInput(quantity, 150);
    const delLocation = sanitizeInput(deliveryLocation, 150);

    const isMaterial =
      selectedService.includes("Material") ||
      selectedService.includes("Titanium") ||
      selectedService.includes("Rare-Earth") ||
      selectedService.includes("Electronic Chip");

    const category = isMaterial ? "materials" : "digital";

    // 3. Persist to Supabase if configured
    if (supabase) {
      try {
        await supabase.from("inquiries").insert([
          {
            name: clientName,
            phone: formattedPhone,
            email: cleanEmail,
            category,
            service_type: selectedService,
            message: clientDesc,
            material_name: matName || null,
            material_grade: matGrade || null,
            material_form: matForm || null,
            quantity: qty || null,
            delivery_location: delLocation || null,
            status: "new",
          },
        ]);
      } catch (dbErr) {
        console.error("Supabase insert warning:", dbErr);
      }
    }

    // 4. Send Email Notification to Company Gmail via Resend (with full HTML Escaping)
    if (resend) {
      try {
        const divisionBadge = isMaterial
          ? `<span style="background-color: #FFDB18; color: #0E0E25; font-weight: 700; padding: 4px 10px; border-radius: 9999px; font-size: 12px; text-transform: uppercase;">Industrial Materials</span>`
          : `<span style="background-color: #1926A0; color: #FFFFFF; font-weight: 700; padding: 4px 10px; border-radius: 9999px; font-size: 12px; text-transform: uppercase;">Digital Solutions</span>`;

        const safeSubject = sanitizeSubject(`New Inquiry from ${clientName} (${formattedPhone}) — AONIC TECH`);

        // Escaped HTML template values
        const safeName = escapeHtml(clientName);
        const safePhone = escapeHtml(formattedPhone);
        const safeEmail = escapeHtml(cleanEmail);
        const safeService = escapeHtml(selectedService);
        const safeRawDigits = rawDigits.replace(/[^0-9]/g, "");
        const safeDescHtml = escapeHtml(clientDesc).replace(/\n/g, "<br />");

        const safeMatName = escapeHtml(matName);
        const safeMatGrade = escapeHtml(matGrade);
        const safeMatForm = escapeHtml(matForm);
        const safeQty = escapeHtml(qty);
        const safeDelLocation = escapeHtml(delLocation);

        const emailResult = await resend.emails.send({
          from: "AONIC TECH Inquiries <onboarding@resend.dev>",
          to: targetEmail,
          subject: safeSubject,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; background-color: #FFFFFF; border: 1px solid #757CB6; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 14px rgba(14, 14, 37, 0.08);">
              <!-- Header -->
              <div style="background-color: #0E0E25; padding: 28px 24px; text-align: left; border-bottom: 3px solid #1926A0;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <h1 style="color: #FFFFFF; font-size: 22px; margin: 0; font-weight: 800; letter-spacing: -0.5px;">AONIC TECH</h1>
                  ${divisionBadge}
                </div>
                <p style="color: #757CB6; font-size: 13px; margin: 8px 0 0 0;">New Contact Form Submission Received</p>
              </div>

              <!-- Content Body -->
              <div style="padding: 24px; color: #0E0E25;">
                <h2 style="font-size: 18px; color: #0E0E25; margin-top: 0; margin-bottom: 16px; border-bottom: 1px solid #F1F2F8; padding-bottom: 8px;">
                  Contact Details
                </h2>
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
                  <tr>
                    <td style="padding: 8px 0; color: #757CB6; width: 140px; font-weight: 600;">Phone / WhatsApp:</td>
                    <td style="padding: 8px 0;">
                      <a href="tel:${safeRawDigits}" style="color: #1926A0; text-decoration: none; font-weight: 700; font-size: 15px;">${safePhone}</a>
                      <span style="display: inline-block; background-color: #63A26B; color: #FFFFFF; font-size: 10px; font-weight: 700; padding: 2px 6px; border-radius: 4px; margin-left: 8px;">Verified</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #757CB6; font-weight: 600;">Email Address:</td>
                    <td style="padding: 8px 0;"><a href="mailto:${safeEmail}" style="color: #1926A0; text-decoration: none; font-weight: 600;">${safeEmail}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #757CB6; font-weight: 600;">Name:</td>
                    <td style="padding: 8px 0; color: #0E0E25; font-weight: 700;">${safeName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #757CB6; font-weight: 600;">Inquiry Topic:</td>
                    <td style="padding: 8px 0; color: #0E0E25; font-weight: 600;">${safeService}</td>
                  </tr>
                </table>

                ${
                  isMaterial && matName
                    ? `
                  <h2 style="font-size: 18px; color: #0E0E25; margin-top: 24px; margin-bottom: 16px; border-bottom: 1px solid #F1F2F8; padding-bottom: 8px;">
                    Material Specifications
                  </h2>
                  <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px; background-color: #F8F9FD; border-radius: 8px; padding: 12px;">
                    <tr>
                      <td style="padding: 8px 12px; color: #757CB6; width: 140px; font-weight: 600;">Material:</td>
                      <td style="padding: 8px 12px; color: #0E0E25; font-weight: 700;">${safeMatName}</td>
                    </tr>
                    ${matGrade ? `<tr><td style="padding: 8px 12px; color: #757CB6; font-weight: 600;">Grade:</td><td style="padding: 8px 12px; color: #0E0E25;">${safeMatGrade}</td></tr>` : ""}
                    ${matForm ? `<tr><td style="padding: 8px 12px; color: #757CB6; font-weight: 600;">Form:</td><td style="padding: 8px 12px; color: #0E0E25;">${safeMatForm}</td></tr>` : ""}
                    ${qty ? `<tr><td style="padding: 8px 12px; color: #757CB6; font-weight: 600;">Quantity:</td><td style="padding: 8px 12px; color: #0E0E25; font-weight: 700;">${safeQty}</td></tr>` : ""}
                    ${delLocation ? `<tr><td style="padding: 8px 12px; color: #757CB6; font-weight: 600;">Delivery:</td><td style="padding: 8px 12px; color: #0E0E25;">${safeDelLocation}</td></tr>` : ""}
                  </table>
                `
                    : ""
                }

                <h2 style="font-size: 18px; color: #0E0E25; margin-top: 24px; margin-bottom: 12px; border-bottom: 1px solid #F1F2F8; padding-bottom: 8px;">
                  Client Description / Requirements
                </h2>
                <div style="background-color: #F8F9FD; border-left: 4px solid #1926A0; padding: 16px; border-radius: 6px; font-size: 14px; line-height: 1.6; color: #0E0E25;">
                  ${safeDescHtml}
                </div>

                <!-- One-Click Instant Action Buttons -->
                <div style="margin-top: 28px; text-align: center;">
                  <a href="https://wa.me/${safeRawDigits}" style="display: inline-block; background-color: #63A26B; color: #FFFFFF; font-weight: 700; padding: 12px 24px; border-radius: 8px; text-decoration: none; margin-right: 8px; font-size: 14px; box-shadow: 0 2px 8px rgba(99, 162, 107, 0.3);">
                    Chat on WhatsApp
                  </a>
                  <a href="mailto:${safeEmail}?subject=Regarding%20Your%20AONIC%20TECH%20Inquiry" style="display: inline-block; background-color: #1926A0; color: #FFFFFF; font-weight: 700; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-size: 14px; box-shadow: 0 2px 8px rgba(25, 38, 160, 0.3);">
                    Reply via Email
                  </a>
                </div>
              </div>

              <!-- Footer -->
              <div style="background-color: #0E0E25; padding: 16px 24px; text-align: center; border-top: 1px solid rgba(117, 124, 182, 0.2);">
                <p style="color: #757CB6; font-size: 12px; margin: 0;">
                  AONIC TECH PRIVATE LIMITED • 14-7, P & T Colony, Dilsukhnagar, Hyderabad, Telangana, 500060
                </p>
                <p style="color: #757CB6; font-size: 11px; margin: 4px 0 0 0;">
                  Automated Notification via Resend & Upstash Redis Rate-Limiting Protection
                </p>
              </div>
            </div>
          `,
        });

        if (emailResult.error) {
          console.error("Resend API error:", emailResult.error);
        } else {
          console.log("Resend delivery successful. ID:", emailResult.data?.id);
        }
      } catch (emailErr) {
        console.error("Resend delivery warning:", emailErr);
      }
    } else {
      console.log(`[DEV MODE] Resend API key not set. Inquiry received from ${formattedPhone}:`, {
        name: clientName,
        phone: formattedPhone,
        email: cleanEmail,
        desc: clientDesc,
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been submitted successfully. Our team will contact you shortly.",
        formattedPhone,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please reach out to us directly on WhatsApp." },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";
import { createClient } from "@supabase/supabase-js";

// Initialize Upstash Redis Rate Limiter if keys exist
let ratelimit: Ratelimit | null = null;
if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
  const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });
  ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, "10 m"), // 5 requests per 10 mins
    analytics: true,
  });
}

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

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "127.0.0.1";

    // 1. Rate limiting check
    if (ratelimit) {
      const { success } = await ratelimit.limit(`contact_${ip}`);
      if (!success) {
        return NextResponse.json(
          { error: "Too many quote requests. Please wait a few minutes or message us on WhatsApp." },
          { status: 429 }
        );
      }
    }

    const body = await req.json();
    const {
      name,
      phone,
      email,
      serviceType,
      materialName,
      materialGrade,
      materialForm,
      quantity,
      deliveryLocation,
      message,
    } = body;

    // 2. Basic Validation
    if (!name || !phone || !email || !serviceType) {
      return NextResponse.json(
        { error: "Please provide your Name, Phone, Email, and Service of interest." },
        { status: 400 }
      );
    }

    const isMaterial =
      serviceType.includes("Material") ||
      serviceType.includes("Titanium") ||
      serviceType.includes("Rare-Earth") ||
      serviceType.includes("Electronic Chip");

    const category = isMaterial ? "materials" : "digital";

    // 3. Persist to Supabase if configured
    if (supabase) {
      try {
        await supabase.from("inquiries").insert([
          {
            name,
            phone,
            email,
            category,
            service_type: serviceType,
            message: message || null,
            material_name: materialName || null,
            material_grade: materialGrade || null,
            material_form: materialForm || null,
            quantity: quantity || null,
            delivery_location: deliveryLocation || null,
            status: "new",
          },
        ]);
      } catch (dbErr) {
        console.error("Supabase insert warning:", dbErr);
      }
    }

    // 4. Send Email Notification via Resend if configured
    if (resend) {
      try {
        const divisionBadge = isMaterial
          ? `<span style="background-color: #FFDB18; color: #0E0E25; font-weight: 700; padding: 4px 10px; border-radius: 9999px; font-size: 12px; text-transform: uppercase;">Industrial Materials</span>`
          : `<span style="background-color: #1926A0; color: #FFFFFF; font-weight: 700; padding: 4px 10px; border-radius: 9999px; font-size: 12px; text-transform: uppercase;">Digital Solutions</span>`;

        const emailResult = await resend.emails.send({
          from: "Aonictech Inquiries <onboarding@resend.dev>",
          to: targetEmail,
          subject: `New ${isMaterial ? "[Material Quote]" : "[Digital Quote]"} from ${name} — Aonictech`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; background-color: #FFFFFF; border: 1px solid #757CB6; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 14px rgba(14, 14, 37, 0.08);">
              <!-- Header -->
              <div style="background-color: #0E0E25; padding: 28px 24px; text-align: left; border-bottom: 3px solid #1926A0;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <h1 style="color: #FFFFFF; font-size: 22px; margin: 0; font-weight: 800; letter-spacing: -0.5px;">AONICTECH</h1>
                  ${divisionBadge}
                </div>
                <p style="color: #757CB6; font-size: 13px; margin: 8px 0 0 0;">New Quote Inquiry Received via Website</p>
              </div>

              <!-- Content Body -->
              <div style="padding: 24px; color: #0E0E25;">
                <h2 style="font-size: 18px; color: #0E0E25; margin-top: 0; margin-bottom: 16px; border-bottom: 1px solid #F1F2F8; padding-bottom: 8px;">
                  Client Contact Information
                </h2>
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
                  <tr>
                    <td style="padding: 8px 0; color: #757CB6; width: 140px; font-weight: 600;">Full Name:</td>
                    <td style="padding: 8px 0; color: #0E0E25; font-weight: 700;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #757CB6; font-weight: 600;">Email:</td>
                    <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #1926A0; text-decoration: none; font-weight: 600;">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #757CB6; font-weight: 600;">Phone / WhatsApp:</td>
                    <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #1926A0; text-decoration: none; font-weight: 600;">${phone}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #757CB6; font-weight: 600;">Service Requested:</td>
                    <td style="padding: 8px 0; color: #0E0E25; font-weight: 700;">${serviceType}</td>
                  </tr>
                </table>

                ${
                  isMaterial
                    ? `
                  <h2 style="font-size: 18px; color: #0E0E25; margin-top: 24px; margin-bottom: 16px; border-bottom: 1px solid #F1F2F8; padding-bottom: 8px;">
                    Material Specifications
                  </h2>
                  <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px; background-color: #F8F9FD; border-radius: 8px; padding: 12px;">
                    <tr>
                      <td style="padding: 8px 12px; color: #757CB6; width: 140px; font-weight: 600;">Material:</td>
                      <td style="padding: 8px 12px; color: #0E0E25; font-weight: 700;">${materialName || "N/A"}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 12px; color: #757CB6; font-weight: 600;">Grade / Standard:</td>
                      <td style="padding: 8px 12px; color: #0E0E25;">${materialGrade || "Standard Factory"}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 12px; color: #757CB6; font-weight: 600;">Form / Shape:</td>
                      <td style="padding: 8px 12px; color: #0E0E25;">${materialForm || "Standard"}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 12px; color: #757CB6; font-weight: 600;">Quantity:</td>
                      <td style="padding: 8px 12px; color: #0E0E25; font-weight: 700;">${quantity || "N/A"}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 12px; color: #757CB6; font-weight: 600;">Delivery Destination:</td>
                      <td style="padding: 8px 12px; color: #0E0E25;">${deliveryLocation || "Standard Factory Delivery"}</td>
                    </tr>
                  </table>
                `
                    : ""
                }

                <h2 style="font-size: 18px; color: #0E0E25; margin-top: 24px; margin-bottom: 12px; border-bottom: 1px solid #F1F2F8; padding-bottom: 8px;">
                  Project / Order Requirements
                </h2>
                <div style="background-color: #F8F9FD; border-left: 4px solid #1926A0; padding: 14px 16px; border-radius: 4px; font-size: 14px; line-height: 1.6; color: #0E0E25;">
                  ${(message || "No additional comments provided by client.").replace(/\n/g, "<br />")}
                </div>

                <!-- Action Button -->
                <div style="margin-top: 28px; text-align: center;">
                  <a href="https://wa.me/${phone.replace(/[^0-9]/g, "")}" style="display: inline-block; background-color: #63A26B; color: #FFFFFF; font-weight: 700; padding: 12px 24px; border-radius: 8px; text-decoration: none; margin-right: 8px; font-size: 14px;">
                    Reply on WhatsApp
                  </a>
                  <a href="mailto:${email}?subject=Regarding%20Your%20Aonictech%20Inquiry" style="display: inline-block; background-color: #1926A0; color: #FFFFFF; font-weight: 700; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-size: 14px;">
                    Reply via Email
                  </a>
                </div>
              </div>

              <!-- Footer -->
              <div style="background-color: #0E0E25; padding: 16px 24px; text-align: center; border-top: 1px solid rgba(117, 124, 182, 0.2);">
                <p style="color: #757CB6; font-size: 12px; margin: 0;">
                  AONICTECH PRIVATE LIMITED • 14-7, P & T Colony, Dilsukhnagar, Hyderabad, Telangana, 500060
                </p>
                <p style="color: #757CB6; font-size: 11px; margin: 4px 0 0 0;">
                  Automated Quote Notification Dispatch via Resend API
                </p>
              </div>
            </div>
          `,
        });

        if (emailResult.error) {
          console.error("Resend API returned error:", emailResult.error);
        } else {
          console.log("Resend delivery successful. Message ID:", emailResult.data?.id);
        }
      } catch (emailErr) {
        console.error("Resend delivery warning:", emailErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your quote request has been received. Our team will contact you within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please contact us via WhatsApp." },
      { status: 500 }
    );
  }
}

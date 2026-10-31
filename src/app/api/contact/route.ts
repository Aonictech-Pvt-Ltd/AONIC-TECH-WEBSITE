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
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

// Initialize Resend Email Client if key exists
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

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
        await resend.emails.send({
          from: "Aonictech Inquiry <onboarding@resend.dev>",
          to: "contactus@aonictech.com",
          subject: `New ${isMaterial ? "[Material Quote]" : "[Digital Quote]"} from ${name}`,
          html: `
            <h2>New Quote Request Received</h2>
            <p><strong>Category:</strong> ${category.toUpperCase()}</p>
            <p><strong>Service:</strong> ${serviceType}</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            ${
              isMaterial
                ? `
              <hr />
              <h3>Material Specifications:</h3>
              <p><strong>Material Name:</strong> ${materialName || "N/A"}</p>
              <p><strong>Grade:</strong> ${materialGrade || "N/A"}</p>
              <p><strong>Form:</strong> ${materialForm || "N/A"}</p>
              <p><strong>Quantity:</strong> ${quantity || "N/A"}</p>
              <p><strong>Location:</strong> ${deliveryLocation || "N/A"}</p>
            `
                : ""
            }
            <hr />
            <p><strong>Client Message:</strong></p>
            <p>${message || "No additional comments"}</p>
          `,
        });
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

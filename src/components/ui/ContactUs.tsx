"use client";

import React, { useState, useId } from "react";
import Link from "next/link";
import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js";
import { 
  Check, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  ArrowRight, 
  ShieldCheck,
  Mail,
  Phone,
  User
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactUsProps {
  id?: string;
  className?: string;
  badge?: string;
  title?: string;
  subtitle?: string;
  defaultService?: string;
  variant?: "section" | "card";
}

const VALUE_PROPS = [
  "Custom web architecture, POS billing & custom app workflows",
  "Certified titanium alloys & rare-earth magnet factory pricing",
  "Doorstep delivery with EN 10204 3.1 Mill Test Certificates",
  "Dedicated support from our Hyderabad engineering headquarters",
];

export default function ContactUs({
  id = "quote",
  className,
  badge = "GET A CUSTOMIZED QUOTE",
  title = "Get a Direct Quote for Your Software or Industrial Supply",
  subtitle = "Tell us what you are looking for. Our engineering and material sourcing team will get in touch to discuss your project and arrange transparent factory-direct pricing.",
  defaultService = "General Inquiry / Direct Quote",
  variant = "section",
}: ContactUsProps) {
  const formId = useId();

  // Form Fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [agreed, setAgreed] = useState(true);

  // Validation & Submission States
  const [touched, setTouched] = useState({
    name: false,
    phone: false,
    email: false,
    description: false,
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formattedNumber, setFormattedNumber] = useState("");

  // Live Phone Validation via libphonenumber-js (10-digit Indian mobile or international with country code)
  const isPhoneValid = Boolean(
    phone.trim() &&
    (isValidPhoneNumber(phone.trim(), "IN") || isValidPhoneNumber(phone.trim()))
  );

  // Live Email Validation
  const isEmailValid = Boolean(
    email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim().toLowerCase())
  );

  // Required Field Checks
  const isNameValid = name.trim().length >= 2;
  const isDescriptionValid = description.trim().length >= 5;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Strictly allow only numeric digits (0-9) and cap at exactly 10 digits
    const rawDigits = e.target.value.replace(/\D/g, "");
    const val = rawDigits.slice(0, 10);
    setPhone(val);

    try {
      if (val.length === 10 && (isValidPhoneNumber(val, "IN") || isValidPhoneNumber(val))) {
        const parsed = parsePhoneNumber(val, "IN");
        if (parsed) {
          setFormattedNumber(parsed.formatInternational());
        }
      } else {
        setFormattedNumber("");
      }
    } catch {
      setFormattedNumber("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, phone: true, email: true, description: true });

    if (!isNameValid) {
      setErrorMessage("Please enter your full name.");
      return;
    }

    if (!isPhoneValid) {
      setErrorMessage("Please enter a valid 10-digit mobile number or international phone with country code.");
      return;
    }

    if (!isEmailValid) {
      setErrorMessage("Please enter a valid corporate or personal email address.");
      return;
    }

    if (!isDescriptionValid) {
      setErrorMessage("Please describe your project, software scope, or alloy requirements (minimum 5 characters).");
      return;
    }

    if (!agreed) {
      setErrorMessage("Please agree to the Terms & Privacy Policy to proceed.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
          serviceType: defaultService,
          description: description.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit quote request. Please try again.");
      }

      setStatus("success");
    } catch (err: any) {
      console.error("Quote submission error:", err);
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred. Please contact us directly on WhatsApp.");
    }
  };

  const handleReset = () => {
    setName("");
    setPhone("");
    setEmail("");
    setDescription("");
    setTouched({ name: false, phone: false, email: false, description: false });
    setStatus("idle");
    setErrorMessage("");
  };

  // Reusable Floating Form Card Content
  const formCardContent = (
    <div
      className={cn(
        "bg-white rounded-3xl p-6 sm:p-10 border border-[#757CB6]/20 shadow-xl shadow-[#0E0E25]/5 transition-all",
        variant === "card" && className
      )}
    >
      {/* Card Header */}
      <div className="mb-6 sm:mb-8">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0E0E25] tracking-tight">
          Request your quote
        </h3>
        <p className="mt-1.5 text-sm sm:text-base text-[#757CB6]">
          Share your details to get started.
        </p>
      </div>

      {/* Success Screen */}
      {status === "success" ? (
        <div className="text-center py-8 px-2 animate-in fade-in zoom-in-95 duration-300">
          <div className="w-16 h-16 bg-[#63A26B]/15 text-[#63A26B] rounded-2xl flex items-center justify-center mx-auto mb-5 ring-8 ring-[#63A26B]/5">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h4 className="text-2xl font-bold text-[#0E0E25] mb-2">
            Quote Request Dispatched!
          </h4>
          <p className="text-sm text-[#757CB6] max-w-md mx-auto mb-6 leading-relaxed">
            Thank you, <span className="font-bold text-[#0E0E25]">{name}</span>. Our engineering and material sourcing desk has received your requirements and will connect with you on <span className="font-semibold text-[#0E0E25]">{formattedNumber || phone}</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={`https://wa.me/919704166455?text=${encodeURIComponent(
                `Hi AONIC TECH team, I just requested a quote for my project requirements.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#63A26B] hover:bg-[#528d5a] text-white text-xs uppercase tracking-wider font-bold shadow-lg shadow-[#63A26B]/25 transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              Connect on WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-[#757CB6]/30 text-[#0E0E25] hover:bg-slate-50 text-xs uppercase tracking-wider font-bold transition-all"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      ) : (
        /* Form Grid */
        <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
          {/* Error Notification */}
          {(status === "error" || errorMessage) && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-3 animate-in fade-in duration-200">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <span className="leading-snug">{errorMessage}</span>
            </div>
          )}

          {/* 2-Column Row 1: Full Name & Mobile Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* Full Name */}
            <div>
              <label
                htmlFor={`${formId}-name`}
                className="block text-xs font-bold text-[#0E0E25] mb-1.5"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#757CB6]">
                  <User className="w-4 h-4" />
                </div>
                <input
                  id={`${formId}-name`}
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
                  placeholder="Enter your name"
                  className={cn(
                    "w-full pl-10 pr-4 py-3 rounded-xl border bg-white text-[#0E0E25] placeholder:text-[#757CB6]/60 text-sm focus:outline-none transition-all",
                    touched.name && !isNameValid
                      ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                      : "border-[#757CB6]/30 focus:border-[#1926A0] focus:ring-4 focus:ring-[#1926A0]/10"
                  )}
                  disabled={status === "submitting"}
                />
              </div>
            </div>

            {/* Mobile Number with libphonenumber-js Validation */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor={`${formId}-phone`}
                  className="block text-xs font-bold text-[#0E0E25]"
                >
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                {isPhoneValid && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#63A26B] bg-[#63A26B]/10 px-1.5 py-0.5 rounded">
                    <CheckCircle2 className="w-2.5 h-2.5" />
                    Valid Mobile
                  </span>
                )}
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#757CB6]">
                  <Phone className="w-4 h-4" />
                </div>
                <input
                  id={`${formId}-phone`}
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  required
                  value={phone}
                  onChange={handlePhoneChange}
                  onBlur={() => setTouched((prev) => ({ ...prev, phone: true }))}
                  placeholder="10-digit mobile number"
                  className={cn(
                    "w-full pl-10 pr-4 py-3 rounded-xl border bg-white text-[#0E0E25] placeholder:text-[#757CB6]/60 text-sm focus:outline-none transition-all",
                    touched.phone && !isPhoneValid
                      ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                      : isPhoneValid
                      ? "border-[#63A26B] focus:border-[#63A26B] focus:ring-4 focus:ring-[#63A26B]/10"
                      : "border-[#757CB6]/30 focus:border-[#1926A0] focus:ring-4 focus:ring-[#1926A0]/10"
                  )}
                  disabled={status === "submitting"}
                />
              </div>
            </div>
          </div>

          {/* Row 2: Email Address */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label
                htmlFor={`${formId}-email`}
                className="block text-xs font-bold text-[#0E0E25]"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              {isEmailValid && (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#63A26B] bg-[#63A26B]/10 px-1.5 py-0.5 rounded">
                  <CheckCircle2 className="w-2.5 h-2.5" />
                  Valid Email
                </span>
              )}
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#757CB6]">
                <Mail className="w-4 h-4" />
              </div>
              <input
                id={`${formId}-email`}
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
                placeholder="name@company.com"
                className={cn(
                  "w-full pl-10 pr-4 py-3 rounded-xl border bg-white text-[#0E0E25] placeholder:text-[#757CB6]/60 text-sm focus:outline-none transition-all",
                  touched.email && !isEmailValid
                    ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                    : isEmailValid
                    ? "border-[#63A26B] focus:border-[#63A26B] focus:ring-4 focus:ring-[#63A26B]/10"
                    : "border-[#757CB6]/30 focus:border-[#1926A0] focus:ring-4 focus:ring-[#1926A0]/10"
                )}
                disabled={status === "submitting"}
              />
            </div>
          </div>

          {/* Row 3: Requirement Description */}
          <div>
            <label
              htmlFor={`${formId}-desc`}
              className="block text-xs font-bold text-[#0E0E25] mb-1.5"
            >
              Requirement Scope & Specifications <span className="text-red-500">*</span>
            </label>
            <textarea
              id={`${formId}-desc`}
              required
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, description: true }))}
              placeholder="Tell us what you are looking for (e.g. website design, billing POS, or alloy grade, quantity, and delivery timeline)..."
              className={cn(
                "w-full px-4 py-3 rounded-xl border bg-white text-[#0E0E25] placeholder:text-[#757CB6]/60 text-sm focus:outline-none resize-none transition-all",
                touched.description && !isDescriptionValid
                  ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                  : "border-[#757CB6]/30 focus:border-[#1926A0] focus:ring-4 focus:ring-[#1926A0]/10"
              )}
              disabled={status === "submitting"}
            />
          </div>

          {/* Terms & Privacy Policy Checkbox */}
          <div className="flex items-start gap-2.5 pt-1">
            <input
              id={`${formId}-agreed`}
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 w-4 h-4 rounded border-[#757CB6]/40 text-[#1926A0] focus:ring-[#1926A0] cursor-pointer"
            />
            <label
              htmlFor={`${formId}-agreed`}
              className="text-xs text-[#757CB6] cursor-pointer select-none leading-relaxed"
            >
              I agree to the{" "}
              <Link
                href="/privacy-and-terms"
                className="text-[#0E0E25] font-semibold underline underline-offset-2 hover:text-[#1926A0]"
              >
                Terms & Privacy Policy
              </Link>{" "}
              and to being contacted regarding my enquiry.
            </label>
          </div>

          {/* Submit Action Button (Amber Gold from Reference Image) */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full py-4 px-6 rounded-xl bg-[#FFDB18] hover:bg-[#f5cf07] text-[#0E0E25] text-sm sm:text-base font-bold shadow-md shadow-[#FFDB18]/30 transition-all flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer border border-[#FFDB18]"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Processing Your Quote Request...</span>
                </>
              ) : (
                <>
                  <span>Get your quote</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );

  // If card variant requested (for sidebars or custom embeds), return just the card
  if (variant === "card") {
    return formCardContent;
  }

  // Default: Full 2-Column Section (as in reference image)
  return (
    <section
      id={id}
      className={cn(
        "relative py-16 sm:py-24 bg-[#F8F9FD] border-y border-[#757CB6]/15 scroll-mt-24 transition-colors",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Centered Pill Badge (as seen in reference design) */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0E0E25]/25 bg-white text-[#0E0E25] text-[11px] sm:text-xs font-bold tracking-widest uppercase shadow-sm">
            <span>{badge}</span>
          </div>
        </div>

        {/* 2-Column Responsive Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT COLUMN: Editorial Headline & Bullet Proof Points */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E0E25] tracking-tight leading-[1.15]">
              {title}
            </h2>

            <p className="text-base sm:text-lg text-[#0E0E25]/75 leading-relaxed font-normal">
              {subtitle}
            </p>

            {/* Checklist with clean tick marks */}
            <ul className="space-y-3.5 pt-2">
              {VALUE_PROPS.map((prop, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1926A0]/10 text-[#1926A0] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-[#0E0E25]/90 leading-snug">
                    {prop}
                  </span>
                </li>
              ))}
            </ul>

            {/* Corporate Assurance Strip */}
            <div className="pt-4 border-t border-[#757CB6]/20 flex items-center gap-3 text-xs text-[#757CB6]">
              <ShieldCheck className="w-4 h-4 text-[#63A26B] shrink-0" />
              <span>Protected by Upstash Redis rate-limiting. Zero spam guaranteed.</span>
            </div>
          </div>

          {/* RIGHT COLUMN: The Floating Form Card */}
          <div className="lg:col-span-7">
            {formCardContent}
          </div>
        </div>
      </div>
    </section>
  );
}

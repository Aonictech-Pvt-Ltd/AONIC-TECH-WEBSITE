"use client";

import React, { useState, useId } from "react";
import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js";
import { Phone, Mail, FileText, Send, CheckCircle2, AlertCircle, Loader2, MessageSquare, ArrowRight, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactUsProps {
  className?: string;
  title?: string;
  subtitle?: string;
  defaultService?: string;
}

export default function ContactUs({
  className,
  title = "Get in Touch with Our Team",
  subtitle = "Have a software project, billing need, or industrial alloy inquiry? Submit your details below and our Hyderabad engineering office will reach out within 24 hours.",
  defaultService = "General Inquiry",
}: ContactUsProps) {
  const formId = useId();

  // Form State
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");

  // Validation & UI State
  const [touched, setTouched] = useState({ phone: false, email: false, description: false });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formattedNumber, setFormattedNumber] = useState("");

  // Real-time Phone Validation via libphonenumber-js (supports Indian 10-digit and international with +)
  const isPhoneValid = Boolean(
    phone.trim() &&
    (isValidPhoneNumber(phone.trim(), "IN") || isValidPhoneNumber(phone.trim()))
  );

  // Real-time Email Validation
  const isEmailValid = Boolean(
    email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim().toLowerCase())
  );

  // Description Validation
  const isDescriptionValid = description.trim().length >= 5;

  // Format phone helper for user preview
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setPhone(val);

    try {
      if (isValidPhoneNumber(val, "IN") || isValidPhoneNumber(val)) {
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
    setTouched({ phone: true, email: true, description: true });

    if (!isPhoneValid) {
      setErrorMessage("Please enter a valid 10-digit mobile number or international phone with country code.");
      return;
    }

    if (!isEmailValid) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!isDescriptionValid) {
      setErrorMessage("Please provide a description of your requirement (minimum 5 characters).");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: phone.trim(),
          email: email.trim(),
          description: description.trim(),
          name: name.trim() || undefined,
          serviceType: defaultService,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit inquiry. Please try again.");
      }

      setStatus("success");
    } catch (err: any) {
      console.error("Submission error:", err);
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred. Please message us directly on WhatsApp.");
    }
  };

  const handleReset = () => {
    setPhone("");
    setEmail("");
    setDescription("");
    setName("");
    setTouched({ phone: false, email: false, description: false });
    setStatus("idle");
    setErrorMessage("");
  };

  return (
    <div
      className={cn(
        "w-full max-w-2xl mx-auto bg-white rounded-3xl border border-[#757CB6]/20 shadow-xl shadow-[#0E0E25]/5 overflow-hidden transition-all",
        className
      )}
    >
      {/* Header Accent Bar */}
      <div className="h-2 w-full bg-gradient-to-r from-[#1926A0] via-[#757CB6] to-[#FFDB18]" />

      <div className="p-6 sm:p-10">
        {/* Title & Introduction */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1926A0]/10 text-[#1926A0] text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            Direct Inquiry
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0E0E25] tracking-tight">
            {title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#757CB6] leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Success Confirmation State */}
        {status === "success" ? (
          <div className="text-center py-8 px-4 animate-in fade-in zoom-in-95 duration-300">
            <div className="w-16 h-16 bg-[#63A26B]/15 text-[#63A26B] rounded-2xl flex items-center justify-center mx-auto mb-5 ring-8 ring-[#63A26B]/5">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0E0E25] mb-2">
              Inquiry Dispatched Successfully!
            </h3>
            <p className="text-sm text-[#757CB6] max-w-md mx-auto mb-6 leading-relaxed">
              Our engineering & supply desk has received your details. We have sent a confirmation notification to our team and will connect with you on <span className="font-semibold text-[#0E0E25]">{formattedNumber || phone}</span> shortly.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href="https://wa.me/919704166455"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#63A26B] hover:bg-[#528d5a] text-white text-xs uppercase tracking-wider font-bold shadow-lg shadow-[#63A26B]/25 transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                Chat on WhatsApp Now
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 rounded-xl border border-[#757CB6]/30 text-[#0E0E25] hover:bg-slate-50 text-xs uppercase tracking-wider font-bold transition-all"
              >
                Send Another Inquiry
              </button>
            </div>
          </div>
        ) : (
          /* Form State */
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Error Banner */}
            {(status === "error" || errorMessage) && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-3 animate-in fade-in duration-200">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <span className="leading-snug">{errorMessage}</span>
              </div>
            )}

            {/* Optional Name */}
            <div>
              <label
                htmlFor={`${formId}-name`}
                className="block text-xs uppercase tracking-wider font-bold text-[#0E0E25] mb-1.5"
              >
                Your Name <span className="text-[#757CB6] font-normal normal-case">(Optional)</span>
              </label>
              <input
                id={`${formId}-name`}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Ramesh Kumar / Tech Corp"
                className="w-full px-4 py-3 rounded-xl border border-[#757CB6]/30 bg-white text-[#0E0E25] placeholder:text-[#757CB6]/60 text-sm focus:outline-none focus:border-[#1926A0] focus:ring-4 focus:ring-[#1926A0]/10 transition-all"
                disabled={status === "submitting"}
              />
            </div>

            {/* Phone Number Field with Real-Time Validation */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor={`${formId}-phone`}
                  className="block text-xs uppercase tracking-wider font-bold text-[#0E0E25]"
                >
                  Phone Number <span className="text-[#1926A0]">*</span>
                </label>
                {isPhoneValid && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#63A26B] bg-[#63A26B]/10 px-2 py-0.5 rounded-md">
                    <CheckCircle2 className="w-3 h-3" />
                    Valid Number {formattedNumber && `(${formattedNumber})`}
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
                  required
                  value={phone}
                  onChange={handlePhoneChange}
                  onBlur={() => setTouched((prev) => ({ ...prev, phone: true }))}
                  placeholder="+91 97041 66455 or 10-digit mobile"
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
              <p className="mt-1 text-[11px] text-[#757CB6]">
                Validated via international standard. Enter 10-digit Indian mobile or include country code (+1, +44, etc.).
              </p>
            </div>

            {/* Email Address Field */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor={`${formId}-email`}
                  className="block text-xs uppercase tracking-wider font-bold text-[#0E0E25]"
                >
                  Email Address <span className="text-[#1926A0]">*</span>
                </label>
                {isEmailValid && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#63A26B] bg-[#63A26B]/10 px-2 py-0.5 rounded-md">
                    <CheckCircle2 className="w-3 h-3" />
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
                  placeholder="e.g. procurement@company.com"
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

            {/* Description / Requirement Field */}
            <div>
              <label
                htmlFor={`${formId}-description`}
                className="block text-xs uppercase tracking-wider font-bold text-[#0E0E25] mb-1.5"
              >
                Requirement Description <span className="text-[#1926A0]">*</span>
              </label>
              <div className="relative">
                <textarea
                  id={`${formId}-description`}
                  required
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  onBlur={() => setTouched((prev) => ({ ...prev, description: true }))}
                  placeholder="Describe your software project, POS/billing requirement, titanium/rare-earth alloy grade, quantity, or delivery specs..."
                  className={cn(
                    "w-full px-4 py-3 rounded-xl border bg-white text-[#0E0E25] placeholder:text-[#757CB6]/60 text-sm focus:outline-none resize-none transition-all",
                    touched.description && !isDescriptionValid
                      ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                      : "border-[#757CB6]/30 focus:border-[#1926A0] focus:ring-4 focus:ring-[#1926A0]/10"
                  )}
                  disabled={status === "submitting"}
                />
              </div>
              <div className="flex justify-between items-center mt-1 text-[11px] text-[#757CB6]">
                <span>Minimum 5 characters</span>
                <span>{description.trim().length} chars</span>
              </div>
            </div>

            {/* Trust & Rate-Limiting Notice */}
            <div className="flex items-center gap-2 pt-1 text-[11px] text-[#757CB6]">
              <ShieldCheck className="w-4 h-4 text-[#63A26B] shrink-0" />
              <span>Protected by Upstash Redis rate-limiting & enterprise security. No spam guaranteed.</span>
            </div>

            {/* Submit Action Button */}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full py-3.5 px-6 rounded-xl bg-[#1926A0] hover:bg-[#131e80] text-white text-xs sm:text-sm uppercase tracking-wider font-bold shadow-lg shadow-[#1926A0]/25 transition-all flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Validating & Dispatching...</span>
                </>
              ) : (
                <>
                  <span>Submit Inquiry to Engineering Team</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

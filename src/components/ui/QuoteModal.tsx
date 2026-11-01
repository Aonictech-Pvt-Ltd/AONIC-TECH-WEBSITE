"use client";

import React, { useState, useEffect, useId } from "react";
import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js";
import { 
  X, 
  User, 
  Phone, 
  Mail, 
  MessageSquare, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  ArrowRight, 
  Lock 
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Cinematic Refresh Quote Modal
 * 
 * - Automatically triggers on every page refresh right after the preloader dissolve animation finishes.
 * - Pixel-perfect reference layout: Dark navy brand header with official master white logo,
 *   crisp white form body, real-time phone validation via libphonenumber-js, and gold action CTA.
 * - Can be dismissed via X button, clicking backdrop, or pressing Escape key.
 * - Can be manually opened anywhere via CustomEvent: window.dispatchEvent(new CustomEvent("open-quote-modal"))
 */
export default function QuoteModal() {
  const formId = useId();
  const [isOpen, setIsOpen] = useState(false);

  // Form Fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // States
  const [touched, setTouched] = useState({ name: false, phone: false, email: false });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formattedNumber, setFormattedNumber] = useState("");

  // Trigger popup after the preloader animation finishes on every page load/refresh
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    const handlePreloaderDocked = () => {
      // Preloader starts fading at 3500ms; wait 750ms for complete dissolve before showing modal
      timer = setTimeout(() => {
        setIsOpen(true);
      }, 750);
    };

    // Listen to custom preloader event
    window.addEventListener("aonic-preloader-docked", handlePreloaderDocked);

    // Fallback timer in case preloader event was already dispatched or page had no preloader
    const fallbackTimer = setTimeout(() => {
      setIsOpen((prev) => (prev ? prev : true));
    }, 4300);

    // Allow opening manually from any button on the site
    const handleManualOpen = () => {
      setIsOpen(true);
    };
    window.addEventListener("open-quote-modal", handleManualOpen);

    // Escape key listener to dismiss
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      if (timer) clearTimeout(timer);
      clearTimeout(fallbackTimer);
      window.removeEventListener("aonic-preloader-docked", handlePreloaderDocked);
      window.removeEventListener("open-quote-modal", handleManualOpen);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Real-time Phone Validation
  const isPhoneValid = Boolean(
    phone.trim() &&
    (isValidPhoneNumber(phone.trim(), "IN") || isValidPhoneNumber(phone.trim()))
  );

  // Real-time Email Validation
  const isEmailValid = Boolean(
    email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim().toLowerCase())
  );

  const isNameValid = name.trim().length >= 2;

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
    setTouched({ name: true, phone: true, email: true });

    if (!isNameValid) {
      setErrorMessage("Please enter your full name.");
      return;
    }

    if (!isPhoneValid) {
      setErrorMessage("Please enter a valid 10-digit mobile number or international number with country code.");
      return;
    }

    if (!isEmailValid) {
      setErrorMessage("Please enter a valid email address.");
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
          serviceType: "Popup Quick Quote Request",
          description: message.trim() || "Quick Quote Request via Website Popup Modal",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit quote request. Please try again.");
      }

      setStatus("success");
    } catch (err: any) {
      console.error("Popup quote error:", err);
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred. Please contact us on WhatsApp.");
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${formId}-title`}
      className="fixed inset-0 z-[9990] flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300 select-none"
      onClick={(e) => {
        // Dismiss when clicking outer backdrop
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
    >
      <div 
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-[#757CB6]/20 overflow-hidden animate-in zoom-in-95 duration-300 relative text-[#0E0E25]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ========================================================================= */}
        {/* MODAL HEADER: Dark Navy #0E0E25 with Official Brand Logo & Close Button   */}
        {/* ========================================================================= */}
        <div className="bg-[#0E0E25] px-6 pt-7 pb-6 text-center relative border-b border-[#1926A0]/40">
          {/* Close Button */}
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close quote modal"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Master White Logo Lockup */}
          <div className="inline-block mx-auto mb-2">
            <img
              src="/images/company-logo-white.png"
              alt="AONIC TECH"
              width={200}
              height={58}
              className="h-10 sm:h-11 w-auto object-contain mx-auto"
            />
          </div>

          <p className="text-[#FFDB18] text-[10px] sm:text-[11px] font-bold tracking-[0.22em] uppercase">
            Digital Solutions & Industrial Materials
          </p>
        </div>

        {/* ========================================================================= */}
        {/* MODAL BODY: Clean White Canvas with Form Fields & Live Phone Validation   */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-7 select-text">
          {status === "success" ? (
            <div className="text-center py-6 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 bg-[#63A26B]/15 text-[#63A26B] rounded-2xl flex items-center justify-center mx-auto mb-4 ring-8 ring-[#63A26B]/5">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-xl font-extrabold text-[#0E0E25] mb-1.5">
                Quote Request Received!
              </h3>
              <p className="text-xs sm:text-sm text-[#757CB6] leading-relaxed mb-6">
                Thank you, <span className="font-bold text-[#0E0E25]">{name}</span>. Our desk has received your request and will connect with you on <span className="font-semibold text-[#0E0E25]">{formattedNumber || phone}</span>.
              </p>

              <div className="space-y-2.5">
                <a
                  href={`https://wa.me/919704166455?text=${encodeURIComponent(
                    `Hi AONIC TECH team, I just requested a quote for my project.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#63A26B] hover:bg-[#528d5a] text-white text-xs uppercase tracking-wider font-bold shadow-lg shadow-[#63A26B]/25 transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  Connect on WhatsApp Now
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full py-3 px-4 rounded-xl border border-[#757CB6]/30 text-[#0E0E25] hover:bg-slate-50 text-xs uppercase tracking-wider font-bold transition-all cursor-pointer"
                >
                  Back to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
              {/* Error Alert */}
              {(status === "error" || errorMessage) && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2.5 animate-in fade-in duration-200">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span className="leading-snug">{errorMessage}</span>
                </div>
              )}

              {/* Full Name */}
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
                  placeholder="Full Name *"
                  className={cn(
                    "w-full pl-10 pr-4 py-3 rounded-xl border bg-white text-[#0E0E25] placeholder:text-[#757CB6]/70 text-sm focus:outline-none transition-all",
                    touched.name && !isNameValid
                      ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                      : "border-[#757CB6]/30 focus:border-[#1926A0] focus:ring-4 focus:ring-[#1926A0]/10"
                  )}
                  disabled={status === "submitting"}
                />
              </div>

              {/* 2-Column Row on Tablets / Desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Phone Number with libphonenumber-js Validation */}
                <div>
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
                      placeholder="Phone Number *"
                      className={cn(
                        "w-full pl-10 pr-4 py-3 rounded-xl border bg-white text-[#0E0E25] placeholder:text-[#757CB6]/70 text-sm focus:outline-none transition-all",
                        touched.phone && !isPhoneValid
                          ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                          : isPhoneValid
                          ? "border-[#63A26B] focus:border-[#63A26B] focus:ring-4 focus:ring-[#63A26B]/10"
                          : "border-[#757CB6]/30 focus:border-[#1926A0] focus:ring-4 focus:ring-[#1926A0]/10"
                      )}
                      disabled={status === "submitting"}
                    />
                  </div>
                  {isPhoneValid && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#63A26B] mt-1 pl-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Valid Mobile
                    </span>
                  )}
                </div>

                {/* Email Address */}
                <div>
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
                      placeholder="Email Address *"
                      className={cn(
                        "w-full pl-10 pr-4 py-3 rounded-xl border bg-white text-[#0E0E25] placeholder:text-[#757CB6]/70 text-sm focus:outline-none transition-all",
                        touched.email && !isEmailValid
                          ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                          : "border-[#757CB6]/30 focus:border-[#1926A0] focus:ring-4 focus:ring-[#1926A0]/10"
                      )}
                      disabled={status === "submitting"}
                    />
                  </div>
                  {isEmailValid && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#63A26B] mt-1 pl-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Valid Email
                    </span>
                  )}
                </div>
              </div>

              {/* Your Message / Requirement (Optional / Clean) */}
              <div className="relative">
                <div className="absolute top-3.5 left-3.5 pointer-events-none text-[#757CB6]">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <textarea
                  id={`${formId}-message`}
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your Message (Optional: Website, POS, Titanium, etc.)"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#757CB6]/30 bg-white text-[#0E0E25] placeholder:text-[#757CB6]/70 text-sm focus:outline-none focus:border-[#1926A0] focus:ring-4 focus:ring-[#1926A0]/10 resize-none transition-all"
                  disabled={status === "submitting"}
                />
              </div>

              {/* Action Button: Amber Gold (#FFDB18) from Reference Image */}
              <div className="pt-1">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#FFDB18] hover:bg-[#f5cf07] text-[#0E0E25] text-sm font-bold shadow-md shadow-[#FFDB18]/30 transition-all flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer border border-[#FFDB18]"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Request Quote</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </>
                  )}
                </button>
              </div>

              {/* Confidentiality Footer */}
              <div className="flex items-center justify-center gap-1.5 pt-1 text-[11px] text-[#757CB6]">
                <Lock className="w-3.5 h-3.5 text-[#63A26B]" />
                <span>Your information is kept 100% confidential.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

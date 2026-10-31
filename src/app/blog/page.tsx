"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, Bell, CheckCircle2, ArrowLeft } from "lucide-react";

export default function BlogPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubscribed(true);
      try {
        localStorage.setItem("aonic_blog_subscriber", email);
      } catch (err) {}
    }, 500);
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-white px-4 sm:px-6 lg:px-8 py-24 text-[#0E0E25] relative overflow-hidden">
      {/* Background Soft Glows (#1926A0 Royal Blue & #FFDB18 Yellow) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#1926A0]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#FFDB18]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-xl w-full mx-auto text-center space-y-8 relative z-10">
        {/* Coming Soon Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFDB18]/25 border border-[#FFDB18] text-[#000000] text-xs font-black uppercase tracking-wider shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#000000]" />
          Coming Soon
        </div>

        {/* Minimal Hero Heading */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl font-black text-[#0E0E25] tracking-tight">
            Coming Soon
          </h1>
          <p className="text-base sm:text-lg text-[#0E0E25]/75 leading-relaxed max-w-md mx-auto">
            Our technical publications and industry dispatch are currently in the works. Leave your email to get notified the moment we go live.
          </p>
        </div>

        {/* Notify Me Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#757CB6]/30 shadow-xl shadow-[#1926A0]/5">
          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="flex-1 px-4 py-3.5 rounded-xl bg-white border border-[#757CB6]/40 text-[#0E0E25] placeholder:text-[#757CB6] text-sm focus:outline-none focus:border-[#1926A0] focus:ring-2 focus:ring-[#1926A0]/20 transition-all shadow-sm"
              />
              <button
                type="submit"
                disabled={submitting}
                className="px-6 py-3.5 rounded-xl bg-[#1926A0] hover:bg-[#131e80] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#1926A0]/25 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 shrink-0"
              >
                <Bell className="w-4 h-4 text-[#FFDB18]" />
                {submitting ? "Saving..." : "Notify Me"}
              </button>
            </form>
          ) : (
            <div className="p-4 rounded-xl bg-[#63A26B]/15 border border-[#63A26B]/40 flex items-center justify-center gap-3 text-sm text-[#0E0E25] font-semibold animate-in fade-in duration-300">
              <CheckCircle2 className="w-5 h-5 text-[#63A26B] shrink-0" />
              <span>
                You&apos;re on the list! We&apos;ll notify <strong className="font-bold">{email}</strong> when we launch.
              </span>
            </div>
          )}
        </div>

        {/* Back to Home Link */}
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#757CB6] hover:text-[#1926A0] uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

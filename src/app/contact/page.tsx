"use client";

import React, { useState } from "react";
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle,
  HelpCircle,
  Package,
  Layers,
  Navigation
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "Website Development",
    // Material specific conditional fields
    materialName: "",
    materialGrade: "",
    materialForm: "Round Rod",
    quantity: "",
    deliveryLocation: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const isMaterialCategory =
    formData.serviceType === "Industrial Material Import & Supply" ||
    formData.serviceType.includes("Material") ||
    formData.serviceType.includes("Titanium") ||
    formData.serviceType.includes("Rare-Earth") ||
    formData.serviceType.includes("Electronic Chip");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit inquiry. Please try again.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setErrorMsg(err.message || "An unexpected error occurred. Please contact us via WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  const faqs = [
    {
      q: "How soon do I receive a price quote?",
      a: "For standard websites and POS software, we provide a formal estimate within 4 hours. For industrial materials (Titanium, rare-earth alloys, IC chips), we evaluate the prevailing global mill rates and deliver a landed quote with customs and freight within 24 hours.",
    },
    {
      q: "What is your Minimum Order Quantity (MOQ) for materials?",
      a: "Unlike traditional bulk importers demanding 500kg+, we support small-quantity supply starting from as low as 1kg to 5kg for research labs, CNC prototyping, and trial runs.",
    },
    {
      q: "Do you supply Mill Test Certificates (MTC) and GST invoices?",
      a: "Yes, 100% of material imports include genuine EN 10204 3.1 Mill Test Certificates with chemical assay and mechanical properties, along with official GST tax invoices for full input tax credit (ITC).",
    },
    {
      q: "Can I request a live demo for the POS & Billing Software?",
      a: "Absolutely. Select 'POS & Billing Software' in the form, and our product specialist will arrange a 20-minute screen-share or share interactive credentials immediately.",
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-digital-500/10 border border-brand-digital-500/20 text-brand-digital-400 text-xs font-semibold uppercase tracking-wider mb-4">
          Direct Communication & Fast Quotes
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Let’s Build Your Software or Source Your Materials
        </h1>
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
          We reply within 24 hours. Fill out the form below or message our engineering team directly on WhatsApp for immediate assistance.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Info & Channels (Left 5 Cols) */}
        <div className="lg:col-span-5 space-y-8">
          {/* Quick WhatsApp Action Banner */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/60 to-slate-900 border border-emerald-500/30 shadow-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Instant WhatsApp Connect</h3>
                <p className="text-xs text-slate-300">Fastest response for technical queries & urgent material orders</p>
              </div>
            </div>
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors shadow-lg shadow-emerald-600/20"
            >
              Start WhatsApp Chat
              <Send className="w-4 h-4" />
            </a>
          </div>

          {/* Direct Details Card */}
          <div className="p-6 rounded-2xl glass-panel space-y-6">
            <h3 className="text-base font-semibold text-white uppercase tracking-wider">
              Direct Contact Information
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-slate-800 text-brand-digital-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Phone Support</span>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="text-white font-mono hover:text-brand-digital-400 transition-colors font-medium text-base"
                  >
                    {COMPANY_INFO.displayPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-slate-800 text-brand-digital-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Official Email</span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-white hover:text-brand-digital-400 transition-colors font-medium text-base"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-slate-800 text-brand-industrial-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Registered Location</span>
                  <span className="text-white font-medium">
                    {COMPANY_INFO.address}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-slate-800 text-brand-industrial-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Operating Hours</span>
                  <span className="text-white font-medium">
                    {COMPANY_INFO.workingHours}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                <span className="text-slate-400 block text-[10px]">VERIFIED GSTIN</span>
                <span className="text-slate-200 font-mono font-medium">{COMPANY_INFO.gstin}</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                <span className="text-slate-400 block text-[10px]">IMPORT EXPORT CODE (IEC)</span>
                <span className="text-slate-200 font-mono font-medium">{COMPANY_INFO.iecNumber}</span>
              </div>
            </div>

            {/* Google Maps Location Preview */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-300 block mb-2">Office Location Map</span>
              <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 group">
                <iframe
                  title="Aonictech Hyderabad Headquarters"
                  src={COMPANY_INFO.googleMapsEmbedUrl}
                  width="100%"
                  height="160"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(85%)" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-brand-dark-950/90 border border-slate-700 text-xs font-medium text-brand-digital-400 hover:text-white flex items-center gap-1.5 shadow-lg backdrop-blur-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Get Directions in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* FAQs Accordion/List */}
          <div className="p-6 rounded-2xl glass-panel space-y-4">
            <h3 className="text-base font-semibold text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-brand-digital-400" />
              Frequently Asked Questions
            </h3>
            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <h4 className="text-xs font-semibold text-white mb-1.5">{faq.q}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Interactive Quotation Form (Right 7 Cols) */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-digital-500/10 blur-3xl pointer-events-none rounded-full" />
            
            {submitted ? (
              <div className="py-16 text-center space-y-5 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you for reaching out. Our engineering & procurement desk will review your specifications and contact you at <strong className="text-white">{formData.email}</strong> or <strong className="text-white">{formData.phone}</strong> within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      phone: "",
                      email: "",
                      serviceType: "Website Development",
                      materialName: "",
                      materialGrade: "",
                      materialForm: "Round Rod",
                      quantity: "",
                      deliveryLocation: "",
                      message: "",
                    });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">
                    Request a Customized Quote
                  </h2>
                  <p className="text-xs text-slate-400">
                    Select your service. For materials, specify grade and required dimensions for instant mill pricing.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3.5 rounded-xl bg-red-950/60 border border-red-800/60 text-red-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Primary Category Selector Dropdown */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    I am interested in: <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-digital-500 focus:ring-1 focus:ring-brand-digital-500"
                    required
                  >
                    <optgroup label="Digital Solutions & Branding">
                      <option value="Website Development">Website Development (Restaurant, Shop, Startup)</option>
                      <option value="E-commerce Development">E-Commerce Storefront (Payment & Shipping)</option>
                      <option value="POS & Billing Software">POS & Billing Software (GST Invoicing & Reports)</option>
                      <option value="Custom Software & Websites">Custom Web Application / Internal Tools</option>
                      <option value="Logo & Brand Identity Design">Logo & Brand Identity Design</option>
                      <option value="Graphic & Packaging Design">Graphic, Packaging & Label Design</option>
                    </optgroup>
                    <optgroup label="Industrial Materials Import & Supply">
                      <option value="Industrial Material Import & Supply">Titanium & Specialty Alloys (Sheet, Rod, Wire, Powder)</option>
                      <option value="Rare-Earth Material Supply">Rare-Earth Elements & Neodymium Magnets</option>
                      <option value="Electronic Chip Sourcing">Electronic Chip (IC) & Component Sourcing</option>
                      <option value="Small-Quantity Low MOQ Supply">Small-Quantity Supply (Low MOQ Prototyping)</option>
                      <option value="Custom Sourcing on Request">Custom Sourcing on Request (Share Specs)</option>
                    </optgroup>
                  </select>
                </div>

                {/* Basic Personal / Company Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-digital-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Phone / WhatsApp Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-digital-500 font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. contact@yourbusiness.com"
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-digital-500"
                  />
                </div>

                {/* CONDITIONAL FIELDS: Triggered when an Industrial Material is Selected */}
                {isMaterialCategory && (
                  <div className="p-5 rounded-2xl bg-brand-industrial-500/10 border border-brand-industrial-500/30 space-y-4 animate-in fade-in duration-300">
                    <div className="flex items-center gap-2 pb-2 border-b border-brand-industrial-500/20 text-brand-industrial-400">
                      <Layers className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider">
                        Material Specifications (Required for Mill Pricing)
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                          Material Name / Alloy Type
                        </label>
                        <input
                          type="text"
                          name="materialName"
                          value={formData.materialName}
                          onChange={handleChange}
                          placeholder="e.g. Titanium, Inconel, Neodymium N52"
                          className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-brand-industrial-500"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                          Specific Grade / ASTM / DIN
                        </label>
                        <input
                          type="text"
                          name="materialGrade"
                          value={formData.materialGrade}
                          onChange={handleChange}
                          placeholder="e.g. Grade 5 (Ti-6Al-4V), STM32F4"
                          className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-brand-industrial-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                          Form Needed
                        </label>
                        <select
                          name="materialForm"
                          value={formData.materialForm}
                          onChange={handleChange}
                          className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-brand-industrial-500"
                        >
                          <option value="Round Rod">Round Rod / Bar</option>
                          <option value="Sheet / Plate">Sheet / Plate</option>
                          <option value="Wire / Coil">Wire / Coil</option>
                          <option value="Spherical 3D Powder">Spherical 3D Powder</option>
                          <option value="Ingot / Billet">Ingot / Billet</option>
                          <option value="Electronic IC Reel">Electronic IC Reel / Tube</option>
                          <option value="Custom Dimension">Custom Dimension</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                          Quantity Needed (Low MOQ OK)
                        </label>
                        <input
                          type="text"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          placeholder="e.g. 5 kg or 50 pcs"
                          className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-brand-industrial-500"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                          Delivery City / Pincode
                        </label>
                        <input
                          type="text"
                          name="deliveryLocation"
                          value={formData.deliveryLocation}
                          onChange={handleChange}
                          placeholder="e.g. Hyderabad - 500001"
                          className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-brand-industrial-500"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Requirement / Message Details */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Project Details or Specific Requirements
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your website pages, software workflow, or required material tolerances..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-digital-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-digital-600 via-brand-digital-500 to-brand-industrial-500 hover:from-brand-digital-500 hover:to-brand-industrial-400 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-brand-digital-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                >
                  {submitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Processing Quote Request...
                    </>
                  ) : (
                    <>
                      Submit Request for Quote
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-2">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    No spam guaranteed
                  </span>
                  <span>•</span>
                  <span>Direct phone & WhatsApp support</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

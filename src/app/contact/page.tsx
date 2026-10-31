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
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-white text-[#0E0E25]">
      {/* Page Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#757CB6]/30 text-[#1926A0] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
          Direct Communication & Fast Quotes
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-[#0E0E25] tracking-tight mb-4">
          Let’s Build Your Software or Source Your Materials
        </h1>
        <p className="text-[#0E0E25]/75 text-base sm:text-lg max-w-2xl mx-auto">
          We reply within 24 hours. Fill out the form below or message our engineering team directly on WhatsApp for immediate assistance.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Info & Channels (Left 5 Cols) */}
        <div className="lg:col-span-5 space-y-8">
          {/* Quick WhatsApp Action Banner in Green (#63A26B) */}
          <div className="p-6 rounded-2xl bg-[#63A26B]/15 border border-[#63A26B]/40 shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 rounded-xl bg-[#63A26B] text-white">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0E0E25]">Instant WhatsApp Connect</h3>
                <p className="text-xs text-[#0E0E25]/75">Fastest response for technical queries & urgent material orders</p>
              </div>
            </div>
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full py-3.5 px-4 rounded-xl bg-[#63A26B] hover:bg-[#4c8553] text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-lg shadow-[#63A26B]/25"
            >
              Start WhatsApp Chat
              <Send className="w-4 h-4" />
            </a>
          </div>

          {/* Direct Details Card */}
          <div className="p-7 rounded-2xl bg-white border border-[#757CB6]/25 shadow-md space-y-6">
            <h3 className="text-lg font-bold text-[#0E0E25] uppercase tracking-wider">
              Direct Contact Information
            </h3>

            <div className="space-y-5 text-sm sm:text-base">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#757CB6]/15 text-[#1926A0] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#757CB6] block uppercase tracking-wider">Phone Support</span>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="text-[#0E0E25] font-mono hover:text-[#1926A0] transition-colors font-bold text-base sm:text-lg"
                  >
                    {COMPANY_INFO.displayPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#757CB6]/15 text-[#1926A0] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#757CB6] block uppercase tracking-wider">Official Email</span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-[#0E0E25] hover:text-[#1926A0] transition-colors font-bold text-base sm:text-lg"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#757CB6]/15 text-[#0E0E25] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#757CB6] block uppercase tracking-wider">Registered Location</span>
                  <span className="text-[#0E0E25] font-medium text-sm sm:text-base leading-relaxed block">
                    {COMPANY_INFO.address}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#757CB6]/15 text-[#0E0E25] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#757CB6] block uppercase tracking-wider">Operating Hours</span>
                  <span className="text-[#0E0E25] font-medium text-sm sm:text-base">
                    {COMPANY_INFO.workingHours}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#757CB6]/20 grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-[#757CB6]/10 border border-[#757CB6]/20">
                <span className="text-[#757CB6] block text-xs font-bold tracking-wider">VERIFIED GSTIN</span>
                <span className="text-[#0E0E25] font-mono font-bold text-xs sm:text-sm">{COMPANY_INFO.gstin}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#757CB6]/10 border border-[#757CB6]/20">
                <span className="text-[#757CB6] block text-xs font-bold tracking-wider">IMPORT EXPORT CODE</span>
                <span className="text-[#0E0E25] font-mono font-bold text-xs sm:text-sm">{COMPANY_INFO.iecNumber}</span>
              </div>
            </div>

            {/* Google Maps Location Preview */}
            <div className="pt-2">
              <span className="text-sm font-bold text-[#0E0E25] block mb-2">Office Location Map</span>
              <div className="relative rounded-xl overflow-hidden border border-[#757CB6]/30 bg-white group shadow-sm">
                <iframe
                  title="Aonictech Hyderabad Headquarters"
                  src={COMPANY_INFO.googleMapsEmbedUrl}
                  width="100%"
                  height="170"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 px-3.5 py-2 rounded-lg bg-white/95 border border-[#757CB6]/40 text-xs font-bold text-[#1926A0] hover:text-[#0E0E25] flex items-center gap-1.5 shadow-md backdrop-blur-sm transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Directions in Maps
                </a>
              </div>
            </div>
          </div>

          {/* FAQs Accordion/List */}
          <div className="p-7 rounded-2xl bg-white border border-[#757CB6]/25 shadow-md space-y-4">
            <h3 className="text-lg font-bold text-[#0E0E25] flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#1926A0]" />
              Frequently Asked Questions
            </h3>
            <div className="space-y-3.5">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-[#757CB6]/20 shadow-sm space-y-1.5">
                  <h4 className="text-sm font-bold text-[#0E0E25]">{faq.q}</h4>
                  <p className="text-sm text-[#0E0E25]/75 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Interactive Quotation Form (Right 7 Cols) */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#757CB6]/25 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1926A0]/5 blur-3xl pointer-events-none rounded-full" />
            
            {submitted ? (
              <div className="py-16 text-center space-y-5 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-[#63A26B]/20 text-[#63A26B] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-[#0E0E25]">Inquiry Received!</h3>
                <p className="text-[#0E0E25]/75 text-sm max-w-md mx-auto">
                  Thank you for reaching out. Our engineering & procurement desk will review your specifications and contact you at <strong className="text-[#0E0E25]">{formData.email}</strong> or <strong className="text-[#0E0E25]">{formData.phone}</strong> within 24 hours.
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
                  className="px-6 py-2.5 rounded-xl bg-[#1926A0] hover:bg-[#131e80] text-white text-xs font-bold transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#0E0E25] mb-2">
                    Request a Customized Quote
                  </h2>
                  <p className="text-sm text-[#0E0E25]/75 leading-relaxed">
                    Select your service. For materials, specify grade and required dimensions for instant mill pricing.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm flex items-center gap-2.5">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Primary Category Selector Dropdown */}
                <div>
                  <label className="block text-sm font-bold text-[#0E0E25] mb-2">
                    I am interested in: <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#757CB6]/30 text-[#0E0E25] text-base focus:outline-none focus:border-[#1926A0] focus:ring-1 focus:ring-[#1926A0] font-medium shadow-sm"
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#0E0E25] mb-2">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#757CB6]/30 text-[#0E0E25] text-base focus:outline-none focus:border-[#1926A0] shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0E0E25] mb-2">
                      Phone / WhatsApp Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#757CB6]/30 text-[#0E0E25] text-base focus:outline-none focus:border-[#1926A0] font-mono shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0E0E25] mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. contact@yourbusiness.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#757CB6]/30 text-[#0E0E25] text-base focus:outline-none focus:border-[#1926A0] shadow-sm"
                  />
                </div>

                {/* CONDITIONAL FIELDS: Triggered when an Industrial Material is Selected */}
                {isMaterialCategory && (
                  <div className="p-6 rounded-2xl bg-[#FFDB18]/15 border border-[#FFDB18]/40 space-y-4 animate-in fade-in duration-300">
                    <div className="flex items-center gap-2 pb-2 border-b border-[#FFDB18]/30 text-[#0E0E25]">
                      <Layers className="w-5 h-5 text-[#0E0E25]" />
                      <span className="text-sm font-bold uppercase tracking-wider">
                        Material Specifications (Required for Mill Pricing)
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#0E0E25] mb-1.5">
                          Material Name / Alloy Type
                        </label>
                        <input
                          type="text"
                          name="materialName"
                          value={formData.materialName}
                          onChange={handleChange}
                          placeholder="e.g. Titanium, Inconel, Neodymium N52"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#757CB6]/30 text-[#0E0E25] text-sm focus:outline-none focus:border-[#1926A0] shadow-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#0E0E25] mb-1.5">
                          Specific Grade / ASTM / DIN
                        </label>
                        <input
                          type="text"
                          name="materialGrade"
                          value={formData.materialGrade}
                          onChange={handleChange}
                          placeholder="e.g. Grade 5 (Ti-6Al-4V), STM32F4"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#757CB6]/30 text-[#0E0E25] text-sm focus:outline-none focus:border-[#1926A0] shadow-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-[#0E0E25] mb-1.5">
                          Form Needed
                        </label>
                        <select
                          name="materialForm"
                          value={formData.materialForm}
                          onChange={handleChange}
                          className="w-full px-3 py-2.5 rounded-lg bg-white border border-[#757CB6]/30 text-[#0E0E25] text-sm focus:outline-none focus:border-[#1926A0] shadow-sm font-medium"
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
                        <label className="block text-xs font-semibold text-[#0E0E25] mb-1.5">
                          Quantity Needed (Low MOQ OK)
                        </label>
                        <input
                          type="text"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          placeholder="e.g. 5 kg or 50 pcs"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#757CB6]/30 text-[#0E0E25] text-sm focus:outline-none focus:border-[#1926A0] shadow-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#0E0E25] mb-1.5">
                          Delivery City / Pincode
                        </label>
                        <input
                          type="text"
                          name="deliveryLocation"
                          value={formData.deliveryLocation}
                          onChange={handleChange}
                          placeholder="e.g. Hyderabad - 500001"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#757CB6]/30 text-[#0E0E25] text-sm focus:outline-none focus:border-[#1926A0] shadow-sm"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Requirement / Message Details */}
                <div>
                  <label className="block text-sm font-semibold text-[#0E0E25] mb-2">
                    Project Details or Specific Requirements
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your website pages, software workflow, or required material tolerances..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#757CB6]/30 text-[#0E0E25] text-base focus:outline-none focus:border-[#1926A0] shadow-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-xl bg-[#1926A0] hover:bg-[#131e80] text-white font-bold text-base uppercase tracking-wider shadow-lg shadow-[#1926A0]/25 transition-all flex items-center justify-center gap-2.5 disabled:opacity-50 cursor-pointer"
                >
                  {submitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Processing Quote Request...
                    </>
                  ) : (
                    <>
                      Submit Request for Quote
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-4 text-xs font-semibold text-[#757CB6] pt-2">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#63A26B]" />
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

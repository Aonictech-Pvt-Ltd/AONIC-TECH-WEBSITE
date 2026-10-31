import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, ArrowLeft, Mail, Phone } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-12 bg-white text-[#0E0E25]">
      {/* Header */}
      <div className="space-y-4 border-b border-[#757CB6]/20 pb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-[#1926A0] hover:text-[#0E0E25] font-semibold transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
        </Link>
        <div className="flex items-center gap-2.5">
          <div className="p-2.5 rounded-xl bg-[#1926A0]/10 border border-[#1926A0]/20 text-[#1926A0]">
            <Lock className="w-5 h-5" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-[#0E0E25] tracking-tight">
            Privacy Policy
          </h1>
        </div>
        <p className="text-xs text-[#757CB6] font-mono">
          Last Revised: October 31, 2026 • Effective Immediately
        </p>
      </div>

      <div className="space-y-8 text-sm text-[#0E0E25]/80 leading-relaxed">
        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#0E0E25] flex items-center gap-2">
            <span className="text-[#1926A0] font-mono text-xs font-bold">01.</span>
            Introduction & Scope
          </h2>
          <p>
            {COMPANY_INFO.legalName} ("Aonictech", "we", "our", or "us") operates the website and digital portal accessible at aonictech.com. This Privacy Policy outlines our protocols regarding the collection, handling, storage, and protection of information obtained through our two operating divisions:
          </p>
          <ul className="list-disc list-inside space-y-1 text-[#0E0E25]/75 text-xs pl-2">
            <li><strong>Digital Solutions & Branding:</strong> Website design, E-commerce, POS & billing software development, and branding assets.</li>
            <li><strong>Industrial Materials Import & Supply:</strong> Direct sourcing, port clearance, and delivery of Titanium alloys, rare-earth magnets, electronic ICs, and specialty metals.</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#0E0E25] flex items-center gap-2">
            <span className="text-[#1926A0] font-mono text-xs font-bold">02.</span>
            Information We Collect
          </h2>
          <p>
            We collect information strictly necessary to provide customized engineering proposals, software deployments, and material quotations:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-white border border-[#757CB6]/25 shadow-sm space-y-2 text-xs">
              <strong className="text-[#0E0E25] block font-bold">Contact & Identity Data</strong>
              <p className="text-[#0E0E25]/75">
                Full name, commercial entity name, email address, telephone and WhatsApp number, and delivery shipping addresses.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#757CB6]/25 shadow-sm space-y-2 text-xs">
              <strong className="text-[#0E0E25] block font-bold">Technical & Material RFQ Data</strong>
              <p className="text-[#0E0E25]/75">
                CAD models, technical drawings, chemical alloy grades (e.g. Ti-6Al-4V, NdFeB), required dimensions, and software user workflows.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-3 p-5 rounded-2xl bg-[#63A26B]/10 border border-[#63A26B]/25">
          <h2 className="text-lg font-bold text-[#0E0E25] flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#63A26B]" />
            03. Non-Disclosure & Intellectual Property Protection
          </h2>
          <p className="text-xs sm:text-sm text-[#0E0E25]/85">
            We hold industrial confidentiality in the highest regard. All proprietary CAD drawings, engineering schematics, and chemical specifications submitted for custom material sourcing are treated as strictly confidential. We will never sell, lease, or share your proprietary product designs with any unauthorized third party.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#0E0E25] flex items-center gap-2">
            <span className="text-[#1926A0] font-mono text-xs font-bold">04.</span>
            GST & Invoicing Data
          </h2>
          <p>
            For all commercial transactions, customer GSTIN numbers, HSN classifications, and billing addresses are recorded in full compliance with the Central Goods and Services Tax (CGST) and State Goods and Services Tax (SGST) Acts of India. Official tax invoices are issued to enable 100% Input Tax Credit (ITC) for your enterprise.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#0E0E25] flex items-center gap-2">
            <span className="text-[#1926A0] font-mono text-xs font-bold">05.</span>
            Infrastructure & Third-Party Processors
          </h2>
          <p>
            Our web platform is hosted on secure cloud infrastructure utilizing industry-standard TLS encryption. Trusted third-party processors include:
          </p>
          <ul className="list-disc list-inside space-y-1 text-[#0E0E25]/75 text-xs pl-2">
            <li><strong>Supabase:</strong> Encrypted PostgreSQL database storage with Row-Level Security (RLS).</li>
            <li><strong>Resend:</strong> High-deliverability transactional email notification service.</li>
            <li><strong>Upstash Redis:</strong> Edge rate limiting to protect public quote endpoints from malicious traffic.</li>
            <li><strong>Google Maps:</strong> Location preview mapping for our registered Hyderabad headquarters.</li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#0E0E25] flex items-center gap-2">
            <span className="text-[#1926A0] font-mono text-xs font-bold">06.</span>
            Contact & Grievance Redressal
          </h2>
          <p>
            For any inquiries, data deletion requests, or confidentiality questions, please reach out directly to our administration team:
          </p>
          <div className="p-4 rounded-xl bg-white border border-[#757CB6]/25 shadow-sm space-y-2 text-xs">
            <div className="flex items-center gap-2 text-[#0E0E25]">
              <Mail className="w-4 h-4 text-[#1926A0]" />
              <span>Email: <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#1926A0] underline font-semibold">{COMPANY_INFO.email}</a></span>
            </div>
            <div className="flex items-center gap-2 text-[#0E0E25]">
              <Phone className="w-4 h-4 text-[#1926A0]" />
              <span>Phone / WhatsApp: <a href={`tel:${COMPANY_INFO.phone}`} className="font-mono font-semibold">{COMPANY_INFO.displayPhone}</a></span>
            </div>
            <div className="text-[#757CB6] pt-1 font-medium">
              Location: {COMPANY_INFO.address}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

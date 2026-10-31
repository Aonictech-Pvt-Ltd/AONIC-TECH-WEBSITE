"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Scale, 
  Lock, 
  ShieldCheck, 
  ArrowLeft, 
  FileText, 
  CheckCircle2, 
  Mail, 
  Phone,
  Building2,
  FileCheck2
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { cn } from "@/lib/utils";

type ActiveTab = "all" | "terms" | "privacy";

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("all");

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12 bg-white text-[#0E0E25]">
      {/* ========================================================================= */}
      {/* 1. PAGE HEADER                                                            */}
      {/* ========================================================================= */}
      <div className="space-y-6 border-b border-[#757CB6]/20 pb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-[#1926A0] hover:text-[#0E0E25] font-semibold transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
        </Link>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="p-2.5 rounded-xl bg-[#1926A0]/10 border border-[#1926A0]/20 text-[#1926A0]">
                <Scale className="w-5 h-5" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-[#0E0E25] tracking-tight">
                Terms of Service & Privacy Policy
              </h1>
            </div>
            <p className="text-xs text-[#757CB6] font-mono">
              Last Revised: October 31, 2026 • Governing Corporate Operations & Customer Privacy
            </p>
          </div>

          {/* Quick Tab Filter */}
          <div className="inline-flex items-center p-1 rounded-xl bg-slate-100 border border-[#757CB6]/20 self-start sm:self-center">
            <button
              onClick={() => setActiveTab("all")}
              className={cn(
                "px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all",
                activeTab === "all"
                  ? "bg-[#1926A0] text-white shadow-sm"
                  : "text-[#0E0E25]/70 hover:text-[#0E0E25]"
              )}
            >
              All Documents
            </button>
            <button
              onClick={() => setActiveTab("terms")}
              className={cn(
                "px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all",
                activeTab === "terms"
                  ? "bg-[#1926A0] text-white shadow-sm"
                  : "text-[#0E0E25]/70 hover:text-[#0E0E25]"
              )}
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => setActiveTab("privacy")}
              className={cn(
                "px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all",
                activeTab === "privacy"
                  ? "bg-[#1926A0] text-white shadow-sm"
                  : "text-[#0E0E25]/70 hover:text-[#0E0E25]"
              )}
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. PART I: TERMS & CONDITIONS                                             */}
      {/* ========================================================================= */}
      {(activeTab === "all" || activeTab === "terms") && (
        <article id="terms" className="space-y-8 scroll-mt-24">
          <div className="flex items-center gap-2.5 pb-2 border-b-2 border-[#1926A0]/20">
            <FileText className="w-5 h-5 text-[#1926A0]" />
            <h2 className="text-2xl font-black text-[#0E0E25] tracking-tight">
              Part I — Terms & Conditions of Engagement
            </h2>
          </div>

          <div className="space-y-8 text-sm text-[#0E0E25]/80 leading-relaxed">
            {/* Section 1 */}
            <section className="space-y-3">
              <h3 className="text-base font-bold text-[#0E0E25] flex items-center gap-2">
                <span className="text-[#1926A0] font-mono text-xs font-bold">1.1</span>
                Commercial Engagement & Scope
              </h3>
              <p>
                These Terms and Conditions govern all commercial agreements, software development projects, and industrial materials supply contracts executed by {COMPANY_INFO.legalName} ("Aonictech"). By submitting an online quote request, issuing a Purchase Order (PO), or signing a Service Level Agreement (SLA), the client agrees to be bound by these provisions.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h3 className="text-base font-bold text-[#0E0E25] flex items-center gap-2">
                <span className="text-[#1926A0] font-mono text-xs font-bold">1.2</span>
                Digital Solutions & Software Terms
              </h3>
              <div className="space-y-3 pl-4 border-l-2 border-[#1926A0]/30 text-xs sm:text-sm text-[#0E0E25]/75">
                <p>
                  <strong className="text-[#0E0E25]">Milestone Deliverables:</strong> Websites and custom software applications are built according to agreed scope documents. Client feedback and revisions must be provided within 7 business days of milestone completion.
                </p>
                <p>
                  <strong className="text-[#0E0E25]">Source Code & IP Transfer:</strong> Upon 100% final payment settlement, full ownership of custom frontend designs, domain configurations, and client-specific application source code is transferred to the client.
                </p>
                <p>
                  <strong className="text-[#0E0E25]">POS Software Licenses:</strong> POS licenses are provided on active subscription terms. Clients agree not to decompile, reverse-engineer, or sublicense the core POS binaries without written authorization.
                </p>
                <p>
                  <strong className="text-[#0E0E25]">Post-Launch Warranty:</strong> All digital solutions include a standard 30 to 90-day technical support warranty period to address bug fixes and ensure stability.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h3 className="text-base font-bold text-[#0E0E25] flex items-center gap-2">
                <span className="text-[#0E0E25] font-mono text-xs font-bold">1.3</span>
                Industrial Materials Import & Quality Assays
              </h3>
              <div className="space-y-3 pl-4 border-l-2 border-[#FFDB18] text-xs sm:text-sm text-[#0E0E25]/75">
                <p>
                  <strong className="text-[#0E0E25]">Price Quotation Validity:</strong> Because global titanium, rare-earth elements, and raw alloy prices fluctuate daily on international commodity markets, formal quotations remain valid strictly for the window stated on the estimate (typically 3 to 7 calendar days).
                </p>
                <p>
                  <strong className="text-[#0E0E25]">Mill Test Certificates (MTC):</strong> 100% of material shipments are accompanied by official EN 10204 3.1 Inspection Certificates specifying chemical analysis, tensile strength, yield strength, and dimensional tolerances.
                </p>
                <p>
                  <strong className="text-[#0E0E25]">Port Customs & Delivery:</strong> Aonictech operates under Director General of Foreign Trade (DGFT) Import Export Code ({COMPANY_INFO.iecNumber}). We handle customs assessments, Bill of Entry clearance, and insured doorstep logistics.
                </p>
                <p>
                  <strong className="text-[#0E0E25]">Material Inspection & Non-Conformance:</strong> Clients must inspect deliveries within 5 business days of receipt. In the event of chemical or dimensional deviation against the agreed ASTM standard, laboratory test results will guide immediate replacement or credit.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h3 className="text-base font-bold text-[#0E0E25] flex items-center gap-2">
                <span className="text-[#1926A0] font-mono text-xs font-bold">1.4</span>
                Tax Invoices & GST Compliance
              </h3>
              <p>
                All invoices are generated through our verified GSTIN (<strong>{COMPANY_INFO.gstin}</strong>) in full accordance with the Goods and Services Tax laws of India. Correct HSN/SAC codes are applied to ensure your organization receives full Input Tax Credit (ITC). Payment terms are strictly as agreed upon in the commercial quote.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h3 className="text-base font-bold text-[#0E0E25] flex items-center gap-2">
                <span className="text-[#1926A0] font-mono text-xs font-bold">1.5</span>
                Limitation of Liability & Force Majeure
              </h3>
              <p>
                Neither party shall be liable for failure or delay in performance caused by circumstances beyond reasonable control, including port strikes, maritime blockades, government trade embargoes, or carrier ground stoppages. In no event shall Aonictech's aggregate liability exceed the total amounts paid under the specific purchase order.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h3 className="text-base font-bold text-[#0E0E25] flex items-center gap-2">
                <span className="text-[#1926A0] font-mono text-xs font-bold">1.6</span>
                Governing Law & Jurisdiction
              </h3>
              <p>
                These Terms and Conditions shall be interpreted, governed, and construed in accordance with the substantive laws of India. Any legal dispute, arbitration, or litigation arising hereunder shall be submitted to the exclusive jurisdiction of the competent courts of Hyderabad, Telangana.
              </p>
            </section>
          </div>
        </article>
      )}

      {/* Divider when viewing all */}
      {activeTab === "all" && (
        <hr className="border-t-2 border-[#757CB6]/20 my-12" />
      )}

      {/* ========================================================================= */}
      {/* 3. PART II: PRIVACY POLICY                                                */}
      {/* ========================================================================= */}
      {(activeTab === "all" || activeTab === "privacy") && (
        <article id="privacy" className="space-y-8 scroll-mt-24">
          <div className="flex items-center gap-2.5 pb-2 border-b-2 border-[#63A26B]/40">
            <Lock className="w-5 h-5 text-[#63A26B]" />
            <h2 className="text-2xl font-black text-[#0E0E25] tracking-tight">
              Part II — Customer & Enterprise Privacy Policy
            </h2>
          </div>

          <div className="space-y-8 text-sm text-[#0E0E25]/80 leading-relaxed">
            {/* Section 1 */}
            <section className="space-y-3">
              <h3 className="text-base font-bold text-[#0E0E25] flex items-center gap-2">
                <span className="text-[#1926A0] font-mono text-xs font-bold">2.1</span>
                Introduction & Operating Scope
              </h3>
              <p>
                {COMPANY_INFO.legalName} ("Aonictech", "we", "our", or "us") operates the website and digital portal accessible at aonictech.com. This Privacy Policy outlines our protocols regarding the collection, handling, storage, and protection of information obtained through our two operating divisions: Digital Solutions & Branding, and Industrial Materials Import & Supply.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h3 className="text-base font-bold text-[#0E0E25] flex items-center gap-2">
                <span className="text-[#1926A0] font-mono text-xs font-bold">2.2</span>
                Information We Collect
              </h3>
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

            {/* Section 3: NDA & Confidentiality Highlight */}
            <section className="space-y-3 p-5 rounded-2xl bg-[#63A26B]/10 border border-[#63A26B]/25">
              <h3 className="text-base font-bold text-[#0E0E25] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#63A26B]" />
                2.3 Non-Disclosure & Intellectual Property Protection
              </h3>
              <p className="text-xs sm:text-sm text-[#0E0E25]/85">
                We hold industrial confidentiality in the highest regard. All proprietary CAD drawings, engineering schematics, and chemical specifications submitted for custom material sourcing are treated as strictly confidential. We will never sell, lease, or share your proprietary product designs with any unauthorized third party.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h3 className="text-base font-bold text-[#0E0E25] flex items-center gap-2">
                <span className="text-[#1926A0] font-mono text-xs font-bold">2.4</span>
                GST & Invoicing Data Compliance
              </h3>
              <p>
                For all commercial transactions, customer GSTIN numbers, HSN classifications, and billing addresses are recorded in full compliance with the Central Goods and Services Tax (CGST) and State Goods and Services Tax (SGST) Acts of India. Official tax invoices are issued to enable 100% Input Tax Credit (ITC) for your enterprise.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h3 className="text-base font-bold text-[#0E0E25] flex items-center gap-2">
                <span className="text-[#1926A0] font-mono text-xs font-bold">2.5</span>
                Infrastructure & Cloud Security
              </h3>
              <p>
                Our web platform is hosted on secure cloud infrastructure utilizing industry-standard TLS encryption. Transactional notifications and inquiry dispatches are safeguarded via verified Resend API delivery protocols, ensuring your communications remain tamper-proof and private.
              </p>
            </section>
          </div>
        </article>
      )}

      {/* ========================================================================= */}
      {/* 4. CORPORATE CONTACT & INQUIRY CARD                                       */}
      {/* ========================================================================= */}
      <div className="p-6 rounded-2xl bg-white border border-[#757CB6]/30 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h4 className="font-bold text-[#0E0E25] text-base flex items-center gap-2">
            <Building2 className="w-4 h-4 text-[#1926A0]" />
            {COMPANY_INFO.legalName}
          </h4>
          <p className="text-xs text-[#0E0E25]/75 leading-relaxed">
            14-7, P & T Colony, Dilsukhnagar, Hyderabad, Telangana, 500060
          </p>
          <p className="text-xs text-[#757CB6] font-mono">
            GSTIN: {COMPANY_INFO.gstin} • IEC: {COMPANY_INFO.iecNumber}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="px-4 py-2 rounded-xl bg-white border border-[#757CB6]/40 hover:border-[#1926A0] text-[#0E0E25] text-xs font-bold hover:text-[#1926A0] transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5 text-[#1926A0]" />
            {COMPANY_INFO.email}
          </a>
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="px-4 py-2 rounded-xl bg-[#1926A0] text-white hover:bg-[#131e80] text-xs font-bold transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <Phone className="w-3.5 h-3.5" />
            {COMPANY_INFO.displayPhone}
          </a>
        </div>
      </div>
    </div>
  );
}

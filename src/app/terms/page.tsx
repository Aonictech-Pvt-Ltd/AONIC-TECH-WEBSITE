import React from "react";
import Link from "next/link";
import { Scale, ArrowLeft } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function TermsPage() {
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
            <Scale className="w-5 h-5" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-[#0E0E25] tracking-tight">
            Terms & Conditions
          </h1>
        </div>
        <p className="text-xs text-[#757CB6] font-mono">
          Last Revised: October 31, 2026 • Governing Corporate Operations
        </p>
      </div>

      <div className="space-y-8 text-sm text-[#0E0E25]/80 leading-relaxed">
        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#0E0E25] flex items-center gap-2">
            <span className="text-[#1926A0] font-mono text-xs font-bold">01.</span>
            Commercial Engagement & Scope
          </h2>
          <p>
            These Terms and Conditions govern all commercial agreements, software development projects, and industrial materials supply contracts executed by {COMPANY_INFO.legalName} ("Aonictech"). By submitting an online quote request, issuing a Purchase Order (PO), or signing a Service Level Agreement (SLA), the client agrees to these terms.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-[#0E0E25] flex items-center gap-2">
            <span className="text-[#1926A0] font-mono text-xs font-bold">02.</span>
            Digital Solutions & Software Terms
          </h2>
          <div className="space-y-3 pl-4 border-l-2 border-[#1926A0]/30 text-xs text-[#0E0E25]/75">
            <p>
              <strong className="text-[#0E0E25]">Milestone Deliverables:</strong> Websites and custom software applications are built according to agreed scope documents. Client feedback and revisions must be provided within 7 business days of milestone completion.
            </p>
            <p>
              <strong className="text-[#0E0E25]">Source Code & IP Transfer:</strong> Upon 100% final payment settlement, full ownership of the custom frontend designs, domain configurations, and client-specific application source code is transferred to the client.
            </p>
            <p>
              <strong className="text-[#0E0E25]">POS Software Licenses:</strong> QuickServe POS licenses are provided on active subscription terms. Clients agree not to decompile, reverse-engineer, or sublicense the core POS binaries without written authorization.
            </p>
            <p>
              <strong className="text-[#0E0E25]">Post-Launch Warranty:</strong> All digital solutions include a standard 30 to 90-day technical support period to address bug fixes and ensure stability.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-[#0E0E25] flex items-center gap-2">
            <span className="text-[#0E0E25] font-mono text-xs font-bold">03.</span>
            Industrial Materials Import & Quality Assays
          </h2>
          <div className="space-y-3 pl-4 border-l-2 border-[#FFDB18] text-xs text-[#0E0E25]/75">
            <p>
              <strong className="text-[#0E0E25]">Price Quotation Validity:</strong> Because global titanium, rare-earth elements, and raw alloy prices fluctuate daily on the London Metal Exchange (LME) and international spot markets, formal quotations remain valid strictly for the window stated on the estimate (typically 3 to 7 calendar days).
            </p>
            <p>
              <strong className="text-[#0E0E25]">Mill Test Certificates (MTC):</strong> 100% of material shipments are accompanied by official EN 10204 3.1 Inspection Certificates specifying chemical analysis, tensile strength, yield strength, and dimensional tolerances.
            </p>
            <p>
              <strong className="text-[#0E0E25]">Port Customs & Delivery:</strong> Aonictech operates under Director General of Foreign Trade (DGFT) Import Export Code ({COMPANY_INFO.iecNumber}). We handle customs assessments, Bill of Entry clearance, and insured doorstep logistics.
            </p>
            <p>
              <strong className="text-[#0E0E25]">Material Inspection & Non-Conformance:</strong> Clients must inspect deliveries within 5 business days of receipt. In the rare event of chemical or dimensional deviation against the agreed ASTM standard, laboratory test results will guide immediate replacement or credit.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#0E0E25] flex items-center gap-2">
            <span className="text-[#1926A0] font-mono text-xs font-bold">04.</span>
            Tax Invoices & GST Compliance
          </h2>
          <p>
            All invoices are generated through our verified GSTIN (<strong>{COMPANY_INFO.gstin}</strong>) in full accordance with the Goods and Services Tax laws of India. Correct HSN/SAC codes are applied to ensure your organization receives full Input Tax Credit (ITC). Payment terms are strictly as agreed upon in the commercial quote.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#0E0E25] flex items-center gap-2">
            <span className="text-[#1926A0] font-mono text-xs font-bold">05.</span>
            Governing Law & Legal Jurisdiction
          </h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of the Republic of India. Any disputes arising in connection with our services or material contracts shall fall under the exclusive jurisdiction of the competent courts in <strong>Hyderabad, Telangana, India</strong>.
          </p>
        </section>

        {/* Support Section */}
        <div className="p-6 rounded-2xl bg-white border border-[#757CB6]/25 shadow-sm space-y-3 text-xs">
          <h3 className="font-bold text-[#0E0E25] uppercase tracking-wider">
            Need Clarification on Commercial Terms?
          </h3>
          <p className="text-[#0E0E25]/75">
            For master service agreements, high-volume recurring material supply contracts, or custom NDAs, please contact:
          </p>
          <div className="font-mono text-[#1926A0] font-bold">
            {COMPANY_INFO.email} • {COMPANY_INFO.displayPhone}
          </div>
        </div>
      </div>
    </div>
  );
}

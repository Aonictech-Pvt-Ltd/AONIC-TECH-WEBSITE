import React from "react";
import { COMPANY_INFO } from "@/data/company";

export default function TermsPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8 text-slate-300 text-sm leading-relaxed">
      <div>
        <h1 className="text-3xl font-extrabold text-white mb-2">Terms & Conditions</h1>
        <p className="text-xs text-slate-400">Last updated: October 31, 2026</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">1. Agreement to Terms</h2>
        <p>
          By accessing the {COMPANY_INFO.name} portal or engaging our digital software development and industrial materials supply services, you agree to be bound by these Terms and Conditions.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">2. Industrial Materials & Quality Certification</h2>
        <p>
          All imported specialty alloys (Titanium, Rare-Earth elements, Nickel alloys) and electronic components are supplied with official Mill Test Certificates (EN 10204 3.1) and authorized chemical analysis. Due to fluctuations in global metal exchanges (LME), quotations remain valid for the period explicitly stated on the formal estimate.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">3. Digital Solutions & Software Delivery</h2>
        <p>
          Custom software, websites, and QuickServe POS billing solutions are delivered in accordance with agreed development milestones. All software code and licenses are transferred upon receipt of final settlement as outlined in the commercial contract.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">4. Regulatory & Tax Compliance</h2>
        <p>
          All commercial transactions are issued with official GST tax invoices compliant with Indian tax legislation, enabling 100% Input Tax Credit (ITC) eligibility for registered entities (GSTIN: {COMPANY_INFO.gstin}).
        </p>
      </section>
    </div>
  );
}

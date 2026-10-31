import React from "react";
import { COMPANY_INFO } from "@/data/company";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8 text-slate-300 text-sm leading-relaxed">
      <div>
        <h1 className="text-3xl font-extrabold text-white mb-2">Privacy Policy</h1>
        <p className="text-xs text-slate-400">Last updated: October 31, 2026</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">1. Information We Collect</h2>
        <p>
          At {COMPANY_INFO.legalName}, we collect information that you directly provide to us through our quote request forms, contact inquiries, and WhatsApp communication. This includes your name, company name, telephone/WhatsApp number, email address, and project/material technical specifications.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">2. How We Use Your Information</h2>
        <p>
          We use the information we collect solely to provide customized quotations, coordinate software development milestones, facilitate customs clearance and doorstep delivery of industrial materials, and provide ongoing technical support.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">3. Non-Disclosure & Industrial Confidentiality</h2>
        <p>
          We respect the proprietary nature of our clients' engineering designs and material specifications. Technical drawings, CAD models, and alloy requirements submitted for custom sourcing are treated as strictly confidential and will never be shared with third parties without authorization.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">4. Contact Information</h2>
        <p>
          If you have questions regarding this Privacy Policy, please email us at{" "}
          <a href={`mailto:${COMPANY_INFO.email}`} className="text-brand-digital-400 hover:underline">
            {COMPANY_INFO.email}
          </a>{" "}
          or call {COMPANY_INFO.displayPhone}.
        </p>
      </section>
    </div>
  );
}

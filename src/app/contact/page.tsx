import type { Metadata } from "next";
import ContactUs from "@/components/ui/ContactUs";
import AccreditationBadges from "@/components/ui/AccreditationBadges";
import { Phone, Mail, MapPin, MessageSquare, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | AONIC TECH - Dual-Niche Digital & Industrial Solutions",
  description:
    "Direct contact and inquiry desk for AONIC TECH Private Limited. Web development, custom POS software, certified titanium alloys, rare-earth magnets, and electronic chip sourcing in Hyderabad, India.",
};

const CONTACT_INFO = {
  phones: ["+91 9704166455", "+91 7396888679"],
  email: "Aonic.tech@gmail.com",
  address: "14-7, P & T Colony, Dilsukhnagar, Hyderabad, Telangana, 500060",
  hours: "Monday - Saturday: 9:00 AM - 7:00 PM IST",
  whatsappLink: "https://wa.me/919704166455",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 border-b border-[#757CB6]/15 bg-gradient-to-b from-slate-50/70 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1926A0]/10 text-[#1926A0] text-xs font-bold uppercase tracking-wider mb-4 border border-[#1926A0]/15">
            <MessageSquare className="w-4 h-4" />
            Direct Communication Desk
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#0E0E25] tracking-tight max-w-3xl mx-auto">
            Let’s Build Your Software or Source Your Industrial Materials
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#757CB6] max-w-2xl mx-auto leading-relaxed">
            Reach out directly with your phone number, email, and requirements. Our engineering and supply specialists respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Content: Split Contact Information & ContactUs Component */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Verified Corporate Credentials & Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl font-extrabold text-[#0E0E25] tracking-tight">
                Corporate Office & Channels
              </h2>
              <p className="mt-2 text-sm text-[#757CB6] leading-relaxed">
                Connect directly with our Hyderabad headquarters via phone, email, or instant WhatsApp dispatch.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              {/* Phone Card */}
              <div className="p-5 rounded-2xl border border-[#757CB6]/20 bg-white shadow-sm flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#1926A0]/10 text-[#1926A0] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-bold text-[#757CB6]">
                    Direct Phone Support
                  </h3>
                  <div className="mt-1 flex flex-col gap-0.5">
                    {CONTACT_INFO.phones.map((p) => (
                      <a
                        key={p}
                        href={`tel:${p.replace(/[^0-9]/g, "")}`}
                        className="text-base font-bold text-[#0E0E25] hover:text-[#1926A0] transition-colors"
                      >
                        {p}
                      </a>
                    ))}
                  </div>
                  <p className="text-xs text-[#757CB6] mt-1">Available Mon–Sat, 9 AM – 7 PM IST</p>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-5 rounded-2xl border border-[#757CB6]/20 bg-white shadow-sm flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#1926A0]/10 text-[#1926A0] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-bold text-[#757CB6]">
                    Corporate Email
                  </h3>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="mt-1 block text-base font-bold text-[#0E0E25] hover:text-[#1926A0] transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                  <p className="text-xs text-[#757CB6] mt-1">Official RFP & Quote Dispatches</p>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="p-5 rounded-2xl border border-[#63A26B]/30 bg-[#63A26B]/5 shadow-sm flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#63A26B] text-white flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xs uppercase tracking-wider font-bold text-[#0E0E25]">
                      Instant WhatsApp Desk
                    </h3>
                    <span className="w-2 h-2 rounded-full bg-[#63A26B] animate-pulse" />
                  </div>
                  <a
                    href={CONTACT_INFO.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-sm font-bold text-[#63A26B] hover:underline"
                  >
                    Start WhatsApp Chat &rarr;
                  </a>
                  <p className="text-xs text-[#757CB6] mt-0.5">Average reply time: under 15 minutes</p>
                </div>
              </div>

              {/* Headquarters Address */}
              <div className="p-5 rounded-2xl border border-[#757CB6]/20 bg-white shadow-sm flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#0E0E25]/10 text-[#0E0E25] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-bold text-[#757CB6]">
                    Registered Headquarters
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#0E0E25] leading-snug">
                    {CONTACT_INFO.address}
                  </p>
                  <p className="text-xs text-[#757CB6] mt-1">CIN: U33129TG2021PTC153000 • GSTIN: 36AAVCA4598B1Z9</p>
                </div>
              </div>
            </div>

            {/* Verification Guarantee */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-[#757CB6]/15">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0E0E25] mb-2">
                <ShieldCheck className="w-4 h-4 text-[#1926A0]" />
                Direct Company Verification
              </div>
              <ul className="text-xs text-[#757CB6] space-y-1.5">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#63A26B] shrink-0" />
                  <span>Licensed Import-Export Code (IEC: AAVCA4598B)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#63A26B] shrink-0" />
                  <span>Government of India MSME Udyam Registered</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#63A26B] shrink-0" />
                  <span>EN 10204 3.1 Mill Test Certificates provided with all metals</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: The ContactUs Component */}
          <div className="lg:col-span-7">
            <ContactUs
              title="Send Us Your Requirement"
              subtitle="Enter your phone number, email address, and requirement description below. Our team receives instant email notifications to guarantee fast follow-up."
            />
          </div>
        </div>
      </section>

      {/* Accreditation Badges Banner */}
      <section className="py-12 border-t border-[#757CB6]/15 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AccreditationBadges />
        </div>
      </section>
    </div>
  );
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  niche: "digital" | "materials";
  category: "Websites" | "E-Commerce" | "POS Software" | "Custom Software" | "Branding" | "Material Supply";
  clientType: string;
  problem: string;
  solution: string;
  techOrMaterials: string[];
  metrics: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  demoUrl?: string;
  isFeatured?: boolean;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "pos-quickserve",
    slug: "quickserve-pos-billing-system",
    title: "QuickServe Multi-Counter Cloud POS & Billing Suite",
    niche: "digital",
    category: "POS Software",
    clientType: "Multi-branch Bakery & Fast Food Chain",
    problem: "Long customer checkout lines during rush hours and discrepancy in daily GST tax reporting across branches.",
    solution: "Engineered an ultra-fast touch POS with offline-first billing, 3-second thermal printing, barcode scanning, and central cloud inventory sync.",
    techOrMaterials: ["Next.js", "Electron", "PostgreSQL", "ESC/POS Thermal Printing", "GST Automated Engine"],
    metrics: "Reduced checkout billing time by 55%, zero discrepancy in tax audits.",
    testimonial: {
      quote: "AONIC TECH's POS transformed our daily operations. Our cashiers learned it in 15 minutes, and our inventory reports are finally 100% accurate.",
      author: "Rajesh V.",
      role: "Managing Director",
      company: "Creamline Bakes",
    },
    demoUrl: "/projects/quickserve-pos-billing-system",
    isFeatured: true,
  },
  {
    id: "supply-titanium-gr5",
    slug: "aerospace-grade-titanium-gr5-supply",
    title: "Aerospace-Grade Titanium Grade 5 Rods Supply",
    niche: "materials",
    category: "Material Supply",
    clientType: "Precision CNC Defense & Drone Machining Center, Hyderabad",
    problem: "Urgent need for 25kg Ti-6Al-4V round bars with ASTM B348 certification; standard importers demanded 500kg MOQ and 60 days lead time.",
    solution: "Sourced certified 25mm diameter Grade 5 titanium rods, completed expedited customs clearance, and delivered to their workshop in 6 days with EN 10204 3.1 MTC.",
    techOrMaterials: ["Ti-6Al-4V Grade 5", "ASTM B348 Standard", "Customs Clearance", "Doorstep Express Transport"],
    metrics: "Delivered in 6 days at low MOQ, saving client 3 weeks of project standstill.",
    testimonial: {
      quote: "Finding authentic aerospace titanium in small quantities was impossible until AONIC TECH stepped in. Test certificates matched our spectrometer exactly.",
      author: "K. Sreenivas",
      role: "Chief Machining Engineer",
      company: "Precision Flight Systems",
    },
    demoUrl: "/projects/aerospace-grade-titanium-gr5-supply",
    isFeatured: true,
  },
  {
    id: "web-artisan-ecom",
    slug: "nordic-crafts-ecommerce-storefront",
    title: "Artisan Living DTC E-Commerce Platform",
    niche: "digital",
    category: "E-Commerce",
    clientType: "DTC Home Decor & Handcrafted Lifestyle Brand",
    problem: "High cart abandonment on previous slow CMS and manual order dispatch coordination via WhatsApp.",
    solution: "Built a headless Next.js storefront with Razorpay checkout, automated WhatsApp tracking links, and real-time inventory management.",
    techOrMaterials: ["Next.js App Router", "Tailwind CSS", "Razorpay Payment Gateway", "Shiprocket API"],
    metrics: "Page load dropped to 0.8s, checkout conversion jumped by 38%.",
    isFeatured: true,
  },
  {
    id: "supply-neo-magnets",
    slug: "custom-arc-neodymium-n52-magnets",
    title: "Custom High-Flux Neodymium N52 Arc Magnets",
    niche: "materials",
    category: "Material Supply",
    clientType: "Robotics & Electric BLDC Motor R&D Startup",
    problem: "Required custom-dimensioned curved arc magnets with 150°C heat resistance for a high-efficiency drone motor prototype.",
    solution: "Engineered tooling with our certified overseas sintered NdFeB partner, produced 120 arc segments with Ni-Cu-Ni triple plating, and air-freighted door-to-door.",
    techOrMaterials: ["NdFeB N48SH Grade", "Ni-Cu-Ni Anti-Corrosion Coating", "Demagnetization Assay"],
    metrics: "120 custom prototype units delivered in 11 days with 100% flux compliance.",
    isFeatured: true,
  },
  {
    id: "web-spice-route",
    slug: "spice-route-restaurant-portal",
    title: "The Spice Route Restaurant & Digital Menu Suite",
    niche: "digital",
    category: "Websites",
    clientType: "Multi-Cuisine Fine Dining Restaurant",
    problem: "Costly commissions on 3rd-party food aggregators and lack of a direct table reservation channel.",
    solution: "Designed a mobile-first restaurant website with QR code digital menus, direct WhatsApp table reservations, and Google Map local SEO.",
    techOrMaterials: ["Next.js", "Tailwind CSS", "WhatsApp Cloud Link", "Schema.org Rich Snippets"],
    metrics: "Over 350 direct table bookings per month without third-party commission fees.",
  },
  {
    id: "supply-chip-sourcing",
    slug: "stm32f4-microcontrollers-sourcing",
    title: "STM32F4 Industrial Microcontroller Batch Sourcing",
    niche: "materials",
    category: "Material Supply",
    clientType: "Smart Energy Metering IoT Manufacturer",
    problem: "Global broker price gouging and counterfeit risks for STM32 microcontrollers needed for a pilot run of 200 energy meters.",
    solution: "Procured 200 factory-sealed STM32F401RET6 MCUs through authorized Taiwan inventory with certified factory lot-codes and anti-static moisture packing.",
    techOrMaterials: ["STM32F401RET6 LQFP-64", "MSL 3 Moisture-Proof Packaging", "Full Lot Code Verification"],
    metrics: "Delivered 100% genuine ICs at 35% lower cost than domestic spot brokers.",
  },
];

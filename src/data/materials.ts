export interface MaterialCatalogItem {
  id: string;
  name: string;
  category: "Titanium & Alloys" | "Rare-Earth Elements" | "Electronic Chips (ICs)" | "Specialty Metals";
  grade: string;
  forms: string[];
  purity: string;
  standards: string;
  moq: string;
  leadTime: string;
  testCert: string;
  application: string;
}

export const MATERIALS_CATALOG: MaterialCatalogItem[] = [
  {
    id: "ti-gr5",
    name: "Titanium Grade 5 (Ti-6Al-4V)",
    category: "Titanium & Alloys",
    grade: "Ti-6Al-4V (Grade 5)",
    forms: ["Round Rod", "Plate", "Sheet", "Wire", "Forged Block"],
    purity: "Al: 5.5-6.75%, V: 3.5-4.5%, Ti: Bal",
    standards: "ASTM B348, ASTM B265, AMS 4928",
    moq: "5 kg",
    leadTime: "3–7 business days",
    testCert: "EN 10204 3.1 Mill Certificate included",
    application: "Aerospace parts, medical orthopedic screws, motorsport suspension, CNC precision components.",
  },
  {
    id: "ti-gr2",
    name: "Commercially Pure Titanium (Grade 2)",
    category: "Titanium & Alloys",
    grade: "CP Titanium Grade 2",
    forms: ["Sheet", "Plate", "Seamless Tube", "Wire"],
    purity: "Ti > 99.2% (Pure Titanium)",
    standards: "ASTM B265, ASTM B338",
    moq: "2 kg",
    leadTime: "3–5 business days",
    testCert: "EN 10204 3.1 Mill Certificate included",
    application: "Chemical processing, marine heat exchangers, anodizing jigs, architectural cladding.",
  },
  {
    id: "ti-powder-3d",
    name: "Titanium Spherical 3D Printing Powder",
    category: "Titanium & Alloys",
    grade: "Ti-6Al-4V ELI (Grade 23)",
    forms: ["Gas Atomized Powder (15-53 µm)"],
    purity: "Ultra-low interstitial (ELI)",
    standards: "ASTM F3001, ASTM F136",
    moq: "1 kg",
    leadTime: "7–10 business days",
    testCert: "Laser diffraction PSD & chemical assay",
    application: "Direct Metal Laser Sintering (DMLS), selective laser melting additive manufacturing.",
  },
  {
    id: "al-foam",
    name: "Aluminium Foam Panels (Closed Cell)",
    category: "Specialty Metals",
    grade: "Al-Foam Porous 6061 Core",
    forms: ["Panels / Blocks (10mm, 20mm, 30mm)"],
    purity: "Alloy 6061 / pure Al matrix",
    standards: "ISO 9001 certified batch",
    moq: "2 square meters",
    leadTime: "10–14 business days",
    testCert: "Acoustic attenuation & crash test reports",
    application: "Sound barrier walls, lightweight crash absorption boxes, architecture facade design.",
  },
  {
    id: "neo-n52",
    name: "Neodymium Magnets N52 (NdFeB)",
    category: "Rare-Earth Elements",
    grade: "N52 / N45SH / N42UH (High Temp)",
    forms: ["Blocks", "Discs", "Rings", "Custom Arc Segments"],
    purity: "Nd: 31%, Fe: 68%, B: 1% with Ni-Cu-Ni plating",
    standards: "REACH & RoHS Compliant",
    moq: "50 pieces (or 1 kg sample)",
    leadTime: "5–10 business days",
    testCert: "Gauss test & demagnetization report",
    application: "Brushless DC electric motors, drone gimbals, acoustic speakers, magnetic separators.",
  },
  {
    id: "rare-earth-ingot",
    name: "Rare-Earth Metal Ingots (Yttrium / Cerium)",
    category: "Rare-Earth Elements",
    grade: "Purified Elemental Ingot",
    forms: ["Ingots", "Lumps", "Foils"],
    purity: "99.9% – 99.99% REO purity",
    standards: "Certificate of Analysis (COA)",
    moq: "1 kg",
    leadTime: "7–12 business days",
    testCert: "ICP-MS Spectrometer assay report",
    application: "Superconductor R&D, specialized phosphors, laser optics, metallurgy alloying.",
  },
  {
    id: "stm32-chips",
    name: "ARM Cortex Microcontrollers (STM32 / ESP32)",
    category: "Electronic Chips (ICs)",
    grade: "Original Factory Reel / Tube",
    forms: ["LQFP-48, LQFP-64, QFN, BGA"],
    purity: "100% Genuine Authorized Distributor Lots",
    standards: "JEDEC MSL 3, RoHS, Date code < 2 yrs",
    moq: "25 units (low trial qty)",
    leadTime: "3–6 business days",
    testCert: "Lot code verification & anti-static packing",
    application: "IoT industrial controllers, smart meters, robotic controllers, prototype circuit boards.",
  },
  {
    id: "inconel-718",
    name: "Inconel 718 High-Temperature Nickel Alloy",
    category: "Specialty Metals",
    grade: "Nickel-Chromium Alloy 718",
    forms: ["Round Bar", "Forged Ring", "Sheet"],
    purity: "Ni 50-55%, Cr 17-21%, Mo 2.8-3.3%",
    standards: "ASTM B637, AMS 5662",
    moq: "5 kg",
    leadTime: "5–8 business days",
    testCert: "Full tensile, hardness & ultrasonic MTC",
    application: "Gas turbine blades, high pressure valve shafts, rocket engine nozzles.",
  },
];

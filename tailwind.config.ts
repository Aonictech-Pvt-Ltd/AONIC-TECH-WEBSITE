import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Direct brand palette requested by user
        palette: {
          green: "#63A26B",
          yellow: "#FFDB18",
          lavender: "#757CB6",
          royal: "#1926A0",
          navy: "#0E0E25",
          black: "#000000",
          white: "#FFFFFF",
        },
        brand: {
          // Digital Solutions anchored in Royal Blue (#1926A0) & electric tints
          digital: {
            50: "#eef0ff",
            100: "#dde1ff",
            200: "#b8c2ff",
            300: "#8ca0ff",
            400: "#4d5be3",
            500: "#2736c9",
            600: "#1926A0", // Official Royal Blue
            700: "#131e80",
            800: "#0f1766",
            900: "#0b114d",
          },
          // Industrial Supply anchored in vibrant Yellow (#FFDB18)
          industrial: {
            50: "#fffde6",
            100: "#fff9b8",
            200: "#fff48a",
            300: "#ffed5c",
            400: "#ffe34d",
            500: "#FFDB18", // Official Industrial Yellow
            600: "#e6c300",
            700: "#b89c00",
            800: "#8a7500",
            900: "#5c4e00",
          },
          // Modern tech secondary tone: Lavender (#757CB6)
          lavender: {
            100: "#f0f1f8",
            200: "#dcdef0",
            300: "#b8bce0",
            400: "#949bc9",
            500: "#757CB6", // Official Lavender
            600: "#5a619d",
            700: "#444a7a",
            800: "#2e3253",
            900: "#1a1c2f",
          },
          // Fresh success & direct connect: Green (#63A26B)
          green: {
            100: "#eff7f1",
            200: "#d6ecdb",
            300: "#b0dac0",
            400: "#82bf8c",
            500: "#63A26B", // Official Green
            600: "#4c8553",
            700: "#39653f",
            800: "#27462c",
            900: "#172b1b",
          },
          // Dark Navy (#0E0E25) master canvas & depth tones
          dark: {
            950: "#070716", // Deep obsidian void
            900: "#0E0E25", // Official Dark Navy
            850: "#141434",
            800: "#1b1b42",
            750: "#222252",
            700: "#2a2a62",
            600: "#3d3d7d",
          },
        },
      },
      fontFamily: {
        sans: [
          "'Plus Jakarta Sans'",
          "-apple-system",
          "BlinkMacSystemFont",
          "'SF Pro Display'",
          "'Segoe UI'",
          "Roboto",
          "sans-serif",
        ],
        display: [
          "'Space Grotesk'",
          "'Plus Jakarta Sans'",
          "-apple-system",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;

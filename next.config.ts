import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data:",
      "connect-src 'self' https://*.supabase.co https://*.upstash.io https://api.resend.com https://vitals.vercel-insights.com",
      "frame-ancestors 'none'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  distDir: process.env.BUILD_DIR || ".next",
  reactStrictMode: true,
  poweredByHeader: false, // Disables X-Powered-By: Next.js information disclosure header
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/terms",
        destination: "/privacy-and-terms",
        permanent: true,
      },
      {
        source: "/privacy",
        destination: "/privacy-and-terms",
        permanent: true,
      },
      {
        source: "/privacy-policy",
        destination: "/privacy-and-terms",
        permanent: true,
      },
      {
        source: "/terms-and-conditions",
        destination: "/privacy-and-terms",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

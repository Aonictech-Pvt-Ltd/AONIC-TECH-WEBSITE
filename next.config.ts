import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
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

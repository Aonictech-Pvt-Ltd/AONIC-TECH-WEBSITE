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
        source: "/privacy",
        destination: "/terms",
        permanent: true,
      },
      {
        source: "/privacy-policy",
        destination: "/terms",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

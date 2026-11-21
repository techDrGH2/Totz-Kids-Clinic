import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/areas-we-serve/puppalguda",
        destination: "/areas-we-serve/hyderabad",
        permanent: true,
      },
    ];
  },
  turbopack: {
    root: path.dirname(fileURLToPath(import.meta.url)),
  },
  poweredByHeader: false,
  compress: true,
  images: {
    // Serve /public images directly. Vercel Image Optimization was returning 402.
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    dangerouslyAllowSVG: true,
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;

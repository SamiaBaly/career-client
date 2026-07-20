import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Google profile images
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },

      // Cloudinary
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },

      // Add your own backend domain if needed
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
      },
    ],
  },
};

export default nextConfig;
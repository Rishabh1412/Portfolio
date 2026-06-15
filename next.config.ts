import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow connections from your local network IP
  allowedDevOrigins: ["10.247.132.244"],
};

export default nextConfig;
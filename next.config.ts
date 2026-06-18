import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow connections from your local network IP
  allowedDevOrigins: ["10.247.132.244"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "/gh/devicons/devicon@latest/icons/**",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
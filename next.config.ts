// filepath: /Users/novanovriansyah/code/novai_hris/novai-hris-fe-ts/next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Proxy all API requests starting with /api
        destination: `http://localhost:8082/api/:path*`, // Redirect to the backend server
      },
    ];
  },
};

export default nextConfig;
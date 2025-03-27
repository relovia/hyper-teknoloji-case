import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.hyperteknoloji.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomfox.ca',
        port: '',
        pathname: '/images/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;

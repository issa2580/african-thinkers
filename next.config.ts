import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Ignorer les erreurs TypeScript lors du build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Ignorer les erreurs ESLint lors du build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Optimisation de la taille du bundle
  swcMinify: true,
};

export default nextConfig;

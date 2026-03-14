import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  sassOptions: {
    additionalData: `@use "@/styles/_variables.scss" as *;`,
  },
};

export default nextConfig;

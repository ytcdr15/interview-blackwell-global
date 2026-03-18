import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  sassOptions: {
    additionalData: `@use "@/styles/_variables.scss" as *;`,
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);

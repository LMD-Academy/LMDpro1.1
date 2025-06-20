
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    // The 'allowedDevOrigins' key was removed from here as it was causing an 'Unrecognized key' error.
    // If the cross-origin warning (⚠ Cross origin request detected...) persists,
    // an alternative way to configure allowed origins for Next.js 15.3.3 with Turbopack may be needed.
  },
};

export default nextConfig;

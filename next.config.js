/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable React strict mode for better development
    reactStrictMode: true,

    // Optimize images
    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },

    // Compress output
    compress: true,

    // Optimize production builds
    poweredByHeader: false,

    experimental: {
        optimizePackageImports: ['framer-motion'],
    },
    async rewrites() {
        const backendUrl = 'https://portfolio-backend-production-2e39.up.railway.app';
        return [
            {
                source: '/admin',
                destination: `${backendUrl}/admin`,
            },
            {
                source: '/api/:path*',
                destination: `${backendUrl}/api/:path*`,
            },
        ];
    },
};

export default nextConfig;

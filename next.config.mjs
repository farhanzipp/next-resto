/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'www.themealdb.com',
              port: '',
              pathname: '/images/media/meals/**',
            },
        ],
        dangerouslyAllowSVG: true,
    }
};

export default nextConfig;

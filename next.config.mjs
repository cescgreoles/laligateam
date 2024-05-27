/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'cdn.sportmonks.com'
            }
        ]
    }
};

export default nextConfig;

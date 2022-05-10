/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compress: true,
    images: {
        domains: [
            '192.168.90.19',
            'localhost',
            new URL(process.env.URL).host,
        ],
    },
};

module.exports = nextConfig;

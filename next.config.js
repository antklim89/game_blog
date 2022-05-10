/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compress: true,
    images: {
        domains: [
            '192.168.90.19',
            process.env.URL ? new URL(process.env.URL).host : 'localhost',
        ],
    },
};

module.exports = nextConfig;

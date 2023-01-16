/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compress: true,
    images: { domains: [process.env.URL ? new URL(process.env.URL).hostname : 'localhost'] },
    env: { NEXT_PUBLIC_URL: process.env.URL },
};

module.exports = nextConfig;

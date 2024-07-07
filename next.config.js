/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compress: true,
    images: { domains: [process.env.URL ? new URL(process.env.URL).hostname : 'localhost'] },
    env: { URL: process.env.URL },
    output: "standalone"
};

module.exports = nextConfig;

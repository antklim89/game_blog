import process from 'node:process';


/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  compress: true,
  images: {
    remotePatterns: [{
      hostname: process.env.URL ? new URL(process.env.URL).hostname : 'localhost',
    }],
  },
  env: {
    URL: process.env.URL,
  },
  output: 'standalone',
};



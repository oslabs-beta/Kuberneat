/** @type {import('next').NextConfig} */
const nextConfig = {
  // trailingSlash: true,
  reactStrictMode: false,
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  }
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})



module.exports = withBundleAnalyzer({})
module.exports = nextConfig

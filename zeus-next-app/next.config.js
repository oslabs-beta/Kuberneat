/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    
  }
};

module.exports = nextConfig

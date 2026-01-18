/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Skip ESLint during production builds (we run it separately in dev)
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig

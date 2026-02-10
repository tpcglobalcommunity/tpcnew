import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,

  typescript: {
    // Build tetap gagal kalau ada error TS (LEBIH AMAN)
    ignoreBuildErrors: false,
  },

  images: {
    // Vercel native Image Optimization (JANGAN dimatikan)
    unoptimized: false,
  },

  // Aman untuk Vercel + App Router
  poweredByHeader: false,
}

export default nextConfig

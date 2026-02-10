'use client'

import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B0E11] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-[#1A1F2E] border border-amber-500/25 rounded-xl p-8 text-center">
        {/* 404 Icon */}
        <div className="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl font-bold text-amber-400">404</span>
        </div>
        
        {/* Title */}
        <h1 className="text-2xl font-bold text-white mb-2">
          Halaman Tidak Ditemukan
        </h1>
        
        {/* Description */}
        <p className="text-gray-400 mb-8">
          Halaman yang Anda cari tidak ada atau telah dipindahkan.
        </p>
        
        {/* Action Buttons */}
        <div className="space-y-4">
          <Link
            href="/id"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition-colors"
          >
            <Home className="w-5 h-5" />
            Kembali ke Beranda
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali
          </button>
        </div>
        
        {/* Help Text */}
        <p className="text-gray-500 text-sm mt-6">
          Butuh bantuan?{' '}
          <Link href="/id/faq" className="text-amber-400 hover:text-amber-300 transition-colors">
            Kunjungi FAQ
          </Link>
        </p>
      </div>
    </div>
  )
}

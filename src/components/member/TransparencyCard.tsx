'use client'

import { PremiumButton } from '@/components/ui/PremiumButton'
import { Eye, BarChart3 } from 'lucide-react'

export default function TransparencyCard() {
  return (
    <div className="bg-[#0B0E11] border border-yellow-500/30 rounded-2xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-yellow-400 font-semibold flex items-center gap-2">
          <Eye className="w-5 h-5" />
          Transparansi
        </h3>
      </div>
      
      <div className="text-gray-400 mb-4">
        Transparansi on-chain dan kebijakan operasional bisa kita lihat di halaman transparansi.
      </div>

      <div className="bg-black/30 rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-400">Progress Presale:</span>
          <span className="text-yellow-400 font-semibold">25%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '25%' }}></div>
        </div>
      </div>

      <PremiumButton 
        href="/id/transparency"
        className="w-full"
      >
        <Eye className="w-4 h-4 mr-3" />
        Lihat Transparansi
      </PremiumButton>
    </div>
  )
}

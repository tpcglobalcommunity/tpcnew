'use client'

import { PremiumButton } from '@/components/ui/PremiumButton'
import { Receipt, TrendingUp, Clock } from 'lucide-react'
import { formatDate } from '@/lib/utils/format'

interface PresaleActivityProps {
  data?: {
    totalInvoices: number
    lastInvoice?: {
      status: string
      created_at: string
      amount: number
    }
    totalTokens?: number
  }
}

export default function PresaleActivity({ data }: PresaleActivityProps) {
  if (!data) {
    return (
      <div className="bg-[#0B0E11] border border-yellow-500/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-yellow-400 font-semibold flex items-center gap-2">
            <Receipt className="w-5 h-5" />
            Aktivitas Presale
          </h3>
        </div>
        
        <div className="text-gray-400 text-center py-8">
          Data belum tersedia
        </div>
      </div>
    )
  }

  return (
    <div className="bg-[#0B0E11] border border-yellow-500/30 rounded-2xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-yellow-400 font-semibold flex items-center gap-2">
          <Receipt className="w-5 h-5" />
          Aktivitas Presale
        </h3>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Receipt className="w-4 h-4 text-gray-400" />
            <span className="text-gray-400">Total Invoice:</span>
          </div>
          <span className="text-white font-semibold">{data.totalInvoices}</span>
        </div>

        {data.totalTokens !== undefined && (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-gray-400" />
              <span className="text-gray-400">Total TPC:</span>
            </div>
            <span className="text-white font-semibold">{data.totalTokens.toLocaleString('id-ID')}</span>
          </div>
        )}

        {data.lastInvoice && (
          <div className="border-t border-gray-700 pt-4">
            <div className="text-gray-400 text-sm mb-2">Invoice Terakhir:</div>
            <div className="bg-black/30 rounded-lg p-3 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Status:</span>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  data.lastInvoice.status === 'paid' 
                    ? 'bg-green-500/20 text-green-400' 
                    : data.lastInvoice.status === 'pending'
                    ? 'bg-yellow-500/20 text-yellow-400'
                    : 'bg-red-500/20 text-red-400'
                }`}>
                  {data.lastInvoice.status === 'paid' ? 'Lunas' : 
                   data.lastInvoice.status === 'pending' ? 'Menunggu' : 'Kadaluarsa'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Tanggal:</span>
                <span className="text-white text-sm">{formatDate(data.lastInvoice.created_at)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Jumlah:</span>
                <span className="text-yellow-400 font-semibold">
                  Rp {data.lastInvoice.amount.toLocaleString('id-ID')}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-3 mt-6">
        <PremiumButton 
          href="/member/buy"
          className="flex-1"
        >
          Beli TPC
        </PremiumButton>
        <PremiumButton 
          href="/member/invoices"
          variant="outline"
          className="flex-1"
        >
          Invoice Saya
        </PremiumButton>
      </div>
    </div>
  )
}

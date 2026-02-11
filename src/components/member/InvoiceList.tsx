'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { PremiumButton } from '@/components/ui/PremiumButton'
import { formatInvoiceId, formatUSDC, formatDate, isExpired } from '@/lib/presale'
import { FileText, Eye, Plus } from 'lucide-react'

interface Invoice {
  id: string
  stage: number
  amount_usdc: number
  qty_tpc: number
  method: string
  status: string
  created_at: string
  expires_at: string
}

export default function InvoiceList() {
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchInvoices()
  }, [])

  const fetchInvoices = async () => {
    try {
      const response = await fetch('/api/member/invoices')
      const data = await response.json()
      
      if (response.ok) {
        setInvoices(data.invoices || [])
      }
    } catch (error) {
      console.error('Error fetching invoices:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const getStatusColor = (status: string, expiresAt: string) => {
    if (isExpired(expiresAt) && status !== 'paid') {
      return 'bg-gray-500/20 text-gray-400'
    }
    
    switch (status) {
      case 'paid':
        return 'bg-green-500/20 text-green-400'
      case 'pending':
        return 'bg-yellow-500/20 text-yellow-400'
      case 'expired':
        return 'bg-red-500/20 text-red-400'
      default:
        return 'bg-gray-500/20 text-gray-400'
    }
  }

  const getStatusText = (status: string, expiresAt: string) => {
    if (isExpired(expiresAt) && status !== 'paid') {
      return 'Kadaluarsa'
    }
    
    switch (status) {
      case 'paid':
        return 'Lunas'
      case 'pending':
        return 'Menunggu'
      case 'expired':
        return 'Kadaluarsa'
      default:
        return status
    }
  }

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <div className="text-white">Memuat...</div>
      </div>
    )
  }

  if (invoices.length === 0) {
    return (
      <div className="text-center py-12">
        <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Belum Ada Invoice</h3>
        <p className="text-gray-400 mb-6">
          Belum ada transaksi yang dilakukan
        </p>
        <PremiumButton href="/member/buy">
          <Plus className="w-4 h-4 mr-2" />
          Buat Invoice Pertama
        </PremiumButton>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-yellow-400">Daftar Invoice</h2>
        <PremiumButton href="/member/buy" size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Invoice Baru
        </PremiumButton>
      </div>

      <div className="bg-[#0B0E11] border border-yellow-500/30 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-yellow-500/30">
                <th className="text-left px-4 py-3 text-gray-400 font-medium">ID</th>
                <th className="text-left px-4 py-3 text-gray-400 font-medium">Stage</th>
                <th className="text-left px-4 py-3 text-gray-400 font-medium">Amount</th>
                <th className="text-left px-4 py-3 text-gray-400 font-medium">TPC</th>
                <th className="text-left px-4 py-3 text-gray-400 font-medium">Metode</th>
                <th className="text-left px-4 py-3 text-gray-400 font-medium">Status</th>
                <th className="text-left px-4 py-3 text-gray-400 font-medium">Tanggal</th>
                <th className="text-left px-4 py-3 text-gray-400 font-medium">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="border-b border-gray-700">
                  <td className="px-4 py-3">
                    <code className="text-yellow-400 text-sm">
                      {formatInvoiceId(invoice.id)}
                    </code>
                  </td>
                  <td className="px-4 py-3 text-white">{invoice.stage}</td>
                  <td className="px-4 py-3 text-yellow-400">
                    {formatUSDC(invoice.amount_usdc)}
                  </td>
                  <td className="px-4 py-3 text-white">
                    {formatUSDC(invoice.qty_tpc)}
                  </td>
                  <td className="px-4 py-3 text-white">{invoice.method}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(invoice.status, invoice.expires_at)}`}>
                      {getStatusText(invoice.status, invoice.expires_at)}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-400 text-sm">
                    {formatDate(invoice.created_at)}
                  </td>
                  <td className="px-4 py-3">
                    <Link href={`/member/invoices/${invoice.id}`}>
                      <PremiumButton variant="outline" size="sm">
                        <Eye className="w-4 h-4" />
                      </PremiumButton>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

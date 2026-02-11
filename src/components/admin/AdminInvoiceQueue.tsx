'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { PremiumButton } from '@/components/ui/PremiumButton'
import { formatInvoiceId, formatUSDC, formatDate, isExpired } from '@/lib/presale'
import { FileText, Eye, CheckCircle, XCircle, Clock, RefreshCw } from 'lucide-react'

interface Invoice {
  id: string
  user_id: string
  stage: number
  amount_usdc: number
  qty_tpc: number
  method: string
  status: string
  proof_url?: string
  tx_signature?: string
  created_at: string
  expires_at: string
  users?: {
    email: string
  }
}

export default function AdminInvoiceQueue() {
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'pending' | 'paid' | 'expired'>('pending')

  useEffect(() => {
    fetchInvoices()
  }, [filter])

  const fetchInvoices = async () => {
    try {
      const response = await fetch(`/api/admin/invoices?status=${filter}`)
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

  const handleApprove = async (invoiceId: string) => {
    try {
      const response = await fetch(`/api/admin/invoices/${invoiceId}/approve`, {
        method: 'POST'
      })

      if (response.ok) {
        await fetchInvoices()
      } else {
        const data = await response.json()
        alert('Gagal approve: ' + data.error)
      }
    } catch (error) {
      console.error('Approve error:', error)
      alert('Gagal approve')
    }
  }

  const handleVoid = async (invoiceId: string) => {
    if (!confirm('Apakah Anda yakin ingin void invoice ini?')) return

    try {
      const response = await fetch(`/api/admin/invoices/${invoiceId}/void`, {
        method: 'POST'
      })

      if (response.ok) {
        await fetchInvoices()
      } else {
        const data = await response.json()
        alert('Gagal void: ' + data.error)
      }
    } catch (error) {
      console.error('Void error:', error)
      alert('Gagal void')
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
      case 'void':
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
      case 'void':
        return 'Void'
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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-yellow-400">Queue Invoice</h2>
        <div className="flex items-center gap-3">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as any)}
            className="bg-black/30 border border-yellow-500/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-500"
          >
            <option value="pending">Menunggu</option>
            <option value="paid">Lunas</option>
            <option value="expired">Kadaluarsa</option>
            <option value="all">Semua</option>
          </select>
          
          <PremiumButton onClick={fetchInvoices} variant="outline" size="sm">
            <RefreshCw className="w-4 h-4" />
          </PremiumButton>
        </div>
      </div>

      {/* Invoice Table */}
      <div className="bg-[#0B0E11] border border-yellow-500/30 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-yellow-500/30">
                <th className="text-left px-4 py-3 text-gray-400 font-medium">ID</th>
                <th className="text-left px-4 py-3 text-gray-400 font-medium">User</th>
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
                    <Link href={`/admin/invoices/${invoice.id}`}>
                      <code className="text-yellow-400 text-sm hover:underline cursor-pointer">
                        {formatInvoiceId(invoice.id)}
                      </code>
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-white text-sm">
                    {invoice.users?.email || 'Unknown'}
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
                    <div className="flex items-center gap-2">
                      {invoice.status === 'pending' && (
                        <>
                          <PremiumButton
                            onClick={() => handleApprove(invoice.id)}
                            variant="outline"
                            size="sm"
                            className="border-green-500/50 text-green-400 hover:bg-green-500/10"
                          >
                            <CheckCircle className="w-4 h-4" />
                          </PremiumButton>
                          <PremiumButton
                            onClick={() => handleVoid(invoice.id)}
                            variant="outline"
                            size="sm"
                            className="border-red-500/50 text-red-400 hover:bg-red-500/10"
                          >
                            <XCircle className="w-4 h-4" />
                          </PremiumButton>
                        </>
                      )}
                      <Link href={`/admin/invoices/${invoice.id}`}>
                        <PremiumButton variant="outline" size="sm">
                          <Eye className="w-4 h-4" />
                        </PremiumButton>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {invoices.length === 0 && (
        <div className="text-center py-12">
          <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Tidak Ada Invoice</h3>
          <p className="text-gray-400">
            Tidak ada invoice dengan filter "{filter}"
          </p>
        </div>
      )}
    </div>
  )
}

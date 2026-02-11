'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { PremiumButton } from '@/components/ui/PremiumButton'
import { formatInvoiceId, formatUSDC, formatDate, isExpired } from '@/lib/presale'
import { Copy, Upload, CheckCircle, Clock, XCircle } from 'lucide-react'

interface Invoice {
  id: string
  stage_number: number
  price_per_tpc: number
  total_usdc: number
  quantity_tpc: number
  wallet_address?: string
  referral_code?: string
  status: string
  proof_url?: string
  tx_signature?: string
  created_at: string
  deadline_at: string
}

export default function InvoiceDetail() {
  const params = useParams()
  const invoiceId = params.id as string
  const [invoice, setInvoice] = useState<Invoice | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchInvoice()
  }, [invoiceId])

  const fetchInvoice = async () => {
    try {
      const response = await fetch(`/api/member/invoices/${invoiceId}`)
      const data = await response.json()
      
      if (response.ok) {
        setInvoice(data.invoice)
      } else {
        setError(data.error || 'Invoice tidak ditemukan')
      }
    } catch (error) {
      setError('Gagal mengambil invoice')
    } finally {
      setIsLoading(false)
    }
  }

  const handleCopyAddress = () => {
    const treasuryAddress = process.env.NEXT_PUBLIC_TPC_TREASURY || ''
    navigator.clipboard.writeText(treasuryAddress)
  }

  const handleCopyMemo = () => {
    navigator.clipboard.writeText(formatInvoiceId(invoiceId))
  }

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    setError('')

    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('invoiceId', invoiceId)

      const response = await fetch('/api/member/upload-proof', {
        method: 'POST',
        body: formData
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Gagal upload bukti')
      }

      // Refresh invoice data
      await fetchInvoice()
    } catch (err: any) {
      setError(err.message)
    } finally {
      setUploading(false)
    }
  }

  const getStatusIcon = (status: string, deadlineAt: string | null) => {
    if (deadlineAt && isExpired(deadlineAt) && status !== 'paid') {
      return <XCircle className="w-5 h-5 text-gray-400" />
    }
    
    switch (status) {
      case 'DRAFT':
        return <Clock className="w-5 h-5 text-yellow-400" />
      case 'paid':
        return <CheckCircle className="w-5 h-5 text-green-400" />
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-400" />
      case 'expired':
        return <XCircle className="w-5 h-5 text-red-400" />
      default:
        return <Clock className="w-5 h-5 text-gray-400" />
    }
  }

  const getStatusText = (status: string, deadlineAt: string | null) => {
    if (deadlineAt && isExpired(deadlineAt) && status !== 'paid') {
      return 'Kadaluarsa'
    }
    
    switch (status) {
      case 'DRAFT':
        return 'Draft'
      case 'paid':
        return 'Lunas'
      case 'pending':
        return 'Menunggu Pembayaran'
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

  if (error || !invoice) {
    return (
      <div className="text-center py-12">
        <div className="text-red-400">{error || 'Invoice tidak ditemukan'}</div>
      </div>
    )
  }

  const isInvoiceExpired = invoice.deadline_at ? isExpired(invoice.deadline_at) : false
  const treasuryAddress = process.env.NEXT_PUBLIC_TPC_TREASURY || ''

  // Check if pricing data needs repair
  const needsPricingRepair = invoice.price_per_tpc === 0 || invoice.total_usdc === 0

  // Format deadline safely
  const formatDeadline = (deadline: string | null) => {
    if (!deadline) {
      return 'Tidak ada deadline'
    }
    return formatDate(deadline)
  }

  // Safe quantity display
  const displayQuantity = (quantity: number | null) => {
    if (quantity === null || quantity === undefined) {
      return null
    }
    return quantity
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-[#0B0E11] border border-yellow-500/30 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-yellow-400">
            Detail Invoice
          </h2>
          <div className="flex items-center gap-2">
            {getStatusIcon(invoice.status, invoice.deadline_at)}
            <span className="text-white font-medium">
              {getStatusText(invoice.status, invoice.deadline_at)}
            </span>
          </div>
        </div>
        
        <div className="text-gray-400">
          ID: <code className="text-yellow-400">{formatInvoiceId(invoice.id)}</code>
        </div>
      </div>

      {/* Pricing Repair Warning */}
      {needsPricingRepair && (
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-6">
          <div className="flex items-start gap-3">
            <XCircle className="w-5 h-5 text-yellow-400 mt-0.5" />
            <div>
              <p className="text-yellow-400 font-medium mb-2">Perlu Perbaikan Data</p>
              <p className="text-gray-300 text-sm mb-3">
                Data pricing pada invoice ini tidak lengkap. Silakan refresh pricing.
              </p>
              <PremiumButton
                onClick={fetchInvoice}
                variant="outline"
                className="border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10"
              >
                Refresh Pricing
              </PremiumButton>
            </div>
          </div>
        </div>
      )}

      {/* Invoice Details */}
      <div className="bg-[#0B0E11] border border-yellow-500/30 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-yellow-400 mb-4">Informasi Transaksi</h3>
        
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-400">Stage:</span>
            <span className="text-white">{invoice.stage_number}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Harga per TPC:</span>
            <span className="text-yellow-400">{formatUSDC(invoice.price_per_tpc)} USDC</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Total USDC:</span>
            <span className="text-yellow-400">{formatUSDC(invoice.total_usdc)} USDC</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Jumlah TPC:</span>
            {displayQuantity(invoice.quantity_tpc) !== null ? (
              <span className="text-white">{formatUSDC(displayQuantity(invoice.quantity_tpc)!)} TPC</span>
            ) : (
              <span className="text-red-400">Quantity tidak tersedia</span>
            )}
          </div>
          {invoice.wallet_address && (
            <div className="flex justify-between">
              <span className="text-gray-400">Wallet:</span>
              <span className="text-white text-sm">{invoice.wallet_address.slice(0, 8)}...{invoice.wallet_address.slice(-8)}</span>
            </div>
          )}
          {invoice.referral_code && (
            <div className="flex justify-between">
              <span className="text-gray-400">Referral:</span>
              <span className="text-white">{invoice.referral_code}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="text-gray-400">Dibuat:</span>
            <span className="text-white">{formatDate(invoice.created_at)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Deadline:</span>
            <span className="text-white">{formatDeadline(invoice.deadline_at)}</span>
          </div>
        </div>
      </div>

      {/* Payment Instructions */}
      {invoice.wallet_address && invoice.status === 'DRAFT' && !isInvoiceExpired && (
        <div className="bg-[#0B0E11] border border-yellow-500/30 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">Instruksi Pembayaran USDC</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-gray-400 mb-2">Alamat Treasury:</label>
              <div className="flex items-center gap-2">
                <code className="bg-black/30 text-yellow-400 px-3 py-2 rounded-lg font-mono text-sm flex-1">
                  {treasuryAddress}
                </code>
                <PremiumButton onClick={handleCopyAddress} variant="outline" size="sm">
                  <Copy className="w-4 h-4" />
                </PremiumButton>
              </div>
            </div>
            
            <div>
              <label className="block text-gray-400 mb-2">Memo/Reference:</label>
              <div className="flex items-center gap-2">
                <code className="bg-black/30 text-yellow-400 px-3 py-2 rounded-lg font-mono text-sm flex-1">
                  {formatInvoiceId(invoice.id)}
                </code>
                <PremiumButton onClick={handleCopyMemo} variant="outline" size="sm">
                  <Copy className="w-4 h-4" />
                </PremiumButton>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Transaction Signature */}
      {invoice.status === 'paid' && invoice.tx_signature && (
        <div className="bg-[#0B0E11] border border-yellow-500/30 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">Transaksi On-Chain</h3>
          
          <div className="space-y-2">
            <div className="text-gray-400">Signature:</div>
            <div className="bg-black/30 rounded-lg p-3">
              <code className="text-yellow-400 text-sm break-all">
                {invoice.tx_signature}
              </code>
            </div>
          </div>
        </div>
      )}

      {/* Expired Notice */}
      {invoice.deadline_at && isInvoiceExpired && invoice.status !== 'paid' && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6">
          <div className="flex items-center gap-2 text-red-400">
            <XCircle className="w-5 h-5" />
            <span className="font-semibold">Invoice Kadaluarsa</span>
          </div>
          <p className="text-red-300 mt-2">
            Invoice ini telah kadaluarsa. Silakan buat invoice baru untuk melanjutkan.
          </p>
          <div className="mt-4">
            <PremiumButton href="/member/buy">
              Buat Invoice Baru
            </PremiumButton>
          </div>
        </div>
      )}
    </div>
  )
}

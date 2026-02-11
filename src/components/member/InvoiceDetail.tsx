'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { PremiumButton } from '@/components/ui/PremiumButton'
import { formatInvoiceId, formatUSDC, formatDate, isExpired } from '@/lib/presale'
import { Copy, Upload, CheckCircle, Clock, XCircle } from 'lucide-react'

interface Invoice {
  id: string
  stage: number
  price_usdc: number
  amount_usdc: number
  qty_tpc: number
  method: string
  status: string
  proof_url?: string
  tx_signature?: string
  created_at: string
  expires_at: string
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

  const getStatusIcon = (status: string, expiresAt: string) => {
    if (isExpired(expiresAt) && status !== 'paid') {
      return <XCircle className="w-5 h-5 text-gray-400" />
    }
    
    switch (status) {
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

  const getStatusText = (status: string, expiresAt: string) => {
    if (isExpired(expiresAt) && status !== 'paid') {
      return 'Kadaluarsa'
    }
    
    switch (status) {
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

  const isInvoiceExpired = isExpired(invoice.expires_at)
  const treasuryAddress = process.env.NEXT_PUBLIC_TPC_TREASURY || ''

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-[#0B0E11] border border-yellow-500/30 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-yellow-400">
            Detail Invoice
          </h2>
          <div className="flex items-center gap-2">
            {getStatusIcon(invoice.status, invoice.expires_at)}
            <span className="text-white font-medium">
              {getStatusText(invoice.status, invoice.expires_at)}
            </span>
          </div>
        </div>
        
        <div className="text-gray-400">
          ID: <code className="text-yellow-400">{formatInvoiceId(invoice.id)}</code>
        </div>
      </div>

      {/* Invoice Details */}
      <div className="bg-[#0B0E11] border border-yellow-500/30 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-yellow-400 mb-4">Informasi Transaksi</h3>
        
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-400">Stage:</span>
            <span className="text-white">{invoice.stage}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Harga per TPC:</span>
            <span className="text-yellow-400">{formatUSDC(invoice.price_usdc)} USDC</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Total USDC:</span>
            <span className="text-yellow-400">{formatUSDC(invoice.amount_usdc)} USDC</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Jumlah TPC:</span>
            <span className="text-white">{formatUSDC(invoice.qty_tpc)} TPC</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Metode:</span>
            <span className="text-white">{invoice.method}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Dibuat:</span>
            <span className="text-white">{formatDate(invoice.created_at)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Deadline:</span>
            <span className="text-white">{formatDate(invoice.expires_at)}</span>
          </div>
        </div>
      </div>

      {/* Payment Instructions */}
      {invoice.method === 'USDC' && invoice.status === 'pending' && !isInvoiceExpired && (
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

      {/* IDR Proof Upload */}
      {invoice.method === 'IDR' && invoice.status === 'pending' && !isInvoiceExpired && (
        <div className="bg-[#0B0E11] border border-yellow-500/30 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">Upload Bukti Pembayaran</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-gray-400 mb-2">Pilih File Bukti:</label>
              <input
                type="file"
                accept="image/*,.pdf"
                onChange={handleFileUpload}
                disabled={uploading}
                className="w-full bg-black/30 border border-yellow-500/30 rounded-lg px-4 py-3 text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-yellow-500/20 file:text-yellow-400 hover:file:bg-yellow-500/30"
              />
            </div>
            
            {invoice.proof_url && (
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 text-green-400">
                ✓ Bukti pembayaran telah diupload
              </div>
            )}
            
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-red-400">
                {error}
              </div>
            )}
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
      {isInvoiceExpired && invoice.status !== 'paid' && (
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

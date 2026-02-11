'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { PremiumButton } from '@/components/ui/PremiumButton'
import { formatUSDC } from '@/lib/presale'
import { TrendingUp, Calculator, AlertTriangle } from 'lucide-react'
import { usePhantomWallet } from '@/components/wallet/PhantomWalletProvider'

export default function BuyForm() {
  const router = useRouter()
  const [quantityTpc, setQuantityTpc] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [invoice, setInvoice] = useState<any>(null)
  const { connected, publicKey, connect } = usePhantomWallet()

  // Parse and validate quantity
  const getValidQuantity = (raw: string): number | null => {
    const qty = Math.floor(Number(raw))
    if (!Number.isFinite(qty) || qty < 1) {
      return null
    }
    return qty
  }

  const quantity = getValidQuantity(quantityTpc) || 0

  const handleSubmit = async () => {
    setError('')
    setIsLoading(true)

    // Client-side validation
    const validQuantity = getValidQuantity(quantityTpc)
    if (!validQuantity) {
      setError('Jumlah TPC minimal 1')
      setIsLoading(false)
      return
    }

    // Get wallet address for USDC payments
    let walletAddress = null
    
    if (!connected || !publicKey) {
      setError('Silakan connect Phantom wallet terlebih dahulu')
      setIsLoading(false)
      return
    }
    walletAddress = publicKey

    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 25000) // 25 detik timeout

      const response = await fetch('/api/member/create-invoice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          qty_tpc: validQuantity,
          walletAddress
        }),
        signal: controller.signal
      })

      clearTimeout(timeoutId)
      const data = await response.json()

      if (!response.ok || !data.ok) {
        const errorMessage = data.message || 'Gagal membuat invoice'
        const detailMessage = data.detail ? ` (${data.detail})` : ''
        throw new Error(`${errorMessage}${detailMessage}`)
      }

      setInvoice(data.invoice)
      router.push(`/member/invoices/${data.invoiceId}`)
    } catch (err: any) {
      if (err.name === 'AbortError') {
        setError('Request timeout. Silakan coba lagi.')
      } else {
        setError(err.message)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-[#0B0E11] border border-yellow-500/30 rounded-2xl p-6 shadow-lg">
      <h2 className="text-xl font-bold text-yellow-400 mb-6 flex items-center gap-2">
        <TrendingUp className="w-6 h-6" />
        Beli TPC (Presale)
      </h2>

      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="space-y-6">
        {/* Quantity Input */}
        <div>
          <label className="block text-gray-300 mb-2">Jumlah TPC</label>
          <div className="relative">
            <Calculator className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="number"
              value={quantityTpc}
              onChange={(e) => setQuantityTpc(e.target.value)}
              min="1"
              step="0.01"
              placeholder="10000.00"
              className="w-full bg-black/30 border border-yellow-500/30 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500"
            />
          </div>
        </div>

        {/* Pricing Info */}
        {invoice && (
          <div className="bg-black/30 rounded-lg p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Stage:</span>
              <span className="text-yellow-400 font-semibold">
                {invoice.stage_number}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Harga per TPC:</span>
              <span className="text-yellow-400 font-semibold">
                {formatUSDC(invoice.price_per_tpc)} USDC
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Total USDC:</span>
              <span className="text-yellow-400 font-semibold">
                {formatUSDC(invoice.total_usdc)} USDC
              </span>
            </div>
          </div>
        )}

        {/* Wallet Warning */}
        {!connected && (
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5" />
              <div>
                <p className="text-yellow-400 font-medium mb-2">Wallet Belum Terhubung</p>
                <p className="text-gray-300 text-sm mb-3">
                  Untuk pembayaran, Anda perlu menghubungkan Phantom wallet terlebih dahulu.
                </p>
                <PremiumButton
                  onClick={connect}
                  variant="outline"
                  className="border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10"
                >
                  Connect Phantom
                </PremiumButton>
              </div>
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-red-400">
            {error}
          </div>
        )}

        {/* Submit Button */}
        <PremiumButton
          onClick={handleSubmit}
          disabled={isLoading || quantity <= 0 || !connected}
          className="w-full"
        >
          {isLoading ? 'Membuat Invoice...' : 'Buat Invoice'}
        </PremiumButton>
      </form>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { PremiumButton } from '@/components/ui/PremiumButton'
import { getStagePrice, calculateQty, formatUSDC, formatIDR } from '@/lib/presale'
import { TrendingUp, DollarSign, Calculator } from 'lucide-react'

export default function BuyForm() {
  const router = useRouter()
  const [stage, setStage] = useState(1)
  const [amountUsdc, setAmountUsdc] = useState('')
  const [method, setMethod] = useState<'USDC' | 'IDR'>('USDC')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const priceUsdc = getStagePrice(stage)
  const amount = parseFloat(amountUsdc) || 0
  const qtyTpc = amount > 0 ? calculateQty(amount, priceUsdc) : 0
  const estimatedIdr = amount * 17000 // Fixed rate

  const handleSubmit = async () => {
    setError('')
    setIsLoading(true)

    // Get wallet address for USDC payments
    let walletAddress = null
    
    if (method === 'USDC') {
      if (!(window as any).solana?.publicKey) {
        alert('Silakan connect Phantom wallet terlebih dahulu')
        setIsLoading(false)
        return
      }
      walletAddress = (window as any).solana.publicKey.toString()
    }

    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 25000) // 25 detik timeout

      const response = await fetch('/api/member/create-invoice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          stage,
          amountUsdc: amount,
          method,
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

  const stageOptions = Array.from({ length: 20 }, (_, i) => i + 1)

  return (
    <div className="bg-[#0B0E11] border border-yellow-500/30 rounded-2xl p-6 shadow-lg">
      <h2 className="text-xl font-bold text-yellow-400 mb-6 flex items-center gap-2">
        <TrendingUp className="w-6 h-6" />
        Beli TPC (Presale)
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Stage Selection */}
        <div>
          <label className="block text-gray-300 mb-2">Pilih Stage</label>
          <select
            value={stage}
            onChange={(e) => setStage(parseInt(e.target.value))}
            className="w-full bg-black/30 border border-yellow-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500"
          >
            {stageOptions.map(s => (
              <option key={s} value={s}>
                Stage {s}
              </option>
            ))}
          </select>
        </div>

        {/* Price Display */}
        <div className="bg-black/30 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Harga per TPC:</span>
            <span className="text-yellow-400 font-semibold">
              {formatUSDC(priceUsdc)} USDC
            </span>
          </div>
        </div>

        {/* Amount Input */}
        <div>
          <label className="block text-gray-300 mb-2">Jumlah USDC (min. 10)</label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="number"
              value={amountUsdc}
              onChange={(e) => setAmountUsdc(e.target.value)}
              min="10"
              step="0.01"
              placeholder="10.00"
              className="w-full bg-black/30 border border-yellow-500/30 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500"
            />
          </div>
        </div>

        {/* Calculation Result */}
        {amount > 0 && (
          <div className="bg-black/30 rounded-lg p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Jumlah TPC:</span>
              <span className="text-yellow-400 font-semibold">
                {formatUSDC(qtyTpc)} TPC
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Estimasi IDR:</span>
              <span className="text-yellow-400 font-semibold">
                {formatIDR(estimatedIdr)}
              </span>
            </div>
          </div>
        )}

        {/* Payment Method */}
        <div>
          <label className="block text-gray-300 mb-2">Metode Pembayaran</label>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                value="USDC"
                checked={method === 'USDC'}
                onChange={(e) => setMethod(e.target.value as 'USDC' | 'IDR')}
                className="w-4 h-4 text-yellow-400 bg-black/30 border-yellow-500/30 focus:ring-yellow-500"
              />
              <span className="text-white">USDC (Solana)</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                value="IDR"
                checked={method === 'IDR'}
                onChange={(e) => setMethod(e.target.value as 'USDC' | 'IDR')}
                className="w-4 h-4 text-yellow-400 bg-black/30 border-yellow-500/30 focus:ring-yellow-500"
              />
              <span className="text-white">Transfer IDR (Manual)</span>
            </label>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-red-400">
            {error}
          </div>
        )}

        {/* Submit Button */}
        <PremiumButton
          onClick={handleSubmit}
          disabled={isLoading || amount < 10}
          className="w-full"
        >
          {isLoading ? 'Membuat Invoice...' : 'Buat Invoice'}
        </PremiumButton>
      </form>
    </div>
  )
}

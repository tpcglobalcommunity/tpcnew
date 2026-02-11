'use client'

import { PremiumButton } from '@/components/ui/PremiumButton'
import { formatAddress } from '@/lib/utils/format'
import { Copy, Wallet, LogOut } from 'lucide-react'
import { usePhantomWallet } from '@/components/wallet/PhantomWalletProvider'

export default function WalletCard() {
  const { connected, publicKey, connecting, error, connect, disconnect } = usePhantomWallet()

  const copyAddress = () => {
    if (publicKey) {
      navigator.clipboard.writeText(publicKey)
    }
  }

  if (!connected) {
    return (
      <div className="bg-[#0B0E11] border border-yellow-500/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-yellow-400 font-semibold flex items-center gap-2">
            <Wallet className="w-5 h-5" />
            Dompet (Phantom)
          </h3>
        </div>
        
        <div className="text-gray-400 mb-4">
          Status: <span className="text-red-400">Tidak terhubung</span>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-red-400 mb-4">
            {error}
          </div>
        )}

        <PremiumButton
          onClick={connect}
          disabled={connecting}
          className="w-full"
        >
          {connecting ? 'Menghubungkan...' : 'Connect Phantom'}
        </PremiumButton>
      </div>
    )
  }

  return (
    <div className="bg-[#0B0E11] border border-yellow-500/30 rounded-2xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-yellow-400 font-semibold flex items-center gap-2">
          <Wallet className="w-5 h-5" />
          Dompet (Phantom)
        </h3>
        <PremiumButton
          onClick={disconnect}
          variant="outline"
          size="sm"
          className="border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10"
        >
          <LogOut className="w-4 h-4" />
        </PremiumButton>
      </div>
      
      <div className="text-gray-400 mb-4">
        Status: <span className="text-green-400">Terhubung</span>
      </div>

      <div className="mb-4">
        <div className="text-gray-400 text-sm mb-2">Alamat:</div>
        <div className="flex items-center gap-2">
          <code className="bg-black/30 text-yellow-400 px-3 py-2 rounded-lg font-mono text-sm">
            {formatAddress(publicKey || '')}
          </code>
          <PremiumButton
            onClick={copyAddress}
            variant="outline"
            size="sm"
            className="border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10"
          >
            <Copy className="w-4 h-4" />
          </PremiumButton>
        </div>
      </div>
    </div>
  )
}

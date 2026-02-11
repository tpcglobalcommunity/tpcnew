'use client'

import { useState, useEffect } from 'react'
import { PremiumButton } from '@/components/ui/PremiumButton'
import { formatAddress } from '@/lib/utils/format'
import { Copy, Wallet, LogOut } from 'lucide-react'

// Placeholder wallet interface untuk sementara
interface WalletState {
  connected: boolean
  publicKey: { toString: () => string } | null
}

export default function WalletCard() {
  const [wallet, setWallet] = useState<WalletState>({
    connected: false,
    publicKey: null
  })
  const [isConnecting, setIsConnecting] = useState(false)

  const handleConnect = async () => {
    setIsConnecting(true)
    try {
      // Placeholder untuk Phantom wallet connection
      // TODO: Implement dengan Solana wallet adapter setelah install
      console.log('Connecting to Phantom wallet...')
      
      // Simulasi connection
      setTimeout(() => {
        setWallet({
          connected: true,
          publicKey: { toString: () => 'Phan...1234' }
        })
        setIsConnecting(false)
      }, 1000)
    } catch (error) {
      console.error('Wallet connection error:', error)
      setIsConnecting(false)
    }
  }

  const handleDisconnect = async () => {
    try {
      setWallet({
        connected: false,
        publicKey: null
      })
    } catch (error) {
      console.error('Wallet disconnect error:', error)
    }
  }

  const copyAddress = () => {
    if (wallet.publicKey) {
      navigator.clipboard.writeText(wallet.publicKey.toString())
    }
  }

  if (!wallet.connected) {
    return (
      <div className="bg-[#0B0E11] border border-yellow-500/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-yellow-400 font-semibold flex items-center gap-2">
            <Wallet className="w-5 h-5" />
            Dompet (Phantom)
          </h3>
        </div>
        
        <div className="text-gray-400 mb-4">
          Status: <span className="text-red-400">Belum terhubung</span>
        </div>

        <PremiumButton
          onClick={handleConnect}
          disabled={isConnecting}
          className="w-full"
        >
          {isConnecting ? 'Menghubungkan...' : 'Hubungkan Dompet'}
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
          onClick={handleDisconnect}
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
            {formatAddress(wallet.publicKey?.toString() || '')}
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

'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

interface WalletState {
  connected: boolean
  publicKey: string | null
  connecting: boolean
  error: string | null
}

interface WalletContextType extends WalletState {
  connect: () => Promise<void>
  disconnect: () => Promise<void>
  refresh: () => Promise<void>
}

const WalletContext = createContext<WalletContextType | undefined>(undefined)

export function usePhantomWallet() {
  const context = useContext(WalletContext)
  if (!context) {
    throw new Error('usePhantomWallet must be used within PhantomWalletProvider')
  }
  return context
}

interface PhantomWalletProviderProps {
  children: ReactNode
}

export function PhantomWalletProvider({ children }: PhantomWalletProviderProps) {
  const [state, setState] = useState<WalletState>({
    connected: false,
    publicKey: null,
    connecting: false,
    error: null
  })

  const updateState = (updates: Partial<WalletState>) => {
    setState(prev => ({ ...prev, ...updates }))
  }

  const connect = async () => {
    if (!(window as any).solana?.isPhantom) {
      updateState({ error: 'Phantom wallet tidak terinstall' })
      return
    }

    updateState({ connecting: true, error: null })

    try {
      const response = await (window as any).solana.connect()
      updateState({
        connected: true,
        publicKey: response.publicKey.toString(),
        connecting: false,
        error: null
      })
    } catch (error: any) {
      updateState({
        connected: false,
        publicKey: null,
        connecting: false,
        error: error.message || 'Gagal connect ke Phantom wallet'
      })
    }
  }

  const disconnect = async () => {
    try {
      await (window as any).solana.disconnect()
      updateState({
        connected: false,
        publicKey: null,
        error: null
      })
    } catch (error: any) {
      updateState({ error: error.message || 'Gagal disconnect dari Phantom wallet' })
    }
  }

  const refresh = async () => {
    if (!(window as any).solana?.isPhantom) {
      updateState({ connected: false, publicKey: null })
      return
    }

    try {
      const response = await (window as any).solana.connect({ onlyIfTrusted: true })
      if (response.publicKey) {
        updateState({
          connected: true,
          publicKey: response.publicKey.toString(),
          error: null
        })
      }
    } catch (error) {
      // User belum approve atau wallet tidak connected
      updateState({ connected: false, publicKey: null, error: null })
    }
  }

  useEffect(() => {
    if (!(window as any).solana?.isPhantom) {
      return
    }

    // Auto reconnect on mount
    refresh()

    // Event listeners
    const handleConnect = (publicKey: any) => {
      updateState({
        connected: true,
        publicKey: publicKey.toString(),
        error: null
      })
    }

    const handleDisconnect = () => {
      updateState({
        connected: false,
        publicKey: null,
        error: null
      })
    }

    const handleAccountChanged = (publicKey: any) => {
      if (publicKey) {
        updateState({
          connected: true,
          publicKey: publicKey.toString(),
          error: null
        })
      } else {
        updateState({
          connected: false,
          publicKey: null,
          error: null
        })
      }
    }

    const solana = (window as any).solana
    solana.on('connect', handleConnect)
    solana.on('disconnect', handleDisconnect)
    solana.on('accountChanged', handleAccountChanged)

    // Cleanup
    return () => {
      solana?.removeListener?.('connect', handleConnect)
      solana?.removeListener?.('disconnect', handleDisconnect)
      solana?.removeListener?.('accountChanged', handleAccountChanged)
    }
  }, [])

  const contextValue: WalletContextType = {
    ...state,
    connect,
    disconnect,
    refresh
  }

  return (
    <WalletContext.Provider value={contextValue}>
      {children}
    </WalletContext.Provider>
  )
}

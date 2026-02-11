'use client'

import { PremiumButton } from '@/components/ui/PremiumButton'
import { User, Mail, Shield } from 'lucide-react'

interface AccountInfoProps {
  user: {
    email?: string | null
    id?: string
  }
}

export default function AccountInfo({ user }: AccountInfoProps) {
  return (
    <div className="bg-[#0B0E11] border border-yellow-500/30 rounded-2xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-yellow-400 font-semibold flex items-center gap-2">
          <User className="w-5 h-5" />
          Informasi Akun
        </h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <div className="text-gray-400 text-sm mb-1">Tipe Akun:</div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-white">Member</span>
          </div>
        </div>

        <div>
          <div className="text-gray-400 text-sm mb-1">Status:</div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-green-400">Aktif</span>
          </div>
        </div>

        <div>
          <div className="text-gray-400 text-sm mb-1">Email:</div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-gray-400" />
            <span className="text-white">{user.email || 'Tidak tersedia'}</span>
          </div>
        </div>

        <div>
          <div className="text-gray-400 text-sm mb-1">ID:</div>
          <code className="bg-black/30 text-yellow-400 px-3 py-2 rounded-lg font-mono text-sm">
            {user.id?.slice(-8) || 'Tidak tersedia'}
          </code>
        </div>
      </div>
    </div>
  )
}

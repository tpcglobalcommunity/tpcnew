'use client'

import { PremiumButton } from '@/components/ui/PremiumButton'
import { Users, ExternalLink, Gift } from 'lucide-react'

interface ReferralProps {
  referralCode?: string
  referralSource?: string
}

export default function ReferralCard({ referralCode, referralSource }: ReferralProps) {
  const copyReferralCode = () => {
    if (referralCode) {
      navigator.clipboard.writeText(referralCode)
    }
  }

  return (
    <div className="bg-[#0B0E11] border border-yellow-500/30 rounded-2xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-yellow-400 font-semibold flex items-center gap-2">
          <Users className="w-5 h-5" />
          Referral
        </h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <div className="text-gray-400 text-sm mb-2">Kode Referral Saya:</div>
          <div className="flex items-center gap-2">
            <code className="bg-black/30 text-yellow-400 px-3 py-2 rounded-lg font-mono text-sm flex-1">
              {referralCode || 'Belum tersedia'}
            </code>
            {referralCode && (
              <PremiumButton
                onClick={copyReferralCode}
                variant="outline"
                size="sm"
                className="border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10"
              >
                <Gift className="w-4 h-4" />
              </PremiumButton>
            )}
          </div>
        </div>

        {referralSource && (
          <div>
            <div className="text-gray-400 text-sm mb-1">Sumber Referral:</div>
            <div className="text-white">{referralSource}</div>
          </div>
        )}
      </div>

      <PremiumButton 
        href="/member/referral"
        className="w-full mt-4"
      >
        Kelola Referral
      </PremiumButton>
    </div>
  )
}

'use client'

import { PremiumButton } from '@/components/ui/PremiumButton'
import { BookOpen, MessageSquare, Shield, Eye } from 'lucide-react'

export default function EducationCommunity() {
  return (
    <div className="bg-[#0B0E11] border border-yellow-500/30 rounded-2xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-yellow-400 font-semibold flex items-center gap-2">
          <BookOpen className="w-5 h-5" />
          Edukasi & Komunitas
        </h3>
      </div>
      
      <div className="space-y-3">
        <PremiumButton 
          href="/id/academy"
          variant="outline"
          className="w-full justify-start"
        >
          <BookOpen className="w-4 h-4 mr-3" />
          Academy
        </PremiumButton>

        <PremiumButton 
          href="https://t.me/tpcglobalcommunity"
          variant="outline"
          className="w-full justify-start"
        >
          <MessageSquare className="w-4 h-4 mr-3" />
          Telegram Komunitas
        </PremiumButton>

        <PremiumButton 
          href="/id/transparency#anti-scam"
          variant="outline"
          className="w-full justify-start"
        >
          <Shield className="w-4 h-4 mr-3" />
          Panduan Anti-Scam
        </PremiumButton>

        <PremiumButton 
          href="/id/risk"
          variant="outline"
          className="w-full justify-start"
        >
          <Eye className="w-4 h-4 mr-3" />
          Risk Disclosure
        </PremiumButton>
      </div>
    </div>
  )
}

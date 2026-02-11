import { getUser } from '@/lib/supabase/server'
import AccountInfo from '@/components/member/AccountInfo'
import WalletCard from '@/components/member/WalletCard'
import PresaleActivity from '@/components/member/PresaleActivity'
import ReferralCard from '@/components/member/ReferralCard'
import EducationCommunity from '@/components/member/EducationCommunity'
import TransparencyCard from '@/components/member/TransparencyCard'
import QuickActions from '@/components/member/QuickActions'
import { Hand } from 'lucide-react'
import { cookies } from 'next/headers'

export default async function MemberDashboard() {
  const user = await getUser()

  // Get referral from cookie
  const cookieStore = await cookies()
  const reff = cookieStore.get('reff')?.value

  // Generate referral code from user ID
  const referralCode = user?.id ? `TPC-${user.id.slice(-6).toUpperCase()}` : ''

  if (!user) {
    return (
      <div className="min-h-screen bg-[#0B0E11] flex items-center justify-center">
        <div className="text-white">Memuat...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0B0E11] p-4">
      <div className="max-w-6xl mx-auto">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-yellow-500/10 to-amber-600/10 border border-yellow-500/30 rounded-2xl p-6 mb-6 shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <Hand className="w-6 h-6 text-yellow-400" />
            <h1 className="text-2xl font-bold text-yellow-400">Dashboard Member</h1>
          </div>
          <p className="text-gray-300">
            Selamat Datang Kembali! Di sini kita bisa melihat status akun, aktivitas presale, dan akses komunitas.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Account Info */}
          <div className="lg:col-span-1">
            <AccountInfo user={user} />
          </div>

          {/* Wallet */}
          <div className="lg:col-span-1">
            <WalletCard />
          </div>

          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <QuickActions user={user} />
          </div>

          {/* Presale Activity */}
          <div className="lg:col-span-2">
            <PresaleActivity />
          </div>

          {/* Referral */}
          <div className="lg:col-span-1">
            <ReferralCard 
              referralCode={referralCode}
              referralSource={reff || ''}
            />
          </div>

          {/* Education & Community */}
          <div className="lg:col-span-1">
            <EducationCommunity />
          </div>

          {/* Transparency */}
          <div className="lg:col-span-2">
            <TransparencyCard />
          </div>
        </div>
      </div>
    </div>
  )
}

import { Metadata } from 'next'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'Referral Saya - TPC',
  description: 'Halaman referral member',
}

export default function ReferralPage() {
  return (
    <div className="min-h-screen bg-[#0B0E11] p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#0B0E11] border border-yellow-500/30 rounded-2xl p-8 shadow-lg text-center">
          <h1 className="text-2xl font-bold text-yellow-400 mb-4">Referral Saya</h1>
          <div className="text-gray-300 mb-8">
            Fitur ini sedang disiapkan.
          </div>
          <div className="text-gray-400">
            Silakan kembali lagi nanti untuk informasi lebih lanjut.
          </div>
        </div>
      </div>
    </div>
  )
}

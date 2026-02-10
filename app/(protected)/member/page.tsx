import { Metadata } from 'next'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'Member Dashboard - TPC',
  description: 'Member dashboard area',
}

export default function MemberPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-6">Member Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-[#1A1F2E] border border-amber-500/25 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Welcome Back</h2>
          <div className="text-gray-300">
            Welcome to your member dashboard. Your features and tools will be available here.
          </div>
        </div>
        
        <div className="bg-[#1A1F2E] border border-amber-500/25 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full py-2 px-4 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition-colors">
              View Profile
            </button>
            <button className="w-full py-2 px-4 bg-[#1A1F2E] border border-gray-700 text-white font-semibold rounded-lg transition-colors hover:bg-gray-700">
              Settings
            </button>
          </div>
        </div>
        
        <div className="bg-[#1A1F2E] border border-amber-500/25 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Account Info</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Account Type</span>
              <span className="text-amber-400 font-semibold">Member</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Status</span>
              <span className="text-green-400 font-semibold">Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

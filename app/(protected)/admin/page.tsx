import { Metadata } from 'next'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'Admin Dashboard - TPC',
  description: 'Admin dashboard area',
}

export default function AdminPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-[#1A1F2E] border border-amber-500/25 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Quick Stats</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">Total Users</span>
              <span className="text-amber-400 font-semibold">0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Active Sessions</span>
              <span className="text-green-400 font-semibold">0</span>
            </div>
          </div>
        </div>
        
        <div className="bg-[#1A1F2E] border border-amber-500/25 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Recent Activity</h2>
          <div className="text-gray-400">
            No recent activity
          </div>
        </div>
        
        <div className="bg-[#1A1F2E] border border-amber-500/25 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">System Status</h2>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-gray-300">Database</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-gray-300">API</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-gray-300">Auth</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

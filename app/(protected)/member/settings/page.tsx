import { Metadata } from 'next'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'Pengaturan - TPC',
  description: 'Halaman pengaturan member',
}

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-[#0B0E11] border border-yellow-500/30 rounded-2xl p-8 shadow-lg text-center">
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">Pengaturan</h2>
        <div className="text-gray-300 mb-8">
          Fitur ini sedang disiapkan.
        </div>
        <div className="text-gray-400">
          Kita akan menambahkan detailnya setelah modul presale member selesai.
        </div>
      </div>
    </div>
  )
}

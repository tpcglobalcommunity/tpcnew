import { Metadata } from "next";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { Badge } from "@/components/ui/Badge";
import CountdownTimer from "@/components/ui/CountdownTimer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TPC Presale - Beli Token TPC | Tahap 1",
  description: "Beli token TPC selama presale Tahap 1. Token utilitas untuk ekosistem TPC. Tanpa janji investasi, tanpa jaminan keuntungan. Transparan dan dapat diaudit.",
};

export default function PresalePage() {
  return (
    <PremiumShell>
      <div className="min-h-screen">
        {/* Header */}
        <header className="border-b border-[#2a2a3a]">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-[#d4af37]">TPC Global</h1>
            <div className="flex gap-4">
              <Link href="/why-tpc" className="text-[#a0a0a0] hover:text-white transition">
                Kenapa TPC
              </Link>
              <Link href="/login" className="text-[#a0a0a0] hover:text-white transition">
                Masuk
              </Link>
            </div>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 py-6 md:py-16">
          {/* Hero Section */}
          <div className="text-center mb-12 md:mb-20">
            <div className="mb-6 md:mb-8">
              <Badge variant="gold" className="text-xs md:text-sm px-4 py-2">Tahap 1 Presale Sedang Berlangsung</Badge>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Beli TPC <span className="text-[#d4af37]">(Presale)</span>
            </h2>
            <p className="text-lg md:text-2xl text-[#a0a0a0] max-w-2xl md:max-w-3xl mx-auto mb-4 md:mb-6">
              Token Utilitas untuk Akses Platform & Partisipasi
            </p>
            <div className="bg-[#1a1a24] rounded-xl p-4 md:p-6 max-w-4xl mx-auto border border-[#2a2a3a]">
              <p className="text-sm md:text-base text-[#6b7280] leading-relaxed">
                TPC adalah token utilitas yang dirancang untuk akses, partisipasi, dan tata kelola dalam ekosistem TPC.
                Tidak terdaftar di DEX mana pun. Tidak ada harga pasar. Tidak ada jaminan keuntungan.
              </p>
            </div>
          </div>

          {/* Countdown & Supply Progress */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            <PremiumCard variant="gold" className="h-full">
              <div className="text-center">
                <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-[#d4af37] flex items-center justify-center gap-2 text-sm md:text-base">
                  ⏰ Hitung Mundur Presale
                </h3>
                <CountdownTimer targetDate="2026-08-15T00:00:00+08:00" />
              </div>
            </PremiumCard>

            <PremiumCard className="h-full">
              <div className="text-center">
                <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 flex items-center justify-center gap-2 text-sm md:text-base">
                  📊 Progres Supply
                </h3>
                <div className="mb-4 md:mb-6">
                  <div className="flex justify-between text-xs md:text-sm mb-2 md:mb-3">
                    <span className="text-[#a0a0a0] font-medium">Terjual</span>
                    <span className="text-white font-bold text-sm md:text-base">0 / 200.000.000 TPC</span>
                  </div>
                  <div className="w-full bg-[#1a1a24] rounded-full h-3 md:h-4 overflow-hidden">
                    <div className="bg-gradient-to-r from-[#d4af37] to-[#f4e4c1] h-3 md:h-4 rounded-full transition-all duration-500" style={{ width: "0%" }}></div>
                  </div>
                  <div className="text-center mt-2">
                    <span className="text-xl md:text-2xl font-bold text-[#d4af37]">0%</span>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-[#6b7280] leading-relaxed">
                  Pelacakan supply real-time. Semua pembelian tunduk pada Syarat & Pengungkapan Risiko.
                </p>
              </div>
            </PremiumCard>
          </div>

          {/* Presale Overview */}
          <PremiumCard className="mb-12 md:mb-16">
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#d4af37] flex items-center justify-center gap-2 text-base md:text-lg">
                📋 Ringkasan Presale
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#1a1a24] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 border-2 border-[#d4af37]">
                  <span className="text-lg md:text-2xl">🎯</span>
                </div>
                <p className="text-xs md:text-sm text-[#6b7280] mb-2">Tahap</p>
                <p className="text-base md:text-xl font-bold">Tahap 1</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#1a1a24] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 border-2 border-[#d4af37]">
                  <span className="text-lg md:text-2xl">💰</span>
                </div>
                <p className="text-xs md:text-sm text-[#6b7280] mb-2">Harga</p>
                <p className="text-base md:text-xl font-bold text-[#d4af37]">$0.001 / TPC</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#1a1a24] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 border-2 border-[#d4af37]">
                  <span className="text-lg md:text-2xl">🪙</span>
                </div>
                <p className="text-xs md:text-sm text-[#6b7280] mb-2">Supply</p>
                <p className="text-base md:text-xl font-bold">200.000.000 TPC</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#1a1a24] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 border-2 border-[#d4af37]">
                  <span className="text-lg md:text-2xl">💳</span>
                </div>
                <p className="text-xs md:text-sm text-[#6b7280] mb-2">Pembayaran</p>
                <p className="text-base md:text-xl font-bold">USDC / IDR</p>
              </div>
            </div>
          </PremiumCard>

          {/* Cara Kerja */}
          <PremiumCard className="mb-12 md:mb-16">
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#d4af37] flex items-center justify-center gap-2 text-base md:text-lg">
                🔧 Cara Kerja
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#d4af37] to-[#f4e4c1] rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-2xl md:text-3xl font-bold text-[#0a0a0f] shadow-lg">
                  1
                </div>
                <h4 className="font-bold text-base md:text-lg mb-2 md:mb-3">Masuk / Daftar</h4>
                <p className="text-xs md:text-sm text-[#a0a0a0] leading-relaxed">Buat akun member Anda untuk memulai proses pembelian TPC</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#d4af37] to-[#f4e4c1] rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-2xl md:text-3xl font-bold text-[#0a0a0f] shadow-lg">
                  2
                </div>
                <h4 className="font-bold text-base md:text-lg mb-2 md:mb-3">Hubungkan Wallet</h4>
                <p className="text-xs md:text-sm text-[#a0a0a0] leading-relaxed">Phantom wallet direkomendasikan untuk menerima token TPC</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#d4af37] to-[#f4e4c1] rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-2xl md:text-3xl font-bold text-[#0a0a0f] shadow-lg">
                  3
                </div>
                <h4 className="font-bold text-base md:text-lg mb-2 md:mb-3">Beli TPC</h4>
                <p className="text-xs md:text-sm text-[#a0a0a0] leading-relaxed">Buat invoice & selesaikan pembayaran dengan metode yang tersedia</p>
              </div>
            </div>
          </PremiumCard>

          {/* Dompet Treasury */}
          <PremiumCard variant="gold" className="mb-12 md:mb-16">
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#d4af37] flex items-center justify-center gap-2 text-base md:text-lg">
                🏛️ Dompet Treasury Resmi TPC
              </h3>
              <p className="text-sm md:text-base text-[#a0a0a0] mt-2">USDC – Solana Network</p>
            </div>
            <div className="text-center mb-6">
              <p className="text-sm md:text-base text-[#a0a0a0] mb-4 leading-relaxed">
                Semua pembayaran USDC untuk presale TPC harus dikirim ke dompet treasury resmi:
              </p>
              <div className="bg-[#0a0a0f] rounded-xl p-4 md:p-6 mb-6 border-2 border-[#d4af37] max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-2 md:gap-3 mb-3">
                  <span className="text-[#d4af37] text-lg md:text-xl">🔒</span>
                  <span className="text-sm md:text-base text-[#d4af37] font-medium">ALAMAT WALLET RESMI</span>
                </div>
                <code className="text-sm md:text-lg break-all text-[#ffd700] font-mono leading-relaxed">
                  5AeayrU2pdy6yNBeiUpTXkfMxw3VpDQGUHC6kXrBt5vw
                </code>
                <div className="mt-4">
                  <div className="bg-[#d4af37] text-[#0a0a0f] px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium text-center cursor-pointer hover:bg-[#c4a030] transition">
                    📋 Salin Alamat: 5Aeayr...Bt5vw
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-sm">
              <div className="text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#1a1a24] rounded-full flex items-center justify-center mx-auto mb-3 border border-[#d4af37]">
                  <span className="text-base md:text-lg">🌐</span>
                </div>
                <p className="text-xs md:text-sm text-[#6b7280] mb-1">Jaringan:</p>
                <p className="font-bold text-sm md:text-base">Solana</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#1a1a24] rounded-full flex items-center justify-center mx-auto mb-3 border border-[#d4af37]">
                  <span className="text-base md:text-lg">💎</span>
                </div>
                <p className="text-xs md:text-sm text-[#6b7280] mb-1">Aset:</p>
                <p className="font-bold text-sm md:text-base">USDC (SPL)</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#1a1a24] rounded-full flex items-center justify-center mx-auto mb-3 border border-[#d4af37]">
                  <span className="text-base md:text-lg">🎯</span>
                </div>
                <p className="text-xs md:text-sm text-[#6b7280] mb-1">Tujuan:</p>
                <p className="font-bold text-sm md:text-base">Treasury Presale TPC</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-3 md:p-4 max-w-2xl mx-auto">
                <p className="text-red-400 text-xs md:text-sm font-medium flex items-center justify-center gap-2 leading-relaxed">
                  ⚠️ Hanya kirim USDC di Solana. Mengirim aset lain atau menggunakan jaringan yang salah dapat mengakibatkan kehilangan dana.
                </p>
              </div>
            </div>
          </PremiumCard>

          {/* Metode Pembayaran */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            <PremiumCard className="h-full">
              <div className="text-center mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 border-2 border-green-500">
                  <span className="text-xl md:text-2xl">⚡</span>
                </div>
                <h3 className="font-bold text-base md:text-lg text-green-400 mb-2">USDC (On-Chain)</h3>
                <p className="text-sm md:text-base text-[#d4af37] font-medium">Direkomendasikan</p>
              </div>
              <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-[#a0a0a0]">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Transfer USDC ke dompet treasury</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Tempel hash transaksi (tx hash)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Verifikasi otomatis on-chain</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>TPC dikirim otomatis</span>
                </li>
              </ul>
            </PremiumCard>

            <PremiumCard className="h-full">
              <div className="text-center mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 border-2 border-yellow-500">
                  <span className="text-xl md:text-2xl">🏦</span>
                </div>
                <h3 className="font-bold text-base md:text-lg text-yellow-400 mb-2">IDR (Transfer Bank)</h3>
                <p className="text-sm md:text-base text-[#6b7280] font-medium">Tersedia di Member Area</p>
              </div>
              <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-[#a0a0a0]">
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">•</span>
                  <span>Hanya tersedia di area member</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">•</span>
                  <span>Detail bank ditampilkan setelah invoice</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">•</span>
                  <span>Verifikasi manual (jam kerja)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">•</span>
                  <span>TPC dikirim setelah persetujuan</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-[#1a1a24] rounded-lg border border-[#2a2a3a]">
                <p className="text-xs text-[#6b7280] text-center">
                  🔒 Untuk alasan keamanan, detail rekening bank tidak ditampilkan di halaman publik.
                </p>
              </div>
            </PremiumCard>
          </div>

          {/* Catatan Penting */}
          <PremiumCard className="mb-12 md:mb-16">
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#d4af37] flex items-center justify-center gap-2 text-base md:text-lg">
                ⚠️ Catatan Penting
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-3">
                  <span className="text-[#d4af37] mt-1 text-sm md:text-base">•</span>
                  <p className="text-xs md:text-sm text-[#a0a0a0] leading-relaxed">
                    TPC adalah token utilitas, bukan produk investasi
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#d4af37] mt-1 text-sm md:text-base">•</span>
                  <p className="text-xs md:text-sm text-[#a0a0a0] leading-relaxed">
                    Tidak ada jaminan pengembalian, harga, atau likuiditas
                  </p>
                </div>
              </div>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-3">
                  <span className="text-[#d4af37] mt-1 text-sm md:text-base">•</span>
                  <p className="text-xs md:text-sm text-[#a0a0a0] leading-relaxed">
                    Koneksi wallet diperlukan untuk menerima TPC
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#d4af37] mt-1 text-sm md:text-base">•</span>
                  <p className="text-xs md:text-sm text-[#a0a0a0] leading-relaxed">
                    Semua transaksi dicatat untuk transparansi dan audit
                  </p>
                </div>
              </div>
            </div>
          </PremiumCard>

          {/* Info Referral */}
          <PremiumCard className="mb-12 md:mb-16">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold text-[#d4af37] flex items-center justify-center gap-2 text-base md:text-lg mb-4 md:mb-6">
                🎯 Info Referral
              </h3>
              <div className="bg-[#1a1a24] rounded-xl p-4 md:p-6 max-w-md mx-auto border border-[#2a2a3a]">
                <p className="text-sm md:text-base text-[#a0a0a0] mb-3">Sponsor:</p>
                <p className="text-white font-bold text-lg md:text-xl mb-4">TPC-GLOBAL</p>
                <p className="text-xs md:text-sm text-[#6b7280] leading-relaxed">
                  Presale menggunakan alokasi internal 1 level saja. Tidak ada kode referral personal selama presale.
                </p>
              </div>
            </div>
          </PremiumCard>

          {/* Ajakan Bertindak */}
          <div className="text-center mb-12 md:mb-16">
            <Link href="/login">
              <PremiumButton size="lg" className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 shadow-lg hover:shadow-xl transition-all duration-300">
                🚀 Mulai Beli TPC Sekarang
              </PremiumButton>
            </Link>
            <p className="text-sm md:text-base text-[#6b7280] mt-4 md:mt-6 max-w-2xl mx-auto leading-relaxed">
              Dengan berpartisipasi, Anda setuju dengan{" "}
              <Link href="/terms" className="text-[#d4af37] hover:underline font-medium">Syarat & Ketentuan</Link> dan{" "}
              <Link href="/risk-disclosure" className="text-[#d4af37] hover:underline font-medium">Pengungkapan Risiko</Link>
            </p>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-[#2a2a3a] mt-12">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <p className="text-sm text-[#6b7280] text-center">
              TPC menyediakan layanan edukasi dan platform saja. Tidak ada yang ada di halaman ini merupakan saran keuangan.
            </p>
          </div>
        </footer>
      </div>
    </PremiumShell>
  );
}

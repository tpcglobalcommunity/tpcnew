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

        <main className="max-w-6xl mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Badge variant="gold" className="mb-4">Tahap 1 Presale Sedang Berlangsung</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Beli TPC <span className="text-[#d4af37]">(Presale)</span>
            </h2>
            <p className="text-xl text-[#a0a0a0] max-w-2xl mx-auto">
              Token Utilitas untuk Akses Platform & Partisipasi
            </p>
            <p className="text-sm text-[#6b7280] mt-4 max-w-xl mx-auto">
              TPC adalah token utilitas yang dirancang untuk akses, partisipasi, dan tata kelola dalam ekosistem TPC.
              Tidak terdaftar di DEX mana pun. Tidak ada harga pasar. Tidak ada jaminan keuntungan.
            </p>
          </div>

          {/* Countdown & Supply Progress */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <PremiumCard variant="gold">
              <h3 className="text-lg font-semibold mb-4 text-[#d4af37]">Hitung Mundur Presale</h3>
              <CountdownTimer targetDate="2026-08-15T00:00:00+08:00" />
            </PremiumCard>

            <PremiumCard>
              <h3 className="text-lg font-semibold mb-4">Progres Supply</h3>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-[#a0a0a0]">Terjual</span>
                  <span className="text-white">0 / 200.000.000 TPC</span>
                </div>
                <div className="w-full bg-[#1a1a24] rounded-full h-3">
                  <div className="bg-[#d4af37] h-3 rounded-full" style={{ width: "0%" }}></div>
                </div>
              </div>
              <p className="text-xs text-[#6b7280]">
                Pelacakan supply real-time. Semua pembelian tunduk pada Syarat & Pengungkapan Risiko.
              </p>
            </PremiumCard>
          </div>

          {/* Presale Overview */}
          <PremiumCard className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-[#d4af37]">Ringkasan Presale</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <p className="text-sm text-[#6b7280]">Tahap</p>
                <p className="text-xl font-bold">Tahap 1</p>
              </div>
              <div>
                <p className="text-sm text-[#6b7280]">Harga</p>
                <p className="text-xl font-bold text-[#d4af37]">$0.001 / TPC</p>
              </div>
              <div>
                <p className="text-sm text-[#6b7280]">Supply</p>
                <p className="text-xl font-bold">200.000.000 TPC</p>
              </div>
              <div>
                <p className="text-sm text-[#6b7280]">Pembayaran</p>
                <p className="text-xl font-bold">USDC / IDR</p>
              </div>
            </div>
          </PremiumCard>

          {/* Cara Kerja */}
          <PremiumCard className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-[#d4af37]">Cara Kerja</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#d4af37] text-[#0a0a0f] flex items-center justify-center font-bold shrink-0">1</div>
                <div>
                  <p className="font-medium">Masuk / Daftar</p>
                  <p className="text-sm text-[#a0a0a0]">Buat akun member Anda</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#d4af37] text-[#0a0a0f] flex items-center justify-center font-bold shrink-0">2</div>
                <div>
                  <p className="font-medium">Hubungkan Wallet</p>
                  <p className="text-sm text-[#a0a0a0]">Phantom wallet direkomendasikan</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#d4af37] text-[#0a0a0f] flex items-center justify-center font-bold shrink-0">3</div>
                <div>
                  <p className="font-medium">Beli TPC</p>
                  <p className="text-sm text-[#a0a0a0]">Buat invoice & selesaikan pembayaran</p>
                </div>
              </div>
            </div>
          </PremiumCard>

          {/* Dompet Treasury */}
          <PremiumCard variant="gold" className="mb-12">
            <h3 className="text-lg font-semibold mb-4 text-[#d4af37]">Dompet Treasury Resmi TPC (USDC – Solana)</h3>
            <p className="text-sm text-[#a0a0a0] mb-4">
              Semua pembayaran USDC untuk presale TPC harus dikirim ke dompet treasury resmi:
            </p>
            <div className="bg-[#0a0a0f] rounded-lg p-4 mb-4">
              <code className="text-sm break-all text-[#ffd700]">
                5AeayrU2pdy6yNBeiUpTXkfMxw3VpDQGUHC6kXrBt5vw
              </code>
            </div>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-[#6b7280]">Jaringan:</span> Solana
              </div>
              <div>
                <span className="text-[#6b7280]">Aset:</span> USDC (SPL)
              </div>
              <div>
                <span className="text-[#6b7280]">Tujuan:</span> Treasury Presale TPC
              </div>
            </div>
            <p className="text-xs text-[#6b7280] mt-4">
              ⚠️ Hanya kirim USDC di Solana. Mengirim aset lain atau menggunakan jaringan yang salah dapat mengakibatkan kehilangan dana.
            </p>
          </PremiumCard>

          {/* Metode Pembayaran */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <PremiumCard>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <h3 className="font-semibold">USDC (On-Chain) — Direkomendasikan</h3>
              </div>
              <ul className="space-y-2 text-sm text-[#a0a0a0]">
                <li>• Transfer USDC ke dompet treasury</li>
                <li>• Tempel hash transaksi (tx hash)</li>
                <li>• Verifikasi otomatis on-chain</li>
                <li>• TPC dikirim otomatis</li>
              </ul>
            </PremiumCard>

            <PremiumCard>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                <h3 className="font-semibold">IDR (Transfer Bank)</h3>
              </div>
              <ul className="space-y-2 text-sm text-[#a0a0a0]">
                <li>• Hanya tersedia di area member</li>
                <li>• Detail bank ditampilkan setelah invoice</li>
                <li>• Verifikasi manual (jam kerja)</li>
                <li>• TPC dikirim setelah persetujuan</li>
              </ul>
              <p className="text-xs text-[#6b7280] mt-4">
                🔒 Untuk alasan keamanan, detail rekening bank tidak ditampilkan di halaman publik.
              </p>
            </PremiumCard>
          </div>

          {/* Catatan Penting */}
          <PremiumCard className="mb-12">
            <h3 className="text-lg font-semibold mb-4 text-[#d4af37]">Catatan Penting</h3>
            <ul className="space-y-2 text-sm text-[#a0a0a0]">
              <li>• TPC adalah token utilitas, bukan produk investasi</li>
              <li>• Tidak ada jaminan pengembalian, harga, atau likuiditas</li>
              <li>• Koneksi wallet diperlukan untuk menerima TPC</li>
              <li>• Semua transaksi dicatat untuk transparansi dan audit</li>
            </ul>
          </PremiumCard>

          {/* Info Referral */}
          <PremiumCard className="mb-12">
            <h3 className="text-lg font-semibold mb-4 text-[#d4af37]">Referral (Presale)</h3>
            <p className="text-sm text-[#a0a0a0] mb-2">Sponsor: <span className="text-white font-medium">TPC-GLOBAL</span></p>
            <p className="text-sm text-[#6b7280]">
              Presale menggunakan alokasi internal 1 level saja. Tidak ada kode referral personal selama presale.
            </p>
          </PremiumCard>

          {/* Ajakan Bertindak */}
          <div className="text-center">
            <Link href="/login">
              <PremiumButton size="lg">
                Masuk / Daftar untuk Beli TPC
              </PremiumButton>
            </Link>
            <p className="text-sm text-[#6b7280] mt-4">
              Dengan berpartisipasi, Anda setuju dengan{" "}
              <Link href="/terms" className="text-[#d4af37] hover:underline">Syarat</Link> dan{" "}
              <Link href="/risk-disclosure" className="text-[#d4af37] hover:underline">Pengungkapan Risiko</Link>
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

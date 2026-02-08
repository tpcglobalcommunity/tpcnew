import { Metadata } from "next";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pengungkapan Risiko | TPC Global - Risk Disclosure",
  description: "Pengungkapan risiko lengkap untuk partisipasi dalam presale TPC. Baca dengan teliti sebelum membuat keputusan investasi.",
};

export default function RiskDisclosurePage() {
  return (
    <PremiumShell>
      <div className="min-h-screen">
        {/* Header */}
        <header className="border-b border-[#2a2a3a]/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <Link href="/" className="text-2xl font-bold text-[#d4af37] flex items-center gap-2">
              <span className="text-3xl">🏛️</span>
              TPC Global
            </Link>
            <Link href="/presale" className="text-[#a0a0a0] hover:text-white transition flex items-center gap-2 bg-[#1a1a24] px-4 py-2 rounded-lg border border-[#2a2a3a]">
              <span>←</span>
              Kembali ke Presale
            </Link>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 py-8 md:py-16">
          {/* Hero Section */}
          <div className="text-center mb-12 md:mb-20">
            <div className="mb-6 md:mb-8">
              <div className="inline-flex items-center gap-2 md:gap-3 bg-red-500/10 border border-red-500/30 rounded-full px-4 md:px-6 py-2 md:py-3 mb-4 md:mb-6">
                <span className="text-xl md:text-2xl">⚠️</span>
                <span className="text-xs md:text-sm text-red-400 font-medium">Pernyataan Risiko Penting</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-8 leading-tight">
              Pengungkapan <span className="text-red-400">Risiko</span>
            </h1>
            <p className="text-lg md:text-2xl text-[#a0a0a0] mb-4 md:mb-8 max-w-2xl md:max-w-3xl mx-auto">
              Baca dengan Teliti Sebelum Membuat Keputusan Finansial
            </p>
            <div className="bg-gradient-to-r from-red-500/20 to-transparent rounded-xl p-4 md:p-8 max-w-4xl mx-auto border border-red-500/30">
              <p className="text-lg md:text-xl text-white leading-relaxed mb-3 md:mb-4">
                Partisipasi dalam presale TPC melibatkan risiko signifikan yang dapat mengakibatkan kehilangan seluruh investasi Anda.
              </p>
              <p className="text-base md:text-lg text-red-400 font-bold leading-relaxed">
                HANYA INVESTASIKAN DANA YANG ANDA SIAP KEHILANGKAN SEPENUHNYA
              </p>
            </div>
          </div>

          {/* Critical Warning */}
          <section className="mb-12 md:mb-20">
            <div className="bg-red-900/20 border-2 border-red-500 rounded-xl p-6 md:p-12">
              <div className="text-center mb-6 md:mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-red-400 mb-4 flex items-center justify-center gap-3">
                  <span className="text-3xl md:text-4xl">🚨</span>
                  Peringatan Kritis
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 text-2xl md:text-3xl mt-1">⚠️</span>
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-red-400 mb-2">Tidak Adanya Jaminan</h3>
                      <p className="text-xs md:text-sm text-[#a0a0a0] leading-relaxed">
                        TPC tidak menjamin keuntungan, return, atau likuiditas. Nilai token dapat turun menjadi nol.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 text-2xl md:text-3xl mt-1">⚠️</span>
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-red-400 mb-2">Volatilitas Ekstrem</h3>
                      <p className="text-xs md:text-sm text-[#a0a0a0] leading-relaxed">
                        Harga kripto sangat volatile dan dapat berubah drastis dalam waktu singkat tanpa peringatan.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 text-2xl md:text-3xl mt-1">⚠️</span>
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-red-400 mb-2">Risiko Regulasi</h3>
                      <p className="text-xs md:text-sm text-[#a0a0a0] leading-relaxed">
                        Perubahan regulasi dapat mempengaruhi nilai dan legalitas aset kripto secara signifikan.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 text-2xl md:text-3xl mt-1">⚠️</span>
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-red-400 mb-2">Risiko Teknologi</h3>
                      <p className="text-xs md:text-sm text-[#a0a0a0] leading-relaxed">
                        Bug, hack, atau kegagalan teknis dapat mengakibatkan kehilangan dana secara permanen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Detailed Risks */}
          <section className="mb-12 md:mb-20">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#d4af37] mb-4 flex items-center justify-center gap-3">
                <span className="text-3xl md:text-4xl">📋</span>
                Risiko Rinci
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <PremiumCard className="h-full">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 border-2 border-red-500">
                  <span className="text-lg md:text-2xl">📉</span>
                </div>
                <h3 className="text-base md:text-lg font-bold text-red-400 mb-3">Risiko Pasar</h3>
                <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-[#a0a0a0]">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span>Harga dapat turun drastis atau menjadi nol</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span>Tidak ada likuiditas yang dijamin</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span>Pasar dapat dimanipulasi oleh whale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span>Sentimen pasar mempengaruhi harga</span>
                  </li>
                </ul>
              </PremiumCard>

              <PremiumCard className="h-full">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 border-2 border-red-500">
                  <span className="text-lg md:text-2xl">🔐</span>
                </div>
                <h3 className="text-base md:text-lg font-bold text-red-400 mb-3">Risiko Keamanan</h3>
                <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-[#a0a0a0]">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span>Risiko hack dan pencurian digital</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span>Kehilangan akses ke wallet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span>Phishing dan social engineering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span>Vulnerability smart contract</span>
                  </li>
                </ul>
              </PremiumCard>

              <PremiumCard className="h-full">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 border-2 border-red-500">
                  <span className="text-lg md:text-2xl">⚖️</span>
                </div>
                <h3 className="text-base md:text-lg font-bold text-red-400 mb-3">Risiko Legal</h3>
                <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-[#a0a0a0]">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span>Perubahan regulasi tiba-tiba</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span>Status legal yang tidak jelas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span>Pajak dan pelaporan kompleks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span>Batasan geografis tertentu</span>
                  </li>
                </ul>
              </PremiumCard>

              <PremiumCard className="h-full">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 border-2 border-red-500">
                  <span className="text-lg md:text-2xl">💻</span>
                </div>
                <h3 className="text-base md:text-lg font-bold text-red-400 mb-3">Risiko Teknis</h3>
                <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-[#a0a0a0]">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span>Kegagalan sistem blockchain</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span>Bug dalam smart contract</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span>Network congestion dan delay</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span>Upgrade sistem yang gagal</span>
                  </li>
                </ul>
              </PremiumCard>

              <PremiumCard className="h-full">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 border-2 border-red-500">
                  <span className="text-lg md:text-2xl">🏢</span>
                </div>
                <h3 className="text-base md:text-lg font-bold text-red-400 mb-3">Risiko Operasional</h3>
                <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-[#a0a0a0]">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span>Kegagalan manajemen tim</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span>Kurangnya likuiditas internal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span>Konflik internal tim</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span>Kesalahan operasional</span>
                  </li>
                </ul>
              </PremiumCard>

              <PremiumCard className="h-full">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 border-2 border-red-500">
                  <span className="text-lg md:text-2xl">🌍</span>
                </div>
                <h3 className="text-base md:text-lg font-bold text-red-400 mb-3">Risiko Makro</h3>
                <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-[#a0a0a0]">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span>Krisis ekonomi global</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span>Kebijakan moneter bank sentral</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span>Geopolitik dan sanksi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span>Pandemi atau bencana alam</span>
                  </li>
                </ul>
              </PremiumCard>
            </div>
          </section>

          {/* User Responsibility */}
          <section className="mb-12 md:mb-20">
            <PremiumCard>
              <div className="text-center mb-6 md:mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-[#d4af37] mb-4 flex items-center justify-center gap-2">
                  <span className="text-2xl md:text-3xl">👤</span>
                  Tanggung Jawab Pengguna
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-4">Sebelum Berpartisipasi:</h3>
                  <ul className="space-y-3 md:space-y-4 text-xs md:text-sm text-[#a0a0a0]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#d4af37] mt-1">✓</span>
                      <span>Lakukan riset independen menyeluruh</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d4af37] mt-1">✓</span>
                      <span>Pahami teknologi blockchain dan kripto</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d4af37] mt-1">✓</span>
                      <span>Konsultasi dengan penasihat finansial</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d4af37] mt-1">✓</span>
                      <span>Periksa status legal di yurisdiksi Anda</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d4af37] mt-1">✓</span>
                      <span>Hanya investasikan dana yang siap hilangkan sepenuhnya</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-4">Selama Berpartisipasi:</h3>
                  <ul className="space-y-3 md:space-y-4 text-xs md:text-sm text-[#a0a0a0]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#d4af37] mt-1">✓</span>
                      <span>Amankan private keys dengan baik</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d4af37] mt-1">✓</span>
                      <span>Gunakan hardware wallet untuk jumlah besar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d4af37] mt-1">✓</span>
                      <span>Waspadai phishing dan scam</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d4af37] mt-1">✓</span>
                      <span>Monitor perkembangan proyek secara aktif</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d4af37] mt-1">✓</span>
                      <span>Patuhi kewajiban perpajakan</span>
                    </li>
                  </ul>
                </div>
              </div>
            </PremiumCard>
          </section>

          {/* Final Confirmation */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-red-500/20 to-transparent rounded-xl p-6 md:p-12 border border-red-500/30">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                Konfirmasi Pemahaman Risiko
              </h2>
              <p className="text-base md:text-lg text-white leading-relaxed mb-6 md:mb-8 max-w-2xl mx-auto">
                Dengan melanjutkan ke presale, Anda mengkonfirmasi bahwa telah membaca, memahami, dan menerima semua risiko yang dijelaskan di halaman ini.
              </p>
              <div className="bg-red-900/30 border border-red-500 rounded-lg p-4 md:p-6 max-w-md mx-auto mb-4">
                <p className="text-red-400 font-bold leading-relaxed">
                  Saya memahami bahwa saya dapat kehilangan seluruh investasi saya dan saya hanya berinvestasi dana yang saya siap kehilangkan sepenuhnya.
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center">
                <Link href="/presale">
                  <PremiumButton size="lg" className="px-6 md:px-8 py-3 md:py-4 bg-red-600 hover:bg-red-700 text-white">
                    Saya Memahami Risiko - Lanjut ke Presale
                  </PremiumButton>
                </Link>
                <Link href="/why-tpc" className="inline-flex items-center px-4 md:px-8 py-2 md:py-4 border border-yellow-500/50 rounded-lg text-yellow-400 hover:bg-yellow-500/10 transition text-sm md:text-base">
                  📖 Pelajari Lebih Lanjut
                </Link>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-[#2a2a3a]/50 mt-20">
          <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
            <div className="text-center">
              <p className="text-sm md:text-base text-[#6b7280] leading-relaxed max-w-3xl mx-auto">
                Pengungkapan risiko ini tidak lengkap dan tidak mencakup semua kemungkinan risiko. Kripto adalah aset berisiko tinggi. Investasi dengan bijak.
              </p>
              <div className="flex flex-col md:flex-row gap-3 justify-center mt-6">
                <Link href="/terms" className="text-[#d4af37] hover:underline text-xs md:text-sm">
                  Syarat & Ketentuan
                </Link>
                <Link href="/privacy" className="text-[#d4af37] hover:underline text-xs md:text-sm">
                  Kebijakan Privasi
                </Link>
                <Link href="/aml-policy" className="text-[#d4af37] hover:underline text-xs md:text-sm">
                  Kebijakan AML
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </PremiumShell>
  );
}

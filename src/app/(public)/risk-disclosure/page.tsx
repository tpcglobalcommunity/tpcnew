import { Metadata } from "next";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pengungkapan Risiko | TPC Presale - Pahami Risiko Sepenuhnya",
  description: "Pengungkapan risiko lengkap untuk presale TPC. Pahami volatilitas kripto, tidak ada jaminan, dan tanggung jawab pengguna sebelum berpartisipasi. Pendekatan edukasi terlebih dahulu.",
};

export default function RiskDisclosurePage() {
  return (
    <PremiumShell>
      <div className="min-h-screen">
        {/* Header */}
        <header className="border-b border-[#2a2a3a]/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-[#d4af37] flex items-center gap-2">
              <span className="text-3xl">⚖️</span>
              TPC Global
            </Link>
            <Link href="/presale" className="text-[#a0a0a0] hover:text-white transition flex items-center gap-2 bg-[#1a1a24] px-4 py-2 rounded-lg border border-[#2a2a3a] hover:border-[#d4af37]/50">
              <span>←</span>
              Kembali ke Presale
            </Link>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-full px-6 py-3 mb-6">
                <span className="text-2xl">⚠️</span>
                <span className="text-red-400 font-medium">Pernyataan Risiko Penting</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Pengungkapan <span className="text-red-400">Risiko</span>
            </h1>
            <p className="text-2xl text-[#a0a0a0] mb-8 max-w-3xl mx-auto">
              Baca dengan Teliti Sebelum Membuat Keputusan Finansial
            </p>
            <div className="bg-gradient-to-r from-red-500/20 to-transparent rounded-2xl p-8 max-w-4xl mx-auto border border-red-500/30">
              <p className="text-xl text-white leading-relaxed mb-4">
                Partisipasi dalam presale TPC melibatkan risiko signifikan yang dapat mengakibatkan kehilangan seluruh investasi Anda.
              </p>
              <p className="text-lg text-red-400 font-bold leading-relaxed">
                HANYA INVESTASIKAN DANA YANG ANDA SIAP KEHILANGKAN SEPENUHNYA
              </p>
            </div>
          </div>

          {/* Critical Warning */}
          <section className="mb-20">
            <div className="bg-red-900/20 border-2 border-red-500 rounded-2xl p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-red-400 mb-4 flex items-center justify-center gap-3">
                  <span className="text-4xl">🚨</span>
                  Peringatan Kritis
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="text-red-400 text-2xl mt-1">⚠️</span>
                    <div>
                      <h3 className="text-lg font-bold text-red-400 mb-2">Tidak Adanya Jaminan</h3>
                      <p className="text-[#a0a0a0] leading-relaxed">
                        TPC tidak menjamin keuntungan, return, atau likuiditas apa pun. Nilai token dapat turun menjadi nol.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-red-400 text-2xl mt-1">⚠️</span>
                    <div>
                      <h3 className="text-lg font-bold text-red-400 mb-2">Volatilitas Ekstrem</h3>
                      <p className="text-[#a0a0a0] leading-relaxed">
                        Harga kripto sangat volatile dan dapat berubah drastis dalam waktu singkat tanpa peringatan.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="text-red-400 text-2xl mt-1">⚠️</span>
                    <div>
                      <h3 className="text-lg font-bold text-red-400 mb-2">Risiko Regulasi</h3>
                      <p className="text-[#a0a0a0] leading-relaxed">
                        Perubahan regulasi dapat mempengaruhi nilai dan legalitas aset kripto secara signifikan.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-red-400 text-2xl mt-1">⚠️</span>
                    <div>
                      <h3 className="text-lg font-bold text-red-400 mb-2">Risiko Teknologi</h3>
                      <p className="text-[#a0a0a0] leading-relaxed">
                        Bug, hack, atau kegagalan teknis dapat mengakibatkan kehilangan dana secara permanen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Detailed Risks */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#d4af37] mb-4 flex items-center justify-center gap-3">
                <span className="text-4xl">📋</span>
                Risiko Rinci
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <PremiumCard className="h-full">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-red-500">
                  <span className="text-2xl">📉</span>
                </div>
                <h3 className="text-xl font-bold text-red-400 mb-4">Risiko Pasar</h3>
                <ul className="space-y-3 text-sm text-[#a0a0a0]">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Harga dapat turun drastis atau menjadi nol</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Tidak ada likuiditas yang dijamin</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Pasar dapat dimanipulasi oleh whale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Sentimen pasar mempengaruhi harga</span>
                  </li>
                </ul>
              </PremiumCard>

              <PremiumCard className="h-full">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-red-500">
                  <span className="text-2xl">🔐</span>
                </div>
                <h3 className="text-xl font-bold text-red-400 mb-4">Risiko Keamanan</h3>
                <ul className="space-y-3 text-sm text-[#a0a0a0]">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Risiko hack dan pencurian digital</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Kehilangan akses ke wallet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Phishing dan social engineering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Vulnerability smart contract</span>
                  </li>
                </ul>
              </PremiumCard>

              <PremiumCard className="h-full">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-red-500">
                  <span className="text-2xl">⚖️</span>
                </div>
                <h3 className="text-xl font-bold text-red-400 mb-4">Risiko Legal</h3>
                <ul className="space-y-3 text-sm text-[#a0a0a0]">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Perubahan regulasi tiba-tiba</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Status legal yang tidak jelas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Pajak dan pelaporan kompleks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Batasan geografis tertentu</span>
                  </li>
                </ul>
              </PremiumCard>

              <PremiumCard className="h-full">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-red-500">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-xl font-bold text-red-400 mb-4">Risiko Teknis</h3>
                <ul className="space-y-3 text-sm text-[#a0a0a0]">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Kegagalan sistem blockchain</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Bug dalam smart contract</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Network congestion dan delay</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Upgrade sistem yang gagal</span>
                  </li>
                </ul>
              </PremiumCard>

              <PremiumCard className="h-full">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-red-500">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-bold text-red-400 mb-4">Risiko Operasional</h3>
                <ul className="space-y-3 text-sm text-[#a0a0a0]">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Kegagalan manajemen tim</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Kurangnya likuiditas internal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Konflik internal tim</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Kesalahan operasional</span>
                  </li>
                </ul>
              </PremiumCard>

              <PremiumCard className="h-full">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-red-500">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-xl font-bold text-red-400 mb-4">Risiko Makro</h3>
                <ul className="space-y-3 text-sm text-[#a0a0a0]">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Krisis ekonomi global</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Kebijakan moneter bank sentral</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Geopolitik dan sanksi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Pandemi atau bencana alam</span>
                  </li>
                </ul>
              </PremiumCard>
            </div>
          </section>

          {/* User Responsibility */}
          <section className="mb-20">
            <PremiumCard className="bg-gradient-to-br from-[#1a1a24] to-[#0a0a0f] border-[#d4af37]/30">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#d4af37] mb-4 flex items-center justify-center gap-3">
                  <span className="text-4xl">👤</span>
                  Tanggung Jawab Pengguna
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-6">Sebelum Berpartisipasi:</h3>
                  <ul className="space-y-4 text-[#a0a0a0]">
                    <li className="flex items-start gap-3">
                      <span className="text-[#d4af37] mt-1">✓</span>
                      <span>Lakukan riset independen menyeluruh</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#d4af37] mt-1">✓</span>
                      <span>Pahami teknologi blockchain dan kripto</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#d4af37] mt-1">✓</span>
                      <span>Konsultasi dengan penasihat finansial</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#d4af37] mt-1">✓</span>
                      <span>Periksa status legal di yurisdiksi Anda</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#d4af37] mt-1">✓</span>
                      <span>Hanya investasikan dana yang siap hilang</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-6">Selama Berpartisipasi:</h3>
                  <ul className="space-y-4 text-[#a0a0a0]">
                    <li className="flex items-start gap-3">
                      <span className="text-[#d4af37] mt-1">✓</span>
                      <span>Amankan private keys dengan baik</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#d4af37] mt-1">✓</span>
                      <span>Gunakan hardware wallet untuk jumlah besar</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#d4af37] mt-1">✓</span>
                      <span>Waspadai phishing dan scam</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#d4af37] mt-1">✓</span>
                      <span>Monitor perkembangan proyek secara aktif</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#d4af37] mt-1">✓</span>
                      <span>Patuhi kewajiban perpajakan</span>
                    </li>
                  </ul>
                </div>
              </div>
            </PremiumCard>
          </section>

          {/* No Guarantee Statement */}
          <section className="mb-20">
            <div className="bg-yellow-900/20 border-2 border-yellow-500 rounded-2xl p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-yellow-400 mb-4 flex items-center justify-center gap-3">
                  <span className="text-4xl">⚠️</span>
                  Pernyataan Tidak Ada Jaminan
                </h2>
              </div>
              <div className="text-center max-w-4xl mx-auto">
                <p className="text-xl text-yellow-400 leading-relaxed mb-6">
                  TPC, timnya, afiliasi, atau mitra TIDAK MEMBERIKAN JAMINAN APA PUN, baik tersurat maupun tersirat, mengenai:
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="space-y-3">
                    <p className="text-[#a0a0a0] flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      <span>Keuntungan atau return investasi</span>
                    </p>
                    <p className="text-[#a0a0a0] flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      <span>Kestabilan harga token</span>
                    </p>
                    <p className="text-[#a0a0a0] flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      <span>Likuiditas pasar sekunder</span>
                    </p>
                    <p className="text-[#a0a0a0] flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      <span>Keberhasilan proyek jangka panjang</span>
                    </p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-[#a0a0a0] flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      <span>Ketahanan terhadap serangan cyber</span>
                    </p>
                    <p className="text-[#a0a0a0] flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      <span>Kepatuhan regulasi masa depan</span>
                    </p>
                    <p className="text-[#a0a0a0] flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      <span>Tidak adanya masalah teknis</span>
                    </p>
                    <p className="text-[#a0a0a0] flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      <span>Kualitas layanan berkelanjutan</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final Confirmation */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-red-500/20 to-transparent rounded-2xl p-12 border border-red-500/30">
              <h2 className="text-3xl font-bold text-white mb-6">
                Konfirmasi Pemahaman Risiko
              </h2>
              <p className="text-xl text-[#a0a0a0] mb-8 max-w-2xl mx-auto leading-relaxed">
                Dengan melanjutkan ke presale, Anda mengkonfirmasi bahwa telah membaca, memahami, dan menerima semua risiko yang dijelaskan di halaman ini.
              </p>
              <div className="space-y-4">
                <div className="bg-red-900/30 border border-red-500 rounded-lg p-6 max-w-md mx-auto">
                  <p className="text-red-400 font-bold leading-relaxed">
                    Saya memahami bahwa saya dapat kehilangan seluruh investasi saya dan saya hanya berinvestasi dana yang saya siap kehilangkan sepenuhnya.
                  </p>
                </div>
                <div className="flex gap-4 justify-center">
                  <Link href="/presale">
                    <PremiumButton size="lg" className="px-8 py-4 bg-red-600 hover:bg-red-700">
                      Saya Memahami Risiko - Lanjut ke Presale
                    </PremiumButton>
                  </Link>
                  <Link href="/why-tpc" className="inline-flex items-center px-8 py-4 border border-[#d4af37]/50 rounded-lg text-[#d4af37] hover:bg-[#d4af37]/10 transition">
                      📖 Pelajari Lebih Lanjut
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-[#2a2a3a]/50 mt-20">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="text-center">
              <p className="text-[#6b7280] leading-relaxed max-w-3xl mx-auto">
                Pengungkapan risiko ini tidak lengkap dan tidak mencakup semua kemungkinan risiko. Kripto adalah aset berisiko tinggi. Investasi dengan bijak.
              </p>
              <div className="flex gap-6 justify-center mt-6">
                <Link href="/terms" className="text-[#d4af37] hover:underline text-sm">
                  Syarat & Ketentuan
                </Link>
                <Link href="/privacy" className="text-[#d4af37] hover:underline text-sm">
                  Kebijakan Privasi
                </Link>
                <Link href="/aml-policy" className="text-[#d4af37] hover:underline text-sm">
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

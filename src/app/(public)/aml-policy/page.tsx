import { Metadata } from "next";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kebijakan AML | TPC Global - Anti-Money Laundering Policy",
  description: "Kebijakan Anti-Money Laundering resmi TPC Global. Mencegah pencucian uang dan pendanaan terorisime sesuai standar internasional.",
};

export default function AMLPolicyPage() {
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
            <Link href="/presale" className="text-[#a0a0a0] hover:text-white transition flex items-center gap-2 bg-[#1a1a24] px-4 py-2 rounded-lg border border-[#2a2a3a] hover:border-[#d4af37]/50">
              <span>←</span>
              Kembali ke Presale
            </Link>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 py-8 md:py-16">
          {/* Hero Section */}
          <div className="text-center mb-12 md:mb-20">
            <div className="mb-6 md:mb-8">
              <div className="inline-flex items-center gap-2 md:gap-3 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 md:px-6 py-2 md:py-3 mb-4 md:mb-6">
                <span className="text-xl md:text-2xl">🛡️</span>
                <span className="text-xs md:text-sm text-blue-400 font-medium">Kebijakan Keamanan</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-8 leading-tight">
              Kebijakan <span className="text-blue-400">Anti-Money Laundering</span>
            </h1>
            <p className="text-lg md:text-2xl text-[#a0a0a0] mb-4 md:mb-8 max-w-2xl md:max-w-3xl mx-auto">
              Mencegah Pencucian Uang & Pendanaan Terorisime
            </p>
            <div className="bg-gradient-to-r from-blue-500/20 to-transparent rounded-xl p-4 md:p-8 max-w-4xl mx-auto border border-blue-500/30">
              <p className="text-base md:text-xl text-[#a0a0a0] leading-relaxed mb-3 md:mb-4">
                TPC Global berkomitmen penuh untuk mencegah pencucian uang, pendanaan terorisime, dan aktivitas ilegal lainnya sesuai standar internasional.
              </p>
              <p className="text-base md:text-xl text-white font-bold leading-relaxed">
                Kebijakan ini menguraikan prosedur kami untuk mendeteksi, mencegah, dan melaporkan aktivitas mencurigakan.
              </p>
            </div>
          </div>

          {/* Table of Contents */}
          <section className="mb-12 md:mb-20">
            <PremiumCard>
              <h2 className="text-xl md:text-2xl font-bold text-blue-400 mb-4 flex items-center justify-center gap-2 text-base md:text-lg">
                <span className="text-2xl md:text-3xl">📋</span>
                Daftar Isi
              </h2>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <ul className="space-y-3 md:space-y-4 text-xs md:text-sm text-[#a0a0a0]">
                  <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                    <span className="text-blue-400">1.</span>
                    <span>Pernyataan Kebijakan</span>
                  </li>
                  <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                    <span className="text-blue-400">2.</span>
                    <span>Ruang Lingkup</span>
                  </li>
                  <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                    <span className="text-blue-400">3.</span>
                    <span>Identifikasi Pelanggan</span>
                  </li>
                  <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                    <span className="text-blue-400">4.</span>
                    <span>Pemantauan Transaksi</span>
                  </li>
                  <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                    <span className="text-blue-400">5.</span>
                    <span>Laporan Aktivitas Mencurigakan</span>
                  </li>
                  <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                    <span className="text-blue-400">6.</span>
                    <span>Pelatihan & Kompetensi</span>
                  </li>
                  <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                    <span className="text-blue-400">7.</span>
                    <span>Tinjauan & Pembaruan</span>
                  </li>
                  <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                    <span className="text-blue-400">8.</span>
                    <span>Kontak AML</span>
                  </li>
                </ul>
              </div>
            </PremiumCard>
          </section>

          {/* Policy Content */}
          <section className="space-y-16 md:space-y-20">
            {/* Section 1 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-blue-400 mb-6">1. Pernyataan Kebijakan</h2>
              <div className="bg-[#1a1a24] rounded-xl p-4 md:p-6 border border-[#2a2a3a]">
                <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed">
                  TPC Global berkomitmen untuk mencegah pencucian uang, pendanaan terorisime, dan aktivitas ilegal lainnya. 
                  Kebijakan ini menguraikan prosedur kami untuk mendeteksi, mencegah, dan melaporkan aktivitas mencurigakan.
                </p>
                <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed mt-3 md:mt-4">
                  Kami mematuhi semua hukum dan regulasi yang berlaku di yurisdiksi operasi kami, termasuk FATF Recommendations dan standar internasional lainnya.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-blue-400 mb-6">2. Ruang Lingkup</h2>
              <div className="bg-[#1a1a24] rounded-xl p-4 md:p-6 border border-[#2a2a3a]">
                <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed">
                  Kebijakan ini berlaku untuk:
                </p>
                <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-[#a0a0a0] mt-3 md:mt-4">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Semua transaksi token TPC</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Pendaftaran dan verifikasi pengguna</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Transfer dana antar pengguna</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Integrasi dengan layanan pihak ketiga</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-blue-400 mb-6">3. Identifikasi Pelanggan (KYC)</h2>
              <div className="bg-[#1a1a24] rounded-xl p-4 md:p-6 border border-[#2a2a3a]">
                <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed">
                  Kami menerapkan prosedur Know Your Customer (KYC) yang ketat:
                </p>
                <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-3 md:mt-4">
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <div>
                        <h4 className="text-xs md:text-sm font-bold text-white mb-1">Verifikasi Identitas</h4>
                        <p className="text-xs md:text-sm text-[#a0a0a0]">KTP, paspor, atau dokumen identitas resmi lainnya</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <div>
                        <h4 className="text-xs md:text-sm font-bold text-white mb-1">Verifikasi Alamat</h4>
                        <p className="text-xs md:text-sm text-[#a0a0a0]">Bukti tempat tinggal yang valid</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <div>
                        <h4 className="text-xs md:text-sm font-bold text-white mb-1">Screening Sanksi</h4>
                        <p className="text-xs md:text-sm text-[#a0a0a0]">Pemeriksaan terhadap daftar sanksi internasional</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <div>
                        <h4 className="text-xs md:text-sm font-bold text-white mb-1">Source of Funds</h4>
                        <p className="text-xs md:text-sm text-[#a0a0a0]">Dokumentasi sumber dana untuk transaksi besar</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-blue-400 mb-6">4. Pemantauan Transaksi</h2>
              <div className="bg-[#1a1a24] rounded-xl p-4 md:p-6 border border-[#2a2a3a]">
                <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed">
                  Sistem kami memantau transaksi untuk pola mencurigakan:
                </p>
                <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-[#a0a0a0] mt-3 md:mt-4">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Transaksi di atas threshold tertentu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Frekuensi transaksi yang tidak wajar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Transaksi dengan high-risk jurisdictions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Pola transaksi mencurigakan lainnya</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-blue-400 mb-6">5. Laporan Aktivitas Mencurigakan</h2>
              <div className="bg-[#1a1a24] rounded-xl p-4 md:p-6 border border-[#2a2a3a]">
                <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed">
                  Kami melaporkan aktivitas mencurigakan kepada:
                </p>
                <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-[#a0a0a0] mt-3 md:mt-4">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Otoritas berwenang di yurisdiksi kami</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Unit intelijen keuangan (FIU)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Regulator cryptocurrency dan blockchain</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Badan penegak hukum sesuai kebutuhan</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-blue-400 mb-6">6. Pelatihan & Kompetensi</h2>
              <div className="bg-[#1a1a24] rounded-xl p-4 md:p-6 border border-[#2a2a3a]">
                <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed">
                  Tim kami menerima pelatihan reguler mengenai:
                </p>
                <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-3 md:mt-4">
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span>Tanda-tanda pencucian uang</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span>Prosedur pelaporan</span>
                    </div>
                  </div>
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span>Update regulasi terbaru</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span>Best practices AML</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-blue-400 mb-6">7. Tinjauan & Pembaruan</h2>
              <div className="bg-[#1a1a24] rounded-xl p-4 md:p-6 border border-[#2a2a3a]">
                <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed">
                  Kebijakan ini ditinjau dan diperbarui secara berkala untuk:
                </p>
                <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-[#a0a0a0] mt-3 md:mt-4">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Memastikan kepatuhan dengan regulasi terbaru</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Mengadaptasi perubahan landscape cryptocurrency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Meningkatkan efektivitas prosedur AML</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-blue-400 mb-6">8. Kontak AML</h2>
              <div className="bg-[#1a1a24] rounded-xl p-4 md:p-6 border border-[#2a2a3a]">
                <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed">
                  Untuk pertanyaan atau laporan terkait AML, hubungi:
                </p>
                <div className="space-y-3 md:space-y-4 text-sm md:text-base text-white mt-3 md:mt-4">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">📧</span>
                    <span>aml@tpcglobal.io</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">📱</span>
                    <span>Telegram: @tpc_global_aml</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">🌐</span>
                    <span>tpcglobal.io/aml-policy</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Compliance Statement */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-blue-500/20 to-transparent rounded-xl p-6 md:p-12 border border-blue-500/30">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                Pernyataan Kepatuhan
              </h2>
              <p className="text-base md:text-lg text-[#a0a0a0] leading-relaxed mb-6 md:mb-8 max-w-2xl mx-auto">
                TPC Global berkomitmen untuk mempertahankan standar kepatuhan AML tertinggi dan berkolaborasi dengan regulator global untuk menciptakan ekosistem cryptocurrency yang aman dan terpercaya.
              </p>
              <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center">
                <Link href="/risk-disclosure">
                  <PremiumButton size="lg" className="px-6 md:px-8 py-3 md:py-4">
                    📖 Baca Risk Disclosure
                  </PremiumButton>
                </Link>
                <Link href="/terms" className="inline-flex items-center px-4 md:px-8 py-2 md:py-4 border border-blue-500/50 rounded-lg text-blue-400 hover:bg-blue-500/10 transition text-sm md:text-base">
                  📜 Syarat & Ketentuan
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
                Kebijakan AML ini merupakan bagian integral dari komitmen TPC Global terhadap kepatuhan regulasi dan praktik bisnis yang etis.
              </p>
              <div className="flex flex-col md:flex-row gap-3 justify-center mt-6">
                <Link href="/terms" className="text-[#d4af37] hover:underline text-xs md:text-sm">
                  Syarat & Ketentuan
                </Link>
                <Link href="/privacy" className="text-[#d4af37] hover:underline text-xs md:text-sm">
                  Kebijakan Privasi
                </Link>
                <Link href="/risk-disclosure" className="text-[#d4af37] hover:underline text-xs md:text-sm">
                  Pengungkapan Risiko
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </PremiumShell>
  );
}

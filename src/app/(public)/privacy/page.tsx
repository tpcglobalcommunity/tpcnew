import { Metadata } from "next";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kebijakan Privasi | TPC Global - Privacy Policy",
  description: "Kebijakan Privasi resmi TPC Global. Perlindungan data pribadi dan informasi pengguna sesuai standar internasional.",
};

export default function PrivacyPage() {
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
              <div className="inline-flex items-center gap-2 md:gap-3 bg-green-500/10 border border-green-500/30 rounded-full px-4 md:px-6 py-2 md:py-3 mb-4 md:mb-6">
                <span className="text-xl md:text-2xl">🔒</span>
                <span className="text-xs md:text-sm text-green-400 font-medium">Kebijakan Privasi</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-8 leading-tight">
              Kebijakan <span className="text-green-400">Privasi</span>
            </h1>
            <p className="text-lg md:text-2xl text-[#a0a0a0] mb-4 md:mb-8 max-w-2xl md:max-w-3xl mx-auto">
              Perlindungan Data Pribadi Pengguna
            </p>
            <div className="bg-gradient-to-r from-green-500/20 to-transparent rounded-xl p-4 md:p-8 max-w-4xl mx-auto border border-green-500/30">
              <p className="text-base md:text-xl text-[#a0a0a0] leading-relaxed mb-3 md:mb-4">
                TPC Global berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda sesuai dengan standar internasional dan regulasi yang berlaku.
              </p>
              <p className="text-base md:text-xl text-white font-bold leading-relaxed">
                Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda.
              </p>
            </div>
          </div>

          {/* Table of Contents */}
          <section className="mb-12 md:mb-20">
            <PremiumCard>
              <h2 className="text-xl md:text-2xl font-bold text-green-400 mb-4 flex items-center justify-center gap-2 text-base md:text-lg">
                <span className="text-2xl md:text-3xl">📋</span>
                Daftar Isi
              </h2>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <ul className="space-y-3 md:space-y-4 text-xs md:text-sm text-[#a0a0a0]">
                  <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                    <span className="text-green-400">1.</span>
                    <span>Informasi yang Kami Kumpulkan</span>
                  </li>
                  <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                    <span className="text-green-400">2.</span>
                    <span>Penggunaan Informasi</span>
                  </li>
                  <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                    <span className="text-green-400">3.</span>
                    <span>Cookie dan Teknologi Pelacakan</span>
                  </li>
                  <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                    <span className="text-green-400">4.</span>
                    <span>Keamanan Data</span>
                  </li>
                  <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                    <span className="text-green-400">5.</span>
                    <span>Hak Pengguna</span>
                  </li>
                  <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                    <span className="text-green-400">6.</span>
                    <span>Bagikan Informasi</span>
                  </li>
                  <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                    <span className="text-green-400">7.</span>
                    <span>Anak di Bawah Umur</span>
                  </li>
                  <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                    <span className="text-green-400">8.</span>
                    <span>Perubahan Kebijakan</span>
                  </li>
                  <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                    <span className="text-green-400">9.</span>
                    <span>Kontak Privasi</span>
                  </li>
                </ul>
              </div>
            </PremiumCard>
          </section>

          {/* Privacy Content */}
          <section className="space-y-16 md:space-y-20">
            {/* Section 1 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-green-400 mb-6">1. Informasi yang Kami Kumpulkan</h2>
              <div className="bg-[#1a1a24] rounded-xl p-4 md:p-6 border border-[#2a2a3a]">
                <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed">
                  Kami mengumpulkan informasi yang Anda berikan langsung kepada kami, termasuk:
                </p>
                <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-[#a0a0a0] mt-3 md:mt-4">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span>Alamat email dan kredensial akun</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span>Informasi identifikasi (KYC) untuk verifikasi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span>Alamat domisili dan informasi kontak</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span>Informasi transaksi dan aktivitas platform</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span>Data demografis yang Anda berikan secara sukarela</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-green-400 mb-6">2. Penggunaan Informasi</h2>
              <div className="bg-[#1a1a24] rounded-xl p-4 md:p-6 border border-[#2a2a3a]">
                <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed">
                  Kami menggunakan informasi yang dikumpulkan untuk:
                </p>
                <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-3 md:mt-4">
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      <div>
                        <h4 className="text-xs md:text-sm font-bold text-white mb-1">Layanan Platform</h4>
                        <p className="text-xs md:text-sm text-[#a0a0a0]">Menyediakan dan mengelola akun Anda</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      <div>
                        <h4 className="text-xs md:text-sm font-bold text-white mb-1">Verifikasi Identitas</h4>
                        <p className="text-xs md:text-sm text-[#a0a0a0]">Memenuhi persyaratan AML dan KYC</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      <div>
                        <h4 className="text-xs md:text-sm font-bold text-white mb-1">Keamanan</h4>
                        <p className="text-xs md:text-sm text-[#a0a0a0]">Melindungi dari aktivitas mencurigakan</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      <div>
                        <h4 className="text-xs md:text-sm font-bold text-white mb-1">Komunikasi</h4>
                        <p className="text-xs md:text-sm text-[#a0a0a0]">Mengirim update dan informasi penting</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-green-400 mb-6">3. Cookie dan Teknologi Pelacakan</h2>
              <div className="bg-[#1a1a24] rounded-xl p-4 md:p-6 border border-[#2a2a3a]">
                <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed">
                  Platform kami menggunakan cookie dan teknologi pelacakan untuk:
                </p>
                <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-[#a0a0a0] mt-3 md:mt-4">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span>Mengingat pengalaman pengguna yang lebih baik</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span>Menganalisis penggunaan dan performa platform</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span>Menyediakan iklan yang relevan (jika ada)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span>Keamanan dan deteksi fraud</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-green-400 mb-6">4. Keamanan Data</h2>
              <div className="bg-[#1a1a24] rounded-xl p-4 md:p-6 border border-[#2a2a3a]">
                <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed">
                  Kami menerapkan langkah-langkah keamanan untuk melindungi data Anda:
                </p>
                <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-3 md:mt-4">
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-start gap-2">
                      <span className="text-green-400">🔐</span>
                      <div>
                        <h4 className="text-xs md:text-sm font-bold text-white mb-1">Enkripsi</h4>
                        <p className="text-xs md:text-sm text-[#a0a0a0]">Data dienkripsi saat transmisi dan penyimpanan</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-400">🛡️</span>
                      <div>
                        <h4 className="text-xs md:text-sm font-bold text-white mb-1">Access Control</h4>
                        <p className="text-xs md:text-sm text-[#a0a0a0]">Akses terbatas untuk authorized personnel</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-start gap-2">
                      <span className="text-green-400">🔍</span>
                      <div>
                        <h4 className="text-xs md:text-sm font-bold text-white mb-1">Monitoring</h4>
                        <p className="text-xs md:text-sm text-[#a0a0a0]">Pemantauan keamanan 24/7</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-400">📊</span>
                      <div>
                        <h4 className="text-xs md:text-sm font-bold text-white mb-1">Backup</h4>
                        <p className="text-xs md:text-sm text-[#a0a0a0]">Backup data reguler untuk pemulihan</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-green-400 mb-6">5. Hak Pengguna</h2>
              <div className="bg-[#1a1a24] rounded-xl p-4 md:p-6 border border-[#2a2a3a]">
                <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed">
                  Sebagai pengguna, Anda memiliki hak untuk:
                </p>
                <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-[#a0a0a0] mt-3 md:mt-4">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span>Mengakses dan memperbarui informasi pribadi Anda</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span>Meminta salinan data pribadi Anda</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span>Menghapus akun dan data terkait</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span>Menolak penggunaan data untuk tujuan tertentu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span>Menarik diri dari komunikasi pemasaran</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-green-400 mb-6">6. Bagikan Informasi</h2>
              <div className="bg-[#1a1a24] rounded-xl p-4 md:p-6 border border-[#2a2a3a]">
                <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed">
                  Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, kecuali:
                </p>
                <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-[#a0a0a0] mt-3 md:mt-4">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span>Diperlukan untuk menyediakan layanan kepada Anda</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span>Diperlukan untuk kepatuhan hukum dan regulasi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span>Dengan persetujuan eksplisit dari Anda</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-green-400 mb-6">7. Anak di Bawah Umur</h2>
              <div className="bg-[#1a1a24] rounded-xl p-4 md:p-6 border border-[#2a2a3a]">
                <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed">
                  Platform kami tidak ditujukan untuk anak-anak di bawah 18 tahun. Kami tidak sengaja mengumpulkan informasi pribadi dari anak-anak.
                </p>
                <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed mt-3 md:mt-4">
                  Jika kami mengetahui telah mengumpulkan informasi dari anak-anak, kami akan mengambil langkah untuk menghapusnya segera.
                </p>
              </div>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-green-400 mb-6">8. Perubahan Kebijakan</h2>
              <div className="bg-[#1a1a24] rounded-xl p-4 md:p-6 border border-[#2a2a3a]">
                <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed">
                  Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu untuk mencerminkan:
                </p>
                <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-[#a0a0a0] mt-3 md:mt-4">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span>Perubahan dalam praktik bisnis kami</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span>Pembaruan regulasi atau hukum yang berlaku</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span>Perbaikan dalam teknologi keamanan</span>
                  </li>
                </ul>
                <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed mt-3 md:mt-4">
                  Perubahan signifikan akan diberitahukan melalui email atau notifikasi di platform.
                </p>
              </div>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-green-400 mb-6">9. Kontak Privasi</h2>
              <div className="bg-[#1a1a24] rounded-xl p-4 md:p-6 border border-[#2a2a3a]">
                <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed">
                  Untuk pertanyaan atau kekhawatiran mengenai kebijakan privasi kami, hubungi:
                </p>
                <div className="space-y-3 md:space-y-4 text-sm md:text-base text-white mt-3 md:mt-4">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">📧</span>
                    <span>privacy@tpcglobal.io</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">📱</span>
                    <span>Telegram: @tpc_global_privacy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">🌐</span>
                    <span>tpcglobal.io/privacy</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Privacy Commitment */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-green-500/20 to-transparent rounded-xl p-6 md:p-12 border border-green-500/30">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                Komitmen Privasi Kami
              </h2>
              <p className="text-base md:text-lg text-[#a0a0a0] leading-relaxed mb-6 md:mb-8 max-w-2xl mx-auto">
                TPC Global berkomitmen untuk melindungi privasi Anda dengan standar tertinggi dan transparansi penuh dalam setiap aspek pengelolaan data.
              </p>
              <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center">
                <Link href="/terms">
                  <PremiumButton size="lg" className="px-6 md:px-8 py-3 md:py-4">
                    📜 Baca Syarat & Ketentuan
                  </PremiumButton>
                </Link>
                <Link href="/aml-policy" className="inline-flex items-center px-4 md:px-8 py-2 md:py-4 border border-green-500/50 rounded-lg text-green-400 hover:bg-green-500/10 transition text-sm md:text-base">
                  🛡️ Kebijakan AML
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
                Kebijakan privasi ini terakhir diperbarui pada 8 Februari 2026 dan berlaku efektif sejak tanggal tersebut.
              </p>
              <div className="flex flex-col md:flex-row gap-3 justify-center mt-6">
                <Link href="/terms" className="text-[#d4af37] hover:underline text-xs md:text-sm">
                  Syarat & Ketentuan
                </Link>
                <Link href="/risk-disclosure" className="text-[#d4af37] hover:underline text-xs md:text-sm">
                  Pengungkapan Risiko
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

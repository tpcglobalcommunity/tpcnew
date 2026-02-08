import { Metadata } from "next";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan | TPC Global - Ketentuan Penggunaan Resmi",
  description: "Syarat dan ketentuan resmi penggunaan platform TPC Global. Baca dengan teliti sebelum menggunakan layanan kami.",
};

export default function TermsPage() {
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
              <div className="inline-flex items-center gap-2 md:gap-3 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full px-4 md:px-6 py-2 md:py-3 mb-4 md:mb-6">
                <span className="text-xl md:text-2xl">📜</span>
                <span className="text-xs md:text-sm text-[#d4af37] font-medium">Dokumen Legal</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-8 leading-tight">
              Syarat & <span className="text-[#d4af37]">Ketentuan</span>
            </h1>
            <p className="text-lg md:text-2xl text-[#a0a0a0] mb-4 md:mb-8 max-w-2xl md:max-w-3xl mx-auto">
              Ketentuan Penggunaan Platform TPC Global
            </p>
            <div className="bg-gradient-to-r from-[#d4af37]/20 to-transparent rounded-xl p-4 md:p-8 max-w-4xl mx-auto border border-[#d4af37]/30">
              <p className="text-base md:text-xl text-[#a0a0a0] leading-relaxed mb-3 md:mb-4">
                Dengan mengakses, mendaftar, atau menggunakan platform TPC Global ("Platform"), Anda ("Pengguna") 
                menyatakan bahwa Anda telah membaca, memahami, dan menyetujui untuk terikat oleh syarat dan ketentuan ini 
                ("Syarat & Ketentuan"), serta kebijakan privasi dan kebijakan AML kami.
              </p>
              <p className="text-base md:text-xl text-white font-bold leading-relaxed">
                Jika Anda tidak menyetujui Syarat & Ketentuan ini, Anda tidak diperbolehkan menggunakan Platform.
              </p>
            </div>
          </div>

          {/* Table of Contents */}
          <section className="mb-12 md:mb-20">
            <PremiumCard>
              <h2 className="text-xl md:text-2xl font-bold text-[#d4af37] mb-4 flex items-center justify-center gap-2 text-base md:text-lg">
                <span className="text-2xl md:text-3xl">📋</span>
                Daftar Isi
              </h2>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <ul className="space-y-3 md:space-y-4 text-xs md:text-sm text-[#a0a0a0]">
                  <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                    <span className="text-[#d4af37]">1.</span>
                    <span>Penerimaan Syarat & Ketentuan</span>
                  </li>
                  <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                    <span className="text-[#d4af37]">2.</span>
                    <span>Definisi</span>
                  </li>
                  <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                    <span className="text-[#d4af37]">3.</span>
                    <span>Kelayakan Pengguna</span>
                  </li>
                  <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                    <span className="text-[#d4af37]">4.</span>
                    <span>Penggunaan Platform</span>
                  </li>
                  <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                    <span className="text-[#d4af37]">5.</span>
                    <span>Token TPC</span>
                  </li>
                  <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                    <span className="text-[#d4af37]">6.</span>
                    <span>Tanggung Jawab Pengguna</span>
                  </li>
                  <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                    <span className="text-[#d4af37]">7.</span>
                    <span>Kepemilikan Intelektual</span>
                  </li>
                  <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                    <span className="text-[#d4af37]">8.</span>
                    <span>Privasi & Data</span>
                  </li>
                  <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                    <span className="text-[#d4af37]">9.</span>
                    <span>Anti-Money Laundering (AML)</span>
                  </li>
                  <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                    <span className="text-[#d4af37]">10.</span>
                    <span>Pembatasan Tanggung Jawab</span>
                  </li>
                  <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                    <span className="text-[#d4af37]">11.</span>
                    <span>Kontak & Penyelesaian Sengketa</span>
                  </li>
                  <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                    <span className="text-[#d4af37]">12.</span>
                    <span>Perubahan Ketentuan</span>
                  </li>
                </ul>
              </div>
            </PremiumCard>
          </section>

          {/* Terms Content */}
          <section className="space-y-16 md:space-y-20">
            {/* Section 1 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#d4af37] mb-6">1. Penerimaan Syarat & Ketentuan</h2>
              <div className="bg-[#1a1a24] rounded-xl p-4 md:p-6 border border-[#2a2a3a]">
                <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed">
                  Dengan mengakses, mendaftar, atau menggunakan platform TPC Global ("Platform"), Anda ("Pengguna") 
                  menyatakan bahwa Anda telah membaca, memahami, dan menyetujui untuk terikat oleh syarat dan ketentuan ini 
                  ("Syarat & Ketentuan"), serta kebijakan privasi dan kebijakan AML kami.
                </p>
                <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed mt-3 md:mt-4">
                  Jika Anda tidak menyetujui Syarat & Ketentuan ini, Anda tidak diperbolehkan menggunakan Platform.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#d4af37] mb-6">2. Definisi</h2>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-[#1a1a24] rounded-xl p-4 md:p-6 border border-[#2a2a3a]">
                  <h3 className="text-base md:text-lg font-bold text-white mb-3">Platform</h3>
                  <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed">
                    Situs web, aplikasi mobile, dan layanan terkait yang disediakan oleh TPC Global.
                  </p>
                </div>
                <div className="bg-[#1a1a24] rounded-xl p-4 md:p-6 border border-[#2a2a3a]">
                  <h3 className="text-base md:text-lg font-bold text-white mb-3">Pengguna</h3>
                  <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed">
                    Individu atau entitas yang mengakses dan menggunakan Platform.
                  </p>
                </div>
                <div className="bg-[#1a1a24] rounded-xl p-4 md:p-6 border border-[#2a2a3a]">
                  <h3 className="text-base md:text-lg font-bold text-white mb-3">Token TPC</h3>
                  <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed">
                    Token utilitas yang dibangun di blockchain Solana dengan tujuan akses dan partisipasi dalam ekosistem TPC.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#d4af37] mb-6">3. Kelayakan Pengguna</h2>
              <div className="bg-[#1a1a24] rounded-xl p-4 md:p-6 border border-[#2a2a3a]">
                <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed">
                  Untuk menggunakan Platform, Pengguna harus:
                </p>
                <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-[#a0a0a0] mt-3 md:mt-4">
                  <li className="flex items-start gap-2">
                    <span className="text-[#d4af37]">•</span>
                    <span>Berusia minimal 18 tahun atau usia legal minimum di yurisdiksi Anda</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#d4af37]">•</span>
                    <span>Memiliki kapasitas hukum untuk membuat kontrak yang mengikat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#d4af37]">•</span>
                    <span>Tidak berada dalam daftar sanksi atau watchlist internasional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#d4af37]">•</span>
                    <span>Mematuhi semua hukum dan regulasi yang berlaku di yurisdiksi Anda</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#d4af37]">•</span>
                    <span>Memberikan informasi pribadi yang akurat dan lengkap</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#d4af37] mb-6">4. Penggunaan Platform</h2>
              <div className="bg-[#1a1a24] rounded-xl p-4 md:p-6 border border-[#2a2a3a]">
                <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed">
                  Kami memberikan izin terbatas, tidak dapat dialihkan, dan tidak ada jaminan untuk menggunakan Platform.
                </p>
                <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed mt-3 md:mt-4">
                  Pengguna setuju untuk tidak menggunakan Platform untuk tujuan yang melanggar hukum atau melanggar Syarat & Ketentuan ini.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#d4af37] mb-6">5. Token TPC</h2>
              <div className="bg-[#1a1a24] rounded-xl p-4 md:p-6 border border-[#2a2a3a]">
                <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed">
                  TPC adalah token utilitas, bukan sekuritas, mata uang, atau instrumen investasi.
                </p>
                <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed mt-3 md:mt-4">
                  Tidak ada jaminan keuntungan, return, atau likuiditas. Nilai token dapat turun menjadi nol.
                </p>
                <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed mt-3 md:mt-4">
                  Token TPC hanya dapat digunakan untuk tujuan yang ditentukan dalam ekosistem TPC.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#d4af37] mb-6">6. Kepemilikan Intelektual</h2>
              <div className="bg-[#1a1a24] rounded-xl p-4 md:p-6 border border-[#2a2a3a]">
                <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed">
                  Semua konten, desain, logo, dan materi lainnya di Platform dilindungi oleh hak kekayaan intelektual kami.
                </p>
                <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed mt-3 md:mt-4">
                  Pengguna tidak diperbolehkan menggunakan, menyalin, atau memodifikasi materi yang dilindungi tanpa izin tertulis dari kami.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#d4af37] mb-6">7. Privasi & Data</h2>
              <div className="bg-[#1a1a24] rounded-xl p-4 md:p-6 border border-[#2a2a3a]">
                <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed">
                  Pengumpulan dan penggunaan data pribadi Anda diatur oleh Kebijakan Privasi kami.
                </p>
                <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed mt-3 md:mt-4">
                  Dengan menggunakan Platform, Anda setuju dengan pengumpulan dan penggunaan data sesuai Kebijakan Privasi.
                </p>
              </div>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#d4af37] mb-6">8. Anti-Money Laundering (AML)</h2>
              <div className="bg-[#1a1a24] rounded-xl p-4 md:p-6 border border-[#2a2a3a]">
                <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed">
                  Kami berkomitmen untuk mencegah pencucian uang dan pendanaan terorisime sesuai dengan kebijakan AML kami.
                </p>
                <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed mt-3 md:mt-4">
                  Kami berhak untuk meminta informasi dan dokumen yang diperlukan untuk verifikasi identitas dan kepatuhan AML.
                </p>
                <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed mt-3 md:mt-4">
                  Pengguna setuju untuk bekerja sama dalam proses verifikasi AML.
                </p>
              </div>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#d4af37] mb-6">9. Pembatasan Tanggung Jawab</h2>
              <div className="bg-[#1a1a24] rounded-xl p-4 md:p-6 border border-[#2a2a3a]">
                <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed">
                  Sejauh diizinkan oleh hukum yang berlaku, tanggung jawab kami terbatas pada kerugian langsung yang dapat diantisipasi.
                </p>
                <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed mt-3 md:mt-4">
                  Dalam hal apapun pun, kami tidak bertanggung jawab atas kerugian tidak langsung, termasuk kehilangan kesempatan, atau kerugian konsekuensial.
                </p>
                <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed mt-3 md:mt-4">
                  Pengguna setuju untuk melepaskan kami dari semua klaim yang timbul dari hal ini.
                </p>
              </div>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#d4af37] mb-6">10. Perubahan Ketentuan</h2>
              <div className="bg-[#1a1a24] rounded-xl p-4 md:p-6 border border-[#2a2a3a]">
                <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed">
                  Kami berhak mengubah Syarat & Ketentuan ini kapan saja.
                </p>
                <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed mt-3 md:mt-4">
                  Perubahan akan berlaku efektif setelah diposting di Platform dan akan berlaku untuk semua Pengguna.
                </p>
                <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed mt-3 md:mt-4">
                  Penggunaan Platform yang berkelanjutan setelah perubahan dianggap sebagai penerimaan terhadap Syarat & Ketentuan yang diubah.
                </p>
              </div>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#d4af37] mb-6">11. Kontak & Penyelesaian Sengketa</h2>
              <div className="bg-[#1a1a24] rounded-xl p-4 md:p-6 border border-[#2a2a3a]">
                <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed">
                  Untuk pertanyaan atau sengketa terkait Syarat & Ketentuan, silakan hubungi kami melalui:
                </p>
                <ul className="space-y-2 md:space-y-4 text-sm md:text-base text-white mt-3 md:mt-4">
                  <li className="flex items-center gap-2">
                    <span className="text-[#d4af37]">📧</span>
                    <span>Email: legal@tpcglobal.io</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#d4af37]">📱</span>
                    <span>Telegram: @tpc_global_support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#d4af37]">🌐</span>
                    <span>Website: tpcglobal.io</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-[#2a2a3a]/50 mt-20">
          <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
            <div className="text-center">
              <p className="text-sm md:text-base text-[#6b7280] leading-relaxed max-w-3xl mx-auto">
                Platform ini disediakan oleh TPC Global ("Kami", "TPC") untuk penggunaan oleh Pengguna yang memenuhi syarat kelayakan yang ditentukan dalam Syarat & Ketentuan ini.
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

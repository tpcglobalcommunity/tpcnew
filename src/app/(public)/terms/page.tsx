import { Metadata } from "next";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan | TPC Global - Ketentuan Penggunaan Resmi",
  description: "Syarat dan ketentuan resmi penggunaan platform TPC Global. Baca ketentuan layanan, penggunaan token, dan kebijakan platform sebelum berpartisipasi.",
};

export default function TermsPage() {
  return (
    <PremiumShell>
      <div className="min-h-screen">
        {/* Header */}
        <header className="border-b border-[#2a2a3a]/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-[#d4af37] flex items-center gap-2">
              <span className="text-3xl">📜</span>
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
              <div className="inline-flex items-center gap-3 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full px-6 py-3 mb-6">
                <span className="text-2xl">📜</span>
                <span className="text-[#d4af37] font-medium">Dokumen Legal</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Syarat & <span className="text-[#d4af37]">Ketentuan</span>
            </h1>
            <p className="text-2xl text-[#a0a0a0] mb-8 max-w-3xl mx-auto">
              Ketentuan Penggunaan Platform TPC Global
            </p>
            <div className="bg-gradient-to-r from-[#d4af37]/20 to-transparent rounded-2xl p-8 max-w-4xl mx-auto border border-[#d4af37]/30">
              <p className="text-lg text-[#a0a0a0] leading-relaxed">
                Terakhir diperbarui: 8 Februari 2026
              </p>
              <p className="text-white mt-4 leading-relaxed">
                Dengan menggunakan platform TPC Global, Anda setuju untuk mematuhi syarat dan ketentuan yang tercantum di bawah ini.
              </p>
            </div>
          </div>

          {/* Table of Contents */}
          <section className="mb-20">
            <PremiumCard>
              <h2 className="text-2xl font-bold text-[#d4af37] mb-6 flex items-center gap-2">
                <span className="text-3xl">📋</span>
                Daftar Isi
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-[#a0a0a0]">
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
                    <span>Risiko & Tanggung Jawab</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-[#a0a0a0]">
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
                    <span>Anti-Money Laundering</span>
                  </li>
                  <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                    <span className="text-[#d4af37]">10.</span>
                    <span>Pembatasan Tanggung Jawab</span>
                  </li>
                  <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                    <span className="text-[#d4af37]">11.</span>
                    <span>Perubahan Ketentuan</span>
                  </li>
                  <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                    <span className="text-[#d4af37]">12.</span>
                    <span>Kontak & Dispute</span>
                  </li>
                </ul>
              </div>
            </PremiumCard>
          </section>

          {/* Terms Content */}
          <section className="space-y-20">
            {/* Section 1 */}
            <div>
              <h2 className="text-3xl font-bold text-[#d4af37] mb-6 flex items-center gap-3">
                <span className="text-4xl">1.</span>
                Penerimaan Syarat & Ketentuan
              </h2>
              <PremiumCard>
                <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                  <p>
                    Dengan mengakses, mendaftar, atau menggunakan platform TPC Global ("Platform"), Anda ("Pengguna") 
                    menyatakan bahwa Anda telah membaca, memahami, dan menyetujui untuk terikat oleh syarat dan ketentuan ini 
                    ("Syarat & Ketentuan"), serta kebijakan privasi dan kebijakan AML kami.
                  </p>
                  <p>
                    Jika Anda tidak menyetujui Syarat & Ketentuan ini, Anda tidak diperbolehkan menggunakan Platform atau 
                    berpartisipasi dalam presale TPC.
                  </p>
                  <p>
                    Platform ini disediakan oleh TPC Global ("Kami", "Kami", "TPC") untuk penggunaan oleh Pengguna yang 
                    memenuhi syarat kelayakan yang ditentukan dalam Syarat & Ketentuan ini.
                  </p>
                </div>
              </PremiumCard>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-3xl font-bold text-[#d4af37] mb-6 flex items-center gap-3">
                <span className="text-4xl">2.</span>
                Definisi
              </h2>
              <PremiumCard>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-3">Platform</h3>
                      <p className="text-[#a0a0a0] leading-relaxed">
                        Situs web, aplikasi mobile, dan layanan terkait yang disediakan oleh TPC Global untuk presale 
                        token TPC dan layanan terkait.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-3">Token TPC</h3>
                      <p className="text-[#a0a0a0] leading-relaxed">
                        Token utilitas yang dibangun di blockchain Solana dengan tujuan akses dan partisipasi dalam 
                        ekosistem TPC.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-3">Presale</h3>
                      <p className="text-[#a0a0a0] leading-relaxed">
                        Periode penjualan token TPC sebelum peluncuran resmi dengan harga dan ketentuan khusus.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-3">Pengguna</h3>
                      <p className="text-[#a0a0a0] leading-relaxed">
                        Individu atau entitas yang mendaftar dan menggunakan Platform sesuai Syarat & Ketentuan.
                      </p>
                    </div>
                  </div>
                </div>
              </PremiumCard>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-3xl font-bold text-[#d4af37] mb-6 flex items-center gap-3">
                <span className="text-4xl">3.</span>
                Kelayakan Pengguna
              </h2>
              <PremiumCard>
                <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                  <p className="text-white font-bold">Untuk menggunakan Platform, Anda harus:</p>
                  <ul className="space-y-3 ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-[#d4af37] mt-1">•</span>
                      <span>Berusia minimal 18 tahun atau usia legal minimum di yurisdiksi Anda</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d4af37] mt-1">•</span>
                      <span>Memiliki kapasitas hukum untuk membuat kontrak yang mengikat</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d4af37] mt-1">•</span>
                      <span>Tidak berada dalam daftar sanksi atau watchlist internasional</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d4af37] mt-1">•</span>
                      <span>Mematuhi semua hukum dan regulasi yang berlaku di yurisdiksi Anda</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d4af37] mt-1">•</span>
                      <span>Memberikan informasi pribadi yang akurat dan lengkap</span>
                    </li>
                  </ul>
                  <p className="text-red-400 font-bold mt-4">
                    KAMI TIDAK MELAYANI PENGGUNA DARI NEGARA YANG DIKENAIKAN SANCTION ATAU YURISDIKSI 
                    DI MANAKAN AKTIVITAS KRIPTO DILARANG.
                  </p>
                </div>
              </PremiumCard>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-3xl font-bold text-[#d4af37] mb-6 flex items-center gap-3">
                <span className="text-4xl">4.</span>
                Penggunaan Platform
              </h2>
              <PremiumCard>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Perbolehan</h3>
                    <p className="text-[#a0a0a0] leading-relaxed">
                      Kami memberikan Anda izin terbatas, non-eksklusif, tidak dapat dialihkan, dan non-sublicensable 
                      untuk menggunakan Platform sesuai Syarat & Ketentuan ini.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Pelanggaran</h3>
                    <p className="text-[#a0a0a0] leading-relaxed mb-4">Anda setuju untuk tidak:</p>
                    <ul className="space-y-2 ml-6 text-[#a0a0a0]">
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Menggunakan Platform untuk aktivitas ilegal atau tidak sah</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Mencoba meretas, mengganggu, atau merusak sistem</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Membuat akun palsu atau menggunakan identitas orang lain</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Menyebarluaskan informasi palsu atau menyesatkan</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Melanggar hak kekayaan intelektual kami</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </PremiumCard>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-3xl font-bold text-[#d4af37] mb-6 flex items-center gap-3">
                <span className="text-4xl">5.</span>
                Token TPC
              </h2>
              <PremiumCard>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Sifat Token</h3>
                    <p className="text-[#a0a0a0] leading-relaxed">
                      TPC adalah token utilitas, bukan sekuritas, mata uang, atau instrumen investasi. Token tidak memberikan 
                      hak kepemilikan, voting, atau dividen dalam entitas apa pun.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Tidak Ada Jaminan</h3>
                    <p className="text-[#a0a0a0] leading-relaxed">
                      Kami tidak menjamin nilai, likuiditas, atau kinerja token TPC. Harga dapat sangat volatile dan 
                      mungkin turun menjadi nol.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Penggunaan yang Diizinkan</h3>
                    <p className="text-[#a0a0a0] leading-relaxed">
                      Token TPC hanya dapat digunakan untuk tujuan yang ditentukan dalam ekosistem TPC dan sesuai 
                      dengan hukum yang berlaku.
                    </p>
                  </div>
                </div>
              </PremiumCard>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-3xl font-bold text-[#d4af37] mb-6 flex items-center gap-3">
                <span className="text-4xl">6.</span>
                Risiko & Tanggung Jawab
              </h2>
              <PremiumCard className="bg-red-900/10 border-red-500/30">
                <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                  <p className="text-red-400 font-bold text-lg">
                    ANDA MENGAKUI DAN MENERIMA RISIKO BERIKUT:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Kehilangan total investasi karena volatilitas pasar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Risiko teknis, keamanan, dan operasional</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Perubahan regulasi yang mempengaruhi nilai token</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Kegagalan proyek atau likuidasi</span>
                    </li>
                  </ul>
                  <p className="text-white font-bold mt-4">
                    ANDA BERTANGGUNG JAWAB PENUH ATAS KEPUTUSAN INVESTASI ANDA.
                  </p>
                </div>
              </PremiumCard>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-3xl font-bold text-[#d4af37] mb-6 flex items-center gap-3">
                <span className="text-4xl">7.</span>
                Kepemilikan Intelektual
              </h2>
              <PremiumCard>
                <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                  <p>
                    Semua konten, desain, logo, software, dan materi lainnya di Platform ("Kekayaan Intelektual") 
                    adalah milik eksklusif TPC Global atau pemberi lisensi kami.
                  </p>
                  <p>
                    Anda tidak boleh menggunakan, menyalin, memodifikasi, atau mendistribusikan Kekayaan Intelektual 
                    tanpa izin tertulis dari kami.
                  </p>
                  <p>
                    Nama "TPC", "TPC Global", logo, dan merek terkait adalah merek dagang terdaftar milik kami.
                  </p>
                </div>
              </PremiumCard>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-3xl font-bold text-[#d4af37] mb-6 flex items-center gap-3">
                <span className="text-4xl">8.</span>
                Privasi & Data
              </h2>
              <PremiumCard>
                <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                  <p>
                    Pengumpulan, penggunaan, dan perlindungan data pribadi Anda diatur oleh Kebijakan Privasi kami. 
                    Dengan menggunakan Platform, Anda setuju dengan pengumpulan dan pengolahan data sesuai kebijakan tersebut.
                  </p>
                  <p>
                    Kami berhak mengumpulkan informasi untuk tujuan operasional, keamanan, dan kepatuhan regulasi. 
                    Data Anda akan dilindungi sesuai standar industri yang berlaku.
                  </p>
                </div>
              </PremiumCard>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-3xl font-bold text-[#d4af37] mb-6 flex items-center gap-3">
                <span className="text-4xl">9.</span>
                Anti-Money Laundering (AML)
              </h2>
              <PremiumCard>
                <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                  <p>
                    Kami berkomitmen untuk mencegah pencucian uang dan pendanaan terorisisme. Sesuai dengan 
                    Kebijakan AML kami, kami berhak:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-[#d4af37] mt-1">•</span>
                      <span>Memverifikasi identitas pengguna (KYC)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d4af37] mt-1">•</span>
                      <span>Memantau transaksi yang mencurigakan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d4af37] mt-1">•</span>
                      <span>Melaporkan aktivitas yang mencurigakan ke otoritas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d4af37] mt-1">•</span>
                      <span>Membekukan akun yang melanggar kebijakan AML</span>
                    </li>
                  </ul>
                </div>
              </PremiumCard>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-3xl font-bold text-[#d4af37] mb-6 flex items-center gap-3">
                <span className="text-4xl">10.</span>
                Pembatasan Tanggung Jawab
              </h2>
              <PremiumCard className="bg-yellow-900/10 border-yellow-500/30">
                <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                  <p className="text-yellow-400 font-bold">
                    SEJAUH DIIZINKAN OLEH HUKUM YANG BERLAKU:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">•</span>
                      <span>Platform disedikan "SEBAGAIMANA ADANYA" tanpa jaminan apa pun</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">•</span>
                      <span>Kami tidak bertanggung jawab atas kerugian langsung atau tidak langsung</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">•</span>
                      <span>Tanggung jawab maksimal adalah jumlah yang Anda bayarkan kepada kami</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">•</span>
                      <span>Kami tidak bertanggung jawab atas tindakan pihak ketiga</span>
                    </li>
                  </ul>
                </div>
              </PremiumCard>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="text-3xl font-bold text-[#d4af37] mb-6 flex items-center gap-3">
                <span className="text-4xl">11.</span>
                Perubahan Ketentuan
              </h2>
              <PremiumCard>
                <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                  <p>
                    Kami berhak mengubah Syarat & Ketentuan ini kapan saja. Perubahan akan berlaku efektif 
                    setelah diposting di Platform atau diberitahukan kepada Pengguna.
                  </p>
                  <p>
                    Penggunaan Platform yang berkelanjutan setelah perubahan merupakan penerimaan terhadap 
                    Syarat & Ketentuan yang diperbarui.
                  </p>
                </div>
              </PremiumCard>
            </div>

            {/* Section 12 */}
            <div>
              <h2 className="text-3xl font-bold text-[#d4af37] mb-6 flex items-center gap-3">
                <span className="text-4xl">12.</span>
                Kontak & Penyelesaian Sengketa
              </h2>
              <PremiumCard>
                <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                  <p>
                    Untuk pertanyaan atau sengketa mengenai Syarat & Ketentuan ini, silakan hubungi kami melalui:
                  </p>
                  <div className="bg-[#1a1a24] rounded-lg p-6 border border-[#2a2a3a]">
                    <p className="text-white mb-2">Email: legal@tpcglobal.io</p>
                    <p className="text-white mb-2">Telegram: @tpc_global_support</p>
                    <p className="text-white">Website: tpcglobal.io</p>
                  </div>
                  <p>
                    Sengketa akan diselesaikan melalui negosiasi baik hati. Jika tidak tercapai kesepakatan, 
                    sengketa akan diselesaikan melalui arbitrase yang netral.
                  </p>
                </div>
              </PremiumCard>
            </div>
          </section>

          {/* Final Agreement */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-[#d4af37]/20 to-transparent rounded-2xl p-12 border border-[#d4af37]/30">
              <h2 className="text-3xl font-bold text-white mb-6">
                Konfirmasi Persetujuan
              </h2>
              <p className="text-xl text-[#a0a0a0] mb-8 max-w-2xl mx-auto leading-relaxed">
                Dengan melanjutkan penggunaan Platform, Anda mengkonfirmasi bahwa telah membaca, 
                memahami, dan menyetujui semua Syarat & Ketentuan ini.
              </p>
              <div className="flex gap-4 justify-center">
                <Link href="/presale">
                  <PremiumButton size="lg" className="px-8 py-4">
                    ✅ Saya Setuju - Lanjut ke Platform
                  </PremiumButton>
                </Link>
                <Link href="/risk-disclosure" className="inline-flex items-center px-8 py-4 border border-[#d4af37]/50 rounded-lg text-[#d4af37] hover:bg-[#d4af37]/10 transition">
                  ⚠️ Baca Pengungkapan Risiko
                </Link>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-[#2a2a3a]/50 mt-20">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="text-center">
              <p className="text-[#6b7280] leading-relaxed max-w-3xl mx-auto">
                Syarat & Ketentuan ini merupakan kontrak hukum yang mengikat antara Anda dan TPC Global. 
                Pastikan Anda membaca dan memahami sepenuhnya sebelum menggunakan Platform.
              </p>
              <div className="flex gap-6 justify-center mt-6">
                <Link href="/privacy" className="text-[#d4af37] hover:underline text-sm">
                  Kebijakan Privasi
                </Link>
                <Link href="/aml-policy" className="text-[#d4af37] hover:underline text-sm">
                  Kebijakan AML
                </Link>
                <Link href="/risk-disclosure" className="text-[#d4af37] hover:underline text-sm">
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

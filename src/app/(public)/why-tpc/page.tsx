import { Metadata } from "next";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mengapa TPC Berbeda | Tanpa Janji Keuntungan, Sistem Real",
  description: "TPC tidak menjanjikan keuntungan. Kami membangun sistem nyata dengan transparansi, keterauditan, dan pendekatan edukasi terlebih dahulu. Pelajari mengapa TPC berbeda dari proyek hype.",
};

export default function WhyTPCPage() {
  return (
    <PremiumShell>
      <div className="min-h-screen">
        {/* Header */}
        <header className="border-b border-[#2a2a3a]/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
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

        <main className="max-w-6xl mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full px-6 py-3 mb-6">
                <span className="text-2xl">💎</span>
                <span className="text-[#d4af37] font-medium">Filosofi TPC</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Mengapa TPC <span className="text-[#d4af37]">Berbeda</span>
            </h1>
            <p className="text-2xl text-[#a0a0a0] mb-8 max-w-3xl mx-auto">
              Tanpa Janji Keuntungan • Tanpa Jaminan Return • Hanya Sistem Real
            </p>
            <div className="bg-gradient-to-r from-[#d4af37]/20 to-transparent rounded-2xl p-8 max-w-4xl mx-auto border border-[#d4af37]/30">
              <p className="text-xl text-[#a0a0a0] leading-relaxed mb-4">
                Di dunia kripto dan komunitas finansial, satu narasi sering diulang: <span className="text-white font-bold">"janji kekayaan cepat"</span>.
              </p>
              <p className="text-xl text-white font-bold leading-relaxed">
                TPC memilih jalan yang berbeda.
              </p>
              <p className="text-lg text-[#6b7280] mt-4 leading-relaxed">
                Bukan karena kami tidak bisa menjanjikan keuntungan, melainkan karena janji seperti itu tidak pernah jujur.
              </p>
            </div>
          </div>

          {/* Core Philosophy */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#d4af37] mb-4 flex items-center justify-center gap-3">
                <span className="text-4xl">🎯</span>
                Filosofi Inti TPC
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <PremiumCard className="h-full text-center group hover:shadow-2xl transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-[#d4af37] to-[#f4e4c1] rounded-full flex items-center justify-center mx-auto mb-6 text-3xl shadow-lg">
                  🏗️
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#d4af37]">Sistem Real</h3>
                <p className="text-[#a0a0a0] leading-relaxed">
                  Kami membangun infrastruktur nyata, bukan sekadar proyek hype. Setiap komponen dirancang untuk kegunaan praktis dan skalabilitas jangka panjang.
                </p>
              </PremiumCard>

              <PremiumCard className="h-full text-center group hover:shadow-2xl transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-[#d4af37] to-[#f4e4c1] rounded-full flex items-center justify-center mx-auto mb-6 text-3xl shadow-lg">
                  🔍
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#d4af37]">Transparansi Total</h3>
                <p className="text-[#a0a0a0] leading-relaxed">
                  Semua proses, keputusan, dan mekanisme dapat diaudit. Tidak ada black box, tidak ada informasi tersembunyi yang relevan dengan pengguna.
                </p>
              </PremiumCard>

              <PremiumCard className="h-full text-center group hover:shadow-2xl transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-[#d4af37] to-[#f4e4c1] rounded-full flex items-center justify-center mx-auto mb-6 text-3xl shadow-lg">
                  📚
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#d4af37]">Edukasi Dulu</h3>
                <p className="text-[#a0a0a0] leading-relaxed">
                  Kami prioritaskan pemahaman user di atas marketing agresif. Pengetahuan yang tepat adalah fondasi keputusan finansial yang bijak.
                </p>
              </PremiumCard>
            </div>
          </section>

          {/* What We Don't Do */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-red-400 mb-4 flex items-center justify-center gap-3">
                <span className="text-4xl">🚫</span>
                Yang Tidak Kami Lakukan
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-900/10 border border-red-500/30 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2">
                  <span>❌</span> Janji Profit Tidak Realistis
                </h3>
                <p className="text-[#a0a0a0] leading-relaxed">
                  "Dapatkan 1000% return dalam 1 bulan!" - Kami tidak pernah menggunakan narasi seperti ini. Pasar tidak bisa diprediksi, dan janji semacam ini hanya menipu diri sendiri.
                </p>
              </div>

              <div className="bg-red-900/10 border border-red-500/30 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2">
                  <span>❌</span> Model "Pump and Dump"
                </h3>
                <p className="text-[#a0a0a0] leading-relaxed">
                  Kami tidak merancang token untuk manipulasi harga atau keuntungan segelintir orang di atas kerugian majority. TPC adalah utilitas, bukan spekulasi.
                </p>
              </div>

              <div className="bg-red-900/10 border border-red-500/30 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2">
                  <span>❌</span> Informasi Tersembunyi
                </h3>
                <p className="text-[#a0a0a0] leading-relaxed">
                  Tidak ada "rahasia sukses" yang hanya diketahui internal. Semua mekanisme, fee, dan proses transparan untuk siapa saja yang ingin mempelajari.
                </p>
              </div>

              <div className="bg-red-900/10 border border-red-500/30 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2">
                  <span>❌</span> Pressure Marketing
                </h3>
                <p className="text-[#a0a0a0] leading-relaxed">
                  "Kesempatan terbatas!", "Harga akan naik 10x besok!" - Kami tidak menggunakan fear of missing out (FOMO) untuk mendesak keputusan emosional.
                </p>
              </div>
            </div>
          </section>

          {/* What We Do Instead */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-green-400 mb-4 flex items-center justify-center gap-3">
                <span className="text-4xl">✅</span>
                Yang Kami Lakukan Sebagai Gantinya
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-900/10 border border-green-500/30 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-2">
                  <span>✓</span> Sistem Terbuka & Dapat Diaudit
                </h3>
                <p className="text-[#a0a0a0] leading-relaxed">
                  Semua transaksi, keputusan governance, dan alokasi dana dapat diverifikasi oleh siapa saja. Blockchain memberikan transparansi yang inheren.
                </p>
              </div>

              <div className="bg-green-900/10 border border-green-500/30 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-2">
                  <span>✓</span> Fokus Utilitas Jangka Panjang
                </h3>
                <p className="text-[#a0a0a0] leading-relaxed">
                  TPC dirancang untuk kegunaan nyata dalam ekosistem, bukan sekadar aset spekulatif. Nilainya berasal dari fungsi, bukan hype.
                </p>
              </div>

              <div className="bg-green-900/10 border border-green-500/30 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-2">
                  <span>✓</span> Edukasi & Informasi Lengkap
                </h3>
                <p className="text-[#a0a0a0] leading-relaxed">
                  Kami menyediakan semua informasi yang dibutuhkan untuk membuat keputusan terinformasi, termasuk risiko dan keterbatasan.
                </p>
              </div>

              <div className="bg-green-900/10 border border-green-500/30 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-2">
                  <span>✓</span> Pengembangan Berkelanjutan
                </h3>
                <p className="text-[#a0a0a0] leading-relaxed">
                  Ekosistem TPC terus berkembang berdasarkan feedback user dan kebutuhan real, bukan berdasarkan tren pasar sesaat.
                </p>
              </div>
            </div>
          </section>

          {/* Long-term Vision */}
          <section className="mb-20">
            <PremiumCard className="bg-gradient-to-br from-[#1a1a24] to-[#0a0a0f] border-[#d4af37]/30">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#d4af37] mb-4 flex items-center justify-center gap-3">
                  <span className="text-4xl">🔮</span>
                  Visi Jangka Panjang
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🏛️</div>
                  <h3 className="text-lg font-bold text-white mb-3">Infrastruktur Keuangan Desentralisasi</h3>
                  <p className="text-[#a0a0a0] text-sm leading-relaxed">
                    Membangun sistem finansial yang transparan, efisien, dan dapat diakses oleh siapa saja tanpa perantara.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🌍</div>
                  <h3 className="text-lg font-bold text-white mb-3">Adopsi Global Bertahap</h3>
                  <p className="text-[#a0a0a0] text-sm leading-relaxed">
                    Fokus pada implementasi real dan adopsi user nyata, bukan sekadar volume trading artificial.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">⚖️</div>
                  <h3 className="text-lg font-bold text-white mb-3">Kepatuhan Regulasi Proaktif</h3>
                  <p className="text-[#a0a0a0] text-sm leading-relaxed">
                    Bekerja sama dengan regulator untuk memastikan kepatuhan tanpa mengorbankan prinsip desentralisasi.
                  </p>
                </div>
              </div>
            </PremiumCard>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-[#d4af37]/20 to-transparent rounded-2xl p-12 border border-[#d4af37]/30">
              <h2 className="text-3xl font-bold text-white mb-6">
                Bergabunglah dengan Ekosistem yang Berbeda
              </h2>
              <p className="text-xl text-[#a0a0a0] mb-8 max-w-2xl mx-auto leading-relaxed">
                TPC bukan tentang menjadi kaya cepat. TPC tentang membangun sistem finansial yang lebih baik, transparan, dan berkelanjutan.
              </p>
              <div className="flex gap-4 justify-center">
                <Link href="/presale">
                  <PremiumButton size="lg" className="px-8 py-4">
                    🚀 Mulai Perjalanan Anda
                  </PremiumButton>
                </Link>
                <Link href="/risk-disclosure" className="inline-flex items-center px-8 py-4 border border-[#d4af37]/50 rounded-lg text-[#d4af37] hover:bg-[#d4af37]/10 transition">
                  📖 Pelajari Risiko
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
                TPC menyediakan layanan edukasi dan platform infrastruktur. Semua informasi di halaman ini tidak merupakan saran finansial atau investasi.
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

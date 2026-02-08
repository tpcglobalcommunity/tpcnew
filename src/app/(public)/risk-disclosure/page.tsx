import { Metadata } from "next";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Risk Disclosure | TPC Presale - Understand the Risks",
  description: "Full risk disclosure for TPC presale. Understand crypto volatility, no guarantees, and user responsibility before participating. Education-first approach.",
};

export default function RiskDisclosurePage() {
  return (
    <PremiumShell>
      <div className="min-h-screen">
        {/* Header */}
        <header className="border-b border-[#2a2a3a]">
          <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-[#d4af37]">TPC Global</Link>
            <Link href="/presale" className="text-[#a0a0a0] hover:text-white transition">
              ← Back to Presale
            </Link>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-12">
          {/* Hero */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Risk <span className="text-[#d4af37]">Disclosure</span>
            </h1>
            <p className="text-xl text-[#a0a0a0]">
              Please read carefully before participating
            </p>
          </div>

          {/* Introduction */}
          <PremiumCard className="mb-8">
            <p className="text-lg text-[#a0a0a0] mb-4">
              Presale TPC bukan penawaran investasi dan bukan skema keuntungan finansial.
            </p>
            <p className="text-lg text-[#a0a0a0]">
              Presale ini adalah akses awal ke ekosistem TPC yang dibangun dengan prinsip edukasi, transparansi, dan tata kelola komunitas.
            </p>
          </PremiumCard>

          {/* What You Get */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#d4af37]">🔍 Apa yang Kamu Dapatkan dari Presale TPC?</h2>
            <PremiumCard>
              <p className="text-[#a0a0a0] mb-4">
                Dengan berpartisipasi di presale, kamu tidak membeli janji hasil, tetapi mendapatkan:
              </p>
              <ul className="space-y-3 text-white">
                <li>✅ Akses awal ke ekosistem TPC</li>
                <li>✅ Partisipasi dalam komunitas Trader Professional Community</li>
                <li>✅ Hak menggunakan TPC sebagai utility token di dalam sistem</li>
                <li>✅ Kesempatan mengikuti perkembangan platform sejak tahap awal</li>
                <li>✅ Transparansi penuh atas supply, tahap, dan alokasi token</li>
              </ul>
              <p className="text-[#a0a0a0] mt-4">
                Semua penggunaan TPC dijelaskan terbuka dan dapat diaudit.
              </p>
            </PremiumCard>
          </section>

          {/* Important Understanding */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#d4af37]">⚠️ Hal Penting yang Harus Dipahami</h2>
            <PremiumCard variant="gold">
              <h3 className="font-semibold mb-4 text-[#d4af37]">Presale TPC:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">❌</span>
                  <span>Bukan jaminan keuntungan</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">❌</span>
                  <span>Bukan program bagi hasil</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">❌</span>
                  <span>Bukan produk investasi</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">❌</span>
                  <span>Tidak menjanjikan ROI, APY, atau return apa pun</span>
                </li>
              </ul>
              <p className="text-[#a0a0a0] mt-6">
                Nilai dan manfaat yang dirasakan pengguna bergantung pada: partisipasi individu, pemahaman risiko, dan perkembangan ekosistem secara alami.
              </p>
            </PremiumCard>
          </section>

          {/* Why No Profit Promise */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#d4af37]">🧠 Kenapa TPC Tidak Menjanjikan Profit?</h2>
            <PremiumCard>
              <p className="text-[#a0a0a0] mb-4">
                Karena TPC dibangun untuk jangka panjang, bukan sensasi sesaat.
              </p>
              <p className="text-white mb-4">Kami percaya:</p>
              <ul className="space-y-2 text-[#a0a0a0] mb-6">
                <li>• edukasi lebih penting dari hype,</li>
                <li>• sistem lebih penting dari klaim,</li>
                <li>• dan kejujuran lebih kuat dari janji manis.</li>
              </ul>
              <p className="text-[#a0a0a0]">
                TPC memilih membangun fondasi, bukan menciptakan ekspektasi palsu.
              </p>
            </PremiumCard>
          </section>

          {/* Transparency */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#d4af37]">🧱 Transparansi Presale</h2>
            <PremiumCard>
              <p className="text-[#a0a0a0] mb-4">
                Presale TPC dilakukan secara bertahap dan terbuka:
              </p>
              <ul className="space-y-2 text-white">
                <li>• Harga & supply per tahap diumumkan jelas</li>
                <li>• Wallet treasury dapat diverifikasi</li>
                <li>• Riwayat transaksi tercatat</li>
                <li>• Tidak ada mekanisme tersembunyi</li>
              </ul>
              <p className="text-[#a0a0a0] mt-4">
                Setiap peserta dapat melihat apa yang terjadi dengan dana dan token.
              </p>
            </PremiumCard>
          </section>

          {/* Security */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#d4af37]">🛡️ Keamanan & Kepatuhan</h2>
            <PremiumCard>
              <p className="text-[#a0a0a0] mb-4">
                TPC dirancang dengan:
              </p>
              <ul className="space-y-2 text-white">
                <li>• sistem anti-scam,</li>
                <li>• pencatatan transaksi yang rapi,</li>
                <li>• kontrol internal berbasis aturan,</li>
                <li>• dan kebijakan kepatuhan sejak awal.</li>
              </ul>
              <p className="text-[#a0a0a0] mt-4">
                Ini bukan gimmick — ini fondasi agar ekosistem bisa bertahan.
              </p>
            </PremiumCard>
          </section>

          {/* For Whom */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#d4af37]">🚀 Untuk Siapa Presale Ini Cocok?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <PremiumCard variant="gold">
                <h3 className="font-semibold text-[#d4af37] mb-4">Presale cocok untuk:</h3>
                <ul className="space-y-2 text-white">
                  <li>✅ mereka yang memahami risiko,</li>
                  <li>✅ ingin belajar & berkembang bersama komunitas,</li>
                  <li>✅ menghargai transparansi,</li>
                  <li>✅ dan tidak mencari janji hasil instan.</li>
                </ul>
              </PremiumCard>

              <PremiumCard>
                <h3 className="font-semibold text-[#6b7280] mb-4">Presale tidak cocok untuk:</h3>
                <ul className="space-y-2 text-[#a0a0a0]">
                  <li>❌ pencari profit cepat,</li>
                  <li>❌ pemburu janji ROI,</li>
                  <li>❌ atau mereka yang ingin &quot;dipastikan untung&quot;.</li>
                </ul>
              </PremiumCard>
            </div>
          </section>

          {/* Agreement */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#d4af37]">✅ Sebelum Melanjutkan</h2>
            <PremiumCard>
              <p className="text-[#a0a0a0] mb-4">
                Dengan mengikuti presale TPC, kamu menyatakan bahwa:
              </p>
              <ul className="space-y-3 text-white">
                <li className="flex items-start gap-3">
                  <span className="text-green-500">✓</span>
                  <span>telah membaca dan memahami informasi di atas,</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500">✓</span>
                  <span>memahami bahwa tidak ada jaminan hasil finansial,</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500">✓</span>
                  <span>dan berpartisipasi secara sadar dan sukarela.</span>
                </li>
              </ul>
            </PremiumCard>
          </section>

          {/* Final Statement */}
          <PremiumCard className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4 text-[#d4af37]">TPC Presale</h2>
            <p className="text-lg text-white mb-2">
              Bukan janji profit.
            </p>
            <p className="text-lg text-white mb-2">
              Bukan spekulasi kosong.
            </p>
            <p className="text-lg text-[#d4af37]">
              Tapi akses ke ekosistem yang dibangun dengan serius.
            </p>
          </PremiumCard>

          {/* CTA */}
          <div className="text-center">
            <Link href="/presale">
              <PremiumButton size="lg">
                Saya Memahami Risiko - Lanjutkan ke Presale
              </PremiumButton>
            </Link>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-[#2a2a3a] mt-12">
          <div className="max-w-4xl mx-auto px-4 py-8 text-center">
            <Link href="/presale" className="text-[#d4af37] hover:underline">
              ← Kembali ke Presale TPC
            </Link>
          </div>
        </footer>
      </div>
    </PremiumShell>
  );
}

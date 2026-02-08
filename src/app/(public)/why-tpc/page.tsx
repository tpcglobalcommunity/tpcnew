import { Metadata } from "next";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { PremiumCard } from "@/components/ui/PremiumCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why TPC is Different | No Profit Promises, Real System",
  description: "TPC doesn't promise profit. We build real systems with transparency, auditability, and education-first approach. Learn why TPC stands apart from hype projects.",
};

export default function WhyTPCPage() {
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
              Kenapa TPC <span className="text-[#d4af37]">Berbeda</span>
            </h1>
            <p className="text-xl text-[#a0a0a0]">
              Tanpa Janji Profit
            </p>
          </div>

          {/* Introduction */}
          <PremiumCard className="mb-8">
            <p className="text-lg leading-relaxed text-[#a0a0a0]">
              Di dunia kripto dan komunitas finansial, satu hal sering diulang: janji profit cepat.
            </p>
            <p className="text-lg leading-relaxed mt-4 text-white">
              TPC memilih jalan yang berbeda.
            </p>
            <p className="text-[#a0a0a0] mt-4">
              Bukan karena kami tidak bisa menjanjikan profit, tetapi karena janji seperti itu tidak pernah jujur.
            </p>
          </PremiumCard>

          {/* Reality Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#d4af37]">🔍 Realita yang Kami Akui Sejak Awal</h2>
            <PremiumCard>
              <p className="text-[#a0a0a0] mb-4">
                Tidak ada sistem, token, robot, atau komunitas yang bisa menjamin hasil finansial untuk semua orang.
              </p>
              <p className="text-[#a0a0a0] mb-4">
                Pasar bergerak karena:
              </p>
              <ul className="space-y-2 text-white mb-4">
                <li>• disiplin,</li>
                <li>• pengetahuan,</li>
                <li>• manajemen risiko,</li>
                <li>• dan keputusan individu.</li>
              </ul>
              <p className="text-[#a0a0a0]">
                TPC tidak menutup mata dari fakta ini — justru membangun sistem di atas realita tersebut.
              </p>
            </PremiumCard>
          </section>

          {/* What is TPC */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#d4af37]">🧠 Apa Itu TPC Sebenarnya?</h2>
            <PremiumCard>
              <p className="text-lg text-white mb-6">
                TPC adalah ekosistem edukasi dan kolaborasi.
              </p>
              
              <div className="mb-6">
                <p className="text-[#6b7280] mb-2">Bukan:</p>
                <ul className="space-y-1 text-[#a0a0a0]">
                  <li>❌ skema investasi,</li>
                  <li>❌ bukan program bagi hasil,</li>
                  <li>❌ bukan janji passive income,</li>
                  <li>❌ bukan platform &quot;titip uang&quot;.</li>
                </ul>
              </div>

              <div>
                <p className="text-[#d4af37] mb-2">TPC adalah:</p>
                <ul className="space-y-1 text-white">
                  <li>✅ komunitas trader & pelaku finansial,</li>
                  <li>✅ sistem transparan,</li>
                  <li>✅ pembelajaran berkelanjutan,</li>
                  <li>✅ dan infrastruktur yang bisa diaudit.</li>
                </ul>
              </div>

              <p className="text-[#a0a0a0] mt-6">
                Semua penggunaan TPC dijelaskan terbuka dan dapat diaudit.
              </p>
            </PremiumCard>
          </section>

          {/* Basic Principles */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#d4af37]">🧱 Prinsip Dasar TPC</h2>
            <PremiumCard>
              <p className="text-[#a0a0a0] mb-6">
                Kami hanya berkomitmen pada hal-hal yang bisa dikontrol, bukan hasil pasar.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✔</span>
                  <span>Transparansi on-chain</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✔</span>
                  <span>Aturan tertulis & bisa diaudit</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✔</span>
                  <span>Data, bukan klaim</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✔</span>
                  <span>Edukasi, bukan hype</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✔</span>
                  <span>Sistem, bukan spekulasi</span>
                </div>
              </div>

              <p className="text-[#a0a0a0] mt-6">
                Jika seseorang memperoleh manfaat finansial, itu adalah hasil keputusan dan proses mereka sendiri, bukan janji dari TPC.
              </p>
            </PremiumCard>
          </section>

          {/* Why No Profit Promise */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#d4af37]">⚖️ Kenapa Kami Tidak Menjanjikan Profit?</h2>
            <PremiumCard>
              <p className="text-[#a0a0a0] mb-4">Karena:</p>
              <ul className="space-y-2 text-[#a0a0a0]">
                <li>• janji profit menghilangkan tanggung jawab pribadi,</li>
                <li>• menciptakan ekspektasi palsu,</li>
                <li>• dan sering menjadi pintu masalah hukum & etika.</li>
              </ul>
              
              <p className="text-white mt-6">TPC memilih:</p>
              <ul className="space-y-2 mt-2 text-[#a0a0a0]">
                <li>• mendidik sebelum menjual,</li>
                <li>• menjelaskan sebelum mengajak,</li>
                <li>• dan membangun sebelum mempromosikan.</li>
              </ul>
            </PremiumCard>
          </section>

          {/* Security */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#d4af37]">🛡️ Keamanan & Kepatuhan Bukan Gimmick</h2>
            <PremiumCard>
              <p className="text-[#a0a0a0] mb-4">
                TPC dirancang sejak awal dengan:
              </p>
              <ul className="space-y-2 text-white">
                <li>• sistem audit trail,</li>
                <li>• pencatatan transaksi yang rapi,</li>
                <li>• kontrol admin berbasis aturan,</li>
                <li>• dan kebijakan anti-scam yang ketat.</li>
              </ul>
              <p className="text-[#a0a0a0] mt-4">
                Bukan karena kami ingin terlihat &quot;aman&quot;, tetapi karena kami ingin bertahan jangka panjang.
              </p>
            </PremiumCard>
          </section>

          {/* For Whom */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#d4af37]">🚀 Untuk Siapa TPC Cocok?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <PremiumCard variant="gold">
                <h3 className="font-semibold text-[#d4af37] mb-4">TPC cocok untuk:</h3>
                <ul className="space-y-2 text-white">
                  <li>✅ mereka yang memahami risiko,</li>
                  <li>✅ ingin belajar & berkembang bersama komunitas,</li>
                  <li>✅ menghargai transparansi,</li>
                  <li>✅ dan tidak mencari janji hasil instan.</li>
                </ul>
              </PremiumCard>

              <PremiumCard>
                <h3 className="font-semibold text-[#6b7280] mb-4">TPC tidak cocok untuk:</h3>
                <ul className="space-y-2 text-[#a0a0a0]">
                  <li>❌ pencari profit cepat,</li>
                  <li>❌ pemburu janji ROI,</li>
                  <li>❌ atau mereka yang ingin &quot;dipastikan untung&quot;.</li>
                </ul>
              </PremiumCard>
            </div>
          </section>

          {/* Conclusion */}
          <PremiumCard variant="gold" className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-[#d4af37]">✨ Kesimpulan</h2>
            <p className="text-lg text-white mb-4">
              TPC tidak menjual mimpi.
            </p>
            <p className="text-lg text-white mb-6">
              TPC membangun fondasi.
            </p>
            <p className="text-[#a0a0a0] mb-6">
              Kami percaya: komunitas yang jujur lebih kuat daripada janji yang manis.
            </p>
            <p className="text-[#d4af37] font-medium">
              Dan itulah kenapa TPC berdiri tanpa janji profit — tapi dengan sistem yang nyata.
            </p>
          </PremiumCard>
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

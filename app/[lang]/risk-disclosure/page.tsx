import { normalizeLang, type LangParams, publicPath } from "@/lib/lang-helpers";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { Container } from "@/components/ui/Container";
import type { Metadata } from "next";
import Link from "next/link";

interface RiskDisclosurePageProps {
  params: Promise<LangParams>;
}

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "id" }];
}

export async function generateMetadata({ params }: { params: Promise<LangParams> }): Promise<Metadata> {
  const { lang } = await params;
  const normalizedLang = normalizeLang(lang);

  const titles = {
    id: "Pengungkapan Risiko - TPC Global",
    en: "Risk Disclosure - TPC Global"
  };

  const descriptions = {
    id: "Dokumen pengungkapan risiko komprehensif untuk ekosistem TPC Global",
    en: "Comprehensive risk disclosure document for TPC Global ecosystem"
  };

  return {
    title: titles[normalizedLang as keyof typeof titles],
    description: descriptions[normalizedLang as keyof typeof descriptions],
    keywords: "TPC Global, risk disclosure, pengungkapan risiko, digital assets, legal compliance",
    authors: [{ name: "TPC Global" }],
    creator: "TPC Global",
    publisher: "TPC Global",
    openGraph: {
      title: titles[normalizedLang as keyof typeof titles],
      description: descriptions[normalizedLang as keyof typeof descriptions],
      type: "website",
      locale: normalizedLang === "id" ? "id_ID" : "en_US",
      siteName: "TPC Global",
      images: [
        {
          url: "https://tpcglobal.io/og-risk-disclosure.jpg",
          width: 1200,
          height: 630,
          alt: titles[normalizedLang as keyof typeof titles],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titles[normalizedLang as keyof typeof titles],
      description: descriptions[normalizedLang as keyof typeof descriptions],
      images: ["https://tpcglobal.io/og-risk-disclosure.jpg"],
    },
  };
}

const legalContent = {
  id: {
    title: "Pengungkapan Risiko",
    lastUpdated: "Terakhir diperbarui: 12 Februari 2026",
    introduction: "Dokumen ini menjelaskan berbagai risiko yang mungkin timbul sehubungan dengan partisipasi dalam ekosistem TPC, termasuk namun tidak terbatas pada aktivitas edukasi, kepemilikan token, dan penggunaan layanan berbasis teknologi blockchain.\n\nDengan mengakses dan menggunakan platform ini, Anda dianggap telah membaca, memahami, dan menyetujui seluruh risiko yang dijelaskan di bawah ini.",
    sections: [
      {
        title: "Risiko Pasar",
        content: "Aset digital dan instrumen berbasis blockchain memiliki volatilitas tinggi. Nilai token dapat mengalami kenaikan maupun penurunan secara signifikan dalam waktu singkat akibat kondisi pasar, sentimen global, kebijakan ekonomi, atau faktor eksternal lainnya.\n\nTPC tidak menjamin stabilitas harga atau nilai ekonomi dari token atau aset terkait."
      },
      {
        title: "Risiko Likuiditas",
        content: "Tidak ada jaminan bahwa token dapat diperdagangkan secara aktif di pasar sekunder atau memiliki likuiditas yang memadai. Pemegang token mungkin mengalami kesulitan menjual atau mengonversi token menjadi aset lain."
      },
      {
        title: "Risiko Regulasi",
        content: "Regulasi terkait aset digital dapat berubah sewaktu-waktu di berbagai yurisdiksi. Perubahan kebijakan pemerintah, otoritas keuangan, atau regulator dapat berdampak pada legalitas, operasional, atau keberlanjutan proyek.\n\nPengguna bertanggung jawab memahami regulasi yang berlaku di wilayah masing-masing."
      },
      {
        title: "Risiko Teknologi",
        content: "Platform berbasis blockchain memiliki potensi risiko teknis, termasuk namun tidak terbatas pada:\n\n• Gangguan jaringan\n• Kerentanan smart contract\n• Serangan siber\n• Kesalahan perangkat lunak\n\nMeskipun langkah keamanan diterapkan, tidak ada sistem yang sepenuhnya bebas risiko."
      },
      {
        title: "Risiko Operasional",
        content: "Operasional proyek dapat terdampak oleh faktor internal maupun eksternal seperti:\n\n• Keterbatasan sumber daya\n• Perubahan struktur organisasi\n• Kegagalan pihak ketiga\n• Force majeure"
      },
      {
        title: "Tidak Ada Jaminan Keuntungan",
        content: "TPC adalah komunitas edukasi dan pengembangan ekosistem.\nTPC bukan lembaga investasi, bukan manajer dana, dan tidak memberikan jaminan keuntungan, imbal hasil tetap, atau proyeksi ROI.\n\nSetiap keputusan finansial merupakan tanggung jawab pribadi pengguna."
      },
      {
        title: "Tanggung Jawab Pribadi",
        content: "Setiap partisipan bertanggung jawab penuh atas keputusan yang diambil, termasuk risiko finansial, hukum, dan teknis yang mungkin timbul.\n\nDisarankan untuk berkonsultasi dengan penasihat hukum atau keuangan independen sebelum membuat keputusan terkait aset digital."
      }
    ],
    conclusion: "Dengan melanjutkan penggunaan platform TPC, Anda menyatakan telah membaca dan memahami seluruh risiko yang dijelaskan dalam dokumen ini.\n\nDokumen ini dapat diperbarui sewaktu-waktu tanpa pemberitahuan sebelumnya."
  },
  en: {
    title: "Risk Disclosure",
    lastUpdated: "Last Updated: 12 February 2026",
    introduction: "This document explains various risks that may arise in connection with participation in TPC ecosystem, including but not limited to educational activities, token ownership, and use of blockchain technology-based services.\n\nBy accessing and using this platform, you are deemed to have read, understood, and agreed to all risks described below.",
    sections: [
      {
        title: "Market Risk",
        content: "Digital assets and blockchain-based instruments have high volatility. Token values may experience significant increases or decreases in a short period due to market conditions, global sentiment, economic policies, or other external factors.\n\nTPC does not guarantee price stability or economic value of tokens or related assets."
      },
      {
        title: "Liquidity Risk",
        content: "There is no guarantee that tokens can be actively traded in secondary markets or have adequate liquidity. Token holders may experience difficulty selling or converting tokens into other assets."
      },
      {
        title: "Regulatory Risk",
        content: "Regulations related to digital assets may change at any time in various jurisdictions. Changes in government policies, financial authorities, or regulators may impact the legality, operations, or sustainability of the project.\n\nUsers are responsible for understanding applicable regulations in their respective regions."
      },
      {
        title: "Technology Risk",
        content: "Blockchain-based platforms have potential technical risks, including but not limited to:\n\n• Network disruptions\n• Smart contract vulnerabilities\n• Cyber attacks\n• Software errors\n\nAlthough security measures are implemented, no system is entirely risk-free."
      },
      {
        title: "Operational Risk",
        content: "Project operations may be affected by internal and external factors such as:\n\n• Resource limitations\n• Organizational structure changes\n• Third-party failures\n• Force majeure"
      },
      {
        title: "No Profit Guarantee",
        content: "TPC is an education and ecosystem development community.\nTPC is not an investment institution, not a fund manager, and does not provide profit guarantees, fixed returns, or ROI projections.\n\nAll financial decisions are the personal responsibility of users."
      },
      {
        title: "Personal Responsibility",
        content: "Each participant is fully responsible for decisions made, including financial, legal, and technical risks that may arise.\n\nIt is recommended to consult with independent legal or financial advisors before making decisions related to digital assets."
      }
    ],
    conclusion: "By continuing to use the TPC platform, you state that you have read and understood all risks described in this document.\n\nThis document may be updated at any time without prior notice."
  }
};

export default async function RiskDisclosurePage({ params }: RiskDisclosurePageProps) {
  const { lang } = await params;
  const normalizedLang = normalizeLang(lang);
  const content = legalContent[normalizedLang as keyof typeof legalContent];

  return (
    <PremiumShell>
      <Container className="py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              {content.title}
            </h1>
            <p className="text-gray-400 text-sm">
              {content.lastUpdated}
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-[#1A1F2E] border border-amber-500/25 rounded-lg p-8 mb-8">
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {content.introduction}
              </p>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {content.sections.map((section, index) => (
              <div key={index} className="bg-[#1A1F2E] border border-amber-500/25 rounded-lg p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center">
                    <span className="text-amber-400 font-semibold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {section.title}
                    </h3>
                    <div className="prose prose-invert max-w-none">
                      <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="bg-[#1A1F2E] border border-amber-500/25 rounded-lg p-8 mt-8">
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {content.conclusion}
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-12">
            <Link 
              href={`/${normalizedLang}`}
              className="inline-flex items-center px-6 py-3 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-600 transition-colors"
            >
              {normalizedLang === 'id' ? 'Kembali ke Beranda' : 'Back to Home'}
            </Link>
          </div>
        </div>
      </Container>
    </PremiumShell>
  );
}
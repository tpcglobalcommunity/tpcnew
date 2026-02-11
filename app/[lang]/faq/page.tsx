import { normalizeLang, type LangParams } from "@/lib/lang-helpers";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PremiumCard, PremiumCardContent } from "@/components/ui/PremiumCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { Metadata } from "next";
import Link from "next/link";

interface FaqPageProps {
  params: Promise<LangParams>;
}

// FAQ Content Dictionary
const faqCopy = {
  id: {
    title: 'FAQ — Trader Profesional Community',
    subtitle: 'Pertanyaan umum seputar komunitas, transparansi, dan prinsip edukasi Trader Profesional Community.',
    hero: {
      badge: 'FAQ',
      title: 'FAQ — Trader Profesional Community',
      subtitle: 'Pertanyaan Umum Seputar Komunitas, Transparansi, dan Prinsip Edukasi',
      description: 'Menjelaskan bahwa FAQ ini dibuat untuk mencegah salah paham, praktik menyesatkan, dan klaim yang tidak bertanggung jawab.'
    },
    faqs: [
      {
        question: 'Apakah Trader Profesional Community (TPC) menjanjikan keuntungan?',
        answer: 'Tidak. Trader Profesional Community adalah komunitas edukasi. Tidak ada janji profit, imbal hasil, atau hasil finansial tertentu. Fokus kami adalah pemahaman pasar, bukan janji kekayaan.'
      },
      {
        question: 'Apakah TPC adalah produk investasi?',
        answer: 'Bukan. TPC tidak menawarkan produk investasi dan tidak memberikan nasihat keuangan. Kami adalah platform edukasi yang transparan untuk pembelajaran trading yang bertanggung jawab.'
      },
      {
        question: 'Mengapa TPC tidak menampilkan harga, supply, atau target penjualan?',
        answer: 'Karena fokus TPC adalah edukasi dan transparansi komunitas, bukan promosi finansial atau tekanan penjualan. Kami menghindari praktik yang dapat menyesatkan calon anggota.'
      },
      {
        question: 'Apakah TPC memberikan sinyal buy/sell atau rekomendasi trading?',
        answer: 'Tidak. TPC tidak menyediakan sinyal trading maupun rekomendasi transaksi. Setiap keputusan trading adalah tanggung jawab masing-masing individu.'
      },
      {
        question: 'Apa tujuan adanya halaman presale di TPC?',
        answer: 'Presale berfungsi sebagai mekanisme akses komunitas, bukan penawaran keuntungan finansial. Ini memungkinkan partisipasi terukur dalam ekosistem edukasi.'
      },
      {
        question: 'Bagaimana transparansi dijaga di TPC?',
        answer: 'TPC dibangun di atas infrastruktur blockchain berbasis Ethereum melalui Polygon untuk menjamin transparansi, efisiensi, dan keberlanjutan komunitas. Semua proses dan keputusan dapat diverifikasi secara on-chain.'
      },
      {
        question: 'Apakah ada risiko dalam berpartisipasi di komunitas ini?',
        answer: 'Ya. Setiap aktivitas pembelajaran dan keputusan individu memiliki risiko. TPC mendorong pemahaman risiko secara sadar dan edukasi manajemen risiko yang bertanggung jawab.'
      },
      {
        question: 'Bagaimana TPC mencegah penipuan yang mengatasnamakan komunitas?',
        answer: 'Dengan edukasi publik, pencatatan proses terbuka, dan ajakan untuk selalu melakukan verifikasi melalui kanal resmi. Kami tidak pernah menghubungi anggota terlebih dahulu untuk penawaran investasi.'
      },
      {
        question: 'Untuk siapa komunitas ini cocok?',
        answer: 'Untuk individu yang ingin belajar trading secara bertanggung jawab dan menghargai proses, bukan hasil instan. Kami mengutamakan pembelajaran jangka panjang dan integritas.'
      },
      {
        question: 'Ke mana saya harus melapor jika menemukan indikasi penipuan?',
        answer: 'Gunakan halaman Kontak & Laporan Penipuan atau rujuk ke kebijakan privasi untuk kanal resmi yang tersedia. Laporkan segera untuk melindungi komunitas.'
      }
    ],
    cta: {
      primary: 'Pelajari Transparansi Komunitas',
      secondary: 'Pahami Akses Komunitas'
    }
  },
  en: {
    title: 'FAQ — Trader Profesional Community',
    subtitle: 'Common questions about Trader Profesional Community, transparency, and educational principles.',
    hero: {
      badge: 'FAQ',
      title: 'FAQ — Trader Profesional Community',
      subtitle: 'Common Questions About Community, Transparency, and Educational Principles',
      description: 'Explaining that this FAQ is created to prevent misunderstanding, misleading practices, and unsubstantiated claims.'
    },
    faqs: [
      {
        question: 'Does Trader Profesional Community (TPC) promise profits?',
        answer: 'No. Trader Profesional Community is an educational community. There are no profit promises, returns, or specific financial outcomes. Our focus is market understanding, not wealth promises.'
      },
      {
        question: 'Is TPC an investment product?',
        answer: 'No. TPC does not offer investment products and does not provide financial advice. We are a transparent educational platform for responsible trading learning.'
      },
      {
        question: 'Why doesn\'t TPC display prices, supply, or sales targets?',
        answer: 'Because TPC\'s focus is education and community transparency, not financial promotion or sales pressure. We avoid practices that could mislead potential members.'
      },
      {
        question: 'Does TPC provide buy/sell signals or trading recommendations?',
        answer: 'No. TPC does not provide trading signals or transaction recommendations. All trading decisions are responsibility of each individual.'
      },
      {
        question: 'What is purpose of presale page on TPC?',
        answer: 'The presale functions as a community access mechanism, not a financial profit offering. It enables measured participation in the educational ecosystem.'
      },
      {
        question: 'How is transparency maintained at TPC?',
        answer: 'TPC is built on Ethereum-based blockchain infrastructure through Polygon to ensure transparency, efficiency, and community sustainability. All processes and decisions can be verified on-chain.'
      },
      {
        question: 'Are there risks in participating in this community?',
        answer: 'Yes. All learning activities and individual decisions carry risks. TPC encourages conscious risk awareness and education about responsible risk management.'
      },
      {
        question: 'How does TPC prevent scams using the community name?',
        answer: 'Through public education, open process documentation, and requests to always verify through official channels. We never contact members first with investment offers.'
      },
      {
        question: 'Who is this community suitable for?',
        answer: 'For individuals who want to learn trading responsibly and value processes, not instant results. We prioritize long-term learning and integrity.'
      },
      {
        question: 'Where should I report if I encounter suspicious activity?',
        answer: 'Use Contact & Fraud Report page or refer to privacy policy for available official channels. Report immediately to protect the community.'
      }
    ],
    cta: {
      primary: 'Learn Community Transparency',
      secondary: 'Understand Community Access'
    }
  }
};

export function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'id' }
  ];
}

export async function generateMetadata({ params }: { params: Promise<LangParams> }): Promise<Metadata> {
  const { lang } = await params;
  const normalizedLang = normalizeLang(lang);
  
  return {
    title: normalizedLang === 'id' ? 'FAQ — Trader Profesional Community' : 'FAQ — Trader Profesional Community',
    description: normalizedLang === 'id' 
      ? 'Pertanyaan umum seputar komunitas, transparansi, dan prinsip edukasi Trader Profesional Community.'
      : 'Common questions about Trader Profesional Community, transparency, and educational principles.',
    keywords: 'Trader Profesional Community, FAQ, trading education, transparency, ethics, anti-scam',
    authors: [{ name: 'Trader Profesional Community' }],
    creator: 'Trader Profesional Community',
    publisher: 'Trader Profesional Community',
    openGraph: {
      title: normalizedLang === 'id' ? 'FAQ — Trader Profesional Community' : 'FAQ — Trader Profesional Community',
      description: normalizedLang === 'id' 
        ? 'Pertanyaan umum seputar komunitas, transparansi, dan prinsip edukasi Trader Profesional Community.'
        : 'Common questions about Trader Profesional Community, transparency, and educational principles.',
      type: "website",
      locale: lang === 'id' ? 'id_ID' : 'en_US',
      siteName: 'Trader Profesional Community',
      images: [
        {
          url: `https://tpcglobal.io/og-${lang}.png`,
          width: 1200,
          height: 630,
          alt: normalizedLang === 'id' ? 'FAQ — Trader Profesional Community' : 'FAQ — Trader Profesional Community',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: normalizedLang === 'id' ? 'FAQ — Trader Profesional Community' : 'FAQ — Trader Profesional Community',
      description: normalizedLang === 'id' 
        ? 'Pertanyaan umum seputar komunitas, transparansi, dan prinsip edukasi Trader Profesional Community.'
        : 'Common questions about Trader Profesional Community, transparency, and educational principles.',
      images: [`https://tpcglobal.io/og-${lang}.png`],
      creator: '@TPCGlobal',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function FaqPage({ params }: FaqPageProps) {
  const { lang } = await params;
  const normalizedLang = normalizeLang(lang);
  const copy = faqCopy[normalizedLang];

  return (
    <div className="min-h-screen bg-[#0B0E11]">
      {/* HERO SECTION */}
      <Section className="pt-16 pb-20 bg-gradient-to-br from-[#0B0E11] via-[#1A1F2E] to-[#2A1F3A] relative w-full max-w-full overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-blue-500/10"></div>
        <div className="absolute top-0 left-0 w-24 h-24 bg-amber-500/10 rounded-full blur-xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl translate-x-1/2 translate-y-1/2"></div>
        
        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full mb-6">
              <span className="text-amber-400 text-sm font-semibold">{copy.hero.badge}</span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              {copy.hero.title}
            </h1>
            
            {/* Subtitle */}
            <h2 className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              {copy.hero.subtitle}
            </h2>
            
            {/* Description */}
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              {copy.hero.description}
            </p>
          </div>
        </Container>
      </Section>

      {/* FAQ SECTION */}
      <Section className="py-16 bg-[#1A1F2E] relative w-full max-w-full overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Pertanyaan Umum
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                Temukan jawaban untuk pertanyaan yang sering diajukan seputar Trader Profesional Community.
              </p>
            </div>
            
            <div className="space-y-6">
              {copy.faqs.map((faq, index) => (
                <PremiumCard key={index} className="border border-amber-500/20 bg-white/5 rounded-2xl overflow-hidden">
                  <PremiumCardContent className="p-0">
                    <details className="group">
                      <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-white/5 transition-colors duration-200">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-amber-400 text-sm font-bold">{String(index + 1).padStart(2, '0')}</span>
                          </div>
                          <h3 className="text-white font-semibold text-left">{faq.question}</h3>
                        </div>
                        <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-6 pb-6">
                        <div className="pl-11">
                          <p className="text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </details>
                  </PremiumCardContent>
                </PremiumCard>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* FINAL CTA SECTION */}
      <Section className="py-20 bg-[#0B0E11] relative w-full max-w-full overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239CA3AF' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 border border-amber-500/20 rounded-2xl p-12 backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-white mb-6">
                Masih Punya Pertanyaan?
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Jika Anda tidak menemukan jawaban yang dicari, jangan ragu untuk menghubungi tim kami.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`/${normalizedLang}/transparency`}>
                  <PremiumButton className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white border-0 shadow-lg transform hover:-translate-y-1 transition-all duration-300 font-semibold">
                    {copy.cta.primary}
                  </PremiumButton>
                </Link>
                <Link href={`/${normalizedLang}/presale`}>
                  <PremiumButton className="w-full sm:w-auto border-amber-500/30 text-amber-400 hover:bg-amber-500/10 hover:border-amber-500/50 transition-all duration-300 font-semibold">
                    {copy.cta.secondary}
                  </PremiumButton>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
import { normalizeLang, type LangParams } from "@/lib/lang-helpers";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PremiumCard, PremiumCardContent } from "@/components/ui/PremiumCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { publicPath } from "@/lib/lang-helpers";
import { Metadata } from "next";
import Link from "next/link";
import Accordion from "@/components/ui/Accordion";

interface AcademyFAQPageProps {
  params: LangParams;
}

export function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'id' }
  ];
}

export async function generateMetadata({ params }: { params: LangParams }): Promise<Metadata> {
  const lang = normalizeLang(params.lang);
  
  const copy = faqCopy[lang];
  
  return {
    title: copy.meta.title,
    description: copy.meta.description,
    keywords: 'TPC Global, FAQ, anti-scam, risk awareness, keamanan, edukasi trading',
    authors: [{ name: 'TPC Global' }],
    creator: 'TPC Global',
    publisher: 'TPC Global',
    openGraph: {
      title: copy.meta.title,
      description: copy.meta.description,
      type: "website",
      locale: lang === 'id' ? 'id_ID' : 'en_US',
      siteName: 'TPC Global',
      images: [
        {
          url: 'https://tpcglobal.io/og-faq.jpg',
          width: 1200,
          height: 630,
          alt: copy.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: copy.meta.title,
      description: copy.meta.description,
      images: ['https://tpcglobal.io/og-faq.jpg'],
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

// FAQ Content Dictionary
const faqCopy = {
  id: {
    title: 'FAQ Edukasi: Anti-Scam & Risiko',
    subtitle: 'Panduan singkat untuk belajar dengan aman, memahami risiko, dan menghindari penipuan.',
    disclaimer: 'Materi ini bersifat edukasi dan tidak merupakan nasihat finansial.',
    meta: {
      title: 'FAQ Edukasi: Anti-Scam & Risiko | TPC Global',
      description: 'Panduan edukasi untuk keamanan, anti-scam, dan pemahaman risiko.'
    },
    quickActions: {
      transparency: 'Cek Transparansi Wallet Resmi',
      academy: 'Kembali ke Academy',
      telegram: 'Channel Telegram Resmi'
    },
    antiScam: {
      title: 'Aturan Anti-Scam',
      rules: [
        'TPC tidak pernah meminta private key/seed phrase.',
        'Admin tidak akan menghubungi terlebih dahulu via DM.',
        'Gunakan hanya domain resmi tpcglobal.io.',
        'Verifikasi alamat wallet di halaman Transparansi.',
        'Waspadai tautan pendek dan akun tiruan.'
      ]
    },
    categories: {
      security: 'Keamanan & Anti-Scam',
      risk: 'Risiko & Edukasi',
      communication: 'Akun & Komunikasi Resmi',
      presale: 'Presale (Aman)'
    },
    faqs: [
      // Keamanan & Anti-Scam
      {
        category: 'security',
        question: 'Apakah TPC pernah meminta seed phrase atau private key?',
        answer: 'Tidak pernah. Itu tanda penipuan.'
      },
      {
        category: 'security',
        question: 'Apakah admin TPC akan DM terlebih dahulu?',
        answer: 'Tidak. Waspadai akun yang mengaku admin dan menghubungi duluan.'
      },
      {
        category: 'security',
        question: 'Bagaimana cara memastikan link yang saya buka resmi?',
        answer: 'Pastikan domain tpcglobal.io, hindari link pendek, cek kanal resmi.'
      },
      {
        category: 'security',
        question: 'Bagaimana cara memverifikasi alamat wallet resmi?',
        answer: 'Cocokkan dengan halaman Transparansi & Kepercayaan di website.'
      },
      {
        category: 'security',
        question: 'Apa ciri-ciri scam yang paling umum?',
        answer: 'Janji keuntungan, mendesak transfer, minta data sensitif, link palsu.'
      },
      // Risiko & Edukasi
      {
        category: 'risk',
        question: 'Apakah materi TPC Academy adalah sinyal trading?',
        answer: 'Bukan. Materi edukasi untuk pemahaman konsep dan risiko.'
      },
      {
        category: 'risk',
        question: 'Apakah TPC menjamin hasil atau keuntungan?',
        answer: 'Tidak. Tidak ada jaminan keuntungan finansial.'
      },
      {
        category: 'risk',
        question: 'Apa risiko utama saat belajar trading/aset digital?',
        answer: 'Volatilitas harga, emosi, leverage, keputusan impulsif, penipuan.'
      },
      {
        category: 'risk',
        question: 'Apa yang harus saya lakukan sebelum melakukan keputusan finansial?',
        answer: 'Belajar risiko, gunakan dana yang siap ditanggung risikonya, cari info independen.'
      },
      // Akun & Komunikasi Resmi
      {
        category: 'communication',
        question: 'Channel resmi TPC ada di mana?',
        answer: 'Website tpcglobal.io dan Telegram resmi (tautan disediakan).'
      },
      {
        category: 'communication',
        question: 'Bagaimana jika saya menemukan akun tiruan?',
        answer: 'Jangan berinteraksi, laporkan, dan konfirmasi lewat kanal resmi.'
      },
      {
        category: 'communication',
        question: 'Apakah TPC menggunakan pihak ketiga untuk komunikasi?',
        answer: 'Informasi resmi selalu dirangkum di kanal resmi; verifikasi sebelum percaya.'
      },
      // Presale (Aman)
      {
        category: 'presale',
        question: 'Metode partisipasi presale apa saja?',
        answer: 'USDC (on-chain) dan IDR (verifikasi manual) sesuai informasi di presale.'
      },
      {
        category: 'presale',
        question: 'Apakah informasi progress presale menjamin apa pun?',
        answer: 'Tidak. Itu transparansi alokasi, bukan jaminan keuntungan.'
      }
    ]
  },
  en: {
    title: 'Education FAQ: Anti-Scam & Risk',
    subtitle: 'Quick guide to learn safely, understand risks, and avoid scams.',
    disclaimer: 'Educational content only. Not financial advice.',
    meta: {
      title: 'Education FAQ: Anti-Scam & Risk | TPC Global',
      description: 'Educational guidance on safety, anti-scam practices, and risk awareness.'
    },
    quickActions: {
      transparency: 'Check Official Wallet Transparency',
      academy: 'Back to Academy',
      telegram: 'Official Telegram Channel'
    },
    antiScam: {
      title: 'Anti-Scam Rules',
      rules: [
        'TPC never asks for private keys/seed phrases.',
        'Admin will never contact you first via DM.',
        'Use only official domain tpcglobal.io.',
        'Verify wallet addresses on Transparency page.',
        'Beware of short links and impersonation accounts.'
      ]
    },
    categories: {
      security: 'Security & Anti-Scam',
      risk: 'Risk & Education',
      communication: 'Official Accounts & Communication',
      presale: 'Presale (Safe Info)'
    },
    faqs: [
      // Security & Anti-Scam
      {
        category: 'security',
        question: 'Does TPC ever ask for seed phrases or private keys?',
        answer: 'Never. That\'s a sign of scam.'
      },
      {
        category: 'security',
        question: 'Will TPC admin DM me first?',
        answer: 'No. Beware of accounts claiming to be admin and contacting first.'
      },
      {
        category: 'security',
        question: 'How do I ensure a link is official?',
        answer: 'Check domain tpcglobal.io, avoid short links, verify official channels.'
      },
      {
        category: 'security',
        question: 'How do I verify official wallet addresses?',
        answer: 'Match with Transparency & Trust page on the website.'
      },
      {
        category: 'security',
        question: 'What are common scam characteristics?',
        answer: 'Profit promises, urgent transfers, sensitive data requests, fake links.'
      },
      // Risk & Education
      {
        category: 'risk',
        question: 'Is TPC Academy content trading signals?',
        answer: 'No. Educational content for concept and risk understanding.'
      },
      {
        category: 'risk',
        question: 'Does TPC guarantee results or profits?',
        answer: 'No. No financial profit guarantees.'
      },
      {
        category: 'risk',
        question: 'What are main risks when learning trading/digital assets?',
        answer: 'Price volatility, emotions, leverage, impulsive decisions, scams.'
      },
      {
        category: 'risk',
        question: 'What should I do before making financial decisions?',
        answer: 'Learn risks, use funds you can afford to lose, seek independent information.'
      },
      // Official Accounts & Communication
      {
        category: 'communication',
        question: 'Where are TPC\'s official channels?',
        answer: 'Website tpcglobal.io and official Telegram (link provided).'
      },
      {
        category: 'communication',
        question: 'What if I find impersonation accounts?',
        answer: 'Don\'t interact, report them, and confirm through official channels.'
      },
      {
        category: 'communication',
        question: 'Does TPC use third parties for communication?',
        answer: 'Official information is always summarized in official channels; verify before trusting.'
      },
      // Presale (Safe Info)
      {
        category: 'presale',
        question: 'What presale participation methods are available?',
        answer: 'USDC (on-chain) and IDR (manual verification) according to presale information.'
      },
      {
        category: 'presale',
        question: 'Does presale progress information guarantee anything?',
        answer: 'No. It\'s allocation transparency, not profit guarantee.'
      }
    ]
  }
};

export default function AcademyFAQPage({ params }: AcademyFAQPageProps) {
  const lang = normalizeLang(params.lang);
  const copy = faqCopy[lang];

  // Group FAQs by category
  const groupedFAQs = copy.faqs.reduce((acc, faq) => {
    if (!acc[faq.category]) {
      acc[faq.category] = [];
    }
    acc[faq.category].push(faq);
    return acc;
  }, {} as Record<string, typeof copy.faqs>);

  return (
    <PremiumShell>
      {/* HERO SECTION */}
      <Section className="pt-12 pb-16 bg-gradient-to-b from-[#0B0E11] via-[#1A1F2E] to-[#0B0E11] relative w-full max-w-full overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <Container className="relative z-10">
          <PremiumCard variant="glass" className="text-center p-12 md:p-16 lg:p-20">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-fg mb-8 md:mb-12 leading-tight tracking-tight">
                {copy.title}
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed">
                {copy.subtitle}
              </p>
              
              {/* Disclaimer */}
              <p className="text-xs text-gray-400 text-center max-w-2xl mx-auto">
                {copy.disclaimer}
              </p>
            </div>
          </PremiumCard>
        </Container>
      </Section>

      {/* Section Divider */}
      <div className="border-t border-border/10"></div>

      {/* QUICK ACTIONS SECTION */}
      <Section className="py-12 bg-[#0B0E11] relative w-full max-w-full overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239CA3AF' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-10 w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {lang === 'id' ? 'Aksi Cepat' : 'Quick Actions'}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Transparency Link */}
            <PremiumCard className="border border-gray-700 bg-[#1A1F2E] hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden group">
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <PremiumCardContent className="p-6 relative z-10">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-amber-400">🔍</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {copy.quickActions.transparency}
                  </h3>
                  <PremiumButton 
                    href={publicPath(lang, '/transparency')}
                    size="md"
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white border-0 shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold"
                  >
                    {lang === 'id' ? 'Cek Sekarang' : 'Check Now'}
                  </PremiumButton>
                </div>
              </PremiumCardContent>
            </PremiumCard>

            {/* Academy Link */}
            <PremiumCard className="border border-gray-700 bg-[#1A1F2E] hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden group">
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <PremiumCardContent className="p-6 relative z-10">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-blue-400">📚</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {copy.quickActions.academy}
                  </h3>
                  <PremiumButton 
                    href={publicPath(lang, '/academy')}
                    size="md"
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold"
                  >
                    {lang === 'id' ? 'Kembali' : 'Go Back'}
                  </PremiumButton>
                </div>
              </PremiumCardContent>
            </PremiumCard>

            {/* Telegram Link */}
            <PremiumCard className="border border-gray-700 bg-[#1A1F2E] hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden group">
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <PremiumCardContent className="p-6 relative z-10">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-green-400">💬</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {copy.quickActions.telegram}
                  </h3>
                  <a
                    href="https://t.me/tpcglobalcommunity"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold"
                  >
                    {lang === 'id' ? 'Buka Telegram' : 'Open Telegram'}
                  </a>
                </div>
              </PremiumCardContent>
            </PremiumCard>
          </div>
        </Container>
      </Section>

      {/* Section Divider */}
      <div className="border-t border-border/10"></div>

      {/* ANTI-SCAM RULES SECTION */}
      <Section className="py-12 bg-gradient-to-b from-[#0B0E11] to-[#1A1F2E] relative w-full max-w-full overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-amber-500/5"></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-10 w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {copy.antiScam.title}
            </h2>
          </div>
          
          <PremiumCard className="border-2 border-red-500/30 bg-red-500/5 hover:border-red-500/50 transition-all duration-300 relative overflow-hidden max-w-3xl mx-auto">
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 transition-opacity duration-300"></div>
            
            <PremiumCardContent className="p-8 relative z-10">
              <div className="space-y-4">
                {copy.antiScam.rules.map((rule, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {rule}
                    </p>
                  </div>
                ))}
              </div>
            </PremiumCardContent>
          </PremiumCard>
        </Container>
      </Section>

      {/* Section Divider */}
      <div className="border-t border-border/10"></div>

      {/* FAQ SECTION */}
      <Section className="py-12 bg-[#0B0E11] relative w-full max-w-full overflow-hidden pb-24">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239CA3AF' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-10 w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {lang === 'id' ? 'Pertanyaan Umum' : 'Frequently Asked Questions'}
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {Object.entries(groupedFAQs).map(([category, faqs]) => (
              <div key={category}>
                <h3 className="text-xl font-semibold text-amber-400 mb-4">
                  {copy.categories[category as keyof typeof copy.categories]}
                </h3>
                <Accordion items={faqs} />
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </PremiumShell>
  );
}

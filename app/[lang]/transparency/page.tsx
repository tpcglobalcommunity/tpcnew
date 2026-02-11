import { normalizeLang, type LangParams } from "@/lib/lang-helpers";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PremiumCard, PremiumCardContent } from "@/components/ui/PremiumCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { PublicPageNav } from "@/components/navigation/PublicPageNav";
import { Metadata } from "next";
import Link from "next/link";

interface TransparencyPageProps {
  params: Promise<LangParams>;
}

export function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'id' }
  ];
}

export async function generateMetadata({ params }: { params: Promise<LangParams> }): Promise<Metadata> {
  const { lang } = await params;
  const normalizedLang = normalizeLang(lang);
  const copy = transparencyCopy[normalizedLang as keyof typeof transparencyCopy];
  
  return {
    title: copy.title,
    description: copy.subtitle,
    keywords: 'TPC Global, transparency, trust, governance, DAO, anti-scam, community',
    authors: [{ name: 'TPC Global' }],
    creator: 'TPC Global',
    publisher: 'TPC Global',
    openGraph: {
      title: copy.title,
      description: copy.subtitle,
      type: "website",
      locale: lang === 'id' ? 'id_ID' : 'en_US',
      siteName: 'TPC Global',
      images: [
        {
          url: 'https://tpcglobal.io/og-transparency.jpg',
          width: 1200,
          height: 630,
          alt: copy.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: copy.title,
      description: copy.subtitle,
      images: ['https://tpcglobal.io/og-transparency.jpg'],
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

// Transparency Content Dictionary
const transparencyCopy = {
  id: {
    title: 'Transparansi & Kepercayaan Publik — TPC',
    subtitle: 'Transparansi adalah fondasi TPC. Kami membangun komunitas berdasarkan kepercayaan, pendidikan, dan tata kelola yang terbuka.',
    hero: {
      badge: 'Transparency & Trust',
      title: 'Transparansi & Kepercayaan Publik',
      subtitle: 'TPC memposisikan diri sebagai komunitas education-first yang mengutamakan transparansi penuh dalam setiap aspek operasional.',
      disclaimer: 'TPC bukan instrumen investasi dan tidak menjanjikan keuntungan finansial.'
    },
    principles: {
      title: 'Prinsip Transparansi',
      education: {
        title: 'Education-first',
        description: 'Pendidikan trading yang bertanggung jawab menjadi prioritas utama kami.'
      },
      transparency: {
        title: 'Transparency-first',
        description: 'Semua operasional dan keputusan dapat diakses publik secara terbuka.'
      },
      governance: {
        title: 'Community governance',
        description: 'Tata kelola berbasis komunitas dengan partisipasi anggota yang aktif.'
      }
    },
    infrastructure: {
      title: 'Infrastruktur Blockchain',
      description: 'TPC memanfaatkan teknologi blockchain untuk transparansi pencatatan dan verifikasi, dengan tetap menekankan bahwa platform ini berfokus pada edukasi dan komunitas.'
    },
    funds: {
      title: 'Struktur Dana & Pengelolaan',
      description: 'Dana presale digunakan untuk pengembangan platform, pendidikan, dan infrastruktur komunitas.',
      uses: [
        'Pengembangan platform trading education',
        'Infrastruktur teknologi dan keamanan',
        'Program pendidikan komunitas',
        'Operasional DAO dan governance',
        'Layanan dukungan anggota'
      ],
      disclaimer: 'Tidak ada pembagian keuntungan finansial otomatis dan tidak ada jaminan hasil.'
    },
    wallets: {
      title: 'Wallet Publik (Read-Only)',
      description: 'Alamat wallet ditampilkan untuk transparansi. Tidak ada permintaan transfer manual dan tidak ada DM resmi.',
      treasury: {
        name: 'Treasury Wallet',
        address: '0x1234...5678',
        purpose: 'Dana utama operasional'
      },
      liquidity: {
        name: 'Liquidity Wallet',
        address: '0x8765...4321',
        purpose: 'Likuidasi platform'
      },
      development: {
        name: 'Development Wallet',
        address: '0x9876...1234',
        purpose: 'Pengembangan teknologi'
      },
      warning: 'Hanya transfer melalui website resmi. Jangan pernah transfer ke alamat yang diminta melalui DM.'
    },
    dao: {
      title: 'DAO & Pengambilan Keputusan',
      description: 'Sistem tata kelola terdesentralisasi dengan partisipasi komunitas.',
      features: [
        'Proposal berbasis komunitas',
        'Diskusi terbuka untuk semua anggota',
        'Voting partisipatif dengan bobot yang adil',
        'Semua keputusan dicatat secara transparan',
        'Implementasi otomatis untuk proposal yang disetujui'
      ]
    },
    antiScam: {
      title: 'Anti-Scam Policy',
      warning: 'KEAMANAN ANDA ADALAH PRIORITAS KAMI',
      rules: [
        'TPC tidak pernah DM lebih dulu',
        'TPC tidak pernah meminta private key',
        'TPC tidak pernah menjanjikan profit/ROI/APY',
        'TPC tidak ada jaminan finansial',
        'Semua informasi hanya melalui website resmi',
        'Tidak ada program investasi dengan jaminan tetap'
      ]
    },
    risks: {
      title: 'Batasan & Risiko',
      description: 'Partisipasi dalam komunitas memiliki risiko yang perlu dipahami.',
      items: [
        'Risiko teknologi blockchain dan smart contract',
        'Risiko partisipasi dalam tata kelola komunitas',
        'Risiko perubahan roadmap dan implementasi',
        'Risiko volatilitas pasar aset digital',
        'Risiko keamanan dan privasi data'
      ],
      disclaimer: 'Pengguna bertanggung jawab atas keputusan dan risiko yang diambil sendiri.'
    },
    cta: {
      back: 'Kembali ke Beranda',
      dao: 'Pelajari DAO'
    }
  },
  en: {
    title: 'Transparency & Trust — TPC',
    subtitle: 'Transparency is the foundation of TPC. We build a community based on trust, education, and open governance.',
    hero: {
      badge: 'Transparency & Trust',
      title: 'Transparency & Public Trust',
      subtitle: 'TPC positions itself as an education-first community that prioritizes full transparency in all operational aspects.',
      disclaimer: 'TPC is not an investment instrument and does not guarantee financial returns.'
    },
    principles: {
      title: 'Transparency Principles',
      education: {
        title: 'Education-first',
        description: 'Responsible trading education is our top priority.'
      },
      transparency: {
        title: 'Transparency-first',
        description: 'All operations and decisions are publicly accessible and open.'
      },
      governance: {
        title: 'Community governance',
        description: 'Community-based governance with active member participation.'
      }
    },
    infrastructure: {
      title: 'Blockchain Infrastructure',
      description: 'TPC utilizes blockchain technology for transparent recording and verification, while emphasizing that this platform focuses on education and community.'
    },
    funds: {
      title: 'Fund Structure & Management',
      description: 'Presale funds are used for platform development, education, and community infrastructure.',
      uses: [
        'Trading education platform development',
        'Technology and security infrastructure',
        'Community education programs',
        'DAO operations and governance',
        'Member support services'
      ],
      disclaimer: 'No automatic financial profit sharing and no guaranteed returns.'
    },
    wallets: {
      title: 'Public Wallets (Read-Only)',
      description: 'Wallet addresses are shown for transparency. No manual transfer requests and no official DMs.',
      treasury: {
        name: 'Treasury Wallet',
        address: '0x1234...5678',
        purpose: 'Main operational funds'
      },
      liquidity: {
        name: 'Liquidity Wallet',
        address: '0x8765...4321',
        purpose: 'Platform liquidity'
      },
      development: {
        name: 'Development Wallet',
        address: '0x9876...1234',
        purpose: 'Technology development'
      },
      warning: 'Only transfer through official website. Never transfer to addresses requested via DM.'
    },
    dao: {
      title: 'DAO & Decision Making',
      description: 'Decentralized governance system with community participation.',
      features: [
        'Community-based proposals',
        'Open discussion for all members',
        'Participatory voting with fair weight',
        'Transparent recording of all decisions',
        'Automatic implementation of approved proposals'
      ]
    },
    antiScam: {
      title: 'Anti-Scam Policy',
      warning: 'YOUR SECURITY IS OUR PRIORITY',
      rules: [
        'TPC never DMs first',
        'TPC never asks for private keys',
        'TPC never promises profit/ROI/APY',
        'TPC has no financial guarantees',
        'All information only through official website',
        'No guaranteed investment programs'
      ]
    },
    risks: {
      title: 'Limitations & Risks',
      description: 'Community participation involves risks that need to be understood.',
      items: [
        'Blockchain technology and smart contract risks',
        'Community governance participation risks',
        'Roadmap changes and implementation risks',
        'Digital asset market volatility risks',
        'Security and privacy data risks'
      ],
      disclaimer: 'Users are responsible for their own decisions and assumed risks.'
    },
    cta: {
      back: 'Back to Home',
      dao: 'Learn DAO'
    }
  }
};

export default async function TransparencyPage({ params }: TransparencyPageProps) {
  const { lang } = await params;
  const normalizedLang = normalizeLang(lang);
  const copy = transparencyCopy[normalizedLang];

  return (
    <PremiumShell>
      <PublicPageNav currentLang={lang} />

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
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              {copy.hero.subtitle}
            </p>
            
            {/* Disclaimer */}
            <p className="text-sm text-gray-400 mb-12 max-w-2xl mx-auto">
              {copy.hero.disclaimer}
            </p>
          </div>
        </Container>
      </Section>

      {/* TRANSPARENCY PRINCIPLES */}
      <Section className="py-16 bg-[#0B0E11] relative w-full max-w-full overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {copy.principles.title}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Education-first */}
              <PremiumCard className="border border-green-500/20 bg-white/5 rounded-2xl overflow-hidden hover:border-green-500/40 transition-all duration-300">
                <PremiumCardContent className="p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-green-400 mb-3">{copy.principles.education.title}</h3>
                    <p className="text-gray-300">{copy.principles.education.description}</p>
                  </div>
                </PremiumCardContent>
              </PremiumCard>

              {/* Transparency-first */}
              <PremiumCard className="border border-blue-500/20 bg-white/5 rounded-2xl overflow-hidden hover:border-blue-500/40 transition-all duration-300">
                <PremiumCardContent className="p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-blue-400 mb-3">{copy.principles.transparency.title}</h3>
                    <p className="text-gray-300">{copy.principles.transparency.description}</p>
                  </div>
                </PremiumCardContent>
              </PremiumCard>

              {/* Community governance */}
              <PremiumCard className="border border-purple-500/20 bg-white/5 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all duration-300">
                <PremiumCardContent className="p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-purple-400 mb-3">{copy.principles.governance.title}</h3>
                    <p className="text-gray-300">{copy.principles.governance.description}</p>
                  </div>
                </PremiumCardContent>
              </PremiumCard>
            </div>
          </div>
        </Container>
      </Section>

      {/* FUNDS STRUCTURE */}
      <Section className="py-16 bg-gradient-to-b from-[#0B0E11] to-[#1A1F2E] relative w-full max-w-full overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {copy.funds.title}
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
                {copy.funds.description}
              </p>
            </div>
            
            <PremiumCard className="border border-amber-500/20 bg-white/5 rounded-2xl overflow-hidden">
              <PremiumCardContent className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-amber-400 mb-6">Penggunaan Dana</h3>
                    <ul className="space-y-3">
                      {copy.funds.uses.map((use, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300">{use}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-4 mb-6">
                      <p className="text-red-400 text-sm font-medium text-center">
                        {copy.funds.disclaimer}
                      </p>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Dana dielola secara transparan dengan tujuan utama mendukung ekosistem pendidikan dan komunitas, bukan untuk keuntungan finansial individual.
                    </p>
                  </div>
                </div>
              </PremiumCardContent>
            </PremiumCard>
          </div>
        </Container>
      </Section>

      {/* PUBLIC WALLETS */}
      <Section className="py-16 bg-[#0B0E11] relative w-full max-w-full overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {copy.wallets.title}
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
                {copy.wallets.description}
              </p>
            </div>
            
            <div className="space-y-6">
              {/* Treasury Wallet */}
              <PremiumCard className="border border-gray-700/30 bg-white/5 rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2zm0 8c1.11 0 2 .89 2 2s-.89 2-2 2-2-.89-2-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{copy.wallets.treasury.name}</h3>
                      <p className="text-gray-400 text-sm">{copy.wallets.treasury.purpose}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <code className="text-gray-400 text-sm bg-gray-800 px-3 py-1 rounded">
                      {copy.wallets.treasury.address}
                    </code>
                  </div>
                </div>
              </PremiumCard>

              {/* Liquidity Wallet */}
              <PremiumCard className="border border-gray-700/30 bg-white/5 rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v4a3 3 0 003 3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{copy.wallets.liquidity.name}</h3>
                      <p className="text-gray-400 text-sm">{copy.wallets.liquidity.purpose}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <code className="text-gray-400 text-sm bg-gray-800 px-3 py-1 rounded">
                      {copy.wallets.liquidity.address}
                    </code>
                  </div>
                </div>
              </PremiumCard>

              {/* Development Wallet */}
              <PremiumCard className="border border-gray-700/30 bg-white/5 rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 16m-2-18h4m2 14h4M5 10h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{copy.wallets.development.name}</h3>
                      <p className="text-gray-400 text-sm">{copy.wallets.development.purpose}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <code className="text-gray-400 text-sm bg-gray-800 px-3 py-1 rounded">
                      {copy.wallets.development.address}
                    </code>
                  </div>
                </div>
              </PremiumCard>
            </div>

            {/* Warning */}
            <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-4 mt-6">
              <p className="text-red-400 text-center font-medium">
                {copy.wallets.warning}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* DAO & DECISION MAKING */}
      <Section className="py-16 bg-gradient-to-b from-[#0B0E11] to-[#1A1F2E] relative w-full max-w-full overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {copy.dao.title}
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
                {copy.dao.description}
              </p>
            </div>
            
            <PremiumCard className="border border-purple-500/20 bg-white/5 rounded-2xl overflow-hidden">
              <PremiumCardContent className="p-8 md:p-12">
                <ul className="space-y-4">
                  {copy.dao.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-purple-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </PremiumCardContent>
            </PremiumCard>
          </div>
        </Container>
      </Section>

      {/* ANTI-SCAM POLICY */}
      <Section className="py-16 bg-[#0B0E11] relative w-full max-w-full overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full mb-6">
                <svg className="w-5 h-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-red-400 text-sm font-semibold">{copy.antiScam.warning}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {copy.antiScam.title}
              </h2>
            </div>
            
            <PremiumCard className="border border-red-500/20 bg-white/5 rounded-2xl overflow-hidden">
              <PremiumCardContent className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {copy.antiScam.rules.map((rule, index) => (
                    <div key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-red-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-gray-300 font-medium">{rule}</span>
                    </div>
                  ))}
                </div>
              </PremiumCardContent>
            </PremiumCard>
          </div>
        </Container>
      </Section>

      {/* RISKS & LIMITATIONS */}
      <Section className="py-16 bg-gradient-to-b from-[#0B0E11] to-[#1A1F2E] relative w-full max-w-full overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {copy.risks.title}
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
                {copy.risks.description}
              </p>
            </div>
            
            <PremiumCard className="border border-yellow-500/20 bg-white/5 rounded-2xl overflow-hidden">
              <PremiumCardContent className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-yellow-400 mb-6">Risiko Utama</h3>
                    <ul className="space-y-3">
                      {copy.risks.items.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                          </svg>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-xl p-4">
                      <p className="text-yellow-400 text-sm font-medium text-center">
                        {copy.risks.disclaimer}
                      </p>
                    </div>
                    <p className="text-gray-400 text-sm mt-4">
                      Partisipasi dalam komunitas TPC Global adalah keputusan pribadi. Pastikan Anda memahami risiko yang terkait dan hanya berpartisipasi sesuai kemampuan Anda.
                    </p>
                  </div>
                </div>
              </PremiumCardContent>
            </PremiumCard>
          </div>
        </Container>
      </Section>

      {/* FOOTER CTA */}
      <Section className="py-16 bg-[#0B0E11] relative w-full max-w-full overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href={`/${lang}`} className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-2xl hover:border-gray-500 hover:text-white transition-colors duration-300">
                  {copy.cta.back}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </Link>
                <Link href={`/${lang}/dao`} className="inline-flex items-center px-8 py-4 bg-amber-500 text-black font-semibold rounded-2xl hover:bg-amber-400 transition-colors duration-300">
                  {copy.cta.dao}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <p className="text-sm text-gray-400 max-w-2xl mx-auto">
                Transparansi membangun kepercayaan. Kepercayaan membangun komunitas yang kuat.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </PremiumShell>
  );
}
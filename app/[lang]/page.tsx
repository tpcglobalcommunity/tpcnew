import { normalizeLang, type LangParams } from "@/lib/lang-helpers";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PremiumCard, PremiumCardContent } from "@/components/ui/PremiumCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { Metadata } from "next";
import Link from "next/link";

interface HomePageProps {
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
  const copy = homeCopy[normalizedLang];
  
  return {
    title: copy.title,
    description: copy.subtitle,
    keywords: 'TPC Global, komunitas edukasi, transparansi, DAO, trading education',
    authors: [{ name: 'TPC Global' }],
    creator: 'TPC Global',
    publisher: 'TPC Global',
    alternates: {
      canonical: `https://www.tpcglobal.io/${normalizedLang}`,
      languages: {
        "id-ID": `https://www.tpcglobal.io/id`,
        "en-US": `https://www.tpcglobal.io/en`,
      },
    },
    openGraph: {
      title: copy.title,
      description: copy.subtitle,
      type: "website",
      locale: lang === 'id' ? 'id_ID' : 'en_US',
      siteName: 'TPC Global',
      images: [
        {
          url: `https://www.tpcglobal.io/og-${normalizedLang}.png`,
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
      images: [`https://www.tpcglobal.io/og-${normalizedLang}.png`],
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

// Home Content Dictionary
const homeCopy = {
  id: {
    title: 'TPC — Komunitas Trader Profesional',
    subtitle: 'Komunitas edukasi trading yang berfokus pada transparansi dan etika.',
    hero: {
      badge: 'KOMUNITAS EDUKASI',
      title: 'TPC',
      subtitle: 'Komunitas Trader Profesional',
      description: 'TPC adalah komunitas trader profesional yang berfokus pada edukasi, transparansi, dan etika.',
      disclaimer: 'Materi bersifat edukatif dan bukan nasihat investasi atau keuangan.'
    },
    trust: {
      education: '🎓 Education-first',
      transparency: '🔍 Transparansi on-chain',
      governance: '🧭 Komunitas, bukan instrumen investasi',
      protection: '🛡️ Anti-scam sejak desain awal'
    },
    whatIs: 'TPC adalah komunitas trader profesional yang berfokus pada edukasi, transparansi, dan etika. Kami tidak menjanjikan hasil, tidak menawarkan skema cepat kaya, dan mendorong literasi risiko.',
    infrastructure: 'TPC menggunakan teknologi blockchain untuk mendukung transparansi dan pencatatan yang dapat diverifikasi.',
    presale: 'Presale dirancang sebagai mekanisme akses komunitas, bukan skema spekulasi.',
    academy: {
      title: 'Edukasi Trading',
      items: [
        'Edukasi trading Gold & Bitcoin',
        'Manajemen risiko',
        'Psikologi & disiplin trader',
        'Etika & literasi finansial'
      ]
    },
    dao: 'TPC mengadopsi model DAO untuk mendorong partisipasi komunitas dalam transparansi.',
    quickAccess: {
      dao: 'Lihat DAO',
      presale: 'Pelajari Presale',
      academy: 'Masuk Komunitas',
      transparency: 'Transparansi'
    },
    safety: [
      'TPC tidak pernah DM lebih dulu',
      'TPC tidak pernah meminta private key',
      'Informasi resmi hanya melalui website'
    ],
    cta: {
      faq: 'Baca FAQ',
      transparency: 'Transparansi & Kepercayaan'
    }
  },
  en: {
    title: 'TPC — Professional Trader Community',
    subtitle: 'Trading education community focused on transparency and ethics.',
    hero: {
      badge: 'EDUCATION COMMUNITY',
      title: 'TPC',
      subtitle: 'Professional Trader Community',
      description: 'TPC is a professional trader community focused on education, transparency, and ethics.',
      disclaimer: 'Materials are for educational purposes and not investment or financial advice.'
    },
    trust: {
      education: '🎓 Education-first',
      transparency: '🔍 On-chain transparency',
      governance: '🧭 Community, not investment instrument',
      protection: '🛡️ Anti-scam by design'
    },
    whatIs: 'TPC is a professional trader community focused on education, transparency, and ethics. We do not promise results, do not offer get-rich-quick schemes, and promote risk literacy.',
    infrastructure: 'TPC uses blockchain technology to support transparency and verifiable record-keeping.',
    presale: 'Presale is designed as a community access mechanism, not a speculative scheme.',
    academy: {
      title: 'Trading Education',
      items: [
        'Gold & Bitcoin trading education',
        'Risk management',
        'Trading psychology & discipline',
        'Ethics & financial literacy'
      ]
    },
    dao: 'TPC adopts a DAO model to encourage community participation in transparency.',
    quickAccess: {
      dao: 'View DAO',
      presale: 'Learn Presale',
      academy: 'Join Community',
      transparency: 'Transparency'
    },
    safety: [
      'TPC never DMs first',
      'TPC never asks for private keys',
      'Official information only through website'
    ],
    cta: {
      faq: 'Read FAQ',
      transparency: 'Transparency & Trust'
    }
  }
};

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;
  const normalizedLang = normalizeLang(lang);
  const copy = homeCopy[normalizedLang];

  return (
    <PremiumShell>
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
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${lang}/presale`} className="inline-flex items-center px-8 py-4 bg-amber-500 text-black font-semibold rounded-2xl hover:bg-amber-400 transition-colors duration-300">
                {copy.quickAccess.presale}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href={`/${lang}/academy`} className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-2xl hover:border-gray-500 hover:text-white transition-colors duration-300">
                {copy.quickAccess.academy}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* TRUST STRIP */}
      <Section className="py-12 bg-[#0B0E11] relative w-full max-w-full overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-white font-semibold mb-2">{copy.trust.education}</h3>
                <p className="text-gray-400 text-sm">Fokus pembelajaran, bukan sinyal instan</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-white font-semibold mb-2">{copy.trust.transparency}</h3>
                <p className="text-gray-400 text-sm">Semua aktivitas dapat diverifikasi</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧭</span>
                </div>
                <h3 className="text-white font-semibold mb-2">{copy.trust.governance}</h3>
                <p className="text-gray-400 text-sm">Komunitas, bukan instrumen investasi</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-white font-semibold mb-2">{copy.trust.protection}</h3>
                <p className="text-gray-400 text-sm">Anti-scam sejak desain awal</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* WHAT IS TPC */}
      <Section className="py-16 bg-gradient-to-b from-[#0B0E11] to-[#1A1F2E] relative w-full max-w-full overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Apa itu TPC?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {copy.whatIs}
            </p>
          </div>
        </Container>
      </Section>

      {/* INFRASTRUCTURE & TRANSPARANSI */}
      <Section className="py-16 bg-gradient-to-b from-[#0B0E11] to-[#1A1F2E] relative w-full max-w-full overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Infrastruktur & Transparansi
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              {copy.infrastructure}
            </p>
            <Link 
              href={`/${normalizedLang}/transparency`}
              className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors duration-300"
            >
              Lihat Transparansi
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </Container>
      </Section>

      {/* QUICK ACCESS */}
      <Section className="py-16 bg-[#0B0E11] relative w-full max-w-full overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Akses Cepat
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Link href={`/${lang}/dao`} className="block">
                <PremiumCard className="border border-purple-500/20 bg-white/5 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all duration-300">
                  <PremiumCardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🧭</span>
                      </div>
                      <h3 className="text-xl font-bold text-purple-400 mb-3">{copy.quickAccess.dao}</h3>
                      <p className="text-gray-300">Partisipasi komunitas</p>
                    </div>
                  </PremiumCardContent>
                </PremiumCard>
              </Link>

              <Link href={`/${lang}/presale`} className="block">
                <PremiumCard className="border border-amber-500/20 bg-white/5 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all duration-300">
                  <PremiumCardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🎫</span>
                      </div>
                      <h3 className="text-xl font-bold text-amber-400 mb-3">{copy.quickAccess.presale}</h3>
                      <p className="text-gray-300">Mekanisme akses komunitas</p>
                    </div>
                  </PremiumCardContent>
                </PremiumCard>
              </Link>

              <Link href={`/${lang}/academy`} className="block">
                <PremiumCard className="border border-green-500/20 bg-white/5 rounded-2xl overflow-hidden hover:border-green-500/40 transition-all duration-300">
                  <PremiumCardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🎓</span>
                      </div>
                      <h3 className="text-xl font-bold text-green-400 mb-3">{copy.quickAccess.academy}</h3>
                      <p className="text-gray-300">Edukasi trading</p>
                    </div>
                  </PremiumCardContent>
                </PremiumCard>
              </Link>

              <Link href={`/${lang}/transparency`} className="block">
                <PremiumCard className="border border-blue-500/20 bg-white/5 rounded-2xl overflow-hidden hover:border-blue-500/40 transition-all duration-300">
                  <PremiumCardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🔍</span>
                      </div>
                      <h3 className="text-xl font-bold text-blue-400 mb-3">{copy.quickAccess.transparency}</h3>
                      <p className="text-gray-300">Transparansi on-chain</p>
                    </div>
                  </PremiumCardContent>
                </PremiumCard>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* PRESALE SOFT INTRO */}
      <Section className="py-16 bg-gradient-to-b from-[#0B0E11] to-[#1A1F2E] relative w-full max-w-full overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Presale Komunitas
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              {copy.presale}
            </p>
            <Link 
              href={`/${normalizedLang}/presale`}
              className="inline-flex items-center px-8 py-4 bg-amber-500 text-black font-semibold rounded-2xl hover:bg-amber-400 transition-colors duration-300"
            >
              {copy.quickAccess.presale}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </Container>
      </Section>

      {/* ACADEMY & EDUKASI */}
      <Section className="py-16 bg-[#0B0E11] relative w-full max-w-full overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {copy.academy.title}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {copy.academy.items.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📚</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* DAO LITE & PARTISIPASI */}
      <Section className="py-16 bg-gradient-to-b from-[#0B0E11] to-[#1A1F2E] relative w-full max-w-full overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              DAO Lite & Partisipasi
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              {copy.dao}
            </p>
            <Link 
              href={`/${normalizedLang}/dao`}
              className="inline-flex items-center px-8 py-4 bg-purple-500 text-white font-semibold rounded-2xl hover:bg-purple-600 transition-colors duration-300"
            >
              {copy.quickAccess.dao}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </Container>
      </Section>
      <Section className="py-16 bg-[#0B0E11] relative w-full max-w-full overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239CA3AF' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {normalizedLang === 'id' ? 'Transparansi & Kepercayaan' : 'Transparency & Trust'}
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                {normalizedLang === 'id' 
                  ? 'Pusat informasi publik tentang kebijakan, alokasi, dan standar keamanan TPC Global.'
                  : 'Public information hub for policies, allocation overview, and TPC Global security standards.'
                }
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PremiumCard className="border border-blue-500/20 bg-white/5 rounded-2xl overflow-hidden hover:border-blue-500/40 transition-all duration-300">
                <PremiumCardContent className="p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-blue-400 mb-3">
                      {normalizedLang === 'id' ? 'Struktur Presale' : 'Presale Structure'}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {normalizedLang === 'id' 
                        ? 'Tahap, harga, dan alokasi token presale ditampilkan secara transparan.'
                        : 'Stages, pricing, and token allocation displayed transparently.'
                      }
                    </p>
                    <Link 
                      href={`/${normalizedLang}/presale`}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-300 mt-4"
                    >
                      {normalizedLang === 'id' ? 'Lihat Detail Presale' : 'View Presale Details'}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                  </div>
                </PremiumCardContent>
              </PremiumCard>
              
              <PremiumCard className="border border-green-500/20 bg-white/5 rounded-2xl overflow-hidden hover:border-green-500/40 transition-all duration-300">
                <PremiumCardContent className="p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-green-400 mb-3">
                      {normalizedLang === 'id' ? 'Tata Kelola Komunitas' : 'Community Governance'}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {normalizedLang === 'id' 
                        ? 'Sistem DAO Lite dengan partisipasi komunitas yang terbuka.'
                        : 'DAO Lite system with open community participation.'
                      }
                    </p>
                    <Link 
                      href={`/${normalizedLang}/dao`}
                      className="inline-flex items-center text-green-400 hover:text-green-300 text-sm font-medium transition-colors duration-300 mt-4"
                    >
                      {normalizedLang === 'id' ? 'Pelajari DAO' : 'Learn DAO'}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </PremiumCardContent>
              </PremiumCard>
              
              <PremiumCard className="border border-amber-500/20 bg-white/5 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all duration-300">
                <PremiumCardContent className="p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-2a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-4M13 20H7m10 0v6m0-6L10 14" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-amber-400 mb-3">
                      {normalizedLang === 'id' ? 'Kebijakan & Disclosure' : 'Policies & Disclosure'}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {normalizedLang === 'id' 
                        ? 'Kebijakan resmi, risiko, dan informasi legal.'
                        : 'Official policies, risks, and legal information.'
                      }
                    </p>
                    <Link 
                      href={`/${normalizedLang}/risk-disclosure`}
                      className="inline-flex items-center text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors duration-300 mt-4"
                    >
                      {normalizedLang === 'id' ? 'Lihat Kebijakan' : 'View Policies'}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                  </div>
                </PremiumCardContent>
              </PremiumCard>
            </div>
          </div>
        </Container>
      </Section>

      {/* START FROM EDUCATION SECTION */}
      <Section className="py-16 bg-gradient-to-b from-[#0B0E11] to-[#1A1F2E] relative w-full max-w-full overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-blue-500/5"></div>
        
        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {normalizedLang === 'id' ? 'Mulai dari Edukasi' : 'Start with Education'}
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                {normalizedLang === 'id' 
                  ? 'Bergabung dengan komunitas edukasi untuk meningkatkan pemahaman trading Anda.'
                  : 'Join educational communities to enhance your trading knowledge.'
                }
              </p>
            </div>
            
            <div className="relative w-full mx-auto max-w-md mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg blur-lg opacity-50"></div>
              <PremiumButton 
                href={`/${normalizedLang}/academy`}
                size="lg"
                fullWidth
                className="relative bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white border-0 shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold"
              >
                {normalizedLang === 'id' ? 'Kunjungi Academy' : 'Visit Academy'}
              </PremiumButton>
            </div>
          </div>
        </Container>
      </Section>

      {/* SAFETY & ANTI-SCAM */}
      <Section className="py-16 bg-gradient-to-b from-[#0B0E11] to-[#1A1F2E] relative w-full max-w-full overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full mb-6">
                <svg className="w-5 h-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-red-400 text-sm font-semibold">Keamanan & Anti-Scam</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Keamanan Anda Adalah Prioritas
              </h2>
            </div>
            
            <PremiumCard className="border border-red-500/20 bg-white/5 rounded-2xl overflow-hidden">
              <PremiumCardContent className="p-8">
                <ul className="space-y-4">
                  {copy.safety.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-red-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-gray-300 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
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
              <Link href={`/${lang}/faq`} className="inline-flex items-center px-8 py-4 bg-amber-500 text-black font-semibold rounded-2xl hover:bg-amber-400 transition-colors duration-300 mb-6">
                {copy.cta.faq}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.651 1.916-2.878 3.514-3.578l3.876-5.814a1 1 0 00-1.414-1.414l-3.876 5.814a4 4 0 00-5.656 0L4.343 8.343a1 1 0 00-1.414 1.414l2.829 2.829a1 1 0 001.414 0l4.242-4.242a1 1 0 001.414 0z" />
                </svg>
              </Link>
              <Link href={`/${lang}/transparency`} className="inline-flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                {copy.cta.transparency}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </PremiumShell>
  );
}

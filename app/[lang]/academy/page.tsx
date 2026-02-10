import { normalizeLang, type LangParams } from "@/lib/lang-helpers";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PremiumCard, PremiumCardContent } from "@/components/ui/PremiumCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { Metadata } from "next";
import Link from "next/link";

interface AcademyPageProps {
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
  const copy = academyCopy[normalizedLang];
  
  return {
    title: `${copy.title} | TPC Global`,
    description: copy.subtitle,
    keywords: 'TPC Global, academy, trading education, risk management, market analysis',
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
          url: 'https://tpcglobal.io/og-academy.jpg',
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
      images: ['https://tpcglobal.io/og-academy.jpg'],
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

// Academy Content Dictionary
const academyCopy = {
  id: {
    title: 'TPC Academy',
    subtitle: 'Pusat edukasi trading & literasi aset digital—fokus pada pemahaman risiko, disiplin, dan praktik yang bertanggung jawab.',
    hero: {
      badge: 'TPC Academy',
      title: 'Pusat Edukasi Trading',
      subtitle: 'Platform pembelajaran komprehensif untuk trader profesional dengan fokus pada pengelolaan risiko dan disiplin.',
      disclaimer: 'Materi bersifat edukasi dan tidak merupakan nasihat finansial.'
    },
    trust: {
      education: 'Education-first',
      transparency: 'Transparency-first', 
      governance: 'Community governance'
    },
    tracks: {
      title: 'Jejang Pembelajaran',
      beginner: {
        title: 'Beginner Track',
        description: 'Dasar-dasar trading untuk pemula',
        items: [
          'Pengenalan pasar dan struktur market',
          'Manajemen risiko fundamental',
          'Cara membuat trading journal'
        ],
        tag: 'Self-paced'
      },
      intermediate: {
        title: 'Intermediate Track', 
        description: 'Strategi trading tingkat menengah',
        items: [
          'Analisis konfluensi level harga',
          'Eksekusi trading yang disiplin',
          'Psychology trading dasar'
        ],
        tag: 'Self-paced'
      },
      advanced: {
        title: 'Advanced Track',
        description: 'Sistem trading tingkat lanjut',
        items: [
          'Pembuatan sistem trading lengkap',
          'Trading psychology mendalam',
          'Advanced risk management'
        ],
        tag: 'Self-paced'
      }
    },
    resources: {
      title: 'Learning Resources',
      items: [
        'Risk Management',
        'Trading Psychology', 
        'Technical Analysis Foundations',
        'Market Structure',
        'Journaling Templates',
        'Safety & Anti-Scam Basics'
      ]
    },
    community: {
      title: 'Community & Support',
      description: 'Bergabung dengan komunitas trader profesional TPC Global untuk berbagi pengalaman dan belajar bersama.',
      principles: [
        'No-DM-first policy untuk keamanan',
        'Tidak pernah meminta private keys',
        'Anti-scam education terintegrasi'
      ]
    },
    cta: {
      start: 'Mulai Belajar',
      view: 'Lihat DAO',
      back: 'Kembali ke Home',
      presale: 'Ke Presale'
    }
  },
  en: {
    title: 'TPC Academy',
    subtitle: 'Trading education & digital literacy hub—focused on risk understanding, discipline, and responsible practices.',
    hero: {
      badge: 'TPC Academy',
      title: 'Trading Education Hub',
      subtitle: 'Comprehensive learning platform for professional traders with focus on risk management and discipline.',
      disclaimer: 'Content is for educational purposes and does not constitute financial advice.'
    },
    trust: {
      education: 'Education-first',
      transparency: 'Transparency-first',
      governance: 'Community governance'
    },
    tracks: {
      title: 'Learning Tracks',
      beginner: {
        title: 'Beginner Track',
        description: 'Trading fundamentals for beginners',
        items: [
          'Market introduction and structure',
          'Fundamental risk management',
          'How to create trading journal'
        ],
        tag: 'Self-paced'
      },
      intermediate: {
        title: 'Intermediate Track',
        description: 'Intermediate trading strategies',
        items: [
          'Price confluence analysis',
          'Disciplined trading execution',
          'Basic trading psychology'
        ],
        tag: 'Self-paced'
      },
      advanced: {
        title: 'Advanced Track',
        description: 'Advanced trading systems',
        items: [
          'Complete trading system development',
          'Deep trading psychology',
          'Advanced risk management'
        ],
        tag: 'Self-paced'
      }
    },
    resources: {
      title: 'Learning Resources',
      items: [
        'Risk Management',
        'Trading Psychology',
        'Technical Analysis Foundations',
        'Market Structure',
        'Journaling Templates',
        'Safety & Anti-Scam Basics'
      ]
    },
    community: {
      title: 'Community & Support',
      description: 'Join TPC Global professional trader community to share experiences and learn together.',
      principles: [
        'No-DM-first policy for security',
        'Never ask for private keys',
        'Integrated anti-scam education'
      ]
    },
    cta: {
      start: 'Start Learning',
      view: 'View DAO',
      back: 'Back to Home',
      presale: 'Go to Presale'
    }
  }
};

export default async function AcademyPage({ params }: AcademyPageProps) {
  const { lang } = await params;
  const normalizedLang = normalizeLang(lang);
  const copy = academyCopy[normalizedLang];

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
              <a 
                href="#tracks" 
                className="inline-flex items-center px-8 py-4 bg-amber-500 text-black font-semibold rounded-2xl hover:bg-amber-400 transition-colors duration-300"
              >
                {copy.cta.start}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
              <Link href={`/${lang}/dao`} className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-2xl hover:border-gray-500 hover:text-white transition-colors duration-300">
                {copy.cta.view}
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">{copy.trust.education}</h3>
                <p className="text-gray-400 text-sm">Pembelajaran menjadi prioritas utama</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">{copy.trust.transparency}</h3>
                <p className="text-gray-400 text-sm">Operasi transparan untuk kepercayaan</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">{copy.trust.governance}</h3>
                <p className="text-gray-400 text-sm">Tata kelola berbasis komunitas</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* TRACKS SECTION */}
      <Section id="tracks" className="py-16 bg-gradient-to-b from-[#0B0E11] to-[#1A1F2E] relative w-full max-w-full overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {copy.tracks.title}
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Pilih jalur pembelajaran yang sesuai dengan level dan tujuan Anda
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Beginner Track */}
              <PremiumCard className="border border-green-500/20 bg-white/5 rounded-2xl overflow-hidden hover:border-green-500/40 transition-all duration-300">
                <PremiumCardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-green-400">{copy.tracks.beginner.title}</h3>
                    <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">{copy.tracks.beginner.tag}</span>
                  </div>
                  <p className="text-gray-300 mb-6">{copy.tracks.beginner.description}</p>
                  <ul className="space-y-3 mb-6">
                    {copy.tracks.beginner.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-3 bg-green-500/20 text-green-400 font-semibold rounded-xl hover:bg-green-500/30 transition-colors duration-300">
                    Open Track
                  </button>
                </PremiumCardContent>
              </PremiumCard>

              {/* Intermediate Track */}
              <PremiumCard className="border border-blue-500/20 bg-white/5 rounded-2xl overflow-hidden hover:border-blue-500/40 transition-all duration-300">
                <PremiumCardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-blue-400">{copy.tracks.intermediate.title}</h3>
                    <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">{copy.tracks.intermediate.tag}</span>
                  </div>
                  <p className="text-gray-300 mb-6">{copy.tracks.intermediate.description}</p>
                  <ul className="space-y-3 mb-6">
                    {copy.tracks.intermediate.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-3 bg-blue-500/20 text-blue-400 font-semibold rounded-xl hover:bg-blue-500/30 transition-colors duration-300">
                    Open Track
                  </button>
                </PremiumCardContent>
              </PremiumCard>

              {/* Advanced Track */}
              <PremiumCard className="border border-purple-500/20 bg-white/5 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all duration-300">
                <PremiumCardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-purple-400">{copy.tracks.advanced.title}</h3>
                    <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">{copy.tracks.advanced.tag}</span>
                  </div>
                  <p className="text-gray-300 mb-6">{copy.tracks.advanced.description}</p>
                  <ul className="space-y-3 mb-6">
                    {copy.tracks.advanced.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-3 bg-purple-500/20 text-purple-400 font-semibold rounded-xl hover:bg-purple-500/30 transition-colors duration-300">
                    Open Track
                  </button>
                </PremiumCardContent>
              </PremiumCard>
            </div>
          </div>
        </Container>
      </Section>

      {/* RESOURCES SECTION */}
      <Section className="py-16 bg-[#0B0E11] relative w-full max-w-full overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {copy.resources.title}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {copy.resources.items.map((item, index) => (
                <PremiumCard key={index} className="border border-gray-700/30 bg-white/5 rounded-xl p-6 hover:border-amber-500/30 transition-all duration-300">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-amber-400 rounded-full mr-3"></div>
                    <span className="text-gray-300 font-medium">{item}</span>
                  </div>
                </PremiumCard>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* COMMUNITY SECTION */}
      <Section className="py-16 bg-gradient-to-b from-[#0B0E11] to-[#1A1F2E] relative w-full max-w-full overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto">
            <PremiumCard className="border border-amber-500/20 bg-white/5 rounded-2xl overflow-hidden">
              <PremiumCardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {copy.community.title}
                  </h2>
                  <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
                    {copy.community.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {copy.community.principles.map((principle, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <p className="text-gray-300 text-sm">{principle}</p>
                    </div>
                  ))}
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
                <Link href={`/${lang}/presale`} className="inline-flex items-center px-8 py-4 bg-amber-500 text-black font-semibold rounded-2xl hover:bg-amber-400 transition-colors duration-300">
                  {copy.cta.presale}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
              <p className="text-sm text-gray-400 max-w-2xl mx-auto">
                Edukasi trading bertanggung jawab untuk membangun generasi trader yang lebih baik
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </PremiumShell>
  );
}
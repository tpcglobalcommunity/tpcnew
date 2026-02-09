import { normalizeLang, type LangParams } from "@/lib/lang-helpers";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PremiumCard, PremiumCardContent } from "@/components/ui/PremiumCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { publicPath } from "@/lib/lang-helpers";
import { Metadata } from "next";
import Link from "next/link";

interface DAOPageProps {
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
  
  const copy = daoCopy[lang];
  
  return {
    title: `${copy.title} | TPC Global`,
    description: copy.subtitle,
    keywords: 'TPC Global, DAO, tata kelola, voting transparan, komunitas, governance',
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
          url: 'https://tpcglobal.io/og-dao.jpg',
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
      images: ['https://tpcglobal.io/og-dao.jpg'],
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

// DAO Content Dictionary
const daoCopy = {
  id: {
    title: 'DAO TPC Global',
    subtitle: 'Tata kelola berbasis komunitas untuk pengambilan keputusan yang transparan dan bertanggung jawab.',
    badges: ['Dipimpin Komunitas', 'Voting Transparan', 'Tata Kelola Aman', 'Audit Trail'],
    features: [
      {
        title: 'Sistem Proposal',
        description: 'Ajukan ide dan perubahan untuk pengembangan ekosistem TPC.'
      },
      {
        title: 'Diskusi Terbuka',
        description: 'Forum komunitas untuk membahas proposal dan memberikan masukan.'
      },
      {
        title: 'Voting Komunitas',
        description: 'Sistem voting transparan berbasis token untuk pengambilan keputusan.'
      },
      {
        title: 'Transparansi Keputusan',
        description: 'Semua keputusan dicatat dan dapat diakses oleh seluruh komunitas.'
      }
    ],
    steps: [
      {
        title: 'Ajukan Proposal',
        description: 'Anggota komunitas dapat mengajukan proposal untuk perbaikan atau pengembangan platform.'
      },
      {
        title: 'Diskusi & Voting Komunitas',
        description: 'Proposal dibahas secara terbuka dan divoting oleh pemegang token TPC.'
      },
      {
        title: 'Implementasi Keputusan',
        description: 'Keputusan mayoritas diimplementasikan dengan transparansi penuh.'
      }
    ],
    safety: [
      'Tidak ada janji keuntungan finansial.',
      'Keputusan dicatat dan dapat diaudit.',
      'Moderasi anti-scam & kebijakan komunitas.',
      'Fokus pada edukasi dan utilitas ekosistem.'
    ],
    cta: {
      primary: 'Dashboard DAO — Segera Hadir',
      secondary: 'Lihat Transparansi'
    }
  },
  en: {
    title: 'DAO TPC Global',
    subtitle: 'Community-driven governance for transparent and accountable decisions.',
    badges: ['Community Led', 'Transparent Voting', 'Secure Governance', 'Audit Trail'],
    features: [
      {
        title: 'Proposal System',
        description: 'Submit ideas and changes for TPC ecosystem development.'
      },
      {
        title: 'Open Discussion',
        description: 'Community forum to discuss proposals and provide feedback.'
      },
      {
        title: 'Community Voting',
        description: 'Transparent token-based voting system for decision making.'
      },
      {
        title: 'Decision Transparency',
        description: 'All decisions are recorded and accessible to the entire community.'
      }
    ],
    steps: [
      {
        title: 'Submit Proposal',
        description: 'Community members can submit proposals for platform improvements or development.'
      },
      {
        title: 'Discussion & Community Voting',
        description: 'Proposals are discussed openly and voted on by TPC token holders.'
      },
      {
        title: 'Decision Implementation',
        description: 'Majority decisions are implemented with full transparency.'
      }
    ],
    safety: [
      'No financial benefit promises.',
      'Decisions are recorded and auditable.',
      'Anti-scam moderation & community policies.',
      'Focus on education and ecosystem utilities.'
    ],
    cta: {
      primary: 'DAO Dashboard — Coming Soon',
      secondary: 'View Transparency'
    }
  }
};

export default function DAOPage({ params }: DAOPageProps) {
  const lang = normalizeLang(params.lang);
  const copy = daoCopy[lang];

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
              
              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {copy.badges.map((badge, index) => (
                  <div key={index} className="inline-flex items-center px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-2"></div>
                    <span className="text-amber-400 text-sm font-medium">
                      {badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </PremiumCard>
        </Container>
      </Section>

      {/* Section Divider */}
      <div className="border-t border-border/10"></div>

      {/* FEATURES SECTION */}
      <Section className="py-12 bg-[#0B0E11] relative w-full max-w-full overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239CA3AF' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-10 w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {lang === 'id' ? 'Fitur Utama' : 'Key Features'}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
            {copy.features.map((feature, index) => (
              <PremiumCard key={index} className="border border-gray-700 bg-[#1A1F2E] hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden group">
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <PremiumCardContent className="p-6 relative z-10">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-amber-400">
                        {index === 0 && '📋'}
                        {index === 1 && '💬'}
                        {index === 2 && '🗳️'}
                        {index === 3 && '🔍'}
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </PremiumCardContent>
              </PremiumCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Section Divider */}
      <div className="border-t border-border/10"></div>

      {/* HOW DAO WORKS SECTION */}
      <Section className="py-12 bg-gradient-to-b from-[#0B0E11] to-[#1A1F2E] relative w-full max-w-full overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-amber-500/5"></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-10 w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {lang === 'id' ? 'Cara DAO Bekerja' : 'How DAO Works'}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              {lang === 'id' 
                ? 'Proses tata kelola yang sederhana dan transparan.'
                : 'Simple and transparent governance process.'
              }
            </p>
          </div>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            {copy.steps.map((step, index) => (
              <PremiumCard key={index} className="border border-gray-700 bg-[#1A1F2E] hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden group">
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <PremiumCardContent className="p-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-amber-400">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </PremiumCardContent>
              </PremiumCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Section Divider */}
      <div className="border-t border-border/10"></div>

      {/* SAFETY & ETHICS SECTION */}
      <Section className="py-12 bg-[#0B0E11] relative w-full max-w-full overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239CA3AF' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-10 w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {lang === 'id' ? 'Prinsip Keamanan & Etika' : 'Safety & Ethics Principles'}
            </h2>
          </div>
          
          <PremiumCard className="border border-gray-700 bg-[#1A1F2E] hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden group max-w-3xl mx-auto">
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <PremiumCardContent className="p-8 relative z-10">
              <div className="space-y-4">
                {copy.safety.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {item}
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

      {/* CTA SECTION */}
      <Section className="py-12 bg-gradient-to-b from-[#0B0E11] to-[#1A1F2E] relative w-full max-w-full overflow-hidden pb-24">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-amber-500/5"></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center">
            <div className="relative w-full mx-auto max-w-md mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg blur-lg opacity-50"></div>
              <PremiumButton 
                size="md"
                fullWidth
                className="relative bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white border-0 shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold"
              >
                {copy.cta.primary}
              </PremiumButton>
            </div>
            
            <div className="text-center">
              <Link 
                href={publicPath(lang, '/transparency')}
                className="inline-flex items-center text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors duration-300"
              >
                {copy.cta.secondary}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </PremiumShell>
  );
}

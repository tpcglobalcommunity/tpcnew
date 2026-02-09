import { normalizeLang, type LangParams } from "@/lib/lang-helpers";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PremiumCard, PremiumCardContent } from "@/components/ui/PremiumCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { publicPath } from "@/lib/lang-helpers";
import { Metadata } from "next";
import Link from "next/link";

// Why TPC Content Dictionary
const whyTPCCopy = {
  id: {
    title: 'Mengapa TPC Global?',
    subtitle: 'Platform edukasi berbasis transparansi dan komunitas yang dibangun untuk pembelajaran jangka panjang dan partisipasi yang bertanggung jawab.',
    disclaimer: 'Platform edukasi. Bukan nasihat finansial.',
    badges: ['Edukasi-Pertama', 'Transparansi', 'Tata Kelola Komunitas', 'Kesadaran Risiko'],
    problem: {
      title: 'Masalah yang Kami Atasi',
      points: [
        'Banyak platform fokus pada hype, janji, dan keuntungan jangka pendek.',
        'Kurangnya transparansi dan tata kelola yang tidak jelas meningkatkan risiko.',
        'Edukasi sering menjadi sekunder atau menyesatkan.'
      ]
    },
    approach: {
      title: 'Pendekatan Kami',
      points: [
        'Edukasi didahulukan, sebelum partisipasi.',
        'Transparansi melalui informasi yang dipublikasikan.',
        'Tata kelola komunitas melalui prinsip DAO.',
        'Pemisahan jelas antara edukasi dan pengambilan keputusan.'
      ]
    },
    different: {
      title: 'Apa yang Membuat TPC Berbeda',
      cards: [
        {
          title: 'Edukasi Sebelum Apa Pun',
          description: 'Pembelajaran dan kesadaran risiko diprioritaskan.'
        },
        {
          title: 'Transparansi Berdasarkan Desain',
          description: 'Informasi kunci dapat diakses publik.'
        },
        {
          title: 'Tata Kelola Komunitas',
          description: 'Keputusan mengikuti proses terstruktur dan akuntabel.'
        },
        {
          title: 'Tidak Ada Janji Keuntungan',
          description: 'Tidak ada jaminan. Tidak ada klaim finansial.'
        }
      ]
    },
    notTPC: {
      title: 'Apa yang Bukan TPC',
      points: [
        'Bukan produk investasi',
        'Bukan skema cepat kaya',
        'Bukan layanan sinyal',
        'Bukan jaminan hasil'
      ]
    },
    forWho: {
      title: 'Untuk Siapa TPC',
      points: [
        'Pembelajar yang ingin edukasi terstruktur',
        'Anggota komunitas yang menghargai transparansi',
        'Peserta yang memahami dan menerima risiko',
        'Orang yang mencari pengetahuan jangka panjang, bukan jalan pintas'
      ]
    },
    principles: {
      title: 'Prinsip Inti Kami',
      list: [
        'Transparansi lebih penting dari hype',
        'Edukasi lebih penting dari janji',
        'Tanggung jawab lebih penting dari spekulasi',
        'Komunitas lebih penting dari sentralisasi'
      ]
    },
    cta: {
      primary: 'Jelajahi Presale',
      secondary: 'Lihat Transparansi',
      academy: 'Kunjungi Academy'
    }
  },
  en: {
    title: 'Why TPC Global?',
    subtitle: 'An education-first, transparency-driven community built for long-term learning and responsible participation.',
    disclaimer: 'Educational platform. Not financial advice.',
    badges: ['Education-First', 'Transparency', 'Community Governance', 'Risk Awareness'],
    problem: {
      title: 'The Problem We Address',
      points: [
        'Many platforms focus on hype, promises, and short-term gains.',
        'Lack of transparency and unclear governance increases risk.',
        'Education is often secondary or misleading.'
      ]
    },
    approach: {
      title: 'Our Approach',
      points: [
        'Education comes first, before participation.',
        'Transparency through publicly shared information.',
        'Community-driven governance via DAO principles.',
        'Clear separation between education and decision-making.'
      ]
    },
    different: {
      title: 'What Makes TPC Different',
      cards: [
        {
          title: 'Education Before Anything Else',
          description: 'Learning and risk awareness are prioritized.'
        },
        {
          title: 'Transparency by Design',
          description: 'Key information is publicly accessible.'
        },
        {
          title: 'Community Governance',
          description: 'Decisions follow structured, accountable processes.'
        },
        {
          title: 'No Profit Promises',
          description: 'No guarantees. No financial claims.'
        }
      ]
    },
    notTPC: {
      title: 'What TPC Is Not',
      points: [
        'Not an investment product',
        'Not a get-rich-quick scheme',
        'Not a signal service',
        'Not a guarantee of results'
      ]
    },
    forWho: {
      title: 'Who TPC Is For',
      points: [
        'Learners who want structured education',
        'Community members who value transparency',
        'Participants who understand and accept risk',
        'People seeking long-term knowledge, not shortcuts'
      ]
    },
    principles: {
      title: 'Our Core Principles',
      list: [
        'Transparency over hype',
        'Education over promises',
        'Responsibility over speculation',
        'Community over centralization'
      ]
    },
    cta: {
      primary: 'Explore Presale',
      secondary: 'View Transparency',
      academy: 'Visit Academy'
    }
  }
};

interface WhyTPCPageProps {
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
  
  const copy = whyTPCCopy[lang];
  
  return {
    title: copy.title,
    description: copy.subtitle,
    keywords: 'TPC Global, why TPC, education first, transparency, community governance, risk awareness',
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
          url: 'https://tpcglobal.io/og-why-tpc.jpg',
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
      images: ['https://tpcglobal.io/og-why-tpc.jpg'],
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

export default function WhyTPCPage({ params }: WhyTPCPageProps) {
  const lang = normalizeLang(params.lang);
  const copy = whyTPCCopy[lang];

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
              <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
                {copy.badges.map((badge, index) => (
                  <div key={index} className="inline-flex items-center px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-2"></div>
                    <span className="text-amber-400 text-sm font-medium">
                      {badge}
                    </span>
                  </div>
                ))}
              </div>
              
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

      {/* THE PROBLEM SECTION */}
      <Section className="py-12 bg-[#0B0E11] relative w-full max-w-full overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239CA3AF' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-10 w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {copy.problem.title}
            </h2>
          </div>
          
          <PremiumCard className="border border-gray-700 bg-[#1A1F2E] hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden group max-w-3xl mx-auto">
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <PremiumCardContent className="p-8 relative z-10">
              <div className="space-y-4">
                {copy.problem.points.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {point}
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

      {/* OUR APPROACH SECTION */}
      <Section className="py-12 bg-gradient-to-b from-[#0B0E11] to-[#1A1F2E] relative w-full max-w-full overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-amber-500/5"></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-10 w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {copy.approach.title}
            </h2>
          </div>
          
          <div className="space-y-4 max-w-3xl mx-auto">
            {copy.approach.points.map((point, index) => (
              <PremiumCard key={index} className="border border-gray-700 bg-[#1A1F2E] hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden group">
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <PremiumCardContent className="p-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-amber-400">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {point}
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

      {/* WHAT MAKES TPC DIFFERENT SECTION */}
      <Section className="py-12 bg-[#0B0E11] relative w-full max-w-full overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239CA3AF' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-10 w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {copy.different.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {copy.different.cards.map((card, index) => (
              <PremiumCard key={index} className="border border-gray-700 bg-[#1A1F2E] hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden group">
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <PremiumCardContent className="p-6 relative z-10">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-amber-400">{index + 1}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {card.description}
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

      {/* WHAT TPC IS NOT SECTION */}
      <Section className="py-12 bg-gradient-to-b from-[#0B0E11] to-[#1A1F2E] relative w-full max-w-full overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-amber-500/5"></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-10 w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {copy.notTPC.title}
            </h2>
          </div>
          
          <PremiumCard className="border-2 border-red-500/30 bg-red-500/5 hover:border-red-500/50 transition-all duration-300 relative overflow-hidden max-w-3xl mx-auto">
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 transition-opacity duration-300"></div>
            
            <PremiumCardContent className="p-8 relative z-10">
              <div className="space-y-4">
                {copy.notTPC.points.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {point}
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

      {/* WHO TPC IS FOR SECTION */}
      <Section className="py-12 bg-[#0B0E11] relative w-full max-w-full overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239CA3AF' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-10 w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {copy.forWho.title}
            </h2>
          </div>
          
          <PremiumCard className="border border-gray-700 bg-[#1A1F2E] hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden group max-w-3xl mx-auto">
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <PremiumCardContent className="p-8 relative z-10">
              <div className="space-y-4">
                {copy.forWho.points.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {point}
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

      {/* OUR PRINCIPLES SECTION */}
      <Section className="py-12 bg-gradient-to-b from-[#0B0E11] to-[#1A1F2E] relative w-full max-w-full overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-amber-500/5"></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-10 w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {copy.principles.title}
            </h2>
          </div>
          
          <div className="space-y-4 max-w-3xl mx-auto">
            {copy.principles.list.map((principle, index) => (
              <PremiumCard key={index} className="border border-gray-700 bg-[#1A1F2E] hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden group">
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <PremiumCardContent className="p-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-amber-400">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {principle}
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

      {/* CTA SECTION */}
      <Section className="py-12 bg-[#0B0E11] relative w-full max-w-full overflow-hidden pb-24">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-amber-500/5"></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center">
            <div className="relative w-full mx-auto max-w-md mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg blur-lg opacity-50"></div>
              <PremiumButton 
                href={publicPath(lang, '/presale')}
                size="md"
                fullWidth
                className="relative bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white border-0 shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold"
              >
                {copy.cta.primary}
              </PremiumButton>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href={publicPath(lang, '/transparency')}
                className="inline-flex items-center text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors duration-300"
              >
                {copy.cta.secondary}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
              
              <Link 
                href={publicPath(lang, '/academy')}
                className="inline-flex items-center text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors duration-300"
              >
                {copy.cta.academy}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </PremiumShell>
  );
}

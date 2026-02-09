import { normalizeLang, type LangParams } from "@/lib/lang-helpers";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PremiumCard, PremiumCardContent } from "@/components/ui/PremiumCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { publicPath } from "@/lib/lang-helpers";
import { Metadata } from "next";
import Link from "next/link";

interface AcademyPageProps {
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
  
  const copy = academyCopy[lang];
  
  return {
    title: `${copy.title} | TPC Global`,
    description: copy.subtitle,
    keywords: 'TPC Global, academy, edukasi trading, literasi aset digital, risk awareness, manajemen risiko',
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
    disclaimer: 'Materi bersifat edukasi dan tidak merupakan nasihat finansial.',
    badges: ['Edukasi Bertahap', 'Risk Awareness', 'Disiplin & Manajemen Risiko', 'Komunitas'],
    levels: {
      beginner: {
        title: 'Pemula',
        description: 'dasar market, istilah penting, mindset, risiko',
        cta: 'Mulai Pemula'
      },
      intermediate: {
        title: 'Menengah',
        description: 'analisis teknikal dasar, jurnal, manajemen risiko',
        cta: 'Belajar Menengah'
      },
      advanced: {
        title: 'Lanjutan',
        description: 'sistem trading, evaluasi performa, psikologi, rencana kerja',
        cta: 'Belajar Lanjutan'
      }
    },
    modules: {
      beginner: [
        {
          title: 'Pengenalan pasar & instrumen',
          description: 'Memahami konsep dasar pasar keuangan dan instrumen trading.'
        },
        {
          title: 'Istilah dasar (candlestick, spread, leverage)',
          description: 'Mempelajari terminologi fundamental yang digunakan dalam trading.'
        },
        {
          title: 'Risiko & kesalahan umum',
          description: 'Mengenali risiko intrinsik dan kesalahan yang sering terjadi.'
        },
        {
          title: 'Dasar manajemen risiko',
          description: 'Konsep dasar pengelolaan risiko tanpa angka janji.'
        },
        {
          title: 'Etika & anti-scam',
          description: 'Prinsip etika dan cara menghindari penipuan dalam trading.'
        }
      ],
      intermediate: [
        {
          title: 'Struktur market & trend',
          description: 'Memahami struktur pasar dan identifikasi arah pergerakan.'
        },
        {
          title: 'Support & resistance',
          description: 'Konsep level harga penting dalam analisis teknikal.'
        },
        {
          title: 'Indikator populer',
          description: 'Penjelasan konsep indikator, bukan sinyal pasti.'
        },
        {
          title: 'Trading plan & jurnal',
          description: 'Membuat rencana trading dan mencatat aktivitas.'
        },
        {
          title: 'Psikologi trading dasar',
          description: 'Memahami aspek psikologis dalam trading.'
        }
      ],
      advanced: [
        {
          title: 'Sistem trading & backtesting',
          description: 'Konsep sistem trading dan pengujian strategi.'
        },
        {
          title: 'Position sizing',
          description: 'Konsep penentuan ukuran posisi trading.'
        },
        {
          title: 'Evaluasi performa & konsistensi',
          description: 'Mengukur performa dan menjaga konsistensi.'
        },
        {
          title: 'Manajemen emosi & disiplin',
          description: 'Mengendalikan emosi dan membangun disiplin.'
        },
        {
          title: 'Checklist eksekusi (pre-trade)',
          description: 'Daftar periksa sebelum melakukan trading.'
        }
      ]
    },
    safety: {
      title: 'Belajar dengan Aman',
      rules: [
        'Jangan percaya janji profit',
        'Jangan bagikan seed phrase/private key',
        'Admin tidak DM duluan',
        'Selalu verifikasi link resmi'
      ]
    },
    cta: {
      primary: 'Kembali ke Presale',
      secondary: 'Lihat Transparansi'
    }
  },
  en: {
    title: 'TPC Academy',
    subtitle: 'Trading education & digital asset literacy center—focus on risk understanding, discipline, and responsible practices.',
    disclaimer: 'Educational content only. Not financial advice.',
    badges: ['Structured Education', 'Risk Awareness', 'Discipline & Risk Management', 'Community'],
    levels: {
      beginner: {
        title: 'Beginner',
        description: 'market basics, key terms, mindset, risks',
        cta: 'Start Beginner'
      },
      intermediate: {
        title: 'Intermediate',
        description: 'basic technical analysis, journaling, risk management',
        cta: 'Learn Intermediate'
      },
      advanced: {
        title: 'Advanced',
        description: 'trading systems, performance evaluation, psychology, work plan',
        cta: 'Learn Advanced'
      }
    },
    modules: {
      beginner: [
        {
          title: 'Market & Instrument Introduction',
          description: 'Understanding basic financial market concepts and trading instruments.'
        },
        {
          title: 'Basic Terms (candlestick, spread, leverage)',
          description: 'Learning fundamental terminology used in trading.'
        },
        {
          title: 'Risks & Common Mistakes',
          description: 'Recognizing intrinsic risks and common trading mistakes.'
        },
        {
          title: 'Basic Risk Management',
          description: 'Fundamental risk management concepts without profit promises.'
        },
        {
          title: 'Ethics & Anti-Scam',
          description: 'Ethical principles and avoiding trading scams.'
        }
      ],
      intermediate: [
        {
          title: 'Market Structure & Trends',
          description: 'Understanding market structure and trend identification.'
        },
        {
          title: 'Support & Resistance',
          description: 'Key price level concepts in technical analysis.'
        },
        {
          title: 'Popular Indicators',
          description: 'Indicator concepts, not guaranteed signals.'
        },
        {
          title: 'Trading Plan & Journal',
          description: 'Creating trading plans and recording activities.'
        },
        {
          title: 'Basic Trading Psychology',
          description: 'Understanding psychological aspects in trading.'
        }
      ],
      advanced: [
        {
          title: 'Trading Systems & Backtesting',
          description: 'Trading system concepts and strategy testing.'
        },
        {
          title: 'Position Sizing',
          description: 'Trading position size determination concepts.'
        },
        {
          title: 'Performance Evaluation & Consistency',
          description: 'Measuring performance and maintaining consistency.'
        },
        {
          title: 'Emotion Management & Discipline',
          description: 'Controlling emotions and building discipline.'
        },
        {
          title: 'Execution Checklist (Pre-Trade)',
          description: 'Pre-trading verification checklist.'
        }
      ]
    },
    safety: {
      title: 'Learn Safely',
      rules: [
        'Don\'t trust profit promises',
        'Don\'t share seed phrase/private key',
        'Admin won\'t DM first',
        'Always verify official links'
      ]
    },
    cta: {
      primary: 'Back to Presale',
      secondary: 'View Transparency'
    }
  }
};

export default function AcademyPage({ params }: AcademyPageProps) {
  const lang = normalizeLang(params.lang);
  const copy = academyCopy[lang];

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

      {/* LEARNING PATHS SECTION */}
      <Section className="py-12 bg-[#0B0E11] relative w-full max-w-full overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239CA3AF' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-10 w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {lang === 'id' ? 'Pilih Jalur Belajar' : 'Choose Learning Path'}
            </h2>
          </div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {/* Beginner Card */}
            <PremiumCard className="border border-gray-700 bg-[#1A1F2E] hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden group">
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <PremiumCardContent className="p-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full flex items-center justify-center mb-4">
                      <span className="text-3xl font-bold text-green-400">1</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      {copy.levels.beginner.title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {copy.levels.beginner.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <PremiumButton 
                      href="#beginner"
                      size="md"
                      className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0 shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold"
                    >
                      {copy.levels.beginner.cta}
                    </PremiumButton>
                  </div>
                </div>
              </PremiumCardContent>
            </PremiumCard>

            {/* Intermediate Card */}
            <PremiumCard className="border border-gray-700 bg-[#1A1F2E] hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden group">
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <PremiumCardContent className="p-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-full flex items-center justify-center mb-4">
                      <span className="text-3xl font-bold text-amber-400">2</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      {copy.levels.intermediate.title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {copy.levels.intermediate.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <PremiumButton 
                      href="#intermediate"
                      size="md"
                      className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white border-0 shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold"
                    >
                      {copy.levels.intermediate.cta}
                    </PremiumButton>
                  </div>
                </div>
              </PremiumCardContent>
            </PremiumCard>

            {/* Advanced Card */}
            <PremiumCard className="border border-gray-700 bg-[#1A1F2E] hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden group">
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <PremiumCardContent className="p-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full flex items-center justify-center mb-4">
                      <span className="text-3xl font-bold text-blue-400">3</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      {copy.levels.advanced.title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {copy.levels.advanced.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <PremiumButton 
                      href="#advanced"
                      size="md"
                      className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold"
                    >
                      {copy.levels.advanced.cta}
                    </PremiumButton>
                  </div>
                </div>
              </PremiumCardContent>
            </PremiumCard>
          </div>
        </Container>
      </Section>

      {/* Section Divider */}
      <div className="border-t border-border/10"></div>

      {/* BEGINNER MODULES SECTION */}
      <Section className="py-12 bg-gradient-to-b from-[#0B0E11] to-[#1A1F2E] relative w-full max-w-full overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-amber-500/5"></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-10 w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {lang === 'id' ? 'Modul Pemula' : 'Beginner Modules'}
            </h2>
          </div>
          
          <div className="space-y-4 max-w-4xl mx-auto">
            {copy.modules.beginner.map((module, index) => (
              <PremiumCard key={index} className="border border-gray-700 bg-[#1A1F2E] hover:border-green-500/50 transition-all duration-300 relative overflow-hidden group">
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <PremiumCardContent className="p-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-green-400">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {module.title}
                      </h3>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {module.description}
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

      {/* INTERMEDIATE MODULES SECTION */}
      <Section className="py-12 bg-[#0B0E11] relative w-full max-w-full overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239CA3AF' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-10 w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {lang === 'id' ? 'Modul Menengah' : 'Intermediate Modules'}
            </h2>
          </div>
          
          <div className="space-y-4 max-w-4xl mx-auto">
            {copy.modules.intermediate.map((module, index) => (
              <PremiumCard key={index} className="border border-gray-700 bg-[#1A1F2E] hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden group">
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <PremiumCardContent className="p-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-amber-400">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {module.title}
                      </h3>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {module.description}
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

      {/* ADVANCED MODULES SECTION */}
      <Section className="py-12 bg-gradient-to-b from-[#0B0E11] to-[#1A1F2E] relative w-full max-w-full overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-amber-500/5"></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-10 w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {lang === 'id' ? 'Modul Lanjutan' : 'Advanced Modules'}
            </h2>
          </div>
          
          <div className="space-y-4 max-w-4xl mx-auto">
            {copy.modules.advanced.map((module, index) => (
              <PremiumCard key={index} className="border border-gray-700 bg-[#1A1F2E] hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden group">
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <PremiumCardContent className="p-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-blue-400">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {module.title}
                      </h3>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {module.description}
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

      {/* SAFETY SECTION */}
      <Section className="py-12 bg-[#0B0E11] relative w-full max-w-full overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239CA3AF' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-10 w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {copy.safety.title}
            </h2>
          </div>
          
          <PremiumCard className="border-2 border-red-500/30 bg-red-500/5 hover:border-red-500/50 transition-all duration-300 relative overflow-hidden max-w-3xl mx-auto">
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 transition-opacity duration-300"></div>
            
            <PremiumCardContent className="p-8 relative z-10">
              <div className="space-y-4">
                {copy.safety.rules.map((rule, index) => (
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

      {/* CTA SECTION */}
      <Section className="py-12 bg-gradient-to-b from-[#0B0E11] to-[#1A1F2E] relative w-full max-w-full overflow-hidden pb-24">
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

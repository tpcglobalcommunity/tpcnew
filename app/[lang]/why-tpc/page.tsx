import { normalizeLang, type LangParams } from "@/lib/lang-helpers";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PremiumCard, PremiumCardContent } from "@/components/ui/PremiumCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { Metadata } from "next";
import Link from "next/link";
import { whyCopy } from "@/content/whyCopy";

interface WhyTpcPageProps {
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
  const copy = whyTpcCopy[normalizedLang];
  
  return {
    title: copy.title,
    description: copy.subtitle,
    keywords: 'Trader Profesional Community, trading education, transparency, ethics, anti-scam',
    authors: [{ name: 'Trader Profesional Community' }],
    creator: 'Trader Profesional Community',
    publisher: 'Trader Profesional Community',
    openGraph: {
      title: copy.title,
      description: copy.subtitle,
      type: "website",
      locale: lang === 'id' ? 'id_ID' : 'en_US',
      siteName: 'Trader Profesional Community',
      images: [
        {
          url: `https://tpcglobal.io/og-${lang}.png`,
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

// Why TPC Content Dictionary
const whyTpcCopy = {
  id: {
    title: 'Why Trader Profesional Community — Komunitas Edukasi Trading Berbasis Transparansi',
    subtitle: 'Trader Profesional Community adalah jawaban atas maraknya edukasi trading yang menyesatkan, minim transparansi, dan penuh janji hasil tanpa bukti.',
    hero: {
      badge: 'Why TPC',
      title: 'WHY TRADER PROFESIONAL COMMUNITY',
      subtitle: 'Mengapa Komunitas Edukasi Trader Profesional Perlu Transparansi & Etika',
      description: 'Trader Profesional Community lahir sebagai respons atas kebutuhan edukasi trading yang bertanggung jawab, transparan, dan berbasis integritas.'
    },
    problems: {
      title: 'Masalah Nyata di Dunia Edukasi Trading',
      items: [
        {
          icon: '🎭',
          title: 'Janji Hasil Tanpa Transparansi',
          description: 'Banyak mentor trading menjanjikan profit tanpa menunjukkan rekam jejak yang dapat diverifikasi.'
        },
        {
          icon: '💔',
          title: 'Manipulasi Emosi',
          description: 'Strategi Fear & Greed yang dieksploitasi untuk mendorong trading impulsif.'
        },
        {
          icon: '📚',
          title: 'Minimnya Literasi Risiko',
          description: 'Kurangnya edukasi tentang manajemen risiko yang benar dan bertanggung jawab.'
        },
        {
          icon: '👤',
          title: 'Mentor Tanpa Kredibilitas',
          description: 'Banyak "guru" trading tanpa rekam jejak yang dapat diverifikasi dan akuntabilitas.'
        }
      ]
    },
    solution: {
      title: 'Sikap Trader Profesional Community',
      items: [
        {
          icon: '🎓',
          title: 'Education-First',
          description: 'Prioritas utama adalah pemahaman pasar, bukan janji keuntungan.'
        },
        {
          icon: '🔍',
          title: 'Transparansi Total',
          description: 'Semua proses, keputusan, dan hasil dapat diverifikasi secara on-chain.'
        },
        {
          icon: '🛡️',
          title: 'Anti-Scam',
          description: 'Desain dari awal untuk melindungi anggota dari praktik penipuan.'
        },
        {
          icon: '🤝',
          title: 'Komunitas Integritas',
          description: 'Membangun ekosistem berdasarkan kepercayaan dan tanggung jawab.'
        }
      ]
    },
    infrastructure: 'TPC memanfaatkan teknologi blockchain untuk transparansi pencatatan dan verifikasi, dengan tetap menekankan bahwa platform ini berfokus pada edukasi dan komunitas.',
    identity: {
      title: 'Identitas Trader Profesional Community',
      description: 'Trader Profesional Community (TPC) adalah komunitas edukasi, bukan produk investasi. Fokus pada pemahaman, disiplin, dan kesadaran risiko. Tidak menjual mimpi, tidak menjanjikan hasil. Transparansi sebagai fondasi kepercayaan komunitas.',
      points: [
        'Bukan instrumen investasi',
        'Tidak menjanjikan keuntungan finansial',
        'Fokus pada edukasi & transparansi',
        'Komunitas berbasis integritas'
      ]
    },
    forWho: {
      title: 'Komunitas Ini Cocok untuk Siapa?',
      goodFit: [
        'Individu yang ingin belajar trading secara sadar & bertanggung jawab',
        'Mereka yang menghargai transparansi dan proses yang terbuka',
        'Pencari edukasi trading yang etis dan bertanggung jawab'
      ],
      notFit: [
        'Pencari hasil instan tanpa proses belajar',
        'Pihak yang mengharapkan jaminan keuntungan',
        'Mereka yang tidak sabar dalam proses edukasi'
      ]
    },
    connections: {
      title: 'Bagaimana Halaman Trader Profesional Community Saling Terhubung',
      items: [
        {
          page: 'Home',
          description: 'Pengenalan nilai dasar & visi komunitas'
        },
        {
          page: 'Why Trader Profesional Community',
          description: 'Alasan keberadaan & posisi etis komunitas'
        },
        {
          page: 'Presale',
          description: 'Mekanisme akses komunitas (tanpa janji finansial)'
        },
        {
          page: 'Transparency',
          description: 'Verifikasi & bukti akuntabilitas'
        }
      ]
    },
    cta: {
      primary: 'Pelajari Transparansi Komunitas',
      secondary: 'Pahami Akses Komunitas'
    }
  },
  en: {
    title: 'Why Trader Profesional Community — Trading Education Community Based on Transparency',
    subtitle: 'Trader Profesional Community is the answer to the rampant trading education that misleads, lacks transparency, and is full of profit promises without proof.',
    hero: {
      badge: 'Why TPC',
      title: 'WHY TRADER PROFESIONAL COMMUNITY',
      subtitle: 'Why Professional Trader Education Community Needs Transparency & Ethics',
      description: 'Trader Profesional Community was born as a response to the need for responsible, transparent, and integrity-based trading education.'
    },
    problems: {
      title: 'Real Problems in Trading Education World',
      items: [
        {
          icon: '🎭',
          title: 'Profit Promises Without Transparency',
          description: 'Many trading mentors promise profits without showing verifiable track records.'
        },
        {
          icon: '💔',
          title: 'Emotional Manipulation',
          description: 'Fear & Greed strategies exploited to encourage impulsive trading.'
        },
        {
          icon: '📚',
          title: 'Minimal Risk Literacy',
          description: 'Lack of proper education about responsible risk management.'
        },
        {
          icon: '👤',
          title: 'Uncredible Mentors',
          description: 'Many "guru" traders without verifiable track records and accountability.'
        }
      ]
    },
    solution: {
      title: 'Trader Profesional Community Approach',
      items: [
        {
          icon: '🎓',
          title: 'Education-First',
          description: 'Priority is market understanding, not profit promises.'
        },
        {
          icon: '🔍',
          title: 'Full Transparency',
          description: 'All processes, decisions, and results are verifiable on-chain.'
        },
        {
          icon: '🛡️',
          title: 'Anti-Scam',
          description: 'Designed from the ground up to protect members from fraudulent practices.'
        },
        {
          icon: '🤝',
          title: 'Integrity Community',
          description: 'Building ecosystem based on trust and accountability.'
        }
      ]
    },
    infrastructure: 'TPC utilizes blockchain technology for transparent recording and verification, while emphasizing that this platform focuses on education and community.',
    identity: {
      title: 'Trader Profesional Community Identity',
      description: 'Trader Profesional Community (TPC) is an education community, not an investment product. Focus on understanding, discipline, and risk awareness. No dream selling, no profit promises. Transparency as the foundation of community trust.',
      points: [
        'Not an investment instrument',
        'No financial profit guarantees',
        'Focus on education & transparency',
        'Integrity-based community'
      ]
    },
    forWho: {
      title: 'Who Is This Community For?',
      goodFit: [
        'Individuals who want to learn trading consciously & responsibly',
        'Those who value transparency and open processes',
        'Seekers of ethical and responsible trading education'
      ],
      notFit: [
        'Those seeking instant profits without learning process',
        'Parties expecting guaranteed returns',
        'Impatient individuals in education process'
      ]
    },
    connections: {
      title: 'How Trader Profesional Community Pages Connect',
      items: [
        {
          page: 'Home',
          description: 'Introduction to core values & community vision'
        },
        {
          page: 'Why Trader Profesional Community',
          description: 'Reasons for existence & ethical positioning'
        },
        {
          page: 'Presale',
          description: 'Community access mechanism (no financial promises)'
        },
        {
          page: 'Transparency',
          description: 'Verification & proof of accountability'
        }
      ]
    },
    cta: {
      primary: 'Learn Community Transparency',
      secondary: 'Understand Community Access'
    }
  }
};

export default async function WhyTpcPage({ params }: WhyTpcPageProps) {
  const { lang } = await params;
  const normalizedLang = normalizeLang(lang);
  const copy = whyTpcCopy[normalizedLang];

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

      {/* PROBLEMS SECTION */}
      <Section className="py-16 bg-[#1A1F2E] relative w-full max-w-full overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {copy.problems.title}
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                Dunia edukasi trading saat ini dipenuhi masalah yang merugikan trader pemula.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {copy.problems.items.map((problem, index) => (
                <PremiumCard key={index} className="border border-red-500/20 bg-white/5 rounded-2xl overflow-hidden hover:border-red-500/40 transition-all duration-300">
                  <PremiumCardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl mb-4">{problem.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-red-400 mb-3">{problem.title}</h3>
                        <p className="text-gray-300 leading-relaxed">{problem.description}</p>
                      </div>
                    </div>
                  </PremiumCardContent>
                </PremiumCard>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* SOLUTION SECTION */}
      <Section className="py-16 bg-gradient-to-b from-[#1A1F2E] to-[#0B0E11] relative w-full max-w-full overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {copy.solution.title}
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                Trader Profesional Community menawarkan pendekatan yang berbeda dan bertanggung jawab.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {copy.solution.items.map((item, index) => (
                <PremiumCard key={index} className="border border-green-500/20 bg-white/5 rounded-2xl overflow-hidden hover:border-green-500/40 transition-all duration-300">
                  <PremiumCardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl mb-4">{item.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-green-400 mb-3">{item.title}</h3>
                        <p className="text-gray-300 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </PremiumCardContent>
                </PremiumCard>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* INFRASTRUCTURE SECTION */}
      <Section className="py-16 bg-[#0B0E11] relative w-full max-w-full overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto">
            <PremiumCard className="border border-blue-500/20 bg-white/5 rounded-2xl overflow-hidden">
              <PremiumCardContent className="p-8">
                <div className="text-center">
                  <div className="text-6xl mb-6">🏗️</div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-4">Infrastruktur Blockchain</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {copy.infrastructure}
                  </p>
                </div>
              </PremiumCardContent>
            </PremiumCard>
          </div>
        </Container>
      </Section>

      {/* IDENTITY SECTION */}
      <Section className="py-16 bg-gradient-to-b from-[#0B0E11] to-[#1A1F2E] relative w-full max-w-full overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {copy.identity.title}
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
                {copy.identity.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <PremiumCard className="border border-purple-500/20 bg-white/5 rounded-2xl overflow-hidden h-full">
                  <PremiumCardContent className="p-6">
                    <h3 className="text-xl font-bold text-purple-400 mb-4">Identitas Utama</h3>
                    <ul className="space-y-3">
                      {copy.identity.points.map((point, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <svg className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </PremiumCardContent>
                </PremiumCard>
              </div>
              
              <div>
                <PremiumCard className="border border-amber-500/20 bg-white/5 rounded-2xl overflow-hidden h-full">
                  <PremiumCardContent className="p-6">
                    <h3 className="text-xl font-bold text-amber-400 mb-4">Nilai Inti</h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      Trader Profesional Community dibangun di atas fondasi:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                        <span className="text-gray-300">Integritas & Transparansi</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                        <span className="text-gray-300">Edukasi Bertanggung Jawab</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                        <span className="text-gray-300">Perlindungan Komunitas</span>
                      </li>
                    </ul>
                  </PremiumCardContent>
                </PremiumCard>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FOR WHO SECTION */}
      <Section className="py-16 bg-[#1A1F2E] relative w-full max-w-full overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {copy.forWho.title}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <PremiumCard className="border border-green-500/20 bg-white/5 rounded-2xl overflow-hidden">
                <PremiumCardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">✅</div>
                    <h3 className="text-xl font-bold text-green-400 mb-4">Cocok Untuk:</h3>
                  </div>
                  <ul className="space-y-3">
                    {copy.forWho.goodFit.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </PremiumCardContent>
              </PremiumCard>
              
              <PremiumCard className="border border-red-500/20 bg-white/5 rounded-2xl overflow-hidden">
                <PremiumCardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">❌</div>
                    <h3 className="text-xl font-bold text-red-400 mb-4">Tidak Cocok Untuk:</h3>
                  </div>
                  <ul className="space-y-3">
                    {copy.forWho.notFit.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </PremiumCardContent>
              </PremiumCard>
            </div>
          </div>
        </Container>
      </Section>

      {/* CONNECTIONS SECTION */}
      <Section className="py-16 bg-gradient-to-b from-[#1A1F2E] to-[#0B0E11] relative w-full max-w-full overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {copy.connections.title}
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                Semua halaman Trader Profesional Community terhubung dalam satu ekosistem edukasi yang kohesif.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {copy.connections.items.map((connection, index) => (
                <PremiumCard key={index} className="border border-amber-500/20 bg-white/5 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all duration-300">
                  <PremiumCardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl text-amber-400">📄</div>
                      <div>
                        <h3 className="text-lg font-bold text-amber-400 mb-2">{connection.page}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">{connection.description}</p>
                        <Link 
                          href={connection.page === 'Home' ? `/${lang}` : 
                                connection.page === 'Why Trader Profesional Community' ? `/${lang}/why-tpc` :
                                connection.page === 'Presale' ? `/${lang}/presale` :
                                `/${lang}/transparency`}
                          className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors duration-200 mt-3"
                        >
                          Kunjungi Halaman
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
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
                Bergabung dengan Komunitas Edukasi
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Trader Profesional Community membuka pintu menuju edukasi trading yang bertanggung jawab dan transparan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`/${lang}/transparency`}>
                  <PremiumButton className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white border-0 shadow-lg transform hover:-translate-y-1 transition-all duration-300 font-semibold">
                    {copy.cta.primary}
                  </PremiumButton>
                </Link>
                <Link href={`/${lang}/presale`}>
                  <PremiumButton variant="outline" className="w-full sm:w-auto border-amber-500/30 text-amber-400 hover:bg-amber-500/10 hover:border-amber-500/50 transition-all duration-300 font-semibold">
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
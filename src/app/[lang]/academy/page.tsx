import { normalizeLang, type LangParams } from "@/lib/lang-helpers";
import { homeCopy } from "@/content/homeCopy";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PremiumCard, PremiumCardHeader, PremiumCardContent } from "@/components/ui/PremiumCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { BadgeRow } from "@/components/ui/BadgeRow";
import { StatRow } from "@/components/ui/StatRow";
import { publicPath } from "@/lib/lang-helpers";

interface AcademyPageProps {
  params: LangParams;
}

export function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'id' }
  ];
}

export default function AcademyPage({ params }: AcademyPageProps) {
  const lang = normalizeLang(params.lang);
  const copy = homeCopy[lang];

  const academyContent = {
    hero: {
      title: lang === 'en' ? 'Trading Academy' : 'Akademi Trading',
      subtitle: lang === 'en' 
        ? 'Master trading with structured learning paths from beginner to advanced.'
        : 'Kuasai trading dengan jalur pembelajaran terstruktur dari pemula hingga mahir.',
    },
    trustBadges: lang === 'en' 
      ? ['Expert Instructors', 'Practical Learning', 'Community Support']
      : ['Instruktur Ahli', 'Pembelajaran Praktis', 'Dukungan Komunitas'],
    learningPaths: [
      {
        level: lang === 'en' ? 'Beginner' : 'Pemula',
        description: lang === 'en' 
          ? 'Start your trading journey with fundamental concepts and basic strategies.'
          : 'Mulai perjalanan trading dengan konsep fundamental dan strategi dasar.',
        icon: '📚',
        courses: 8,
        access: 'Free'
      },
      {
        level: lang === 'en' ? 'Intermediate' : 'Menengah',
        description: lang === 'en' 
          ? 'Deepen your knowledge with advanced technical and fundamental analysis techniques.'
          : 'Perdalam pengetahuan Anda dengan teknik analisis teknis dan fundamental yang canggih.',
        icon: '📈',
        courses: 12,
        access: 'Premium'
      },
      {
        level: lang === 'en' ? 'Advanced' : 'Mahir',
        description: lang === 'en' 
          ? 'Master professional trading strategies and risk management for experienced traders.'
          : 'Kuasai strategi trading profesional dan manajemen risiko untuk trader berpengalaman.',
        icon: '🎯',
        courses: 6,
        access: 'Expert'
      }
    ],
    categories: [
      {
        title: lang === 'en' ? 'Technical Analysis' : 'Analisis Teknis',
        description: lang === 'en' 
          ? 'Chart patterns, indicators, and market structure analysis.'
          : 'Pola chart, indikator, dan analisis struktur pasar.',
        courses: 4
      },
      {
        title: lang === 'en' ? 'Risk Management' : 'Manajemen Risiko',
        description: lang === 'en' 
          ? 'Position sizing, stop-loss, and portfolio diversification strategies.'
          : 'Strategi ukuran posisi, stop-loss, dan diversifikasi portofolio.',
        courses: 6
      },
      {
        title: lang === 'en' ? 'Trading Psychology' : 'Psikologi Trading',
        description: lang === 'en' 
          ? 'Emotion control, discipline, and mental training for traders.'
          : 'Kontrol emosi, disiplin, dan latihan mental untuk trader.',
        courses: 4
      },
      {
        title: lang === 'en' ? 'Platform Tools' : 'Alat Platform',
        description: lang === 'en' 
          ? 'Trading platform usage, security, and analytics optimization.'
          : 'Penggunaan platform trading, keamanan, dan optimasi analitik.',
        courses: 3
      }
    ],
    resources: [
      {
        title: lang === 'en' ? 'Video Tutorials' : 'Tutorial Video',
        description: lang === 'en' 
          ? 'Step-by-step video guides for common trading scenarios.'
          : 'Panduan video langkah demi langkah untuk skenario trading umum.',
        stats: [
          { label: lang === 'en' ? 'Total Videos' : 'Total Video', value: '45+' },
          { label: lang === 'en' ? 'Watch Time' : 'Waktu Tonton', value: '12+ hours' }
        ]
      },
      {
        title: lang === 'en' ? 'Trading Simulations' : 'Simulasi Trading',
        description: lang === 'en' 
          ? 'Practice with risk-free trading simulations before real trading.'
          : 'Latihan dengan simulasi trading bebas risiko sebelum trading real.',
        stats: [
          { label: lang === 'en' ? 'Simulations' : 'Simulasi', value: '20+' },
          { label: lang === 'en' ? 'Success Rate' : 'Tingkat Keberhasilan', value: '85%' }
        ]
      },
      {
        title: lang === 'en' ? 'Community Support' : 'Dukungan Komunitas',
        description: lang === 'en' 
          ? 'Get help from experienced traders in our community forums.'
          : 'Dapatkan bantuan dari trader berpengalaman di forum komunitas kami.',
        stats: [
          { label: lang === 'en' ? 'Active Members' : 'Anggota Aktif', value: '1,200+' },
          { label: lang === 'en' ? 'Daily Posts' : 'Posting Harian', value: '50+' }
        ]
      }
    ]
  };

  return (
    <PremiumShell>
      {/* Hero Section */}
      <Section className="pt-6 pb-12">
        <Container>
          <PremiumCard variant="glass" className="text-center p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold text-fg mb-6 leading-tight">
                {academyContent.hero.title}
              </h1>
              <p className="text-lg text-muted mb-8 max-w-3xl mx-auto leading-relaxed">
                {academyContent.hero.subtitle}
              </p>
              
              {/* Trust Badges */}
              <BadgeRow items={academyContent.trustBadges} className="justify-center" />
            </div>
          </PremiumCard>
        </Container>
      </Section>

      {/* Section Divider */}
      <div className="border-t border-border/10"></div>

      {/* Learning Paths Section */}
      <Section>
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-fg mb-4">
              {lang === 'en' ? 'Learning Paths' : 'Jalur Pembelajaran'}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {academyContent.learningPaths.map((path: any, index: number) => (
              <PremiumCard key={index}>
                <PremiumCardContent>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl mb-4">
                      {path.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-fg mb-3">
                      {path.level}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mb-4">
                      {path.description}
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        path.access === 'Free' ? 'bg-green-100 text-green-800' :
                        path.access === 'Premium' ? 'bg-blue-100 text-blue-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {path.access}
                      </span>
                      <span className="text-sm text-muted">
                        {path.courses} {lang === 'en' ? 'courses' : 'kursus'}
                      </span>
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

      {/* Course Categories Section */}
      <Section>
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-fg mb-4">
              {lang === 'en' ? 'Course Categories' : 'Kategori Kursus'}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academyContent.categories.map((category: any, index: number) => (
              <PremiumCard key={index}>
                <PremiumCardContent>
                  <h4 className="text-base font-semibold text-fg mb-3">
                    {category.title}
                  </h4>
                  <p className="text-sm text-muted leading-relaxed mb-3">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted">
                      {category.courses} {lang === 'en' ? 'courses' : 'kursus'}
                    </span>
                    <PremiumButton size="sm" variant="secondary">
                      {lang === 'en' ? 'Browse' : 'Jelajahi'}
                    </PremiumButton>
                  </div>
                </PremiumCardContent>
              </PremiumCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Section Divider */}
      <div className="border-t border-border/10"></div>

      {/* Learning Resources Section */}
      <Section>
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-fg mb-4">
              {lang === 'en' ? 'Learning Resources' : 'Sumber Pembelajaran'}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {academyContent.resources.map((resource: any, index: number) => (
              <PremiumCard key={index}>
                <PremiumCardContent>
                  <h4 className="text-base font-semibold text-fg mb-3">
                    {resource.title}
                  </h4>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {resource.description}
                  </p>
                  <StatRow items={resource.stats} />
                </PremiumCardContent>
              </PremiumCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Section Divider */}
      <div className="border-t border-border/10"></div>

      {/* CTA Section */}
      <Section>
        <Container>
          <div className="text-center">
            <PremiumButton 
              href={publicPath(lang, '/member')}
              size="md"
              fullWidth
            >
              {lang === 'en' ? 'Start Learning' : 'Mulai Belajar'}
            </PremiumButton>
          </div>
        </Container>
      </Section>
    </PremiumShell>
  );
}

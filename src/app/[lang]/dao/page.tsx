import { normalizeLang, type LangParams } from "@/lib/lang-helpers";
import { daoCopy } from "@/content/daoCopy";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PremiumCard, PremiumCardHeader, PremiumCardContent } from "@/components/ui/PremiumCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { BadgeRow } from "@/components/ui/BadgeRow";
import { StatRow } from "@/components/ui/StatRow";
import { publicPath } from "@/lib/lang-helpers";

interface DAOPageProps {
  params: LangParams;
}

export function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'id' }
  ];
}

export default function DAOPage({ params }: DAOPageProps) {
  const lang = normalizeLang(params.lang);
  const copy = daoCopy[lang];

  const daoContent = {
    hero: {
      title: lang === 'en' ? 'DAO Governance' : 'Tata Kelola DAO',
      subtitle: lang === 'en' 
        ? 'Community-driven platform governance and decision making.'
        : 'Tata kelola platform yang digerakan oleh komunitas dan pengambilan keputusan.',
    },
    trustBadges: lang === 'en' 
      ? ['Community Led', 'Transparent Voting', 'Secure Governance']
      : ['Dipimpin Komunitas', 'Voting Transparan', 'Tata Kelola Aman'],
    features: [
      {
        title: lang === 'en' ? 'Proposal System' : 'Sistem Proposal',
        description: lang === 'en' 
          ? 'Submit and vote on platform improvements.'
          : 'Ajukan dan voting untuk peningkatan platform.',
        icon: '📋'
      },
      {
        title: lang === 'en' ? 'Voting Power' : 'Kekuatan Voting',
        description: lang === 'en' 
          ? 'Token-based voting with transparent results.'
          : 'Voting berbasis token dengan hasil transparan.',
        icon: '🗳️'
      },
      {
        title: lang === 'en' ? 'Treasury Management' : 'Manajemen Treasury',
        description: lang === 'en' 
          ? 'Community-controlled fund allocation.'
          : 'Alokasi dana yang dikendalikan komunitas.',
        icon: '💰'
      },
      {
        title: lang === 'en' ? 'Implementation Tracking' : 'Pelacakan Implementasi',
        description: lang === 'en' 
          ? 'Monitor proposal execution and results.'
          : 'Pantau eksekusi proposal dan hasil.',
        icon: '📊'
      }
    ],
    howItWorks: {
      title: lang === 'en' ? 'How DAO Works' : 'Cara DAO Bekerja',
      subtitle: lang === 'en' 
        ? 'Simple and transparent governance process.'
        : 'Proses tata kelola yang sederhana dan transparan.',
      steps: [
        lang === 'en' 
          ? 'Community members submit proposals for platform improvements'
          : 'Anggota komunitas mengajukan proposal untuk peningkatan platform',
        lang === 'en' 
          ? 'Token holders review and discuss proposals'
          : 'Pemegang token meninjau dan mendiskusikan proposal',
        lang === 'en' 
          ? 'Secure voting determines proposal outcomes'
          : 'Voting aman menentukan hasil proposal'
      ]
    },
    stats: [
      { label: lang === 'en' ? 'Active Proposals' : 'Proposal Aktif', value: '12' },
      { label: lang === 'en' ? 'Total Votes Cast' : 'Total Voting', value: '1,247' },
      { label: lang === 'en' ? 'Success Rate' : 'Tingkat Keberhasilan', value: '87%' }
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
                {daoContent.hero.title}
              </h1>
              <p className="text-lg text-muted mb-8 max-w-3xl mx-auto leading-relaxed">
                {daoContent.hero.subtitle}
              </p>
              
              {/* Trust Badges */}
              <BadgeRow items={daoContent.trustBadges} className="justify-center" />
            </div>
          </PremiumCard>
        </Container>
      </Section>

      {/* Section Divider */}
      <div className="border-t border-border/10"></div>

      {/* Features Section */}
      <Section>
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-fg mb-4">
              {lang === 'en' ? 'Key Features' : 'Fitur Utama'}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {daoContent.features.map((feature: any, index: number) => (
              <PremiumCard key={index}>
                <PremiumCardContent>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-fg mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
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

      {/* How It Works Section */}
      <Section>
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-fg mb-4">
              {daoContent.howItWorks.title}
            </h2>
            <p className="text-sm text-muted leading-relaxed max-w-2xl mx-auto">
              {daoContent.howItWorks.subtitle}
            </p>
          </div>
          
          <div className="space-y-4">
            {daoContent.howItWorks.steps.map((step: string, index: number) => (
              <PremiumCard key={index}>
                <PremiumCardContent>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-black font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted leading-relaxed">
                        {step}
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

      {/* Stats Section */}
      <Section>
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-fg mb-4">
              {lang === 'en' ? 'DAO Statistics' : 'Statistik DAO'}
            </h2>
          </div>
          
          <PremiumCard>
            <PremiumCardContent>
              <StatRow items={daoContent.stats} />
            </PremiumCardContent>
          </PremiumCard>
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
              {lang === 'en' ? 'View DAO Dashboard' : 'Lihat Dashboard DAO'}
            </PremiumButton>
          </div>
        </Container>
      </Section>
    </PremiumShell>
  );
}

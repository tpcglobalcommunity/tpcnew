import { Metadata } from "next";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PremiumCard, PremiumCardHeader, PremiumCardContent } from "@/components/ui/PremiumCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { BadgeRow } from "@/components/ui/BadgeRow";
import { StatRow } from "@/components/ui/StatRow";
import { publicPath, normalizeLang, type LangParams } from "@/lib/lang-helpers";
import { homeCopy } from "@/content/homeCopy";

interface PresaleDAOPageProps {
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
  const copy = homeCopy[lang];
  
  return {
    title: lang === 'en' ? 'Presale & DAO | TPC Global' : 'Presale & DAO | TPC Global',
    description: lang === 'en' 
      ? 'Join TPC presale and participate in DAO governance - Educational platform with community decision making.'
      : 'Bergabung dengan presale TPC dan partisipasi dalam tata kelola DAO - Platform pendidikan dengan pengambilan keputusan komunitas.',
    openGraph: {
      title: lang === 'en' ? 'Presale & DAO | TPC Global' : 'Presale & DAO | TPC Global',
      description: lang === 'en' 
        ? 'Join TPC presale and participate in DAO governance - Educational platform with community decision making.'
        : 'Bergabung dengan presale TPC dan partisipasi dalam tata kelola DAO - Platform pendidikan dengan pengambilan keputusan komunitas.',
      type: "website",
    },
  };
}

export default function PresaleDAOPage({ params }: PresaleDAOPageProps) {
  const lang = normalizeLang(params.lang);
  const copy = homeCopy[lang];

  const presaleContent = {
    hero: {
      title: lang === 'en' ? 'Presale & DAO' : 'Presale & DAO',
      subtitle: lang === 'en' 
        ? 'Join TPC presale and participate in DAO governance.'
        : 'Bergabung dengan presale TPC dan partisipasi dalam tata kelola DAO.',
      cta: lang === 'en' ? 'Join Now' : 'Bergabung Sekarang'
    },
    sections: [
      {
        title: lang === 'en' ? 'Presale Access' : 'Akses Presale',
        items: lang === 'en' ? [
          'Buy TPC tokens with USDC or ETH',
          'Get early bird bonuses',
          'Secure wallet connection required',
          'Transparent token allocation'
        ] : [
          'Beli token TPC dengan USDC atau ETH',
          'Dapatkan bonus early bird',
          'Koneksi wallet aman diperlukan',
          'Alokasi token transparan'
        ]
      },
      {
        title: lang === 'en' ? 'DAO Participation' : 'Partisipasi DAO',
        items: lang === 'en' ? [
          'Vote on platform proposals',
          'Submit community proposals',
          'View governance records',
          'Participate in decision making'
        ] : [
          'Pilih pada proposal platform',
          'Ajukan proposal komunitas',
          'Lihat rekam tata kelola',
          'Partisipasi dalam pengambilan keputusan'
        ]
      },
      {
        title: lang === 'en' ? 'Combined Benefits' : 'Keuntungan Gabungan',
        items: lang === 'en' ? [
          'Token utility + governance rights',
          'Early access to new features',
          'Community voting power',
          'Educational resource access'
        ] : [
          'Utilitas token + hak tata kelola',
          'Akses awal ke fitur baru',
          'Kekuatan voting komunitas',
          'Akses sumber daya pendidikan'
        ]
      },
      {
        title: lang === 'en' ? 'How It Works' : 'Cara Kerja',
        items: lang === 'en' ? [
          '1. Purchase TPC tokens',
          '2. Connect wallet to platform',
          '3. Access DAO voting interface',
          '4. Participate in governance'
        ] : [
          '1. Beli token TPC',
          '2. Hubungkan wallet ke platform',
          '3. Akses interface voting DAO',
          '4. Partisipasi dalam tata kelola'
        ]
      }
    ],
    cta: {
      primary: lang === 'en' ? 'Join Presale & DAO' : 'Bergabung Presale & DAO',
      secondary: lang === 'en' ? 'Learn More' : 'Pelajari Lebih Lanjut'
    }
  };

  return (
    <PremiumShell>
      {/* Hero Section */}
      <Section className="pt-16 pb-12">
        <Container>
          <PremiumCard variant="glass" className="text-center p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold text-fg mb-6 md:mb-8 leading-tight">
                {presaleContent.hero.title}
              </h1>
              <p className="text-lg md:text-xl text-muted mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
                {presaleContent.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <PremiumButton 
                  href={publicPath(lang, '/')}
                  size="md"
                  className="transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  {presaleContent.cta.primary}
                </PremiumButton>
              </div>
            </div>
          </PremiumCard>
        </Container>
      </Section>

      {/* Section Divider */}
      <div className="border-t border-border/10"></div>

      {/* Presale & DAO Sections */}
      <Section>
        <Container>
          <div className="space-y-12">
            {presaleContent.sections.map((section, index) => (
              <div key={index} className="text-center mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-fg mb-4">
                  {section.title}
                </h2>
                <PremiumCard>
                  <PremiumCardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {section.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center gap-3 p-4 bg-surface/50 rounded-lg">
                          <span className="text-2xl">🚀</span>
                          <span className="text-sm text-muted">{item}</span>
                        </div>
                      ))}
                    </div>
                  </PremiumCardContent>
                </PremiumCard>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Section Divider */}
      <div className="border-t border-border/10"></div>

      {/* CTA Section */}
      <Section>
        <Container>
          <PremiumCard variant="glass" className="text-center p-8 md:p-12">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-xl md:text-2xl font-bold text-fg mb-6">
                {presaleContent.cta.title}
              </h2>
              <p className="text-lg text-muted mb-8 leading-relaxed">
                {presaleContent.cta.primary}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <PremiumButton 
                  href={publicPath(lang, '/presale')}
                  size="md"
                  className="transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  {presaleContent.cta.secondary}
                </PremiumButton>
                <PremiumButton 
                  href={publicPath(lang, '/dao')}
                  size="md"
                  variant="secondary"
                  className="transform hover:scale-105 transition-all duration-300"
                >
                  {presaleContent.cta.secondary}
                </PremiumButton>
              </div>
            </div>
          </PremiumCard>
        </Container>
      </Section>
    </PremiumShell>
  );
}

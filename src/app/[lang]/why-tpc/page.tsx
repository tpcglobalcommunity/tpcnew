import { Metadata } from "next";
import { normalizeLang, type LangParams, publicPath } from "@/lib/lang-helpers";
import { homeCopy } from "@/content/homeCopy";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PremiumCard, PremiumCardHeader, PremiumCardContent } from "@/components/ui/PremiumCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { BadgeRow } from "@/components/ui/BadgeRow";
import { StatRow } from "@/components/ui/StatRow";

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
  const copy = homeCopy[lang];
  
  return {
    title: lang === 'en' ? 'Why TPC Global? | About Us' : 'Mengapa TPC Global? | Tentang Kami',
    description: lang === 'en' 
      ? 'Learn about TPC Global - Our mission, values, and commitment to trading education excellence.'
      : 'Pelajari tentang TPC Global - Misi, nilai, dan komitmen kami terhadap keunggulan pendidikan trading.',
    openGraph: {
      title: lang === 'en' ? 'Why TPC Global? | About Us' : 'Mengapa TPC Global? | Tentang Kami',
      description: lang === 'en' 
        ? 'Learn about TPC Global - Our mission, values, and commitment to trading education excellence.'
        : 'Pelajari tentang TPC Global - Misi, nilai, dan komitmen kami terhadap keunggulan pendidikan trading.',
      type: "website",
    },
  };
}

export default function WhyTPCPage({ params }: WhyTPCPageProps) {
  const lang = normalizeLang(params.lang);
  const copy = homeCopy[lang];

  const whyContent = {
    hero: {
      title: lang === 'en' ? 'Why TPC Global?' : 'Mengapa TPC Global?',
      subtitle: lang === 'en' 
        ? 'Discover our mission, values, and what makes us different in the trading education space.'
        : 'Temukan misi, nilai, dan yang membuat kami berbeda dalam ruang pendidikan trading.',
    },
    sections: [
      {
        title: lang === 'en' ? 'Our Mission' : 'Misi Kami',
        items: lang === 'en' ? [
          'Provide quality trading education',
          'Build a supportive community',
          'Maintain transparency and integrity',
          'Focus on practical skills development'
        ] : [
          'Menyediakan pendidikan trading berkualitas',
          'Membangun komunitas yang suportif',
          'Menjaga transparansi dan integritas',
          'Fokus pada pengembangan keterampilan praktis'
        ]
      },
      {
        title: lang === 'en' ? 'Our Values' : 'Nilai-Nilai Kami',
        items: lang === 'en' ? [
          'Education over speculation',
          'Community over competition',
          'Transparency over secrecy',
          'Long-term success over quick profits'
        ] : [
          'Pendidikan daripada spekulasi',
          'Komunitas daripada kompetisi',
          'Transparansi daripada rahasia',
          'Kesukses jangka panjang daripada profit cepat'
        ]
      },
      {
        title: lang === 'en' ? 'What Makes Us Different' : 'Yang Membuat Kami Berbeda',
        items: lang === 'en' ? [
          'Professional trading community focus',
          'Educational-first approach',
          'No profit promises or guarantees',
          'Transparent operations and governance'
        ] : [
          'Fokus komunitas trading profesional',
          'Pendekatan pendidikan-pertama',
          'Tidak ada janji atau jaminan profit',
          'Operasi transparan dan tata kelola'
        ]
      }
    ],
    cta: {
      title: lang === 'en' ? 'Ready to Start?' : 'Siap Memulai?',
      description: lang === 'en' 
        ? 'Join our community and begin your trading education journey today.'
        : 'Bergabung dengan komunitas kami dan mulai perjalanan pendidikan trading Anda hari ini.',
      primary: lang === 'en' ? 'Join Community' : 'Bergabung Komunitas',
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
                {whyContent.hero.title}
              </h1>
              <p className="text-lg md:text-xl text-muted mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
                {whyContent.hero.subtitle}
              </p>
            </div>
          </PremiumCard>
        </Container>
      </Section>

      {/* Section Divider */}
      <div className="border-t border-border/10"></div>

      {/* Content Sections */}
      <Section>
        <Container>
          <div className="space-y-12">
            {whyContent.sections.map((section, index) => (
              <div key={index} className="text-center mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-fg mb-6">
                  {section.title}
                </h2>
                <PremiumCard>
                  <PremiumCardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {section.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center gap-3 p-4 bg-surface/50 rounded-lg">
                          <span className="text-2xl">🎯</span>
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
                {whyContent.cta.title}
              </h2>
              <p className="text-lg text-muted mb-8 leading-relaxed">
                {whyContent.cta.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <PremiumButton 
                  href={publicPath(lang, '/')}
                  size="md"
                  className="transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  {whyContent.cta.primary}
                </PremiumButton>
                <PremiumButton 
                  href={publicPath(lang, '/academy')}
                  variant="secondary"
                  size="md"
                  className="transform hover:scale-105 transition-all duration-300"
                >
                  {whyContent.cta.secondary}
                </PremiumButton>
              </div>
            </div>
          </PremiumCard>
        </Container>
      </Section>
    </PremiumShell>
  );
}

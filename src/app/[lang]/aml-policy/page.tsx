import { normalizeLang, type LangParams, publicPath } from "@/lib/lang-helpers";
import { homeCopy } from "@/content/homeCopy";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PremiumCard, PremiumCardHeader, PremiumCardContent } from "@/components/ui/PremiumCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { BadgeRow } from "@/components/ui/BadgeRow";
import { StatRow } from "@/components/ui/StatRow";
import { Metadata } from "next";

interface AMLPageProps {
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
    title: lang === 'en' ? 'AML Policy | TPC Global' : 'Kebijakan AML | TPC Global',
    description: lang === 'en' 
      ? 'TPC Global Anti-Money Laundering Policy - Compliance and regulatory requirements.'
      : 'Kebijakan Anti-Pencucian Uang TPC Global - Kepatuhan dan persyaratan regulasi.',
    openGraph: {
      title: lang === 'en' ? 'AML Policy | TPC Global' : 'Kebijakan AML | TPC Global',
      description: lang === 'en' 
        ? 'TPC Global Anti-Money Laundering Policy - Compliance and regulatory requirements.'
        : 'Kebijakan Anti-Pencucian Uang TPC Global - Kepatuhan dan persyaratan regulasi.',
      type: "website",
    },
  };
}

export default function AMLPage({ params }: AMLPageProps) {
  const lang = normalizeLang(params.lang);
  const copy = homeCopy[lang];

  const amlContent = {
    hero: {
      title: lang === 'en' ? 'AML Policy' : 'Kebijakan AML',
      subtitle: lang === 'en' 
        ? 'Our commitment to preventing financial crimes and ensuring regulatory compliance.'
        : 'Komitmen kami dalam mencegah kejahatan keuangan dan memastikan kepatuhan regulasi.',
    },
    sections: [
      {
        title: lang === 'en' ? 'Customer Due Diligence' : 'Due Diligence Pelanggan',
        items: lang === 'en' ? [
          'Identity verification requirements',
          'Source of funds documentation',
          'Transaction monitoring and reporting',
          'Risk assessment and profiling'
        ] : [
          'Persyaratan verifikasi identitas',
          'Dokumentasi sumber dana',
          'Pantauan transaksi dan pelaporan',
          'Penilaian dan profil risiko'
        ]
      },
      {
        title: lang === 'en' ? 'Transaction Monitoring' : 'Pantauan Transaksi',
        items: lang === 'en' ? [
          'Real-time transaction analysis',
          'Suspicious activity reporting',
          'Automated alert systems',
          'Regulatory reporting requirements'
        ] : [
          'Analisis transaksi real-time',
          'Pelaporan aktivitas mencurigakan',
          'Sistem peringatan otomatis',
          'Persyaratan pelaporan regulasi'
        ]
      },
      {
        title: lang === 'en' ? 'Compliance Measures' : 'Langkah Kepatuhan',
        items: lang === 'en' ? [
          'Regular compliance audits',
          'Staff training and awareness',
          'Independent compliance reviews',
          'Regulatory relationship management'
        ] : [
          'Audit kepatuhan berkala',
          'Pelatihan dan kesadaran staf',
          'Ulasan kepatuhan independen',
          'Manajemen hubungan regulasi'
        ]
      }
    ],
    contact: {
      title: lang === 'en' ? 'Compliance Contact' : 'Kontak Kepatuhan',
      email: 'aml@tpcglobal.io',
      description: lang === 'en' 
        ? 'For AML compliance inquiries, please contact our compliance team.'
        : 'Untuk pertanyaan kepatuhan AML, silakan hubungi tim kepatuhan kami.'
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
                {amlContent.hero.title}
              </h1>
              <p className="text-lg md:text-xl text-muted mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
                {amlContent.hero.subtitle}
              </p>
            </div>
          </PremiumCard>
        </Container>
      </Section>

      {/* Section Divider */}
      <div className="border-t border-border/10"></div>

      {/* AML Sections */}
      <Section>
        <Container>
          <div className="space-y-12">
            {amlContent.sections.map((section, index) => (
              <div key={index} className="text-center mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-fg mb-6">
                  {section.title}
                </h2>
                <PremiumCard>
                  <PremiumCardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {section.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center gap-3 p-4 bg-surface/50 rounded-lg">
                          <span className="text-2xl">🛡️</span>
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

      {/* Contact Section */}
      <Section>
        <Container>
          <PremiumCard variant="glass" className="text-center p-8 md:p-12">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-xl md:text-2xl font-bold text-fg mb-6">
                {amlContent.contact.title}
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <span className="text-2xl">🔍</span>
                  <a 
                    href={`mailto:${amlContent.contact.email}`}
                    className="text-accent hover:text-accent2 text-lg font-medium transition-colors duration-300"
                  >
                    {amlContent.contact.email}
                  </a>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  {amlContent.contact.description}
                </p>
              </div>
            </div>
          </PremiumCard>
        </Container>
      </Section>
    </PremiumShell>
  );
}

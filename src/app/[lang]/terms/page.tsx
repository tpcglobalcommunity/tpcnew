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

interface TermsPageProps {
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
    title: lang === 'en' ? 'Terms & Conditions | TPC Global' : 'Syarat & Ketentuan | TPC Global',
    description: lang === 'en' 
      ? 'TPC Global terms and conditions - Rules and guidelines for using our educational platform.'
      : 'Syarat dan ketentuan TPC Global - Aturan dan panduan untuk menggunakan platform pendidikan kami.',
    openGraph: {
      title: lang === 'en' ? 'Terms & Conditions | TPC Global' : 'Syarat & Ketentuan | TPC Global',
      description: lang === 'en' 
        ? 'TPC Global terms and conditions - Rules and guidelines for using our educational platform.'
        : 'Syarat dan ketentuan TPC Global - Aturan dan panduan untuk menggunakan platform pendidikan kami.',
      type: "website",
    },
  };
}

export default function TermsPage({ params }: TermsPageProps) {
  const lang = normalizeLang(params.lang);
  const copy = homeCopy[lang];

  const termsContent = {
    hero: {
      title: lang === 'en' ? 'Terms & Conditions' : 'Syarat & Ketentuan',
      subtitle: lang === 'en' 
        ? 'By using TPC Global, you agree to these terms and conditions.'
        : 'Dengan menggunakan TPC Global, Anda setuju dengan syarat dan ketentuan ini.',
    },
    sections: [
      {
        title: lang === 'en' ? 'Educational Services' : 'Layanan Pendidikan',
        items: lang === 'en' ? [
          'Trading education courses and materials',
          'Community access and participation',
          'Educational resources and tools',
          'No financial advice or profit guarantees'
        ] : [
          'Kursus dan materi pendidikan trading',
          'Akses dan partisipasi komunitas',
          'Sumber daya dan alat pendidikan',
          'Tidak ada saran keuangan atau jaminan profit'
        ]
      },
      {
        title: lang === 'en' ? 'User Responsibilities' : 'Tanggung Jawab Pengguna',
        items: lang === 'en' ? [
          'Provide accurate information when registering',
          'Use platform for educational purposes only',
          'Respect community guidelines and policies',
          'Maintain security of your account credentials'
        ] : [
          'Menyediakan informasi akurat saat mendaftar',
          'Menggunakan platform hanya untuk tujuan pendidikan',
          'Menghormati panduan komunitas dan kebijakan',
          'Menjaga keamanan kredensial akun Anda'
        ]
      },
      {
        title: lang === 'en' ? 'Limitations and Disclaimers' : 'Keterbatasan dan Penafian',
        items: lang === 'en' ? [
          'No profit guarantees or promises',
          'Trading involves financial risk',
          'Educational content only, not financial advice',
          'Past performance does not guarantee future results'
        ] : [
          'Tidak ada jaminan atau janji profit',
          'Trading melibatkan risiko keuangan',
          'Konten pendidikan saja, bukan saran keuangan',
          'Performa masa lalu tidak menjamin hasil masa depan'
        ]
      }
    ],
    contact: {
      title: lang === 'en' ? 'Questions?' : 'Pertanyaan?',
      email: 'legal@tpcglobal.io',
      description: lang === 'en' 
        ? 'If you have questions about these terms, please contact our legal team.'
        : 'Jika Anda memiliki pertanyaan tentang syarat ini, silakan hubungi tim hukum kami.'
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
                {termsContent.hero.title}
              </h1>
              <p className="text-lg md:text-xl text-muted mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
                {termsContent.hero.subtitle}
              </p>
            </div>
          </PremiumCard>
        </Container>
      </Section>

      {/* Section Divider */}
      <div className="border-t border-border/10"></div>

      {/* Terms Sections */}
      <Section>
        <Container>
          <div className="space-y-12">
            {termsContent.sections.map((section, index) => (
              <div key={index} className="text-center mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-fg mb-6">
                  {section.title}
                </h2>
                <PremiumCard>
                  <PremiumCardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {section.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center gap-3 p-4 bg-surface/50 rounded-lg">
                          <span className="text-2xl">📋</span>
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
                {termsContent.contact.title}
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <span className="text-2xl">⚖️</span>
                  <a 
                    href={`mailto:${termsContent.contact.email}`}
                    className="text-accent hover:text-accent2 text-lg font-medium transition-colors duration-300"
                  >
                    {termsContent.contact.email}
                  </a>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  {termsContent.contact.description}
                </p>
              </div>
            </div>
          </PremiumCard>
        </Container>
      </Section>
    </PremiumShell>
  );
}

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

interface PrivacyPageProps {
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
    title: lang === 'en' ? 'Privacy Policy | TPC Global' : 'Kebijakan Privasi | TPC Global',
    description: lang === 'en' 
      ? 'TPC Global privacy policy - How we collect, use, and protect your personal information.'
      : 'Kebijakan privasi TPC Global - Bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda.',
    openGraph: {
      title: lang === 'en' ? 'Privacy Policy | TPC Global' : 'Kebijakan Privasi | TPC Global',
      description: lang === 'en' 
        ? 'TPC Global privacy policy - How we collect, use, and protect your personal information.'
        : 'Kebijakan privasi TPC Global - Bagaimana kami mengumpulkan, menggunakan, dan Melindungi informasi pribadi Anda.',
      type: "website",
    },
  };
}

export default function PrivacyPage({ params }: PrivacyPageProps) {
  const lang = normalizeLang(params.lang);
  const copy = homeCopy[lang];

  const privacyContent = {
    hero: {
      title: lang === 'en' ? 'Privacy Policy' : 'Kebijakan Privasi',
      subtitle: lang === 'en' 
        ? 'Your privacy is important to us. This policy explains how we collect, use, and protect your information.'
        : 'Privasi Anda penting bagi kami. Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda.',
    },
    sections: [
      {
        title: lang === 'en' ? 'Information We Collect' : 'Informasi yang Kami Kumpulkan',
        items: lang === 'en' ? [
          'Name and contact information',
          'Email address and communication preferences',
          'Trading education progress and performance',
          'Technical usage data and analytics'
        ] : [
          'Nama dan informasi kontak',
          'Alamat email dan preferensi komunikasi',
          'Progress pendidikan trading dan performa',
          'Data penggunaan teknis dan analitik'
        ]
      },
      {
        title: lang === 'en' ? 'How We Use Your Information' : 'Bagaimana Kami Menggunakan Informasi Anda',
        items: lang === 'en' ? [
          'Provide educational content and services',
          'Improve user experience and platform features',
          'Communicate important updates and announcements',
          'Analyze platform usage for optimization'
        ] : [
          'Menyediakan konten dan layanan pendidikan',
          'Meningkatkan pengalaman pengguna dan fitur platform',
          'Mengomunikasikan pembaruan dan pengumuman penting',
          'Menganalisis penggunaan platform untuk optimasi'
        ]
      },
      {
        title: lang === 'en' ? 'Data Protection' : 'Perlindungan Data',
        items: lang === 'en' ? [
          'Secure storage and encryption',
          'Limited access to personal information',
          'Regular security audits and updates',
          'Compliance with data protection regulations'
        ] : [
          'Penyimpanan aman dan enkripsi',
          'Akses terbatas ke informasi pribadi',
          'Audit keamanan dan pembaruan berkala',
          'Kepatuhan terhadap regulasi perlindungan data'
        ]
      }
    ],
    contact: {
      title: lang === 'en' ? 'Contact Us' : 'Hubungi Kami',
      email: 'privacy@tpcglobal.io',
      description: lang === 'en' 
        ? 'If you have questions about this privacy policy, please contact us.'
        : 'Jika Anda memiliki pertanyaan tentang kebijakan privasi ini, silakan hubungi kami.'
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
                {privacyContent.hero.title}
              </h1>
              <p className="text-lg md:text-xl text-muted mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
                {privacyContent.hero.subtitle}
              </p>
            </div>
          </PremiumCard>
        </Container>
      </Section>

      {/* Section Divider */}
      <div className="border-t border-border/10"></div>

      {/* Privacy Sections */}
      <Section>
        <Container>
          <div className="space-y-12">
            {privacyContent.sections.map((section, index) => (
              <div key={index} className="text-center mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-fg mb-6">
                  {section.title}
                </h2>
                <PremiumCard>
                  <PremiumCardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {section.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center gap-3 p-4 bg-surface/50 rounded-lg">
                          <span className="text-2xl">🔒</span>
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
                {privacyContent.contact.title}
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <span className="text-2xl">📧</span>
                  <a 
                    href={`mailto:${privacyContent.contact.email}`}
                    className="text-accent hover:text-accent2 text-lg font-medium transition-colors duration-300"
                  >
                    {privacyContent.contact.email}
                  </a>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  {privacyContent.contact.description}
                </p>
              </div>
            </div>
          </PremiumCard>
        </Container>
      </Section>
    </PremiumShell>
  );
}

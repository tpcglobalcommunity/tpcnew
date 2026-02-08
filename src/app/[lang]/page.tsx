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
import { Metadata } from "next";

interface PageProps {
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
    title: `${copy.hero.title} | TPC Global`,
    description: copy.hero.subtitle,
    keywords: 'trading education, gold trading, bitcoin, TPC Global, professional trading, financial education',
    authors: [{ name: 'TPC Global' }],
    creator: 'TPC Global',
    publisher: 'TPC Global',
    formatDetection: { email: 'support@tpcglobal.io' },
    openGraph: {
      title: copy.hero.title,
      description: copy.hero.subtitle,
      type: "website",
      locale: lang === 'id' ? 'id_ID' : 'en_US',
      siteName: 'TPC Global',
      images: [
        {
          url: 'https://tpcglobal.io/og-image.jpg',
          width: 1200,
          height: 630,
          alt: copy.hero.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: copy.hero.title,
      description: copy.hero.subtitle,
      images: ['https://tpcglobal.io/og-image.jpg'],
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
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
    },
  };
}

export default function HomePage({ params }: PageProps) {
  const lang = normalizeLang(params.lang);
  const copy = homeCopy[lang];

  return (
    <PremiumShell>
      {/* Hero Section */}
      <Section className="pt-20 pb-16">
        <Container>
          <PremiumCard variant="glass" className="text-center p-12 md:p-16 lg:p-20">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-fg mb-8 md:mb-12 leading-tight">
                {copy.hero.title}
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-muted mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed">
                {copy.hero.subtitle}
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <PremiumButton 
                  href={publicPath(lang, '/presale')}
                  size="md"
                  className="transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  {copy.hero.ctaPrimary}
                </PremiumButton>
                <PremiumButton 
                  href={publicPath(lang, '/transparency')}
                  variant="secondary"
                  size="md"
                  className="transform hover:scale-105 transition-all duration-300"
                >
                  {copy.hero.ctaSecondary}
                </PremiumButton>
              </div>
            </div>
          </PremiumCard>
        </Container>
      </Section>

      {/* Trust Badges Section */}
      <Section>
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-fg mb-4">
              Trust & Safety
            </h2>
            <p className="text-sm text-muted leading-relaxed max-w-2xl mx-auto">
              Professional trading community with verified transparency and secure operations.
            </p>
          </div>
          <BadgeRow items={copy.trustBadges} className="justify-center" />
        </Container>
      </Section>

      {/* Section Divider */}
      <div className="border-t border-border/10"></div>

      {/* What is TPC Section */}
      <Section>
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-fg mb-4">
              {copy.whatIsTPC.title}
            </h2>
            <p className="text-sm text-muted leading-relaxed max-w-2xl mx-auto">
              {copy.whatIsTPC.description}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {copy.whatIsTPC.points.map((point, index) => (
              <PremiumCard key={index} className="text-center">
                <PremiumCardContent>
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-accent">{index + 1}</span>
                  </div>
                  <p className="text-sm text-fg leading-relaxed">
                    {point}
                  </p>
                </PremiumCardContent>
              </PremiumCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Section Divider */}
      <div className="border-t border-border/10"></div>

      {/* Features Section */}
      <Section>
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-fg mb-4">
              Core Features
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {copy.features.map((feature, index) => (
              <PremiumCard key={index} className="text-center">
                <PremiumCardContent>
                  <div className="text-3xl md:text-4xl mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-fg mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {feature.description}
                  </p>
                  <a 
                    href={publicPath(lang, feature.href)}
                    className="inline-flex items-center text-accent hover:text-accent2 text-sm font-medium transition-colors duration-300"
                  >
                    Learn more →
                  </a>
                </PremiumCardContent>
              </PremiumCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Official Channels Section */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <PremiumCard>
              <PremiumCardContent>
                <h3 className="text-lg font-semibold text-fg mb-3">Official Channels</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📱</span>
                    <div>
                      <p className="text-sm font-medium text-fg">Telegram Channel</p>
                      <a 
                        href="https://t.me/tpcglobalcommunity"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-accent hover:text-accent2 text-sm transition-colors duration-300"
                      >
                        @tpcglobalcommunity
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2zm0 10a2 2 0 002-2v10a2 2 0 002-2z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🌐</span>
                    <div>
                      <p className="text-sm font-medium text-fg">Website</p>
                      <a 
                        href="https://tpcglobal.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-accent hover:text-accent2 text-sm transition-colors duration-300"
                      >
                        tpcglobal.io
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2zm0 10a2 2 0 002-2v10a2 2 0 002-2z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </PremiumCardContent>
            </PremiumCard>
            
            <PremiumCard>
              <PremiumCardContent>
                <h3 className="text-lg font-semibold text-fg mb-3">Legal & Compliance</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📄</span>
                    <div>
                      <p className="text-sm font-medium text-fg">Terms & Conditions</p>
                      <a 
                        href={publicPath(lang, '/terms')}
                        className="inline-flex items-center text-fg hover:text-accent text-sm transition-colors duration-300"
                      >
                        <span className="mr-2">📄</span>
                        Terms & Conditions
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🔒</span>
                    <div>
                      <p className="text-sm font-medium text-fg">Privacy Policy</p>
                      <a 
                        href={publicPath(lang, '/privacy')}
                        className="inline-flex items-center text-fg hover:text-accent text-sm transition-colors duration-300"
                      >
                        <span className="mr-2">🔒</span>
                        Privacy Policy
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">⚠️</span>
                    <div>
                      <p className="text-sm font-medium text-fg">Risk Disclosure</p>
                      <a 
                        href={publicPath(lang, '/risk-disclosure')}
                        className="inline-flex items-center text-fg hover:text-accent text-sm transition-colors duration-300"
                      >
                        <span className="mr-2">⚠️</span>
                        Risk Disclosure
                      </a>
                    </div>
                  </div>
                </div>
              </PremiumCardContent>
            </PremiumCard>
          </div>
        </Container>
      </Section>

      {/* Section Divider */}
      <div className="border-t border-border/10"></div>

      {/* How it Works Section */}
      <Section>
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-fg mb-4">
              {copy.howItWorks.title}
            </h2>
            <p className="text-sm text-muted leading-relaxed max-w-2xl mx-auto">
              {copy.howItWorks.description}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {copy.howItWorks.steps.map((step, index) => (
              <PremiumCard key={index}>
                <PremiumCardContent>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-black font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-fg mb-3">
                        Step {index + 1}
                      </h3>
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

      {/* FAQ Section */}
      <Section>
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-fg mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {copy.faq.map((item, index) => (
              <PremiumCard key={index}>
                <PremiumCardContent>
                  <h4 className="text-base md:text-lg font-semibold text-fg mb-3">
                    {item.question}
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.answer}
                  </p>
                </PremiumCardContent>
              </PremiumCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Section Divider */}
      <div className="border-t border-border/10"></div>

      {/* Footer Section */}
      <Section>
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-fg mb-4">
              Join Our Community
            </h2>
            <p className="text-sm text-muted leading-relaxed max-w-2xl mx-auto">
              Connect with traders worldwide and access exclusive educational resources.
            </p>
          </div>
          
          {/* Trust Badges */}
          <BadgeRow items={copy.trustBadges} className="justify-center mb-8" />
          
          {/* Contact Links */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <PremiumCard>
              <PremiumCardContent>
                <h3 className="text-lg font-semibold text-fg mb-3">Official Channels</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📱</span>
                    <div>
                      <p className="text-sm font-medium text-fg">Telegram Channel</p>
                      <a 
                        href="https://t.me/tpcglobalcommunity"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-accent hover:text-accent2 text-sm transition-colors duration-300"
                      >
                        @tpcglobalcommunity
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2zm0 10a2 2 0 002-2v10a2 2 0 002-2z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🌐</span>
                    <div>
                      <p className="text-sm font-medium text-fg">Website</p>
                      <a 
                        href="https://tpcglobal.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-accent hover:text-accent2 text-sm transition-colors duration-300"
                      >
                        tpcglobal.io
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2zm0 10a2 2 0 002-2v10a2 2 0 002-2z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </PremiumCardContent>
            </PremiumCard>
            
            <PremiumCard>
              <PremiumCardContent>
                <h3 className="text-lg font-semibold text-fg mb-3">Legal & Compliance</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📄</span>
                    <div>
                      <p className="text-sm font-medium text-fg">Terms & Conditions</p>
                      <a 
                        href={publicPath(lang, '/terms')}
                        className="inline-flex items-center text-fg hover:text-accent text-sm transition-colors duration-300"
                      >
                        <span className="mr-2">📄</span>
                        Terms & Conditions
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🔒</span>
                    <div>
                      <p className="text-sm font-medium text-fg">Privacy Policy</p>
                      <a 
                        href={publicPath(lang, '/privacy')}
                        className="inline-flex items-center text-fg hover:text-accent text-sm transition-colors duration-300"
                      >
                        <span className="mr-2">🔒</span>
                        Privacy Policy
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">⚠️</span>
                    <div>
                      <p className="text-sm font-medium text-fg">Risk Disclosure</p>
                      <a 
                        href={publicPath(lang, '/risk-disclosure')}
                        className="inline-flex items-center text-fg hover:text-accent text-sm transition-colors duration-300"
                      >
                        <span className="mr-2">⚠️</span>
                        Risk Disclosure
                      </a>
                    </div>
                  </div>
                </div>
              </PremiumCardContent>
            </PremiumCard>
          </div>
        </Container>
      </Section>
    </PremiumShell>
  );
}

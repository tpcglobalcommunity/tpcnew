import { Metadata } from "next";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PremiumCard, PremiumCardHeader, PremiumCardContent } from "@/components/ui/PremiumCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { BadgeRow } from "@/components/ui/BadgeRow";
import { StatRow } from "@/components/ui/StatRow";
import { publicPath, homeCopy, type Language } from "@/content/homeCopy";

interface HomePageProps {
  params: {
    lang: Language;
  };
}

export function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'id' }
  ];
}

export function generateMetadata({ params }: HomePageProps): Metadata {
  const copy = homeCopy[params.lang];
  
  return {
    title: `${copy.hero.title} | TPC Global`,
    description: copy.hero.subtitle,
    openGraph: {
      title: copy.hero.title,
      description: copy.hero.subtitle,
      type: "website",
    },
  };
}

export default function HomePage({ params }: HomePageProps) {
  const { lang } = params;
  const copy = homeCopy[lang];

  return (
    <PremiumShell>
      {/* Hero Section */}
      <Section className="pt-16 pb-12">
        <Container>
          <PremiumCard variant="glass" className="text-center p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-fg mb-6 md:mb-8 leading-tight">
                {copy.hero.title}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-muted mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
                {copy.hero.subtitle}
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <PremiumButton 
                  href={publicPath(lang, '/presale')}
                  size="md"
                >
                  {copy.hero.ctaPrimary}
                </PremiumButton>
                <PremiumButton 
                  href={publicPath(lang, '/transparency')}
                  variant="secondary"
                  size="md"
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
            <h2 className="text-xl md:text-2xl font-bold text-[#F5F5F4] mb-4">
              Trust & Safety
            </h2>
          </div>
          <BadgeRow items={copy.trustBadges} className="justify-center" />
        </Container>
      </Section>

      {/* What is TPC Section */}
      <Section>
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#F5F5F4] mb-4">
              {copy.whatIsTPC.title}
            </h2>
            <p className="text-base md:text-lg text-[#B9B3A7] mb-8 max-w-3xl mx-auto leading-relaxed">
              {copy.whatIsTPC.description}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {copy.whatIsTPC.points.map((point, index) => (
              <PremiumCard key={index} className="text-center">
                <PremiumCardContent>
                  <div className="w-12 h-12 bg-[#d4af37]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#d4af37] text-xl font-bold">{index + 1}</span>
                  </div>
                  <p className="text-sm md:text-base text-[#F5F5F4] leading-relaxed">
                    {point}
                  </p>
                </PremiumCardContent>
              </PremiumCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Features Section */}
      <Section>
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#F5F5F4] mb-4">
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
                  <h3 className="text-lg md:text-xl font-bold text-[#F5F5F4] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#B9B3A7] mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <a 
                    href={publicPath(lang, feature.href)}
                    className="inline-flex items-center text-[#d4af37] hover:text-[#b8941f] text-sm font-medium transition-colors duration-300"
                  >
                    Learn more →
                  </a>
                </PremiumCardContent>
              </PremiumCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* How it Works Section */}
      <Section>
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#F5F5F4] mb-4">
              {copy.howItWorks.title}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {copy.howItWorks.steps.map((step, index) => (
              <PremiumCard key={index}>
                <PremiumCardContent>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#d4af37] rounded-full flex items-center justify-center text-black font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-sm md:text-base text-[#B9B3A7] leading-relaxed">
                      {step}
                    </p>
                  </div>
                </PremiumCardContent>
              </PremiumCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section>
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#F5F5F4] mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {copy.faq.map((item, index) => (
              <PremiumCard key={index}>
                <PremiumCardContent>
                  <h4 className="text-base md:text-lg font-bold text-[#F5F5F4] mb-3">
                    {item.question}
                  </h4>
                  <p className="text-sm md:text-base text-[#B9B3A7] leading-relaxed">
                    {item.answer}
                  </p>
                </PremiumCardContent>
              </PremiumCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Footer Section */}
      <footer className="border-t border-[#2a2a3a]/50 mt-20">
        <Container>
          <div className="py-8 md:py-12 text-center">
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
              <a 
                href={publicPath(lang, '/terms')}
                className="text-[#a0a0a0] hover:text-white text-sm transition-colors duration-300"
              >
                Terms & Conditions
              </a>
              <span className="text-[#2a2a3a]">•</span>
              <a 
                href={publicPath(lang, '/privacy')}
                className="text-[#a0a0a0] hover:text-white text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <span className="text-[#2a2a3a]">•</span>
              <a 
                href={publicPath(lang, '/aml-policy')}
                className="text-[#a0a0a0] hover:text-white text-sm transition-colors duration-300"
              >
                AML Policy
              </a>
            </div>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a 
                href="https://t.me/tpcglobalcommunity"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#C8A24D] hover:text-[#B8941F] transition-colors duration-300"
              >
                <span className="text-xl">📱</span>
                <span className="text-sm font-medium">Join Telegram Channel</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <div className="text-xs text-[#6b7280]">
                <span className="font-mono">@tpcglobalcommunity</span>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </PremiumShell>
  );
}

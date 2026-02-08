import { Metadata } from "next";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { Button } from "@/components/ui/Card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { TrustBadges, FeatureCard, Step, FAQItem } from "@/components/home/HomeComponents";
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
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#1a1a24] to-[#0f0f1a]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#d4af37]/5 to-transparent" />
          
          <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight">
                {copy.hero.title}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-[#a0a0a0] mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
                {copy.hero.subtitle}
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  href={publicPath(lang, '/presale')}
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {copy.hero.ctaPrimary}
                </Button>
                <Button 
                  href={publicPath(lang, '/transparency')}
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {copy.hero.ctaSecondary}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges Section */}
        <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Trust & Safety
            </h2>
          </div>
          <TrustBadges items={copy.trustBadges} />
        </section>

        {/* What is TPC Section */}
        <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {copy.whatIsTPC.title}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {copy.whatIsTPC.points.map((point, index) => (
              <Card key={index} className="text-center">
                <CardContent>
                  <div className="w-12 h-12 bg-[#d4af37]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#d4af37] text-xl font-bold">{index + 1}</span>
                  </div>
                  <p className="text-sm md:text-base text-white leading-relaxed">
                    {point}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Core Features
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {copy.features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                href={publicPath(lang, feature.href)}
              />
            ))}
          </div>
        </section>

        {/* How it Works Section */}
        <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {copy.howItWorks.title}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {copy.howItWorks.steps.map((step, index) => (
              <Step key={index} number={index + 1} text={step} />
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {copy.faq.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </section>

        {/* Footer Section */}
        <footer className="border-t border-[#2a2a3a]/50 mt-20">
          <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
            <div className="text-center">
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
                  className="inline-flex items-center gap-2 text-[#d4af37] hover:text-[#b8941f] transition-colors duration-300"
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
          </div>
        </footer>
      </div>
    </PremiumShell>
  );
}

import { normalizeLang, type LangParams } from "@/lib/lang-helpers";
import { presaleCopy } from "@/content/presaleCopy";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PremiumCard, PremiumCardHeader, PremiumCardContent } from "@/components/ui/PremiumCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { BadgeRow } from "@/components/ui/BadgeRow";
import { StatRow } from "@/components/ui/StatRow";
import { publicPath } from "@/lib/lang-helpers";
import CountdownTimer from "@/components/ui/CountdownTimer";

interface PresalePageProps {
  params: LangParams;
}

export function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'id' }
  ];
}

export default function PresalePage({ params }: PresalePageProps) {
  const lang = normalizeLang(params.lang);
  const copy = presaleCopy[lang];

  return (
    <PremiumShell>
      {/* SECTION 1 — HERO */}
      <Section className="pt-16 pb-12 bg-gradient-to-b from-[#0B0E11] to-[#1A1F2E]">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              {copy.hero.title}
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed font-light">
              {copy.hero.subtitle}
            </p>
            
            {/* Countdown Timer */}
            <div className="mb-8">
              <CountdownTimer 
                targetDate={new Date(Date.now() + (6 * 30 * 24 * 60 * 60 * 1000)).toISOString()}
              />
            </div>
            
            {/* Trust Badges */}
            <BadgeRow items={copy.trustBadges} className="justify-center mb-8" />
            
            {/* CTA Button */}
            <PremiumButton 
              href={publicPath(lang, '/member/buy')}
              size="md"
              fullWidth
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white border-0 shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              {copy.hero.ctaPrimary}
            </PremiumButton>
            
            {/* Secondary CTA */}
            <p className="text-sm text-gray-400 mt-4">
              {copy.hero.ctaSecondary}
            </p>
          </div>
        </Container>
      </Section>

      {/* SECTION 2 — PRESALE STAGES */}
      <Section className="py-16 bg-[#0B0E11]">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {copy.stages.title}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              {copy.stages.subtitle}
            </p>
          </div>
          
          {/* Stage Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {copy.stages.items.map((stage, index) => (
              <PremiumCard key={index} className="border border-gray-700 bg-[#1A1F2E] hover:border-amber-500/50 transition-all duration-300">
                <PremiumCardContent className="p-8">
                  {/* Stage Header */}
                  <div className="text-center mb-6">
                    <div className="inline-block px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm font-medium mb-3">
                      {stage.status}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {stage.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {stage.description}
                    </p>
                  </div>
                  
                  {/* Stage Details */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-700">
                      <span className="text-gray-400 text-sm">Price</span>
                      <span className="text-white font-medium">{stage.price}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-700">
                      <span className="text-gray-400 text-sm">Supply</span>
                      <span className="text-white font-medium">{stage.supply}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-400 text-sm">Status</span>
                      <span className={`font-medium ${
                        stage.status === 'Active' || stage.status === 'Aktif' 
                          ? 'text-green-400' 
                          : 'text-amber-400'
                      }`}>
                        {stage.status}
                      </span>
                    </div>
                  </div>
                </PremiumCardContent>
              </PremiumCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* SECTION 3 — TOKEN UTILITY */}
      <Section className="py-16 bg-[#0B0E11]">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {copy.tokenUtility.title}
            </h2>
          </div>
          
          {/* Utility Items */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {copy.tokenUtility.items.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SECTION 4 — TRANSPARENCY & TRUST */}
      <Section className="py-16 bg-[#0B0E11]">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {copy.transparency.title}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              {copy.transparency.subtitle}
            </p>
          </div>
          
          {/* Transparency Panel */}
          <PremiumCard className="border border-gray-700 bg-[#1A1F2E]">
            <PremiumCardContent className="p-8">
              <div className="space-y-6">
                {copy.transparency.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">{item.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PremiumCardContent>
          </PremiumCard>
        </Container>
      </Section>

      {/* SECTION 5 — FINAL CTA */}
      <Section className="py-16 bg-gradient-to-b from-[#0B0E11] to-[#1A1F2E]">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {copy.finalCta.title}
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {copy.finalCta.subtitle}
            </p>
            
            <PremiumButton 
              href={publicPath(lang, '/member/buy')}
              size="md"
              fullWidth
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white border-0 shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              {copy.finalCta.buttonText}
            </PremiumButton>
          </div>
        </Container>
      </Section>
    </PremiumShell>
  );
}

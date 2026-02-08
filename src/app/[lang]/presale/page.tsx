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
      <Section className="pt-12 pb-8 bg-gradient-to-b from-[#0B0E11] via-[#1A1F2E] to-[#0B0E11] relative w-full max-w-full overflow-hidden">
        {/* Background Effects - Constrained within overflow-hidden */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <Container className="relative z-10">
          <div className="text-center w-full">
            {/* Status Badge */}
            <div className="inline-flex items-center px-3 py-1.5 bg-amber-500/20 border border-amber-500/30 rounded-full mb-4">
              <div className="w-2 h-2 bg-amber-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-amber-400 text-xs font-medium">
                {lang === 'en' ? 'Presale Active' : 'Presale Aktif'}
              </span>
            </div>
            
            {/* Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight tracking-tight">
              {copy.hero.title}
            </h1>
            
            {/* Subheadline */}
            <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed font-light">
              {copy.hero.subtitle}
            </p>
            
            {/* Countdown Timer */}
            <div className="mb-6 bg-[#1A1F2E]/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 w-full mx-auto">
              <div className="text-center mb-3">
                <span className="text-amber-400 text-xs font-medium uppercase tracking-wider">
                  {copy.countdown.title}
                </span>
              </div>
              <div className="text-center mb-2">
                <span className="text-gray-300 text-xs">
                  {copy.countdown.endDate}
                </span>
              </div>
              <CountdownTimer 
                targetDate={new Date('2026-08-09T00:00:00+07:00').toISOString()}
                lang={lang}
              />
            </div>
            
            {/* Trust Badges */}
            <div className="mb-6">
              <BadgeRow items={copy.trustBadges} className="justify-center" />
            </div>
            
            {/* CTA Button */}
            <div className="relative w-full mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg blur-lg opacity-50"></div>
              <PremiumButton 
                href={publicPath(lang, '/member/buy')}
                size="md"
                fullWidth
                className="relative bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white border-0 shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold"
              >
                {copy.hero.ctaPrimary}
              </PremiumButton>
            </div>
            
            {/* Secondary CTA */}
            <p className="text-xs text-gray-400 mt-3">
              {copy.hero.ctaSecondary}
            </p>
          </div>
        </Container>
      </Section>

      {/* SECTION 2 — PRESALE STAGES */}
      <Section className="py-10 bg-[#0B0E11] relative w-full max-w-full overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239CA3AF' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-8 w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {copy.stages.title}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              {copy.stages.subtitle}
            </p>
          </div>
          
          {/* Stage Cards */}
          <div className="grid md:grid-cols-2 gap-6 w-full">
            {copy.stages.items.map((stage, index) => (
              <PremiumCard key={index} className="border border-gray-700 bg-[#1A1F2E] hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden group">
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <PremiumCardContent className="p-6 relative z-10">
                  {/* Stage Header */}
                  <div className="text-center mb-4">
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${
                      stage.status === 'Active' || stage.status === 'Aktif' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                    }`}>
                      {stage.status}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {stage.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                  
                  {/* Stage Details */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-700/50">
                      <span className="text-gray-400 text-sm">{copy.cardLabels.price}</span>
                      <span className="text-white font-semibold text-lg">{stage.price}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-700/50">
                      <span className="text-gray-400 text-sm">{copy.cardLabels.supply}</span>
                      <span className="text-white font-medium">{stage.supply}</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-gray-400 text-sm">{copy.cardLabels.status}</span>
                      <span className={`font-semibold text-sm ${
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
      <Section className="py-10 bg-gradient-to-b from-[#0B0E11] to-[#1A1F2E] relative w-full max-w-full overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-amber-500/5"></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-8 w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {copy.tokenUtility.title}
            </h2>
          </div>
          
          {/* Utility Items */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {copy.tokenUtility.items.map((item, index) => (
              <div key={index} className="group">
                <div className="bg-[#1A1F2E]/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 text-center transition-all duration-300 hover:border-amber-500/50 hover:bg-[#1A1F2E]/80">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-lg">{item.icon}</span>
                  </div>
                  <h3 className="text-white font-semibold mb-1 text-sm">{item.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SECTION 4 — TRANSPARENSI & TRUST */}
      <Section className="py-10 bg-[#0B0E11] relative w-full max-w-full overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M20 20l-4-4m4 4l4-4m-4 4l4 4' stroke='%239CA3AF' stroke-width='1' stroke-opacity='0.2'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-8 w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {copy.transparency.title}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              {copy.transparency.subtitle}
            </p>
          </div>
          
          {/* Transparency Panel */}
          <PremiumCard className="border border-gray-700 bg-[#1A1F2E]/50 backdrop-blur-sm relative overflow-hidden w-full">
            {/* Panel Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent"></div>
            
            <PremiumCardContent className="p-6 relative z-10">
              <div className="space-y-4">
                {copy.transparency.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg">{item.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-semibold mb-1 text-sm">{item.title}</h4>
                      <p className="text-gray-300 text-xs leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PremiumCardContent>
          </PremiumCard>
        </Container>
      </Section>

      {/* SECTION 5 — FINAL CTA */}
      <Section className="py-10 bg-gradient-to-b from-[#0B0E11] via-[#1A1F2E] to-[#0B0E11] relative w-full max-w-full overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-blue-500/5"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center w-full">
            {/* Status Badge */}
            <div className="inline-flex items-center px-3 py-1.5 bg-amber-500/20 border border-amber-500/30 rounded-full mb-6">
              <span className="text-amber-400 text-xs font-medium uppercase tracking-wider">
                {lang === 'en' ? 'Final Step' : 'Langkah Terakhir'}
              </span>
            </div>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
              {copy.finalCta.subtitle}
            </p>
            
            {/* CTA Button */}
            <div className="relative w-full mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg blur-lg opacity-50"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg blur opacity-30 animate-pulse"></div>
              <PremiumButton 
                href={publicPath(lang, '/member/buy')}
                size="md"
                fullWidth
                className="relative bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white border-0 shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold"
              >
                {copy.finalCta.buttonText}
              </PremiumButton>
            </div>
          </div>
        </Container>
      </Section>
    </PremiumShell>
  );
}

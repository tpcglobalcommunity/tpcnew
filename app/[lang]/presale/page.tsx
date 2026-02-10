import { normalizeLang, type LangParams } from "@/lib/lang-helpers";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PremiumCard, PremiumCardContent } from "@/components/ui/PremiumCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { presaleCopy } from "@/src/content/presaleCopy";
import { getPresaleStages, PRESALE_CONFIG } from "@/lib/presale/stages";
import { getPresaleProgress } from "@/lib/presale/progress";
import { Metadata } from "next";

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'id' }
  ] as const;
}

export async function generateMetadata({ params }: { params: Promise<LangParams> }): Promise<Metadata> {
  const { lang } = await params;
  const normalizedLang = normalizeLang(lang);
  const copy = presaleCopy[normalizedLang];
  
  return {
    title: copy.meta.title,
    description: copy.meta.description,
    keywords: copy.meta.keywords,
    authors: [{ name: 'TPC Global' }],
    creator: 'TPC Global',
    publisher: 'TPC Global',
    alternates: {
      canonical: `https://www.tpcglobal.io/${normalizedLang}/presale`,
      languages: {
        "id-ID": `https://www.tpcglobal.io/id/presale`,
        "en-US": `https://www.tpcglobal.io/en/presale`,
      },
    },
    openGraph: {
      title: copy.meta.title,
      description: copy.meta.description,
      type: "website",
      locale: normalizedLang === 'id' ? 'id_ID' : 'en_US',
      siteName: 'TPC Global',
      images: [
        {
          url: `https://www.tpcglobal.io/og-${normalizedLang}.png`,
          width: 1200,
          height: 630,
          alt: copy.meta.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: copy.meta.title,
      description: copy.meta.description,
      images: [`https://www.tpcglobal.io/og-${normalizedLang}.png`],
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
  };
}

export default async function PresalePage({ params }: { params: Promise<LangParams> }) {
  const { lang } = await params;
  const normalizedLang = normalizeLang(lang);
  const copy = presaleCopy[normalizedLang];
  
  // Get presale stages and progress from single source of truth
  const stages = getPresaleStages();
  const progress = getPresaleProgress();
  
  // Generate URLs with proper language
  const presaleUrl = `/${normalizedLang}/presale`;
  const loginUrl = `/login?returnTo=${encodeURIComponent(presaleUrl)}`;

  return (
    <>
      {/* HERO SECTION */}
      <Section className="pt-14 pb-10 bg-gradient-to-b from-[#0B0E11] via-[#1A1F2E] to-[#0B0E11] relative w-full max-w-full overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/3 via-transparent to-amber-500/3"></div>
        <div className="absolute top-0 left-0 w-24 h-24 bg-amber-500/8 rounded-full blur-lg -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-500/6 rounded-full blur-lg translate-x-1/2 translate-y-1/2"></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center max-w-[860px] mx-auto">
            {/* Status Badge */}
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20 backdrop-blur-sm">
                {normalizedLang === 'id' ? '20 Tahap Presale' : '20 Presale Stages'}
              </span>
            </div>
            
            {/* Headline */}
            <h1 className="text-[clamp(2.2rem,6vw,4rem)] font-bold text-white mb-6 leading-tight tracking-tight">
              {copy.hero.title}
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {copy.hero.subtitle}
            </p>
            
            {/* Presale Summary */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-3xl mx-auto">
              <div className="text-center p-4 bg-white/5 rounded-xl border border-amber-500/20">
                <div className="text-amber-400 font-bold text-lg mb-1">
                  {PRESALE_CONFIG.totalSupply.toLocaleString(normalizedLang === 'id' ? 'id-ID' : 'en-US')}
                </div>
                <div className="text-gray-400 text-sm">
                  {normalizedLang === 'id' ? 'Total Supply' : 'Total Supply'}
                </div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-amber-500/20">
                <div className="text-amber-400 font-bold text-lg mb-1">
                  {PRESALE_CONFIG.supplyPerStage.toLocaleString(normalizedLang === 'id' ? 'id-ID' : 'en-US')}
                </div>
                <div className="text-gray-400 text-sm">
                  {normalizedLang === 'id' ? 'Supply/Tahap' : 'Supply/Stage'}
                </div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-amber-500/20">
                <div className="text-amber-400 font-bold text-lg mb-1">
                  ${PRESALE_CONFIG.priceStartUsd.toFixed(4)}
                </div>
                <div className="text-gray-400 text-sm">
                  {normalizedLang === 'id' ? 'Harga Mulai' : 'Start Price'}
                </div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-amber-500/20">
                <div className="text-amber-400 font-bold text-lg mb-1">
                  ${(PRESALE_CONFIG.priceStartUsd + (PRESALE_CONFIG.stagesCount - 1) * PRESALE_CONFIG.priceStepUsd).toFixed(4)}
                </div>
                <div className="text-gray-400 text-sm">
                  {normalizedLang === 'id' ? 'Harga Akhir' : 'Final Price'}
                </div>
              </div>
            </div>
            
            {/* Disclaimer */}
            <p className="text-sm text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              {copy.hero.disclaimer}
            </p>
            
            {/* CTA Button */}
            <div className="relative w-full mx-auto max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl blur-lg opacity-60"></div>
              <PremiumButton 
                href={loginUrl}
                size="lg"
                fullWidth
                className="relative bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white border-0 shadow-2xl transform hover:-translate-y-1 transition-all duration-300 font-semibold"
              >
                {copy.hero.cta}
              </PremiumButton>
            </div>
          </div>
        </Container>
      </Section>

      {/* STAGES SECTION */}
      <Section className="py-12 bg-gradient-to-b from-[#0B0E11] to-[#1A1F2E] relative w-full max-w-full overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/3 via-transparent to-amber-500/3"></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-12 w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {copy.stages.title}
            </h2>
            <p className="text-gray-300 text-base leading-relaxed max-w-3xl mx-auto mb-8">
              {copy.stages.subtitle}
            </p>
            {/* Current Phase Indicator */}
            <div className="inline-flex items-center px-6 py-3 rounded-full text-base font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20 backdrop-blur-sm mb-8">
              {normalizedLang === 'id' ? `Tahap Aktif: ${progress.currentStageIndex} dari 20` : `Current Stage: ${progress.currentStageIndex} of 20`}
            </div>
          </div>
          
          {/* Progress Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
            {/* Total Progress Card */}
            <div className="md:col-span-2 lg:col-span-1">
              <PremiumCard className="border border-amber-500/20 bg-white/5 rounded-2xl overflow-hidden">
                <PremiumCardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-amber-400 mb-4">
                      {normalizedLang === 'id' ? 'Progress Presale' : 'Presale Progress'}
                    </h3>
                    <div className="space-y-4">
                      {/* Total Progress Bar */}
                      <div>
                        <div className="flex justify-between text-sm text-gray-300 mb-2">
                          <span>{normalizedLang === 'id' ? 'Total Terjual' : 'Total Sold'}</span>
                          <span>{progress.sold.toLocaleString(normalizedLang === 'id' ? 'id-ID' : 'en-US')} TPC</span>
                        </div>
                        <div className="bg-white/10 rounded-full h-2 overflow-hidden">
                          <div 
                            className="bg-gradient-to-r from-amber-500 to-amber-600 h-full rounded-full transition-all duration-300"
                            style={{ width: `${progress.pctTotal * 100}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-400 mt-1">
                          <span>{progress.remaining.toLocaleString(normalizedLang === 'id' ? 'id-ID' : 'en-US')} TPC {normalizedLang === 'id' ? 'tersisa' : 'remaining'}</span>
                          <span>{Math.round(progress.pctTotal * 100)}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </PremiumCardContent>
              </PremiumCard>
            </div>
            
            {/* Current Stage Progress Card */}
            <div className="md:col-span-2 lg:col-span-1">
              <PremiumCard className="border border-green-500/20 bg-white/5 rounded-2xl overflow-hidden">
                <PremiumCardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-green-400 mb-4">
                      {normalizedLang === 'id' ? `Progress Tahap ${progress.currentStageIndex}` : `Stage ${progress.currentStageIndex} Progress`}
                    </h3>
                    <div className="space-y-4">
                      {/* Current Stage Progress Bar */}
                      <div>
                        <div className="flex justify-between text-sm text-gray-300 mb-2">
                          <span>{normalizedLang === 'id' ? `${progress.soldInCurrentStage.toLocaleString(normalizedLang === 'id' ? 'id-ID' : 'en-US')} dari ${progress.supplyPerStage.toLocaleString(normalizedLang === 'id' ? 'id-ID' : 'en-US')} terjual` : `${progress.soldInCurrentStage.toLocaleString(normalizedLang === 'id' ? 'id-ID' : 'en-US')} of ${progress.supplyPerStage.toLocaleString(normalizedLang === 'id' ? 'id-ID' : 'en-US')} allocated`}</span>
                        </div>
                        <div className="bg-white/10 rounded-full h-2 overflow-hidden">
                          <div 
                            className="bg-gradient-to-r from-green-500 to-green-600 h-full rounded-full transition-all duration-300"
                            style={{ width: `${progress.pctCurrentStage * 100}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-400 mt-1">
                          <span>{progress.remainingInCurrentStage.toLocaleString(normalizedLang === 'id' ? 'id-ID' : 'en-US')} {normalizedLang === 'id' ? 'tersisa' : 'remaining'}</span>
                          <span>{Math.round(progress.pctCurrentStage * 100)}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </PremiumCardContent>
              </PremiumCard>
            </div>
          </div>
          
          {/* Progress Disclaimer */}
          <div className="max-w-5xl mx-auto px-4 mb-8">
            <p className="text-xs text-gray-400 text-center">
              {normalizedLang === 'id' 
                ? 'Angka progress bersifat informatif dan dapat diperbarui setelah verifikasi transaksi.'
                : 'Progress numbers are informational and may update after transaction verification.'
              }
            </p>
          </div>
          
          {/* Stages Table */}
          <div className="max-w-7xl mx-auto">
            <PremiumCard className="border-gold-soft bg-card shadow-soft hover:border-gold hover:shadow-hover transition-all duration-300 relative overflow-hidden rounded-2xl">
              {/* Mobile: Card List */}
              <div className="md:hidden space-y-4">
                {stages.map((stage, index) => {
                  const idrFormatter = new Intl.NumberFormat('id-ID');
                  
                  return (
                    <div 
                      key={index} 
                      className={`p-4 ${stage.status === 'Active' ? 'bg-amber-500/5 border-gold-hover shadow-gold' : ''}`}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <span className="font-semibold text-white text-lg">{stage.stage}</span>
                        <span className={`text-xs px-3 py-1 rounded-full ${
                          stage.status === 'Active' 
                            ? 'bg-amber-500/20 text-amber-400 border border-gold-soft'
                            : 'bg-gray-500/20 text-gray-400 border border-gold-soft'
                        }`}>
                          {stage.status}
                        </span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">{normalizedLang === 'id' ? 'Harga (USD):' : 'Price (USD):'}</span>
                          <span className="text-white font-mono font-medium">${stage.priceUsd}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">{normalizedLang === 'id' ? 'Harga (IDR):' : 'Price (IDR):'}</span>
                          <span className="text-white font-mono">Rp {idrFormatter.format(stage.priceIdr)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">{normalizedLang === 'id' ? 'Supply:' : 'Supply:'}</span>
                          <span className="text-white font-mono">{normalizedLang === 'id' ? stage.supply.toLocaleString('id-ID') : stage.supply.toLocaleString('en-US')} TPC</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* Desktop: Table */}
              <div className="hidden md:block">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gold-soft">
                        <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">Stage</th>
                        <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">{normalizedLang === 'id' ? 'Harga (USD)' : 'Price (USD)'}</th>
                        <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">{normalizedLang === 'id' ? 'Harga (IDR)' : 'Price (IDR)'}</th>
                        <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">Supply (TPC)</th>
                        <th className="text-center py-4 px-6 text-sm font-medium text-gray-400">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stages.map((stage, index) => {
                        const idrFormatter = new Intl.NumberFormat('id-ID');
                        
                        return (
                          <tr 
                            key={index} 
                            className={`border-b border-gold-soft transition-colors ${
                              stage.status === 'Active' 
                                ? 'bg-amber-500/5 shadow-gold' 
                                : 'hover:bg-card'
                            }`}
                          >
                            <td className="py-4 px-6">
                              <div className="font-medium text-white text-lg">{stage.stage}</div>
                            </td>
                            <td className="py-4 px-6">
                              <div className="font-mono text-white font-medium">${stage.priceUsd}</div>
                            </td>
                            <td className="py-4 px-6">
                              <div className="font-mono text-white">Rp {idrFormatter.format(stage.priceIdr)}</div>
                            </td>
                            <td className="py-4 px-6">
                              <span className="font-mono text-white">{normalizedLang === 'id' ? stage.supply.toLocaleString('id-ID') : stage.supply.toLocaleString('en-US')}</span>
                            </td>
                            <td className="py-4 px-6 text-center">
                              <span className={`text-xs px-4 py-2 rounded-full inline-block ${
                                stage.status === 'Active' 
                                  ? 'bg-amber-500/20 text-amber-400 border border-gold-soft'
                                  : 'bg-gray-500/20 text-gray-400 border border-gold-soft'
                              }`}>
                                {stage.status}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </PremiumCard>
          </div>
        </Container>
      </Section>

      {/* FX Rate Note */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <p className="text-xs text-gray-400 text-center">
          {normalizedLang === 'id' 
            ? 'Estimasi IDR menggunakan kurs 17.000/USD (perkiraan tampilan), nilai aktual mengikuti konfirmasi transaksi.'
            : 'IDR estimate uses 17,000/USD for display; actual value follows transaction confirmation.'
          }
        </p>
      </div>

      {/* TOKEN UTILITY SECTION */}
      <Section className="py-12 bg-[#0B0E11] relative w-full max-w-full overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239CA3AF' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-10 w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {copy.tokenUtility.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {copy.tokenUtility.items.map((item: { icon: string; title: string; description: string }, index: number) => (
              <PremiumCard key={index} className="border border-gray-700 bg-[#1A1F2E] hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden group">
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <PremiumCardContent className="p-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-green-400">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </PremiumCardContent>
              </PremiumCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* TRANSPARENCY & TRUST SECTION */}
      <Section className="py-12 bg-gradient-to-b from-[#0B0E11] to-[#1A1F2E] relative w-full max-w-full overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-amber-500/5"></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-10 w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {copy.transparency.title}
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed max-w-2xl mx-auto">
              {copy.transparency.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {copy.transparency.items.map((item: { icon: string; title: string; description: string }, index: number) => (
              <PremiumCard key={index} className="border border-gray-700 bg-[#1A1F2E] hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden group">
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <PremiumCardContent className="p-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-blue-400">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </PremiumCardContent>
              </PremiumCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* FINAL CTA SECTION */}
      <Section className="py-12 pb-24 bg-gradient-to-b from-[#0B0E11] to-[#1A1F2E] relative w-full max-w-full overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/3 via-transparent to-amber-500/3"></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              {copy.finalCta.title}
            </h2>
            <p className="text-gray-300 text-base leading-relaxed max-w-3xl mx-auto mb-10">
              {copy.finalCta.subtitle}
            </p>
            <div className="relative w-full mx-auto max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl blur-lg opacity-60"></div>
              <PremiumButton 
                href={loginUrl}
                size="lg"
                fullWidth
                className="relative bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white border-0 shadow-2xl transform hover:-translate-y-1 transition-all duration-300 font-semibold"
              >
                {copy.finalCta.buttonText}
              </PremiumButton>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

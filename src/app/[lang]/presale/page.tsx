import { normalizeLang, type LangParams } from "@/lib/lang-helpers";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PremiumCard, PremiumCardContent } from "@/components/ui/PremiumCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { publicPath } from "@/lib/lang-helpers";
import { Metadata } from "next";
import { presaleCopy } from "@/content/presaleCopy";

// Presale Configuration
const TOTAL_STAGES = 20;
const STAGE_DURATION_DAYS = 30;
const PRESALE_START_DATE = new Date('2025-01-01T00:00:00.000Z'); // ISO string start date

// Helper function to calculate stage dates
function getStageDates() {
  const stages = [];
  for (let i = 1; i <= TOTAL_STAGES; i++) {
    const startDate = new Date(PRESALE_START_DATE);
    startDate.setDate(startDate.getDate() + (i - 1) * STAGE_DURATION_DAYS);
    
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + STAGE_DURATION_DAYS);
    
    stages.push({
      stage: i,
      startDate,
      endDate,
      duration: STAGE_DURATION_DAYS
    });
  }
  return stages;
}

// Helper function to get stage status
function getStageStatus(stage: { startDate: Date; endDate: Date }) {
  const now = new Date();
  
  if (now >= stage.startDate && now < stage.endDate) {
    return 'Active';
  } else if (now < stage.startDate) {
    return 'Next';
  } else {
    return 'Completed';
  }
}

// Helper function to get active stage
function getActiveStage() {
  const stages = getStageDates();
  return stages.find(stage => getStageStatus(stage) === 'Active');
}

interface PresalePageProps {
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
  const copy = presaleCopy[lang];
  
  return {
    title: 'Presale TPC Global | Professional Trading Education Community Utility Token',
    description: 'Utility token for professional trading education community. TPC is not an investment instrument and does not promise financial returns.',
    keywords: 'TPC Global, token presale, trading education, trader community, utility token',
    authors: [{ name: 'TPC Global' }],
    creator: 'TPC Global',
    publisher: 'TPC Global',
    openGraph: {
      title: 'Presale TPC Global | Community Education Utility Token',
      description: copy.hero.subtitle,
      type: "website",
      locale: lang === 'id' ? 'id_ID' : 'en_US',
      siteName: 'TPC Global',
      images: [
        {
          url: 'https://tpcglobal.io/og-presale.jpg',
          width: 1200,
          height: 630,
          alt: 'Presale TPC Global',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Presale TPC Global',
      description: copy.hero.subtitle,
      images: ['https://tpcglobal.io/og-presale.jpg'],
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

// Server-safe countdown component
function CountdownCard({ copy }: { copy: typeof presaleCopy.en }) {
  const activeStage = getActiveStage();
  
  if (!activeStage) {
    // No active stage - show fallback
    return (
      <div className="text-center">
        <div className="bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/30 rounded-xl p-6">
          <h3 className="text-amber-400 font-bold text-lg mb-4">
            {copy.countdown.title}
          </h3>
          <p className="text-gray-400 text-xs leading-relaxed">
            {copy.countdown.endDate}
          </p>
        </div>
      </div>
    );
  }
  
  // Calculate time remaining for active stage
  const calculateTimeRemaining = () => {
    const now = new Date();
    const difference = activeStage.endDate.getTime() - now.getTime();
    
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        expired: true
      };
    }
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    return { days, hours, minutes, seconds, expired: false };
  };
  
  const timeRemaining = calculateTimeRemaining();
  
  return (
    <div className="text-center">
      {timeRemaining.expired ? (
        <div className="bg-amber-500/20 border border-amber-500/30 rounded-xl p-6">
          <p className="text-amber-400 font-semibold text-lg">
            {copy.countdown.title}
          </p>
          <p className="text-gray-400 text-xs leading-relaxed">
            {copy.countdown.endDate}
          </p>
        </div>
      ) : (
        <div className="bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/30 rounded-xl p-6">
          <h3 className="text-amber-400 font-bold text-lg mb-4">
            {copy.countdown.title}
          </h3>
          <div className="grid grid-cols-4 gap-2 md:gap-4 mb-4">
            <div className="bg-[#1A1F2E] rounded-lg p-3">
              <div className="text-2xl md:text-3xl font-bold text-amber-400">{timeRemaining.days}</div>
              <div className="text-xs md:text-sm text-gray-400">Days</div>
            </div>
            <div className="bg-[#1A1F2E] rounded-lg p-3">
              <div className="text-2xl md:text-3xl font-bold text-amber-400">{timeRemaining.hours}</div>
              <div className="text-xs md:text-sm text-gray-400">Hours</div>
            </div>
            <div className="bg-[#1A1F2E] rounded-lg p-3">
              <div className="text-2xl md:text-3xl font-bold text-amber-400">{timeRemaining.minutes}</div>
              <div className="text-xs md:text-sm text-gray-400">Minutes</div>
            </div>
            <div className="bg-[#1A1F2E] rounded-lg p-3">
              <div className="text-2xl md:text-3xl font-bold text-amber-400">{timeRemaining.seconds}</div>
              <div className="text-xs md:text-sm text-gray-400">Seconds</div>
            </div>
          </div>
          <p className="text-gray-400 text-xs leading-relaxed">
            {copy.countdown.endDate}
          </p>
        </div>
      )}
    </div>
  );
}

export default function PresalePage({ params }: PresalePageProps) {
  const lang = normalizeLang(params.lang);
  const copy = presaleCopy[lang];

  return (
    <PremiumShell>
      {/* HERO SECTION */}
      <Section className="pt-12 pb-8 bg-gradient-to-b from-[#0B0E11] via-[#1A1F2E] to-[#0B0E11] relative w-full max-w-full overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <Container className="relative z-10">
          <div className="text-center w-full">
            {/* Status Badge */}
            <div className="inline-flex items-center px-3 py-1.5 bg-amber-500/20 border border-amber-500/30 rounded-full mb-4">
              <div className="w-2 h-2 bg-amber-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-amber-400 text-xs font-medium">
                Presale Active
              </span>
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              PRESALE TPC GLOBAL
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
              {copy.hero.subtitle}
            </p>
            
            {/* Disclaimer */}
            <p className="text-sm text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              TPC is not an investment instrument and does not promise financial returns.
            </p>
            
            {/* CTA Button */}
            <div className="relative w-full mx-auto max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg blur-lg opacity-50"></div>
              <PremiumButton 
                href="/login?returnTo=/presale"
                size="md"
                fullWidth
                className="relative bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white border-0 shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold"
              >
                {copy.hero.ctaPrimary}
              </PremiumButton>
            </div>
          </div>
        </Container>
      </Section>

      {/* COUNTDOWN CARD SECTION */}
      <Section className="py-12 bg-[#0B0E11] relative w-full max-w-full overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239CA3AF' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <Container className="relative z-10 px-4">
          <div className="max-w-4xl mx-auto">
            <CountdownCard copy={copy} />
          </div>
        </Container>
      </Section>

      {/* PRESALE STAGES SECTION */}
      <Section className="py-12 bg-gradient-to-b from-[#0B0E11] to-[#1A1F2E] relative w-full max-w-full overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-amber-500/5"></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-10 w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {copy.stages.title}
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed max-w-2xl mx-auto">
              {copy.stages.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {copy.stages.items.map((item, index) => (
              <PremiumCard key={index} className="border border-gray-700 bg-[#1A1F2E] hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden group">
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <PremiumCardContent className="p-6 relative z-10">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-amber-400">🎯</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-300 leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">{copy.cardLabels.price}:</span>
                        <span className="text-gray-300">{item.price}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">{copy.cardLabels.supply}:</span>
                        <span className="text-gray-300">{item.supply}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">{copy.cardLabels.status}:</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          item.status === 'Active' || item.status === 'Aktif'
                            ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                            : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </PremiumCardContent>
              </PremiumCard>
            ))}
          </div>
        </Container>
      </Section>

      
      {/* TOKEN UTILITIES SECTION */}
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {copy.tokenUtility.items.map((item, index) => (
              <PremiumCard key={index} className="border border-gray-700 bg-[#1A1F2E] hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden group">
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <PremiumCardContent className="p-6 relative z-10">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-green-400">{item.icon}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {copy.transparency.items.map((item, index) => (
              <PremiumCard key={index} className="border border-gray-700 bg-[#1A1F2E] hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden group">
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <PremiumCardContent className="p-6 relative z-10">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-blue-400">{item.icon}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </PremiumCardContent>
              </PremiumCard>
            ))}
          </div>
        </Container>
      </Section>

      
      {/* FINAL CTA SECTION */}
      <Section className="py-12 bg-gradient-to-b from-[#0B0E11] to-[#1A1F2E] relative w-full max-w-full overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5"></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {copy.finalCta.title}
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed max-w-2xl mx-auto mb-8">
              {copy.finalCta.subtitle}
            </p>
            <div className="relative w-full mx-auto max-w-md mt-8">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg blur-lg opacity-50"></div>
              <PremiumButton 
                href="/login?returnTo=/presale"
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

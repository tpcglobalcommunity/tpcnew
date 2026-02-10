import { normalizeLang, type LangParams } from "@/lib/lang-helpers";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PremiumCard, PremiumCardContent } from "@/components/ui/PremiumCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { daoCopy } from "@/content/daoCopy";
import { Metadata } from "next";
import Link from "next/link";

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'id' }
  ] as const;
}

export async function generateMetadata({ params }: { params: Promise<LangParams> }): Promise<Metadata> {
  const { lang } = await params;
  const normalizedLang = normalizeLang(lang);
  const copy = daoCopy[normalizedLang];
  
  return {
    title: copy.meta.title,
    description: copy.meta.description,
    keywords: copy.meta.keywords,
    authors: [{ name: 'TPC Global' }],
    creator: 'TPC Global',
    publisher: 'TPC Global',
    alternates: {
      canonical: `https://www.tpcglobal.io/${normalizedLang}/dao`,
      languages: {
        "id-ID": `https://www.tpcglobal.io/id/dao`,
        "en-US": `https://www.tpcglobal.io/en/dao`,
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

export default async function DAOPage({ params }: { params: Promise<LangParams> }) {
  const { lang } = await params;
  const normalizedLang = normalizeLang(lang);
  const copy = daoCopy[normalizedLang];
  
  // Generate URLs with proper language
  const daoUrl = `/${normalizedLang}/dao`;
  const presaleUrl = `/${normalizedLang}/presale`;
  const academyUrl = `/${normalizedLang}/academy`;
  const loginUrl = `/login?returnTo=${encodeURIComponent(daoUrl)}`;

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
            {/* Headline */}
            <h1 className="text-[clamp(2.2rem,6vw,4rem)] font-bold text-white mb-6 leading-tight tracking-tight">
              {copy.hero.title}
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {copy.hero.subtitle}
            </p>
            
            {/* Disclaimer */}
            <p className="text-sm text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              {copy.hero.disclaimer}
            </p>
            
            {/* CTA Button */}
            <div className="relative w-full mx-auto max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl blur-lg opacity-60"></div>
              <PremiumButton 
                href={`/${normalizedLang}/dao/process`}
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

      {/* WHAT IS DAO SECTION */}
      <Section className="py-12 bg-[#0B0E11] relative w-full max-w-full overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/3 via-transparent to-amber-500/3"></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-12 w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {copy.sections.governance.title}
            </h2>
            <p className="text-gray-300 text-base leading-relaxed max-w-3xl mx-auto mb-8">
              {copy.sections.governance.description}
            </p>
          </div>
          
          {/* Governance Cards */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <PremiumCard className="border-gold-soft bg-card shadow-soft hover:border-gold hover:shadow-hover transition-all duration-300 relative overflow-hidden rounded-2xl">
              <PremiumCardContent className="p-6 relative z-10">
                <h3 className="text-lg font-semibold text-white mb-3">{copy.sections.governance.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{copy.sections.governance.description}</p>
              </PremiumCardContent>
            </PremiumCard>
            
            <PremiumCard className="border-gold-soft bg-card shadow-soft hover:border-gold hover:shadow-hover transition-all duration-300 relative overflow-hidden rounded-2xl">
              <PremiumCardContent className="p-6 relative z-10">
                <h3 className="text-lg font-semibold text-white mb-3">{copy.sections.participation.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{copy.sections.participation.description}</p>
              </PremiumCardContent>
            </PremiumCard>
            
            <PremiumCard className="border-gold-soft bg-card shadow-soft hover:border-gold hover:shadow-hover transition-all duration-300 relative overflow-hidden rounded-2xl">
              <PremiumCardContent className="p-6 relative z-10">
                <h3 className="text-lg font-semibold text-white mb-3">{copy.sections.transparency.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{copy.sections.transparency.description}</p>
              </PremiumCardContent>
            </PremiumCard>
          </div>
        </Container>
      </Section>

      {/* PROPOSAL SCOPE SECTION */}
      <Section className="py-12 bg-gradient-to-b from-[#0B0E11] to-[#1A1F2E] relative w-full max-w-full overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/3 via-transparent to-blue-500/3"></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-12 w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {copy.sections.scope.title}
            </h2>
            <div className="text-gray-300 text-base leading-relaxed max-w-3xl mx-auto mb-8">
              {copy.sections.scope.items.map((item, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-lg font-semibold text-amber-400 mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Scope Cards */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {copy.sections.scope.items.map((item, index) => (
              <PremiumCard key={index} className="border-gold-soft bg-card shadow-soft hover:border-gold hover:shadow-hover transition-all duration-300 relative overflow-hidden rounded-2xl">
                <PremiumCardContent className="p-6 relative z-10">
                  <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </PremiumCardContent>
              </PremiumCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* HOW IT WORKS SECTION */}
      <Section className="py-12 bg-[#0B0E11] relative w-full max-w-full overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/3 via-transparent to-amber-500/3"></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-12 w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {copy.process.title}
            </h2>
          </div>
          
          {/* Process Steps */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {copy.process.steps.map((step, index) => (
              <PremiumCard key={index} className="border-gold-soft bg-card shadow-soft hover:border-gold hover:shadow-hover transition-all duration-300 relative overflow-hidden rounded-2xl">
                <PremiumCardContent className="p-6 relative z-10">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-amber-400 font-bold text-lg">{index + 1}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </PremiumCardContent>
              </PremiumCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* TOKEN UTILITY SECTION */}
      <Section className="py-12 bg-gradient-to-b from-[#0B0E11] to-[#1A1F2E] relative w-full max-w-full overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/3 via-transparent to-blue-500/3"></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-12 w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {copy.token.title}
            </h2>
            <p className="text-gray-300 text-base leading-relaxed max-w-3xl mx-auto mb-8">
              {copy.token.description}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <PremiumCard className="border-gold-soft bg-card shadow-soft hover:border-gold hover:shadow-hover transition-all duration-300 relative overflow-hidden rounded-2xl">
              <PremiumCardContent className="p-8 relative z-10">
                <div className="text-center">
                  <div className="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-amber-400">TPC</span>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {copy.token.description}
                  </p>
                </div>
              </PremiumCardContent>
            </PremiumCard>
          </div>
        </Container>
      </Section>

      {/* DISCLAIMER SECTION */}
      <Section className="py-12 bg-[#0B0E11] relative w-full max-w-full overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/3 via-transparent to-gray-500/3"></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-12 w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {copy.disclaimer.title}
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <PremiumCard className="border-gold-soft bg-card shadow-soft hover:border-gold hover:shadow-hover transition-all duration-300 relative overflow-hidden rounded-2xl">
              <PremiumCardContent className="p-8 relative z-10">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-red-400">!</span>
                  </div>
                  <ul className="text-left text-gray-300 text-sm leading-relaxed space-y-3">
                    {copy.disclaimer.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-amber-400 mr-3">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </PremiumCardContent>
            </PremiumCard>
          </div>
        </Container>
      </Section>

      {/* STATUS SECTION */}
      <Section className="py-12 bg-gradient-to-b from-[#0B0E11] to-[#1A1F2E] relative w-full max-w-full overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/3 via-transparent to-amber-500/3"></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-12 w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {copy.status.title}
            </h2>
            <p className="text-gray-300 text-base leading-relaxed max-w-3xl mx-auto mb-8">
              {copy.status.description}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <PremiumCard className="border-gold-soft bg-card shadow-soft hover:border-gold hover:shadow-hover transition-all duration-300 relative overflow-hidden rounded-2xl">
              <PremiumCardContent className="p-8 relative z-10">
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-green-400">✓</span>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {copy.status.description}
                  </p>
                </div>
              </PremiumCardContent>
            </PremiumCard>
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="relative w-full sm:w-auto mx-auto max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl blur-lg opacity-60"></div>
                <PremiumButton 
                  href={loginUrl}
                  size="lg"
                  fullWidth
                  className="relative bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white border-0 shadow-2xl transform hover:-translate-y-1 transition-all duration-300 font-semibold"
                >
                  {copy.finalCta.primaryButton}
                </PremiumButton>
              </div>
              <div className="flex gap-4 justify-center">
                <Link 
                  href={presaleUrl}
                  className="text-amber-400 hover:text-amber-300 transition-colors duration-200 font-medium"
                >
                  {copy.finalCta.secondaryButton}
                </Link>
                <span className="text-gray-400">•</span>
                <Link 
                  href={academyUrl}
                  className="text-amber-400 hover:text-amber-300 transition-colors duration-200 font-medium"
                >
                  Education
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

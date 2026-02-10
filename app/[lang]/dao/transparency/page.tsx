import { normalizeLang, type LangParams } from "@/lib/lang-helpers";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PremiumCard, PremiumCardContent } from "@/components/ui/PremiumCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { daoTransparencyCopy } from "@/content/daoTransparencyCopy";
import { Metadata } from "next";
import Link from "next/link";

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'id' }
  ];
}

export async function generateMetadata({ params }: { params: Promise<LangParams> }): Promise<Metadata> {
  const { lang } = await params;
  const normalizedLang = normalizeLang(lang);
  const copy = daoTransparencyCopy[normalizedLang as keyof typeof daoTransparencyCopy];
  
  return {
    title: copy.meta.title,
    description: copy.meta.description,
    keywords: copy.meta.keywords,
    authors: [{ name: 'TPC Global' }],
    creator: 'TPC Global',
    publisher: 'TPC Global',
    openGraph: {
      title: copy.meta.title,
      description: copy.meta.description,
      type: "website",
      locale: normalizedLang === 'id' ? 'id_ID' : 'en_US',
      siteName: 'TPC Global',
      images: [
        {
          url: '/tpc.png',
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
      images: ['/tpc.png'],
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

// Sample proposal data (placeholder until real data is available)
const sampleProposals = [
  {
    id: "PROP-001",
    status: "Approved",
    date: "2024-01-15",
    title: "Implementasi Sistem Voting On-chain",
  },
  {
    id: "PROP-002", 
    status: "Rejected",
    date: "2024-01-10",
    title: "Penambahan Fitur Edukasi",
  },
  {
    id: "PROP-003",
    status: "Voting",
    date: "2024-01-05",
    title: "Perubahan Kebijakan Komunitas",
  },
];

export default async function TransparencyPage({ params }: { params: Promise<LangParams> }) {
  const { lang } = await params;
  const normalizedLang = normalizeLang(lang);
  const copy = daoTransparencyCopy[normalizedLang];
  
  // Generate URLs with proper language
  const daoUrl = `/${normalizedLang}/dao`;
  const academyUrl = `/${normalizedLang}/academy`;

  return (
    <>
      {/* HERO SECTION */}
      <Section className="pt-14 pb-10 bg-gradient-to-b from-[#0B0E11] via-[#1A1F2E] to-[#0B0E11] relative w-full max-w-full overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/3 via-transparent to-amber-500/3"></div>
        <div className="absolute top-0 left-0 w-32 h-32 bg-amber-500/5 rounded-full blur-xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/3 rounded-full blur-xl translate-x-1/2 translate-y-1/2"></div>
        
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
          </div>
        </Container>
      </Section>

      {/* PROPOSAL LOG SECTION */}
      <Section className="py-12 bg-[#0B0E11] relative w-full max-w-full overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/3 via-transparent to-amber-500/3"></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-12 w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {copy.proposals.title}
            </h2>
          </div>
          
          {/* Proposals Table */}
          <div className="max-w-6xl mx-auto">
            <PremiumCard className="border-gold-soft bg-card shadow-soft hover:border-gold hover:shadow-hover transition-all duration-300 relative overflow-hidden rounded-2xl">
              <PremiumCardContent className="p-8 relative z-10">
                {sampleProposals.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-amber-400">📋</span>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {copy.proposals.empty}
                    </p>
                    <p className="text-sm text-gray-400 mt-4">
                      {normalizedLang === 'id' 
                        ? "Contoh tampilan — data aktual akan ditampilkan saat DAO aktif."
                        : "Example display — actual data will be shown when DAO is active."
                      }
                    </p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gold-soft">
                          <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">
                            {copy.proposals.columns.find(col => col.id === 'id')?.key}
                          </th>
                          <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">
                            {copy.proposals.columns.find(col => col.id === 'status')?.key}
                          </th>
                          <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">
                            {copy.proposals.columns.find(col => col.id === 'date')?.key}
                          </th>
                          <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">
                            {copy.proposals.columns.find(col => col.id === 'title')?.key}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {sampleProposals.map((proposal) => (
                          <tr key={proposal.id} className="border-b border-gold-soft">
                            <td className="py-4 px-6">
                              <span className="text-amber-400 font-mono font-medium">{proposal.id}</span>
                            </td>
                            <td className="py-4 px-6">
                              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                                proposal.status === 'Approved' 
                                  ? 'bg-green-500/20 text-green-400 border border-gold-soft'
                                  : proposal.status === 'Rejected'
                                  ? 'bg-red-500/20 text-red-400 border border-gold-soft'
                                  : 'bg-amber-500/20 text-amber-400 border border-gold-soft'
                              }`}>
                                {proposal.status}
                              </span>
                            </td>
                            <td className="py-4 px-6">
                              <span className="text-gray-400 text-sm">{proposal.date}</span>
                            </td>
                            <td className="py-4 px-6">
                              <span className="text-white text-sm font-medium">{proposal.title}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </PremiumCardContent>
            </PremiumCard>
          </div>
        </Container>
      </Section>

      {/* ROADMAP SECTION */}
      <Section className="py-12 bg-gradient-to-b from-[#0B0E11] to-[#1A1F2E] relative w-full max-w-full overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/3 via-transparent to-blue-500/3"></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-12 w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {copy.roadmap.title}
            </h2>
            <p className="text-gray-300 text-base leading-relaxed max-w-3xl mx-auto mb-8">
              {copy.roadmap.subtitle}
            </p>
          </div>
          
          {/* Roadmap Timeline */}
          <div className="max-w-4xl mx-auto space-y-6">
            {copy.roadmap.phases.map((phase, index) => (
              <PremiumCard key={index} className={`border-gold-soft bg-card shadow-soft hover:border-gold hover:shadow-hover transition-all duration-300 relative overflow-hidden rounded-2xl ${
                phase.status === 'current' ? 'ring-2 ring-gold' : ''
              }`}>
                <PremiumCardContent className="p-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        phase.status === 'current' 
                          ? 'bg-green-500/20 border-2 border-green-400' 
                          : phase.status === 'completed'
                          ? 'bg-gray-500/20 border-2 border-gray-400'
                          : 'bg-amber-500/20 border-2 border-amber-400'
                        }`}>
                        <span className="text-white font-bold">
                          {phase.status === 'current' ? '✓' : phase.status === 'completed' ? '✓' : index + 1}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-3">
                        {phase.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </PremiumCardContent>
              </PremiumCard>
            ))}
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
                  href={academyUrl}
                  size="lg"
                  fullWidth
                  className="relative bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white border-0 shadow-2xl transform hover:-translate-y-1 transition-all duration-300 font-semibold"
                >
                  {copy.finalCta.primaryButton}
                </PremiumButton>
              </div>
              <div className="flex gap-4 justify-center">
                <Link 
                  href={daoUrl}
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

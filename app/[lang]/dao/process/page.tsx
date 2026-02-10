import { normalizeLang, type LangParams } from "@/lib/lang-helpers";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PremiumCard, PremiumCardContent } from "@/components/ui/PremiumCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { Metadata } from "next";
import Link from "next/link";

interface DAOProcessPageProps {
  params: Promise<LangParams>;
}

export function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'id' }
  ];
}

export async function generateMetadata({ params }: { params: Promise<LangParams> }): Promise<Metadata> {
  const { lang } = await params;
  const normalizedLang = normalizeLang(lang);
  
  const copy = daoProcessCopy[normalizedLang];
  
  return {
    title: `${copy.title} | TPC Global`,
    description: copy.subtitle,
    keywords: 'TPC Global, DAO, mekanisme DAO, governance, voting, transparency, decentralization',
    authors: [{ name: 'TPC Global' }],
    creator: 'TPC Global',
    publisher: 'TPC Global',
    openGraph: {
      title: copy.title,
      description: copy.subtitle,
      type: "website",
      locale: normalizedLang === 'id' ? 'id_ID' : 'en_US',
      siteName: 'TPC Global',
      images: [
        {
          url: 'https://tpcglobal.io/og-dao-process.jpg',
          width: 1200,
          height: 630,
          alt: copy.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: copy.title,
      description: copy.subtitle,
      images: ['https://tpcglobal.io/og-dao-process.jpg'],
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

// DAO Process Content Dictionary
const daoProcessCopy = {
  id: {
    title: 'Mekanisme DAO TPC Global',
    subtitle: 'Pahami cara kerja sistem tata kelola terdesentralisasi kami untuk transparansi dan partisipasi anggota.',
    hero: {
      title: 'Mekanisme DAO TPC Global',
      subtitle: 'Sistem tata kelola yang transparan dan inklusif untuk komunitas trader profesional'
    },
    whatIsDAO: {
      title: 'Apa itu DAO?',
      description: 'DAO (Decentralized Autonomous Organization) adalah organisasi yang dijalankan oleh kode smart contract dan diatur oleh anggota melalui sistem voting.',
      points: [
        'Tidak ada otoritas tunggal yang mengendalikan',
        'Keputusan diambil secara kolektif melalui voting',
        'Transparansi penuh dalam semua operasi',
        'Aturan yang tertanam dalam smart contract'
      ]
    },
    participation: {
      title: 'Mekanisme Partisipasi',
      description: 'Anggota dapat berpartisipasi dalam tata kelola DAO melalui berbagai cara:',
      steps: [
        {
          title: '1. Menjadi Anggota',
          description: 'Daftar sebagai anggota TPC Global untuk mendapatkan hak voting'
        },
        {
          title: '2. Stake Token',
          description: 'Partisipasi aktif dengan men-stake token governance'
        },
        {
          title: '3. Ikuti Diskusi',
          description: 'Terlibat dalam diskusi proposal dan keputusan'
        },
        {
          title: '4. Vote',
          description: 'Gunakan hak voting untuk menentukan arah organisasi'
        }
      ]
    },
    proposalVoting: {
      title: 'Proposal & Voting',
      description: 'Sistem proposal dan voting yang transparan untuk pengambilan keputusan:',
      features: [
        {
          title: 'Pengajuan Proposal',
          description: 'Anggota dapat mengajukan proposal untuk perubahan atau inisiatif baru'
        },
        {
          title: 'Periode Diskusi',
          description: 'Waktu untuk diskusi dan klarifikasi sebelum voting dimulai'
        },
        {
          title: 'Voting Period',
          description: 'Periode voting terbatas dengan bobot voting berdasarkan stake'
        },
        {
          title: 'Implementasi',
          description: 'Proposal yang disetujui akan diimplementasikan secara otomatis'
        }
      ]
    },
    transparency: {
      title: 'Transparansi & Akuntabilitas',
      description: 'Kami menjaga transparansi penuh dalam semua aspek operasional:',
      aspects: [
        {
          title: 'On-Chain Governance',
          description: 'Semua voting dan keputusan tersimpan di blockchain untuk verifikasi publik'
        },
        {
          title: 'Financial Transparency',
          description: 'Laporan keuangan terbuka dan dapat diaudit oleh siapa saja'
        },
        {
          title: 'Decision Log',
          description: 'Arsip lengkap semua keputusan dan hasil voting'
        },
        {
          title: 'Regular Reporting',
          description: 'Laporan berkala tentang perkembangan dan kinerja organisasi'
        }
      ]
    },
    disclaimer: {
      title: 'Disclaimer',
      content: 'Halaman ini bersifat edukasi dan tidak merupakan nasihat investasi. Partisipasi dalam DAO memiliki risiko dan setiap anggota diharapkan melakukan due diligence sebelum berpartisipasi.'
    },
    cta: {
      back: 'Kembali ke DAO'
    }
  },
  en: {
    title: 'TPC Global DAO Mechanism',
    subtitle: 'Understand how our decentralized governance system works for transparency and member participation.',
    hero: {
      title: 'TPC Global DAO Mechanism',
      subtitle: 'Transparent and inclusive governance system for the professional trader community'
    },
    whatIsDAO: {
      title: 'What is DAO?',
      description: 'DAO (Decentralized Autonomous Organization) is an organization run by smart contract code and governed by members through a voting system.',
      points: [
        'No single authority controls the organization',
        'Decisions are made collectively through voting',
        'Full transparency in all operations',
        'Rules embedded in smart contracts'
      ]
    },
    participation: {
      title: 'Participation Mechanism',
      description: 'Members can participate in DAO governance through various ways:',
      steps: [
        {
          title: '1. Become a Member',
          description: 'Register as a TPC Global member to get voting rights'
        },
        {
          title: '2. Stake Tokens',
          description: 'Active participation by staking governance tokens'
        },
        {
          title: '3. Follow Discussions',
          description: 'Engage in proposal discussions and decisions'
        },
        {
          title: '4. Vote',
          description: 'Use your voting rights to determine the organization\'s direction'
        }
      ]
    },
    proposalVoting: {
      title: 'Proposal & Voting',
      description: 'Transparent proposal and voting system for decision making:',
      features: [
        {
          title: 'Proposal Submission',
          description: 'Members can submit proposals for changes or new initiatives'
        },
        {
          title: 'Discussion Period',
          description: 'Time for discussion and clarification before voting begins'
        },
        {
          title: 'Voting Period',
          description: 'Limited voting period with voting weight based on stake'
        },
        {
          title: 'Implementation',
          description: 'Approved proposals are implemented automatically'
        }
      ]
    },
    transparency: {
      title: 'Transparency & Accountability',
      description: 'We maintain full transparency in all operational aspects:',
      aspects: [
        {
          title: 'On-Chain Governance',
          description: 'All votes and decisions stored on blockchain for public verification'
        },
        {
          title: 'Financial Transparency',
          description: 'Open financial reports auditable by anyone'
        },
        {
          title: 'Decision Log',
          description: 'Complete archive of all decisions and voting results'
        },
        {
          title: 'Regular Reporting',
          description: 'Periodic reports on developments and organizational performance'
        }
      ]
    },
    disclaimer: {
      title: 'Disclaimer',
      content: 'This page is for educational purposes and does not constitute investment advice. Participation in DAO involves risks and members are expected to conduct due diligence before participating.'
    },
    cta: {
      back: 'Back to DAO'
    }
  }
};

export default async function DAOProcessPage({ params }: DAOProcessPageProps) {
  const { lang } = await params;
  const normalizedLang = normalizeLang(lang);
  const copy = daoProcessCopy[normalizedLang];

  return (
    <PremiumShell>
      {/* HERO SECTION */}
      <Section className="pt-16 pb-20 bg-gradient-to-br from-[#0B0E11] via-[#1A1F2E] to-[#2A1F3A] relative w-full max-w-full overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10"></div>
        <div className="absolute top-0 left-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-amber-500/5 rounded-full blur-lg -translate-x-1/2 -translate-y-1/2"></div>
        
        <Container className="relative z-10">
          <div className="text-center mb-12 w-full">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-8 md:mb-12 leading-tight tracking-tight">
              {copy.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              {copy.hero.subtitle}
            </p>
          </div>
        </Container>
      </Section>

      {/* WHAT IS DAO SECTION */}
      <Section className="py-16 bg-[#0B0E11] relative w-full max-w-full overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-6xl mx-auto">
            <PremiumCard className="border-2 border-blue-500/20 bg-card shadow-2xl rounded-3xl overflow-hidden">
              <PremiumCardContent className="p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
                  {copy.whatIsDAO.title}
                </h2>
                <p className="text-lg text-gray-300 mb-8 text-center max-w-4xl mx-auto leading-relaxed">
                  {copy.whatIsDAO.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {copy.whatIsDAO.points.map((point, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </PremiumCardContent>
            </PremiumCard>
          </div>
        </Container>
      </Section>

      {/* PARTICIPATION MECHANISM SECTION */}
      <Section className="py-16 bg-gradient-to-b from-[#0B0E11] to-[#1A1F2E] relative w-full max-w-full overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              {copy.participation.title}
            </h2>
            <p className="text-lg text-gray-300 mb-12 text-center max-w-4xl mx-auto leading-relaxed">
              {copy.participation.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {copy.participation.steps.map((step, index) => (
                <PremiumCard key={index} className="border-2 border-amber-500/20 bg-card shadow-2xl rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all duration-300">
                  <PremiumCardContent className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-amber-400 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </PremiumCardContent>
                </PremiumCard>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* PROPOSAL & VOTING SECTION */}
      <Section className="py-16 bg-[#0B0E11] relative w-full max-w-full overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              {copy.proposalVoting.title}
            </h2>
            <p className="text-lg text-gray-300 mb-12 text-center max-w-4xl mx-auto leading-relaxed">
              {copy.proposalVoting.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {copy.proposalVoting.features.map((feature, index) => (
                <PremiumCard key={index} className="border-2 border-purple-500/20 bg-card shadow-2xl rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all duration-300">
                  <PremiumCardContent className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-purple-400 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </PremiumCardContent>
                </PremiumCard>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* TRANSPARENCY SECTION */}
      <Section className="py-16 bg-gradient-to-b from-[#0B0E11] to-[#1A1F2E] relative w-full max-w-full overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              {copy.transparency.title}
            </h2>
            <p className="text-lg text-gray-300 mb-12 text-center max-w-4xl mx-auto leading-relaxed">
              {copy.transparency.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {copy.transparency.aspects.map((aspect, index) => (
                <PremiumCard key={index} className="border-2 border-green-500/20 bg-card shadow-2xl rounded-2xl overflow-hidden hover:border-green-500/40 transition-all duration-300">
                  <PremiumCardContent className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-green-400 mb-4">
                      {aspect.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {aspect.description}
                    </p>
                  </PremiumCardContent>
                </PremiumCard>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* DISCLAIMER SECTION */}
      <Section className="py-16 bg-[#0B0E11] relative w-full max-w-full overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto">
            <PremiumCard className="border-2 border-red-500/20 bg-card shadow-2xl rounded-2xl overflow-hidden">
              <PremiumCardContent className="p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold text-red-400 mb-6 text-center">
                  {copy.disclaimer.title}
                </h2>
                <p className="text-gray-300 leading-relaxed text-center">
                  {copy.disclaimer.content}
                </p>
              </PremiumCardContent>
            </PremiumCard>
          </div>
        </Container>
      </Section>

      {/* CTA SECTION */}
      <Section className="py-16 bg-gradient-to-b from-[#0B0E11] to-[#1A1F2E] relative w-full max-w-full overflow-hidden">
        <Container className="relative z-10">
          <div className="text-center">
            <Link href={`/${lang}/dao`}>
              <PremiumButton 
                variant="gold" 
                size="lg"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold"
              >
                {copy.cta.back}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </PremiumButton>
            </Link>
          </div>
        </Container>
      </Section>
    </PremiumShell>
  );
}

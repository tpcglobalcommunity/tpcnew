import { normalizeLang, type LangParams } from "@/lib/lang-helpers";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PremiumCard, PremiumCardContent } from "@/components/ui/PremiumCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { publicPath } from "@/lib/lang-helpers";
import { Metadata } from "next";
import Link from "next/link";

interface TermsPageProps {
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
  
  const copy = termsCopy[lang];
  
  return {
    title: copy.meta.title,
    description: copy.meta.description,
    keywords: 'TPC Global, terms, conditions, syarat, ketentuan, legal, compliance',
    authors: [{ name: 'TPC Global' }],
    creator: 'TPC Global',
    publisher: 'TPC Global',
    openGraph: {
      title: copy.meta.title,
      description: copy.meta.description,
      type: "website",
      locale: lang === 'id' ? 'id_ID' : 'en_US',
      siteName: 'TPC Global',
      images: [
        {
          url: 'https://tpcglobal.io/og-terms.jpg',
          width: 1200,
          height: 630,
          alt: copy.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: copy.meta.title,
      description: copy.meta.description,
      images: ['https://tpcglobal.io/og-terms.jpg'],
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

// Terms Content Dictionary
const termsCopy = {
  id: {
    title: 'Syarat & Ketentuan',
    subtitle: 'Dokumen ini mengatur penggunaan situs dan layanan TPC Global.',
    note: 'Dengan mengakses situs ini, Anda dianggap telah membaca dan menyetujui ketentuan berikut.',
    meta: {
      title: 'Syarat & Ketentuan | TPC Global',
      description: 'Ketentuan penggunaan platform edukasi dan komunitas TPC Global.'
    },
    sections: {
      definitions: {
        title: 'Definisi',
        items: [
          '"TPC Global": platform edukasi & komunitas.',
          '"Pengguna": setiap individu yang mengakses situs.',
          '"Konten": materi edukasi, informasi, dan publikasi resmi.'
        ]
      },
      scope: {
        title: 'Ruang Lingkup Layanan',
        items: [
          'Penyediaan konten edukasi.',
          'Informasi presale dan transparansi.',
          'Fasilitasi komunitas dan tata kelola (DAO) secara bertahap.'
        ],
        disclaimer: 'Layanan tidak merupakan nasihat finansial atau investasi.'
      },
      obligations: {
        title: 'Kewajiban Pengguna',
        items: [
          'Menggunakan informasi secara bertanggung jawab.',
          'Tidak menyalahgunakan platform.',
          'Memverifikasi informasi melalui kanal resmi.',
          'Menjaga keamanan akun & perangkat pribadi.'
        ]
      },
      restrictions: {
        title: 'Pembatasan',
        items: [
          'Dilarang menggunakan situs untuk aktivitas ilegal.',
          'Dilarang meniru atau menyamar sebagai pihak TPC.',
          'Dilarang menyebarkan informasi palsu atau menyesatkan.'
        ]
      },
      presale: {
        title: 'Presale & Informasi Terkait',
        content: 'Informasi presale bersifat informatif dan transparan. Tidak ada jaminan keuntungan finansial. Partisipasi bersifat sukarela dan berdasarkan pemahaman pengguna.'
      },
      intellectual: {
        title: 'Hak Kekayaan Intelektual',
        content: 'Seluruh konten dimiliki atau dilisensikan oleh TPC Global. Penggunaan tanpa izin tertulis dilarang.'
      },
      liability: {
        title: 'Batasan Tanggung Jawab',
        content: 'TPC Global tidak bertanggung jawab atas kerugian akibat keputusan pengguna. Risiko penggunaan situs sepenuhnya ditanggung pengguna.'
      },
      changes: {
        title: 'Perubahan Ketentuan',
        content: 'TPC Global berhak memperbarui ketentuan. Versi terbaru selalu tersedia di situs resmi.'
      }
    },
    cta: {
      primary: 'Kembali ke Home',
      secondary: 'Risk Disclosure'
    }
  },
  en: {
    title: 'Terms & Conditions',
    subtitle: 'This document governs the use of the TPC Global site and services.',
    note: 'By accessing this site, you are deemed to have read and agreed to the following terms.',
    meta: {
      title: 'Terms & Conditions | TPC Global',
      description: 'Terms governing the use of the TPC Global educational platform.'
    },
    sections: {
      definitions: {
        title: 'Definitions',
        items: [
          '"TPC Global": educational platform & community.',
          '"User": any individual accessing the site.',
          '"Content": educational materials, information, and official publications.'
        ]
      },
      scope: {
        title: 'Scope of Services',
        items: [
          'Provision of educational content.',
          'Presale and transparency information.',
          'Community facilitation and governance (DAO) on a phased basis.'
        ],
        disclaimer: 'Services do not constitute financial or investment advice.'
      },
      obligations: {
        title: 'User Obligations',
        items: [
          'Use information responsibly.',
          'Do not misuse the platform.',
          'Verify information through official channels.',
          'Maintain account and personal device security.'
        ]
      },
      restrictions: {
        title: 'Restrictions',
        items: [
          'Prohibited from using the site for illegal activities.',
          'Prohibited from impersonating or posing as TPC.',
          'Prohibited from spreading false or misleading information.'
        ]
      },
      presale: {
        title: 'Presale & Related Information',
        content: 'Presale information is informative and transparent. No financial profit guarantees. Participation is voluntary and based on user understanding.'
      },
      intellectual: {
        title: 'Intellectual Property Rights',
        content: 'All content is owned or licensed by TPC Global. Use without written permission is prohibited.'
      },
      liability: {
        title: 'Limitation of Liability',
        content: 'TPC Global is not liable for losses resulting from user decisions. Site usage risk is fully borne by the user.'
      },
      changes: {
        title: 'Terms Changes',
        content: 'TPC Global reserves the right to update terms. The latest version is always available on the official site.'
      }
    },
    cta: {
      primary: 'Back to Home',
      secondary: 'Risk Disclosure'
    }
  }
};

export default function TermsPage({ params }: TermsPageProps) {
  const lang = normalizeLang(params.lang);
  const copy = termsCopy[lang];

  return (
    <PremiumShell>
      {/* HERO SECTION */}
      <Section className="pt-16 pb-20 bg-gradient-to-br from-[#0B0E11] via-[#1A1F2E] to-[#2A1F3A] relative w-full max-w-full overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-indigo-500/10"></div>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
        
        {/* Animated Legal Pattern */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238b5cf' fill-opacity='0.1'%3E%3Cpath d='M20 20h1v1h-1v-1z M10 10h1v1h-1v-1z M30 30h1v1h-1v-1z'/%3E%3C/g%3E%3C/svg%3E")`,
          animation: 'slide 20s linear infinite'
        }}></div>
        
        <Container className="relative z-10">
          <PremiumCard variant="glass" className="text-center p-16 md:p-20 lg:p-24 border-2 border-purple-500/20 shadow-2xl">
            {/* Legal Icon */}
            <div className="relative w-32 h-32 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-purple-500/30 to-indigo-500/30 rounded-full flex items-center justify-center">
                <svg className="w-16 h-16 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2 2v10a2 2 0 012-2 2h10a2 2 0 012-2 2v-4M9 20l-3 3a2 2 0 01-2 2v-4M13 4l-3 3a2 2 0 01-2 2v-4" />
                </svg>
              </div>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-fg mb-8 md:mb-12 leading-tight tracking-tight">
                {copy.title}
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed">
                {copy.subtitle}
              </p>
              
              {/* Important Note */}
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-lg blur-lg"></div>
                <div className="relative px-6 py-3 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                  <p className="text-sm text-purple-300 font-medium">
                    {copy.note}
                  </p>
                </div>
              </div>
            </div>
          </PremiumCard>
        </Container>
      </Section>

      {/* Section Divider */}
      <div className="border-t border-border/10"></div>

      {/* DEFINITIONS SECTION */}
      <Section className="py-16 bg-gradient-to-b from-[#0B0E11] to-[#1A1F2E] relative w-full max-w-full overflow-hidden">
        {/* Premium Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-indigo-500/5"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239CA3AF' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-12 w-full">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full blur-xl"></div>
              <div className="relative w-16 h-16 bg-gradient-to-br from-purple-500/30 to-indigo-500/30 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {copy.sections.definitions.title}
            </h2>
          </div>
          
          <PremiumCard className="border-2 border-purple-500/30 bg-purple-500/5 hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden group max-w-4xl mx-auto">
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <PremiumCardContent className="p-10 relative z-10">
              <div className="space-y-6">
                {copy.sections.definitions.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-purple-400">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-base text-gray-300 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </PremiumCardContent>
          </PremiumCard>
        </Container>
      </Section>

      {/* Section Divider */}
      <div className="border-t border-border/10"></div>

      {/* SCOPE SECTION */}
      <Section className="py-16 bg-gradient-to-b from-[#1A1F2E] to-[#0B0E11] relative w-full max-w-full overflow-hidden">
        {/* Premium Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-blue-500/10"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.05'%3E%3Cpath d='M30 30h1v1h-1v-1z M10 10h1v1h-1v-1z M50 50h1v1h-1v-1z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-12 w-full">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-xl"></div>
              <div className="relative w-16 h-16 bg-gradient-to-br from-green-500/30 to-blue-500/30 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {copy.sections.scope.title}
            </h2>
          </div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {copy.sections.scope.items.map((item, index) => (
              <PremiumCard key={index} className="border-2 border-green-500/30 bg-green-500/5 hover:border-green-500/50 transition-all duration-300 relative overflow-hidden group">
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <PremiumCardContent className="p-8 relative z-10">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-green-400">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-base text-gray-300 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  </div>
                </PremiumCardContent>
              </PremiumCard>
            ))}
          </div>
          
          {/* Disclaimer */}
          <PremiumCard className="border-2 border-blue-500/30 bg-blue-500/5 hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden max-w-4xl mx-auto mt-8">
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 transition-opacity duration-300"></div>
            
            <PremiumCardContent className="p-8 relative z-10">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-base text-blue-300 font-medium text-center leading-relaxed">
                    {copy.sections.scope.disclaimer}
                  </p>
                </div>
              </div>
            </PremiumCardContent>
          </PremiumCard>
        </Container>
      </Section>

      {/* Section Divider */}
      <div className="border-t border-border/10"></div>

      {/* OBLIGATIONS SECTION */}
      <Section className="py-12 bg-[#0B0E11] relative w-full max-w-full overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239CA3AF' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-10 w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {copy.sections.obligations.title}
            </h2>
          </div>
          
          <div className="space-y-4 max-w-3xl mx-auto">
            {copy.sections.obligations.items.map((item, index) => (
              <PremiumCard key={index} className="border border-gray-700 bg-[#1A1F2E] hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden group">
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <PremiumCardContent className="p-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-amber-400">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {item}
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

      {/* RESTRICTIONS SECTION */}
      <Section className="py-12 bg-gradient-to-b from-[#0B0E11] to-[#1A1F2E] relative w-full max-w-full overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-amber-500/5"></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-10 w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {copy.sections.restrictions.title}
            </h2>
          </div>
          
          <PremiumCard className="border-2 border-red-500/30 bg-red-500/5 hover:border-red-500/50 transition-all duration-300 relative overflow-hidden max-w-3xl mx-auto">
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 transition-opacity duration-300"></div>
            
            <PremiumCardContent className="p-8 relative z-10">
              <div className="space-y-4">
                {copy.sections.restrictions.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </PremiumCardContent>
          </PremiumCard>
        </Container>
      </Section>

      {/* Section Divider */}
      <div className="border-t border-border/10"></div>

      {/* PRESALE SECTION */}
      <Section className="py-12 bg-[#0B0E11] relative w-full max-w-full overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239CA3AF' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-10 w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {copy.sections.presale.title}
            </h2>
          </div>
          
          <PremiumCard className="border border-gray-700 bg-[#1A1F2E] hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden group max-w-3xl mx-auto">
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <PremiumCardContent className="p-8 relative z-10">
              <p className="text-sm text-gray-300 leading-relaxed">
                {copy.sections.presale.content}
              </p>
            </PremiumCardContent>
          </PremiumCard>
        </Container>
      </Section>

      {/* Section Divider */}
      <div className="border-t border-border/10"></div>

      {/* INTELLECTUAL PROPERTY SECTION */}
      <Section className="py-12 bg-gradient-to-b from-[#0B0E11] to-[#1A1F2E] relative w-full max-w-full overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-amber-500/5"></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-10 w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {copy.sections.intellectual.title}
            </h2>
          </div>
          
          <PremiumCard className="border border-gray-700 bg-[#1A1F2E] hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden group max-w-3xl mx-auto">
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <PremiumCardContent className="p-8 relative z-10">
              <p className="text-sm text-gray-300 leading-relaxed">
                {copy.sections.intellectual.content}
              </p>
            </PremiumCardContent>
          </PremiumCard>
        </Container>
      </Section>

      {/* Section Divider */}
      <div className="border-t border-border/10"></div>

      {/* LIABILITY SECTION */}
      <Section className="py-12 bg-[#0B0E11] relative w-full max-w-full overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239CA3AF' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-10 w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {copy.sections.liability.title}
            </h2>
          </div>
          
          <PremiumCard className="border-2 border-orange-500/30 bg-orange-500/5 hover:border-orange-500/50 transition-all duration-300 relative overflow-hidden max-w-3xl mx-auto">
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 transition-opacity duration-300"></div>
            
            <PremiumCardContent className="p-8 relative z-10">
              <p className="text-sm text-gray-300 leading-relaxed">
                {copy.sections.liability.content}
              </p>
            </PremiumCardContent>
          </PremiumCard>
        </Container>
      </Section>

      {/* Section Divider */}
      <div className="border-t border-border/10"></div>

      {/* CHANGES SECTION */}
      <Section className="py-12 bg-gradient-to-b from-[#0B0E11] to-[#1A1F2E] relative w-full max-w-full overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-amber-500/5"></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-10 w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {copy.sections.changes.title}
            </h2>
          </div>
          
          <PremiumCard className="border border-gray-700 bg-[#1A1F2E] hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden group max-w-3xl mx-auto">
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <PremiumCardContent className="p-8 relative z-10">
              <p className="text-sm text-gray-300 leading-relaxed">
                {copy.sections.changes.content}
              </p>
            </PremiumCardContent>
          </PremiumCard>
        </Container>
      </Section>

      {/* Section Divider */}
      <div className="border-t border-border/10"></div>

      {/* CTA SECTION */}
      <Section className="py-20 bg-gradient-to-br from-[#0B0E11] via-[#1A1F2E] to-[#2A1F3A] relative w-full max-w-full overflow-hidden pb-24">
        {/* Premium Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-indigo-500/10"></div>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center">
            <div className="relative w-full mx-auto max-w-lg mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-xl blur-2xl opacity-60"></div>
              <div className="relative border-2 border-purple-500/30 rounded-xl bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur-sm">
                <PremiumButton 
                  href={publicPath(lang, '/')}
                  size="md"
                  fullWidth
                  className="relative bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 hover:from-indigo-500 hover:to-purple-600 text-white border-0 shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold text-lg py-4"
                >
                  <span className="relative z-10">{copy.cta.primary}</span>
                </PremiumButton>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                href={publicPath(lang, '/risk-disclosure')}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-lg hover:from-red-500/30 hover:to-orange-500/30 transition-all duration-300 group"
              >
                <svg className="w-5 h-5 mr-2 text-red-400 group-hover:text-red-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002 2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span className="text-red-300 group-hover:text-red-200 font-medium transition-colors">
                  {copy.cta.secondary}
                </span>
              </Link>
              
              <Link 
                href={publicPath(lang, '/privacy')}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg hover:from-green-500/30 hover:to-emerald-500/30 transition-all duration-300 group"
              >
                <svg className="w-5 h-5 mr-2 text-green-400 group-hover:text-green-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002 2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span className="text-green-300 group-hover:text-green-200 font-medium transition-colors">
                  Privacy Policy
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </PremiumShell>
  );
}

import { normalizeLang, type LangParams } from "@/lib/lang-helpers";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PremiumCard, PremiumCardContent } from "@/components/ui/PremiumCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { publicPath } from "@/lib/lang-helpers";
import { Metadata } from "next";
import Link from "next/link";

interface PrivacyPageProps {
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
  
  const copy = privacyCopy[lang];
  
  return {
    title: copy.meta.title,
    description: copy.meta.description,
    keywords: 'TPC Global, privacy policy, kebijakan privasi, perlindungan data, data protection',
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
          url: 'https://tpcglobal.io/og-privacy.jpg',
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
      images: ['https://tpcglobal.io/og-privacy.jpg'],
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

// Privacy Policy Content Dictionary
const privacyCopy = {
  id: {
    title: 'Kebijakan Privasi',
    subtitle: 'Kebijakan ini menjelaskan bagaimana TPC Global mengumpulkan, menggunakan, dan melindungi data pengguna.',
    note: 'Dengan menggunakan situs ini, Anda menyetujui kebijakan privasi berikut.',
    meta: {
      title: 'Kebijakan Privasi | TPC Global',
      description: 'Kebijakan privasi dan perlindungan data pengguna TPC Global.'
    },
    sections: {
      scope: {
        title: 'Ruang Lingkup',
        content: 'Kebijakan ini berlaku untuk situs resmi TPC Global dan layanan terkait. Tidak mencakup situs atau layanan pihak ketiga yang memiliki kebijakan sendiri.'
      },
      dataCollected: {
        title: 'Data yang Dikumpulkan',
        items: [
          'Data dasar yang diberikan pengguna (misalnya email, username).',
          'Data teknis dasar (alamat IP, jenis perangkat, browser).',
          'Data interaksi situs (halaman yang diakses, waktu kunjungan).'
        ],
        note: 'TPC Global tidak meminta private key atau seed phrase.'
      },
      dataUsage: {
        title: 'Penggunaan Data',
        items: [
          'Menyediakan dan meningkatkan layanan edukasi.',
          'Komunikasi terkait informasi resmi.',
          'Keperluan keamanan dan pencegahan penyalahgunaan.'
        ],
        disclaimer: 'Data tidak digunakan untuk menjanjikan atau menjamin keuntungan finansial.'
      },
      storage: {
        title: 'Penyimpanan & Keamanan Data',
        content: 'Data disimpan dengan langkah pengamanan yang wajar. Tidak ada sistem yang sepenuhnya bebas risiko. Pengguna bertanggung jawab menjaga keamanan perangkat & kredensial.'
      },
      sharing: {
        title: 'Berbagi Data dengan Pihak Ketiga',
        content: 'Data dapat dibagikan dengan penyedia layanan pendukung (misalnya hosting, analitik) secara terbatas. Tidak menjual data pribadi pengguna. Berbagi data dilakukan sesuai kebutuhan operasional.'
      },
      cookies: {
        title: 'Cookie & Teknologi Serupa',
        content: 'Situs dapat menggunakan cookie untuk fungsi dasar dan analitik. Pengguna dapat mengatur preferensi cookie melalui browser.'
      },
      userRights: {
        title: 'Hak Pengguna',
        items: [
          'Mengakses informasi pribadi yang disediakan.',
          'Meminta pembaruan atau penghapusan data sesuai kebijakan.',
          'Menghubungi kami untuk pertanyaan privasi.'
        ]
      },
      changes: {
        title: 'Perubahan Kebijakan Privasi',
        content: 'Kebijakan dapat diperbarui dari waktu ke waktu. Versi terbaru selalu tersedia di situs resmi.'
      }
    },
    cta: {
      primary: 'Kembali ke Home',
      secondary: 'Terms & Conditions'
    }
  },
  en: {
    title: 'Privacy Policy',
    subtitle: 'This policy explains how TPC Global collects, uses, and protects user data.',
    note: 'By using this site, you agree to the following privacy policy.',
    meta: {
      title: 'Privacy Policy | TPC Global',
      description: 'Privacy policy describing how TPC Global handles user data.'
    },
    sections: {
      scope: {
        title: 'Scope',
        content: 'This policy applies to the official TPC Global site and related services. It does not cover third-party sites or services with their own policies.'
      },
      dataCollected: {
        title: 'Data We Collect',
        items: [
          'Basic data provided by users (e.g., email, username).',
          'Basic technical data (IP address, device type, browser).',
          'Site interaction data (pages accessed, visit time).'
        ],
        note: 'TPC Global does not request private keys or seed phrases.'
      },
      dataUsage: {
        title: 'Data Usage',
        items: [
          'To provide and improve educational services.',
          'For official information communications.',
          'For security and misuse prevention purposes.'
        ],
        disclaimer: 'Data is not used to promote or guarantee financial profits.'
      },
      storage: {
        title: 'Data Storage & Security',
        content: 'Data is stored with reasonable security measures. No system is entirely risk-free. Users are responsible for maintaining device and credential security.'
      },
      sharing: {
        title: 'Data Sharing with Third Parties',
        content: 'Data may be shared with supporting service providers (e.g., hosting, analytics) on a limited basis. We do not sell user personal data. Data sharing is done according to operational needs.'
      },
      cookies: {
        title: 'Cookies & Similar Technologies',
        content: 'The site may use cookies for basic functionality and analytics. Users can manage cookie preferences through their browser.'
      },
      userRights: {
        title: 'User Rights',
        items: [
          'Access to provided personal information.',
          'Request updates or deletion of data according to policy.',
          'Contact us for privacy questions.'
        ]
      },
      changes: {
        title: 'Privacy Policy Changes',
        content: 'The policy may be updated from time to time. The latest version is always available on the official site.'
      }
    },
    cta: {
      primary: 'Back to Home',
      secondary: 'Terms & Conditions'
    }
  }
};

export default function PrivacyPage({ params }: PrivacyPageProps) {
  const lang = normalizeLang(params.lang);
  const copy = privacyCopy[lang];

  return (
    <PremiumShell>
      {/* HERO SECTION */}
      <Section className="pt-16 pb-20 bg-gradient-to-br from-[#0B0E11] via-[#1A1F2E] to-[#2A1F3A] relative w-full max-w-full overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10"></div>
        <div className="absolute top-0 left-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-amber-500/5 rounded-full blur-lg -translate-x-1/2 -translate-y-1/2"></div>
        
        {/* Animated Shield Pattern */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.1'%3E%3Cpath d='M20 20h1v1h-1v-1z M10 10h1v1h-1v-1z M30 30h1v1h-1v-1z'/%3E%3C/g%3E%3C/svg%3E")`,
          animation: 'slide 20s linear infinite'
        }}></div>
        
        <Container className="relative z-10">
          <PremiumCard variant="glass" className="text-center p-16 md:p-20 lg:p-24 border-2 border-blue-500/20 shadow-2xl">
            {/* Shield Icon */}
            <div className="relative w-32 h-32 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full flex items-center justify-center">
                <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-lg"></div>
                <div className="relative px-6 py-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <p className="text-sm text-blue-300 font-medium">
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

      {/* SCOPE SECTION */}
      <Section className="py-16 bg-gradient-to-b from-[#0B0E11] to-[#1A1F2E] relative w-full max-w-full overflow-hidden">
        {/* Premium Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-blue-500/5"></div>
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
          
          <PremiumCard className="border-2 border-green-500/30 bg-green-500/5 hover:border-green-500/50 transition-all duration-300 relative overflow-hidden group max-w-4xl mx-auto">
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <PremiumCardContent className="p-10 relative z-10">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-400">1</span>
                </div>
                <div className="flex-1">
                  <p className="text-base text-gray-300 leading-relaxed">
                    {copy.sections.scope.content}
                  </p>
                </div>
              </div>
            </PremiumCardContent>
          </PremiumCard>
        </Container>
      </Section>

      {/* Section Divider */}
      <div className="border-t border-border/10"></div>

      {/* DATA COLLECTED SECTION */}
      <Section className="py-16 bg-gradient-to-b from-[#1A1F2E] to-[#0B0E11] relative w-full max-w-full overflow-hidden">
        {/* Premium Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-orange-500/10"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.05'%3E%3Cpath d='M30 30h1v1h-1v-1z M10 10h1v1h-1v-1z M50 50h1v1h-1v-1z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-12 w-full">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full blur-xl"></div>
              <div className="relative w-16 h-16 bg-gradient-to-br from-amber-500/30 to-orange-500/30 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {copy.sections.dataCollected.title}
            </h2>
          </div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {copy.sections.dataCollected.items.map((item, index) => (
              <PremiumCard key={index} className="border-2 border-amber-500/30 bg-amber-500/5 hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden group">
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <PremiumCardContent className="p-8 relative z-10">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-amber-400">{index + 1}</span>
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
          
          {/* Important Note */}
          <PremiumCard className="border-2 border-green-500/30 bg-green-500/5 hover:border-green-500/50 transition-all duration-300 relative overflow-hidden max-w-4xl mx-auto mt-8">
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 transition-opacity duration-300"></div>
            
            <PremiumCardContent className="p-8 relative z-10">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-base text-green-300 font-medium text-center leading-relaxed">
                    {copy.sections.dataCollected.note}
                  </p>
                </div>
              </div>
            </PremiumCardContent>
          </PremiumCard>
        </Container>
      </Section>

      {/* Section Divider */}
      <div className="border-t border-border/10"></div>

      {/* DATA USAGE SECTION */}
      <Section className="py-12 bg-[#0B0E11] relative w-full max-w-full overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239CA3AF' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-10 w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {copy.sections.dataUsage.title}
            </h2>
          </div>
          
          <div className="space-y-4 max-w-3xl mx-auto">
            {copy.sections.dataUsage.items.map((item, index) => (
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
          
          {/* Disclaimer */}
          <PremiumCard className="border-2 border-blue-500/30 bg-blue-500/5 hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden max-w-3xl mx-auto mt-6">
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 transition-opacity duration-300"></div>
            
            <PremiumCardContent className="p-6 relative z-10">
              <p className="text-sm text-blue-300 leading-relaxed text-center">
                {copy.sections.dataUsage.disclaimer}
              </p>
            </PremiumCardContent>
          </PremiumCard>
        </Container>
      </Section>

      {/* Section Divider */}
      <div className="border-t border-border/10"></div>

      {/* STORAGE SECTION */}
      <Section className="py-12 bg-gradient-to-b from-[#0B0E11] to-[#1A1F2E] relative w-full max-w-full overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-amber-500/5"></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-10 w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {copy.sections.storage.title}
            </h2>
          </div>
          
          <PremiumCard className="border border-gray-700 bg-[#1A1F2E] hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden group max-w-3xl mx-auto">
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <PremiumCardContent className="p-8 relative z-10">
              <p className="text-sm text-gray-300 leading-relaxed">
                {copy.sections.storage.content}
              </p>
            </PremiumCardContent>
          </PremiumCard>
        </Container>
      </Section>

      {/* Section Divider */}
      <div className="border-t border-border/10"></div>

      {/* SHARING SECTION */}
      <Section className="py-12 bg-[#0B0E11] relative w-full max-w-full overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239CA3AF' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-10 w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {copy.sections.sharing.title}
            </h2>
          </div>
          
          <PremiumCard className="border border-gray-700 bg-[#1A1F2E] hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden group max-w-3xl mx-auto">
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <PremiumCardContent className="p-8 relative z-10">
              <p className="text-sm text-gray-300 leading-relaxed">
                {copy.sections.sharing.content}
              </p>
            </PremiumCardContent>
          </PremiumCard>
        </Container>
      </Section>

      {/* Section Divider */}
      <div className="border-t border-border/10"></div>

      {/* COOKIES SECTION */}
      <Section className="py-12 bg-gradient-to-b from-[#0B0E11] to-[#1A1F2E] relative w-full max-w-full overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-amber-500/5"></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-10 w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {copy.sections.cookies.title}
            </h2>
          </div>
          
          <PremiumCard className="border border-gray-700 bg-[#1A1F2E] hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden group max-w-3xl mx-auto">
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <PremiumCardContent className="p-8 relative z-10">
              <p className="text-sm text-gray-300 leading-relaxed">
                {copy.sections.cookies.content}
              </p>
            </PremiumCardContent>
          </PremiumCard>
        </Container>
      </Section>

      {/* Section Divider */}
      <div className="border-t border-border/10"></div>

      {/* USER RIGHTS SECTION */}
      <Section className="py-12 bg-[#0B0E11] relative w-full max-w-full overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239CA3AF' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-10 w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {copy.sections.userRights.title}
            </h2>
          </div>
          
          <div className="space-y-4 max-w-3xl mx-auto">
            {copy.sections.userRights.items.map((item, index) => (
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
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10"></div>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center">
            <div className="relative w-full mx-auto max-w-lg mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-xl blur-2xl opacity-60"></div>
              <div className="relative border-2 border-blue-500/30 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm">
                <PremiumButton 
                  href={publicPath(lang, '/')}
                  size="md"
                  fullWidth
                  className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-blue-600 text-white border-0 shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold text-lg py-4"
                >
                  <span className="relative z-10">{copy.cta.primary}</span>
                </PremiumButton>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                href={publicPath(lang, '/terms')}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 group"
              >
                <svg className="w-5 h-5 mr-2 text-purple-400 group-hover:text-purple-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002 2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span className="text-purple-300 group-hover:text-purple-200 font-medium transition-colors">
                  {copy.cta.secondary}
                </span>
              </Link>
              
              <Link 
                href={publicPath(lang, '/transparency')}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg hover:from-green-500/30 hover:to-emerald-500/30 transition-all duration-300 group"
              >
                <svg className="w-5 h-5 mr-2 text-green-400 group-hover:text-green-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002 2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span className="text-green-300 group-hover:text-green-200 font-medium transition-colors">
                  {copy.cta.secondary}
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </PremiumShell>
  );
}

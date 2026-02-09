import { normalizeLang, type LangParams } from "@/lib/lang-helpers";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PremiumCard, PremiumCardContent } from "@/components/ui/PremiumCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { publicPath } from "@/lib/lang-helpers";
import { Metadata } from "next";
import Link from "next/link";
import CopyButton from "@/components/ui/CopyButton";

interface TransparencyPageProps {
  params: LangParams;
}

export function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'id' }
  ];
}

// Wallet Data
const walletData = [
  {
    label: 'Stage 1 Supply',
    address: 'At5nA9pw2ukSoAQj5vxqBmNbfk6UYF89UBsXtoFrf8t7',
    explorer: 'https://etherscan.io/address/At5nA9pw2ukSoAQj5vxqBmNbfk6UYF89UBsXtoFrf8t7'
  },
  {
    label: 'Stage 2 Supply',
    address: 'FzUNpf4vVbTSzxcywAUba87FdZHvEBQZFNyKVMrchyAh',
    explorer: 'https://etherscan.io/address/FzUNpf4vVbTSzxcywAUba87FdZHvEBQZFNyKVMrchyAh'
  },
  {
    label: 'Liquidity',
    address: 'CbaYJrd23Ak9dEDjVTExyjrgjn1MVSN1h3Ga7cRCnrxm',
    explorer: 'https://etherscan.io/address/CbaYJrd23Ak9dEDjVTExyjrgjn1MVSN1h3Ga7cRCnrxm'
  },
  {
    label: 'Buyback',
    address: 'ALaCDQv5etXkrFqB91r7gNw5CpDe58nUyhWR8C5vKg7a',
    explorer: 'https://etherscan.io/address/ALaCDQv5etXkrFqB91r7gNw5CpDe58nUyhWR8C5vKg7a'
  },
  {
    label: 'Burn',
    address: 'H75PvmbP55LYbK3hGyrnxus2kZCjfZ4TmCGvyWcKPfL',
    explorer: 'https://etherscan.io/address/H75PvmbP55LYbK3hGyrnxus2kZCjfZ4TmCGvyWcKPfL'
  },
  {
    label: 'Mint Address',
    address: '2YJi7b95778Wv5DNWMZD86TN3fkUHDFwcDesrFoGdEka',
    explorer: 'https://etherscan.io/address/2YJi7b95778Wv5DNWMZD86TN3fkUHDFwcDesrFoGdEka'
  }
];

// Transparency Content Dictionary
const transparencyCopy = {
  id: {
    title: 'Transparansi & Kepercayaan',
    subtitle: 'Kami mempublikasikan alamat resmi untuk membantu komunitas melakukan verifikasi mandiri.',
    badges: ['Alamat Resmi', 'Verifikasi Mandiri', 'Anti-Scam', 'Audit Trail'],
    wallets: {
      title: 'Wallet Resmi',
      subtitle: 'Alamat resmi yang dipublikasikan untuk transparansi.'
    },
    verification: {
      title: 'Cara Verifikasi',
      steps: [
        'Pastikan domain resmi: tpcglobal.io',
        'Cocokkan alamat wallet dengan daftar di halaman ini',
        'Jangan percaya DM yang meminta dana/seed phrase',
        'Jika ragu, konfirmasi via channel resmi (Telegram TPC)'
      ]
    },
    antiScam: {
      title: 'Kebijakan Anti-Scam',
      rules: [
        'TPC tidak pernah meminta private key/seed phrase.',
        'Admin tidak akan menghubungi terlebih dahulu via DM.',
        'Gunakan hanya link resmi dari website.',
        'Laporkan akun mencurigakan.'
      ]
    },
    cta: {
      primary: 'Kembali ke Presale',
      secondary: 'Lihat DAO'
    }
  },
  en: {
    title: 'Transparency & Trust',
    subtitle: 'We publish official addresses to help the community perform independent verification.',
    badges: ['Official Addresses', 'Self Verification', 'Anti-Scam', 'Audit Trail'],
    wallets: {
      title: 'Official Wallets',
      subtitle: 'Official addresses published for transparency.'
    },
    verification: {
      title: 'How to Verify',
      steps: [
        'Ensure official domain: tpcglobal.io',
        'Match wallet addresses with the list on this page',
        'Do not trust DMs requesting funds/seed phrases',
        'If unsure, confirm via official channels (Telegram TPC)'
      ]
    },
    antiScam: {
      title: 'Anti-Scam Policy',
      rules: [
        'TPC never asks for private keys/seed phrases.',
        'Admin will not contact you first via DM.',
        'Use only official links from the website.',
        'Report suspicious accounts.'
      ]
    },
    cta: {
      primary: 'Back to Presale',
      secondary: 'View DAO'
    }
  }
};

// Helper function to truncate address
function truncateAddress(address: string) {
  if (address.length <= 10) return address;
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export default function TransparencyPage({ params }: TransparencyPageProps) {
  const lang = normalizeLang(params.lang);
  const copy = transparencyCopy[lang];

  return (
    <PremiumShell>
      {/* HERO SECTION */}
      <Section className="pt-12 pb-16 bg-gradient-to-b from-[#0B0E11] via-[#1A1F2E] to-[#0B0E11] relative w-full max-w-full overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <Container className="relative z-10">
          <PremiumCard variant="glass" className="text-center p-12 md:p-16 lg:p-20">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-fg mb-8 md:mb-12 leading-tight tracking-tight">
                {copy.title}
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed">
                {copy.subtitle}
              </p>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {copy.badges.map((badge, index) => (
                  <div key={index} className="inline-flex items-center px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-2"></div>
                    <span className="text-amber-400 text-sm font-medium">
                      {badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </PremiumCard>
        </Container>
      </Section>

      {/* Section Divider */}
      <div className="border-t border-border/10"></div>

      {/* OFFICIAL WALLETS SECTION */}
      <Section className="py-12 bg-[#0B0E11] relative w-full max-w-full overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239CA3AF' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-10 w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {copy.wallets.title}
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed max-w-2xl mx-auto">
              {copy.wallets.subtitle}
            </p>
          </div>
          
          <div className="space-y-4 max-w-4xl mx-auto">
            {walletData.map((wallet, index) => (
              <PremiumCard key={index} className="border border-gray-700 bg-[#1A1F2E] hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden group">
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <PremiumCardContent className="p-6 relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {wallet.label}
                      </h3>
                      <div className="bg-[#0F1419] border border-gray-700 rounded-lg p-3 font-mono text-sm">
                        <code className="text-amber-400 break-all">
                          {truncateAddress(wallet.address)}
                        </code>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <CopyButton 
                        text={wallet.address}
                        className="flex-shrink-0"
                      />
                      {wallet.explorer && (
                        <a
                          href={wallet.explorer}
                          target="_"
                          rel="noopener noreferrer"
                          className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded hover:bg-blue-500/30 transition-colors duration-200"
                        >
                          Lihat di Explorer
                        </a>
                      )}
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

      {/* VERIFICATION STEPS SECTION */}
      <Section className="py-12 bg-gradient-to-b from-[#0B0E11] to-[#1A1F2E] relative w-full max-w-full overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-amber-500/5"></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-10 w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {copy.verification.title}
            </h2>
          </div>
          
          <div className="space-y-4 max-w-3xl mx-auto">
            {copy.verification.steps.map((step, index) => (
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
                        {step}
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
      
      {/* ANTI-SCAM SECTION */}
      <Section className="py-12 bg-[#0B0E11] relative w-full max-w-full overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239CA3AF' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center mb-10 w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {copy.antiScam.title}
            </h2>
          </div>
          
          <PremiumCard className="border-2 border-red-500/30 bg-red-500/5 hover:border-red-500/50 transition-all duration-300 relative overflow-hidden max-w-3xl mx-auto">
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 transition-opacity duration-300"></div>
            
            <PremiumCardContent className="p-8 relative z-10">
              <div className="space-y-4">
                {copy.antiScam.rules.map((rule, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {rule}
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
      
      {/* CTA SECTION */}
      <Section className="py-12 bg-gradient-to-b from-[#0B0E11] to-[#1A1F2E] relative w-full max-w-full overflow-hidden pb-24">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-amber-500/5"></div>
        
        <Container className="relative z-10 px-4">
          <div className="text-center">
            <div className="relative w-full mx-auto max-w-md mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg blur-lg opacity-50"></div>
              <PremiumButton 
                href={publicPath(lang, '/presale')}
                size="md"
                fullWidth
                className="relative bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white border-0 shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold"
              >
                {copy.cta.primary}
              </PremiumButton>
            </div>
            
            <div className="text-center">
              <Link 
                href={publicPath(lang, '/dao')}
                className="inline-flex items-center text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors duration-300"
              >
                {copy.cta.secondary}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </PremiumShell>
  );
}

import { normalizeLang, type LangParams } from "@/lib/lang-helpers";
import { homeCopy } from "@/content/homeCopy";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PremiumCard, PremiumCardHeader, PremiumCardContent } from "@/components/ui/PremiumCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { BadgeRow } from "@/components/ui/BadgeRow";
import { StatRow } from "@/components/ui/StatRow";
import { publicPath } from "@/lib/lang-helpers";

interface TransparencyPageProps {
  params: LangParams;
}

export function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'id' }
  ];
}

export default function TransparencyPage({ params }: TransparencyPageProps) {
  const lang = normalizeLang(params.lang);
  const copy = homeCopy[lang];

  const transparencyContent = {
    hero: {
      title: lang === 'en' ? 'Transparency & Trust' : 'Transparansi & Kepercayaan',
      subtitle: lang === 'en' 
        ? 'Complete transparency in all operations and fund management.'
        : 'Transparansi penuh dalam semua operasi dan manajemen dana.',
    },
    trustBadges: lang === 'en' 
      ? ['On-Chain Verification', 'Regular Audits', 'Community Oversight']
      : ['Verifikasi On-Chain', 'Audit Berkala', 'Pengawasan Komunitas'],
    wallets: {
      title: lang === 'en' ? 'Wallet Addresses' : 'Alamat Wallet',
      subtitle: lang === 'en' 
        ? 'All official wallet addresses for transparency.'
        : 'Semua alamat wallet resmi untuk transparansi.',
      items: [
        {
          label: lang === 'en' ? 'Presale Wallet' : 'Wallet Presale',
          address: '0x1234567890123456789012345678901234',
          explorer: 'https://etherscan.io/address/0x1234567890123456789012345678901234'
        },
        {
          label: lang === 'en' ? 'Treasury Wallet' : 'Wallet Treasury',
          address: '0x0987654321098765432109876543210987',
          explorer: 'https://etherscan.io/address/0x0987654321098765432109876543210987'
        },
        {
          label: lang === 'en' ? 'Liquidity Pool' : 'Pool Likuiditas',
          address: '0x1122334455667788990011223344556677',
          explorer: 'https://etherscan.io/address/0x1122334455667788990011223344556677'
        }
      ]
    },
    contracts: {
      title: lang === 'en' ? 'Contract Information' : 'Informasi Kontrak',
      subtitle: lang === 'en' 
        ? 'Smart contract details and verification.'
        : 'Detail kontrak pintar dan verifikasi.',
      stats: [
        { label: 'Token Contract', value: '0xABC123DEF456GHI789' },
        { label: 'Presale Contract', value: '0xDEF456GHI789JKL012' },
        { label: 'Network', value: 'Ethereum Mainnet' }
      ]
    },
    notice: {
      title: lang === 'en' ? 'Security Notice' : 'Pemberitahuan Keamanan',
      subtitle: lang === 'en' 
        ? 'Always verify addresses from official sources only.'
        : 'Selalu verifikasi alamat dari sumber resmi saja.',
      description: lang === 'en' 
        ? 'Never trust DMs or unofficial links. Always verify contract addresses on this page before sending funds.'
        : 'Jangan pernah percaya DM atau link tidak resmi. Selalu verifikasi alamat kontrak di halaman ini sebelum mengirim dana.'
    }
  };

  return (
    <PremiumShell>
      {/* Hero Section */}
      <Section className="pt-6 pb-12">
        <Container>
          <PremiumCard variant="glass" className="text-center p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold text-fg mb-6 leading-tight">
                {transparencyContent.hero.title}
              </h1>
              <p className="text-lg text-muted mb-8 max-w-3xl mx-auto leading-relaxed">
                {transparencyContent.hero.subtitle}
              </p>
              
              {/* Trust Badges */}
              <BadgeRow items={transparencyContent.trustBadges} className="justify-center" />
            </div>
          </PremiumCard>
        </Container>
      </Section>

      {/* Section Divider */}
      <div className="border-t border-border/10"></div>

      {/* Wallet Information */}
      <Section>
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-fg mb-4">
              {transparencyContent.wallets.title}
            </h2>
            <p className="text-sm text-muted leading-relaxed max-w-2xl mx-auto">
              {transparencyContent.wallets.subtitle}
            </p>
          </div>
          
          <div className="space-y-4">
            {transparencyContent.wallets.items.map((wallet, index) => (
              <PremiumCard key={index}>
                <PremiumCardContent>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-fg mb-2">
                        {wallet.label}
                      </h3>
                      <div className="flex items-center gap-2">
                        <code className="font-mono text-xs text-muted bg-surface px-2 py-1 rounded">
                          {wallet.address}
                        </code>
                        <a
                          href={wallet.explorer}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:text-accent2 text-sm transition-colors duration-300"
                        >
                          Explorer
                        </a>
                      </div>
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

      {/* Contract Information */}
      <Section>
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-fg mb-4">
              {transparencyContent.contracts.title}
            </h2>
            <p className="text-sm text-muted leading-relaxed max-w-2xl mx-auto">
              {transparencyContent.contracts.subtitle}
            </p>
          </div>
          
          <PremiumCard>
            <PremiumCardContent>
              <StatRow items={transparencyContent.contracts.stats} />
            </PremiumCardContent>
          </PremiumCard>
        </Container>
      </Section>

      {/* Section Divider */}
      <div className="border-t border-border/10"></div>

      {/* Important Notice */}
      <Section>
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-fg mb-4">
              {transparencyContent.notice.title}
            </h2>
          </div>
          
          <PremiumCard>
            <PremiumCardContent>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-lg font-semibold text-fg mb-4">
                  {transparencyContent.notice.subtitle}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {transparencyContent.notice.description}
                </p>
              </div>
            </PremiumCardContent>
          </PremiumCard>
        </Container>
      </Section>
    </PremiumShell>
  );
}

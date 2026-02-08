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
  const copy = homeCopy[lang];

  const presaleContent = {
    hero: {
      title: lang === 'en' ? 'TPC Presale' : 'Presale TPC',
      subtitle: lang === 'en' 
        ? 'Join the exclusive presale and be part of the future of trading education.'
        : 'Bergabunglah dengan presale eksklusif dan menjadi bagian dari masa depan pendidikan trading.',
      cta: lang === 'en' ? 'Join Presale' : 'Bergabung Presale'
    },
    trustBadges: lang === 'en' 
      ? ['No Profit Promises', 'Education First', 'Secure Wallet Required', 'Verified Smart Contract']
      : ['Tidak Ada Janji Profit', 'Pendidikan Prioritas', 'Wallet Aman Diperlukan', 'Smart Contract Terverifikasi'],
    stages: {
      title: lang === 'en' ? 'Presale Stages' : 'Tahapan Presale',
      subtitle: lang === 'en' 
        ? 'Multiple stages with different benefits and pricing.'
        : 'Beberapa tahap dengan manfaat dan harga yang berbeda.',
      items: [
        {
          stage: 'Stage 1',
          title: lang === 'en' ? 'Early Bird' : 'Early Bird',
          description: lang === 'en' 
            ? 'Exclusive early access with bonus tokens.'
            : 'Akses awal eksklusif dengan token bonus.',
          price: '0.001 ETH',
          supply: '1,000,000 TPC',
          status: lang === 'en' ? 'Active' : 'Aktif'
        },
        {
          stage: 'Stage 2', 
          title: lang === 'en' ? 'Public Sale' : 'Penjualan Publik',
          description: lang === 'en' 
            ? 'Open to everyone with standard pricing.'
            : 'Terbuka untuk semua dengan harga standar.',
          price: '0.002 ETH',
          supply: '2,000,000 TPC',
          status: lang === 'en' ? 'Upcoming' : 'Akan Datang'
        }
      ]
    },
    tokenInfo: {
      title: lang === 'en' ? 'Token Information' : 'Informasi Token',
      subtitle: lang === 'en' 
        ? 'Key details about the TPC token.'
        : 'Detail penting tentang token TPC.',
      stats: [
        { label: 'Token Name', value: 'TPC Token' },
        { label: 'Symbol', value: 'TPC' },
        { label: 'Total Supply', value: '3,000,000 TPC' },
        { label: 'Network', value: 'Ethereum' }
      ]
    },
    importantNotes: {
      title: lang === 'en' ? 'Important Notes' : 'Catatan Penting',
      items: lang === 'en' 
        ? [
            'No profit guarantees or ROI promises.',
            'Always verify official contract addresses.',
            'Trading involves risk, invest responsibly.'
          ]
        : [
            'Tidak ada jaminan profit atau janji ROI.',
            'Selalu verifikasi alamat kontrak resmi.',
            'Trading melibatkan risiko, investasi dengan bertanggung jawab.'
          ]
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
                {presaleContent.hero.title}
              </h1>
              <p className="text-lg text-muted mb-8 max-w-3xl mx-auto leading-relaxed">
                {presaleContent.hero.subtitle}
              </p>
              
              {/* Trust Badges */}
              <BadgeRow items={presaleContent.trustBadges} className="justify-center mb-8" />
              
              {/* CTA Button */}
              <PremiumButton 
                href={publicPath(lang, '/member/buy')}
                size="md"
                fullWidth
              >
                {presaleContent.hero.cta}
              </PremiumButton>
            </div>
          </PremiumCard>
        </Container>
      </Section>

      {/* Section Divider */}
      <div className="border-t border-border/10"></div>

      {/* Presale Stages */}
      <Section>
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-fg mb-4">
              {presaleContent.stages.title}
            </h2>
            <p className="text-sm text-muted leading-relaxed max-w-2xl mx-auto">
              {presaleContent.stages.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {presaleContent.stages.items.map((stage: any, index: number) => (
              <PremiumCard key={index}>
                <PremiumCardContent>
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-accent">{stage.stage}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-fg mb-2">
                      {stage.title}
                    </h3>
                    <p className="text-sm text-muted mb-4">
                      {stage.description}
                    </p>
                  </div>
                  
                  <StatRow 
                    items={[
                      { label: "Price", value: stage.price },
                      { label: "Supply", value: stage.supply },
                      { label: "Status", value: stage.status }
                    ]}
                  />
                </PremiumCardContent>
              </PremiumCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Section Divider */}
      <div className="border-t border-border/10"></div>

      {/* Token Information */}
      <Section>
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-fg mb-4">
              {presaleContent.tokenInfo.title}
            </h2>
            <p className="text-sm text-muted leading-relaxed max-w-2xl mx-auto">
              {presaleContent.tokenInfo.subtitle}
            </p>
          </div>
          
          <PremiumCard>
            <PremiumCardContent>
              <StatRow 
                items={presaleContent.tokenInfo.stats}
              />
            </PremiumCardContent>
          </PremiumCard>
        </Container>
      </Section>

      {/* Section Divider */}
      <div className="border-t border-border/10"></div>

      {/* Important Notes */}
      <Section>
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-fg mb-4">
              {presaleContent.importantNotes.title}
            </h2>
            <p className="text-sm text-muted leading-relaxed max-w-2xl mx-auto">
              {presaleContent.importantNotes.subtitle}
            </p>
          </div>
          
          <PremiumCard>
            <PremiumCardContent>
              <div className="space-y-4">
                {presaleContent.importantNotes.items.map((note, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-surface/50 rounded-lg">
                    <span className="text-2xl mt-1">{note.icon}</span>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-fg mb-1">{note.title}</h4>
                      <p className="text-xs text-muted leading-relaxed">{note.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PremiumCardContent>
          </PremiumCard>
        </Container>
      </Section>
    </PremiumShell>
  );
}

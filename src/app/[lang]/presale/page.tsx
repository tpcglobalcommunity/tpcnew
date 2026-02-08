import { normalizeLang, type LangParams } from "@/lib/lang-helpers";
import { presaleCopy } from "@/content/presaleCopy";
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
  const copy = presaleCopy[lang];

  const presaleContent = copy;

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
                {presaleContent.hero.ctaPrimary}
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
              Please read carefully before participating in the presale.
            </p>
          </div>
          
          <PremiumCard>
            <PremiumCardContent>
              <div className="space-y-4">
                {presaleContent.importantNotes.items.map((note, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-surface/50 rounded-lg">
                    <span className="text-2xl mt-1">🔒</span>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-fg mb-1">{note}</h4>
                      <p className="text-xs text-muted leading-relaxed">{note}</p>
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

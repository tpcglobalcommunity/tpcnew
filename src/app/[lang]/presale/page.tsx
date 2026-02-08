import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PremiumCard, PremiumCardContent } from "@/components/ui/PremiumCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { Badge } from "@/components/ui/Badge";
import { StatRow } from "@/components/ui/StatRow";
import { publicPath, type Language } from "@/content/homeCopy";

interface PresalePageProps {
  params: {
    lang: Language;
  };
}

export function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'id' }
  ];
}

export default function PresalePage({ params }: PresalePageProps) {
  const { lang } = params;

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <Container>
        <Section title="Presale">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-fg mb-4">Presale</h1>
            <p className="text-muted leading-relaxed">
              Join the TPC Global presale phase and be part of our professional trading community.
            </p>
          </div>
        </Section>

        <Section title="Presale Stages">
          <div className="space-y-6">
            <PremiumCard>
              <PremiumCardContent>
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-lg font-semibold text-fg mb-2">Stage 1</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    Early bird pricing with exclusive benefits for first participants.
                  </p>
                  <div className="flex gap-2">
                    <Badge tone="gold">Active</Badge>
                    <Badge tone="neutral">Limited Supply</Badge>
                  </div>
                </div>
              </PremiumCardContent>
            </PremiumCard>

            <PremiumCard>
              <PremiumCardContent>
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <h3 className="text-lg font-semibold text-fg mb-2">Stage 2</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    Public phase with standard pricing for wider community access.
                  </p>
                  <div className="flex gap-2">
                    <Badge tone="neutral">Coming Soon</Badge>
                    <Badge tone="neutral">Unlimited Supply</Badge>
                  </div>
                </div>
              </PremiumCardContent>
            </PremiumCard>
          </div>
        </Section>

        <Section title="Token Information">
          <div className="space-y-4">
            <StatRow
              items={[
                { label: "Token Name", value: "TPC" },
                { label: "Total Supply", value: "1,000,000" },
                { label: "Network", value: "BSC" },
                { label: "Token Standard", value: "BEP-20" }
              ]}
            />
          </div>
        </Section>

        <Section>
          <div className="text-center">
            <PremiumButton variant="primary" size="md" fullWidth>
              Participate in Presale
            </PremiumButton>
          </div>
        </Section>
      </Container>
    </div>
  );
}

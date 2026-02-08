import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PremiumCard, PremiumCardContent } from "@/components/ui/PremiumCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { Badge } from "@/components/ui/Badge";
import { StatRow } from "@/components/ui/StatRow";
import { publicPath, type Language } from "@/content/homeCopy";

interface TransparencyPageProps {
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

export default function TransparencyPage({ params }: TransparencyPageProps) {
  const { lang } = params;

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <Container>
        <Section title="Transparency">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-fg mb-4">Transparency</h1>
            <p className="text-muted leading-relaxed">
              Complete transparency in all operations, treasury management, and community governance.
            </p>
          </div>
        </Section>

        <Section title="Treasury Information">
          <div className="space-y-6">
            <PremiumCard>
              <PremiumCardContent>
                <h3 className="text-lg font-semibold text-fg mb-4">Current Treasury</h3>
                <StatRow
                  items={[
                    { label: "Total Value", value: "$125,000" },
                    { label: "TPC Tokens", value: "850,000" },
                    { label: "Reserved", value: "150,000" },
                    { label: "Available", value: "700,000" }
                  ]}
                />
              </PremiumCardContent>
            </PremiumCard>

            <PremiumCard>
              <PremiumCardContent>
                <h3 className="text-lg font-semibold text-fg mb-4">Recent Transactions</h3>
                <div className="space-y-4">
                  <div className="border-b border-border/10 pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm text-muted">Marketing Campaign</p>
                        <p className="text-xs text-muted">2024-02-08</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-fg">-5,000 TPC</p>
                        <p className="text-xs text-muted">$2,500</p>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-border/10 pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm text-muted">Platform Development</p>
                        <p className="text-xs text-muted">2024-02-05</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-fg">-8,000 TPC</p>
                        <p className="text-xs text-muted">$4,000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </PremiumCardContent>
            </PremiumCard>
          </div>
        </Section>

        <Section title="Smart Contract Information">
          <div className="space-y-4">
            <StatRow
              items={[
                { label: "Contract Address", value: "0x1234...5678", hint: "BSC Network" },
                { label: "Token Standard", value: "BEP-20" },
                { label: "Decimals", value: "18" },
                { label: "Verified", value: "Yes" }
              ]}
            />
          </div>
        </Section>

        <Section title="Governance Records">
          <div className="space-y-6">
            <PremiumCard>
              <PremiumCardContent>
                <h3 className="text-lg font-semibold text-fg mb-4">DAO Proposals</h3>
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-fg">Platform Enhancement</p>
                      <p className="text-xs text-muted">Status: Approved</p>
                    </div>
                    <div className="text-right">
                      <Badge tone="gold">Implemented</Badge>
                    </div>
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-fg">Educational Resources</p>
                      <p className="text-xs text-muted">Status: In Progress</p>
                    </div>
                    <div className="text-right">
                      <Badge tone="neutral">Voting</Badge>
                    </div>
                  </div>
                </div>
              </PremiumCardContent>
            </PremiumCard>
          </div>
        </Section>

        <Section>
          <div className="text-center">
            <PremiumButton variant="primary" size="md" fullWidth>
              View Full Report
            </PremiumButton>
          </div>
        </Section>
      </Container>
    </div>
  );
}

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PremiumCard, PremiumCardContent } from "@/components/ui/PremiumCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { Badge } from "@/components/ui/Badge";
import { StatRow } from "@/components/ui/StatRow";
import { publicPath, type Language } from "@/content/homeCopy";

interface DAOPageProps {
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

export default function DAOPage({ params }: DAOPageProps) {
  const { lang } = params;

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <Container>
        <Section title="DAO Lite">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-fg mb-4">DAO Lite</h1>
            <p className="text-muted leading-relaxed">
              Community participation in platform governance through structured proposals and voting.
            </p>
          </div>
        </Section>

        <Section title="How DAO Works">
          <div className="space-y-6">
            <PremiumCard>
              <PremiumCardContent>
                <h3 className="text-lg font-semibold text-fg mb-3">1. Proposal Submission</h3>
                <p className="text-muted leading-relaxed">
                  Community members can submit proposals for platform improvements, new features, or policy changes.
                </p>
              </PremiumCardContent>
            </PremiumCard>

            <PremiumCard>
              <PremiumCardContent>
                <h3 className="text-lg font-semibold text-fg mb-3">2. Community Voting</h3>
                <p className="text-muted leading-relaxed">
                  Token holders can vote on proposals using secure, transparent voting mechanisms.
                </p>
              </PremiumCardContent>
            </PremiumCard>

            <PremiumCard>
              <PremiumCardContent>
                <h3 className="text-lg font-semibold text-fg mb-3">3. Implementation</h3>
                <p className="text-muted leading-relaxed">
                  Approved proposals are implemented by the team and results are published in the Transparency section.
                </p>
              </PremiumCardContent>
            </PremiumCard>
          </div>
        </Section>

        <Section title="Current Proposals">
          <div className="space-y-4">
            <PremiumCard>
              <PremiumCardContent>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-fg">Platform Enhancement</h4>
                    <p className="text-sm text-muted">Submitted by: @community_member</p>
                  </div>
                  <Badge tone="gold">Active</Badge>
                </div>
                <p className="text-sm text-fg leading-relaxed">
                  Add advanced charting tools and analytics dashboard for better trading insights.
                </p>
                <div className="flex gap-2 mt-4">
                  <PremiumButton size="sm" variant="secondary">
                    View Details
                  </PremiumButton>
                  <PremiumButton size="sm" variant="primary">
                    Vote
                  </PremiumButton>
                </div>
              </PremiumCardContent>
            </PremiumCard>

            <PremiumCard>
              <PremiumCardContent>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-fg">Educational Resources</h4>
                    <p className="text-sm text-muted">Submitted by: @trader_pro</p>
                  </div>
                  <Badge tone="gold">Voting</Badge>
                </div>
                <p className="text-sm text-fg leading-relaxed">
                  Expand educational content with intermediate and advanced trading courses.
                </p>
                <div className="flex gap-2 mt-4">
                  <PremiumButton size="sm" variant="secondary">
                    View Details
                  </PremiumButton>
                  <PremiumButton size="sm" variant="primary">
                    Vote
                  </PremiumButton>
                </div>
              </PremiumCardContent>
            </PremiumCard>
          </div>
        </Section>

        <Section title="Voting Results">
          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold text-fg mb-4">Recent Voting Results</h2>
            <p className="text-muted leading-relaxed">
              Transparent record of all DAO Lite voting outcomes.
            </p>
          </div>
          
          <div className="space-y-4">
            <StatRow
              items={[
                { label: "Platform Enhancement", value: "Approved", hint: "87% voted yes" },
                { label: "Educational Resources", value: "In Progress", hint: "72% voted yes" },
                { label: "Treasury Update", value: "Rejected", hint: "45% voted yes" }
              ]}
            />
          </div>
        </Section>

        <Section>
          <div className="text-center">
            <PremiumButton variant="primary" size="md" fullWidth>
              View All Proposals
            </PremiumButton>
          </div>
        </Section>
      </Container>
    </div>
  );
}

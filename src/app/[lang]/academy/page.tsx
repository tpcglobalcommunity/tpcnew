import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PremiumCard, PremiumCardContent } from "@/components/ui/PremiumCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { Badge } from "@/components/ui/Badge";
import { StatRow } from "@/components/ui/StatRow";
import { publicPath, type Language } from "@/content/homeCopy";

interface AcademyPageProps {
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

export default function AcademyPage({ params }: AcademyPageProps) {
  const { lang } = params;

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <Container>
        <Section title="Academy">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-fg mb-4">Academy</h1>
            <p className="text-muted leading-relaxed">
              Structured learning resources for Gold and Bitcoin trading from beginner to advanced.
            </p>
          </div>
        </Section>

        <Section title="Learning Paths">
          <div className="space-y-6">
            <PremiumCard>
              <PremiumCardContent>
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📚</span>
                  </div>
                  <h3 className="text-lg font-semibold text-fg mb-2">Beginner</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    Start your trading journey with fundamental concepts and basic strategies.
                  </p>
                  <div className="flex gap-2">
                    <Badge tone="gold">Free</Badge>
                    <Badge tone="neutral">8 Courses</Badge>
                  </div>
                </div>
              </PremiumCardContent>
            </PremiumCard>

            <PremiumCard>
              <PremiumCardContent>
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📈</span>
                  </div>
                  <h3 className="text-lg font-semibold text-fg mb-2">Intermediate</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    Deepen your knowledge with advanced technical and fundamental analysis techniques.
                  </p>
                  <div className="flex gap-2">
                    <Badge tone="gold">Premium</Badge>
                    <Badge tone="neutral">12 Courses</Badge>
                  </div>
                </div>
              </PremiumCardContent>
            </PremiumCard>

            <PremiumCard>
              <PremiumCardContent>
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <h3 className="text-lg font-semibold text-fg mb-2">Advanced</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    Master professional trading strategies and risk management for experienced traders.
                  </p>
                  <div className="flex gap-2">
                    <Badge tone="gold">Expert</Badge>
                    <Badge tone="neutral">6 Courses</Badge>
                  </div>
                </div>
              </PremiumCardContent>
            </PremiumCard>
          </div>
        </Section>

        <Section title="Course Categories">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <PremiumCard>
              <PremiumCardContent>
                <h4 className="text-base font-semibold text-fg mb-3">Technical Analysis</h4>
                <ul className="space-y-2 text-sm text-muted">
                  <li>Chart patterns and indicators</li>
                  <li>Support and resistance levels</li>
                  <li>Market structure understanding</li>
                </ul>
                <p className="text-sm text-muted mt-3">
                  <span className="text-accent">4 courses</span> • Beginner to Advanced
                </p>
              </PremiumCardContent>
            </PremiumCard>

            <PremiumCard>
              <PremiumCardContent>
                <h4 className="text-base font-semibold text-fg mb-3">Risk Management</h4>
                <ul className="space-y-2 text-sm text-muted">
                  <li>Position sizing strategies</li>
                  <li>Stop-loss techniques</li>
                  <li>Portfolio diversification</li>
                </ul>
                <p className="text-sm text-muted mt-3">
                  <span className="text-accent">6 courses</span> • All levels
                </p>
              </PremiumCardContent>
            </PremiumCard>

            <PremiumCard>
              <PremiumCardContent>
                <h4 className="text-base font-semibold text-fg mb-3">Trading Psychology</h4>
                <ul className="space-y-2 text-sm text-muted">
                  <li>Emotion control</li>
                  <li>Market sentiment analysis</li>
                  <li>Discipline and patience</li>
                </ul>
                <p className="text-sm text-muted mt-3">
                  <span className="text-accent">4 courses</span> • Intermediate+
                </p>
              </PremiumCardContent>
            </PremiumCard>

            <PremiumCard>
              <PremiumCardContent>
                <h4 className="text-base font-semibold text-fg mb-3">Platform Tools</h4>
                <ul className="space-y-2 text-sm text-muted">
                  <li>Trading platform usage</li>
                  <li>Wallet security</li>
                  <li>Analytics and reporting</li>
                </ul>
                <p className="text-sm text-muted mt-3">
                  <span className="text-accent">3 courses</span> • Practical
                </p>
              </PremiumCardContent>
            </PremiumCard>
          </div>
        </Section>

        <Section title="Learning Resources">
          <div className="space-y-6">
            <PremiumCard>
              <PremiumCardContent>
                <h4 className="text-base font-semibold text-fg mb-3">Video Tutorials</h4>
                <p className="text-sm text-muted leading-relaxed">
                  Step-by-step video guides for common trading scenarios.
                </p>
                <StatRow
                  items={[
                    { label: "Total Videos", value: "45+" },
                    { label: "Watch Time", value: "12+ hours" }
                  ]}
                />
              </PremiumCardContent>
            </PremiumCard>

            <PremiumCard>
              <PremiumCardContent>
                <h4 className="text-base font-semibold text-fg mb-3">Trading Simulations</h4>
                <p className="text-sm text-muted leading-relaxed">
                  Practice with risk-free trading simulations before real trading.
                </p>
                <StatRow
                  items={[
                    { label: "Simulations", value: "20+" },
                    { label: "Success Rate", value: "85%" }
                  ]}
                />
              </PremiumCardContent>
            </PremiumCard>

            <PremiumCard>
              <PremiumCardContent>
                <h4 className="text-base font-semibold text-fg mb-3">Community Support</h4>
                <p className="text-sm text-muted leading-relaxed">
                  Get help from experienced traders in our community forums.
                </p>
                <StatRow
                  items={[
                    { label: "Active Members", value: "1,200+" },
                    { label: "Daily Posts", value: "50+" }
                  ]}
                />
              </PremiumCardContent>
            </PremiumCard>
          </div>
        </Section>

        <Section>
          <div className="text-center">
            <PremiumButton variant="primary" size="md" fullWidth>
              Start Learning
            </PremiumButton>
          </div>
        </Section>
      </Container>
    </div>
  );
}

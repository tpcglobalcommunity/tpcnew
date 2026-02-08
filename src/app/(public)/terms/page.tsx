import { Metadata } from "next";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { PremiumCard } from "@/components/ui/PremiumCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | TPC Global",
  description: "Terms of Service for TPC Global platform and presale participation.",
};

export default function TermsPage() {
  return (
    <PremiumShell>
      <div className="min-h-screen">
        <header className="border-b border-[#2a2a3a]">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <Link href="/" className="text-2xl font-bold text-[#d4af37]">TPC Global</Link>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-8 text-[#d4af37]">Terms of Service</h1>
          
          <PremiumCard className="mb-6">
            <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-[#a0a0a0] mb-4">
              By accessing or using TPC Global services, you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our services.
            </p>
          </PremiumCard>

          <PremiumCard className="mb-6">
            <h2 className="text-xl font-semibold mb-4">2. Service Description</h2>
            <p className="text-[#a0a0a0] mb-4">
              TPC Global provides educational resources and platform services for the Trader Professional Community. 
              TPC tokens are utility tokens designed for platform access and participation, not investment products.
            </p>
          </PremiumCard>

          <PremiumCard className="mb-6">
            <h2 className="text-xl font-semibold mb-4">3. No Financial Advice</h2>
            <p className="text-[#a0a0a0] mb-4">
              Nothing on this platform constitutes financial advice, investment recommendations, or guarantees of returns. 
              All decisions are made at your own risk and discretion.
            </p>
          </PremiumCard>

          <PremiumCard className="mb-6">
            <h2 className="text-xl font-semibold mb-4">4. User Responsibilities</h2>
            <ul className="list-disc list-inside text-[#a0a0a0] space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain security of your account credentials</li>
              <li>Comply with applicable laws and regulations</li>
              <li>Use the platform for lawful purposes only</li>
            </ul>
          </PremiumCard>

          <PremiumCard className="mb-6">
            <h2 className="text-xl font-semibold mb-4">5. Presale Terms</h2>
            <p className="text-[#a0a0a0] mb-4">
              Participation in TPC presale is subject to availability and compliance requirements. 
              All purchases are final once confirmed. Invoice validity is limited to 24 hours.
            </p>
          </PremiumCard>

          <PremiumCard className="mb-6">
            <h2 className="text-xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p className="text-[#a0a0a0] mb-4">
              TPC Global shall not be liable for any indirect, incidental, special, or consequential damages 
              arising from your use of the platform or participation in the presale.
            </p>
          </PremiumCard>

          <PremiumCard>
            <h2 className="text-xl font-semibold mb-4">7. Contact</h2>
            <p className="text-[#a0a0a0]">
              For questions about these Terms, contact us at:{" "}
              <a href="mailto:tpcglobal.io@gmail.com" className="text-[#d4af37] hover:underline">
                tpcglobal.io@gmail.com
              </a>
            </p>
          </PremiumCard>
        </main>
      </div>
    </PremiumShell>
  );
}

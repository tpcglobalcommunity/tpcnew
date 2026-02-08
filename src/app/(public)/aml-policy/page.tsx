import { Metadata } from "next";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { PremiumCard } from "@/components/ui/PremiumCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AML Policy | TPC Global",
  description: "Anti-Money Laundering Policy for TPC Global platform.",
};

export default function AMLPolicyPage() {
  return (
    <PremiumShell>
      <div className="min-h-screen">
        <header className="border-b border-[#2a2a3a]">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <Link href="/" className="text-2xl font-bold text-[#d4af37]">TPC Global</Link>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-8 text-[#d4af37]">Anti-Money Laundering (AML) Policy</h1>
          
          <PremiumCard className="mb-6">
            <h2 className="text-xl font-semibold mb-4">1. Policy Statement</h2>
            <p className="text-[#a0a0a0] mb-4">
              TPC Global is committed to preventing money laundering, terrorist financing, and other illicit activities. 
              This policy outlines our procedures to detect, prevent, and report suspicious activities.
            </p>
          </PremiumCard>

          <PremiumCard className="mb-6">
            <h2 className="text-xl font-semibold mb-4">2. Customer Due Diligence</h2>
            <ul className="list-disc list-inside text-[#a0a0a0] space-y-2">
              <li>Identity verification for all users</li>
              <li>Monitoring of transaction patterns</li>
              <li>Screening against sanctions lists</li>
              <li>Enhanced due diligence for high-risk activities</li>
            </ul>
          </PremiumCard>

          <PremiumCard className="mb-6">
            <h2 className="text-xl font-semibold mb-4">3. Transaction Monitoring</h2>
            <p className="text-[#a0a0a0] mb-4">
              We monitor all transactions for suspicious activity, including:
            </p>
            <ul className="list-disc list-inside text-[#a0a0a0] space-y-2">
              <li>Unusually large transactions</li>
              <li>Rapid succession of transactions</li>
              <li>Transactions from high-risk jurisdictions</li>
              <li>Inconsistent transaction patterns</li>
            </ul>
          </PremiumCard>

          <PremiumCard className="mb-6">
            <h2 className="text-xl font-semibold mb-4">4. Record Keeping</h2>
            <p className="text-[#a0a0a0] mb-4">
              We maintain comprehensive records of all transactions, user information, and due diligence 
              measures for a minimum of 5 years, as required by applicable regulations.
            </p>
          </PremiumCard>

          <PremiumCard className="mb-6">
            <h2 className="text-xl font-semibold mb-4">5. Reporting</h2>
            <p className="text-[#a0a0a0] mb-4">
              We report suspicious activities to relevant authorities as required by law. 
              Staff are trained to identify and escalate potential AML concerns.
            </p>
          </PremiumCard>

          <PremiumCard>
            <h2 className="text-xl font-semibold mb-4">6. Contact</h2>
            <p className="text-[#a0a0a0]">
              For AML-related inquiries, contact:{" "}
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

import { Metadata } from "next";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { PremiumCard } from "@/components/ui/PremiumCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | TPC Global",
  description: "Privacy Policy for TPC Global platform.",
};

export default function PrivacyPage() {
  return (
    <PremiumShell>
      <div className="min-h-screen">
        <header className="border-b border-[#2a2a3a]">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <Link href="/" className="text-2xl font-bold text-[#d4af37]">TPC Global</Link>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-8 text-[#d4af37]">Privacy Policy</h1>
          
          <PremiumCard className="mb-6">
            <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="text-[#a0a0a0] mb-4">
              We collect information you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside text-[#a0a0a0] space-y-2">
              <li>Email address and account credentials</li>
              <li>Wallet addresses for token delivery</li>
              <li>Transaction history and invoice data</li>
              <li>Payment proof documents (for IDR transactions)</li>
            </ul>
          </PremiumCard>

          <PremiumCard className="mb-6">
            <h2 className="text-xl font-semibold mb-4">2. How We Use Information</h2>
            <ul className="list-disc list-inside text-[#a0a0a0] space-y-2">
              <li>Process and verify your transactions</li>
              <li>Deliver TPC tokens to your wallet</li>
              <li>Communicate about your account and transactions</li>
              <li>Comply with legal and regulatory requirements</li>
              <li>Prevent fraud and unauthorized access</li>
            </ul>
          </PremiumCard>

          <PremiumCard className="mb-6">
            <h2 className="text-xl font-semibold mb-4">3. Data Security</h2>
            <p className="text-[#a0a0a0] mb-4">
              We implement appropriate technical and organizational measures to protect your data, 
              including encryption, access controls, and regular security audits.
            </p>
          </PremiumCard>

          <PremiumCard className="mb-6">
            <h2 className="text-xl font-semibold mb-4">4. Data Retention</h2>
            <p className="text-[#a0a0a0] mb-4">
              We retain transaction records as required by applicable laws and for operational purposes. 
              Financial transaction data is retained for a minimum of 5 years.
            </p>
          </PremiumCard>

          <PremiumCard className="mb-6">
            <h2 className="text-xl font-semibold mb-4">5. Your Rights</h2>
            <ul className="list-disc list-inside text-[#a0a0a0] space-y-2">
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your account (subject to legal requirements)</li>
              <li>Object to certain processing activities</li>
            </ul>
          </PremiumCard>

          <PremiumCard>
            <h2 className="text-xl font-semibold mb-4">6. Contact</h2>
            <p className="text-[#a0a0a0]">
              For privacy-related inquiries, contact:{" "}
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

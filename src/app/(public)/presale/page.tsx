import { Metadata } from "next";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TPC Presale - Buy TPC Token | Stage 1",
  description: "Buy TPC token during Stage 1 presale. Utility token for TPC ecosystem. No investment promises, no profit guarantees. Transparent and auditable.",
};

export default function PresalePage() {
  return (
    <PremiumShell>
      <div className="min-h-screen">
        {/* Header */}
        <header className="border-b border-[#2a2a3a]">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-[#d4af37]">TPC Global</h1>
            <div className="flex gap-4">
              <Link href="/why-tpc" className="text-[#a0a0a0] hover:text-white transition">
                Why TPC
              </Link>
              <Link href="/login" className="text-[#a0a0a0] hover:text-white transition">
                Login
              </Link>
            </div>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Badge variant="gold" className="mb-4">Stage 1 Presale Live</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Buy TPC <span className="text-[#d4af37]">(Presale)</span>
            </h2>
            <p className="text-xl text-[#a0a0a0] max-w-2xl mx-auto">
              Utility Token for Platform Access & Participation
            </p>
            <p className="text-sm text-[#6b7280] mt-4 max-w-xl mx-auto">
              TPC is a utility token designed for access, participation, and governance within the TPC ecosystem.
              Not listed on any DEX. No market price. No profit guarantee.
            </p>
          </div>

          {/* Countdown & Supply Progress */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <PremiumCard variant="gold">
              <h3 className="text-lg font-semibold mb-4 text-[#d4af37]">Presale Countdown</h3>
              <div className="text-3xl font-bold mb-2">⏳ 6 Months</div>
              <p className="text-sm text-[#a0a0a0]">
                Presale ends February 15, 2026 (SGT / UTC+8)
              </p>
              <p className="text-xs text-[#6b7280] mt-2">
                Presale may end earlier if stage supply is fully allocated.
              </p>
            </PremiumCard>

            <PremiumCard>
              <h3 className="text-lg font-semibold mb-4">Supply Progress</h3>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-[#a0a0a0]">Sold</span>
                  <span className="text-white">0 / 200,000,000 TPC</span>
                </div>
                <div className="w-full bg-[#1a1a24] rounded-full h-3">
                  <div className="bg-[#d4af37] h-3 rounded-full" style={{ width: "0%" }}></div>
                </div>
              </div>
              <p className="text-xs text-[#6b7280]">
                Real-time supply tracking. All purchases subject to Terms & Risk Disclosure.
              </p>
            </PremiumCard>
          </div>

          {/* Presale Overview */}
          <PremiumCard className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-[#d4af37]">Presale Overview</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <p className="text-sm text-[#6b7280]">Stage</p>
                <p className="text-xl font-bold">Stage 1</p>
              </div>
              <div>
                <p className="text-sm text-[#6b7280]">Price</p>
                <p className="text-xl font-bold text-[#d4af37]">$0.001 / TPC</p>
              </div>
              <div>
                <p className="text-sm text-[#6b7280]">Supply</p>
                <p className="text-xl font-bold">200,000,000 TPC</p>
              </div>
              <div>
                <p className="text-sm text-[#6b7280]">Payment</p>
                <p className="text-xl font-bold">USDC / IDR</p>
              </div>
            </div>
          </PremiumCard>

          {/* How It Works */}
          <PremiumCard className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-[#d4af37]">How It Works</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#d4af37] text-[#0a0a0f] flex items-center justify-center font-bold shrink-0">1</div>
                <div>
                  <p className="font-medium">Login / Register</p>
                  <p className="text-sm text-[#a0a0a0]">Create your member account</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#d4af37] text-[#0a0a0f] flex items-center justify-center font-bold shrink-0">2</div>
                <div>
                  <p className="font-medium">Connect Wallet</p>
                  <p className="text-sm text-[#a0a0a0]">Phantom wallet recommended</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#d4af37] text-[#0a0a0f] flex items-center justify-center font-bold shrink-0">3</div>
                <div>
                  <p className="font-medium">Buy TPC</p>
                  <p className="text-sm text-[#a0a0a0]">Create invoice & complete payment</p>
                </div>
              </div>
            </div>
          </PremiumCard>

          {/* Treasury Wallet */}
          <PremiumCard variant="gold" className="mb-12">
            <h3 className="text-lg font-semibold mb-4 text-[#d4af37]">Official TPC Treasury Wallet (USDC – Solana)</h3>
            <p className="text-sm text-[#a0a0a0] mb-4">
              All USDC payments for TPC presale must be sent to the official treasury wallet:
            </p>
            <div className="bg-[#0a0a0f] rounded-lg p-4 mb-4">
              <code className="text-sm break-all text-[#ffd700]">
                5AeayrU2pdy6yNBeiUpTXkfMxw3VpDQGUHC6kXrBt5vw
              </code>
            </div>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-[#6b7280]">Network:</span> Solana
              </div>
              <div>
                <span className="text-[#6b7280]">Asset:</span> USDC (SPL)
              </div>
              <div>
                <span className="text-[#6b7280]">Purpose:</span> TPC Presale Treasury
              </div>
            </div>
            <p className="text-xs text-[#6b7280] mt-4">
              ⚠️ Send USDC on Solana only. Sending other assets or using the wrong network may result in loss of funds.
            </p>
          </PremiumCard>

          {/* Payment Methods */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <PremiumCard>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <h3 className="font-semibold">USDC (On-Chain) — Recommended</h3>
              </div>
              <ul className="space-y-2 text-sm text-[#a0a0a0]">
                <li>• Transfer USDC to treasury wallet</li>
                <li>• Paste transaction hash (tx hash)</li>
                <li>• Auto-verification on-chain</li>
                <li>• TPC delivered automatically</li>
              </ul>
            </PremiumCard>

            <PremiumCard>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                <h3 className="font-semibold">IDR (Bank Transfer)</h3>
              </div>
              <ul className="space-y-2 text-sm text-[#a0a0a0]">
                <li>• Available in member area only</li>
                <li>• Bank details shown after invoice</li>
                <li>• Manual verification (business hours)</li>
                <li>• TPC delivered after approval</li>
              </ul>
              <p className="text-xs text-[#6b7280] mt-4">
                🔒 For security reasons, bank account details are not displayed on public pages.
              </p>
            </PremiumCard>
          </div>

          {/* Important Notes */}
          <PremiumCard className="mb-12">
            <h3 className="text-lg font-semibold mb-4 text-[#d4af37]">Important Notes</h3>
            <ul className="space-y-2 text-sm text-[#a0a0a0]">
              <li>• TPC is a utility token, not an investment product</li>
              <li>• There is no guarantee of returns, price, or liquidity</li>
              <li>• Wallet connection is required to receive TPC</li>
              <li>• All transactions are recorded for transparency and audit</li>
            </ul>
          </PremiumCard>

          {/* Referral Info */}
          <PremiumCard className="mb-12">
            <h3 className="text-lg font-semibold mb-4 text-[#d4af37]">Referral (Presale)</h3>
            <p className="text-sm text-[#a0a0a0] mb-2">Sponsor: <span className="text-white font-medium">TPC-GLOBAL</span></p>
            <p className="text-sm text-[#6b7280]">
              Presale uses 1-level internal allocation only. No personal referral codes during presale.
            </p>
          </PremiumCard>

          {/* CTA */}
          <div className="text-center">
            <Link href="/login">
              <PremiumButton size="lg">
                Login / Register to Buy TPC
              </PremiumButton>
            </Link>
            <p className="text-sm text-[#6b7280] mt-4">
              By participating, you agree to our{" "}
              <Link href="/terms" className="text-[#d4af37] hover:underline">Terms</Link> and{" "}
              <Link href="/risk-disclosure" className="text-[#d4af37] hover:underline">Risk Disclosure</Link>
            </p>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-[#2a2a3a] mt-12">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <p className="text-sm text-[#6b7280] text-center">
              TPC provides educational and platform services only. Nothing on this page constitutes financial advice.
            </p>
          </div>
        </footer>
      </div>
    </PremiumShell>
  );
}

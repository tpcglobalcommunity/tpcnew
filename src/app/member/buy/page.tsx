"use client";

import { useState } from "react";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { Alert } from "@/components/ui/Alert";
import Link from "next/link";

const USDC_PRICE = 0.001;
const IDR_EXCHANGE_RATE = 17000;
const MIN_QTY = 1000;

export default function BuyTPCPage() {
  const [walletAddress, setWalletAddress] = useState("");
  const [qtyTpc, setQtyTpc] = useState(1000);
  const [paymentMethod, setPaymentMethod] = useState<"USDC" | "IDR">("USDC");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const calculateTotals = () => {
    const totalUsdc = qtyTpc * USDC_PRICE;
    const totalIdr = totalUsdc * IDR_EXCHANGE_RATE;
    return { totalUsdc, totalIdr };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      if (walletAddress.length < 32 || walletAddress.length > 44) {
        throw new Error("Please enter a valid Solana wallet address");
      }

      setSuccess("Invoice created successfully! (Demo mode)");
    } catch (err: any) {
      setError(err.message || "Failed to create invoice");
    } finally {
      setIsLoading(false);
    }
  };

  const { totalUsdc, totalIdr } = calculateTotals();

  return (
    <PremiumShell>
      <div className="min-h-screen">
        <header className="border-b border-[#2a2a3a]">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-[#d4af37]">TPC Global</h1>
            <Link href="/member" className="text-[#a0a0a0] hover:text-white transition">
              Back to Dashboard
            </Link>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">Buy TPC</h2>

          {error && (
            <Alert variant="error" className="mb-6">
              {error}
            </Alert>
          )}

          {success && (
            <Alert variant="success" className="mb-6">
              {success}
            </Alert>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            <PremiumCard variant="gold">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#a0a0a0] mb-2">
                    Phantom Wallet Address
                  </label>
                  <input
                    type="text"
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                    required
                    placeholder="Enter your Solana wallet address"
                    className="w-full px-4 py-3 bg-[#0a0a0f] border border-[#2a2a3a] rounded-lg text-white focus:border-[#d4af37] focus:outline-none"
                  />
                  <p className="text-xs text-[#6b7280] mt-1">
                    TPC will be delivered to this wallet address
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#a0a0a0] mb-2">
                    Quantity (TPC)
                  </label>
                  <input
                    type="number"
                    value={qtyTpc}
                    onChange={(e) => setQtyTpc(Number(e.target.value))}
                    min={MIN_QTY}
                    step={1000}
                    required
                    className="w-full px-4 py-3 bg-[#0a0a0f] border border-[#2a2a3a] rounded-lg text-white focus:border-[#d4af37] focus:outline-none"
                  />
                  <p className="text-xs text-[#6b7280] mt-1">
                    Minimum {MIN_QTY.toLocaleString()} TPC
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#a0a0a0] mb-2">
                    Payment Method
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("USDC")}
                      className={`px-4 py-3 rounded-lg border transition ${
                        paymentMethod === "USDC"
                          ? "bg-[#d4af37] text-[#0a0a0f] border-[#d4af37]"
                          : "bg-transparent text-white border-[#2a2a3a] hover:border-[#d4af37]"
                      }`}
                    >
                      USDC (Solana)
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("IDR")}
                      className={`px-4 py-3 rounded-lg border transition ${
                        paymentMethod === "IDR"
                          ? "bg-[#d4af37] text-[#0a0a0f] border-[#d4af37]"
                          : "bg-transparent text-white border-[#2a2a3a] hover:border-[#d4af37]"
                      }`}
                    >
                      IDR (Bank Transfer)
                    </button>
                  </div>
                </div>

                <PremiumButton
                  type="submit"
                  className="w-full"
                  isLoading={isLoading}
                >
                  Create Invoice
                </PremiumButton>
              </form>
            </PremiumCard>

            <div className="space-y-4">
              <PremiumCard>
                <h3 className="text-lg font-semibold mb-4 text-[#d4af37]">Order Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#a0a0a0]">Price per TPC</span>
                    <span>${USDC_PRICE.toFixed(4)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#a0a0a0]">Quantity</span>
                    <span>{qtyTpc.toLocaleString()} TPC</span>
                  </div>
                  <div className="border-t border-[#2a2a3a] pt-3">
                    <div className="flex justify-between text-lg font-semibold">
                      <span className="text-[#d4af37]">Total</span>
                      <span>
                        {paymentMethod === "USDC" 
                          ? `${totalUsdc.toFixed(2)} USDC`
                          : `IDR ${totalIdr.toLocaleString()}`}
                      </span>
                    </div>
                  </div>
                </div>
              </PremiumCard>

              <PremiumCard>
                <h3 className="text-sm font-semibold mb-3 text-[#d4af37]">Important Notes</h3>
                <ul className="text-xs text-[#a0a0a0] space-y-2">
                  <li>• Invoice valid for 24 hours</li>
                  <li>• TPC will be delivered to the wallet address provided</li>
                  <li>• No refunds after payment confirmation</li>
                  <li>• IDR payments require manual verification</li>
                </ul>
              </PremiumCard>

              <Link href="/risk-disclosure" target="_blank">
                <span className="text-sm text-[#d4af37] hover:underline">
                  Read Risk Disclosure
                </span>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </PremiumShell>
  );
}

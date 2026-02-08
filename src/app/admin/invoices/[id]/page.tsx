"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { Badge } from "@/components/ui/Badge";
import { Alert } from "@/components/ui/Alert";
import Link from "next/link";

export default function AdminInvoiceDetailPage() {
  const params = useParams();
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState("");

  // Mock invoice data
  const invoice = {
    id: params.id as string,
    invoice_number: "INV-ABC123",
    user_email: "user@example.com",
    qty_tpc: 10000,
    price_per_tpc: 0.001,
    total_usdc: 10.0,
    total_idr: 170000,
    payment_method: "USDC" as const,
    status: "VERIFYING",
    wallet_address: "5AeayrU2pdy6yNBeiUpTXkfMxw3VpDQGUHC6kXrBt5vw",
    tx_hash: "5xJk9mN...YzAb3cD123456789",
    sponsor_code: "TPC-GLOBAL",
    created_at: "2026-02-08T10:00:00Z",
    expires_at: "2026-02-09T10:00:00Z",
  };

  const handleApprove = async () => {
    setIsProcessing(true);
    // TODO: Implement approve API call
    setTimeout(() => {
      setMessage("Invoice approved successfully");
      setIsProcessing(false);
    }, 1000);
  };

  const handleReject = async () => {
    setIsProcessing(true);
    // TODO: Implement reject API call
    setTimeout(() => {
      setMessage("Invoice rejected");
      setIsProcessing(false);
    }, 1000);
  };

  const handlePrepareDelivery = async () => {
    setIsProcessing(true);
    // TODO: Implement prepare delivery API call
    setTimeout(() => {
      setMessage("TPC delivery prepared for multisig confirmation");
      setIsProcessing(false);
    }, 1000);
  };

  return (
    <PremiumShell>
      <div className="min-h-screen">
        <header className="border-b border-[#2a2a3a]">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-[#d4af37]">TPC Admin</h1>
              <Badge variant="error">ADMIN</Badge>
            </div>
            <Link href="/admin" className="text-sm text-[#a0a0a0] hover:text-white transition">
              Back to Dashboard
            </Link>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Invoice {invoice.invoice_number}</h2>
            <Badge variant="info">{invoice.status}</Badge>
          </div>

          {message && (
            <Alert variant={message.includes("approved") || message.includes("prepared") ? "success" : "error"} className="mb-6">
              {message}
            </Alert>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            {/* Invoice Details */}
            <PremiumCard variant="gold">
              <h3 className="text-lg font-semibold mb-4 text-[#d4af37]">Invoice Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#a0a0a0]">Invoice Number</span>
                  <span>{invoice.invoice_number}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#a0a0a0]">User Email</span>
                  <span>{invoice.user_email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#a0a0a0]">Quantity</span>
                  <span>{invoice.qty_tpc.toLocaleString()} TPC</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#a0a0a0]">Price per TPC</span>
                  <span>${invoice.price_per_tpc.toFixed(4)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#a0a0a0]">Payment Method</span>
                  <span>{invoice.payment_method}</span>
                </div>
                <div className="border-t border-[#2a2a3a] pt-3">
                  <div className="flex justify-between font-semibold">
                    <span className="text-[#d4af37]">Total</span>
                    <span>
                      {invoice.payment_method === "USDC"
                        ? `${invoice.total_usdc.toFixed(2)} USDC`
                        : `IDR ${invoice.total_idr.toLocaleString()}`}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between text-xs text-[#6b7280] pt-3">
                  <span>Created</span>
                  <span>{new Date(invoice.created_at).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs text-[#6b7280]">
                  <span>Expires</span>
                  <span>{new Date(invoice.expires_at).toLocaleString()}</span>
                </div>
              </div>
            </PremiumCard>

            {/* Payment Verification */}
            <PremiumCard>
              <h3 className="text-lg font-semibold mb-4 text-[#d4af37]">Payment Verification</h3>
              
              {invoice.payment_method === "USDC" ? (
                <div className="space-y-3 mb-4">
                  <div>
                    <span className="text-sm text-[#a0a0a0]">Transaction Hash:</span>
                    <code className="block p-2 bg-[#0a0a0f] rounded text-xs break-all mt-1">
                      {invoice.tx_hash}
                    </code>
                  </div>
                  <a
                    href={`https://solscan.io/tx/${invoice.tx_hash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d4af37] hover:underline text-sm"
                  >
                    View on Solscan →
                  </a>
                </div>
              ) : (
                <div className="space-y-3 mb-4">
                  <p className="text-sm text-[#a0a0a0]">Payment proof uploaded</p>
                  <button className="text-[#d4af37] hover:underline text-sm">
                    View Payment Proof
                  </button>
                </div>
              )}

              <div className="border-t border-[#2a2a3a] pt-4 space-y-2">
                {invoice.status === "VERIFYING" || invoice.status === "UNDER_REVIEW" ? (
                  <>
                    <PremiumButton
                      onClick={handleApprove}
                      isLoading={isProcessing}
                      className="w-full"
                    >
                      Approve Payment
                    </PremiumButton>
                    <PremiumButton
                      variant="outline"
                      onClick={handleReject}
                      isLoading={isProcessing}
                      className="w-full"
                    >
                      Reject Payment
                    </PremiumButton>
                  </>
                ) : invoice.status === "APPROVED" || invoice.status === "PAID_AUTO" ? (
                  <PremiumButton
                    onClick={handlePrepareDelivery}
                    isLoading={isProcessing}
                    className="w-full"
                  >
                    Prepare TPC Delivery
                  </PremiumButton>
                ) : (
                  <p className="text-sm text-[#6b7280] text-center">
                    No actions available for this status
                  </p>
                )}
              </div>
            </PremiumCard>
          </div>

          {/* Delivery Information */}
          <PremiumCard className="mt-6">
            <h3 className="text-lg font-semibold mb-3 text-[#d4af37]">Delivery Information</h3>
            <p className="text-sm text-[#a0a0a0] mb-2">Destination Wallet:</p>
            <code className="block p-3 bg-[#0a0a0f] rounded text-sm break-all">
              {invoice.wallet_address}
            </code>
            <p className="text-sm text-[#a0a0a0] mt-4 mb-2">Sponsor Code:</p>
            <p className="text-sm">{invoice.sponsor_code}</p>
          </PremiumCard>
        </main>
      </div>
    </PremiumShell>
  );
}

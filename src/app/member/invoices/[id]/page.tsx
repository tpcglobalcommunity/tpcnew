"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { Badge } from "@/components/ui/Badge";
import { Alert } from "@/components/ui/Alert";
import Link from "next/link";

const TREASURY_WALLET = "5AeayrU2pdy6yNBeiUpTXkfMxw3VpDQGUHC6kXrBt5vw";

interface Invoice {
  id: string;
  invoice_number: string;
  qty_tpc: number;
  price_per_tpc: number;
  total_usdc: number;
  total_idr: number;
  payment_method: "USDC" | "IDR";
  status: string;
  wallet_address: string;
  tx_hash: string | null;
  proof_url: string | null;
  created_at: string;
  expires_at: string;
}

export default function InvoiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [invoice, setInvoice] = useState<Invoice | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [txHash, setTxHash] = useState("");
  const [proofFile, setProofFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // TODO: Implement actual invoice fetch
    setIsLoading(false);
  }, [params.id]);

  const handleUsdcSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      // TODO: Implement actual submit
      setMessage("Transaction submitted for verification. (Demo)");
    } catch (err: any) {
      setMessage(err.message || "Failed to submit");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleIdrSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!proofFile) {
      setMessage("Please select a file");
      return;
    }

    setIsSubmitting(true);
    setMessage("");

    try {
      // TODO: Implement actual upload
      setMessage("Payment proof submitted. (Demo)");
    } catch (err: any) {
      setMessage(err.message || "Failed to upload");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, any> = {
      PENDING: "warning",
      VERIFYING: "info",
      UNDER_REVIEW: "warning",
      PAID_AUTO: "success",
      APPROVED: "success",
      DELIVERED: "success",
      REJECTED: "error",
      EXPIRED: "error",
    };
    return <Badge variant={variants[status] || "default"}>{status}</Badge>;
  };

  if (isLoading) {
    return (
      <PremiumShell>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-[#a0a0a0]">Loading...</div>
        </div>
      </PremiumShell>
    );
  }

  if (!invoice) return null;

  const isPending = invoice.status === "PENDING";
  const isExpired = new Date(invoice.expires_at) < new Date();

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
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Invoice {invoice.invoice_number}</h2>
            {getStatusBadge(invoice.status)}
          </div>

          {isExpired && (
            <Alert variant="error" className="mb-6">
              This invoice has expired. Please create a new invoice.
            </Alert>
          )}

          {message && (
            <Alert 
              variant={message.includes("submitted") ? "success" : "error"} 
              className="mb-6"
            >
              {message}
            </Alert>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            <PremiumCard variant="gold">
              <h3 className="text-lg font-semibold mb-4 text-[#d4af37]">Invoice Details</h3>
              <div className="space-y-3 text-sm">
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

            {isPending && !isExpired && (
              <PremiumCard>
                {invoice.payment_method === "USDC" ? (
                  <>
                    <h3 className="text-lg font-semibold mb-4 text-[#d4af37]">USDC Payment</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-[#a0a0a0] mb-2">Send exactly:</p>
                        <p className="text-2xl font-bold text-[#d4af37]">
                          {invoice.total_usdc.toFixed(2)} USDC
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-[#a0a0a0] mb-2">To wallet:</p>
                        <code className="block p-3 bg-[#0a0a0f] rounded text-xs break-all">
                          {TREASURY_WALLET}
                        </code>
                      </div>
                      <p className="text-xs text-[#6b7280]">
                        Send USDC on Solana network only
                      </p>

                      <form onSubmit={handleUsdcSubmit} className="space-y-3 pt-4 border-t border-[#2a2a3a]">
                        <label className="block text-sm font-medium text-[#a0a0a0]">
                          Transaction Hash
                        </label>
                        <input
                          type="text"
                          value={txHash}
                          onChange={(e) => setTxHash(e.target.value)}
                          required
                          placeholder="Paste transaction hash"
                          className="w-full px-4 py-3 bg-[#0a0a0f] border border-[#2a2a3a] rounded-lg text-white focus:border-[#d4af37] focus:outline-none text-sm"
                        />
                        <PremiumButton
                          type="submit"
                          className="w-full"
                          isLoading={isSubmitting}
                        >
                          Submit Transaction Hash
                        </PremiumButton>
                      </form>
                    </div>
                  </>
                ) : (
                  <>
                    <h3 className="text-lg font-semibold mb-4 text-[#d4af37]">IDR Bank Transfer</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-[#a0a0a0] mb-2">Transfer exactly:</p>
                        <p className="text-2xl font-bold text-[#d4af37]">
                          IDR {invoice.total_idr.toLocaleString()}
                        </p>
                      </div>
                      <div className="p-3 bg-[#0a0a0f] rounded">
                        <p className="text-sm font-medium mb-2">Bank Account:</p>
                        <p className="text-sm">Bank: [Bank Name]</p>
                        <p className="text-sm">Account: [Account Number]</p>
                        <p className="text-sm">Name: TPC Global</p>
                      </div>
                      <p className="text-xs text-[#6b7280]">
                        Manual verification within 1x24 jam business hours
                      </p>

                      <form onSubmit={handleIdrSubmit} className="space-y-3 pt-4 border-t border-[#2a2a3a]">
                        <label className="block text-sm font-medium text-[#a0a0a0]">
                          Upload Payment Proof
                        </label>
                        <input
                          type="file"
                          accept="image/*,.pdf"
                          onChange={(e) => setProofFile(e.target.files?.[0] || null)}
                          required
                          className="w-full px-4 py-3 bg-[#0a0a0f] border border-[#2a2a3a] rounded-lg text-white focus:border-[#d4af37] focus:outline-none text-sm"
                        />
                        <PremiumButton
                          type="submit"
                          className="w-full"
                          isLoading={isSubmitting}
                        >
                          Submit Payment Proof
                        </PremiumButton>
                      </form>
                    </div>
                  </>
                )}
              </PremiumCard>
            )}

            {!isPending && (
              <PremiumCard>
                <h3 className="text-lg font-semibold mb-4 text-[#d4af37]">Payment Status</h3>
                {invoice.status === "VERIFYING" && (
                  <p className="text-[#a0a0a0]">
                    Your transaction is being verified on-chain.
                  </p>
                )}
                {invoice.status === "UNDER_REVIEW" && (
                  <p className="text-[#a0a0a0]">
                    Your payment proof has been submitted and is awaiting admin review.
                  </p>
                )}
                {invoice.status === "PAID_AUTO" && (
                  <Alert variant="success">
                    Payment confirmed! TPC will be delivered shortly.
                  </Alert>
                )}
                {invoice.status === "APPROVED" && (
                  <Alert variant="success">
                    Payment approved! TPC delivery is being processed.
                  </Alert>
                )}
                {invoice.status === "DELIVERED" && (
                  <Alert variant="success">
                    TPC has been delivered to your wallet!
                  </Alert>
                )}
                {invoice.status === "REJECTED" && (
                  <Alert variant="error">
                    Payment was rejected. Please contact support.
                  </Alert>
                )}
              </PremiumCard>
            )}
          </div>

          <PremiumCard className="mt-6">
            <h3 className="text-lg font-semibold mb-3 text-[#d4af37]">Delivery Information</h3>
            <p className="text-sm text-[#a0a0a0] mb-2">TPC will be delivered to:</p>
            <code className="block p-3 bg-[#0a0a0f] rounded text-sm break-all">
              {invoice.wallet_address}
            </code>
          </PremiumCard>
        </main>
      </div>
    </PremiumShell>
  );
}

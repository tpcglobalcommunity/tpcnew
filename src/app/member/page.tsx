"use client";

import { useEffect, useState } from "react";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Invoice {
  id: string;
  invoice_number: string;
  qty_tpc: number;
  total_usdc: number;
  total_idr: number;
  payment_method: string;
  status: string;
  created_at: string;
}

export default function MemberDashboard() {
  const [user, setUser] = useState<any>(null);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // TODO: Implement actual auth check
    setIsLoading(false);
  }, []);

  const handleLogout = async () => {
    router.push("/login");
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, any> = {
      DRAFT: "default",
      PENDING: "warning",
      VERIFYING: "info",
      UNDER_REVIEW: "warning",
      PAID_AUTO: "success",
      APPROVED: "success",
      DELIVERED: "success",
      REJECTED: "error",
      EXPIRED: "error",
      FAILED: "error",
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

  return (
    <PremiumShell>
      <div className="min-h-screen">
        <header className="border-b border-[#2a2a3a]">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-[#d4af37]">TPC Global</h1>
              <Badge variant="gold">Member</Badge>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-[#a0a0a0]">{user?.email}</span>
              <button
                onClick={handleLogout}
                className="text-sm text-[#6b7280] hover:text-white transition"
              >
                Logout
              </button>
            </div>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 py-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Welcome, Member</h2>
            <p className="text-[#a0a0a0]">
              Buy TPC, track your invoices, and manage your participation.
            </p>
          </div>

          <div className="mb-8">
            <Link href="/member/buy">
              <PremiumButton size="lg">
                Buy TPC Now
              </PremiumButton>
            </Link>
          </div>

          <PremiumCard>
            <h3 className="text-lg font-semibold mb-6 text-[#d4af37]">Your Invoices</h3>
            
            {invoices.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-[#6b7280]">No invoices yet.</p>
                <Link href="/member/buy" className="text-[#d4af37] hover:underline mt-2 inline-block">
                  Create your first invoice
                </Link>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#2a2a3a]">
                      <th className="text-left py-3 px-4 text-sm font-medium text-[#a0a0a0]">Invoice</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-[#a0a0a0]">Amount</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-[#a0a0a0]">Method</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-[#a0a0a0]">Status</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-[#a0a0a0]">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoices.map((invoice) => (
                      <tr key={invoice.id} className="border-b border-[#1a1a24]">
                        <td className="py-3 px-4 text-sm">
                          <Link href={`/member/invoices/${invoice.id}`} className="text-[#d4af37] hover:underline">
                            {invoice.invoice_number}
                          </Link>
                        </td>
                        <td className="py-3 px-4 text-sm">
                          {invoice.payment_method === "USDC" 
                            ? `${invoice.total_usdc.toFixed(2)} USDC`
                            : `IDR ${invoice.total_idr.toLocaleString()}`}
                        </td>
                        <td className="py-3 px-4 text-sm">{invoice.payment_method}</td>
                        <td className="py-3 px-4">{getStatusBadge(invoice.status)}</td>
                        <td className="py-3 px-4 text-sm text-[#6b7280]">
                          {new Date(invoice.created_at).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </PremiumCard>
        </main>
      </div>
    </PremiumShell>
  );
}

"use client";

import { useState } from "react";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

type StatusVariant = {
  [key: string]: "default" | "warning" | "info" | "success" | "error" | "gold";
};

interface Invoice {
  id: string;
  invoice_number: string;
  user_email: string;
  qty_tpc: number;
  total_usdc: number;
  total_idr: number;
  payment_method: string;
  status: string;
  wallet_address: string;
  tx_hash?: string;
  proof_url?: string;
  created_at: string;
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<"invoices" | "commissions" | "payouts">("invoices");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data - will be replaced with actual API calls
  const mockInvoices: Invoice[] = [
    {
      id: "1",
      invoice_number: "INV-ABC123",
      user_email: "user@example.com",
      qty_tpc: 10000,
      total_usdc: 10.00,
      total_idr: 170000,
      payment_method: "USDC",
      status: "PENDING",
      wallet_address: "5Aeayr...XrBt5vw",
      created_at: "2026-02-08T10:00:00Z",
    },
    {
      id: "2",
      invoice_number: "INV-DEF456",
      user_email: "buyer@example.com",
      qty_tpc: 50000,
      total_usdc: 50.00,
      total_idr: 850000,
      payment_method: "IDR",
      status: "UNDER_REVIEW",
      wallet_address: "7Xk9mN...YzAb3cD",
      created_at: "2026-02-08T09:30:00Z",
    },
  ];

  const getStatusBadge = (status: string) => {
    const variants: StatusVariant = {
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

  const filteredInvoices = mockInvoices.filter(
    (inv) =>
      inv.invoice_number.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inv.user_email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <PremiumShell>
      <div className="min-h-screen">
        {/* Header */}
        <header className="border-b border-[#2a2a3a]">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-[#d4af37]">TPC Admin</h1>
              <Badge variant="error">ADMIN</Badge>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-[#a0a0a0]">admin@tpcglobal.io</span>
              <Link href="/" className="text-sm text-[#6b7280] hover:text-white transition">
                Exit
              </Link>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-8">
          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <PremiumCard>
              <p className="text-sm text-[#a0a0a0]">Total Invoices</p>
              <p className="text-2xl font-bold">1,234</p>
            </PremiumCard>
            <PremiumCard>
              <p className="text-sm text-[#a0a0a0]">Pending Review</p>
              <p className="text-2xl font-bold text-yellow-500">23</p>
            </PremiumCard>
            <PremiumCard>
              <p className="text-sm text-[#a0a0a0]">TPC Sold</p>
              <p className="text-2xl font-bold text-[#d4af37]">45.2M</p>
            </PremiumCard>
            <PremiumCard>
              <p className="text-sm text-[#a0a0a0]">Revenue (USDC)</p>
              <p className="text-2xl font-bold text-green-500">$45,200</p>
            </PremiumCard>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setActiveTab("invoices")}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                activeTab === "invoices"
                  ? "bg-[#d4af37] text-[#0a0a0f]"
                  : "bg-[#12121a] text-[#a0a0a0] hover:text-white"
              }`}
            >
              Invoices
            </button>
            <button
              onClick={() => setActiveTab("commissions")}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                activeTab === "commissions"
                  ? "bg-[#d4af37] text-[#0a0a0f]"
                  : "bg-[#12121a] text-[#a0a0a0] hover:text-white"
              }`}
            >
              Commissions
            </button>
            <button
              onClick={() => setActiveTab("payouts")}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                activeTab === "payouts"
                  ? "bg-[#d4af37] text-[#0a0a0f]"
                  : "bg-[#12121a] text-[#a0a0a0] hover:text-white"
              }`}
            >
              Payout Jobs
            </button>
          </div>

          {/* Search */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search invoices..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full max-w-md px-4 py-3 bg-[#12121a] border border-[#2a2a3a] rounded-lg text-white focus:border-[#d4af37] focus:outline-none"
            />
          </div>

          {/* Invoices Table */}
          {activeTab === "invoices" && (
            <PremiumCard>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#2a2a3a]">
                      <th className="text-left py-3 px-4 text-sm font-medium text-[#a0a0a0]">Invoice</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-[#a0a0a0]">User</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-[#a0a0a0]">Amount</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-[#a0a0a0]">Method</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-[#a0a0a0]">Status</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-[#a0a0a0]">Date</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-[#a0a0a0]">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredInvoices.map((invoice) => (
                      <tr key={invoice.id} className="border-b border-[#1a1a24]">
                        <td className="py-3 px-4 text-sm font-medium">{invoice.invoice_number}</td>
                        <td className="py-3 px-4 text-sm text-[#a0a0a0]">{invoice.user_email}</td>
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
                        <td className="py-3 px-4">
                          <Link href={`/admin/invoices/${invoice.id}`}>
                            <span className="text-[#d4af37] hover:underline text-sm cursor-pointer">
                              View
                            </span>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </PremiumCard>
          )}

          {/* Commissions Tab */}
          {activeTab === "commissions" && (
            <PremiumCard>
              <p className="text-[#a0a0a0] text-center py-8">Commission ledger will be displayed here</p>
            </PremiumCard>
          )}

          {/* Payouts Tab */}
          {activeTab === "payouts" && (
            <PremiumCard>
              <p className="text-[#a0a0a0] text-center py-8">Payout jobs will be displayed here</p>
            </PremiumCard>
          )}
        </main>
      </div>
    </PremiumShell>
  );
}

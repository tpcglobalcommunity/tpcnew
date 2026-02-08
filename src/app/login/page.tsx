"use client";

import { useState } from "react";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { Alert } from "@/components/ui/Alert";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // TODO: Implement actual Supabase auth
      if (isSignUp) {
        setError("Registration demo: Check your email for verification link.");
      } else {
        // Mock login - redirect to member area
        router.push("/member");
      }
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PremiumShell>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <PremiumCard variant="gold">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-[#d4af37]">
                {isSignUp ? "Create Account" : "Member Login"}
              </h1>
              <p className="text-sm text-[#a0a0a0] mt-2">
                {isSignUp 
                  ? "Register to access TPC presale" 
                  : "Login to buy TPC and view your invoices"}
              </p>
            </div>

            {error && (
              <Alert variant={error.includes("demo") ? "success" : "error"} className="mb-6">
                {error}
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#a0a0a0] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-[#0a0a0f] border border-[#2a2a3a] rounded-lg text-white focus:border-[#d4af37] focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#a0a0a0] mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="w-full px-4 py-3 bg-[#0a0a0f] border border-[#2a2a3a] rounded-lg text-white focus:border-[#d4af37] focus:outline-none"
                  placeholder="••••••••"
                />
              </div>

              <PremiumButton
                type="submit"
                className="w-full"
                isLoading={isLoading}
              >
                {isSignUp ? "Create Account" : "Login"}
              </PremiumButton>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-[#d4af37] hover:underline text-sm"
              >
                {isSignUp 
                  ? "Already have an account? Login" 
                  : "Don't have an account? Register"}
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-[#2a2a3a] text-center">
              <Link href="/presale" className="text-[#6b7280] hover:text-[#a0a0a0] text-sm">
                Back to Presale
              </Link>
            </div>
          </PremiumCard>

          <p className="text-center text-xs text-[#6b7280] mt-6">
            By using this service, you agree to our{" "}
            <Link href="/terms" className="text-[#d4af37] hover:underline">Terms</Link> and{" "}
            <Link href="/risk-disclosure" className="text-[#d4af37] hover:underline">Risk Disclosure</Link>
          </p>
        </div>
      </div>
    </PremiumShell>
  );
}

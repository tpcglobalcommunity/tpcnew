"use client";

import { useState } from "react";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PremiumCard, PremiumCardContent } from "@/components/ui/PremiumCard";
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
        <Container>
          <PremiumCard variant="glass" className="w-full max-w-md">
            <PremiumCardContent>
              <div className="text-center mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-fg mb-6">
                  {isSignUp ? "Create Account" : "Member Login"}
                </h1>
                <p className="text-sm text-muted leading-relaxed">
                  {isSignUp 
                    ? "Register to access TPC presale and member features" 
                    : "Login to buy TPC and view your dashboard"}
                </p>
              </div>

              {error && (
                <Alert variant={error.includes("demo") ? "success" : "error"} className="mb-6">
                  {error}
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-fg mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-fg focus:border-accent focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-fg mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-fg focus:border-accent focus:outline-none"
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
                  className="text-accent hover:text-accent2 text-sm transition-colors duration-300"
                >
                  {isSignUp 
                    ? "Already have an account? Login" 
                    : "Don't have an account? Register"}
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-border text-center">
                <Link href="/presale" className="text-accent hover:text-accent2 text-sm transition-colors duration-300">
                  Back to Presale
                </Link>
              </div>
            </PremiumCardContent>
          </PremiumCard>
        </Container>
      </div>
    </PremiumShell>
  );
}

import { normalizeLang, type LangParams } from "@/lib/lang-helpers";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { Container } from "@/components/ui/Container";
import { termsCopy } from "@/content/termsCopy";
import type { Metadata } from "next";
import Link from "next/link";

interface TermsOfServicePageProps {
  params: Promise<LangParams>;
}

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "id" }];
}

export async function generateMetadata({ params }: { params: Promise<LangParams> }): Promise<Metadata> {
  const { lang } = await params;
  const normalizedLang = normalizeLang(lang);

  const titles = {
    id: "Terms of Service - TPC",
    en: "Terms of Service - TPC"
  };

  const descriptions = {
    id: "Official Terms of Service of TPC (Trader Professional Community). Educational platform disclaimer and user agreement.",
    en: "Official Terms of Service of TPC (Trader Professional Community). Educational platform disclaimer and user agreement."
  };

  return {
    title: titles[normalizedLang as keyof typeof titles],
    description: descriptions[normalizedLang as keyof typeof descriptions],
    keywords: "TPC, Terms of Service, legal agreement, user terms, educational platform",
    authors: [{ name: "TPC" }],
    creator: "TPC",
    publisher: "TPC",
    openGraph: {
      title: titles[normalizedLang as keyof typeof titles],
      description: descriptions[normalizedLang as keyof typeof descriptions],
      type: "website",
      locale: normalizedLang === "id" ? "id_ID" : "en_US",
      siteName: "TPC",
      images: [
        {
          url: "https://tpcglobal.io/og-terms.jpg",
          width: 1200,
          height: 630,
          alt: titles[normalizedLang as keyof typeof titles],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titles[normalizedLang as keyof typeof titles],
      description: descriptions[normalizedLang as keyof typeof descriptions],
      images: ["https://tpcglobal.io/og-terms.jpg"],
    },
  };
}

export default async function TermsOfServicePage({ params }: TermsOfServicePageProps) {
  const { lang } = await params;
  const normalizedLang = normalizeLang(lang);
  const content = termsCopy[normalizedLang as keyof typeof termsCopy];

  return (
    <PremiumShell>
      <Container className="py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              {content.title}
            </h1>
            <p className="text-gray-400 text-sm mb-2">
              {content.subtitle}
            </p>
            <p className="text-gray-400 text-sm">
              {content.lastUpdated}
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-[#1A1F2E] border border-amber-500/25 rounded-lg p-8 mb-8">
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {content.introduction}
              </p>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {content.sections.map((section, index) => (
              <div key={index} className="bg-[#1A1F2E] border border-amber-500/25 rounded-lg p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center">
                    <span className="text-amber-400 font-semibold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {section.title}
                    </h3>
                    <div className="prose prose-invert max-w-none">
                      <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="bg-[#1A1F2E] border border-amber-500/25 rounded-lg p-8 mt-8">
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {content.conclusion}
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <Link 
                href={`/${normalizedLang}/privacy`}
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href={`/${normalizedLang}/risk-disclosure`}
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                Risk Disclosure
              </Link>
              <Link 
                href={`/${normalizedLang}/transparency`}
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                Transparency
              </Link>
            </div>
            <Link 
              href={`/${normalizedLang}`}
              className="inline-flex items-center px-6 py-3 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-600 transition-colors"
            >
              {normalizedLang === 'id' ? 'Kembali ke Beranda' : 'Back to Home'}
            </Link>
          </div>
        </div>
      </Container>
    </PremiumShell>
  );
}

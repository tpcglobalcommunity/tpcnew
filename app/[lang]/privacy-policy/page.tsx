import { normalizeLang, type LangParams } from "@/lib/lang-helpers";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { Container } from "@/components/ui/Container";
import { privacyCopy } from "@/content/privacyCopy";
import type { Metadata } from "next";
import Link from "next/link";

interface PrivacyPolicyPageProps {
  params: Promise<LangParams>;
}

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "id" }];
}

export async function generateMetadata({ params }: { params: Promise<LangParams> }): Promise<Metadata> {
  const { lang } = await params;
  const normalizedLang = normalizeLang(lang);

  const titles = {
    id: "Privacy Policy - TPC",
    en: "Privacy Policy - TPC"
  };

  const descriptions = {
    id: "Official Privacy Policy of TPC (Trader Professional Community). Explanation of data collection, usage, and security practices.",
    en: "Official Privacy Policy of TPC (Trader Professional Community). Explanation of data collection, usage, and security practices."
  };

  return {
    title: titles[normalizedLang as keyof typeof titles],
    description: descriptions[normalizedLang as keyof typeof descriptions],
    keywords: "TPC, Privacy Policy, data protection, GDPR compliance, user privacy",
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
          url: "https://tpcglobal.io/og-privacy.jpg",
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
      images: ["https://tpcglobal.io/og-privacy.jpg"],
    },
  };
}

export default async function PrivacyPolicyPage({ params }: PrivacyPolicyPageProps) {
  const { lang } = await params;
  const normalizedLang = normalizeLang(lang);
  const content = privacyCopy[normalizedLang as keyof typeof privacyCopy];

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
              {content.sections[0].bullets && (
                <ul className="list-disc list-inside space-y-2 mt-4 text-gray-300">
                  {content.sections[0].bullets.map((bullet, index) => (
                    <li key={index} className="ml-4">{bullet}</li>
                  ))}
                </ul>
              )}
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
                      <p className="text-gray-300 leading-relaxed whitespace-pre-line mb-4">
                        {section.content}
                      </p>
                      
                      {/* Subsections */}
                      {section.subsections && (
                        <div className="space-y-4">
                          {section.subsections.map((subsection, subIndex) => (
                            <div key={subIndex} className="ml-4">
                              <h4 className="text-lg font-medium text-white mb-2">
                                {subsection.title}
                              </h4>
                              <p className="text-gray-300 leading-relaxed mb-3">
                                {subsection.content}
                              </p>
                              {subsection.bullets && (
                                <ul className="list-disc list-inside space-y-2 text-gray-300">
                                  {subsection.bullets.map((bullet, bulletIndex) => (
                                    <li key={bulletIndex} className="ml-4">{bullet}</li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {/* Bullets */}
                      {section.bullets && !section.subsections && (
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                          {section.bullets.map((bullet, bulletIndex) => (
                            <li key={bulletIndex} className="ml-4">{bullet}</li>
                          ))}
                        </ul>
                      )}
                      
                      {/* Exceptions */}
                      {section.exceptions && (
                        <div className="mt-4">
                          <p className="text-gray-300 font-medium mb-2">
                            Exceptions:
                          </p>
                          <ul className="list-disc list-inside space-y-2 text-gray-300">
                            {section.exceptions.map((exception, exceptionIndex) => (
                              <li key={exceptionIndex} className="ml-4">{exception}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {/* Note */}
                      {section.note && (
                        <div className="mt-4 p-3 bg-amber-500/10 rounded border border-amber-500/30">
                          <p className="text-gray-300 text-sm">
                            <strong>Note:</strong> {section.note}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          {content.sections[content.sections.length - 1]?.contact && (
            <div className="bg-[#1A1F2E] border border-amber-500/25 rounded-lg p-8 mt-8">
              <div className="prose prose-invert max-w-none">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {content.sections[content.sections.length - 1].title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {content.sections[content.sections.length - 1].content}
                </p>
                <div className="bg-[#0B0E11] border border-amber-500/25 rounded-lg p-6">
                  <div className="text-center">
                    <p className="text-gray-300 mb-2">
                      <strong>Email:</strong> {content.sections[content.sections.length - 1].contact?.email}
                    </p>
                    <p className="text-gray-400 text-sm">
                      <strong>Subject:</strong> {content.sections[content.sections.length - 1].contact?.subject}
                    </p>
                    <p className="text-gray-400 text-sm mt-2">
                      {content.sections[content.sections.length - 1].contact?.note}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

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
                href={`/${normalizedLang}/terms-of-service`}
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                Terms of Service
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

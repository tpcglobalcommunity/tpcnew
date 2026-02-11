import { normalizeLang, type LangParams } from "@/lib/lang-helpers";
import { PremiumShell } from "@/components/ui/PremiumShell";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Metadata } from "next";
import Link from "next/link";

interface HomePageProps {
  params: Promise<LangParams>;
}

export function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'id' }
  ];
}

export async function generateMetadata({ params }: { params: Promise<LangParams> }): Promise<Metadata> {
  const { lang } = await params;
  const normalizedLang = normalizeLang(lang);
  
  return {
    title: 'TPC — Komunitas Trader Profesional',
    description: 'Komunitas edukasi trading yang berfokus pada transparansi dan etika.',
    keywords: 'TPC, komunitas edukasi, transparansi, etika, trading education',
    authors: [{ name: 'TPC' }],
    creator: 'TPC',
    publisher: 'TPC',
    alternates: {
      canonical: `https://www.tpcglobal.io/${normalizedLang}`,
      languages: {
        "id-ID": `https://www.tpcglobal.io/id`,
        "en-US": `https://www.tpcglobal.io/en`,
      },
    },
    openGraph: {
      title: 'TPC — Komunitas Trader Profesional',
      description: 'Komunitas edukasi trading yang berfokus pada transparansi dan etika.',
      type: "website",
      locale: lang === 'id' ? 'id_ID' : 'en_US',
      siteName: 'TPC',
      images: [
        {
          url: `https://www.tpcglobal.io/og-${normalizedLang}.png`,
          width: 1200,
          height: 630,
          alt: 'TPC — Komunitas Trader Profesional',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'TPC — Komunitas Trader Profesional',
      description: 'Komunitas edukasi trading yang berfokus pada transparansi dan etika.',
      images: [`https://www.tpcglobal.io/og-${normalizedLang}.png`],
      creator: '@TPCGlobal',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;
  const normalizedLang = normalizeLang(lang);

  return (
    <PremiumShell>
      {/* HERO SECTION */}
      <Section className="py-28 bg-[#0B0E11] relative w-full max-w-full overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full mb-8">
              <span className="text-amber-400 text-sm font-semibold">KOMUNITAS EDUKASI</span>
            </div>
            
            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
              TPC
              <span className="block text-2xl md:text-3xl font-normal text-gray-300 mt-2">
                (Trader Professional Community)
              </span>
            </h1>
            
            {/* Main Description - EXACT TEXT AS REQUIRED */}
            <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
              TPC merupakan komunitas trader profesional yang berfokus pada berbagi pengalaman serta memberikan edukasi kepada pemula mengenai trading emas dan Bitcoin secara terstruktur dan bertanggung jawab.
            </p>
            
            {/* Secondary Description - EXACT TEXT AS REQUIRED */}
            <p className="text-lg text-gray-400 mb-12 leading-relaxed">
              Dengan hadirnya TPC, praktik edukasi yang tidak bertanggung jawab serta skema investasi yang merugikan masyarakat dapat dicegah melalui peningkatan literasi dan kesadaran risiko sejak dini.
            </p>
            
            {/* CTA Buttons - SOFT STYLE */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${lang}/why-tpc`} className="inline-flex items-center justify-center px-6 py-3 bg-amber-500/90 text-black font-semibold rounded-xl hover:bg-amber-400 transition-colors duration-300">
                Pelajari TPC
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href={`/${lang}/transparency`} className="inline-flex items-center justify-center px-6 py-3 border border-white/10 bg-white/5 text-gray-300 font-semibold rounded-xl hover:bg-white/10 transition-colors duration-300">
                Lihat Transparansi
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* PILAR TPC SECTION */}
      <Section className="py-20 bg-[#0F141A] relative w-full max-w-full overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Pilar TPC
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Fondasi yang membangun komunitas trading profesional yang bertanggung jawab
              </p>
            </div>
            
            {/* 4 Premium Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1: Edukasi Terstruktur */}
              <div className="bg-[#11161c] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">Edukasi Terstruktur</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Pendekatan pembelajaran yang sistematis dan berbasis pengalaman nyata.
                </p>
              </div>

              {/* Card 2: Transparansi */}
              <div className="bg-[#11161c] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">Transparansi</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Komitmen terhadap keterbukaan informasi dan pencatatan yang dapat diverifikasi.
                </p>
              </div>

              {/* Card 3: Literasi Risiko */}
              <div className="bg-[#11161c] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">Literasi Risiko</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Penekanan pada pengelolaan risiko sebelum mengambil keputusan yang informasi.
                </p>
              </div>

              {/* Card 4: Komunitas Profesional */}
              <div className="bg-[#11161c] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">Komunitas Profesional</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Lingkungan diskusi yang mendorong etika dan tanggung jawab.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CARA KERJA TPC SECTION */}
      <Section className="py-20 bg-[#0B0E11] relative w-full max-w-full overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Cara Kerja TPC
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Proses pembelajaran yang terstruktur untuk mengembangkan trader profesional
              </p>
            </div>
            
            {/* 3 Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-amber-400">1</span>
                </div>
                <h3 className="text-white font-semibold text-xl mb-4">Belajar Konsep & Risiko</h3>
                <p className="text-gray-400 leading-relaxed">
                  Pemahaman fundamental tentang trading, manajemen risiko, dan etika yang menjadi dasar pengambilan keputusan yang bertanggung jawab.
                </p>
              </div>
              
              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-400">2</span>
                </div>
                <h3 className="text-white font-semibold text-xl mb-4">Diskusi & Studi Kasus</h3>
                <p className="text-gray-400 leading-relaxed">
                  Kolaborasi dengan anggota komunitas untuk menganalisis kasus nyata dan berbagi pengalaman praktis dalam trading yang etis.
                </p>
              </div>
              
              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-green-400">3</span>
                </div>
                <h3 className="text-white font-semibold text-xl mb-4">Evaluasi & Peningkatan</h3>
                <p className="text-gray-400 leading-relaxed">
                  Penilaian berkala terhadap perkembangan kemampuan dan penyesuaian strategi berdasarkan hasil pembelajaran yang terukur.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* KOMITMEN TRANSPARANSI SECTION */}
      <Section className="py-20 bg-[#1A1F2E] relative w-full max-w-full overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            {/* Main Statement - EXACT TEXT AS REQUIRED */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              TPC menggunakan teknologi blockchain untuk mendukung transparansi dan pencatatan yang dapat diverifikasi.
            </p>
            
            {/* Disclaimer - EXACT TEXT AS REQUIRED */}
            <p className="text-sm text-gray-400 leading-relaxed">
              Materi bersifat edukatif dan bukan nasihat investasi atau keuangan.
            </p>
          </div>
        </Container>
      </Section>
    </PremiumShell>
  );
}
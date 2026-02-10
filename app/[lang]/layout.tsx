import { normalizeLang, type LangParams } from "@/lib/lang-helpers";
import { PublicTopBar } from "@/components/navigation/PublicTopBar";
import { PublicBottomNav } from "@/components/navigation/PublicBottomNav";
import { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://tpcglobal.io"),
  title: "TPC Global",
  description: "Trader Professional Community - Education for Gold & Bitcoin",
  icons: {
    icon: "/tpc.webp",
    shortcut: "/tpc.webp",
    apple: "/tpc.webp",
  },
};

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<LangParams>;
}) {
  const { lang } = await params;
  const normalizedLang = normalizeLang(lang);

  return (
    <div className="min-h-screen bg-[#0B0E11]">
      <div className="min-h-screen flex flex-col">
        <PublicTopBar currentLang={normalizedLang} />
        
        <main className="pt-14 pb-20 flex-1">
          {children}
        </main>
        
        <PublicBottomNav currentLang={normalizedLang} />
      </div>
    </div>
  );
}

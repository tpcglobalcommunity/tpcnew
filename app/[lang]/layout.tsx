import { normalizeLang, type LangParams } from "@/lib/lang-helpers";
import { Metadata } from "next";
import "../globals.css";
import LayoutClient from "./layout-client";

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
  const currentLang = normalizeLang(lang);

  return <LayoutClient params={params}>{children}</LayoutClient>;
}

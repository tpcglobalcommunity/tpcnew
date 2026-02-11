import { Metadata } from "next";

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

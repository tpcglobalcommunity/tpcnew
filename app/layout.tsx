import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tpcglobal.io"),
  title: "TPC Global",
  description: "Trader Professional Community - Education for Gold & Bitcoin",
  icons: {
    icon: "/tpc.webp",
    shortcut: "/tpc.webp",
    apple: "/tpc.webp",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TPC Global",
    "url": "https://www.tpcglobal.io",
    "logo": "https://www.tpcglobal.io/tpc.webp",
    "sameAs": [
      "https://www.tpcglobal.io"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "TPC Global",
    "url": "https://www.tpcglobal.io",
    "description": "Trader Professional Community - Education for Gold & Bitcoin"
  };

  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="min-h-screen bg-[#0B0E11] text-white antialiased">
        {children}
      </body>
    </html>
  );
}

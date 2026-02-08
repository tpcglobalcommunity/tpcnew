// Helper for public path generation
export function publicPath(lang: string, path: string): string {
  // Remove leading slash from path if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // If path already includes language, don't double it
  if (cleanPath.startsWith(`${lang}/`)) {
    return `/${cleanPath}`;
  }
  
  // If path is root, just return language
  if (cleanPath === '') {
    return `/${lang}`;
  }
  
  return `/${lang}/${cleanPath}`;
}

// Type for language
export type Language = 'en' | 'id';

// Content copy for home page
export const homeCopy = {
  en: {
    hero: {
      title: "Trader Professional Community (TPC Global)",
      subtitle: "Education-first, transparency-first community. Access tools, learning, and governance — without profit promises.",
      ctaPrimary: "View Presale",
      ctaSecondary: "Explore Transparency"
    },
    trustBadges: [
      "No Profit Promises",
      "On-Chain Wallet Transparency", 
      "No DM First — Official Channels Only",
      "Never Share Private Keys"
    ],
    whatIsTPC: {
      title: "What is TPC?",
      points: [
        "Education-first community for traders",
        "Transparent on-chain operations",
        "Community-driven governance"
      ]
    },
    features: [
      {
        title: "Presale",
        description: "Buy TPC with clear invoice status and transparent treasury display.",
        icon: "🚀",
        href: "/presale"
      },
      {
        title: "DAO Lite", 
        description: "Community proposals & voting for roadmap decisions.",
        icon: "🏛️",
        href: "/dao"
      },
      {
        title: "Academy",
        description: "Structured learning for traders: beginner to advanced.",
        icon: "📚",
        href: "/academy"
      },
      {
        title: "Transparency",
        description: "Public wallets, supply stages, and verifiable records.",
        icon: "🔍",
        href: "/transparency"
      }
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        "Explore public pages",
        "Join via secure login", 
        "Use features with clear status & audit trail"
      ]
    },
    faq: [
      {
        question: "Is TPC an investment?",
        answer: "TPC is community access & utility. No profit promises."
      },
      {
        question: "How do I stay safe?",
        answer: "Use official channels, never share private keys."
      },
      {
        question: "How does DAO work?",
        answer: "DAO Lite via voting, published results in Transparency."
      },
      {
        question: "Where can I verify wallets?",
        answer: "Transparency page shows official addresses."
      }
    ]
  },
  id: {
    hero: {
      title: "Trader Professional Community (TPC Global)",
      subtitle: "Komunitas edukasi dan transparansi. Akses tools, pembelajaran, dan tata kelola — tanpa janji keuntungan.",
      ctaPrimary: "Lihat Presale",
      ctaSecondary: "Lihat Transparansi"
    },
    trustBadges: [
      "Tanpa Janji Profit",
      "Transparansi Wallet On-Chain",
      "Tidak DM Duluan — Hanya Kanal Resmi", 
      "Jangan Pernah Bagikan Private Key"
    ],
    whatIsTPC: {
      title: "Apa itu TPC?",
      points: [
        "Komunitas edukasi untuk trader",
        "Operasi on-chain yang transparan",
        "Tata kelola yang digerakkan komunitas"
      ]
    },
    features: [
      {
        title: "Presale",
        description: "Beli TPC dengan status invoice yang jelas dan treasury transparan.",
        icon: "🚀",
        href: "/presale"
      },
      {
        title: "DAO Lite",
        description: "Proposal & voting komunitas untuk keputusan roadmap.",
        icon: "🏛️", 
        href: "/dao"
      },
      {
        title: "Academy",
        description: "Pembelajaran terstruktur untuk trader: pemula sampai mahir.",
        icon: "📚",
        href: "/academy"
      },
      {
        title: "Transparency",
        description: "Wallet publik, tahapan suplai, dan catatan yang bisa diverifikasi.",
        icon: "🔍",
        href: "/transparency"
      }
    ],
    howItWorks: {
      title: "Cara kerja",
      steps: [
        "Jelajahi halaman publik",
        "Gabung lewat login aman",
        "Gunakan fitur dengan status jelas & audit trail"
      ]
    },
    faq: [
      {
        question: "Apakah TPC investasi?",
        answer: "TPC adalah akses komunitas & utilitas. Tanpa janji keuntungan."
      },
      {
        question: "Bagaimana cara tetap aman?",
        answer: "Gunakan kanal resmi, jangan bagikan private key."
      },
      {
        question: "Bagaimana DAO bekerja?",
        answer: "DAO Lite via voting, hasil dipublikasikan di Transparency."
      },
      {
        question: "Di mana verifikasi wallet?",
        answer: "Halaman Transparency menampilkan alamat resmi."
      }
    ]
  }
};

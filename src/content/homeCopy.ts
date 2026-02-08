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
      subtitle: "A professional trading community focused on education for Gold (XAUUSD) and Bitcoin (BTC) — done the right way. Process, discipline, and transparency. No profit promises.",
      ctaPrimary: "View Presale",
      ctaSecondary: "Explore Transparency"
    },
    trustBadges: [
      "No Profit Promises",
      "Education Over Hype",
      "On-Chain Wallet Transparency", 
      "No DM First — Official Channels Only",
      "Never Share Private Keys"
    ],
    whatIsTPC: {
      title: "What is TPC?",
      description: "TPC Global is a professional trading community focused on structured, responsible education for Gold and Bitcoin trading.",
      points: [
        "Focused on Gold (XAUUSD) and Bitcoin (BTC) trading education",
        "Professional approach: risk management, discipline, and process",
        "Community learning without profit guarantees"
      ]
    },
    features: [
      {
        title: "Presale",
        description: "Access TPC through a presale system with clear invoice status and transparent treasury.",
        icon: "🚀",
        href: "/presale"
      },
      {
        title: "DAO Lite", 
        description: "Community participation in decision-making through DAO Lite voting.",
        icon: "🏛️",
        href: "/dao"
      },
      {
        title: "Academy",
        description: "Educational resources for Gold and Bitcoin trading from beginner to advanced.",
        icon: "📚",
        href: "/academy"
      },
      {
        title: "Transparency",
        description: "Public wallets, supply stages, and verifiable data.",
        icon: "🔍",
        href: "/transparency"
      }
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        "Explore TPC public information",
        "Join through secure login", 
        "Participate in education and community activities responsibly"
      ]
    },
    faq: [
      {
        question: "Is TPC an investment?",
        answer: "No. TPC provides education and community access, with no profit promises."
      },
      {
        question: "What markets are covered?",
        answer: "Primary focus on Gold (XAUUSD) and Bitcoin (BTC)."
      },
      {
        question: "How do I stay safe?",
        answer: "Use official channels and never share private keys."
      }
    ]
  },
  id: {
    hero: {
      title: "Trader Professional Community (TPC Global)",
      subtitle: "Tempat para trader profesional untuk melakukan edukasi trading Gold (XAUUSD) dan Bitcoin (BTC) dengan baik dan benar. Fokus pada proses, disiplin, dan transparansi — tanpa janji keuntungan.",
      ctaPrimary: "Lihat Presale",
      ctaSecondary: "Lihat Transparansi"
    },
    trustBadges: [
      "Tanpa Janji Profit",
      "Edukasi, Bukan Euforia",
      "Transparansi Wallet On-Chain",
      "Tidak DM Duluan — Kanal Resmi Saja", 
      "Jangan Pernah Bagikan Private Key"
    ],
    whatIsTPC: {
      title: "Apa itu TPC?",
      description: "Trader Professional Community (TPC) adalah komunitas trader profesional yang berfokus pada edukasi trading Gold dan Bitcoin secara terstruktur, bertanggung jawab, dan transparan.",
      points: [
        "Fokus pada edukasi trading Gold (XAUUSD) dan Bitcoin (BTC)",
        "Pendekatan profesional: risk management, disiplin, dan proses",
        "Komunitas belajar & berbagi tanpa klaim hasil"
      ]
    },
    features: [
      {
        title: "Presale",
        description: "Akses TPC melalui sistem presale dengan status invoice yang jelas dan treasury yang transparan.",
        icon: "🚀",
        href: "/presale"
      },
      {
        title: "DAO Lite",
        description: "Partisipasi komunitas dalam pengambilan keputusan melalui voting DAO Lite.",
        icon: "🏛️", 
        href: "/dao"
      },
      {
        title: "Academy",
        description: "Materi edukasi trading Gold dan Bitcoin dari level dasar hingga lanjutan.",
        icon: "📚",
        href: "/academy"
      },
      {
        title: "Transparency",
        description: "Wallet publik, tahapan suplai, dan data yang dapat diverifikasi.",
        icon: "🔍",
        href: "/transparency"
      }
    ],
    howItWorks: {
      title: "Cara kerja",
      steps: [
        "Pelajari informasi publik TPC",
        "Gabung melalui login yang aman",
        "Ikuti edukasi dan aktivitas komunitas secara bertanggung jawab"
      ]
    },
    faq: [
      {
        question: "Apakah TPC adalah investasi?",
        answer: "Bukan. TPC adalah komunitas edukasi dan akses utilitas, tanpa janji keuntungan."
      },
      {
        question: "Instrumen apa yang dipelajari?",
        answer: "Fokus utama pada Gold (XAUUSD) dan Bitcoin (BTC)."
      },
      {
        question: "Bagaimana menjaga keamanan?",
        answer: "Gunakan kanal resmi dan jangan pernah membagikan private key."
      }
    ]
  }
};

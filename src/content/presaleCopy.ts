export type Language = 'en' | 'id';

export const presaleCopy: Record<Language, {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    disclaimer: string;
    cta: string;
  };
  stages: {
    title: string;
    subtitle: string;
    items: Array<{
      stage: string;
      title: string;
      description: string;
      status: string;
    }>;
  };
  tokenUtility: {
    title: string;
    items: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  transparency: {
    title: string;
    subtitle: string;
    items: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  finalCta: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
}> = {
  en: {
    hero: {
      badge: "Community Access",
      title: "TPC COMMUNITY ACCESS",
      subtitle: "Education-first community with transparent access mechanism. TPC is built on Ethereum-based blockchain infrastructure through Polygon to ensure transparency, efficiency, and community sustainability.",
      disclaimer: "TPC is not an investment instrument and does not promise financial returns.",
      cta: "Learn Community Access"
    },
    stages: {
      title: "Community Access Structure",
      subtitle: "Transparent community access with phased participation for ecosystem development.",
      items: [
        {
          stage: "Phase 1",
          title: "Community Access Phase 1",
          description: "Initial community access with educational participation focus.",
          status: "Active"
        },
        {
          stage: "Phase 2",
          title: "Community Access Phase 2",
          description: "Expanded access with educational ecosystem focus.",
          status: "Upcoming"
        },
        {
          stage: "Phase 3",
          title: "Community Access Phase 3",
          description: "Continued educational ecosystem development.",
          status: "Upcoming"
        },
        {
          stage: "Phase 4",
          title: "Community Access Phase 4",
          description: "Educational ecosystem growth phase.",
          status: "Upcoming"
        },
        {
          stage: "Phase 5",
          title: "Community Access Phase 5",
          description: "Mid-ecosystem expansion phase.",
          status: "Upcoming"
        }
      ]
    },
    tokenUtility: {
      title: "TPC Token Utility",
      items: [
        {
          icon: "🎓",
          title: "Premium Education Access",
          description: "Access to premium trading education materials and resources"
        },
        {
          icon: "🏛️",
          title: "Community & Forum Access",
          description: "Join exclusive community forums and discussion groups"
        },
        {
          icon: "👥",
          title: "DAO Lite Participation",
          description: "Non-financial participation in platform governance"
        },
        {
          icon: "🌐",
          title: "Ecosystem Discounts",
          description: "Discounts on ecosystem products and services"
        }
      ]
    },
    transparency: {
      title: "Transparency & Trust",
      subtitle: "Our commitment to clarity and compliance.",
      items: [
        {
          icon: "🔍",
          title: "Verifiable Public Wallet",
          description: "All wallet addresses are publicly verifiable on blockchain"
        },
        {
          icon: "📊",
          title: "No Profit Guarantee",
          description: "Token utility for platform access, not investment returns"
        },
        {
          icon: "🎓",
          title: "Education Focus",
          description: "Primary focus on trading education and community building"
        },
        {
          icon: "🛡️",
          title: "Anti-Scam Policy",
          description: "Strict policies against fraudulent activities and promises"
        }
      ]
    },
    finalCta: {
      title: "Ready to Join Community?",
      subtitle: "Registration required for compliance & transparency",
      buttonText: "Enter Community Access"
    },
    meta: {
      title: "TPC Community Access",
      description: "Community access mechanism for professional trader education",
      keywords: "TPC, community access, trading education, trader community, utility token"
    }
  },
  id: {
    hero: {
      badge: "Akses Komunitas",
      title: "AKSES KOMUNITAS TPC",
      subtitle: "Komunitas education-first dengan mekanisme akses transparan. TPC dibangun di atas infrastruktur blockchain berbasis Ethereum melalui Polygon untuk menjamin transparansi, efisiensi, dan keberlanjutan komunitas.",
      disclaimer: "TPC bukan instrumen investasi dan tidak menjanjikan keuntungan finansial.",
      cta: "Pelajari Akses Komunitas"
    },
    stages: {
      title: "Struktur Akses Komunitas",
      subtitle: "Akses komunitas bertahap dengan transparansi penuh untuk pembangunan ekosistem edukasi.",
      items: [
        {
          stage: "Tahap 1",
          title: "Tahap Akses 1",
          description: "Akses komunitas awal dengan partisipasi edukasi.",
          status: "Aktif"
        },
        {
          stage: "Tahap 2",
          title: "Tahap Akses 2",
          description: "Perluasan akses dengan fokus edukasi.",
          status: "Akan Datang"
        },
        {
          stage: "Tahap 3",
          title: "Tahap Akses 3",
          description: "Pengembangan ekosistem edukasi berkelanjutan.",
          status: "Akan Datang"
        },
        {
          stage: "Tahap 4",
          title: "Tahap Akses 4",
          description: "Fase pertumbuhan komunitas edukatif.",
          status: "Akan Datang"
        },
        {
          stage: "Tahap 5",
          title: "Tahap Akses 5",
          description: "Fase ekspansi komunitas pertengahan.",
          status: "Akan Datang"
        }
      ]
    },
    tokenUtility: {
      title: "Utilitas Token TPC",
      items: [
        {
          icon: "🎓",
          title: "Akses Edukasi Premium",
          description: "Akses ke materi edukasi trading premium dan sumber daya"
        },
        {
          icon: "🏛️",
          title: "Akses Komunitas & Forum",
          description: "Gabung forum komunitas dan grup diskusi eksklusif"
        },
        {
          icon: "👥",
          title: "Partisipasi DAO Lite",
          description: "Partisipasi non-finansial dalam tata kelola platform"
        },
        {
          icon: "🌐",
          title: "Diskon Ekosistem",
          description: "Diskon untuk produk dan layanan ekosistem"
        }
      ]
    },
    transparency: {
      title: "Transparansi & Kepercayaan",
      subtitle: "Komitmen kami pada kejelasan dan kepatutan.",
      items: [
        {
          icon: "🔍",
          title: "Wallet Publik Dapat Diverifikasi",
          description: "Semua alamat wallet dapat diverifikasi di blockchain"
        },
        {
          icon: "📊",
          title: "Tidak Ada Jaminan Keuntungan",
          description: "Token utilitas untuk akses platform, bukan return investasi"
        },
        {
          icon: "🎓",
          title: "Fokus Edukasi",
          description: "Prioritas utama adalah edukasi trading dan pembangunan komunitas"
        },
        {
          icon: "🛡️",
          title: "Kebijakan Anti-Scam",
          description: "Kebijakan ketat terhadap aktivitas penipuan dan janji palsu"
        }
      ]
    },
    finalCta: {
      title: "Siap Bergabung dengan Komunitas?",
      subtitle: "Registrasi diperlukan untuk kepatuhan dan transparansi.",
      buttonText: "Masuk Akses Komunitas"
    },
    meta: {
      title: "Akses Komunitas TPC",
      description: "Mekanisme akses komunitas untuk edukasi trader profesional",
      keywords: "TPC, akses komunitas, edukasi trading, komunitas trader, token utilitas"
    }
  }
};

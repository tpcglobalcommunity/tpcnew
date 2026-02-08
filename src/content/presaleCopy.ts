export type Language = 'en' | 'id';

export const presaleCopy: Record<Language, {
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  trustBadges: string[];
  stages: {
    title: string;
    subtitle: string;
    items: Array<{
      stage: string;
      title: string;
      description: string;
      price: string;
      supply: string;
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
}> = {
  en: {
    hero: {
      title: 'TPC Presale — Early Community Access',
      subtitle: 'Utility token for education & DAO-based trader community',
      ctaPrimary: 'Access Presale via Member Area',
      ctaSecondary: 'Learn More'
    },
    trustBadges: ['Education First', 'No Guaranteed Returns', 'Public Transparency', 'DAO-Based Decisions'],
    stages: {
      title: 'Presale Stages',
      subtitle: 'Structured access with clear pricing and supply allocation.',
      items: [
        {
          stage: 'Stage 1',
          title: 'Presale Stage 1',
          description: 'Early community access with utility token allocation.',
          price: '$0.001',
          supply: '200,000,000 TPC',
          status: 'Active'
        },
        {
          stage: 'Stage 2',
          title: 'Presale Stage 2',
          description: 'Extended access with adjusted pricing structure.',
          price: '$0.002',
          supply: '100,000,000 TPC',
          status: 'Upcoming'
        }
      ]
    },
    tokenUtility: {
      title: 'Token Utility',
      items: [
        {
          icon: '🎓',
          title: 'Education Access',
          description: 'Premium trading education resources and tools'
        },
        {
          icon: '🏛️',
          title: 'DAO Governance',
          description: 'Participate in community decision making'
        },
        {
          icon: '👥',
          title: 'Community Privileges',
          description: 'Exclusive member benefits and features'
        },
        {
          icon: '🌐',
          title: 'Ecosystem Utility',
          description: 'Access to platform services and applications'
        }
      ]
    },
    transparency: {
      title: 'Transparency & Trust',
      subtitle: 'Our commitment to clarity and compliance.',
      items: [
        {
          icon: '🎓',
          title: 'Education-First Community',
          description: 'Professional trading education without financial promises'
        },
        {
          icon: '📊',
          title: 'No Guaranteed Returns',
          description: 'Token utility for platform access, not investment vehicle'
        },
        {
          icon: '🔍',
          title: 'Public On-Chain Transparency',
          description: 'All transactions and allocations visible on blockchain'
        },
        {
          icon: '🗳️',
          title: 'DAO-Based Decision Making',
          description: 'Community governance through structured voting'
        }
      ]
    },
    finalCta: {
      title: 'Final Step',
      subtitle: 'Registration required for compliance & transparency',
      buttonText: 'Access Presale via Member Area'
    }
  },
  id: {
    hero: {
      title: 'TPC Presale — Akses Komunitas Awal',
      subtitle: 'Token utilitas untuk pendidikan & komunitas trader berbasis DAO',
      ctaPrimary: 'Akses Presale via Member Area',
      ctaSecondary: 'Pelajari Lebih Lanjut'
    },
    trustBadges: ['Pendidikan Prioritas', 'Tidak Ada Jaminan Pengembalian', 'Transparansi Publik', 'Keputusan Berbasis DAO'],
    stages: {
      title: 'Tahapan Presale',
      subtitle: 'Akses terstruktur dengan harga dan alokasi suplai yang jelas.',
      items: [
        {
          stage: 'Stage 1',
          title: 'Tahapan Presale 1',
          description: 'Akses komunitas awal dengan alokasi token utilitas.',
          price: '$0.001',
          supply: '200,000,000 TPC',
          status: 'Aktif'
        },
        {
          stage: 'Stage 2',
          title: 'Tahapan Presale 2',
          description: 'Akses diperluas dengan struktur harga yang disesuaikan.',
          price: '$0.002',
          supply: '100,000,000 TPC',
          status: 'Akan Datang'
        }
      ]
    },
    tokenUtility: {
      title: 'Utilitas Token',
      items: [
        {
          icon: '🎓',
          title: 'Akses Pendidikan',
          description: 'Sumber daya dan alat trading edukasi premium'
        },
        {
          icon: '🏛️',
          title: 'Tata Kelola DAO',
          description: 'Partisipasi dalam pengambilan keputusan komunitas'
        },
        {
          icon: '👥',
          title: 'Privilegi Komunitas',
          description: 'Benefit dan fitur eksklusif untuk anggota'
        },
        {
          icon: '🌐',
          title: 'Utilitas Ekosistem',
          description: 'Akses ke layanan dan aplikasi platform'
        }
      ]
    },
    transparency: {
      title: 'Transparansi & Kepercayaan',
      subtitle: 'Komitmen kami pada kejelasan dan kepatuhan.',
      items: [
        {
          icon: '🎓',
          title: 'Komunitas Pendidikan Prioritas',
          description: 'Pendidikan trading profesional tanpa janji finansial'
        },
        {
          icon: '📊',
          title: 'Tidak Ada Jaminan Pengembalian',
          description: 'Token utilitas untuk akses platform, bukan kendara investasi'
        },
        {
          icon: '🔍',
          title: 'Transparansi On-Chain Publik',
          description: 'Semua transaksi dan alokasi terlihat di blockchain'
        },
        {
          icon: '🗳️',
          title: 'Keputusan Berbasis DAO',
          description: 'Tata kelola komunitas melalui voting terstruktur'
        }
      ]
    },
    finalCta: {
      title: 'Langkah Terakhir',
      subtitle: 'Registrasi diperlukan untuk kepatuhan dan transparansi',
      buttonText: 'Akses Presale via Member Area'
    }
  }
};

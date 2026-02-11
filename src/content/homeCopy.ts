export type Language = 'en' | 'id';

export const homeCopy: Record<Language, {
  title: string;
  subtitle: string;
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
  };
  sections: {
    identity: {
      title: string;
      description: string;
      points: string[];
    };
    education: {
      title: string;
      description: string;
      points: string[];
    };
    transparency: {
      title: string;
      description: string;
      points: string[];
    };
    community: {
      title: string;
      description: string;
      points: string[];
    };
  };
  cta: {
    primary: string;
    secondary: string;
  };
  disclaimer: string;
}> = {
  id: {
    title: 'TPC — Komunitas Trader Profesional',
    subtitle: 'Komunitas edukasi trading yang berfokus pada transparansi dan etika.',
    hero: {
      badge: 'KOMUNITAS EDUKASI',
      title: 'TPC',
      subtitle: 'Komunitas Trader Profesional',
      description: 'TPC adalah komunitas trader profesional yang berfokus pada edukasi, transparansi, dan etika.'
    },
    sections: {
      identity: {
        title: 'Identitas Komunitas',
        description: 'TPC adalah komunitas trader profesional yang berfokus pada edukasi, transparansi, dan etika.',
        points: [
          'Edukasi trading yang bertanggung jawab',
          'Transparansi dalam semua proses komunitas',
          'Etika dan integritas dalam praktik trading',
          'Perlindungan anggota dari praktik menyesatkan'
        ]
      },
      education: {
        title: 'Program Edukasi',
        description: 'Kami menyediakan materi edukasi trading yang komprehensif dan terstruktur.',
        points: [
          'Pemahaman dasar trading Gold dan Bitcoin',
          'Manajemen risiko yang bertanggung jawab',
          'Analisis teknikal dan fundamental',
          'Psikologi trading yang sehat'
        ]
      },
      transparency: {
        title: 'Transparansi Komunitas',
        description: 'TPC menggunakan teknologi blockchain untuk mendukung transparansi dan pencatatan yang dapat diverifikasi.',
        points: [
          'Pencatatan on-chain untuk semua transaksi',
          'Akses terbuka ke laporan komunitas',
          'Proses pengambilan keputusan yang jelas',
          'Audit rutin untuk memastikan integritas'
        ]
      },
      community: {
        title: 'Nilai Komunitas',
        description: 'TPC tidak menjanjikan hasil, tidak menawarkan skema cepat kaya, dan mendorong literasi risiko.',
        points: [
          'Fokus pada pembelajaran jangka panjang',
          'Tidak ada janji profit atau imbal hasil',
          'Mendorong literasi risiko dan manajemen',
          'Komunitas yang mendukung dan kolaboratif'
        ]
      }
    },
    cta: {
      primary: 'Bergabung dengan Komunitas',
      secondary: 'Pelajari Lebih Lanjut'
    },
    disclaimer: 'Materi bersifat edukatif dan bukan nasihat investasi atau keuangan.'
  },
  en: {
    title: 'TPC — Professional Trader Community',
    subtitle: 'Trading education community focused on transparency and ethics.',
    hero: {
      badge: 'EDUCATION COMMUNITY',
      title: 'TPC',
      subtitle: 'Professional Trader Community',
      description: 'TPC is a professional trader community focused on education, transparency, and ethics.'
    },
    sections: {
      identity: {
        title: 'Community Identity',
        description: 'TPC is a professional trader community focused on education, transparency, and ethics.',
        points: [
          'Responsible trading education',
          'Transparency in all community processes',
          'Ethics and integrity in trading practices',
          'Member protection from misleading practices'
        ]
      },
      education: {
        title: 'Education Program',
        description: 'We provide comprehensive and structured trading education materials.',
        points: [
          'Fundamentals of Gold and Bitcoin trading',
          'Responsible risk management',
          'Technical and fundamental analysis',
          'Healthy trading psychology'
        ]
      },
      transparency: {
        title: 'Community Transparency',
        description: 'TPC uses blockchain technology to support transparency and verifiable record-keeping.',
        points: [
          'On-chain recording for all transactions',
          'Open access to community reports',
          'Clear decision-making processes',
          'Regular audits to ensure integrity'
        ]
      },
      community: {
        title: 'Community Values',
        description: 'TPC does not promise results, does not offer get-rich-quick schemes, and promotes risk literacy.',
        points: [
          'Focus on long-term learning',
          'No profit or return promises',
          'Promoting risk literacy and management',
          'Supportive and collaborative community'
        ]
      }
    },
    cta: {
      primary: 'Join the Community',
      secondary: 'Learn More'
    },
    disclaimer: 'Materials are for educational purposes and not investment or financial advice.'
  }
};

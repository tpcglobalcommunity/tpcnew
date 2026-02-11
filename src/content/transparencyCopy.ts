export type Language = 'en' | 'id';

export const transparencyCopy: Record<Language, {
  title: string;
  subtitle: string;
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
  };
  sections: {
    principles: {
      title: string;
      description: string;
      points: string[];
    };
    technology: {
      title: string;
      description: string;
      points: string[];
    };
    reporting: {
      title: string;
      description: string;
      points: string[];
    };
    verification: {
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
    title: 'Transparansi TPC',
    subtitle: 'Komitmen kami terhadap transparansi penuh dalam semua operasi komunitas.',
    hero: {
      badge: 'TRANSPARANSI',
      title: 'Transparansi TPC',
      subtitle: 'Komitmen Transparansi Penuh',
      description: 'TPC adalah komunitas trader profesional yang berfokus pada edukasi, transparansi, dan etika.'
    },
    sections: {
      principles: {
        title: 'Prinsip Transparansi',
        description: 'Kami berkomitmen pada transparansi sebagai fondasi kepercayaan komunitas.',
        points: [
          'Akses terbuka ke informasi komunitas',
          'Pencatatan yang akurat dan dapat diverifikasi',
          'Tidak ada informasi yang disembunyikan',
          'Keterbukaan dalam pengambilan keputusan'
        ]
      },
      technology: {
        title: 'Teknologi Transparansi',
        description: 'TPC menggunakan teknologi blockchain untuk mendukung transparansi dan pencatatan yang dapat diverifikasi.',
        points: [
          'Pencatatan on-chain untuk semua transaksi',
          'Data yang tidak dapat diubah setelah dicatat',
          'Akses publik ke riwayat transaksi',
          'Verifikasi independen oleh pihak ketiga'
        ]
      },
      reporting: {
        title: 'Laporan Komunitas',
        description: 'Kami menyediakan laporan rutin dan terperinci tentang semua aspek komunitas.',
        points: [
          'Laporan keuangan bulanan',
          'Statistik partisipasi anggota',
          'Update perkembangan program',
          'Analisis kinerja komunitas'
        ]
      },
      verification: {
        title: 'Verifikasi Independen',
        description: 'TPC tidak menjanjikan hasil, tidak menawarkan skema cepat kaya, dan mendorong literasi risiko.',
        points: [
          'Audit rutin oleh auditor independen',
          'Verifikasi oleh komunitas anggota',
          'Standar transparansi industri',
          'Kepatuhan terhadap regulasi yang berlaku'
        ]
      }
    },
    cta: {
      primary: 'Lihat Laporan Kami',
      secondary: 'Verifikasi Data'
    },
    disclaimer: 'Materi bersifat edukatif dan bukan nasihat investasi atau keuangan.'
  },
  en: {
    title: 'TPC Transparency',
    subtitle: 'Our commitment to full transparency in all community operations.',
    hero: {
      badge: 'TRANSPARENCY',
      title: 'TPC Transparency',
      subtitle: 'Full Transparency Commitment',
      description: 'TPC is a professional trader community focused on education, transparency, and ethics.'
    },
    sections: {
      principles: {
        title: 'Transparency Principles',
        description: 'We are committed to transparency as the foundation of community trust.',
        points: [
          'Open access to community information',
          'Accurate and verifiable record-keeping',
          'No hidden information',
          'Openness in decision-making'
        ]
      },
      technology: {
        title: 'Transparency Technology',
        description: 'TPC uses blockchain technology to support transparency and verifiable record-keeping.',
        points: [
          'On-chain recording for all transactions',
          'Immutable data once recorded',
          'Public access to transaction history',
          'Independent third-party verification'
        ]
      },
      reporting: {
        title: 'Community Reports',
        description: 'We provide regular and detailed reports on all aspects of the community.',
        points: [
          'Monthly financial reports',
          'Member participation statistics',
          'Program development updates',
          'Community performance analysis'
        ]
      },
      verification: {
        title: 'Independent Verification',
        description: 'TPC does not promise results, does not offer get-rich-quick schemes, and promotes risk literacy.',
        points: [
          'Regular audits by independent auditors',
          'Verification by community members',
          'Industry transparency standards',
          'Compliance with applicable regulations'
        ]
      }
    },
    cta: {
      primary: 'View Our Reports',
      secondary: 'Verify Data'
    },
    disclaimer: 'Materials are for educational purposes and not investment or financial advice.'
  }
};

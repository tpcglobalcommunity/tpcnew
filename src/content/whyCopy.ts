export type Language = 'en' | 'id';

export const whyCopy: Record<Language, {
  title: string;
  subtitle: string;
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
  };
  sections: {
    mission: {
      title: string;
      description: string;
      points: string[];
    };
    approach: {
      title: string;
      description: string;
      points: string[];
    };
    technology: {
      title: string;
      description: string;
      points: string[];
    };
    protection: {
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
    title: 'Mengapa Memilih TPC',
    subtitle: 'Pemahaman mendalam tentang komunitas trading profesional yang transparan dan edukatif.',
    hero: {
      badge: 'TENTANG KAMI',
      title: 'Mengapa Memilih TPC',
      subtitle: 'Komunitas Trading Profesional yang Berbeda',
      description: 'TPC adalah komunitas trader profesional yang berfokus pada edukasi, transparansi, dan etika.'
    },
    sections: {
      mission: {
        title: 'Misi Kami',
        description: 'Kami berkomitmen untuk menciptakan ekosistem trading yang lebih transparan dan edukatif.',
        points: [
          'Meningkatkan literasi trading di Indonesia',
          'Memberikan edukasi yang berkualitas dan terstruktur',
          'Membangun komunitas yang berbasis integritas',
          'Melindungi anggota dari praktik menyesatkan'
        ]
      },
      approach: {
        title: 'Pendekatan Kami',
        description: 'Kami menggunakan pendekatan yang berbeda dalam edukasi trading.',
        points: [
          'Fokus pada pemahaman konsep, bukan hasil instan',
          'Mendorong pembelajaran bertahap dan sistematis',
          'Menekankan pentingnya manajemen risiko',
          'Membangun mentalitas trading yang sehat'
        ]
      },
      technology: {
        title: 'Teknologi Kami',
        description: 'TPC menggunakan teknologi blockchain untuk mendukung transparansi dan pencatatan yang dapat diverifikasi.',
        points: [
          'Pencatatan transaksi yang transparan dan dapat diaudit',
          'Sistem yang terdesentralisasi untuk keamanan',
          'Akses terbuka ke data komunitas',
          'Verifikasi independen untuk semua proses'
        ]
      },
      protection: {
        title: 'Perlindungan Anggota',
        description: 'TPC tidak menjanjikan hasil, tidak menawarkan skema cepat kaya, dan mendorong literasi risiko.',
        points: [
          'Tidak ada janji profit atau imbal hasil',
          'Edukasi tentang risiko trading yang jujur',
          'Melindungi dari praktik penipuan dan scam',
          'Mendorong keputusan trading yang informasi'
        ]
      }
    },
    cta: {
      primary: 'Bergabung dengan Komunitas',
      secondary: 'Pelajari Program Kami'
    },
    disclaimer: 'Materi bersifat edukatif dan bukan nasihat investasi atau keuangan.'
  },
  en: {
    title: 'Why Choose TPC',
    subtitle: 'Deep understanding of a transparent and educational professional trading community.',
    hero: {
      badge: 'ABOUT US',
      title: 'Why Choose TPC',
      subtitle: 'A Different Professional Trading Community',
      description: 'TPC is a professional trader community focused on education, transparency, and ethics.'
    },
    sections: {
      mission: {
        title: 'Our Mission',
        description: 'We are committed to creating a more transparent and educational trading ecosystem.',
        points: [
          'Improving trading literacy in Indonesia',
          'Providing quality and structured education',
          'Building an integrity-based community',
          'Protecting members from misleading practices'
        ]
      },
      approach: {
        title: 'Our Approach',
        description: 'We use a different approach to trading education.',
        points: [
          'Focus on concept understanding, not instant results',
          'Encouraging systematic and progressive learning',
          'Emphasizing the importance of risk management',
          'Building healthy trading mentality'
        ]
      },
      technology: {
        title: 'Our Technology',
        description: 'TPC uses blockchain technology to support transparency and verifiable record-keeping.',
        points: [
          'Transparent and auditable transaction recording',
          'Decentralized system for security',
          'Open access to community data',
          'Independent verification for all processes'
        ]
      },
      protection: {
        title: 'Member Protection',
        description: 'TPC does not promise results, does not offer get-rich-quick schemes, and promotes risk literacy.',
        points: [
          'No profit or return promises',
          'Honest education about trading risks',
          'Protection from fraud and scam practices',
          'Encouraging informed trading decisions'
        ]
      }
    },
    cta: {
      primary: 'Join the Community',
      secondary: 'Learn Our Programs'
    },
    disclaimer: 'Materials are for educational purposes and not investment or financial advice.'
  }
};

export type Language = 'en' | 'id';

export const academyCopy: Record<Language, {
  title: string;
  subtitle: string;
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
  };
  sections: {
    curriculum: {
      title: string;
      description: string;
      modules: {
        title: string;
        description: string;
        topics: string[];
      }[];
    };
    methodology: {
      title: string;
      description: string;
      points: string[];
    };
    outcomes: {
      title: string;
      description: string;
      points: string[];
    };
    requirements: {
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
    title: 'TPC Academy',
    subtitle: 'Program edukasi trading yang komprehensif dan terstruktur untuk trader profesional.',
    hero: {
      badge: 'PROGRAM EDUKASI',
      title: 'TPC Academy',
      subtitle: 'Program Edukasi Trading Profesional',
      description: 'TPC adalah komunitas trader profesional yang berfokus pada edukasi, transparansi, dan etika.'
    },
    sections: {
      curriculum: {
        title: 'Kurikulum Kami',
        description: 'Program edukasi kami dirancang secara sistematis untuk membangun pemahaman trading yang solid.',
        modules: [
          {
            title: 'Modul 1: Dasar-Dasar Trading',
            description: 'Pengenalan konsep fundamental trading',
            topics: [
              'Pengertian trading dan pasar keuangan',
              'Jenis-jenis aset trading',
              'Analisis pasar dasar',
              'Psikologi trading pemula'
            ]
          },
          {
            title: 'Modul 2: Analisis Teknikal',
            description: 'Membaca chart dan indikator teknikal',
            topics: [
              'Candlestick dan price action',
              'Support dan resistance',
              'Indikator teknikal populer',
              'Pattern recognition'
            ]
          },
          {
            title: 'Modul 3: Manajemen Risiko',
            description: 'Pengelolaan risiko yang bertanggung jawab',
            topics: [
              'Position sizing yang tepat',
              'Stop loss dan take profit',
              'Risk-to-reward ratio',
              'Portfolio diversifikasi'
            ]
          },
          {
            title: 'Modul 4: Trading Lanjutan',
            description: 'Strategi trading yang lebih kompleks',
            topics: [
              'Multi-timeframe analysis',
              'Trading plan development',
              'Backtesting strategi',
              'Performance evaluation'
            ]
          }
        ]
      },
      methodology: {
        title: 'Metodologi Pembelajaran',
        description: 'Kami menggunakan pendekatan pembelajaran yang interaktif dan praktis.',
        points: [
          'Teori combined dengan praktik langsung',
          'Case study dari pengalaman nyata',
          'Simulasi trading dengan kondisi real',
          'Mentoring oleh trader berpengalaman'
        ]
      },
      outcomes: {
        title: 'Hasil Pembelajaran',
        description: 'Setelah menyelesaikan program, peserta diharapkan mampu:',
        points: [
          'Memahami konsep trading secara fundamental',
          'Menganalisis pasar dengan berbagai metode',
          'Mengelola risiko trading dengan bijak',
          'Mengembangkan strategi trading personal',
          'Mengambil keputusan trading yang rasional'
        ]
      },
      requirements: {
        title: 'Persyaratan Peserta',
        description: 'Program ini dirancang untuk siapa saja yang ingin belajar trading secara serius.',
        points: [
          'Tidak ada pengalaman trading sebelumnya',
          'Kesiapan untuk belajar secara disiplin',
          'Komitmen waktu untuk pembelajaran',
          'Perangkat komputer atau smartphone',
          'Koneksi internet yang stabil'
        ]
      }
    },
    cta: {
      primary: 'Daftar Sekarang',
      secondary: 'Unduh Kurikulum'
    },
    disclaimer: 'Materi bersifat edukatif dan bukan nasihat investasi atau keuangan.'
  },
  en: {
    title: 'TPC Academy',
    subtitle: 'Comprehensive and structured trading education program for professional traders.',
    hero: {
      badge: 'EDUCATION PROGRAM',
      title: 'TPC Academy',
      subtitle: 'Professional Trading Education Program',
      description: 'TPC is a professional trader community focused on education, transparency, and ethics.'
    },
    sections: {
      curriculum: {
        title: 'Our Curriculum',
        description: 'Our education program is systematically designed to build solid trading understanding.',
        modules: [
          {
            title: 'Module 1: Trading Fundamentals',
            description: 'Introduction to fundamental trading concepts',
            topics: [
              'Understanding trading and financial markets',
              'Types of trading assets',
              'Basic market analysis',
              'Beginner trading psychology'
            ]
          },
          {
            title: 'Module 2: Technical Analysis',
            description: 'Reading charts and technical indicators',
            topics: [
              'Candlesticks and price action',
              'Support and resistance',
              'Popular technical indicators',
              'Pattern recognition'
            ]
          },
          {
            title: 'Module 3: Risk Management',
            description: 'Responsible risk management',
            topics: [
              'Proper position sizing',
              'Stop loss and take profit',
              'Risk-to-reward ratio',
              'Portfolio diversification'
            ]
          },
          {
            title: 'Module 4: Advanced Trading',
            description: 'More complex trading strategies',
            topics: [
              'Multi-timeframe analysis',
              'Trading plan development',
              'Strategy backtesting',
              'Performance evaluation'
            ]
          }
        ]
      },
      methodology: {
        title: 'Learning Methodology',
        description: 'We use interactive and practical learning approaches.',
        points: [
          'Theory combined with direct practice',
          'Real-world case studies',
          'Real-market trading simulations',
          'Mentoring by experienced traders'
        ]
      },
      outcomes: {
        title: 'Learning Outcomes',
        description: 'After completing the program, participants are expected to be able to:',
        points: [
          'Understand trading concepts fundamentally',
          'Analyze markets with various methods',
          'Manage trading risks wisely',
          'Develop personal trading strategies',
          'Make rational trading decisions'
        ]
      },
      requirements: {
        title: 'Participant Requirements',
        description: 'This program is designed for anyone who wants to learn trading seriously.',
        points: [
          'No prior trading experience required',
          'Readiness to learn disciplinedly',
          'Time commitment for learning',
          'Computer or smartphone device',
          'Stable internet connection'
        ]
      }
    },
    cta: {
      primary: 'Enroll Now',
      secondary: 'Download Curriculum'
    },
    disclaimer: 'Materials are for educational purposes and not investment or financial advice.'
  }
};

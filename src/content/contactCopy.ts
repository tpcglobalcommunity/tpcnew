export type Language = 'en' | 'id';

export const contactCopy: Record<Language, {
  title: string;
  subtitle: string;
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
  };
  sections: {
    support: {
      title: string;
      description: string;
      channels: {
        name: string;
        description: string;
        action: string;
      }[];
    };
    community: {
      title: string;
      description: string;
      platforms: {
        name: string;
        description: string;
        action: string;
      }[];
    };
    reporting: {
      title: string;
      description: string;
      types: {
        name: string;
        description: string;
        action: string;
      }[];
    };
    response: {
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
    title: 'Hubungi TPC',
    subtitle: 'Cara terbaik untuk terhubung dengan komunitas dan mendapatkan dukungan.',
    hero: {
      badge: 'KONTAK',
      title: 'Hubungi TPC',
      subtitle: 'Terhubung dengan Komunitas Kami',
      description: 'TPC adalah komunitas trader profesional yang berfokus pada edukasi, transparansi, dan etika.'
    },
    sections: {
      support: {
        title: 'Dukungan Teknis',
        description: 'Kami menyediakan berbagai saluran untuk dukungan teknis dan pertanyaan umum.',
        channels: [
          {
            name: 'Email Support',
            description: 'Untuk pertanyaan teknis dan bantuan akun',
            action: 'support@tpcglobal.io'
          },
          {
            name: 'Help Center',
            description: 'FAQ dan panduan self-service',
            action: 'Buka Help Center'
          },
          {
            name: 'Community Forum',
            description: 'Diskusi dengan anggota lain',
            action: 'Gabung Forum'
          }
        ]
      },
      community: {
        title: 'Komunitas',
        description: 'Bergabung dengan komunitas kami di berbagai platform.',
        platforms: [
          {
            name: 'Telegram',
            description: 'Diskusi real-time dengan anggota',
            action: 'Gabung Telegram'
          },
          {
            name: 'Discord',
            description: 'Komunitas edukasi dan networking',
            action: 'Gabung Discord'
          },
          {
            name: 'Twitter',
            description: 'Update dan pengumuman resmi',
            action: 'Follow @TPCGlobal'
          }
        ]
      },
      reporting: {
        title: 'Laporan Masalah',
        description: 'TPC tidak menjanjikan hasil, tidak menawarkan skema cepat kaya, dan mendorong literasi risiko.',
        types: [
          {
            name: 'Laporan Scam',
            description: 'Laporan penipuan yang mengatasnamakan TPC',
            action: 'Laporkan Scam'
          },
          {
            name: 'Pelanggaran Komunitas',
            description: 'Laporan pelanggaran etika atau aturan',
            action: 'Laporkan Pelanggaran'
          },
          {
            name: 'Bug Report',
            description: 'Laporan masalah teknis platform',
            action: 'Laporkan Bug'
          }
        ]
      },
      response: {
        title: 'Waktu Respons',
        description: 'Kami berkomitmen untuk memberikan respons yang cepat dan membantu.',
        points: [
          'Email: 1-2 hari kerja',
          'Forum: 4-8 jam',
          'Scam report: 24 jam',
          'Urgent issues: 2-4 jam'
        ]
      }
    },
    cta: {
      primary: 'Kirim Pesan',
      secondary: 'Bergabung dengan Komunitas'
    },
    disclaimer: 'Materi bersifat edukatif dan bukan nasihat investasi atau keuangan.'
  },
  en: {
    title: 'Contact TPC',
    subtitle: 'Best ways to connect with the community and get support.',
    hero: {
      badge: 'CONTACT',
      title: 'Contact TPC',
      subtitle: 'Connect with Our Community',
      description: 'TPC is a professional trader community focused on education, transparency, and ethics.'
    },
    sections: {
      support: {
        title: 'Technical Support',
        description: 'We provide various channels for technical support and general questions.',
        channels: [
          {
            name: 'Email Support',
            description: 'For technical questions and account assistance',
            action: 'support@tpcglobal.io'
          },
          {
            name: 'Help Center',
            description: 'FAQ and self-service guides',
            action: 'Open Help Center'
          },
          {
            name: 'Community Forum',
            description: 'Discussions with other members',
            action: 'Join Forum'
          }
        ]
      },
      community: {
        title: 'Community',
        description: 'Join our community on various platforms.',
        platforms: [
          {
            name: 'Telegram',
            description: 'Real-time discussions with members',
            action: 'Join Telegram'
          },
          {
            name: 'Discord',
            description: 'Education and networking community',
            action: 'Join Discord'
          },
          {
            name: 'Twitter',
            description: 'Official updates and announcements',
            action: 'Follow @TPCGlobal'
          }
        ]
      },
      reporting: {
        title: 'Report Issues',
        description: 'TPC does not promise results, does not offer get-rich-quick schemes, and promotes risk literacy.',
        types: [
          {
            name: 'Scam Report',
            description: 'Report scams using TPC name',
            action: 'Report Scam'
          },
          {
            name: 'Community Violation',
            description: 'Report ethics or rules violations',
            action: 'Report Violation'
          },
          {
            name: 'Bug Report',
            description: 'Report platform technical issues',
            action: 'Report Bug'
          }
        ]
      },
      response: {
        title: 'Response Times',
        description: 'We are committed to providing quick and helpful responses.',
        points: [
          'Email: 1-2 business days',
          'Forum: 4-8 hours',
          'Scam report: 24 hours',
          'Urgent issues: 2-4 hours'
        ]
      }
    },
    cta: {
      primary: 'Send Message',
      secondary: 'Join Community'
    },
    disclaimer: 'Materials are for educational purposes and not investment or financial advice.'
  }
};

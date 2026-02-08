export type Language = 'en' | 'id';

export const daoCopy: Record<Language, {
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  trustBadges: string[];
  summary: {
    title: string;
    items: string[];
  };
  features: Array<{
    title: string;
    description: string;
    icon: string;
    status?: string;
  }>;
  howItWorks: {
    title: string;
    subtitle: string;
    steps: string[];
  };
  transparency: {
    title: string;
    subtitle: string;
    items: string[];
  };
  stats: Array<{
    label: string;
    value: string;
    status?: string;
  }>;
  finalCta: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
}> = {
  en: {
    hero: {
      title: 'DAO Governance',
      subtitle: 'Community-driven platform governance and decision making—prioritizing transparency, accountability, and compliance.',
      ctaPrimary: 'View DAO Dashboard',
      ctaSecondary: 'DAO features are being developed gradually. Information will be updated transparently.'
    },
    trustBadges: ['Community Led', 'Transparent Voting', 'Secure Governance'],
    summary: {
      title: 'What is DAO Lite?',
      items: [
        'DAO Lite = community governance (not investment return promises)',
        'Proposals are open and publicly reviewable',
        'Voting is documented and auditable',
        'Decision implementation is monitored through clear status'
      ]
    },
    features: [
      {
        title: 'Proposal System',
        description: 'Community members can submit structured proposals.',
        icon: '📋'
      },
      {
        title: 'Open Discussion Process',
        description: 'Proposals are discussed first for more mature decisions.',
        icon: '💬'
      },
      {
        title: 'Transparent Voting',
        description: 'Voting results are displayed clearly and traceable.',
        icon: '🗳️'
      },
      {
        title: 'Implementation Tracking',
        description: 'Approved decisions are monitored for progress until completion.',
        icon: '📊'
      }
    ],
    howItWorks: {
      title: 'How It Works',
      subtitle: 'Transparent community governance process.',
      steps: [
        'Submit Proposal',
        'Discussion & Review',
        'Voting',
        'Implementation & Reporting'
      ]
    },
    transparency: {
      title: 'Transparency & Limitations',
      subtitle: 'Our commitment to clarity and compliance.',
      items: [
        'TPC Global prioritizes education and community governance.',
        'No profit guarantees or return promises.',
        'Community decisions are recorded and displayed transparently.',
        'Feature changes are implemented gradually and announced through official channels.'
      ]
    },
    stats: [
      { label: 'Active Proposals', value: 'Not Available', status: 'Coming Soon' },
      { label: 'Total Votes Cast', value: 'Not Available', status: 'Coming Soon' },
      { label: 'Implementation Rate', value: 'Not Available', status: 'Coming Soon' }
    ],
    finalCta: {
      title: 'Enter DAO Dashboard',
      subtitle: 'Use official channels for updates and announcements.',
      buttonText: 'Enter DAO Dashboard'
    }
  },
  id: {
    hero: {
      title: 'Tata Kelola DAO (DAO Lite)',
      subtitle: 'Mekanisme pengambilan keputusan berbasis komunitas untuk arah pengembangan TPC Global—mengutamakan transparansi, akuntabilitas, dan kepatuhan.',
      ctaPrimary: 'Lihat Dashboard DAO',
      ctaSecondary: 'Fitur DAO dapat berkembang bertahap. Informasi akan diperbarui secara transparan.'
    },
    trustBadges: ['Dipimpin Komunitas', 'Voting Transparan', 'Tata Kelola Aman'],
    summary: {
      title: 'Apa itu DAO Lite?',
      items: [
        'DAO Lite = tata kelola komunitas (bukan janji hasil investasi)',
        'Proposal terbuka dan dapat ditinjau publik',
        'Voting terdokumentasi dan dapat diaudit',
        'Implementasi keputusan dipantau melalui status yang jelas'
      ]
    },
    features: [
      {
        title: 'Sistem Proposal',
        description: 'Anggota komunitas dapat mengajukan usulan yang terstruktur.',
        icon: '📋'
      },
      {
        title: 'Proses Diskusi Terbuka',
        description: 'Usulan dibahas terlebih dahulu agar keputusan lebih matang.',
        icon: '💬'
      },
      {
        title: 'Voting Transparan',
        description: 'Hasil voting ditampilkan secara jelas dan dapat ditelusuri.',
        icon: '🗳️'
      },
      {
        title: 'Pelacakan Implementasi',
        description: 'Keputusan yang disetujui dipantau progresnya hingga selesai.',
        icon: '📊'
      }
    ],
    howItWorks: {
      title: 'Cara Kerja',
      subtitle: 'Proses tata kelola komunitas yang transparan.',
      steps: [
        'Ajukan Proposal',
        'Diskusi & Tinjau',
        'Voting',
        'Implementasi & Pelaporan'
      ]
    },
    transparency: {
      title: 'Transparansi & Batasan',
      subtitle: 'Komitmen kami pada kejelasan dan kepatuhan.',
      items: [
        'TPC Global mengedepankan edukasi dan tata kelola komunitas.',
        'Tidak ada jaminan keuntungan atau imbal hasil.',
        'Keputusan komunitas dicatat dan ditampilkan secara transparan.',
        'Perubahan fitur dilakukan bertahap dan diumumkan di kanal resmi.'
      ]
    },
    stats: [
      { label: 'Proposal Aktif', value: 'Belum tersedia', status: 'Segera' },
      { label: 'Total Voting', value: 'Belum tersedia', status: 'Segera' },
      { label: 'Tingkat Implementasi', value: 'Belum tersedia', status: 'Segera' }
    ],
    finalCta: {
      title: 'Masuk ke Dashboard DAO',
      subtitle: 'Gunakan kanal resmi untuk pembaruan dan pengumuman.',
      buttonText: 'Masuk ke Dashboard DAO'
    }
  }
};

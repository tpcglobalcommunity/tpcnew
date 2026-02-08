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
  tokenInfo: {
    title: string;
    subtitle: string;
    stats: Array<{
      label: string;
      value: string;
    }>;
  };
  importantNotes: {
    title: string;
    items: string[];
  };
}> = {
  en: {
    hero: {
      title: 'TPC Presale',
      subtitle: 'Join exclusive presale and be part of future of trading education.',
      ctaPrimary: 'Join Presale',
      ctaSecondary: 'Learn More'
    },
    trustBadges: ['No Profit Promises', 'Education First', 'Transparent Operations'],
    stages: {
      title: 'Presale Stages',
      subtitle: 'Multiple stages with different benefits and pricing.',
      items: [
        {
          stage: 'Stage 1',
          title: 'Early Bird',
          description: 'Exclusive early access with bonus tokens.',
          price: '0.001 ETH',
          supply: '1,000,000 TPC',
          status: 'Active'
        },
        {
          stage: 'Stage 2',
          title: 'Public Sale',
          description: 'Open to everyone with standard pricing.',
          price: '0.002 ETH',
          supply: '2,000,000 TPC',
          status: 'Upcoming'
        }
      ]
    },
    tokenInfo: {
      title: 'Token Information',
      subtitle: 'Key details about TPC token.',
      stats: [
        { label: 'Token Name', value: 'TPC Token' },
        { label: 'Symbol', value: 'TPC' },
        { label: 'Total Supply', value: '3,000,000 TPC' },
        { label: 'Network', value: 'Ethereum' }
      ]
    },
    importantNotes: {
      title: 'Important Notes',
      items: [
        'No profit guarantees or ROI promises.',
        'Always verify official contract addresses.',
        'Trading involves risk, invest responsibly.'
      ]
    }
  },
  id: {
    hero: {
      title: 'Presale TPC',
      subtitle: 'Bergabunglah dengan presale eksklusif dan menjadi bagian dari masa depan pendidikan trading.',
      ctaPrimary: 'Bergabung Presale',
      ctaSecondary: 'Pelajari Lebih Lanjut'
    },
    trustBadges: ['Tidak Ada Janji Profit', 'Pendidikan Prioritas', 'Operasi Transparan'],
    stages: {
      title: 'Tahapan Presale',
      subtitle: 'Beberapa tahap dengan manfaat dan harga yang berbeda.',
      items: [
        {
          stage: 'Tahap 1',
          title: 'Early Bird',
          description: 'Akses awal eksklusif dengan token bonus.',
          price: '0.001 ETH',
          supply: '1.000.000 TPC',
          status: 'Aktif'
        },
        {
          stage: 'Tahap 2',
          title: 'Penjualan Publik',
          description: 'Terbuka untuk semua dengan harga standar.',
          price: '0.002 ETH',
          supply: '2.000.000 TPC',
          status: 'Akan Datang'
        }
      ]
    },
    tokenInfo: {
      title: 'Informasi Token',
      subtitle: 'Detail penting tentang token TPC.',
      stats: [
        { label: 'Nama Token', value: 'TPC Token' },
        { label: 'Simbol', value: 'TPC' },
        { label: 'Total Suplai', value: '3.000.000 TPC' },
        { label: 'Jaringan', value: 'Ethereum' }
      ]
    },
    importantNotes: {
      title: 'Catatan Penting',
      items: [
        'Tidak ada jaminan profit atau janji ROI.',
        'Selalu verifikasi alamat kontrak resmi.',
        'Trading melibatkan risiko, investasi dengan bertanggung jawab.'
      ]
    }
  }
};

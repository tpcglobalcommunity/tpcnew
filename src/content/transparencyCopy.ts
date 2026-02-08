export type Language = 'en' | 'id';

export const transparencyCopy: Record<Language, {
  hero: {
    title: string;
    subtitle: string;
  };
  trustBadges: string[];
  wallets: {
    title: string;
    subtitle: string;
    items: Array<{
      label: string;
      address: string;
      explorer: string;
    }>;
  };
  contracts: {
    title: string;
    subtitle: string;
    stats: Array<{
      label: string;
      value: string;
    }>;
  };
  notice: {
    title: string;
    subtitle: string;
    description: string;
  };
}> = {
  en: {
    hero: {
      title: 'Transparency & Trust',
      subtitle: 'Complete transparency in all operations and fund management.'
    },
    trustBadges: ['On-Chain Verification', 'Regular Audits', 'Community Oversight'],
    wallets: {
      title: 'Wallet Addresses',
      subtitle: 'All official wallet addresses for transparency.',
      items: [
        {
          label: 'Presale Wallet',
          address: '0x1234567890123456789012345678901234',
          explorer: 'https://etherscan.io/address/0x1234567890123456789012345678901234'
        },
        {
          label: 'Treasury Wallet',
          address: '0x0987654321098765432109876543210987',
          explorer: 'https://etherscan.io/address/0x0987654321098765432109876543210987'
        },
        {
          label: 'Liquidity Pool',
          address: '0x1122334455667788990011223344556677',
          explorer: 'https://etherscan.io/address/0x1122334455667788990011223344556677'
        }
      ]
    },
    contracts: {
      title: 'Contract Information',
      subtitle: 'Smart contract details and verification.',
      stats: [
        { label: 'Token Contract', value: '0xABC123DEF456GHI789' },
        { label: 'Presale Contract', value: '0xDEF456GHI789JKL012' },
        { label: 'Network', value: 'Ethereum Mainnet' }
      ]
    },
    notice: {
      title: 'Security Notice',
      subtitle: 'Always verify addresses from official sources only.',
      description: 'Never trust DMs or unofficial links. Always verify contract addresses on this page before sending funds.'
    }
  },
  id: {
    hero: {
      title: 'Transparansi & Kepercayaan',
      subtitle: 'Transparansi penuh dalam semua operasi dan manajemen dana.'
    },
    trustBadges: ['Verifikasi On-Chain', 'Audit Berkala', 'Pengawasan Komunitas'],
    wallets: {
      title: 'Alamat Wallet',
      subtitle: 'Semua alamat wallet resmi untuk transparansi.',
      items: [
        {
          label: 'Wallet Presale',
          address: '0x1234567890123456789012345678901234',
          explorer: 'https://etherscan.io/address/0x1234567890123456789012345678901234'
        },
        {
          label: 'Wallet Treasury',
          address: '0x0987654321098765432109876543210987',
          explorer: 'https://etherscan.io/address/0x0987654321098765432109876543210987'
        },
        {
          label: 'Pool Likuiditas',
          address: '0x1122334455667788990011223344556677',
          explorer: 'https://etherscan.io/address/0x1122334455667788990011223344556677'
        }
      ]
    },
    contracts: {
      title: 'Informasi Kontrak',
      subtitle: 'Detail kontrak pintar dan verifikasi.',
      stats: [
        { label: 'Kontrak Token', value: '0xABC123DEF456GHI789' },
        { label: 'Kontrak Presale', value: '0xDEF456GHI789JKL012' },
        { label: 'Jaringan', value: 'Ethereum Mainnet' }
      ]
    },
    notice: {
      title: 'Pemberitahuan Keamanan',
      subtitle: 'Selalu verifikasi alamat dari sumber resmi saja.',
      description: 'Jangan pernah percaya DM atau link tidak resmi. Selalu verifikasi alamat kontrak di halaman ini sebelum mengirim dana.'
    }
  }
};

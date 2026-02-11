export type Language = 'en' | 'id';

export const faqCopy: Record<Language, {
  title: string;
  subtitle: string;
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
  cta: {
    primary: string;
    secondary: string;
  };
  disclaimer: string;
}> = {
  id: {
    title: 'FAQ — TPC',
    subtitle: 'Pertanyaan umum seputar komunitas, transparansi, dan prinsip edukasi TPC.',
    hero: {
      badge: 'FAQ',
      title: 'FAQ — TPC',
      subtitle: 'Pertanyaan Umum Seputar Komunitas',
      description: 'TPC adalah komunitas trader profesional yang berfokus pada edukasi, transparansi, dan etika.'
    },
    faqs: [
      {
        question: 'Apa itu TPC?',
        answer: 'TPC adalah komunitas trader profesional yang berfokus pada edukasi, transparansi, dan etika dalam trading.'
      },
      {
        question: 'Apakah TPC menjanjikan profit?',
        answer: 'Tidak. TPC tidak menjanjikan hasil, tidak menawarkan skema cepat kaya, dan mendorong literasi risiko.'
      },
      {
        question: 'Apa yang dipelajari di TPC Academy?',
        answer: 'Kami menyediakan edukasi trading yang komprehensif, mulai dari dasar hingga strategi lanjutan dengan fokus pada manajemen risiko.'
      },
      {
        question: 'Bagaimana TPC menjaga transparansi?',
        answer: 'TPC menggunakan teknologi blockchain untuk mendukung transparansi dan pencatatan yang dapat diverifikasi.'
      },
      {
        question: 'Apakah TPC adalah produk investasi?',
        answer: 'Tidak. TPC adalah komunitas edukasi, bukan produk investasi. Materi bersifat edukatif dan bukan nasihat investasi atau keuangan.'
      },
      {
        question: 'Siapa yang bisa bergabung dengan TPC?',
        answer: 'Siapa saja yang ingin belajar trading secara bertanggung jawab dan menghargai proses edukasi.'
      },
      {
        question: 'Bagaimana cara bergabung dengan TPC?',
        answer: 'Anda dapat bergabung melalui proses pendaftaran yang tersedia di platform kami.'
      },
      {
        question: 'Apakah ada biaya untuk bergabung?',
        answer: 'Informasi biaya partisipasi tersedia di halaman presale dengan detail yang transparan.'
      },
      {
        question: 'Bagaimana TPC melindungi anggota dari scam?',
        answer: 'Kami menyediakan edukasi tentang risiko, transparansi penuh, dan tidak ada janji profit yang tidak realistis.'
      },
      {
        question: 'Apa yang membuat TPC berbeda dari komunitas lain?',
        answer: 'Fokus kami pada edukasi bertanggung jawab, transparansi teknologi blockchain, dan komitmen terhadap etika trading.'
      }
    ],
    cta: {
      primary: 'Bergabung dengan Komunitas',
      secondary: 'Pelajari Lebih Lanjut'
    },
    disclaimer: 'Materi bersifat edukatif dan bukan nasihat investasi atau keuangan.'
  },
  en: {
    title: 'FAQ — TPC',
    subtitle: 'Common questions about community, transparency, and educational principles of TPC.',
    hero: {
      badge: 'FAQ',
      title: 'FAQ — TPC',
      subtitle: 'Common Questions About Community',
      description: 'TPC is a professional trader community focused on education, transparency, and ethics.'
    },
    faqs: [
      {
        question: 'What is TPC?',
        answer: 'TPC is a professional trader community focused on education, transparency, and ethics in trading.'
      },
      {
        question: 'Does TPC promise profits?',
        answer: 'No. TPC does not promise results, does not offer get-rich-quick schemes, and promotes risk literacy.'
      },
      {
        question: 'What is learned at TPC Academy?',
        answer: 'We provide comprehensive trading education, from fundamentals to advanced strategies with focus on risk management.'
      },
      {
        question: 'How does TPC maintain transparency?',
        answer: 'TPC uses blockchain technology to support transparency and verifiable record-keeping.'
      },
      {
        question: 'Is TPC an investment product?',
        answer: 'No. TPC is an education community, not an investment product. Materials are for educational purposes and not investment or financial advice.'
      },
      {
        question: 'Who can join TPC?',
        answer: 'Anyone who wants to learn trading responsibly and values the educational process.'
      },
      {
        question: 'How to join TPC?',
        answer: 'You can join through the registration process available on our platform.'
      },
      {
        question: 'Are there fees to join?',
        answer: 'Participation fee information is available on the presale page with transparent details.'
      },
      {
        question: 'How does TPC protect members from scams?',
        answer: 'We provide risk education, full transparency, and no unrealistic profit promises.'
      },
      {
        question: 'What makes TPC different from other communities?',
        answer: 'Our focus on responsible education, blockchain transparency, and commitment to trading ethics.'
      }
    ],
    cta: {
      primary: 'Join the Community',
      secondary: 'Learn More'
    },
    disclaimer: 'Materials are for educational purposes and not investment or financial advice.'
  }
};

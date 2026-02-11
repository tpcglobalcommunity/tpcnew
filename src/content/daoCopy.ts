export type Language = 'en' | 'id';

export const daoCopy: Record<Language, {
  hero: {
    title: string;
    subtitle: string;
    disclaimer: string;
    cta: string;
  };
  sections: {
    governance: {
      title: string;
      description: string;
    };
    participation: {
      title: string;
      description: string;
    };
    transparency: {
      title: string;
      description: string;
    };
    scope: {
      title: string;
      items: {
        title: string;
        description: string;
      }[];
    };
  };
  process: {
    title: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
  token: {
    title: string;
    description: string;
  };
  disclaimer: {
    title: string;
    items: string[];
  };
  status: {
    title: string;
    description: string;
  };
  finalCta: {
    title: string;
    subtitle: string;
    primaryButton: string;
    secondaryButton: string;
  };
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
}> = {
  en: {
    hero: {
      title: "TPC DAO",
      subtitle: "A community governance mechanism for participation, transparency, and collective decision-making.",
      disclaimer: "TPC is a komunitas trader profesional yang berfokus pada edukasi, transparansi, dan etika.",
      cta: "Learn DAO Mechanism",
    },
    sections: {
      governance: {
        title: "Community Governance",
        description: "TPC adalah komunitas trader profesional yang berfokus pada edukasi, transparansi, dan etika.",
      },
      participation: {
        title: "Participation-Based Voting Rights",
        description: "Voting power is distributed based on community participation and educational engagement, not financial investment.",
      },
      transparency: {
        title: "Transparency & Accountability",
        description: "Every proposal, discussion, and decision is recorded and accessible to all community members.",
      },
      scope: {
        title: "What Can Be Discussed",
        items: [
          {
            title: "Educational Platform Direction",
            description: "Community suggestions for educational content and platform improvements.",
          },
          {
            title: "Community Feature Enhancements",
            description: "Proposals for new community features and user experience improvements.",
          },
          {
            title: "Community Fund Usage",
            description: "Guidelines and proposals for using community funds according to established policies.",
          },
          {
            title: "Internal DAO Rules and Governance Policies",
            description: "Discussions and proposals regarding DAO operating procedures and rule modifications.",
          },
        ],
      },
    },
    process: {
      title: "How It Works",
      steps: [
        {
          title: "Community Discussion",
          description: "Open forums where members can discuss ideas and provide feedback on ongoing initiatives.",
        },
        {
          title: "Proposal Submission",
          description: "Structured process for submitting detailed proposals with clear objectives and implementation plans.",
        },
        {
          title: "Community Voting",
          description: "Secure voting system where each member's voice contributes to collective decisions.",
        },
        {
          title: "Implementation & Reporting",
          description: "Approved proposals are executed with regular progress reports shared with the community.",
        },
      ],
    },
    token: {
      title: "TPC Token in DAO",
      description: "TPC is used as a utility token to access participation rights and community governance mechanisms.",
    },
    disclaimer: {
      title: "Important Considerations",
      items: [
        "No guaranteed outcomes from proposals",
        "No obligation to follow proposals",
        "Not all proposals are approved",
        "DAO evolves gradually",
      ],
    },
    status: {
      title: "Current DAO status: Phased / DAO Lite",
      description: "Full implementation is rolled out gradually for security and stability.",
    },
    finalCta: {
      title: "Join the TPC Community",
      subtitle: "Be part of shaping the future of trading education and community governance.",
      primaryButton: "Join TPC Community",
      secondaryButton: "Learn More",
    },
    meta: {
      title: "TPC DAO - Community Governance",
      description: "Join the TPC DAO for transparent community governance and participation in educational platform development.",
      keywords: "TPC, DAO, community governance, participation, transparency, voting, TPC token",
    },
  },
  id: {
    hero: {
      title: "DAO TPC",
      subtitle: "Mekanisme tata kelola komunitas untuk partisipasi, transparansi, dan pengambilan keputusan bersama.",
      disclaimer: "DAO TPC bukan instrumen investasi dan tidak menjanjikan keuntungan finansial.",
      cta: "Pelajari Mekanisme DAO",
    },
    sections: {
      governance: {
        title: "Tata Kelola Komunitas",
        description: "DAO memungkinkan anggota komunitas berpartisipasi dalam pengambilan keputusan strategis TPC secara transparan.",
      },
      participation: {
        title: "Hak Suara Berbasis Partisipasi",
        description: "Hak suara diperoleh melalui keterlibatan komunitas dan kepemilikan token utilitas sesuai aturan yang berlaku.",
      },
      transparency: {
        title: "Transparansi & Akuntabilitas",
        description: "Setiap proposal, diskusi, dan hasil keputusan dicatat secara terbuka dan dapat diakses semua anggota komunitas.",
      },
      scope: {
        title: "Apa yang Bisa Dibahas",
        items: [
          {
            title: "Arah pengembangan platform edukasi",
            description: "Saran komunitas untuk konten edukasi dan peningkatan platform.",
          },
          {
            title: "Penambahan fitur komunitas",
            description: "Proposal untuk fitur komunitas baru dan peningkatan pengalaman pengguna.",
          },
          {
            title: "Penggunaan dana komunitas",
            description: "Pedoman dan proposal untuk penggunaan dana komunitas sesuai kebijakan yang berlaku.",
          },
          {
            title: "Aturan internal dan kebijakan DAO",
            description: "Diskusi dan proposal terkait prosedur operasional DAO dan modifikasi aturan.",
          },
        ],
      },
    },
    process: {
      title: "Alur Kerja DAO",
      steps: [
        {
          title: "Diskusi Komunitas",
          description: "Forum terbuka di mana anggota dapat mendiskusikan ide dan memberikan masukan pada inisiatif yang sedang berjalan.",
        },
        {
          title: "Pengajuan Proposal",
          description: "Proses terstruktur untuk mengajukan proposal rinci dengan tujuan jelas dan rencana implementasi.",
        },
        {
          title: "Voting Komunitas",
          description: "Sistem voting aman di mana setiap suara anggota berkontribusi pada keputusan kolektif.",
        },
        {
          title: "Implementasi & Laporan",
          description: "Proposal yang disetujui diimplementasikan dengan laporan kemajuan reguler dibagikan ke komunitas.",
        },
      ],
    },
    token: {
      title: "Token TPC dalam DAO",
      description: "TPC digunakan sebagai token utilitas untuk mengakses hak partisipasi dan mekanisme tata kelola komunitas.",
    },
    disclaimer: {
      title: "Pertimbangan Penting",
      items: [
        "Tidak ada jaminan hasil keputusan",
        "Tidak ada kewajiban mengikuti proposal",
        "Tidak semua proposal disetujui",
        "DAO dapat berkembang bertahap",
      ],
    },
    status: {
      title: "Status DAO saat ini: Bertahap / DAO Lite",
      description: "Implementasi penuh dilakukan secara bertahap demi keamanan dan stabilitas.",
    },
    finalCta: {
      title: "Gabung Komunitas TPC",
      subtitle: "Jadilah bagian dari membentuk masa depan pendidikan trading dan tata kelola komunitas.",
      primaryButton: "Gabung Komunitas TPC",
      secondaryButton: "Pelajari Lebih Lanjut",
    },
    meta: {
      title: "DAO TPC Global - Tata Kelola Komunitas",
      description: "Bergabung dengan DAO TPC Global untuk tata kelola komunitas yang transparan dan partisipasi dalam pengembangan platform edukasi.",
      keywords: "TPC Global, DAO, tata kelola komunitas, partisipasi, transparansi, voting, token TPC",
    },
  },
};

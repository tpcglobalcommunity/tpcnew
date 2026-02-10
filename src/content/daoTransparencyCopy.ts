export type Language = 'en' | 'id';

export const daoTransparencyCopy: Record<Language, {
  hero: {
    title: string;
    subtitle: string;
    disclaimer: string;
  };
  proposals: {
    title: string;
    empty: string;
    columns: {
      id: string;
      status: string;
      date: string;
      title: string;
    }[];
  };
  roadmap: {
    title: string;
    subtitle: string;
    phases: {
      title: string;
      description: string;
      status: 'current' | 'completed' | 'upcoming';
    }[];
  };
  disclaimer: {
    title: string;
    items: string[];
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
      title: "TPC Global DAO Transparency",
      subtitle: "A commitment to openness in community governance and decision-making.",
      disclaimer: "This page is informational and does not promise financial outcomes or returns.",
    },
    proposals: {
      title: "Proposal Log",
      empty: "No DAO proposals have been published yet.",
      columns: {
        id: "Proposal ID",
        status: "Status",
        date: "Date",
        title: "Proposal Title",
      },
    },
    roadmap: {
      title: "DAO Development Roadmap",
      subtitle: "Our phased approach to building a secure and effective governance system.",
      phases: [
        {
          title: "DAO Lite (Current)",
          description: "Community discussion, non-technical proposals, and off-chain voting with manual moderation.",
          status: "current",
        },
        {
          title: "DAO Semi-Onchain",
          description: "Structured proposals with snapshot-style voting and automated documentation.",
          status: "upcoming",
        },
        {
          title: "DAO Governance Mature",
          description: "Integrated governance tools, full transparency, and sustainable system.",
          status: "upcoming",
        },
      ],
    },
    disclaimer: {
      title: "Important Considerations",
      items: [
        "No guaranteed outcomes from proposals",
        "Not all proposals are approved",
        "DAO does not manage financial returns",
        "Participation is voluntary",
      ],
    },
    finalCta: {
      title: "Learn About TPC Global DAO",
      subtitle: "Discover our community governance and participation mechanisms.",
      primaryButton: "Learn About TPC Global DAO",
      secondaryButton: "Back to DAO",
    },
    meta: {
      title: "TPC Global DAO Transparency - Proposal Log & Roadmap",
      description: "View TPC Global DAO proposals, voting history, and development roadmap with full transparency.",
      keywords: "TPC Global, DAO transparency, proposal log, voting history, roadmap, governance",
    },
  },
  id: {
    hero: {
      title: "Transparansi DAO TPC Global",
      subtitle: "Komitmen untuk keterbukaan dalam proses tata kelola dan pengambilan keputusan komunitas.",
      disclaimer: "Halaman ini bersifat informatif dan tidak menjanjikan hasil atau keuntungan finansial.",
    },
    proposals: {
      title: "Log Proposal",
      empty: "Belum ada proposal DAO yang dipublikasikan.",
      columns: {
        id: "ID Proposal",
        status: "Status",
        date: "Tanggal",
        title: "Judul Proposal",
      },
    },
    roadmap: {
      title: "Roadmap Pengembangan DAO",
      subtitle: "Pendekatan bertahap kami untuk membangun sistem tata kelola yang aman dan efektif.",
      phases: [
        {
          title: "DAO Lite (Saat Ini)",
          description: "Diskusi komunitas, proposal non-teknis, dan voting off-chain dengan moderasi manual.",
          status: "current",
        },
        {
          title: "DAO Semi-Onchain",
          description: "Proposal terstruktur dengan voting gaya snapshot dan dokumentasi otomatis.",
          status: "upcoming",
        },
        {
          title: "DAO Governance Mature",
          description: "Alat tata kelola terintegrasi, transparansi penuh, dan sistem berkelanjutan.",
          status: "upcoming",
        },
      ],
    },
    disclaimer: {
      title: "Pertimbangan Penting",
      items: [
        "Tidak ada jaminan hasil dari proposal",
        "Tidak semua proposal disetujui",
        "DAO tidak mengelola keuntungan finansial",
        "Partisipasi sukarela",
      ],
    },
    finalCta: {
      title: "Pelajari Tentang DAO TPC Global",
      subtitle: "Temukan mekanisme tata kelola komunitas dan partisipasi kami.",
      primaryButton: "Pelajari Tentang DAO TPC Global",
      secondaryButton: "Kembali ke DAO",
    },
    meta: {
      title: "Transparansi DAO TPC Global - Log Proposal & Roadmap",
      description: "Lihat proposal DAO TPC Global, histori voting, dan roadmap pengembangan dengan transparansi penuh.",
      keywords: "TPC Global, DAO transparansi, log proposal, histori voting, roadmap, tata kelola",
    },
  },
};

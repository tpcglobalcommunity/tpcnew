export type Language = 'en' | 'id';

interface ColumnConfig {
  key: string;
  id: string;
}

interface Phase {
  title: string;
  description: string;
  status: 'current' | 'completed' | 'upcoming';
}

interface DaoTransparencyCopy {
  [language: string]: {
    hero: {
      title: string;
      subtitle: string;
      disclaimer: string;
    };
    proposals: {
      title: string;
      empty: string;
      columns: ColumnConfig[];
    };
    roadmap: {
      title: string;
      subtitle: string;
      phases: Phase[];
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
  };
}

export const daoTransparencyCopy: DaoTransparencyCopy = {
  en: {
    hero: {
      title: "TPC Global DAO Transparency",
      subtitle: "A commitment to openness in community governance and decision-making.",
      disclaimer: "This page is informational and does not promise financial outcomes or returns.",
    },
    proposals: {
      title: "Proposal Log",
      empty: "No DAO proposals have been published yet.",
      columns: [
        { key: "Proposal ID", id: "id" },
        { key: "Status", id: "status" },
        { key: "Date", id: "date" },
        { key: "Proposal Title", id: "title" },
      ],
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
      title: "TPC Global DAO Transparency",
      subtitle: "A commitment to openness in community governance and decision-making.",
      disclaimer: "Halaman ini bersifat informasi dan tidak menjanjikan hasil finansial.",
    },
    proposals: {
      title: "Log Proposal",
      empty: "Belum ada proposal DAO yang dipublikasikan.",
      columns: [
        { key: "Proposal ID", id: "id" },
        { key: "Status", id: "status" },
        { key: "Date", id: "date" },
        { key: "Proposal Title", id: "title" },
      ],
    },
    roadmap: {
      title: "Peta Pengembangan DAO",
      subtitle: "Pendekatan berfasa kami dalam membangun sistem tata kelola yang aman dan efektif.",
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
          title: "DAO Tata Kelola Matang",
          description: "Alat tata kelola terintegrasi, transparansi penuh, dan sistem berkelanjutan.",
          status: "upcoming",
        },
      ],
    },
    disclaimer: {
      title: "Pertimbangan Penting",
      items: [
        "Tidak ada hasil yang dijamin dari proposal",
        "Tidak semua proposal disetujui",
        "DAO tidak mengelola hasil finansial",
        "Partisipasi bersifat sukarela",
      ],
    },
    finalCta: {
      title: "Pelajari Tentang TPC Global DAO",
      subtitle: "Temukan mekanisme tata kelola komunitas dan partisipasi kami.",
      primaryButton: "Pelajari Tentang TPC Global DAO",
      secondaryButton: "Kembali ke DAO",
    },
    meta: {
      title: "TPC Global DAO Transparency - Log Proposal & Peta Pengembangan",
      description: "Lihat proposal TPC Global DAO, riwayat voting, dan peta pengembangan dengan transparansi penuh.",
      keywords: "TPC Global, transparansi DAO, log proposal, riwayat voting, peta pengembangan, tata kelola",
    },
  },
};

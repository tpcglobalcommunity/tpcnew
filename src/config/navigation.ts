import { Home, Users, BookOpen, Shield, FileText, Eye, Settings, LogOut, Menu, X, ChevronRight, HelpCircle, MessageSquare, User, Lock, Wallet, TrendingUp, BarChart3, PieChart, Activity } from 'lucide-react';

export type NavigationSection = 'INFORMASI' | 'LEGAL' | 'SUPPORT' | 'AKUN' | 'NAVIGASI_UTAMA';

export interface NavigationItem {
  key: string;
  label: string;
  href: string;
  icon: React.ComponentType<any>;
  badge?: string;
  disabled?: boolean;
}

export interface NavigationSectionConfig {
  title: string;
  items: NavigationItem[];
}

export interface NavigationConfig {
  INFORMASI: NavigationSectionConfig;
  LEGAL: NavigationSectionConfig;
  SUPPORT: NavigationSectionConfig;
  AKUN: NavigationSectionConfig;
  NAVIGASI_UTAMA: NavigationSectionConfig;
}

export const navigationConfig: NavigationConfig = {
  INFORMASI: {
    title: 'INFORMASI',
    items: [
      {
        key: 'home',
        label: 'Beranda',
        href: '/[lang]/',
        icon: Home
      },
      {
        key: 'why-tpc',
        label: 'Why TPC',
        href: '/[lang]/why-tpc',
        icon: HelpCircle
      },
      {
        key: 'academy',
        label: 'Akademi',
        href: '/[lang]/academy',
        icon: BookOpen
      },
      {
        key: 'transparency',
        label: 'Transparansi',
        href: '/[lang]/transparency',
        icon: Eye
      }
    ]
  },
  LEGAL: {
    title: 'LEGAL',
    items: [
      {
        key: 'terms',
        label: 'Terms of Service',
        href: '/[lang]/terms-of-service',
        icon: FileText
      },
      {
        key: 'privacy',
        label: 'Privacy Policy',
        href: '/[lang]/privacy-policy',
        icon: Shield
      },
      {
        key: 'risk',
        label: 'Risk Disclosure',
        href: '/[lang]/risk-disclosure',
        icon: TrendingUp
      }
    ]
  },
  SUPPORT: {
    title: 'SUPPORT',
    items: [
      {
        key: 'faq',
        label: 'FAQ',
        href: '/[lang]/faq',
        icon: HelpCircle
      },
      {
        key: 'contact',
        label: 'Kontak',
        href: '/[lang]/contact',
        icon: MessageSquare
      }
    ]
  },
  AKUN: {
    title: 'AKUN',
    items: [
      {
        key: 'profile',
        label: 'Profil',
        href: '/member',
        icon: User
      },
      {
        key: 'settings',
        label: 'Pengaturan',
        href: '/member/settings',
        icon: Settings
      },
      {
        key: 'logout',
        label: 'Keluar',
        href: '/login',
        icon: LogOut
      }
    ]
  },
  NAVIGASI_UTAMA: {
    title: 'NAVIGASI UTAMA',
    items: [
      {
        key: 'presale',
        label: 'Presale',
        href: '/[lang]/presale',
        icon: Wallet
      },
      {
        key: 'dao',
        label: 'DAO',
        href: '/[lang]/dao',
        icon: Users
      },
      {
        key: 'dashboard',
        label: 'Dashboard',
        href: '/member',
        icon: BarChart3
      },
      {
        key: 'invoices',
        label: 'Invoices',
        href: '/member/invoices',
        icon: FileText
      }
    ]
  }
};

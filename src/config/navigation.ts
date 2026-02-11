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
        key: 'why-tpc',
        label: 'Why TPC',
        href: '/[lang]/why-tpc',
        icon: HelpCircle
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
      },
      {
        key: 'transparency',
        label: 'Transparency',
        href: '/[lang]/transparency',
        icon: Eye
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
        key: 'login',
        label: 'Login',
        href: '/login',
        icon: Lock
      },
      {
        key: 'profile',
        label: 'Dashboard',
        href: '/member',
        icon: BarChart3
      },
      {
        key: 'settings',
        label: 'Settings',
        href: '/member/settings',
        icon: Settings
      },
      {
        key: 'logout',
        label: 'Logout',
        href: '/login',
        icon: LogOut
      }
    ]
  },
  NAVIGASI_UTAMA: {
    title: 'NAVIGASI UTAMA',
    items: [
      // Primary navigation moved to BottomNav - disabled here to prevent duplication
      {
        key: 'home',
        label: 'Home',
        href: '/[lang]/',
        icon: Home,
        disabled: true
      },
      {
        key: 'dao',
        label: 'DAO',
        href: '/[lang]/dao',
        icon: Users,
        disabled: true
      },
      {
        key: 'presale',
        label: 'Presale',
        href: '/[lang]/presale',
        icon: Wallet,
        disabled: true
      },
      {
        key: 'academy',
        label: 'Academy',
        href: '/[lang]/academy',
        icon: BookOpen,
        disabled: true
      }
    ]
  }
};

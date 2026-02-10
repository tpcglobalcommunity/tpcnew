'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Globe } from 'lucide-react';
import { normalizeLang, type Language } from '@/lib/lang-helpers';
import { BrandLogo } from '@/components/brand/BrandLogo';

interface PublicTopBarProps {
  currentLang: Language;
}

export function PublicTopBar({ currentLang }: PublicTopBarProps) {
  const pathname = usePathname();
  
  // Extract the path after the language prefix
  const getPathAfterLang = (path: string) => {
    const segments = path.split('/').filter(Boolean);
    if (segments.length > 0 && (segments[0] === 'en' || segments[0] === 'id')) {
      return '/' + segments.slice(1).join('/');
    }
    return '/';
  };

  const currentPath = getPathAfterLang(pathname);
  const otherLang = currentLang === 'en' ? 'id' : 'en';
  const switchUrl = `/${otherLang}${currentPath}`;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#0B0E11]/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          {/* Logo/Brand */}
          <Link href={`/${currentLang}`} className="flex items-center gap-2">
            <BrandLogo 
              size={32} 
              priority={true}
              className="w-8 h-8"
            />
            <span className="text-white font-semibold hidden sm:block">TPC Global</span>
          </Link>

          {/* Language Switch */}
          <Link
            href={switchUrl}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white transition-colors border border-gray-700 hover:border-gray-600"
          >
            <Globe className="w-4 h-4" />
            <span className="text-sm font-medium uppercase">
              {currentLang === 'en' ? 'EN' : 'ID'}
            </span>
            <span className="text-xs text-gray-400">→</span>
            <span className="text-sm font-medium uppercase text-amber-400">
              {currentLang === 'en' ? 'ID' : 'EN'}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

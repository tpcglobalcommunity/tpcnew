'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft,
  Home, 
  Users, 
  DollarSign
} from 'lucide-react';
import { type Language } from '@/lib/lang-helpers';

interface PublicPageNavProps {
  currentLang: string | Language;
}

export function PublicPageNav({ currentLang }: PublicPageNavProps) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="sticky top-0 z-40 bg-[#0B0E11]/95 backdrop-blur-sm border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="flex items-center gap-2 px-3 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">
              {currentLang === 'en' ? 'Back' : 'Kembali'}
            </span>
          </button>

          {/* Navigation Links */}
          <div className="flex items-center gap-2">
            <Link
              href={`/${currentLang}`}
              className="flex items-center gap-2 px-3 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
            >
              <Home className="w-4 h-4" />
              <span className="text-sm font-medium hidden sm:inline">
                {currentLang === 'en' ? 'Home' : 'Beranda'}
              </span>
            </Link>
            
            <Link
              href={`/${currentLang}/dao`}
              className="flex items-center gap-2 px-3 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
            >
              <Users className="w-4 h-4" />
              <span className="text-sm font-medium hidden sm:inline">DAO</span>
            </Link>
            
            <Link
              href={`/${currentLang}/presale`}
              className="flex items-center gap-2 px-3 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
            >
              <DollarSign className="w-4 h-4" />
              <span className="text-sm font-medium hidden sm:inline">Presale</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from 'next/link';
import { Shield, FileText, Eye } from 'lucide-react';

interface LegalFooterProps {
  currentLang: string;
}

export function LegalFooter({ currentLang }: LegalFooterProps) {
  const legalLinks = [
    {
      key: 'terms',
      label: 'Terms of Service',
      href: `/${currentLang}/terms-of-service`,
      icon: FileText
    },
    {
      key: 'privacy',
      label: 'Privacy Policy',
      href: `/${currentLang}/privacy-policy`,
      icon: Shield
    },
    {
      key: 'risk',
      label: 'Risk Disclosure',
      href: `/${currentLang}/risk-disclosure`,
      icon: Eye
    },
    {
      key: 'transparency',
      label: 'Transparency',
      href: `/${currentLang}/transparency`,
      icon: Eye
    }
  ];

  return (
    <footer className="bg-[#0B0E11] border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Legal Links */}
          <nav className="flex flex-wrap items-center gap-6">
            {legalLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.key}
                  href={link.href}
                  className="flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors text-sm"
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Copyright */}
          <div className="text-gray-500 text-sm">
            <p>&copy; 2026 TPC. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

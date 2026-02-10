import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/id', '/en', '/id/presale', '/en/presale', '/id/dao', '/en/dao', '/id/academy', '/en/academy', '/id/faq', '/en/faq', '/id/transparency', '/en/transparency', '/id/why-tpc', '/en/why-tpc'],
        disallow: ['/api/', '/member/', '/admin/', '/login', '/register', '/forgot-password', '/reset-password'],
      },
    ],
    sitemap: 'https://www.tpcglobal.io/sitemap.xml',
  };
}

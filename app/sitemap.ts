import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.tpcglobal.io';
  
  const publicPages = [
    { url: '/id', lastModified: new Date(), priority: 1.0 },
    { url: '/id/presale', lastModified: new Date(), priority: 0.9 },
    { url: '/id/dao', lastModified: new Date(), priority: 0.9 },
    { url: '/id/academy', lastModified: new Date(), priority: 0.8 },
    { url: '/id/faq', lastModified: new Date(), priority: 0.8 },
    { url: '/id/transparency', lastModified: new Date(), priority: 0.8 },
    { url: '/id/why-tpc', lastModified: new Date(), priority: 0.8 },
    { url: '/en', lastModified: new Date(), priority: 1.0 },
    { url: '/en/presale', lastModified: new Date(), priority: 0.9 },
    { url: '/en/dao', lastModified: new Date(), priority: 0.9 },
    { url: '/en/academy', lastModified: new Date(), priority: 0.8 },
    { url: '/en/faq', lastModified: new Date(), priority: 0.8 },
    { url: '/en/transparency', lastModified: new Date(), priority: 0.8 },
    { url: '/en/why-tpc', lastModified: new Date(), priority: 0.8 },
  ];

  return publicPages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: page.lastModified,
    changeFrequency: 'weekly',
    priority: page.priority,
  }));
}

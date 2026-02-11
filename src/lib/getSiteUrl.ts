/**
 * Site URL utility for consistent base URL handling
 * Ensures production redirects to https://tpcglobal.io
 */

export function getSiteUrl(): string {
  // Priority: NEXT_PUBLIC_SITE_URL > VERCEL_URL > localhost fallback
  let url = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL || "http://localhost:3000";
  
  // If VERCEL_URL exists without protocol, add https://
  if (process.env.VERCEL_URL && !process.env.VERCEL_URL.startsWith('http')) {
    url = `https://${process.env.VERCEL_URL}`;
  }
  
  // Remove trailing slash
  return url.replace(/\/$/, '');
}

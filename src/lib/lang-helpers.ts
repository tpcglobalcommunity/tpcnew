// Helper for language normalization and params handling
export type Lang = 'en' | 'id';
export type LangParams = { lang: string };

export function normalizeLang(lang: string): Lang {
  return lang === 'id' ? 'id' : 'en';
}

export function publicPath(lang: string, path: string): string {
  // Remove leading slash from path if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // If path already includes language, don't double it
  if (cleanPath.startsWith(`${lang}/`)) {
    return `/${cleanPath}`;
  }
  
  // If path is root, just return language
  if (cleanPath === '') {
    return `/${lang}`;
  }
  
  return `/${lang}/${cleanPath}`;
}

export type Language = Lang;

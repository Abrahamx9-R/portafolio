import type { Lang } from './translations';

export const defaultLang: Lang = 'es';
export const supportedLangs: Lang[] = ['es', 'en'];

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (supportedLangs.includes(lang as Lang)) return lang as Lang;
  return defaultLang;
}

export function getLocalizedPath(path: string, lang: Lang): string {
  // Remove any existing lang prefix
  const cleanPath = path.replace(/^\/(es|en)/, '');
  return `/${lang}${cleanPath || '/'}`;
}

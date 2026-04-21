import { useParams } from 'react-router-dom';

const SUPPORTED_LANGS = ['bg', 'en', 'de', 'fr', 'es', 'tr', 'ru', 'el'];

export function useLang() {
  const { lang = 'bg' } = useParams<{ lang: string }>();
  const safeLang = SUPPORTED_LANGS.includes(lang) ? lang : 'bg';

  /** Prepends the current language to an internal path. e.g. to('/armor') → '/en/armor' */
  const to = (path: string): string => `/${safeLang}${path}`;

  return { lang: safeLang, to };
}

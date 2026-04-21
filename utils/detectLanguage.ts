const SUPPORTED_LANGS = ['bg', 'en', 'de', 'fr', 'es', 'tr', 'ru', 'el'];

const COUNTRY_LANG: Record<string, string> = {
  BG: 'bg',
  DE: 'de', AT: 'de', CH: 'de', LI: 'de',
  FR: 'fr', MC: 'fr', BE: 'fr', LU: 'fr',
  ES: 'es', MX: 'es', AR: 'es', CO: 'es', PE: 'es', CL: 'es',
  VE: 'es', EC: 'es', BO: 'es', PY: 'es', UY: 'es', GT: 'es',
  HN: 'es', SV: 'es', NI: 'es', CR: 'es', PA: 'es', DO: 'es', CU: 'es',
  TR: 'tr',
  RU: 'ru', KZ: 'ru', BY: 'ru',
  GR: 'el', CY: 'el',
};

export async function detectLanguage(): Promise<string> {
  // 1. IP geo-detection
  try {
    const res = await fetch('https://api.country.is/', {
      signal: AbortSignal.timeout(3000),
    });
    const data = await res.json();
    if (data?.country) {
      return COUNTRY_LANG[data.country] ?? 'en';
    }
  } catch {
    // API failed — fall through
  }

  // 2. Browser language
  const browserLang = navigator.language?.split('-')[0]?.toLowerCase();
  if (browserLang && SUPPORTED_LANGS.includes(browserLang)) {
    return browserLang;
  }

  // 3. Absolute fallback
  return 'en';
}

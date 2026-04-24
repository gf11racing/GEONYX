import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

// Bundle critical bg namespaces so they're available synchronously on first render.
// This eliminates the CLS (layout shift) caused by i18next async HTTP loading.
// Other languages and non-critical namespaces still load via HTTP backend.
import bgCommon from './locales/bg/common.json';
import bgHome from './locales/bg/home.json';
import bgFooter from './locales/bg/footer.json';

const NAMESPACES = [
  'common', 'home', 'footer',
  'armor', 'chem', 'therm', 'hydro',
  'technology', 'about', 'contacts', 'requestinspection',
  'sectorshub', 'systemshub',
  'privacy', 'terms', 'comparison', 'sections',
  'hydrohotspots', 'contactform',
  'heavyindustry', 'foodpharma', 'transportparking',
  'architecturalzone', 'certificates', 'hseq',
  'pilotprojects', 'cadbim', 'technicalmaps', 'careers',
  'energydefense', 'agrobiogaz', 'watermarine',
  'urbanhightech', 'constructionarch',
  'systemselector',
  'tendergenerator',
  'licensing',
];

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: 'bg',
    fallbackLng: 'bg',
    ns: NAMESPACES,
    defaultNS: 'common',
    // Bundled critical namespaces — available synchronously, no CLS flash
    resources: {
      bg: {
        common: bgCommon,
        home: bgHome,
        footer: bgFooter,
      },
    },
    // Allow HTTP backend to load remaining namespaces alongside bundled resources
    partialBundledLanguages: true,
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
      queryStringParams: { v: '2' },
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;

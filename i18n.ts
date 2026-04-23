import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

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
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;

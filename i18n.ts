import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import bgCommon from './locales/bg/common.json';
import enCommon from './locales/en/common.json';
import deCommon from './locales/de/common.json';
import frCommon from './locales/fr/common.json';
import esCommon from './locales/es/common.json';
import trCommon from './locales/tr/common.json';
import ruCommon from './locales/ru/common.json';
import elCommon from './locales/el/common.json';

import bgHome from './locales/bg/home.json';
import enHome from './locales/en/home.json';
import deHome from './locales/de/home.json';
import frHome from './locales/fr/home.json';
import esHome from './locales/es/home.json';
import trHome from './locales/tr/home.json';
import ruHome from './locales/ru/home.json';
import elHome from './locales/el/home.json';

import bgFooter from './locales/bg/footer.json';
import enFooter from './locales/en/footer.json';
import deFooter from './locales/de/footer.json';
import frFooter from './locales/fr/footer.json';
import esFooter from './locales/es/footer.json';
import trFooter from './locales/tr/footer.json';
import ruFooter from './locales/ru/footer.json';
import elFooter from './locales/el/footer.json';

import bgArmor from './locales/bg/armor.json';
import enArmor from './locales/en/armor.json';
import deArmor from './locales/de/armor.json';
import frArmor from './locales/fr/armor.json';
import esArmor from './locales/es/armor.json';
import trArmor from './locales/tr/armor.json';
import ruArmor from './locales/ru/armor.json';
import elArmor from './locales/el/armor.json';

import bgChem from './locales/bg/chem.json';
import enChem from './locales/en/chem.json';
import deChem from './locales/de/chem.json';
import frChem from './locales/fr/chem.json';
import esChem from './locales/es/chem.json';
import trChem from './locales/tr/chem.json';
import ruChem from './locales/ru/chem.json';
import elChem from './locales/el/chem.json';

import bgTherm from './locales/bg/therm.json';
import enTherm from './locales/en/therm.json';
import deTherm from './locales/de/therm.json';
import frTherm from './locales/fr/therm.json';
import esTherm from './locales/es/therm.json';
import trTherm from './locales/tr/therm.json';
import ruTherm from './locales/ru/therm.json';
import elTherm from './locales/el/therm.json';

import bgHydro from './locales/bg/hydro.json';
import enHydro from './locales/en/hydro.json';
import deHydro from './locales/de/hydro.json';
import frHydro from './locales/fr/hydro.json';
import esHydro from './locales/es/hydro.json';
import trHydro from './locales/tr/hydro.json';
import ruHydro from './locales/ru/hydro.json';
import elHydro from './locales/el/hydro.json';

import bgTechnology from './locales/bg/technology.json';
import enTechnology from './locales/en/technology.json';
import deTechnology from './locales/de/technology.json';
import frTechnology from './locales/fr/technology.json';
import esTechnology from './locales/es/technology.json';
import trTechnology from './locales/tr/technology.json';
import ruTechnology from './locales/ru/technology.json';
import elTechnology from './locales/el/technology.json';

import bgAbout from './locales/bg/about.json';
import enAbout from './locales/en/about.json';
import deAbout from './locales/de/about.json';
import frAbout from './locales/fr/about.json';
import esAbout from './locales/es/about.json';
import trAbout from './locales/tr/about.json';
import ruAbout from './locales/ru/about.json';
import elAbout from './locales/el/about.json';

import bgContacts from './locales/bg/contacts.json';
import enContacts from './locales/en/contacts.json';
import deContacts from './locales/de/contacts.json';
import frContacts from './locales/fr/contacts.json';
import esContacts from './locales/es/contacts.json';
import trContacts from './locales/tr/contacts.json';
import ruContacts from './locales/ru/contacts.json';
import elContacts from './locales/el/contacts.json';

import bgRequestInspection from './locales/bg/requestinspection.json';
import enRequestInspection from './locales/en/requestinspection.json';
import deRequestInspection from './locales/de/requestinspection.json';
import frRequestInspection from './locales/fr/requestinspection.json';
import esRequestInspection from './locales/es/requestinspection.json';
import trRequestInspection from './locales/tr/requestinspection.json';
import ruRequestInspection from './locales/ru/requestinspection.json';
import elRequestInspection from './locales/el/requestinspection.json';

import bgSectorshub from './locales/bg/sectorshub.json';
import enSectorshub from './locales/en/sectorshub.json';
import deSectorshub from './locales/de/sectorshub.json';
import frSectorshub from './locales/fr/sectorshub.json';
import esSectorshub from './locales/es/sectorshub.json';
import trSectorshub from './locales/tr/sectorshub.json';
import ruSectorshub from './locales/ru/sectorshub.json';
import elSectorshub from './locales/el/sectorshub.json';

import bgSystemshub from './locales/bg/systemshub.json';
import enSystemshub from './locales/en/systemshub.json';
import deSystemshub from './locales/de/systemshub.json';
import frSystemshub from './locales/fr/systemshub.json';
import esSystemshub from './locales/es/systemshub.json';
import trSystemshub from './locales/tr/systemshub.json';
import ruSystemshub from './locales/ru/systemshub.json';
import elSystemshub from './locales/el/systemshub.json';

import bgPrivacy from './locales/bg/privacy.json';
import enPrivacy from './locales/en/privacy.json';
import dePrivacy from './locales/de/privacy.json';
import frPrivacy from './locales/fr/privacy.json';
import esPrivacy from './locales/es/privacy.json';
import trPrivacy from './locales/tr/privacy.json';
import ruPrivacy from './locales/ru/privacy.json';
import elPrivacy from './locales/el/privacy.json';

import bgTerms from './locales/bg/terms.json';
import enTerms from './locales/en/terms.json';
import deTerms from './locales/de/terms.json';
import frTerms from './locales/fr/terms.json';
import esTerms from './locales/es/terms.json';
import trTerms from './locales/tr/terms.json';
import ruTerms from './locales/ru/terms.json';
import elTerms from './locales/el/terms.json';

import bgComparison from './locales/bg/comparison.json';
import enComparison from './locales/en/comparison.json';
import deComparison from './locales/de/comparison.json';
import frComparison from './locales/fr/comparison.json';
import esComparison from './locales/es/comparison.json';
import trComparison from './locales/tr/comparison.json';
import ruComparison from './locales/ru/comparison.json';
import elComparison from './locales/el/comparison.json';

import bgSections from './locales/bg/sections.json';
import enSections from './locales/en/sections.json';
import deSections from './locales/de/sections.json';
import frSections from './locales/fr/sections.json';
import esSections from './locales/es/sections.json';
import trSections from './locales/tr/sections.json';
import ruSections from './locales/ru/sections.json';
import elSections from './locales/el/sections.json';

import bgHydrohotspots from './locales/bg/hydrohotspots.json';
import enHydrohotspots from './locales/en/hydrohotspots.json';
import deHydrohotspots from './locales/de/hydrohotspots.json';
import frHydrohotspots from './locales/fr/hydrohotspots.json';
import esHydrohotspots from './locales/es/hydrohotspots.json';
import trHydrohotspots from './locales/tr/hydrohotspots.json';
import ruHydrohotspots from './locales/ru/hydrohotspots.json';
import elHydrohotspots from './locales/el/hydrohotspots.json';

import bgContactform from './locales/bg/contactform.json';
import enContactform from './locales/en/contactform.json';
import deContactform from './locales/de/contactform.json';
import frContactform from './locales/fr/contactform.json';
import esContactform from './locales/es/contactform.json';
import trContactform from './locales/tr/contactform.json';
import ruContactform from './locales/ru/contactform.json';
import elContactform from './locales/el/contactform.json';

import bgHeavyindustry from './locales/bg/heavyindustry.json';
import enHeavyindustry from './locales/en/heavyindustry.json';
import deHeavyindustry from './locales/de/heavyindustry.json';
import frHeavyindustry from './locales/fr/heavyindustry.json';
import esHeavyindustry from './locales/es/heavyindustry.json';
import trHeavyindustry from './locales/tr/heavyindustry.json';
import ruHeavyindustry from './locales/ru/heavyindustry.json';
import elHeavyindustry from './locales/el/heavyindustry.json';

import bgFoodpharma from './locales/bg/foodpharma.json';
import enFoodpharma from './locales/en/foodpharma.json';
import deFoodpharma from './locales/de/foodpharma.json';
import frFoodpharma from './locales/fr/foodpharma.json';
import esFoodpharma from './locales/es/foodpharma.json';
import trFoodpharma from './locales/tr/foodpharma.json';
import ruFoodpharma from './locales/ru/foodpharma.json';
import elFoodpharma from './locales/el/foodpharma.json';

import bgTransportparking from './locales/bg/transportparking.json';
import enTransportparking from './locales/en/transportparking.json';
import deTransportparking from './locales/de/transportparking.json';
import frTransportparking from './locales/fr/transportparking.json';
import esTransportparking from './locales/es/transportparking.json';
import trTransportparking from './locales/tr/transportparking.json';
import ruTransportparking from './locales/ru/transportparking.json';
import elTransportparking from './locales/el/transportparking.json';

import bgUrbanhightech from './locales/bg/urbanhightech.json';
import enUrbanhightech from './locales/en/urbanhightech.json';
import deUrbanhightech from './locales/de/urbanhightech.json';
import frUrbanhightech from './locales/fr/urbanhightech.json';
import esUrbanhightech from './locales/es/urbanhightech.json';
import trUrbanhightech from './locales/tr/urbanhightech.json';
import ruUrbanhightech from './locales/ru/urbanhightech.json';
import elUrbanhightech from './locales/el/urbanhightech.json';

import bgConstructionarch from './locales/bg/constructionarch.json';
import enConstructionarch from './locales/en/constructionarch.json';
import deConstructionarch from './locales/de/constructionarch.json';
import frConstructionarch from './locales/fr/constructionarch.json';
import esConstructionarch from './locales/es/constructionarch.json';
import trConstructionarch from './locales/tr/constructionarch.json';
import ruConstructionarch from './locales/ru/constructionarch.json';
import elConstructionarch from './locales/el/constructionarch.json';

import bgArchitecturalzone from './locales/bg/architecturalzone.json';
import enArchitecturalzone from './locales/en/architecturalzone.json';
import deArchitecturalzone from './locales/de/architecturalzone.json';
import frArchitecturalzone from './locales/fr/architecturalzone.json';
import esArchitecturalzone from './locales/es/architecturalzone.json';
import trArchitecturalzone from './locales/tr/architecturalzone.json';
import ruArchitecturalzone from './locales/ru/architecturalzone.json';
import elArchitecturalzone from './locales/el/architecturalzone.json';

import bgCertificates from './locales/bg/certificates.json';
import enCertificates from './locales/en/certificates.json';
import deCertificates from './locales/de/certificates.json';
import frCertificates from './locales/fr/certificates.json';
import esCertificates from './locales/es/certificates.json';
import trCertificates from './locales/tr/certificates.json';
import ruCertificates from './locales/ru/certificates.json';
import elCertificates from './locales/el/certificates.json';

import bgHseq from './locales/bg/hseq.json';
import enHseq from './locales/en/hseq.json';
import deHseq from './locales/de/hseq.json';
import frHseq from './locales/fr/hseq.json';
import esHseq from './locales/es/hseq.json';
import trHseq from './locales/tr/hseq.json';
import ruHseq from './locales/ru/hseq.json';
import elHseq from './locales/el/hseq.json';

import bgPilotprojects from './locales/bg/pilotprojects.json';
import enPilotprojects from './locales/en/pilotprojects.json';
import dePilotprojects from './locales/de/pilotprojects.json';
import frPilotprojects from './locales/fr/pilotprojects.json';
import esPilotprojects from './locales/es/pilotprojects.json';
import trPilotprojects from './locales/tr/pilotprojects.json';
import ruPilotprojects from './locales/ru/pilotprojects.json';
import elPilotprojects from './locales/el/pilotprojects.json';

import bgCadbim from './locales/bg/cadbim.json';
import enCadbim from './locales/en/cadbim.json';
import deCadbim from './locales/de/cadbim.json';
import frCadbim from './locales/fr/cadbim.json';
import esCadbim from './locales/es/cadbim.json';
import trCadbim from './locales/tr/cadbim.json';
import ruCadbim from './locales/ru/cadbim.json';
import elCadbim from './locales/el/cadbim.json';

import bgTechnicalmaps from './locales/bg/technicalmaps.json';
import enTechnicalmaps from './locales/en/technicalmaps.json';
import deTechnicalmaps from './locales/de/technicalmaps.json';
import frTechnicalmaps from './locales/fr/technicalmaps.json';
import esTechnicalmaps from './locales/es/technicalmaps.json';
import trTechnicalmaps from './locales/tr/technicalmaps.json';
import ruTechnicalmaps from './locales/ru/technicalmaps.json';
import elTechnicalmaps from './locales/el/technicalmaps.json';

import bgCareers from './locales/bg/careers.json';
import enCareers from './locales/en/careers.json';
import deCareers from './locales/de/careers.json';
import frCareers from './locales/fr/careers.json';
import esCareers from './locales/es/careers.json';
import trCareers from './locales/tr/careers.json';
import ruCareers from './locales/ru/careers.json';
import elCareers from './locales/el/careers.json';

import bgEnergydefense from './locales/bg/energydefense.json';
import enEnergydefense from './locales/en/energydefense.json';
import deEnergydefense from './locales/de/energydefense.json';
import frEnergydefense from './locales/fr/energydefense.json';
import esEnergydefense from './locales/es/energydefense.json';
import trEnergydefense from './locales/tr/energydefense.json';
import ruEnergydefense from './locales/ru/energydefense.json';
import elEnergydefense from './locales/el/energydefense.json';

import bgAgrobiogaz from './locales/bg/agrobiogaz.json';
import enAgrobiogaz from './locales/en/agrobiogaz.json';
import deAgrobiogaz from './locales/de/agrobiogaz.json';
import frAgrobiogaz from './locales/fr/agrobiogaz.json';
import esAgrobiogaz from './locales/es/agrobiogaz.json';
import trAgrobiogaz from './locales/tr/agrobiogaz.json';
import ruAgrobiogaz from './locales/ru/agrobiogaz.json';
import elAgrobiogaz from './locales/el/agrobiogaz.json';

import bgWatermarine from './locales/bg/watermarine.json';
import enWatermarine from './locales/en/watermarine.json';
import deWatermarine from './locales/de/watermarine.json';
import frWatermarine from './locales/fr/watermarine.json';
import esWatermarine from './locales/es/watermarine.json';
import trWatermarine from './locales/tr/watermarine.json';
import ruWatermarine from './locales/ru/watermarine.json';
import elWatermarine from './locales/el/watermarine.json';

i18n
  .use(initReactI18next)
  .init({
    lng: 'bg',
    resources: {
      bg: {
        common: bgCommon, home: bgHome, footer: bgFooter,
        armor: bgArmor, chem: bgChem, therm: bgTherm, hydro: bgHydro, technology: bgTechnology,
        about: bgAbout, contacts: bgContacts, requestinspection: bgRequestInspection,
        sectorshub: bgSectorshub, systemshub: bgSystemshub,
        privacy: bgPrivacy, terms: bgTerms, comparison: bgComparison, sections: bgSections,
        hydrohotspots: bgHydrohotspots, contactform: bgContactform,
        heavyindustry: bgHeavyindustry, foodpharma: bgFoodpharma, transportparking: bgTransportparking,
        architecturalzone: bgArchitecturalzone, certificates: bgCertificates, hseq: bgHseq,
        pilotprojects: bgPilotprojects, cadbim: bgCadbim, technicalmaps: bgTechnicalmaps, careers: bgCareers,
        energydefense: bgEnergydefense, agrobiogaz: bgAgrobiogaz, watermarine: bgWatermarine,
        urbanhightech: bgUrbanhightech, constructionarch: bgConstructionarch,
      },
      en: {
        common: enCommon, home: enHome, footer: enFooter,
        armor: enArmor, chem: enChem, therm: enTherm, hydro: enHydro, technology: enTechnology,
        about: enAbout, contacts: enContacts, requestinspection: enRequestInspection,
        sectorshub: enSectorshub, systemshub: enSystemshub,
        privacy: enPrivacy, terms: enTerms, comparison: enComparison, sections: enSections,
        hydrohotspots: enHydrohotspots, contactform: enContactform,
        heavyindustry: enHeavyindustry, foodpharma: enFoodpharma, transportparking: enTransportparking,
        architecturalzone: enArchitecturalzone, certificates: enCertificates, hseq: enHseq,
        pilotprojects: enPilotprojects, cadbim: enCadbim, technicalmaps: enTechnicalmaps, careers: enCareers,
        energydefense: enEnergydefense, agrobiogaz: enAgrobiogaz, watermarine: enWatermarine,
        urbanhightech: enUrbanhightech, constructionarch: enConstructionarch,
      },
      de: {
        common: deCommon, home: deHome, footer: deFooter,
        armor: deArmor, chem: deChem, therm: deTherm, hydro: deHydro, technology: deTechnology,
        about: deAbout, contacts: deContacts, requestinspection: deRequestInspection,
        sectorshub: deSectorshub, systemshub: deSystemshub,
        privacy: dePrivacy, terms: deTerms, comparison: deComparison, sections: deSections,
        hydrohotspots: deHydrohotspots, contactform: deContactform,
        heavyindustry: deHeavyindustry, foodpharma: deFoodpharma, transportparking: deTransportparking,
        architecturalzone: deArchitecturalzone, certificates: deCertificates, hseq: deHseq,
        pilotprojects: dePilotprojects, cadbim: deCadbim, technicalmaps: deTechnicalmaps, careers: deCareers,
        energydefense: deEnergydefense, agrobiogaz: deAgrobiogaz, watermarine: deWatermarine,
        urbanhightech: deUrbanhightech, constructionarch: deConstructionarch,
      },
      fr: {
        common: frCommon, home: frHome, footer: frFooter,
        armor: frArmor, chem: frChem, therm: frTherm, hydro: frHydro, technology: frTechnology,
        about: frAbout, contacts: frContacts, requestinspection: frRequestInspection,
        sectorshub: frSectorshub, systemshub: frSystemshub,
        privacy: frPrivacy, terms: frTerms, comparison: frComparison, sections: frSections,
        hydrohotspots: frHydrohotspots, contactform: frContactform,
        heavyindustry: frHeavyindustry, foodpharma: frFoodpharma, transportparking: frTransportparking,
        architecturalzone: frArchitecturalzone, certificates: frCertificates, hseq: frHseq,
        pilotprojects: frPilotprojects, cadbim: frCadbim, technicalmaps: frTechnicalmaps, careers: frCareers,
        energydefense: frEnergydefense, agrobiogaz: frAgrobiogaz, watermarine: frWatermarine,
        urbanhightech: frUrbanhightech, constructionarch: frConstructionarch,
      },
      es: {
        common: esCommon, home: esHome, footer: esFooter,
        armor: esArmor, chem: esChem, therm: esTherm, hydro: esHydro, technology: esTechnology,
        about: esAbout, contacts: esContacts, requestinspection: esRequestInspection,
        sectorshub: esSectorshub, systemshub: esSystemshub,
        privacy: esPrivacy, terms: esTerms, comparison: esComparison, sections: esSections,
        hydrohotspots: esHydrohotspots, contactform: esContactform,
        heavyindustry: esHeavyindustry, foodpharma: esFoodpharma, transportparking: esTransportparking,
        architecturalzone: esArchitecturalzone, certificates: esCertificates, hseq: esHseq,
        pilotprojects: esPilotprojects, cadbim: esCadbim, technicalmaps: esTechnicalmaps, careers: esCareers,
        energydefense: esEnergydefense, agrobiogaz: esAgrobiogaz, watermarine: esWatermarine,
        urbanhightech: esUrbanhightech, constructionarch: esConstructionarch,
      },
      tr: {
        common: trCommon, home: trHome, footer: trFooter,
        armor: trArmor, chem: trChem, therm: trTherm, hydro: trHydro, technology: trTechnology,
        about: trAbout, contacts: trContacts, requestinspection: trRequestInspection,
        sectorshub: trSectorshub, systemshub: trSystemshub,
        privacy: trPrivacy, terms: trTerms, comparison: trComparison, sections: trSections,
        hydrohotspots: trHydrohotspots, contactform: trContactform,
        heavyindustry: trHeavyindustry, foodpharma: trFoodpharma, transportparking: trTransportparking,
        architecturalzone: trArchitecturalzone, certificates: trCertificates, hseq: trHseq,
        pilotprojects: trPilotprojects, cadbim: trCadbim, technicalmaps: trTechnicalmaps, careers: trCareers,
        energydefense: trEnergydefense, agrobiogaz: trAgrobiogaz, watermarine: trWatermarine,
        urbanhightech: trUrbanhightech, constructionarch: trConstructionarch,
      },
      ru: {
        common: ruCommon, home: ruHome, footer: ruFooter,
        armor: ruArmor, chem: ruChem, therm: ruTherm, hydro: ruHydro, technology: ruTechnology,
        about: ruAbout, contacts: ruContacts, requestinspection: ruRequestInspection,
        sectorshub: ruSectorshub, systemshub: ruSystemshub,
        privacy: ruPrivacy, terms: ruTerms, comparison: ruComparison, sections: ruSections,
        hydrohotspots: ruHydrohotspots, contactform: ruContactform,
        heavyindustry: ruHeavyindustry, foodpharma: ruFoodpharma, transportparking: ruTransportparking,
        architecturalzone: ruArchitecturalzone, certificates: ruCertificates, hseq: ruHseq,
        pilotprojects: ruPilotprojects, cadbim: ruCadbim, technicalmaps: ruTechnicalmaps, careers: ruCareers,
        energydefense: ruEnergydefense, agrobiogaz: ruAgrobiogaz, watermarine: ruWatermarine,
        urbanhightech: ruUrbanhightech, constructionarch: ruConstructionarch,
      },
      el: {
        common: elCommon, home: elHome, footer: elFooter,
        armor: elArmor, chem: elChem, therm: elTherm, hydro: elHydro, technology: elTechnology,
        about: elAbout, contacts: elContacts, requestinspection: elRequestInspection,
        sectorshub: elSectorshub, systemshub: elSystemshub,
        privacy: elPrivacy, terms: elTerms, comparison: elComparison, sections: elSections,
        hydrohotspots: elHydrohotspots, contactform: elContactform,
        heavyindustry: elHeavyindustry, foodpharma: elFoodpharma, transportparking: elTransportparking,
        architecturalzone: elArchitecturalzone, certificates: elCertificates, hseq: elHseq,
        pilotprojects: elPilotprojects, cadbim: elCadbim, technicalmaps: elTechnicalmaps, careers: elCareers,
        energydefense: elEnergydefense, agrobiogaz: elAgrobiogaz, watermarine: elWatermarine,
        urbanhightech: elUrbanhightech, constructionarch: elConstructionarch,
      },
    },
    defaultNS: 'common',
    fallbackLng: 'bg',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

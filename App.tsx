
import React, { lazy, Suspense, useEffect, Component, ReactNode } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate, useParams, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Always-needed components (home page + shell)
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SolutionsGrid } from './components/SolutionsGrid';
import { TrustBridge } from './components/TrustBridge';
import { TechnologySection } from './components/TechnologySection';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { ComparisonSection } from './components/ComparisonSection';
import { IndustriesSection } from './components/IndustriesSection';
import { ManifestoBanner } from './components/ManifestoBanner';
import { PilotProjectsSection } from './components/PilotProjectsSection';
import { EcoSection } from './components/EcoSection';
import { StructuredData } from './components/StructuredData';
import { CookieConsent } from './components/CookieConsent';
import { NotFoundPage } from './components/NotFoundPage';
import { detectLanguage } from './utils/detectLanguage';
import { usePageMeta } from './hooks/usePageMeta';

import photoGancho from './assets/photo_gancho.jpg';
import photoIvaylo from './assets/photo_ivaylo.jpg';

// Lazy-loaded pages — each becomes a separate JS chunk
const lazy$ = <T extends { [k: string]: React.ComponentType<any> }>(
  loader: () => Promise<T>,
  name: keyof T
) => lazy(() => loader().then(m => ({ default: m[name] as React.ComponentType<any> })));

const SectorsHubPage        = lazy$(() => import('./components/SectorsHubPage'),                'SectorsHubPage');
const SystemsHubPage        = lazy$(() => import('./components/SystemsHubPage'),                'SystemsHubPage');
const FoodPharmaPage        = lazy$(() => import('./components/FoodPharmaPage'),                'FoodPharmaPage');
const HeavyIndustryLogisticsPage = lazy$(() => import('./components/HeavyIndustryLogisticsPage'), 'HeavyIndustryLogisticsPage');
const TransportParkingPage  = lazy$(() => import('./components/TransportParkingPage'),          'TransportParkingPage');
const AgroBiogasPage        = lazy$(() => import('./components/AgroBiogasPage'),                'AgroBiogasPage');
const WaterMarinePage       = lazy$(() => import('./components/WaterMarinePage'),               'WaterMarinePage');
const EnergyDefensePage     = lazy$(() => import('./components/EnergyDefensePage'),             'EnergyDefensePage');
const ConstructionArchitecturePage = lazy$(() => import('./components/ConstructionArchitecturePage'), 'ConstructionArchitecturePage');
const UrbanHighTechPage     = lazy$(() => import('./components/UrbanHighTechPage'),             'UrbanHighTechPage');
const ArmorPage             = lazy$(() => import('./components/ArmorPage'),                     'ArmorPage');
const ChemPage              = lazy$(() => import('./components/ChemPage'),                      'ChemPage');
const ThermPage             = lazy$(() => import('./components/ThermPage'),                     'ThermPage');
const HydroPage             = lazy$(() => import('./components/HydroPage'),                     'HydroPage');
const TechnologyPage        = lazy$(() => import('./components/TechnologyPage'),                'TechnologyPage');
const PilotProjectsPage     = lazy$(() => import('./components/PilotProjectsPage'),             'PilotProjectsPage');
const AboutUsPage           = lazy$(() => import('./components/AboutUsPage'),                   'AboutUsPage');
const CareersPage           = lazy$(() => import('./components/CareersPage'),                   'CareersPage');
const HseqPage              = lazy$(() => import('./components/HseqPage'),                      'HseqPage');
const ContactsPage          = lazy$(() => import('./components/ContactsPage'),                  'ContactsPage');
const ArchitecturalZonePage = lazy$(() => import('./components/ArchitecturalZonePage'),         'ArchitecturalZonePage');
const TechnicalMapsPage     = lazy$(() => import('./components/TechnicalMapsPage'),             'TechnicalMapsPage');
const CadBimPage            = lazy$(() => import('./components/CadBimPage'),                    'CadBimPage');
const CertificatesPage      = lazy$(() => import('./components/CertificatesPage'),              'CertificatesPage');
const RequestInspectionPage = lazy$(() => import('./components/RequestInspectionPage'),         'RequestInspectionPage');
const PrivacyPolicyPage     = lazy$(() => import('./components/PrivacyPolicyPage'),             'PrivacyPolicyPage');
const TermsConditionsPage   = lazy$(() => import('./components/TermsConditionsPage'),           'TermsConditionsPage');
const DigitalBusinessCard   = lazy$(() => import('./components/DigitalBusinessCard'),           'DigitalBusinessCard');
const SystemSelectorPage    = lazy$(() => import('./components/SystemSelectorPage'),             'SystemSelectorPage');
const TenderGeneratorPage   = lazy$(() => import('./components/TenderGeneratorPage'),            'TenderGeneratorPage');
const LicensingPage         = lazy$(() => import('./components/LicensingPage'),                  'LicensingPage');

const SUPPORTED_LANGS = ['bg', 'en', 'de', 'fr', 'es', 'tr', 'ru', 'el'];

const PageSpinner = () => (
  <div className="min-h-screen bg-[#050505] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-geo-yellow border-t-transparent rounded-full animate-spin" />
  </div>
);

class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state = { error: null };
  static getDerivedStateFromError(error: Error) { return { error }; }
  render() {
    if (this.state.error) {
      return (
        <div style={{ color: '#fff', background: '#050505', padding: 40, fontFamily: 'monospace' }}>
          <h2>Грешка при зареждане / Error loading page</h2>
          <pre style={{ color: '#f90', fontSize: 12, whiteSpace: 'pre-wrap' }}>
            {(this.state.error as Error).message}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

// Detects language and redirects to /{lang}[/rest-of-path]
const LangRedirect: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const raw = localStorage.getItem('i18nextLng') ?? '';
    // normalise "bg-BG" → "bg", "en-US" → "en"
    const saved = raw.split('-')[0].toLowerCase();
    if (saved && SUPPORTED_LANGS.includes(saved)) {
      const rest = location.pathname === '/' ? '' : location.pathname;
      navigate(`/${saved}${rest}`, { replace: true });
      return;
    }

    // Redirect immediately to 'bg', then upgrade language in background
    navigate('/bg', { replace: true });
    detectLanguage().then(lang => {
      if (lang !== 'bg') navigate(`/${lang}`, { replace: true });
    });
  }, []);

  return <PageSpinner />;
};

// Validates :lang param, syncs i18n, renders child routes
const LangLayout: React.FC = () => {
  const { lang } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (!lang || !SUPPORTED_LANGS.includes(lang)) {
      navigate('/bg', { replace: true });
      return;
    }
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
    localStorage.setItem('i18nextLng', lang);
  }, [lang]);

  if (!lang || !SUPPORTED_LANGS.includes(lang)) return null;
  return <Outlet />;
};

const HomePage = () => {
  usePageMeta('home');
  const { state } = useLocation();

  useEffect(() => {
    if (state?.target) {
      setTimeout(() => {
        const el = document.getElementById(state.target.replace('#', ''));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [state]);

  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />
      <main>
        <Hero />
        <TrustBridge />
        <IndustriesSection />
        <ManifestoBanner />
        <SolutionsGrid />
        <ComparisonSection />
        <TechnologySection />
        <PilotProjectsSection />
        <EcoSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <StructuredData />
        <CookieConsent />
        <Suspense fallback={<PageSpinner />}>
          <Routes>
            {/* Root: detect language and redirect */}
            <Route path="/" element={<LangRedirect />} />

            {/* Language-prefixed routes */}
            <Route path="/:lang" element={<LangLayout />}>
              <Route index element={<HomePage />} />
              <Route path="sectors" element={<SectorsHubPage />} />
              <Route path="systems" element={<SystemsHubPage />} />
              <Route path="system-selector" element={<SystemSelectorPage />} />
              <Route path="tender-generator" element={<TenderGeneratorPage />} />
              <Route path="licensing" element={<LicensingPage />} />

              {/* Sector pages */}
              <Route path="food-industry" element={<FoodPharmaPage />} />
              <Route path="heavy-industry" element={<HeavyIndustryLogisticsPage />} />
              <Route path="infrastructure" element={<TransportParkingPage />} />
              <Route path="agriculture" element={<AgroBiogasPage />} />
              <Route path="water-marine" element={<WaterMarinePage />} />
              <Route path="energy-defense" element={<EnergyDefensePage />} />
              <Route path="construction" element={<ConstructionArchitecturePage />} />
              <Route path="urban-hightech" element={<UrbanHighTechPage />} />

              {/* System pages */}
              <Route path="armor" element={<ArmorPage />} />
              <Route path="chem" element={<ChemPage />} />
              <Route path="therm" element={<ThermPage />} />
              <Route path="hydro" element={<HydroPage />} />

              {/* Info pages */}
              <Route path="technology" element={<TechnologyPage />} />
              <Route path="references" element={<PilotProjectsPage />} />
              <Route path="about" element={<AboutUsPage />} />
              <Route path="careers" element={<CareersPage />} />
              <Route path="hseq" element={<HseqPage />} />
              <Route path="contacts" element={<ContactsPage />} />

              {/* Technical resources */}
              <Route path="architectural" element={<ArchitecturalZonePage />} />
              <Route path="technical-maps" element={<TechnicalMapsPage />} />
              <Route path="cad-bim" element={<CadBimPage />} />
              <Route path="certificates" element={<CertificatesPage />} />
              <Route path="request-inspection" element={<RequestInspectionPage />} />

              {/* Legal */}
              <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="terms-conditions" element={<TermsConditionsPage />} />

              {/* 404 inside lang group */}
              <Route path="*" element={<NotFoundPage />} />
            </Route>

            {/* Digital business cards — language-independent */}
            <Route
              path="/furnadjiev"
              element={
                <DigitalBusinessCard
                  name="ГАНЧО ФУРНАДЖИЕВ"
                  title="ИЗПЪЛНИТЕЛЕН ДИРЕКТОР"
                  phone="+359 897 0000 11"
                  email="furnadjiev@geonyxgroup.com"
                  photoUrl={photoGancho}
                  linkedinUrl="https://www.linkedin.com/in/furnadjiev"
                />
              }
            />
            <Route
              path="/koev"
              element={
                <DigitalBusinessCard
                  name="ИВАЙЛО КОЕВ"
                  title="ИЗПЪЛНИТЕЛЕН ДИРЕКТОР"
                  phone="+359 89 43 43 990"
                  email="koev@geonyxgroup.com"
                  photoUrl={photoIvaylo}
                />
              }
            />

            {/* Catch-all: 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;

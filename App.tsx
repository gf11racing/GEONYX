
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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
import { FoodPharmaPage } from './components/FoodPharmaPage';
import { HeavyIndustryLogisticsPage } from './components/HeavyIndustryLogisticsPage';
import { TransportParkingPage } from './components/TransportParkingPage';
import { AgroBiogasPage } from './components/AgroBiogasPage';
import { WaterMarinePage } from './components/WaterMarinePage';
import { EnergyDefensePage } from './components/EnergyDefensePage';
import { ConstructionArchitecturePage } from './components/ConstructionArchitecturePage';
import { TechnologyPage } from './components/TechnologyPage';
import { PilotProjectsPage } from './components/PilotProjectsPage';
import { AboutUsPage } from './components/AboutUsPage';
import { CareersPage } from './components/CareersPage';
import { HseqPage } from './components/HseqPage';
import { ContactsPage } from './components/ContactsPage';
import { ArchitecturalZonePage } from './components/ArchitecturalZonePage';
import { TechnicalMapsPage } from './components/TechnicalMapsPage';
import { CadBimPage } from './components/CadBimPage';
import { CertificatesPage } from './components/CertificatesPage';
import { RequestInspectionPage } from './components/RequestInspectionPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { TermsConditionsPage } from './components/TermsConditionsPage';
import { DigitalBusinessCard } from './components/DigitalBusinessCard'; 
import { ArmorPage } from './components/ArmorPage';
import { ChemPage } from './components/ChemPage';
import { ThermPage } from './components/ThermPage';
import { HydroPage } from './components/HydroPage';
import { SectorsHubPage } from './components/SectorsHubPage';
import { SystemsHubPage } from './components/SystemsHubPage';
import { UrbanHighTechPage } from './components/UrbanHighTechPage';
import { StructuredData } from './components/StructuredData';

import photoGancho from './assets/photo_gancho.jpg';
import photoIvaylo from './assets/photo_ivaylo.jpg';
import logoGEONYX from './assets/logoGEONYX.png';

const HomePage = () => {
  const { state } = useLocation();

  useEffect(() => {
    // SEO & METADATA (Master Design Spec)
    document.title = "GEONYX - Индустриални геополимерни решения";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Разработване на високотехнологични геополимерни матрици за критична инфраструктура и тежка индустрия. Инженеринг отвъд границите на бетона."
      );
    }

    if (state && state.target) {
      setTimeout(() => {
        const element = document.getElementById(state.target.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
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
    <BrowserRouter>
      <StructuredData />
      <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/sectors" element={<SectorsHubPage />} />
          <Route path="/systems" element={<SystemsHubPage />} />
          
          {/* Main Sector Pages (Level 1) */}
          <Route path="/food-industry" element={<FoodPharmaPage />} />
          <Route path="/heavy-industry" element={<HeavyIndustryLogisticsPage />} />
          <Route path="/infrastructure" element={<TransportParkingPage />} />
          <Route path="/agriculture" element={<AgroBiogasPage />} />
          <Route path="/water-marine" element={<WaterMarinePage />} />
          <Route path="/energy-defense" element={<EnergyDefensePage />} />
          <Route path="/construction" element={<ConstructionArchitecturePage />} />
          <Route path="/urban-hightech" element={<UrbanHighTechPage />} />
          
          {/* System Detail Pages */}
          <Route path="/armor" element={<ArmorPage />} />
          <Route path="/chem" element={<ChemPage />} />
          <Route path="/therm" element={<ThermPage />} />
          <Route path="/hydro" element={<HydroPage />} />

          {/* Key Info Pages */}
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/references" element={<PilotProjectsPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/hseq" element={<HseqPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          
          {/* Technical Resources */}
          <Route path="/architectural" element={<ArchitecturalZonePage />} />
          <Route path="/technical-maps" element={<TechnicalMapsPage />} />
          <Route path="/cad-bim" element={<CadBimPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/request-inspection" element={<RequestInspectionPage />} />
          
          {/* Legal & Utility */}
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-conditions" element={<TermsConditionsPage />} />
          
          {/* Digital Cards - Bulgarian translations applied */}
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
        </Routes>
    </BrowserRouter>
  );
}

export default App;

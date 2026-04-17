
import React, { useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Button } from './Button';
import { 
  Layers, Maximize, Box, Download, ArrowRight, Palette, 
  FileText, ShieldCheck, Copy, FileCode, CheckCircle,
  Flame, Globe, Award, ShieldAlert, Footprints, BadgeCheck
} from 'lucide-react';
import { SafeImage } from './SafeImage';

const DOC_SYSTEMS = [
  { name: 'GEONYX ARMOR', id: 'armor' },
  { name: 'GEONYX CHEM', id: 'chem' },
  { name: 'GEONYX THERM', id: 'therm' },
  { name: 'GEONYX HYDRO', id: 'hydro' },
];

const CAD_DETAILS = [
  { 
    id: 'A', 
    title: 'ДЕТАЙЛ А: СТЕНА-ПОД', 
    desc: 'Детайл за хигиенен холкер и връзка със стена.',
    icon: Layers
  },
  { 
    id: 'B', 
    title: 'ДЕТАЙЛ B: ОТВОДНЯВАНЕ', 
    desc: 'Детайл за връзка с линейни сифони и точково отводняване.',
    icon: DropletsIcon
  },
  { 
    id: 'C', 
    title: 'ДЕТАЙЛ C: ФУГИ И ПУКНАТИНИ', 
    desc: 'Детайл за обработка на дилатационни фуги и пукнатини.',
    icon: Maximize
  },
];

const CERTIFICATIONS = [
  { label: 'ISO 9001:2015', sub: 'Quality Management', icon: BadgeCheck },
  { label: 'EN 13813', sub: 'Screed Material', icon: Globe },
  { label: 'HACCP', sub: 'Food Safety', icon: ShieldCheck },
  { label: 'WHG §19', sub: 'Water Resources Act', icon: ShieldAlert },
  { label: 'DIN 51130', sub: 'Slip Resistance R9-R13', icon: Footprints },
  { label: 'Euroclass A1fl', sub: 'Fire Safety', icon: Flame },
];

// Helper icon component since Droplets isn't imported in the list above but used in the data
function DropletsIcon(props: any) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" height="24" viewBox="0 0 24 24" 
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
      {...props}
    >
      <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.8-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/>
    </svg>
  );
}

export const ArchitecturalZonePage: React.FC = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "GEONYX | Архитектурна зона – Дизайнерски минерални повърхности и фасадни решения";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', "GEONYX Архитектурна зона предлага високоустойчиви минерални настилки и повърхности за обществени пространства, търговски обекти, фасади и модерна архитектура. Безфугови системи с висока естетика, механична устойчивост и дълъг експлоатационен живот.");
    }
  }, []);

  const handleCopyTender = () => {
    const text = "Доставка и полагане на високоустойчива минерална настилка тип GEONYX®, с дебелина 6-9мм. Якост на натиск >110 N/mm² съгласно EN 13892-2. Износустойчивост <1.5 cm³/50cm² съгласно DIN 52108 (Böhme). Клас на пожароустойчивост A1fl. Продуктът трябва да притежава CE маркировка и DoP декларация...";
    navigator.clipboard.writeText(text);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] font-sans text-gray-200 selection:bg-geo-yellow selection:text-black">
      <Navbar />
      
      {/* STATIC STYLES TO PREVENT FLICKERING */}
      <style>{`
        @keyframes width-grow { from { width: 0; } }
        @keyframes height-grow { from { height: 0; } }
        @keyframes dash-draw { to { stroke-dashoffset: 0; } }
      `}</style>

      {/* 1. HERO SECTION (The Vision) */}
      <section className="relative min-h-[85vh] flex items-center justify-center border-b border-[#222] overflow-hidden bg-black">
        {/* Visual Context - Clean, No Grid */}
        <div className="absolute inset-0 z-0">
          <SafeImage 
            src="/GEONYX-Architectural.webp" 
            alt="Luxury Minimalist Gallery with Dark Floor" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/60 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-left pt-20">
             {/* Style Line - Left Aligned */}
            <div className="flex items-center justify-start gap-3 mb-8 page-animate-tag">
                <div className="h-[2px] w-12 bg-geo-yellow shadow-[0_0_15px_#FFCC00]"></div>
                <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">АРХИТЕКТУРНА ЗОНА</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 uppercase tracking-tighter drop-shadow-2xl max-w-6xl page-animate-title">
              ТЕХНИЧЕСКИ <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-geo-yellow to-yellow-600">ЦЕНТЪР</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light max-w-4xl leading-relaxed border-l-4 border-geo-yellow pl-6 py-2 bg-black/30 backdrop-blur-sm page-animate-desc">
              Инженерен портал за архитекти и проектанти. <br className="hidden md:block"/>
              Текстури, CAD детайли и спецификации за обществени поръчки.
            </p>
        </div>
      </section>

      {/* 2. THE ZIG-ZAG CONTENT FLOW (Updated Content) */}
      <div className="w-full bg-[#111]">
        
        {/* BLOCK 1: TEXTURES */}
        <section className="flex flex-col lg:flex-row w-full min-h-[700px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-Architectural1.webp" 
                    alt="Macro Texture Dark Stone" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <Layers className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">Текстури</span>
                </div>
            </div>

            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <div className="mb-8">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">
                             ПОВЪРХНОСТНА СТРУКТУРА
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        ВИЗУАЛНА И ТАКТИЛНА <br/> КЛАСИФИКАЦИЯ
                    </h3>
                </div>

                <div className="space-y-8">
                    <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-[#333] pl-6">
                        GEONYX повърхностите са класифицирани според Light Reflectance Value (LRV) и индекс на грапавост (Surface Roughness). От дълбоко матови покрития (Deep Matte) за поглъщане на светлина, до сатенени финиши. Предоставяме текстури, отговарящи на реалните физически свойства на материала.
                    </p>
                    
                    <button className="h-12 px-8 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase group">
                         РАЗГЛЕДАЙ БИБЛИОТЕКА 
                         <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>

        {/* BLOCK 2: MONOLITHIC */}
        <section className="flex flex-col lg:flex-row-reverse w-full min-h-[700px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-Architectural2.webp" 
                    alt="Seamless Open Space Office" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80" 
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><Maximize className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">Монолит</span>
                </div>
            </div>

            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">
                             БЕЗФУГОВА ИНТЕГРАЦИЯ
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        КОНСТРУКТИВНА <br/> НЕПРЕКЪСНАТОСТ
                    </h3>
                </div>

                <div className="space-y-8">
                    <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-[#333] pl-6">
                        Технологията на GEONYX позволява полагане на големи площи без дилатационни прекъсвания (Seamless Application). Това осигурява хигиенна чистота и елиминира мрежата от фуги, характерна за плочките. Единна, непрекъсната минерална повърхност от стена до стена.
                    </p>
                    
                    <button className="h-12 px-8 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase group">
                         ТЕХНОЛОГИЯ НА ПОЛАГАНЕ 
                         <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>

        {/* BLOCK 3: 3D ASSETS (Updated Button Style) */}
        <section className="flex flex-col lg:flex-row w-full min-h-[700px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-Architectural3.webp" 
                    alt="Architect Desk and Material Samples" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <Box className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">3D Асети</span>
                </div>
            </div>

            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">
                             ДИГИТАЛНИ АКТИВИ
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        PBR КАРТИ ЗА <br/> V-RAY / CORONA / BIM
                    </h3>
                </div>

                <div className="space-y-10">
                    <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-[#333] pl-6">
                        Дигитализирани повърхности чрез 8K сканиране. Пълният пакет включва физически коректни карти: Diffuse, Reflection, Glossiness, Normal и Displacement. Готови материали за интеграция във вашите BIM и CAD визуализации преди изпълнение.
                    </p>

                    <button className="h-12 px-8 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase group">
                        <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                        ИЗТЕГЛИ PBR ZIP (8K)
                    </button>
                </div>
            </div>
        </section>
      </div>

      {/* 3. DOCUMENTATION VAULT (UPDATED ICONS & BUTTONS) */}
      <section className="py-20 bg-[#0a0a0a] border-b border-[#222]">
          <div className="container mx-auto px-6 md:px-10">
              <div className="text-center mb-16">
                   <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-[2px] w-6 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">
                            ЦЕНТЪР ЗА ДАННИ
                        </span>
                        <div className="h-[2px] w-6 bg-geo-yellow"></div>
                   </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase">ТЕХНИЧЕСКА ДОКУМЕНТАЦИЯ</h2>
                  <p className="text-gray-500 font-mono text-sm mt-2 uppercase">ПАСПОРТИ НА СИСТЕМИТЕ И ДЕКЛАРАЦИИ ЗА ЕКСПЛОАТАЦИЯ (DoP)</p>
              </div>

              <div className="max-w-5xl mx-auto">
                  {DOC_SYSTEMS.map((sys, index) => (
                      <div key={index} className="flex flex-col md:flex-row items-center justify-between bg-[#111] border border-[#222] p-6 mb-4 hover:border-geo-yellow transition-all group">
                          <div className="flex items-center gap-4 mb-4 md:mb-0">
                              <FileText className="w-8 h-8 text-geo-yellow flex-shrink-0" />
                              <h3 className="text-white font-bold text-lg tracking-wide uppercase">{sys.name}</h3>
                          </div>
                          
                          <div className="flex gap-4">
                              <button className="px-4 py-2 border border-[#333] text-gray-400 hover:text-black hover:bg-geo-yellow hover:border-geo-yellow text-xs font-bold uppercase transition-colors">
                                  [TDS Technical Data]
                              </button>
                              <button className="px-4 py-2 border border-[#333] text-gray-400 hover:text-black hover:bg-geo-yellow hover:border-geo-yellow text-xs font-bold uppercase transition-colors">
                                  [MSDS Safety Data]
                              </button>
                              <button className="px-4 py-2 border border-[#333] text-gray-400 hover:text-black hover:bg-geo-yellow hover:border-geo-yellow text-xs font-bold uppercase transition-colors">
                                  [DoP Declaration]
                              </button>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 4. CAD & BIM LIBRARY (NEW) */}
      <section className="py-20 bg-[#0F0F0F] border-b border-[#222]">
           <div className="container mx-auto px-6 md:px-10">
              <div className="text-center mb-16">
                  <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-[2px] w-6 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">
                             ИНЖЕНЕРИНГ
                        </span>
                        <div className="h-[2px] w-6 bg-geo-yellow"></div>
                   </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase">КОНСТРУКТИВНИ ДЕТАЙЛИ И ВЪЗЛИ</h2>
                  <p className="text-gray-500 font-mono text-sm mt-2 uppercase">СТАНДАРТИЗИРАНИ .DWG И .RVT ФАЙЛОВЕ ЗА ПРОЕКТАНТИ</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {CAD_DETAILS.map((det, i) => (
                      <div key={i} className="bg-[#141414] p-8 border border-[#222] hover:border-geo-yellow group transition-all text-center">
                          <div className="w-16 h-16 bg-[#0a0a0a] rounded-full border border-[#333] flex items-center justify-center mx-auto mb-6 group-hover:border-geo-yellow transition-colors">
                              <det.icon className="w-8 h-8 text-gray-400 group-hover:text-geo-yellow transition-colors" />
                          </div>
                          <h3 className="text-white font-bold uppercase text-lg mb-2">{det.title}</h3>
                          <p className="text-gray-500 text-sm mb-8 h-10">{det.desc}</p>
                          
                          <div className="flex flex-col gap-3">
                              <button className="w-full py-3 bg-[#222] text-gray-300 hover:bg-geo-yellow hover:text-black font-bold text-xs uppercase flex items-center justify-center gap-2 transition-colors">
                                  <FileCode className="w-4 h-4" /> DOWNLOAD .DWG
                              </button>
                              <button className="w-full py-3 bg-[#222] text-gray-300 hover:bg-geo-yellow hover:text-black font-bold text-xs uppercase flex items-center justify-center gap-2 transition-colors">
                                  <Box className="w-4 h-4" /> DOWNLOAD .RVT
                              </button>
                          </div>
                      </div>
                  ))}
              </div>
           </div>
      </section>

      {/* 5. TENDER SPECIFICATIONS (NEW) */}
      <section className="py-20 bg-[#111] border-b border-[#222]">
          <div className="container mx-auto px-6 md:px-10 max-w-5xl">
              <div className="mb-10 text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-black text-white uppercase mb-2">ТЕКСТОВЕ ЗА КОЛИЧЕСТВЕНИ СМЕТКИ (TENDER SPECS)</h2>
                  <p className="text-gray-500 text-sm font-bold uppercase tracking-wider">ГОТОВИ СПЕЦИФИКАЦИИ ЗА ОБЩЕСТВЕНИ ПОРЪЧКИ И ТЪРГОВЕ</p>
              </div>

              <div className="relative bg-[#0a0a0a] border border-[#333] p-6 md:p-10 rounded-sm">
                  <p className="text-gray-300 font-mono text-sm md:text-base leading-relaxed whitespace-pre-wrap">
                      "Доставка и полагане на високоустойчива минерална настилка тип GEONYX®, с дебелина 6-9мм. Якост на натиск {'>'}110 N/mm² съгласно EN 13892-2. Износустойчивост {'<'}1.5 cm³/50cm² съгласно DIN 52108 (Böhme). Клас на пожароустойчивост A1fl. Продуктът трябва да притежава CE маркировка и DoP декларация..."
                  </p>
                  
                  <div className="mt-8 flex justify-end">
                      <Button 
                        onClick={handleCopyTender} 
                        className={`flex items-center gap-2 px-6 py-3 font-bold uppercase text-sm transition-all ${copySuccess ? 'bg-green-600 text-white border-green-600' : 'bg-geo-yellow text-black hover:bg-white border-transparent'}`}
                      >
                          {copySuccess ? <CheckCircle className="w-4 h-4"/> : <Copy className="w-4 h-4"/>}
                          {copySuccess ? 'КОПИРАНО!' : 'COPY TEXT TO CLIPBOARD'}
                      </Button>
                  </div>
              </div>
          </div>
      </section>

      {/* 6. CERTIFICATION HUB (NEW) */}
      <section className="py-24 bg-[#0a0a0a] border-b border-[#222]">
          <div className="container mx-auto px-6 md:px-10">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-4">СЕРТИФИКАТИ И СТАНДАРТИ</h2>
                  <div className="w-24 h-1 bg-geo-yellow mx-auto"></div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                  {CERTIFICATIONS.map((cert, index) => (
                      <div key={index} className="flex flex-col items-center text-center group cursor-default">
                          <div className="w-20 h-20 bg-[#111] rounded-full border border-[#333] flex items-center justify-center mb-4 group-hover:border-geo-yellow group-hover:shadow-[0_0_20px_rgba(255,204,0,0.2)] transition-all duration-300">
                              <cert.icon className="w-8 h-8 text-gray-500 group-hover:text-geo-yellow transition-colors" />
                          </div>
                          <h4 className="text-white font-bold text-sm uppercase mb-1">{cert.label}</h4>
                          <span className="text-gray-600 text-[10px] font-bold uppercase tracking-wide">{cert.sub}</span>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      <Footer />
    </div>
  );
};

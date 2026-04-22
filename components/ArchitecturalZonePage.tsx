
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Button } from './Button';
import {
  Layers, Maximize, Box, Download, ArrowRight,
  FileText, ShieldCheck, Copy, FileCode, CheckCircle,
  Flame, Globe, ShieldAlert, Footprints, BadgeCheck
} from 'lucide-react';
import { SafeImage } from './SafeImage';
import { usePageMeta } from '../hooks/usePageMeta';

const DOC_SYSTEMS = [
  { name: 'GEONYX ARMOR', id: 'armor' },
  { name: 'GEONYX CHEM', id: 'chem' },
  { name: 'GEONYX THERM', id: 'therm' },
  { name: 'GEONYX HYDRO', id: 'hydro' },
];

const CAD_DETAILS = [
  { id: 'A', key: 'detailA', icon: Layers },
  { id: 'B', key: 'detailB', icon: DropletsIcon },
  { id: 'C', key: 'detailC', icon: Maximize },
];

const CERTIFICATIONS = [
  { label: 'ISO 9001:2015', key: 'iso9001', icon: BadgeCheck },
  { label: 'EN 13813',      key: 'en13813', icon: Globe },
  { label: 'HACCP',         key: 'haccp',   icon: ShieldCheck },
  { label: 'WHG §19',       key: 'whg',     icon: ShieldAlert },
  { label: 'DIN 51130',     key: 'din51130',icon: Footprints },
  { label: 'Euroclass A1fl',key: 'euroclass',icon: Flame },
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
  usePageMeta('architecturalzone');
  const { t } = useTranslation('architecturalzone');
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = t('meta.title');
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', t('meta.description'));
    }
  }, [t]);

  const handleCopyTender = () => {
    const text = t('tender.text');
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
        <div className="absolute inset-0 z-0">
          <SafeImage
            src="/GEONYX-Architectural.webp"
            alt="Luxury Minimalist Gallery with Dark Floor"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/60 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-left pt-20">
            <div className="flex items-center justify-start gap-3 mb-8 page-animate-tag">
                <div className="h-[2px] w-12 bg-geo-yellow shadow-[0_0_15px_#FFCC00]"></div>
                <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">{t('hero.eyebrow')}</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 uppercase tracking-tighter drop-shadow-2xl max-w-6xl page-animate-title">
              {t('hero.titleLine1')} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-geo-yellow to-yellow-600">{t('hero.titleLine2')}</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light max-w-4xl leading-relaxed border-l-4 border-geo-yellow pl-6 py-2 bg-black/30 backdrop-blur-sm page-animate-desc">
              {t('hero.description')} <br className="hidden md:block"/>
              {t('hero.descriptionLine2')}
            </p>
        </div>
      </section>

      {/* 2. THE ZIG-ZAG CONTENT FLOW */}
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
                     <span className="text-white font-bold uppercase text-sm block">{t('textures.badge')}</span>
                </div>
            </div>

            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <div className="mb-8">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                             {t('textures.eyebrow')}
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        {t('textures.title')}
                    </h3>
                </div>

                <div className="space-y-8">
                    <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-[#333] pl-6">
                        {t('textures.description')}
                    </p>

                    <button className="h-12 px-8 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase group">
                         {t('textures.btn')}
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
                     <span className="text-white font-bold uppercase text-sm block">{t('monolith.badge')}</span>
                </div>
            </div>

            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                             {t('monolith.eyebrow')}
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        {t('monolith.title')}
                    </h3>
                </div>

                <div className="space-y-8">
                    <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-[#333] pl-6">
                        {t('monolith.description')}
                    </p>

                    <button className="h-12 px-8 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase group">
                         {t('monolith.btn')}
                         <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>

        {/* BLOCK 3: 3D ASSETS */}
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
                     <span className="text-white font-bold uppercase text-sm block">{t('assets3d.badge')}</span>
                </div>
            </div>

            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                             {t('assets3d.eyebrow')}
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        {t('assets3d.title')}
                    </h3>
                </div>

                <div className="space-y-10">
                    <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-[#333] pl-6">
                        {t('assets3d.description')}
                    </p>

                    <button className="h-12 px-8 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase group">
                        <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                        {t('assets3d.btn')}
                    </button>
                </div>
            </div>
        </section>
      </div>

      {/* 3. DOCUMENTATION VAULT */}
      <section className="py-20 bg-[#0a0a0a] border-b border-[#222]">
          <div className="container mx-auto px-6 md:px-10">
              <div className="text-center mb-16">
                   <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-[2px] w-6 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                            {t('documentation.eyebrow')}
                        </span>
                        <div className="h-[2px] w-6 bg-geo-yellow"></div>
                   </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase">{t('documentation.title')}</h2>
                  <p className="text-gray-500 font-mono text-sm mt-2 uppercase">{t('documentation.subtitle')}</p>
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
                                  {t('documentation.btnTds')}
                              </button>
                              <button className="px-4 py-2 border border-[#333] text-gray-400 hover:text-black hover:bg-geo-yellow hover:border-geo-yellow text-xs font-bold uppercase transition-colors">
                                  {t('documentation.btnMsds')}
                              </button>
                              <button className="px-4 py-2 border border-[#333] text-gray-400 hover:text-black hover:bg-geo-yellow hover:border-geo-yellow text-xs font-bold uppercase transition-colors">
                                  {t('documentation.btnDop')}
                              </button>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 4. CAD & BIM LIBRARY */}
      <section className="py-20 bg-[#0F0F0F] border-b border-[#222]">
           <div className="container mx-auto px-6 md:px-10">
              <div className="text-center mb-16">
                  <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-[2px] w-6 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                             {t('cadBim.eyebrow')}
                        </span>
                        <div className="h-[2px] w-6 bg-geo-yellow"></div>
                   </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase">{t('cadBim.title')}</h2>
                  <p className="text-gray-500 font-mono text-sm mt-2 uppercase">{t('cadBim.subtitle')}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {CAD_DETAILS.map((det, i) => (
                      <div key={i} className="bg-[#141414] p-8 border border-[#222] hover:border-geo-yellow group transition-all text-center">
                          <div className="w-16 h-16 bg-[#0a0a0a] rounded-full border border-[#333] flex items-center justify-center mx-auto mb-6 group-hover:border-geo-yellow transition-colors">
                              <det.icon className="w-8 h-8 text-gray-400 group-hover:text-geo-yellow transition-colors" />
                          </div>
                          <h3 className="text-white font-bold uppercase text-lg mb-2">{t(`cadBim.${det.key}.title`)}</h3>
                          <p className="text-gray-500 text-sm mb-8 h-10">{t(`cadBim.${det.key}.desc`)}</p>

                          <div className="flex flex-col gap-3">
                              <button className="w-full py-3 bg-[#222] text-gray-300 hover:bg-geo-yellow hover:text-black font-bold text-xs uppercase flex items-center justify-center gap-2 transition-colors">
                                  <FileCode className="w-4 h-4" /> {t('cadBim.btnDwg')}
                              </button>
                              <button className="w-full py-3 bg-[#222] text-gray-300 hover:bg-geo-yellow hover:text-black font-bold text-xs uppercase flex items-center justify-center gap-2 transition-colors">
                                  <Box className="w-4 h-4" /> {t('cadBim.btnRvt')}
                              </button>
                          </div>
                      </div>
                  ))}
              </div>
           </div>
      </section>

      {/* 5. TENDER SPECIFICATIONS */}
      <section className="py-20 bg-[#111] border-b border-[#222]">
          <div className="container mx-auto px-6 md:px-10 max-w-5xl">
              <div className="mb-10 text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-2">{t('tender.title')}</h2>
                  <p className="text-gray-500 text-sm font-bold uppercase tracking-wider">{t('tender.subtitle')}</p>
              </div>

              <div className="relative bg-[#0a0a0a] border border-[#333] p-6 md:p-10 rounded-sm">
                  <p className="text-gray-300 font-mono text-sm md:text-base leading-relaxed whitespace-pre-wrap">
                      {t('tender.text')}
                  </p>

                  <div className="mt-8 flex justify-end">
                      <Button
                        onClick={handleCopyTender}
                        className={`flex items-center gap-2 px-6 py-3 font-bold uppercase text-sm transition-all ${copySuccess ? 'bg-green-600 text-white border-green-600' : 'bg-geo-yellow text-black hover:bg-white border-transparent'}`}
                      >
                          {copySuccess ? <CheckCircle className="w-4 h-4"/> : <Copy className="w-4 h-4"/>}
                          {copySuccess ? t('tender.btnCopied') : t('tender.btnCopy')}
                      </Button>
                  </div>
              </div>
          </div>
      </section>

      {/* 6. CERTIFICATION HUB */}
      <section className="py-24 bg-[#0a0a0a] border-b border-[#222]">
          <div className="container mx-auto px-6 md:px-10">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-4">{t('certifications.title')}</h2>
                  <div className="w-24 h-1 bg-geo-yellow mx-auto"></div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                  {CERTIFICATIONS.map((cert, index) => (
                      <div key={index} className="flex flex-col items-center text-center group cursor-default">
                          <div className="w-20 h-20 bg-[#111] rounded-full border border-[#333] flex items-center justify-center mb-4 group-hover:border-geo-yellow group-hover:shadow-[0_0_20px_rgba(255,204,0,0.2)] transition-all duration-300">
                              <cert.icon className="w-8 h-8 text-gray-500 group-hover:text-geo-yellow transition-colors" />
                          </div>
                          <h4 className="text-white font-bold text-sm uppercase mb-1">{cert.label}</h4>
                          <span className="text-gray-600 text-[10px] font-bold uppercase tracking-wide">{t(`certifications.items.${cert.key}`)}</span>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      <Footer />
    </div>
  );
};

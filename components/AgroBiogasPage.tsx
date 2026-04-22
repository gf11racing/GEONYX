
import React, { useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Button } from './Button';
import {
  Warehouse, Beef, Sprout, Factory, Recycle, Biohazard, Fish, Droplets,
  Shield, Zap, Hammer, Flame, Wrench, FileText, ArrowRight, Download,
  HelpCircle, CheckCircle, Copy, Check, MousePointer2, Construction,
  FlaskConical
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { SafeImage } from './SafeImage';
import { useTranslation } from 'react-i18next';
import { useLang } from '../hooks/useLang';
import { usePageMeta } from '../hooks/usePageMeta';

export const AgroBiogasPage: React.FC = () => {
  usePageMeta('agrobiogaz');
  const navigate = useNavigate();
  const { t } = useTranslation('agrobiogaz');
  const { to } = useLang();
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
    <div className="min-h-screen bg-[#0b0c10] font-sans text-gray-200 overflow-x-hidden selection:bg-geo-yellow selection:text-black">
      <Navbar />

      {/* STATIC STYLES TO PREVENT FLICKERING */}
      <style>{`
        @keyframes width-grow { from { width: 0; } }
        @keyframes height-grow { from { height: 0; } }
        @keyframes dash-draw { to { stroke-dashoffset: 0; } }
      `}</style>

      {/* 1. HERO SECTION - SPLIT LAYOUT */}
      <section className="relative min-h-[85vh] flex items-center justify-center border-b border-[#222] overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <SafeImage
            src="/GEONYX-AGRO-HERO.webp"
            className="w-full h-full object-cover opacity-60"
            onError={(e) => { e.currentTarget.src = "/GEONYX-AGRO-HERO.webp" }}
            alt="Agro and Biogas"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-20 text-left">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-end">

                {/* LEFT COLUMN */}
                <div className="lg:w-2/3 text-left">
                    {/* Header Label */}
                    <div className="flex items-center justify-start gap-3 mb-8 page-animate-tag">
                        <div className="h-[2px] w-12 bg-geo-yellow shadow-[0_0_15px_#FFCC00]"></div>
                        <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">{t('hero.eyebrow')}</span>
                    </div>

                    {/* H1 Title */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 uppercase tracking-tighter drop-shadow-2xl mix-blend-difference page-animate-title">
                        {t('hero.titleLine1')} <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-geo-yellow to-yellow-600">{t('hero.titleLine2')}</span>
                    </h1>

                    {/* Description Box */}
                    <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light max-w-4xl leading-relaxed border-l-4 border-geo-yellow pl-6 py-2 bg-black/30 backdrop-blur-sm page-animate-desc">
                        {t('hero.description')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 page-animate-buttons">
                        <a href="#specs">
                            <Button
                                variant="primary"
                                className="h-12 px-6 text-sm font-bold bg-geo-yellow text-black border-none hover:bg-white transition-all shadow-[0_0_20px_rgba(255,204,0,0.15)] rounded-none uppercase tracking-wider flex items-center gap-2"
                            >
                                {t('hero.btn1')} <FileText className="w-4 h-4" />
                            </Button>
                        </a>
                        <Link to={to('/request-inspection')}>
                            <button className="h-12 px-6 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase">
                                {t('hero.btn2')} <ArrowRight className="w-4 h-4" />
                            </button>
                        </Link>
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="lg:w-1/3 w-full page-animate-stats">
                    <div className="bg-black/30 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-sm shadow-2xl">
                        <h3 className="text-white font-black uppercase text-sm mb-6">
                            {t('scope.title')}
                        </h3>

                        <div className="mb-6">
                            <span className="text-gray-500 font-bold uppercase text-[10px] tracking-widest block mb-3">{t('scope.zonesLabel')}</span>
                            <div className="grid grid-cols-2 gap-x-4 text-gray-300 text-xs font-bold uppercase leading-tight">
                                <div className="flex flex-col gap-3">
                                    <span className="border-l-2 border-geo-yellow pl-2">{t('scope.z1')}</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">{t('scope.z2')}</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">{t('scope.z3')}</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">{t('scope.z4')}</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">{t('scope.z5')}</span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className="border-l-2 border-geo-yellow pl-2">{t('scope.z6')}</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">{t('scope.z7')}</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">{t('scope.z8')}</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">{t('scope.z9')}</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">{t('scope.z10')}</span>
                                </div>
                            </div>
                        </div>

                        <div className="h-px w-full bg-white/10 mb-6"></div>

                        <div className="mb-6">
                            <span className="text-gray-500 font-bold uppercase text-[10px] tracking-widest block mb-3">{t('scope.systemsLabel')}</span>
                            <div className="flex flex-wrap gap-2">
                                {['ARMOR', 'CHEM', 'HYDRO', 'REPAIR'].map((sys, i) => (
                                    <span key={i} className="px-2 py-1 bg-white/10 text-white text-[10px] font-bold uppercase rounded-sm border border-white/5 hover:bg-white/20 transition-colors cursor-default">
                                        {sys}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="h-px w-full bg-white/10 mb-6"></div>

                        <div className="flex flex-col gap-3">
                            <a href="#applications" className="w-fit text-geo-yellow text-xs font-bold uppercase tracking-wider hover:text-white transition-colors flex items-center gap-2">
                                {t('scope.link1')}
                            </a>
                            <a href="#system-selection" className="w-fit text-geo-yellow text-xs font-bold uppercase tracking-wider hover:text-white transition-colors flex items-center gap-2">
                                {t('scope.link2')}
                            </a>
                            <a href="#offer-package" className="w-fit text-geo-yellow text-xs font-bold uppercase tracking-wider hover:text-white transition-colors flex items-center gap-2">
                                {t('scope.link3')}
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </section>

      {/* 2. MANIFESTO SECTION */}
      <section className="py-24 px-6 md:px-20 bg-[#111] border-b border-[#222]">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-8 leading-tight">
                {t('manifesto.titleLine1')} <br/>
                <span className="text-geo-yellow">{t('manifesto.titleLine2')}</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
                {t('manifesto.body')}
            </p>
        </div>
      </section>

      {/* 3. ZIG-ZAG SOLUTIONS */}
      <div className="w-full bg-[#0b0c10]">

        {/* Block 1 */}
        <section className="flex flex-col lg:flex-row w-full min-h-[600px] border-y border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage
                    src="/GEONYX-SILOS-AND-WAREHOUSES=FOR-MINERAL-FERTILIZERS.webp"
                    onError={(e) => { e.currentTarget.src = "/GEONYX-SILOS-AND-WAREHOUSES=FOR-MINERAL-FERTILIZERS.webp" }}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Fertilizer Warehouse"
                />
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <Warehouse className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">{t('blocks.b1.tag')}</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    {t('blocks.b1.title')}
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">{t('blocks.problemLabel')}</span>
                    <p className="text-gray-400 text-lg leading-relaxed">{t('blocks.b1.problem')}</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">{t('blocks.solutionLabel')}</span>
                    <p className="text-white font-medium text-lg leading-relaxed">{t('blocks.b1.solution')}</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        {t('blocks.suitableLabel')} {t('blocks.b1.systems')}
                    </div>
                </div>
            </div>
        </section>

        {/* Block 2 */}
        <section className="flex flex-col lg:flex-row-reverse w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage
                    src="/GEONYX-FARMS-MANURE-URINE-AND-AMMONIA.webp"
                    onError={(e) => { e.currentTarget.src = "/GEONYX-FARMS-MANURE-URINE-AND-AMMONIA.webp" }}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Farms and Barns"
                />
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><Beef className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">{t('blocks.b2.tag')}</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    {t('blocks.b2.title')}
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">{t('blocks.problemLabel')}</span>
                    <p className="text-gray-400 text-lg leading-relaxed">{t('blocks.b2.problem')}</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">{t('blocks.solutionLabel')}</span>
                    <p className="text-white font-medium text-lg leading-relaxed">{t('blocks.b2.solution')}</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        {t('blocks.suitableLabel')} {t('blocks.b2.systems')}
                    </div>
                </div>
            </div>
        </section>

        {/* Block 3 */}
        <section className="flex flex-col lg:flex-row w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage
                    src="/GEONYX-BIOGAS-AND-FERMENTATE.webp"
                    onError={(e) => { e.currentTarget.src = "/GEONYX-BIOGAS-AND-FERMENTATE.webp" }}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Biogas Plant"
                />
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <Factory className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">{t('blocks.b3.tag')}</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    {t('blocks.b3.title')}
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">{t('blocks.problemLabel')}</span>
                    <p className="text-gray-400 text-lg leading-relaxed">{t('blocks.b3.problem')}</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">{t('blocks.solutionLabel')}</span>
                    <p className="text-white font-medium text-lg leading-relaxed">{t('blocks.b3.solution')}</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        {t('blocks.suitableLabel')} {t('blocks.b3.systems')}
                    </div>
                </div>
            </div>
        </section>

        {/* Block 4 */}
        <section className="flex flex-col lg:flex-row-reverse w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage
                    src="/GEONYX-SLAUGHTERING-AND-ANIMAL-WASTE.webp"
                    onError={(e) => { e.currentTarget.src = "/GEONYX-SLAUGHTERING-AND-ANIMAL-WASTE.webp" }}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Rendering Plant"
                />
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><Biohazard className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">{t('blocks.b4.tag')}</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    {t('blocks.b4.title')}
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">{t('blocks.problemLabel')}</span>
                    <p className="text-gray-400 text-lg leading-relaxed">{t('blocks.b4.problem')}</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">{t('blocks.solutionLabel')}</span>
                    <p className="text-white font-medium text-lg leading-relaxed">{t('blocks.b4.solution')}</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        {t('blocks.suitableLabel')} {t('blocks.b4.systems')}
                    </div>
                </div>
            </div>
        </section>

        {/* Block 5 */}
        <section className="flex flex-col lg:flex-row w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage
                    src="/GEONYX-COMPOST-AND-OUTDOOR-AREAS.webp"
                    onError={(e) => { e.currentTarget.src = "/GEONYX-COMPOST-AND-OUTDOOR-AREAS.webp" }}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Composting"
                />
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <Recycle className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">{t('blocks.b5.tag')}</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    {t('blocks.b5.title')}
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">{t('blocks.problemLabel')}</span>
                    <p className="text-gray-400 text-lg leading-relaxed">{t('blocks.b5.problem')}</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">{t('blocks.solutionLabel')}</span>
                    <p className="text-white font-medium text-lg leading-relaxed">{t('blocks.b5.solution')}</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        {t('blocks.suitableLabel')} {t('blocks.b5.systems')}
                    </div>
                </div>
            </div>
        </section>

        {/* Block 6 */}
        <section className="flex flex-col lg:flex-row-reverse w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage
                    src="/GEONYX-ORANGERIES.webp"
                    onError={(e) => { e.currentTarget.src = "/GEONYX-ORANGERIES.webp" }}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Greenhouses"
                />
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><Sprout className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">{t('blocks.b6.tag')}</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    {t('blocks.b6.title')}
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">{t('blocks.problemLabel')}</span>
                    <p className="text-gray-400 text-lg leading-relaxed">{t('blocks.b6.problem')}</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">{t('blocks.solutionLabel')}</span>
                    <p className="text-white font-medium text-lg leading-relaxed">{t('blocks.b6.solution')}</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        {t('blocks.suitableLabel')} {t('blocks.b6.systems')}
                    </div>
                </div>
            </div>
        </section>

        {/* Block 7 */}
        <section className="flex flex-col lg:flex-row w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage
                    src="/GEONYX-ZOOS.webp"
                    onError={(e) => { e.currentTarget.src = "/GEONYX-ZOOS.webp" }}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Zoo and Aquarium"
                />
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <Fish className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">{t('blocks.b7.tag')}</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    {t('blocks.b7.title')}
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">{t('blocks.problemLabel')}</span>
                    <p className="text-gray-400 text-lg leading-relaxed">{t('blocks.b7.problem')}</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">{t('blocks.solutionLabel')}</span>
                    <p className="text-white font-medium text-lg leading-relaxed">{t('blocks.b7.solution')}</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        {t('blocks.suitableLabel')} {t('blocks.b7.systems')}
                    </div>
                </div>
            </div>
        </section>

      </div>

      {/* 4. INVESTMENT AUDIT (ROI Table) */}
      <section className="py-24 px-6 bg-[#0f1014] border-b border-[#222]">
          <div className="container mx-auto">
              <div className="text-center mb-16">
                   <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">{t('roi.eyebrow')}</span>
                    </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase">{t('roi.title')}</h2>
              </div>

              <div className="w-full overflow-x-auto border border-[#333] shadow-2xl bg-[#111]">
                  <table className="w-full min-w-[900px] border-collapse text-left">
                      <thead>
                          <tr className="bg-black">
                              <th className="p-4 text-white font-black uppercase tracking-wider text-xs border-b border-r border-[#333] w-1/4">{t('roi.colParam')}</th>
                              <th className="p-4 bg-[#1a1a1a] text-geo-yellow font-black uppercase tracking-wider text-sm border-b border-r border-[#333] w-1/4 relative border-t-4 border-t-geo-yellow">
                                  GEONYX
                              </th>
                              <th className="p-4 text-gray-500 font-bold uppercase tracking-wider text-xs border-b border-r border-[#333] w-1/4">{t('roi.colStandard')}</th>
                              <th className="p-4 text-gray-500 font-bold uppercase tracking-wider text-xs border-b border-[#333] w-1/4">{t('roi.colEpoxy')}</th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-[#333] text-sm">
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">{t('roi.r1param')}</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> {t('roi.r1geonyx')}</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">{t('roi.r1standard')}</td>
                              <td className="p-4 text-gray-500">{t('roi.r1epoxy')}</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">{t('roi.r2param')}</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> {t('roi.r2geonyx')}</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">{t('roi.r2standard')}</td>
                              <td className="p-4 text-gray-500">{t('roi.r2epoxy')}</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">{t('roi.r3param')}</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> {t('roi.r3geonyx')}</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">{t('roi.r3standard')}</td>
                              <td className="p-4 text-gray-500">{t('roi.r3epoxy')}</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">{t('roi.r4param')}</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> {t('roi.r4geonyx')}</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">{t('roi.r4standard')}</td>
                              <td className="p-4 text-gray-500">{t('roi.r4epoxy')}</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">{t('roi.r5param')}</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> {t('roi.r5geonyx')}</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">{t('roi.r5standard')}</td>
                              <td className="p-4 text-gray-500">{t('roi.r5epoxy')}</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">{t('roi.r6param')}</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> {t('roi.r6geonyx')}</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">{t('roi.r6standard')}</td>
                              <td className="p-4 text-gray-500">{t('roi.r6epoxy')}</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">{t('roi.r7param')}</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> {t('roi.r7geonyx')}</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">{t('roi.r7standard')}</td>
                              <td className="p-4 text-gray-500">{t('roi.r7epoxy')}</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </section>

      {/* 5. APPLICATIONS GRID */}
      <section id="applications" className="relative py-20 border-b border-[#222]">
          <div className="absolute inset-0 z-0">
             <SafeImage
               src="/GEONYX-Calculator.webp"
               className="w-full h-full object-cover opacity-70"
               onError={(e) => { e.currentTarget.src = "/GEONYX-Calculator.webp" }}
               alt="Agro Applications"
             />
             <div className="absolute inset-0 bg-[#0f0f0f]/60"></div>
          </div>

          <div className="container relative z-10 mx-auto px-6 md:px-10">
              <div className="text-center mb-16">
                  <div className="flex items-center justify-center gap-3 mb-4">
                      <div className="h-[2px] w-8 bg-geo-yellow"></div>
                      <h3 className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">{t('applications.eyebrow')}</h3>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase">{t('applications.title')}</h2>
                  <p className="text-gray-300 mt-4 max-w-2xl mx-auto font-bold">{t('applications.subtitle')}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                      { key: 'a1', icon: Warehouse },
                      { key: 'a2', icon: Beef },
                      { key: 'a3', icon: Sprout },
                      { key: 'a4', icon: Factory },
                      { key: 'a5', icon: Recycle },
                      { key: 'a6', icon: Biohazard },
                      { key: 'a7', icon: Fish },
                      { key: 'a8', icon: Droplets },
                  ].map((area) => (
                      <div key={area.key} className="bg-[#141414] border border-[#222] p-6 hover:border-geo-yellow transition-all group">
                          <area.icon className="w-8 h-8 text-gray-600 group-hover:text-geo-yellow mb-4 transition-colors" />
                          <h4 className="text-white font-bold uppercase text-sm mb-2">{t(`applications.${area.key}title`)}</h4>
                          <p className="text-gray-500 text-xs">{t(`applications.${area.key}desc`)}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 6. SYSTEM SELECTION */}
      <section id="system-selection" className="py-20 bg-[#111] border-b border-[#222]">
          <div className="container mx-auto px-6 md:px-10">
              <div className="text-center mb-16">
                  <div className="flex items-center justify-center gap-3 mb-4">
                      <div className="h-[2px] w-8 bg-geo-yellow"></div>
                      <h3 className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">{t('systems.eyebrow')}</h3>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase">{t('systems.title')}</h2>
                  <p className="text-gray-500 mt-4 max-w-2xl mx-auto">{t('systems.subtitle')}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(['s1', 's2', 's3', 's4', 's5'] as const).map((key) => (
                      <div key={key} className="bg-[#1a1a1a] p-8 border border-[#222] border-t-4 border-t-geo-yellow hover:bg-[#222] transition-colors h-full group">
                          <h4 className="text-white font-black uppercase text-lg mb-3 group-hover:text-geo-yellow transition-colors">{t(`systems.${key}name`)}</h4>
                          <p className="text-gray-400 text-sm leading-relaxed">{t(`systems.${key}desc`)}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 7. PROJECT WORKFLOW */}
      <section className="py-20 bg-[#141414] border-b border-[#222]">
          <div className="container mx-auto px-6 md:px-10">
              <div className="text-center mb-16">
                  <div className="flex items-center justify-center gap-3 mb-4">
                      <div className="h-[2px] w-8 bg-geo-yellow"></div>
                      <h3 className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">{t('workflow.eyebrow')}</h3>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase">{t('workflow.title')}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {(['w1', 'w2', 'w3', 'w4', 'w5', 'w6'] as const).map((key) => (
                      <div key={key} className="bg-[#0f0f0f] border border-[#222] p-8 relative overflow-hidden group">
                          <span className="text-6xl font-black text-[#1a1a1a] absolute top-4 right-4 z-0 group-hover:text-geo-yellow/40 transition-colors">{t(`workflow.${key}step`)}</span>
                          <div className="relative z-10">
                              <h4 className="text-white font-bold uppercase text-lg mb-2">{t(`workflow.${key}title`)}</h4>
                              <p className="text-gray-500 text-sm">{t(`workflow.${key}desc`)}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 8. OFFER PACKAGE */}
      <section id="offer-package" className="relative py-24 border-b border-[#222]">
          <div className="absolute inset-0 z-0">
             <SafeImage
               src="/GEONYX-B2B-B2G.webp"
               className="w-full h-full object-cover opacity-60"
               onError={(e) => { e.currentTarget.src = "/GEONYX-B2B-B2G.webp" }}
               alt="Offer Documentation"
             />
             <div className="absolute inset-0 bg-[#0a0a0a]/75"></div>
          </div>

          <div className="container relative z-10 mx-auto px-6 md:px-10">
              <div className="flex flex-col lg:flex-row gap-16 items-start">

                  {/* Left Info */}
                  <div className="lg:w-1/3 sticky top-24">
                      <div className="flex items-center gap-3 mb-6">
                           <div className="h-[2px] w-8 bg-geo-yellow"></div>
                           <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">{t('offer.eyebrow')}</span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 leading-tight">
                          {t('offer.title')} <br/> {t('offer.titleSub')}
                      </h2>
                      <p className="text-gray-400 text-sm leading-relaxed mb-8 font-bold">
                          {t('offer.description')}
                      </p>
                      <div className="p-6 bg-[#141414] border border-[#333] border-l-4 border-l-geo-yellow">
                          <p className="text-white font-bold text-sm uppercase mb-2">{t('offer.qualityTitle')}</p>
                          <p className="text-gray-500 text-xs">{t('offer.qualityDesc')}</p>
                      </div>
                  </div>

                  {/* Right Grid */}
                  <div className="lg:w-2/3 w-full">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {(['i1', 'i2', 'i3', 'i4', 'i5', 'i6'] as const).map((key) => (
                              <div key={key} className="flex items-start gap-4 p-6 bg-[#111] border border-[#222] hover:border-geo-yellow/40 transition-colors group">
                                  <CheckCircle className="w-5 h-5 text-gray-500 group-hover:text-geo-yellow flex-shrink-0 transition-colors mt-0.5" />
                                  <span className="text-gray-300 text-sm font-bold uppercase leading-snug group-hover:text-white transition-colors">{t(`offer.${key}`)}</span>
                              </div>
                          ))}
                      </div>

                      <div className="mt-8 flex justify-end">
                           <Button
                            onClick={handleCopyTender}
                            className={`flex items-center gap-2 px-6 py-3 font-bold uppercase text-sm transition-all ${copySuccess ? 'bg-green-600 text-white border-green-600' : 'bg-[#222] text-gray-300 hover:bg-geo-yellow hover:text-black border-transparent'}`}
                          >
                              {copySuccess ? <CheckCircle className="w-4 h-4"/> : <Copy className="w-4 h-4"/>}
                              {copySuccess ? t('tender.copied') : t('tender.copy')}
                          </Button>
                      </div>
                  </div>

              </div>
          </div>
      </section>

      {/* 10. DOCUMENTATION (Downloads) */}
      <section id="specs" className="py-20 bg-black border-b border-[#222]">
          <div className="container mx-auto px-6 md:px-10">
              <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-12 border-l-4 border-geo-yellow pl-4">{t('docs.title')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {(['d1', 'd2', 'd3', 'd4'] as const).map((key) => (
                      <button key={key} className="w-full flex items-center justify-between p-6 bg-[#111] border border-[#333] hover:border-geo-yellow group transition-all">
                          <div className="flex items-center gap-4">
                              <FileText className="text-gray-400 group-hover:text-geo-yellow w-8 h-8" />
                              <div className="text-left">
                                  <span className="text-white font-bold block uppercase text-sm">{t(`docs.${key}name`)}</span>
                                  <span className="text-gray-500 text-xs">{t(`docs.${key}sub`)}</span>
                              </div>
                          </div>
                          <Download className="text-gray-500 group-hover:text-white" />
                      </button>
                  ))}
              </div>
          </div>
      </section>

      {/* 11. FAQ SECTION */}
      <section className="py-24 px-6 bg-[#0a0a0a] border-b border-[#222]">
          <div className="container mx-auto max-w-4xl">
              <div className="text-center mb-12">
                  <h2 className="text-3xl font-black text-white uppercase">{t('faq.title')}</h2>
              </div>

              <div className="space-y-4">
                  {(['1', '2', '3'] as const).map((n) => (
                      <div key={n} className="bg-[#111] p-6 border-l-4 border-gray-700 hover:border-geo-yellow transition-colors shadow-xl group">
                          <div className="flex gap-4">
                              <HelpCircle className="text-gray-500 group-hover:text-geo-yellow flex-shrink-0 transition-colors" />
                              <div>
                                  <h4 className="text-white font-bold uppercase mb-2 group-hover:text-geo-yellow transition-colors">{t(`faq.q${n}`)}</h4>
                                  <p className="text-gray-400 text-sm">{t(`faq.a${n}`)}</p>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 8. SYSTEM BRIDGE CTA */}
      <section className="bg-geo-yellow py-16 border-t border-black">
          <div className="container mx-auto px-6 flex flex-col items-center text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-black uppercase mb-6 tracking-tight max-w-4xl">
                  {t('cta.title')}
              </h2>
              <p className="text-black/80 text-lg font-medium mb-8 max-w-3xl mx-auto leading-relaxed">
                  {t('cta.description')}
              </p>
              <Link to={to('/systems')}>
                  <Button variant="primary" className="!bg-black !text-white hover:!bg-[#222] border-none text-lg px-12 py-5 shadow-2xl uppercase font-black flex items-center gap-2">
                      {t('cta.btn')} <ArrowRight className="w-5 h-5" />
                  </Button>
              </Link>
          </div>
      </section>

      <Footer />
    </div>
  );
};

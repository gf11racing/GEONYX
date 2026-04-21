
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Button } from './Button';
import {
  Flame, Zap, BatteryCharging, Mountain, Activity, Fuel, ShieldAlert, ShieldCheck,
  FileText, ArrowRight, Download, HelpCircle, CheckCircle, Copy, Check,
  MousePointer2, Construction, Hammer, Wrench, Factory, Warehouse,
  Landmark, AlertTriangle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { SafeImage } from './SafeImage';
import { useLang } from '../hooks/useLang';

export const EnergyDefensePage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('energydefense');
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
            src="/GEONYX-ENERGY-MINES-AND-HEAVY-DEFENSE.webp"
            className="w-full h-full object-cover opacity-60"
            onError={(e) => { e.currentTarget.src = "/GEONYX-heavy-sparks.jpeg" }}
            alt="Energy and Mining Infrastructure"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-20 pb-10 text-left">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-end">

                {/* LEFT COLUMN: MAIN CONTENT */}
                <div className="lg:w-2/3">
                    {/* Style Line */}
                    <div className="flex items-center justify-start gap-3 mb-8 page-animate-tag">
                        <div className="h-[2px] w-12 bg-geo-yellow shadow-[0_0_15px_#FFCC00]"></div>
                        <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">{t('hero.eyebrow')}</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 uppercase tracking-tighter drop-shadow-2xl max-w-4xl page-animate-title">
                    {t('hero.title1')} <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-geo-yellow to-yellow-600">{t('hero.title2')}</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-10 font-light max-w-3xl leading-relaxed border-l-4 border-geo-yellow pl-6 py-2 bg-black/30 backdrop-blur-sm page-animate-desc">
                        {t('hero.description')}
                    </p>

                    <div className="flex flex-col sm:flex-row justify-start gap-4 page-animate-buttons">
                        <Link to={to('/request-inspection')}>
                            <Button
                                variant="primary"
                                className="h-12 px-6 text-sm font-bold bg-geo-yellow text-black border-none hover:bg-white transition-all shadow-[0_0_20px_rgba(255,204,0,0.15)] rounded-none uppercase tracking-wider flex items-center gap-2"
                            >
                                {t('hero.btn1')} <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
                        <a href="#specs">
                            <button className="h-12 px-6 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase">
                                {t('hero.btn2')} <Download className="w-4 h-4" />
                            </button>
                        </a>
                    </div>
                </div>

                {/* RIGHT COLUMN: SIDE INFO PANEL */}
                <div className="lg:w-1/3 w-full page-animate-stats">
                    <div className="bg-black/30 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-sm shadow-2xl">
                        <h3 className="text-white font-black uppercase text-sm mb-6">
                            {t('hero.scope')}
                        </h3>

                        {/* Zones List */}
                        <div className="mb-6">
                            <span className="text-gray-500 font-bold uppercase text-[10px] tracking-widest block mb-3">{t('hero.zonesLabel')}</span>
                            <div className="grid grid-cols-2 gap-x-4 text-gray-300 text-xs font-bold uppercase leading-tight">
                                <div className="flex flex-col gap-3">
                                    <span className="border-l-2 border-geo-yellow pl-2">{t('hero.zone1')}</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">{t('hero.zone2')}</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">{t('hero.zone3')}</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">{t('hero.zone4')}</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">{t('hero.zone5')}</span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className="border-l-2 border-geo-yellow pl-2">{t('hero.zone6')}</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">{t('hero.zone7')}</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">{t('hero.zone8')}</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">{t('hero.zone9')}</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">{t('hero.zone10')}</span>
                                </div>
                            </div>
                        </div>

                        <div className="h-px w-full bg-white/10 mb-6"></div>

                        {/* Systems Chips */}
                        <div className="mb-6">
                            <span className="text-gray-500 font-bold uppercase text-[10px] tracking-widest block mb-3">{t('hero.systemsLabel')}</span>
                            <div className="flex flex-wrap gap-2">
                                {['ARMOR', 'CHEM', 'HYDRO', 'THERM', 'REPAIR'].map((sys, i) => (
                                    <span key={i} className="px-2 py-1 bg-white/10 text-white text-[10px] font-bold uppercase rounded-sm border border-white/5 hover:bg-white/20 transition-colors cursor-default">
                                        {sys}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="h-px w-full bg-white/10 mb-6"></div>

                        {/* Anchor Links */}
                        <div className="flex flex-col gap-3">
                            <a href="#applications" className="w-fit text-geo-yellow text-xs font-bold uppercase tracking-wider hover:text-white transition-colors flex items-center gap-2">
                                {t('hero.anchorApplications')}
                            </a>
                            <a href="#system-selection" className="w-fit text-geo-yellow text-xs font-bold uppercase tracking-wider hover:text-white transition-colors flex items-center gap-2">
                                {t('hero.anchorSystem')}
                            </a>
                             <a href="#offer-package" className="w-fit text-geo-yellow text-xs font-bold uppercase tracking-wider hover:text-white transition-colors flex items-center gap-2">
                                {t('hero.anchorOffer')}
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
                {t('manifesto.title1')} <br/>
                <span className="text-geo-yellow">{t('manifesto.title2')}</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
                {t('manifesto.description')}
            </p>
        </div>
      </section>

      {/* 3. ZIG-ZAG SOLUTIONS */}
      <div className="w-full bg-[#0b0c10]">

        {/* Block 1 */}
        <section className="flex flex-col lg:flex-row w-full min-h-[600px] border-y border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage
                    src="/GEONYX-CHP-COMBINED-POWER-PLANTS.webp"
                    onError={(e) => { e.currentTarget.src = "/GEONYX-energy-plant.jpeg" }}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Power Plant"
                />
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <Flame className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">{t('zigzag.block1.tag')}</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    {t('zigzag.block1.title')}
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">{t('zigzag.problem')}</span>
                    <p className="text-gray-400 text-lg leading-relaxed">{t('zigzag.block1.problem')}</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">{t('zigzag.solution')}</span>
                    <p className="text-white font-medium text-lg leading-relaxed">{t('zigzag.block1.solution')}</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        {t('zigzag.suitableSystems')} {t('zigzag.block1.systems')}
                    </div>
                </div>
            </div>
        </section>

        {/* Block 2 */}
        <section className="flex flex-col lg:flex-row-reverse w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage
                    src="/GEONYX-SUBSTATIONS.webp"
                    onError={(e) => { e.currentTarget.src = "/GEONYX-heavy-sparks.jpeg" }}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Substations"
                />
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><Zap className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">{t('zigzag.block2.tag')}</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    {t('zigzag.block2.title')}
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">{t('zigzag.problem')}</span>
                    <p className="text-gray-400 text-lg leading-relaxed">{t('zigzag.block2.problem')}</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">{t('zigzag.solution')}</span>
                    <p className="text-white font-medium text-lg leading-relaxed">{t('zigzag.block2.solution')}</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        {t('zigzag.suitableSystems')} {t('zigzag.block2.systems')}
                    </div>
                </div>
            </div>
        </section>

        {/* Block 3 */}
        <section className="flex flex-col lg:flex-row w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage
                    src="/GEONYX-BATTERY=PARKS.webp"
                    onError={(e) => { e.currentTarget.src = "/GEONYX-energy-bess.jpeg" }}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="BESS"
                />
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <BatteryCharging className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">{t('zigzag.block3.tag')}</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    {t('zigzag.block3.title')}
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">{t('zigzag.problem')}</span>
                    <p className="text-gray-400 text-lg leading-relaxed">{t('zigzag.block3.problem')}</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">{t('zigzag.solution')}</span>
                    <p className="text-white font-medium text-lg leading-relaxed">{t('zigzag.block3.solution')}</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        {t('zigzag.suitableSystems')} {t('zigzag.block3.systems')}
                    </div>
                </div>
            </div>
        </section>

        {/* Block 4 */}
        <section className="flex flex-col lg:flex-row-reverse w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage
                    src="/GEONYX-MINES-RAMPS-AND-MINES.webp"
                    onError={(e) => { e.currentTarget.src = "/GEONYX-mining-underground.jpeg" }}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Mines"
                />
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><Mountain className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">{t('zigzag.block4.tag')}</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    {t('zigzag.block4.title')}
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">{t('zigzag.problem')}</span>
                    <p className="text-gray-400 text-lg leading-relaxed">{t('zigzag.block4.problem')}</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">{t('zigzag.solution')}</span>
                    <p className="text-white font-medium text-lg leading-relaxed">{t('zigzag.block4.solution')}</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        {t('zigzag.suitableSystems')} {t('zigzag.block4.systems')}
                    </div>
                </div>
            </div>
        </section>

        {/* Block 5 */}
        <section className="flex flex-col lg:flex-row w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage
                    src="/GEONYX-CONCENTRATION-FACTORIES.webp"
                    onError={(e) => { e.currentTarget.src = "/GEONYX-chemical-plant.jpeg" }}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Processing Plants"
                />
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <Activity className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">{t('zigzag.block5.tag')}</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    {t('zigzag.block5.title')}
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">{t('zigzag.problem')}</span>
                    <p className="text-gray-400 text-lg leading-relaxed">{t('zigzag.block5.problem')}</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">{t('zigzag.solution')}</span>
                    <p className="text-white font-medium text-lg leading-relaxed">{t('zigzag.block5.solution')}</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        {t('zigzag.suitableSystems')} {t('zigzag.block5.systems')}
                    </div>
                </div>
            </div>
        </section>

        {/* Block 6 */}
        <section className="flex flex-col lg:flex-row-reverse w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage
                    src="/GEONYX-FUEL-WAREHOUSES.webp"
                    onError={(e) => { e.currentTarget.src = "/GEONYX-energy-refinery.jpeg" }}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Fuel Storage"
                />
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><Fuel className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">{t('zigzag.block6.tag')}</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    {t('zigzag.block6.title')}
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">{t('zigzag.problem')}</span>
                    <p className="text-gray-400 text-lg leading-relaxed">{t('zigzag.block6.problem')}</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">{t('zigzag.solution')}</span>
                    <p className="text-white font-medium text-lg leading-relaxed">{t('zigzag.block6.solution')}</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        {t('zigzag.suitableSystems')} {t('zigzag.block6.systems')}
                    </div>
                </div>
            </div>
        </section>

        {/* Block 7 */}
        <section className="flex flex-col lg:flex-row w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage
                    src="/GEONYX-TUNNELS-GALLERIES.webp"
                    onError={(e) => { e.currentTarget.src = "/GEONYX-subway.jpeg" }}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Tunnels"
                />
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <ShieldAlert className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">{t('zigzag.block7.tag')}</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    {t('zigzag.block7.title')}
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">{t('zigzag.problem')}</span>
                    <p className="text-gray-400 text-lg leading-relaxed">{t('zigzag.block7.problem')}</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">{t('zigzag.solution')}</span>
                    <p className="text-white font-medium text-lg leading-relaxed">{t('zigzag.block7.solution')}</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        {t('zigzag.suitableSystems')} {t('zigzag.block7.systems')}
                    </div>
                </div>
            </div>
        </section>

        {/* Block 8 */}
        <section className="flex flex-col lg:flex-row-reverse w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage
                    src="/GEONYX-PROTECTIVE-BUNKER.webp"
                    onError={(e) => { e.currentTarget.src = "/GEONYX-defense-bunker.jpeg" }}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Bunkers"
                />
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><ShieldCheck className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">{t('zigzag.block8.tag')}</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    {t('zigzag.block8.title')}
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">{t('zigzag.problem')}</span>
                    <p className="text-gray-400 text-lg leading-relaxed">{t('zigzag.block8.problem')}</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">{t('zigzag.solution')}</span>
                    <p className="text-white font-medium text-lg leading-relaxed">{t('zigzag.block8.solution')}</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        {t('zigzag.suitableSystems')} {t('zigzag.block8.systems')}
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
                              <th className="p-4 text-gray-500 font-bold uppercase tracking-wider text-xs border-b border-r border-[#333] w-1/4">{t('roi.colStd')}</th>
                              <th className="p-4 text-gray-500 font-bold uppercase tracking-wider text-xs border-b border-[#333] w-1/4">{t('roi.colEpoxy')}</th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-[#333] text-sm">
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">{t('roi.row1')}</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> {t('roi.val1geonyx')}</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">{t('roi.val1std')}</td>
                              <td className="p-4 text-gray-500">{t('roi.val1epoxy')}</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">{t('roi.row2')}</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> {t('roi.val2geonyx')}</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">{t('roi.val2std')}</td>
                              <td className="p-4 text-gray-500">{t('roi.val2epoxy')}</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">{t('roi.row3')}</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> {t('roi.val3geonyx')}</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">{t('roi.val3std')}</td>
                              <td className="p-4 text-gray-500">{t('roi.val3epoxy')}</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">{t('roi.row4')}</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> {t('roi.val4geonyx')}</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">{t('roi.val4std')}</td>
                              <td className="p-4 text-gray-500">{t('roi.val4epoxy')}</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">{t('roi.row5')}</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> {t('roi.val5geonyx')}</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">{t('roi.val5std')}</td>
                              <td className="p-4 text-gray-500">{t('roi.val5epoxy')}</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">{t('roi.row6')}</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> {t('roi.val6geonyx')}</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">{t('roi.val6std')}</td>
                              <td className="p-4 text-gray-500">{t('roi.val6epoxy')}</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">{t('roi.row7')}</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> {t('roi.val7geonyx')}</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">{t('roi.val7std')}</td>
                              <td className="p-4 text-gray-500">{t('roi.val7epoxy')}</td>
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
               onError={(e) => { e.currentTarget.src = "/GEONYX-heavy-sparks.jpeg" }}
               alt="Energy Applications"
             />
             <div className="absolute inset-0 bg-[#0f0f0f]/70"></div>
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
                      { titleKey: 'applications.a1title', descKey: 'applications.a1desc', icon: Flame },
                      { titleKey: 'applications.a2title', descKey: 'applications.a2desc', icon: Zap },
                      { titleKey: 'applications.a3title', descKey: 'applications.a3desc', icon: BatteryCharging },
                      { titleKey: 'applications.a4title', descKey: 'applications.a4desc', icon: Mountain },
                      { titleKey: 'applications.a5title', descKey: 'applications.a5desc', icon: Activity },
                      { titleKey: 'applications.a6title', descKey: 'applications.a6desc', icon: Fuel },
                      { titleKey: 'applications.a7title', descKey: 'applications.a7desc', icon: ShieldAlert },
                      { titleKey: 'applications.a8title', descKey: 'applications.a8desc', icon: ShieldCheck },
                  ].map((area, idx) => (
                      <div key={idx} className="bg-[#141414] border border-[#222] p-6 hover:border-geo-yellow transition-all group">
                          <area.icon className="w-8 h-8 text-gray-600 group-hover:text-geo-yellow mb-4 transition-colors" />
                          <h4 className="text-white font-bold uppercase text-sm mb-2">{t(area.titleKey)}</h4>
                          <p className="text-gray-500 text-xs">{t(area.descKey)}</p>
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
                  {[
                      { nameKey: 'systems.s1name', descKey: 'systems.s1desc' },
                      { nameKey: 'systems.s2name', descKey: 'systems.s2desc' },
                      { nameKey: 'systems.s3name', descKey: 'systems.s3desc' },
                      { nameKey: 'systems.s4name', descKey: 'systems.s4desc' },
                      { nameKey: 'systems.s5name', descKey: 'systems.s5desc' },
                  ].map((sys, idx) => (
                      <div key={idx} className="bg-[#1a1a1a] p-8 border border-[#222] border-t-4 border-t-geo-yellow hover:bg-[#222] transition-colors h-full group">
                          <h4 className="text-white font-black uppercase text-lg mb-3 group-hover:text-geo-yellow transition-colors">{t(sys.nameKey)}</h4>
                          <p className="text-gray-400 text-sm leading-relaxed">{t(sys.descKey)}</p>
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
                  {[
                      { stepKey: 'workflow.w1step', titleKey: 'workflow.w1title', descKey: 'workflow.w1desc' },
                      { stepKey: 'workflow.w2step', titleKey: 'workflow.w2title', descKey: 'workflow.w2desc' },
                      { stepKey: 'workflow.w3step', titleKey: 'workflow.w3title', descKey: 'workflow.w3desc' },
                      { stepKey: 'workflow.w4step', titleKey: 'workflow.w4title', descKey: 'workflow.w4desc' },
                      { stepKey: 'workflow.w5step', titleKey: 'workflow.w5title', descKey: 'workflow.w5desc' },
                      { stepKey: 'workflow.w6step', titleKey: 'workflow.w6title', descKey: 'workflow.w6desc' },
                  ].map((item, idx) => (
                      <div key={idx} className="bg-[#0f0f0f] border border-[#222] p-8 relative overflow-hidden group">
                          <span className="text-6xl font-black text-[#1a1a1a] absolute top-4 right-4 z-0 group-hover:text-geo-yellow/40 transition-colors">{t(item.stepKey)}</span>
                          <div className="relative z-10">
                              <h4 className="text-white font-bold uppercase text-lg mb-2">{t(item.titleKey)}</h4>
                              <p className="text-gray-500 text-sm">{t(item.descKey)}</p>
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
               onError={(e) => { e.currentTarget.src = "/GEONYX-heavy-sparks.jpeg" }}
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
                          {t('offer.title')} <br/> {t('offer.subtitle')}
                      </h2>
                      <p className="text-gray-400 text-sm leading-relaxed mb-8 font-bold">
                          {t('offer.description')}
                      </p>
                      <div className="p-6 bg-[#141414] border border-[#333] border-l-4 border-l-geo-yellow">
                          <p className="text-white font-bold text-sm uppercase mb-2">{t('offer.qualityLabel')}</p>
                          <p className="text-gray-500 text-xs">{t('offer.qualityDesc')}</p>
                      </div>
                  </div>

                  {/* Right Grid */}
                  <div className="lg:w-2/3 w-full">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {['offer.doc1','offer.doc2','offer.doc3','offer.doc4','offer.doc5','offer.doc6'].map((key, i) => (
                              <div key={i} className="flex items-start gap-4 p-6 bg-[#111] border border-[#222] hover:border-geo-yellow/40 transition-colors group">
                                  <CheckCircle className="w-5 h-5 text-gray-500 group-hover:text-geo-yellow flex-shrink-0 transition-colors mt-0.5" />
                                  <span className="text-gray-300 text-sm font-bold uppercase leading-snug group-hover:text-white transition-colors">{t(key)}</span>
                              </div>
                          ))}
                      </div>

                      <div className="mt-8 flex justify-end">
                           <Button
                            onClick={handleCopyTender}
                            className={`flex items-center gap-2 px-6 py-3 font-bold uppercase text-sm transition-all ${copySuccess ? 'bg-green-600 text-white border-green-600' : 'bg-[#222] text-gray-300 hover:bg-geo-yellow hover:text-black border-transparent'}`}
                          >
                              {copySuccess ? <CheckCircle className="w-4 h-4"/> : <Copy className="w-4 h-4"/>}
                              {copySuccess ? t('offer.copiedBtn') : t('offer.copyBtn')}
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
                  <button className="w-full flex items-center justify-between p-6 bg-[#111] border border-[#333] hover:border-geo-yellow group transition-all">
                      <div className="flex items-center gap-4">
                          <FileText className="text-gray-400 group-hover:text-geo-yellow w-8 h-8" />
                          <div className="text-left">
                              <span className="text-white font-bold block uppercase text-sm">{t('docs.d1title')}</span>
                              <span className="text-gray-500 text-xs">{t('docs.d1sub')}</span>
                          </div>
                      </div>
                      <Download className="text-gray-500 group-hover:text-white" />
                  </button>
                  <button className="w-full flex items-center justify-between p-6 bg-[#111] border border-[#333] hover:border-geo-yellow group transition-all">
                      <div className="flex items-center gap-4">
                          <FileText className="text-gray-400 group-hover:text-geo-yellow w-8 h-8" />
                          <div className="text-left">
                              <span className="text-white font-bold block uppercase text-sm">{t('docs.d2title')}</span>
                              <span className="text-gray-500 text-xs">{t('docs.d2sub')}</span>
                          </div>
                      </div>
                      <Download className="text-gray-500 group-hover:text-white" />
                  </button>
                  <button className="w-full flex items-center justify-between p-6 bg-[#111] border border-[#333] hover:border-geo-yellow group transition-all">
                      <div className="flex items-center gap-4">
                          <FileText className="text-gray-400 group-hover:text-geo-yellow w-8 h-8" />
                          <div className="text-left">
                              <span className="text-white font-bold block uppercase text-sm">{t('docs.d3title')}</span>
                              <span className="text-gray-500 text-xs">{t('docs.d3sub')}</span>
                          </div>
                      </div>
                      <Download className="text-gray-500 group-hover:text-white" />
                  </button>
                  <button className="w-full flex items-center justify-between p-6 bg-[#111] border border-[#333] hover:border-geo-yellow group transition-all">
                      <div className="flex items-center gap-4">
                          <FileText className="text-gray-400 group-hover:text-geo-yellow w-8 h-8" />
                          <div className="text-left">
                              <span className="text-white font-bold block uppercase text-sm">{t('docs.d4title')}</span>
                              <span className="text-gray-500 text-xs">{t('docs.d4sub')}</span>
                          </div>
                      </div>
                      <Download className="text-gray-500 group-hover:text-white" />
                  </button>
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
                  {/* Q1 */}
                  <div className="bg-[#111] p-6 border-l-4 border-gray-700 hover:border-geo-yellow transition-colors shadow-xl group">
                      <div className="flex gap-4">
                          <HelpCircle className="text-gray-500 group-hover:text-geo-yellow flex-shrink-0 transition-colors" />
                          <div>
                              <h4 className="text-white font-bold uppercase mb-2 group-hover:text-geo-yellow transition-colors">{t('faq.q1title')}</h4>
                              <p className="text-gray-400 text-sm">{t('faq.q1answer')}</p>
                          </div>
                      </div>
                  </div>

                  {/* Q2 */}
                  <div className="bg-[#111] p-6 border-l-4 border-gray-700 hover:border-geo-yellow transition-colors shadow-xl group">
                      <div className="flex gap-4">
                          <HelpCircle className="text-gray-500 group-hover:text-geo-yellow flex-shrink-0 transition-colors" />
                          <div>
                              <h4 className="text-white font-bold uppercase mb-2 group-hover:text-geo-yellow transition-colors">{t('faq.q2title')}</h4>
                              <p className="text-gray-400 text-sm">{t('faq.q2answer')}</p>
                          </div>
                      </div>
                  </div>

                  {/* Q3 */}
                  <div className="bg-[#111] p-6 border-l-4 border-gray-700 hover:border-geo-yellow transition-colors shadow-xl group">
                      <div className="flex gap-4">
                          <HelpCircle className="text-gray-500 group-hover:text-geo-yellow flex-shrink-0 transition-colors" />
                          <div>
                              <h4 className="text-white font-bold uppercase mb-2 group-hover:text-geo-yellow transition-colors">{t('faq.q3title')}</h4>
                              <p className="text-gray-400 text-sm">{t('faq.q3answer')}</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* CTA */}
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

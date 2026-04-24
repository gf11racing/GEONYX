
import React, { useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Button } from './Button';
import {
  FlaskConical, Biohazard, ShieldAlert, Zap,
  Droplets, Flame, Activity, ArrowRight,
  FileText, Download, HelpCircle,
  ShieldCheck, Skull,
  Waves, Layers, Scale, AlertTriangle, Check, Gauge, Minimize,
  Leaf, Beaker, SprayCan, BookOpen, BarChart3, TrendingUp,
  Factory, Hammer, CheckCircle, Copy, Utensils, BatteryCharging
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { SafeImage } from './SafeImage';
import { useTranslation } from 'react-i18next';
import { useLang } from '../hooks/useLang';
import { usePageMeta } from '../hooks/usePageMeta';

const DIAGNOSTICS_META = [
    { id: 1, key: 'd1', icon: FlaskConical, image: "/GEONYX-CHEM-STRONG-ACIDS.webp" },
    { id: 2, key: 'd2', icon: Beaker,       image: "/GEONYX-CHEM-STRONG-BASES-AND-LYES.webp" },
    { id: 3, key: 'd3', icon: Droplets,     image: "/GEONYX-CHEM-OILS.webp" },
    { id: 4, key: 'd4', icon: FlaskConical, image: "/GEONYX-CHEM-SOLVENTS-AND-ORGANICS.webp" },
    { id: 5, key: 'd5', icon: SprayCan,     image: "/GEONYX-CHEM-DISINFECTANTS.webp" },
    { id: 6, key: 'd6', icon: Leaf,         image: "/GEONYX-CHEM-SALTS.webp" },
    { id: 7, key: 'd7', icon: Waves,        image: "/GEONYX-CHEM-OSMOSIS.webp" },
    { id: 8, key: 'd8', icon: ShieldAlert,  image: "/GEONYX-CHEM-CHEMICAL.webp" },
];

const HOTSPOT_META = [
  { id: 1, key: 'h1', top: "85%", left: "50%" },
  { id: 2, key: 'h2', top: "70%", left: "30%" },
  { id: 3, key: 'h3', top: "50%", left: "60%" },
  { id: 4, key: 'h4', top: "25%", left: "50%" },
];

const APPLICATION_META = [
  { key: 'a1', icon: Factory },
  { key: 'a2', icon: Utensils },
  { key: 'a3', icon: FlaskConical },
  { key: 'a4', icon: Zap },
  { key: 'a5', icon: BatteryCharging },
  { key: 'a6', icon: Waves },
  { key: 'a7', icon: ShieldAlert },
  { key: 'a8', icon: FileText },
];

const DOWNLOAD_META = [
  { key: 'dl1', icon: FileText },
  { key: 'dl2', icon: ShieldAlert },
  { key: 'dl3', icon: BarChart3 },
  { key: 'dl4', icon: BookOpen },
];

export const ChemPage: React.FC = () => {
  usePageMeta('chem');
  const navigate = useNavigate();
  const { t } = useTranslation('chem');
  const { to } = useLang();
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);

  // Animation Reset Keys
  const [acidKey, setAcidKey] = useState(0);
  const [permKey, setPermKey] = useState(0);
  const [elasticKey, setElasticKey] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "GEONYX CHEM | Химическа защита – Киселиноустойчиви индустриални настилки";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', "GEONYX CHEM е минерална система за химическа защита на бетон и индустриални подове – устойчива на киселини, основи, соли, биогенна корозия и агресивни химически агенти. Подходяща за химическа индустрия, пречиствателни станции, хранително-вкусова промишленост и тежка индустрия.");
    }
  }, []);

  const handleCopyTender = () => {
    const text = "Подовете и защитните покрития в химически и технологични зони да бъдат изпълнени с минерални системи тип GEONYX CHEM или еквивалент, осигуряващи устойчивост към специфицираните от възложителя киселини, основи, масла, соли и разтворители. Системите следва да гарантират плътна, нехлъзгаща и лесна за почистване повърхност, минимално поглъщане на течности, съвместимост с режимите на дезинфекция и да отговарят на приложимите европейски стандарти за химическа устойчивост и безопасност на труда.";
    navigator.clipboard.writeText(text);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#050505] font-sans text-gray-200 overflow-x-hidden selection:bg-geo-yellow selection:text-black">
      <Navbar />

      {/* STATIC STYLES TO PREVENT FLICKERING */}
      <style>{`
        @keyframes width-grow { from { width: 0; } }
        @keyframes height-grow { from { height: 0; } }
        @keyframes dash-draw { to { stroke-dashoffset: 0; } }
      `}</style>

      {/* 1. HERO SECTION (ANIMATED) */}
      <section className="relative min-h-[85vh] flex items-center justify-center border-b border-[#222] overflow-hidden bg-black">
        {/* Visual Background */}
        <div className="absolute inset-0 z-0">
          <SafeImage
            src="/GEONYX-CHEM1.webp"
            onError={(e) => { e.currentTarget.src = "/GEONYX-CHEM-STRONG-ACIDS1.webp" }}
            className="w-full h-full object-cover opacity-100"
            alt="Chemical Protection Environment"
          />
          {/* Grid Removed */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-left pt-20">
            <div className="max-w-5xl">
                {/* Header Label */}
                <div className="flex items-center justify-start gap-3 mb-8 page-animate-tag">
                    <div className="h-[2px] w-12 bg-geo-yellow shadow-[0_0_15px_#FFCC00]"></div>
                    <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                        {t('hero.eyebrow')}
                    </span>
                </div>

                {/* H1 Title */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 uppercase tracking-tighter drop-shadow-2xl mix-blend-difference page-animate-title">
                    GEONYX <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-geo-yellow to-yellow-600">CHEM</span>
                </h1>

                {/* Description Box */}
                <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light max-w-4xl leading-relaxed border-l-4 border-geo-yellow pl-6 py-2 bg-black/30 backdrop-blur-sm page-animate-desc">
                    {t('hero.description')}
                </p>

                {/* HUD Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl page-animate-stats">
                    <div className="bg-white/5 border border-white/10 p-4 backdrop-blur-sm">
                        <div className="text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-1">{t('hero.statPH')}</div>
                        <div className="text-geo-yellow font-mono text-xl font-bold">2 – 14</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-4 backdrop-blur-sm">
                        <div className="text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-1">{t('hero.statClass')}</div>
                        <div className="text-geo-yellow font-mono text-xl font-bold">EN 13529</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-4 backdrop-blur-sm">
                        <div className="text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-1">{t('hero.statAbsorption')}</div>
                        <div className="text-geo-yellow font-mono text-xl font-bold">{'<'} 0.5 %</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-4 backdrop-blur-sm">
                        <div className="text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-1">{t('hero.statLife')}</div>
                        <div className="text-geo-yellow font-mono text-xl font-bold">≥ 15 години</div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 page-animate-buttons">
                    <a href="#specs">
                        <Button
                          variant="primary"
                          className="h-12 px-6 text-sm font-bold bg-geo-yellow text-black border-none hover:bg-white transition-all shadow-[0_0_20px_rgba(255,204,0,0.15)] rounded-none uppercase tracking-wider flex items-center gap-2"
                        >
                          {t('hero.btn1')} <ArrowRight className="w-4 h-4" />
                        </Button>
                    </a>

                    <Link to={to('/request-inspection')}>
                        <button
                          className="h-12 px-6 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase"
                        >
                          {t('hero.btn2')}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
      </section>

      {/* 2. CERTIFICATION STRIP */}
      <section className="w-full bg-[#111] border-b border-[#222] py-8 overflow-hidden">
          <div className="container mx-auto px-6">
              <div className="flex flex-wrap justify-between items-center opacity-60 hover:opacity-100 transition-opacity duration-500 gap-8 grayscale hover:grayscale-0">
                  <div className="flex items-center gap-3">
                      <FlaskConical className="w-8 h-8 text-white" />
                      <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">{t('certStrip.cert1')} <br/><span className="text-[10px]">EN/ISO STANDARDS</span></span>
                  </div>
                  <div className="flex items-center gap-3">
                      <ShieldCheck className="w-8 h-8 text-white" />
                      <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">{t('certStrip.cert2')} <br/><span className="text-[10px]">PROTECTION</span></span>
                  </div>
                  <div className="flex items-center gap-3">
                      <Droplets className="w-8 h-8 text-white" />
                      <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">{t('certStrip.cert3')} <br/><span className="text-[10px]">{'<'} 0.5%</span></span>
                  </div>
                  <div className="flex items-center gap-3">
                      <Factory className="w-8 h-8 text-white" />
                      <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">{t('certStrip.cert4')} <br/><span className="text-[10px]">HEAVY DUTY</span></span>
                  </div>
                  <div className="flex items-center gap-3">
                      <FileText className="w-8 h-8 text-white" />
                      <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">{t('certStrip.cert5')} <br/><span className="text-[10px]">ДОКУМЕНТАЦИЯ</span></span>
                  </div>
              </div>
          </div>
      </section>

      {/* 3. DIAGNOSTICS (FULL WIDTH GRID) */}
      <section className="w-full bg-[#050505] border-t border-[#222]">
        {/* Section Header */}
        <div className="py-20 bg-[#080808] border-b border-[#222]">
            <div className="container mx-auto px-6 md:px-10 text-center">
                {/* UPDATED HEADER WITH LINE */}
                <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="h-[2px] w-8 bg-geo-yellow"></div>
                    <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                        {t('diagnostics.eyebrow')}
                    </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white uppercase leading-none">
                    {t('diagnostics.title')}
                </h2>
                <p className="text-gray-500 mt-6 text-sm font-mono uppercase tracking-widest">
                     {t('diagnostics.subtitle')}
                </p>
            </div>
        </div>

        {/* IMAGE GRID - EDGE TO EDGE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
            {DIAGNOSTICS_META.map((item, index) => (
                <div
                    key={item.id}
                    className="group relative h-[500px] w-full overflow-hidden border-r border-b border-[#222] bg-[#111]"
                >
                    {/* Background Image - Clean */}
                    <div className="absolute inset-0">
                        <SafeImage
                            src={item.image}
                            alt={t(`diagnostics.${item.key}title`)}
                            className="w-full h-full object-cover opacity-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    </div>

                    {/* Top Numbering */}
                    <div className="absolute top-8 right-8 z-20">
                         <span className="text-5xl font-black text-white/10 group-hover:text-geo-yellow/20 transition-colors select-none">
                            0{index + 1}
                         </span>
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                             {/* Icon */}
                             <div className="mb-4">
                                 <item.icon className="w-10 h-10 text-white group-hover:text-geo-yellow transition-colors duration-300 drop-shadow-md" />
                             </div>

                             <h3 className="text-xl font-black text-white uppercase mb-4 leading-tight group-hover:text-geo-yellow transition-colors">
                                {t(`diagnostics.${item.key}title`)}
                             </h3>

                             {/* Problem/Solution - Improved Readability */}
                             <div className="space-y-4 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                                 <div className="border-l-2 border-red-500 pl-3">
                                     <span className="text-xs text-red-500 font-bold uppercase block mb-1">{t('shared.threat')}</span>
                                     <p className="text-base text-gray-300 leading-snug font-medium">
                                         {t(`diagnostics.${item.key}problem`)}
                                     </p>
                                 </div>

                                 <div className="border-l-2 border-geo-yellow pl-3">
                                     <span className="text-xs text-geo-yellow font-bold uppercase block mb-1">{t('shared.solution')}</span>
                                     <p className="text-base text-white font-bold leading-snug">
                                         {t(`diagnostics.${item.key}solution`)}
                                     </p>
                                 </div>
                             </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* 4. SYSTEM ANATOMY (INTERACTIVE HOTSPOTS) */}
      <section className="py-24 bg-[#050505] border-b border-[#222] overflow-hidden">
        <div className="container mx-auto px-6 mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-4">
                  {t('anatomy.sectionTitle')}
              </h2>
              <div className="w-24 h-1 bg-geo-yellow mx-auto"></div>
              <p className="text-gray-500 mt-4 text-sm font-mono uppercase tracking-widest">
                  {t('anatomy.sectionSubtitle')}
              </p>
        </div>

        <div className="relative w-full h-[550px] bg-[#111] border-y border-[#333] shadow-2xl group">
             {/* BACKGROUND IMAGE */}
            <div className="absolute inset-0 bg-black">
               <SafeImage
                 src="/GEONYX-CHEM-STRONG-ACIDS1.webp"
                 alt="Chem System Cross Section"
                 className="w-full h-full object-cover opacity-60"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/40"></div>
            </div>

            {/* RULER OVERLAY */}
            <div className="absolute left-6 md:left-10 top-0 bottom-0 w-px bg-white/20 flex flex-col justify-between py-10 z-10">
               {[...Array(5)].map((_, i) => <div key={i} className="w-4 h-px bg-white/50"></div>)}
            </div>

            {/* HOTSPOTS */}
            <div className="absolute inset-0 max-w-[1600px] mx-auto w-full h-full pointer-events-none">
              <div className="relative w-full h-full pointer-events-auto">
                  {HOTSPOT_META.map((spot) => (
                      <div
                      key={spot.id}
                      className="absolute z-20 cursor-pointer group/spot"
                      style={{ top: spot.top, left: spot.left, transform: 'translate(-50%, -50%)' }}
                      onMouseEnter={() => setActiveHotspot(spot.id)}
                      onMouseLeave={() => setActiveHotspot(null)}
                      >
                      <div className="relative flex items-center justify-center w-8 h-8">
                          <span className="absolute w-full h-full bg-geo-yellow rounded-full animate-subtle"></span>
                          <span className={`relative w-3.5 h-3.5 rounded-full border border-black shadow-[0_0_5px_rgba(0,0,0,0.8)] transition-all duration-300 ease-out ${activeHotspot === spot.id ? 'bg-white scale-110 shadow-[0_0_10px_white]' : 'bg-geo-yellow'}`}></span>
                      </div>

                      <AnimatePresence>
                          {activeHotspot === spot.id && (
                          <motion.div
                              initial={{ opacity: 0, y: 15, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.95 }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                              className="absolute left-1/2 bottom-full mb-4 w-72 md:w-96 -translate-x-1/2 z-30"
                          >
                              <div className="bg-black/90 backdrop-blur-xl border border-geo-yellow p-6 shadow-[0_20px_50px_rgba(0,0,0,0.9)] relative">
                                  {/* Tech Decor */}
                                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-geo-yellow"></div>
                                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-geo-yellow"></div>
                                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-geo-yellow"></div>
                                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-geo-yellow"></div>
                                  <div className="absolute bottom-[-7px] left-1/2 -translate-x-1/2 w-3 h-3 bg-black border-r border-b border-geo-yellow rotate-45"></div>

                                  <h3 className="text-geo-yellow font-black text-base uppercase mb-1 tracking-wider">
                                      {t(`anatomy.${spot.key}title`)}
                                  </h3>
                                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest block mb-4 border-b border-white/10 pb-2">
                                      {t(`anatomy.${spot.key}subtitle`)}
                                  </span>
                                  <p className="text-gray-300 text-sm leading-relaxed">
                                      {t(`anatomy.${spot.key}desc`)}
                                  </p>
                              </div>
                          </motion.div>
                          )}
                      </AnimatePresence>
                      </div>
                  ))}
              </div>
            </div>
        </div>
      </section>

      {/* 5. ENGINEERING PROOF (LIVE ANIMATIONS) */}
      <section className="bg-[#0b0c10] border-b border-[#222] py-24">
         <div className="container mx-auto px-6 md:px-10">
             <div className="mb-16">
                {/* UPDATED HEADER WITH LINE */}
                <div className="flex items-center gap-3 mb-4">
                    <div className="h-[2px] w-8 bg-geo-yellow"></div>
                    <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">{t('engineeringProof.eyebrow')}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white uppercase">{t('engineeringProof.title')}</h2>
                <p className="text-gray-500 mt-2 text-sm font-mono">{t('engineeringProof.subtitle')}</p>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                 {/* BLOCK 1: MASS LOSS (Animated Bars) */}
                 <div
                    className="bg-[#141414] p-8 border border-[#222] hover:border-white/20 transition-colors cursor-default"
                    onMouseEnter={() => setAcidKey(prev => prev + 1)}
                 >
                     <h3 className="text-white font-bold uppercase mb-6 flex items-center gap-2">
                         <BarChart3 className="text-geo-yellow w-5 h-5" /> {t('engineeringProof.block1title')}
                     </h3>
                     <div className="space-y-4">
                         <div className="flex items-center text-xs text-gray-500 uppercase font-bold justify-between"><span>Епоксидно/PU покритие</span> <span>Значителна промяна</span></div>
                         <div className="w-full h-2 bg-[#222] overflow-hidden"><div key={`acid-1-${acidKey}`} className="w-[85%] h-full bg-red-600 animate-[width-grow_2s_ease-out]"></div></div>

                         <div className="flex items-center text-xs text-geo-yellow uppercase font-black justify-between"><span>GEONYX CHEM</span> <span>Минимална промяна</span></div>
                         <div className="w-full h-4 bg-[#222] border border-geo-yellow overflow-hidden"><div key={`acid-2-${acidKey}`} className="w-[5%] h-full bg-geo-yellow animate-[width-grow_2s_ease-out_0.5s_backwards]"></div></div>
                     </div>
                     <p className="text-gray-500 text-xs mt-4 text-center">{t('engineeringProof.block1note')}</p>
                 </div>

                 {/* BLOCK 2: MASS LOSS H2SO4 */}
                 <div
                    className="bg-[#141414] p-8 border border-[#222] hover:border-white/20 transition-colors cursor-default"
                    onMouseEnter={() => setPermKey(prev => prev + 1)}
                 >
                     <h3 className="text-white font-bold uppercase mb-6 flex items-center gap-2">
                         <FlaskConical className="text-geo-yellow w-5 h-5" /> {t('engineeringProof.block2title')}
                     </h3>
                     <div className="h-48 border-b border-[#333] relative">
                         <div className="flex items-end justify-around h-full pb-4 px-4 gap-6">
                             {/* Competitor Column */}
                             <div className="flex flex-col items-center justify-end h-full w-20 group">
                                 <span className="text-red-500 font-bold text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Висока загуба</span>
                                 <div className="w-full bg-[#222] border border-red-500 h-[70%] relative overflow-hidden">
                                     <div key={`perm-1-${permKey}`} className="absolute bottom-0 w-full bg-red-900/50 animate-[height-grow_1.5s_ease-out] h-full"></div>
                                 </div>
                             </div>

                             {/* GEONYX Column */}
                             <div className="flex flex-col items-center justify-end h-full w-20 group">
                                 <span className="text-geo-yellow font-bold text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Минимална</span>
                                 <div className="w-full bg-[#222] border border-geo-yellow h-[10%] relative overflow-hidden">
                                     <div key={`perm-2-${permKey}`} className="absolute bottom-0 w-full bg-geo-yellow/50 animate-[height-grow_1.5s_ease-out] h-full"></div>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div className="flex justify-around px-4 pt-2">
                         <span className="text-[10px] text-gray-400 uppercase font-bold w-20 text-center">Бетон / Смола</span>
                         <span className="text-[10px] text-gray-400 uppercase font-bold w-20 text-center">GEONYX CHEM</span>
                     </div>
                     <p className="text-gray-500 text-xs mt-4 text-center">{t('engineeringProof.block2note')}</p>
                 </div>

                 {/* BLOCK 3: LIFECYCLE */}
                 <div
                    className="bg-[#141414] p-8 border border-[#222] hover:border-white/20 transition-colors cursor-default relative"
                    onMouseEnter={() => setElasticKey(prev => prev + 1)}
                 >
                     <h3 className="text-white font-bold uppercase mb-6 flex items-center gap-2">
                         <TrendingUp className="text-geo-yellow w-5 h-5" /> {t('engineeringProof.block3title')}
                     </h3>
                     <div className="relative w-full h-40 border-l border-b border-[#333]">
                         <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                             {/* Standard - High Maintenance Cost */}
                             <path d="M 0 100 L 20 20" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 2" />

                             {/* Geonyx Chem - Low Maintenance Cost */}
                             <path
                                key={`elastic-${elasticKey}`}
                                d="M 0 100 L 100 85"
                                fill="none"
                                stroke="#FFCC00"
                                strokeWidth="3"
                                strokeDasharray="200"
                                strokeDashoffset="200"
                                className="animate-[dash-draw_3s_linear_forwards_1s]"
                             />
                         </svg>

                         <div className="absolute top-[20%] left-[22%] text-[10px] font-bold text-red-500 leading-none whitespace-nowrap">
                             {t('engineeringProof.block3highCost')}
                         </div>
                         <div className="absolute top-[75%] left-[60%] text-[10px] font-bold text-geo-yellow leading-none whitespace-nowrap">
                             {t('engineeringProof.block3lowTco')}
                         </div>
                     </div>
                     <div className="flex justify-between text-[10px] text-gray-500 font-mono mt-2">
                         <span>ВРЕМЕ (ГОДИНИ)</span>
                         <span>РАЗХОДИ ЗА ПОДДРЪЖКА</span>
                     </div>
                     <p className="text-gray-500 text-xs mt-4 text-center">{t('engineeringProof.block3note')}</p>
                 </div>

             </div>
         </div>
      </section>

      {/* 6. OPERATIONAL SUPERIORITY (TENDER SPECS) */}
      <section className="py-24 bg-[#050505] border-b border-[#222]">
          <div className="container mx-auto px-6 md:px-10">
              <div className="mb-12 border-b border-[#333] pb-6">
                  {/* UPDATED HEADER WITH LINE */}
                  <div className="flex items-center gap-3 mb-4">
                      <div className="h-[2px] w-8 bg-geo-yellow"></div>
                      <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">{t('operational.eyebrow')}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase">{t('operational.title')}</h2>
              </div>

              <div className="flex flex-col">
                  {/* Row 1: Moisture Tolerance */}
                  <div className="group flex flex-col md:flex-row items-start md:items-center justify-between py-10 border-b border-[#222] hover:bg-[#0a0a0a] transition-all duration-300 cursor-default">
                      <div className="flex items-center gap-6 mb-4 md:mb-0">
                          <Droplets className="w-10 h-10 text-white/70 group-hover:text-geo-yellow transition-all duration-300" strokeWidth={1.5} />
                          <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-geo-yellow transition-colors duration-300">
                              {t('operational.r1title')}
                          </h3>
                      </div>
                      <p className="text-gray-400 text-sm md:text-lg max-w-xl leading-relaxed md:text-right group-hover:text-white transition-colors duration-300">
                          {t('operational.r1desc')}
                      </p>
                  </div>

                  {/* Row 2: Full Chemical Shield */}
                  <div className="group flex flex-col md:flex-row items-start md:items-center justify-between py-10 border-b border-[#222] hover:bg-[#0a0a0a] transition-all duration-300 cursor-default">
                      <div className="flex items-center gap-6 mb-4 md:mb-0">
                          <ShieldCheck className="w-10 h-10 text-white/70 group-hover:text-geo-yellow transition-all duration-300" strokeWidth={1.5} />
                          <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-geo-yellow transition-colors duration-300">
                              {t('operational.r2title')}
                          </h3>
                      </div>
                      <p className="text-gray-400 text-sm md:text-lg max-w-xl leading-relaxed md:text-right group-hover:text-white transition-colors duration-300">
                          {t('operational.r2desc')}
                      </p>
                  </div>

                  {/* Row 3: Easy Cleaning */}
                  <div className="group flex flex-col md:flex-row items-start md:items-center justify-between py-10 border-b border-[#222] hover:bg-[#0a0a0a] transition-all duration-300 cursor-default">
                      <div className="flex items-center gap-6 mb-4 md:mb-0">
                          <Waves className="w-10 h-10 text-white/70 group-hover:text-geo-yellow transition-all duration-300" strokeWidth={1.5} />
                          <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-geo-yellow transition-colors duration-300">
                              {t('operational.r3title')}
                          </h3>
                      </div>
                      <p className="text-gray-400 text-sm md:text-lg max-w-xl leading-relaxed md:text-right group-hover:text-white transition-colors duration-300">
                          {t('operational.r3desc')}
                      </p>
                  </div>

                  {/* Row 4: Quick Repairs */}
                  <div className="group flex flex-col md:flex-row items-start md:items-center justify-between py-10 border-b border-[#222] hover:bg-[#0a0a0a] transition-all duration-300 cursor-default">
                      <div className="flex items-center gap-6 mb-4 md:mb-0">
                          <Hammer className="w-10 h-10 text-white/70 group-hover:text-geo-yellow transition-all duration-300" strokeWidth={1.5} />
                          <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-geo-yellow transition-colors duration-300">
                              {t('operational.r4title')}
                          </h3>
                      </div>
                      <p className="text-gray-400 text-sm md:text-lg max-w-xl leading-relaxed md:text-right group-hover:text-white transition-colors duration-300">
                          {t('operational.r4desc')}
                      </p>
                  </div>

                  {/* Row 5: Predictable TCO */}
                  <div className="group flex flex-col md:flex-row items-start md:items-center justify-between py-10 border-b border-[#222] hover:bg-[#0a0a0a] transition-all duration-300 cursor-default">
                      <div className="flex items-center gap-6 mb-4 md:mb-0">
                          <Scale className="w-10 h-10 text-white/70 group-hover:text-geo-yellow transition-all duration-300" strokeWidth={1.5} />
                          <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-geo-yellow transition-colors duration-300">
                              {t('operational.r5title')}
                          </h3>
                      </div>
                      <p className="text-gray-400 text-sm md:text-lg max-w-xl leading-relaxed md:text-right group-hover:text-white transition-colors duration-300">
                          {t('operational.r5desc')}
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* 7. FINANCIAL LOGIC (TCO) */}
      <section className="py-24 bg-[#0a0505] border-b border-[#222]">
         <div className="container mx-auto px-6 md:px-10 flex flex-col items-center text-center">
             <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-4">{t('financial.title')}</h2>
             <p className="text-gray-500 text-sm font-mono uppercase tracking-widest mb-12">{t('financial.subtitle')}</p>

             <div className="relative w-full max-w-4xl aspect-[2/1] border-l border-b border-[#333] bg-[#0f0f0f] p-6 mb-12">
                 <svg viewBox="0 0 200 100" className="w-full h-full overflow-visible">
                      <defs>
                        <linearGradient id="redFade" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                        </linearGradient>
                      </defs>

                      {/* Horizontal Grid */}
                      <line x1="0" y1="25" x2="200" y2="25" stroke="#222" strokeWidth="0.5" />
                      <line x1="0" y1="50" x2="200" y2="50" stroke="#222" strokeWidth="0.5" />
                      <line x1="0" y1="75" x2="200" y2="75" stroke="#222" strokeWidth="0.5" />

                      {/* Vertical Grid */}
                      <line x1="50" y1="0" x2="50" y2="100" stroke="#222" strokeWidth="0.5" strokeDasharray="2 2" />
                      <line x1="100" y1="0" x2="100" y2="100" stroke="#222" strokeWidth="0.5" strokeDasharray="2 2" />
                      <line x1="150" y1="0" x2="150" y2="100" stroke="#222" strokeWidth="0.5" strokeDasharray="2 2" />

                      {/* Cost Area Fill */}
                      <path
                        d="M 0 90 C 60 85, 120 40, 200 10 V 100 H 0 Z"
                        fill="url(#redFade)"
                        stroke="none"
                      />

                      {/* Moving Red Line (Standard Concrete/Epoxy) */}
                      <path
                        d="M 0 90 C 60 85, 120 40, 200 10"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="2"
                        strokeDasharray="200"
                        strokeDashoffset="200"
                        className="animate-[dash-draw_4s_linear_infinite]"
                      />

                      {/* Markers for Red Line */}
                      <circle cx="50" cy="82" r="1.5" fill="#ef4444" className="animate-ping opacity-0" style={{animationDelay: '1s'}} />
                      <circle cx="100" cy="55" r="1.5" fill="#ef4444" className="animate-ping opacity-0" style={{animationDelay: '2s'}} />
                      <circle cx="150" cy="30" r="1.5" fill="#ef4444" className="animate-ping opacity-0" style={{animationDelay: '3s'}} />

                      <text x="80" y="25" fill="#ef4444" fontSize="3" fontWeight="bold">СТАНДАРТЕН БЕТОН / ЕПОКСИД</text>

                      {/* Yellow Flat Line (Geonyx) */}
                      <path d="M 0 70 L 200 68" fill="none" stroke="#FFCC00" strokeWidth="3" />

                      {/* Yellow Markers */}
                      <circle cx="50" cy="70" r="1" fill="#000" stroke="#FFCC00" strokeWidth="0.5" />
                      <circle cx="100" cy="69" r="1" fill="#000" stroke="#FFCC00" strokeWidth="0.5" />
                      <circle cx="150" cy="69" r="1" fill="#000" stroke="#FFCC00" strokeWidth="0.5" />

                      <text x="140" y="62" fill="#FFCC00" fontSize="4" fontWeight="bold">GEONYX CHEM</text>

                      {/* Axis */}
                      <text x="0" y="105" fill="#555" fontSize="3">ГОДИНА 0</text>
                      <text x="50" y="105" fill="#555" fontSize="3">ГОДИНА 5</text>
                      <text x="100" y="105" fill="#555" fontSize="3">ГОДИНА 10</text>
                      <text x="150" y="105" fill="#555" fontSize="3">ГОДИНА 15</text>
                      <text x="200" y="105" fill="#555" fontSize="3">ГОДИНА 20</text>
                 </svg>
             </div>

             <h3 className="text-lg font-black text-white uppercase leading-tight text-center">
                 "{t('financial.quote')} <br/> <span className="text-geo-yellow">{t('financial.quoteHighlight')}"</span>
             </h3>
         </div>
      </section>

      {/* NEW SECTION 1: ROI ANALYSIS - FIXED STYLE */}
      <section className="py-24 px-6 bg-[#0f1014] border-b border-[#222]">
          <div className="container mx-auto">
              <div className="text-center mb-16">
                   <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">{t('roiTable.eyebrow')}</span>
                    </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase">{t('roiTable.title')}</h2>
                  <p className="text-gray-500 mt-4 max-w-3xl mx-auto font-mono text-sm">{t('roiTable.subtitle')}</p>
              </div>

              <div className="w-full overflow-x-auto border border-[#333] shadow-2xl bg-[#111]">
                  <table className="w-full min-w-[900px] border-collapse text-left">
                      <thead>
                          <tr className="bg-black">
                              <th className="p-4 text-white font-black uppercase tracking-wider text-xs border-b border-r border-[#333] w-1/4">{t('roiTable.colParam')}</th>
                              <th className="p-4 bg-[#1a1a1a] text-geo-yellow font-black uppercase tracking-wider text-xs border-b border-r border-[#333] w-1/4 relative border-t-4 border-t-geo-yellow">
                                  GEONYX CHEM
                              </th>
                              <th className="p-4 text-gray-500 font-bold uppercase tracking-wider text-xs border-b border-r border-[#333] w-1/4">{t('roiTable.colEpoxy')}</th>
                              <th className="p-4 text-gray-500 font-bold uppercase tracking-wider text-xs border-b border-[#333] w-1/4">{t('roiTable.colStd')}</th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-[#333] text-sm">
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">{t('roiTable.row1')}</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> {t('roiTable.val1chem')}</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">{t('roiTable.val1epoxy')}</td>
                              <td className="p-4 text-gray-500">{t('roiTable.val1std')}</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">{t('roiTable.row2')}</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> {t('roiTable.val2chem')}</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">{t('roiTable.val2epoxy')}</td>
                              <td className="p-4 text-gray-500">{t('roiTable.val2std')}</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">{t('roiTable.row3')}</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> {t('roiTable.val3chem')}</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">{t('roiTable.val3epoxy')}</td>
                              <td className="p-4 text-gray-500">{t('roiTable.val3std')}</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">{t('roiTable.row4')}</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> {t('roiTable.val4chem')}</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">{t('roiTable.val4epoxy')}</td>
                              <td className="p-4 text-gray-500">{t('roiTable.val4std')}</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">{t('roiTable.row5')}</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> {t('roiTable.val5chem')}</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">{t('roiTable.val5epoxy')}</td>
                              <td className="p-4 text-gray-500">{t('roiTable.val5std')}</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </section>

      {/* NEW SECTION 1.5: APPLICATIONS GRID */}
      <section id="applications" className="relative py-20 border-b border-[#222]">
          <div className="absolute inset-0 z-0">
             <SafeImage
               src="/GEONYX-chemical-plant.jpeg"
               className="w-full h-full object-cover opacity-70"
               onError={(e) => { e.currentTarget.src = "/GEONYX-Calculator.webp" }}
               alt="Chem Applications"
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
                  <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm font-mono">{t('applications.subtitle')}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {APPLICATION_META.map((area) => (
                      <div key={area.key} className="bg-[#141414] border border-[#222] p-6 hover:border-geo-yellow transition-all group">
                          <area.icon className="w-8 h-8 text-gray-600 group-hover:text-geo-yellow mb-4 transition-colors" />
                          <h4 className="text-white font-bold uppercase text-sm mb-2">{t(`applications.${area.key}title`)}</h4>
                          <p className="text-gray-500 text-xs">{t(`applications.${area.key}desc`)}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* NEW SECTION 2: PROCESS */}
      <section className="py-20 bg-[#141414] border-b border-[#222]">
          <div className="container mx-auto px-6 md:px-10">
              <div className="text-center mb-16">
                  <div className="flex items-center justify-center gap-3 mb-4">
                      <div className="h-[2px] w-8 bg-geo-yellow"></div>
                      <h3 className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">{t('process.eyebrow')}</h3>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase">{t('process.title')}</h2>
                  <p className="text-gray-500 mt-4 max-w-2xl mx-auto font-mono text-sm">{t('process.subtitle')}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {(['p1','p2','p3','p4','p5','p6'] as const).map((key, idx) => (
                      <div key={key} className="bg-[#0f0f0f] border border-[#222] p-8 relative overflow-hidden group">
                          <span className="text-6xl font-black text-[#1a1a1a] absolute top-4 right-4 z-0 group-hover:text-geo-yellow/40 transition-colors">0{idx + 1}</span>
                          <div className="relative z-10">
                              <h4 className="text-white font-black uppercase text-base mb-2">{t(`process.${key}title`)}</h4>
                              <p className="text-gray-500 text-base">{t(`process.${key}desc`)}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* NEW SECTION 3: OFFER PACKAGE */}
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
                           <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">{t('offerPackage.eyebrow')}</span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 leading-tight">
                          {t('offerPackage.title')}
                      </h2>
                      <p className="text-gray-400 text-base leading-relaxed mb-8">
                          {t('offerPackage.desc')}
                      </p>
                      <div className="p-6 bg-[#141414] border border-[#333] border-l-4 border-l-geo-yellow">
                          <p className="text-white font-bold text-sm uppercase mb-2">{t('offerPackage.qualityLabel')}</p>
                          <p className="text-gray-500 text-xs">{t('offerPackage.qualityDesc')}</p>
                      </div>
                  </div>

                  {/* Right Grid */}
                  <div className="lg:w-2/3 w-full">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {(['doc1','doc2','doc3','doc4','doc5','doc6'] as const).map((key) => (
                              <div key={key} className="flex items-start gap-4 p-6 bg-[#111] border border-[#222] hover:border-geo-yellow/40 transition-colors group">
                                  <CheckCircle className="w-5 h-5 text-gray-500 group-hover:text-geo-yellow flex-shrink-0 transition-colors mt-0.5" />
                                  <span className="text-gray-300 text-sm font-bold uppercase leading-snug group-hover:text-white transition-colors">{t(`offerPackage.${key}`)}</span>
                              </div>
                          ))}
                      </div>

                      <div className="mt-8 flex justify-end">
                           <Button
                            onClick={handleCopyTender}
                            className={`flex items-center gap-2 px-6 py-3 font-bold uppercase text-sm transition-all ${copySuccess ? 'bg-green-600 text-white border-green-600' : 'bg-[#222] text-gray-300 hover:bg-geo-yellow hover:text-black border-transparent'}`}
                          >
                              {copySuccess ? <CheckCircle className="w-4 h-4"/> : <Copy className="w-4 h-4"/>}
                              {copySuccess ? t('offerPackage.copiedBtn') : t('offerPackage.copyBtn')}
                          </Button>
                      </div>
                  </div>

              </div>
          </div>
      </section>

      {/* NEW SECTION 4: DOWNLOADS */}
      <section id="specs" className="py-20 bg-black border-b border-[#222]">
          <div className="container mx-auto px-6 md:px-10">
              <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-12 border-l-4 border-geo-yellow pl-4">{t('downloads.title')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {DOWNLOAD_META.map((doc) => (
                      <button key={doc.key} className="w-full flex items-center justify-between p-6 bg-[#111] border border-[#333] hover:border-geo-yellow group transition-all">
                          <div className="flex items-center gap-4">
                              <doc.icon className="text-gray-400 group-hover:text-geo-yellow w-8 h-8" />
                              <div className="text-left">
                                  <span className="text-white font-bold block uppercase text-sm">{t(`downloads.${doc.key}title`)}</span>
                                  <span className="text-gray-500 text-xs">{t(`downloads.${doc.key}sub`)}</span>
                              </div>
                          </div>
                          <Download className="text-gray-500 group-hover:text-white" />
                      </button>
                  ))}
              </div>
          </div>
      </section>

      {/* 8. FOOTER / DOWNLOADS */}
      <section className="bg-geo-yellow py-24 text-center">
          <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-black text-black uppercase mb-4 tracking-tight">
                  {t('cta.title')}
              </h2>
              <p className="text-sm text-black/70 font-medium mb-4 max-w-2xl mx-auto leading-relaxed">
                  {t('cta.desc')}
              </p>

              <div className="flex flex-col md:flex-row justify-center gap-6 mt-10">
                  <Link to={to('/request-inspection')}>
                    <button className="bg-black text-white hover:bg-[#222] font-bold uppercase py-4 px-8 flex items-center justify-center gap-3 shadow-2xl transition-colors">
                        <ShieldCheck className="w-5 h-5 text-geo-yellow" /> {t('cta.btn1')}
                    </button>
                  </Link>
                  <button className="bg-black text-white hover:bg-[#222] font-bold uppercase py-4 px-8 flex items-center justify-center gap-3 shadow-2xl transition-colors">
                      <FileText className="w-5 h-5 text-geo-yellow" /> {t('cta.btn2')}
                  </button>
                  <Link to={to('/contacts')}>
                    <button className="bg-black text-white hover:bg-[#222] font-bold uppercase py-4 px-8 flex items-center justify-center gap-3 shadow-2xl transition-colors">
                        <CheckCircle className="w-5 h-5 text-geo-yellow" /> {t('cta.btn3')}
                    </button>
                  </Link>
              </div>
          </div>
      </section>

      {/* FOOTER PREVIEW TEXT */}
      <section className="bg-black py-16 border-t border-[#222]">
          <div className="container mx-auto px-6 text-center">
              <p className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm mb-4">{t('footerBand.label')}</p>
              <p className="text-gray-400 max-w-3xl mx-auto text-sm leading-relaxed">
                  {t('footerBand.desc')}
              </p>
          </div>
      </section>

      <Footer />
    </div>
  );
};

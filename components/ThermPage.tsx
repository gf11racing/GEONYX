
import React, { useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Button } from './Button';
import { 
  Flame, Thermometer, Snowflake, Zap, 
  ArrowRight, FileText, Download, HelpCircle, ShieldCheck, 
  Activity, AlertTriangle, Check, Scale,
  Droplets, Utensils, Factory, Layers, Sparkles, ClipboardList,
  BarChart3, TrendingUp, CheckCircle, Copy, BookOpen,
  Plane, TrainFront, Fuel
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { SafeImage } from './SafeImage';

const DIAGNOSTICS_DATA = [
    {
        id: 1,
        title: "ТЕРМОШОК ОТ ПАРА",
        problem: "Почистване с пара 120°C върху студен под кара епоксидните настилки да се напукат и отлепят мигновено.",
        solution: "GEONYX THERM има термично разширение, близко до това на бетона и запазва връзката при повтарящи се цикли пара–студ.",
        icon: Thermometer,
        image: "/GEONYX-THERM-GEONYX-THERM.webp"
    },
    {
        id: 2,
        title: "РАЗТОПЕН МЕТАЛ И ИСКРИ",
        problem: "Пръски от заваряване и леярски процеси (700°C+) прогарят полимерните подове и създават риск от пожар.",
        solution: "Минерална матрица, устойчива на директен контакт с огън и разтопен метал, без запалване и без деформация.",
        icon: Flame,
        image: "/GEONYX-THERM-MOLTEN-METAL-AND-SPARKS.webp"
    },
    {
        id: 3,
        title: "ШОКОВО ЗАМРАЗЯВАНЕ",
        problem: "При -40°C стандартните покрития стават крехки, напукват се от вибрации и механично натоварване.",
        solution: "GEONYX THERM запазва носимоспособност и микрo-еластичност при криогенни условия и чести цикли замразяване–размразяване.",
        icon: Snowflake,
        image: "/GEONYX-THERM-SHOCK-FREEZING.webp"
    },
    {
        id: 4,
        title: "ПОЖАРНА БЕЗОПАСНОСТ И ДИМ",
        problem: "В случай на пожар синтетичните настилки отделят гъст токсичен дим и отровни газове.",
        solution: "GEONYX THERM е клас A1fl – негорим, без принос към пожара и без отделяне на дим и токсични изпарения.",
        icon: ShieldCheck,
        image: "/GEONYX-THERM-FIRE-SAFETY.webp"
    },
    {
        id: 5,
        title: "ГОРЕЩО ОЛИО И МАЗНИНИ",
        problem: "Врящи мазнини (180°C) и масла в хранителната индустрия разяждат бетона и полимерните слоеве.",
        solution: "Плътна минерална структура, която не позволява проникване на мазнини и остава стабилна при високи температури и химия.",
        icon: Droplets,
        image: "/GEONYX-THERM-HOT-OIL.webp"
    },
    {
        id: 6,
        title: "ЕКЗОТЕРМИЧНИ ПРОЦЕСИ",
        problem: "Химически реакции в реактори и вани могат за секунди да повишат температурата до стотици градуси.",
        solution: "GEONYX THERM е проектиран за краткотрайни температурни пикове до 1200°C, без загуба на адхезия към бетона.",
        icon: Activity,
        image: "/GEONYX-THERM-EXOTHERMIC.webp"
    },
    {
        id: 7,
        title: "СТЕРИЛИЗАЦИЯ И CIP",
        problem: "Автоклавиране, гореща вода под налягане и агресивни препарати разрушават фугите и слабите зони.",
        solution: "Монолитна безфугова система, устойчива на CIP режими, парно миене и дезинфекция в чисти помещения и храни.",
        icon: Sparkles,
        image: "/GEONYX-THERM-STERILIZATION.webp"
    },
    {
        id: 8,
        title: "ИСКРООБРАЗУВАНЕ В ATEX ЗОНИ",
        problem: "Механични искри при удар в зони с газ или прах могат да стартират експлозия.",
        solution: "Non-sparking конфигурация на GEONYX THERM – повърхността не генерира механични искри при удар и триене.",
        icon: Zap,
        image: "/GEONYX-THERM-SPARK- FORMATION.webp"
    }
];

const THERM_HOTSPOTS = [
  {
    id: 1,
    title: "1. НОСЕЩ БЕТОН",
    subtitle: "Подготвена основа",
    description: "Структурно проверен бетон, шлайфан или фрезован, с коригирани фуги и дефекти за устойчивост на динамични и температурни натоварвания.",
    top: "85%",
    left: "50%"
  },
  {
    id: 2,
    title: "2. АДХЕЗИОНЕНА ЗОНА",
    subtitle: "Термично съвместима връзка",
    description: "Специална минерална връзка с коефициент на разширение, близък до бетона – за нулево отлепване при термошок.",
    top: "70%",
    left: "30%"
  },
  {
    id: 3,
    title: "3. THERM ЯДРО",
    subtitle: "Термоустойчив слой",
    description: "Основен GEONYX THERM слой, който поема екстремни температурни пикове и механично натоварване без крехък лом.",
    top: "50%",
    left: "60%"
  },
  {
    id: 4,
    title: "4. ФУНКЦИОНАЛЕН ФИНИШ",
    subtitle: "Антиплъзгане и хигиена",
    description: "Грапавина R12/R13 за безопасност, лесно почистване и съвместимост с храни, пара и агресивни почистващи агенти.",
    top: "25%",
    left: "50%"
  }
];

export const ThermPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);
  
  // Animation Reset Keys
  const [expansionKey, setExpansionKey] = useState(0);
  const [heatKey, setHeatKey] = useState(0);
  const [repairKey, setRepairKey] = useState(0);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "GEONYX THERM | Термична безопасност – Негорими индустриални настилки до 1200°C";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', "GEONYX THERM е минерална система за термична защита на индустриални подове – устойчива на термошок, пара, разтопен метал и екстремни температури от -40°C до +1200°C. Клас A1 (негоримост). Подходяща за металургия, енергетика, хранително-вкусова индустрия и високотемпературни производства.");
    }
  }, []);

  const handleCopyTender = () => {
    const text = "Настилките и защитните системи в термично натоварените зони (металургия, енергетика, хранителна индустрия, ATEX помещения и др.) да бъдат изпълнени с минерални системи тип GEONYX THERM или еквивалент. Системите следва да осигуряват клас на реакция на огън A1fl, устойчивост на термошок, температурен диапазон в съответствие с проекта, съвместим коефициент на термично разширение с бетона и съответствие с приложимите HACCP/ATEX/EN стандарти.";
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
            src="/GEONYX-THERM-HERO.webp" 
            onError={(e) => { e.currentTarget.src = "/GEONYX-THERM-HERO.webp" }}
            className="w-full h-full object-cover opacity-90" 
            alt="Therm Environment"
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
                        ТЕРМИЧНА БЕЗОПАСНОСТ И ОГЪН
                    </span>
                </div>
                
                {/* H1 Title */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 uppercase tracking-tighter drop-shadow-2xl mix-blend-difference page-animate-title">
                    GEONYX <br/>
                    {/* Updated Gradient */}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-geo-yellow to-yellow-600">THERM</span>
                </h1>
                
                {/* Description Box */}
                <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light max-w-4xl leading-relaxed border-l-4 border-geo-yellow pl-6 py-2 bg-black/30 backdrop-blur-sm page-animate-desc">
                    Минерални термоустойчиви настилки за металургия, енергетика и храни – от шоково замразяване до разтопен метал. Клас A1fl и температурен диапазон -40°C / +1200°C.
                </p>

                {/* HUD Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl page-animate-stats">
                    <div className="bg-white/5 border border-white/10 p-4 backdrop-blur-sm">
                        <div className="text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-1">TEMP RANGE</div>
                        <div className="text-geo-yellow font-mono text-xl font-bold">-40°C / +1200°C</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-4 backdrop-blur-sm">
                        <div className="text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-1">FIRE CLASS</div>
                        <div className="text-geo-yellow font-mono text-xl font-bold">A1fl (Негорим)</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-4 backdrop-blur-sm">
                        <div className="text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-1">THERMAL SHOCK</div>
                        <div className="text-geo-yellow font-mono text-xs font-bold leading-tight mt-1">Пара, огън, криогенни цикли</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-4 backdrop-blur-sm">
                        <div className="text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-1">THICKNESS</div>
                        <div className="text-geo-yellow font-mono text-xl font-bold">9 mm+</div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 page-animate-buttons">
                    <a href="#specs">
                        <Button
                          variant="primary"
                          className="h-12 px-6 text-sm font-bold bg-geo-yellow text-black border-none hover:bg-white transition-all shadow-[0_0_20px_rgba(255,204,0,0.15)] rounded-none uppercase tracking-wider flex items-center gap-2"
                        >
                          ТЕХНИЧЕСКИ ПАСПОРТ <ArrowRight className="w-4 h-4" />
                        </Button>
                    </a>
                    
                    <Link to="/request-inspection">
                        <button 
                          className="h-12 px-6 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase"
                        >
                          ЗАЯВИ ИНЖЕНЕРЕН ОДИТ
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
                      <Flame className="w-8 h-8 text-white" />
                      <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">EN 13501-1 <br/><span className="text-[10px]">Клас A1fl (Негорим)</span></span>
                  </div>
                  <div className="flex items-center gap-3">
                      <Thermometer className="w-8 h-8 text-white" />
                      <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">TEMP ENDURANCE <br/><span className="text-[10px]">до 1200°C</span></span>
                  </div>
                  <div className="flex items-center gap-3">
                      <Scale className="w-8 h-8 text-white" />
                      <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">THERMAL EXPANSION <br/><span className="text-[10px]">БЕЗ ОТЛЕПВАНЕ</span></span>
                  </div>
                  <div className="flex items-center gap-3">
                      <Utensils className="w-8 h-8 text-white" />
                      <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">HACCP COMPATIBLE <br/><span className="text-[10px]">ХРАНИ & ПАРА</span></span>
                  </div>
                  <div className="flex items-center gap-3">
                      <ShieldCheck className="w-8 h-8 text-white" />
                      <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">ATEX LOGIC <br/><span className="text-[10px]">NON-SPARKING</span></span>
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
                    <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">
                        ТЕРМОДИНАМИКА НА РАЗРУШЕНИЕТО
                    </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white uppercase leading-none">
                    ТОПЛИНАТА РАЗРУШАВА БЕТОНА. ТЕРМОШОКЪТ УБИВА ЕПОКСИДА.
                </h2>
                <p className="text-gray-500 mt-6 text-sm font-mono uppercase tracking-widest">
                     Когато студ, пара, огън и химия действат едновременно, стандартните полимерни покрития се предават. GEONYX THERM е минерална защита за екстремни температурни сценарии.
                </p>
            </div>
        </div>

        {/* IMAGE GRID - EDGE TO EDGE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
            {DIAGNOSTICS_DATA.map((item, index) => (
                <div 
                    key={item.id}
                    className="group relative h-[500px] w-full overflow-hidden border-r border-b border-[#222] bg-[#111]"
                >
                    {/* Background Image - Clean */}
                    <div className="absolute inset-0">
                        <SafeImage 
                            src={item.image} 
                            alt={item.title} 
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

                             <h3 className="text-2xl font-black text-white uppercase mb-4 leading-tight group-hover:text-geo-yellow transition-colors">
                                {item.title}
                             </h3>
                             
                             {/* Problem/Solution - Readability Update */}
                             <div className="space-y-4 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                                 <div className="border-l-2 border-red-500 pl-3">
                                     <span className="text-xs text-red-500 font-bold uppercase block mb-1">ПРОБЛЕМ</span>
                                     <p className="text-sm text-gray-300 leading-snug font-medium">
                                         {item.problem}
                                     </p>
                                 </div>

                                 <div className="border-l-2 border-geo-yellow pl-3">
                                     <span className="text-xs text-geo-yellow font-bold uppercase block mb-1">РЕШЕНИЕ</span>
                                     <p className="text-sm text-white font-bold leading-snug">
                                         {item.solution}
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
                  ТЕХНИЧЕСКИ РАЗРЕЗ – GEONYX THERM
              </h2>
              <div className="w-24 h-1 bg-geo-yellow mx-auto"></div>
              <p className="text-gray-500 mt-4 text-sm font-mono uppercase tracking-widest">
                  Интерактивен модел на слоевете – от основата до работната повърхност.
              </p>
        </div>

        <div className="relative w-full h-[550px] bg-[#111] border-y border-[#333] shadow-2xl group">
             {/* BACKGROUND IMAGE */}
            <div className="absolute inset-0 bg-black">
               <SafeImage 
                 src="/GEONYX-THERM-1.webp" 
                 alt="Therm System Cross Section" 
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
                  {THERM_HOTSPOTS.map((spot) => (
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
                                      {spot.title}
                                  </h3>
                                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest block mb-4 border-b border-white/10 pb-2">
                                      {spot.subtitle}
                                  </span>
                                  <p className="text-gray-300 text-sm leading-relaxed">
                                      {spot.description}
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
                    <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">ИНЖЕНЕРНИ ДАННИ</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white uppercase">ЛАБОРАТОРНИ ТЕСТОВЕ</h2>
                <p className="text-gray-500 mt-2 text-sm font-mono">Независими тестове в акредитирани лаборатории – пълни протоколи налични в TDS.</p>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                 
                 {/* BLOCK 1: THERMAL EXPANSION (Animated Bars) */}
                 <div 
                    className="bg-[#141414] p-8 border border-[#222] hover:border-white/20 transition-colors cursor-default"
                    onMouseEnter={() => setExpansionKey(prev => prev + 1)}
                 >
                     <h3 className="text-white font-bold uppercase mb-6 flex items-center gap-2">
                         <Scale className="text-geo-yellow w-5 h-5" /> ТЕРМИЧНО РАЗШИРЕНИЕ (CTE)
                     </h3>
                     <div className="space-y-4">
                         <div className="flex items-center text-xs text-gray-500 uppercase font-bold justify-between"><span>Епоксидна настилка</span> <span>~4x по-висок</span></div>
                         <div className="w-full h-2 bg-[#222] overflow-hidden"><div key={`exp-1-${expansionKey}`} className="w-[90%] h-full bg-red-600 animate-[width-grow_2s_ease-out]"></div></div>
                         
                         <div className="flex items-center text-xs text-geo-yellow uppercase font-black justify-between"><span>GEONYX THERM</span> <span>Съвместим</span></div>
                         <div className="w-full h-4 bg-[#222] border border-geo-yellow overflow-hidden"><div key={`exp-2-${expansionKey}`} className="w-[30%] h-full bg-geo-yellow animate-[width-grow_2s_ease-out_0.5s_backwards]"></div></div>

                         <div className="flex items-center text-xs text-gray-600 uppercase font-bold justify-between"><span>Бетон</span> <span>База</span></div>
                         <div className="w-full h-1 bg-[#222] overflow-hidden"><div className="w-[30%] h-full bg-gray-500"></div></div>
                     </div>
                     <p className="text-gray-500 text-xs mt-4 text-center">Високият CTE на епоксида води до отлепване при термошок. GEONYX се движи заедно с бетона.</p>
                 </div>

                 {/* BLOCK 2: TEMP LIMIT */}
                 <div 
                    className="bg-[#141414] p-8 border border-[#222] hover:border-white/20 transition-colors cursor-default"
                    onMouseEnter={() => setHeatKey(prev => prev + 1)}
                 >
                     <h3 className="text-white font-bold uppercase mb-6 flex items-center gap-2">
                         <Thermometer className="text-geo-yellow w-5 h-5" /> ТЕМПЕРАТУРЕН ЛИМИТ
                     </h3>
                     <div className="h-48 border-b border-[#333] relative">
                         <div className="flex items-end justify-around h-full pb-4 px-4 gap-6">
                             {/* Competitor Column */}
                             <div className="flex flex-col items-center justify-end h-full w-20 group">
                                 <span className="text-red-500 font-bold text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">60°C</span>
                                 <div className="w-full bg-[#222] border border-red-500 h-[15%] relative overflow-hidden">
                                     <div key={`heat-1-${heatKey}`} className="absolute bottom-0 w-full bg-red-900/50 animate-[height-grow_1.5s_ease-out] h-full"></div>
                                 </div>
                             </div>

                             {/* Mid Column */}
                             <div className="flex flex-col items-center justify-end h-full w-20 group">
                                 <span className="text-orange-500 font-bold text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">120°C</span>
                                 <div className="w-full bg-[#222] border border-orange-500 h-[30%] relative overflow-hidden">
                                     <div key={`heat-2-${heatKey}`} className="absolute bottom-0 w-full bg-orange-900/50 animate-[height-grow_1.5s_ease-out_0.2s_backwards] h-full"></div>
                                 </div>
                             </div>

                             {/* GEONYX Column */}
                             <div className="flex flex-col items-center justify-end h-full w-20 group">
                                 <span className="text-geo-yellow font-bold text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">1200°C</span>
                                 <div className="w-full bg-[#222] border border-geo-yellow h-[100%] relative overflow-hidden">
                                     <div key={`heat-3-${heatKey}`} className="absolute bottom-0 w-full bg-geo-yellow/50 animate-[height-grow_1.5s_ease-out_0.4s_backwards] h-full"></div>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div className="flex justify-around px-4 pt-2">
                         <span className="text-[10px] text-gray-400 uppercase font-bold w-20 text-center">Епоксид</span>
                         <span className="text-[10px] text-gray-400 uppercase font-bold w-20 text-center">PU-Цимент</span>
                         <span className="text-[10px] text-gray-400 uppercase font-bold w-20 text-center">GEONYX</span>
                     </div>
                     <p className="text-gray-500 text-xs mt-4 text-center">Краткотрайни пикове до 1200°C без загуба на адхезия.</p>
                 </div>

                 {/* BLOCK 3: REPAIR FREQUENCY */}
                 <div 
                    className="bg-[#141414] p-8 border border-[#222] hover:border-white/20 transition-colors cursor-default relative"
                    onMouseEnter={() => setRepairKey(prev => prev + 1)}
                 >
                     <h3 className="text-white font-bold uppercase mb-6 flex items-center gap-2">
                         <TrendingUp className="text-geo-yellow w-5 h-5" /> РЕМОНТИ И DOWNTIME
                     </h3>
                     <div className="relative w-full h-40 border-l border-b border-[#333]">
                         <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                             {/* Standard - High Maintenance Freq */}
                             <path d="M 0 80 L 20 20 L 40 80 L 60 20 L 80 80" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 2" />

                             {/* Geonyx Therm - Stable */}
                             <path 
                                key={`repair-${repairKey}`}
                                d="M 0 80 L 100 75" 
                                fill="none" 
                                stroke="#FFCC00" 
                                strokeWidth="3"
                                strokeDasharray="200"
                                strokeDashoffset="200"
                                className="animate-[dash-draw_3s_linear_forwards_1s]"
                             />
                         </svg>
                         
                         <div className="absolute top-[20%] left-[10%] text-[10px] font-bold text-red-500 leading-none whitespace-nowrap">
                             ЧЕСТИ СПИРАНИЯ
                         </div>
                         <div className="absolute top-[75%] left-[60%] text-[10px] font-bold text-geo-yellow leading-none whitespace-nowrap">
                             СТАБИЛНОСТ
                         </div>
                     </div>
                     <div className="flex justify-between text-[10px] text-gray-500 font-mono mt-2">
                         <span>ВРЕМЕ (ГОДИНИ)</span>
                         <span>СЪСТОЯНИЕ НА ПОДА</span>
                     </div>
                     <p className="text-gray-500 text-xs mt-4 text-center">Единично изпълнение с GEONYX THERM срещу множество интервенции при стандартни полимери.</p>
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
                      <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">ЕФЕКТИВНОСТ</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase">ОПЕРАТИВНО ПРЕВЪЗХОДСТВО</h2>
              </div>

              <div className="flex flex-col">
                  {/* Row 1: Fire */}
                  <div className="group flex flex-col md:flex-row items-start md:items-center justify-between py-10 border-b border-[#222] hover:bg-[#0a0a0a] transition-all duration-300 cursor-default">
                      <div className="flex items-center gap-6 mb-4 md:mb-0">
                          <Flame className="w-10 h-10 text-white/70 group-hover:text-geo-yellow transition-all duration-300" strokeWidth={1.5} />
                          <h3 className="text-2xl font-bold text-white uppercase tracking-tight group-hover:text-geo-yellow transition-colors duration-300">
                              НУЛЕВ ПРИНОС КЪМ ПОЖАРА
                          </h3>
                      </div>
                      <p className="text-gray-400 text-sm md:text-lg max-w-xl leading-relaxed md:text-right group-hover:text-white transition-colors duration-300 font-medium">
                          Негорим клас A1fl – подът остава инертен по време на пожар и не добавя гориво и дим.
                      </p>
                  </div>

                  {/* Row 2: Range */}
                  <div className="group flex flex-col md:flex-row items-start md:items-center justify-between py-10 border-b border-[#222] hover:bg-[#0a0a0a] transition-all duration-300 cursor-default">
                      <div className="flex items-center gap-6 mb-4 md:mb-0">
                          <Thermometer className="w-10 h-10 text-white/70 group-hover:text-geo-yellow transition-all duration-300" strokeWidth={1.5} />
                          <h3 className="text-2xl font-bold text-white uppercase tracking-tight group-hover:text-geo-yellow transition-colors duration-300">
                              ЕДНА СИСТЕМА ЗА -40°C ДО +1200°C
                          </h3>
                      </div>
                      <p className="text-gray-400 text-sm md:text-lg max-w-xl leading-relaxed md:text-right group-hover:text-white transition-colors duration-300 font-medium">
                          Покрива шоково замразяване, пара, огън и разтопен метал в една инженерна логика.
                      </p>
                  </div>

                  {/* Row 3: Food Safe */}
                  <div className="group flex flex-col md:flex-row items-start md:items-center justify-between py-10 border-b border-[#222] hover:bg-[#0a0a0a] transition-all duration-300 cursor-default">
                      <div className="flex items-center gap-6 mb-4 md:mb-0">
                          <Sparkles className="w-10 h-10 text-white/70 group-hover:text-geo-yellow transition-all duration-300" strokeWidth={1.5} />
                          <h3 className="text-2xl font-bold text-white uppercase tracking-tight group-hover:text-geo-yellow transition-colors duration-300">
                              ГОТОВ ЗА ХРАНИ И ЧИСТИ ПОМЕЩЕНИЯ
                          </h3>
                      </div>
                      <p className="text-gray-400 text-sm md:text-lg max-w-xl leading-relaxed md:text-right group-hover:text-white transition-colors duration-300 font-medium">
                          Устойчив на CIP, пара, дезинфекция и агресивни препарати, без фуги и кухини.
                      </p>
                  </div>

                  {/* Row 4: ATEX */}
                  <div className="group flex flex-col md:flex-row items-start md:items-center justify-between py-10 border-b border-[#222] hover:bg-[#0a0a0a] transition-all duration-300 cursor-default">
                      <div className="flex items-center gap-6 mb-4 md:mb-0">
                          <Zap className="w-10 h-10 text-white/70 group-hover:text-geo-yellow transition-all duration-300" strokeWidth={1.5} />
                          <h3 className="text-2xl font-bold text-white uppercase tracking-tight group-hover:text-geo-yellow transition-colors duration-300">
                              БЕЗ ИСКРИ В ATEX ЗОНИ
                          </h3>
                      </div>
                      <p className="text-gray-400 text-sm md:text-lg max-w-xl leading-relaxed md:text-right group-hover:text-white transition-colors duration-300 font-medium">
                          Non-sparking повърхности за рискови зони с газове и прах – критично за безопасността.
                      </p>
                  </div>

                  {/* Row 5: Lifecycle */}
                  <div className="group flex flex-col md:flex-row items-start md:items-center justify-between py-10 border-b border-[#222] hover:bg-[#0a0a0a] transition-all duration-300 cursor-default">
                      <div className="flex items-center gap-6 mb-4 md:mb-0">
                          <ClipboardList className="w-10 h-10 text-white/70 group-hover:text-geo-yellow transition-all duration-300" strokeWidth={1.5} />
                          <h3 className="text-2xl font-bold text-white uppercase tracking-tight group-hover:text-geo-yellow transition-colors duration-300">
                              МИНИМУМ DOWNTIME, МАКСИМУМ ЖИЗНЕН ЦИКЪЛ
                          </h3>
                      </div>
                      <p className="text-gray-400 text-sm md:text-lg max-w-xl leading-relaxed md:text-right group-hover:text-white transition-colors duration-300 font-medium">
                          Дизайн за ≥ 20 години работа при правилна поддръжка – по-малко ремонти, по-малко спирания.
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* 7. FINANCIAL LOGIC (TCO) */}
      <section className="py-24 bg-[#0a0505] border-b border-[#222]">
         <div className="container mx-auto px-6 md:px-10 flex flex-col items-center text-center">
             <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-4">ФИНАНСОВА ЛОГИКА ПРИ ЕКСТРЕМНИ ТЕМПЕРАТУРИ</h2>
             <p className="text-gray-500 text-sm font-mono uppercase tracking-widest mb-12">Сравнение на общата цена на притежание.</p>
             
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

                      {/* Moving Red Line (Standard) */}
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
                      
                      <text x="80" y="25" fill="#ef4444" fontSize="3" fontWeight="bold">ЕПОКСИДНА НАСТИЛКА</text>

                      {/* Yellow Flat Line (Geonyx) */}
                      <path d="M 0 70 L 200 68" fill="none" stroke="#FFCC00" strokeWidth="3" />
                      
                      {/* Yellow Markers */}
                      <circle cx="50" cy="70" r="1" fill="#000" stroke="#FFCC00" strokeWidth="0.5" />
                      <circle cx="100" cy="69" r="1" fill="#000" stroke="#FFCC00" strokeWidth="0.5" />
                      <circle cx="150" cy="69" r="1" fill="#000" stroke="#FFCC00" strokeWidth="0.5" />

                      <text x="140" y="62" fill="#FFCC00" fontSize="4" fontWeight="bold">GEONYX THERM</text>

                      {/* Axis */}
                      <text x="0" y="105" fill="#555" fontSize="3">ГОДИНА 0</text>
                      <text x="50" y="105" fill="#555" fontSize="3">ГОДИНА 5</text>
                      <text x="100" y="105" fill="#555" fontSize="3">ГОДИНА 10</text>
                      <text x="150" y="105" fill="#555" fontSize="3">ГОДИНА 15</text>
                      <text x="200" y="105" fill="#555" fontSize="3">ГОДИНА 20</text>
                 </svg>
             </div>

             <h3 className="text-2xl font-black text-white uppercase leading-tight text-center">
                 "БЕТОНЪТ СЕ ПЛАЩА ПЕТ ПЪТИ, КОГАТО СИСТЕМАТА НЕ ИЗДЪРЖА НА ТОПЛИНА. <br/> <span className="text-geo-yellow">GEONYX THERM СЕ ПЛАЩА ВЕДНЪЖ."</span>
             </h3>
         </div>
      </section>

      {/* NEW SECTION 1: ROI ANALYSIS - FIXED STYLE */}
      <section className="py-24 px-6 bg-[#0f1014] border-b border-[#222]">
          <div className="container mx-auto">
              <div className="text-center mb-16">
                   <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">ROI АНАЛИЗ</span>
                    </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase">ИНВЕСТИЦИОНЕН ОДИТ</h2>
                  <p className="text-gray-500 mt-4 max-w-3xl mx-auto font-mono text-sm">Сравнение на жизнения цикъл между GEONYX THERM и алтернативи.</p>
              </div>

              <div className="w-full overflow-x-auto border border-[#333] shadow-2xl bg-[#111]">
                  <table className="w-full min-w-[900px] border-collapse text-left">
                      <thead>
                          <tr className="bg-black">
                              <th className="p-4 text-white font-black uppercase tracking-wider text-xs border-b border-r border-[#333] w-1/4">ПАРАМЕТЪР</th>
                              <th className="p-4 bg-[#1a1a1a] text-geo-yellow font-black uppercase tracking-wider text-sm border-b border-r border-[#333] w-1/4 relative border-t-4 border-t-geo-yellow">
                                  GEONYX THERM
                              </th>
                              <th className="p-4 text-gray-500 font-bold uppercase tracking-wider text-xs border-b border-r border-[#333] w-1/4">ЕПОКСИДНА НАСТИЛКА</th>
                              <th className="p-4 text-gray-500 font-bold uppercase tracking-wider text-xs border-b border-[#333] w-1/4">PU-ЦИМЕНТНА СИСТЕМА</th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-[#333] text-sm">
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">Макс. работна температура</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> До 1200°C (краткосрочно)</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">До ~60°C</td>
                              <td className="p-4 text-gray-500">До ~120°C</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">Клас реакция на огън</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> A1fl (негорим, без дим)</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">Обикновено B–F, дим и токсични газове</td>
                              <td className="p-4 text-gray-500">Органична система, ограничен клас</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">Термошок и пара</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> Висока устойчивост при цикли пара–студ</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">Висок риск от напукване и отлепване</td>
                              <td className="p-4 text-gray-500">По-добър от епоксид, но с лимит</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">Жизнен цикъл при термични зони</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> ≥ 20 години при правилна експлоатация</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">3–5 години до сериозни дефекти</td>
                              <td className="p-4 text-gray-500">5–10 години в тежки зони</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">Общ TCO (20 години)</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> Най-нисък – една основна инвестиция</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">Висок – чести ремонти и престой</td>
                              <td className="p-4 text-gray-500">Среден – ограничен температурен диапазон</td>
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
               src="/GEONYX-Calculator.webp" 
               className="w-full h-full object-cover opacity-70" 
               onError={(e) => { e.currentTarget.src = "/GEONYX-background.jpeg" }}
               alt="Therm Applications"
             />
             <div className="absolute inset-0 bg-[#0f0f0f]/70"></div>
          </div>

          <div className="container relative z-10 mx-auto px-6 md:px-10">
              <div className="text-center mb-16">
                  <div className="flex items-center justify-center gap-3 mb-4">
                      <div className="h-[2px] w-8 bg-geo-yellow"></div>
                      <h3 className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">ПРИЛОЖЕНИЯ</h3>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase">КЪДЕ СЕ ИЗПОЛЗВА</h2>
                  <p className="text-gray-300 mt-4 max-w-2xl mx-auto font-bold">Зони с екстремни температури, риск от пожар, термошок и горещи производствени процеси.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                      { title: "Металургия и леярни", desc: "Зони около пещи, леене на метал и гореща шлака.", icon: Flame },
                      { title: "Енергетика (ТЕЦ/АЕЦ)", desc: "Турбинни зали, котелни помещения и паропроводи.", icon: Zap },
                      { title: "Хранителна индустрия", desc: "Фурни, фритюрници, шоково замразяване и CIP зони.", icon: Utensils },
                      { title: "ATEX Зони", desc: "Среди с риск от експлозия (газ/прах) – non-sparking подове.", icon: ShieldCheck },
                      { title: "Химически реактори", desc: "Зони с екзотермични реакции и високи температури.", icon: Activity },
                      { title: "Авиационни хангари", desc: "Горива, поддръжка и изисквания за негоримост.", icon: Plane },
                      { title: "Тунели и метро", desc: "Евакуационни пътища с изискване за клас A1 (негорим).", icon: TrainFront },
                      { title: "Складове за горива", desc: "Защита от пожар и разливи на запалими течности.", icon: Fuel },
                  ].map((area, idx) => (
                      <div key={idx} className="bg-[#141414] border border-[#222] p-6 hover:border-geo-yellow transition-all group">
                          <area.icon className="w-8 h-8 text-gray-600 group-hover:text-geo-yellow mb-4 transition-colors" />
                          <h4 className="text-white font-bold uppercase text-sm mb-2">{area.title}</h4>
                          <p className="text-gray-500 text-xs">{area.desc}</p>
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
                      <h3 className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">ПРОЦЕС</h3>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase">ПРОЦЕС НА ИЗПЪЛНЕНИЕ</h2>
                  <p className="text-gray-500 mt-4 max-w-2xl mx-auto font-mono text-sm">Инженерен контрол от анализа до защитата.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                      { step: "01", title: "ТЕРМО-ОДИТ НА ЗОНАТА", desc: "Картиране на температури, химия, механични натоварвания и сценарии на пожар/почистване." },
                      { step: "02", title: "ЛАБОРАТОРНИ И ПОЛЕВИ ТЕСТОВЕ", desc: "Анализ на съществуващите настилки, проби от бетон и симулация на термошок." },
                      { step: "03", title: "ПРОЕКТИРАНЕ НА THERM КОНФИГУРАЦИЯ", desc: "Избор на дебелини, грапавина, ATEX логика и детайли по фуги и срещи с метал." },
                      { step: "04", title: "ПОДГОТОВКА И ПЛАН НА ПРЕСТОЯ", desc: "Планиране на спиранията, разделяне на етапи и координация с производството и безопасността." },
                      { step: "05", title: "ПОЛАГАНЕ И КОНТРОЛ НА КАЧЕСТВОТО", desc: "Изпълнение на системите с постоянен контрол на дебелината, адхезията и детайлите около критични зони." },
                      { step: "06", title: "ВАЛИДАЦИЯ И ДОКУМЕНТАЦИЯ", desc: "Температурни тестове, протоколи, сертификати и инструкции за експлоатация и инспекции." },
                  ].map((item, idx) => (
                      <div key={idx} className="bg-[#0f0f0f] border border-[#222] p-8 relative overflow-hidden group">
                          <span className="text-6xl font-black text-[#1a1a1a] absolute top-4 right-4 z-0 group-hover:text-geo-yellow/40 transition-colors">{item.step}</span>
                          <div className="relative z-10">
                              <h4 className="text-white font-bold uppercase text-lg mb-2">{item.title}</h4>
                              <p className="text-gray-500 text-sm">{item.desc}</p>
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
               onError={(e) => { e.currentTarget.src = "/GEONYX-technical-data-sheet.jpeg" }}
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
                           <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">ТЪРГОВСКА ДОКУМЕНТАЦИЯ</span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 leading-tight">
                          ОФЕРТЕН ПАКЕТ ЗА ТЕРМИЧНА БЕЗОПАСНОСТ
                      </h2>
                      <p className="text-gray-400 text-sm leading-relaxed mb-8 font-bold">
                          Пълна инженерна документация за термично натоварени зони.
                      </p>
                      <div className="p-6 bg-[#141414] border border-[#333] border-l-4 border-l-geo-yellow">
                          <p className="text-white font-bold text-sm uppercase mb-2">ГАРАНЦИЯ ЗА КАЧЕСТВО</p>
                          <p className="text-gray-500 text-xs">Всички документи са съобразени с EN/ISO стандартите за пожарна безопасност.</p>
                      </div>
                  </div>

                  {/* Right Grid */}
                  <div className="lg:w-2/3 w-full">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                              "Термо-одит и анализ на рисковите зони (огън, пара, студ, химия)",
                              "Инженерно предложение за GEONYX THERM по зони и дебелини",
                              "Детайли за фуги, метални елементи и ATEX изисквания",
                              "График на изпълнение с минимален престой на производството",
                              "Пълен пакет TDS, пожарни и HACCP сертификати",
                              "План за инспекции, поддръжка и гаранционни условия"
                          ].map((item, i) => (
                              <div key={i} className="flex items-start gap-4 p-6 bg-[#111] border border-[#222] hover:border-geo-yellow/40 transition-colors group">
                                  <CheckCircle className="w-5 h-5 text-gray-500 group-hover:text-geo-yellow flex-shrink-0 transition-colors mt-0.5" />
                                  <span className="text-gray-300 text-sm font-bold uppercase leading-snug group-hover:text-white transition-colors">{item}</span>
                              </div>
                          ))}
                      </div>
                      
                      <div className="mt-8 flex justify-end">
                           <Button 
                            onClick={handleCopyTender} 
                            className={`flex items-center gap-2 px-6 py-3 font-bold uppercase text-sm transition-all ${copySuccess ? 'bg-green-600 text-white border-green-600' : 'bg-[#222] text-gray-300 hover:bg-geo-yellow hover:text-black border-transparent'}`}
                          >
                              {copySuccess ? <CheckCircle className="w-4 h-4"/> : <Copy className="w-4 h-4"/>}
                              {copySuccess ? 'ТЕКСТЪТ Е КОПИРАН!' : 'КОПИРАЙ ТЕКСТ ЗА ТЪРГ'}
                          </Button>
                      </div>
                  </div>

              </div>
          </div>
      </section>

      {/* NEW SECTION 4: DOWNLOADS */}
      <section id="specs" className="py-20 bg-black border-b border-[#222]">
          <div className="container mx-auto px-6 md:px-10">
              <h3 className="text-2xl font-black text-white uppercase mb-12 border-l-4 border-geo-yellow pl-4">ТЕХНИЧЕСКИ ФАЙЛОВЕ И ИЗТЕГЛЯНИЯ</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <button className="w-full flex items-center justify-between p-6 bg-[#111] border border-[#333] hover:border-geo-yellow group transition-all">
                      <div className="flex items-center gap-4">
                          <FileText className="text-gray-400 group-hover:text-geo-yellow w-8 h-8" />
                          <div className="text-left">
                              <span className="text-white font-bold block uppercase text-sm">GEONYX THERM – TDS</span>
                              <span className="text-gray-500 text-xs">Технически опис и параметри</span>
                          </div>
                      </div>
                      <Download className="text-gray-500 group-hover:text-white" />
                  </button>
                  <button className="w-full flex items-center justify-between p-6 bg-[#111] border border-[#333] hover:border-geo-yellow group transition-all">
                      <div className="flex items-center gap-4">
                          <ShieldCheck className="text-gray-400 group-hover:text-geo-yellow w-8 h-8" />
                          <div className="text-left">
                              <span className="text-white font-bold block uppercase text-sm">THERM – FIRE REPORT</span>
                              <span className="text-gray-500 text-xs">Сертификати за пожарна безопасност (A1fl)</span>
                          </div>
                      </div>
                      <Download className="text-gray-500 group-hover:text-white" />
                  </button>
                  <button className="w-full flex items-center justify-between p-6 bg-[#111] border border-[#333] hover:border-geo-yellow group transition-all">
                      <div className="flex items-center gap-4">
                          <BookOpen className="text-gray-400 group-hover:text-geo-yellow w-8 h-8" />
                          <div className="text-left">
                              <span className="text-white font-bold block uppercase text-sm">THERM – FOOD & CLEAN ROOMS</span>
                              <span className="text-gray-500 text-xs">Насоки за термоустойчиви подове</span>
                          </div>
                      </div>
                      <Download className="text-gray-500 group-hover:text-white" />
                  </button>
                  <button className="w-full flex items-center justify-between p-6 bg-[#111] border border-[#333] hover:border-geo-yellow group transition-all">
                      <div className="flex items-center gap-4">
                          <AlertTriangle className="text-gray-400 group-hover:text-geo-yellow w-8 h-8" />
                          <div className="text-left">
                              <span className="text-white font-bold block uppercase text-sm">THERM – ATEX & HIGH RISK</span>
                              <span className="text-gray-500 text-xs">Ръководство за проектиране в ATEX</span>
                          </div>
                      </div>
                      <Download className="text-gray-500 group-hover:text-white" />
                  </button>
              </div>
          </div>
      </section>

      {/* 8. FOOTER / DOWNLOADS */}
      <section className="bg-geo-yellow py-24 text-center">
          <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-5xl font-black text-black uppercase mb-4 tracking-tight">
                  ГОТОВИ ЛИ СТЕ ЗА ПОД, КОЙТО НЕ СЕ ПЛАШИ ОТ ОГЪН И ТЕРМОШОК?
              </h2>
              <h3 className="text-xl text-black font-bold mb-4 uppercase tracking-widest opacity-80">
                  Изпратете ни данни за температурите, процесите и рисковете във вашия обект. Ще проектираме GEONYX THERM решение, което да издържи там, където полимерите се предават.
              </h3>
              
              <div className="flex flex-col md:flex-row justify-center gap-6 mt-10">
                  <Link to="/request-inspection">
                    <button className="bg-black text-white hover:bg-[#222] font-bold uppercase py-4 px-8 flex items-center justify-center gap-3 shadow-2xl transition-colors">
                        <Thermometer className="w-5 h-5 text-geo-yellow" /> ЗАЯВИ ТЕРМО-АНАЛИЗ
                    </button>
                  </Link>
                  <button className="bg-black text-white hover:bg-[#222] font-bold uppercase py-4 px-8 flex items-center justify-center gap-3 shadow-2xl transition-colors">
                      <FileText className="w-5 h-5 text-geo-yellow" /> ИЗТЕГЛИ TDS
                  </button>
                  <Link to="/contacts">
                    <button className="bg-black text-white hover:bg-[#222] font-bold uppercase py-4 px-8 flex items-center justify-center gap-3 shadow-2xl transition-colors">
                        <CheckCircle className="w-5 h-5 text-geo-yellow" /> СВЪРЖЕТЕ СЕ С ИНЖЕНЕР
                    </button>
                  </Link>
              </div>
          </div>
      </section>

      {/* FOOTER PREVIEW TEXT */}
      <section className="bg-black py-16 border-t border-[#222]">
          <div className="container mx-auto px-6 text-center">
              <h3 className="text-geo-yellow font-bold uppercase tracking-widest text-sm mb-4">ТЕХНОЛОГИЧЕН ПАРТНЬОР ЗА КРИТИЧНА ИНФРАСТРУКТУРА</h3>
              <p className="text-gray-400 max-w-3xl mx-auto text-sm leading-relaxed">
                  Нуждаете се от система, която да издържи мини, стоманодобив, логистични хъбове или енергийни обекти. GEONYX ARMOR комбинира геополимерна технология, лабораторни данни и полеви изпитвания, за да получите настилка, която може да бъде защитена пред всеки инвеститор и одитор.
              </p>
          </div>
      </section>

      <Footer />
    </div>
  );
};

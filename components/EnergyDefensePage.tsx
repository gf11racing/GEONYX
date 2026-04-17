
import React, { useEffect, useState } from 'react';
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

export const EnergyDefensePage: React.FC = () => {
  const navigate = useNavigate();
  const [copySuccess, setCopySuccess] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "GEONYX | Енергетика, мини и тежка защита – Индустриални и абразивоустойчиви системи";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', "GEONYX разработва минерални защитни системи за енергетика, мини и тежка индустрия – устойчиви на екстремна абразия, ударни натоварвания, вериги, руда, вибрации, масла и термичен шок. Дълготрайна защита на бетон и критична инфраструктура при тежка експлоатация.");
    }
  }, []);

  const handleCopyTender = () => {
    const text = "Подовите, конструктивните и защитните системи в енергийни, минни и защитни обекти (котелни, турбинни зали, подстанции, батерийни паркове, рудници, складове за горива, тунели и защитни съоръжения) да бъдат изпълнени с минерални геополимерни системи тип GEONYX или еквивалент, комбиниращи ARMOR / CHEM / THERM / HYDRO / REPAIR според рисковия профил по зони. Системите трябва да осигуряват клас А1 по пожар (за релевантните зони), висока химическа и механична устойчивост, възможност за локален ремонт и минимални престои.";
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
                        <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">ЕНЕРГЕТИКА, МИНИ И ТЕЖКА ЗАЩИТА</span>
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 uppercase tracking-tighter drop-shadow-2xl max-w-4xl page-animate-title">
                    ПОВЪРХНОСТИ ЗА <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-geo-yellow to-yellow-600">ВИСОК РИСК.</span>
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-gray-300 mb-10 font-light max-w-3xl leading-relaxed border-l-4 border-geo-yellow pl-6 py-2 bg-black/30 backdrop-blur-sm page-animate-desc">
                        В енергетиката и мините огън, химия, удар и вибрации са ежедневие. GEONYX комбинира ARMOR, CHEM, THERM и HYDRO в минерални системи, които пазят конструкцията и ограничават щетите при инцидент.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-start gap-4 page-animate-buttons">
                        <Link to="/request-inspection">
                            <Button 
                                variant="primary" 
                                className="h-12 px-6 text-sm font-bold bg-geo-yellow text-black border-none hover:bg-white transition-all shadow-[0_0_20px_rgba(255,204,0,0.15)] rounded-none uppercase tracking-wider flex items-center gap-2"
                            >
                                ЗАЯВИ РИСКОВ ОДИТ <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
                        <a href="#specs">
                            <button className="h-12 px-6 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase">
                                ИЗТЕГЛИ THERM/ARMOR ПРОФИЛ <Download className="w-4 h-4" />
                            </button>
                        </a>
                    </div>
                </div>

                {/* RIGHT COLUMN: SIDE INFO PANEL */}
                <div className="lg:w-1/3 w-full page-animate-stats">
                    <div className="bg-black/30 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-sm shadow-2xl">
                        <h3 className="text-white font-black uppercase text-sm mb-6">
                            ОБХВАТ
                        </h3>

                        {/* Zones List */}
                        <div className="mb-6">
                            <span className="text-gray-500 font-bold uppercase text-[10px] tracking-widest block mb-3">ЗОНИ:</span>
                            <div className="grid grid-cols-2 gap-x-4 text-gray-300 text-xs font-bold uppercase leading-tight">
                                <div className="flex flex-col gap-3">
                                    <span className="border-l-2 border-geo-yellow pl-2">ТЕЦ и когенерационни централи</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Парни котли, турбинни зали и машинни отделения</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Димоходи, газоходи и електрофилтри</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Силози за пепелина, вар и реагенти</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Трансформаторни полета и електрически подстанции</span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className="border-l-2 border-geo-yellow pl-2">Открити рудници, въглищни и рудни фронтове</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Подземни галерии, складове и ремонтни камери</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Конвейерни трасета, прехвърлителни кули и бункери</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Трошачни, пресявателни и товарни станции</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Площадки за шлака, хвостохранилища и утайници</span>
                                </div>
                            </div>
                        </div>

                        <div className="h-px w-full bg-white/10 mb-6"></div>

                        {/* Systems Chips */}
                        <div className="mb-6">
                            <span className="text-gray-500 font-bold uppercase text-[10px] tracking-widest block mb-3">СИСТЕМИ:</span>
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
                                ↓ КЪДЕ СЕ ИЗПОЛЗВА
                            </a>
                            <a href="#system-selection" className="w-fit text-geo-yellow text-xs font-bold uppercase tracking-wider hover:text-white transition-colors flex items-center gap-2">
                                ↓ ИЗБОР НА СИСТЕМА
                            </a>
                             <a href="#offer-package" className="w-fit text-geo-yellow text-xs font-bold uppercase tracking-wider hover:text-white transition-colors flex items-center gap-2">
                                ↓ ОФЕРТЕН ПАКЕТ
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
                КОГАТО ГРЕШКАТА <br/> 
                <span className="text-geo-yellow">СТРУВА ЖИВОТИ И МИЛИОНИ.</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
                В енергетиката, мините и защитните обекти подът, конструкцията и защитните слоеве са част от системата за безопасност. Разлив на гориво, искра, термичен шок или химическа атака не трябва да превръщат бетона в слабото звено. GEONYX проектира минерални системи с клас А1 по пожар, висока химическа устойчивост и механична якост – така, че инцидентът да остане локален, а обектът да се върне в режим възможно най-бързо.
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
                     <span className="text-white font-bold uppercase text-sm block">КОТЕЛНИ И ТУРБИННИ ЗАЛИ</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    ТЕЦ, ПАРОГАЗОВИ И БИОМАСА ЦЕНТРАЛИ
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">В котелни и турбинни зали има горещи повърхности, масла, пара и вибрации. Бетонът се напуква от термични цикли, разливите проникват в конструкцията, а стандартните бои изгарят и се лющят.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX THERM + ARMOR осигуряват минерална настилка с клас А1, устойчива на искри и термичен шок, с висока механична якост за тежки машини. HYDRO и CHEM се добавят в зони с конденз и агресивни флуиди, а REPAIR позволява локален ремонт между кампании.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: THERM
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
                     <span className="text-white font-bold uppercase text-sm block">ТРАНСФОРМАТОРИ И МАСЛА</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    ПОДСТАНЦИИ И ТРАНСФОРМАТОРНИ ПОЛЕТА
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">В трансформаторни полета и подстанции масла, дуги и искри създават риск от пожар и замърсяване. Напукан бетон и неуправляеми наклони насочват разливите в грешната посока.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX ARMOR оформя устойчиви корита и улеи за контрол на разливи. THERM и CHEM повишават пожарната и химическата устойчивост, а HYDRO ограничава проникването в конструкцията и почвата.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: ARMOR
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
                     <span className="text-white font-bold uppercase text-sm block">ЛИТИЕВИ БАТЕРИИ</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    БАТЕРИЙНИ ПАРКОВЕ (BESS) И UPS ЗАЛИ
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">Литиево-йонните батерии носят риск от термичен runaway, електролити и токсични дими. Стандартните покрития могат да горят, да изпускат токсични газове и да се разрушат при висока температура.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX THERM + CHEM осигуряват негорима, минерална повърхност, устойчива на електролити и почистващи агенти. ARMOR гарантира якост за тежки шкафове и стелажи, а REPAIR позволява бързо възстановяване след инцидент.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: THERM
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
                     <span className="text-white font-bold uppercase text-sm block">МИНИ И РАМПИ</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    РУДНИЦИ, РАМПИ И МИНИ
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">В рудниците подовете и рампите поемат абразивна руда, кал, вода и тежък трафик от самосвали и машини. Бетонът се износва бързо, появяват се дупки и прах.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX ARMOR предлага високоякостни минерални настилки с екстремна абразиоустойчивост. HYDRO защитава от вода и замръзване, а REPAIR се използва за бързо запълване на коловози и разрушени участъци.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: ARMOR
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
                     <span className="text-white font-bold uppercase text-sm block">ПУЛПОВЕ И ХИМИЯ</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    ОБОГАТИТЕЛНИ ФАБРИКИ И ПУЛПОВЕ
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">В обогатителните фабрики бетонът е подложен на абразивни пулпове, разтвори с променливо pH и ударни натоварвания от оборудване. Стандартните облицовки бързо се изтъркват и пропускат.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX CHEM + ARMOR изграждат износоустойчиви и химически устойчиви повърхности за корита, канали и площадки. HYDRO контролира проникването, а REPAIR удължава живота на критичните детайли.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: CHEM
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
                     <span className="text-white font-bold uppercase text-sm block">ГОРИВА И РАЗЛИВИ</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    СКЛАДОВЕ ЗА ГОРИВА И ХИМИКАЛИ
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">В складове за дизел, бензин, реагенти и взривоопасни вещества разливите и парите са сериозен риск. Пукнатини и фуги позволяват проникване в бетона и почвата.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX CHEM + HYDRO създават минерална „вана“ с контролирано оттичане и химическа устойчивост. THERM подобрява поведението при пожар, а REPAIR позволява локално възстановяване без спиране на целия склад.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: CHEM
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
                     <span className="text-white font-bold uppercase text-sm block">ТУНЕЛИ И ОГЪН</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    ТУНЕЛИ, ГАЛЕРИИ И ЕВАКУАЦИОННИ МАРШРУТИ
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">В тунели и подземни галерии пожар, дим и капкова вода могат бързо да компрометират конструкцията. Органичните покрития отделят дим и токсични газове при горене.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX THERM осигурява негорими, минерални покрития с клас А1, устойчива на термичен шок. HYDRO и ARMOR се комбинират за контрол на вода и трафик, а REPAIR позволява поетапна рехабилитация.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: THERM
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
                     <span className="text-white font-bold uppercase text-sm block">ТЕЖКА ЗАЩИТА</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    ЗАЩИТНИ БУНКЕРИ И КРИТИЧНА ИНФРАСТРУКТУРА
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">Защитните съоръжения трябва да издържат на удар, вибрации и пожар, без да губят носимоспособност. Напукани и лошо защитени повърхности намаляват нивото на защита.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX ARMOR + THERM предоставят високоякостни, негорими системи за подове и стени. CHEM и HYDRO се добавят според средата, а REPAIR дава възможност за усилване и удължаване на живота на съществуващи съоръжения.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: ARMOR
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
                        <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">ROI АНАЛИЗ</span>
                    </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase">ИНВЕСТИЦИОНЕН ОДИТ</h2>
              </div>

              <div className="w-full overflow-x-auto border border-[#333] shadow-2xl bg-[#111]">
                  <table className="w-full min-w-[900px] border-collapse text-left">
                      <thead>
                          <tr className="bg-black">
                              <th className="p-4 text-white font-black uppercase tracking-wider text-xs border-b border-r border-[#333] w-1/4">ПАРАМЕТЪР</th>
                              <th className="p-4 bg-[#1a1a1a] text-geo-yellow font-black uppercase tracking-wider text-sm border-b border-r border-[#333] w-1/4 relative border-t-4 border-t-geo-yellow">
                                  GEONYX
                              </th>
                              <th className="p-4 text-gray-500 font-bold uppercase tracking-wider text-xs border-b border-r border-[#333] w-1/4">Стандартен бетон + боя</th>
                              <th className="p-4 text-gray-500 font-bold uppercase tracking-wider text-xs border-b border-[#333] w-1/4">Епоксидни / PU покрития</th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-[#333] text-sm">
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">Пожароустойчивост (клас)</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> А1, минерална матрица, негорима</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">Зависи от боята, често органична</td>
                              <td className="p-4 text-gray-500">Органични смоли, дим и токсични газове</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">Устойчивост на горива и химикали</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> Висока (CHEM конфигурация)</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">Ниска – бетонът и боята се разрушават</td>
                              <td className="p-4 text-gray-500">Средна – чувствителни към разтворители и киселини</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">Механична якост и абразия</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> Висока – ARMOR за тежък трафик и удар</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">Средна – бързо износване</td>
                              <td className="p-4 text-gray-500">Средна – покритието се изтърква, бетонът остава незащитен</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">Поведение при термичен шок</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> Стабилно – THERM системи</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">Напукване и лющене</td>
                              <td className="p-4 text-gray-500">Мехури и отлепване</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">Жизнен цикъл в 24/7 режими</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> Дълъг, с локален REPAIR</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">Кратък до среден, чести ремонти</td>
                              <td className="p-4 text-gray-500">Среден, нужда от периодични пренастилки</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">Време за ремонт / престой</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> Поетапен ремонт, кратки прозорци</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">Дълги спирания на зони</td>
                              <td className="p-4 text-gray-500">Значителен престой при пренастилка</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">Обща цена за жизнен цикъл</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> По-ниска при хоризонт 10–15 години</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">Ниска първоначална, висока в дългосрочен план</td>
                              <td className="p-4 text-gray-500">Средна, с високи рискови разходи при инцидент</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </section>

      {/* 5. APPLICATIONS GRID (BRIGHTENED BG) */}
      <section id="applications" className="relative py-20 border-b border-[#222]">
          {/* Background Image - BRIGHTENED */}
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
                      <h3 className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">ПРИЛОЖЕНИЯ</h3>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase">КЪДЕ СЕ ИЗПОЛЗВА</h2>
                  <p className="text-gray-300 mt-4 max-w-2xl mx-auto font-bold">GEONYX системите покриват целия спектър – от енергийни централи и мини до складове за горива и защитни съоръжения.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                      { title: "ТЕЦ и парогазови централи", desc: "Котелни, турбинни зали, пепелни зони и машинни помещения.", icon: Flame },
                      { title: "Подстанции и трансформаторни полета", desc: "Трансформаторни корита, маслени вани и обслужващи площадки.", icon: Zap },
                      { title: "Батерийни паркове (BESS) и UPS", desc: "Зали с батерии, инвертори и електронно оборудване.", icon: BatteryCharging },
                      { title: "Рудници и минни рампи", desc: "Подови настилки, рампи, сервизни зони и работни площадки.", icon: Mountain },
                      { title: "Обогатителни фабрики", desc: "Пулпни корита, канали, площадки за оборудване и химически участъци.", icon: Activity },
                      { title: "Складове за горива и химикали", desc: "Рампи за цистерни, площадки за резервоари и аварийни корита.", icon: Fuel },
                      { title: "Тунели и подземни галерии", desc: "Пътни тунели, минни галерии и евакуационни коридори.", icon: ShieldAlert },
                      { title: "Защитни бункери и критична инфраструктура", desc: "Помещения за управление, укрития и специализирани зали.", icon: ShieldCheck },
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

      {/* 6. SYSTEM SELECTION */}
      <section id="system-selection" className="py-20 bg-[#111] border-b border-[#222]">
          <div className="container mx-auto px-6 md:px-10">
              <div className="text-center mb-16">
                  <div className="flex items-center justify-center gap-3 mb-4">
                      <div className="h-[2px] w-8 bg-geo-yellow"></div>
                      <h3 className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">ТЕХНОЛОГИЯ</h3>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase">ИЗБОР НА СИСТЕМА GEONYX</h2>
                  <p className="text-gray-500 mt-4 max-w-2xl mx-auto">За всеки енергиен, минен или защитен обект GEONYX комбинира ARMOR, CHEM, THERM, HYDRO и REPAIR според основния риск – огън, химия, трафик, вода или нужда от усилване.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                      { name: "GEONYX ARMOR", desc: "Високоякостни подови и конструктивни системи за тежки машини, вибрации и ударни натоварвания." },
                      { name: "GEONYX CHEM", desc: "Минерални решения с висока устойчивост към горива, масла, киселини, основи и реагенти в енергетиката и мините." },
                      { name: "GEONYX THERM", desc: "Негорими системи с клас А1, проектирани за искри, термичен шок и високи температури." },
                      { name: "GEONYX HYDRO", desc: "Системи за защита от вода, конденз и агресивни флуиди в канали, корита и подземни участъци." },
                      { name: "GEONYX REPAIR", desc: "Бързи геополимерни решения за ремонт, усилване и удължаване на живота на съществуващи конструкции." },
                  ].map((sys, idx) => (
                      <div key={idx} className="bg-[#1a1a1a] p-8 border border-[#222] border-t-4 border-t-geo-yellow hover:bg-[#222] transition-colors h-full group">
                          <h4 className="text-white font-black uppercase text-lg mb-3 group-hover:text-geo-yellow transition-colors">{sys.name}</h4>
                          <p className="text-gray-400 text-sm leading-relaxed">{sys.desc}</p>
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
                      <h3 className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">ПРОЦЕС</h3>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase">ПРОЦЕС НА ИЗПЪЛНЕНИЕ</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                      { step: "01", title: "Рисков и технически одит", desc: "Идентифициране на пожарни, химически, механични и хидравлични рискове по зони." },
                      { step: "02", title: "Зониране на обекта", desc: "Разделяне на котелни, подстанции, минни участъци, складове и тунели по тип натоварване." },
                      { step: "03", title: "Проектиране на системите GEONYX", desc: "Подбор на ARMOR / CHEM / THERM / HYDRO / REPAIR, детайлни решения за фуги, ръбове и корита." },
                      { step: "04", title: "Подготовка на основата", desc: "Отстраняване на стари покрития, ремонт на пукнатини, усилване при нужда и защита на околните системи." },
                      { step: "05", title: "Полагане по оперативен график", desc: "Поетапно изпълнение в съгласие с производствения режим – кампании, аварийни прозорци, нощни смени." },
                      { step: "06", title: "Тестове и въвеждане в експлоатация", desc: "Проверка на адхезията, повърхностните свойства и пожарното поведение; инструкции за поддръжка и бъдещи REPAIR намеси." },
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
                           <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">ТЪРГОВСКА ДОКУМЕНТАЦИЯ</span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 leading-tight">
                          ОФЕРТЕН ПАКЕТ <br/> (B2B / B2G)
                      </h2>
                      <p className="text-gray-400 text-sm leading-relaxed mb-8 font-bold">
                          За енергийни, минни и защитни обекти GEONYX подготвя документация за инвеститор, надзор, банки, застрахователи и контролни органи.
                      </p>
                      <div className="p-6 bg-[#141414] border border-[#333] border-l-4 border-l-geo-yellow">
                          <p className="text-white font-bold text-sm uppercase mb-2">ГАРАНЦИЯ ЗА КАЧЕСТВО</p>
                          <p className="text-gray-500 text-xs">Всички документи са съобразени с актуалните еврокодове и стандарти.</p>
                      </div>
                  </div>

                  {/* Right Grid */}
                  <div className="lg:w-2/3 w-full">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                              "Рисков профил по зони – огън, химия, механика, вода",
                              "Технически спецификации за ARMOR / CHEM / THERM / HYDRO / REPAIR",
                              "Детайлни чертежи на корита, фуги, ръбове и зони за разливи",
                              "Съответствие с пожарни и индустриални стандарти (клас А1 и др.)",
                              "Препоръчителен график за поетапно изпълнение без спиране на целия обект",
                              "Гаранционни условия и план за инспекции и REPAIR намеси"
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

      {/* 10. DOCUMENTATION (Downloads) */}
      <section id="specs" className="py-20 bg-black border-b border-[#222]">
          <div className="container mx-auto px-6 md:px-10">
              <h3 className="text-2xl font-black text-white uppercase mb-12 border-l-4 border-geo-yellow pl-4">Документация</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <button className="w-full flex items-center justify-between p-6 bg-[#111] border border-[#333] hover:border-geo-yellow group transition-all">
                      <div className="flex items-center gap-4">
                          <FileText className="text-gray-400 group-hover:text-geo-yellow w-8 h-8" />
                          <div className="text-left">
                              <span className="text-white font-bold block uppercase text-sm">Power & Heat Plants</span>
                              <span className="text-gray-500 text-xs">GEONYX системи (PDF)</span>
                          </div>
                      </div>
                      <Download className="text-gray-500 group-hover:text-white" />
                  </button>
                  <button className="w-full flex items-center justify-between p-6 bg-[#111] border border-[#333] hover:border-geo-yellow group transition-all">
                      <div className="flex items-center gap-4">
                          <FileText className="text-gray-400 group-hover:text-geo-yellow w-8 h-8" />
                          <div className="text-left">
                              <span className="text-white font-bold block uppercase text-sm">Substations & BESS</span>
                              <span className="text-gray-500 text-xs">Подови решения (PDF)</span>
                          </div>
                      </div>
                      <Download className="text-gray-500 group-hover:text-white" />
                  </button>
                  <button className="w-full flex items-center justify-between p-6 bg-[#111] border border-[#333] hover:border-geo-yellow group transition-all">
                      <div className="flex items-center gap-4">
                          <FileText className="text-gray-400 group-hover:text-geo-yellow w-8 h-8" />
                          <div className="text-left">
                              <span className="text-white font-bold block uppercase text-sm">Mining Structures</span>
                              <span className="text-gray-500 text-xs">Минерални настилки (PDF)</span>
                          </div>
                      </div>
                      <Download className="text-gray-500 group-hover:text-white" />
                  </button>
                  <button className="w-full flex items-center justify-between p-6 bg-[#111] border border-[#333] hover:border-geo-yellow group transition-all">
                      <div className="flex items-center gap-4">
                          <FileText className="text-gray-400 group-hover:text-geo-yellow w-8 h-8" />
                          <div className="text-left">
                              <span className="text-white font-bold block uppercase text-sm">High-Risk Protection</span>
                              <span className="text-gray-500 text-xs">Системи за тунели (PDF)</span>
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
                  <h2 className="text-3xl font-black text-white uppercase">Често Задавани Въпроси</h2>
              </div>
              
              <div className="space-y-4">
                  {/* Q1 */}
                  <div className="bg-[#111] p-6 border-l-4 border-gray-700 hover:border-geo-yellow transition-colors shadow-xl group">
                      <div className="flex gap-4">
                          <HelpCircle className="text-gray-500 group-hover:text-geo-yellow flex-shrink-0 transition-colors" />
                          <div>
                              <h4 className="text-white font-bold uppercase mb-2 group-hover:text-geo-yellow transition-colors">ИМАМЕ ЛИ НУЖДА ОТ ПЪЛНО СПИРАНЕ НА ОБЕКТА ПО ВРЕМЕ НА ИЗПЪЛНЕНИЕ?</h4>
                              <p className="text-gray-400 text-sm">Не задължително. В повечето случаи работим поетапно – блок по блок, галерия по галерия или поле по поле, с прозорци, съобразени с производството и безопасността.</p>
                          </div>
                      </div>
                  </div>

                  {/* Q2 */}
                  <div className="bg-[#111] p-6 border-l-4 border-gray-700 hover:border-geo-yellow transition-colors shadow-xl group">
                      <div className="flex gap-4">
                          <HelpCircle className="text-gray-500 group-hover:text-geo-yellow flex-shrink-0 transition-colors" />
                          <div>
                              <h4 className="text-white font-bold uppercase mb-2 group-hover:text-geo-yellow transition-colors">МОГАТ ЛИ СИСТЕМИТЕ GEONYX ДА ПОСТИГНАТ КЛАС А1 ПО ПОЖАР И ДА БЪДАТ ИНТЕГРИРАНИ В НАШИТЕ ПОЖАРНИ СЦЕНАРИИ?</h4>
                              <p className="text-gray-400 text-sm">Да. THERM и ARMOR решенията са минерални и негорими, с клас А1 за релевантните слоеве. Предоставяме необходимите данни за пожарни сценарии и оценки.</p>
                          </div>
                      </div>
                  </div>

                  {/* Q3 */}
                  <div className="bg-[#111] p-6 border-l-4 border-gray-700 hover:border-geo-yellow transition-colors shadow-xl group">
                      <div className="flex gap-4">
                          <HelpCircle className="text-gray-500 group-hover:text-geo-yellow flex-shrink-0 transition-colors" />
                          <div>
                              <h4 className="text-white font-bold uppercase mb-2 group-hover:text-geo-yellow transition-colors">КАКВО СЕ СЛУЧВА ПРИ ТЕЖЪК РАЗЛИВ НА ГОРИВО ИЛИ ХИМИКАЛ ВЪРХУ НАСТИЛКАТА?</h4>
                              <p className="text-gray-400 text-sm">CHEM + HYDRO конфигурациите ограничават проникването в конструкцията и почвата. Повърхността се измива, а при нужда се изпълнява локален REPAIR, без да се подменя цялата система.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 8. SYSTEM BRIDGE CTA */}
      <section className="bg-geo-yellow py-16 border-t border-black">
          <div className="container mx-auto px-6 flex flex-col items-center text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-black uppercase mb-6 tracking-tight max-w-4xl">
                  КОМПЛЕКСНО ЗОНИРАНЕ НА ОБЕКТА
              </h2>
              <p className="text-black/80 text-lg font-medium mb-8 max-w-3xl mx-auto leading-relaxed">
                  Всеки обект има специфични рискове. Ние интегрираме 6 специализирани матрици в една система: от механика, химия и термошок, до хидроизолация, антистатика и архитектура. Една технология, която гарантира 100% покритие на нуждите и пълна съвместимост.
              </p>
              <Link to="/systems">
                  <Button variant="primary" className="!bg-black !text-white hover:!bg-[#222] border-none text-lg px-12 py-5 shadow-2xl uppercase font-black flex items-center gap-2">
                      ВИЖ ВСИЧКИ ИНЖЕНЕРНИ СИСТЕМИ <ArrowRight className="w-5 h-5" />
                  </Button>
              </Link>
          </div>
      </section>

      <Footer />
    </div>
  );
};
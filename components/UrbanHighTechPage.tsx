
import React, { useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Button } from './Button';
import { 
  Layout, Landmark, PaintBucket, Bike, Printer, Palette, 
  FileText, ArrowRight, Download, HelpCircle, CheckCircle, Copy, Check, 
  MousePointer2, Construction, BrickWall, Component, Layers, Maximize,
  Scale, ShieldCheck, Sun, Trees, LayoutGrid, TrainFront, Plane, Car, Cpu, Server, FlaskConical,
  Zap
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { SafeImage } from './SafeImage';

export const UrbanHighTechPage: React.FC = () => {
  const navigate = useNavigate();
  const [copySuccess, setCopySuccess] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "GEONYX | Градска среда, строителство и висока технология – Интелигентни минерални настилки";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', "GEONYX разработва безфугови минерални системи за градска среда, обществени сгради, търговски центрове, логистични зони и високотехнологични производства. Устойчивост на износване, химия, натоварване и интензивен трафик с дълъг експлоатационен живот и нисък въглероден отпечатък.");
    }
  }, []);

  const handleCopyTender = () => {
    const text = "Минералните настилки, покрития и защитни системи в градски зони, обществени сгради, авиационни хангари, high-tech помещения, clean rooms, ESD зони и центрове за данни да бъдат изпълнени с минерални системи тип GEONYX или еквивалент, комбиниращи ARMOR / HYDRO / CHEM / THERM според функционалните и експлоатационни изисквания. Системите трябва да осигуряват висока износоустойчивост, контролирано противохлъзгане, устойчивост на климат и химия, подходящо поведение при пожар и съвместимост с ESD/clean изискванията на възложителя.";
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
            src="/GEONYX-RADA-AND-HIGH-TECH-ZONES.webp" 
            className="w-full h-full object-cover" 
            onError={(e) => { e.currentTarget.src = "/GEONYX-RADA-AND-HIGH-TECH-ZONES.webp" }}
            alt="Urban and High-Tech Environments"
          />
          {/* Overlay for darkening background */}
          <div className="absolute inset-0 bg-black opacity-60 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-20 text-left">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-end">
                
                {/* LEFT COLUMN */}
                <div className="lg:w-2/3 text-left">
                    {/* Header Label */}
                    <div className="flex items-center justify-start gap-3 mb-8 page-animate-tag">
                        <div className="h-[2px] w-12 bg-geo-yellow shadow-[0_0_15px_#FFCC00]"></div>
                        <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">ГРАДСКА СРЕДА, СТРОИТЕЛСТВО И ВИСОКА ТЕХНОЛОГИЯ</span>
                    </div>
                    
                    {/* H1 Title */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 uppercase tracking-tighter drop-shadow-2xl mix-blend-difference page-animate-title">
                        ПОВЪРХНОСТИ ЗА <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-geo-yellow to-yellow-600">ГРАДА И HIGH-TECH ЗОНИТЕ</span>
                    </h1>
                    
                    {/* Description Box */}
                    <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light max-w-4xl leading-relaxed border-l-4 border-geo-yellow pl-6 py-2 bg-black/30 backdrop-blur-sm page-animate-desc">
                        От скейт паркове и велоалеи до авиационни хангари и clean rooms – GEONYX проектира минерални системи, които комбинират визия, износоустойчивост и защита от вода, химия и термичен стрес.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 page-animate-buttons">
                        <a href="#specs">
                            <Button 
                                variant="primary" 
                                className="h-12 px-6 text-sm font-bold bg-geo-yellow text-black border-none hover:bg-white transition-all shadow-[0_0_20px_rgba(255,204,0,0.15)] rounded-none uppercase tracking-wider flex items-center gap-2"
                            >
                                ИЗТЕГЛИ РЪКОВОДСТВО <FileText className="w-4 h-4" />
                            </Button>
                        </a>
                        <Link to="/request-inspection">
                            <button className="h-12 px-6 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase">
                                ЗАЯВИ КОНСУЛТАЦИЯ <ArrowRight className="w-4 h-4" />
                            </button>
                        </Link>
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="lg:w-1/3 w-full page-animate-stats">
                    <div className="bg-black/30 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-sm shadow-2xl">
                        <h3 className="text-white font-black uppercase text-sm mb-6">
                            ОБХВАТ
                        </h3>

                        <div className="mb-6">
                            <span className="text-gray-500 font-bold uppercase text-[10px] tracking-widest block mb-3">ЗОНИ:</span>
                            <div className="grid grid-cols-2 gap-x-4 text-gray-300 text-xs font-bold uppercase leading-tight">
                                <div className="flex flex-col gap-2">
                                    <span>Скейт паркове и велоалеи</span>
                                    <span>Градска мебел – пейки, кашпи, декоративни елементи</span>
                                    <span>Фугиране и стабилизиране на павета и плочници</span>
                                    <span>Пешеходни площи, стълбища и входни зони на сгради</span>
                                    <span>Подлези, надлези и градски подземни проходи</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span>Метростанции и спирки на градски транспорт</span>
                                    <span>Обществени и административни сгради (площи около тях)</span>
                                    <span>Авиационни хангари и MRO зони (apron, сервизни площи)</span>
                                    <span>Зони за ESD-чувствителна електроника, чисти помещения и лаборатории</span>
                                    <span>Центрове за данни (data centers) и високотехнологични R&D центрове</span>
                                </div>
                            </div>
                        </div>

                        <div className="h-px w-full bg-white/10 mb-6"></div>

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
                ГРАДЪТ И ТЕХНОЛОГИИТЕ <br/> 
                <span className="text-geo-yellow">ЗАПОЧВАТ ОТ ПОВЪРХНОСТИТЕ.</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
                В градската и високотехнологичната среда бетонът не е просто конструкция – той е фон, сцена и критична инфраструктура. Сценарии като скейт трафик, соли и UV, авио горива, ESD изисквания и чувствителна електроника не се решават с „обикновена замазка“. GEONYX комбинира ARMOR, HYDRO, CHEM и THERM в системи, които издържат на динамични натоварвания, климат, химия и огън, без да жертват визията.
            </p>
        </div>
      </section>

      {/* 3. ZIG-ZAG SOLUTIONS */}
      <div className="w-full bg-[#0b0c10]">
        
        {/* Block 1: SKATE */}
        <section className="flex flex-col lg:flex-row w-full min-h-[600px] border-y border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-SKATE=PARKS.webp" 
                    onError={(e) => { e.currentTarget.src = "/GEONYX-skatepark.jpeg" }}
                    className="absolute inset-0 w-full h-full object-cover" 
                    alt="Skate Park"
                />
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <Bike className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">СКЕЙТ И ВЕЛОЗОНИ</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    СКЕЙТ ПАРКОВЕ, ВЕЛОАЛЕИ И УДАРНО НАТОВАРВАНЕ
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">Скейт парковете и велоалеите съчетават удар, абразия и концентрирани натоварвания по ръбове и радиуси. Обикновените настилки се изронват, ръбовете се чупят, а повърхностите стават неравни и опасни.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX ARMOR осигурява плътна минерална повърхност с висока ударо- и абразиоустойчивост. Детайлите по ръбове, чупки и радиуси се проектират с една и съща минерална логика, така че паркът да издържа дългосрочно на триене, удари и климат.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: ARMOR
                    </div>
                </div>
            </div>
        </section>

        {/* Block 2: URBAN FURNITURE */}
        <section className="flex flex-col lg:flex-row-reverse w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-CITY-FURNITURE.webp" 
                    onError={(e) => { e.currentTarget.src = "/GEONYX-urban-furniture.jpeg" }}
                    className="absolute inset-0 w-full h-full object-cover" 
                    alt="Urban Furniture"
                />
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><Trees className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">ГРАДСКА МЕБЕЛ</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    ГРАДСКА МЕБЕЛ, ПЕЙКИ, КАШПИ И ДЕКОРАТИВЕН БЕТОН
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">Пейките, кашпите и декоративните елементи са изложени на UV, дъжд, соли и вандализъм. Пукнатини, обрушени ръбове и петна от графити бързо развалят визията на публичното пространство.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX ARMOR + HYDRO предлагат плътни, хидрофобизирани и устойчиви на климат минерални повърхности. CHEM се добавя в зони с нужда от по-добра устойчивост на почистващи агенти и анти-графити решения, като се запазва „mineral look“ визията.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: HYDRO
                    </div>
                </div>
            </div>
        </section>

        {/* Block 3: PAVERS */}
        <section className="flex flex-col lg:flex-row w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-GROUTING-THE-PAVEMENT.webp" 
                    onError={(e) => { e.currentTarget.src = "/GEONYX-Architectural3.jpeg" }}
                    className="absolute inset-0 w-full h-full object-cover" 
                    alt="Pavers"
                />
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <LayoutGrid className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">ПАВЕТА И ПЛОЧИ</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    ФУГИРАНЕ НА ПАВЕТА И ПЛОЧНИЦИ БЕЗ ПЛЕВЕЛИ
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">Класическото фугиране с пясък или слаби смеси води до измиване, плевели, кал и разместени павета. Водата прониква под настилката, замръзва и разрушава основата.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX HYDRO + ARMOR предлагат минерални фугиращи и запълващи решения с висока устойчивост на вода и соли. Фугите се превръщат в част от конструкцията, без плевели и без измиване при дъжд и миене под налягане.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: HYDRO
                    </div>
                </div>
            </div>
        </section>

        {/* Block 4: SCULPTURES */}
        <section className="flex flex-col lg:flex-row-reverse w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-SCULPTURES.webp" 
                    onError={(e) => { e.currentTarget.src = "/GEONYX-Architectural.jpeg" }}
                    className="absolute inset-0 w-full h-full object-cover" 
                    alt="Sculptures"
                />
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><Landmark className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">СКУЛПТУРИ И ДЕКОРИ</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    СКУЛПТУРИ, ДЕКОРИ И ОБЩЕСТВЕНИ ПРОСТРАНСТВА
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">Скулптури и декори в паркове, кино декори и обществени пространства трябва да изглеждат добре и да устояват на влага, замърсяване и удар. Стандартните мазилки бързо се напукват и лющят.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX ARMOR + THERM осигуряват минерална „черупка“ с висока механична и термична устойчивост. HYDRO защитава от вода, а CHEM позволява почистване с по-агресивни препарати при нужда, без да се жертва визията.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: THERM
                    </div>
                </div>
            </div>
        </section>

        {/* Block 5: SUBWAYS */}
        <section className="flex flex-col lg:flex-row w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-UNDERGROUND.webp" 
                    onError={(e) => { e.currentTarget.src = "/GEONYX-subway.jpeg" }}
                    className="absolute inset-0 w-full h-full object-cover" 
                    alt="Subway"
                />
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <TrainFront className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">ПОДЗЕМНИ И ОБЩЕСТВЕНИ ЗОНИ</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    ПОДЛЕЗИ, МЕТРОСТАНЦИИ И ОБЩЕСТВЕНИ СГРАДИ
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">Подлезите и метростанциите съчетават влага, конденз, соли от обувки и силен пешеходен трафик. Плочките се хлъзгат, фугите почерняват, а подовете се износват неравномерно.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX ARMOR + HYDRO създават безфугова или минимално фугована минерална настилка с контролирано противохлъзгане. THERM добавя по-добро поведение при евентуален пожар, а CHEM позволява редовно машинно почистване с детергенти.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: ARMOR
                    </div>
                </div>
            </div>
        </section>

        {/* Block 6: TERRACES */}
        <section className="flex flex-col lg:flex-row-reverse w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-TERRACES-TILES.webp" 
                    onError={(e) => { e.currentTarget.src = "/GEONYX-Architectural2.jpeg" }}
                    className="absolute inset-0 w-full h-full object-cover" 
                    alt="Stairs"
                />
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><Layers className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">ТЕРАСИ И СТЪЛБИ</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    ТЕРАСИ, ПЛОЧНИЦИ, СТЪЛБИ И ВХОДНИ ЗОНИ
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">Външните тераси и стълби са изложени на дъжд, UV, лед и соли. Хлъзгането, течовете към помещения отдолу и разрушените ръбове са типичен сценарий.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX HYDRO + ARMOR осигуряват хидроизолационна и износоустойчива система с проектирано сцепление по стъпала и площадки. Детайлите при бордове, сифони и фасадни връзки се решават системно, за да няма изненадващи течове.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: HYDRO
                    </div>
                </div>
            </div>
        </section>

        {/* Block 7: HANGARS */}
        <section className="flex flex-col lg:flex-row w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-AVIATION-HANGARS.webp" 
                    onError={(e) => { e.currentTarget.src = "/GEONYX-heavy-machine.jpeg" }}
                    className="absolute inset-0 w-full h-full object-cover" 
                    alt="Hangars"
                />
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <Plane className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">ХАНГАРИ И MRO</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    АВИАЦИОННИ ХАНГАРИ И MRO ЗОНИ
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">В авиационните хангари има комбинация от авиационни горива, хидравлични течности, тежки колесници и нужда от чиста, равна повърхност. Стандартните системи страдат от химията и концентрираните натоварвания.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX ARMOR + CHEM осигуряват минерална система, устойчива на авиационни течности и тежки колесници. HYDRO защитава конструкцията от разливи, а THERM подобрява пожарното поведение на настилката.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: CHEM
                    </div>
                </div>
            </div>
        </section>

        {/* Block 8: AUTO/EV */}
        <section className="flex flex-col lg:flex-row-reverse w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-ESD-AREAS.webp" 
                    onError={(e) => { e.currentTarget.src = "/GEONYX-ESD-AREAS.webp" }}
                    className="absolute inset-0 w-full h-full object-cover" 
                    alt="Auto EV"
                />
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><Car className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">АВТО И EV ЛИНИИ</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    АВТОМОБИЛНИ И EV МОНТАЖНИ ЛИНИИ
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">В автомобилните и EV монтажни линии подът поема трафик от AGV/AMR, колички, роботи и разливи от процесни флуиди. Неравни настилки и фуги водят до вибрации и проблеми в точността.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX ARMOR осигурява равни, износоустойчиви повърхности с ниски вибрации, подходящи за роботи и AGV. CHEM се добавя за устойчивост към масла и флуиди, а HYDRO се използва в зони с мокро почистване.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: ARMOR
                    </div>
                </div>
            </div>
        </section>

        {/* Block 9: ESD */}
        <section className="flex flex-col lg:flex-row w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-ESD-AREAS-FOR.webp" 
                    onError={(e) => { e.currentTarget.src = "/GEONYX-ESD-AREAS-FOR.webp" }}
                    className="absolute inset-0 w-full h-full object-cover" 
                    alt="ESD"
                />
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <Cpu className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">ESD И ЕЛЕКТРОНИКА</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    ESD ЗОНИ ЗА ЕЛЕКТРОНИКА И АВИОНИКА
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">В ESD чувствителни зони искрите и статичното електричество са критичен риск за компоненти и оборудване. Класическите настилки често не държат стабилни ESD параметри във времето.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX ARMOR + CHEM могат да бъдат конфигурирани като ESD-управляеми минерални системи, съвместими с изискванията за електроника и авионика, без компромис с механичната устойчивост и чистотата.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: CHEM
                    </div>
                </div>
            </div>
        </section>

        {/* Block 10: CLEAN ROOMS */}
        <section className="flex flex-col lg:flex-row-reverse w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-Calculator.webp" 
                    onError={(e) => { e.currentTarget.src = "/GEONYX-Calculator.webp" }}
                    className="absolute inset-0 w-full h-full object-cover" 
                    alt="Clean Room"
                />
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <Server className="w-8 h-8 text-geo-yellow" />
                     <span className="text-white font-bold uppercase text-sm block">CLEAN ROOMS И DATA</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    CLEAN ROOMS, DATA CENTERS И ЛАБОРАТОРИИ
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">Чистите помещения, центровете за данни и лабораториите изискват контрол на прах, влага, ESD и химия. Пукнатини, фуги и лющещи се покрития са неприемливи.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX ARMOR + HYDRO + CHEM комбинират равни, чисти, лесни за почистване и при нужда ESD-управляеми повърхности, устойчиви на дезинфектанти и лабораторна химия. THERM се добавя при зони с повишени противопожарни изисквания.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: HYDRO
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
                              <th className="p-4 text-gray-500 font-bold uppercase tracking-wider text-xs border-b border-r border-[#333] w-1/4">Стандартен бетон / плочки</th>
                              <th className="p-4 text-gray-500 font-bold uppercase tracking-wider text-xs border-b border-[#333] w-1/4">Органични системи (епокси/PU)</th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-[#333] text-sm">
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">Устойчивост на климат (UV, дъжд, температури)</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> Висока – минерална матрица, HYDRO/THERM защита</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">Средна – пукнатини и изсоляване</td>
                              <td className="p-4 text-gray-500">Средна – стареене, жълтеене и напукване</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">Механична износоустойчивост</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> Висока – ARMOR за удар, триене и трафик</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">Средна – ронене и прах</td>
                              <td className="p-4 text-gray-500">Добра в началото, бързо износване на повърхността</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">Химическа устойчивост (почистване, горива)</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> Висока – CHEM конфигурация</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">Ограничена – чувствителност към препарати</td>
                              <td className="p-4 text-gray-500">Зависима от химията, риск от набъбване и петна</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">Хидроизолация и течове към долни нива</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> Системна HYDRO логика</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">Частични решения, много детайлни слабости</td>
                              <td className="p-4 text-gray-500">Зависимост от органични мембрани</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">Естетика и „mineral look“ във времето</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> Запазена минерална визия, нисък прах</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">Неравномерна стареене и петна</td>
                              <td className="p-4 text-gray-500">Гланц, подчертава драскотини и дефекти</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">Поддръжка и ремонт</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> Локален REPAIR и системни обновявания по зони</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">Трудни частични ремонти, често пълна подмяна</td>
                              <td className="p-4 text-gray-500">Чести пренастилки при стареене</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">Обща цена за жизнен цикъл</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> Оптимизирана за 10–15+ години</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">Ниска първоначална, висока в дългосрочен план</td>
                              <td className="p-4 text-gray-500">Средна, с риск от ранно остаряване</td>
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
               src="/GEONYX-B2B-B2G.webp" 
               className="w-full h-full object-cover opacity-70" 
               onError={(e) => { e.currentTarget.src = "/GEONYX-urban-park.jpeg" }}
               alt="Urban Applications"
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
                  <p className="text-gray-300 mt-4 max-w-2xl mx-auto font-bold">GEONYX покрива както градската сцена, така и високотехнологичните обекти – от скейт парка до clean room-а.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                      { title: "Скейт паркове и велоалеи", desc: "Ударно натоварване, триене и климатични влияния.", icon: Bike },
                      { title: "Градска мебел и декоративен бетон", desc: "Пейки, кашпи, елементи и малки архитектурни форми.", icon: Trees },
                      { title: "Павета и плочници", desc: "Фугиране без плевели, измиване и замръзване.", icon: LayoutGrid },
                      { title: "Скулптури и обществени пространства", desc: "Декори, сцени, площадни и паркови елементи.", icon: Landmark },
                      { title: "Подлези, метро и обществени сгради", desc: "Пешеходен трафик, влага и високи изисквания за безопасност.", icon: TrainFront },
                      { title: "Тераси, стълби и входни зони", desc: "Външни площи, изложени на дъжд, лед и соли.", icon: Layers },
                      { title: "Авиационни хангари и apron зони", desc: "Тежки колесници, авиационни горива и MRO дейности.", icon: Plane },
                      { title: "ESD и high-tech помещения", desc: "Електроника, авионика, контрол на статично електричество.", icon: Cpu },
                      { title: "Data centers и clean rooms", desc: "Нисък прах, контролирана влага, стабилни повърхности.", icon: Server },
                      { title: "Лаборатории и R&D центрове", desc: "Химия, дезинфекция и прецизни измервания.", icon: FlaskConical },
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
                  <p className="text-gray-500 mt-4 max-w-2xl mx-auto">За градска и високотехнологична среда GEONYX комбинира ARMOR, HYDRO, CHEM и THERM според това дали водещият риск е трафик, климат, химия, ESD или пожар.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                      { name: "GEONYX ARMOR", desc: "Високоякостни минерални системи за удар, абразия и интензивен пешеходен и колесен трафик." },
                      { name: "GEONYX HYDRO", desc: "Решения за вода, валежи и течове – от тераси и плочници до подземни подлези и метростанции." },
                      { name: "GEONYX CHEM", desc: "Системи с повишена химическа устойчивост за авиационни течности, почистващи препарати и лабораторна химия." },
                      { name: "GEONYX THERM", desc: "Минерални решения с по-добро поведение при пожар и термичен стрес в публични и high-tech сгради." },
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
                      { step: "01", title: "Анализ на функцията и трафика", desc: "Разглеждане на сценарии – градска среда, обществен достъп, high-tech зони, ESD/clean изисквания." },
                      { step: "02", title: "Зониране по риск", desc: "Разделяне на обекта на зони: външни площи, вътрешни публични зони, high-tech, лаборатории, хангари." },
                      { step: "03", title: "Избор на системи GEONYX", desc: "Комбинация ARMOR / HYDRO / CHEM / THERM за всяка зона с ясно дефинирани параметри." },
                      { step: "04", title: "Детайли и пробни зони", desc: "Проектиране на детайли при фуги, бордове, фасади, сифони и тестови участъци при нужда." },
                      { step: "05", title: "Поетапно изпълнение", desc: "Организация на работата така, че обектът да остане частично функциониращ, където е възможно." },
                      { step: "06", title: "Контрол и обучение", desc: "Финален контрол, документация и инструкции за поддръжка, почистване и бъдещи REPAIR намеси." },
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
               src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=2400&q=80" 
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
                          ОФЕРТЕН ПАКЕТ <br/> (B2B / B2G)
                      </h2>
                      <p className="text-gray-400 text-sm leading-relaxed mb-8 font-bold">
                          За общини, инвеститори, архитекти и оператори на high-tech обекти GEONYX подготвя пълен пакет за търгове, конкурси и вътрешно одобрение.
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
                              "Зониране на градските и high-tech площи по функция и риск",
                              "Технически спецификации за ARMOR / HYDRO / CHEM / THERM по зони",
                              "Детайли за фуги, бордове, фасади, тераси и подземни връзки",
                              "Препоръчителен сценарий за изпълнение без пълно затваряне на обекта",
                              "Изисквания за почистване, химия и пожарна безопасност",
                              "Гаранционни условия и план за инспекция и локални ремонти"
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

      {/* 9. DOCUMENTATION (Downloads) */}
      <section id="specs" className="py-20 bg-black border-b border-[#222]">
          <div className="container mx-auto px-6 md:px-10">
              <h3 className="text-2xl font-black text-white uppercase mb-12 border-l-4 border-geo-yellow pl-4">Документация</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <button className="w-full flex items-center justify-between p-6 bg-[#111] border border-[#333] hover:border-geo-yellow group transition-all">
                      <div className="flex items-center gap-4">
                          <FileText className="text-gray-400 group-hover:text-geo-yellow w-8 h-8" />
                          <div className="text-left">
                              <span className="text-white font-bold block uppercase text-sm">Urban Surfaces Guide</span>
                              <span className="text-gray-500 text-xs">Градска среда (PDF)</span>
                          </div>
                      </div>
                      <Download className="text-gray-500 group-hover:text-white" />
                  </button>
                  <button className="w-full flex items-center justify-between p-6 bg-[#111] border border-[#333] hover:border-geo-yellow group transition-all">
                      <div className="flex items-center gap-4">
                          <FileText className="text-gray-400 group-hover:text-geo-yellow w-8 h-8" />
                          <div className="text-left">
                              <span className="text-white font-bold block uppercase text-sm">Public Spaces & Metro</span>
                              <span className="text-gray-500 text-xs">Обществени зони (PDF)</span>
                          </div>
                      </div>
                      <Download className="text-gray-500 group-hover:text-white" />
                  </button>
                  <button className="w-full flex items-center justify-between p-6 bg-[#111] border border-[#333] hover:border-geo-yellow group transition-all">
                      <div className="flex items-center gap-4">
                          <FileText className="text-gray-400 group-hover:text-geo-yellow w-8 h-8" />
                          <div className="text-left">
                              <span className="text-white font-bold block uppercase text-sm">Aviation & High-Tech Floors</span>
                              <span className="text-gray-500 text-xs">Технически изисквания (PDF)</span>
                          </div>
                      </div>
                      <Download className="text-gray-500 group-hover:text-white" />
                  </button>
                  <button className="w-full flex items-center justify-between p-6 bg-[#111] border border-[#333] hover:border-geo-yellow group transition-all">
                      <div className="flex items-center gap-4">
                          <FileText className="text-gray-400 group-hover:text-geo-yellow w-8 h-8" />
                          <div className="text-left">
                              <span className="text-white font-bold block uppercase text-sm">Clean & Data Environments</span>
                              <span className="text-gray-500 text-xs">Настилки (PDF)</span>
                          </div>
                      </div>
                      <Download className="text-gray-500 group-hover:text-white" />
                  </button>
              </div>
          </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section className="py-24 px-6 bg-[#0a0a0a] border-b border-[#222]">
          <div className="container mx-auto max-w-4xl">
              <div className="text-center mb-12">
                  <h2 className="text-3xl font-black text-white uppercase">Често Задавани Въпроси</h2>
              </div>
              
              <div className="space-y-4">
                  <div className="bg-[#111] p-6 border-l-4 border-gray-700 hover:border-geo-yellow transition-colors shadow-xl group">
                      <div className="flex gap-4">
                          <HelpCircle className="text-gray-500 group-hover:text-geo-yellow flex-shrink-0 transition-colors" />
                          <div>
                              <h4 className="text-white font-bold uppercase mb-2 group-hover:text-geo-yellow transition-colors">МОЖЕМ ЛИ ДА ЗАПАЗИМ „МИНЕРАЛНА ВИЗИЯ“, А НЕ ТИПИЧНА СМОЛНА НАСТИЛКА?</h4>
                              <p className="text-gray-400 text-sm">Да. GEONYX системите са минерални и позволяват „mineral look“ с висока износоустойчивост и защита. Цветът и текстурата се задават в проекта според архитектурната концепция.</p>
                          </div>
                      </div>
                  </div>

                  <div className="bg-[#111] p-6 border-l-4 border-gray-700 hover:border-geo-yellow transition-colors shadow-xl group">
                      <div className="flex gap-4">
                          <HelpCircle className="text-gray-500 group-hover:text-geo-yellow flex-shrink-0 transition-colors" />
                          <div>
                              <h4 className="text-white font-bold uppercase mb-2 group-hover:text-geo-yellow transition-colors">ПОДХОДЯЩИ ЛИ СА СИСТЕМИТЕ ЗА ESD И CLEAN ROOM ИЗИСКВАНИЯ?</h4>
                              <p className="text-gray-400 text-sm">Определени конфигурации на ARMOR и CHEM могат да бъдат изпълнени с контролирани ESD параметри и гладка, лесна за почистване повърхност, съвместима с clean room протоколи.</p>
                          </div>
                      </div>
                  </div>

                  <div className="bg-[#111] p-6 border-l-4 border-gray-700 hover:border-geo-yellow transition-colors shadow-xl group">
                      <div className="flex gap-4">
                          <HelpCircle className="text-gray-500 group-hover:text-geo-yellow flex-shrink-0 transition-colors" />
                          <div>
                              <h4 className="text-white font-bold uppercase mb-2 group-hover:text-geo-yellow transition-colors">КАК СЕ ДЪРЖАТ НАСТИЛКИТЕ ПРИ ОГЪН В ПУБЛИЧНИ И HIGH-TECH СГРАДИ?</h4>
                              <p className="text-gray-400 text-sm">THERM конфигурациите стъпват върху негорими минерални системи с благоприятно поведение при пожар, като конкретните класове се уточняват според нормативите и проекта.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 11. SYSTEM BRIDGE CTA */}
      <section className="bg-geo-yellow py-16 border-t border-black">
          <div className="container mx-auto px-6 flex flex-col items-center text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-black uppercase mb-6 tracking-tight max-w-4xl">
                  КОМПЛЕКСНО ЗОНИРАНЕ НА ОБЕКТА
              </h2>
              <p className="text-black/80 text-lg font-medium mb-8 max-w-3xl mx-auto leading-relaxed">
                  Всеки обект има специфични рискове. Ние интегрираме 6 специализирани матрици в една система: от механика, химия и термошок, до хидроизолация, антистатика и архитектура.
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

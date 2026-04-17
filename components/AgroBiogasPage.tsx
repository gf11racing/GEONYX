
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

export const AgroBiogasPage: React.FC = () => {
  const navigate = useNavigate();
  const [copySuccess, setCopySuccess] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "GEONYX | Агро, биогаз, торове и животински среди – Химически устойчива защита";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', "GEONYX проектира минерални подови и защитни системи за агроферми, биогаз инсталации, силози, торохранилища и животновъдни среди – устойчиви на амоняк, киселини, биогенна корозия, торове и агресивна органична среда. Дълготрайна защита на бетон и инфраструктура.");
    }
  }, []);

  const handleCopyTender = () => {
    const text = "Повърхностите в складове за торове, ферми, обори, доилни помещения, биогаз инсталации, екарисажи, компостиращи площадки и зоопаркове да бъдат изпълнени с минерални геополимерни системи тип GEONYX или еквивалент, комбиниращи ARMOR / CHEM / HYDRO / THERM / REPAIR според агресивността на средата и механичното натоварване. Системите следва да осигуряват химическа устойчивост към тор, амоняк, органични киселини и агрохимия, водонепропускливост на конструктивните елементи и повърхности, контролирано противохлъзгане и възможност за локален ремонт без дълъг престой.";
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
                        <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">АГРО, БИОГАЗ, ТОРОВЕ И ЖИВОТИНСКИ СРЕДИ</span>
                    </div>
                    
                    {/* H1 Title */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 uppercase tracking-tighter drop-shadow-2xl mix-blend-difference page-animate-title">
                        ПОВЪРХНОСТИ, <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-geo-yellow to-yellow-600">КОИТО ИЗДЪРЖАТ НА ТОР И АМОНЯК</span>
                    </h1>
                    
                    {/* Description Box */}
                    <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light max-w-4xl leading-relaxed border-l-4 border-geo-yellow pl-6 py-2 bg-black/30 backdrop-blur-sm page-animate-desc">
                        В агро и биогаз средите бетонът живее постоянно в тор, амоняк и влага. GEONYX изгражда минерални системи, устойчиви на органика, агрохимия и ферментация.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 page-animate-buttons">
                        <a href="#specs">
                            <Button 
                                variant="primary" 
                                className="h-12 px-6 text-sm font-bold bg-geo-yellow text-black border-none hover:bg-white transition-all shadow-[0_0_20px_rgba(255,204,0,0.15)] rounded-none uppercase tracking-wider flex items-center gap-2"
                            >
                                ИЗТЕГЛИ ТЕХНИЧЕСКИ ПРОФИЛ <FileText className="w-4 h-4" />
                            </Button>
                        </a>
                        <Link to="/request-inspection">
                            <button className="h-12 px-6 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase">
                                ЗАЯВИ ТЕХНИЧЕСКИ ОГЛЕД <ArrowRight className="w-4 h-4" />
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
                                <div className="flex flex-col gap-3">
                                    <span className="border-l-2 border-geo-yellow pl-2">Животновъдни ферми (кравеферми, свинеферми, птицеферми)</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Обори, боксове и коридори за животни</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Площадки за складиране и компостиране на тор</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Навеси и бетонни площадки за фуражи и силажи</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Платформи за товарене/разтоварване на тор и фураж</span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className="border-l-2 border-geo-yellow pl-2">Биогаз реактори и технически коридори</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Торови лагуни, утаители и утаителни басейни</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Канали, септични системи и дренажни корита за течен тор</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Площадки за измиване на техника и цистерни за тор</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Агро-инфраструктура около ферми (сервизни и обслужващи зони)</span>
                                </div>
                            </div>
                        </div>

                        <div className="h-px w-full bg-white/10 mb-6"></div>

                        <div className="mb-6">
                            <span className="text-gray-500 font-bold uppercase text-[10px] tracking-widest block mb-3">СИСТЕМИ:</span>
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
                ОРГАНИКАТА И АГРОХИМИЯТА <br/> 
                <span className="text-geo-yellow">УБИВАТ БЕТОНА НАЙ-БЪРЗО.</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
                Тор, амоняк, силози за торове, ферментат и постоянна влага разрушават стандартния бетон за няколко години. GEONYX заменя боята и временните покрития с минерални системи, проектирани специално за агро и биогаз среди – устойчиви на органика, киселинност и цикли мокро/сухо.
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
                     <span className="text-white font-bold uppercase text-sm block">СКЛАДОВЕ ЗА ТОРОВЕ</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    СИЛОЗИ И СКЛАДОВЕ ЗА МИНЕРАЛНИ ТОРОВЕ
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">Минералните торове (амониев нитрат, фосфати, калиеви соли) в комбинация с влага образуват силно корозивна среда. Бетонът започва да се рони, появяват се дупки и прах, а товарната техника разбива пода още повече. Почистването става трудно, а рискът от замърсяване на почвата и подпочвените води расте.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX CHEM + ARMOR създават плътна минерална повърхност с висока химическа устойчивост и механична якост. HYDRO детайлите при фуги, стени и отводняване спират проникването на разтвори в конструкцията. Резултатът е здрав под, който издържа на тор, влага и тежки челни товарачи.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: CHEM
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
                     <span className="text-white font-bold uppercase text-sm block">ФЕРМИ И ОБОРИ</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    ФЕРМИ, ОБОРИ И ДОИЛНИ – ТОР, УРИНА И АМОНИЯК
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">В обори и доилни подът е постоянно мокър – тор, урина, миеща вода и дезинфектанти. Бетонът се изяжда, появяват се дупки и хлъзгави участъци, животните се пързалят, а почистването изисква все повече време и вода.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX HYDRO + CHEM осигуряват водонепропусклива и химически устойчива повърхност, която не се разпада от амоняк и органика. ARMOR поема трафика от животни, трактори и хранителна техника. Повърхността се проектира с подходяща грапавина – безопасна за копита и ботуши, но лесна за измиване.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: HYDRO
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
                     <span className="text-white font-bold uppercase text-sm block">БИОГАЗ И ЛАГУНИ</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    БИОГАЗ И ФЕРМЕНТАТ – АГРЕСИВНА КИСЕЛИННА СРЕДА
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">В биогаз инсталациите бетонът е в контакт с ферментат, газове, конденз и висока влажност. Класическият бетон и смолни покрития се напукват и отлепват, което води до течове, миризми и скъпи спирания за ремонт.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX CHEM + HYDRO изграждат минерални системи за ферментатни резервоари, корита и площадки, устойчиви на органични киселини и газове. THERM се използва при зони с повишени температури около реактори и тръбни трасета. REPAIR позволява локални ремонти без дълго спиране на инсталацията.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: CHEM
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
                     <span className="text-white font-bold uppercase text-sm block">ЕКАРИСАЖИ</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    ЕКАРИСАЖИ И ЖИВОТИНСКИ ОТПАДЪЦИ
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">В екарисажите подът поема кръв, мазнини, вода, агресивни миещи разтвори и тежки товари. Стандартните настилки бързо стават порести, задържат миризми и представляват санитарен риск.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX CHEM създава плътна, химически устойчива повърхност без пори и микропукнатини. HYDRO защитава зоните с постоянна влага и канали, а ARMOR гарантира якост за машини и контейнери. Повърхността се почиства по-бързо и не задържа миризми.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: CHEM
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
                     <span className="text-white font-bold uppercase text-sm block">КОМПОСТИРАНЕ</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    КОМПОСТ И ОТКРИТИ ПЛОЩАДКИ ЗА ОТПАДЪК
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">Компостиращите инсталации са комбинация от органика, влага, киселинност и тежък машинен трафик. Бетонът се разпада, появяват се кални дупки и замърсяване на околната среда.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX ARMOR + CHEM изграждат износоустойчива минерална повърхност за челни товарачи и багери, устойчива на органична киселинност. HYDRO детайлите към шахти и периферията ограничават инфилтрацията в почвата. REPAIR позволява бързо възстановяване на локални разрушения.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: ARMOR
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
                     <span className="text-white font-bold uppercase text-sm block">ОРАНЖЕРИИ</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    ОРАНЖЕРИИ, ХИДРОПОНИКА И АГРОХИМИЯ
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">В оранжерии и хидропонни системи подът постоянно е мокър – хранителни разтвори, киселинни и алкални препарати за корекция, капково напояване и конденз. Стандартният бетон се напуква, появяват се водни локви и водорасли.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX HYDRO + CHEM осигуряват водоплътна и химически устойчива повърхност, върху която разтворите не проникват в конструкцията. ARMOR поема трафика от колички и мобилни маси. Повърхността се проектира за лесно избутване на вода към улеи и сифони.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: HYDRO
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
                     <span className="text-white font-bold uppercase text-sm block">ЗОО И АКВАРИУМИ</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    ЗООПАРКОВЕ, АКВАРИУМИ И БАСЕЙНИ ЗА ЖИВОТНИ
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">В зоопаркове и аквариуми подът и коритата са подложени на вода, изпражнения, сол, хлор и механичен износване от животни и обслужваща техника. Пукнатини и течове водят до загуби на вода и риск за конструкцията.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX HYDRO създава монолитни, водонепропускливи системи за корита и мокри зони, а CHEM осигурява устойчивост към сол, хлор и почистващи химикали. ARMOR защитава проходи и сервизни зони с трафик. Детайлите при преходите вода/сухо се изпълняват без слаби точки.</p>
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
                              <th className="p-4 text-gray-500 font-bold uppercase tracking-wider text-xs border-b border-r border-[#333] w-1/4">Стандартен бетон с покритие</th>
                              <th className="p-4 text-gray-500 font-bold uppercase tracking-wider text-xs border-b border-[#333] w-1/4">Епоксидна / PU настилка</th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-[#333] text-sm">
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">Устойчивост на тор, урина и амоняк</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> Висока – минерална CHEM конфигурация</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">Ниска – бърза корозия и ронене</td>
                              <td className="p-4 text-gray-500">Средна – смолата се атакува, животът е ограничен</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">Устойчивост на постоянна влага и ферментация</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> Висока – HYDRO водоплътност</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">Средна – капилярно поемане и замръзване</td>
                              <td className="p-4 text-gray-500">Средна – риск от мехури и отлепване</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">Механична устойчивост (товарачи, трактори)</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> Висока – ARMOR, {'>'}110 MPa</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">Средна – износване и коловози</td>
                              <td className="p-4 text-gray-500">Средна – чувствителна към удар и драскане</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">Жизнен цикъл при 24/7 експлоатация</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> Дълъг, с локален REPAIR</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">Къс – чести кърпежи и кръпки</td>
                              <td className="p-4 text-gray-500">Среден – периодични пренастилки</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">Риск от течове и замърсяване на почва</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> Нисък – водоплътни детайли HYDRO</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">Висок – пукнатини и пори</td>
                              <td className="p-4 text-gray-500">Среден – зависи от адхезията</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">Време за ремонт / престой</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> Кратки прозорци, поетапно REPAIR</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">Дълги спирания и тежка техника</td>
                              <td className="p-4 text-gray-500">Значителен престой при пренастилка</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">Обща цена за жизнен цикъл</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> По-ниска при 10+ години хоризонт</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">Ниска първоначално, висока в дългосрочен план</td>
                              <td className="p-4 text-gray-500">Средна – значими разходи през 5–7 години</td>
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
                      <h3 className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">ПРИЛОЖЕНИЯ</h3>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase">КЪДЕ СЕ ИЗПОЛЗВА</h2>
                  <p className="text-gray-300 mt-4 max-w-2xl mx-auto font-bold">Системите GEONYX покриват целия цикъл – от склад за тор и ферми до биогаз, компост и зоопаркове.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                      { title: "Складове за минерални торове", desc: "Закрити и открити площадки за амониев нитрат, фосфати и смесени торове.", icon: Warehouse },
                      { title: "Ферми, обори и доилни", desc: "Коридори, боксове, доилни линии и плацове за животни.", icon: Beef },
                      { title: "Оранжерии и хидропоника", desc: "Производствени пътеки, технически коридори и зони за смесване на разтвори.", icon: Sprout },
                      { title: "Биогаз инсталации", desc: "Ферментатни резервоари, корита, обслужващи площадки и приемни ями.", icon: Factory },
                      { title: "Компостиращи инсталации", desc: "Площадки за компост, временни депа и трасета за челни товарачи.", icon: Recycle },
                      { title: "Екарисажи и животински отпадъци", desc: "Зони за прием, разфасоване, миене и временно съхранение.", icon: Biohazard },
                      { title: "Зоопаркове и аквариуми", desc: "Басейни за животни, сервизни коридори и мокри помещения.", icon: Fish },
                      { title: "Лагуни, канали и дренаж", desc: "Канали за тор, лагуни и дренажни улеи около агро площадки.", icon: Droplets },
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
                  <p className="text-gray-500 mt-4 max-w-2xl mx-auto">При агро и биогаз проектите изборът на система зависи от комбинацията тор/амоняк, влага, трафик и температурен режим. GEONYX комбинира ARMOR, CHEM, HYDRO, THERM и REPAIR по зони.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                      { name: "GEONYX CHEM", desc: "Минерални системи с висока химическа устойчивост към тор, амоняк, органични киселини, агрохимия и ферментат." },
                      { name: "GEONYX HYDRO", desc: "Водоплътни решения за лагуни, канали, миещи зони и постоянно мокри повърхности." },
                      { name: "GEONYX ARMOR", desc: "Механично устойчиви подове за тежък трафик – трактори, челни товарачи, ремаркета и контейнери." },
                      { name: "GEONYX THERM", desc: "Системи за зони с повишени температури около реактори, тръби и топли процеси." },
                      { name: "GEONYX REPAIR", desc: "Бързи геополимерни решения за локален ремонт на корозирал бетон и фуги без дълго спиране на обекта." },
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
                      { step: "01", title: "Теренен оглед и вземане на проби", desc: "Оценка на съществуващия бетон, агресивните среди (тор, торове, ферментат), режим на почистване и натоварване от техника." },
                      { step: "02", title: "Зониране по функция и риск", desc: "Разделяне на обекта на зони: склад за тор, ферми и обори, доилни, биогаз, компост, екарисаж, зоопарк/аквариум." },
                      { step: "03", title: "Избор на системи GEONYX", desc: "Подбор на ARMOR / CHEM / HYDRO / THERM / REPAIR за всяка зона според химия, влага, трафик и температури." },
                      { step: "04", title: "Подготовка на основата и детайли", desc: "Механична подготовка, обработка на фуги, канали, сифони и критични детайли към стени и стоманени елементи." },
                      { step: "05", title: "Полагане по етапи", desc: "Изпълнение на системите поетапно – така, че фермата или инсталацията да продължи да работи с минимален престой." },
                      { step: "06", title: "Контрол и инструкции за експлоатация", desc: "Проверка на изпълнението, документация и обучение за почистване и поддръжка в агро и биогаз режим." },
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
                           <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">ТЪРГОВСКА ДОКУМЕНТАЦИЯ</span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 leading-tight">
                          ОФЕРТЕН ПАКЕТ <br/> (B2B / B2G)
                      </h2>
                      <p className="text-gray-400 text-sm leading-relaxed mb-8 font-bold">
                          За агро, биогаз и торови обекти GEONYX подготвя пълен технически пакет за инвеститори, банки, контролни органи и обществени поръчки.
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
                              "Зониране по агресивност – тор, торове, ферментат, агрохимия",
                              "Описание на системите ARMOR / CHEM / HYDRO / THERM / REPAIR за всяка зона",
                              "Детайли за лагуни, канали, силози и дренаж",
                              "Оценка на риска от течове и мерки за защита на почви и води",
                              "Препоръчителен график за изпълнение без спиране на целия обект",
                              "Гаранционни условия и указания за почистване и поддръжка"
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
                              <span className="text-white font-bold block uppercase text-sm">Agro & Biogas Floors Guide</span>
                              <span className="text-gray-500 text-xs">Подови системи GEONYX (PDF)</span>
                          </div>
                      </div>
                      <Download className="text-gray-500 group-hover:text-white" />
                  </button>
                  <button className="w-full flex items-center justify-between p-6 bg-[#111] border border-[#333] hover:border-geo-yellow group transition-all">
                      <div className="flex items-center gap-4">
                          <FileText className="text-gray-400 group-hover:text-geo-yellow w-8 h-8" />
                          <div className="text-left">
                              <span className="text-white font-bold block uppercase text-sm">Fertilizer Warehouses Spec</span>
                              <span className="text-gray-500 text-xs">Технически изисквания (PDF)</span>
                          </div>
                      </div>
                      <Download className="text-gray-500 group-hover:text-white" />
                  </button>
                  <button className="w-full flex items-center justify-between p-6 bg-[#111] border border-[#333] hover:border-geo-yellow group transition-all">
                      <div className="flex items-center gap-4">
                          <FileText className="text-gray-400 group-hover:text-geo-yellow w-8 h-8" />
                          <div className="text-left">
                              <span className="text-white font-bold block uppercase text-sm">Manure & Lagoon Protection</span>
                              <span className="text-gray-500 text-xs">Защита на лагуни (PDF)</span>
                          </div>
                      </div>
                      <Download className="text-gray-500 group-hover:text-white" />
                  </button>
                  <button className="w-full flex items-center justify-between p-6 bg-[#111] border border-[#333] hover:border-geo-yellow group transition-all">
                      <div className="flex items-center gap-4">
                          <FileText className="text-gray-400 group-hover:text-geo-yellow w-8 h-8" />
                          <div className="text-left">
                              <span className="text-white font-bold block uppercase text-sm">Zoo & Aquatic Surfaces</span>
                              <span className="text-gray-500 text-xs">Системи за зоопаркове (PDF)</span>
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
                              <h4 className="text-white font-bold uppercase mb-2 group-hover:text-geo-yellow transition-colors">ЩЕ ИЗДЪРЖАТ ЛИ СИСТЕМИТЕ GEONYX НА ТОР, УРИНА И АМОНЯК В ДЪЛГОСРОЧЕН ПЛАН?</h4>
                              <p className="text-gray-400 text-sm">Да. CHEM конфигурациите са проектирани за органична киселинност, амоняк и агрохимия. При одита избираме конкретна система според вашите процеси и натоварване.</p>
                          </div>
                      </div>
                  </div>

                  {/* Q2 */}
                  <div className="bg-[#111] p-6 border-l-4 border-gray-700 hover:border-geo-yellow transition-colors shadow-xl group">
                      <div className="flex gap-4">
                          <HelpCircle className="text-gray-500 group-hover:text-geo-yellow flex-shrink-0 transition-colors" />
                          <div>
                              <h4 className="text-white font-bold uppercase mb-2 group-hover:text-geo-yellow transition-colors">МОЖЕМ ЛИ ДА ПРОДЪЛЖИМ РАБОТА ВЪВ ФЕРМАТА ИЛИ БИОГАЗ ИНСТАЛАЦИЯТА ПО ВРЕМЕ НА РЕМОНТА?</h4>
                              <p className="text-gray-400 text-sm">Обикновено – да. Проектираме поетапно изпълнение, така че да се затварят само отделни зони, а REPAIR позволява бързо връщане в експлоатация.</p>
                          </div>
                      </div>
                  </div>

                  {/* Q3 */}
                  <div className="bg-[#111] p-6 border-l-4 border-gray-700 hover:border-geo-yellow transition-colors shadow-xl group">
                      <div className="flex gap-4">
                          <HelpCircle className="text-gray-500 group-hover:text-geo-yellow flex-shrink-0 transition-colors" />
                          <div>
                              <h4 className="text-white font-bold uppercase mb-2 group-hover:text-geo-yellow transition-colors">ПОДХОДЯЩИ ЛИ СА СИСТЕМИТЕ ЗА ОТКРИТИ ПЛОЩАДКИ И ВЪНШНИ ЛАГУНИ?</h4>
                              <p className="text-gray-400 text-sm">Да. HYDRO и ARMOR конфигурациите са разработени за външни условия, замръзване/размразяване и тежък машинен трафик, като ограничават риска от течове към почвата.</p>
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
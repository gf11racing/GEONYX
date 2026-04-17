
import React, { useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Button } from './Button';
import { 
  Fish, Beef, Beer, Wheat, FlaskConical, SprayCan, Pill, ShoppingCart, Utensils, Snowflake,
  FileText, ArrowRight, Download, HelpCircle, CheckCircle, Copy, Check, MousePointer2, 
  ShieldCheck, Droplets, Flame, Hammer, Factory, Warehouse
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { SafeImage } from './SafeImage';

export const FoodPharmaPage: React.FC = () => {
  const navigate = useNavigate();
  const [copySuccess, setCopySuccess] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "GEONYX | Храни, напитки, фармация и хигиена – Безфугови индустриални подове";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', "GEONYX проектира безфугови минерални подови системи за хранително-вкусовата промишленост, напитки, фармация и хигиенни производства – устойчиви на химия, пара, гореща вода, биофилм и агресивни почистващи препарати. Съвместими с HACCP, IFS, BRC и фарма стандарти.");
    }
  }, []);

  const handleCopyTender = () => {
    const text = "Подовете и свързаните хидро- и химически защитни системи в производствените, миялни, опаковъчни, хладилни, складови и кухненски зони да бъдат изпълнени с минерални геополимерни системи тип GEONYX или еквивалент, комбиниращи ARMOR / CHEM / HYDRO / THERM / REPAIR според хигиенния и технологичен риск. Системите следва да осигуряват безфугова или минимално фугована повърхност, съвместимост с използваните дезинфектанти, контролирано противохлъзгане и да отговарят на приложимите стандарти HACCP, IFS, BRC и фарма/GMP изискванията на възложителя.";
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
            src="/GEONYX-FOOD-HERO.webp" 
            className="w-full h-full object-cover opacity-60" 
            onError={(e) => { e.currentTarget.src = "/GEONYX-FOOD-HERO.webp" }}
            alt="Food and Pharma Industry"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-20 text-left">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-end">
                
                {/* LEFT COLUMN */}
                <div className="lg:w-2/3 text-left">
                    {/* Header Label */}
                    <div className="flex items-center justify-start gap-3 mb-8 page-animate-tag">
                        <div className="h-[2px] w-12 bg-geo-yellow shadow-[0_0_15px_#FFCC00]"></div>
                        <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">ХРАНИ, НАПИТКИ, ФАРМАЦИЯ И ХИГИЕНА</span>
                    </div>
                    
                    {/* H1 Title */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 uppercase tracking-tighter drop-shadow-2xl mix-blend-difference page-animate-title">
                        ПОВЪРХНОСТИ, <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-geo-yellow to-yellow-600">ОДОБРЕНИ ОТ ИНСПЕКТОРИТЕ</span>
                    </h1>
                    
                    {/* Description Box */}
                    <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light max-w-4xl leading-relaxed border-l-4 border-geo-yellow pl-6 py-2 bg-black/30 backdrop-blur-sm page-animate-desc">
                        В храни, напитки и фармация подът е част от безопасността на продукта. GEONYX осигурява минерални, безфугови и лесни за миене повърхности, устойчиви на гореща вода, пара и химия, съвместими с HACCP и фарма стандарти.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 page-animate-buttons">
                        <a href="#specs">
                            <Button 
                                variant="primary" 
                                className="h-12 px-6 text-sm font-bold bg-geo-yellow text-black border-none hover:bg-white transition-all shadow-[0_0_20px_rgba(255,204,0,0.15)] rounded-none uppercase tracking-wider flex items-center gap-2"
                            >
                                ИЗТЕГЛИ HACCP РЪКОВОДСТВО <FileText className="w-4 h-4" />
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
                                    <span className="border-l-2 border-geo-yellow pl-2">Млекопреработвателни предприятия и сиренарни</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Месопреработка и кланици</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Заводи за безалкохолни и бутилирана вода</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Пивоварни и напитки (бира, сайдер и др.)</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Пекарни, сладкарски и замразени продукти</span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className="border-l-2 border-geo-yellow pl-2">Фармацевтични производства (API, таблетки, сиропи)</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Заводи за козметика и лична хигиена</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Чисти помещения и стерилни зони (clean rooms)</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Опаковъчни и логистични зони с хладилен режим</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Мокри помещения, миялни и CIP/COP зони</span>
                                </div>
                            </div>
                        </div>

                        <div className="h-px w-full bg-white/10 mb-6"></div>

                        <div className="mb-6">
                            <span className="text-gray-500 font-bold uppercase text-[10px] tracking-widest block mb-3">СИСТЕМИ:</span>
                            <div className="flex flex-wrap gap-2">
                                {['ARMOR', 'CHEM', 'HYDRO', 'THERM'].map((sys, i) => (
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
                ЧИСТОТАТА В ПРОИЗВОДСТВОТО <br/> 
                <span className="text-geo-yellow">ЗАПОЧВАТ ОТ ПОДА.</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
                Всяка програма за безопасност на храните или фармацевтично производство стъпва върху три неща: повърхности без скрити места, предвидимо почистване и контрол на риска от контаминация. Ако подът се лющи, събира вода по фугите, хлъзгав е или реагира с почистващите препарати, нито HACCP планът, нито протоколите за почистване могат да компенсират това. GEONYX заменя „боя върху бетон“ с монолитна минерална система.
            </p>
        </div>
      </section>

      {/* 3. ZIG-ZAG SOLUTIONS */}
      <div className="w-full bg-[#0b0c10]">
        
        {/* Block 1 */}
        <section className="flex flex-col lg:flex-row w-full min-h-[600px] border-y border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-FISH-SALT-BLOOD-AND-HEAT-SHOCK.webp" 
                    onError={(e) => { e.currentTarget.src = "/GEONYX-marine-pool.jpeg" }}
                    className="absolute inset-0 w-full h-full object-cover" 
                    alt="Fish Processing"
                />
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <Fish className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">РИБОПРЕРАБОТКА</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    РИБА, СОЛ, КРЪВ И ТЕРМИЧЕН ШОК
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">Рибопреработвателните бази са „адският“ сценарий за пода – комбинация от солена вода, кръв, мазнини, лед, топла вода и пара. Стандартните покрития се напукват от термичния шок, фугите задържат био-филм.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX CHEM + HYDRO изгражда безфугова, химически устойчива минерална система с контролирана противохлъзгаща текстура. Подът е проектиран да поема термични цикли – от ледени зони до горещо измиване.</p>
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
                    src="/GEONYX-FAT-BLOOD-AND-STEAM.webp" 
                    onError={(e) => { e.currentTarget.src = "/GEONYX-food-meat.jpeg" }}
                    className="absolute inset-0 w-full h-full object-cover" 
                    alt="Meat and Dairy"
                />
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><Beef className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">МЕСО И МЛЕЧНИ</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    МАЗНИНИ, КРЪВ И ПАРА
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">В месокомбинати и мандри подът поема кръв, мазнини, мляко, солни разтвори и силни алкални/киселинни почистващи препарати. Гореща вода и пара се комбинират с удар от колички и иноксови маси.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX CHEM осигурява минерална система, устойчива на органични киселини, алкални почистващи агенти и мазнини. ARMOR дава необходимата механична якост за трафик, а HYDRO се използва в зони с постоянна вода.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: CHEM
                    </div>
                </div>
            </div>
        </section>

        {/* Block 3 */}
        <section className="flex flex-col lg:flex-row w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-SUGAR-FOAM-AND-BROKEN-GLASS.webp" 
                    onError={(e) => { e.currentTarget.src = "/GEONYX-food-dairy.jpeg" }}
                    className="absolute inset-0 w-full h-full object-cover" 
                    alt="Beverages"
                />
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <Beer className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">НАПИТКИ И БУТИЛИРАНЕ</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    ЗАХАР, ПЯНА И СЧУПЕНИ СТЪКЛА
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">В заводите за напитки подовете постоянно се мокрят – вода, сиропи, захарни разтвори, пяна, CIP разтвори. Захарта прави пода лепкав и ускорява разрушаването. Счупените стъкла режат стандартните покрития.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX CHEM + HYDRO образува плътна повърхност, върху която сиропите остават „отгоре“. ARMOR осигурява устойчивост на удар и трафик. Детайлите при канали се изпълняват без „зъбци“.</p>
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
                    src="/GEONYX-FLOUR-POWDER-AND-THERMAL-SHOCK.webp" 
                    onError={(e) => { e.currentTarget.src = "/GEONYX-heavy-sparks.jpeg" }}
                    className="absolute inset-0 w-full h-full object-cover" 
                    alt="Bakeries"
                />
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><Wheat className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">ПЕКАРНИ</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    БРАШНО, ПРАХ И ТЕРМИЧЕН ШОК
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">В хлебозаводите брашното е навсякъде и става лепкава маса при намокряне. Горещи колички от пещите създават локален термичен шок. Покритията потъмняват и се отделят на люспи.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX ARMOR + THERM създава повърхност, устойчива на термичен шок. Структурата е проектирана така, че брашното да не „влиза“ в порите. При зони с мокро почистване се добавя HYDRO.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: THERM
                    </div>
                </div>
            </div>
        </section>

        {/* Block 5 */}
        <section className="flex flex-col lg:flex-row w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-OILS-ALCOHOLS-AND-SOLVENTS.webp" 
                    onError={(e) => { e.currentTarget.src = "/GEONYX-chemical-plant.jpeg" }}
                    className="absolute inset-0 w-full h-full object-cover" 
                    alt="Cosmetics"
                />
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <FlaskConical className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">КОЗМЕТИКА</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    МАСЛА, АЛКОХОЛИ И РАЗТВОРИТЕЛИ
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">Производството на козметика включва етерични масла и алкохоли, които атакуват стандартните смоли. Търси се фарма-хигиена и представителен вид за инспекции.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX CHEM предлага минерална матрица, която не набъбва при контакт с флуиди. ARMOR гарантира стабилност, а HYDRO защитава зони с мокро почистване. Повърхността остава визуално чиста.</p>
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
                    src="/GEONYX-AGGRESSIVE-CLEANERS.webp" 
                    onError={(e) => { e.currentTarget.src = "/GEONYX-clean-room-detail3.jpeg" }}
                    className="absolute inset-0 w-full h-full object-cover" 
                    alt="Hygiene Products"
                />
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><SprayCan className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">ХИГИЕННИ ПРОДУКТИ</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    АГРЕСИВНИ ПОЧИСТВАЩИ ПРЕПАРАТИ
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">При производство на детергенти концентрираните компоненти са силно агресивни. Разливи и промивки могат бързо да унищожат обикновен бетон.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX CHEM е разработен за устойчивост към силни основи и киселини. ARMOR дава якост за тежки съдове, а HYDRO защитава от проникване. Под, който издържа на собствените ви продукти.</p>
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
                    src="/GEONYX-CLEAN-ZONES-AND-PHARMA-PROCESSES.webp" 
                    onError={(e) => { e.currentTarget.src = "/GEONYX-clean-room.jpeg" }}
                    className="absolute inset-0 w-full h-full object-cover" 
                    alt="Pharma and Cannabis"
                />
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <Pill className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">ФАРМА И КАНАБИС</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    ЧИСТИ ЗОНИ И ФАРМА ПРОЦЕСИ
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">В чисти помещения и фарма производства подът трябва да е гладък, без фуги и лесен за валидиране. Всяка пукнатина е риск за контаминация.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX CHEM + HYDRO осигуряват безфугова повърхност със съвместимост към фарма-дезинфектанти. ARMOR дава стабилност за оборудване. Детайлите се изпълняват по фарма логика – радиуси, без „джобове“.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: CHEM
                    </div>
                </div>
            </div>
        </section>

        {/* Block 8 */}
        <section className="flex flex-col lg:flex-row-reverse w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-BUTCHER-AND-FISH-STANDS.webp" 
                    onError={(e) => { e.currentTarget.src = "/GEONYX-urban-furniture.jpeg" }}
                    className="absolute inset-0 w-full h-full object-cover" 
                    alt="Supermarkets"
                />
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><ShoppingCart className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">СУПЕРМАРКЕТИ</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    ТРАНЖОРНИ И РИБНИ ЩАНДОВЕ
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">В транжорните на супермаркети има вода, кръв, мазнини и трафик. Фугите на плочките потъмняват и се пълнят с био-филм, а хлъзгането е риск.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX CHEM заменя плочките с монолитна минерална система – без фуги, с противохлъзгане. ARMOR поема трафика от палетни подемници, а REPAIR позволява бързи ремонти.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: CHEM
                    </div>
                </div>
            </div>
        </section>

        {/* Block 9 */}
        <section className="flex flex-col lg:flex-row w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-SCHOOL-AND-HOSPITAL-KITCHENS.webp" 
                    onError={(e) => { e.currentTarget.src = "/GEONYX-marine-water-treatment.jpeg" }}
                    className="absolute inset-0 w-full h-full object-cover" 
                    alt="Public Kitchens"
                />
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <Utensils className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">ОБЩЕСТВЕНО ХРАНЕНЕ</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    УЧИЛИЩНИ И БОЛНИЧНИ КУХНИ
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">В обществените кухни има влага, гореща вода и мазнини. Плочките и стандартните бои бързо се компрометират и стават трудни за почистване.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX CHEM + HYDRO предлага нехлъзгаща и лесна за почистване повърхност. ARMOR осигурява устойчивост на колички, а REPAIR позволява ремонти по време на ваканции.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: HYDRO
                    </div>
                </div>
            </div>
        </section>

        {/* Block 10 */}
        <section className="flex flex-col lg:flex-row-reverse w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-REFRIGERATION-AND-SHOCK-CHAMBERS.webp" 
                    onError={(e) => { e.currentTarget.src = "/GEONYX-parking-water.jpeg" }}
                    className="absolute inset-0 w-full h-full object-cover" 
                    alt="Cold Storage"
                />
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><Snowflake className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">ХЛАДИЛНИ ЗОНИ</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    ХЛАДИЛНИ И ШОКОВИ КАМЕРИ
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">В камерите (-25°C) фугите замръзват и се рушат от трафика. Ремонтите са трудни при ниски температури.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX ARMOR + HYDRO предлага монолитна система, устойчива на термичен шок. REPAIR позволява намеси в кратки прозорци.</p>
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
                              <th className="p-4 text-gray-500 font-bold uppercase tracking-wider text-xs border-b border-r border-[#333] w-1/4">Керамични плочки</th>
                              <th className="p-4 text-gray-500 font-bold uppercase tracking-wider text-xs border-b border-[#333] w-1/4">Епоксидна / PU настилка</th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-[#333] text-sm">
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">Хигиена и почистване на фуги</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> Без фуги / лесно промиване</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">Много фуги, трудни за почистване</td>
                              <td className="p-4 text-gray-500">Фуги и преходи, рискови при лющене</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">Устойчивост на гореща вода и пара</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> Висока (минерална, термоустойчива)</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">Средна (фугите се компрометират)</td>
                              <td className="p-4 text-gray-500">Средна до ниска (рискове от мехури)</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">Устойчивост на агресивни препарати</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> Висока (по CHEM конфигурация)</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">Средна (фугите страдат)</td>
                              <td className="p-4 text-gray-500">Ограничена</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">Риск от подхлъзване в мокър режим</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> Контролирано противохлъзгане</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">Варира</td>
                              <td className="p-4 text-gray-500">Висок риск при износване</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">Жизнен цикъл при 24/7 производство</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> Дълъг, с локален REPAIR</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">Среден, периодична подмяна</td>
                              <td className="p-4 text-gray-500">Среден</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </section>

      {/* NEW SECTION 5: APPLICATIONS GRID */}
      <section id="applications" className="relative py-20 border-b border-[#222]">
          <div className="absolute inset-0 z-0">
             <SafeImage 
               src="/GEONYX-Calculator.webp" 
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
                      <h3 className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">ПРИЛОЖЕНИЯ</h3>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase">КЪДЕ СЕ ИЗПОЛЗВА</h2>
                  <p className="text-gray-300 mt-4 max-w-2xl mx-auto font-bold">Всички типични „хале + машини + трафик + палети“ сценарии – от логистични центрове и заводи до железопътни депа и центрове за данни.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                      { title: "Млекопреработка и мандри", desc: "Химическа и млечна киселина, вода и хигиена.", icon: Droplets },
                      { title: "Месопреработка и кланици", desc: "Кръв, мазнини, топла вода и тежко почистване.", icon: Beef },
                      { title: "Производство на напитки", desc: "Захар, сиропи, стъкло и CIP системи.", icon: Beer },
                      { title: "Хлебозаводи и пекарни", desc: "Брашно, топлина от пещи и механичен трафик.", icon: Wheat },
                      { title: "Фармация и Clean Rooms", desc: "Стерилни среди, лесно почистване и дезинфекция.", icon: Pill },
                      { title: "Обществени кухни", desc: "Интензивно готвене, мазнини и безопасност.", icon: Utensils },
                      { title: "Хладилни складове", desc: "Ниски температури и устойчивост на замръзване.", icon: Snowflake },
                      { title: "Супермаркети", desc: "Зони за прясна храна и интензивен клиентопоток.", icon: ShoppingCart },
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

      {/* NEW SECTION 6: SYSTEM SELECTION */}
      <section id="system-selection" className="py-20 bg-[#111] border-b border-[#222]">
          <div className="container mx-auto px-6 md:px-10">
              <div className="text-center mb-16">
                  <div className="flex items-center justify-center gap-3 mb-4">
                      <div className="h-[2px] w-8 bg-geo-yellow"></div>
                      <h3 className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">ТЕХНОЛОГИЯ</h3>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase">ИЗБОР НА СИСТЕМА GEONYX</h2>
                  <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Подборът на система зависи от комбинацията между механично натоварване, химична агресия и изисквания за температура, ESD и хигиена. GEONYX конфигурира решенията по зони – вместо „едно покритие за всички“.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                      { name: "GEONYX CHEM", desc: "Химически устойчиви системи за зони с агресивни киселини, основи и почистващи препарати." },
                      { name: "GEONYX HYDRO", desc: "Водоплътни и лесни за почистване системи за мокри производства и миялни." },
                      { name: "GEONYX ARMOR", desc: "Високоякостни настилки за складови и логистични зони с интензивен трафик." },
                      { name: "GEONYX THERM", desc: "Термоустойчиви системи за зони с пещи, шоково замразяване и пара." },
                      { name: "GEONYX REPAIR", desc: "Бързи ремонтни разтвори за възстановяване на компрометирани участъци." },
                  ].map((sys, idx) => (
                      <div key={idx} className="bg-[#1a1a1a] p-8 border border-[#222] border-t-4 border-t-geo-yellow hover:bg-[#222] transition-colors h-full group">
                          <h4 className="text-white font-black uppercase text-lg mb-3 group-hover:text-geo-yellow transition-colors">{sys.name}</h4>
                          <p className="text-gray-400 text-sm leading-relaxed">{sys.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 9. OFFER PACKAGE */}
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
                          За хранителни, фарма и хигиенни обекти GEONYX подготвя пълен пакет за вътрешно одобрение и одитиращи организации.
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
                              "Зониране по хигиенен риск",
                              "Технически спецификации за системите по зони",
                              "Съвместимост с HACCP, IFS, BRC, GMP",
                              "Детайли за фуги, сифони и преходи",
                              "Препоръчителен график за изпълнение",
                              "Гаранционни условия и инструкции за почистване"
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

      {/* 10. DOCUMENTATION */}
      <section id="specs" className="py-20 bg-black border-b border-[#222]">
          <div className="container mx-auto px-6 md:px-10">
              <h3 className="text-2xl font-black text-white uppercase mb-12 border-l-4 border-geo-yellow pl-4">Документация</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <button className="w-full flex items-center justify-between p-6 bg-[#111] border border-[#333] hover:border-geo-yellow group transition-all">
                      <div className="flex items-center gap-4">
                          <FileText className="text-gray-400 group-hover:text-geo-yellow w-8 h-8" />
                          <div className="text-left">
                              <span className="text-white font-bold block uppercase text-sm">Hygienic Floors Guide</span>
                              <span className="text-gray-500 text-xs">Подови системи (PDF)</span>
                          </div>
                      </div>
                      <Download className="text-gray-500 group-hover:text-white" />
                  </button>
                  <button className="w-full flex items-center justify-between p-6 bg-[#111] border border-[#333] hover:border-geo-yellow group transition-all">
                      <div className="flex items-center gap-4">
                          <FileText className="text-gray-400 group-hover:text-geo-yellow w-8 h-8" />
                          <div className="text-left">
                              <span className="text-white font-bold block uppercase text-sm">Wet Food Zones Design</span>
                              <span className="text-gray-500 text-xs">Проектиране (PDF)</span>
                          </div>
                      </div>
                      <Download className="text-gray-500 group-hover:text-white" />
                  </button>
                  <button className="w-full flex items-center justify-between p-6 bg-[#111] border border-[#333] hover:border-geo-yellow group transition-all">
                      <div className="flex items-center gap-4">
                          <FileText className="text-gray-400 group-hover:text-geo-yellow w-8 h-8" />
                          <div className="text-left">
                              <span className="text-white font-bold block uppercase text-sm">Cosmetics & Pharma Spec</span>
                              <span className="text-gray-500 text-xs">Технически изисквания (PDF)</span>
                          </div>
                      </div>
                      <Download className="text-gray-500 group-hover:text-white" />
                  </button>
                  <button className="w-full flex items-center justify-between p-6 bg-[#111] border border-[#333] hover:border-geo-yellow group transition-all">
                      <div className="flex items-center gap-4">
                          <FileText className="text-gray-400 group-hover:text-geo-yellow w-8 h-8" />
                          <div className="text-left">
                              <span className="text-white font-bold block uppercase text-sm">Public Kitchens Manual</span>
                              <span className="text-gray-500 text-xs">Насоки за кухни (PDF)</span>
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
                  <div className="bg-[#111] p-6 border-l-4 border-gray-700 hover:border-geo-yellow transition-colors shadow-xl group">
                      <div className="flex gap-4">
                          <HelpCircle className="text-gray-500 group-hover:text-geo-yellow flex-shrink-0 transition-colors" />
                          <div>
                              <h4 className="text-white font-bold uppercase mb-2 group-hover:text-geo-yellow transition-colors">СЪВМЕСТИМИ ЛИ СА СИСТЕМИТЕ GEONYX С НАШИТЕ ПОЧИСТВАЩИ И ДЕЗИНФЕКТИРАЩИ ПРЕПАРАТИ?</h4>
                              <p className="text-gray-400 text-sm">Да. В етапа на одит събираме списък с използваните химикали и концентрати и подбираме CHEM конфигурация, която да ги понася дългосрочно.</p>
                          </div>
                      </div>
                  </div>

                  <div className="bg-[#111] p-6 border-l-4 border-gray-700 hover:border-geo-yellow transition-colors shadow-xl group">
                      <div className="flex gap-4">
                          <HelpCircle className="text-gray-500 group-hover:text-geo-yellow flex-shrink-0 transition-colors" />
                          <div>
                              <h4 className="text-white font-bold uppercase mb-2 group-hover:text-geo-yellow transition-colors">МОЖЕ ЛИ ДА СЕ ИЗПЪЛНИ РЕМОНТ БЕЗ ДА СПИРА ЦЯЛОТО ПРОИЗВОДСТВО?</h4>
                              <p className="text-gray-400 text-sm">В повечето случаи – да. Работим поетапно, зона по зона, с нощни и уикенд прозорци.</p>
                          </div>
                      </div>
                  </div>

                  <div className="bg-[#111] p-6 border-l-4 border-gray-700 hover:border-geo-yellow transition-colors shadow-xl group">
                      <div className="flex gap-4">
                          <HelpCircle className="text-gray-500 group-hover:text-geo-yellow flex-shrink-0 transition-colors" />
                          <div>
                              <h4 className="text-white font-bold uppercase mb-2 group-hover:text-geo-yellow transition-colors">КАКВО ПРОТИВОХЛЪЗГАНЕ МОЖЕМ ДА ОЧАКВАМЕ ПРИ МОКЪР РЕЖИМ?</h4>
                              <p className="text-gray-400 text-sm">Текстурата и класът на противохлъзгане се задават още в проекта, според вида на процесите и изискванията за безопасност.</p>
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


import React, { useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Button } from './Button';
import { 
  Droplets, Anchor, Ship, Waves, Activity, ShieldCheck, 
  FileText, ArrowRight, Download, HelpCircle, CheckCircle, 
  Copy, Check, MousePointer2, Construction, Gauge, GlassWater,
  Factory, AlertTriangle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { SafeImage } from './SafeImage';

export const WaterMarinePage: React.FC = () => {
  const navigate = useNavigate();
  const [copySuccess, setCopySuccess] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "GEONYX | Вода, отпадъчни води и морска инфраструктура – Хидро и антикорозионна защита";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', "GEONYX разработва минерални защитни системи за питейна вода, пречиствателни станции (WWTP), канализация, резервоари, язовири и морска инфраструктура – устойчиви на хидростатично налягане, хлориди, кавитация и биогенна корозия. Дълготрайна защита на бетон в агресивна водна среда.");
    }
  }, []);

  const handleCopyTender = () => {
    const text = "Хидротехническите съоръжения и повърхности в контакт с вода (питейна, отпадна или морска) да бъдат защитени с минерални геополимерни системи тип GEONYX или еквивалент. Системата трябва да осигурява водоплътност (W20), устойчивост на позитивно и негативно налягане, сулфатоустойчивост и (където е приложимо) сертификат за контакт с питейна вода или устойчивост на хлориди за морска среда.";
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
            src="/GEONYX-WATERTIGHTNESS-UNDER-PRESSURE.webp" 
            className="w-full h-full object-cover opacity-60" 
            onError={(e) => { e.currentTarget.src = "/GEONYX-WATERTIGHTNESS-UNDER-PRESSURE.webp" }}
            alt="Water Infrastructure"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-20 text-left">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-end">
                
                {/* LEFT COLUMN */}
                <div className="lg:w-2/3 text-left">
                    {/* Header Label */}
                    <div className="flex items-center justify-start gap-3 mb-8 page-animate-tag">
                        <div className="h-[2px] w-12 bg-geo-yellow shadow-[0_0_15px_#FFCC00]"></div>
                        <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">ВОДА, ОТПАДЪЧНИ ВОДИ И МОРСКА ИНФРАСТРУКТУРА</span>
                    </div>
                    
                    {/* H1 Title */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 uppercase tracking-tighter drop-shadow-2xl mix-blend-difference page-animate-title">
                        ВОДОПЛЪТНОСТ <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-geo-yellow to-yellow-600">ПОД НАЛЯГАНЕ</span>
                    </h1>
                    
                    {/* Description Box */}
                    <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light max-w-4xl leading-relaxed border-l-4 border-geo-yellow pl-6 py-2 bg-black/30 backdrop-blur-sm page-animate-desc">
                        Защита на бетона от ерозия, карбонизация и хлоридна атака. Решения за язовири, пречиствателни станции и пристанища, изпълними дори под вода.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 page-animate-buttons">
                        <a href="#specs">
                            <Button 
                                variant="primary" 
                                className="h-12 px-6 text-sm font-bold bg-geo-yellow text-black border-none hover:bg-white transition-all shadow-[0_0_20px_rgba(255,204,0,0.15)] rounded-none uppercase tracking-wider flex items-center gap-2"
                            >
                                ИЗТЕГЛИ ХИДРО КАТАЛОГ <FileText className="w-4 h-4" />
                            </Button>
                        </a>
                        <Link to="/request-inspection">
                            <button className="h-12 px-6 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase">
                                ЗАЯВИ ОГЛЕД НА ОБЕКТ <ArrowRight className="w-4 h-4" />
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
                                    <span className="border-l-2 border-geo-yellow pl-2">Пречиствателни станции за отпадъчни води (WWTP)</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Помпени станции и канални помпени станции</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Резервоари за питейна вода и чисти водни камери</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Язовирни стени, преливници и основни изпускатели</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Напорни водопроводи, тунели и шахти под налягане</span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className="border-l-2 border-geo-yellow pl-2">Канали, колектори и ревизионни шахти за отпадъчни води</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Утаители, аерационни басейни и биобасейни</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Пристанища, кейове и брегоукрепителни съоръжения</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Сухи докове, корабни докове и докови камери</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Морски и речни шлюзове, корабни канали и хидротехнически галерии</span>
                                </div>
                            </div>
                        </div>

                        <div className="h-px w-full bg-white/10 mb-6"></div>

                        <div className="mb-6">
                            <span className="text-gray-500 font-bold uppercase text-[10px] tracking-widest block mb-3">СИСТЕМИ:</span>
                            <div className="flex flex-wrap gap-2">
                                {['HYDRO', 'CHEM', 'ARMOR', 'REPAIR'].map((sys, i) => (
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
                ВОДАТА Е НАЙ-УПОРИТИЯТ <br/> 
                <span className="text-geo-yellow">РАЗРУШИТЕЛ.</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
                Налягане, кавитация, хлориди, сулфати и замръзване атакуват бетонната инфраструктура денонощно. GEONYX предлага хидротехнически геополимери, които създават водоплътна бариера (W20), спират корозията на арматурата и издържат на агресивни води. От резервоари за питейна вода до пречиствателни станции и морски кейове.
            </p>
        </div>
      </section>

      {/* 3. ZIG-ZAG SOLUTIONS */}
      <div className="w-full bg-[#0b0c10]">
        
        {/* Block 1 */}
        <section className="flex flex-col lg:flex-row w-full min-h-[600px] border-y border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-BIOGENIC-CORROSION-AND-SULPHATES.webp" 
                    onError={(e) => { e.currentTarget.src = "/GEONYX-marine-water-treatment.jpeg" }}
                    className="absolute inset-0 w-full h-full object-cover" 
                    alt="Water Treatment Plant"
                />
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <Waves className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">ПРЕЧИСТВАТЕЛНИ СТАНЦИИ</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    БИОГЕННА КОРОЗИЯ И СУЛФАТИ
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">В пречиствателните станции за отпадъчни води (WWTP) сероводородът се превръща в сярна киселина от бактериите (биогенна корозия). Тя разяжда бетона, оголва арматурата и води до структурни аварии.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX HYDRO + CHEM създават защитен слой с висока сулфатоустойчивост и имунитет към киселини (pH 1-14). Гладката повърхност подобрява хидравликата и предотвратява натрупването на утайки.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: HYDRO, CHEM
                    </div>
                </div>
            </div>
        </section>

        {/* Block 2 */}
        <section className="flex flex-col lg:flex-row-reverse w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-HYDROSTATIC-PRESSURE-AND-FREEZING.webp" 
                    onError={(e) => { e.currentTarget.src = "/GEONYX-marine-dam.jpeg" }}
                    className="absolute inset-0 w-full h-full object-cover" 
                    alt="Dam Wall"
                />
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><Gauge className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">ЯЗОВИРНИ СТЕНИ</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    ХИДРОСТАТИЧНО НАЛЯГАНЕ И ЗАМРЪЗВАНЕ
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">Язовирните стени и преливниците са подложени на огромно водно налягане, цикли на замръзване/размразяване и абразия от водата. Пукнатини и течове могат да компрометират стабилността на стената.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX HYDRO осигурява водоплътност при високо налягане (W20) и устойчивост на замръзване (XF4). Системата може да се нанася и втвърдява под вода, което позволява ремонти без източване на водоема.</p>
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
                    src="/GEONYX-SALT-WAVES-AND-CHLORIDE-CORROSION.webp" 
                    onError={(e) => { e.currentTarget.src = "/GEONYX-marine-port.jpeg" }}
                    className="absolute inset-0 w-full h-full object-cover" 
                    alt="Marine Port"
                />
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <Ship className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">МОРСКА СРЕДА</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    СОЛ, ВЪЛНИ И ХЛОРИДНА КОРОЗИЯ
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">В пристанища и кейове морската вода вкарва хлориди в бетона, които достигат до арматурата и предизвикват корозия (раздуване). Вълните и приливите създават механично износване.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX HYDRO създава плътна бариера, спираща миграцията на хлориди към арматурата. Системата е устойчива на солена вода и механичен удар от кораби и отломки.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: HYDRO
                    </div>
                </div>
            </div>
        </section>

        {/* Block 4 */}
        <section className="flex flex-col lg:flex-row-reverse w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-DRINKING=WATER-TANKS.webp" 
                    onError={(e) => { e.currentTarget.src = "/GEONYX-marine-water-treatment.jpeg" }}
                    className="absolute inset-0 w-full h-full object-cover" 
                    alt="Drinking Water"
                />
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><GlassWater className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">ПИТЕЙНА ВОДА</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    РЕЗЕРВОАРИ ЗА ПИТЕЙНА ВОДА И БЕЗОПАСНОСТ
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">Резервоарите за питейна вода трябва да са идеално гладки, за да не задържат бактерии, и абсолютно инертни. Старият бетон става грапав и просмуква.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX HYDRO е сертифицирана за контакт с питейна вода. Минералната матрица не съдържа разтворители и токсини. Повърхността е гладка, лесна за почистване и предотвратява развитието на микроорганизми.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: HYDRO
                    </div>
                </div>
            </div>
        </section>

        {/* Block 5: Sewerage */}
        <section className="flex flex-col lg:flex-row w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-SEWERAGE-AND-COLLECTORS.webp" 
                    onError={(e) => { e.currentTarget.src = "/GEONYX-subway.jpeg" }}
                    className="absolute inset-0 w-full h-full object-cover" 
                    alt="Sewerage"
                />
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <AlertTriangle className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">КАНАЛИЗАЦИЯ</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    КАНАЛИЗАЦИЯ И КОЛЕКТОРИ
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">Каналите и колекторите са подложени на агресивна среда от отпадни води, пясък и биогенна сярна киселина, която разяжда бетона в горната част на тръбата.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX CHEM осигурява защита срещу киселинна атака, а HYDRO гарантира водоплътност на сглобките и ревизионните шахти. Системата е устойчива на абразия от носените твърди частици.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: CHEM, HYDRO
                    </div>
                </div>
            </div>
        </section>

        {/* Block 6: Aquaparks */}
        <section className="flex flex-col lg:flex-row-reverse w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-WATER-PARKS-AND-SWIMMING-POOLS.webp" 
                    onError={(e) => { e.currentTarget.src = "/GEONYX-marine-pool.jpeg" }}
                    className="absolute inset-0 w-full h-full object-cover" 
                    alt="Aquaparks"
                />
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><Waves className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">АКВАПАРКОВЕ</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    АКВАПАРКОВЕ И БАСЕЙНИ
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">Хлор, озон и постоянна влага атакуват фугите на плочките. Хидроизолацията под тях често компрометира, което води до течове и скъпи ремонти.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX HYDRO е безфугова, монолитна система, която служи едновременно като хидроизолация и финишно покритие с естетична визия и противохлъзгане. Устойчива е на UV и басейна химия.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: HYDRO
                    </div>
                </div>
            </div>
        </section>

        {/* Block 7: Industrial Cooling */}
        <section className="flex flex-col lg:flex-row w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-INDUSTRIAL-COOLING-TOWERS.webp" 
                    onError={(e) => { e.currentTarget.src = "/GEONYX-chemical-plant.jpeg" }}
                    className="absolute inset-0 w-full h-full object-cover" 
                    alt="Industrial Cooling"
                />
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <Factory className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">ИНДУСТРИАЛНИ ВОДИ</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    ИНДУСТРИАЛНИ ОХЛАДИТЕЛНИ КУЛИ
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">Процесна вода с химикали, висока температура и постоянно мокрене разрушават бетона на охладителните кули и резервоарите за технологични води.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX THERM + CHEM осигуряват устойчивост на температурни разлики и химически добавки във водата. Системата предпазва арматурата от корозия и удължава живота на съоръжението.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: CHEM, THERM
                    </div>
                </div>
            </div>
        </section>

        {/* Block 8: Coastal Protection */}
        <section className="flex flex-col lg:flex-row-reverse w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-COASTAL-REINFORCEMENT-AND-BREAKWATERS.webp" 
                    onError={(e) => { e.currentTarget.src = "/GEONYX-marine-port.jpeg" }}
                    className="absolute inset-0 w-full h-full object-cover" 
                    alt="Coastal Protection"
                />
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><Anchor className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">БРЕГОУКРЕПВАНЕ</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    БРЕГОУКРЕПВАНЕ И ВЪЛНОЛОМИ
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">Ерозия от вълни, сол и механичен удар от плаващи предмети разрушават брегоукрепителните съоръжения. Стандартният бетон се износва бързо в зоната на прилива.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">Високоякостни разтвори GEONYX ARMOR (Marine) за възстановяване на геометрията и защита от абразията на вълните. Устойчиви на сулфати и хлориди.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: ARMOR, HYDRO
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
                              <th className="p-4 text-gray-500 font-bold uppercase tracking-wider text-xs border-b border-r border-[#333] w-1/4">Стандартен бетон / мазилка</th>
                              <th className="p-4 text-gray-500 font-bold uppercase tracking-wider text-xs border-b border-[#333] w-1/4">Битумно / полимерно покритие</th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-[#333] text-sm">
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">Водоплътност (DIN 1048)</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> Клас W20, 0 mm пробив при 5 Bar</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">Висока пропускливост при налягане</td>
                              <td className="p-4 text-gray-500">Частична защита, риск от микропробиви</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">Устойчивост на негативно налягане</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> Монолитна връзка, без деламинация</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">Не е проектиран за противоналягане</td>
                              <td className="p-4 text-gray-500">Висок риск от отлепване и мехури</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">Подводно полагане</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> Възможно, с водолази и локални ремонти</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">Не се прилага</td>
                              <td className="p-4 text-gray-500">Обикновено невъзможно, изисква суха повърхност</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">Жизнен цикъл в хидротехника</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> ≥ 20 години при правилна поддръжка</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">Чести ремонти и инжектиране</td>
                              <td className="p-4 text-gray-500">5–10 години до сериозна рехабилитация</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">Влияние върху NRW и загуби</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> Значително намаляване на течове</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">Без реален контрол върху загубите</td>
                              <td className="p-4 text-gray-500">Ограничен ефект, кратък хоризонт</td>
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
               alt="Marine Applications"
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
                  <p className="text-gray-300 mt-4 max-w-2xl mx-auto font-bold">От индустриални пречиствателни станции до морски фарове и резервоари за питейна вода.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                      { title: "Пречиствателни станции (ПСОВ)", desc: "Басейни за аерация, утайници, канали и помпени станции.", icon: Activity },
                      { title: "Питейна вода и резервоари", desc: "Водоеми, кули, резервоари и разпределителни шахти.", icon: GlassWater },
                      { title: "Язовирни стени и ВЕЦ", desc: "Преливници, напорни тръбопроводи, шлюзове и водни кули.", icon: Gauge },
                      { title: "Пристанища и кейове", desc: "Кейови стени, пилони, вълноломи и докове.", icon: Ship },
                      { title: "Канализация и колектори", desc: "Главни колектори, ревизионни шахти и отводнителни канали.", icon: Droplets },
                      { title: "Аквапаркове и басейни", desc: "Плувни басейни, водни пързалки и зони около тях.", icon: Waves },
                      { title: "Морска защита", desc: "Брегоукрепителни съоръжения, фарове и морски платформи.", icon: Anchor },
                      { title: "Индустриални води", desc: "Охладителни кули, резервоари за процесна вода и неутрализатори.", icon: Factory },
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

      {/* 6. PROJECT WORKFLOW */}
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
                      { step: "01", title: "Хидротехнически одит", desc: "Оглед на съоръжението, измерване на карбонизация, хлориди и якост на бетона. Подводна инспекция при нужда." },
                      { step: "02", title: "Проект за защита", desc: "Избор на система GEONYX HYDRO според агресивността на водата, налягането и механичните натоварвания." },
                      { step: "03", title: "Подготовка на основата", desc: "Хидробластиране (2500 bar) за отстраняване на компрометиран бетон и почистване на арматурата." },
                      { step: "04", title: "Възстановяване на геометрията", desc: "Репрофилиране на обрушени участъци с високоякостни геополимерни разтвори (R4)." },
                      { step: "05", title: "Нанасяне на защитна система", desc: "Полагане на GEONYX HYDRO мембрана – ръчно или машинно (торкрет), включително под вода." },
                      { step: "06", title: "Контрол и пускане в експлоатация", desc: "Тестове за адхезия и водоплътност. Издаване на сертификати и гаранция." },
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

      {/* 9. OFFER PACKAGE (WITH BG) - BRIGHTENED */}
      <section id="offer-package" className="relative py-24 border-b border-[#222]">
          {/* Background */}
           <div className="absolute inset-0 z-0">
             <SafeImage 
               src="/GEONYX-B2B-B2G.webp" 
               className="w-full h-full object-cover opacity-60" 
               onError={(e) => { e.currentTarget.src = "/GEONYX-Calculator.webp" }}
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
                          За ВиК дружества, общини и индустриални оператори GEONYX подготвя пълен пакет документи за търгове и директно възлагане.
                      </p>
                      <div className="p-6 bg-[#141414] border border-[#333] border-l-4 border-l-geo-yellow">
                          <p className="text-white font-bold text-sm uppercase mb-2">ГАРАНЦИЯ ЗА КАЧЕСТВО</p>
                          <p className="text-gray-500 text-xs">Всички документи са съобразени с EN 1504 и националните норми.</p>
                      </div>
                  </div>

                  {/* Right Grid */}
                  <div className="lg:w-2/3 w-full">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                              "Техническа спецификация за хидроизолация и защита на бетон",
                              "Детайли за обработка на фуги, преминавания и пукнатини",
                              "Проект за организация на работата (вкл. подводни работи)",
                              "Сертификати за материалите (EN 1504-2, питейна вода)",
                              "Количествено-стойностна сметка (КСС)",
                              "Гаранционни условия и план за експлоатация"
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

      {/* 7. SYSTEM SELECTION */}
      <section id="system-selection" className="py-20 bg-[#111] border-b border-[#222]">
          <div className="container mx-auto px-6 md:px-10">
              <div className="text-center mb-16">
                  <div className="flex items-center justify-center gap-3 mb-4">
                      <div className="h-[2px] w-8 bg-geo-yellow"></div>
                      <h3 className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">ТЕХНОЛОГИЯ</h3>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase">ИЗБОР НА СИСТЕМА GEONYX</h2>
                  <p className="text-gray-500 mt-4 max-w-2xl mx-auto">За хидротехнически съоръжения GEONYX комбинира HYDRO, CHEM, ARMOR и REPAIR според типа вода, налягането и агресивността на средата.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                      { name: "GEONYX HYDRO", desc: "Специализирани системи за водоплътност (W20), устойчиви на позитивно и негативно хидростатично налягане." },
                      { name: "GEONYX CHEM", desc: "Минерална защита срещу биогенна корозия, сулфати и киселини в пречиствателни станции и канализация." },
                      { name: "GEONYX ARMOR", desc: "Високоякостни решения за зони с кавитация, абразия и механичен удар в преливници и пристанища." },
                      { name: "GEONYX REPAIR", desc: "Геополимерни разтвори за конструктивно възстановяване на обрушен бетон и корозирала арматура." },
                      { name: "GEONYX PURE", desc: "Сертифицирани системи за контакт с питейна вода, предотвратяващи развитието на микроорганизми." },
                  ].map((sys, idx) => (
                      <div key={idx} className="bg-[#1a1a1a] p-8 border border-[#222] border-t-4 border-t-geo-yellow hover:bg-[#222] transition-colors h-full group">
                          <h4 className="text-white font-black uppercase text-lg mb-3 group-hover:text-geo-yellow transition-colors">{sys.name}</h4>
                          <p className="text-gray-400 text-sm leading-relaxed">{sys.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 8. DOCUMENTATION */}
      <section id="specs" className="py-20 bg-black border-b border-[#222]">
          <div className="container mx-auto px-6 md:px-10">
              <h3 className="text-2xl font-black text-white uppercase mb-12 border-l-4 border-geo-yellow pl-4">Документация</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <button className="w-full flex items-center justify-between p-6 bg-[#111] border border-[#333] hover:border-geo-yellow group transition-all">
                      <div className="flex items-center gap-4">
                          <FileText className="text-gray-400 group-hover:text-geo-yellow w-8 h-8" />
                          <div className="text-left">
                              <span className="text-white font-bold block uppercase text-sm">Water & WWTP</span>
                              <span className="text-gray-500 text-xs">GEONYX системи (PDF)</span>
                          </div>
                      </div>
                      <Download className="text-gray-500 group-hover:text-white" />
                  </button>
                  <button className="w-full flex items-center justify-between p-6 bg-[#111] border border-[#333] hover:border-geo-yellow group transition-all">
                      <div className="flex items-center gap-4">
                          <FileText className="text-gray-400 group-hover:text-geo-yellow w-8 h-8" />
                          <div className="text-left">
                              <span className="text-white font-bold block uppercase text-sm">Marine & Coastal</span>
                              <span className="text-gray-500 text-xs">Защитни решения (PDF)</span>
                          </div>
                      </div>
                      <Download className="text-gray-500 group-hover:text-white" />
                  </button>
                  <button className="w-full flex items-center justify-between p-6 bg-[#111] border border-[#333] hover:border-geo-yellow group transition-all">
                      <div className="flex items-center gap-4">
                          <FileText className="text-gray-400 group-hover:text-geo-yellow w-8 h-8" />
                          <div className="text-left">
                              <span className="text-white font-bold block uppercase text-sm">Drinking Water</span>
                              <span className="text-gray-500 text-xs">Сертификати (PDF)</span>
                          </div>
                      </div>
                      <Download className="text-gray-500 group-hover:text-white" />
                  </button>
                  <button className="w-full flex items-center justify-between p-6 bg-[#111] border border-[#333] hover:border-geo-yellow group transition-all">
                      <div className="flex items-center gap-4">
                          <FileText className="text-gray-400 group-hover:text-geo-yellow w-8 h-8" />
                          <div className="text-left">
                              <span className="text-white font-bold block uppercase text-sm">Technical Data</span>
                              <span className="text-gray-500 text-xs">EN 1504-2 (PDF)</span>
                          </div>
                      </div>
                      <Download className="text-gray-500 group-hover:text-white" />
                  </button>
              </div>
          </div>
      </section>

      {/* 9. FAQ SECTION */}
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
                              <h4 className="text-white font-bold uppercase mb-2 group-hover:text-geo-yellow transition-colors">МОГАТ ЛИ СИСТЕМИТЕ GEONYX ДА СЕ ПОЛАГАТ ПОД ВОДА?</h4>
                              <p className="text-gray-400 text-sm">Да, определени конфигурации на GEONYX HYDRO са проектирани за нанасяне и втвърдяване под вода от водолазни екипи, което позволява ремонт на язовирни стени и кейове без източване на водоема.</p>
                          </div>
                      </div>
                  </div>

                  <div className="bg-[#111] p-6 border-l-4 border-gray-700 hover:border-geo-yellow transition-colors shadow-xl group">
                      <div className="flex gap-4">
                          <HelpCircle className="text-gray-500 group-hover:text-geo-yellow flex-shrink-0 transition-colors" />
                          <div>
                              <h4 className="text-white font-bold uppercase mb-2 group-hover:text-geo-yellow transition-colors">БЕЗОПАСНИ ЛИ СА МАТЕРИАЛИТЕ ЗА КОНТАКТ С ПИТЕЙНА ВОДА?</h4>
                              <p className="text-gray-400 text-sm">Да, GEONYX HYDRO притежава сертификати за контакт с питейна вода. Минералната му природа не отделя токсини, не съдържа разтворители и не променя вкуса или състава на водата.</p>
                          </div>
                      </div>
                  </div>

                  <div className="bg-[#111] p-6 border-l-4 border-gray-700 hover:border-geo-yellow transition-colors shadow-xl group">
                      <div className="flex gap-4">
                          <HelpCircle className="text-gray-500 group-hover:text-geo-yellow flex-shrink-0 transition-colors" />
                          <div>
                              <h4 className="text-white font-bold uppercase mb-2 group-hover:text-geo-yellow transition-colors">КАКВА Е УСТОЙЧИВОСТТА НА МОРСКА ВОДА И ХЛОРИДИ?</h4>
                              <p className="text-gray-400 text-sm">Изключително висока. Системите са проектирани да спират дифузията на хлориди, предпазвайки арматурата от корозия дори в агресивна солена среда и зони на прилив.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 10. SYSTEM BRIDGE CTA */}
      <section className="bg-geo-yellow py-16 border-t border-black">
          <div className="container mx-auto px-6 flex flex-col items-center text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-black uppercase mb-6 tracking-tight max-w-4xl">
                  КОМПЛЕКСНО ЗОНИРАНЕ НА ОБЕКТА
              </h2>
              <p className="text-black/80 text-lg font-medium mb-8 max-w-3xl mx-auto leading-relaxed">
                  Всеки хидротехнически обект има специфични рискове. Ние интегрираме специализирани матрици в една система: от водоплътност под налягане и химическа устойчивост, до абразиоустойчивост и контакт с питейна вода. Една технология, която гарантира 100% покритие на нуждите.
              </p>
              <Link to="/systems">
                  <button className="bg-black text-white font-black uppercase py-4 px-10 hover:bg-white hover:text-black transition-all shadow-2xl tracking-widest text-sm">
                      РАЗГЛЕДАЙ ВСИЧКИ СИСТЕМИ
                  </button>
              </Link>
          </div>
      </section>

      <Footer />
    </div>
  );
};
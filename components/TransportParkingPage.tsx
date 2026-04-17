
import React, { useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Button } from './Button';
import { 
  Truck, Car, Plane, ShieldCheck, Droplets, Zap, 
  Hammer, AlertTriangle, FileText, ArrowRight, Download, 
  HelpCircle, CheckCircle, Copy, Construction, MapPin, 
  Navigation, Layers, Wrench, Check, Bus, Palette, CloudRain, Signpost, Activity, BatteryCharging
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { SafeImage } from './SafeImage';

export const TransportParkingPage: React.FC = () => {
  const navigate = useNavigate();
  const [copySuccess, setCopySuccess] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "GEONYX | Транспорт, паркинги, гаражи и движение – Индустриални настилки R12/R13";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', "GEONYX проектира безфугови минерални настилки за транспортна инфраструктура, подземни и надземни паркинги, рампи R12/R13, гаражи и зони за движение – устойчиви на гуми, сол, луга, масла, вода и интензивен трафик. Дълготрайна защита и противоплъзгаща безопасност.");
    }
  }, []);

  const handleCopyTender = () => {
    const text = "Подовите настилки в паркинги, гаражи и по рампи да бъдат изпълнени със системи за защита на повърхността на бетона съгласно БДС EN 1504-2. За междинни етажи и рампи: Система клас OS 8 (твърда, устойчива на трафик). За открити нива и зони с пукнатини: Система клас OS 11a/b (еластична, премостваща пукнатини). Системите да са устойчиви на хлориди (луга), горива и масла, с доказано сцепление и клас на реакция на огън Bfl-s1 или по-висок.";
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
            src="/GEONYX-parking-salt.webp" 
            className="w-full h-full object-cover" 
            onError={(e) => { e.currentTarget.src = "/GEONYX-parking-salt.webp" }}
            alt="Transport Infrastructure"
          />
          {/* Overlay for darkening background */}
          <div className="absolute inset-0 bg-black opacity-60 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-20 text-left">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-end">
                
                {/* LEFT COLUMN */}
                <div className="lg:w-2/3 text-left">
                    {/* Header Label */}
                    <div className="flex items-center justify-start gap-3 mb-8 page-animate-tag">
                        <div className="h-[2px] w-12 bg-geo-yellow shadow-[0_0_15px_#FFCC00]"></div>
                        <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">ТРАНСПОРТ, ПАРКИНГИ И ГАРАЖИ</span>
                    </div>
                    
                    {/* H1 Title */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 uppercase tracking-tighter drop-shadow-2xl mix-blend-difference page-animate-title">
                        ЗАЩИТА ОТ СОЛИ, <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-geo-yellow to-yellow-600">ТРАФИК И КАРБОНИЗАЦИЯ</span>
                    </h1>
                    
                    {/* Description Box */}
                    <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light max-w-4xl leading-relaxed border-l-4 border-geo-yellow pl-6 py-2 bg-black/30 backdrop-blur-sm page-animate-desc">
                        Паркингите и гаражите са „дробовете“ на града, но бетона в тях е атакуван от луга, CO₂ и интензивно триене. GEONYX предлага сертифицирани системи OS 8 и OS 11 за дълготрайна защита.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 page-animate-buttons">
                        <a href="#specs">
                            <Button 
                                variant="primary" 
                                className="h-12 px-6 text-sm font-bold bg-geo-yellow text-black border-none hover:bg-white transition-all shadow-[0_0_20px_rgba(255,204,0,0.15)] rounded-none uppercase tracking-wider flex items-center gap-2"
                            >
                                ИЗТЕГЛИ OS 8 / OS 11 КАТАЛОГ <FileText className="w-4 h-4" />
                            </Button>
                        </a>
                        <Link to="/request-inspection">
                            <button className="h-12 px-6 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase">
                                ОГЛЕД НА ПАРКИНГ <ArrowRight className="w-4 h-4" />
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
                                    <span className="border-l-2 border-geo-yellow pl-2">Многоетажни паркинги (надземни и подземни)</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Подземни гаражи в търговски центрове и офиси</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Рампи за товарене, разтоварване и достъп до гаражи</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Паркинги на търговски вериги и retail паркове</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Паркинги и маневрени зони на логистични бази</span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className="border-l-2 border-geo-yellow pl-2">Вътрешни улички и сервизни пътища в индустриални зони</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Зони за таксита, доставки и кратък престой (drop-off/pick-up)</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Автобусни гари, автогари и P+R зони</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Входни алеи и вътрешни пътища в жилищни комплекси</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Зони с интензивно спиране и завиване (рампи, кръгови, бариери)</span>
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
                ХЛОРИДИТЕ СА <br/> 
                <span className="text-geo-yellow">ТИХИЯТ УБИЕЦ НА БЕТОНА.</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
                През зимата автомобилите внасят тонове сол (луга) в паркингите. Разтворените хлориди проникват през порите на бетона, достигат арматурата и предизвикват корозия, която раздува и руши плочата отвътре. GEONYX HYDRO спира този процес чрез непроницаеми мембрани, докато ARMOR поема износването от гумите.
            </p>
        </div>
      </section>

      {/* 3. ZIG-ZAG SOLUTIONS */}
      <div className="w-full bg-[#0b0c10]">
        
        {/* Block 1: Intermediate Levels */}
        <section className="flex flex-col lg:flex-row w-full min-h-[600px] border-y border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-INTERMEDIATE-LEVELS.webp" 
                    onError={(e) => { e.currentTarget.src = "/GEONYX-INTERMEDIATE-LEVELS.webp" }}
                    className="absolute inset-0 w-full h-full object-cover" 
                    alt="Underground Parking"
                />
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <Car className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">Интензивно натоварване</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    МЕЖДИННИ НИВА И ИНТЕНЗИВЕН ТРАФИК
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">В междинните нива на паркингите няма риск от замръзване, но има изключително висока абразия от гуми и локални химически атаки (масла, горива). Бетонът започва да се праши, петната стават постоянни, а повърхността се износва неравномерно.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">Минерална система GEONYX ARMOR за твърда, механично устойчива повърхност. Запечатва бетона, намалява прахоотделянето и защитава от масла и горива, като осигурява противохлъзгане (R11/R12) и дълъг експлоатационен живот при интензивен трафик.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: ARMOR
                    </div>
                </div>
            </div>
        </section>

        {/* Block 2: Rooftop Parking */}
        <section className="flex flex-col lg:flex-row-reverse w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-OPEN-AND-COVERED=PARKING-LOTS.webp" 
                    onError={(e) => { e.currentTarget.src = "/GEONYX-parking-water.jpeg" }}
                    className="absolute inset-0 w-full h-full object-cover" 
                    alt="Rooftop Parking"
                />
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><CloudRain className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">Вода и климат</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    ОТКРИТИ И ПОКРИВНИ ПАРКИНГИ
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">На открити нива и покривни паркинги температурните амплитуди (зима/лято) водят до свиване и разширяване на плочата. Образуват се динамични пукнатини, през които вода, луга и соли проникват и разрушават бетона и армировката.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">Еластична водозащитна система GEONYX HYDRO с междинен мембранен слой, която премоства пукнатини до 0.3 мм при -20°C. Остава водоплътна при движение на основата и предпазва конструкцията от проникване на вода, соли и луга.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: HYDRO
                    </div>
                </div>
            </div>
        </section>

        {/* Block 3: Ramps */}
        <section className="flex flex-col lg:flex-row w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-RAMPS-AND-INCLINED-APPROACHES.webp" 
                    onError={(e) => { e.currentTarget.src = "/GEONYX-subway.jpeg" }}
                    className="absolute inset-0 w-full h-full object-cover" 
                    alt="Ramps"
                />
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <Activity className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">Максимално сцепление</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    РАМПИ И НАКЛОНЕНИ ПОДХОДИ
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">Рампите са най-натоварените зони – спиране, тръгване, остри завои. При дъжд, сняг или лед бетонът става хлъзгав, автомобилите буксуват, а повърхността се износва най-бързо в зоните на завой и спиране.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">Специално конфигурирана GEONYX ARMOR с усилена абразиоустойчивост и противохлъзгане клас R13. Използват се твърди минерални агрегати (корунд/базалт), които осигуряват „гума в гума“ сцепление и издържат на срязване от гуми при интензивни маневри.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: ARMOR
                    </div>
                </div>
            </div>
        </section>

        {/* Block 4: Logistics & Trucks */}
        <section className="flex flex-col lg:flex-row-reverse w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-TIR-ZONES.webp" 
                    onError={(e) => { e.currentTarget.src = "/GEONYX-heavy-hero.jpeg" }}
                    className="absolute inset-0 w-full h-full object-cover" 
                    alt="Truck Logistics"
                />
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><Truck className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">Тежкотоварен трафик</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    TIR ЗОНИ И ТОВАРНИ РАМПИ
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">В зоните за зареждане (loading docks), външните платформи и сервизните улици тежките камиони предизвикват екстремни статични натоварвания върху опорите и динамични срязващи сили при маневриране. Стандартните настилки се рушат в зоните на фугите и опорните линии.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">Тежкотоварна конфигурация GEONYX ARMOR HEAVY DUTY, проектирана за контактни напрежения над 100 MPa. Системата не се деформира под теглото на камиони и ремаркета, а фугите се армират и оформят специално за преминаване на твърди индустриални колела.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: ARMOR
                    </div>
                </div>
            </div>
        </section>

        {/* Block 5: Markings & Safety */}
        <section className="flex flex-col lg:flex-row w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-MARKING-AND-VISUAL-DESIGN.webp" 
                    onError={(e) => { e.currentTarget.src = "/GEONYX-parking-hero.jpeg" }}
                    className="absolute inset-0 w-full h-full object-cover" 
                    alt="Markings"
                />
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <Signpost className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">Навигация и безопасност</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    МАРКИРОВКА И ЗРИТЕЛНО ОФОРМЛЕНИЕ
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">В големи паркинги и транспортни хъбове липсата на дълготрайна и ясна маркировка води до хаос в движението, объркване на водачите и повишен риск от инциденти. Обикновената пътна боя се изтрива за месеци под гуми и маневри.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">Интегрирана в настилката маркировка с GEONYX ARMOR – цветно зониране, стрелки, пешеходни пътеки и обозначения се вграждат в самата система, а не са просто боя отгоре. UV-устойчиви пигменти и минерална матрица гарантират дълготрайна видимост и по-висока безопасност за пешеходци и автомобили.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: ARMOR
                    </div>
                </div>
            </div>
        </section>

        {/* Block 6: EV Zones (Added) */}
        <section className="flex flex-col lg:flex-row-reverse w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-EV-ZONES-AND-FAST-CHARGING.webp" 
                    onError={(e) => { e.currentTarget.src = "/GEONYX-energy-bess.jpeg" }}
                    className="absolute inset-0 w-full h-full object-cover" 
                    alt="EV Charging Station"
                />
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><BatteryCharging className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">ЕЛЕКТРОМОБИЛНОСТ</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    EV ЗОНИ И БЪРЗО ЗАРЕЖДАНЕ
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">EV зарядните станции концентрират тежки автомобили, температурни натоварвания от батерии, масла от поддръжка и локални химически атаки. Стандартният бетон се напуква около анкери и кабелни канали.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX ARMOR + CHEM система с висока механична якост и устойчивост на електролити и масла. Повърхността остава стабилна около анкери и оборудване, осигурявайки дълготрайна безопасност и ниска поддръжка.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: ARMOR, CHEM
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
               src="/GEONYX-Calculator.webp" 
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
                      { title: "Подземни паркинги", desc: "Молове, офис сгради и жилищни комплекси.", icon: Car },
                      { title: "Открити нива (Rooftop)", desc: "Покривни паркинги, изложени на атмосферни условия.", icon: Layers },
                      { title: "Рампи и спирали", desc: "Зони с наклон, изискващи високо сцепление.", icon: Navigation },
                      { title: "Логистични терминали", desc: "Зони за товарене и маневриране на камиони.", icon: Truck },
                      { title: "Летища и хангари", desc: "Сервизни зони, пътеки за рулиране и гаражи.", icon: Plane },
                      { title: "Мостове и виадукти", desc: "Хидроизолация и защита на пътната плоча.", icon: Construction },
                      { title: "Автосервизи", desc: "Зони с масла, горива и тежки инструменти.", icon: Wrench },
                      { title: "Тунели", desc: "Светлоотразителни и негорими покрития.", icon: ShieldCheck },
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                      { name: "GEONYX ARMOR", desc: "Твърда система за закрити паркинги, гаражи и складове. Висока устойчивост на износване и химикали." },
                      { name: "GEONYX HYDRO", desc: "Еластична система за открити паркинги и покриви. Премоства пукнатини и спира течове." },
                      { name: "GEONYX CHEM", desc: "За специализирани зони с разливи на горива, масла и акумулаторна киселина." },
                      { name: "GEONYX REPAIR", desc: "Бързи разтвори за ремонт на дупки, обрушени ръбове и фуги преди нанасяне на покритието." },
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

      {/* 9. DOCUMENTATION */}
      <section id="specs" className="py-20 bg-black border-b border-[#222]">
          <div className="container mx-auto px-6 md:px-10">
              <h3 className="text-2xl font-black text-white uppercase mb-12 border-l-4 border-geo-yellow pl-4">Документация</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <button className="w-full flex items-center justify-between p-6 bg-[#111] border border-[#333] hover:border-geo-yellow group transition-all">
                      <div className="flex items-center gap-4">
                          <FileText className="text-gray-400 group-hover:text-geo-yellow w-8 h-8" />
                          <div className="text-left">
                              <span className="text-white font-bold block uppercase text-sm">Parking Systems Guide</span>
                              <span className="text-gray-500 text-xs">OS 8 / OS 11 (PDF)</span>
                          </div>
                      </div>
                      <Download className="text-gray-500 group-hover:text-white" />
                  </button>
                  <button className="w-full flex items-center justify-between p-6 bg-[#111] border border-[#333] hover:border-geo-yellow group transition-all">
                      <div className="flex items-center gap-4">
                          <FileText className="text-gray-400 group-hover:text-geo-yellow w-8 h-8" />
                          <div className="text-left">
                              <span className="text-white font-bold block uppercase text-sm">Maintenance Manual</span>
                              <span className="text-gray-500 text-xs">Поддръжка на паркинги (PDF)</span>
                          </div>
                      </div>
                      <Download className="text-gray-500 group-hover:text-white" />
                  </button>
                  <button className="w-full flex items-center justify-between p-6 bg-[#111] border border-[#333] hover:border-geo-yellow group transition-all">
                      <div className="flex items-center gap-4">
                          <FileText className="text-gray-400 group-hover:text-geo-yellow w-8 h-8" />
                          <div className="text-left">
                              <span className="text-white font-bold block uppercase text-sm">Color Chart</span>
                              <span className="text-gray-500 text-xs">Цветове и маркировка (PDF)</span>
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
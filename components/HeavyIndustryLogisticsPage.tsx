
import React, { useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Button } from './Button';
import { 
  ArrowRight, FileText, Download, HelpCircle, CheckCircle, Copy, Check, 
  Warehouse, Activity, CircleDot, Truck, Train, Shirt, Printer, Server, 
  Factory, Hammer, Zap, Wrench, Settings, Boxes, ShieldCheck, Flame, Droplets
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { SafeImage } from './SafeImage';

export const HeavyIndustryLogisticsPage: React.FC = () => {
  const navigate = useNavigate();
  const [copySuccess, setCopySuccess] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "GEONYX | Тежка индустрия и логистика – подове за екстремни механични натоварвания";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', "Тежка индустрия и логистика с екстремни механични натоварвания, VNA алеи, мотокари, стружки, масла и горещ каучук. GEONYX ARMOR и GEONYX CHEM проектират минерални индустриални подове с дълъг експлоатационен живот, минимален престой и ниско прахоотделяне за логистични центрове, метални заводи, гигафабрики, железопътни депа и тежки сервизи.");
    }
  }, []);

  const handleCopyTender = () => {
    const text = "Подовете да бъдат изпълнени като монолитна минерална система тип GEONYX ARMOR / GEONYX CHEM, проектирана за екстремни индустриални натоварвания в логистични центрове и производствени халета. Системата трябва да осигурява експлоатационен живот минимум 20 години, висока устойчивост на абразия, удар и химична агресия, ниско прахоотделяне и възможност за локални ремонти без пълен престой на обекта.";
    navigator.clipboard.writeText(text);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] font-sans text-gray-200 overflow-x-hidden selection:bg-geo-yellow selection:text-black">
      <Navbar />

      {/* STATIC STYLES */}
      <style>{`
        @keyframes width-grow { from { width: 0; } }
        @keyframes height-grow { from { height: 0; } }
        @keyframes dash-draw { to { stroke-dashoffset: 0; } }
      `}</style>

      {/* 1. HERO SECTION - SPLIT LAYOUT */}
      <section className="relative min-h-[85vh] flex items-center justify-center border-b border-[#222] overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <SafeImage 
            src="/GEONYX-HEAVY-INDUSTRY-AND-LOGISTICS-background.webp" 
            className="w-full h-full object-cover opacity-60" 
            alt="Heavy Industry and Logistics"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-20 text-left">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-end">
                
                {/* LEFT COLUMN */}
                <div className="lg:w-2/3 text-left">
                    <div className="flex items-center justify-start gap-3 mb-8 page-animate-tag">
                        <div className="h-[2px] w-12 bg-geo-yellow shadow-[0_0_15px_#FFCC00]"></div>
                        <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">ТЕЖКА ИНДУСТРИЯ И ЛОГИСТИКА</span>
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 uppercase tracking-tighter drop-shadow-2xl mix-blend-difference page-animate-title">
                        ТЕЖКА ИНДУСТРИЯ <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-geo-yellow to-yellow-600">И ЛОГИСТИКА</span>
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-gray-300 mb-10 font-light max-w-3xl leading-relaxed border-l-4 border-geo-yellow pl-6 py-2 bg-black/30 backdrop-blur-sm page-animate-desc">
                        Подове и системи за халета, в които не спира да се работи – мотокари, VNA алеи, палети, стружки, масла и тежки мостови кранове. GEONYX проектира минерални индустриални подове за 24/7 натоварване, ниско прахоотделяне и минимален престой при ремонт.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-start gap-4 page-animate-buttons">
                        <Link to="/request-inspection">
                            <Button 
                                variant="primary" 
                                className="h-12 px-6 text-sm font-bold bg-geo-yellow text-black border-none hover:bg-white transition-all shadow-[0_0_20px_rgba(255,204,0,0.15)] rounded-none uppercase tracking-wider flex items-center gap-2"
                            >
                                ПЛАНИРАЙ ПРОЕКТ С ИНЖЕНЕР
                            </Button>
                        </Link>
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
                                    <span className="border-l-2 border-geo-yellow pl-2">Логистични центрове</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">VNA алеи</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Металообработка</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Гигафабрики</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Производство гуми</span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className="border-l-2 border-geo-yellow pl-2">Тежки сервизи</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Железопътни депа</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Текстилни фабрики</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Печатници</span>
                                    <span className="border-l-2 border-geo-yellow pl-2">Data Centers</span>
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

      {/* 2. MANIFESTO */}
      <section className="py-24 px-6 md:px-20 bg-[#111] border-b border-[#222]">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-8 leading-tight">
                В ТЕЖКАТА ИНДУСТРИЯ <br/> 
                <span className="text-geo-yellow">ПОДЪТ НЯМА ПРАВО НА ГРЕШКА.</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
                В логистични бази, заводи и депа всичко е „хале + машини + трафик + палети“. Всеки милиметър пропадане, прах или счупена фуга се превръща в реален риск – повреден товар, спряла линия, инцидент с оператор. GEONYX заменя кръпките и боята с инженерно проектирани минерални системи, които работят заедно с конструкцията – вместо да се борят с нея.
            </p>
        </div>
      </section>

      {/* 3. ZIG-ZAG SOLUTIONS */}
      <div className="w-full bg-[#0b0c10]">
        
        {/* Block 1: VNA */}
        <section className="flex flex-col lg:flex-row w-full min-h-[600px] border-y border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-VNA-ALLEYS-AND-HEAVY-TRAFFIC.webp" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80" 
                    alt="VNA Aisles"
                />
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <Warehouse className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">Логистични центрове</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    VNA АЛЕИ И ТЕЖЪК ТРАФИК
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">В логистичните центрове трафикът е концентриран в тесни VNA алеи. Всеки милиметър неравност или обрушена фуга води до вибрации на мачтата, нестабилни палети и риск за оператора и товара.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX ARMOR проектира пода като суперравна, монолитна минерална система с контролирани фуги и носимоспособност за високи динамични натоварвания. Повърхността е с ниско прахоотделяне и стабилна геометрия за високостелажни системи.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: ARMOR
                    </div>
                </div>
            </div>
        </section>

        {/* Block 2: Metal Chips */}
        <section className="flex flex-col lg:flex-row-reverse w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-METAL-SHEARS-AND-OILS.webp" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80" 
                    alt="Metal Working"
                />
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <Factory className="w-8 h-8 text-geo-yellow" />
                     <span className="text-white font-bold uppercase text-sm block">Металообработка</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    МЕТАЛНИ СТРУЖКИ И МАСЛА
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">В металообработката стружките действат като шкурка, а СОТ, емулсии и хидравлични масла пропиват бетона и го омекотяват. Полимерните покрития се режат, набъбват и се отлепват около машините.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX комбинира ARMOR за механична устойчивост и CHEM за химическа защита. Минералната матрица не се „реже“ от стружките, не омеква от масла и позволява прецизно нивелиране под CNC машини и тежки стругове.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: ARMOR
                    </div>
                </div>
            </div>
        </section>

        {/* Block 3: Gigafactory */}
        <section className="flex flex-col lg:flex-row w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-GIGAFACTORY-AND-ESD-CONTROL.webp" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80" 
                    alt="Gigafactory"
                />
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <Activity className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">Гигафабрики за батерии</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    GIGAFACTORY И ESD КОНТРОЛ
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">В гигафабриките за батерии прахът, статичното електричество и електролитите са критични рискове. Бетонният прах замърсява клетките, а неконтролираният ESD може да повреди чувствителни компоненти.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX ARMOR осигурява монолитна повърхност с минимално прахоотделяне и възможност за проводими ESD конфигурации. CHEM защитава основата от електролити и химически разливи в зоните за производство и формоване.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: CHEM
                    </div>
                </div>
            </div>
        </section>

        {/* Block 4: Tires */}
        <section className="flex flex-col lg:flex-row-reverse w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-SOOT-AND-HOT-RUBBER.webp" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80" 
                    alt="Tire Production"
                />
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <CircleDot className="w-8 h-8 text-geo-yellow" />
                     <span className="text-white font-bold uppercase text-sm block">Производство на гуми</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    САЖДИ И ГОРЕЩ КАУЧУК
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">В производството на гуми и каучук има комбинация от сажди, висока температура и пластификатори. Стандартните полимерни покрития страдат от „hot tire pickup“ – гумите „дърпат“ покритието при висока температура.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX ARMOR използва инертна минерална матрица, която не реагира с каучук и пластификатори. Подът остава стабилен при термични цикли, устойчив на абразия и лесен за почистване от сажди и черни следи.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: ARMOR
                    </div>
                </div>
            </div>
        </section>

        {/* Block 5: Heavy Service */}
        <section className="flex flex-col lg:flex-row w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-HEAVY-TRUCK-SERVICES.webp" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80" 
                    alt="Heavy Service"
                />
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <Truck className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">Тежки сервизи</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    ТЕЖКИ СЕРВИЗИ ЗА КАМИОНИ
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">В сервизите за камиони и строителна техника локалните натоварвания от крикове, стойки и ударни инструменти разбиват бетона. Масла, горива и спирачни течности допълнително отслабват повърхността.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX ARMOR проектира носещ, удароустойчив под за точкови натоварвания, а CHEM защитава от масла и химически разливи. REPAIR системите позволяват бързи локални ремонти без спиране на целия сервиз.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: REPAIR
                    </div>
                </div>
            </div>
        </section>

        {/* Block 6: Railway */}
        <section className="flex flex-col lg:flex-row-reverse w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-RAILWAY-DEPOT-AND-REPAIR-FACILITIES.webp" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80" 
                    alt="Railway Depot"
                />
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <Train className="w-8 h-8 text-geo-yellow" />
                     <span className="text-white font-bold uppercase text-sm block">ЖП инфраструктура</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    ЖЕЛЕЗОПЪТНИ ДЕПА И РЕМОНТНИ БАЗИ
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">В железопътните депа и ремонтни бази релсите, колоосите и тежките детайли концентрират огромни усилия в малка площ. Масла, грес и метални частици ускоряват разрушаването на бетона.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX ARMOR подсилва зоните около ями и релси с високоякостна минерална система, устойчива на удар и срязване. CHEM гарантира, че основата не деградира под влияние на масла и горива.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: ARMOR
                    </div>
                </div>
            </div>
        </section>

        {/* Block 7: Textile */}
        <section className="flex flex-col lg:flex-row w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-TEXTILE-AND-DYEING-SHOPPING.webp" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80" 
                    alt="Textile Factory"
                />
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <Shirt className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">Текстилни фабрики</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    ТЕКСТИЛ И БАГРИЛНИ ЦЕХОВЕ
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">В текстилните фабрики и багрилните цехове оцветители, киселини и основи проникват дълбоко в бетона, създават петна и разяждат повърхността. Мокри зони, пара и влага допълнително натоварват пода.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX CHEM изгражда плътна, химически устойчива повърхност, която не абсорбира багрила и е лесна за измиване. HYDRO защитава основата от дълготрайно овлажняване и подповърхностни повреди.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: CHEM
                    </div>
                </div>
            </div>
        </section>

        {/* Block 8: Printing */}
        <section className="flex flex-col lg:flex-row-reverse w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-PRINTERS-AND-PRINTING.webp" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80" 
                    alt="Printing"
                />
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <Printer className="w-8 h-8 text-geo-yellow" />
                     <span className="text-white font-bold uppercase text-sm block">Печатници</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    ПЕЧАТНИЦИ И ПОЛИГРАФИЯ
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">ПРОБЛЕМ:</span>
                    <p className="text-gray-400 text-lg leading-relaxed">Печатарските мастила, разтворители и тежки ролни машини изискват под, който е едновременно химически устойчив, антистатичен и с много ниско прахоотделяне.</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">РЕШЕНИЕ:</span>
                    <p className="text-white font-medium text-lg leading-relaxed">GEONYX комбинира ARMOR за суперравна, стабилна основа и CHEM за устойчивост на мастила и разтворители. Повърхността остава чиста, без прах и без влияние върху качеството на печата.</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        Подходящи системи: CHEM
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
                              <th className="p-4 text-gray-500 font-bold uppercase tracking-wider text-xs border-b border-r border-[#333] w-1/4">Стандартен индустриален бетон</th>
                              <th className="p-4 text-gray-500 font-bold uppercase tracking-wider text-xs border-b border-[#333] w-1/4">Епоксидно покритие</th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-[#333] text-sm">
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">Експлоатационен живот</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> ≥ 20 години</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">5–7 години</td>
                              <td className="p-4 text-gray-500">7–10 години</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">Планирани спирания (10 г.)</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> 1–2 локални ремонта</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">Чести кръпки и фуги</td>
                              <td className="p-4 text-gray-500">Пълно пре-полагане на зони</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">Устойчивост на стружки и вериги</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> Минерална матрица, без дълбоки рани</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">Бързо изронване</td>
                              <td className="p-4 text-gray-500">Повърхностни срезове и отлепване</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">Прахоотделяне</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> Много ниско</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">Високо</td>
                              <td className="p-4 text-gray-500">Средно</td>
                          </tr>
                          <tr>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">Общ TCO (10 г.)</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> Оптимизиран – най-нисък</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">Високи скрити разходи</td>
                              <td className="p-4 text-gray-500">Висока първоначална цена + ремонт</td>
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
               alt="Heavy Applications"
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
                  <p className="text-gray-300 mt-4 max-w-2xl mx-auto font-bold">Всички типични „хале + машини + трафик + палети“ сценарии – от логистични центрове и заводи до железопътни депа и центрове за данни.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                      { title: "Логистични центрове и 3PL", desc: "VNA алеи, стелажни зони, рампи и товарни докове с непрекъснат мотокарен трафик.", icon: Boxes },
                      { title: "Металообработка и машинни заводи", desc: "Тежки машини, стружки, СОТ, масла и динамични натоварвания.", icon: Factory },
                      { title: "Производство на гуми и каучук", desc: "Горещ каучук, сажди, пластификатори и високи температурни цикли.", icon: CircleDot },
                      { title: "Тежки сервизи за камиони и техника", desc: "Крикове, стойки, ударни натоварвания и постоянни разливи на масла.", icon: Truck },
                      { title: "Железопътни депа и ремонтни бази", desc: "Релси, колооси, тежки детайли и комбинация от механични и химични натоварвания.", icon: Train },
                      { title: "Текстилни фабрики и багрилни цехове", desc: "Органични и неорганични багрила, влага, пара и мокри процеси.", icon: Shirt },
                      { title: "Печатници и полиграфия", desc: "Мастила, разтворители, тежки машини и изискване за чисти, безпрашни повърхности.", icon: Printer },
                      { title: "Центрове за данни", desc: "Антипрахови, антистатични подове с висока носимоспособност за ИТ шкафове и UPS.", icon: Server },
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
                  <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Подборът на система зависи от комбинацията между механично натоварване, химична агресия и изисквания за температура, ESD и хигиена. GEONYX конфигурира решенията по зони – вместо „едно покритие за всички“.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                      { name: "GEONYX ARMOR", desc: "Основна носеща система за индустриални подове в хале – VNA алеи, рампи, зони под стелажи, под тежки машини и кранове. Проектирана за екстремна абразия, удар и точкови натоварвания." },
                      { name: "GEONYX CHEM", desc: "Минерална химически устойчива система за зони с масла, емулсии, разтворители, електролити и багрила. Подходяща за металообработка, багрилни цехове, печат и EV производство." },
                      { name: "GEONYX THERM", desc: "Използва се в зони с термични пикове, искри и локално загряване – около пещи, сушилни, горещ каучук и термични процеси." },
                      { name: "GEONYX HYDRO", desc: "Защита на основата от влага, капилярно повдигане и промишлени течове в приземни и подземни части на халета и депа." },
                      { name: "GEONYX REPAIR", desc: "Високоякостни ремонтни решения за фуги, ями, счупени ръбове и локални дефекти – без спиране на цялата линия." },
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
                      { step: "01", title: "Диагностика на натоварванията", desc: "Събиране на данни за трафик, осови натоварвания, химична среда, температури и очакван експлоатационен живот." },
                      { step: "02", title: "Лабораторен и полеви анализ", desc: "Изследване на съществуващия бетон, влага, пукнатини и носимоспособност. Определяне на критичните зони." },
                      { step: "03", title: "Инженерен проект на системата", desc: "Проектиране на геометрия на фугите, дебелини, армировка и подбор на системи ARMOR / CHEM / THERM / HYDRO по зони." },
                      { step: "04", title: "Пробна зона (Pilot Area)", desc: "Изпълнение на контролна зона в реални условия, тест на експлоатационни параметри и обучение на екипа." },
                      { step: "05", title: "Основно изпълнение", desc: "Фазиране по сектори, контрол на качеството, протоколи за приемане и минимизиране на престоя." },
                      { step: "06", title: "Одит, гаранция и поддръжка", desc: "Финален инженеринг одит, гаранционни условия и план за инспекции и бързи REPAIR интервенции." },
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
                          Подготвяме пълен пакет документи за инвеститори, оператори на логистични центрове, индустриални паркове и публични възложители – готов за включване в тръжни процедури и технически задания.
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
                              "Технически карти и TDS за избраните системи",
                              "Статични и експлоатационни класове на натоварване",
                              "Детайли на фуги, рампи и VNA алеи",
                              "Препоръки за подготвка на основата и REPAIR протоколи",
                              "HSEQ документация и указания за безопасност",
                              "Примерни текстове за тръжни спецификации (B2B / B2G)"
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
                              {copySuccess ? 'ТЕКСТЪТ Е КОПИРАН!' : 'КОПИРАЙ ТРЪЖЕН ТЕКСТ'}
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
                              <span className="text-white font-bold block uppercase text-sm">GEONYX ARMOR – TDS</span>
                              <span className="text-gray-500 text-xs">Технически datasheet (PDF)</span>
                          </div>
                      </div>
                      <Download className="text-gray-500 group-hover:text-white" />
                  </button>
                  <button className="w-full flex items-center justify-between p-6 bg-[#111] border border-[#333] hover:border-geo-yellow group transition-all">
                      <div className="flex items-center gap-4">
                          <FileText className="text-gray-400 group-hover:text-geo-yellow w-8 h-8" />
                          <div className="text-left">
                              <span className="text-white font-bold block uppercase text-sm">GEONYX CHEM – TDS</span>
                              <span className="text-gray-500 text-xs">Химическа устойчивост (PDF)</span>
                          </div>
                      </div>
                      <Download className="text-gray-500 group-hover:text-white" />
                  </button>
                  <button className="w-full flex items-center justify-between p-6 bg-[#111] border border-[#333] hover:border-geo-yellow group transition-all">
                      <div className="flex items-center gap-4">
                          <FileText className="text-gray-400 group-hover:text-geo-yellow w-8 h-8" />
                          <div className="text-left">
                              <span className="text-white font-bold block uppercase text-sm">VNA Floors Guide</span>
                              <span className="text-gray-500 text-xs">Ръководство за проектиране (PDF)</span>
                          </div>
                      </div>
                      <Download className="text-gray-500 group-hover:text-white" />
                  </button>
                  <button className="w-full flex items-center justify-between p-6 bg-[#111] border border-[#333] hover:border-geo-yellow group transition-all">
                      <div className="flex items-center gap-4">
                          <FileText className="text-gray-400 group-hover:text-geo-yellow w-8 h-8" />
                          <div className="text-left">
                              <span className="text-white font-bold block uppercase text-sm">Heavy Industry Specs</span>
                              <span className="text-gray-500 text-xs">Примерни тръжни текстове (PDF)</span>
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
                              <h4 className="text-white font-bold uppercase mb-2 group-hover:text-geo-yellow transition-colors">КОЛКО ПРЕСТОЙ ЩЕ Е НУЖЕН ЗА ПОДМЯНА НА ПОДА В РАБОТЕЩ ЛОГИСТИЧЕН ЦЕНТЪР?</h4>
                              <p className="text-gray-400 text-sm">Проектираме фазиране по сектори с нощни и уикенд-интервенции. Чрез REPAIR и бързо набиращи якост системи обикновено ограничаваме пълния престой до отделни участъци, без да спира целият център.</p>
                          </div>
                      </div>
                  </div>

                  <div className="bg-[#111] p-6 border-l-4 border-gray-700 hover:border-geo-yellow transition-colors shadow-xl group">
                      <div className="flex gap-4">
                          <HelpCircle className="text-gray-500 group-hover:text-geo-yellow flex-shrink-0 transition-colors" />
                          <div>
                              <h4 className="text-white font-bold uppercase mb-2 group-hover:text-geo-yellow transition-colors">ЗАЩО ДА ИЗБЕРА МИНЕРАЛНА СИСТЕМА ВМЕСТО ЕПОКСИДНО ПОКРИТИЕ?</h4>
                              <p className="text-gray-400 text-sm">Епоксидът работи като боя върху бетона – при удар, стружки и горещи гуми се реже и отлепва. GEONYX е минерална система, която става едно цяло с основата, издържа на екстремна абразия и не омеква от масла и температура.</p>
                          </div>
                      </div>
                  </div>

                  <div className="bg-[#111] p-6 border-l-4 border-gray-700 hover:border-geo-yellow transition-colors shadow-xl group">
                      <div className="flex gap-4">
                          <HelpCircle className="text-gray-500 group-hover:text-geo-yellow flex-shrink-0 transition-colors" />
                          <div>
                              <h4 className="text-white font-bold uppercase mb-2 group-hover:text-geo-yellow transition-colors">МОЖЕМ ЛИ ДА КОМБИНИРАМЕ РАЗЛИЧНИ СИСТЕМИ В ЕДНО ХАЛЕ?</h4>
                              <p className="text-gray-400 text-sm">Да. Типичният подход е ARMOR в основните трафик-зони, CHEM около машини и мокри процеси, THERM при термични пикове и HYDRO в приземни/подземни части. Така оптимизираме TCO и удължаваме живота на целия обект.</p>
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

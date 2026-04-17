
import React, { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { 
  FileText, ShieldAlert, BookOpen, Download, ClipboardCheck, 
  Microscope, FlaskConical, Scale, Leaf, Activity, Zap, 
  CheckCircle, Settings, RefreshCw, BarChart3, Hammer, Flame, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SafeImage } from './SafeImage';

export const TechnicalMapsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "GEONYX | Технически карти и системна документация";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', "Централизирана библиотека с технически карти (TDS), декларации за експлоатационни показатели (DoP), сертификати и системни детайли за GEONYX ARMOR, CHEM, HYDRO и THERM – предназначени за проектанти, инвеститори и изпълнители в индустриалното и инфраструктурното строителство.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0F0F0F] font-sans text-gray-200 selection:bg-geo-yellow selection:text-black">
      <Navbar />

      {/* 1. HERO SECTION (THE DATA) */}
      <section className="relative min-h-[85vh] flex items-center justify-center border-b border-[#222] overflow-hidden bg-black">
        {/* Visual Context */}
        <div className="absolute inset-0 z-0">
          <SafeImage 
            src="/GEONYX-technical-data-sheet.jpeg" 
            fallbackSrc="GEONYX-technical-data-sheet.webp"
            alt="Engineering Data Center" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/60 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-left pt-20">
            {/* Style Line - Left Aligned */}
            <div className="flex items-center justify-start gap-3 mb-8 page-animate-tag">
                <div className="h-[2px] w-12 bg-geo-yellow shadow-[0_0_15px_#FFCC00]"></div>
                <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">ТЕХНИЧЕСКИ КАРТИ</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 uppercase tracking-tighter drop-shadow-2xl max-w-6xl page-animate-title">
              ДАННИТЕ <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-geo-yellow to-yellow-600">НЕ ЛЪЖАТ.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light max-w-4xl leading-relaxed border-l-4 border-geo-yellow pl-6 py-2 bg-black/30 backdrop-blur-sm page-animate-desc">
              Тук няма място за маркетинг. Тук говорят емпиричните физико-механични показатели, независимите лабораторни изпитвания и нормативните сертификати. Якост на срязване, индекс на износустойчивост, химическа инертност и въглероден отпечатък.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 page-animate-buttons">
                <button className="h-12 px-8 flex items-center justify-center gap-2 bg-geo-yellow text-black text-sm font-bold tracking-wide transition-all hover:bg-white hover:text-black uppercase rounded-none w-full sm:w-auto">
                    СВАЛИ ПЪЛЕН КАТАЛОГ <Download className="w-4 h-4"/>
                </button>
            </div>
        </div>
      </section>

      {/* 2. THE ENGINEERING BLOCKS */}
      <div className="w-full bg-[#111]">
        
        {/* BLOCK 1: SYSTEM & PRODUCT DATA (Zig-Zag Left) */}
        <section className="flex flex-col lg:flex-row w-full min-h-[700px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-technical-data-sheet1.webp" 
                    fallbackSrc="GEONYX-technical-data-sheet1.webp"
                    alt="Technical Specs Sheet" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <FileText className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">SDS / PDS</span>
                </div>
            </div>

            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">
                             СПЕЦИФИКАЦИИ
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        СИСТЕМНИ (SDS) И <br/> ПРОДУКТОВИ (PDS) <br/> ТЕХНИЧЕСКИ КАРТИ
                    </h3>
                </div>

                <div className="space-y-8">
                    <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-[#333] pl-6">
                        Прецизно дефиниране на всяка променлива. Инженерната логика изисква разделяне на цялостната система (System Data Sheet) от нейните съставни компоненти (Product Data Sheets). От модула на еластичност на системата съгласно EN 13813, до времето за отворена работа (Pot Life) на всеки индивидуален грунд и запечатка.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="h-12 px-8 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase group w-full sm:w-auto">
                            ИЗТЕГЛИ СИСТЕМНИ ПАСПОРТИ (SDS)
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="h-12 px-8 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase group w-full sm:w-auto">
                            ИЗТЕГЛИ ПРОДУКТОВИ ПАСПОРТИ (PDS)
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </section>

        {/* BLOCK 2: LEGAL & ESG COMPLIANCE (Zig-Zag Right) */}
        <section className="flex flex-col lg:flex-row-reverse w-full min-h-[700px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-DECLARATION-OF-PERFORMANCE-DoP.webp" 
                    fallbackSrc="/GEONYX-DECLARATION-OF-PERFORMANCE-DoP.webp"
                    alt="Eco Compliance" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-green-500 p-4 text-right">
                     <div className="flex justify-end mb-2"><Leaf className="w-8 h-8 text-green-500" /></div>
                     <span className="text-white font-bold uppercase text-sm block">ESG & DoP</span>
                </div>
            </div>

            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">
                             СЪОТВЕТСТВИЕ И ESG
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        ДЕКЛАРАЦИИ ЗА <br/> ЕКСПЛОАТАЦИЯ (DoP) <br/> И ЕКОЛОГИЯ (EPD)
                    </h3>
                </div>

                <div className="space-y-8">
                    <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-[#333] pl-6">
                        Задължителният актив за инфраструктурни проекти и държавни поръчки (B2G). Декларациите DoP гарантират пълно съответствие с Регламент (ЕС) № 305/2011 (CPR). Добавените Екологични продуктови декларации (EPD) по ISO 14025 осигуряват точни данни за въглеродния отпечатък през целия жизнен цикъл (LCA), гарантирайки максимален брой кредити за LEED v4 и BREEAM сертификация.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="h-12 px-8 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase group w-full sm:w-auto">
                            <Scale className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                            ИЗТЕГЛИ DoP РЕГИСТЪР (CE)
                        </button>
                        <button className="h-12 px-8 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase group w-full sm:w-auto">
                            <Leaf className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                            ИЗТЕГЛИ EPD ДОКЛАДИ (ECO)
                        </button>
                    </div>
                </div>
            </div>
        </section>

        {/* BLOCK 3: HSE (Zig-Zag Left) */}
        <section className="flex flex-col lg:flex-row w-full min-h-[700px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-technical-data-sheet2.webp" 
                    fallbackSrc="GEONYX-technical-data-sheet2.webp"
                    alt="Safety MSDS" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <ShieldAlert className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">БЕЗОПАСНОСТ</span>
                </div>
            </div>

            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">
                             ЗДРАВЕ И БЕЗОПАСНОСТ
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        ИНФОРМАЦИОННИ ЛИСТИ <br/> ЗА БЕЗОПАСНОСТ (MSDS)
                    </h3>
                </div>

                <div className="space-y-8">
                    <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-[#333] pl-6">
                        Сигурност за оператора и средата. MSDS картите предоставят пълния химически профил, класификацията по REACH и протоколите за безопасна работа с материалите. GEONYX матриците са с нулеви емисии на летливи органични съединения (VOC-Free) и не съдържат Бисфенол А, което ги прави еталон за хигиена на труда.
                    </p>

                    <button className="h-12 px-8 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase group w-full sm:w-auto mt-4">
                        ИЗТЕГЛИ MSDS АРХИВ
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>

        {/* BLOCK 4: EXECUTION & QA/QC (Zig-Zag Right) */}
        <section className="flex flex-col lg:flex-row-reverse w-full min-h-[700px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-PROTOCOLS-FOR-LAYING.webp" 
                    fallbackSrc="/GEONYX-PROTOCOLS-FOR-LAYING.webp"
                    alt="QA/QC Inspection" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><CheckCircle className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">QA / QC КОНТРОЛ</span>
                </div>
            </div>

            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">
                             ИЗПЪЛНЕНИЕ И КОНТРОЛ
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        ПРОТОКОЛИ ЗА <br/> ПОЛАГАНЕ (METHOD STATEMENTS)
                    </h3>
                </div>

                <div className="space-y-8">
                    <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-[#333] pl-6">
                        И най-добрата система се проваля при грешно полагане. Ние не просто даваме инструкции – ние предоставяме инструментите за строителен надзор. Достъп до технологичните протоколи (Method Statements) и готовите QA/QC бланки за ежедневен контрол на обекта, необходими на инвеститорския контрол.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="h-12 px-8 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase group w-full sm:w-auto">
                            <Settings className="w-4 h-4" />
                            ТЕХНОЛОГИЧНА КАРТА (MS)
                        </button>
                        <button className="h-12 px-8 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase group w-full sm:w-auto">
                            <ClipboardCheck className="w-4 h-4" />
                            QA/QC ФОРМУЛЯР (DEW POINT)
                        </button>
                    </div>
                </div>
            </div>
        </section>

        {/* BLOCK 5: ANALYTICS & CHARTS (Full Width Grid) */}
        <section className="py-24 bg-[#0a0a0a] border-b border-[#222]">
            <div className="container mx-auto px-6 md:px-10">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-[2px] w-6 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">
                             ТЕХНИЧЕСКИ ПОКАЗАТЕЛИ
                        </span>
                        <div className="h-[2px] w-6 bg-geo-yellow"></div>
                   </div>
                    <h2 className="text-3xl md:text-4xl font-black text-white uppercase">ТЕСТОВИ ПРОТОКОЛИ И ДИАГРАМИ</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* CARD 1: CHEMICAL */}
                    <div className="bg-[#141414] border border-[#222] p-8 hover:border-geo-yellow transition-all duration-300 group">
                        <div className="mb-6 flex justify-between items-start">
                             <FlaskConical className="w-10 h-10 text-gray-500 group-hover:text-geo-yellow transition-colors" />
                             <span className="text-gray-700 font-mono text-xs font-bold uppercase">EN 13529</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4 uppercase">Химическа Устойчивост</h3>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                            Списък на тестваните реагенти (киселини, основи, разтворители) съгласно EN 13529. Време за експозиция и индекс на разрушение.
                        </p>
                        <button className="px-4 py-2 border border-[#333] text-gray-400 hover:text-black hover:bg-geo-yellow hover:border-geo-yellow text-xs font-bold uppercase transition-colors flex items-center justify-center gap-2 w-full sm:w-fit">
                            <Download className="w-3 h-3" /> ИЗТЕГЛИ ТАБЛИЦА
                        </button>
                    </div>

                    {/* CARD 2: THERMAL */}
                    <div className="bg-[#141414] border border-[#222] p-8 hover:border-geo-yellow transition-all duration-300 group">
                        <div className="mb-6 flex justify-between items-start">
                             <Activity className="w-10 h-10 text-gray-500 group-hover:text-geo-yellow transition-colors" />
                             <span className="text-gray-700 font-mono text-xs font-bold uppercase">DIN 52108</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4 uppercase">Термодинамика и Триене</h3>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                            Коефициенти на топлинно разширение (CTE), резултати от термошок тестове и криви на износване по Böhme (DIN 52108).
                        </p>
                        <button className="px-4 py-2 border border-[#333] text-gray-400 hover:text-black hover:bg-geo-yellow hover:border-geo-yellow text-xs font-bold uppercase transition-colors flex items-center justify-center gap-2 w-full sm:w-fit">
                            <Download className="w-3 h-3" /> ИЗТЕГЛИ ДОКЛАД
                        </button>
                    </div>

                    {/* CARD 3: ELECTRICAL */}
                    <div className="bg-[#141414] border border-[#222] p-8 hover:border-geo-yellow transition-all duration-300 group">
                        <div className="mb-6 flex justify-between items-start">
                             <Zap className="w-10 h-10 text-gray-500 group-hover:text-geo-yellow transition-colors" />
                             <span className="text-gray-700 font-mono text-xs font-bold uppercase">ANSI/ESD S20.20</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4 uppercase">Електропроводимост</h3>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                            Измервания на повърхностно/обемно съпротивление. Отчети за Walking Body Voltage за чисти стаи и ATEX зони.
                        </p>
                        <button className="px-4 py-2 border border-[#333] text-gray-400 hover:text-black hover:bg-geo-yellow hover:border-geo-yellow text-xs font-bold uppercase transition-colors flex items-center justify-center gap-2 w-full sm:w-fit">
                            <Download className="w-3 h-3" /> ИЗТЕГЛИ ESD АНАЛИЗ
                        </button>
                    </div>

                </div>
            </div>
        </section>

        {/* BLOCK 6: LIFECYCLE MANAGEMENT (Full Width Banner) */}
        <section className="py-24 bg-[#111] border-b border-[#222] relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="container mx-auto px-6 text-center relative z-10">
                <div className="inline-flex items-center gap-2 bg-[#222] border border-[#333] px-4 py-2 rounded-full mb-8">
                     <RefreshCw className="w-4 h-4 text-geo-yellow" />
                     <span className="text-gray-400 font-bold uppercase tracking-[0.2em] text-xs">ПОДДРЪЖКА</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 leading-tight">
                    УПРАВЛЕНИЕ НА ЖИЗНЕНИЯ ЦИКЪЛ
                </h2>
                
                <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10">
                    Устойчивостта е функция на правилната експлоатация. Специализирани ръководства (Maintenance Manuals) за Фасилити мениджмънт екипи. Одобрени почистващи препарати, процедури при екстремни химически разливи и графици за периодична инспекция на индустриални подове.
                </p>

                <button className="h-12 px-8 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase group mx-auto w-full sm:w-auto">
                    <BookOpen className="w-5 h-5" />
                    ИЗТЕГЛИ РЪКОВОДСТВО ЗА ПОДДРЪЖКА
                </button>
            </div>
        </section>

      </div>

      <Footer />
    </div>
  );
};

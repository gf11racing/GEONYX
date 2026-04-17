
import React, { useState, useRef, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Button } from './Button';
import { 
  ArrowRight, CheckCircle, Clock, Hammer, ShieldCheck, Zap, 
  Factory, Utensils, Truck, MousePointer2, Sprout, FileText, 
  AlertTriangle, Skull, Droplets, Activity, Download
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'framer-motion';
import { SafeImage } from './SafeImage';

// --- ANIMATED COUNTER COMPONENT ---
const Counter = ({ to, suffix = "", duration = 2.5 }: { to: number, suffix?: string, duration?: number }) => {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const isInView = useInView(nodeRef, { once: true, margin: "-10%" });
    
    useEffect(() => {
        const node = nodeRef.current;
        if (!node || !isInView) return;

        let start: number | null = null;
        
        const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / (duration * 1000), 1);
            // Ease out quart
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            
            const current = Math.floor(easeProgress * to);
            node.textContent = current.toLocaleString('en-US');

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                node.textContent = to.toLocaleString('en-US');
            }
        };
        
        requestAnimationFrame(step);
    }, [isInView, to, duration]);

    return (
        <span className="inline-flex items-baseline">
            <span ref={nodeRef}>0</span>
            {suffix}
        </span>
    );
};

// --- KEY METRICS SECTION ---
const KeyMetricsSection = () => {
    return (
        <section className="bg-[#111] border-y border-[#222] py-16 md:py-24 relative z-20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#222] gap-y-12 md:gap-y-0">
                    
                    {/* Metric 1 */}
                    <div className="flex flex-col items-center justify-center text-center px-4">
                        <div className="text-4xl md:text-5xl lg:text-6xl font-black text-geo-yellow mb-4 tracking-tight">
                             <Counter to={500000} suffix=" m²+" />
                        </div>
                        <span className="text-gray-400 font-bold uppercase tracking-[0.25em] text-xs md:text-sm">ИНСТАЛИРАНИ СИСТЕМИ</span>
                    </div>

                    {/* Metric 2 */}
                    <div className="flex flex-col items-center justify-center text-center px-4">
                         <div className="text-4xl md:text-5xl lg:text-6xl font-black text-geo-yellow mb-4 tracking-tight">
                             <Counter to={100} suffix="%" />
                        </div>
                        <span className="text-gray-400 font-bold uppercase tracking-[0.25em] text-xs md:text-sm">ИНДУСТРИАЛЕН ФОКУС</span>
                    </div>

                    {/* Metric 3 */}
                    <div className="flex flex-col items-center justify-center text-center px-4">
                         <div className="text-4xl md:text-5xl lg:text-6xl font-black text-geo-yellow mb-4 tracking-tight">
                             0
                        </div>
                        <span className="text-gray-400 font-bold uppercase tracking-[0.25em] text-xs md:text-sm">КОМПРОМИСИ С КАЧЕСТВОТО</span>
                    </div>

                </div>
            </div>
        </section>
    );
};

// --- BEFORE/AFTER SLIDER COMPONENT ---
const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
      setSliderPosition(percent);
    }
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <section className="relative w-full pt-20 pb-0 bg-[#000] overflow-hidden border-t border-[#333]">
      <div className="container mx-auto px-6 mb-8 text-center relative z-10">
         <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">ВИЗУАЛЕН КОНТРОЛ</span>
         <h2 className="text-3xl md:text-4xl font-black text-white uppercase mt-2">ОТ РУИНА ДО МОНОЛИТ</h2>
         <p className="text-gray-500 mt-4 text-sm flex items-center justify-center gap-2 uppercase tracking-wider">
            <MousePointer2 className="w-4 h-4 text-geo-yellow animate-bounce" /> ПЛЪЗНЕТЕ, ЗА ДА ВИДИТЕ СТРУКТУРНАТА ТРАНСФОРМАЦИЯ
         </p>
      </div>

      <div 
        className="relative w-full max-w-[1600px] mx-auto h-[50vh] md:h-[70vh] cursor-col-resize select-none overflow-hidden border-y-4 border-geo-yellow"
        ref={containerRef}
        onMouseMove={onMouseMove}
        onTouchMove={onTouchMove}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onClick={(e) => handleMove(e.clientX)}
      >
        {/* AFTER IMAGE (Background / Right Side) */}
        <div className="absolute inset-0 select-none">
           <SafeImage 
            src="/GEONYX-References-4.webp" 
            fallbackSrc="https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=2070&auto=format&fit=crop"
            alt="After GEONYX" 
            className="w-full h-full object-cover"
            draggable={false}
           />
           <div className="absolute top-10 right-10 bg-geo-yellow text-black font-black px-4 py-2 uppercase tracking-widest text-lg shadow-xl z-20">
              СЛЕД: GEONYX ARMOR
           </div>
        </div>

        {/* BEFORE IMAGE (Clipped / Left Side) */}
        <div 
            className="absolute inset-0 overflow-hidden select-none border-r-4 border-geo-yellow bg-black"
            style={{ width: `${sliderPosition}%` }}
        >
            <SafeImage 
              src="/GEONYX-References-3.webp" 
              fallbackSrc="https://images.unsplash.com/photo-1518112390430-f4ab02e9c2c8?q=80&w=2070&auto=format&fit=crop"
              alt="Before Damage" 
              className="absolute top-0 left-0 h-full w-full max-w-none object-cover"
              style={{ width: containerRef.current ? containerRef.current.clientWidth : '100vw' }}
              draggable={false}
            />
             <div className="absolute top-10 left-10 bg-black/80 text-white border border-white/20 font-black px-4 py-2 uppercase tracking-widest text-lg shadow-xl z-20">
              ПРЕДИ: ДЕГРАДИРАЛ БЕТОН
           </div>
        </div>

        {/* SLIDER HANDLE */}
        <div 
            className="absolute top-0 bottom-0 w-1 bg-transparent z-30 flex items-center justify-center -ml-[20px]"
            style={{ left: `${sliderPosition}%` }}
        >
            <div className="w-10 h-10 bg-geo-yellow rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,204,0,0.5)] border-4 border-black relative cursor-ew-resize">
                 <div className="flex gap-1">
                     <div className="w-0.5 h-3 bg-black"></div>
                     <div className="w-0.5 h-3 bg-black"></div>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
};

const TRUSTED_CLIENTS = [
  { name: "AURUBIS" },
  { name: "LUKOIL" },
  { name: "KAUFLAND" },
  { name: "SOPHARMA" },
  { name: "NESTLE" },
  { name: "COCA-COLA" },
];

export const PilotProjectsPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "GEONYX | Референции – Реализирани индустриални проекти и обекти";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', "Референции и реализирани проекти с GEONYX системи – индустриални подове, химическа защита, водна защита и термична безопасност за тежка индустрия, храни и фармация, логистика, енергетика и инфраструктура. Дългосрочни решения за критични зони.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0F0F0F] font-sans text-gray-200 selection:bg-geo-yellow selection:text-black">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center border-b border-[#222] overflow-hidden bg-black">
        {/* Background Visual - Clean Image Lock */}
        <div className="absolute inset-0 z-0 bg-black">
          <SafeImage 
            src="/GEONYX-REF-HERO.webp" 
            fallbackSrc="https://images.unsplash.com/photo-1590725140246-20ac705d5b97?q=80&w=2069&auto=format&fit=crop" 
            alt="Massive Industrial Facility" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/50 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-left pt-20">
             {/* Style Line - Left Aligned */}
            <div className="flex items-center justify-start gap-3 mb-8 page-animate-tag">
                <div className="h-[2px] w-12 bg-geo-yellow shadow-[0_0_15px_#FFCC00]"></div>
                <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">ОПЕРАТИВНИ ДОКЛАДИ</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8 uppercase tracking-tighter drop-shadow-2xl max-w-5xl page-animate-title">
              ОПЕРАТИВЕН <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-geo-yellow to-yellow-600">
                АРХИВ.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light max-w-3xl leading-relaxed border-l-4 border-geo-yellow pl-6 py-2 bg-black/30 backdrop-blur-sm page-animate-desc">
               НЕ ПРОСТО ОБЕЩАНИЯ. ИНЖЕНЕРНИ ФАКТИ. <br/>
               Вижте как технологиите на GEONYX трансформират критично компрометирани индустриални основи в неразрушими монолитни системи.
            </p>

            <div className="flex justify-start page-animate-buttons">
                 <a href="#cases">
                    <button className="h-12 px-8 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase group">
                        РАЗГЛЕДАЙ ДОКЛАДИТЕ 
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                 </a>
            </div>
        </div>
      </section>

      {/* 2. VISUAL EVIDENCE (SLIDER) */}
      <BeforeAfterSlider />

      {/* 3. KEY METRICS DIVIDER */}
      <KeyMetricsSection />

      {/* 4. CASE STUDIES GRID (ZIG ZAG) */}
      <div id="cases" className="w-full bg-[#0F0F0F]">
          
          {/* CASE 001: AGRO */}
          <section className="flex flex-col lg:flex-row w-full min-h-[700px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-References.webp" 
                    fallbackSrc="https://images.unsplash.com/photo-1546445317-29f4545e9d53?q=80&w=2000&auto=format&fit=crop"
                    alt="Agro Facility" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <Sprout className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">АГРО СЕКТОР</span>
                </div>
            </div>

            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">
                             Case #001
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        ИНТЕНЗИВНО <br/> ЖИВОТНОВЪДСТВО
                    </h2>
                </div>

                <div className="space-y-8">
                    <div className="border-l-2 border-red-500 pl-4">
                        <h4 className="text-red-500 font-bold uppercase text-xs tracking-wider mb-2">ПРОБЛЕМ</h4>
                        <p className="text-gray-400 text-sm italic">"Агресивната биогенна киселина (pH {'<'} 3) и амонякът от торовата маса бяха разяли стандартния бетон до арматура за по-малко от 3 години. Компрометираните фуги генерираха патогени."</p>
                    </div>

                    <div className="border-l-2 border-geo-yellow pl-4">
                        <h4 className="text-geo-yellow font-bold uppercase text-xs tracking-wider mb-2">РЕШЕНИЕ: GEONYX CHEM</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-geo-yellow mt-0.5 flex-shrink-0"/> <span><strong className="text-white">Имунитет към органични киселини:</strong> Пълна инертност към урина и млечна киселина.</span></li>
                            <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-geo-yellow mt-0.5 flex-shrink-0"/> <span><strong className="text-white">Бактериостатичен монолит:</strong> Безфугова система без пори, елиминираща развитието на биофилм.</span></li>
                            <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-geo-yellow mt-0.5 flex-shrink-0"/> <span><strong className="text-white">Зоотехническа безопасност:</strong> Текстура с профил R12, осигуряваща сцепление за копитата.</span></li>
                        </ul>
                    </div>

                    <div className="pt-4 border-t border-[#222]">
                        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">РЕЗУЛТАТ</p>
                        <p className="text-white font-medium text-sm">Спряна структурна корозия. Фермата преминава най-строгите ветеринарни одити, а травматизмът е сведен до нула.</p>
                    </div>
                </div>
            </div>
          </section>

          {/* CASE 002: HEAVY INDUSTRY */}
          <section className="flex flex-col lg:flex-row-reverse w-full min-h-[700px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-References-1.webp" 
                    fallbackSrc="https://images.unsplash.com/photo-1594535182308-8ff240fde7a3?q=80&w=2070&auto=format&fit=crop"
                    alt="Heavy Machinery" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><Hammer className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">МЕТАЛУРГИЯ</span>
                </div>
            </div>

            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <div className="mb-8">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">
                             Case #002
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        ТЕЖКО <br/> МАШИНОСТРОЕНЕ
                    </h2>
                </div>

                <div className="space-y-8">
                    <div className="border-l-2 border-red-500 pl-4">
                        <h4 className="text-red-500 font-bold uppercase text-xs tracking-wider mb-2">ПРОБЛЕМ</h4>
                        <p className="text-gray-400 text-sm italic">"Бетонната плоча беше пропита с хидравлични масла на дълбочина 50мм. Вибрациите от 200-тонни преси и ударното натоварване от падащи метални детайли бяха превърнали фугите в кратери."</p>
                    </div>

                    <div className="border-l-2 border-geo-yellow pl-4">
                        <h4 className="text-geo-yellow font-bold uppercase text-xs tracking-wider mb-2">РЕШЕНИЕ: GEONYX ARMOR</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-geo-yellow mt-0.5 flex-shrink-0"/> <span><strong className="text-white">Химическо фрезоване:</strong> Дълбочинно извличане на маслата от бетона чрез специални праймери.</span></li>
                            <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-geo-yellow mt-0.5 flex-shrink-0"/> <span><strong className="text-white">Абсорбиране на вибрации:</strong> Полагане на дуктилна геополимерна матрица (12mm).</span></li>
                            <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-geo-yellow mt-0.5 flex-shrink-0"/> <span><strong className="text-white">Безфугов инженеринг:</strong> Елиминиране на всички слаби звена по пода.</span></li>
                        </ul>
                    </div>

                    <div className="pt-4 border-t border-[#222]">
                        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">РЕЗУЛТАТ</p>
                        <p className="text-white font-medium text-sm">5 години експлоатация при 24/7 вибрационно натоварване. Нулева загуба на обем.</p>
                    </div>
                </div>
            </div>
          </section>

          {/* CASE 003: CHEMICAL */}
          <section className="flex flex-col lg:flex-row w-full min-h-[700px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-References-2.webp" 
                    fallbackSrc="https://images.unsplash.com/photo-1622629683930-4e339662b2d6?q=80&w=2070&auto=format&fit=crop"
                    alt="Chemical Plant" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <Skull className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">ХИМИЧЕСКИ ЗАВОД</span>
                </div>
            </div>

            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <div className="mb-8">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">
                             Case #003
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        ЕКСТРЕМНА <br/> ХИМИЧЕСКА АГРЕСИЯ
                    </h2>
                </div>

                <div className="space-y-8">
                    <div className="border-l-2 border-red-500 pl-4">
                        <h4 className="text-red-500 font-bold uppercase text-xs tracking-wider mb-2">ПРОБЛЕМ</h4>
                        <p className="text-gray-400 text-sm italic">"Производствени течове на концентрирана сярна киселина (H₂SO₄ 98%) унищожаваха бетона за седмици. Конвенционалните епоксидни покрития набъбваха, отлепваха се и създаваха риск от екологична катастрофа."</p>
                    </div>

                    <div className="border-l-2 border-geo-yellow pl-4">
                        <h4 className="text-geo-yellow font-bold uppercase text-xs tracking-wider mb-2">РЕШЕНИЕ: GEONYX CHEM</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-geo-yellow mt-0.5 flex-shrink-0"/> <span><strong className="text-white">Минерален щит:</strong> Пълна инертност към концентрирани киселини и агресивни разтворители.</span></li>
                            <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-geo-yellow mt-0.5 flex-shrink-0"/> <span><strong className="text-white">Вторична херметизация:</strong> Изграждане на непробиваема "вана" (WHG Certified).</span></li>
                            <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-geo-yellow mt-0.5 flex-shrink-0"/> <span><strong className="text-white">ATEX Безопасност:</strong> Антистатично изпълнение за предотвратяване на експлозии.</span></li>
                        </ul>
                    </div>

                    <div className="pt-4 border-t border-[#222]">
                        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">РЕЗУЛТАТ</p>
                        <p className="text-white font-medium text-sm">Производството е подсигурено срещу екологични глоби. 100% задържане на разливите на повърхността.</p>
                    </div>
                </div>
            </div>
          </section>

          {/* CASE 004: LOGISTICS */}
          <section className="flex flex-col lg:flex-row-reverse w-full min-h-[700px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-References-5.webp" 
                    fallbackSrc="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop"
                    alt="Logistics Hub" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><Truck className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">ЛОГИСТИКА</span>
                </div>
            </div>

            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <div className="mb-8">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">
                             Case #004
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        ВИСОКОНАТОВАРЕН <br/> ЛОГИСТИЧЕН ХЪБ
                    </h2>
                </div>

                <div className="space-y-8">
                    <div className="border-l-2 border-red-500 pl-4">
                        <h4 className="text-red-500 font-bold uppercase text-xs tracking-wider mb-2">ПРОБЛЕМ</h4>
                        <p className="text-gray-400 text-sm italic">"Критична необходимост от рехабилитация на 2000 кв.м. активна товарна зона. Изцяло компрометирани фуги от трафика на ричтраци. Всяка минута спиране на логистиката струваше десетки хиляди евро."</p>
                    </div>

                    <div className="border-l-2 border-geo-yellow pl-4">
                        <h4 className="text-geo-yellow font-bold uppercase text-xs tracking-wider mb-2">РЕШЕНИЕ: GEONYX ARMOR (RAPID)</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-geo-yellow mt-0.5 flex-shrink-0"/> <span><strong className="text-white">Хроно-инженеринг:</strong> Използване на ускорители за екстремно бърза полимеризация (4-6 часа).</span></li>
                            <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-geo-yellow mt-0.5 flex-shrink-0"/> <span><strong className="text-white">Зониране:</strong> Работа на участъци без прекъсване на съседните коридори.</span></li>
                            <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-geo-yellow mt-0.5 flex-shrink-0"/> <span><strong className="text-white">Устойчивост на срязване:</strong> Защита срещу малките, твърди колела на палетните колички.</span></li>
                        </ul>
                    </div>

                    <div className="pt-4 border-t border-[#222]">
                        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">РЕЗУЛТАТ</p>
                        <p className="text-white font-medium text-sm">Подът е фрезован и положен в събота вечер. В неделя сутринта (след по-малко от 12 часа) мотокарите оперират върху новата повърхност.</p>
                    </div>
                </div>
            </div>
          </section>

      </div>

      {/* 4. TRUSTED CLIENTS */}
      <section className="pt-8 pb-12 bg-[#0a0a0a] border-b border-[#222]">
          <div className="container mx-auto px-6 md:px-10">
              <div className="text-center mb-12">
                  <p className="text-gray-500 font-bold uppercase tracking-[0.2em] text-xs">
                      ИНДУСТРИАЛНИ ЛИДЕРИ, КОИТО ИНТЕГРИРАХА GEONYX
                  </p>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
                   {/* Map through clients */}
                   {TRUSTED_CLIENTS.map((client, index) => (
                       <div key={index} className="group cursor-default hover:opacity-100 transition-opacity duration-300 opacity-60">
                           <img 
                              src={`https://placehold.co/200x60/0a0a0a/666666?text=${client.name}`}
                              alt={client.name}
                              className="h-10 md:h-14 w-auto object-contain brightness-100 grayscale hover:grayscale-0 transition-all duration-500"
                           />
                       </div>
                   ))}
              </div>
          </div>
      </section>

      {/* 5. FINAL CTA (UPDATED SIZING) */}
      <section className="bg-geo-yellow py-24 text-center">
          <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-black text-black uppercase mb-6 tracking-tight max-w-4xl mx-auto">
                  АНАЛИЗИРАЙТЕ ВАШИЯ РИСК.
              </h2>
              <p className="text-black/80 text-xl font-medium mb-10 max-w-3xl mx-auto leading-relaxed">
                  Не чакайте структурната авария да спре производството ви. Поискайте техническа експертиза от наш инженер.
              </p>
              <button 
                onClick={() => navigate('/request-inspection')}
                className="h-12 px-8 flex items-center justify-center gap-2 border border-black/30 text-black text-sm font-bold tracking-wide transition-all bg-black text-white hover:bg-[#222] border-none uppercase group mx-auto shadow-2xl"
              >
                  ЗАЯВИ ИНЖЕНЕРЕН ОГЛЕД
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
          </div>
      </section>

      <Footer />
    </div>
  );
};

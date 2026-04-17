
import React, { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { 
  ArrowRight, BrainCircuit, Microscope, ShieldCheck, 
  HardHat, Leaf, CheckCircle, BadgeCheck, Scale
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SafeImage } from './SafeImage';

export const AboutUsPage: React.FC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "GEONYX | За нас – Минерални индустриални системи и инженерни решения";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', "GEONYX е производител на високоустойчиви минерални системи за индустриални подове и критична инфраструктура. Специализирани решения за механична устойчивост, химическа защита, водна защита и термична безопасност, проектирани за тежка индустрия, енергетика, логистика и обществени обекти.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0F0F0F] font-sans text-gray-200 selection:bg-geo-yellow selection:text-black">
      <Navbar />

      {/* STATIC STYLES TO PREVENT FLICKERING */}
      <style>{`
        @keyframes width-grow { from { width: 0; } }
        @keyframes height-grow { from { height: 0; } }
        @keyframes dash-draw { to { stroke-dashoffset: 0; } }
      `}</style>

      {/* HERO SECTION (ВЪВЕДЕНИЕ) */}
      <section className="relative min-h-[85vh] flex items-center justify-center border-b border-[#222] overflow-hidden bg-black">
        {/* Background Visual */}
        <div className="absolute inset-0 z-0">
          <SafeImage 
            src="/GEONYX-background-about.webp" 
            fallbackSrc="/GEONYX-background-about.webp"
            alt="GEONYX HQ / Team" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/50 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-left pt-20">
            {/* Style Line - Left Aligned */}
            <div className="flex items-center justify-start gap-3 mb-8 page-animate-tag">
                <div className="h-[2px] w-12 bg-geo-yellow shadow-[0_0_15px_#FFCC00]"></div>
                <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">ЗА КОМПАНИЯТА</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8 uppercase tracking-tighter drop-shadow-2xl max-w-5xl page-animate-title">
                НИЕ СМЕ GEONYX. <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-geo-yellow to-yellow-600">ИНЖЕНЕРИ НА МАТЕРИЯТА.</span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl leading-relaxed font-light border-l-4 border-geo-yellow pl-4 md:pl-6 py-2 bg-black/30 backdrop-blur-sm page-animate-desc">
                Пионери в разработката и имплементацията на високотехнологични геополимерни матрици. Ние не сме просто доставчици на строителни материали. Ние сме технологична компания, която предефинира жизнения цикъл на индустриалната инфраструктура.
            </p>
        </div>
      </section>

      {/* BLOCK 1: THE PHILOSOPHY (ФИЛОСОФИЯТА) */}
      <section className="w-full bg-[#111] border-b border-[#222]">
        <div className="flex flex-col lg:flex-row-reverse min-h-[700px]">
            
            {/* Image Column */}
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black">
                <SafeImage 
                    src="/GEONYX-about.webp" 
                    fallbackSrc="/GEONYX-about.webp"
                    alt="Strategic Vision" 
                    className="absolute inset-0 w-full h-full object-cover" 
                />
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><BrainCircuit className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">ФИЛОСОФИЯ</span>
                </div>
            </div>

            {/* Text Column */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center border-r border-[#222]">
                <div className="mb-8">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">
                             СМЯНА НА ПАРАДИГМАТА
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        КРАЯТ НА <br/> ПЛАНИРАНОТО ОСТАРЯВАНЕ
                    </h3>
                </div>

                <div className="space-y-6">
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Индустрията еволюира, но инфраструктурата изостава. Стандартните бетон е технология от 19-ти век, а епоксидните смоли са петрохимични компромиси с кратък живот. Нашата мисия е да прекратим цикъла на постоянни ремонти (Downtime).
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed border-l-4 border-geo-yellow pl-6">
                        Създавайки неорганични матрици, ние превръщаме най-уязвимото звено във вашия завод – подът – в най-дълготрайния ви конструктивен актив. Проектираме за 50-годишен експлоатационен цикъл.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* BLOCK 2: R&D AND SCIENCE (НАУЧНО-ИЗСЛЕДОВАТЕЛСКА ДЕЙНОСТ) */}
      <section className="w-full bg-[#0F0F0F] border-b border-[#222]">
        <div className="flex flex-col lg:flex-row min-h-[700px]">
            
            {/* Image Column */}
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black">
                <SafeImage 
                    src="/GEONYX-LABORATORY-PRECISION.webp" 
                    fallbackSrc="/GEONYX-LABORATORY-PRECISION.webp"
                    alt="R&D Laboratory" 
                    className="absolute inset-0 w-full h-full object-cover" 
                />
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <Microscope className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">R&D ЛАБОРАТОРИЯ</span>
                </div>
            </div>

            {/* Text Column */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center border-l border-[#222]">
                <div className="mb-8">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">
                             R&D И СИНТЕЗ
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        ЛАБОРАТОРНА ПРЕЦИЗНОСТ <br/> И ИНОВАЦИИ
                    </h3>
                </div>

                <div className="space-y-6">
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Силата на GEONYX се крие в нашата научно-изследователска дейност. Ние не смесваме готови търговски смоли. Ние синтезираме собствени геополимерни кристални решетки на молекулярно ниво.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed border-l-4 border-geo-yellow pl-6">
                        Всяка формула преминава през безмилостни стрес-тестове за термодинамична стабилност, химическа инертност и якост на натиск, верифицирани от независими европейски лаборатории и институти за изпитване на материалите.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* BLOCK 3: SINGLE SOURCE LIABILITY (ОТГОВОРНОСТТА) */}
      <section className="w-full bg-[#111] border-b border-[#222]">
        <div className="flex flex-col lg:flex-row-reverse min-h-[700px]">
            
            {/* Image Column */}
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black">
                <SafeImage 
                    src="/GEONYX-ONE-GUARANTEE.webp" 
                    fallbackSrc="/GEONYX-ONE-GUARANTEE.webp"
                    alt="Corporate Handshake Agreement" 
                    className="absolute inset-0 w-full h-full object-cover" 
                />
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <ShieldCheck className="w-8 h-8 text-geo-yellow" />
                     <span className="text-white font-bold uppercase text-sm block mt-2">ОТГОВОРНОСТ</span>
                </div>
            </div>

            {/* Text Column */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center border-r border-[#222]">
                <div className="mb-8">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">
                             ЕДИННА ОТГОВОРНОСТ
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        ЕДНА ГАРАНЦИЯ. <br/> НУЛЕВО ПРЕХВЪРЛЯНЕ НА ОТГОВОРНОСТ.
                    </h3>
                </div>

                <div className="space-y-6">
                    <p className="text-gray-400 text-lg leading-relaxed">
                        В строителството най-големият риск е разделената отговорност – производителят обвинява изпълнителя, а изпълнителят обвинява бетона. GEONYX затваря цикъла.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed border-l-4 border-geo-yellow pl-6">
                        Ние произвеждаме технологията, ние извършваме структурния одит на обекта и ние сертифицираме изпълнението. Вие получавате единен партньор, една безкомпромисна гаранция и абсолютна правна сигурност.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* BLOCK 4: QA/QC EXECUTION (ИНЖЕНЕРНОТО ИЗПЪЛНЕНИЕ) */}
      <section className="w-full bg-[#0F0F0F] border-b border-[#222]">
        <div className="flex flex-col lg:flex-row min-h-[700px]">
            
            {/* Image Column */}
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black">
                <SafeImage 
                    src="/GEONYX-about4.webp" 
                    fallbackSrc="/GEONYX-about4.webp"
                    alt="QA/QC Engineers" 
                    className="absolute inset-0 w-full h-full object-cover" 
                />
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <HardHat className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">QA / QC</span>
                </div>
            </div>

            {/* Text Column */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center border-l border-[#222]">
                <div className="mb-8">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">
                             QA/QC ВНЕДРЯВАНЕ
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        СЕРТИФИЦИРАНИ ТЕХНИЦИ <br/> И ПРОТОКОЛИ
                    </h3>
                </div>

                <div className="space-y-6">
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Работата с високотехнологични минерални матрици изисква клинична дисциплина, а не общи работници. Нашите екипи за имплементация (Certified Application Technicians) оперират по строги инженерни протоколи (Method Statements).
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed border-l-4 border-geo-yellow pl-6">
                        От мониторинг на точката на оросяване (Dew Point) до контрол на екзотермичната реакция в реално време. Гарантираме минимален престой на вашето производство чрез стриктно спазване на заложените "time-slots".
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* BLOCK 5: ESG & SUSTAINABILITY (ЕКОЛОГИЯ) */}
      <section className="w-full bg-[#111] border-b border-[#222]">
        <div className="flex flex-col lg:flex-row-reverse min-h-[700px]">
            
            {/* Image Column */}
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black">
                <SafeImage 
                    src="/GEONYX-LOW-CARBON.webp" 
                    fallbackSrc="/GEONYX-LOW-CARBON.webp"
                    alt="Sustainable Future" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80" 
                />
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><Leaf className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">ESG ГОТОВНОСТ</span>
                </div>
            </div>

            {/* Text Column */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center border-r border-[#222]">
                <div className="mb-8">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">
                             ESG & КРЪГОВА ИКОНОМИКА
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        НИСКОВЪГЛЕРОДНО <br/> БЪДЕЩЕ (LOW CARBON)
                    </h3>
                </div>

                <div className="space-y-6">
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Корпоративната отговорност изисква радикално намаляване на въглеродния отпечатък. За разлика от енергоемкото производство на портланд цимент и токсичната петрохимия на епоксидите, технологиите на GEONYX спестяват до 80% CO2 емисии.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed border-l-4 border-geo-yellow pl-6">
                        Нашите системи са 100% без разтворители (VOC-Free) и допринасят директно за покриване на критериите за LEED и BREEAM сертификация на вашите зелени сгради.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* 4. CERTIFICATIONS & STANDARDS GRID */}
      <section className="py-24 bg-[#0a0a0a] border-t border-[#222]">
          <div className="container mx-auto px-6 md:px-10">
              <div className="flex flex-col items-center text-center mb-16">
                  <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs mb-2">КОРПОРАТИВНА ПОЛИТИКА</span>
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase">ОФИЦИАЛНИ СТАНДАРТИ ЗА ДОВЕРИЕ</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                  
                  {/* CARD 1 */}
                  <div className="bg-[#111] p-8 border border-[#222] hover:border-geo-yellow transition-colors group">
                      <div className="mb-6"><BadgeCheck className="w-10 h-10 text-gray-600 group-hover:text-geo-yellow transition-colors" /></div>
                      <h4 className="text-xl font-black text-white uppercase mb-2">ISO 9001:2015</h4>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Quality Management</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                          Quality Management System (QMS). Обект на непрекъснат независим одит.
                      </p>
                  </div>

                  {/* CARD 2 */}
                  <div className="bg-[#111] p-8 border border-[#222] hover:border-geo-yellow transition-colors group">
                      <div className="mb-6"><Leaf className="w-10 h-10 text-gray-600 group-hover:text-geo-yellow transition-colors" /></div>
                      <h4 className="text-xl font-black text-white uppercase mb-2">ISO 14001:2015</h4>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Environmental Mgmt</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                          Управление на околната среда. Нулев отпадък към сметищата и контрол на емисиите.
                      </p>
                  </div>

                  {/* CARD 3 */}
                  <div className="bg-[#111] p-8 border border-[#222] hover:border-geo-yellow transition-colors group">
                      <div className="mb-6"><ShieldCheck className="w-10 h-10 text-gray-600 group-hover:text-geo-yellow transition-colors" /></div>
                      <h4 className="text-xl font-black text-white uppercase mb-2">ISO 45001:2018</h4>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Health & Safety</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                          Occupational Health & Safety. Институционализирана защита на здравето при работа.
                      </p>
                  </div>

                  {/* CARD 4 */}
                  <div className="bg-[#111] p-8 border border-[#222] hover:border-geo-yellow transition-colors group">
                      <div className="mb-6"><Scale className="w-10 h-10 text-gray-600 group-hover:text-geo-yellow transition-colors" /></div>
                      <h4 className="text-xl font-black text-white uppercase mb-2">REACH & VOC</h4>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Chemical Compliance</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                          Пълна съвместимост с директивите на ЕС за химическа безопасност и хигиена.
                      </p>
                  </div>

              </div>

          </div>
      </section>

      {/* FOOTER CTA (ФИНАЛНО ДЕЙСТВИЕ) */}
      <section className="bg-geo-yellow py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-6 uppercase tracking-tight leading-tight">
             ДОВЕРЕТЕ СЕ НА НАУКАТА.
          </h2>
          <p className="text-xl text-black/80 mb-10 max-w-3xl mx-auto font-medium">
              Свържете се с нашия инженерен екип за техническа експертиза, количествен анализ и структурен одит на вашия обект.
          </p>
          <button 
            onClick={() => navigate('/contacts')}
            className="h-12 px-8 flex items-center justify-center gap-2 border border-black/30 text-black text-sm font-bold tracking-wide transition-all bg-black text-white hover:bg-[#222] border-none uppercase group mx-auto shadow-2xl"
          >
              СВЪРЖЕТЕ СЕ С НАС <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

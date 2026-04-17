
import React, { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Button } from './Button';
import { 
  Download, ShieldCheck, Leaf, Activity, FileText, 
  BadgeCheck, Scale, Building2, CheckCircle, ArrowRight 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SafeImage } from './SafeImage';

export const HseqPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "GEONYX | HSEQ и устойчивост – Здраве, безопасност, качество и околна среда";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', "HSEQ политика и устойчиво развитие в GEONYX – ангажимент към здравето и безопасността, качеството на продукцията и опазването на околната среда. Минерални индустриални системи с нисък въглероден отпечатък и дълъг експлоатационен живот за инфраструктура и индустрия.");
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

      {/* 1. HERO SECTION (CORPORATE STANDARD) */}
      <section className="relative min-h-[85vh] flex items-center justify-center border-b border-[#222] overflow-hidden bg-black">
        {/* Background Visual */}
        <div className="absolute inset-0 z-0">
          <SafeImage
            src="/HSEQ1.webp"
            fallbackSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Corporate Compliance"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/60 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-left pt-20">
            {/* Standardized Hero Label - Left Aligned */}
            <div className="flex items-center justify-start gap-3 mb-8 page-animate-tag">
                <div className="h-[2px] w-12 bg-geo-yellow shadow-[0_0_15px_#FFCC00]"></div>
                <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                    КОРПОРАТИВЕН СТАНДАРТ (HSEQ & ESG)
                </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8 uppercase tracking-tighter drop-shadow-2xl max-w-5xl page-animate-title">
              БЕЗКОМПРОМИСНО УПРАВЛЕНИЕ НА <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-geo-yellow to-yellow-600">РИСКА И КАЧЕСТВОТО</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light max-w-4xl leading-relaxed border-l-4 border-geo-yellow pl-6 py-2 bg-black/30 backdrop-blur-sm page-animate-desc">
                Индустриалното лидерство изисква повече от технологични иновации – то изисква абсолютна отговорност. В GEONYX всеки процес – от синтеза на суровините до финалната полимеризация на обекта – е подчинен на строг корпоративен код.
            </p>
        </div>
      </section>

      {/* 2. THE 4 PILLARS - ZIG ZAG LAYOUT */}
      <div className="w-full bg-[#111]">
        
        {/* BLOCK 1: HEALTH & SAFETY (Left Img) */}
        <section className="flex flex-col lg:flex-row w-full min-h-[600px] border-b border-[#222]">
            {/* Image Column */}
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/HSEQ2.webp" 
                    fallbackSrc="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
                    alt="Safety Analysis" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80" 
                />
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <Activity className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">Безопасност на труда</span>
                </div>
            </div>

            {/* Text Column */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <div className="mb-8">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">
                            КУЛТУРА "НУЛЕВ РИСК"
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        УПРАВЛЕНИЕ НА <br/> ПРОФЕСИОНАЛНИЯ РИСК
                    </h3>
                </div>

                <div className="space-y-6">
                    <p className="text-gray-400 text-lg leading-relaxed">
                        За нас безопасността не е документация, а оперативна култура. Нашите екипи оперират на базата на строги протоколи за анализ на безопасността на работното място (Job Safety Analysis - JSA). Разработвайки системи със 100% липса на летливи органични съединения (VOC-Free) и токсични разтворители, ние елиминираме респираторните рискове за апликаторите и персонала на обекта.
                    </p>
                    <div className="flex items-center gap-4 text-sm font-bold text-white uppercase tracking-wider">
                        <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-geo-yellow"/> ISO 45001</span>
                        <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-geo-yellow"/> JSA Protocols</span>
                    </div>
                </div>
            </div>
        </section>

        {/* BLOCK 2: SUSTAINABILITY (Right Img) */}
        <section className="flex flex-col lg:flex-row-reverse w-full min-h-[600px] border-b border-[#222]">
            {/* Image Column */}
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/HSEQ3.webp" 
                    fallbackSrc="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1527&auto=format&fit=crop"
                    alt="Eco Material Cycle" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80" 
                />
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><Leaf className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">Въглеродна Неутралност</span>
                </div>
            </div>

            {/* Text Column */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <div className="mb-8">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">
                            ЕКОЛОГИЧЕН ОТПЕЧАТЪК
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        ДЕКАРБОНИЗАЦИЯ <br/> И EPD
                    </h3>
                </div>

                <div className="space-y-6">
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Портланд циментът генерира 8% от световните емисии на CO2. GEONYX променя парадигмата. Нашата геополимерна технология намалява въглеродния отпечатък с до 80% спрямо конвенционалния бетон. Чрез Екологични продуктови декларации (EPD) и анализ на жизнения цикъл (LCA), ние предоставяме прозрачни данни за декарбонизация.
                    </p>
                    <div className="flex items-center gap-4 text-sm font-bold text-white uppercase tracking-wider">
                        <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-geo-yellow"/> ISO 14001</span>
                        <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-geo-yellow"/> LEED / BREEAM</span>
                    </div>
                </div>
            </div>
        </section>

        {/* BLOCK 3: QUALITY ASSURANCE (Left Img) */}
        <section className="flex flex-col lg:flex-row w-full min-h-[600px] border-b border-[#222]">
            {/* Image Column */}
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/HSEQ4.webp" 
                    fallbackSrc="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"
                    alt="Lab Quality Control" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80" 
                />
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <FileText className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">Контрол на качеството</span>
                </div>
            </div>

            {/* Text Column */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <div className="mb-8">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">
                            ПЪЛНА ПРОСЛЕДИМОСТ
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        QA/QC КОНТРОЛ <br/> НА ПАРТИДИТЕ
                    </h3>
                </div>

                <div className="space-y-6">
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Индустриалният мащаб не търпи вариации. Нашият контрол на качеството (QC) е изцяло лабораторен и инструментален. Всяка партида суровина преминава през входящ спектрален анализ, а референтни проби от всяко производство се архивират. Тази абсолютна трасируемост гарантира, че механичните свойства ще бъдат възпроизведени със 100% точност.
                    </p>
                    <div className="flex items-center gap-4 text-sm font-bold text-white uppercase tracking-wider">
                        <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-geo-yellow"/> ISO 9001</span>
                        <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-geo-yellow"/> TDS Verification</span>
                    </div>
                </div>
            </div>
        </section>

        {/* BLOCK 4: GOVERNANCE / ETHICS (Right Img) */}
        <section className="flex flex-col lg:flex-row-reverse w-full min-h-[600px] border-b border-[#222]">
            {/* Image Column */}
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GENYX-ETHICAL-SUPPLY-CHAIN.webp" 
                    fallbackSrc="/GENYX-ETHICAL-SUPPLY-CHAIN.webp"
                    alt="Ethical Governance" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80" 
                />
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><Scale className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">Управление</span>
                </div>
            </div>

            {/* Text Column */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <div className="mb-8">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">
                            ESG СЪОТВЕТСТВИЕ
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        ЕТИЧНА ВЕРИГА <br/> НА ДОСТАВКИ
                    </h3>
                </div>

                <div className="space-y-6">
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Отговорността започва преди производството. Ние одитираме нашите доставчици на суровини съгласно най-строгите европейски директиви. Всички компоненти в минералните матрици на GEONYX са напълно съвместими с регламента REACH, гарантирайки липсата на конфликтни минерали и токсични прекурсори в нашата верига на доставки.
                    </p>
                    <div className="flex items-center gap-4 text-sm font-bold text-white uppercase tracking-wider">
                        <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-geo-yellow"/> REACH Compliant</span>
                        <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-geo-yellow"/> Supply Audit</span>
                    </div>
                </div>
            </div>
        </section>

      </div>

      {/* 4. CERTIFICATIONS & STANDARDS GRID */}
      <section className="py-24 bg-[#0a0a0a] border-t border-[#222]">
          <div className="container mx-auto px-6 md:px-10">
              <div className="flex flex-col items-center text-center mb-16">
                  <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs mb-2">КОРПОРАТИВНА ПОЛИТИКА</span>
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase">ОФИЦИАЛНИ СТАНДАРТИ</h2>
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
                          Пълна съвместимост с директивите на ЕС за химическа безопасност и хигиена (HACCP/GMP).
                      </p>
                  </div>

              </div>

              <div className="flex justify-center">
                  <button className="px-8 py-4 border border-[#333] text-gray-400 hover:text-black hover:bg-geo-yellow hover:border-geo-yellow text-xs font-bold uppercase transition-colors flex items-center gap-3 h-12 tracking-wide">
                      <Download className="w-5 h-5" />
                      ИЗТЕГЛИ ИНТЕГРИРАНА HSEQ ПОЛИТИКА (PDF)
                  </button>
              </div>

          </div>
      </section>

      {/* FOOTER CTA (ФИНАЛНО ДЕЙСТВИЕ) */}
      <section className="bg-geo-yellow py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-6 uppercase tracking-tight leading-tight">
             ТЕХНОЛОГИЧЕН ПАРТНЬОР ЗА <br/> КРИТИЧНА ИНФРАСТРУКТУРА
          </h2>
          <p className="text-xl text-black/80 mb-10 max-w-3xl mx-auto font-medium">
             От предварителния инженерен анализ и оценката на жизнения цикъл (LCA), до безупречното изпълнение на обекта.
          </p>
          <button 
            onClick={() => navigate('/contacts')} 
            className="h-12 px-8 flex items-center justify-center gap-2 border border-black/30 text-black text-sm font-bold tracking-wide transition-all bg-black text-white hover:bg-[#222] border-none uppercase group mx-auto shadow-2xl"
          >
               СВЪРЖЕТЕ СЕ С ОТДЕЛ HSEQ <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

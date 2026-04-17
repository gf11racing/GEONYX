
import React, { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Button } from './Button';
import { 
  BadgeCheck, FileText, ShieldCheck, Scale, ClipboardCheck, Stamp, 
  Flame, AlertTriangle, Droplets, Biohazard, Activity, ArrowRight,
  Lock, CheckCircle, Leaf, Globe
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SafeImage } from './SafeImage';

export const CertificatesPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "GEONYX | Сертификати и съответствие – CE, EN, ISO, HACCP";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', "Официални сертификати и декларации за съответствие на GEONYX – CE маркировка, EN стандарти, ISO протоколи, HACCP одобрение и лабораторни изпитвания за индустриални минерални системи ARMOR, CHEM, HYDRO и THERM.");
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

      {/* 1. HERO SECTION (CERTIFIED COMPLIANCE) */}
      <section className="relative min-h-[85vh] flex items-center justify-center border-b border-[#222] overflow-hidden bg-black">
        {/* Visual Context - Clean Image Lock (No Grayscale) */}
        <div className="absolute inset-0 z-0">
          <SafeImage 
            src="/GEONYX-Certificates.jpeg" 
            fallbackSrc="/GEONYX-Certificates.webp"
            alt="Regulatory Compliance" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/60 to-transparent"></div>
          {/* Legal Grid Texture */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-20"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-left pt-20">
             {/* Style Line - Left Aligned */}
            <div className="flex items-center justify-start gap-3 mb-8 page-animate-tag">
                <div className="h-[2px] w-12 bg-geo-yellow shadow-[0_0_15px_#FFCC00]"></div>
                <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">РЕГУЛАТОРНО СЪОТВЕТСТВИЕ</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 uppercase tracking-tighter drop-shadow-2xl max-w-6xl page-animate-title">
              СЕРТИФИЦИРАНО <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-geo-yellow to-yellow-600">КАЧЕСТВО</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light max-w-4xl leading-relaxed border-l-4 border-geo-yellow pl-6 py-2 bg-black/30 backdrop-blur-sm page-animate-desc">
                Инженерното доверие не се базира на обещания, а на независим лабораторен контрол и стриктно спазване на европейските директиви. Системите на GEONYX са проектирани да покриват и надхвърлят най-строгите стандарти.
            </p>
        </div>
      </section>

      {/* 2. BLOCK 1: STRUCTURAL & LEGAL */}
      <section className="w-full bg-[#111] border-b border-[#222]">
        <div className="flex flex-col lg:flex-row w-full min-h-[600px]">
            {/* Image Column */}
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-Certificates1.webp" 
                    fallbackSrc="/GEONYX-Certificates1.webp"
                    alt="Structural Integrity Test" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80" 
                />
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <Scale className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">КОНСТРУКЦИЯ</span>
                </div>
            </div>

            {/* Text Column */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <div className="mb-8">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">
                             ЛЕГАЛНА БАЗА
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        CE МАРКИРОВКА & <br/> СТРУКТУРНА ЦЯЛОСТ
                    </h3>
                </div>

                <div className="space-y-8">
                    <h4 className="text-white font-bold text-sm uppercase tracking-wider border-b border-[#333] pb-2">
                        СЪОТВЕТСТВИЕ С EN 13813 И EN 1504-2
                    </h4>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Пълен легален паспорт за територията на Европейския съюз. Всички системи GEONYX се разработват в съответствие с хармонизираните стандарти за подови замазки (EN 13813) и системи за защита на бетонни конструкции (EN 1504-2). Всяка партида е придружена от Декларация за експлоатационни показатели (DoP), гарантираща декларираните класове.
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                        <span className="px-3 py-1 border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase bg-geo-yellow/5">CE MARK</span>
                        <span className="px-3 py-1 border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase bg-geo-yellow/5">EN 13813</span>
                        <span className="px-3 py-1 border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase bg-geo-yellow/5">EN 1504-2</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 3. BLOCK 2: FIRE SAFETY */}
      <section className="w-full bg-[#0F0F0F] border-b border-[#222]">
        <div className="flex flex-col lg:flex-row-reverse w-full min-h-[600px]">
            {/* Image Column */}
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-Certificates2.webp" 
                    fallbackSrc="/GEONYX-Certificates2.webp"
                    alt="Fire Resistance Test" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80" 
                />
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><Flame className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">ПОЖАРНА БЕЗОПАСНОСТ</span>
                </div>
            </div>

            {/* Text Column */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">
                             ПОЖАРНА БЕЗОПАСНОСТ
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        ПОЖАРНА И <br/> АВАРИЙНА БЕЗОПАСНОСТ
                    </h3>
                </div>

                <div className="space-y-8">
                    <h4 className="text-white font-bold text-sm uppercase tracking-wider border-b border-[#333] pb-2">
                        ЕВРОКЛАСИФИКАЦИЯ ЗА НЕГОРИМОСТ (EN 13501-1)
                    </h4>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Критичен параметър за инфраструктурни обекти (тунели, метростанции) и обществени сгради. Минералната природа на геополимерните ни матрици осигурява най-високите класове на пожароустойчивост (Euroclass A1fl / Bfl-s1). Системите не поддържат горене, не отделят токсичен дим и предотвратяват структурни експлозии (Spalling) при екстремни температури.
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                        <span className="px-3 py-1 border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase bg-geo-yellow/5">EN 13501-1</span>
                        <span className="px-3 py-1 border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase bg-geo-yellow/5">CLASS A1fl</span>
                        <span className="px-3 py-1 border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase bg-geo-yellow/5">НЕГОРИМ</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 4. BLOCK 3: HEALTH, SAFETY & ENVIRONMENT (HSE) */}
      <section className="w-full bg-[#111] border-b border-[#222]">
        <div className="flex flex-col lg:flex-row w-full min-h-[600px]">
            {/* Image Column */}
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-HYGIENE-AND=ASEPTIC-CONTROL.webp" 
                    fallbackSrc="/GEONYX-HYGIENE-AND=ASEPTIC-CONTROL.webp"
                    alt="Slip Resistance Test" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80" 
                />
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <Activity className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">HSE СТАНДАРТ</span>
                </div>
            </div>

            {/* Text Column */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">
                             БЕЗОПАСНОСТ И ЕКОЛОГИЯ
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        ЗДРАВЕ, БЕЗОПАСНОСТ <br/> И ЕКОЛОГИЯ
                    </h3>
                </div>

                <div className="space-y-8">
                    <h4 className="text-white font-bold text-sm uppercase tracking-wider border-b border-[#333] pb-2">
                        ПРОТИВОХЛЪЗГАНЕ И ЗАЩИТА НА ВОДИТЕ (WHG)
                    </h4>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Защита на персонала и околната среда. Повърхностите ни се тестват за коефициент на триене (DIN 51130 / DIN 51097), осигурявайки класове на противохлъзгане от R9 до R13 за безопасна работна среда дори при разливи на масла. Серията GEONYX CHEM е проектирана да отговаря на немския закон за водите (WHG §19) за вторична херметизация на опасни химикали.
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                        <span className="px-3 py-1 border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase bg-geo-yellow/5">DIN 51130</span>
                        <span className="px-3 py-1 border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase bg-geo-yellow/5">WHG §19</span>
                        <span className="px-3 py-1 border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase bg-geo-yellow/5">VOC-FREE</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 5. BLOCK 4: FOOD CONTACT & PHARMA */}
      <section className="w-full bg-[#0F0F0F] border-b border-[#222]">
        <div className="flex flex-col lg:flex-row-reverse w-full min-h-[600px]">
            {/* Image Column */}
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX=HEALTH-SAFETY-AND-ENVIRONMENT.webp" 
                    fallbackSrc="/GEONYX=HEALTH-SAFETY-AND-ENVIRONMENT.webp"
                    alt="Sterile Environment" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80" 
                />
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><Biohazard className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">ХИГИЕНА</span>
                </div>
            </div>

            {/* Text Column */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">
                             ХИГИЕНА И ФАРМАЦИЯ
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        ХИГИЕНА И <br/> АСЕПТИЧЕН КОНТРОЛ
                    </h3>
                </div>

                <div className="space-y-8">
                    <h4 className="text-white font-bold text-sm uppercase tracking-wider border-b border-[#333] pb-2">
                        HACCP, GMP И КОНТАКТ С ХРАНИ
                    </h4>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Чистата минерална формула (без разтворители и пластификатори) е еталон за хранително-вкусовата и фармацевтичната промишленост. Монолитната, бактериостатична повърхност елиминира риска от развитие на биофилм. Покрива стриктните изисквания на системите HACCP, Добрата производствена практика (GMP) и стандартите за директен контакт с питейна вода.
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                        <span className="px-3 py-1 border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase bg-geo-yellow/5">HACCP ОДОБРЕН</span>
                        <span className="px-3 py-1 border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase bg-geo-yellow/5">GMP СЪОТВЕТСТВИЕ</span>
                        <span className="px-3 py-1 border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase bg-geo-yellow/5">БЕЗОПАСНО ЗА ПИТЕЙНА ВОДА</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 6. BLOCK 5: QUALITY MANAGEMENT */}
      <section className="py-24 bg-[#0a0a0a] border-b border-[#222]">
          <div className="container mx-auto px-6 md:px-10 text-center">
              <div className="mb-12">
                   <div className="inline-flex items-center justify-center p-4 bg-[#111] border border-[#333] rounded-full mb-6">
                       <BadgeCheck className="w-10 h-10 text-geo-yellow" />
                   </div>
                   <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-4">ПРОТОКОЛИ ЗА КОНТРОЛ НА КАЧЕСТВОТО</h2>
                   <span className="text-gray-500 font-bold uppercase tracking-[0.2em] text-xs">ISO 9001:2015 И ПЪЛНА ПРОСЛЕДИМОСТ</span>
              </div>
              
              <div className="max-w-4xl mx-auto bg-[#141414] border border-[#222] p-10 md:p-16">
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 font-light">
                      Индустриалното производство не търпи вариации. Процесите в GEONYX са структурирани върху принципите на <span className="text-white font-bold">ISO 9001:2015</span>. От входящия контрол на фината фракция до лазерната спектроскопия на крайния продукт – всяка стъпка е протоколирана. Това гарантира 100% повторяемост на качеството и абсолютна партидна проследимост.
                  </p>
                  <div className="flex justify-center gap-4">
                      <span className="flex items-center gap-2 text-geo-yellow font-bold uppercase text-xs tracking-wider border border-geo-yellow/30 px-4 py-2 bg-geo-yellow/5">
                          <CheckCircle className="w-4 h-4"/> ISO 9001:2015
                      </span>
                      <span className="flex items-center gap-2 text-geo-yellow font-bold uppercase text-xs tracking-wider border border-geo-yellow/30 px-4 py-2 bg-geo-yellow/5">
                          <CheckCircle className="w-4 h-4"/> ПРОСЛЕДИМОСТ НА ПАРТИДИТЕ
                      </span>
                  </div>
              </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
                  
                  {/* CARD 1 */}
                  <div className="bg-[#111] p-8 border border-[#222] hover:border-geo-yellow transition-colors group">
                      <div className="mb-6"><BadgeCheck className="w-10 h-10 text-gray-600 group-hover:text-geo-yellow transition-colors" /></div>
                      <h4 className="text-xl font-black text-white uppercase mb-2">ISO 9001:2015</h4>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Quality Management</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                          Система за управление на качеството. Обект на непрекъснат независим одит.
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
                          Здраве и безопасност при работа. Институционализирана защита на персонала.
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

      {/* 7. FOOTER / STATUS DISCLAIMER */}
      <section className="py-16 bg-[#1a1a1a] border-t border-[#222]">
          <div className="container mx-auto px-6 md:px-10 max-w-4xl">
              <div className="bg-[#111] border-l-4 border-geo-yellow p-8 shadow-2xl relative">
                  <div className="flex items-start gap-4">
                      <Lock className="w-6 h-6 text-geo-yellow flex-shrink-0 mt-1" />
                      <div>
                          <h4 className="text-geo-yellow font-black uppercase text-sm mb-3 tracking-wider">АКРЕДИТАЦИОНЕН СТАТУС</h4>
                          <p className="text-gray-400 text-xs md:text-sm leading-relaxed text-justify font-mono">
                              Към настоящия момент, системите GEONYX преминават през финална фаза на разширени независими изпитвания в акредитирани европейски лаборатории (Third-party testing). Целта е придобиване на пълния спектър от международни сертификати. Официалните протоколи от изпитванията ще бъдат публикувани в този портал и достъпни за директно изтегляне веднага след тяхното легализиране. За конкретни проектни запитвания, моля свържете се с нашия технически отдел.
                          </p>
                      </div>
                  </div>
              </div>
              
              <div className="text-center mt-12">
                  <button onClick={() => navigate('/contacts')} className="h-12 px-8 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase group mx-auto">
                      СВЪРЖЕТЕ СЕ С ТЕХНИЧЕСКИ ОТДЕЛ
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
              </div>
          </div>
      </section>

      <Footer />
    </div>
  );
};


import React, { useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Button } from './Button';
import { 
  Cuboid, FileCode, Database, Send, Layers, Box, CheckCircle, Lock, 
  Settings, Globe, RefreshCw, PenTool, Layout, FileText, ArrowRight
} from 'lucide-react';
import { SafeImage } from './SafeImage';

export const CadBimPage: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "GEONYX | CAD & BIM Библиотека – Детайли, модели и проектантска документация";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', "GEONYX CAD & BIM библиотека с технически детайли, DWG чертежи, Revit фамилии, BIM модели и системни сечения за архитектурно и индустриално проектиране. Подходяща за проектанти, инженери и BIM координатори в инфраструктурни и индустриални обекти.");
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] font-sans text-gray-200 selection:bg-geo-yellow selection:text-black">
      <Navbar />

      {/* STATIC STYLES TO PREVENT FLICKERING */}
      <style>{`
        @keyframes width-grow { from { width: 0; } }
        @keyframes height-grow { from { height: 0; } }
        @keyframes dash-draw { to { stroke-dashoffset: 0; } }
      `}</style>

      {/* 1. HERO SECTION (DIGITAL TWIN READY) */}
      <section className="relative min-h-[85vh] flex items-center justify-center border-b border-[#222] overflow-hidden bg-black">
        {/* Visual Context */}
        <div className="absolute inset-0 z-0">
          <SafeImage 
            src="/GEONYX-CAD-BIM.webp" 
            fallbackSrc="/GEONYX-CAD-BIM.webp"
            alt="3D Wireframe Model" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/60 to-transparent"></div>
          {/* Tech Grid Overlay - Removed per Clean Image Lock, but soft gradient remains */}
        </div>

        <div className="relative z-10 container mx-auto px-6 text-left pt-20">
             {/* Style Line - Left Aligned */}
            <div className="flex items-center justify-start gap-3 mb-8 page-animate-tag">
                <div className="h-[2px] w-12 bg-geo-yellow shadow-[0_0_15px_#FFCC00]"></div>
                <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">ISO 19650 СЪОТВЕТСТВИЕ</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 uppercase tracking-tighter drop-shadow-2xl max-w-6xl page-animate-title">
              ДИГИТАЛНИ <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-geo-yellow to-yellow-600">ДВОЙНИЦИ</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light max-w-4xl leading-relaxed border-l-4 border-geo-yellow pl-6 py-2 bg-black/30 backdrop-blur-sm page-animate-desc">
              VDC ИНТЕГРАЦИЯ И ПАРАМЕТРИЧНО ПРОЕКТИРАНЕ. <br className="hidden md:block"/>
              Проектирайте с абсолютна точност преди първото изливане на бетона. GEONYX е оптимизиран за внедряване във вашата BIM среда от фаза 'Концептуален дизайн' до 'Фасилити мениджмънт' (LOD 100 - LOD 500).
            </p>

            <div className="flex flex-col sm:flex-row gap-4 page-animate-buttons">
                <a href="#access-form">
                    <button className="h-12 px-8 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase group">
                        ЗАЯВИ ДОСТЪП
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </a>
            </div>
        </div>
      </section>

      {/* 2. BLOCK 1: 2D DRAFTING */}
      <div className="w-full bg-[#111]">
        <section className="flex flex-col lg:flex-row w-full min-h-[700px] border-b border-[#222]">
            {/* Image Column */}
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-CAD-BIM1.webp" 
                    fallbackSrc="/GEONYX-CAD-BIM1.webp"
                    alt="Technical CAD Drawing Screen" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <FileCode className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">.DWG / .DXF</span>
                </div>
            </div>

            {/* Text Column */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <div className="mb-8">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">
                             2D ПРОЕКТИРАНЕ
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        КРИТИЧНИ <br/> КОНСТРУКТИВНИ ВЪЗЛИ
                    </h3>
                </div>

                <div className="space-y-8">
                    <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-[#333] pl-6">
                        Елиминирайте риска от грешки в изпълнението. Системите за тежка индустрия дефектират най-често в точките на прекъсване. Предоставяме стандартизирана библиотека от готови 2D разрези за всички критични конструктивни възли.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-[#1a1a1a] p-4 border border-[#333] hover:border-geo-yellow transition-colors group cursor-default">
                            <h4 className="text-white font-bold uppercase text-xs mb-1 group-hover:text-geo-yellow">ДЕТАЙЛ 01</h4>
                            <p className="text-gray-500 text-[11px]">Връзка "Стена-Под" с хигиенен холкер (Cove Skirting).</p>
                        </div>
                        <div className="bg-[#1a1a1a] p-4 border border-[#333] hover:border-geo-yellow transition-colors group cursor-default">
                            <h4 className="text-white font-bold uppercase text-xs mb-1 group-hover:text-geo-yellow">ДЕТАЙЛ 02</h4>
                            <p className="text-gray-500 text-[11px]">Интеграция с тежкотоварни линейни сифони.</p>
                        </div>
                        <div className="bg-[#1a1a1a] p-4 border border-[#333] hover:border-geo-yellow transition-colors group cursor-default">
                            <h4 className="text-white font-bold uppercase text-xs mb-1 group-hover:text-geo-yellow">ДЕТАЙЛ 03</h4>
                            <p className="text-gray-500 text-[11px]">Обработка на динамични дилатационни фуги.</p>
                        </div>
                        <div className="bg-[#1a1a1a] p-4 border border-[#333] hover:border-geo-yellow transition-colors group cursor-default">
                            <h4 className="text-white font-bold uppercase text-xs mb-1 group-hover:text-geo-yellow">ДЕТАЙЛ 04</h4>
                            <p className="text-gray-500 text-[11px]">Вторична херметизация при химически обваловки.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* 3. BLOCK 2: BIM & INFORMATION MODELING */}
        <section className="flex flex-col lg:flex-row-reverse w-full min-h-[700px] border-b border-[#222]">
            {/* Image Column */}
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage 
                    src="/GEONYX-INFORMATION-MODELING.webp" 
                    fallbackSrc="/GEONYX-INFORMATION-MODELING.webp"
                    alt="BIM Model Visualization" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><Database className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">LOD 400</span>
                </div>
            </div>

            {/* Text Column */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <div className="mb-8">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">
                             3D ПАРАМЕТРИ
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        ИНФОРМАЦИОННО <br/> МОДЕЛИРАНЕ (BIM)
                    </h3>
                </div>

                <div className="space-y-8">
                    <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-[#333] pl-6">
                        За проектите, изискващи стриктно информационно моделиране, предоставяме системни фамилии за Revit (.RFA), ArchiCAD (.LCF) и отворен стандарт OpenBIM (.IFC). Моделите са заредени с критична мета-информация, позволяваща точни изчисления (Quantity Take-offs), анализ на мъртвото тегло (Dead Load) и термична проводимост.
                    </p>

                    <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest">
                         <span className="flex items-center gap-2 text-geo-yellow bg-geo-yellow/10 px-3 py-1 border border-geo-yellow/30"><Box className="w-4 h-4"/> .RFA Files</span>
                         <span className="flex items-center gap-2 text-geo-yellow bg-geo-yellow/10 px-3 py-1 border border-geo-yellow/30"><Layout className="w-4 h-4"/> .IFC OpenBIM</span>
                         <span className="flex items-center gap-2 text-geo-yellow bg-geo-yellow/10 px-3 py-1 border border-geo-yellow/30"><Settings className="w-4 h-4"/> Metadata Ready</span>
                    </div>
                </div>
            </div>
        </section>
      </div>

      {/* 4. BLOCK 3: GLOBAL CLASSIFICATION */}
      <section className="py-24 bg-[#0a0a0a] border-b border-[#222]">
          <div className="container mx-auto px-6 md:px-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                   <div>
                       <div className="flex items-center gap-3 mb-2">
                            <div className="h-[2px] w-6 bg-geo-yellow"></div>
                            <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">
                                СТАНДАРТИ ЗА ИНТЕГРАЦИЯ
                            </span>
                       </div>
                       <h2 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight mb-6">
                           ГЛОБАЛНИ СТАНДАРТИ <br/> ЗА КЛАСИФИКАЦИЯ
                       </h2>
                       <p className="text-gray-400 text-lg leading-relaxed mb-8">
                           Готови за международни държавни поръчки. Всички дигитални активи на GEONYX са предварително класифицирани и кодирани съгласно водещите световни стандарти (UniClass 2015 за Европа/UK и MasterFormat/OmniClass за Северна Америка). Това гарантира безпроблемна интеграция в глобални спецификации.
                       </p>
                       <div className="flex gap-6">
                            <div className="border border-[#333] p-4 w-full text-center group hover:border-geo-yellow transition-colors">
                                <Globe className="w-6 h-6 text-gray-500 mx-auto mb-2 group-hover:text-geo-yellow" />
                                <div className="text-white font-bold text-sm uppercase">UniClass 2015</div>
                                <div className="text-[10px] text-gray-500">ISO 12006-2</div>
                            </div>
                            <div className="border border-[#333] p-4 w-full text-center group hover:border-geo-yellow transition-colors">
                                <FileText className="w-6 h-6 text-gray-500 mx-auto mb-2 group-hover:text-geo-yellow" />
                                <div className="text-white font-bold text-sm uppercase">MasterFormat</div>
                                <div className="text-[10px] text-gray-500">CSI / CSC</div>
                            </div>
                       </div>
                   </div>
                   <div className="relative h-[300px] border border-[#222] bg-[#111] overflow-hidden flex items-center justify-center p-8">
                        <div className="font-mono text-xs text-geo-yellow leading-loose w-full">
                            <span className="text-gray-500">// Geonyx_System_Properties.json</span><br/>
                            {'{'}<br/>
                            &nbsp;&nbsp;"Classification": "Pr_25_30_04",<br/>
                            &nbsp;&nbsp;"Uniclass_Description": "Resinous flooring systems",<br/>
                            &nbsp;&nbsp;"MasterFormat": "09 67 00",<br/>
                            &nbsp;&nbsp;"OmniClass": "23-13 31 17",<br/>
                            &nbsp;&nbsp;"FireRating": "Class A1fl",<br/>
                            &nbsp;&nbsp;"CompressiveStrength": "110MPa"<br/>
                            {'}'}
                        </div>
                   </div>
              </div>
          </div>
      </section>

      {/* 5. BLOCK 4: FACILITY MANAGEMENT */}
      <section className="py-24 bg-[#080808] border-b border-[#222]">
          <div className="container mx-auto px-6 md:px-10">
              <div className="max-w-4xl mx-auto text-center mb-12">
                   <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs mb-2 block">6D BIM</span>
                   <h2 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                       УПРАВЛЕНИЕ НА ЖИЗНЕНИЯ ЦИКЪЛ
                   </h2>
                   <div className="w-24 h-1 bg-geo-yellow mx-auto mt-6 mb-8"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-[#111] border-l-4 border-geo-yellow p-8">
                      <RefreshCw className="w-8 h-8 text-geo-yellow mb-4" />
                      <h4 className="text-white font-bold uppercase mb-2">COBie ИНТЕГРАЦИЯ</h4>
                      <p className="text-gray-400 text-sm">Структурирани данни за фасилити мениджмънт. Експлоатационен живот и цикли на поддръжка.</p>
                  </div>
                  <div className="bg-[#111] border-l-4 border-geo-yellow p-8">
                      <Settings className="w-8 h-8 text-geo-yellow mb-4" />
                      <h4 className="text-white font-bold uppercase mb-2">ПОДДРЪЖКА</h4>
                      <p className="text-gray-400 text-sm">Протоколи за химическо почистване и инспекция, вградени директно в дигиталния двойник.</p>
                  </div>
                  <div className="bg-[#111] border-l-4 border-geo-yellow p-8">
                      <FileText className="w-8 h-8 text-geo-yellow mb-4" />
                      <h4 className="text-white font-bold uppercase mb-2">ГАРАНЦИЯ</h4>
                      <p className="text-gray-400 text-sm">Дигитален паспорт на системата с проследимост на партидите и гаранционните срокове.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* 6. BLOCK 5: THE ACCESS PORTAL */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden" id="access-form">
          <div className="absolute inset-0">
             <SafeImage 
                src="/GEONYX-B2B-B2G.webp"
                fallbackSrc="/GEONYX-B2B-B2G.webp"
                alt="Background"
                className="w-full h-full object-cover opacity-10"
             />
          </div>
          
          <div className="container mx-auto px-6 md:px-10 max-w-3xl relative z-10">
              
              <div className="bg-[#111] border border-[#333] p-8 md:p-16 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                  
                  <div className="text-center mb-12">
                      <div className="inline-flex items-center justify-center p-4 bg-[#1A1A1A] rounded-full border border-[#333] mb-6">
                          <Lock className="w-8 h-8 text-geo-yellow" />
                      </div>
                      <span className="text-gray-500 font-bold uppercase tracking-[0.2em] text-xs mb-2 block">ЗАЩИТЕН ЦЕНТЪР ЗА ДАННИ</span>
                      <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-4">ЗАЯВЕТЕ ДОСТЪП ДО АРХИВА</h2>
                      <p className="text-gray-400 max-w-xl mx-auto text-sm">
                          Поради стриктния контрол на версиите (Version Control), достъпът до CAD/BIM библиотеката се генерира индивидуално чрез защитен линк.
                      </p>
                  </div>

                  {formState === 'success' ? (
                      <div className="flex flex-col items-center justify-center py-10 text-center bg-[#151515] border border-green-900/30 rounded-sm">
                          <div className="w-20 h-20 bg-green-900/20 rounded-full flex items-center justify-center mb-6 border border-green-500/30">
                              <CheckCircle className="w-10 h-10 text-green-500" />
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-2">ЛИЦЕНЗЪТ Е ИЗДАДЕН</h3>
                          <p className="text-gray-400 mb-6">Линк за достъп е изпратен на вашия корпоративен имейл.</p>
                          <button 
                            onClick={() => setFormState('idle')}
                            className="text-geo-yellow font-bold uppercase text-xs border-b border-geo-yellow hover:text-white hover:border-white transition-colors pb-1"
                          >
                              Върни се обратно
                          </button>
                      </div>
                  ) : (
                      <form onSubmit={handleSubmit} className="space-y-8">
                          
                          <div className="grid grid-cols-1 gap-6">
                              <div className="group">
                                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Име на Архитект / Главен Инженер *</label>
                                  <input 
                                    type="text" required
                                    className="w-full bg-[#0F0F0F] border-b border-[#333] py-3 text-white focus:outline-none focus:border-geo-yellow transition-colors placeholder-gray-700"
                                    placeholder="Име..."
                                  />
                              </div>
                              
                              <div className="group">
                                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Компания / Архитектурно Студио *</label>
                                  <input 
                                    type="text" required
                                    className="w-full bg-[#0F0F0F] border-b border-[#333] py-3 text-white focus:outline-none focus:border-geo-yellow transition-colors placeholder-gray-700"
                                    placeholder="Студио..."
                                  />
                              </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                               <div className="group">
                                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Тип на проекта *</label>
                                  <div className="relative">
                                      <select 
                                        required
                                        className="w-full bg-[#0F0F0F] border-b border-[#333] py-3 text-white appearance-none focus:outline-none focus:border-geo-yellow transition-colors cursor-pointer"
                                      >
                                          <option value="" disabled selected>-- Изберете --</option>
                                          <option value="industrial">Индустриален</option>
                                          <option value="military">Военен</option>
                                          <option value="infrastructure">Инфраструктурен</option>
                                          <option value="pharma">Фармация / Чисти стаи</option>
                                      </select>
                                  </div>
                              </div>

                              <div className="group">
                                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Предпочитана среда *</label>
                                  <div className="relative">
                                      <select 
                                        required
                                        className="w-full bg-[#0F0F0F] border-b border-[#333] py-3 text-white appearance-none focus:outline-none focus:border-geo-yellow transition-colors cursor-pointer"
                                      >
                                          <option value="" disabled selected>-- Изберете --</option>
                                          <option value="revit">Autodesk Revit</option>
                                          <option value="archicad">ArchiCAD</option>
                                          <option value="autocad">AutoCAD (2D)</option>
                                          <option value="ifc">OpenBIM (IFC)</option>
                                      </select>
                                  </div>
                              </div>
                          </div>

                          <div className="group">
                              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Корпоративен Email за получаване на линк *</label>
                              <input 
                                type="email" required
                                className="w-full bg-[#0F0F0F] border-b border-[#333] py-3 text-white focus:outline-none focus:border-geo-yellow transition-colors placeholder-gray-700"
                                placeholder="arch@studio.com"
                              />
                          </div>

                          <div className="pt-6">
                              <button 
                                type="submit" 
                                className="w-full h-12 px-8 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase group"
                                disabled={formState === 'submitting'}
                              >
                                  {formState === 'submitting' ? 'ВАЛИДИРАНЕ...' : 'ГЕНЕРИРАЙ СИГУРЕН ДОСТЪП'} <Send className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </button>
                          </div>
                      </form>
                  )}
              </div>
          </div>
      </section>

      <Footer />
    </div>
  );
};

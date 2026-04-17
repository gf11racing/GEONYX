import React, { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Button } from './Button';
import { Atom, Zap, Flame, Leaf, ArrowRight, CheckCircle, X, Microscope, Clock, ShieldAlert, Rocket, ShieldCheck, Droplets, Gem } from 'lucide-react';
import { CrossSectionHotspots } from './CrossSectionHotspots'; // NEW IMPORT

export const TechnologyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0F0F0F] font-sans text-gray-200 selection:bg-geo-yellow selection:text-black">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center border-b border-[#222] overflow-hidden bg-black">
        {/* Background Visual: Molecular Structure */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/GEONYX-background-technology.jpeg" 
            onError={(e) => { e.currentTarget.src = "/GEONYX-background-technology.jpeg" }} 
            alt="Geopolymer Molecular Structure" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F]/80 via-[#0F0F0F]/50 to-[#0F0F0F]"></div>
          {/* Hexagon Grid Overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')] opacity-10"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center pt-20">
            <div className="inline-flex items-center gap-2 border border-geo-yellow/30 bg-geo-yellow/10 px-4 py-1 rounded-full mb-8 backdrop-blur-md">
                <Atom className="w-4 h-4 text-geo-yellow" />
                <span className="text-geo-yellow font-bold uppercase tracking-widest text-xs">НАУКАТА НА GEONYX</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 uppercase tracking-tight drop-shadow-2xl max-w-5xl mx-auto">
              ГЕОПОЛИМЕР: <br/>
              НАУКАТА ЗА <span className="text-transparent bg-clip-text bg-gradient-to-r from-geo-yellow to-yellow-200">НЕРАЗРУШИМИТЕ ПОДОВЕ</span>.
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-10 font-light max-w-3xl mx-auto leading-relaxed border-l-4 border-geo-yellow pl-6 text-left md:text-center md:border-l-0 md:pl-0">
              Ние не просто леем бетон. Ние създаваме изкуствен камък чрез напреднала неорганична полимеризация.
            </p>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="py-24 px-6 md:px-20 bg-[#111] border-b border-[#222]">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-8 leading-tight">
                ЗАЩО ГЕОПОЛИМЕР?
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                GEONYX използва напреднала химия на неорганичните полимери. За разлика от портланд цимента, 
                който разчита на хидратация, нашите връзки се формират чрез <span className="text-white font-bold">поликондензация на алумосиликати</span>. 
                Резултатът е настилка с изключителна химическа устойчивост, по-бързо втвърдяване и значително по-нисък въглероден отпечатък.
            </p>
        </div>
      </section>
      
      {/* 3. NEW INTERACTIVE CROSS-SECTION */}
      <CrossSectionHotspots />

      {/* 4. THE CHEMISTRY (Image LEFT | Text RIGHT) */}
      <section className="w-full bg-[#0F0F0F] border-b border-[#222]">
        <div className="flex flex-col lg:flex-row min-h-[600px]">
            {/* Image Column */}
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black overflow-hidden">
                <img 
                    src="/GEONYX-technology1.jpeg" 
                    onError={(e) => { e.currentTarget.src = "/GEONYX-technology1.jpeg" }}
                    alt="Split screen microscopic comparison: Old porous Concrete vs Dense Geonyx Structure" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                {/* IMAGE BADGE */}
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <Microscope className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">Микроструктура</span>
                </div>
            </div>

            {/* Text Column */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center border-l border-[#222]">
                <div className="mb-6">
                    <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs mb-2 block">ХИМИЯТА</span>
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase leading-tight mb-6">
                        ПОЛИКОНДЕНЗАЦИЯ <br/> ВМЕСТО ХИДРАТАЦИЯ
                    </h2>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    Бетонът е като гъба – пълен с капиляри от изпарената вода. GEONYX е различен.
                </p>
                
                <div className="space-y-6">
                    <div className="bg-[#151515] p-6 border-l-2 border-geo-yellow">
                        <h4 className="text-white font-bold uppercase text-lg mb-2">Плътна структура</h4>
                        <p className="text-gray-500 text-sm">Химическата реакция изхвърля водата, създавайки плътна, непореста 3D решетка.</p>
                    </div>
                    <div className="bg-[#151515] p-6 border-l-2 border-geo-yellow">
                        <h4 className="text-white font-bold uppercase text-lg mb-2">Минерален произход</h4>
                        <p className="text-gray-500 text-sm">Ние не използваме петролни продукти (като епоксидите). GEONYX е 100% минерален "изкуствен камък".</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 5. SPEED & EFFICIENCY (Text LEFT | Image RIGHT) */}
      <section className="w-full bg-[#111] border-b border-[#222]">
        <div className="flex flex-col lg:flex-row-reverse min-h-[600px]">
            {/* Image Column */}
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black overflow-hidden">
                <img 
                    src="/GEONYX-technology2.jpeg" 
                    onError={(e) => { e.currentTarget.src = "/GEONYX-technology2.jpeg" }}
                    alt="Industrial forklift driving on fresh floor with digital timer 24:00 HOURS" 
                    className="absolute inset-0 w-full h-full object-cover opacity-90" 
                />
                 {/* IMAGE BADGE */}
                 <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><Clock className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">Бърза Полимеризация</span>
                </div>
            </div>

            {/* Text Column */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center border-r border-[#222]">
                <div className="mb-6">
                    <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs mb-2 block">СКОРОСТ И ЕФЕКТИВНОСТ</span>
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase leading-tight mb-6">
                        ВРЕМЕТО Е ПАРИ. <br/> <span className="text-geo-yellow">БУКВАЛНО.</span>
                    </h2>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    Индустрията не може да чака 28 дни бетонът да изсъхне. Нашата технология позволява екстремно бърза експлоатация.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="border border-[#333] p-6 bg-[#151515] hover:border-geo-yellow transition-colors group">
                        <div className="text-3xl font-black text-white mb-1 group-hover:text-geo-yellow">4-6 ЧАСА</div>
                        <div className="text-gray-500 text-xs font-bold uppercase tracking-wide">Време за стягане</div>
                    </div>
                    <div className="border border-[#333] p-6 bg-[#151515] hover:border-geo-yellow transition-colors group">
                        <div className="text-3xl font-black text-white mb-1 group-hover:text-geo-yellow">24 ЧАСА</div>
                        <div className="text-gray-500 text-xs font-bold uppercase tracking-wide">Пълно натоварване</div>
                    </div>
                </div>
                
                <div className="mt-8 flex items-center gap-3 text-white font-bold uppercase text-sm">
                    <CheckCircle className="text-geo-yellow w-5 h-5" />
                    Без прекъсване на производството
                </div>
            </div>
        </div>
      </section>

      {/* 6. RESISTANCE & FIRE SAFETY (Image LEFT | Text RIGHT) */}
      <section className="w-full bg-[#0F0F0F] border-b border-[#222]">
        <div className="flex flex-col lg:flex-row min-h-[600px]">
            {/* Image Column */}
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black overflow-hidden">
                <img 
                    src="/GEONYX-technology3.jpeg" 
                    onError={(e) => { e.currentTarget.src = "/GEONYX-technology3.jpeg" }}
                    alt="Green acid liquid beading on GEONYX surface, background fire distortion" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80" 
                />
                <div className="absolute inset-0 bg-black/30"></div>
                 {/* IMAGE BADGE */}
                 <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <ShieldAlert className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">Киселина & Огън</span>
                </div>
            </div>

            {/* Text Column */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center border-l border-[#222]">
                <div className="mb-6">
                    <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs mb-2 block">ЕКСТРЕМНА УСТОЙЧИВОСТ</span>
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase leading-tight mb-6">
                        ИМУНИТЕТ КЪМ <br/> АГРЕСИЯ И ОГЪН
                    </h2>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    Стандартните подове се предават пред киселини и пожари. GEONYX е създаден да оцелее.
                </p>
                
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="bg-red-900/20 p-3 rounded-full border border-red-500/30">
                            <Flame className="w-6 h-6 text-red-500" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold uppercase text-lg mb-1">Огнеупорност (Клас А1)</h4>
                            <p className="text-gray-500 text-sm">За разлика от епоксидите, които горят и отделят дим, GEONYX е минерален и негорим до 1000°C.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="bg-green-900/20 p-3 rounded-full border border-green-500/30">
                            <Zap className="w-6 h-6 text-green-500" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold uppercase text-lg mb-1">Химически щит</h4>
                            <p className="text-gray-500 text-sm">Пълна устойчивост на концентрирани киселини, соли, сулфати и машинни масла.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 7. ECOLOGY */}
      <section className="relative py-32 overflow-hidden bg-[#051a0d] border-b border-[#222]">
           {/* Abstract Eco Background */}
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] opacity-10"></div>
           <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
           
           <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="inline-flex items-center justify-center p-3 bg-green-500/10 rounded-full border border-green-500/30 mb-8 animate-pulse">
                    <Leaf className="w-6 h-6 text-green-400" />
                </div>
                
                <h2 className="text-4xl md:text-7xl font-black text-white uppercase leading-none mb-6 tracking-tight">
                    80% ПО-НИСЪК <br/> <span className="text-green-500">ВЪГЛЕРОДЕН ОТПЕЧАТЪК</span>
                </h2>
                
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                    Ние използваме индустриални странични продукти и не изискваме енергоемко изпичане в пещи както цимента. 
                    Избирайки GEONYX, вие избирате бъдещето.
                </p>
           </div>
      </section>

      {/* 8. COMPARISON TABLE */}
      <section className="py-24 bg-[#0a0a0a] border-b border-[#222]">
          <div className="container mx-auto px-6 md:px-10">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-black text-white uppercase mb-4">ФИНАЛЕН АРГУМЕНТ</h2>
                  <div className="w-24 h-2 bg-geo-yellow mx-auto"></div>
              </div>

              <div className="w-full overflow-x-auto border border-[#333] shadow-2xl bg-[#111]">
                  <table className="w-full min-w-[900px] border-collapse text-left">
                      <thead>
                          <tr className="bg-[#151515]">
                              <th className="p-6 text-gray-500 font-bold uppercase tracking-wider text-sm border-b border-r border-[#333] w-1/4">Характеристика</th>
                              <th className="p-6 text-gray-500 font-bold uppercase tracking-wider text-sm border-b border-r border-[#333] w-1/4">Обикновен Бетон</th>
                              <th className="p-6 text-gray-500 font-bold uppercase tracking-wider text-sm border-b border-r border-[#333] w-1/4">Епоксид (Смола)</th>
                              <th className="p-6 bg-[#1a1a1a] text-geo-yellow font-black uppercase tracking-wider text-lg border-b border-[#333] w-1/4 relative">
                                  GEONYX (Геополимер)
                                  <div className="absolute top-0 right-0 w-full h-1 bg-geo-yellow"></div>
                              </th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-[#333]">
                          {/* 1. SPEED */}
                          <tr>
                              <td className="p-6 text-white font-bold border-r border-[#333] uppercase">Време за пускане</td>
                              <td className="p-6 text-gray-500 border-r border-[#333] font-medium">28 Дни (Бавно)</td>
                              <td className="p-6 text-gray-500 border-r border-[#333] font-medium">3-7 Дни</td>
                              <td className="p-6 bg-[#161616] text-white font-bold border-l-4 border-l-geo-yellow">
                                  <div className="flex items-center gap-3">
                                      <div className="p-2 bg-geo-yellow/10 rounded-full border border-geo-yellow/30">
                                          <Rocket className="w-6 h-6 text-geo-yellow" />
                                      </div>
                                      <span>24 Часа (Експресно)</span>
                                  </div>
                              </td>
                          </tr>

                          {/* 2. BOND */}
                          <tr>
                              <td className="p-6 text-white font-bold border-r border-[#333] uppercase">Тип Връзка</td>
                              <td className="p-6 text-gray-500 border-r border-[#333] font-medium">Механична (Слаба)</td>
                              <td className="p-6 text-gray-500 border-r border-[#333] font-medium">Лепило (Повърхностно)</td>
                              <td className="p-6 bg-[#161616] text-white font-bold border-l-4 border-l-geo-yellow">
                                  <div className="flex items-center gap-3">
                                      <div className="p-2 bg-geo-yellow/10 rounded-full border border-geo-yellow/30">
                                          <Atom className="w-6 h-6 text-geo-yellow" />
                                      </div>
                                      <span>Химическа (Монолит)</span>
                                  </div>
                              </td>
                          </tr>

                          {/* 3. FIRE */}
                          <tr>
                              <td className="p-6 text-white font-bold border-r border-[#333] uppercase">Огнеустойчивост</td>
                              <td className="p-6 text-gray-500 border-r border-[#333] font-medium">Клас A1</td>
                              <td className="p-6 text-gray-500 border-r border-[#333] font-medium">
                                  <div className="flex items-center gap-2">
                                      <X className="w-5 h-5 text-red-600"/> Гори (Токсичен)
                                  </div>
                              </td>
                              <td className="p-6 bg-[#161616] text-white font-bold border-l-4 border-l-geo-yellow">
                                  <div className="flex items-center gap-3">
                                      <div className="p-2 bg-geo-yellow/10 rounded-full border border-geo-yellow/30">
                                          <ShieldCheck className="w-6 h-6 text-geo-yellow" />
                                      </div>
                                      <span>Негорим (Клас A1)</span>
                                  </div>
                              </td>
                          </tr>

                          {/* 4. ACIDS */}
                          <tr>
                              <td className="p-6 text-white font-bold border-r border-[#333] uppercase">Киселини и Масла</td>
                              <td className="p-6 text-gray-500 border-r border-[#333] font-medium">Попива и се руши</td>
                              <td className="p-6 text-gray-500 border-r border-[#333] font-medium">Омеква / Петносва се</td>
                              <td className="p-6 bg-[#161616] text-white font-bold border-l-4 border-l-geo-yellow">
                                  <div className="flex items-center gap-3">
                                      <div className="p-2 bg-geo-yellow/10 rounded-full border border-geo-yellow/30">
                                          <Droplets className="w-6 h-6 text-geo-yellow" />
                                      </div>
                                      <span>Пълна Устойчивост</span>
                                  </div>
                              </td>
                          </tr>

                          {/* 5. WEAR */}
                          <tr>
                              <td className="p-6 text-white font-bold border-r border-[#333] uppercase">Износоустойчивост</td>
                              <td className="p-6 text-gray-500 border-r border-[#333] font-medium">Отделя прах</td>
                              <td className="p-6 text-gray-500 border-r border-[#333] font-medium">Драска се лесно</td>
                              <td className="p-6 bg-[#161616] text-white font-bold border-l-4 border-l-geo-yellow">
                                  <div className="flex items-center gap-3">
                                      <div className="p-2 bg-geo-yellow/10 rounded-full border border-geo-yellow/30">
                                          <Gem className="w-6 h-6 text-geo-yellow" />
                                      </div>
                                      <span>Екстремна (Без прах)</span>
                                  </div>
                              </td>
                          </tr>

                          {/* 6. ECO */}
                          <tr>
                              <td className="p-6 text-white font-bold border-r border-[#333] uppercase">CO2 Емисии</td>
                              <td className="p-6 text-gray-500 border-r border-[#333] font-medium">Високи (100%)</td>
                              <td className="p-6 text-gray-500 border-r border-[#333] font-medium">Много Високи (Петрол)</td>
                              <td className="p-6 bg-[#161616] text-white font-bold border-l-4 border-l-geo-yellow">
                                  <div className="flex items-center gap-3">
                                      <div className="p-2 bg-green-900/20 rounded-full border border-green-500/30">
                                          <Leaf className="w-6 h-6 text-green-500" />
                                      </div>
                                      <span>-80% (Зелен продукт)</span>
                                  </div>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-geo-yellow py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-nyx-dark mb-6 uppercase tracking-tight">
            НАУКАТА Е НА ВАША СТРАНА.
          </h2>
          <p className="text-xl text-nyx-dark/80 mb-10 max-w-2xl mx-auto font-medium">
            Свържете се с нашия инженерен екип за техническа консултация.
          </p>
          <a href="#contact">
            <Button variant="primary" className="bg-nyx-dark text-white hover:bg-black border-2 border-transparent text-lg px-12 py-5 shadow-2xl">
              СВЪРЖЕТЕ СЕ С НАС <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};
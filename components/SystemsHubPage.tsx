
import React, { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Button } from './Button';
import { 
  ShieldCheck, FlaskConical, Flame, Droplets, Zap, 
  Layers, ArrowRight, Activity, Database, Hash, 
  CheckCircle, ChevronRight, ArrowUpRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SYSTEMS = [
  {
    id: "01",
    code: "SYS-MCH",
    category: "МЕХАНИКА",
    name: "GEONYX ARMOR",
    description: "Бронирана система за тежка индустрия. Абсорбира вибрации, издържа на ударни натоварвания и трафик на тежка верижна техника.",
    specs: ["> 110 MPa ЯКОСТ", "ДУКТИЛНОСТ", "AR 0.5 ИЗНОСВАНЕ"],
    link: "/armor",
    image: "/GEONYX-heavy-impact.jpeg",
    icon: ShieldCheck
  },
  {
    id: "02",
    code: "SYS-CHM",
    category: "ХИМИЯ",
    name: "GEONYX CHEM",
    description: "Химически инертна бариера (WHG). Пълна защита срещу концентрирани киселини, основи и агресивни разтворители.",
    specs: ["pH 0-14", "WHG СЕРТИФИКАТ", "ХЕРМЕТИЧНОСТ"],
    link: "/chem",
    image: "/GEONYX-chemical-plant.jpeg",
    icon: FlaskConical
  },
  {
    id: "03",
    code: "SYS-TRM",
    category: "ТЕРМОДИНАМИКА",
    name: "GEONYX THERM",
    description: "Система за екстремни температурни амплитуди. Издържа на термошок (пара/ледена вода), разтопен метал и директен огън.",
    specs: ["-40°C до +1200°C", "КЛАС A1fl", "ТЕРМОШОК"],
    link: "/therm",
    image: "/GEONYX-heavy-sparks.jpeg",
    icon: Flame
  },
  {
    id: "04",
    code: "SYS-HYD",
    category: "ХИДРОТЕХНИКА",
    name: "GEONYX HYDRO",
    description: "Водоплътни минерални мембрани за язовирни стени, пречиствателни станции и морска инфраструктура. Работа под вода.",
    specs: ["W20 ВОДОПЛЪТНОСТ", "СУЛФАТОУСТОЙЧИВОСТ", "ПОДВОДНО"],
    link: "/hydro",
    image: "/GEONYX-marine-dam.jpeg",
    icon: Droplets
  }
];

export const SystemsHubPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] font-sans text-gray-200 overflow-x-hidden selection:bg-geo-yellow selection:text-black">
      <Navbar />

      {/* 1. HERO SECTION - Technical Header */}
      <section className="relative pt-32 pb-16 bg-[#080808] border-b border-[#222]">
        <div className="container mx-auto px-6 md:px-10">
            <div className="flex flex-col md:flex-row justify-between items-end gap-10">
                <div className="max-w-3xl">
                    <div className="flex items-center gap-3 mb-6">
                        <Activity className="w-5 h-5 text-geo-yellow animate-pulse" />
                        <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">
                            ТЕХНОЛОГИЧНА НОМЕНКЛАТУРА
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-none mb-6">
                        СИСТЕМЕН <br/> РЕГИСТЪР
                    </h1>
                    <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-[#333] pl-6 font-mono text-sm uppercase tracking-wide">
                        // ИНДЕКС НА ИНЖЕНЕРНИТЕ МАТРИЦИ GEONYX® <br/>
                        // ИЗБЕРЕТЕ СИСТЕМА ЗА ТЕХНИЧЕСКИ СПЕЦИФИКАЦИИ
                    </p>
                </div>
                
                {/* Dashboard Stats */}
                <div className="hidden md:flex gap-8 border-t border-[#222] pt-6 md:border-t-0 md:pt-0">
                    <div className="text-right">
                        <div className="text-3xl font-black text-white font-mono">04</div>
                        <div className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">БАЗОВИ СИСТЕМИ</div>
                    </div>
                    <div className="text-right">
                        <div className="text-3xl font-black text-white font-mono">A1</div>
                        <div className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">ПОЖАРЕН КЛАС</div>
                    </div>
                    <div className="text-right">
                        <div className="text-3xl font-black text-white font-mono">50+</div>
                        <div className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">ГОДИНИ ЖИВОТ</div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 2. THE VISUAL GRID (WINDOWS STYLE) */}
      <section className="w-full bg-[#050505] border-t border-[#333]">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 w-full">
              {SYSTEMS.map((sys, index) => (
                  <div 
                    key={sys.id}
                    onClick={() => navigate(sys.link)}
                    className="group relative h-[420px] w-full overflow-hidden border-r border-b border-[#222] cursor-pointer"
                  >
                      {/* 1. BACKGROUND IMAGE LAYER */}
                      <div className="absolute inset-0 z-0">
                          <img 
                            src={sys.image} 
                            alt={sys.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 grayscale-[0.3] group-hover:grayscale-0"
                            onError={(e) => { e.currentTarget.src = "/GEONYX-background.jpeg" }}
                          />
                      </div>

                      {/* 2. GRADIENT OVERLAY (Bottom Up) */}
                      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>

                      {/* 3. NUMBERING (Top Right) */}
                      <div className="absolute top-8 right-8 z-20">
                          <span className="text-5xl font-black text-white/10 group-hover:text-geo-yellow/20 transition-colors select-none">
                              {sys.id}
                          </span>
                      </div>

                      {/* 4. CONTENT (Bottom Left) */}
                      <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end z-20">
                          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                              
                              {/* Category Label */}
                              <div className="flex items-center gap-3 mb-4">
                                  <div className="h-[2px] w-6 bg-geo-yellow"></div>
                                  <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">
                                      {sys.category}
                                  </span>
                              </div>

                              <h3 className="text-3xl md:text-4xl font-black mb-3 uppercase leading-[0.95] tracking-tight drop-shadow-lg text-white group-hover:text-geo-yellow transition-colors">
                                  {sys.name}
                              </h3>

                              <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md mb-6 opacity-90 group-hover:text-white transition-colors">
                                  {sys.description}
                              </p>

                              {/* Specs Tags & Arrow */}
                              <div className="flex flex-wrap items-center justify-between border-t border-white/20 pt-6">
                                  <div className="flex flex-wrap gap-2">
                                      {sys.specs.map((spec, i) => (
                                          <span key={i} className="inline-block px-2 py-1 border border-white/20 bg-white/5 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-gray-300">
                                              {spec}
                                          </span>
                                      ))}
                                  </div>
                                  
                                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0 transform">
                                      <ArrowUpRight size={28} />
                                  </div>
                              </div>

                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </section>

      {/* 3. TECHNICAL SUPPORT CTA */}
      <section className="bg-[#111] border-t border-[#222] py-20">
          <div className="container mx-auto px-6 md:px-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-10 bg-[#161616] p-10 md:p-16 border border-[#222] relative overflow-hidden">
                  
                  {/* Decorative Background */}
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
                  
                  <div className="relative z-10 max-w-2xl text-center lg:text-left">
                      <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                          <Database className="w-5 h-5 text-geo-yellow" />
                          <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">СПЕЦИАЛИЗИРАН ИНЖЕНЕРИНГ</span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-4 leading-tight">
                          НЕ НАМИРАТЕ ВАШИЯ КАЗУС?
                      </h2>
                      <p className="text-gray-400 text-lg">
                          Нашите химически инженери разработват модифицирани матрици за специфични среди (Custom Formulations). Свържете се с нас за лабораторен анализ.
                      </p>
                  </div>

                  <div className="relative z-10">
                       <Button 
                          variant="primary" 
                          onClick={() => navigate('/request-inspection')}
                          className="bg-geo-yellow text-black hover:bg-white border-none text-lg px-10 py-5 font-black uppercase tracking-wider shadow-xl flex items-center gap-3"
                        >
                            <Hash className="w-5 h-5" /> ЗАЯВИ РАЗРАБОТКА
                        </Button>
                  </div>
              </div>
          </div>
      </section>

      <Footer />
    </div>
  );
};


import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SafeImage } from './SafeImage';
import { useNavigate } from 'react-router-dom';

const SYSTEMS = [
  {
    id: 1,
    label: "ЕКСТРЕМНА МЕХАНИКА",
    title: "GEONYX ARMOR",
    description: "Бронирани геополимерни матрици за тежка индустрия, военно-промишлени комплекси и мащабна складова логистика.",
    badge: "> 110 MPa ЯКОСТ",
    image: "/GEONYX-ARMOR.webp",
    link: "/armor"
  },
  {
    id: 2,
    label: "ХИМИЧЕСКА ЗАЩИТА",
    title: "GEONYX CHEM",
    description: "Абсолютен минерален имунитет срещу концентрирани киселини, основи и агресивни разтворители. Сертифицирани по WHG.",
    badge: "pH 1-14 УСТОЙЧИВОСТ",
    image: "/GEINYX-CHEM.webp",
    link: "/chem"
  },
  {
    id: 3,
    label: "ТЕРМИЧНА БЕЗОПАСНОСТ",
    title: "GEONYX THERM",
    description: "Негорими системи, проектирани да издържат на разливи от разтопен метал, пожар и цикличен термошок.",
    badge: "КЛАС A1fl / 1200°C",
    image: "/GEONYX-THERM.webp",
    link: "/therm"
  },
  {
    id: 4,
    label: "ХИДРОТЕХНИКА И ИНФРАСТРУКТУРА",
    title: "GEONYX HYDRO",
    description: "Водоплътни бариери за язовирни стени, пречиствателни станции и пристанища. Възможност за подводно полагане и втвърдяване.",
    badge: "W20 / ПОДВОДЕН РЕМОНТ",
    image: "/GEONYX-HYDRO.webp",
    link: "/hydro"
  }
];

export const IndustriesSection: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (link: string) => {
    if (link === '#') return;
    navigate(link);
    window.scrollTo(0, 0);
  };

  return (
    <section id="systems" className="w-full bg-[#0F0F0F] border-t border-[#333]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full">
        {SYSTEMS.map((sys, index) => (
          <div 
            key={sys.id} 
            onClick={() => handleNavigate(sys.link)}
            className={`group relative h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden border-r border-[#222] border-b border-[#222] block ${sys.link === '#' ? 'cursor-default' : 'cursor-pointer'}`}
          >
            <SafeImage 
              src={sys.image} 
              alt={sys.title} 
              className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${sys.link !== '#' ? 'group-hover:scale-110' : ''} grayscale-[0.2] group-hover:grayscale-0`}
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>
            
            <div className="absolute top-8 right-8 z-10">
                <span className="text-5xl font-black text-white/10 group-hover:text-geo-yellow/20 transition-colors select-none">
                    0{index + 1}
                </span>
            </div>

            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                
                {/* Standardized Line + Text Style */}
                <div className="flex items-center gap-3 mb-4">
                     <div className="h-[2px] w-6 bg-geo-yellow"></div>
                     <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">
                        {sys.label}
                    </span>
                </div>

                <h3 className={`text-3xl md:text-4xl font-black mb-3 uppercase leading-[0.95] tracking-tight drop-shadow-lg transition-colors ${sys.link !== '#' ? 'text-white group-hover:text-geo-yellow' : 'text-gray-500'}`}>
                  {sys.title}
                </h3>

                <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md mb-6 opacity-90 group-hover:text-white transition-colors">
                  {sys.description}
                </p>

                <div className="flex items-center justify-between border-t border-white/20 pt-6">
                    <span className={`inline-block px-3 py-1 border border-white/30 bg-white/5 backdrop-blur-md text-[10px] md:text-xs font-bold uppercase tracking-wider transition-colors ${sys.link !== '#' ? 'text-white group-hover:border-geo-yellow group-hover:text-geo-yellow' : 'text-gray-500'}`}>
                        {sys.badge}
                    </span>
                    
                    {sys.link !== '#' && (
                      <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0 transform">
                          <ArrowUpRight size={24} />
                      </div>
                    )}
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

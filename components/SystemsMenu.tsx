
import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Zap, Droplets, Flame, Activity, Layers, PenTool, Hammer } from 'lucide-react';

const SYSTEMS_DATA = [
  {
    id: '01',
    title: 'GEONYX ARMOR (МЕХАНИЧНА УСТОЙЧИВОСТ)',
    desc: 'Механична устойчивост и индустриални подове.',
    image: '/GEONYX-ARMOR-HEDER.webp',
    href: '/armor',
    icon: ShieldCheck,
    tech: 'МЕХАНИЧНА ЗАЩИТА'
  },
  {
    id: '02',
    title: 'GEONYX CHEM (ХИМИЧЕСКА ЗАЩИТА)',
    desc: 'Защита от агресивна химия и горива.',
    image: '/GEONYX-CHEM1.webp',
    href: '/chem',
    icon: Droplets,
    tech: 'ХИМИЧЕСКА ЗАЩИТА'
  },
  {
    id: '03',
    title: 'GEONYX HYDRO (ВОДНА ЗАЩИТА)',
    desc: 'Водонепропускливи и хидротехнически системи.',
    image: '/GEONYX-HYDRO-HERO.webp',
    href: '/hydro',
    icon: Activity,
    tech: 'ВОДОНЕПРОПУСКЛИВОСТ'
  },
  {
    id: '04',
    title: 'GEONYX THERM (ТЕРМИЧНА БЕЗОПАСНОСТ)',
    desc: 'Негорими решения за огън и термичен риск.',
    image: '/GEONYX-THERM-HERO.webp',
    href: '/therm',
    icon: Flame,
    tech: 'ТЕРМИЧНА ЗАЩИТА'
  }
];

interface SystemsMenuProps {
  onClose: () => void;
  onNavigate: (href: string) => void;
}

export const SystemsMenu: React.FC<SystemsMenuProps> = ({ onClose, onNavigate }) => {
  const [activeSystem, setActiveSystem] = useState(SYSTEMS_DATA[0]);

  return (
    <div 
      className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1300px] bg-[#1a1a1a] border-t-2 border-geo-yellow shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 flex h-[560px]"
      onMouseLeave={onClose}
    >
      {/* LEFT COLUMN: NAVIGATION LIST (Matched to Solutions Menu) */}
      <div className="w-[35%] py-0 bg-[#1a1a1a] border-r border-[#252525] flex flex-col">
          {SYSTEMS_DATA.map((sys) => (
             <div 
                key={sys.id}
                onMouseEnter={() => setActiveSystem(sys)}
                onClick={() => onNavigate(sys.href)}
                className={`group px-8 py-5 cursor-pointer border-l-4 border-b border-[#252525] transition-all duration-200 flex flex-col justify-center ${
                    activeSystem.id === sys.id 
                    ? 'border-l-geo-yellow bg-[#222]' 
                    : 'border-l-transparent hover:bg-[#1f1f1f] hover:border-l-geo-yellow'
                }`}
             >
                <div className="flex items-center justify-between mb-2">
                    <h3 className={`font-semibold uppercase text-sm transition-colors ${
                        activeSystem.id === sys.id ? 'text-geo-yellow' : 'text-white group-hover:text-geo-yellow'
                    }`}>
                        {sys.title}
                    </h3>
                    <ArrowRight className={`w-4 h-4 transition-colors ${
                        activeSystem.id === sys.id ? 'text-geo-yellow' : 'text-[#333] group-hover:text-geo-yellow'
                    }`} />
                </div>
                <p className="text-[11px] text-gray-500 font-medium leading-relaxed max-w-[95%] line-clamp-2">
                    {sys.desc}
                </p>
             </div>
          ))}
      </div>

      {/* RIGHT COLUMN: DYNAMIC PREVIEW (Matched to Solutions Menu Layout) */}
      <div className="w-[65%] relative overflow-hidden group cursor-pointer" onClick={() => onNavigate(activeSystem.href)}>
           {/* Background Image */}
           <img 
              key={activeSystem.id}
              src={activeSystem.image} 
              alt={activeSystem.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 animate-in fade-in zoom-in duration-500"
           />
           
           {/* Overlays */}
           <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/40 to-transparent"></div>
           <div className="absolute inset-0 bg-[url('')] opacity-20 pointer-events-none"></div>

           {/* Content */}
           <div className="absolute bottom-0 left-0 w-full p-12">
               {/* Tech Badge */}
               <div className="inline-flex items-center gap-2 bg-geo-yellow text-black px-4 py-1.5 font-semibold text-xs uppercase tracking-wider mb-6 shadow-lg">
                   <activeSystem.icon className="w-4 h-4" />
                   {activeSystem.tech}
               </div>

               <h2 className="text-4xl font-extrabold text-white uppercase leading-none mb-4 drop-shadow-xl">
                   {activeSystem.title}
               </h2>
               
               <p className="text-gray-300 text-sm leading-relaxed max-w-lg mb-8 border-l-2 border-geo-yellow pl-4">
                   {activeSystem.desc}
               </p>

               <div className="flex items-center gap-3 text-white text-xs font-semibold uppercase tracking-widest group-hover:text-geo-yellow transition-colors">
                   Научи повече <ArrowRight className="w-4 h-4" />
               </div>
           </div>
      </div>
    </div>
  );
};

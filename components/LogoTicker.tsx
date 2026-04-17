
import React, { useState, useEffect } from 'react';
import { ShieldCheck, Leaf, Award, FileCheck } from 'lucide-react';

interface TickerItem {
  name: string;
  label: string;
  icon?: React.ElementType;
}

const PARTNERS: TickerItem[] = [
  { name: "AURUBIS", label: "МЕТАЛУРГИЯ" },
  { name: "KAUFLAND", label: "ЛОГИСТИКА" },
  { name: "LUFTHANSA", label: "АВИАЦИЯ" },
  { name: "DUNDEE", label: "МИНИ" },
];

const CERTS: TickerItem[] = [
  { name: "ISO 9001", label: "КАЧЕСТВО", icon: ShieldCheck },
  { name: "ISO 14001", label: "ЕКОЛОГИЯ", icon: Leaf },
  { name: "HACCP", label: "ХРАНИ", icon: Award },
  { name: "BDS EN 206", label: "СТАНДАРТ", icon: FileCheck },
];

export const LogoTicker: React.FC = () => {
  const [isPartners, setIsPartners] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const cycleInterval = setInterval(() => {
      // 1. Fade Out
      setOpacity(0);

      // 2. Switch Data after fade out completes (600ms match transition)
      setTimeout(() => {
        setIsPartners((prev) => !prev);
        // 3. Fade In
        setOpacity(1);
      }, 600);

    }, 5000); // 5 seconds visible

    return () => clearInterval(cycleInterval);
  }, []);

  const activeData = isPartners ? PARTNERS : CERTS;

  return (
    <div className="w-full">
      {/* Label above the row for context, fading with content */}
      <div 
        className="mb-6 transition-opacity duration-700 ease-in-out" 
        style={{ opacity }}
      >
        <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-[10px]">
            {isPartners ? "ДОВЕРЕНИ ПАРТНЬОРИ" : "СЕРТИФИЦИРАНИ СТАНДАРТИ"}
        </span>
      </div>

      {/* The Single Row Grid (1x4) */}
      <div 
        className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-start transition-opacity duration-700 ease-in-out"
        style={{ opacity: opacity }}
      >
        {activeData.map((item, index) => (
          <div key={index} className="flex flex-col justify-start group cursor-default">
            {/* Main Title / Icon */}
            <div className="h-10 flex items-center mb-2">
                {item.icon ? (
                    <div className="flex items-center gap-3">
                        <item.icon className="w-8 h-8 text-white group-hover:text-geo-yellow transition-colors" strokeWidth={1.5} />
                        <span className="text-2xl font-black text-white uppercase tracking-tighter leading-none group-hover:text-geo-yellow transition-colors">
                            {item.name}
                        </span>
                    </div>
                ) : (
                    <span className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter leading-none group-hover:text-geo-yellow transition-colors">
                        {item.name}
                    </span>
                )}
            </div>
            
            {/* Sub Label */}
            <div className="h-4 flex items-center">
                <div className="w-4 h-[1px] bg-white/20 mr-2 group-hover:w-8 group-hover:bg-geo-yellow transition-all duration-500"></div>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">
                    {item.label}
                </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

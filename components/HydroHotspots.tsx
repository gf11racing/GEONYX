
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HOTSPOTS = [
  { id: 1, hKey: 1, top: "85%", left: "50%" },
  { id: 2, hKey: 2, top: "65%", left: "40%" },
  { id: 3, hKey: 3, top: "45%", left: "60%" },
  { id: 4, hKey: 4, top: "20%", left: "50%" },
];

export const HydroHotspots: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const { t } = useTranslation('hydrohotspots');

  return (
    <section className="py-24 bg-[#050505] border-b border-[#222] overflow-hidden">

      {/* 1. Header (Contained) */}
      <div className="container mx-auto px-6 mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-4">
                {t('header.title')}
            </h2>
            <div className="w-24 h-1 bg-geo-yellow mx-auto"></div>
            <p className="text-gray-500 mt-4 text-sm font-mono uppercase tracking-widest">
                {t('header.subtitle')}
            </p>
      </div>

      {/* 2. Full Width Image Container - HEIGHT REDUCED HERE */}
      <div className="relative w-full h-[450px] md:h-[550px] bg-[#111] border-y border-[#333] shadow-2xl group">

          {/* BACKGROUND IMAGE - Added bg-black to ensure no white flash */}
          <div className="absolute inset-0 bg-black">
             <img
               src="/GEONYX-industral-systems2.jpeg"
               alt="Hydro System Cross Section"
               className="w-full h-full object-cover opacity-60 grayscale transition-all duration-1000 ease-in-out group-hover:grayscale-0"
               onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1518005052357-e9305505dc3f?q=80&w=2076&auto=format&fit=crop" }}
             />
             {/* Dark Overlay for contrast */}
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/40"></div>
          </div>

          {/* RULER OVERLAY (Left) */}
          <div className="absolute left-6 md:left-10 top-0 bottom-0 w-px bg-white/20 flex flex-col justify-between py-10 z-10">
             <div className="w-4 h-px bg-white/50"></div>
             <div className="w-2 h-px bg-white/30"></div>
             <div className="w-2 h-px bg-white/30"></div>
             <div className="w-2 h-px bg-white/30"></div>
             <div className="w-4 h-px bg-white/50"></div>
          </div>

          {/* RULER OVERLAY (Right) */}
          <div className="absolute right-6 md:right-10 top-0 bottom-0 w-px bg-white/20 flex flex-col justify-between py-10 z-10">
             <div className="w-4 h-px bg-white/50 -translate-x-full"></div>
             <div className="w-2 h-px bg-white/30 -translate-x-full"></div>
             <div className="w-2 h-px bg-white/30 -translate-x-full"></div>
             <div className="w-2 h-px bg-white/30 -translate-x-full"></div>
             <div className="w-4 h-px bg-white/50 -translate-x-full"></div>
          </div>

          {/* HOTSPOTS CONTAINER */}
          <div className="absolute inset-0 max-w-[1600px] mx-auto w-full h-full pointer-events-none">
            <div className="relative w-full h-full pointer-events-auto">
                {HOTSPOTS.map((spot) => (
                    <div
                    key={spot.id}
                    className="absolute z-20 cursor-pointer group/spot"
                    style={{ top: spot.top, left: spot.left, transform: 'translate(-50%, -50%)' }}
                    onMouseEnter={() => setActiveId(spot.id)}
                    onMouseLeave={() => setActiveId(null)}
                    >
                    {/* Compact Pulse Effect - Using global class */}
                    <div className="relative flex items-center justify-center w-8 h-8">
                        {/* Single Ring - No Staggering */}
                        <span className="absolute w-full h-full bg-geo-yellow rounded-full animate-subtle"></span>

                        {/* Core Dot */}
                        <span className={`relative w-3 h-3 md:w-3.5 md:h-3.5 rounded-full border border-black shadow-[0_0_5px_rgba(0,0,0,0.8)] transition-all duration-300 ease-out ${activeId === spot.id ? 'bg-white scale-110 shadow-[0_0_10px_white]' : 'bg-geo-yellow'}`}></span>
                    </div>

                    {/* TOOLTIP / INFO BOX */}
                    <AnimatePresence>
                        {activeId === spot.id && (
                        <motion.div
                            initial={{ opacity: 0, y: 15, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="absolute left-1/2 bottom-full mb-4 w-72 md:w-96 -translate-x-1/2 z-30"
                        >
                            <div className="bg-black/90 backdrop-blur-xl border border-geo-yellow p-6 shadow-[0_20px_50px_rgba(0,0,0,0.9)] relative">
                                {/* Tech Decor Corners */}
                                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-geo-yellow"></div>
                                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-geo-yellow"></div>
                                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-geo-yellow"></div>
                                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-geo-yellow"></div>

                                {/* Connector Arrow */}
                                <div className="absolute bottom-[-7px] left-1/2 -translate-x-1/2 w-3 h-3 bg-black border-r border-b border-geo-yellow rotate-45"></div>

                                <h3 className="text-geo-yellow font-black text-base uppercase mb-1 tracking-wider">
                                    {t(`h${spot.hKey}title`)}
                                </h3>
                                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest block mb-4 border-b border-white/10 pb-2">
                                    {t(`h${spot.hKey}subtitle`)}
                                </span>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {t(`h${spot.hKey}desc`)}
                                </p>
                            </div>
                        </motion.div>
                        )}
                    </AnimatePresence>
                    </div>
                ))}
            </div>
          </div>

      </div>
    </section>
  );
};

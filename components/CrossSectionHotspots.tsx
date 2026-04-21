
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Zap, Anchor, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LAYERS_META = [
  { id: 4, key: 'layer4', top: "0%",  height: "15%", icon: ShieldCheck },
  { id: 3, key: 'layer3', top: "15%", height: "35%", icon: Layers },
  { id: 2, key: 'layer2', top: "50%", height: "10%", icon: Zap },
  { id: 1, key: 'layer1', top: "60%", height: "40%", icon: Anchor },
];

export const CrossSectionHotspots: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);
  const { t } = useTranslation('technology');

  return (
    <section className="py-20 bg-[#050505] border-t border-[#222]">
      <div className="container mx-auto px-6">

        <div className="text-center mb-12">
            <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">{t('crossSection.eyebrow')}</span>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase mt-2">
                {t('crossSection.title')}
            </h2>
            <p className="text-gray-500 mt-4 text-sm font-mono uppercase">
                {t('crossSection.note')}
            </p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto h-[600px] rounded-sm overflow-hidden border border-[#333] shadow-2xl bg-black">

          <div className="absolute inset-0">
             <img
               src="/GEONYX-industral-systems2.jpeg"
               alt="Cross Section"
               className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
               onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1518005052357-e9305505dc3f?q=80&w=2076&auto=format&fit=crop" }}
             />
             <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
          </div>

          <div className="absolute inset-0 z-10 flex flex-col h-full w-full">
            {LAYERS_META.map((layer) => (
              <div
                key={layer.id}
                style={{ top: layer.top, height: layer.height }}
                className="absolute left-0 w-full group cursor-crosshair"
                onMouseEnter={() => setActiveLayer(layer.id)}
                onMouseLeave={() => setActiveLayer(null)}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeLayer === layer.id ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 bg-geo-yellow/20 mix-blend-overlay border-y border-geo-yellow/50 shadow-[0_0_30px_rgba(255,204,0,0.2)]"
                />

                {activeLayer !== layer.id && (
                    <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
                         <div className="relative w-4 h-4">
                             <div className="absolute w-full h-full bg-geo-yellow rounded-full animate-ping opacity-50"></div>
                             <div className="absolute inset-0 m-auto w-1.5 h-1.5 bg-white rounded-full"></div>
                             <div className="absolute left-6 top-1/2 w-12 h-[1px] bg-white/20"></div>
                             <span className="absolute left-20 top-1/2 -translate-y-1/2 text-[10px] font-bold text-gray-500 uppercase tracking-widest opacity-60">
                                {layer.id}
                             </span>
                         </div>
                    </div>
                )}

                <AnimatePresence>
                  {activeLayer === layer.id && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="absolute left-[10%] md:left-[25%] top-1/2 -translate-y-1/2 z-20 pointer-events-none"
                    >
                      <div className="flex items-center">
                        <div className="w-16 md:w-32 h-[2px] bg-geo-yellow shadow-[0_0_10px_#FFCC00]"></div>
                        <div className="w-2 h-2 bg-geo-yellow rotate-45 transform -translate-x-1"></div>

                        <div className="bg-black/90 border border-geo-yellow p-6 backdrop-blur-md shadow-2xl max-w-sm ml-4 relative overflow-hidden">
                           <div className="absolute top-0 right-0 p-2 opacity-20">
                               <layer.icon className="w-16 h-16 text-geo-yellow" />
                           </div>

                           <div className="relative z-10">
                               <div className="flex items-center gap-3 mb-2">
                                   <span className="bg-geo-yellow text-black text-xs font-black px-2 py-0.5 rounded-sm">0{layer.id}</span>
                                   <h3 className="text-white font-bold uppercase tracking-wider text-sm">{t(`crossSection.${layer.key}name`)}</h3>
                               </div>
                               <p className="text-gray-300 text-sm leading-relaxed border-l-2 border-white/20 pl-3">
                                   {t(`crossSection.${layer.key}desc`)}
                               </p>
                           </div>

                           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent w-full h-full -translate-x-full animate-[shimmer_2s_infinite]"></div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            ))}
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-12 bg-black/50 border-l border-[#333] flex flex-col justify-between py-4 items-center z-20">
              <div className="h-[1px] w-full bg-white/20"></div>
              <span className="text-[9px] text-gray-500 font-mono rotate-90 whitespace-nowrap">DEPTH MM</span>
              <div className="h-[1px] w-full bg-white/20"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

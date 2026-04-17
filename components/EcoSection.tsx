
import React from 'react';
import { Leaf, Wind, CloudOff, Recycle } from 'lucide-react';
import { SafeImage } from './SafeImage';

export const EcoSection: React.FC = () => {
  return (
    <section className="relative py-24 px-6 md:px-20 overflow-hidden bg-[#0F0F0F] text-white border-t border-[#222]">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <SafeImage 
          src="/GEONYX-ECO.webp" 
          alt="Eco Friendly Industry" 
          className="w-full h-full object-cover opacity-90"
        />
        {/* Reduced overlay opacity to make image more visible (approx 50% instead of 80%) */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-[#0F0F0F]/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        
        {/* Main Header */}
        <div className="mb-20 flex flex-col items-center">
            {/* Standardized Line Style */}
            <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-[2px] w-12 bg-green-500 shadow-[0_0_15px_#22c55e]"></div>
                <span className="text-green-500 font-bold uppercase tracking-[0.2em] text-xs">
                    УСТОЙЧИВОСТ & СТАНДАРТИ
                </span>
            </div>

            {/* STANDARDIZED TITLE SIZE: Matches Technical Center & Specs */}
            <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight tracking-tight text-white drop-shadow-xl uppercase">
                ИНДУСТРИАЛНА <br/> ДЕКАРБОНИЗАЦИЯ & ESG
            </h2>
            
            {/* Reduced Subtitle Size for better balance */}
            <p className="text-lg md:text-xl text-green-400 font-bold mb-6 drop-shadow-md max-w-4xl mx-auto">
                Намалете въглеродния отпечатък с до 80% и покрийте изискванията на Европейската Зелена Сделка (EU Green Deal).
            </p>
            
            <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-md">
                Решение за устойчива инфраструктура, което трансформира индустриалното строителство в екологичен актив.
            </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/20 pt-16">
            
            {/* Col 1 */}
            <div className="flex flex-col items-center group">
                <div className="w-20 h-20 rounded-2xl bg-black/40 backdrop-blur-md border border-green-500/30 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(74,222,128,0.1)] group-hover:shadow-[0_0_30px_rgba(74,222,128,0.3)] transition-shadow duration-500">
                    <Recycle className="w-10 h-10 text-green-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-md uppercase">КРЪГОВА ИКОНОМИКА</h3>
                <p className="text-gray-200 text-base leading-relaxed max-w-sm drop-shadow-sm font-medium">
                    Трансформираме индустриални вторични продукти (шлака, пепел) във високоякостни композити.
                </p>
            </div>

            {/* Col 2 */}
            <div className="flex flex-col items-center group">
                <div className="w-20 h-20 rounded-2xl bg-black/40 backdrop-blur-md border border-green-500/30 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(74,222,128,0.1)] group-hover:shadow-[0_0_30px_rgba(74,222,128,0.3)] transition-shadow duration-500">
                    <Wind className="w-10 h-10 text-green-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-md uppercase">БЕЗОПАСНА СРЕДА (HSEQ)</h3>
                <p className="text-gray-200 text-base leading-relaxed max-w-sm drop-shadow-sm font-medium">
                    Нулеви емисии на летливи органични съединения (VOC Free). Безопасно за затворени помещения и хранителната индустрия.
                </p>
            </div>

            {/* Col 3 */}
            <div className="flex flex-col items-center group">
                <div className="w-20 h-20 rounded-2xl bg-black/40 backdrop-blur-md border border-green-500/30 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(74,222,128,0.1)] group-hover:shadow-[0_0_30px_rgba(74,222,128,0.3)] transition-shadow duration-500">
                    <CloudOff className="w-10 h-10 text-green-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-md uppercase">НИСКОВЪГЛЕРОДЕН ПРОЦЕС</h3>
                <p className="text-gray-200 text-base leading-relaxed max-w-sm drop-shadow-sm font-medium">
                    Студен синтез без изпичане на клинкер. Спестява тонове CO2 емисии на всеки квадратен метър.
                </p>
            </div>

        </div>
      </div>
    </section>
  );
};

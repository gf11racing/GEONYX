
import React from 'react';
import { Check, X } from 'lucide-react';
import { SafeImage } from './SafeImage';

const SPEC_DATA = [
  { value: "24 ЧАСА", label: "ВРЕМЕ ЗА ТРАФИК", context: "Пълна експлоатация" },
  { value: "pH 1–14", label: "ХИМИЧЕСКА УСТОЙЧИВОСТ", context: "Киселини и Основи" },
  { value: "> 80 MPa", label: "ЯКОСТ НА НАТИСК", context: "Heavy Duty Клас" },
  { value: "1000°C", label: "ТЕРМИЧЕН ШОК", context: "Устойчивост на пара" },
  { value: "> 3.5 MPa", label: "АДХЕЗИЯ (PULL-OFF)", context: "По-здраво от бетона" },
  { value: "AR 0.5", label: "ИЗНОСОУСТОЙЧИВОСТ", context: "BÖHME Стандарт" },
  { value: "W 16", label: "ВОДОНЕПРОПУСКЛИВОСТ", context: "Хидрофобна матрица" },
  { value: "КЛАС A1fl", label: "РЕАКЦИЯ НА ОГЪН", context: "Негорим материал" },
];

const COMPARISON_DATA = [
  { label: "Време за ползване", bad: "28 Дни", good: "24 Часа" },
  { label: "Киселинна Устойчивост", bad: "Ниска (Разяжда се)", good: "Пълна (pH 1-14)" },
  { label: "Термоустойчивост", bad: "до 300°C (Пука се)", good: "1000°C (Огнеупорен)" },
  { label: "Водопоглъщане", bad: "Високо (Попива)", good: "0% (Хидрофобен)" },
  { label: "Прахоотделяне", bad: "Високо (Дава прах)", good: "Безпрахов" },
  { label: "Свиване и фуги", bad: "Високо (Нужни фуги)", good: "0% (Монолит)" },
  { label: "ВЪГЛЕРОДЕН ОТПЕЧАТЪК (CO2)", bad: "ВИСОК ОТПЕЧАТЪК", good: "-80% ЕМИСИИ (ECO)" },
  { label: "ЕКСПЛОАТАЦИОНЕН ЖИВОТ", bad: "10-15 Г. (КЪРПЕНЕ)", good: "50+ ГОДИНИ (МОНОЛИТ)" },
];

export const ComparisonSection: React.FC = () => {
  return (
    <section id="analysis" className="relative py-24 overflow-hidden bg-[#0a0a0a]">
      {/* Main Background with Image and Overlay - NO GRAYSCALE */}
      <div className="absolute inset-0 z-0">
        <SafeImage 
          src="/GEONYX-Calculator.jpeg" 
          alt="Industrial Texture" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-[#050505]/95"></div>
      </div>

      <div className="w-full px-4 md:px-12 lg:px-20 relative z-10 max-w-[1400px] mx-auto">
        
        {/* 1. ENGINEERING SPEC MATRIX (New Data Density Grid) */}
        <div className="mb-20">
            {/* Header for Specs - STANDARDIZED STYLE */}
            <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[2px] bg-geo-yellow"></div>
                <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">
                    ТЕХНИЧЕСКИ СПЕЦИФИКАЦИИ
                </span>
            </div>

            {/* The Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 bg-[#080808]/80 backdrop-blur-sm border-t border-l border-white/10">
                {SPEC_DATA.map((item, index) => (
                    <div 
                        key={index} 
                        className="group relative p-6 md:p-8 border-r border-b border-white/10 hover:bg-white/5 transition-colors duration-300"
                    >
                        {/* Label with micro indicator */}
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-1.5 h-1.5 bg-geo-yellow/50 rounded-sm group-hover:bg-geo-yellow transition-colors"></div>
                            <span className="text-gray-500 font-bold uppercase tracking-widest text-[9px] md:text-[10px]">
                                {item.label}
                            </span>
                        </div>
                        
                        {/* Value - Reduced Size */}
                        <div className="text-white font-mono text-xl md:text-2xl font-bold tracking-tighter mb-2 group-hover:text-geo-yellow transition-colors">
                            {item.value}
                        </div>
                        
                        {/* Context/Subtext */}
                        <div className="text-gray-600 text-[10px] uppercase font-medium tracking-wide">
                            {item.context}
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* 2. HEADER (Fixed Size) */}
        <div className="mb-12 text-center">
            {/* Standardized Style - Centered */}
           <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-[2px] w-8 bg-geo-yellow"></div>
                <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">
                    СРАВНИТЕЛЕН АНАЛИЗ
                </span>
           </div>

          {/* FIXED SIZE: text-3xl md:text-4xl (Strictly limited) */}
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
            GEONYX <span className="text-gray-600 mx-2 text-2xl align-middle">VS</span> ОБИКНОВЕН БЕТОН
          </h2>
        </div>

        {/* 3. COMPARISON TABLE (FIXED STYLE: Top Border Only, Checkmarks) */}
        <div className="w-full overflow-x-auto border border-[#333] shadow-2xl bg-[#111]">
            <table className="w-full min-w-[900px] border-collapse text-left">
                <thead>
                    <tr className="bg-black">
                        <th className="p-4 text-white font-black uppercase tracking-wider text-xs border-b border-r border-[#333] w-1/3">
                            ХАРАКТЕРИСТИКА
                        </th>
                        <th className="p-4 text-gray-500 font-bold uppercase tracking-wider text-xs border-b border-r border-[#333] w-1/3">
                            ОБИКНОВЕН БЕТОН
                        </th>
                        {/* GEONYX HEADER: Top Border Only (border-t-4) */}
                        <th className="p-4 bg-[#1a1a1a] text-geo-yellow font-black uppercase tracking-wider text-sm border-b border-[#333] w-1/3 relative border-t-4 border-t-geo-yellow">
                            GEONYX
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-[#333] text-sm">
                    {COMPARISON_DATA.map((row, index) => (
                        <tr key={index}>
                            {/* Feature Label */}
                            <td className="p-4 text-gray-300 font-bold border-r border-[#333] uppercase">
                                {row.label}
                            </td>
                            
                            {/* Competitor (Bad) */}
                            <td className="p-4 text-gray-500 border-r border-[#333] font-medium">
                                <div className="flex items-center gap-3">
                                    <X className="w-4 h-4 text-red-900/60" />
                                    {row.bad}
                                </div>
                            </td>
                            
                            {/* Geonyx (Good) - Highlighted, No Left Border, Added Checkmark */}
                            <td className="p-4 bg-[#161616] text-white font-bold">
                                <div className="flex items-center gap-3">
                                    <Check className="w-4 h-4 text-geo-yellow" />
                                    {row.good}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

      </div>
    </section>
  );
};


import React from 'react';
import { Check, X } from 'lucide-react';
import { SafeImage } from './SafeImage';
import { useTranslation } from 'react-i18next';

const SPEC_DATA = [
  { value: "24 ЧАСА", sKey: "s0" },
  { value: "pH 1–14",  sKey: "s1" },
  { value: "> 80 MPa", sKey: "s2" },
  { value: "1000°C",   sKey: "s3" },
  { value: "> 3.5 MPa",sKey: "s4" },
  { value: "AR 0.5",   sKey: "s5" },
  { value: "W 16",     sKey: "s6" },
  { value: "КЛАС A1fl",sKey: "s7" },
];

const ROW_KEYS = ["r0","r1","r2","r3","r4","r5","r6","r7"];

export const ComparisonSection: React.FC = () => {
  const { t } = useTranslation('comparison');

  return (
    <section id="analysis" className="relative py-24 overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 z-0">
        <SafeImage
          src="/GEONYX-Calculator.jpeg"
          alt="Industrial Texture"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-[#050505]/95"></div>
      </div>

      <div className="w-full px-4 md:px-12 lg:px-20 relative z-10 max-w-[1400px] mx-auto">

        {/* 1. ENGINEERING SPEC MATRIX */}
        <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[2px] bg-geo-yellow"></div>
                <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                    {t('specs.eyebrow')}
                </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 bg-[#080808]/80 backdrop-blur-sm border-t border-l border-white/10">
                {SPEC_DATA.map((item, index) => (
                    <div
                        key={index}
                        className="group relative p-6 md:p-8 border-r border-b border-white/10 hover:bg-white/5 transition-colors duration-300"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-1.5 h-1.5 bg-geo-yellow/50 rounded-sm group-hover:bg-geo-yellow transition-colors"></div>
                            <span className="text-gray-500 font-bold uppercase tracking-widest text-[9px] md:text-[10px]">
                                {t(`specs.${item.sKey}label`)}
                            </span>
                        </div>
                        <div className="text-white font-mono text-xl md:text-2xl font-bold tracking-tighter mb-2 group-hover:text-geo-yellow transition-colors">
                            {item.value}
                        </div>
                        <div className="text-gray-600 text-[10px] uppercase font-medium tracking-wide">
                            {t(`specs.${item.sKey}context`)}
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* 2. HEADER */}
        <div className="mb-12 text-center">
           <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-[2px] w-8 bg-geo-yellow"></div>
                <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                    {t('table.eyebrow')}
                </span>
           </div>
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
            {t('table.title')}
          </h2>
        </div>

        {/* 3. COMPARISON TABLE */}
        <div className="w-full overflow-x-auto border border-[#333] shadow-2xl bg-[#111]">
            <table className="w-full min-w-[900px] border-collapse text-left">
                <thead>
                    <tr className="bg-black">
                        <th className="p-4 text-white font-black uppercase tracking-wider text-xs border-b border-r border-[#333] w-1/3">
                            {t('table.colFeature')}
                        </th>
                        <th className="p-4 text-gray-500 font-bold uppercase tracking-wider text-xs border-b border-r border-[#333] w-1/3">
                            {t('table.colCompetitor')}
                        </th>
                        <th className="p-4 bg-[#1a1a1a] text-geo-yellow font-black uppercase tracking-wider text-sm border-b border-[#333] w-1/3 relative border-t-4 border-t-geo-yellow">
                            {t('table.colGeonyx')}
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-[#333] text-sm">
                    {ROW_KEYS.map((rKey) => (
                        <tr key={rKey}>
                            <td className="p-4 text-gray-300 font-bold border-r border-[#333] uppercase">
                                {t(`table.${rKey}label`)}
                            </td>
                            <td className="p-4 text-gray-500 border-r border-[#333] font-medium">
                                <div className="flex items-center gap-3">
                                    <X className="w-4 h-4 text-red-900/60" />
                                    {t(`table.${rKey}bad`)}
                                </div>
                            </td>
                            <td className="p-4 bg-[#161616] text-white font-bold">
                                <div className="flex items-center gap-3">
                                    <Check className="w-4 h-4 text-geo-yellow" />
                                    {t(`table.${rKey}good`)}
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

import React from 'react';
import { Leaf, Wind, CloudOff, Recycle } from 'lucide-react';
import { SafeImage } from './SafeImage';
import { useTranslation } from 'react-i18next';

export const EcoSection: React.FC = () => {
  const { t } = useTranslation('home');

  return (
    <section className="relative py-24 px-6 md:px-20 overflow-hidden bg-[#0F0F0F] text-white border-t border-[#222]">
      <div className="absolute inset-0 z-0">
        <SafeImage
          src="/GEONYX-ECO.webp"
          alt="Eco Friendly Industry"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-[#0F0F0F]/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">

        <div className="mb-20 flex flex-col items-center">
            <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-[2px] w-12 bg-green-500 shadow-[0_0_15px_#22c55e]"></div>
                <span className="text-green-500 font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                    {t('eco.eyebrow')}
                </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight tracking-tight text-white drop-shadow-xl uppercase">
                {t('eco.titleLine1')} <br/> {t('eco.titleLine2')}
            </h2>

            <p className="text-lg md:text-xl text-green-400 font-bold mb-6 drop-shadow-md max-w-4xl mx-auto">
                {t('eco.subtitle')}
            </p>

            <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-md">
                {t('eco.body')}
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/20 pt-16">

            <div className="flex flex-col items-center group">
                <div className="w-20 h-20 rounded-2xl bg-black/40 backdrop-blur-md border border-green-500/30 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(74,222,128,0.1)] group-hover:shadow-[0_0_30px_rgba(74,222,128,0.3)] transition-shadow duration-500">
                    <Recycle className="w-10 h-10 text-green-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-black text-white mb-4 drop-shadow-md uppercase">{t('eco.col1Title')}</h3>
                <p className="text-gray-200 text-base leading-relaxed max-w-sm drop-shadow-sm font-medium">
                    {t('eco.col1Body')}
                </p>
            </div>

            <div className="flex flex-col items-center group">
                <div className="w-20 h-20 rounded-2xl bg-black/40 backdrop-blur-md border border-green-500/30 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(74,222,128,0.1)] group-hover:shadow-[0_0_30px_rgba(74,222,128,0.3)] transition-shadow duration-500">
                    <Wind className="w-10 h-10 text-green-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-black text-white mb-4 drop-shadow-md uppercase">{t('eco.col2Title')}</h3>
                <p className="text-gray-200 text-base leading-relaxed max-w-sm drop-shadow-sm font-medium">
                    {t('eco.col2Body')}
                </p>
            </div>

            <div className="flex flex-col items-center group">
                <div className="w-20 h-20 rounded-2xl bg-black/40 backdrop-blur-md border border-green-500/30 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(74,222,128,0.1)] group-hover:shadow-[0_0_30px_rgba(74,222,128,0.3)] transition-shadow duration-500">
                    <CloudOff className="w-10 h-10 text-green-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-black text-white mb-4 drop-shadow-md uppercase">{t('eco.col3Title')}</h3>
                <p className="text-gray-200 text-base leading-relaxed max-w-sm drop-shadow-sm font-medium">
                    {t('eco.col3Body')}
                </p>
            </div>

        </div>
      </div>
    </section>
  );
};

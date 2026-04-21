
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SafeImage } from './SafeImage';
import { useTranslation } from 'react-i18next';
import { useLang } from '../hooks/useLang';

export const TechnologySection: React.FC = () => {
  const { t } = useTranslation('sections');
  const { to } = useLang();

  return (
    <section id="technology" className="flex flex-col md:flex-row h-auto md:min-h-[600px] border-t border-[#222]">
      <div className="w-full md:w-1/2 bg-[#141414] flex items-center p-8 md:p-12 lg:p-24 order-2 md:order-1 border-b md:border-b-0 border-[#222]">
        <div className="max-w-xl">
          <div className="flex items-center gap-3 mb-4">
             <div className="h-[2px] w-8 bg-geo-yellow"></div>
             <span className="text-geo-yellow text-xs md:text-sm font-black uppercase tracking-[0.3em]">
                {t('technology.eyebrow')}
             </span>
          </div>

          <h3 className="text-3xl md:text-4xl font-black text-white mb-8 uppercase leading-tight">
            {t('technology.title')}
          </h3>

          <div className="space-y-6 text-gray-400 text-lg leading-relaxed border-l-2 border-[#333] pl-6">
            <p>{t('technology.body')}</p>
          </div>

            <Link to={to('/technical-maps')} className="block w-full sm:w-auto mt-10">
              <button className="w-full sm:w-auto h-12 px-8 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase group">
                {t('technology.btn')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
        </div>
      </div>

      <div className="w-full md:w-1/2 relative min-h-[400px] order-1 md:order-2 bg-black group">
        <SafeImage
          src="/GEONYX-TECHNICAL-CENTER.webp"
          alt="Geopolymer Technology"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
    </section>
  );
};

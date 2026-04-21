
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SafeImage } from './SafeImage';
import { useTranslation } from 'react-i18next';
import { useLang } from '../hooks/useLang';

export const PilotProjectsSection: React.FC = () => {
  const { t } = useTranslation('sections');
  const { to } = useLang();

  return (
    <section id="references" className="flex flex-col md:flex-row h-auto md:min-h-[600px] border-y border-[#222]">
      <div className="w-full md:w-1/2 relative min-h-[400px] order-1 bg-black group">
        <SafeImage
          src="/GEONYX-IMPLEMENTED-PROJECTS.webp"
          alt="Pilot Projects"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="w-full md:w-1/2 bg-[#0F0F0F] flex items-center p-10 md:p-20 order-2">
        <div className="max-w-xl">
          <div className="flex items-center gap-3 mb-6">
             <div className="h-[2px] w-8 bg-geo-yellow"></div>
             <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                {t('pilot.eyebrow')}
             </span>
          </div>

          <h3 className="text-3xl md:text-4xl font-black text-white mb-8 uppercase leading-tight">
            {t('pilot.title')}
          </h3>
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed border-l-2 border-[#333] pl-6">
            <p>{t('pilot.body')}</p>
          </div>

            <Link to={to('/references')} className="block w-full sm:w-auto mt-10">
              <button className="w-full sm:w-auto h-12 px-8 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase group">
                {t('pilot.btn')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
        </div>
      </div>
    </section>
  );
};

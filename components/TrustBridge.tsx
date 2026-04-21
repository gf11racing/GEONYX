import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LogoTicker } from './LogoTicker';
import { useTranslation } from 'react-i18next';
import { useLang } from '../hooks/useLang';

export const TrustBridge: React.FC = () => {
  const { t } = useTranslation('home');
  const { to } = useLang();

  return (
    <section className="w-full bg-[#050505] py-20 border-t border-white/10 relative overflow-hidden">

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FFC600]/40 to-transparent"></div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-8 bg-geo-yellow"></div>
              <span className="text-geo-yellow text-xs md:text-sm font-black tracking-[0.3em] uppercase">
                {t('trustbridge.eyebrow')}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight uppercase tracking-tight">
              {t('trustbridge.titleLine1')} <br />
              <span className="text-geo-yellow">{t('trustbridge.titleHighlight')}</span>
            </h2>

            <p className="text-lg text-white leading-relaxed font-medium text-left">
              {t('trustbridge.body')}
            </p>

            <Link to={to('/certificates')} className="block w-full sm:w-auto mt-4">
              <button className="w-full sm:w-auto h-12 px-8 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase group">
                {t('trustbridge.btn')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>

          <div className="lg:col-span-8 relative flex items-center">
            <div className="hidden lg:block absolute -left-8 top-0 bottom-0 w-px bg-white/10 h-32 my-auto"></div>
            <div className="w-full pl-0 lg:pl-12">
               <LogoTicker />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

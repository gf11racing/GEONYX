import React from 'react';
import { useTranslation } from 'react-i18next';

export const ManifestoBanner: React.FC = () => {
  const { t } = useTranslation('home');

  return (
    <section className="py-24 px-6 md:px-20 bg-[#1A1A1A] border-y border-[#333]">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <div className="w-24 h-1 bg-geo-yellow mb-10 shadow-[0_0_10px_rgba(255,204,0,0.3)]"></div>

        <h2 className="text-3xl md:text-4xl font-black text-white mb-8 leading-tight uppercase tracking-tight">
          {t('manifesto.title')} <br className="hidden md:block"/> <span className="text-geo-yellow">{t('manifesto.titleHighlight')}</span>.
        </h2>

        <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
          {t('manifesto.body')}
        </p>
      </div>
    </section>
  );
};

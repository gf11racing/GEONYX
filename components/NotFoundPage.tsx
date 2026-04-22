import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const SUPPORTED_LANGS = ['bg', 'en', 'de', 'fr', 'es', 'tr', 'ru', 'el'];

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation('common');

  const lang = (() => {
    const seg = location.pathname.split('/')[1];
    return SUPPORTED_LANGS.includes(seg) ? seg : 'bg';
  })();

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-xl">
          <p className="text-geo-yellow font-black text-[120px] md:text-[160px] leading-none tracking-tighter select-none">
            404
          </p>
          <h1 className="text-white font-black text-2xl md:text-3xl uppercase tracking-widest mb-4">
            {t('notFound.title')}
          </h1>
          <p className="text-gray-500 text-sm mb-10">
            {t('notFound.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => { navigate(`/${lang}`); window.scrollTo(0, 0); }}
              className="px-8 py-3 bg-geo-yellow text-black text-sm font-black uppercase tracking-wider hover:bg-white transition-colors"
            >
              {t('notFound.home')}
            </button>
            <button
              onClick={() => navigate(-1)}
              className="px-8 py-3 border border-[#444] text-gray-400 text-sm font-bold uppercase tracking-wider hover:border-white hover:text-white transition-colors"
            >
              {t('notFound.back')}
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

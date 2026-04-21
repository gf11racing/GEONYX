import React from 'react';
import { ArrowRight, Atom, FileCheck, Ruler } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SafeImage } from './SafeImage';
import { useTranslation } from 'react-i18next';
import { useLang } from '../hooks/useLang';

export const SolutionsGrid: React.FC = () => {
  const { t } = useTranslation('home');
  const { to } = useLang();

  return (
    <section id="products" className="flex flex-col w-full bg-[#111]">

      {/* SECTION 1: TECHNOLOGY */}
      <div className="flex flex-col md:flex-row h-auto md:min-h-[600px] border-t border-[#222]">

        <div className="w-full md:w-1/2 relative min-h-[400px] order-1 md:order-1 bg-black group">
          <SafeImage
            src="/GEONYX-MATRIX.webp"
            alt="Abstract Geopolymer Matrix Structure"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
             <Atom className="w-8 h-8 text-geo-yellow mb-2" />
             <span className="text-white font-bold uppercase text-sm block">{t('solutions.s1.badge')}</span>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-[#141414] flex items-center p-8 md:p-12 lg:p-24 order-2 md:order-2 border-b md:border-b-0 border-[#222]">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
                 <div className="h-[2px] w-8 bg-geo-yellow"></div>
                 <span className="text-geo-yellow text-xs md:text-sm font-black uppercase tracking-[0.3em]">
                    {t('solutions.s1.eyebrow')}
                 </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase leading-tight">
              {t('solutions.s1.title')}
            </h3>

            <div className="space-y-6 mb-8">
                <div className="border-l-2 border-geo-yellow pl-4">
                    <h4 className="text-geo-yellow font-bold uppercase text-xs tracking-wider mb-2">{t('solutions.s1.solutionLabel')}</h4>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {t('solutions.s1.body')}
                    </p>
                </div>
            </div>

            <Link to={to('/technology')} className="block w-full sm:w-auto">
              <button className="w-full sm:w-auto h-12 px-8 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase group">
                {t('solutions.s1.btn')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* SECTION 2: STANDARDS */}
      <div className="flex flex-col md:flex-row h-auto md:min-h-[600px] border-b border-[#222]">

        <div className="w-full md:w-1/2 bg-[#0F0F0F] flex items-center p-8 md:p-12 lg:p-24 order-2 md:order-1 border-b md:border-b-0 border-[#222]">
          <div className="max-w-xl">
             <div className="flex items-center gap-3 mb-4">
                 <div className="h-[2px] w-8 bg-geo-yellow"></div>
                 <span className="text-geo-yellow text-xs md:text-sm font-black uppercase tracking-[0.3em]">
                    {t('solutions.s2.eyebrow')}
                 </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase leading-tight">
              {t('solutions.s2.title')}
            </h3>

            <div className="space-y-6 mb-8">
                <div className="border-l-2 border-geo-yellow pl-4">
                    <h4 className="text-geo-yellow font-bold uppercase text-xs tracking-wider mb-2">{t('solutions.s2.solutionLabel')}</h4>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {t('solutions.s2.body')}
                    </p>
                </div>
            </div>

            <Link to={to('/certificates')} className="block w-full sm:w-auto">
              <button className="w-full sm:w-auto h-12 px-8 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase group">
                {t('solutions.s2.btn')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2 relative min-h-[400px] order-1 md:order-2 bg-black group">
          <SafeImage
            src="/GEONYX-Certificates11.webp"
            alt="Compliance Documents and Standards"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
           <div className="absolute inset-0 bg-black/30"></div>

           <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
               <div className="flex justify-end mb-2"><FileCheck className="w-8 h-8 text-geo-yellow" /></div>
               <span className="text-white font-bold uppercase text-sm block">{t('solutions.s2.badge')}</span>
          </div>
        </div>

      </div>

      {/* SECTION 3: AUDIT */}
      <div className="flex flex-col md:flex-row h-auto md:min-h-[600px] border-b border-[#222]">

        <div className="w-full md:w-1/2 relative min-h-[400px] order-1 md:order-1 bg-black group">
          <SafeImage
            src="/GEONYX-ENGINEERING.webp"
            alt="Engineering Blueprint and Audit"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
             <Ruler className="w-8 h-8 text-geo-yellow mb-2" />
             <span className="text-white font-bold uppercase text-sm block">{t('solutions.s3.badge')}</span>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-[#141414] flex items-center p-8 md:p-12 lg:p-24 order-2 md:order-2 border-b md:border-b-0 border-[#222]">
          <div className="max-w-xl">
             <div className="flex items-center gap-3 mb-4">
                 <div className="h-[2px] w-8 bg-geo-yellow"></div>
                 <span className="text-geo-yellow text-xs md:text-sm font-black uppercase tracking-[0.3em]">
                    {t('solutions.s3.eyebrow')}
                 </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase leading-tight">
              {t('solutions.s3.title')}
            </h3>

            <div className="space-y-6 mb-8">
                <div className="border-l-2 border-geo-yellow pl-4">
                    <h4 className="text-geo-yellow font-bold uppercase text-xs tracking-wider mb-2">{t('solutions.s3.solutionLabel')}</h4>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {t('solutions.s3.body')}
                    </p>
                </div>
            </div>

            <Link to={to('/request-inspection')} className="block w-full sm:w-auto">
              <button className="w-full sm:w-auto h-12 px-8 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase group">
                {t('solutions.s3.btn')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
};

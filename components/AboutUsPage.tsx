
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import {
  ArrowRight, BrainCircuit, Microscope, ShieldCheck,
  HardHat, Leaf, CheckCircle, BadgeCheck, Scale
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SafeImage } from './SafeImage';
import { useLang } from '../hooks/useLang';
import { usePageMeta } from '../hooks/usePageMeta';

export const AboutUsPage: React.FC = () => {
  usePageMeta('about');
  const navigate = useNavigate();
  const { t } = useTranslation('about');
  const { to } = useLang();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "GEONYX | За нас – Минерални индустриални системи и инженерни решения";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', "GEONYX е производител на високоустойчиви минерални системи за индустриални подове и критична инфраструктура. Специализирани решения за механична устойчивост, химическа защита, водна защита и термична безопасност, проектирани за тежка индустрия, енергетика, логистика и обществени обекти.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0F0F0F] font-sans text-gray-200 selection:bg-geo-yellow selection:text-black">
      <Navbar />

      {/* STATIC STYLES TO PREVENT FLICKERING */}
      <style>{`
        @keyframes width-grow { from { width: 0; } }
        @keyframes height-grow { from { height: 0; } }
        @keyframes dash-draw { to { stroke-dashoffset: 0; } }
      `}</style>

      {/* HERO SECTION (ВЪВЕДЕНИЕ) */}
      <section className="relative min-h-[85vh] flex items-center justify-center border-b border-[#222] overflow-hidden bg-black">
        {/* Background Visual */}
        <div className="absolute inset-0 z-0">
          <SafeImage
            src="/GEONYX-background-about.webp"
            fallbackSrc="/GEONYX-background-about.webp"
            alt="GEONYX HQ / Team"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/50 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-left pt-20">
            {/* Style Line - Left Aligned */}
            <div className="flex items-center justify-start gap-3 mb-8 page-animate-tag">
                <div className="h-[2px] w-12 bg-geo-yellow shadow-[0_0_15px_#FFCC00]"></div>
                <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">{t('hero.eyebrow')}</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8 uppercase tracking-tighter drop-shadow-2xl max-w-5xl page-animate-title">
                {t('hero.title')} <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-geo-yellow to-yellow-600">{t('hero.titleHighlight')}</span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl leading-relaxed font-light border-l-4 border-geo-yellow pl-4 md:pl-6 py-2 bg-black/30 backdrop-blur-sm page-animate-desc">
                {t('hero.description')}
            </p>
        </div>
      </section>

      {/* BLOCK 1: THE PHILOSOPHY (ФИЛОСОФИЯТА) */}
      <section className="w-full bg-[#111] border-b border-[#222]">
        <div className="flex flex-col lg:flex-row-reverse min-h-[700px]">

            {/* Image Column */}
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black">
                <SafeImage
                    src="/GEONYX-about.webp"
                    fallbackSrc="/GEONYX-about.webp"
                    alt="Strategic Vision"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><BrainCircuit className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">{t('philosophy.badge')}</span>
                </div>
            </div>

            {/* Text Column */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center border-r border-[#222]">
                <div className="mb-8">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                             {t('philosophy.eyebrow')}
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        {t('philosophy.title')}
                    </h3>
                </div>

                <div className="space-y-6">
                    <p className="text-gray-400 text-lg leading-relaxed">
                        {t('philosophy.body1')}
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed border-l-4 border-geo-yellow pl-6">
                        {t('philosophy.body2')}
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* BLOCK 2: R&D AND SCIENCE (НАУЧНО-ИЗСЛЕДОВАТЕЛСКА ДЕЙНОСТ) */}
      <section className="w-full bg-[#0F0F0F] border-b border-[#222]">
        <div className="flex flex-col lg:flex-row min-h-[700px]">

            {/* Image Column */}
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black">
                <SafeImage
                    src="/GEONYX-LABORATORY-PRECISION.webp"
                    fallbackSrc="/GEONYX-LABORATORY-PRECISION.webp"
                    alt="R&D Laboratory"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <Microscope className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">{t('rd.badge')}</span>
                </div>
            </div>

            {/* Text Column */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center border-l border-[#222]">
                <div className="mb-8">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                             {t('rd.eyebrow')}
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        {t('rd.title')}
                    </h3>
                </div>

                <div className="space-y-6">
                    <p className="text-gray-400 text-lg leading-relaxed">
                        {t('rd.body1')}
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed border-l-4 border-geo-yellow pl-6">
                        {t('rd.body2')}
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* BLOCK 3: SINGLE SOURCE LIABILITY (ОТГОВОРНОСТТА) */}
      <section className="w-full bg-[#111] border-b border-[#222]">
        <div className="flex flex-col lg:flex-row-reverse min-h-[700px]">

            {/* Image Column */}
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black">
                <SafeImage
                    src="/GEONYX-ONE-GUARANTEE.webp"
                    fallbackSrc="/GEONYX-ONE-GUARANTEE.webp"
                    alt="Corporate Handshake Agreement"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <ShieldCheck className="w-8 h-8 text-geo-yellow" />
                     <span className="text-white font-bold uppercase text-sm block mt-2">{t('liability.badge')}</span>
                </div>
            </div>

            {/* Text Column */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center border-r border-[#222]">
                <div className="mb-8">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                             {t('liability.eyebrow')}
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        {t('liability.title')}
                    </h3>
                </div>

                <div className="space-y-6">
                    <p className="text-gray-400 text-lg leading-relaxed">
                        {t('liability.body1')}
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed border-l-4 border-geo-yellow pl-6">
                        {t('liability.body2')}
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* BLOCK 4: QA/QC EXECUTION (ИНЖЕНЕРНОТО ИЗПЪЛНЕНИЕ) */}
      <section className="w-full bg-[#0F0F0F] border-b border-[#222]">
        <div className="flex flex-col lg:flex-row min-h-[700px]">

            {/* Image Column */}
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black">
                <SafeImage
                    src="/GEONYX-about4.webp"
                    fallbackSrc="/GEONYX-about4.webp"
                    alt="QA/QC Engineers"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <HardHat className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">{t('qaqc.badge')}</span>
                </div>
            </div>

            {/* Text Column */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center border-l border-[#222]">
                <div className="mb-8">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                             {t('qaqc.eyebrow')}
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        {t('qaqc.title')}
                    </h3>
                </div>

                <div className="space-y-6">
                    <p className="text-gray-400 text-lg leading-relaxed">
                        {t('qaqc.body1')}
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed border-l-4 border-geo-yellow pl-6">
                        {t('qaqc.body2')}
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* BLOCK 5: ESG & SUSTAINABILITY (ЕКОЛОГИЯ) */}
      <section className="w-full bg-[#111] border-b border-[#222]">
        <div className="flex flex-col lg:flex-row-reverse min-h-[700px]">

            {/* Image Column */}
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black">
                <SafeImage
                    src="/GEONYX-LOW-CARBON.webp"
                    fallbackSrc="/GEONYX-LOW-CARBON.webp"
                    alt="Sustainable Future"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><Leaf className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">{t('esg.badge')}</span>
                </div>
            </div>

            {/* Text Column */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center border-r border-[#222]">
                <div className="mb-8">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                             {t('esg.eyebrow')}
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        {t('esg.title')}
                    </h3>
                </div>

                <div className="space-y-6">
                    <p className="text-gray-400 text-lg leading-relaxed">
                        {t('esg.body1')}
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed border-l-4 border-geo-yellow pl-6">
                        {t('esg.body2')}
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* 4. CERTIFICATIONS & STANDARDS GRID */}
      <section className="py-24 bg-[#0a0a0a] border-t border-[#222]">
          <div className="container mx-auto px-6 md:px-10">
              <div className="flex flex-col items-center text-center mb-16">
                  <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm mb-2">{t('certs.eyebrow')}</span>
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase">{t('certs.title')}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">

                  {/* CARD 1 */}
                  <div className="bg-[#111] p-8 border border-[#222] hover:border-geo-yellow transition-colors group">
                      <div className="mb-6"><BadgeCheck className="w-10 h-10 text-gray-600 group-hover:text-geo-yellow transition-colors" /></div>
                      <h4 className="text-xl font-black text-white uppercase mb-2">{t('certs.c1title')}</h4>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">{t('certs.c1sub')}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                          {t('certs.c1body')}
                      </p>
                  </div>

                  {/* CARD 2 */}
                  <div className="bg-[#111] p-8 border border-[#222] hover:border-geo-yellow transition-colors group">
                      <div className="mb-6"><Leaf className="w-10 h-10 text-gray-600 group-hover:text-geo-yellow transition-colors" /></div>
                      <h4 className="text-xl font-black text-white uppercase mb-2">{t('certs.c2title')}</h4>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">{t('certs.c2sub')}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                          {t('certs.c2body')}
                      </p>
                  </div>

                  {/* CARD 3 */}
                  <div className="bg-[#111] p-8 border border-[#222] hover:border-geo-yellow transition-colors group">
                      <div className="mb-6"><ShieldCheck className="w-10 h-10 text-gray-600 group-hover:text-geo-yellow transition-colors" /></div>
                      <h4 className="text-xl font-black text-white uppercase mb-2">{t('certs.c3title')}</h4>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">{t('certs.c3sub')}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                          {t('certs.c3body')}
                      </p>
                  </div>

                  {/* CARD 4 */}
                  <div className="bg-[#111] p-8 border border-[#222] hover:border-geo-yellow transition-colors group">
                      <div className="mb-6"><Scale className="w-10 h-10 text-gray-600 group-hover:text-geo-yellow transition-colors" /></div>
                      <h4 className="text-xl font-black text-white uppercase mb-2">{t('certs.c4title')}</h4>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">{t('certs.c4sub')}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                          {t('certs.c4body')}
                      </p>
                  </div>

              </div>

          </div>
      </section>

      {/* FOOTER CTA (ФИНАЛНО ДЕЙСТВИЕ) */}
      <section className="bg-geo-yellow py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-6 uppercase tracking-tight leading-tight">
             {t('cta.title')}
          </h2>
          <p className="text-xl text-black/80 mb-10 max-w-3xl mx-auto font-medium">
              {t('cta.body')}
          </p>
          <button
            onClick={() => navigate(to('/contacts'))}
            className="h-12 px-8 flex items-center justify-center gap-2 border border-black/30 text-black text-sm font-bold tracking-wide transition-all bg-black text-white hover:bg-[#222] border-none uppercase group mx-auto shadow-2xl"
          >
              {t('cta.btn')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

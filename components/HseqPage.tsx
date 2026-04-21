
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Button } from './Button';
import {
  Download, ShieldCheck, Leaf, Activity, FileText,
  BadgeCheck, Scale, Building2, CheckCircle, ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SafeImage } from './SafeImage';
import { useLang } from '../hooks/useLang';

export const HseqPage: React.FC = () => {
  const { t } = useTranslation('hseq');
  const navigate = useNavigate();
  const { to } = useLang();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = t('meta.title');
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', t('meta.description'));
    }
  }, [t]);

  return (
    <div className="min-h-screen bg-[#0F0F0F] font-sans text-gray-200 selection:bg-geo-yellow selection:text-black">
      <Navbar />

      {/* STATIC STYLES TO PREVENT FLICKERING */}
      <style>{`
        @keyframes width-grow { from { width: 0; } }
        @keyframes height-grow { from { height: 0; } }
        @keyframes dash-draw { to { stroke-dashoffset: 0; } }
      `}</style>

      {/* 1. HERO SECTION (CORPORATE STANDARD) */}
      <section className="relative min-h-[85vh] flex items-center justify-center border-b border-[#222] overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <SafeImage
            src="/HSEQ1.webp"
            fallbackSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Corporate Compliance"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/60 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-left pt-20">
            <div className="flex items-center justify-start gap-3 mb-8 page-animate-tag">
                <div className="h-[2px] w-12 bg-geo-yellow shadow-[0_0_15px_#FFCC00]"></div>
                <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                    {t('hero.eyebrow')}
                </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8 uppercase tracking-tighter drop-shadow-2xl max-w-5xl page-animate-title">
              {t('hero.titleLine1')} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-geo-yellow to-yellow-600">{t('hero.titleLine2')}</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light max-w-4xl leading-relaxed border-l-4 border-geo-yellow pl-6 py-2 bg-black/30 backdrop-blur-sm page-animate-desc">
                {t('hero.description')}
            </p>
        </div>
      </section>

      {/* 2. THE 4 PILLARS - ZIG ZAG LAYOUT */}
      <div className="w-full bg-[#111]">

        {/* BLOCK 1: HEALTH & SAFETY (Left Img) */}
        <section className="flex flex-col lg:flex-row w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage
                    src="/HSEQ2.webp"
                    fallbackSrc="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
                    alt="Safety Analysis"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <Activity className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">{t('healthSafety.badge')}</span>
                </div>
            </div>

            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <div className="mb-8">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                            {t('healthSafety.eyebrow')}
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        {t('healthSafety.title')}
                    </h3>
                </div>

                <div className="space-y-6">
                    <p className="text-gray-400 text-lg leading-relaxed">
                        {t('healthSafety.description')}
                    </p>
                    <div className="flex items-center gap-4 text-sm font-bold text-white uppercase tracking-wider">
                        <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-geo-yellow"/> {t('healthSafety.tag1')}</span>
                        <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-geo-yellow"/> {t('healthSafety.tag2')}</span>
                    </div>
                </div>
            </div>
        </section>

        {/* BLOCK 2: SUSTAINABILITY (Right Img) */}
        <section className="flex flex-col lg:flex-row-reverse w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage
                    src="/HSEQ3.webp"
                    fallbackSrc="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1527&auto=format&fit=crop"
                    alt="Eco Material Cycle"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><Leaf className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">{t('sustainability.badge')}</span>
                </div>
            </div>

            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <div className="mb-8">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                            {t('sustainability.eyebrow')}
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        {t('sustainability.title')}
                    </h3>
                </div>

                <div className="space-y-6">
                    <p className="text-gray-400 text-lg leading-relaxed">
                        {t('sustainability.description')}
                    </p>
                    <div className="flex items-center gap-4 text-sm font-bold text-white uppercase tracking-wider">
                        <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-geo-yellow"/> {t('sustainability.tag1')}</span>
                        <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-geo-yellow"/> {t('sustainability.tag2')}</span>
                    </div>
                </div>
            </div>
        </section>

        {/* BLOCK 3: QUALITY ASSURANCE (Left Img) */}
        <section className="flex flex-col lg:flex-row w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage
                    src="/HSEQ4.webp"
                    fallbackSrc="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"
                    alt="Lab Quality Control"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <FileText className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">{t('quality.badge')}</span>
                </div>
            </div>

            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <div className="mb-8">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                            {t('quality.eyebrow')}
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        {t('quality.title')}
                    </h3>
                </div>

                <div className="space-y-6">
                    <p className="text-gray-400 text-lg leading-relaxed">
                        {t('quality.description')}
                    </p>
                    <div className="flex items-center gap-4 text-sm font-bold text-white uppercase tracking-wider">
                        <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-geo-yellow"/> {t('quality.tag1')}</span>
                        <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-geo-yellow"/> {t('quality.tag2')}</span>
                    </div>
                </div>
            </div>
        </section>

        {/* BLOCK 4: GOVERNANCE / ETHICS (Right Img) */}
        <section className="flex flex-col lg:flex-row-reverse w-full min-h-[600px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage
                    src="/GENYX-ETHICAL-SUPPLY-CHAIN.webp"
                    fallbackSrc="/GENYX-ETHICAL-SUPPLY-CHAIN.webp"
                    alt="Ethical Governance"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><Scale className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">{t('governance.badge')}</span>
                </div>
            </div>

            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <div className="mb-8">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                            {t('governance.eyebrow')}
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        {t('governance.title')}
                    </h3>
                </div>

                <div className="space-y-6">
                    <p className="text-gray-400 text-lg leading-relaxed">
                        {t('governance.description')}
                    </p>
                    <div className="flex items-center gap-4 text-sm font-bold text-white uppercase tracking-wider">
                        <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-geo-yellow"/> {t('governance.tag1')}</span>
                        <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-geo-yellow"/> {t('governance.tag2')}</span>
                    </div>
                </div>
            </div>
        </section>

      </div>

      {/* 4. CERTIFICATIONS & STANDARDS GRID */}
      <section className="py-24 bg-[#0a0a0a] border-t border-[#222]">
          <div className="container mx-auto px-6 md:px-10">
              <div className="flex flex-col items-center text-center mb-16">
                  <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm mb-2">{t('standards.eyebrow')}</span>
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase">{t('standards.title')}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">

                  {/* CARD 1 */}
                  <div className="bg-[#111] p-8 border border-[#222] hover:border-geo-yellow transition-colors group">
                      <div className="mb-6"><BadgeCheck className="w-10 h-10 text-gray-600 group-hover:text-geo-yellow transition-colors" /></div>
                      <h4 className="text-xl font-black text-white uppercase mb-2">ISO 9001:2015</h4>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">{t('standards.cards.iso9001.subtitle')}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                          {t('standards.cards.iso9001.description')}
                      </p>
                  </div>

                  {/* CARD 2 */}
                  <div className="bg-[#111] p-8 border border-[#222] hover:border-geo-yellow transition-colors group">
                      <div className="mb-6"><Leaf className="w-10 h-10 text-gray-600 group-hover:text-geo-yellow transition-colors" /></div>
                      <h4 className="text-xl font-black text-white uppercase mb-2">ISO 14001:2015</h4>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">{t('standards.cards.iso14001.subtitle')}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                          {t('standards.cards.iso14001.description')}
                      </p>
                  </div>

                  {/* CARD 3 */}
                  <div className="bg-[#111] p-8 border border-[#222] hover:border-geo-yellow transition-colors group">
                      <div className="mb-6"><ShieldCheck className="w-10 h-10 text-gray-600 group-hover:text-geo-yellow transition-colors" /></div>
                      <h4 className="text-xl font-black text-white uppercase mb-2">ISO 45001:2018</h4>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">{t('standards.cards.iso45001.subtitle')}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                          {t('standards.cards.iso45001.description')}
                      </p>
                  </div>

                  {/* CARD 4 */}
                  <div className="bg-[#111] p-8 border border-[#222] hover:border-geo-yellow transition-colors group">
                      <div className="mb-6"><Scale className="w-10 h-10 text-gray-600 group-hover:text-geo-yellow transition-colors" /></div>
                      <h4 className="text-xl font-black text-white uppercase mb-2">REACH & VOC</h4>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">{t('standards.cards.reach.subtitle')}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                          {t('standards.cards.reach.description')}
                      </p>
                  </div>

              </div>

              <div className="flex justify-center">
                  <button className="px-8 py-4 border border-[#333] text-gray-400 hover:text-black hover:bg-geo-yellow hover:border-geo-yellow text-xs font-bold uppercase transition-colors flex items-center gap-3 h-12 tracking-wide">
                      <Download className="w-5 h-5" />
                      {t('standards.btnDownload')}
                  </button>
              </div>

          </div>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-geo-yellow py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-6 uppercase tracking-tight leading-tight">
             {t('cta.title')}
          </h2>
          <p className="text-xl text-black/80 mb-10 max-w-3xl mx-auto font-medium">
             {t('cta.description')}
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

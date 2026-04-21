
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Button } from './Button';
import {
  BadgeCheck, FileText, ShieldCheck, Scale, ClipboardCheck, Stamp,
  Flame, AlertTriangle, Droplets, Biohazard, Activity, ArrowRight,
  Lock, CheckCircle, Leaf, Globe
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SafeImage } from './SafeImage';
import { useLang } from '../hooks/useLang';

export const CertificatesPage: React.FC = () => {
  const { t } = useTranslation('certificates');
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

      {/* 1. HERO SECTION (CERTIFIED COMPLIANCE) */}
      <section className="relative min-h-[85vh] flex items-center justify-center border-b border-[#222] overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <SafeImage
            src="/GEONYX-Certificates.jpeg"
            fallbackSrc="/GEONYX-Certificates.webp"
            alt="Regulatory Compliance"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/60 to-transparent"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-20"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-left pt-20">
            <div className="flex items-center justify-start gap-3 mb-8 page-animate-tag">
                <div className="h-[2px] w-12 bg-geo-yellow shadow-[0_0_15px_#FFCC00]"></div>
                <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">{t('hero.eyebrow')}</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 uppercase tracking-tighter drop-shadow-2xl max-w-6xl page-animate-title">
              {t('hero.titleLine1')} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-geo-yellow to-yellow-600">{t('hero.titleLine2')}</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light max-w-4xl leading-relaxed border-l-4 border-geo-yellow pl-6 py-2 bg-black/30 backdrop-blur-sm page-animate-desc">
                {t('hero.description')}
            </p>
        </div>
      </section>

      {/* 2. BLOCK 1: STRUCTURAL & LEGAL */}
      <section className="w-full bg-[#111] border-b border-[#222]">
        <div className="flex flex-col lg:flex-row w-full min-h-[600px]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage
                    src="/GEONYX-Certificates1.webp"
                    fallbackSrc="/GEONYX-Certificates1.webp"
                    alt="Structural Integrity Test"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <Scale className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">{t('structural.badge')}</span>
                </div>
            </div>

            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <div className="mb-8">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                             {t('structural.eyebrow')}
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        {t('structural.title')}
                    </h3>
                </div>

                <div className="space-y-8">
                    <h4 className="text-white font-bold text-sm uppercase tracking-wider border-b border-[#333] pb-2">
                        {t('structural.subtitle')}
                    </h4>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        {t('structural.description')}
                    </p>

                    <div className="flex flex-wrap gap-3">
                        <span className="px-3 py-1 border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase bg-geo-yellow/5">CE MARK</span>
                        <span className="px-3 py-1 border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase bg-geo-yellow/5">EN 13813</span>
                        <span className="px-3 py-1 border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase bg-geo-yellow/5">EN 1504-2</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 3. BLOCK 2: FIRE SAFETY */}
      <section className="w-full bg-[#0F0F0F] border-b border-[#222]">
        <div className="flex flex-col lg:flex-row-reverse w-full min-h-[600px]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage
                    src="/GEONYX-Certificates2.webp"
                    fallbackSrc="/GEONYX-Certificates2.webp"
                    alt="Fire Resistance Test"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><Flame className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">{t('fireSafety.badge')}</span>
                </div>
            </div>

            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                             {t('fireSafety.eyebrow')}
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        {t('fireSafety.title')}
                    </h3>
                </div>

                <div className="space-y-8">
                    <h4 className="text-white font-bold text-sm uppercase tracking-wider border-b border-[#333] pb-2">
                        {t('fireSafety.subtitle')}
                    </h4>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        {t('fireSafety.description')}
                    </p>

                    <div className="flex flex-wrap gap-3">
                        <span className="px-3 py-1 border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase bg-geo-yellow/5">EN 13501-1</span>
                        <span className="px-3 py-1 border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase bg-geo-yellow/5">CLASS A1fl</span>
                        <span className="px-3 py-1 border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase bg-geo-yellow/5">{t('fireSafety.tagNonCombustible')}</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 4. BLOCK 3: HEALTH, SAFETY & ENVIRONMENT (HSE) */}
      <section className="w-full bg-[#111] border-b border-[#222]">
        <div className="flex flex-col lg:flex-row w-full min-h-[600px]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage
                    src="/GEONYX-HYGIENE-AND=ASEPTIC-CONTROL.webp"
                    fallbackSrc="/GEONYX-HYGIENE-AND=ASEPTIC-CONTROL.webp"
                    alt="Slip Resistance Test"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <Activity className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">{t('hse.badge')}</span>
                </div>
            </div>

            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                             {t('hse.eyebrow')}
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        {t('hse.title')}
                    </h3>
                </div>

                <div className="space-y-8">
                    <h4 className="text-white font-bold text-sm uppercase tracking-wider border-b border-[#333] pb-2">
                        {t('hse.subtitle')}
                    </h4>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        {t('hse.description')}
                    </p>

                    <div className="flex flex-wrap gap-3">
                        <span className="px-3 py-1 border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase bg-geo-yellow/5">DIN 51130</span>
                        <span className="px-3 py-1 border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase bg-geo-yellow/5">WHG §19</span>
                        <span className="px-3 py-1 border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase bg-geo-yellow/5">{t('hse.tagVocFree')}</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 5. BLOCK 4: FOOD CONTACT & PHARMA */}
      <section className="w-full bg-[#0F0F0F] border-b border-[#222]">
        <div className="flex flex-col lg:flex-row-reverse w-full min-h-[600px]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage
                    src="/GEONYX=HEALTH-SAFETY-AND-ENVIRONMENT.webp"
                    fallbackSrc="/GEONYX=HEALTH-SAFETY-AND-ENVIRONMENT.webp"
                    alt="Sterile Environment"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><Biohazard className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">{t('hygiene.badge')}</span>
                </div>
            </div>

            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                             {t('hygiene.eyebrow')}
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        {t('hygiene.title')}
                    </h3>
                </div>

                <div className="space-y-8">
                    <h4 className="text-white font-bold text-sm uppercase tracking-wider border-b border-[#333] pb-2">
                        {t('hygiene.subtitle')}
                    </h4>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        {t('hygiene.description')}
                    </p>

                    <div className="flex flex-wrap gap-3">
                        <span className="px-3 py-1 border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase bg-geo-yellow/5">{t('hygiene.tagHaccp')}</span>
                        <span className="px-3 py-1 border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase bg-geo-yellow/5">{t('hygiene.tagGmp')}</span>
                        <span className="px-3 py-1 border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase bg-geo-yellow/5">{t('hygiene.tagDrinkingWater')}</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 6. BLOCK 5: QUALITY MANAGEMENT */}
      <section className="py-24 bg-[#0a0a0a] border-b border-[#222]">
          <div className="container mx-auto px-6 md:px-10 text-center">
              <div className="mb-12">
                   <div className="inline-flex items-center justify-center p-4 bg-[#111] border border-[#333] rounded-full mb-6">
                       <BadgeCheck className="w-10 h-10 text-geo-yellow" />
                   </div>
                   <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-4">{t('qualityMgmt.title')}</h2>
                   <span className="text-gray-500 font-black uppercase tracking-[0.3em] text-xs md:text-sm">{t('qualityMgmt.eyebrow')}</span>
              </div>

              <div className="max-w-4xl mx-auto bg-[#141414] border border-[#222] p-10 md:p-16">
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 font-light">
                      {t('qualityMgmt.description', { bold: 'ISO 9001:2015' }).split('ISO 9001:2015').map((part, i, arr) =>
                        i < arr.length - 1
                          ? <React.Fragment key={i}>{part}<span className="text-white font-bold">ISO 9001:2015</span></React.Fragment>
                          : <React.Fragment key={i}>{part}</React.Fragment>
                      )}
                  </p>
                  <div className="flex justify-center gap-4">
                      <span className="flex items-center gap-2 text-geo-yellow font-bold uppercase text-xs tracking-wider border border-geo-yellow/30 px-4 py-2 bg-geo-yellow/5">
                          <CheckCircle className="w-4 h-4"/> ISO 9001:2015
                      </span>
                      <span className="flex items-center gap-2 text-geo-yellow font-bold uppercase text-xs tracking-wider border border-geo-yellow/30 px-4 py-2 bg-geo-yellow/5">
                          <CheckCircle className="w-4 h-4"/> {t('qualityMgmt.tagTraceability')}
                      </span>
                  </div>
              </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

                  {/* CARD 1 */}
                  <div className="bg-[#111] p-8 border border-[#222] hover:border-geo-yellow transition-colors group">
                      <div className="mb-6"><BadgeCheck className="w-10 h-10 text-gray-600 group-hover:text-geo-yellow transition-colors" /></div>
                      <h4 className="text-xl font-black text-white uppercase mb-2">ISO 9001:2015</h4>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">{t('qualityMgmt.cards.iso9001.subtitle')}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                          {t('qualityMgmt.cards.iso9001.description')}
                      </p>
                  </div>

                  {/* CARD 2 */}
                  <div className="bg-[#111] p-8 border border-[#222] hover:border-geo-yellow transition-colors group">
                      <div className="mb-6"><Leaf className="w-10 h-10 text-gray-600 group-hover:text-geo-yellow transition-colors" /></div>
                      <h4 className="text-xl font-black text-white uppercase mb-2">ISO 14001:2015</h4>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">{t('qualityMgmt.cards.iso14001.subtitle')}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                          {t('qualityMgmt.cards.iso14001.description')}
                      </p>
                  </div>

                  {/* CARD 3 */}
                  <div className="bg-[#111] p-8 border border-[#222] hover:border-geo-yellow transition-colors group">
                      <div className="mb-6"><ShieldCheck className="w-10 h-10 text-gray-600 group-hover:text-geo-yellow transition-colors" /></div>
                      <h4 className="text-xl font-black text-white uppercase mb-2">ISO 45001:2018</h4>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">{t('qualityMgmt.cards.iso45001.subtitle')}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                          {t('qualityMgmt.cards.iso45001.description')}
                      </p>
                  </div>

                  {/* CARD 4 */}
                  <div className="bg-[#111] p-8 border border-[#222] hover:border-geo-yellow transition-colors group">
                      <div className="mb-6"><Scale className="w-10 h-10 text-gray-600 group-hover:text-geo-yellow transition-colors" /></div>
                      <h4 className="text-xl font-black text-white uppercase mb-2">REACH & VOC</h4>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">{t('qualityMgmt.cards.reach.subtitle')}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                          {t('qualityMgmt.cards.reach.description')}
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* 7. FOOTER / STATUS DISCLAIMER */}
      <section className="py-16 bg-[#1a1a1a] border-t border-[#222]">
          <div className="container mx-auto px-6 md:px-10 max-w-4xl">
              <div className="bg-[#111] border-l-4 border-geo-yellow p-8 shadow-2xl relative">
                  <div className="flex items-start gap-4">
                      <Lock className="w-6 h-6 text-geo-yellow flex-shrink-0 mt-1" />
                      <div>
                          <h4 className="text-geo-yellow font-black uppercase text-sm mb-3 tracking-wider">{t('disclaimer.title')}</h4>
                          <p className="text-gray-400 text-xs md:text-sm leading-relaxed text-justify font-mono">
                              {t('disclaimer.description')}
                          </p>
                      </div>
                  </div>
              </div>

              <div className="text-center mt-12">
                  <button onClick={() => navigate(to('/contacts'))} className="h-12 px-8 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase group mx-auto">
                      {t('disclaimer.btn')}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
              </div>
          </div>
      </section>

      <Footer />
    </div>
  );
};

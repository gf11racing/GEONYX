
import React, { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import {
  FileText, ShieldAlert, BookOpen, Download, ClipboardCheck,
  Microscope, FlaskConical, Scale, Leaf, Activity, Zap,
  CheckCircle, Settings, RefreshCw, BarChart3, Hammer, Flame, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SafeImage } from './SafeImage';
import { useTranslation } from 'react-i18next';

export const TechnicalMapsPage: React.FC = () => {
  const { t } = useTranslation('technicalmaps');

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

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center border-b border-[#222] overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <SafeImage
            src="/GEONYX-technical-data-sheet.jpeg"
            fallbackSrc="GEONYX-technical-data-sheet.webp"
            alt="Engineering Data Center"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/60 to-transparent"></div>
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

            <div className="flex flex-col sm:flex-row gap-4 page-animate-buttons">
                <button className="h-12 px-8 flex items-center justify-center gap-2 bg-geo-yellow text-black text-sm font-bold tracking-wide transition-all hover:bg-white hover:text-black uppercase rounded-none w-full sm:w-auto">
                    {t('hero.btnCatalog')} <Download className="w-4 h-4"/>
                </button>
            </div>
        </div>
      </section>

      {/* 2. THE ENGINEERING BLOCKS */}
      <div className="w-full bg-[#111]">

        {/* BLOCK 1: SYSTEM & PRODUCT DATA */}
        <section className="flex flex-col lg:flex-row w-full min-h-[700px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage
                    src="/GEONYX-technical-data-sheet1.webp"
                    fallbackSrc="GEONYX-technical-data-sheet1.webp"
                    alt="Technical Specs Sheet"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <FileText className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">SDS / PDS</span>
                </div>
            </div>

            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                             {t('blockSDS.eyebrow')}
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        {t('blockSDS.title')}
                    </h3>
                </div>

                <div className="space-y-8">
                    <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-[#333] pl-6">
                        {t('blockSDS.description')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="h-12 px-8 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase group w-full sm:w-auto">
                            {t('blockSDS.btnSDS')}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="h-12 px-8 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase group w-full sm:w-auto">
                            {t('blockSDS.btnPDS')}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </section>

        {/* BLOCK 2: LEGAL & ESG COMPLIANCE */}
        <section className="flex flex-col lg:flex-row-reverse w-full min-h-[700px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage
                    src="/GEONYX-DECLARATION-OF-PERFORMANCE-DoP.webp"
                    fallbackSrc="/GEONYX-DECLARATION-OF-PERFORMANCE-DoP.webp"
                    alt="Eco Compliance"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-green-500 p-4 text-right">
                     <div className="flex justify-end mb-2"><Leaf className="w-8 h-8 text-green-500" /></div>
                     <span className="text-white font-bold uppercase text-sm block">ESG & DoP</span>
                </div>
            </div>

            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                             {t('blockDoP.eyebrow')}
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        {t('blockDoP.title')}
                    </h3>
                </div>

                <div className="space-y-8">
                    <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-[#333] pl-6">
                        {t('blockDoP.description')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="h-12 px-8 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase group w-full sm:w-auto">
                            <Scale className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                            {t('blockDoP.btnDoP')}
                        </button>
                        <button className="h-12 px-8 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase group w-full sm:w-auto">
                            <Leaf className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                            {t('blockDoP.btnEPD')}
                        </button>
                    </div>
                </div>
            </div>
        </section>

        {/* BLOCK 3: HSE */}
        <section className="flex flex-col lg:flex-row w-full min-h-[700px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage
                    src="/GEONYX-technical-data-sheet2.webp"
                    fallbackSrc="GEONYX-technical-data-sheet2.webp"
                    alt="Safety MSDS"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <ShieldAlert className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">{t('blockMSDS.eyebrow').split(' ').pop()}</span>
                </div>
            </div>

            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                             {t('blockMSDS.eyebrow')}
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        {t('blockMSDS.title')}
                    </h3>
                </div>

                <div className="space-y-8">
                    <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-[#333] pl-6">
                        {t('blockMSDS.description')}
                    </p>

                    <button className="h-12 px-8 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase group w-full sm:w-auto mt-4">
                        {t('blockMSDS.btnMSDS')}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>

        {/* BLOCK 4: EXECUTION & QA/QC */}
        <section className="flex flex-col lg:flex-row-reverse w-full min-h-[700px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage
                    src="/GEONYX-PROTOCOLS-FOR-LAYING.webp"
                    fallbackSrc="/GEONYX-PROTOCOLS-FOR-LAYING.webp"
                    alt="QA/QC Inspection"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><CheckCircle className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">QA / QC КОНТРОЛ</span>
                </div>
            </div>

            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                             {t('blockProtocols.eyebrow')}
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        {t('blockProtocols.title')}
                    </h3>
                </div>

                <div className="space-y-8">
                    <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-[#333] pl-6">
                        {t('blockProtocols.description')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="h-12 px-8 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase group w-full sm:w-auto">
                            <Settings className="w-4 h-4" />
                            {t('blockProtocols.btnMS')}
                        </button>
                        <button className="h-12 px-8 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase group w-full sm:w-auto">
                            <ClipboardCheck className="w-4 h-4" />
                            {t('blockProtocols.btnQAQC')}
                        </button>
                    </div>
                </div>
            </div>
        </section>

        {/* BLOCK 5: ANALYTICS & CHARTS */}
        <section className="py-24 bg-[#0a0a0a] border-b border-[#222]">
            <div className="container mx-auto px-6 md:px-10">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-[2px] w-6 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                             {t('analyticsSection.eyebrow')}
                        </span>
                        <div className="h-[2px] w-6 bg-geo-yellow"></div>
                   </div>
                    <h2 className="text-3xl md:text-4xl font-black text-white uppercase">{t('analyticsSection.title')}</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* CARD 1: CHEMICAL */}
                    <div className="bg-[#141414] border border-[#222] p-8 hover:border-geo-yellow transition-all duration-300 group">
                        <div className="mb-6 flex justify-between items-start">
                             <FlaskConical className="w-10 h-10 text-gray-500 group-hover:text-geo-yellow transition-colors" />
                             <span className="text-gray-700 font-mono text-xs font-bold uppercase">EN 13529</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4 uppercase">{t('analyticsSection.card1title')}</h3>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                            {t('analyticsSection.card1desc')}
                        </p>
                        <button className="px-4 py-2 border border-[#333] text-gray-400 hover:text-black hover:bg-geo-yellow hover:border-geo-yellow text-xs font-bold uppercase transition-colors flex items-center justify-center gap-2 w-full sm:w-fit">
                            <Download className="w-3 h-3" /> {t('analyticsSection.card1btn')}
                        </button>
                    </div>

                    {/* CARD 2: THERMAL */}
                    <div className="bg-[#141414] border border-[#222] p-8 hover:border-geo-yellow transition-all duration-300 group">
                        <div className="mb-6 flex justify-between items-start">
                             <Activity className="w-10 h-10 text-gray-500 group-hover:text-geo-yellow transition-colors" />
                             <span className="text-gray-700 font-mono text-xs font-bold uppercase">DIN 52108</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4 uppercase">{t('analyticsSection.card2title')}</h3>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                            {t('analyticsSection.card2desc')}
                        </p>
                        <button className="px-4 py-2 border border-[#333] text-gray-400 hover:text-black hover:bg-geo-yellow hover:border-geo-yellow text-xs font-bold uppercase transition-colors flex items-center justify-center gap-2 w-full sm:w-fit">
                            <Download className="w-3 h-3" /> {t('analyticsSection.card2btn')}
                        </button>
                    </div>

                    {/* CARD 3: ELECTRICAL */}
                    <div className="bg-[#141414] border border-[#222] p-8 hover:border-geo-yellow transition-all duration-300 group">
                        <div className="mb-6 flex justify-between items-start">
                             <Zap className="w-10 h-10 text-gray-500 group-hover:text-geo-yellow transition-colors" />
                             <span className="text-gray-700 font-mono text-xs font-bold uppercase">ANSI/ESD S20.20</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4 uppercase">{t('analyticsSection.card3title')}</h3>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                            {t('analyticsSection.card3desc')}
                        </p>
                        <button className="px-4 py-2 border border-[#333] text-gray-400 hover:text-black hover:bg-geo-yellow hover:border-geo-yellow text-xs font-bold uppercase transition-colors flex items-center justify-center gap-2 w-full sm:w-fit">
                            <Download className="w-3 h-3" /> {t('analyticsSection.card3btn')}
                        </button>
                    </div>

                </div>
            </div>
        </section>

        {/* BLOCK 6: LIFECYCLE MANAGEMENT */}
        <section className="py-24 bg-[#111] border-b border-[#222] relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="container mx-auto px-6 text-center relative z-10">
                <div className="inline-flex items-center gap-2 bg-[#222] border border-[#333] px-4 py-2 rounded-full mb-8">
                     <RefreshCw className="w-4 h-4 text-geo-yellow" />
                     <span className="text-gray-400 font-black uppercase tracking-[0.3em] text-xs md:text-sm">{t('lifecycle.eyebrow')}</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 leading-tight">
                    {t('lifecycle.title')}
                </h2>

                <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10">
                    {t('lifecycle.description')}
                </p>

                <button className="h-12 px-8 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase group mx-auto w-full sm:w-auto">
                    <BookOpen className="w-5 h-5" />
                    {t('lifecycle.btn')}
                </button>
            </div>
        </section>

      </div>

      <Footer />
    </div>
  );
};

import React, { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Button } from './Button';
import { Atom, Zap, Flame, Leaf, ArrowRight, CheckCircle, X, Microscope, Clock, ShieldAlert, Rocket, ShieldCheck, Droplets, Gem } from 'lucide-react';
import { CrossSectionHotspots } from './CrossSectionHotspots';
import { useTranslation } from 'react-i18next';
import { usePageMeta } from '../hooks/usePageMeta';

export const TechnologyPage: React.FC = () => {
  usePageMeta('technology');
  const { t } = useTranslation('technology');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0F0F0F] font-sans text-gray-200 selection:bg-geo-yellow selection:text-black">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center border-b border-[#222] overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img
            src="/GEONYX-background-technology.jpeg"
            onError={(e) => { e.currentTarget.src = "/GEONYX-background-technology.jpeg" }}
            alt="Geopolymer Molecular Structure"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F]/80 via-[#0F0F0F]/50 to-[#0F0F0F]"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')] opacity-10"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center pt-20">
            <div className="inline-flex items-center gap-2 border border-geo-yellow/30 bg-geo-yellow/10 px-4 py-1 rounded-full mb-8 backdrop-blur-md">
                <Atom className="w-4 h-4 text-geo-yellow" />
                <span className="text-geo-yellow font-bold uppercase tracking-widest text-xs">{t('hero.eyebrow')}</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 uppercase tracking-tight drop-shadow-2xl max-w-5xl mx-auto">
              {t('hero.title')}
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-10 font-light max-w-3xl mx-auto leading-relaxed border-l-4 border-geo-yellow pl-6 text-left md:text-center md:border-l-0 md:pl-0">
              {t('hero.description')}
            </p>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="py-24 px-6 md:px-20 bg-[#111] border-b border-[#222]">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-8 leading-tight">
                {t('intro.title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                {t('intro.body')}
            </p>
        </div>
      </section>

      {/* 3. INTERACTIVE CROSS-SECTION */}
      <CrossSectionHotspots />

      {/* 4. THE CHEMISTRY */}
      <section className="w-full bg-[#0F0F0F] border-b border-[#222]">
        <div className="flex flex-col lg:flex-row min-h-[600px]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black overflow-hidden">
                <img
                    src="/GEONYX-technology1.jpeg"
                    onError={(e) => { e.currentTarget.src = "/GEONYX-technology1.jpeg" }}
                    alt="Microscopic comparison: Old porous Concrete vs Dense Geonyx Structure"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <Microscope className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">{t('chemistry.badge')}</span>
                </div>
            </div>

            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center border-l border-[#222]">
                <div className="mb-6">
                    <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm mb-2 block">{t('chemistry.eyebrow')}</span>
                    <h2 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight mb-6">
                        {t('chemistry.title')}
                    </h2>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    {t('chemistry.body')}
                </p>

                <div className="space-y-6">
                    <div className="bg-[#151515] p-6 border-l-2 border-geo-yellow">
                        <h4 className="text-white font-bold uppercase text-lg mb-2">{t('chemistry.card1title')}</h4>
                        <p className="text-gray-500 text-sm">{t('chemistry.card1body')}</p>
                    </div>
                    <div className="bg-[#151515] p-6 border-l-2 border-geo-yellow">
                        <h4 className="text-white font-bold uppercase text-lg mb-2">{t('chemistry.card2title')}</h4>
                        <p className="text-gray-500 text-sm">{t('chemistry.card2body')}</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 5. SPEED & EFFICIENCY */}
      <section className="w-full bg-[#111] border-b border-[#222]">
        <div className="flex flex-col lg:flex-row-reverse min-h-[600px]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black overflow-hidden">
                <img
                    src="/GEONYX-technology2.jpeg"
                    onError={(e) => { e.currentTarget.src = "/GEONYX-technology2.jpeg" }}
                    alt="Industrial forklift driving on fresh floor"
                    className="absolute inset-0 w-full h-full object-cover opacity-90"
                />
                 <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><Clock className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">{t('speed.badge')}</span>
                </div>
            </div>

            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center border-r border-[#222]">
                <div className="mb-6">
                    <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm mb-2 block">{t('speed.eyebrow')}</span>
                    <h2 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight mb-6">
                        {t('speed.title')} <br/> <span className="text-geo-yellow">{t('speed.titleHighlight')}</span>
                    </h2>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    {t('speed.body')}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="border border-[#333] p-6 bg-[#151515] hover:border-geo-yellow transition-colors group">
                        <div className="text-3xl font-black text-white mb-1 group-hover:text-geo-yellow">{t('speed.stat1value')}</div>
                        <div className="text-gray-500 text-xs font-bold uppercase tracking-wide">{t('speed.stat1label')}</div>
                    </div>
                    <div className="border border-[#333] p-6 bg-[#151515] hover:border-geo-yellow transition-colors group">
                        <div className="text-3xl font-black text-white mb-1 group-hover:text-geo-yellow">{t('speed.stat2value')}</div>
                        <div className="text-gray-500 text-xs font-bold uppercase tracking-wide">{t('speed.stat2label')}</div>
                    </div>
                </div>

                <div className="mt-8 flex items-center gap-3 text-white font-bold uppercase text-sm">
                    <CheckCircle className="text-geo-yellow w-5 h-5" />
                    {t('speed.note')}
                </div>
            </div>
        </div>
      </section>

      {/* 6. RESISTANCE & FIRE SAFETY */}
      <section className="w-full bg-[#0F0F0F] border-b border-[#222]">
        <div className="flex flex-col lg:flex-row min-h-[600px]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black overflow-hidden">
                <img
                    src="/GEONYX-technology3.jpeg"
                    onError={(e) => { e.currentTarget.src = "/GEONYX-technology3.jpeg" }}
                    alt="Acid on GEONYX surface, background fire"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                 <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <ShieldAlert className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">{t('resistance.badge')}</span>
                </div>
            </div>

            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center border-l border-[#222]">
                <div className="mb-6">
                    <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm mb-2 block">{t('resistance.eyebrow')}</span>
                    <h2 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight mb-6">
                        {t('resistance.title')}
                    </h2>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    {t('resistance.body')}
                </p>

                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="bg-red-900/20 p-3 rounded-full border border-red-500/30">
                            <Flame className="w-6 h-6 text-red-500" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold uppercase text-lg mb-1">{t('resistance.item1title')}</h4>
                            <p className="text-gray-500 text-sm">{t('resistance.item1body')}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="bg-green-900/20 p-3 rounded-full border border-green-500/30">
                            <Zap className="w-6 h-6 text-green-500" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold uppercase text-lg mb-1">{t('resistance.item2title')}</h4>
                            <p className="text-gray-500 text-sm">{t('resistance.item2body')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 7. ECOLOGY */}
      <section className="relative py-32 overflow-hidden bg-[#051a0d] border-b border-[#222]">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] opacity-10"></div>
           <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>

           <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="inline-flex items-center justify-center p-3 bg-green-500/10 rounded-full border border-green-500/30 mb-8 animate-pulse">
                    <Leaf className="w-6 h-6 text-green-400" />
                </div>

                <h2 className="text-4xl md:text-7xl font-black text-white uppercase leading-none mb-6 tracking-tight">
                    {t('eco.statPrefix')} <br/> <span className="text-green-500">{t('eco.statHighlight')}</span>
                </h2>

                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                    {t('eco.body')}
                </p>
           </div>
      </section>

      {/* 8. COMPARISON TABLE */}
      <section className="py-24 bg-[#0a0a0a] border-b border-[#222]">
          <div className="container mx-auto px-6 md:px-10">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-4">{t('comparison.title')}</h2>
                  <div className="w-24 h-2 bg-geo-yellow mx-auto"></div>
              </div>

              <div className="w-full overflow-x-auto border border-[#333] shadow-2xl bg-[#111]">
                  <table className="w-full min-w-[900px] border-collapse text-left">
                      <thead>
                          <tr className="bg-[#151515]">
                              <th className="p-6 text-gray-500 font-bold uppercase tracking-wider text-sm border-b border-r border-[#333] w-1/4">{t('comparison.col1')}</th>
                              <th className="p-6 text-gray-500 font-bold uppercase tracking-wider text-sm border-b border-r border-[#333] w-1/4">{t('comparison.col2')}</th>
                              <th className="p-6 text-gray-500 font-bold uppercase tracking-wider text-sm border-b border-r border-[#333] w-1/4">{t('comparison.col3')}</th>
                              <th className="p-6 bg-[#1a1a1a] text-geo-yellow font-black uppercase tracking-wider text-lg border-b border-[#333] w-1/4 relative">
                                  {t('comparison.col4')}
                                  <div className="absolute top-0 right-0 w-full h-1 bg-geo-yellow"></div>
                              </th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-[#333]">
                          <tr>
                              <td className="p-6 text-white font-bold border-r border-[#333] uppercase">{t('comparison.row1')}</td>
                              <td className="p-6 text-gray-500 border-r border-[#333] font-medium">{t('comparison.row1v2')}</td>
                              <td className="p-6 text-gray-500 border-r border-[#333] font-medium">{t('comparison.row1v3')}</td>
                              <td className="p-6 bg-[#161616] text-white font-bold border-l-4 border-l-geo-yellow">
                                  <div className="flex items-center gap-3">
                                      <div className="p-2 bg-geo-yellow/10 rounded-full border border-geo-yellow/30">
                                          <Rocket className="w-6 h-6 text-geo-yellow" />
                                      </div>
                                      <span>{t('comparison.row1v4')}</span>
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <td className="p-6 text-white font-bold border-r border-[#333] uppercase">{t('comparison.row2')}</td>
                              <td className="p-6 text-gray-500 border-r border-[#333] font-medium">{t('comparison.row2v2')}</td>
                              <td className="p-6 text-gray-500 border-r border-[#333] font-medium">{t('comparison.row2v3')}</td>
                              <td className="p-6 bg-[#161616] text-white font-bold border-l-4 border-l-geo-yellow">
                                  <div className="flex items-center gap-3">
                                      <div className="p-2 bg-geo-yellow/10 rounded-full border border-geo-yellow/30">
                                          <Atom className="w-6 h-6 text-geo-yellow" />
                                      </div>
                                      <span>{t('comparison.row2v4')}</span>
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <td className="p-6 text-white font-bold border-r border-[#333] uppercase">{t('comparison.row3')}</td>
                              <td className="p-6 text-gray-500 border-r border-[#333] font-medium">{t('comparison.row3v2')}</td>
                              <td className="p-6 text-gray-500 border-r border-[#333] font-medium">
                                  <div className="flex items-center gap-2">
                                      <X className="w-5 h-5 text-red-600"/> {t('comparison.row3v3')}
                                  </div>
                              </td>
                              <td className="p-6 bg-[#161616] text-white font-bold border-l-4 border-l-geo-yellow">
                                  <div className="flex items-center gap-3">
                                      <div className="p-2 bg-geo-yellow/10 rounded-full border border-geo-yellow/30">
                                          <ShieldCheck className="w-6 h-6 text-geo-yellow" />
                                      </div>
                                      <span>{t('comparison.row3v4')}</span>
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <td className="p-6 text-white font-bold border-r border-[#333] uppercase">{t('comparison.row4')}</td>
                              <td className="p-6 text-gray-500 border-r border-[#333] font-medium">{t('comparison.row4v2')}</td>
                              <td className="p-6 text-gray-500 border-r border-[#333] font-medium">{t('comparison.row4v3')}</td>
                              <td className="p-6 bg-[#161616] text-white font-bold border-l-4 border-l-geo-yellow">
                                  <div className="flex items-center gap-3">
                                      <div className="p-2 bg-geo-yellow/10 rounded-full border border-geo-yellow/30">
                                          <Droplets className="w-6 h-6 text-geo-yellow" />
                                      </div>
                                      <span>{t('comparison.row4v4')}</span>
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <td className="p-6 text-white font-bold border-r border-[#333] uppercase">{t('comparison.row5')}</td>
                              <td className="p-6 text-gray-500 border-r border-[#333] font-medium">{t('comparison.row5v2')}</td>
                              <td className="p-6 text-gray-500 border-r border-[#333] font-medium">{t('comparison.row5v3')}</td>
                              <td className="p-6 bg-[#161616] text-white font-bold border-l-4 border-l-geo-yellow">
                                  <div className="flex items-center gap-3">
                                      <div className="p-2 bg-geo-yellow/10 rounded-full border border-geo-yellow/30">
                                          <Gem className="w-6 h-6 text-geo-yellow" />
                                      </div>
                                      <span>{t('comparison.row5v4')}</span>
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <td className="p-6 text-white font-bold border-r border-[#333] uppercase">{t('comparison.row6')}</td>
                              <td className="p-6 text-gray-500 border-r border-[#333] font-medium">{t('comparison.row6v2')}</td>
                              <td className="p-6 text-gray-500 border-r border-[#333] font-medium">{t('comparison.row6v3')}</td>
                              <td className="p-6 bg-[#161616] text-white font-bold border-l-4 border-l-geo-yellow">
                                  <div className="flex items-center gap-3">
                                      <div className="p-2 bg-green-900/20 rounded-full border border-green-500/30">
                                          <Leaf className="w-6 h-6 text-green-500" />
                                      </div>
                                      <span>{t('comparison.row6v4')}</span>
                                  </div>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-geo-yellow py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-nyx-dark mb-6 uppercase tracking-tight">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-nyx-dark/80 mb-10 max-w-2xl mx-auto font-medium">
            {t('cta.body')}
          </p>
          <a href="#contact">
            <Button variant="primary" className="bg-nyx-dark text-white hover:bg-black border-2 border-transparent text-lg px-12 py-5 shadow-2xl">
              {t('cta.btn')} <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

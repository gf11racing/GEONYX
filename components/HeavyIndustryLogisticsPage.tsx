
import React, { useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Button } from './Button';
import {
  ArrowRight, FileText, Download, HelpCircle, CheckCircle, Copy, Check,
  Warehouse, Activity, CircleDot, Truck, Train, Shirt, Printer, Server,
  Factory, Hammer, Zap, Wrench, Settings, Boxes, ShieldCheck, Flame, Droplets
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { SafeImage } from './SafeImage';
import { useTranslation } from 'react-i18next';
import { useLang } from '../hooks/useLang';
import { usePageMeta } from '../hooks/usePageMeta';

// Data arrays: only id/key/icon — text comes from t() in render
const zigzagBlocks = [
  { key: 'block1', img: '/GEONYX-VNA-ALLEYS-AND-HEAVY-TRAFFIC.webp', alt: 'VNA Aisles', Icon: Warehouse, reverse: false, tagRight: false },
  { key: 'block2', img: '/GEONYX-METAL-SHEARS-AND-OILS.webp',         alt: 'Metal Working', Icon: Factory, reverse: true,  tagRight: true  },
  { key: 'block3', img: '/GEONYX-GIGAFACTORY-AND-ESD-CONTROL.webp',   alt: 'Gigafactory', Icon: Activity, reverse: false, tagRight: false },
  { key: 'block4', img: '/GEONYX-SOOT-AND-HOT-RUBBER.webp',           alt: 'Tire Production', Icon: CircleDot, reverse: true, tagRight: true },
  { key: 'block5', img: '/GEONYX-HEAVY-TRUCK-SERVICES.webp',          alt: 'Heavy Service', Icon: Truck, reverse: false, tagRight: false },
  { key: 'block6', img: '/GEONYX-RAILWAY-DEPOT-AND-REPAIR-FACILITIES.webp', alt: 'Railway Depot', Icon: Train, reverse: true, tagRight: true },
  { key: 'block7', img: '/GEONYX-TEXTILE-AND-DYEING-SHOPPING.webp',   alt: 'Textile Factory', Icon: Shirt, reverse: false, tagRight: false },
  { key: 'block8', img: '/GEONYX-PRINTERS-AND-PRINTING.webp',         alt: 'Printing', Icon: Printer, reverse: true, tagRight: true },
];

const applicationCards = [
  { key: 'a1', Icon: Boxes },
  { key: 'a2', Icon: Factory },
  { key: 'a3', Icon: CircleDot },
  { key: 'a4', Icon: Truck },
  { key: 'a5', Icon: Train },
  { key: 'a6', Icon: Shirt },
  { key: 'a7', Icon: Printer },
  { key: 'a8', Icon: Server },
];

const systemKeys = ['s1', 's2', 's3', 's4', 's5'];

const workflowSteps = ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'];

const docKeys = ['d1', 'd2', 'd3', 'd4'];

const offerDocKeys = ['doc1', 'doc2', 'doc3', 'doc4', 'doc5', 'doc6'];

const heroZones = [
  'zone1','zone2','zone3','zone4','zone5',
  'zone6','zone7','zone8','zone9','zone10',
];

export const HeavyIndustryLogisticsPage: React.FC = () => {
  usePageMeta('heavyindustry');
  const navigate = useNavigate();
  const { t } = useTranslation('heavyindustry');
  const { to } = useLang();
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = t('meta.title');
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', t('meta.description'));
    }
  }, [t]);

  const handleCopyTender = () => {
    navigator.clipboard.writeText(t('tender.text'));
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] font-sans text-gray-200 overflow-x-hidden selection:bg-geo-yellow selection:text-black">
      <Navbar />

      {/* STATIC STYLES */}
      <style>{`
        @keyframes width-grow { from { width: 0; } }
        @keyframes height-grow { from { height: 0; } }
        @keyframes dash-draw { to { stroke-dashoffset: 0; } }
      `}</style>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center border-b border-[#222] overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <SafeImage
            src="/GEONYX-HEAVY-INDUSTRY-AND-LOGISTICS-background.webp"
            className="w-full h-full object-cover opacity-60"
            alt="Heavy Industry and Logistics"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-20 text-left">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-end">

                {/* LEFT COLUMN */}
                <div className="lg:w-2/3 text-left">
                    <div className="flex items-center justify-start gap-3 mb-8 page-animate-tag">
                        <div className="h-[2px] w-12 bg-geo-yellow shadow-[0_0_15px_#FFCC00]"></div>
                        <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">{t('hero.eyebrow')}</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 uppercase tracking-tighter drop-shadow-2xl mix-blend-difference page-animate-title">
                        {t('hero.title1')} <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-geo-yellow to-yellow-600">{t('hero.title2')}</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-10 font-light max-w-3xl leading-relaxed border-l-4 border-geo-yellow pl-6 py-2 bg-black/30 backdrop-blur-sm page-animate-desc">
                        {t('hero.description')}
                    </p>

                    <div className="flex flex-col sm:flex-row justify-start gap-4 page-animate-buttons">
                        <Link to={to('/request-inspection')}>
                            <Button
                                variant="primary"
                                className="h-12 px-6 text-sm font-bold bg-geo-yellow text-black border-none hover:bg-white transition-all shadow-[0_0_20px_rgba(255,204,0,0.15)] rounded-none uppercase tracking-wider flex items-center gap-2"
                            >
                                {t('hero.btn1')}
                            </Button>
                        </Link>
                        <Link to={to('/request-inspection')}>
                            <button className="h-12 px-6 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase">
                                {t('hero.btn2')} <ArrowRight className="w-4 h-4" />
                            </button>
                        </Link>
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="lg:w-1/3 w-full page-animate-stats">
                    <div className="bg-black/30 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-sm shadow-2xl">
                        <h3 className="text-white font-black uppercase text-sm mb-6">
                            {t('hero.scope')}
                        </h3>

                        <div className="mb-6">
                            <span className="text-gray-500 font-bold uppercase text-[10px] tracking-widest block mb-3">{t('hero.zonesLabel')}</span>
                            <div className="grid grid-cols-2 gap-x-4 text-gray-300 text-xs font-bold uppercase leading-tight">
                                <div className="flex flex-col gap-3">
                                    {heroZones.slice(0, 5).map(zone => (
                                        <span key={zone} className="border-l-2 border-geo-yellow pl-2">{t(`hero.${zone}`)}</span>
                                    ))}
                                </div>
                                <div className="flex flex-col gap-3">
                                    {heroZones.slice(5).map(zone => (
                                        <span key={zone} className="border-l-2 border-geo-yellow pl-2">{t(`hero.${zone}`)}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="h-px w-full bg-white/10 mb-6"></div>

                        <div className="mb-6">
                            <span className="text-gray-500 font-bold uppercase text-[10px] tracking-widest block mb-3">{t('hero.systemsLabel')}</span>
                            <div className="flex flex-wrap gap-2">
                                {['ARMOR', 'CHEM', 'HYDRO', 'THERM', 'REPAIR'].map((sys, i) => (
                                    <span key={i} className="px-2 py-1 bg-white/10 text-white text-[10px] font-bold uppercase rounded-sm border border-white/5 hover:bg-white/20 transition-colors cursor-default">
                                        {sys}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="h-px w-full bg-white/10 mb-6"></div>

                        <div className="flex flex-col gap-3">
                            <a href="#applications" className="w-fit text-geo-yellow text-xs font-bold uppercase tracking-wider hover:text-white transition-colors flex items-center gap-2">
                                {t('hero.anchorApplications')}
                            </a>
                            <a href="#system-selection" className="w-fit text-geo-yellow text-xs font-bold uppercase tracking-wider hover:text-white transition-colors flex items-center gap-2">
                                {t('hero.anchorSystem')}
                            </a>
                            <a href="#offer-package" className="w-fit text-geo-yellow text-xs font-bold uppercase tracking-wider hover:text-white transition-colors flex items-center gap-2">
                                {t('hero.anchorOffer')}
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </section>

      {/* 2. MANIFESTO */}
      <section className="py-24 px-6 md:px-20 bg-[#111] border-b border-[#222]">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-8 leading-tight">
                {t('manifesto.title1')} <br/>
                <span className="text-geo-yellow">{t('manifesto.title2')}</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
                {t('manifesto.description')}
            </p>
        </div>
      </section>

      {/* 3. ZIG-ZAG SOLUTIONS */}
      <div className="w-full bg-[#0b0c10]">
        {zigzagBlocks.map((block, idx) => (
          <section
            key={block.key}
            className={`flex flex-col ${block.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} w-full min-h-[600px] ${idx === 0 ? 'border-y' : 'border-b'} border-[#222]`}
          >
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage
                    src={block.img}
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                    alt={block.alt}
                />
                <div className={`absolute top-8 ${block.tagRight ? 'right-8' : 'left-8'} bg-black/80 backdrop-blur ${block.tagRight ? 'border-r-4' : 'border-l-4'} border-geo-yellow p-4 ${block.tagRight ? 'text-right' : ''}`}>
                     <block.Icon className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">{t(`zigzag.${block.key}.tag`)}</span>
                </div>
            </div>
            <div className={`w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center ${idx % 2 === 0 ? 'bg-[#141414]' : 'bg-[#0F0F0F]'}`}>
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-geo-yellow"></div>
                    {t(`zigzag.${block.key}.title`)}
                </h3>
                <div className="mb-6">
                    <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">{t('zigzag.problem')}</span>
                    <p className="text-gray-400 text-lg leading-relaxed">{t(`zigzag.${block.key}.problem`)}</p>
                </div>
                <div>
                    <span className="text-geo-yellow font-bold uppercase text-xs tracking-wider block mb-1">{t('zigzag.solution')}</span>
                    <p className="text-white font-medium text-lg leading-relaxed">{t(`zigzag.${block.key}.solution`)}</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-[#222] border border-geo-yellow/30 text-geo-yellow text-xs font-bold uppercase">
                        {t('zigzag.suitableSystems')} {t(`zigzag.${block.key}.systems`)}
                    </div>
                </div>
            </div>
          </section>
        ))}
      </div>

      {/* 4. INVESTMENT AUDIT (ROI Table) */}
      <section className="py-24 px-6 bg-[#0f1014] border-b border-[#222]">
          <div className="container mx-auto">
              <div className="text-center mb-16">
                   <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">{t('roi.eyebrow')}</span>
                    </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase">{t('roi.title')}</h2>
              </div>

              <div className="w-full overflow-x-auto border border-[#333] shadow-2xl bg-[#111]">
                  <table className="w-full min-w-[900px] border-collapse text-left">
                      <thead>
                          <tr className="bg-black">
                              <th className="p-4 text-white font-black uppercase tracking-wider text-xs border-b border-r border-[#333] w-1/4">{t('roi.colParam')}</th>
                              <th className="p-4 bg-[#1a1a1a] text-geo-yellow font-black uppercase tracking-wider text-sm border-b border-r border-[#333] w-1/4 relative border-t-4 border-t-geo-yellow">
                                  GEONYX
                              </th>
                              <th className="p-4 text-gray-500 font-bold uppercase tracking-wider text-xs border-b border-r border-[#333] w-1/4">{t('roi.colStd')}</th>
                              <th className="p-4 text-gray-500 font-bold uppercase tracking-wider text-xs border-b border-[#333] w-1/4">{t('roi.colEpoxy')}</th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-[#333] text-sm">
                          {[1,2,3,4,5].map(n => (
                            <tr key={n}>
                              <td className="p-4 text-gray-300 font-bold border-r border-[#333]">{t(`roi.row${n}`)}</td>
                              <td className="p-4 bg-[#161616] text-white font-bold border-r border-[#333]">
                                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-geo-yellow" /> {t(`roi.val${n}geonyx`)}</div>
                              </td>
                              <td className="p-4 text-gray-500 border-r border-[#333]">{t(`roi.val${n}std`)}</td>
                              <td className="p-4 text-gray-500">{t(`roi.val${n}epoxy`)}</td>
                            </tr>
                          ))}
                      </tbody>
                  </table>
              </div>
          </div>
      </section>

      {/* 5. APPLICATIONS GRID */}
      <section id="applications" className="relative py-20 border-b border-[#222]">
          <div className="absolute inset-0 z-0">
             <SafeImage
               src="/GEONYX-Calculator.webp"
               className="w-full h-full object-cover opacity-70"
               onError={(e) => { e.currentTarget.src = "/GEONYX-Calculator.webp" }}
               alt="Heavy Applications"
             />
             <div className="absolute inset-0 bg-[#0f0f0f]/60"></div>
          </div>

          <div className="container relative z-10 mx-auto px-6 md:px-10">
              <div className="text-center mb-16">
                  <div className="flex items-center justify-center gap-3 mb-4">
                      <div className="h-[2px] w-8 bg-geo-yellow"></div>
                      <h3 className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">{t('applications.eyebrow')}</h3>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase">{t('applications.title')}</h2>
                  <p className="text-gray-300 mt-4 max-w-2xl mx-auto font-bold">{t('applications.subtitle')}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {applicationCards.map(({ key, Icon }) => (
                      <div key={key} className="bg-[#141414] border border-[#222] p-6 hover:border-geo-yellow transition-all group">
                          <Icon className="w-8 h-8 text-gray-600 group-hover:text-geo-yellow mb-4 transition-colors" />
                          <h4 className="text-white font-bold uppercase text-sm mb-2">{t(`applications.${key}title`)}</h4>
                          <p className="text-gray-500 text-xs">{t(`applications.${key}desc`)}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 6. SYSTEM SELECTION */}
      <section id="system-selection" className="py-20 bg-[#111] border-b border-[#222]">
          <div className="container mx-auto px-6 md:px-10">
              <div className="text-center mb-16">
                  <div className="flex items-center justify-center gap-3 mb-4">
                      <div className="h-[2px] w-8 bg-geo-yellow"></div>
                      <h3 className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">{t('systems.eyebrow')}</h3>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase">{t('systems.title')}</h2>
                  <p className="text-gray-500 mt-4 max-w-2xl mx-auto">{t('systems.subtitle')}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {systemKeys.map(key => (
                      <div key={key} className="bg-[#1a1a1a] p-8 border border-[#222] border-t-4 border-t-geo-yellow hover:bg-[#222] transition-colors h-full group">
                          <h4 className="text-white font-black uppercase text-lg mb-3 group-hover:text-geo-yellow transition-colors">{t(`systems.${key}name`)}</h4>
                          <p className="text-gray-400 text-sm leading-relaxed">{t(`systems.${key}desc`)}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 7. PROJECT WORKFLOW */}
      <section className="py-20 bg-[#141414] border-b border-[#222]">
          <div className="container mx-auto px-6 md:px-10">
              <div className="text-center mb-16">
                  <div className="flex items-center justify-center gap-3 mb-4">
                      <div className="h-[2px] w-8 bg-geo-yellow"></div>
                      <h3 className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">{t('workflow.eyebrow')}</h3>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase">{t('workflow.title')}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {workflowSteps.map(key => (
                      <div key={key} className="bg-[#0f0f0f] border border-[#222] p-8 relative overflow-hidden group">
                          <span className="text-6xl font-black text-[#1a1a1a] absolute top-4 right-4 z-0 group-hover:text-geo-yellow/40 transition-colors">{t(`workflow.${key}step`)}</span>
                          <div className="relative z-10">
                              <h4 className="text-white font-bold uppercase text-lg mb-2">{t(`workflow.${key}title`)}</h4>
                              <p className="text-gray-500 text-sm">{t(`workflow.${key}desc`)}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 8. OFFER PACKAGE */}
      <section id="offer-package" className="relative py-24 border-b border-[#222]">
          <div className="absolute inset-0 z-0">
             <SafeImage
               src="/GEONYX-B2B-B2G.webp"
               className="w-full h-full object-cover opacity-60"
               onError={(e) => { e.currentTarget.src = "/GEONYX-B2B-B2G.webp" }}
               alt="Offer Documentation"
             />
             <div className="absolute inset-0 bg-[#0a0a0a]/75"></div>
          </div>

          <div className="container relative z-10 mx-auto px-6 md:px-10">
              <div className="flex flex-col lg:flex-row gap-16 items-start">

                  {/* Left Info */}
                  <div className="lg:w-1/3 sticky top-24">
                      <div className="flex items-center gap-3 mb-6">
                           <div className="h-[2px] w-8 bg-geo-yellow"></div>
                           <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">{t('offer.eyebrow')}</span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 leading-tight">
                          {t('offer.title')} <br/> {t('offer.subtitle')}
                      </h2>
                      <p className="text-gray-400 text-sm leading-relaxed mb-8 font-bold">
                          {t('offer.description')}
                      </p>
                      <div className="p-6 bg-[#141414] border border-[#333] border-l-4 border-l-geo-yellow">
                          <p className="text-white font-bold text-sm uppercase mb-2">{t('offer.qualityLabel')}</p>
                          <p className="text-gray-500 text-xs">{t('offer.qualityDesc')}</p>
                      </div>
                  </div>

                  {/* Right Grid */}
                  <div className="lg:w-2/3 w-full">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {offerDocKeys.map(key => (
                              <div key={key} className="flex items-start gap-4 p-6 bg-[#111] border border-[#222] hover:border-geo-yellow/40 transition-colors group">
                                  <CheckCircle className="w-5 h-5 text-gray-500 group-hover:text-geo-yellow flex-shrink-0 transition-colors mt-0.5" />
                                  <span className="text-gray-300 text-sm font-bold uppercase leading-snug group-hover:text-white transition-colors">{t(`offer.${key}`)}</span>
                              </div>
                          ))}
                      </div>

                      <div className="mt-8 flex justify-end">
                           <Button
                            onClick={handleCopyTender}
                            className={`flex items-center gap-2 px-6 py-3 font-bold uppercase text-sm transition-all ${copySuccess ? 'bg-green-600 text-white border-green-600' : 'bg-[#222] text-gray-300 hover:bg-geo-yellow hover:text-black border-transparent'}`}
                          >
                              {copySuccess ? <CheckCircle className="w-4 h-4"/> : <Copy className="w-4 h-4"/>}
                              {copySuccess ? t('offer.copiedBtn') : t('offer.copyBtn')}
                          </Button>
                      </div>
                  </div>

              </div>
          </div>
      </section>

      {/* 9. DOCUMENTATION */}
      <section id="specs" className="py-20 bg-black border-b border-[#222]">
          <div className="container mx-auto px-6 md:px-10">
              <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-12 border-l-4 border-geo-yellow pl-4">{t('docs.title')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {docKeys.map(key => (
                      <button key={key} className="w-full flex items-center justify-between p-6 bg-[#111] border border-[#333] hover:border-geo-yellow group transition-all">
                          <div className="flex items-center gap-4">
                              <FileText className="text-gray-400 group-hover:text-geo-yellow w-8 h-8" />
                              <div className="text-left">
                                  <span className="text-white font-bold block uppercase text-sm">{t(`docs.${key}title`)}</span>
                                  <span className="text-gray-500 text-xs">{t(`docs.${key}sub`)}</span>
                              </div>
                          </div>
                          <Download className="text-gray-500 group-hover:text-white" />
                      </button>
                  ))}
              </div>
          </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section className="py-24 px-6 bg-[#0a0a0a] border-b border-[#222]">
          <div className="container mx-auto max-w-4xl">
              <div className="text-center mb-12">
                  <h2 className="text-3xl font-black text-white uppercase">{t('faq.title')}</h2>
              </div>

              <div className="space-y-4">
                  {[1,2,3].map(n => (
                      <div key={n} className="bg-[#111] p-6 border-l-4 border-gray-700 hover:border-geo-yellow transition-colors shadow-xl group">
                          <div className="flex gap-4">
                              <HelpCircle className="text-gray-500 group-hover:text-geo-yellow flex-shrink-0 transition-colors" />
                              <div>
                                  <h4 className="text-white font-bold uppercase mb-2 group-hover:text-geo-yellow transition-colors">{t(`faq.q${n}title`)}</h4>
                                  <p className="text-gray-400 text-sm">{t(`faq.q${n}answer`)}</p>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 11. SYSTEM BRIDGE CTA */}
      <section className="bg-geo-yellow py-16 border-t border-black">
          <div className="container mx-auto px-6 flex flex-col items-center text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-black uppercase mb-6 tracking-tight max-w-4xl">
                  {t('cta.title')}
              </h2>
              <p className="text-black/80 text-lg font-medium mb-8 max-w-3xl mx-auto leading-relaxed">
                  {t('cta.description')}
              </p>
              <Link to={to('/systems')}>
                  <Button variant="primary" className="!bg-black !text-white hover:!bg-[#222] border-none text-lg px-12 py-5 shadow-2xl uppercase font-black flex items-center gap-2">
                      {t('cta.btn')} <ArrowRight className="w-5 h-5" />
                  </Button>
              </Link>
          </div>
      </section>

      <Footer />
    </div>
  );
};

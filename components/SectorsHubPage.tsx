
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Button } from './Button';
import {
  ArrowRight, Factory, Zap, Droplets, Hammer,
  ShieldCheck, PenTool, Database, Activity,
  MousePointer2, ChevronRight, Hash, ArrowUpRight,
  Sprout, Truck, Building2
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useLang } from '../hooks/useLang';

const SECTORS = [
  {
    id: "01",
    sKey: "s01",
    tech_tags: ["ЯКОСТ > 110 MPa", "AR 0.5 ИЗНОСВАНЕ"],
    system: "GEONYX ARMOR",
    link: "/heavy-industry",
    icon: Factory,
    image: "/GEONYX-heavy-hero.jpeg"
  },
  {
    id: "02",
    sKey: "s02",
    tech_tags: ["HACCP / GMP", "VOC FREE"],
    system: "GEONYX PURE",
    link: "/food-industry",
    icon: ShieldCheck,
    image: "/GEONYX-clean-room.jpeg"
  },
  {
    id: "03",
    sKey: "s03",
    tech_tags: ["pH 1-14", "WHG §19", "АМОНЯК"],
    system: "GEONYX CHEM",
    link: "/agriculture",
    icon: Sprout,
    image: "/GEONYX-agro-hero.jpeg"
  },
  {
    id: "04",
    sKey: "s04",
    tech_tags: ["W20 ВОДОПЛЪТНОСТ", "ПОДВОДНО"],
    system: "GEONYX HYDRO",
    link: "/water-marine",
    icon: Droplets,
    image: "/GEONYX-marine-dam.jpeg"
  },
  {
    id: "05",
    sKey: "s05",
    tech_tags: ["КЛАС A1 (ОГЪН)", "ATEX / ESD"],
    system: "GEONYX THERM",
    link: "/energy-defense",
    icon: Zap,
    image: "/GEONYX-energy-plant.jpeg"
  },
  {
    id: "06",
    sKey: "s06",
    tech_tags: ["OS 8 / OS 11", "R13 ANTI-SLIP"],
    system: "GEONYX HYDRO",
    link: "/infrastructure",
    icon: Truck,
    image: "/GEONYX-parking-hero.jpeg"
  },
  {
    id: "07",
    sKey: "s07",
    tech_tags: ["UHPC", "3D ФОРМИ", "UV СТАБИЛНОСТ"],
    system: "GEONYX ARCH",
    link: "/construction",
    icon: Building2,
    image: "/GEONYX-urban-park.jpeg"
  }
];

export const SectorsHubPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('sectorshub');
  const { to } = useLang();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] font-sans text-gray-200 overflow-x-hidden selection:bg-geo-yellow selection:text-black">
      <Navbar />

      {/* 1. COMPACT HERO DASHBOARD */}
      <section className="relative pt-32 pb-16 bg-[#080808] border-b border-[#222]">
        <div className="container mx-auto px-6 md:px-10">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <Activity className="w-5 h-5 text-geo-yellow animate-pulse" />
                        <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                            {t('hero.eyebrow')}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-none mb-2">
                        {t('hero.title')}
                    </h1>
                    <p className="text-gray-400 font-mono text-sm uppercase tracking-wider">
                        {t('hero.subtitle')}
                    </p>
                </div>

                {/* Stats / Legend */}
                <div className="hidden md:flex gap-8">
                    <div className="text-right">
                        <div className="text-2xl font-black text-white">07</div>
                        <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{t('hero.stat1label')}</div>
                    </div>
                    <div className="text-right">
                        <div className="text-2xl font-black text-white">ISO</div>
                        <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{t('hero.stat2label')}</div>
                    </div>
                    <div className="text-right">
                        <div className="text-2xl font-black text-white">50+</div>
                        <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{t('hero.stat3label')}</div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 2. THE VISUAL GRID (WINDOWS STYLE) */}
      <section className="w-full bg-[#050505] border-t border-[#333]">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
              {SECTORS.map((sector, index) => (
                  <div
                    key={sector.id}
                    onClick={() => navigate(to(sector.link))}
                    className="group relative h-[450px] w-full overflow-hidden border-r border-b border-[#222] cursor-pointer"
                  >
                      {/* 1. BACKGROUND IMAGE LAYER */}
                      <div className="absolute inset-0 z-0">
                          <img
                            src={sector.image}
                            alt={t(`sectors.${sector.sKey}title`)}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 grayscale-[0.3] group-hover:grayscale-0"
                            onError={(e) => { e.currentTarget.src = "/GEONYX-background.jpeg" }}
                          />
                      </div>

                      {/* 2. GRADIENT OVERLAY (Bottom Up) */}
                      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>

                      {/* 3. NUMBERING (Top Right) */}
                      <div className="absolute top-8 right-8 z-20">
                          <span className="text-5xl font-black text-white/10 group-hover:text-geo-yellow/20 transition-colors select-none">
                              {sector.id}
                          </span>
                      </div>

                      {/* 4. CONTENT (Bottom Left) */}
                      <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end z-20">
                          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">

                              {/* Integrated Technical Category Label */}
                              <div className="flex items-center gap-3 mb-4">
                                  <div className="h-[2px] w-6 bg-geo-yellow"></div>
                                  <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                                      {t(`sectors.${sector.sKey}subtitle`)}
                                  </span>
                              </div>

                              <h3 className="text-2xl md:text-3xl font-black mb-3 uppercase leading-[0.95] tracking-tight drop-shadow-lg text-white group-hover:text-geo-yellow transition-colors">
                                  {t(`sectors.${sector.sKey}title`)}
                              </h3>

                              <p className="text-gray-300 text-sm leading-relaxed max-w-sm mb-6 opacity-90 group-hover:text-white transition-colors">
                                  {t(`sectors.${sector.sKey}desc`)}
                              </p>

                              {/* Tech Tags / Badge */}
                              <div className="flex flex-wrap items-center justify-between border-t border-white/20 pt-6">
                                  <div className="flex flex-wrap gap-2">
                                      {sector.tech_tags.map((tag, i) => (
                                          <span key={i} className="inline-block px-2 py-1 border border-white/20 bg-white/5 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-gray-300">
                                              {tag}
                                          </span>
                                      ))}
                                  </div>

                                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0 transform">
                                      <ArrowUpRight size={24} />
                                  </div>
                              </div>

                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </section>

      {/* 3. TECHNICAL SUPPORT CTA */}
      <section className="bg-[#111] border-t border-[#222] py-20">
          <div className="container mx-auto px-6 md:px-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-10 bg-[#161616] p-10 md:p-16 border border-[#222] relative overflow-hidden">

                  {/* Decorative Background */}
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>

                  <div className="relative z-10 max-w-2xl text-center lg:text-left">
                      <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                          <Database className="w-5 h-5 text-geo-yellow" />
                          <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">{t('cta.eyebrow')}</span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-4 leading-tight">
                          {t('cta.title')}
                      </h2>
                      <p className="text-gray-400 text-lg">
                          {t('cta.body')}
                      </p>
                  </div>

                  <div className="relative z-10">
                       <Button
                          variant="primary"
                          onClick={() => navigate(to('/request-inspection'))}
                          className="bg-geo-yellow text-black hover:bg-white border-none text-lg px-10 py-5 font-black uppercase tracking-wider shadow-xl flex items-center gap-3"
                        >
                            <Hash className="w-5 h-5" /> {t('cta.btn')}
                        </Button>
                  </div>
              </div>
          </div>
      </section>

      <Footer />
    </div>
  );
};

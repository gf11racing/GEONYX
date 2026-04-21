
import React, { useState, useRef, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Button } from './Button';
import {
  ArrowRight, CheckCircle, Clock, Hammer, ShieldCheck, Zap,
  Factory, Utensils, Truck, MousePointer2, Sprout, FileText,
  AlertTriangle, Skull, Droplets, Activity, Download
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'framer-motion';
import { SafeImage } from './SafeImage';
import { useTranslation } from 'react-i18next';
import { useLang } from '../hooks/useLang';

// --- ANIMATED COUNTER COMPONENT ---
const Counter = ({ to, suffix = "", duration = 2.5 }: { to: number, suffix?: string, duration?: number }) => {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const isInView = useInView(nodeRef, { once: true, margin: "-10%" });

    useEffect(() => {
        const node = nodeRef.current;
        if (!node || !isInView) return;

        let start: number | null = null;

        const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / (duration * 1000), 1);
            // Ease out quart
            const easeProgress = 1 - Math.pow(1 - progress, 4);

            const current = Math.floor(easeProgress * to);
            node.textContent = current.toLocaleString('en-US');

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                node.textContent = to.toLocaleString('en-US');
            }
        };

        requestAnimationFrame(step);
    }, [isInView, to, duration]);

    return (
        <span className="inline-flex items-baseline">
            <span ref={nodeRef}>0</span>
            {suffix}
        </span>
    );
};

// --- KEY METRICS SECTION ---
const KeyMetricsSection = () => {
    const { t } = useTranslation('pilotprojects');
    return (
        <section className="bg-[#111] border-y border-[#222] py-16 md:py-24 relative z-20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#222] gap-y-12 md:gap-y-0">

                    {/* Metric 1 */}
                    <div className="flex flex-col items-center justify-center text-center px-4">
                        <div className="text-4xl md:text-5xl lg:text-6xl font-black text-geo-yellow mb-4 tracking-tight">
                             <Counter to={500000} suffix=" m²+" />
                        </div>
                        <span className="text-gray-400 font-bold uppercase tracking-[0.25em] text-xs md:text-sm">{t('metrics.m1label')}</span>
                    </div>

                    {/* Metric 2 */}
                    <div className="flex flex-col items-center justify-center text-center px-4">
                         <div className="text-4xl md:text-5xl lg:text-6xl font-black text-geo-yellow mb-4 tracking-tight">
                             <Counter to={100} suffix="%" />
                        </div>
                        <span className="text-gray-400 font-bold uppercase tracking-[0.25em] text-xs md:text-sm">{t('metrics.m2label')}</span>
                    </div>

                    {/* Metric 3 */}
                    <div className="flex flex-col items-center justify-center text-center px-4">
                         <div className="text-4xl md:text-5xl lg:text-6xl font-black text-geo-yellow mb-4 tracking-tight">
                             0
                        </div>
                        <span className="text-gray-400 font-bold uppercase tracking-[0.25em] text-xs md:text-sm">{t('metrics.m3label')}</span>
                    </div>

                </div>
            </div>
        </section>
    );
};

// --- BEFORE/AFTER SLIDER COMPONENT ---
const BeforeAfterSlider = () => {
  const { t } = useTranslation('pilotprojects');
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
      setSliderPosition(percent);
    }
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <section className="relative w-full pt-20 pb-0 bg-[#000] overflow-hidden border-t border-[#333]">
      <div className="container mx-auto px-6 mb-8 text-center relative z-10">
         <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">{t('slider.eyebrow')}</span>
         <h2 className="text-3xl md:text-4xl font-black text-white uppercase mt-2">{t('slider.title')}</h2>
         <p className="text-gray-500 mt-4 text-sm flex items-center justify-center gap-2 uppercase tracking-wider">
            <MousePointer2 className="w-4 h-4 text-geo-yellow animate-bounce" /> {t('slider.instruction')}
         </p>
      </div>

      <div
        className="relative w-full max-w-[1600px] mx-auto h-[50vh] md:h-[70vh] cursor-col-resize select-none overflow-hidden border-y-4 border-geo-yellow"
        ref={containerRef}
        onMouseMove={onMouseMove}
        onTouchMove={onTouchMove}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onClick={(e) => handleMove(e.clientX)}
      >
        {/* AFTER IMAGE (Background / Right Side) */}
        <div className="absolute inset-0 select-none">
           <SafeImage
            src="/GEONYX-References-4.webp"
            fallbackSrc="https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=2070&auto=format&fit=crop"
            alt="After GEONYX"
            className="w-full h-full object-cover"
            draggable={false}
           />
           <div className="absolute top-10 right-10 bg-geo-yellow text-black font-black px-4 py-2 uppercase tracking-widest text-lg shadow-xl z-20">
              {t('slider.labelAfter')}
           </div>
        </div>

        {/* BEFORE IMAGE (Clipped / Left Side) */}
        <div
            className="absolute inset-0 overflow-hidden select-none border-r-4 border-geo-yellow bg-black"
            style={{ width: `${sliderPosition}%` }}
        >
            <SafeImage
              src="/GEONYX-References-3.webp"
              fallbackSrc="https://images.unsplash.com/photo-1518112390430-f4ab02e9c2c8?q=80&w=2070&auto=format&fit=crop"
              alt="Before Damage"
              className="absolute top-0 left-0 h-full w-full max-w-none object-cover"
              style={{ width: containerRef.current ? containerRef.current.clientWidth : '100vw' }}
              draggable={false}
            />
             <div className="absolute top-10 left-10 bg-black/80 text-white border border-white/20 font-black px-4 py-2 uppercase tracking-widest text-lg shadow-xl z-20">
              {t('slider.labelBefore')}
           </div>
        </div>

        {/* SLIDER HANDLE */}
        <div
            className="absolute top-0 bottom-0 w-1 bg-transparent z-30 flex items-center justify-center -ml-[20px]"
            style={{ left: `${sliderPosition}%` }}
        >
            <div className="w-10 h-10 bg-geo-yellow rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,204,0,0.5)] border-4 border-black relative cursor-ew-resize">
                 <div className="flex gap-1">
                     <div className="w-0.5 h-3 bg-black"></div>
                     <div className="w-0.5 h-3 bg-black"></div>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
};

const TRUSTED_CLIENTS = [
  { name: "AURUBIS" },
  { name: "LUKOIL" },
  { name: "KAUFLAND" },
  { name: "SOPHARMA" },
  { name: "NESTLE" },
  { name: "COCA-COLA" },
];

export const PilotProjectsPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('pilotprojects');
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

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center border-b border-[#222] overflow-hidden bg-black">
        {/* Background Visual - Clean Image Lock */}
        <div className="absolute inset-0 z-0 bg-black">
          <SafeImage
            src="/GEONYX-REF-HERO.webp"
            fallbackSrc="https://images.unsplash.com/photo-1590725140246-20ac705d5b97?q=80&w=2069&auto=format&fit=crop"
            alt="Massive Industrial Facility"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/50 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-left pt-20">
            <div className="flex items-center justify-start gap-3 mb-8 page-animate-tag">
                <div className="h-[2px] w-12 bg-geo-yellow shadow-[0_0_15px_#FFCC00]"></div>
                <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">{t('hero.eyebrow')}</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8 uppercase tracking-tighter drop-shadow-2xl max-w-5xl page-animate-title">
              {t('hero.titleLine1')} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-geo-yellow to-yellow-600">
                {t('hero.titleLine2')}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light max-w-3xl leading-relaxed border-l-4 border-geo-yellow pl-6 py-2 bg-black/30 backdrop-blur-sm page-animate-desc">
               {t('hero.description')}
            </p>

            <div className="flex justify-start page-animate-buttons">
                 <a href="#cases">
                    <button className="h-12 px-8 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase group">
                        {t('hero.btnReports')}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                 </a>
            </div>
        </div>
      </section>

      {/* 2. VISUAL EVIDENCE (SLIDER) */}
      <BeforeAfterSlider />

      {/* 3. KEY METRICS DIVIDER */}
      <KeyMetricsSection />

      {/* 4. CASE STUDIES GRID (ZIG ZAG) */}
      <div id="cases" className="w-full bg-[#0F0F0F]">

          {/* CASE 001: AGRO */}
          <section className="flex flex-col lg:flex-row w-full min-h-[700px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage
                    src="/GEONYX-References.webp"
                    fallbackSrc="https://images.unsplash.com/photo-1546445317-29f4545e9d53?q=80&w=2000&auto=format&fit=crop"
                    alt="Agro Facility"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <Sprout className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">{t('cases.case1.sector')}</span>
                </div>
            </div>

            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                             {t('cases.case1.eyebrow')}
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        {t('cases.case1.title')}
                    </h2>
                </div>

                <div className="space-y-8">
                    <div className="border-l-2 border-red-500 pl-4">
                        <h4 className="text-red-500 font-bold uppercase text-xs tracking-wider mb-2">{t('cases.problemLabel')}</h4>
                        <p className="text-gray-400 text-sm italic">{t('cases.case1.problem')}</p>
                    </div>

                    <div className="border-l-2 border-geo-yellow pl-4">
                        <h4 className="text-geo-yellow font-bold uppercase text-xs tracking-wider mb-2">{t('cases.case1.solutionLabel')}</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-geo-yellow mt-0.5 flex-shrink-0"/> <span><strong className="text-white">{t('cases.case1.s1title')}</strong> {t('cases.case1.s1desc')}</span></li>
                            <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-geo-yellow mt-0.5 flex-shrink-0"/> <span><strong className="text-white">{t('cases.case1.s2title')}</strong> {t('cases.case1.s2desc')}</span></li>
                            <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-geo-yellow mt-0.5 flex-shrink-0"/> <span><strong className="text-white">{t('cases.case1.s3title')}</strong> {t('cases.case1.s3desc')}</span></li>
                        </ul>
                    </div>

                    <div className="pt-4 border-t border-[#222]">
                        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">{t('cases.resultLabel')}</p>
                        <p className="text-white font-medium text-sm">{t('cases.case1.result')}</p>
                    </div>
                </div>
            </div>
          </section>

          {/* CASE 002: HEAVY INDUSTRY */}
          <section className="flex flex-col lg:flex-row-reverse w-full min-h-[700px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage
                    src="/GEONYX-References-1.webp"
                    fallbackSrc="https://images.unsplash.com/photo-1594535182308-8ff240fde7a3?q=80&w=2070&auto=format&fit=crop"
                    alt="Heavy Machinery"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><Hammer className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">{t('cases.case2.sector')}</span>
                </div>
            </div>

            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <div className="mb-8">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                             {t('cases.case2.eyebrow')}
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        {t('cases.case2.title')}
                    </h2>
                </div>

                <div className="space-y-8">
                    <div className="border-l-2 border-red-500 pl-4">
                        <h4 className="text-red-500 font-bold uppercase text-xs tracking-wider mb-2">{t('cases.problemLabel')}</h4>
                        <p className="text-gray-400 text-sm italic">{t('cases.case2.problem')}</p>
                    </div>

                    <div className="border-l-2 border-geo-yellow pl-4">
                        <h4 className="text-geo-yellow font-bold uppercase text-xs tracking-wider mb-2">{t('cases.case2.solutionLabel')}</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-geo-yellow mt-0.5 flex-shrink-0"/> <span><strong className="text-white">{t('cases.case2.s1title')}</strong> {t('cases.case2.s1desc')}</span></li>
                            <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-geo-yellow mt-0.5 flex-shrink-0"/> <span><strong className="text-white">{t('cases.case2.s2title')}</strong> {t('cases.case2.s2desc')}</span></li>
                            <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-geo-yellow mt-0.5 flex-shrink-0"/> <span><strong className="text-white">{t('cases.case2.s3title')}</strong> {t('cases.case2.s3desc')}</span></li>
                        </ul>
                    </div>

                    <div className="pt-4 border-t border-[#222]">
                        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">{t('cases.resultLabel')}</p>
                        <p className="text-white font-medium text-sm">{t('cases.case2.result')}</p>
                    </div>
                </div>
            </div>
          </section>

          {/* CASE 003: CHEMICAL */}
          <section className="flex flex-col lg:flex-row w-full min-h-[700px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage
                    src="/GEONYX-References-2.webp"
                    fallbackSrc="https://images.unsplash.com/photo-1622629683930-4e339662b2d6?q=80&w=2070&auto=format&fit=crop"
                    alt="Chemical Plant"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <Skull className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">{t('cases.case3.sector')}</span>
                </div>
            </div>

            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <div className="mb-8">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                             {t('cases.case3.eyebrow')}
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        {t('cases.case3.title')}
                    </h2>
                </div>

                <div className="space-y-8">
                    <div className="border-l-2 border-red-500 pl-4">
                        <h4 className="text-red-500 font-bold uppercase text-xs tracking-wider mb-2">{t('cases.problemLabel')}</h4>
                        <p className="text-gray-400 text-sm italic">{t('cases.case3.problem')}</p>
                    </div>

                    <div className="border-l-2 border-geo-yellow pl-4">
                        <h4 className="text-geo-yellow font-bold uppercase text-xs tracking-wider mb-2">{t('cases.case3.solutionLabel')}</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-geo-yellow mt-0.5 flex-shrink-0"/> <span><strong className="text-white">{t('cases.case3.s1title')}</strong> {t('cases.case3.s1desc')}</span></li>
                            <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-geo-yellow mt-0.5 flex-shrink-0"/> <span><strong className="text-white">{t('cases.case3.s2title')}</strong> {t('cases.case3.s2desc')}</span></li>
                            <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-geo-yellow mt-0.5 flex-shrink-0"/> <span><strong className="text-white">{t('cases.case3.s3title')}</strong> {t('cases.case3.s3desc')}</span></li>
                        </ul>
                    </div>

                    <div className="pt-4 border-t border-[#222]">
                        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">{t('cases.resultLabel')}</p>
                        <p className="text-white font-medium text-sm">{t('cases.case3.result')}</p>
                    </div>
                </div>
            </div>
          </section>

          {/* CASE 004: LOGISTICS */}
          <section className="flex flex-col lg:flex-row-reverse w-full min-h-[700px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage
                    src="/GEONYX-References-5.webp"
                    fallbackSrc="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop"
                    alt="Logistics Hub"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><Truck className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">{t('cases.case4.sector')}</span>
                </div>
            </div>

            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <div className="mb-8">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                             {t('cases.case4.eyebrow')}
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        {t('cases.case4.title')}
                    </h2>
                </div>

                <div className="space-y-8">
                    <div className="border-l-2 border-red-500 pl-4">
                        <h4 className="text-red-500 font-bold uppercase text-xs tracking-wider mb-2">{t('cases.problemLabel')}</h4>
                        <p className="text-gray-400 text-sm italic">{t('cases.case4.problem')}</p>
                    </div>

                    <div className="border-l-2 border-geo-yellow pl-4">
                        <h4 className="text-geo-yellow font-bold uppercase text-xs tracking-wider mb-2">{t('cases.case4.solutionLabel')}</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-geo-yellow mt-0.5 flex-shrink-0"/> <span><strong className="text-white">{t('cases.case4.s1title')}</strong> {t('cases.case4.s1desc')}</span></li>
                            <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-geo-yellow mt-0.5 flex-shrink-0"/> <span><strong className="text-white">{t('cases.case4.s2title')}</strong> {t('cases.case4.s2desc')}</span></li>
                            <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-geo-yellow mt-0.5 flex-shrink-0"/> <span><strong className="text-white">{t('cases.case4.s3title')}</strong> {t('cases.case4.s3desc')}</span></li>
                        </ul>
                    </div>

                    <div className="pt-4 border-t border-[#222]">
                        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">{t('cases.resultLabel')}</p>
                        <p className="text-white font-medium text-sm">{t('cases.case4.result')}</p>
                    </div>
                </div>
            </div>
          </section>

      </div>

      {/* 4. TRUSTED CLIENTS */}
      <section className="pt-8 pb-12 bg-[#0a0a0a] border-b border-[#222]">
          <div className="container mx-auto px-6 md:px-10">
              <div className="text-center mb-12">
                  <p className="text-gray-500 font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                      {t('clients.label')}
                  </p>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
                   {TRUSTED_CLIENTS.map((client, index) => (
                       <div key={index} className="group cursor-default hover:opacity-100 transition-opacity duration-300 opacity-60">
                           <img
                              src={`https://placehold.co/200x60/0a0a0a/666666?text=${client.name}`}
                              alt={client.name}
                              className="h-10 md:h-14 w-auto object-contain brightness-100 grayscale hover:grayscale-0 transition-all duration-500"
                           />
                       </div>
                   ))}
              </div>
          </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="bg-geo-yellow py-24 text-center">
          <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-black text-black uppercase mb-6 tracking-tight max-w-4xl mx-auto">
                  {t('cta.title')}
              </h2>
              <p className="text-black/80 text-xl font-medium mb-10 max-w-3xl mx-auto leading-relaxed">
                  {t('cta.subtitle')}
              </p>
              <button
                onClick={() => navigate(to('/request-inspection'))}
                className="h-12 px-8 flex items-center justify-center gap-2 border border-black/30 text-black text-sm font-bold tracking-wide transition-all bg-black text-white hover:bg-[#222] border-none uppercase group mx-auto shadow-2xl"
              >
                  {t('cta.btn')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
          </div>
      </section>

      <Footer />
    </div>
  );
};

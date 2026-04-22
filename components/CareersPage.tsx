
import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Users, Briefcase, Warehouse, Beaker, CheckCircle, Upload, ArrowRight, ChevronRight, HardHat, Microscope } from 'lucide-react';
import { SafeImage } from './SafeImage';
import { useTranslation } from 'react-i18next';
import { usePageMeta } from '../hooks/usePageMeta';

// Data arrays — only id and icon keys; all text comes from i18n
const POSITIONS = [
  { id: 'sales' },
  { id: 'production' },
  { id: 'rnd' },
];

export const CareersPage: React.FC = () => {
  usePageMeta('careers');
  const { t } = useTranslation('careers');
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = t('meta.title');
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', t('meta.description'));
    }
  }, [t]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    console.log('Starting application submission...');

    const form = e.target as HTMLFormElement;
    setFormState('submitting');

    try {
      const nameEl = form.elements.namedItem('name') as HTMLInputElement;
      const phoneEl = form.elements.namedItem('phone') as HTMLInputElement;
      const emailEl = form.elements.namedItem('email') as HTMLInputElement;
      const positionEl = form.elements.namedItem('position') as HTMLSelectElement;
      const experienceEl = form.elements.namedItem('experience') as HTMLTextAreaElement;

      const templateParams = {
        name: nameEl.value,
        phone: phoneEl.value,
        email: emailEl.value,
        position: positionEl.value,
        message: `Experience: ${experienceEl.value}\n\n(Candidate will send CV separately to office@geonyxgroup.com)`
      };

      try {
        const result = await emailjs.send(
          'service_6oe57mj',
          'template_1smmu4e',
          templateParams,
          'fUu0EmANDHWfYyCK9'
        );
        console.log('EmailJS Response:', result);
        setFormState('success');
        const formElement = document.getElementById('apply');
        formElement?.scrollIntoView({ behavior: 'smooth' });
      } catch (err: any) {
        console.error('EmailJS Error:', err);
        let errorMsg = t('form.errorGeneral');

        if (err?.text?.includes('Variables size limit')) {
          errorMsg = t('form.errorFileSize');
        } else if (err?.text?.includes('limit reached')) {
          errorMsg = t('form.errorLimit');
        }

        setError(errorMsg);
        setFormState('idle');
      }
    } catch (err) {
      console.error('Runtime Error:', err);
      setError(t('form.errorUnexpected'));
      setFormState('idle');
    }
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] font-sans text-gray-200 selection:bg-geo-yellow selection:text-black">
      <Navbar />

      {/* STATIC STYLES TO PREVENT FLICKERING */}
      <style>{`
        @keyframes width-grow { from { width: 0; } }
        @keyframes height-grow { from { height: 0; } }
        @keyframes dash-draw { to { stroke-dashoffset: 0; } }
      `}</style>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center border-b border-[#222] overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <SafeImage
            src="/GEONYX-background-careers.webp"
            fallbackSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            alt="GEONYX Elite Team"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/60 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-left pt-20">
            <div className="flex items-center justify-start gap-3 mb-8 page-animate-tag">
                <div className="h-[2px] w-12 bg-geo-yellow shadow-[0_0_15px_#FFCC00]"></div>
                <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">{t('hero.eyebrow')}</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 uppercase tracking-tighter drop-shadow-2xl max-w-5xl page-animate-title">
              {t('hero.titleLine1')} <br/>
              {t('hero.titleLine2')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-geo-yellow to-yellow-600">{t('hero.titleHighlight')}</span>.
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light max-w-4xl leading-relaxed border-l-4 border-geo-yellow pl-6 py-2 bg-black/30 backdrop-blur-sm page-animate-desc">
              {t('hero.description1')}
              <br/><br className="hidden md:block"/>
              {t('hero.description2')} <span className="text-white font-bold">{t('hero.academyName')}</span>{t('hero.description3')}
            </p>

            <div className="flex justify-start page-animate-buttons">
                <a href="#positions">
                    <button className="h-12 px-8 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase group">
                        {t('hero.btnPositions')}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </a>
            </div>
        </div>
      </section>

      {/* 2. OPEN POSITIONS - ZIG ZAG LAYOUT */}
      <div id="positions" className="w-full bg-[#111]">

        {/* ROW 1: SALES */}
        <section className="flex flex-col lg:flex-row w-full min-h-[700px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage
                    src="/GEONYX-careers.webp"
                    fallbackSrc="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop"
                    alt="Field Specialist Demo"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <Briefcase className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">{t('positions.sales.sector')}</span>
                </div>
            </div>

            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                            {t('positions.sales.eyebrow')}
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        {t('positions.sales.title')}
                    </h3>
                </div>

                <div className="space-y-8">
                    <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-[#333] pl-6">
                        {t('positions.sales.description')}
                    </p>

                    <div>
                        <h4 className="text-white font-bold uppercase text-sm mb-4 tracking-wider">{t('positions.requirementsLabel')}</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-gray-400 text-sm font-medium">
                                <CheckCircle className="w-5 h-5 text-geo-yellow flex-shrink-0" /> {t('positions.sales.req1')}
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm font-medium">
                                <CheckCircle className="w-5 h-5 text-geo-yellow flex-shrink-0" /> {t('positions.sales.req2')}
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm font-medium">
                                <CheckCircle className="w-5 h-5 text-geo-yellow flex-shrink-0" /> {t('positions.sales.req3')}
                            </li>
                        </ul>
                    </div>

                    <div className="pt-6">
                        <a href="#apply">
                            <button className="h-12 px-8 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase group">
                                {t('positions.applyBtn')}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        {/* ROW 2: PRODUCTION */}
        <section className="flex flex-col lg:flex-row-reverse w-full min-h-[700px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage
                    src="/GEONYX-careers1.webp"
                    fallbackSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                    alt="Production Operator"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                     <div className="flex justify-end mb-2"><Warehouse className="w-8 h-8 text-geo-yellow" /></div>
                     <span className="text-white font-bold uppercase text-sm block">{t('positions.production.sector')}</span>
                </div>
            </div>

            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                            {t('positions.production.eyebrow')}
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        {t('positions.production.title')}
                    </h3>
                </div>

                <div className="space-y-8">
                    <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-[#333] pl-6">
                        {t('positions.production.description')}
                    </p>

                    <div>
                        <h4 className="text-white font-bold uppercase text-sm mb-4 tracking-wider">{t('positions.requirementsLabel')}</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-gray-400 text-sm font-medium">
                                <CheckCircle className="w-5 h-5 text-geo-yellow flex-shrink-0" /> {t('positions.production.req1')}
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm font-medium">
                                <CheckCircle className="w-5 h-5 text-geo-yellow flex-shrink-0" /> {t('positions.production.req2')}
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm font-medium">
                                <CheckCircle className="w-5 h-5 text-geo-yellow flex-shrink-0" /> {t('positions.production.req3')}
                            </li>
                        </ul>
                    </div>

                    <div className="pt-6">
                        <a href="#apply">
                            <button className="h-12 px-8 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase group">
                                {t('positions.applyBtn')}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        {/* ROW 3: R&D */}
        <section className="flex flex-col lg:flex-row w-full min-h-[700px] border-b border-[#222]">
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                <SafeImage
                    src="/GEONYX-careers2.webp"
                    fallbackSrc="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop"
                    alt="R&D Technologist"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                     <Microscope className="w-8 h-8 text-geo-yellow mb-2" />
                     <span className="text-white font-bold uppercase text-sm block">{t('positions.rnd.sector')}</span>
                </div>
            </div>

            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                            {t('positions.rnd.eyebrow')}
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        {t('positions.rnd.title')}
                    </h3>
                </div>

                <div className="space-y-8">
                    <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-[#333] pl-6">
                        {t('positions.rnd.description')}
                    </p>

                    <div>
                        <h4 className="text-white font-bold uppercase text-sm mb-4 tracking-wider">{t('positions.requirementsLabel')}</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-gray-400 text-sm font-medium">
                                <CheckCircle className="w-5 h-5 text-geo-yellow flex-shrink-0" /> {t('positions.rnd.req1')}
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm font-medium">
                                <CheckCircle className="w-5 h-5 text-geo-yellow flex-shrink-0" /> {t('positions.rnd.req2')}
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm font-medium">
                                <CheckCircle className="w-5 h-5 text-geo-yellow flex-shrink-0" /> {t('positions.rnd.req3')}
                            </li>
                        </ul>
                    </div>

                    <div className="pt-6">
                        <a href="#apply">
                            <button className="h-12 px-8 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase group">
                                {t('positions.applyBtn')}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>

      </div>

      {/* 4. APPLICATION FORM */}
      <section id="apply" className="py-24 bg-[#0F0F0F] relative">
          <div className="container mx-auto px-6 md:px-10 max-w-4xl">

              <div className="bg-[#151515] border border-[#333] p-8 md:p-16 shadow-2xl relative overflow-hidden">
                  {/* Decorative Background */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-geo-yellow/5 rounded-full blur-3xl pointer-events-none"></div>

                  <div className="relative z-10">
                      <div className="text-center mb-8">
                          <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-2">{t('form.title')}</h2>
                          <p className="text-gray-500 font-medium">{t('form.subtitle')}</p>
                      </div>
                      {error && (
                          <div className="mb-8 p-6 bg-red-900/30 border-l-4 border-red-500 text-red-200 text-sm font-bold uppercase tracking-wide">
                              <div className="flex items-center gap-3">
                                  <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-nyx-dark text-xs">!</div>
                                  {error}
                              </div>
                          </div>
                      )}

                      {formState === 'success' ? (
                          <div className="flex flex-col items-center justify-center py-20 text-center">
                              <div className="w-20 h-20 bg-green-900/20 rounded-full flex items-center justify-center mb-6 border border-green-500/30">
                                  <CheckCircle className="w-10 h-10 text-green-500" />
                              </div>
                              <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tight">{t('form.successTitle')}</h3>
                              <p className="text-gray-400 max-w-md mx-auto">
                                  {t('form.successDesc')} <span className="text-geo-yellow font-bold">{t('form.successEmail')}</span>{t('form.successDesc2')}
                              </p>
                              <button
                                onClick={() => setFormState('idle')}
                                className="mt-8 text-geo-yellow font-bold uppercase text-sm hover:text-white transition-colors"
                              >
                                  {t('form.successNewBtn')}
                              </button>
                          </div>
                      ) : (
                          <form onSubmit={handleSubmit} className="space-y-8">
                              {/* Position Select */}
                              <div className="group">
                                  <label className="block text-xs font-bold text-geo-yellow uppercase tracking-wider mb-2">{t('form.labelPosition')}</label>
                                  <div className="relative">
                                      <select
                                        name="position"
                                        required
                                        defaultValue=""
                                        className="w-full bg-[#0a0a0a] border border-[#333] text-white py-4 px-4 appearance-none focus:outline-none focus:border-geo-yellow transition-colors font-bold uppercase"
                                      >
                                          <option value="" disabled>{t('form.placeholderPosition')}</option>
                                          {POSITIONS.map(p => (
                                              <option key={p.id} value={p.id}>{t(`form.position${p.id.charAt(0).toUpperCase() + p.id.slice(1)}`)}</option>
                                          ))}
                                      </select>
                                      <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 rotate-90 pointer-events-none" />
                                  </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                  <div className="group">
                                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 group-focus-within:text-white transition-colors">{t('form.labelName')}</label>
                                      <input
                                        name="name"
                                        type="text" required
                                        className="w-full bg-transparent border-b border-[#333] py-2 text-white text-lg focus:outline-none focus:border-geo-yellow transition-colors placeholder-gray-700"
                                        placeholder={t('form.placeholderName')}
                                      />
                                  </div>
                                  <div className="group">
                                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 group-focus-within:text-white transition-colors">{t('form.labelPhone')}</label>
                                      <input
                                        name="phone"
                                        type="tel" required
                                        className="w-full bg-transparent border-b border-[#333] py-2 text-white text-lg focus:outline-none focus:border-geo-yellow transition-colors placeholder-gray-700"
                                        placeholder={t('form.placeholderPhone')}
                                      />
                                  </div>
                              </div>

                              <div className="group">
                                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 group-focus-within:text-white transition-colors">{t('form.labelEmail')}</label>
                                  <input
                                    name="email"
                                    type="email" required
                                    className="w-full bg-transparent border-b border-[#333] py-2 text-white text-lg focus:outline-none focus:border-geo-yellow transition-colors placeholder-gray-700"
                                    placeholder={t('form.placeholderEmail')}
                                  />
                              </div>

                              {/* The Filter Question */}
                              <div className="group">
                                  <label className="block text-xs font-bold text-geo-yellow uppercase tracking-wider mb-4 flex items-center gap-2">
                                      <HardHat className="w-4 h-4" /> {t('form.labelExperience')}
                                  </label>
                                  <textarea
                                    name="experience"
                                    required
                                    rows={4}
                                    className="w-full bg-[#0a0a0a] border border-[#333] p-4 text-white focus:outline-none focus:border-geo-yellow transition-colors resize-none"
                                    placeholder={t('form.placeholderExperience')}
                                  ></textarea>
                              </div>

                              {/* CV Instructions */}
                              <div className="border border-geo-yellow/30 bg-geo-yellow/5 p-6">
                                  <p className="text-geo-yellow font-bold uppercase text-sm tracking-wider mb-2 flex items-center gap-2">
                                      📎 {t('form.cvLabel')}
                                  </p>
                                  <p className="text-gray-300 text-sm leading-relaxed">
                                      {t('form.cvDesc')}{' '}
                                      <a href="mailto:office@geonyxgroup.com" className="text-geo-yellow underline font-bold hover:text-white transition-colors">
                                          office@geonyxgroup.com
                                      </a>
                                      {' '}{t('form.cvSubjectLabel')} <span className="text-white">{t('form.cvSubject')}</span>
                                  </p>
                              </div>

                              <div className="pt-6">
                                  <button
                                    type="submit"
                                    className="w-full h-12 px-8 flex items-center justify-center gap-2 bg-geo-yellow text-black border border-geo-yellow text-sm font-bold tracking-wide transition-all hover:bg-white hover:text-black hover:border-white uppercase group"
                                    disabled={formState === 'submitting'}
                                  >
                                      {formState === 'submitting' ? t('form.btnSubmitting') : t('form.btnSubmit')}
                                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                  </button>
                              </div>
                          </form>
                      )}
                  </div>
              </div>
          </div>
      </section>

      <Footer />
    </div>
  );
};

import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Check } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { SafeImage } from './SafeImage';
import { useLang } from '../hooks/useLang';
import { usePageMeta } from '../hooks/usePageMeta';

const blocks = [
  { key: 'ip',       img: '/GEONYX-IP-LICENSING.webp',   reverse: false, bg: 'bg-[#080808]' },
  { key: 'transfer', img: '/GEONYX-TECH-TRANSFER.webp',  reverse: true,  bg: 'bg-[#050505]' },
  { key: 'jv',       img: '/GEONYX-JOINT-VENTURES.webp', reverse: false, bg: 'bg-[#080808]' },
];

const processSteps = ['s1', 's2', 's3', 's4'];

export const LicensingPage: React.FC = () => {
  usePageMeta('licensing');
  const { t } = useTranslation('licensing');
  const formRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ company: '', country: '', interest: '', message: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] font-sans text-gray-200 overflow-x-hidden selection:bg-geo-yellow selection:text-black">
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center justify-center border-b border-[#222] overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <SafeImage
            src="/GEONYX-LICENSING-HERO.webp"
            className="w-full h-full object-cover opacity-60"
            alt="GEONYX Licensing"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-20 text-left">
          <div className="max-w-5xl">
            <div className="flex items-center justify-start gap-3 mb-8">
              <div className="h-[2px] w-12 bg-geo-yellow shadow-[0_0_15px_#FFCC00]" />
              <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                {t('hero.eyebrow')}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 uppercase tracking-tighter drop-shadow-2xl mix-blend-difference">
              {t('hero.title1')}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-geo-yellow to-yellow-600">
                {t('hero.title2')}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light max-w-4xl leading-relaxed border-l-4 border-geo-yellow pl-6 py-2 bg-black/30 backdrop-blur-sm">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToForm}
                className="h-12 px-8 bg-geo-yellow text-black text-sm font-bold tracking-wider uppercase hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,204,0,0.15)]"
              >
                {t('hero.btn1')} <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => document.getElementById('ip')?.scrollIntoView({ behavior: 'smooth' })}
                className="h-12 px-8 border border-white/30 text-white text-sm font-bold tracking-wide uppercase hover:bg-geo-yellow hover:text-black hover:border-geo-yellow transition-colors flex items-center justify-center gap-2"
              >
                {t('hero.btn2')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="border-b border-[#222] bg-[#0b0c10]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-3 divide-x divide-[#222]">
            {['stat1', 'stat2', 'stat3'].map(s => (
              <div key={s} className="py-8 px-4 md:px-10 text-center">
                <div className="text-3xl md:text-4xl font-black text-geo-yellow mb-1">
                  {t(`hero.${s}Val`)}
                </div>
                <div className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-gray-600">
                  {t(`hero.${s}Label`)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── ZIGZAG BLOCKS ─────────────────────────────────────────────── */}
      {blocks.map(({ key, img, reverse, bg }, idx) => (
        <section key={key} id={key} className={`${bg} border-b border-[#222]`}>
          <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} w-full min-h-[600px]`}>

            {/* Image */}
            <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
              <SafeImage
                src={img}
                className="absolute inset-0 w-full h-full object-cover"
                alt={t(`${key}.title`)}
              />
              {/* Model number watermark */}
              <div className="absolute top-8 right-8 text-[80px] md:text-[120px] font-black text-white/[0.04] leading-none select-none pointer-events-none">
                {t(`${key}.eyebrow`).replace('МОДЕЛ ', '').replace('MODEL ', '').replace('MODELL ', '').replace('MODÈLE ', '').replace('MODELO ', '').replace('ΜΟΝΤΕΛΟ ', '')}
              </div>
              {/* Tag badge */}
              <div className="absolute bottom-8 left-8">
                <span className="inline-block text-[9px] font-black uppercase tracking-[0.3em] text-geo-yellow border border-geo-yellow/40 bg-black/70 backdrop-blur-sm px-4 py-2">
                  {t(`${key}.tag`)}
                </span>
              </div>
            </div>

            {/* Text */}
            <div className={`w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-12 lg:px-16 xl:px-20 py-16 ${idx % 2 === 0 ? 'bg-[#141414]' : 'bg-[#0F0F0F]'}`}>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-[2px] w-8 bg-geo-yellow shadow-[0_0_10px_#FFCC00]" />
                <span className="text-geo-yellow font-black uppercase tracking-[0.35em] text-xs md:text-sm">
                  {t(`${key}.eyebrow`)}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter leading-tight mb-3">
                {t(`${key}.title`)}
              </h2>
              <p className="text-geo-yellow/70 font-bold text-xs md:text-sm uppercase tracking-[0.25em] mb-7">
                {t(`${key}.subtitle`)}
              </p>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
                {t(`${key}.description`)}
              </p>

              <ul className="space-y-4">
                {['i1', 'i2', 'i3', 'i4', 'i5'].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-geo-yellow flex-shrink-0 mt-2" />
                    <span className="text-gray-300 text-base leading-relaxed">
                      {t(`${key}.${item}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>
      ))}

      {/* ── PROCESS ───────────────────────────────────────────────────── */}
      <section className="py-28 bg-[#050505] border-b border-[#222]">
        <div className="container mx-auto px-6 md:px-10">

          <div className="text-center mb-20">
            <span className="text-geo-yellow font-black uppercase tracking-[0.35em] text-[10px] block mb-5">
              {t('process.eyebrow')}
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
              {t('process.title')}
            </h2>
            <div className="w-16 h-[2px] bg-geo-yellow mx-auto mt-6 shadow-[0_0_15px_#FFCC00]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1a1a1a]">
            {processSteps.map((s, i) => (
              <div key={s} className="bg-[#050505] p-8 md:p-10 relative group hover:bg-[#080808] transition-colors">
                <div className="text-[80px] font-black text-geo-yellow/8 leading-none mb-5 select-none group-hover:text-geo-yellow/15 transition-colors">
                  {t(`process.${s}num`)}
                </div>
                <div className="w-8 h-[2px] bg-geo-yellow/30 mb-5 group-hover:bg-geo-yellow transition-colors" />
                <h3 className="text-white font-black uppercase tracking-[0.2em] text-sm mb-3">
                  {t(`process.${s}title`)}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {t(`process.${s}desc`)}
                </p>
                {i < processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-3 top-14 w-6 h-6 text-geo-yellow/30 z-10 bg-[#050505] py-1" strokeWidth={1.5} />
                )}
              </div>
            ))}
          </div>

          <p className="text-gray-700 text-[10px] font-mono uppercase tracking-widest text-center mt-8">
            {t('process.disclaimer')}
          </p>
        </div>
      </section>

      {/* ── EXPRESSION OF INTEREST FORM ───────────────────────────────── */}
      <section ref={formRef} className="py-28 bg-[#080808]">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-xl mx-auto">

            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-[2px] flex-1 max-w-[60px] bg-geo-yellow shadow-[0_0_15px_#FFCC00]" />
                <span className="text-geo-yellow font-black uppercase tracking-[0.35em] text-[10px]">
                  {t('cta.eyebrow')}
                </span>
                <div className="h-[2px] flex-1 max-w-[60px] bg-geo-yellow shadow-[0_0_15px_#FFCC00]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-4">
                {t('cta.title')}
              </h2>
              <p className="text-gray-600 text-sm">{t('cta.subtitle')}</p>
            </div>

            {sent ? (
              <div className="border border-geo-yellow/30 bg-geo-yellow/5 p-10 text-center">
                <Check className="w-8 h-8 text-geo-yellow mx-auto mb-5" strokeWidth={1.5} />
                <p className="text-white font-black uppercase tracking-widest text-sm mb-2">
                  {t('cta.successTitle')}
                </p>
                <p className="text-gray-600 text-xs font-mono">{t('cta.successDesc')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField label={t('cta.fieldCompany')}>
                    <input
                      type="text" required
                      value={form.company}
                      onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                      className="w-full bg-[#0a0a0a] border border-[#2a2a2a] text-white text-sm px-4 py-3 focus:outline-none focus:border-geo-yellow transition-colors font-mono placeholder-gray-800"
                    />
                  </FormField>
                  <FormField label={t('cta.fieldCountry')}>
                    <input
                      type="text" required
                      value={form.country}
                      onChange={e => setForm(f => ({ ...f, country: e.target.value }))}
                      className="w-full bg-[#0a0a0a] border border-[#2a2a2a] text-white text-sm px-4 py-3 focus:outline-none focus:border-geo-yellow transition-colors font-mono placeholder-gray-800"
                    />
                  </FormField>
                </div>

                <FormField label={t('cta.fieldInterest')}>
                  <select
                    required
                    value={form.interest}
                    onChange={e => setForm(f => ({ ...f, interest: e.target.value }))}
                    className="w-full bg-[#0a0a0a] border border-[#2a2a2a] text-white text-sm px-4 py-3 focus:outline-none focus:border-geo-yellow transition-colors font-mono appearance-none"
                  >
                    <option value="">—</option>
                    <option value="ip">{t('cta.opt1')}</option>
                    <option value="transfer">{t('cta.opt2')}</option>
                    <option value="jv">{t('cta.opt3')}</option>
                  </select>
                </FormField>

                <FormField label={t('cta.fieldMessage')}>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full bg-[#0a0a0a] border border-[#2a2a2a] text-white text-sm px-4 py-3 focus:outline-none focus:border-geo-yellow transition-colors font-mono placeholder-gray-800 resize-none"
                  />
                </FormField>

                <button
                  type="submit"
                  className="w-full py-4 bg-geo-yellow text-black text-xs font-black uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2 mt-2"
                >
                  {t('cta.btn')} <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-gray-700 text-[10px] text-center font-mono uppercase tracking-widest leading-loose pt-1">
                  {t('cta.disclaimer')}
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[10px] font-black tracking-[0.25em] uppercase text-gray-600 mb-2">{label}</p>
      {children}
    </div>
  );
}

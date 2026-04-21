import React, { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Scale, FileText, BadgeDollarSign, AlertTriangle, ShieldAlert, BrainCircuit, Clock, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const TermsConditionsPage: React.FC = () => {
  const { t } = useTranslation('terms');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0F0F0F] font-sans text-gray-200 selection:bg-geo-yellow selection:text-black">
      <Navbar />

      <section className="pt-32 pb-20 px-6 md:px-10 container mx-auto max-w-5xl min-h-screen flex flex-col justify-center">

        {/* HEADER */}
        <div className="text-center mb-16 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
                <FileText size={300} strokeWidth={0.5} />
            </div>

            <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-1 rounded-none mb-8 backdrop-blur-md relative z-10">
                <Scale className="w-4 h-4 text-geo-yellow" />
                <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">{t('header.eyebrow')}</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-6 relative z-10">
                {t('header.title')}
            </h1>

            <h3 className="text-xl md:text-2xl text-geo-yellow font-bold uppercase tracking-wide relative z-10">
                {t('header.subtitle')}
            </h3>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 relative z-10">

            <div className="bg-[#141414] border border-[#333] p-8 hover:border-geo-yellow transition-colors group">
                <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity flex justify-between items-start">
                    <span className="text-4xl font-black text-white/10 block">01</span>
                    <BadgeDollarSign className="w-10 h-10 text-geo-yellow" strokeWidth={1.5} />
                </div>
                <h4 className="text-white font-bold uppercase text-lg mb-4 border-b border-[#333] pb-4">
                    {t('block1.title')}
                </h4>
                <ul className="space-y-4 text-gray-400 text-sm">
                    <li>
                        <strong className="text-white block mb-1">{t('block1.validity_label')}</strong>
                        {t('block1.validity')}
                    </li>
                    <li>
                        <strong className="text-white block mb-1">{t('block1.payment_label')}</strong>
                        {t('block1.payment')}
                    </li>
                    <li>
                        <strong className="text-white block mb-1">{t('block1.retention_label')}</strong>
                        {t('block1.retention')}
                    </li>
                </ul>
            </div>

            <div className="bg-[#141414] border border-[#333] p-8 hover:border-red-500 transition-colors group">
                <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity flex justify-between items-start">
                    <span className="text-4xl font-black text-white/10 block">02</span>
                    <AlertTriangle className="w-10 h-10 text-red-500" strokeWidth={1.5} />
                </div>
                <h4 className="text-white font-bold uppercase text-lg mb-4 border-b border-[#333] pb-4">
                    {t('block2.title')} <span className="text-red-500 text-xs ml-2">{t('block2.critical')}</span>
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                    {t('block2.note')}
                    <br/><span className="text-white font-bold">{t('block2.requirements_label')}</span> {t('block2.requirements')}
                </p>
                <div className="bg-red-500/10 border-l-2 border-red-500 p-3">
                    <p className="text-xs text-gray-300 font-bold uppercase mb-2">{t('block2.exclusion_title')}</p>
                    <p className="text-xs text-gray-400 mb-1">{t('block2.exclusion_intro')}</p>
                    <ul className="list-disc list-inside text-xs text-gray-500 space-y-1">
                        <li>{t('block2.li1')}</li>
                        <li>{t('block2.li2')}</li>
                        <li>{t('block2.li3')}</li>
                    </ul>
                </div>
            </div>

            <div className="bg-[#141414] border border-[#333] p-8 hover:border-geo-yellow transition-colors group">
                <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity flex justify-between items-start">
                    <span className="text-4xl font-black text-white/10 block">03</span>
                    <ShieldAlert className="w-10 h-10 text-geo-yellow" strokeWidth={1.5} />
                </div>
                <h4 className="text-white font-bold uppercase text-lg mb-4 border-b border-[#333] pb-4">
                    {t('block3.title')}
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                    {t('block3.intro')}
                </p>
                <ul className="space-y-3 text-gray-400 text-sm">
                    <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-geo-yellow mt-0.5 flex-shrink-0" />
                        <span><strong className="text-white">{t('block3.li1_label')}</strong> {t('block3.li1')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-geo-yellow mt-0.5 flex-shrink-0" />
                        <span><strong className="text-white">{t('block3.li2_label')}</strong> {t('block3.li2')}</span>
                    </li>
                </ul>
            </div>

            <div className="bg-[#141414] border border-[#333] p-8 hover:border-geo-yellow transition-colors group">
                <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity flex justify-between items-start">
                    <span className="text-4xl font-black text-white/10 block">04</span>
                    <BrainCircuit className="w-10 h-10 text-geo-yellow" strokeWidth={1.5} />
                </div>
                <h4 className="text-white font-bold uppercase text-lg mb-4 border-b border-[#333] pb-4">
                    {t('block4.title')}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed text-justify">
                    {t('block4.body')}
                </p>
            </div>

            <div className="bg-[#141414] border border-[#333] p-8 hover:border-geo-yellow transition-colors group md:col-span-2">
                <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity flex justify-between items-start">
                    <span className="text-4xl font-black text-white/10 block">05</span>
                    <Clock className="w-10 h-10 text-geo-yellow" strokeWidth={1.5} />
                </div>
                <h4 className="text-white font-bold uppercase text-lg mb-4 border-b border-[#333] pb-4">
                    {t('block5.title')}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed text-justify">
                    {t('block5.body')}
                </p>
            </div>

        </div>

        {/* LEGAL FOOTER NOTE */}
        <div className="text-center border-t border-[#222] pt-8">
            <p className="text-xs text-gray-600 font-medium uppercase tracking-wide">
                {t('footer.note')}
                <br className="md:hidden" /> <a href="mailto:office@geonyxgroup.com" className="text-geo-yellow hover:text-white transition-colors">office@geonyxgroup.com</a>
            </p>
        </div>

      </section>

      <Footer />
    </div>
  );
};

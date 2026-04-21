import React, { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ShieldCheck, Lock, Database, FileCheck, Scale } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const PrivacyPolicyPage: React.FC = () => {
  const { t } = useTranslation('privacy');

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
                <Scale size={300} strokeWidth={0.5} />
            </div>

            <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-1 rounded-none mb-8 backdrop-blur-md relative z-10">
                <ShieldCheck className="w-4 h-4 text-geo-yellow" />
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 relative z-10">

            <div className="bg-[#141414] border border-[#333] p-8 hover:border-geo-yellow transition-colors group">
                <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                    <span className="text-4xl font-black text-white/10 block mb-2">01</span>
                    <ShieldCheck className="w-10 h-10 text-geo-yellow" strokeWidth={1.5} />
                </div>
                <h4 className="text-white font-bold uppercase text-lg mb-4 border-b border-[#333] pb-4">
                    {t('block1.title')}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed text-justify">
                    <span className="text-white font-bold">"GEONYX GROUP"</span> — {t('block1.body')}
                </p>
            </div>

            <div className="bg-[#141414] border border-[#333] p-8 hover:border-geo-yellow transition-colors group">
                <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                    <span className="text-4xl font-black text-white/10 block mb-2">02</span>
                    <Lock className="w-10 h-10 text-geo-yellow" strokeWidth={1.5} />
                </div>
                <h4 className="text-white font-bold uppercase text-lg mb-4 border-b border-[#333] pb-4">
                    {t('block2.title')}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed text-justify">
                    {t('block2.body')}
                </p>
            </div>

            <div className="bg-[#141414] border border-[#333] p-8 hover:border-geo-yellow transition-colors group">
                <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                    <span className="text-4xl font-black text-white/10 block mb-2">03</span>
                    <Database className="w-10 h-10 text-geo-yellow" strokeWidth={1.5} />
                </div>
                <h4 className="text-white font-bold uppercase text-lg mb-4 border-b border-[#333] pb-4">
                    {t('block3.title')}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {t('block3.intro')}
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                    <li className="flex items-start gap-2">
                        <FileCheck className="w-4 h-4 text-geo-yellow mt-0.5 flex-shrink-0" />
                        {t('block3.li1')}
                    </li>
                    <li className="flex items-start gap-2">
                        <FileCheck className="w-4 h-4 text-geo-yellow mt-0.5 flex-shrink-0" />
                        {t('block3.li2')}
                    </li>
                    <li className="flex items-start gap-2">
                        <FileCheck className="w-4 h-4 text-geo-yellow mt-0.5 flex-shrink-0" />
                        {t('block3.li3')}
                    </li>
                </ul>
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

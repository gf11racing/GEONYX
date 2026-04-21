
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from './Button';
import { CheckCircle } from 'lucide-react';
import { SafeImage } from './SafeImage';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useLang } from '../hooks/useLang';

export const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [selectedSector, setSelectedSector] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const { t } = useTranslation('contactform');
  const { to } = useLang();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    const form = e.target as HTMLFormElement;

    const templateParams = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
      sector: selectedSector,
      message: message,
    };

    try {
      await emailjs.send(
        'service_6oe57mj',
        'template_ptk771k',
        templateParams,
        'fUu0EmANDHWfYyCK9'
      );
      setFormState('success');
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending form. Please try again or contact us directly.');
      setFormState('idle');
    }
  };

  return (
    <section id="contact" className="relative py-20 lg:py-24 xl:py-32 overflow-hidden min-h-[700px] flex items-center">
      {/* FULL SECTION BACKGROUND - NO GRAYSCALE */}
      <div className="absolute inset-0 z-0">
        <SafeImage
          src="/GEONYX-B2B-B2G1.webp"
          alt="Industrial Background"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-nyx-dark via-nyx-dark/95 to-nyx-dark/60 lg:to-nyx-dark/40"></div>
        {/* Mobile overlay */}
        <div className="absolute inset-0 bg-nyx-dark/80 lg:hidden"></div>
      </div>

      <div className="w-full px-6 md:px-10 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row justify-center items-start gap-12 lg:gap-20 max-w-[1300px] mx-auto w-full">

          {/* LEFT SIDE: Text Content */}
          <div className="w-full lg:flex-1 max-w-2xl flex flex-col justify-center text-white pt-10 lg:pt-0">

            <div className="flex items-center justify-start gap-3 mb-6">
                <div className="h-[2px] w-12 bg-geo-yellow shadow-[0_0_15px_#FFCC00]"></div>
                <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                    {t('eyebrow')}
                </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight mb-6 xl:mb-8">
              {t('title')} <br/>
              <span className="text-geo-yellow">
                {t('titleHighlight')}
              </span>
            </h2>

            <p className="text-gray-300 text-base md:text-lg xl:text-xl leading-relaxed mb-8 xl:mb-12 font-light">
              {t('body')}
            </p>

            <div className="border-t border-gray-700 pt-6 xl:pt-10">
              <h4 className="text-gray-400 font-bold uppercase text-xs xl:text-sm tracking-wider mb-4 xl:mb-6">{t('whatYouGet')}</h4>
              <ul className="space-y-3 xl:space-y-5 text-sm md:text-base xl:text-lg text-gray-200">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-geo-yellow flex-shrink-0"></span>
                  {t('li1')}
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-geo-yellow flex-shrink-0"></span>
                  {t('li2')}
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-geo-yellow flex-shrink-0"></span>
                  {t('li3')}
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE: Form Block (DARK THEME) */}
          <div className="w-full lg:flex-1 max-w-2xl xl:max-w-3xl flex justify-center lg:justify-start items-start">
            <div className="bg-[#141414] border border-[#333] w-full p-8 md:p-10 xl:p-16 shadow-2xl rounded-sm">
               {formState === 'success' ? (
                  <div className="h-full flex flex-col justify-center items-center text-center py-20">
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 border border-green-500/30">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{t('successTitle')}</h3>
                    <p className="text-gray-400 mb-8 text-base">{t('successBody')}</p>
                    <button
                      onClick={() => setFormState('idle')}
                      className="text-geo-yellow font-bold border-b border-geo-yellow hover:text-white hover:border-white transition-colors pb-1 uppercase tracking-wider text-sm"
                    >
                      {t('newInquiry')}
                    </button>
                  </div>
               ) : (
                  <form onSubmit={handleSubmit} className="space-y-8 xl:space-y-10">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 xl:gap-y-10">
                      {/* Name */}
                      <div className="group">
                        <label htmlFor="name" className="block text-[10px] md:text-xs xl:text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">{t('nameLabel')}</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full border-b border-gray-700 py-2 text-white text-base xl:text-lg focus:border-geo-yellow focus:outline-none transition-colors bg-transparent placeholder-gray-600"
                          placeholder={t('namePlaceholder')}
                        />
                      </div>

                      {/* Company */}
                      <div className="group">
                        <label htmlFor="company" className="block text-[10px] md:text-xs xl:text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">{t('companyLabel')}</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          className="w-full border-b border-gray-700 py-2 text-white text-base xl:text-lg focus:border-geo-yellow focus:outline-none transition-colors bg-transparent placeholder-gray-600"
                          placeholder={t('companyPlaceholder')}
                        />
                      </div>

                      {/* Email */}
                      <div className="group">
                        <label htmlFor="email" className="block text-[10px] md:text-xs xl:text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">{t('emailLabel')}</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full border-b border-gray-700 py-2 text-white text-base xl:text-lg focus:border-geo-yellow focus:outline-none transition-colors bg-transparent placeholder-gray-600"
                          placeholder="name@company.com"
                        />
                      </div>

                      {/* Phone */}
                      <div className="group">
                        <label htmlFor="phone" className="block text-[10px] md:text-xs xl:text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">{t('phoneLabel')}</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          className="w-full border-b border-gray-700 py-2 text-white text-base xl:text-lg focus:border-geo-yellow focus:outline-none transition-colors bg-transparent placeholder-gray-600"
                          placeholder={t('phonePlaceholder')}
                        />
                      </div>
                    </div>

                    {/* Industry Select */}
                    <div className="group">
                        <label htmlFor="sector" className="block text-[10px] md:text-xs xl:text-sm font-bold text-geo-yellow uppercase tracking-wide mb-2">{t('sectorLabel')}</label>
                        <div className="relative">
                            <select
                              id="sector"
                              name="sector"
                              required
                              value={selectedSector}
                              onChange={(e) => setSelectedSector(e.target.value)}
                              className="w-full border-b border-gray-700 py-2 text-white text-base xl:text-lg focus:border-geo-yellow focus:outline-none transition-colors bg-transparent appearance-none cursor-pointer"
                            >
                                <option value="" disabled className="bg-[#141414]">{t('sectorPlaceholder')}</option>
                                <option value="heavy" className="bg-[#141414]">{t('sector1')}</option>
                                <option value="food" className="bg-[#141414]">{t('sector2')}</option>
                                <option value="agro" className="bg-[#141414]">{t('sector3')}</option>
                                <option value="water" className="bg-[#141414]">{t('sector4')}</option>
                                <option value="energy" className="bg-[#141414]">{t('sector5')}</option>
                                <option value="transport" className="bg-[#141414]">{t('sector6')}</option>
                                <option value="urban" className="bg-[#141414]">{t('sector7')}</option>
                                <option value="other" className="bg-[#141414]">{t('sector8')}</option>
                            </select>
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                ▼
                            </div>
                        </div>
                    </div>

                    {/* Details */}
                    <div className="group">
                        <label htmlFor="details" className="block text-[10px] md:text-xs xl:text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">{t('detailsLabel')}</label>
                        <textarea
                          id="details"
                          name="details"
                          rows={1}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full border-b border-gray-700 py-2 text-white text-base xl:text-lg focus:border-geo-yellow focus:outline-none transition-colors bg-transparent placeholder-gray-600 resize-none overflow-hidden"
                          placeholder={t('detailsPlaceholder')}
                          onInput={(e) => {
                            const target = e.target as HTMLTextAreaElement;
                            target.style.height = 'auto';
                            target.style.height = target.scrollHeight + 'px';
                          }}
                        />
                    </div>

                    <div className="pt-4">
                         <Button
                             variant="primary"
                             type="submit"
                             className="w-full py-4 xl:py-6 text-sm md:text-base xl:text-lg font-extrabold shadow-lg hover:shadow-xl hover:-translate-y-1 bg-geo-yellow text-nyx-dark border-none uppercase"
                             disabled={formState === 'submitting'}
                         >
                             {formState === 'submitting' ? t('submittingBtn') : t('submitBtn')}
                         </Button>
                         <p className="mt-4 text-[10px] xl:text-xs text-gray-500 text-center">
                             {t('privacyNote')} <Link to={to('/privacy-policy')} className="underline hover:text-white">{t('privacyLink')}</Link>.
                         </p>
                    </div>
                  </form>
               )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

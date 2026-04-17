
import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { MapPin, Phone, Mail, Clock, Building2, Briefcase, ArrowRight, CheckCircle, Globe, QrCode } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SafeImage } from './SafeImage';

export const ContactsPage: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [selectedSector, setSelectedSector] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "GEONYX - Индустриални геополимерни решения | Контакти";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', "Свържете се с екипа на GEONYX за инженерна консултация, техническа информация и оферти за индустриални подове и минерални системи. Подкрепа за проекти в тежка индустрия, инфраструктура, храни, енергетика и логистика.");
    }
  }, []);

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
      message: message
    };

    console.log('Изпращане...', templateParams);

    try {
      await emailjs.send(
        'service_6oe57mj',
        'template_ptk771k',
        templateParams,
        'fUu0EmANDHWfYyCK9'
      );
      console.log('Успешно изпратено!');
      setFormState('success');
    } catch (error) {
      console.error('Error:', error);
      alert('Възникна грешка при изпращането. Моля, опитайте отново или се свържете с нас директно.');
      setFormState('idle');
    }
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] font-sans text-gray-200 selection:bg-geo-yellow selection:text-black">
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
            src="/GEONYX-Contact1.webp" 
            fallbackSrc="/GEONYX-Contact1.webp"
            alt="Corporate Office" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/50 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-left pt-20">
            {/* Style Line */}
            <div className="flex items-center justify-start gap-3 mb-8 page-animate-tag">
                <div className="h-[2px] w-12 bg-geo-yellow shadow-[0_0_15px_#FFCC00]"></div>
                <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">КОНТАКТИ И ОФИСИ</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8 uppercase tracking-tighter drop-shadow-2xl max-w-5xl page-animate-title">
              СВЪРЖЕТЕ СЕ <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-geo-yellow to-yellow-600">С НАС.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light max-w-3xl leading-relaxed border-l-4 border-geo-yellow pl-6 py-2 bg-black/30 backdrop-blur-sm page-animate-desc">
              Имате индустриален казус? Ние имаме инженерно решение. <br className="hidden md:block"/>
              Не губете време – нашите експерти са на линия.
            </p>
        </div>
      </section>

      {/* 3. ZIG-ZAG CONTACT DETAILS */}
      <div className="w-full bg-[#111]">
          
          {/* BLOCK 1: HEADQUARTERS */}
          <section className="flex flex-col lg:flex-row w-full min-h-[700px] border-b border-[#222]">
              <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                  <SafeImage 
                      src="/GEONYX-Contact2.webp" 
                      fallbackSrc="/GEONYX-Contact2.webp"
                      alt="Headquarters Building" 
                      className="absolute inset-0 w-full h-full object-cover opacity-80" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                  <div className="absolute top-8 left-8 bg-black/80 backdrop-blur border-l-4 border-geo-yellow p-4">
                       <Building2 className="w-8 h-8 text-geo-yellow mb-2" />
                       <span className="text-white font-bold uppercase text-sm block">Администрация</span>
                  </div>
              </div>

              <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                  <div className="mb-8">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">
                             ЛОКАЦИЯ
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                          ЦЕНТРАЛЕН ОФИС & <br/> АДМИНИСТРАЦИЯ
                      </h3>
                  </div>

                  <div className="space-y-6 text-lg">
                      <div className="flex items-start gap-4 border-b border-[#222] pb-4">
                          <MapPin className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
                          <div>
                              <p className="text-white font-bold">гр. Габрово, ул. „Юрий Венелин“ 18</p>
                              <p className="text-gray-400 text-sm">ет. 2, 5300 Габрово, България</p>
                          </div>
                      </div>
                      <div className="flex items-center gap-4 border-b border-[#222] pb-4 group cursor-pointer">
                          <Mail className="w-6 h-6 text-gray-500 group-hover:text-geo-yellow flex-shrink-0 transition-colors" />
                          <a href="mailto:office@geonyxgroup.com" className="text-white font-bold group-hover:text-geo-yellow transition-colors">office@geonyxgroup.com</a>
                      </div>
                      <div className="flex items-center gap-4 border-b border-[#222] pb-4">
                          <Clock className="w-6 h-6 text-gray-500 flex-shrink-0" />
                          <p className="text-gray-400 text-sm">Пон - Пет: 09:00 - 18:00</p>
                      </div>
                  </div>

                  <div className="mt-8 pt-4">
                      <p className="text-sm text-gray-500 font-bold uppercase tracking-wider border-l-2 border-geo-yellow pl-4">
                          ЗА ОФИЦИАЛНА КОРЕСПОНДЕНЦИЯ, ПАРТНЬОРСТВА И ДОКУМЕНТИ.
                      </p>
                  </div>
              </div>
          </section>

          {/* BLOCK 2: SALES & TECH */}
          <section className="flex flex-col lg:flex-row-reverse w-full min-h-[700px] border-b border-[#222]">
              <div className="w-full lg:w-1/2 relative min-h-[400px] bg-black group overflow-hidden">
                  <SafeImage 
                      src="/GEONYX-Contact3.webp" 
                      fallbackSrc="/GEONYX-Contact3.webp"
                      alt="Technical Engineers on Site" 
                      className="absolute inset-0 w-full h-full object-cover opacity-80" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                  <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border-r-4 border-geo-yellow p-4 text-right">
                       <div className="flex justify-end mb-2"><Briefcase className="w-8 h-8 text-geo-yellow" /></div>
                       <span className="text-white font-bold uppercase text-sm block">Търговски Отдел</span>
                  </div>
              </div>

              <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                  <div className="mb-8">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">
                             ПОДДРЪЖКА
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                          ТЪРГОВСКИ & <br/> ТЕХНИЧЕСКИ ОТДЕЛ
                      </h3>
                  </div>

                  <div className="space-y-6 text-lg">
                      <div className="flex items-center gap-4 border-b border-[#222] pb-4 group cursor-pointer">
                          <Phone className="w-6 h-6 text-gray-500 group-hover:text-geo-yellow flex-shrink-0 transition-colors" />
                          <a href="tel:+359897000011" className="text-white font-bold group-hover:text-geo-yellow transition-colors text-xl">+359 897 0000 11</a>
                      </div>
                      <div className="flex items-center gap-4 border-b border-[#222] pb-4 group cursor-pointer">
                          <Mail className="w-6 h-6 text-gray-500 group-hover:text-geo-yellow flex-shrink-0 transition-colors" />
                          <a href="mailto:sales@geonyxgroup.com" className="text-white font-bold group-hover:text-geo-yellow transition-colors">sales@geonyxgroup.com</a>
                      </div>
                      <div className="flex items-center gap-4 border-b border-[#222] pb-4 group cursor-default">
                          <Globe className="w-6 h-6 text-gray-500 group-hover:text-geo-yellow flex-shrink-0 transition-colors" />
                          <p className="text-gray-400 font-bold group-hover:text-white transition-colors">Национално покритие</p>
                      </div>
                  </div>

                  <div className="mt-8 pt-4">
                      <p className="text-sm text-gray-500 font-bold uppercase tracking-wider border-l-2 border-geo-yellow pl-4">
                          ЗА ОФЕРТИ, ОГЛЕДИ НА ОБЕКТИ И ТЕХНИЧЕСКИ КОНСУЛТАЦИИ. <br/>
                          <span className="text-white">НАШИТЕ ИНЖЕНЕРИ ПЪТУВАТ В ЦЯЛАТА СТРАНА.</span>
                      </p>
                  </div>
              </div>
          </section>

      </div>

      {/* 4. THE INQUIRY FORM */}
      <section className="py-24 bg-[#0a0a0a] relative">
          <div className="container mx-auto px-6 md:px-10 max-w-5xl">
              
              <div className="text-center mb-16">
                  <div className="flex items-center justify-center gap-3 mb-4">
                      <div className="h-[2px] w-8 bg-geo-yellow"></div>
                      <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">Действай Сега</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase mt-4">ИЗПРАТЕТЕ ЗАПИТВАНЕ</h2>
              </div>

              <div className="bg-[#111] border border-[#222] p-8 md:p-16 shadow-2xl relative">
                  
                  {formState === 'success' ? (
                      <div className="flex flex-col items-center justify-center py-20 text-center">
                          <div className="w-24 h-24 bg-green-900/20 rounded-full flex items-center justify-center mb-8 border border-green-500/30">
                              <CheckCircle className="w-12 h-12 text-green-500" />
                          </div>
                          <h3 className="text-3xl font-bold text-white mb-4">ЗАПИТВАНЕТО Е ПРИЕТО</h3>
                          <p className="text-gray-400 text-lg">Наш инженер ще се свърже с вас до 24 часа за уточняване на детайлите.</p>
                          <button 
                            onClick={() => setFormState('idle')}
                            className="mt-12 text-geo-yellow font-bold uppercase text-sm hover:text-white transition-colors border-b border-geo-yellow pb-1 hover:border-white"
                          >
                              Изпрати ново запитване
                          </button>
                      </div>
                  ) : (
                      <form onSubmit={handleSubmit} className="space-y-10">
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                              {/* Name */}
                              <div className="group">
                                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Име и Фамилия *</label>
                                  <input 
                                    name="name"
                                    type="text" required
                                    className="w-full bg-[#0F0F0F] border-b border-[#333] py-4 px-4 text-white text-lg focus:outline-none focus:border-geo-yellow focus:bg-[#1a1a1a] transition-all placeholder-gray-700"
                                    placeholder="Иван Петров"
                                  />
                              </div>
                              {/* Company */}
                              <div className="group">
                                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Компания / Организация *</label>
                                  <input 
                                    name="company"
                                    type="text" required
                                    className="w-full bg-[#0F0F0F] border-b border-[#333] py-4 px-4 text-white text-lg focus:outline-none focus:border-geo-yellow focus:bg-[#1a1a1a] transition-all placeholder-gray-700"
                                    placeholder="Име на фирмата"
                                  />
                              </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                              {/* Phone */}
                              <div className="group">
                                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Телефон *</label>
                                  <input 
                                    name="phone"
                                    type="tel" required
                                    className="w-full bg-[#0F0F0F] border-b border-[#333] py-4 px-4 text-white text-lg focus:outline-none focus:border-geo-yellow focus:bg-[#1a1a1a] transition-all placeholder-gray-700"
                                    placeholder="+359 ..."
                                  />
                              </div>
                              {/* Email */}
                              <div className="group">
                                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Email *</label>
                                  <input 
                                    name="email"
                                    type="email" required
                                    className="w-full bg-[#0F0F0F] border-b border-[#333] py-4 px-4 text-white text-lg focus:outline-none focus:border-geo-yellow focus:bg-[#1a1a1a] transition-all placeholder-gray-700"
                                    placeholder="name@company.com"
                                  />
                              </div>
                          </div>

                          {/* Industry Select */}
                          <div className="group">
                              <label className="block text-xs font-bold text-geo-yellow uppercase tracking-wider mb-3">Тип Индустрия *</label>
                              <div className="relative">
                                  <select 
                                    name="sector"
                                    required
                                    value={selectedSector}
                                    onChange={(e) => setSelectedSector(e.target.value)}
                                    className="w-full bg-[#0F0F0F] border border-[#333] text-white py-4 px-4 appearance-none focus:outline-none focus:border-geo-yellow transition-colors text-lg cursor-pointer"
                                  >
                                      <option value="" disabled className="text-gray-700">-- Изберете Сектор --</option>
                                      <option value="heavy">Тежка Индустрия & Логистика</option>
                                      <option value="food">Хранително-вкусова & Фармация</option>
                                      <option value="agro">Агро, Биогаз & Животински среди</option>
                                      <option value="water">Водна & Морска Инфраструктура</option>
                                      <option value="energy">Енергетика, Мини & Тежка защита</option>
                                      <option value="transport">Транспорт, Паркинги & Гаражи</option>
                                      <option value="urban">Градска среда & Строителство</option>
                                      <option value="other">Друго</option>
                                  </select>
                                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                      <ArrowRight className="text-gray-500 rotate-90" />
                                  </div>
                              </div>
                          </div>

                          {/* Message */}
                          <div className="group">
                              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Съобщение / Описание на проблема</label>
                              <textarea 
                                name="message"
                                rows={5}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full bg-[#0F0F0F] border border-[#333] p-4 text-white text-lg focus:outline-none focus:border-geo-yellow focus:bg-[#1a1a1a] transition-all resize-none placeholder-gray-700"
                                placeholder="Опишете накратко казуса..."
                              ></textarea>
                          </div>

                          <div className="pt-6">
                              <button 
                                type="submit" 
                                className="w-full h-12 px-8 flex items-center justify-center gap-2 bg-geo-yellow text-black border border-geo-yellow text-sm font-bold tracking-wide transition-all hover:bg-white hover:text-black hover:border-white uppercase group shadow-lg hover:shadow-xl"
                                disabled={formState === 'submitting'}
                              >
                                  {formState === 'submitting' ? 'ИЗПРАЩАНЕ...' : 'ИЗПРАТИ ЗАПИТВАНЕ'}
                                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </button>
                          </div>
                      </form>
                  )}
              </div>
          </div>
      </section>

      {/* 5. LOCATION (Map) */}
      <section className="relative w-full h-[500px] bg-[#222]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2915.267683930182!2d25.316499676579667!3d42.8732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a911765c92582d%3A0xe53630737a098056!2z0YPQuy4g0K7RgNC4INCS0LXQvdC10LvQuNC9IDE4LCA1MzAwINCT0LDQsdGA0L7QstC-!5e0!3m2!1sbg!2sbg!4v1713271200000!5m2!1sbg!2sbg" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="GEONYX Location"
          ></iframe>
          
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-10 flex items-end">
              <div className="container mx-auto px-6">
                  <div className="inline-block bg-geo-yellow px-6 py-2">
                      <p className="text-black font-black uppercase text-sm tracking-wide">
                          Локация: Габрово, България. <span className="opacity-50">|</span> Оперативен обхват: Цяла Европа.
                      </p>
                  </div>
              </div>
          </div>
      </section>

      <Footer />
    </div>
  );
};

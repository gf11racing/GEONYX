
import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Users, Briefcase, Warehouse, Beaker, CheckCircle, Upload, ArrowRight, ChevronRight, HardHat, Microscope } from 'lucide-react';
import { SafeImage } from './SafeImage';

const POSITIONS = [
  { id: 'sales', title: "ТЪРГОВЕЦ" },
  { id: 'production', title: "ПРОИЗВОДСТВО" },
  { id: 'rnd', title: "R&D ТЕХНОЛОГ" }
];

export const CareersPage: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "GEONYX | Кариера и развитие – Работа в индустриалното производство";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', "Кариерни възможности в GEONYX – позиции за инженери, технически специалисти и производствен персонал в сферата на индустриалните подове и минералните системи за инфраструктура. Дългосрочно професионално развитие, обучение и участие в стратегически индустриални проекти.");
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    console.log('Начало на изпращане на кандидатура...');
    
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
        message: `Опит: ${experienceEl.value}\n\n(Кандидатът ще изпрати CV отделно на office@geonyxgroup.com)`
      };

      console.log('Изпращане към EmailJS...', templateParams);
      
      try {
        const result = await emailjs.send(
          'service_6oe57mj',
          'template_1smmu4e',
          templateParams,
          'fUu0EmANDHWfYyCK9'
        );
        console.log('EmailJS Отговор:', result);
        setFormState('success');
        // Scroll to success message
        const formElement = document.getElementById('apply');
        formElement?.scrollIntoView({ behavior: 'smooth' });
      } catch (err: any) {
        console.error('EmailJS Грешка:', err);
        let errorMsg = 'Възникна грешка при изпращането. Моля, опитайте отново по-късно.';
        
        if (err?.text?.includes('Variables size limit')) {
          errorMsg = 'Файлът е твърде голям за изпращане.';
        } else if (err?.text?.includes('limit reached')) {
          errorMsg = 'Лимитът за изпращане е достигнат. Моля, свържете се с нас директно.';
        }
        
        setError(errorMsg);
        setFormState('idle');
      }
    } catch (err) {
      console.error('Runtime Грешка:', err);
      setError('Възникна неочаквана грешка. Моля, проверете полетата.');
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
        {/* Background Visual */}
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
            {/* Standardized Hero Label - Left Aligned */}
            <div className="flex items-center justify-start gap-3 mb-8 page-animate-tag">
                <div className="h-[2px] w-12 bg-geo-yellow shadow-[0_0_15px_#FFCC00]"></div>
                <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">ПРИСЪЕДИНЕТЕ СЕ КЪМ ЕЛИТА</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 uppercase tracking-tighter drop-shadow-2xl max-w-5xl page-animate-title">
              НЕ ТЪРСИМ СЛУЖИТЕЛИ. <br/>
              ТЪРСИМ <span className="text-transparent bg-clip-text bg-gradient-to-r from-geo-yellow to-yellow-600">ХАРАКТЕРИ</span>.
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light max-w-4xl leading-relaxed border-l-4 border-geo-yellow pl-6 py-2 bg-black/30 backdrop-blur-sm page-animate-desc">
              GEONYX е технологична компания, маскирана като строителна. Тук няма да намериш мистрия и лопата. Ние работим с лазерни системи, таблети и химия. 
              <br/><br className="hidden md:block"/>
              Инвестираме в теб чрез нашата <span className="text-white font-bold">Геополимерна Академия</span>, защото никой не се ражда научен. Пътят от чирак до главен технолог е начертан и зависи само от твоите резултати. Няма шуробаджанащина, има само метрика.
            </p>

            <div className="flex justify-start page-animate-buttons">
                <a href="#positions">
                    <button className="h-12 px-8 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase group">
                        ВИЖ ПОЗИЦИИТЕ
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </a>
            </div>
        </div>
      </section>

      {/* 2. OPEN POSITIONS - ZIG ZAG LAYOUT */}
      <div id="positions" className="w-full bg-[#111]">
        
        {/* ROW 1: SALES (Image LEFT | Text RIGHT) */}
        <section className="flex flex-col lg:flex-row w-full min-h-[700px] border-b border-[#222]">
            {/* Image Column */}
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
                     <span className="text-white font-bold uppercase text-sm block">Търговия</span>
                </div>
            </div>

            {/* Text Column */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">
                            ТЪРГОВСКА СИЛА
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        ТЕХНИЧЕСКИ ТЪРГОВСКИ <br/> ПРЕДСТАВИТЕЛ
                    </h3>
                </div>

                <div className="space-y-8">
                    <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-[#333] pl-6">
                        Ти не си продавач на брошури. Твоята задача е да влезеш в най-тежките условия, да идентифицираш проблема и лично да направиш пилотен тест (Demo Application). Ти продаваш чрез демонстрация на сила, а не чрез сладки приказки.
                    </p>

                    <div>
                        <h4 className="text-white font-bold uppercase text-sm mb-4 tracking-wider">ИЗИСКВАНИЯ:</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-gray-400 text-sm font-medium">
                                <CheckCircle className="w-5 h-5 text-geo-yellow flex-shrink-0" /> Готовност за интензивно пътуване
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm font-medium">
                                <CheckCircle className="w-5 h-5 text-geo-yellow flex-shrink-0" /> Техническа грамотност
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm font-medium">
                                <CheckCircle className="w-5 h-5 text-geo-yellow flex-shrink-0" /> Желание да си 'изцапаш ръцете'
                            </li>
                        </ul>
                    </div>
                    
                    <div className="pt-6">
                        <a href="#apply">
                            <button className="h-12 px-8 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase group">
                                КАНДИДАТСТВАЙ СЕГА
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        {/* ROW 2: PRODUCTION (Text LEFT | Image RIGHT) */}
        <section className="flex flex-col lg:flex-row-reverse w-full min-h-[700px] border-b border-[#222]">
            {/* Image Column */}
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
                     <span className="text-white font-bold uppercase text-sm block">Производство</span>
                </div>
            </div>

            {/* Text Column */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#0F0F0F]">
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">
                            ПРОИЗВОДСТВЕНО СЪРЦЕ
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        ОПЕРАТОР ПРОИЗВОДСТВО <br/> & КОНТРОЛ
                    </h3>
                </div>

                <div className="space-y-8">
                    <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-[#333] pl-6">
                        Ти управляваш кухнята на GEONYX. Тук се ражда магията. Отговаряш суровините да се превърнат в перфектния продукт, управлявайки дозиращи системи и смесители. Няма място за 'на око' – всичко е до грам.
                    </p>

                    <div>
                        <h4 className="text-white font-bold uppercase text-sm mb-4 tracking-wider">ИЗИСКВАНИЯ:</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-gray-400 text-sm font-medium">
                                <CheckCircle className="w-5 h-5 text-geo-yellow flex-shrink-0" /> Желязна дисциплина
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm font-medium">
                                <CheckCircle className="w-5 h-5 text-geo-yellow flex-shrink-0" /> Педантичност към детайла
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm font-medium">
                                <CheckCircle className="w-5 h-5 text-geo-yellow flex-shrink-0" /> Физическа издръжливост
                            </li>
                        </ul>
                    </div>

                    <div className="pt-6">
                        <a href="#apply">
                            <button className="h-12 px-8 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase group">
                                КАНДИДАТСТВАЙ СЕГА
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        {/* ROW 3: R&D (Image LEFT | Text RIGHT) */}
        <section className="flex flex-col lg:flex-row w-full min-h-[700px] border-b border-[#222]">
            {/* Image Column */}
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
                     <span className="text-white font-bold uppercase text-sm block">Иновации</span>
                </div>
            </div>

            {/* Text Column */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center bg-[#141414]">
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="h-[2px] w-8 bg-geo-yellow"></div>
                        <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">
                            ИНОВАЦИОНЕН ЦЕНТЪР
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                        R&D ИНЖЕНЕР - <br/> ИНОВАЦИИ
                    </h3>
                </div>

                <div className="space-y-8">
                    <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-[#333] pl-6">
                        GEONYX не стои на едно място. Търсим визионер, който да оптимизира текущите формули и да разработва нови продукти. Ти си човекът, който казва 'това може да стане по-добре' и го доказва в лабораторията.
                    </p>

                    <div>
                        <h4 className="text-white font-bold uppercase text-sm mb-4 tracking-wider">ИЗИСКВАНИЯ:</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-gray-400 text-sm font-medium">
                                <CheckCircle className="w-5 h-5 text-geo-yellow flex-shrink-0" /> Познания по химия/строителни материали
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm font-medium">
                                <CheckCircle className="w-5 h-5 text-geo-yellow flex-shrink-0" /> Аналитично мислене
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm font-medium">
                                <CheckCircle className="w-5 h-5 text-geo-yellow flex-shrink-0" /> Експериментаторски дух
                            </li>
                        </ul>
                    </div>

                    <div className="pt-6">
                        <a href="#apply">
                            <button className="h-12 px-8 flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase group">
                                КАНДИДАТСТВАЙ СЕГА
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
                          <h2 className="text-3xl md:text-5xl font-black text-white uppercase mb-2">ГОТОВ ЛИ СИ?</h2>
                          <p className="text-gray-500 font-medium">Ако си познал себе си в редовете по-горе, действай.</p>
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
                              <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-tight">КАНДИДАТУРАТА Е ПРИЕТА!</h3>
                              <p className="text-gray-400 max-w-md mx-auto">
                                  Благодарим Ви! Моля изпратете Вашето CV на <span className="text-geo-yellow font-bold">office@geonyxgroup.com</span>, за да завършите процеса.
                              </p>
                              <button 
                                onClick={() => setFormState('idle')}
                                className="mt-8 text-geo-yellow font-bold uppercase text-sm hover:text-white transition-colors"
                              >
                                  Изпрати нова
                              </button>
                          </div>
                      ) : (
                          <form onSubmit={handleSubmit} className="space-y-8">
                              {/* Position Select */}
                              <div className="group">
                                  <label className="block text-xs font-bold text-geo-yellow uppercase tracking-wider mb-2">ИЗБЕРИ ПОЗИЦИЯ *</label>
                                  <div className="relative">
                                      <select 
                                        name="position"
                                        required
                                        defaultValue=""
                                        className="w-full bg-[#0a0a0a] border border-[#333] text-white py-4 px-4 appearance-none focus:outline-none focus:border-geo-yellow transition-colors font-bold uppercase"
                                      >
                                          <option value="" disabled>-- Моля Избери --</option>
                                          {POSITIONS.map(p => (
                                              <option key={p.id} value={p.id}>{p.title}</option>
                                          ))}
                                      </select>
                                      <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 rotate-90 pointer-events-none" />
                                  </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                  <div className="group">
                                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 group-focus-within:text-white transition-colors">ИМЕ И ФАМИЛИЯ *</label>
                                      <input 
                                        name="name"
                                        type="text" required
                                        className="w-full bg-transparent border-b border-[#333] py-2 text-white text-lg focus:outline-none focus:border-geo-yellow transition-colors placeholder-gray-700"
                                        placeholder="Иван Петров"
                                      />
                                  </div>
                                  <div className="group">
                                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 group-focus-within:text-white transition-colors">ТЕЛЕФОН *</label>
                                      <input 
                                        name="phone"
                                        type="tel" required
                                        className="w-full bg-transparent border-b border-[#333] py-2 text-white text-lg focus:outline-none focus:border-geo-yellow transition-colors placeholder-gray-700"
                                        placeholder="+359 888 ..."
                                      />
                                  </div>
                              </div>

                              <div className="group">
                                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 group-focus-within:text-white transition-colors">ИМЕЙЛ *</label>
                                  <input 
                                    name="email"
                                    type="email" required
                                    className="w-full bg-transparent border-b border-[#333] py-2 text-white text-lg focus:outline-none focus:border-geo-yellow transition-colors placeholder-gray-700"
                                    placeholder="name@mail.com"
                                  />
                              </div>

                              {/* The Filter Question */}
                              <div className="group">
                                  <label className="block text-xs font-bold text-geo-yellow uppercase tracking-wider mb-4 flex items-center gap-2">
                                      <HardHat className="w-4 h-4" /> С какво твоят опит ще направи GEONYX по-силен? *
                                  </label>
                                  <textarea 
                                    name="experience"
                                    required
                                    rows={4}
                                    className="w-full bg-[#0a0a0a] border border-[#333] p-4 text-white focus:outline-none focus:border-geo-yellow transition-colors resize-none"
                                    placeholder="Бъди конкретен. Не използвай шаблони."
                                  ></textarea>
                              </div>

                              {/* CV Instructions */}
                              <div className="border border-geo-yellow/30 bg-geo-yellow/5 p-6">
                                  <p className="text-geo-yellow font-bold uppercase text-sm tracking-wider mb-2 flex items-center gap-2">
                                      📎 ПРИКАЧИ CV
                                  </p>
                                  <p className="text-gray-300 text-sm leading-relaxed">
                                      Изпратете CV-то си директно на{' '}
                                      <a href="mailto:office@geonyxgroup.com" className="text-geo-yellow underline font-bold hover:text-white transition-colors">
                                          office@geonyxgroup.com
                                      </a>
                                      {' '}с тема: <span className="text-white">"Кандидатура — [Вашето Име]"</span>
                                  </p>
                              </div>

                              <div className="pt-6">
                                  <button 
                                    type="submit" 
                                    className="w-full h-12 px-8 flex items-center justify-center gap-2 bg-geo-yellow text-black border border-geo-yellow text-sm font-bold tracking-wide transition-all hover:bg-white hover:text-black hover:border-white uppercase group"
                                    disabled={formState === 'submitting'}
                                  >
                                      {formState === 'submitting' ? 'ИЗПРАЩАНЕ...' : 'ИЗПРАТИ КАНДИДАТУРА'}
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

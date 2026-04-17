
import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Button } from './Button';
import { Phone, Mail, MapPin, ScanLine, Ruler, Activity, CheckCircle, ArrowRight, MousePointer2, FileSearch, HardHat, ClipboardCheck, AlertTriangle, Square, CheckSquare } from 'lucide-react';

export const RequestInspectionPage: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [selectedSector, setSelectedSector] = useState<string>('');
  
  // State for multi-select threats
  const [selectedThreats, setSelectedThreats] = useState<string[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
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
      location: (form.elements.namedItem('location') as HTMLInputElement).value,
      sector: selectedSector,
      scale: (form.elements.namedItem('scale') as HTMLInputElement).value,
      risks: selectedThreats.join(', ')
    };

    try {
      await emailjs.send(
        'service_6oe57mj',
        'template_kcobhv4',
        templateParams,
        'fUu0EmANDHWfYyCK9'
      );
      setFormState('success');
    } catch (error) {
      console.error('Error:', error);
      alert('Възникна грешка при изпращането. Моля, опитайте отново или се свържете с нас директно.');
      setFormState('idle');
    }
  };

  const toggleThreat = (threat: string) => {
    setSelectedThreats(prev => 
      prev.includes(threat) 
        ? prev.filter(t => t !== threat)
        : [...prev, threat]
    );
  };

  const RISK_FACTORS = [
      "Екстремна механика и износване",
      "Химическа агресия (Киселини/Основи)",
      "Термален шок / Пожарна опасност",
      "Водно налягане / Влага",
      "ESD Защита / Хигиенни норми (HACCP)"
  ];

  return (
    <div className="min-h-screen bg-[#121212] font-sans text-gray-200 selection:bg-geo-yellow selection:text-black">
      <Navbar />

      <div className="relative min-h-screen flex flex-col pt-20">
        
        {/* BACKGROUND LAYER */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Dark Noise/Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
            
            {/* Holographic Gradient Blob */}
            <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-geo-yellow/5 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px]"></div>

            {/* Simulated Dot Matrix Map / Tech Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]"></div>
        </div>

        <div className="container mx-auto px-6 md:px-10 py-12 lg:py-20 relative z-10 flex-grow flex flex-col justify-center">
            
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
                
                {/* LEFT COLUMN: COPY & PROCESS */}
                <div className="w-full lg:w-5/12 pt-10">
                    <div className="flex items-center gap-3 mb-8">
                         <div className="h-[2px] w-8 bg-geo-yellow"></div>
                         <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">
                            ИНЖЕНЕРНА ДИАГНОСТИКА
                         </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-white leading-[1.1] mb-6 uppercase tracking-tight">
                        ЗАЯВКА ЗА <br/> ИНЖЕНЕРЕН ОДИТ И <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-geo-yellow to-yellow-600">СИСТЕМНА СПЕЦИФИКАЦИЯ</span>
                    </h1>

                    <p className="text-lg text-gray-400 font-medium border-l-2 border-[#333] pl-6 mb-12 max-w-lg leading-relaxed">
                        Нашите инженери ще анализират структурните изисквания, експлоатационната среда и специфичните рискове на вашия обект, за да проектират точната геополимерна матрица.
                    </p>

                    {/* PROCESS INDICATORS */}
                    <div className="space-y-8">
                        <div className="flex gap-5 group">
                            <div className="flex-col items-center hidden md:flex">
                                <div className="w-10 h-10 rounded-none border border-gray-600 bg-[#1a1a1a] flex items-center justify-center text-gray-400 group-hover:border-geo-yellow group-hover:text-geo-yellow transition-colors shadow-lg">
                                    <FileSearch className="w-5 h-5" />
                                </div>
                                <div className="w-[1px] h-full bg-gray-800 my-2"></div>
                            </div>
                            <div>
                                <h4 className="text-white font-bold uppercase text-sm mb-1 group-hover:text-geo-yellow transition-colors">01. ПЪРВИЧЕН АНАЛИЗ</h4>
                                <p className="text-gray-500 text-sm max-w-xs">Техническо интервю за дефиниране на типа индустрия, химическата или механична агресия и мащаба на проекта.</p>
                            </div>
                        </div>

                        <div className="flex gap-5 group">
                            <div className="flex-col items-center hidden md:flex">
                                <div className="w-10 h-10 rounded-none border border-gray-600 bg-[#1a1a1a] flex items-center justify-center text-gray-400 group-hover:border-geo-yellow group-hover:text-geo-yellow transition-colors shadow-lg">
                                    <HardHat className="w-5 h-5" />
                                </div>
                                <div className="w-[1px] h-full bg-gray-800 my-2"></div>
                            </div>
                            <div>
                                <h4 className="text-white font-bold uppercase text-sm mb-1 group-hover:text-geo-yellow transition-colors">02. СТРУКТУРЕН ОДИТ</h4>
                                <p className="text-gray-500 text-sm max-w-xs">Инженерно замерване на обекта – от якост на опън и влага на основата до оценка на термичните амплитуди и нормативните изисквания.</p>
                            </div>
                        </div>

                        <div className="flex gap-5 group">
                            <div className="flex-col items-center hidden md:flex">
                                <div className="w-10 h-10 rounded-none border border-gray-600 bg-[#1a1a1a] flex items-center justify-center text-gray-400 group-hover:border-geo-yellow group-hover:text-geo-yellow transition-colors shadow-lg">
                                    <ClipboardCheck className="w-5 h-5" />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-white font-bold uppercase text-sm mb-1 group-hover:text-geo-yellow transition-colors">03. СИСТЕМНА СПЕЦИФИКАЦИЯ</h4>
                                <p className="text-gray-500 text-sm max-w-xs">Изготвяне на детайлен протокол с хибридно решение (Method Statement), остойностяване и технологичен план за изпълнение.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: THE CONTROL PANEL FORM */}
                <div className="w-full lg:w-7/12">
                    <div className="bg-[#1A1A1A]/80 backdrop-blur-xl border border-[#333] p-8 md:p-12 shadow-2xl relative overflow-hidden">
                        {/* Decorative Tech Corners */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-geo-yellow"></div>
                        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-geo-yellow"></div>
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-geo-yellow"></div>
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-geo-yellow"></div>

                        {formState === 'success' ? (
                            <div className="h-[500px] flex flex-col items-center justify-center text-center">
                                <div className="w-24 h-24 bg-green-500/10 rounded-full border-2 border-green-500 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                                    <CheckCircle className="w-12 h-12 text-green-500" />
                                </div>
                                <h3 className="text-3xl font-black text-white uppercase mb-4 tracking-tight">ЗАЯВКАТА Е ПРИЕТА</h3>
                                <p className="text-gray-400 text-lg max-w-md mb-8">
                                    Вашият проект е регистриран в системата с висок приоритет. Наш инженер ще се свърже с вас до 24 часа.
                                </p>
                                <button 
                                    onClick={() => setFormState('idle')}
                                    className="text-geo-yellow font-bold uppercase border-b border-geo-yellow pb-1 hover:text-white hover:border-white transition-colors"
                                >
                                    Попълни нова форма
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Name */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">ИМЕ И ФАМИЛИЯ *</label>
                                        <input 
                                            name="name"
                                            type="text" 
                                            required
                                            onFocus={() => setFocusedField('name')}
                                            onBlur={() => setFocusedField(null)}
                                            className={`w-full bg-[#0a0a0a] border ${focusedField === 'name' ? 'border-geo-yellow shadow-[0_0_15px_rgba(255,204,0,0.1)]' : 'border-[#333]'} text-white p-4 outline-none transition-all duration-300 font-medium placeholder-gray-700`}
                                            placeholder="Иван Петров"
                                        />
                                    </div>

                                    {/* Company */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">КОМПАНИЯ / ОРГАНИЗАЦИЯ *</label>
                                        <input 
                                            name="company"
                                            type="text" 
                                            required
                                            onFocus={() => setFocusedField('company')}
                                            onBlur={() => setFocusedField(null)}
                                            className={`w-full bg-[#0a0a0a] border ${focusedField === 'company' ? 'border-geo-yellow shadow-[0_0_15px_rgba(255,204,0,0.1)]' : 'border-[#333]'} text-white p-4 outline-none transition-all duration-300 font-medium placeholder-gray-700`}
                                            placeholder="Име на компания"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Phone - Highlighted */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-geo-yellow uppercase tracking-wider flex items-center gap-2">
                                            <Phone className="w-3 h-3" /> КОРПОРАТИВЕН ТЕЛЕФОН *
                                        </label>
                                        <input 
                                            name="phone"
                                            type="tel" 
                                            required
                                            onFocus={() => setFocusedField('phone')}
                                            onBlur={() => setFocusedField(null)}
                                            className={`w-full bg-[#0a0a0a] border ${focusedField === 'phone' ? 'border-geo-yellow shadow-[0_0_15px_rgba(255,204,0,0.15)]' : 'border-[#333]'} text-white p-4 outline-none transition-all duration-300 font-bold text-lg tracking-wide placeholder-gray-700`}
                                            placeholder="+359..."
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                                            <Mail className="w-3 h-3" /> КОРПОРАТИВЕН ИМЕЙЛ *
                                        </label>
                                        <input 
                                            name="email"
                                            type="email" 
                                            required
                                            onFocus={() => setFocusedField('email')}
                                            onBlur={() => setFocusedField(null)}
                                            className={`w-full bg-[#0a0a0a] border ${focusedField === 'email' ? 'border-geo-yellow shadow-[0_0_15px_rgba(255,204,0,0.1)]' : 'border-[#333]'} text-white p-4 outline-none transition-all duration-300 font-medium placeholder-gray-700`}
                                            placeholder="office@company.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Location */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                                            <MapPin className="w-3 h-3" /> ЛОКАЦИЯ НА ПРОЕКТА *
                                        </label>
                                        <input 
                                            name="location"
                                            type="text" 
                                            required
                                            onFocus={() => setFocusedField('location')}
                                            onBlur={() => setFocusedField(null)}
                                            className={`w-full bg-[#0a0a0a] border ${focusedField === 'location' ? 'border-geo-yellow shadow-[0_0_15px_rgba(255,204,0,0.1)]' : 'border-[#333]'} text-white p-4 outline-none transition-all duration-300 font-medium placeholder-gray-700`}
                                            placeholder="Град / Индустриална зона"
                                        />
                                    </div>

                                    {/* Scale */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                                            <Ruler className="w-3 h-3" /> МАЩАБ НА ПРОЕКТА (m² / m³)
                                        </label>
                                        <input 
                                            name="scale"
                                            type="text"
                                            required
                                            onFocus={() => setFocusedField('scale')}
                                            onBlur={() => setFocusedField(null)}
                                            className={`w-full bg-[#0a0a0a] border ${focusedField === 'scale' ? 'border-geo-yellow' : 'border-[#333]'} text-white p-4 outline-none transition-all duration-300 font-medium placeholder-gray-700`}
                                            placeholder="напр. 2500 m2"
                                        />
                                    </div>
                                </div>

                                {/* Industry */}
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">ИНДУСТРИАЛЕН СЕКТОР *</label>
                                    <div className="relative">
                                        <select 
                                            name="industry"
                                            required
                                            value={selectedSector}
                                            onChange={(e) => setSelectedSector(e.target.value)}
                                            onFocus={() => setFocusedField('industry')}
                                            onBlur={() => setFocusedField(null)}
                                            className={`w-full bg-[#0a0a0a] border ${focusedField === 'industry' ? 'border-geo-yellow' : 'border-[#333]'} text-white p-4 outline-none transition-all duration-300 font-medium appearance-none cursor-pointer`}
                                        >
                                                <option value="" disabled>-- Изберете сектор --</option>
                                                <option value="heavy">Тежка Индустрия и Логистика</option>
                                                <option value="food">Храни, Напитки и Фармация</option>
                                                <option value="agro">Агро, Биогаз и Екология</option>
                                                <option value="water">Водна и Морска Инфраструктура</option>
                                                <option value="energy">Енергетика, Мини и Защита</option>
                                                <option value="infrastructure">Транспорт и Паркинги</option>
                                                <option value="construction">Градска Среда и Строителство</option>
                                                <option value="hightech">High-Tech Зони и Чисти Помещения</option>
                                                <option value="other">Друго специфично производство</option>
                                            </select>
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">▼</div>
                                        </div>
                                    </div>

                                {/* Threat Checkboxes (Multi-select) */}
                                <div className="space-y-4 pt-2">
                                    <label className="text-xs font-bold text-geo-yellow uppercase tracking-wider flex items-center gap-2">
                                        <AlertTriangle className="w-3 h-3" /> ГЛАВЕН РИСКОВ ФАКТОР (МОЖЕ ПОВЕЧЕ ОТ ЕДИН)
                                    </label>
                                    <div className="flex flex-col gap-3">
                                        {RISK_FACTORS.map((threat, index) => {
                                            const isSelected = selectedThreats.includes(threat);
                                            return (
                                                <div 
                                                    key={index} 
                                                    onClick={() => toggleThreat(threat)}
                                                    className="cursor-pointer group flex items-center gap-3"
                                                >
                                                    <div className={`w-5 h-5 border flex items-center justify-center transition-all duration-200 ${isSelected ? 'bg-geo-yellow border-geo-yellow' : 'bg-[#0a0a0a] border-gray-600 group-hover:border-white'}`}>
                                                        {isSelected && <CheckSquare className="w-3.5 h-3.5 text-black" />}
                                                    </div>
                                                    <span className={`text-sm uppercase font-bold transition-colors ${isSelected ? 'text-geo-yellow' : 'text-gray-400 group-hover:text-white'}`}>
                                                        {threat}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <input type="hidden" name="risks" value={selectedThreats.join(', ')} />
                                </div>

                                {/* CTA Button */}
                                <div className="pt-6">
                                    <Button 
                                        variant="primary" 
                                        type="submit" 
                                        disabled={formState === 'submitting'}
                                        className="w-full py-6 text-lg md:text-xl font-black uppercase tracking-widest bg-geo-yellow text-black border-none shadow-[0_0_30px_rgba(255,204,0,0.3)] hover:shadow-[0_0_50px_rgba(255,204,0,0.5)] hover:-translate-y-1 transition-all duration-300"
                                    >
                                        {formState === 'submitting' ? (
                                            <span className="flex items-center gap-3 animate-pulse">
                                                Обработка...
                                            </span>
                                        ) : (
                                            <span className="flex items-center justify-center gap-3">
                                                ИЗПРАТИ ЗАЯВКА ЗА ОДИТ <ArrowRight className="w-6 h-6" strokeWidth={3} />
                                            </span>
                                        )}
                                    </Button>
                                    <p className="text-center text-[10px] text-gray-600 uppercase font-bold mt-4 tracking-wider">
                                        ГАРАНТИРАНА КОНФИДЕНЦИАЛНОСТ (NDA) • РЕАКЦИЯ ДО 24 ЧАСА
                                    </p>
                                </div>

                            </form>
                        )}
                    </div>
                </div>

            </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

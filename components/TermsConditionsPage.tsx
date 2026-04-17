import React, { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Scale, FileText, BadgeDollarSign, AlertTriangle, ShieldAlert, BrainCircuit, Clock, CheckCircle } from 'lucide-react';

export const TermsConditionsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0F0F0F] font-sans text-gray-200 selection:bg-geo-yellow selection:text-black">
      <Navbar />

      <section className="pt-32 pb-20 px-6 md:px-10 container mx-auto max-w-5xl min-h-screen flex flex-col justify-center">
        
        {/* HEADER */}
        <div className="text-center mb-16 relative">
            {/* Background Icon Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
                <FileText size={300} strokeWidth={0.5} />
            </div>

            <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-1 rounded-none mb-8 backdrop-blur-md relative z-10">
                <Scale className="w-4 h-4 text-geo-yellow" />
                <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">ЮРИДИЧЕСКИ ПРОТОКОЛ 08</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-6 relative z-10">
                ОБЩИ УСЛОВИЯ <br/> И ГАРАНЦИИ
            </h1>
            
            <h3 className="text-xl md:text-2xl text-geo-yellow font-bold uppercase tracking-wide relative z-10">
                РЕГЛАМЕНТ ЗА ИЗПЪЛНЕНИЕ, КАЧЕСТВО И ОТГОВОРНОСТ.
            </h3>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 relative z-10">
            
            {/* BLOCK 01 */}
            <div className="bg-[#141414] border border-[#333] p-8 hover:border-geo-yellow transition-colors group">
                <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity flex justify-between items-start">
                    <span className="text-4xl font-black text-white/10 block">01</span>
                    <BadgeDollarSign className="w-10 h-10 text-geo-yellow" strokeWidth={1.5} />
                </div>
                <h4 className="text-white font-bold uppercase text-lg mb-4 border-b border-[#333] pb-4">
                    ФИНАНСОВА РАМКА И СОБСТВЕНОСТ
                </h4>
                <ul className="space-y-4 text-gray-400 text-sm">
                    <li>
                        <strong className="text-white block mb-1">Валидност:</strong>
                        Офертите са валидни 30 календарни дни. След този срок подлежат на преизчисление спрямо борсовите цени на химикалите.
                    </li>
                    <li>
                        <strong className="text-white block mb-1">Схема на плащане:</strong>
                        50% Аванс (Старт) / 40% Доставка на материал / 10% Приемане.
                    </li>
                    <li>
                        <strong className="text-white block mb-1">Запазване на собствеността:</strong>
                        Положената настилка и вложените материали остават собственост на "ГЕОНИКС ГРУП" ООД до момента на заплащане на 100% от дължимата сума. При неплащане, Изпълнителят запазва правото си на демонтаж или химическо отстраняване на системата.
                    </li>
                </ul>
            </div>

            {/* BLOCK 02 */}
            <div className="bg-[#141414] border border-[#333] p-8 hover:border-red-500 transition-colors group">
                <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity flex justify-between items-start">
                    <span className="text-4xl font-black text-white/10 block">02</span>
                    <AlertTriangle className="w-10 h-10 text-red-500" strokeWidth={1.5} />
                </div>
                <h4 className="text-white font-bold uppercase text-lg mb-4 border-b border-[#333] pb-4">
                    ОСНОВА И СКРИТИ ДЕФЕКТИ <span className="text-red-500 text-xs ml-2">(Критично!)</span>
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                    Отговорността за качеството на бетоновата основа е изцяло на Възложителя.
                    <br/><span className="text-white font-bold">Изисквания:</span> Бетон клас минимум C20/25, влажност под 4%, равна повърхност.
                </p>
                <div className="bg-red-500/10 border-l-2 border-red-500 p-3">
                    <p className="text-xs text-gray-300 font-bold uppercase mb-2">Изключване на отговорност:</p>
                    <p className="text-xs text-gray-400 mb-1">"ГЕОНИКС ГРУП" ООД НЕ носи отговорност за дефекти, възникнали вследствие на:</p>
                    <ul className="list-disc list-inside text-xs text-gray-500 space-y-1">
                        <li>Липса на хидроизолация и поява на капилярна (избиваща) влага от земята.</li>
                        <li>Конструктивни пукнатини на сградата или слягане на фундамента.</li>
                        <li>Скрити маслени джобове в дълбочина на стария бетон.</li>
                    </ul>
                </div>
            </div>

            {/* BLOCK 03 */}
            <div className="bg-[#141414] border border-[#333] p-8 hover:border-geo-yellow transition-colors group">
                <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity flex justify-between items-start">
                    <span className="text-4xl font-black text-white/10 block">03</span>
                    <ShieldAlert className="w-10 h-10 text-geo-yellow" strokeWidth={1.5} />
                </div>
                <h4 className="text-white font-bold uppercase text-lg mb-4 border-b border-[#333] pb-4">
                    ЕКСПЛОАТАЦИОННИ ГРАНИЦИ
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                    Гаранцията е валидна само при спазване на зададените експлоатационни норми.
                </p>
                <ul className="space-y-3 text-gray-400 text-sm">
                    <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-geo-yellow mt-0.5 flex-shrink-0" />
                        <span><strong className="text-white">Химия и Температура:</strong> Гаранцията покрива само химикали и температури, изрично описани в Техническото задание.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-geo-yellow mt-0.5 flex-shrink-0" />
                        <span><strong className="text-white">Механичен удар:</strong> Щети от падащи предмети, влачене на палети или нерегламентиран трафик на тежка техника не са обект на гаранционно обслужване.</span>
                    </li>
                </ul>
            </div>

            {/* BLOCK 04 */}
            <div className="bg-[#141414] border border-[#333] p-8 hover:border-geo-yellow transition-colors group">
                <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity flex justify-between items-start">
                    <span className="text-4xl font-black text-white/10 block">04</span>
                    <BrainCircuit className="w-10 h-10 text-geo-yellow" strokeWidth={1.5} />
                </div>
                <h4 className="text-white font-bold uppercase text-lg mb-4 border-b border-[#333] pb-4">
                    ИНТЕЛЕКТУАЛНА СОБСТВЕНОСТ
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed text-justify">
                    Всички рецептури (GEONYX® Formulas), технологични карти и методи на нанасяне са търговска тайна и интелектуална собственост на "ГЕОНИКС ГРУП" ООД. Всякакъв опит за химически анализ (Reverse Engineering) или копиране на технологията ще бъде преследван с цялата строгост на закона.
                </p>
            </div>

             {/* BLOCK 05 (Spans full width on desktop) */}
             <div className="bg-[#141414] border border-[#333] p-8 hover:border-geo-yellow transition-colors group md:col-span-2">
                <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity flex justify-between items-start">
                    <span className="text-4xl font-black text-white/10 block">05</span>
                    <Clock className="w-10 h-10 text-geo-yellow" strokeWidth={1.5} />
                </div>
                <h4 className="text-white font-bold uppercase text-lg mb-4 border-b border-[#333] pb-4">
                    СРОКОВЕ И ФОРСМАЖОР
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed text-justify">
                    Технологичното време за полимеризация е 24 часа (при 20°C). Влизането в обекта преди този срок анулира гаранцията. Сроковете за изпълнение спират да текат при температури под +5°C или влажност на въздуха над 80%, за да се гарантира качеството на реакцията.
                </p>
            </div>

        </div>

        {/* LEGAL FOOTER NOTE */}
        <div className="text-center border-t border-[#222] pt-8">
            <p className="text-xs text-gray-600 font-medium uppercase tracking-wide">
                Приетите общи условия са неразделна част от Договора за изработка.
                <br className="md:hidden" /> За връзка с правен отдел: <a href="mailto:office@geonyxgroup.com" className="text-geo-yellow hover:text-white transition-colors">office@geonyxgroup.com</a>
            </p>
        </div>

      </section>

      <Footer />
    </div>
  );
};
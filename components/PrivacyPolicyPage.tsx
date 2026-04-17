import React, { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ShieldCheck, Lock, Database, FileCheck, Scale } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
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
                <Scale size={300} strokeWidth={0.5} />
            </div>

            <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-1 rounded-none mb-8 backdrop-blur-md relative z-10">
                <ShieldCheck className="w-4 h-4 text-geo-yellow" />
                <span className="text-geo-yellow font-bold uppercase tracking-[0.2em] text-xs">ЮРИДИЧЕСКИ ПРОТОКОЛ 07</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-6 relative z-10">
                ПОЛИТИКА ЗА <br/> ПОВЕРИТЕЛНОСТ
            </h1>
            
            <h3 className="text-xl md:text-2xl text-geo-yellow font-bold uppercase tracking-wide relative z-10">
                СИГУРНОСТТА НА ВАШАТА ИНФОРМАЦИЯ Е ГАРАНТИРАНА.
            </h3>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 relative z-10">
            
            {/* BLOCK 01 */}
            <div className="bg-[#141414] border border-[#333] p-8 hover:border-geo-yellow transition-colors group">
                <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                    <span className="text-4xl font-black text-white/10 block mb-2">01</span>
                    <ShieldCheck className="w-10 h-10 text-geo-yellow" strokeWidth={1.5} />
                </div>
                <h4 className="text-white font-bold uppercase text-lg mb-4 border-b border-[#333] pb-4">
                    АДМИНИСТРАТОР
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed text-justify">
                    Вашите данни се управляват от <span className="text-white font-bold">"ГЕОНИКС ГРУП" ООД</span>, в качеството си на администратор, спазвайки стриктно Регламент (ЕС) 2016/679 (GDPR). Ние носим пълна юридическа отговорност за защитата на вашата информация.
                </p>
            </div>

            {/* BLOCK 02 */}
            <div className="bg-[#141414] border border-[#333] p-8 hover:border-geo-yellow transition-colors group">
                <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                    <span className="text-4xl font-black text-white/10 block mb-2">02</span>
                    <Lock className="w-10 h-10 text-geo-yellow" strokeWidth={1.5} />
                </div>
                <h4 className="text-white font-bold uppercase text-lg mb-4 border-b border-[#333] pb-4">
                    ИНДУСТРИАЛНА ТАЙНА (NDA)
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed text-justify">
                    Разбираме спецификата на работа в защитени обекти и производства. "ГЕОНИКС ГРУП" ООД гарантира пълна конфиденциалност. Никаква част от вашите чертежи, технологични схеми или снимки от обекта няма да бъде споделяна с трети страни без вашето изрично писмено съгласие.
                </p>
            </div>

            {/* BLOCK 03 */}
            <div className="bg-[#141414] border border-[#333] p-8 hover:border-geo-yellow transition-colors group">
                <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                    <span className="text-4xl font-black text-white/10 block mb-2">03</span>
                    <Database className="w-10 h-10 text-geo-yellow" strokeWidth={1.5} />
                </div>
                <h4 className="text-white font-bold uppercase text-lg mb-4 border-b border-[#333] pb-4">
                    ЦЕЛ НА ДАННИТЕ
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    Ние събираме единствено техническа и контактна информация, необходима за:
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                    <li className="flex items-start gap-2">
                        <FileCheck className="w-4 h-4 text-geo-yellow mt-0.5 flex-shrink-0" />
                        Изготвяне на прецизни технически задания и оферти.
                    </li>
                    <li className="flex items-start gap-2">
                        <FileCheck className="w-4 h-4 text-geo-yellow mt-0.5 flex-shrink-0" />
                        Издаване на гаранционни документи.
                    </li>
                    <li className="flex items-start gap-2">
                        <FileCheck className="w-4 h-4 text-geo-yellow mt-0.5 flex-shrink-0" />
                        Осигуряване на следгаранционен сервиз.
                    </li>
                </ul>
            </div>

        </div>

        {/* LEGAL FOOTER NOTE */}
        <div className="text-center border-t border-[#222] pt-8">
            <p className="text-xs text-gray-600 font-medium uppercase tracking-wide">
                Документът е валиден съгласно Общите условия на "ГЕОНИКС ГРУП" ООД. 
                <br className="md:hidden" /> За връзка с правен отдел: <a href="mailto:office@geonyxgroup.com" className="text-geo-yellow hover:text-white transition-colors">office@geonyxgroup.com</a>
            </p>
        </div>

      </section>

      <Footer />
    </div>
  );
};
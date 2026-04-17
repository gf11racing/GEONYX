
import React from 'react';

export const ManifestoBanner: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-[#1A1A1A] border-y border-[#333]">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Yellow Accent Line - Top */}
        <div className="w-24 h-1 bg-geo-yellow mb-10 shadow-[0_0_10px_rgba(255,204,0,0.3)]"></div>
        
        {/* Main Headline */}
        <h2 className="text-3xl md:text-4xl font-black text-white mb-8 leading-tight uppercase tracking-tight">
          Инженерство <br className="hidden md:block"/> <span className="text-geo-yellow">отвъд бетона</span>.
        </h2>
        
        {/* Subtext Paragraph */}
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
          Стандартните настилки са слабото звено в индустрията. 
          Ние създаваме монолитна, химически устойчива броня, която издържа там, 
          където обикновеният бетон и епоксидът се провалят.
        </p>
      </div>
    </section>
  );
};

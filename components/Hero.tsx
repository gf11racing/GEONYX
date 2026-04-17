import React, { useRef, useEffect } from 'react';
import { Button } from './Button';
import { Download, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Hero: React.FC = () => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    video.defaultMuted = true;
    video.muted = true;
    
    // Only play if data is already available, otherwise let autoPlay/onLoadedData handle it
    if (video.readyState >= 2) {
      video.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col bg-[#050505]">
      
      {/* 1. BACKGROUND LAYER (Video) */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <video 
          ref={videoRef}
          src="https://storage.googleapis.com/ai-studio-bucket-49842818672-us-west1/services/geonyx/GEONYX-video.mp4"
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          poster="/GEONYX-bec2.webp"
          className="absolute inset-0 w-full h-full object-cover opacity-60 transition-opacity duration-700"
          onLoadedData={() => videoRef.current?.play().catch(() => {})}
        />

        {/* Gradient Overlay Only - NO GRID */} 
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent"></div>
      </div>

      {/* 2. MAIN CONTENT (Left Aligned, Precision Typography) */}
      <div className="relative z-10 container mx-auto px-6 text-left flex-1 flex flex-col justify-center py-20 md:py-32">
        <div className="max-w-5xl">
          
          {/* Top Label - TECHNICAL STYLE (Line + Text) */}
          <div className="flex items-center justify-start gap-3 mb-8 page-animate-tag">
             <div className="h-[2px] w-12 bg-geo-yellow shadow-[0_0_15px_#FFCC00]"></div>
             <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                ИНДУСТРИАЛНИ ИНОВАЦИИ
             </span>
          </div>

          {/* H1: HEAVY INDUSTRIAL STYLE */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 uppercase tracking-tighter drop-shadow-2xl page-animate-title">
            ИНДУСТРИАЛНИ <br/>
            ГЕОПОЛИМЕРНИ <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-geo-yellow to-yellow-600">РЕШЕНИЯ</span>
          </h1>

          {/* Description: Bordered Box Style */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 font-light max-w-4xl leading-relaxed border-l-4 border-geo-yellow pl-4 md:pl-6 py-2 bg-black/30 backdrop-blur-sm page-animate-desc">
            Разработваме усъвършенствани материали за тежката индустрия, инфраструктурата и минното дело. 
            <span className="text-white font-bold block mt-1">Гарантирана устойчивост на киселини, огън и време.</span>
          </p>

          {/* Action Buttons: COMPACT & SHARP */}
          <div className="flex flex-col sm:flex-row gap-4 page-animate-buttons">
            <Button
              variant="primary"
              className="h-12 px-6 text-xs md:text-sm font-bold bg-geo-yellow text-black border-none hover:bg-white transition-all shadow-[0_0_20px_rgba(255,204,0,0.15)] rounded-none uppercase tracking-wider flex items-center justify-center gap-2"
              onClick={() => navigate('/sectors')}
            >
              ИНДУСТРИАЛНИ СЕКТОРИ <ArrowRight className="w-4 h-4" />
            </Button>

            <button 
              className="h-12 px-6 flex items-center justify-center gap-2 border border-white/30 text-white text-xs md:text-sm font-bold tracking-wide transition-all hover:bg-geo-yellow hover:text-black hover:border-geo-yellow uppercase"
              onClick={() => navigate('/technical-maps')}
            >
              <Download className="w-4 h-4" />
              ТЕХНИЧЕСКИ СПЕЦИФИКАЦИИ
            </button>
          </div>
        </div>
      </div>

      {/* 3. SLIM STATUS LINE (Bottom) */}
      <div className="relative z-20 w-full border-t border-white/10 bg-[#0F0F0F]/90 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-start items-center gap-x-6 md:gap-x-12 gap-y-4">
            
            <div className="flex items-center gap-3 group cursor-default">
               <span className="text-gray-500 font-bold uppercase text-[10px] tracking-widest">ХИМИЯ</span>
               <span className="text-geo-yellow font-mono font-bold text-sm tracking-tight">pH 1-14</span>
            </div>
            
            <div className="w-[1px] h-4 bg-white/10 hidden sm:block"></div>

            <div className="flex items-center gap-3 group cursor-default">
               <span className="text-gray-500 font-bold uppercase text-[10px] tracking-widest">ЯКОСТ</span>
               <span className="text-geo-yellow font-mono font-bold text-sm tracking-tight">{'>'} 80 MPa</span>
            </div>

            <div className="w-[1px] h-4 bg-white/10 hidden sm:block"></div>

            <div className="flex items-center gap-3 group cursor-default">
               <span className="text-gray-500 font-bold uppercase text-[10px] tracking-widest">ОГЪН</span>
               <span className="text-geo-yellow font-mono font-bold text-sm tracking-tight">Клас А1</span>
            </div>

            <div className="w-[1px] h-4 bg-white/10 hidden sm:block"></div>

            <div className="flex items-center gap-3 group cursor-default">
               <span className="text-gray-500 font-bold uppercase text-[10px] tracking-widest">ЕКО</span>
               <span className="text-geo-yellow font-mono font-bold text-sm tracking-tight">-80% CO2</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

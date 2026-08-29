import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';

interface HeroContentProps { onExplorePeaks?: () => void; onTheAscent?: () => void; }
export const HeroContent: React.FC<HeroContentProps> = ({ onExplorePeaks, onTheAscent }) => (
  <div className="relative z-20 w-full max-w-5xl px-6 sm:px-10 lg:px-16 pb-12 sm:pb-16 md:pb-20 text-left">
    <div className="flex flex-col items-start">
      <div className="flex flex-wrap items-center gap-3 text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-stone-400 mb-5">
        <span className="text-sky-300 font-semibold">EXPEDITION 047</span><span>•</span><span>HIMALAYA</span><span>•</span><span className="text-sky-200">8,849 M</span>
      </div>
      <h1 className="font-display text-[3.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[9.5rem] font-extrabold tracking-tight leading-[.9] text-white">BEYOND</h1>
      <h2 className="font-display text-[2.8rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[8.2rem] font-extrabold tracking-tight leading-[.9] text-[#94A3B8]">THE SUMMIT</h2>
      <p className="text-stone-300/85 text-sm sm:text-base md:text-lg leading-relaxed mt-7 max-w-xl">The mountain is not conquered.<br/>It is entered, studied, respected —<br/><span className="text-stone-400">and eventually, left.</span></p>
      <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-5">
        <button type="button" onClick={onExplorePeaks} className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-[#F1F5F9] text-[#050608] text-xs font-semibold tracking-[.24em] uppercase"><span>EXPLORE PEAKS</span><ArrowRight className="w-4 h-4"/></button>
        <button type="button" onClick={onTheAscent} className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-transparent text-white border border-white/30 text-xs font-medium tracking-[.24em] uppercase"><span>THE ASCENT</span><Compass className="w-4 h-4"/></button>
      </div>
    </div>
  </div>
);

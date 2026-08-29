import React,{useState} from 'react';
import { motion } from 'motion/react';
import { Navigation } from './Navigation';
import { MountainScene } from './MountainScene';
import { SnowParticles } from './SnowParticles';
import { HeroContent } from './HeroContent';
import { PeaksModal } from './PeaksModal';
import { AscentModal } from './AscentModal';
export const HeroSection:React.FC=()=>{const [peaks,setPeaks]=useState(false);const [ascent,setAscent]=useState(false);return <section id="hero-section" className="relative w-full h-[100svh] min-h-[640px] overflow-hidden bg-[#050608] flex flex-col justify-between"><MountainScene/><SnowParticles/><Navigation onExploreClick={()=>setPeaks(true)} onPeaksClick={()=>setPeaks(true)} onAscentClick={()=>setAscent(true)}/><div className="flex-1 flex items-end"><HeroContent onExplorePeaks={()=>setPeaks(true)} onTheAscent={()=>setAscent(true)}/></div><motion.div className="absolute bottom-8 right-8 z-20 text-xs tracking-[.3em] text-stone-300">SCROLL ↓</motion.div><PeaksModal isOpen={peaks} onClose={()=>setPeaks(false)}/><AscentModal isOpen={ascent} onClose={()=>setAscent(false)}/></section>};

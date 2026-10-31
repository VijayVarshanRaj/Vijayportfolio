import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, ChevronDown } from 'lucide-react';
import { profileData } from '../data/profile';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#090909]"
    >
      {/* ============================================================
          LAYER 1: Dark background, subtle grid, and soft ambient glows (z-0)
         ============================================================ */}
      <div className="absolute inset-0 bg-[#090909] z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-subtle opacity-40 z-0 pointer-events-none" />
      
      {/* Soft ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] max-w-full bg-[#D7192D] rounded-full blur-[200px] opacity-15 pointer-events-none z-0" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#4A0711] rounded-full blur-[120px] opacity-30 pointer-events-none z-0" />

      {/* Main Centered Hero Wrapper */}
      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center text-center">

        {/* Top Role Pill / Badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#111111] border border-[#303030] shadow-lg mb-6 sm:mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#D7192D] animate-ping" />
          <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.2em] text-[#D7192D] uppercase">
            {profileData.role}
          </span>
        </motion.div>

        {/* ============================================================
            CENTRAL COMPOSITION STAGE (Layers 2, 3, and 4)
           ============================================================ */}
        <div className="relative w-full flex items-center justify-center min-h-[380px] sm:min-h-[460px] md:min-h-[520px] lg:min-h-[560px]">

          {/* ============================================================
              LAYER 2: Red geometric logo symbol with soft red glow (z-10)
              Centered behind upper body / chest
             ============================================================ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 0.95, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[48%] z-10 pointer-events-none select-none"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] lg:w-[440px] lg:h-[440px] flex items-center justify-center">
              {/* Soft red glow directly behind logo */}
              <div className="absolute inset-0 bg-[#D7192D] rounded-full blur-[70px] opacity-35" />
              <div className="absolute inset-10 bg-[#4A0711] rounded-full blur-[40px] opacity-60" />

              {/* 6-Point Solid Geometric Cross Emblem SVG */}
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full text-[#D7192D] drop-shadow-[0_0_35px_rgba(215,25,45,0.6)]"
                fill="currentColor"
              >
                {/* Arm 1 & 4 (Vertical) */}
                <rect x="78" y="10" width="44" height="180" rx="22" opacity="0.95" />
                {/* Arm 2 & 5 (60 deg rotation) */}
                <rect x="78" y="10" width="44" height="180" rx="22" transform="rotate(60 100 100)" opacity="0.95" />
                {/* Arm 3 & 6 (120 deg rotation) */}
                <rect x="78" y="10" width="44" height="180" rx="22" transform="rotate(120 100 100)" opacity="0.95" />
              </svg>
            </div>
          </motion.div>

          {/* ============================================================
              LAYER 3: Large "BUILDING INTELLIGENCE" headline (z-20)
              In front of red symbol, but behind the portrait
             ============================================================ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-20 w-full"
            aria-hidden="true"
          >
            <span className="font-condensed font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10.5rem] tracking-tight text-white uppercase leading-[0.88] drop-shadow-[0_10px_35px_rgba(0,0,0,0.85)]">
              BUILDING
            </span>
            <span className="font-condensed font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10.5rem] tracking-tight text-[#F5F5F5] uppercase leading-[0.88] drop-shadow-[0_10px_35px_rgba(0,0,0,0.85)]">
              INTELLIGENCE
            </span>
          </motion.div>

          {/* ============================================================
              LAYER 4: Transparent portrait in the foreground (z-30)
              Clean cut-out, no black box, no box shadow, no dark borders,
              natural bottom fade into background via CSS mask-image
             ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-30 flex items-end justify-center pointer-events-none select-none"
          >
            <img
              src="/images/vijay-cutout.png"
              alt="Vijay Varshan Raj G J"
              className="h-[360px] sm:h-[440px] md:h-[500px] lg:h-[550px] w-auto max-w-full object-contain object-bottom select-none pointer-events-none"
              style={{
                maskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)',
              }}
              loading="eager"
            />
          </motion.div>

        </div>

        {/* ============================================================
            LAYER 5: Name and subtitle at the bottom (z-40)
            Unobstructed, crisp typography
           ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative z-40 mt-4 sm:mt-6 text-center px-4"
        >
          <h1 className="font-condensed font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-wide uppercase">
            VIJAY VARSHAN <span className="text-[#D7192D]">RAJ G J</span>
          </h1>
          <p className="font-mono text-xs sm:text-sm tracking-[0.22em] text-[#A6A6A6] uppercase mt-1.5 font-bold">
            ENGINEERING IMPACT WITH MACHINE LEARNING & WEB ARCHITECTURES
          </p>
        </motion.div>

        {/* Supporting Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative z-40 text-sm sm:text-base text-[#A6A6A6] leading-relaxed max-w-2xl mt-4 px-4"
        >
          "{profileData.intro}"
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="relative z-40 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mt-8"
        >
          <a
            href="#projects"
            className="px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-white bg-[#D7192D] hover:bg-[#b51425] rounded transition-all duration-300 shadow-[0_0_25px_rgba(215,25,45,0.4)] hover:shadow-[0_0_35px_rgba(215,25,45,0.7)] flex items-center gap-2 group"
          >
            <span>EXPLORE MY WORK</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>

          <a
            href="/Resume.pdf"
            download="Vijay_Varshan_Raj_Resume.pdf"
            className="px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-[#F5F5F5] bg-[#191919] hover:bg-[#202020] border border-[#303030] hover:border-[#D7192D] rounded transition-all duration-300 flex items-center gap-2 group"
          >
            <Download className="w-4 h-4 text-[#D7192D] group-hover:-translate-y-0.5 transition-transform" />
            <span>DOWNLOAD RESUME</span>
          </a>

          <a
            href="#contact"
            className="px-5 py-3.5 text-xs sm:text-sm font-semibold tracking-wider text-[#A6A6A6] hover:text-white bg-transparent hover:bg-[#191919] border border-transparent hover:border-[#303030] rounded transition-all flex items-center gap-1.5 group"
          >
            <span>LET'S GET IN TOUCH</span>
            <span className="text-[#D7192D] group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>

        {/* Modern Popping Scroll Interaction (NOT continuously rotating circle!) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative z-40 mt-12 flex flex-col items-center"
        >
          <a
            href="#about"
            className="group flex flex-col items-center gap-2 focus:outline-none"
            aria-label="Scroll to About Section"
          >
            {/* Popping Indicator Element */}
            <div className="w-10 h-10 rounded-full bg-[#191919] border border-[#303030] group-hover:border-[#D7192D] flex items-center justify-center animate-pop transition-all cursor-pointer">
              <ChevronDown className="w-5 h-5 text-[#D7192D] group-hover:translate-y-0.5 transition-transform" />
            </div>
            <span className="text-[10px] font-mono tracking-widest text-[#A6A6A6] group-hover:text-white uppercase transition-colors">
              SCROLL
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

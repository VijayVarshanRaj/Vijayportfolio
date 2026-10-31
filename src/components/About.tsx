import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Layers, Cpu, ArrowRight } from 'lucide-react';
import { profileData } from '../data/profile';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#111111] relative overflow-hidden border-t border-[#303030]">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#D7192D]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#4A0711]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Eyebrow & Heading */}
        <div className="flex flex-col items-center lg:items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#191919] border border-[#303030] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D7192D]" />
            <span className="text-xs font-mono tracking-widest text-[#A6A6A6] uppercase">
              ABOUT ME
            </span>
          </div>
          <h2 className="font-condensed font-black text-4xl sm:text-5xl text-white tracking-tight uppercase">
            WHO AM I<span className="text-[#D7192D]">?</span>
          </h2>
        </div>

        {/* Two-Column Layout: Portrait Card Left, Text & Focus Cards Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* LEFT: Portrait Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center order-1"
          >
            <div className="relative w-full max-w-sm">
              {/* Subtle Crimson Corner Accents */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#D7192D] pointer-events-none z-20" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#D7192D] pointer-events-none z-20" />

              {/* Outer Card with Thin Border */}
              <div className="relative rounded-xl overflow-hidden bg-[#191919] border border-[#303030] hover:border-[#D7192D]/70 transition-all duration-500 shadow-2xl">
                
                {/* Photo Container */}
                <div className="aspect-[4/5] w-full overflow-hidden bg-[#090909]">
                  <img
                    src={profileData.assets.portrait}
                    alt="Vijay Varshan Raj G J - Profile"
                    className="w-full h-full object-cover object-top filter grayscale contrast-105 hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />
                  {/* Subtle Dark Gradient at bottom of image */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#191919] via-[#191919]/60 to-transparent pointer-events-none" />
                </div>

                {/* Footer Bar */}
                <div className="p-4 bg-[#191919] border-t border-[#303030]">
                  <p className="font-condensed font-bold text-base text-white uppercase tracking-wide">
                    {profileData.name}
                  </p>
                  <p className="text-xs text-[#A6A6A6] font-mono mt-0.5">
                    {profileData.education.degree}
                  </p>
                  <p className="text-[11px] text-[#D7192D] font-mono mt-0.5">
                    {profileData.education.institution}
                  </p>
                </div>

              </div>
            </div>
          </motion.div>

          {/* RIGHT: Text & Compact Focus Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col order-2"
          >
            {/* Main Statement */}
            <h3 className="font-condensed font-black text-3xl sm:text-4xl text-white tracking-tight uppercase leading-tight mb-4">
              BUILDING WITH CODE. <br />
              <span className="text-[#D7192D]">THINKING WITH AI.</span>
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#A6A6A6] leading-relaxed mb-8">
              {profileData.aboutText}
            </p>

            {/* Three Compact Focus Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              
              {/* Card 1: Core Focus */}
              <div className="bg-[#191919] border border-[#303030] hover:border-[#D7192D]/60 rounded-lg p-4 transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <Brain className="w-4 h-4 text-[#D7192D]" />
                  <span className="text-[10px] font-mono tracking-widest text-[#D7192D] uppercase font-bold">
                    CORE FOCUS
                  </span>
                </div>
                <h4 className="font-bold text-sm text-white">
                  AI/ML Engineering
                </h4>
                <p className="text-[11px] text-[#A6A6A6] font-mono mt-1">
                  Deep learning, CNN & LSTM models, and explainability.
                </p>
              </div>

              {/* Card 2: Development */}
              <div className="bg-[#191919] border border-[#303030] hover:border-[#D7192D]/60 rounded-lg p-4 transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <Layers className="w-4 h-4 text-[#D7192D]" />
                  <span className="text-[10px] font-mono tracking-widest text-[#D7192D] uppercase font-bold">
                    DEVELOPMENT
                  </span>
                </div>
                <h4 className="font-bold text-sm text-white">
                  Full-Stack Applications
                </h4>
                <p className="text-[11px] text-[#A6A6A6] font-mono mt-1">
                  Flask backends, RESTful APIs, and modern frontends.
                </p>
              </div>

              {/* Card 3: Approach */}
              <div className="bg-[#191919] border border-[#303030] hover:border-[#D7192D]/60 rounded-lg p-4 transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <Cpu className="w-4 h-4 text-[#D7192D]" />
                  <span className="text-[10px] font-mono tracking-widest text-[#D7192D] uppercase font-bold">
                    APPROACH
                  </span>
                </div>
                <h4 className="font-bold text-sm text-white">
                  Build, Test, Improve
                </h4>
                <p className="text-[11px] text-[#A6A6A6] font-mono mt-1">
                  Disciplined engineering lifecycle with verified metrics.
                </p>
              </div>

            </div>

            {/* Action Link to Projects */}
            <div>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#D7192D] hover:text-white uppercase transition-colors"
              >
                <span>EXPLORE FEATURED PROJECTS</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

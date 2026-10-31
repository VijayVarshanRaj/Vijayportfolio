import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { industryExperience, academicEducation } from '../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#111111] relative border-t border-[#303030]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#191919] border border-[#303030] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D7192D]" />
            <span className="text-xs font-mono tracking-widest text-[#A6A6A6] uppercase">
              CAREER & ACADEMIA
            </span>
          </div>
          <h2 className="font-condensed font-black text-4xl sm:text-5xl text-white tracking-tight uppercase">
            EXPERIENCE & <span className="text-[#D7192D]">EDUCATION</span>
          </h2>
          <p className="text-sm text-[#A6A6A6] max-w-xl mt-3 font-mono">
            Professional experience and academic foundations for intelligent software engineering.
          </p>
        </div>

        {/* Two Balanced Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* LEFT COLUMN: Industry Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            {/* Column Title */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded bg-[#191919] border border-[#303030] flex items-center justify-center text-[#D7192D]">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-condensed font-black text-2xl text-white uppercase tracking-wide">
                  INDUSTRY EXPERIENCE
                </h3>
                <span className="text-xs font-mono text-[#A6A6A6]">
                  Professional Engineering Internship
                </span>
              </div>
            </div>

            {/* Experience Card */}
            <div className="flex-grow bg-[#191919] border border-[#303030] hover:border-[#D7192D]/70 rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl group">
              <div>
                {/* Header: Role & Period */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-[#252525]">
                  <div>
                    <span className="px-2.5 py-0.5 rounded bg-[#D7192D]/20 text-[#D7192D] text-[10px] font-mono font-bold tracking-wider uppercase inline-block mb-1.5">
                      INTERNSHIP
                    </span>
                    <h4 className="font-condensed font-bold text-2xl text-white uppercase tracking-wide">
                      {industryExperience.role}
                    </h4>
                    <p className="text-sm font-semibold text-gray-300 mt-0.5">
                      {industryExperience.company}
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end text-xs font-mono text-[#A6A6A6] gap-1">
                    <span className="flex items-center gap-1.5 text-white">
                      <Calendar className="w-3.5 h-3.5 text-[#D7192D]" />
                      <span>{industryExperience.period}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#D7192D]" />
                      <span>{industryExperience.location}</span>
                    </span>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {industryExperience.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-[#111111] border border-[#303030] text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Scope & Responsibilities */}
                <div className="space-y-3 mb-6">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#737373] uppercase block mb-1">
                    DOCUMENTED SCOPE & TASKS
                  </span>
                  {industryExperience.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-3">
                      <div className="mt-1 w-4 h-4 rounded-full bg-[#D7192D]/10 border border-[#D7192D]/30 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3 h-3 text-[#D7192D]" />
                      </div>
                      <p className="text-xs sm:text-sm text-[#A6A6A6] leading-relaxed">
                        {pt}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Metrics Chips */}
              <div className="pt-4 border-t border-[#252525] grid grid-cols-3 gap-2">
                {industryExperience.metrics?.map((m, mIdx) => (
                  <div key={mIdx} className="bg-[#111111] p-2.5 rounded border border-[#252525] text-center">
                    <span className="font-condensed font-black text-xl text-[#D7192D] block">
                      {m.value}
                    </span>
                    <span className="text-[10px] font-mono text-[#A6A6A6] block leading-tight mt-0.5">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>

          {/* RIGHT COLUMN: Academic Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col"
          >
            {/* Column Title */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded bg-[#191919] border border-[#303030] flex items-center justify-center text-[#D7192D]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-condensed font-black text-2xl text-white uppercase tracking-wide">
                  ACADEMIC EDUCATION
                </h3>
                <span className="text-xs font-mono text-[#A6A6A6]">
                  Undergraduate Engineering
                </span>
              </div>
            </div>

            {/* Education Card */}
            <div className="flex-grow bg-[#191919] border border-[#303030] hover:border-[#D7192D]/70 rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl group">
              <div>
                {/* Header: Degree & CGPA Badge */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4 pb-4 border-b border-[#252525]">
                  <div>
                    <span className="px-2.5 py-0.5 rounded bg-[#111111] border border-[#303030] text-[#A6A6A6] text-[10px] font-mono font-bold tracking-wider uppercase inline-block mb-1.5">
                      B.TECH UNDERGRADUATE
                    </span>
                    <h4 className="font-condensed font-bold text-2xl text-white uppercase tracking-wide">
                      {academicEducation.degree}
                    </h4>
                    <p className="text-sm font-semibold text-gray-300 mt-0.5">
                      {academicEducation.institution}
                    </p>
                    <p className="text-xs text-[#A6A6A6] font-mono mt-0.5">
                      {academicEducation.location} • {academicEducation.period}
                    </p>
                  </div>

                  {/* Prominent CGPA Badge */}
                  <div className="bg-[#111111] border border-[#D7192D]/50 rounded-lg p-3 text-center sm:text-right shrink-0">
                    <span className="text-[10px] font-mono tracking-widest text-[#737373] uppercase block">
                      CGPA
                    </span>
                    <span className="font-condensed font-black text-3xl text-[#D7192D] block leading-none my-1">
                      {academicEducation.cgpa}
                    </span>
                    <span className="text-[9px] font-mono text-[#A6A6A6] block">
                      Verified from Resume
                    </span>
                  </div>
                </div>

                {/* Coursework Pills */}
                <div className="mb-6">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#737373] uppercase block mb-2">
                    CORE COMPUTER SCIENCE COURSEWORK
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {academicEducation.coursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2.5 py-1 text-xs font-mono rounded bg-[#111111] border border-[#303030] text-gray-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Academic Highlights */}
                <div className="space-y-3 mb-6">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#737373] uppercase block mb-1">
                    ACADEMIC & RESEARCH HIGHLIGHTS
                  </span>
                  {academicEducation.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-3">
                      <div className="mt-1 w-4 h-4 rounded-full bg-[#D7192D]/10 border border-[#D7192D]/30 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3 h-3 text-[#D7192D]" />
                      </div>
                      <p className="text-xs sm:text-sm text-[#A6A6A6] leading-relaxed">
                        {hl}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status Footer */}
              <div className="pt-4 border-t border-[#252525] flex items-center justify-between text-xs font-mono">
                <span className="text-[#A6A6A6]">Expected Graduation: <strong className="text-white">May 2027</strong></span>
                <span className="text-[#D7192D]">Final-Year Student</span>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

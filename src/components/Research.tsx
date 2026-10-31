import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award, CheckCircle2, Clock, ShieldCheck, BookOpen } from 'lucide-react';
import { publications } from '../data/publications';
import { certifications } from '../data/certifications';

export const Research: React.FC = () => {
  const featuredPublication = publications.find(p => p.id === 'iccmc-2025');
  const underReviewPublication = publications.find(p => p.id === 'iccit-2025');

  return (
    <section id="research" className="py-24 bg-[#111111] relative border-t border-[#303030]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#191919] border border-[#303030] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D7192D]" />
            <span className="text-xs font-mono tracking-widest text-[#A6A6A6] uppercase">
              RESEARCH & RECOGNITION
            </span>
          </div>
          <h2 className="font-condensed font-black text-4xl sm:text-5xl text-white tracking-tight uppercase">
            RESEARCH & <span className="text-[#D7192D]">CERTIFICATIONS</span>
          </h2>
          <p className="text-sm text-[#A6A6A6] max-w-xl mt-3 font-mono">
            Research contributions, conference presentations, and technical credentials.
          </p>
        </div>

        {/* Research Cards Section */}
        <div className="space-y-6 mb-16 max-w-5xl mx-auto">

          {/* FEATURED RESEARCH CARD: IEEE Published */}
          {featuredPublication && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="bg-[#191919] border border-[#D7192D]/60 hover:border-[#D7192D] rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-xl relative overflow-hidden group"
            >
              {/* Corner Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D7192D]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                {/* Status Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#D7192D]/20 border border-[#D7192D]/50 text-[#D7192D] text-xs font-mono font-bold tracking-wider uppercase">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{featuredPublication.statusBadge}</span>
                    </span>
                    <span className="text-xs font-mono text-[#A6A6A6]">
                      {featuredPublication.year}
                    </span>
                  </div>

                  {featuredPublication.doiOrUrl && (
                    <a
                      href={featuredPublication.doiOrUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#111111] hover:bg-[#D7192D] border border-[#303030] hover:border-[#D7192D] text-xs font-mono font-bold text-white transition-all shadow-sm group/btn"
                    >
                      <span>VIEW ON IEEE XPLORE</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-condensed font-black text-2xl sm:text-3xl text-white uppercase tracking-wide mb-2 group-hover:text-gray-100 transition-colors">
                  {featuredPublication.title}
                </h3>

                {/* Venue */}
                <div className="flex items-center gap-2 text-xs font-mono text-[#D7192D] font-semibold mb-4">
                  <BookOpen className="w-4 h-4 shrink-0" />
                  <span>{featuredPublication.venue}</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#A6A6A6] leading-relaxed mb-6">
                  {featuredPublication.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#252525]">
                  {featuredPublication.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-[#111111] border border-[#252525] text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* SECOND RESEARCH ITEM: Under Review */}
          {underReviewPublication && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#191919] border border-[#303030] hover:border-[#D7192D]/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-xl group"
            >
              {/* Status Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#202020] border border-[#3a3a3a] text-amber-400 text-xs font-mono font-bold tracking-wider uppercase">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{underReviewPublication.statusBadge}</span>
                  </span>
                  <span className="text-xs font-mono text-[#A6A6A6]">
                    {underReviewPublication.year}
                  </span>
                </div>

                <span className="text-[11px] font-mono text-[#737373]">
                  Peer Review in Progress
                </span>
              </div>

              {/* Title */}
              <h3 className="font-condensed font-black text-xl sm:text-2xl text-white uppercase tracking-wide mb-2 group-hover:text-gray-100 transition-colors">
                {underReviewPublication.title}
              </h3>

              {/* Venue */}
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400/90 font-semibold mb-4">
                <Award className="w-4 h-4 shrink-0" />
                <span>{underReviewPublication.venue}</span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#A6A6A6] leading-relaxed mb-6">
                {underReviewPublication.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#252525]">
                {underReviewPublication.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 text-xs font-mono rounded bg-[#111111] border border-[#252525] text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

        </div>

        {/* VERIFIED CERTIFICATIONS GRID (Responsive 3-Column / Grid) */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <ShieldCheck className="w-4 h-4 text-[#D7192D]" />
            <h3 className="font-condensed font-bold text-xl text-white uppercase tracking-wide">
              VERIFIED TECHNICAL CREDENTIALS
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-[#191919] border border-[#303030] hover:border-[#D7192D]/70 rounded-xl p-5 flex flex-col justify-between transition-all duration-300 shadow-md group"
              >
                <div>
                  {/* Category Pill */}
                  <span className="px-2 py-0.5 rounded bg-[#111111] border border-[#252525] text-[10px] font-mono text-[#D7192D] uppercase tracking-wider inline-block mb-3">
                    {cert.category}
                  </span>

                  {/* Certification Name */}
                  <h4 className="font-bold text-sm text-white group-hover:text-gray-100 leading-snug mb-3">
                    {cert.name}
                  </h4>

                  {/* Relevant Technical Skills */}
                  {cert.skills && cert.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {cert.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#111111] border border-[#252525] text-[#A6A6A6]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Issuing Platform Footer */}
                <div className="pt-3 border-t border-[#252525] mt-4 flex items-center justify-between text-[11px] font-mono text-[#A6A6A6]">
                  <span className="tracking-wide">{cert.issuer}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D7192D]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

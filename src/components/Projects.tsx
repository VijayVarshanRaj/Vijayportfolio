import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Github, 
  X, 
  BarChart3, 
  CheckCircle2, 
  Eye, 
  ExternalLink
} from 'lucide-react';
import { projects, projectFilterCategories, ProjectItem } from '../data/projects';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Filter projects dynamically
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'ALL') return projects;
    return projects.filter((proj) =>
      proj.allCategories.includes(selectedCategory)
    );
  }, [selectedCategory]);

  return (
    <section id="projects" className="py-24 bg-[#090909] relative border-t border-[#303030]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#111111] border border-[#303030] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D7192D]" />
            <span className="text-xs font-mono tracking-widest text-[#A6A6A6] uppercase">
              PORTFOLIO SHOWCASE
            </span>
          </div>
          <h2 className="font-condensed font-black text-4xl sm:text-5xl text-white tracking-tight uppercase">
            FEATURED <span className="text-[#D7192D]">PROJECTS</span>
          </h2>
          <p className="text-sm text-[#A6A6A6] max-w-xl mt-3 font-mono">
            Intelligent systems, computer vision, and software engineering.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {projectFilterCategories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-[#D7192D] text-white font-bold shadow-[0_0_15px_rgba(215,25,45,0.4)]'
                    : 'bg-[#111111] text-[#A6A6A6] border border-[#303030] hover:text-white hover:border-[#D7192D]/50'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Project Cards (Wide Two-Column Cards inspired by reference screenshot) */}
        <div className="space-y-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.article
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                key={project.id}
                className="bg-[#111111] border border-[#303030] hover:border-[#D7192D]/70 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-xl group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                  {/* LEFT COLUMN: Project Technical Visual Dashboard */}
                  <div className="lg:col-span-5 bg-[#191919] border border-[#252525] rounded-xl p-5 overflow-hidden relative">
                    
                    {/* Visual 1: XAI X-Ray Analysis Dashboard */}
                    {project.visualType === 'xai-dashboard' && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-[#252525]">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[11px] font-mono text-[#F5F5F5] uppercase">
                              XAI INFERENCE DASHBOARD
                            </span>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-[#111111] text-[10px] font-mono text-[#D7192D] border border-[#D7192D]/40">
                            98% Accuracy
                          </span>
                        </div>

                        {/* Interactive-looking Radiograph Explainability Panel */}
                        <div className="bg-[#111111] rounded-lg p-3.5 border border-[#252525]">
                          <div className="flex items-center justify-between text-[11px] font-mono text-[#A6A6A6] mb-2">
                            <span>Target: Chest Radiograph</span>
                            <span className="text-emerald-400 font-bold">Pneumonia: Negative</span>
                          </div>

                          {/* Simulated Grad-CAM Heatmap Visualization */}
                          <div className="relative h-28 rounded bg-[#090909] border border-[#303030] overflow-hidden flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D7192D]/35 to-transparent blur-md" />
                            <div className="relative z-10 flex flex-col items-center text-center">
                              <Eye className="w-6 h-6 text-[#D7192D] mb-1" />
                              <span className="text-[10px] font-mono text-gray-300">
                                Grad-CAM + LIME Heatmap Active
                              </span>
                              <span className="text-[9px] font-mono text-[#737373]">
                                5,216 Benchmark Samples
                              </span>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-2 mt-3 pt-2 border-t border-[#252525] text-[10px] font-mono">
                            <div>
                              <span className="text-[#737373] block">Inference:</span>
                              <span className="text-white font-bold">&lt; 3.0s Multi-User</span>
                            </div>
                            <div className="text-right">
                              <span className="text-[#737373] block">Review Overhead:</span>
                              <span className="text-[#D7192D] font-bold">-45% Reduced</span>
                            </div>
                          </div>
                        </div>

                        <div className="text-[10px] font-mono text-[#737373] text-center">
                          Illustrative Clinical Decision Demo
                        </div>
                      </div>
                    )}

                    {/* Visual 2: FreshLens AI Freshness Panel */}
                    {project.visualType === 'freshlens-panel' && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-[#252525]">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[11px] font-mono text-[#F5F5F5] uppercase">
                              FRESHNESS CLASSIFICATION
                            </span>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-[#111111] text-[10px] font-mono text-[#D7192D] border border-[#D7192D]/40">
                            MobileNetV2
                          </span>
                        </div>

                        {/* Freshness Classification Metrics */}
                        <div className="bg-[#111111] rounded-lg p-3.5 border border-[#252525] space-y-3">
                          <div>
                            <div className="flex justify-between text-[11px] font-mono mb-1">
                              <span className="text-gray-300">Fresh (Grade A):</span>
                              <span className="text-emerald-400 font-bold">96.4%</span>
                            </div>
                            <div className="w-full bg-[#191919] h-2 rounded-full overflow-hidden">
                              <div className="bg-emerald-500 h-full rounded-full" style={{ width: '96.4%' }} />
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between text-[11px] font-mono mb-1">
                              <span className="text-gray-400">Spoiled / Degraded:</span>
                              <span className="text-rose-400 font-bold">3.6%</span>
                            </div>
                            <div className="w-full bg-[#191919] h-2 rounded-full overflow-hidden">
                              <div className="bg-rose-500 h-full rounded-full" style={{ width: '3.6%' }} />
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#252525] text-[10px] font-mono">
                            <div>
                              <span className="text-[#737373] block">Dataset:</span>
                              <span className="text-white font-bold">4,000+ Curated</span>
                            </div>
                            <div className="text-right">
                              <span className="text-[#737373] block">Sensor Setup:</span>
                              <span className="text-[#D7192D] font-bold">60% Faster</span>
                            </div>
                          </div>
                        </div>

                        <div className="text-[10px] font-mono text-[#737373] text-center">
                          Illustrative Demo • OpenCV & Transfer Learning
                        </div>
                      </div>
                    )}

                    {/* Visual 3: Hybrid IDS Anomaly Timeline */}
                    {project.visualType === 'ids-timeline' && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-[#252525]">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#D7192D] animate-ping" />
                            <span className="text-[11px] font-mono text-[#F5F5F5] uppercase">
                              TELEMETRY ANOMALY ENGINE
                            </span>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-[#111111] text-[10px] font-mono text-emerald-400 border border-emerald-500/30">
                            Normal Stream
                          </span>
                        </div>

                        {/* Streamlit Anomaly Waveform */}
                        <div className="bg-[#111111] rounded-lg p-3.5 border border-[#252525]">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-condensed font-black text-2xl text-white">
                              &lt; 200ms
                            </span>
                            <span className="text-[10px] font-mono text-[#A6A6A6]">
                              Latency
                            </span>
                          </div>

                          {/* Anomaly Wave Graphic */}
                          <div className="h-16 relative flex items-center justify-center">
                            <svg viewBox="0 0 300 80" className="w-full h-full text-[#D7192D]">
                              <path
                                d="M 0 40 Q 40 40, 70 30 T 130 50 T 180 15 T 220 65 T 260 40 T 300 35"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                              />
                            </svg>
                          </div>

                          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#252525] text-[10px] font-mono">
                            <div>
                              <span className="text-[#737373] block">Benchmark:</span>
                              <span className="text-white font-bold">2.8M+ Records</span>
                            </div>
                            <div className="text-right">
                              <span className="text-[#737373] block">Accuracy:</span>
                              <span className="text-emerald-400 font-bold">99.2% Binary</span>
                            </div>
                          </div>
                        </div>

                        <div className="text-[10px] font-mono text-[#737373] text-center">
                          Illustrative Demo • LSTM + Finite Automata
                        </div>
                      </div>
                    )}

                  </div>

                  {/* RIGHT COLUMN: Project Details & Meta */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#D7192D]/20 text-[#D7192D] text-[10px] font-mono font-bold uppercase tracking-wider">
                          {project.category}
                        </span>
                        <span className="text-xs font-mono text-[#737373]">
                          {project.period}
                        </span>
                        <span className="text-xs font-mono text-gray-400 ml-auto">
                          {project.status}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className="font-condensed font-black text-2xl sm:text-3xl text-white uppercase tracking-wide group-hover:text-gray-100 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono text-[#D7192D] mt-0.5 mb-3 font-semibold">
                        {project.subtitle}
                      </p>

                      {/* Short Description */}
                      <p className="text-xs sm:text-sm text-[#A6A6A6] leading-relaxed mb-4">
                        {project.solution}
                      </p>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 text-xs font-mono rounded bg-[#191919] border border-[#252525] text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions Row */}
                    <div className="pt-4 border-t border-[#252525] flex items-center justify-between gap-4">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-white hover:text-[#D7192D] transition-colors py-2 uppercase cursor-pointer group/btn"
                      >
                        <span>VIEW PROJECT DETAILS</span>
                        <span className="w-6 h-6 rounded-full bg-[#191919] border border-[#303030] group-hover/btn:border-[#D7192D] group-hover/btn:bg-[#D7192D] flex items-center justify-center transition-all">
                          <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:text-white" />
                        </span>
                      </button>

                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded bg-[#191919] hover:bg-[#202020] border border-[#303030] hover:border-[#D7192D] text-white transition-colors"
                            aria-label={`${project.title} GitHub`}
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded bg-[#191919] hover:bg-[#202020] border border-[#303030] hover:border-[#D7192D] text-white transition-colors"
                            aria-label={`${project.title} Live Link`}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                  </div>

                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Detailed Modal Deep Dive */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-[#111111] border border-[#303030] hover:border-[#D7192D]/70 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative"
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 p-2 rounded-full bg-[#191919] border border-[#303030] text-[#A6A6A6] hover:text-white hover:border-[#D7192D] transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Header */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-condensed font-black text-xl text-[#D7192D]">
                    {selectedProject.number}
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-[#191919] border border-[#303030] text-[10px] font-mono text-[#A6A6A6] uppercase">
                    {selectedProject.category}
                  </span>
                </div>

                <h3 className="font-condensed font-black text-3xl text-white uppercase mb-1">
                  {selectedProject.title}
                </h3>
                <p className="text-xs font-mono text-[#D7192D] mb-6">
                  {selectedProject.subtitle} • {selectedProject.period}
                </p>

                {/* Problem & Solution Blocks */}
                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-lg bg-[#191919] border border-[#252525]">
                    <h4 className="text-xs font-mono font-bold text-[#D7192D] uppercase tracking-wider mb-1.5">
                      PROBLEM BEING SOLVED
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-[#191919] border border-[#252525]">
                    <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-1.5">
                      TECHNICAL APPROACH & SOLUTION
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3">
                      {selectedProject.solution}
                    </p>
                    <div className="space-y-2 pt-2 border-t border-[#252525]">
                      {selectedProject.technicalApproach.map((item, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2 text-xs text-[#A6A6A6]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D7192D] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Performance Benchmarks */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono font-bold text-gray-200 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-[#D7192D]" />
                    <span>VERIFIED PERFORMANCE BENCHMARKS</span>
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {selectedProject.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="p-3 rounded bg-[#090909] border border-[#252525] text-center">
                        <span className="font-condensed font-black text-xl text-[#D7192D] block">
                          {m.value}
                        </span>
                        <span className="text-[10px] text-[#A6A6A6] font-mono leading-tight block mt-1">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono font-bold text-[#737373] uppercase tracking-wider mb-2">
                    TECHNOLOGY STACK
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded bg-[#191919] border border-[#252525] text-xs font-mono text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-[#252525]">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2 rounded bg-[#191919] hover:bg-[#202020] text-xs font-mono text-gray-300 transition-colors"
                  >
                    CLOSE
                  </button>

                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#D7192D] hover:bg-[#b51425] text-xs font-bold text-white transition-all shadow-md shadow-[#D7192D]/30"
                  >
                    <Github className="w-4 h-4" />
                    <span>VIEW ON GITHUB</span>
                  </a>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

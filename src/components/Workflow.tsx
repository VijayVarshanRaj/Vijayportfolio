import React from 'react';
import { motion } from 'framer-motion';
import { workflowSteps } from '../data/workflow';
import { Search, Compass, Code, BarChart2, Rocket } from 'lucide-react';

export const Workflow: React.FC = () => {
  const getStepIcon = (step: string) => {
    switch (step) {
      case '01':
        return <Search className="w-5 h-5 text-[#D7192D]" />;
      case '02':
        return <Compass className="w-5 h-5 text-[#D7192D]" />;
      case '03':
        return <Code className="w-5 h-5 text-[#D7192D]" />;
      case '04':
        return <BarChart2 className="w-5 h-5 text-[#D7192D]" />;
      case '05':
        return <Rocket className="w-5 h-5 text-[#D7192D]" />;
      default:
        return null;
    }
  };

  return (
    <section id="workflow" className="py-24 bg-[#090909] relative border-t border-[#303030]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#111111] border border-[#303030] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D7192D]" />
            <span className="text-xs font-mono tracking-widest text-[#A6A6A6] uppercase">
              ENGINEERING METHODOLOGY
            </span>
          </div>
          <h2 className="font-condensed font-black text-4xl sm:text-5xl text-white tracking-tight uppercase">
            HOW I BUILD <span className="text-[#D7192D]">INTELLIGENT SYSTEMS</span>
          </h2>
          <p className="text-sm text-[#A6A6A6] max-w-xl mt-3 font-mono">
            A disciplined, reproducible five-stage execution pipeline from scoping to deployment.
          </p>
        </div>

        {/* Workflow Timeline (Horizontal on Desktop, Vertical on Mobile) */}
        <div className="relative">
          
          {/* Horizontal Connecting Line on Large Screens */}
          <div className="hidden lg:block absolute top-[52px] left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-[#D7192D]/20 via-[#D7192D] to-[#D7192D]/20 pointer-events-none z-0" />

          {/* 5-Stage Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {workflowSteps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#191919] border border-[#303030] hover:border-[#D7192D]/70 rounded-xl p-5 flex flex-col justify-between transition-all duration-300 shadow-xl group"
              >
                <div>
                  {/* Top: Step Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-condensed font-black text-3xl text-[#D7192D] group-hover:scale-105 transition-transform">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#111111] border border-[#303030] group-hover:border-[#D7192D]/50 flex items-center justify-center transition-colors">
                      {getStepIcon(step.step)}
                    </div>
                  </div>

                  {/* Stage Name & Summary */}
                  <h3 className="font-condensed font-bold text-xl text-white uppercase tracking-wide mb-1">
                    {step.name}
                  </h3>
                  <p className="text-xs font-mono text-[#D7192D] font-semibold mb-3">
                    {step.summary}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-[#A6A6A6] leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables / Scope */}
                <div className="pt-3 border-t border-[#252525] space-y-1.5">
                  {step.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="text-[11px] font-mono text-[#737373] flex items-start gap-1.5">
                      <span className="text-[#D7192D]">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

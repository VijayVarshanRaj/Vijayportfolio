import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, CheckCircle2, Filter } from 'lucide-react';
import { skillsData, skillCategories } from '../data/skills';

export const Skills: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL GROUPS');

  const filteredSkills = useMemo(() => {
    return skillsData.filter((skill) => {
      const matchesSearch =
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'ALL GROUPS' || skill.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id="skills" className="py-24 bg-[#090909] relative border-t border-[#303030]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#111111] border border-[#303030] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D7192D]" />
            <span className="text-xs font-mono tracking-widest text-[#A6A6A6] uppercase">
              ENGINEERING ARSENAL
            </span>
          </div>
          <h2 className="font-condensed font-black text-4xl sm:text-5xl text-white tracking-tight uppercase">
            THE TOOLS BEHIND <span className="text-[#D7192D]">THE IDEAS</span>
          </h2>
          <p className="text-sm text-[#A6A6A6] max-w-xl mt-3 font-mono">
            A technical toolkit spanning AI/ML, software development, and computer science.
          </p>
        </div>

        {/* Interactive Controls Bar: Search + Category Pills */}
        <div className="mb-10 space-y-5">
          {/* Search Input Bar */}
          <div className="max-w-xl mx-auto relative">
            <Search className="w-4 h-4 text-[#A6A6A6] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. Python, React)..."
              className="w-full pl-11 pr-4 py-3 rounded-lg bg-[#111111] border border-[#303030] focus:border-[#D7192D] text-sm text-[#F5F5F5] placeholder-[#737373] transition-colors focus:outline-none shadow-inner"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-[#A6A6A6] hover:text-white"
              >
                CLEAR
              </button>
            )}
          </div>

          {/* Category Filter Pills (Scrollable horizontally on mobile) */}
          <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#737373] pr-2 shrink-0 hidden sm:flex">
              <Filter className="w-3.5 h-3.5 text-[#D7192D]" />
              <span>FILTER:</span>
            </div>
            {skillCategories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all whitespace-nowrap shrink-0 ${
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
        </div>

        {/* Dynamic Skill Cards Grid */}
        {filteredSkills.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            <AnimatePresence>
              {filteredSkills.map((skill) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  key={skill.name}
                  className="bg-[#191919] border border-[#303030] hover:border-[#D7192D]/70 rounded-lg p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_20px_rgba(215,25,45,0.15)] group"
                >
                  <div>
                    {/* Top Row: Name + Neutral/Verified Indicator */}
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-bold text-base text-[#F5F5F5] group-hover:text-white transition-colors">
                        {skill.name}
                      </h3>
                      {skill.verified && (
                        <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-[#111111] border border-[#303030] text-[10px] font-mono text-[#D7192D] shrink-0">
                          <CheckCircle2 className="w-3 h-3 text-[#D7192D]" />
                          <span>Verified</span>
                        </div>
                      )}
                    </div>

                    {/* One-Line Description */}
                    <p className="text-xs text-[#A6A6A6] leading-relaxed line-clamp-2 mb-4">
                      {skill.description}
                    </p>
                  </div>

                  {/* Bottom: Category Tag */}
                  <div className="pt-3 border-t border-[#252525] flex items-center justify-between text-[11px] font-mono">
                    <span className="text-[#737373] uppercase tracking-wider">
                      {skill.category}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D7192D]/60 group-hover:bg-[#D7192D] transition-colors" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* Empty State */
          <div className="py-16 text-center bg-[#111111] border border-[#303030] rounded-xl p-8 max-w-md mx-auto">
            <Search className="w-8 h-8 text-[#A6A6A6] mx-auto mb-3 opacity-50" />
            <h3 className="font-bold text-base text-white">No matching skills found</h3>
            <p className="text-xs text-[#A6A6A6] font-mono mt-1">
              Try adjusting your search query or switching categories.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('ALL GROUPS');
              }}
              className="mt-4 px-4 py-2 rounded bg-[#191919] border border-[#303030] hover:border-[#D7192D] text-xs font-mono text-white transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

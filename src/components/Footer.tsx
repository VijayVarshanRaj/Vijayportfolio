import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { profileData } from '../data/profile';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'RESEARCH', href: '#research' },
    { name: 'WORKFLOW', href: '#workflow' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <footer className="bg-[#050505] border-t border-[#303030] py-14 relative z-10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-10 border-b border-[#202020]">
          
          {/* Brand & Monogram (5 Cols) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded bg-[#111111] border border-[#303030] flex items-center justify-center">
                <span className="font-condensed font-black text-lg text-[#D7192D]">
                  {profileData.monogram}
                </span>
              </div>
              <div>
                <span className="font-condensed font-bold text-lg text-white uppercase tracking-wider block">
                  {profileData.name}
                </span>
                <span className="text-[10px] font-mono text-[#A6A6A6] uppercase tracking-widest block">
                  {profileData.role}
                </span>
              </div>
            </div>
            <p className="text-xs text-[#A6A6A6] max-w-sm font-mono mt-1">
              "{profileData.tagline}"
            </p>
          </div>

          {/* Quick Nav (4 Cols) */}
          <div className="md:col-span-4 flex flex-wrap gap-x-4 gap-y-2 text-xs font-mono text-[#A6A6A6]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Socials & Back to Top (3 Cols) */}
          <div className="md:col-span-3 flex items-center md:justify-end gap-3">
            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#111111] hover:bg-[#191919] border border-[#303030] hover:border-[#D7192D] text-gray-300 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#111111] hover:bg-[#191919] border border-[#303030] hover:border-[#D7192D] text-gray-300 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profileData.contact.email}`}
              className="p-2.5 rounded-lg bg-[#111111] hover:bg-[#191919] border border-[#303030] hover:border-[#D7192D] text-gray-300 hover:text-white transition-colors"
              aria-label="Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-[#D7192D]/15 hover:bg-[#D7192D] border border-[#D7192D]/40 text-[#D7192D] hover:text-white transition-all ml-2 cursor-pointer"
              aria-label="Back to Top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-gray-500 gap-3">
          <p>© {currentYear} {profileData.name}. All verified rights reserved.</p>
          <p className="flex items-center gap-1.5 text-gray-500">
            <span>Engineered in</span>
            <span className="text-[#D7192D]">Black, White & Crimson Red</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

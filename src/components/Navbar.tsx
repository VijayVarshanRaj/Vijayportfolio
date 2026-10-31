import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Download } from 'lucide-react';
import { profileData } from '../data/profile';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090909]/95 backdrop-blur-md border-b border-[#303030] py-3 shadow-2xl shadow-black/90'
          : 'bg-[#090909]/60 backdrop-blur-sm py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Monogram & Title */}
          <a
            href="#home"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Vijay Varshan Raj G J - Home"
          >
            <div className="w-10 h-10 rounded bg-[#111111] border border-[#303030] group-hover:border-[#D7192D] flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(215,25,45,0.4)]">
              <span className="font-condensed font-black text-xl tracking-wider text-white group-hover:text-[#D7192D] transition-colors">
                {profileData.monogram}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-wider text-[#F5F5F5] group-hover:text-white uppercase leading-none">
                VIJAY VARSHAN RAJ
              </span>
              <span className="text-[10px] tracking-widest text-[#A6A6A6] font-mono mt-1">
                AI/ML ENGINEER
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs font-semibold tracking-widest transition-all duration-200 rounded relative group ${
                    isActive
                      ? 'text-white'
                      : 'text-[#A6A6A6] hover:text-[#F5F5F5]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#D7192D] shadow-[0_0_10px_#D7192D]" />
                  )}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#D7192D] transition-all duration-200 group-hover:w-2/3 opacity-0 group-hover:opacity-100" />
                </a>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/Resume.pdf"
              download="Vijay_Varshan_Raj_Resume.pdf"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold tracking-wider text-[#F5F5F5] bg-[#191919] hover:bg-[#202020] border border-[#303030] hover:border-[#D7192D] rounded transition-all duration-200 group"
            >
              <Download className="w-3.5 h-3.5 text-[#D7192D] group-hover:translate-y-[1px] transition-transform" />
              <span>DOWNLOAD RESUME</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold tracking-wider text-white bg-[#D7192D] hover:bg-[#b51425] rounded transition-all duration-200 shadow-[0_0_20px_rgba(215,25,45,0.35)] hover:shadow-[0_0_25px_rgba(215,25,45,0.6)]"
            >
              <span>CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href="/Resume.pdf"
              download="Vijay_Varshan_Raj_Resume.pdf"
              className="md:hidden inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-bold text-white bg-[#191919] border border-[#303030] rounded"
              aria-label="Download Resume"
            >
              <Download className="w-3 h-3 text-[#D7192D]" />
              <span>RESUME</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded bg-[#111111] border border-[#303030] text-white hover:text-[#D7192D] hover:border-[#D7192D] transition-colors focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[60px] bg-[#090909]/98 backdrop-blur-xl border-b border-[#303030] py-5 px-6 shadow-2xl transition-all">
          <nav className="flex flex-col space-y-2.5" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`flex items-center justify-between py-2 text-xs font-bold tracking-widest border-b border-[#191919] ${
                    isActive ? 'text-[#D7192D]' : 'text-[#A6A6A6] hover:text-[#F5F5F5]'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#D7192D]" />}
                </a>
              );
            })}
            <div className="pt-3 flex flex-col gap-2.5">
              <a
                href="/Resume.pdf"
                download="Vijay_Varshan_Raj_Resume.pdf"
                onClick={handleLinkClick}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold tracking-wider text-white bg-[#191919] border border-[#303030] hover:border-[#D7192D] rounded"
              >
                <Download className="w-4 h-4 text-[#D7192D]" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </a>
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold tracking-wider text-white bg-[#D7192D] hover:bg-[#b51425] rounded shadow-lg shadow-[#D7192D]/30"
              >
                <span>LET'S GET IN TOUCH</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

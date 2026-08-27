import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const Footer: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80;
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer
      className={`relative z-10 w-full py-12 px-5 sm:px-8 md:px-12 backdrop-blur-xl border-t transition-all duration-300 ${
        isDark
          ? 'bg-black/85 border-white/10 text-white'
          : 'bg-white/85 border-black/10 text-slate-900 shadow-lg'
      }`}
    >
      <div className={`max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs ${
        isDark ? 'text-white/60' : 'text-slate-600'
      }`}>
        <div className="flex items-center gap-2">
          <span className={`font-heading text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>KAREEM®</span>
          <span>— All Rights Reserved © {new Date().getFullYear()}</span>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
            className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-slate-900'}`}
          >
            About
          </a>
          <a
            href="#skills"
            onClick={(e) => scrollToSection(e, 'skills')}
            className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-slate-900'}`}
          >
            Skills
          </a>
          <a
            href="#capabilities"
            onClick={(e) => scrollToSection(e, 'capabilities')}
            className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-slate-900'}`}
          >
            Capabilities
          </a>
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, 'projects')}
            className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-slate-900'}`}
          >
            Projects
          </a>
          <a
            href="#articles"
            onClick={(e) => scrollToSection(e, 'articles')}
            className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-slate-900'}`}
          >
            Articles
          </a>
          <a
            href="#experience"
            onClick={(e) => scrollToSection(e, 'experience')}
            className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-slate-900'}`}
          >
            Experience
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-slate-900'}`}
          >
            Contact
          </a>
        </div>

        <button
          onClick={scrollToTop}
          className={`inline-flex items-center gap-1.5 transition-colors cursor-pointer font-mono ${
            isDark ? 'hover:text-white' : 'hover:text-slate-900'
          }`}
        >
          <span>Back to top</span>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

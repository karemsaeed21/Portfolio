import React from 'react';

export const Footer: React.FC = () => {
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
    <footer className="relative z-10 w-full py-12 px-5 sm:px-8 md:px-12 bg-black/85 backdrop-blur-xl border-t border-white/10 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/60">
        <div className="flex items-center gap-2">
          <span className="font-heading text-sm text-white font-semibold">KAREEM®</span>
          <span>— All Rights Reserved © {new Date().getFullYear()}</span>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
            className="hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={(e) => scrollToSection(e, 'skills')}
            className="hover:text-white transition-colors"
          >
            Skills
          </a>
          <a
            href="#capabilities"
            onClick={(e) => scrollToSection(e, 'capabilities')}
            className="hover:text-white transition-colors"
          >
            Capabilities
          </a>
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, 'projects')}
            className="hover:text-white transition-colors"
          >
            Projects
          </a>
          <a
            href="#articles"
            onClick={(e) => scrollToSection(e, 'articles')}
            className="hover:text-white transition-colors"
          >
            Articles
          </a>
          <a
            href="#experience"
            onClick={(e) => scrollToSection(e, 'experience')}
            className="hover:text-white transition-colors"
          >
            Experience
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className="hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer font-mono"
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

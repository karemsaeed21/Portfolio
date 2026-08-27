import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['about', 'skills', 'capabilities', 'projects', 'articles', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    closeMenu();

    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 85;
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  const isDark = theme === 'dark';

  return (
    <>
      {/* Fixed Header Wrapper */}
      <header
        className={`fixed left-0 right-0 z-30 transition-all duration-300 flex justify-center ${
          scrolled ? 'top-3 sm:top-4 px-4 sm:px-6' : 'top-0 px-5 sm:px-10'
        }`}
      >
        {/* Main Navbar Capsule */}
        <div
          className={`w-full transition-all duration-300 flex items-center justify-between ${
            scrolled
              ? isDark
                ? 'max-w-6xl bg-black/85 backdrop-blur-2xl border border-white/15 shadow-2xl px-5 sm:px-8 py-3 rounded-full text-white'
                : 'max-w-6xl bg-white/85 backdrop-blur-2xl border border-black/15 shadow-xl px-5 sm:px-8 py-3 rounded-full text-slate-900'
              : 'max-w-7xl bg-transparent border-b border-transparent px-0 py-5 sm:py-6 text-slate-900'
          }`}
        >
          {/* Logo (left) */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#"
              onClick={(e) => scrollToSection(e, 'hero')}
              className={`tracking-tight select-none transition-all duration-300 flex items-center ${
                scrolled
                  ? isDark
                    ? 'text-base sm:text-lg text-white font-heading font-semibold'
                    : 'text-base sm:text-lg text-slate-900 font-heading font-semibold'
                  : 'text-[20px] sm:text-[24px] text-slate-900 font-heading font-semibold'
              }`}
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              KAREEM.
            </a>
            <span
              className={`select-none leading-none inline-block transition-all duration-300 ${
                scrolled
                  ? isDark
                    ? 'text-sm text-white opacity-90'
                    : 'text-sm text-slate-900 opacity-90'
                  : 'text-[22px] text-slate-900'
              }`}
              style={{ letterSpacing: '-0.02em' }}
            >
              ✳︎
            </span>
          </div>

          {/* Desktop Nav Links (center, hidden below lg) */}
          <nav
            className={`hidden lg:flex items-center font-normal transition-all duration-300 ${
              scrolled
                ? isDark
                  ? 'gap-3 xl:gap-5 text-xs sm:text-[13px] font-mono text-white tracking-wider'
                  : 'gap-3 xl:gap-5 text-xs sm:text-[13px] font-mono text-slate-900 tracking-wider'
                : 'text-base xl:text-[18px] text-slate-900 gap-1'
            }`}
          >
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className={`hover:opacity-70 transition-all duration-200 flex items-center gap-1.5 ${
                scrolled && activeSection === 'about' ? 'font-bold underline underline-offset-4' : ''
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  isDark ? 'bg-white' : 'bg-slate-900'
                } ${scrolled && activeSection === 'about' ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
              />
              About
            </a>
            <span className={`transition-colors duration-300 ${scrolled ? (isDark ? 'text-white/40' : 'text-slate-900/40') : 'text-slate-900'}`}>,&nbsp;</span>

            <a
              href="#skills"
              onClick={(e) => scrollToSection(e, 'skills')}
              className={`hover:opacity-70 transition-all duration-200 flex items-center gap-1.5 ${
                scrolled && activeSection === 'skills' ? 'font-bold underline underline-offset-4' : ''
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  isDark ? 'bg-white' : 'bg-slate-900'
                } ${scrolled && activeSection === 'skills' ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
              />
              Skills
            </a>
            <span className={`transition-colors duration-300 ${scrolled ? (isDark ? 'text-white/40' : 'text-slate-900/40') : 'text-slate-900'}`}>,&nbsp;</span>

            <a
              href="#capabilities"
              onClick={(e) => scrollToSection(e, 'capabilities')}
              className={`hover:opacity-70 transition-all duration-200 flex items-center gap-1.5 ${
                scrolled && activeSection === 'capabilities' ? 'font-bold underline underline-offset-4' : ''
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  isDark ? 'bg-white' : 'bg-slate-900'
                } ${scrolled && activeSection === 'capabilities' ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
              />
              Capabilities
            </a>
            <span className={`transition-colors duration-300 ${scrolled ? (isDark ? 'text-white/40' : 'text-slate-900/40') : 'text-slate-900'}`}>,&nbsp;</span>

            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, 'projects')}
              className={`hover:opacity-70 transition-all duration-200 flex items-center gap-1.5 ${
                scrolled && activeSection === 'projects' ? 'font-bold underline underline-offset-4' : ''
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  isDark ? 'bg-white' : 'bg-slate-900'
                } ${scrolled && activeSection === 'projects' ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
              />
              Projects
            </a>
            <span className={`transition-colors duration-300 ${scrolled ? (isDark ? 'text-white/40' : 'text-slate-900/40') : 'text-slate-900'}`}>,&nbsp;</span>

            <a
              href="#articles"
              onClick={(e) => scrollToSection(e, 'articles')}
              className={`hover:opacity-70 transition-all duration-200 flex items-center gap-1.5 ${
                scrolled && activeSection === 'articles' ? 'font-bold underline underline-offset-4' : ''
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  isDark ? 'bg-white' : 'bg-slate-900'
                } ${scrolled && activeSection === 'articles' ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
              />
              Articles
            </a>
            <span className={`transition-colors duration-300 ${scrolled ? (isDark ? 'text-white/40' : 'text-slate-900/40') : 'text-slate-900'}`}>,&nbsp;</span>

            <a
              href="#experience"
              onClick={(e) => scrollToSection(e, 'experience')}
              className={`hover:opacity-70 transition-all duration-200 flex items-center gap-1.5 ${
                scrolled && activeSection === 'experience' ? 'font-bold underline underline-offset-4' : ''
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  isDark ? 'bg-white' : 'bg-slate-900'
                } ${scrolled && activeSection === 'experience' ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
              />
              Experience
            </a>
          </nav>

          {/* Desktop Right CTA + Theme Toggle (hidden below lg) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={toggleTheme}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className={`p-2 rounded-full transition-all duration-300 flex items-center justify-center cursor-pointer ${
                scrolled
                  ? isDark
                    ? 'bg-white/10 text-white hover:bg-white/20 border border-white/15'
                    : 'bg-black/10 text-slate-900 hover:bg-black/20 border border-black/15'
                  : isDark
                  ? 'bg-black/10 text-black hover:bg-black/20'
                  : 'bg-slate-900/10 text-slate-900 hover:bg-slate-900/20'
              }`}
            >
              {isDark ? (
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
                </svg>
              ) : (
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.3 2c.43 0 .77.35.7.78-.62 3.84 1.58 7.6 5.27 8.86.4.14.59.58.42.97-1.92 4.41-6.73 7.02-11.58 6.01-4.85-1.01-8.31-5.32-7.97-10.27.34-4.95 4.57-8.91 9.54-9.25.53-.04 1.06-.06 1.62-.1.35 0 .62.27.62.62z"/>
                </svg>
              )}
            </button>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className={`transition-all duration-300 inline-block shrink-0 ${
                scrolled
                  ? isDark
                    ? 'text-xs bg-white text-black hover:bg-white/90 font-semibold px-4 py-2 rounded-full shadow-md'
                    : 'text-xs bg-slate-900 text-white hover:bg-slate-800 font-semibold px-4 py-2 rounded-full shadow-md'
                  : 'text-[18px] text-slate-900 underline underline-offset-2 hover:opacity-70'
              }`}
            >
              Get in touch
            </a>
          </div>

          {/* Mobile Hamburger & Theme Toggle (visible below lg) */}
          <div className="flex items-center gap-2 lg:hidden shrink-0">
            <button
              type="button"
              onClick={toggleTheme}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className={`p-2 rounded-full transition-all duration-300 flex items-center justify-center cursor-pointer ${
                scrolled
                  ? isDark
                    ? 'bg-white/10 text-white border border-white/15'
                    : 'bg-black/10 text-slate-900 border border-black/15'
                  : isDark
                  ? 'bg-black/10 text-black'
                  : 'bg-slate-900/10 text-slate-900'
              }`}
            >
              {isDark ? (
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
                </svg>
              ) : (
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.3 2c.43 0 .77.35.7.78-.62 3.84 1.58 7.6 5.27 8.86.4.14.59.58.42.97-1.92 4.41-6.73 7.02-11.58 6.01-4.85-1.01-8.31-5.32-7.97-10.27.34-4.95 4.57-8.91 9.54-9.25.53-.04 1.06-.06 1.62-.1.35 0 .62.27.62.62z"/>
                </svg>
              )}
            </button>

            <button
              onClick={toggleMenu}
              className={`z-40 focus:outline-none p-2 transition-all duration-300 cursor-pointer ${
                scrolled
                  ? 'rounded-full bg-black/10 border border-black/15'
                  : 'rounded-none bg-transparent border-transparent'
              }`}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="flex flex-col gap-[5px] items-center justify-center">
                <span
                  className={`w-6 h-[2px] transition-all duration-300 ease-in-out ${
                    scrolled ? (isDark ? 'bg-white' : 'bg-slate-900') : 'bg-slate-900'
                  } ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : 'rotate-0 translate-y-0'}`}
                />
                <span
                  className={`w-6 h-[2px] transition-all duration-300 ease-in-out ${
                    scrolled ? (isDark ? 'bg-white' : 'bg-slate-900') : 'bg-slate-900'
                  } ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
                />
                <span
                  className={`w-6 h-[2px] transition-all duration-300 ease-in-out ${
                    scrolled ? (isDark ? 'bg-white' : 'bg-slate-900') : 'bg-slate-900'
                  } ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : 'rotate-0 translate-y-0'}`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile / Tablet Menu Overlay */}
      <div
        className={`fixed inset-0 z-20 flex flex-col justify-center items-start px-8 gap-6 transition-all duration-300 lg:hidden ${
          isDark ? 'bg-black/95 text-white backdrop-blur-md' : 'bg-white/95 text-slate-900 backdrop-blur-md'
        } ${
          isMenuOpen ? 'opacity-100 pointer-events-auto scale-100' : 'opacity-0 pointer-events-none scale-95'
        }`}
      >
        <a
          href="#about"
          onClick={(e) => scrollToSection(e, 'about')}
          className="text-[28px] font-medium hover:opacity-60 transition-opacity"
        >
          About
        </a>
        <a
          href="#skills"
          onClick={(e) => scrollToSection(e, 'skills')}
          className="text-[28px] font-medium hover:opacity-60 transition-opacity"
        >
          Skills
        </a>
        <a
          href="#capabilities"
          onClick={(e) => scrollToSection(e, 'capabilities')}
          className="text-[28px] font-medium hover:opacity-60 transition-opacity"
        >
          Capabilities
        </a>
        <a
          href="#projects"
          onClick={(e) => scrollToSection(e, 'projects')}
          className="text-[28px] font-medium hover:opacity-60 transition-opacity"
        >
          Projects
        </a>
        <a
          href="#articles"
          onClick={(e) => scrollToSection(e, 'articles')}
          className="text-[28px] font-medium hover:opacity-60 transition-opacity"
        >
          Articles
        </a>
        <a
          href="#experience"
          onClick={(e) => scrollToSection(e, 'experience')}
          className="text-[28px] font-medium hover:opacity-60 transition-opacity"
        >
          Experience
        </a>
        <a
          href="#contact"
          onClick={(e) => scrollToSection(e, 'contact')}
          className="text-[28px] font-medium underline underline-offset-2 hover:opacity-60 transition-opacity"
        >
          Get in touch
        </a>
      </div>
    </>
  );
};

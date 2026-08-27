import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
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
      const navbarHeight = 75;
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Fixed Header Wrapper with Smooth Top Offset */}
      <header
        className={`fixed left-0 right-0 z-30 transition-navbar flex justify-center ${
          scrolled ? 'top-3 sm:top-4 px-4 sm:px-6' : 'top-0 px-5 sm:px-8'
        }`}
      >
        {/* Main Navbar Capsule */}
        <div
          className={`w-full transition-navbar flex items-center justify-between ${
            scrolled
              ? 'max-w-5xl bg-black/85 backdrop-blur-xl border border-white/15 shadow-2xl px-5 sm:px-7 py-2.5 rounded-full text-white'
              : 'max-w-full bg-transparent border-b border-transparent px-0 py-4 sm:py-5 text-black'
          }`}
        >
          {/* Logo (left) */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              onClick={(e) => scrollToSection(e, 'hero')}
              className={`tracking-tight select-none transition-nav-item flex items-center ${
                scrolled
                  ? 'text-base sm:text-lg text-white font-heading'
                  : 'text-[21px] sm:text-[26px] text-black font-heading'
              }`}
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              KAREEM.
            </a>
            <span
              className={`select-none leading-none inline-block transition-nav-item ${
                scrolled
                  ? 'text-sm sm:text-base text-white opacity-90'
                  : 'text-[25px] sm:text-[30px] text-black'
              }`}
              style={{ letterSpacing: '-0.02em' }}
            >
              ✳︎
            </span>
          </div>

          {/* Desktop Nav Links (center, hidden below md) */}
          <nav
            className={`hidden md:flex items-center font-normal transition-nav-item ${
              scrolled
                ? 'gap-4 text-xs sm:text-sm font-mono text-white tracking-wider'
                : 'text-[21px] text-black gap-1'
            }`}
          >
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className={`hover:opacity-60 transition-nav-item flex items-center gap-1.5 ${
                scrolled ? 'text-white' : 'text-black'
              } ${scrolled && activeSection === 'about' ? 'font-semibold' : ''}`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full bg-white transition-all duration-300 ${
                  scrolled && activeSection === 'about' ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`}
              />
              About
            </a>
            <span className={`transition-colors duration-300 ${scrolled ? 'text-white/40' : 'text-black'}`}>,&nbsp;</span>

            <a
              href="#skills"
              onClick={(e) => scrollToSection(e, 'skills')}
              className={`hover:opacity-60 transition-nav-item flex items-center gap-1.5 ${
                scrolled ? 'text-white' : 'text-black'
              } ${scrolled && activeSection === 'skills' ? 'font-semibold' : ''}`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full bg-white transition-all duration-300 ${
                  scrolled && activeSection === 'skills' ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`}
              />
              Skills
            </a>
            <span className={`transition-colors duration-300 ${scrolled ? 'text-white/40' : 'text-black'}`}>,&nbsp;</span>

            <a
              href="#capabilities"
              onClick={(e) => scrollToSection(e, 'capabilities')}
              className={`hover:opacity-60 transition-nav-item flex items-center gap-1.5 ${
                scrolled ? 'text-white' : 'text-black'
              } ${scrolled && activeSection === 'capabilities' ? 'font-semibold' : ''}`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full bg-white transition-all duration-300 ${
                  scrolled && activeSection === 'capabilities' ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`}
              />
              Capabilities
            </a>
            <span className={`transition-colors duration-300 ${scrolled ? 'text-white/40' : 'text-black'}`}>,&nbsp;</span>

            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, 'projects')}
              className={`hover:opacity-60 transition-nav-item flex items-center gap-1.5 ${
                scrolled ? 'text-white' : 'text-black'
              } ${scrolled && activeSection === 'projects' ? 'font-semibold' : ''}`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full bg-white transition-all duration-300 ${
                  scrolled && activeSection === 'projects' ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`}
              />
              Projects
            </a>
            <span className={`transition-colors duration-300 ${scrolled ? 'text-white/40' : 'text-black'}`}>,&nbsp;</span>

            <a
              href="#articles"
              onClick={(e) => scrollToSection(e, 'articles')}
              className={`hover:opacity-60 transition-nav-item flex items-center gap-1.5 ${
                scrolled ? 'text-white' : 'text-black'
              } ${scrolled && activeSection === 'articles' ? 'font-semibold' : ''}`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full bg-white transition-all duration-300 ${
                  scrolled && activeSection === 'articles' ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`}
              />
              Articles
            </a>
            <span className={`transition-colors duration-300 ${scrolled ? 'text-white/40' : 'text-black'}`}>,&nbsp;</span>

            <a
              href="#experience"
              onClick={(e) => scrollToSection(e, 'experience')}
              className={`hover:opacity-60 transition-nav-item flex items-center gap-1.5 ${
                scrolled ? 'text-white' : 'text-black'
              } ${scrolled && activeSection === 'experience' ? 'font-semibold' : ''}`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full bg-white transition-all duration-300 ${
                  scrolled && activeSection === 'experience' ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`}
              />
              Experience
            </a>
          </nav>

          {/* Desktop CTA (right, hidden below md) */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className={`transition-nav-item inline-block ${
                scrolled
                  ? 'text-xs bg-white text-black hover:bg-white/90 font-medium px-4 py-1.5 rounded-full shadow-md'
                  : 'text-[21px] text-black underline underline-offset-2 hover:opacity-60'
              }`}
            >
              Get in touch
            </a>
          </div>

          {/* Mobile Hamburger (visible below md) */}
          <button
            onClick={toggleMenu}
            className={`block md:hidden z-40 focus:outline-none p-1.5 transition-nav-item ${
              scrolled
                ? 'rounded-full bg-white/10 border border-white/15'
                : 'rounded-none bg-transparent border-transparent'
            }`}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="flex flex-col gap-[5px] items-center justify-center">
              <span
                className={`w-6 h-[2px] transition-all duration-300 ease-in-out ${
                  scrolled ? 'bg-white' : 'bg-black'
                } ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : 'rotate-0 translate-y-0'}`}
              />
              <span
                className={`w-6 h-[2px] transition-all duration-300 ease-in-out ${
                  scrolled ? 'bg-white' : 'bg-black'
                } ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
              />
              <span
                className={`w-6 h-[2px] transition-all duration-300 ease-in-out ${
                  scrolled ? 'bg-white' : 'bg-black'
                } ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : 'rotate-0 translate-y-0'}`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay (z-index: 20) */}
      <div
        className={`fixed inset-0 z-20 bg-white/95 backdrop-blur-md flex flex-col justify-center items-start px-8 gap-6 transition-all duration-300 md:hidden text-black ${
          isMenuOpen ? 'opacity-100 pointer-events-auto scale-100' : 'opacity-0 pointer-events-none scale-95'
        }`}
      >
        <a
          href="#about"
          onClick={(e) => scrollToSection(e, 'about')}
          className="text-[28px] font-medium text-black hover:opacity-60 transition-opacity"
        >
          About
        </a>
        <a
          href="#skills"
          onClick={(e) => scrollToSection(e, 'skills')}
          className="text-[28px] font-medium text-black hover:opacity-60 transition-opacity"
        >
          Skills
        </a>
        <a
          href="#capabilities"
          onClick={(e) => scrollToSection(e, 'capabilities')}
          className="text-[28px] font-medium text-black hover:opacity-60 transition-opacity"
        >
          Capabilities
        </a>
        <a
          href="#projects"
          onClick={(e) => scrollToSection(e, 'projects')}
          className="text-[28px] font-medium text-black hover:opacity-60 transition-opacity"
        >
          Projects
        </a>
        <a
          href="#articles"
          onClick={(e) => scrollToSection(e, 'articles')}
          className="text-[28px] font-medium text-black hover:opacity-60 transition-opacity"
        >
          Articles
        </a>
        <a
          href="#experience"
          onClick={(e) => scrollToSection(e, 'experience')}
          className="text-[28px] font-medium text-black hover:opacity-60 transition-opacity"
        >
          Experience
        </a>
        <a
          href="#contact"
          onClick={(e) => scrollToSection(e, 'contact')}
          className="text-[28px] font-medium text-black underline underline-offset-2 hover:opacity-60 transition-opacity"
        >
          Get in touch
        </a>
      </div>
    </>
  );
};

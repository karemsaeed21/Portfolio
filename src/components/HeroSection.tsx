import React, { useState, useRef, useEffect } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
import { useTheme } from '../context/ThemeContext';

export const HeroSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const { displayed, done } = useTypewriter({
    text: "I build intelligent systems and software products, combining AI, machine learning, and software engineering to turn ideas into real-world applications.",
    speed: 38,
    startDelay: 600,
  });

  const [pillsVisible, setPillsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const reqIdRef = useRef<number | null>(null);
  const posRef = useRef({ x: 100, y: 30 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setPillsVisible(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    posRef.current = { x, y };

    if (!reqIdRef.current) {
      reqIdRef.current = requestAnimationFrame(() => {
        if (containerRef.current) {
          containerRef.current.style.setProperty('--lens-x', `${posRef.current.x}px`);
          containerRef.current.style.setProperty('--lens-y', `${posRef.current.y}px`);
        }
        reqIdRef.current = null;
      });
    }
  };

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText('karemsaeed1035@gmail.com');
    }
    setCopied(true);

    const contactElem = document.getElementById('contact');
    if (contactElem) {
      const targetPosition = contactElem.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }

    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative z-[1] w-full h-screen flex flex-col justify-end pb-12 md:justify-center md:pb-0 px-5 sm:px-8 md:px-10 overflow-hidden">
      {/* Content Container */}
      <div className="max-w-xl relative z-10">
        {/* 1. Intro Label with Lag-Free GPU Circular Focus Lens */}
        <div
          ref={containerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={handleMouseMove}
          className="relative mb-5 sm:mb-6 select-none cursor-pointer group"
          style={{
            fontSize: 'clamp(18px, 4vw, 26px)',
            lineHeight: 1.3,
            fontWeight: 400,
          }}
        >
          {/* Base Blurred Text Layer */}
          <div
            className={`pointer-events-none select-none ${isDark ? 'text-white' : 'text-slate-900'}`}
            style={{
              filter: 'blur(4px)',
              WebkitFilter: 'blur(4px)',
            }}
          >
            Hey there, I'm Kareem,
            <br />
            AI & Software Engineer
          </div>

          {/* Top Clear Text Layer with rAF Direct GPU Clip-Path */}
          <div
            className={`absolute inset-0 pointer-events-none select-none font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}
            style={{
              filter: 'blur(0px)',
              WebkitFilter: 'blur(0px)',
              clipPath: `circle(${isHovered ? '75px' : '0px'} at var(--lens-x, 50%) var(--lens-y, 50%))`,
              WebkitClipPath: `circle(${isHovered ? '75px' : '0px'} at var(--lens-x, 50%) var(--lens-y, 50%))`,
              transition:
                'clip-path 220ms ease-out, -webkit-clip-path 220ms ease-out',
              willChange: 'clip-path',
            }}
          >
            Hey there, I'm Kareem,
            <br />
            AI & Software Engineer
          </div>
        </div>

        {/* 2. Typewriter text (Value Proposition) */}
        <p
          className={`mb-5 sm:mb-6 font-normal min-h-[54px] ${isDark ? 'text-white' : 'text-slate-900'}`}
          style={{
            fontSize: 'clamp(18px, 4vw, 26px)',
            lineHeight: 1.35,
          }}
        >
          {displayed}
          {!done && (
            <span
              className={`inline-block w-[2px] h-[1.1em] align-middle ml-[2px] animate-blink ${isDark ? 'bg-white' : 'bg-slate-900'}`}
              aria-hidden="true"
            />
          )}
        </p>

        {/* 3. Action pill buttons (including GitHub, LinkedIn & Medium) */}
        <div
          className="flex flex-wrap gap-y-1 items-center"
          style={{
            opacity: pillsVisible ? 1 : 0,
            transform: pillsVisible ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}
        >
          {/* GitHub Pill */}
          <a
            href="https://github.com/karemsaeed21"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-1.5 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap transition-all duration-200 cursor-pointer shadow-sm active:scale-95 border ${
              isDark
                ? 'bg-white text-black border-black/10 hover:bg-black hover:text-white'
                : 'bg-slate-900 text-white border-slate-900 hover:bg-slate-800'
            }`}
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>GitHub Profile</span>
          </a>

          {/* LinkedIn Pill */}
          <a
            href="https://www.linkedin.com/in/kareem-mohamed-4ac"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-1.5 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap transition-all duration-200 cursor-pointer shadow-sm active:scale-95 border ${
              isDark
                ? 'bg-white text-black border-black/10 hover:bg-black hover:text-white'
                : 'bg-slate-900 text-white border-slate-900 hover:bg-slate-800'
            }`}
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
            </svg>
            <span>LinkedIn Profile</span>
          </a>

          {/* Medium Pill */}
          <a
            href="https://medium.com/@karemsaeed2468"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-1.5 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap transition-all duration-200 cursor-pointer shadow-sm active:scale-95 border ${
              isDark
                ? 'bg-white text-black border-black/10 hover:bg-black hover:text-white'
                : 'bg-slate-900 text-white border-slate-900 hover:bg-slate-800'
            }`}
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM21.54 12c0 3.61-1.5 6.54-3.37 6.54s-3.37-2.93-3.37-6.54 1.5-6.54 3.37-6.54 3.37 2.93 3.37 6.54zM24 12c0 3.17-.53 5.74-1.16 5.74s-1.16-2.57-1.16-5.74.52-5.74 1.16-5.74S24 8.83 24 12z" />
            </svg>
            <span>Medium Articles</span>
          </a>

          {/* Projects Pill */}
          <button
            type="button"
            onClick={() => scrollToSection('projects')}
            className={`inline-flex items-center justify-center rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap transition-all duration-200 cursor-pointer shadow-sm active:scale-95 border ${
              isDark
                ? 'bg-white text-black border-black/10 hover:bg-black hover:text-white'
                : 'bg-slate-900 text-white border-slate-900 hover:bg-slate-800'
            }`}
          >
            View my projects
          </button>

          {/* Reach me Outline Pill Button */}
          <button
            type="button"
            onClick={handleCopy}
            title="Click to copy email address & jump to contact form"
            className={`inline-flex items-center justify-center gap-2 sm:gap-3 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap transition-all duration-200 cursor-pointer group relative shadow-sm active:scale-95 border ${
              isDark
                ? 'bg-transparent text-white border-white hover:bg-white hover:text-black'
                : 'bg-transparent text-slate-900 border-slate-900 hover:bg-slate-900 hover:text-white'
            }`}
          >
            <span>
              {copied ? 'Copied to clipboard!' : (
                <>
                  Reach me:{' '}
                  <span className="underline underline-offset-1">karemsaeed1035@gmail.com</span>
                </>
              )}
            </span>
            {!copied && (
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`shrink-0 stroke-current transition-colors duration-200 ${
                  isDark ? 'text-white group-hover:text-black' : 'text-slate-900 group-hover:text-white'
                }`}
              >
                <rect x="1.5" y="3.5" width="7" height="7" rx="1" strokeWidth="1.2" />
                <path
                  d="M3.5 3.5V2.5C3.5 1.94772 3.94772 1.5 4.5 1.5H9.5C10.0523 1.5 10.5 1.94772 10.5 2.5V7.5C10.5 8.05228 10.0523 8.5 9.5 8.5H8.5"
                  strokeWidth="1.2"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

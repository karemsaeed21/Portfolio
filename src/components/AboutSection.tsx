import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative z-10 w-full py-20 px-5 sm:px-8 md:px-12">
      <div className="max-w-6xl mx-auto bg-black/75 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl text-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Section Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs uppercase tracking-widest font-mono text-white/70 bg-white/10 px-3 py-1 rounded-full border border-white/15">
                01 // ABOUT ME
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading tracking-tight text-white mb-6">
              AI & Software Engineer
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-white/80 font-normal leading-relaxed">
              <p>
                I’m <strong>Kareem Mohamed Yousef</strong>, a Computer Science graduate and AI & Software Engineer focused on building intelligent systems and turning ideas into real-world products.
              </p>
              <p>
                I started with software development and gradually moved deeper into AI, machine learning, and deep learning. I enjoy understanding how systems work under the hood, experimenting with different approaches, and turning what I learn into practical solutions.
              </p>
              <p>
                My work spans machine learning, deep learning, software development, and cloud engineering. I've built AI applications, full-stack platforms, and deployed systems using modern development and cloud technologies. One of my main projects is DeepLearn, an AI-powered learning platform built to help students follow structured technical roadmaps and become career-ready.
              </p>
              <p>
                I'm always looking for the next problem to solve, the next system to understand, and the next idea to turn into something real.
              </p>
              <p className="text-white font-medium text-lg border-l-2 border-white/40 pl-4 italic">
                I believe the best way to learn technology is to build with it.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 items-center mt-8">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center bg-white text-black hover:bg-white/90 text-sm font-medium px-6 py-3 rounded-full transition-all duration-200 shadow-md"
              >
                Get in touch
              </a>

              <a
                href="/Kareem_Mohamed_CV.pdf"
                download="Kareem_Mohamed_CV.pdf"
                className="inline-flex items-center justify-center bg-transparent text-white border border-white/30 hover:border-white text-sm font-medium px-6 py-3 rounded-full transition-all duration-200 hover:bg-white hover:text-black"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download CV
              </a>
            </div>
          </div>

          {/* Right Column: Profile Image Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-white/20 via-white/40 to-white/20 rounded-3xl blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-neutral-900">
                <img
                  src="/assets/img/about-perfil.jpg"
                  alt="Kareem Mohamed"
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-5 bg-black/90 backdrop-blur-md border-t border-white/10">
                  <div className="text-xl font-heading font-semibold text-white">Kareem Mohamed</div>
                  <div className="text-sm text-white/60 font-mono">AI & Software Engineer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

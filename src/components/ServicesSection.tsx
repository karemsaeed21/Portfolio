import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const ServicesSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const services = [
    {
      number: '01',
      title: 'AI & Machine Learning',
      description:
        'Building intelligent systems using machine learning and deep learning, from experimentation and model development to practical applications.',
      features: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'Model Development'],
      icon: (
        <svg className={`w-8 h-8 stroke-current ${isDark ? 'text-white' : 'text-slate-900'}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Software Engineering',
      description:
        'Designing and developing reliable software systems, APIs, and full-stack applications with a focus on clean architecture and maintainability.',
      features: ['Python & Backend Development', 'REST APIs', 'React Applications', 'Database Architecture'],
      icon: (
        <svg className={`w-8 h-8 stroke-current ${isDark ? 'text-white' : 'text-slate-900'}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Cloud & Deployment',
      description:
        'Taking applications from development to production with modern cloud infrastructure, containers, and automated deployment workflows.',
      features: ['AWS Infrastructure', 'CI/CD Pipelines', 'Containerization (Docker)', 'Production Deployment'],
      icon: (
        <svg className={`w-8 h-8 stroke-current ${isDark ? 'text-white' : 'text-slate-900'}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      ),
    },
  ];

  return (
    <section id="capabilities" className="relative z-10 w-full py-20 px-5 sm:px-8 md:px-12">
      <div
        className={`max-w-6xl mx-auto backdrop-blur-2xl rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl transition-all duration-300 ${
          isDark
            ? 'bg-black/75 border border-white/10 text-white'
            : 'bg-white/85 border border-black/10 text-slate-900 shadow-xl'
        }`}
      >
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span
                className={`text-xs uppercase tracking-widest font-mono px-3 py-1 rounded-full border ${
                  isDark
                    ? 'text-white/70 bg-white/10 border-white/15'
                    : 'text-slate-700 bg-slate-900/10 border-slate-900/15'
                }`}
              >
                03 // CAPABILITIES
              </span>
            </div>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-heading tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Engineering Capabilities
            </h2>
          </div>
          <p className={`max-w-md font-normal text-base sm:text-lg ${isDark ? 'text-white/70' : 'text-slate-700'}`}>
            From intelligent systems to scalable software, I combine AI, engineering, and cloud technologies to build practical digital products.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`group rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 border ${
                isDark
                  ? 'bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10'
                  : 'bg-slate-900/5 border-slate-900/10 hover:border-slate-900/30 hover:bg-slate-900/10 shadow-sm'
              }`}
            >
              <div>
                <div className="flex justify-between items-center mb-8">
                  <span className={`font-mono text-sm transition-colors duration-300 ${isDark ? 'text-white/40 group-hover:text-white' : 'text-slate-500 group-hover:text-slate-900'}`}>
                    {service.number}
                  </span>
                  <div className={`p-3 rounded-xl border transition-colors duration-300 ${
                    isDark ? 'bg-white/10 border-white/10 group-hover:bg-white/20' : 'bg-slate-900/10 border-slate-900/10 group-hover:bg-slate-900/20'
                  }`}>
                    {service.icon}
                  </div>
                </div>

                <h3 className={`text-2xl font-heading font-semibold mb-4 group-hover:translate-x-1 transition-transform duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {service.title}
                </h3>

                <p className={`text-sm leading-relaxed mb-8 font-normal ${isDark ? 'text-white/75' : 'text-slate-700'}`}>
                  {service.description}
                </p>
              </div>

              <div>
                <div className={`border-t pt-6 ${isDark ? 'border-white/10' : 'border-slate-900/10'}`}>
                  <ul className="space-y-2.5">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className={`flex items-center text-xs font-mono ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
                        <span className={`w-1.5 h-1.5 rounded-full mr-2.5 ${isDark ? 'bg-white/50' : 'bg-slate-700'}`}></span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

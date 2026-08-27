import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  description: string[];
  skills: string[];
}

export const ExperienceSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const experiences: ExperienceItem[] = [
    {
      id: '01',
      role: 'AI & Software Engineer',
      company: 'DeepLearn Platform & Projects',
      period: '2023 – Present',
      type: 'Full-time / Lead Engineer',
      description: [
        'Architected and built DeepLearn, an AI-powered technical roadmap learning platform helping students build career-ready engineering skills.',
        'Engineered deep learning models, computer vision utilities, and high-performance RESTful APIs.',
        'Containerized production microservices with Docker and deployed infrastructure on AWS cloud.',
      ],
      skills: ['PyTorch', 'React', 'TypeScript', 'Node.js', 'Docker', 'AWS', 'PostgreSQL'],
    },
    {
      id: '02',
      role: 'Machine Learning & Software Developer',
      company: 'AI Research & Engineering Collaborations',
      period: '2022 – 2023',
      type: 'Software Engineering',
      description: [
        'Implemented algorithmic bias detection engines and matrix factorization recommendation models.',
        'Trained, evaluated, and fine-tuned deep neural networks for computer vision and NLP applications.',
        'Designed intuitive, responsive user interfaces using modern React and Tailwind CSS.',
      ],
      skills: ['Python', 'Scikit-Learn', 'Computer Vision', 'REST APIs', 'React', 'Tailwind CSS'],
    },
    {
      id: '03',
      role: 'B.Sc. in Computer Science',
      company: 'Faculty of Computer Science & Artificial Intelligence',
      period: '2019 – 2023',
      type: 'Academic Degree',
      description: [
        'Graduated with specialization in Artificial Intelligence, Machine Learning, and Software Systems.',
        'Completed capstone research and practical projects focused on neural network architectures and data pipelines.',
      ],
      skills: ['Computer Science', 'Algorithms & Data Structures', 'Deep Learning', 'Software Architecture'],
    },
  ];

  return (
    <section id="experience" className="relative z-10 w-full py-20 px-5 sm:px-8 md:px-12">
      <div
        className={`max-w-6xl mx-auto backdrop-blur-2xl rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl transition-all duration-300 ${
          isDark
            ? 'bg-black/75 border border-white/10 text-white'
            : 'bg-white/85 border border-black/10 text-slate-900 shadow-xl'
        }`}
      >
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span
                className={`text-xs uppercase tracking-widest font-mono px-3 py-1 rounded-full border ${
                  isDark
                    ? 'text-white/70 bg-white/10 border-white/15'
                    : 'text-slate-700 bg-slate-900/10 border-slate-900/15'
                }`}
              >
                06 // CAREER & EXPERIENCE
              </span>
            </div>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-heading tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Experience Timeline
            </h2>
          </div>
          <p className={`max-w-md font-normal text-base sm:text-lg ${isDark ? 'text-white/70' : 'text-slate-700'}`}>
            My professional path and engineering journey building AI applications, software platforms, and cloud solutions.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className={`relative border-l ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10 ${isDark ? 'border-white/15' : 'border-slate-900/15'}`}>
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Point Bullet */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 shadow-md ${
                  isDark
                    ? 'bg-black border-white group-hover:scale-125 group-hover:bg-white'
                    : 'bg-white border-slate-900 group-hover:scale-125 group-hover:bg-slate-900'
                }`}
              />

              {/* Card Container */}
              <div
                className={`rounded-2xl p-6 sm:p-8 transition-all duration-300 border ${
                  isDark
                    ? 'bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10'
                    : 'bg-slate-900/5 border-slate-900/10 hover:border-slate-900/30 hover:bg-slate-900/10 shadow-sm'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <span
                      className={`text-xs font-mono uppercase px-2.5 py-1 rounded-full border mr-3 ${
                        isDark
                          ? 'bg-white/10 text-white/80 border-white/15'
                          : 'bg-slate-900/10 text-slate-800 border-slate-900/15'
                      }`}
                    >
                      {exp.type}
                    </span>
                    <h3 className={`text-xl sm:text-2xl font-heading font-semibold inline-block mt-2 sm:mt-0 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {exp.role}
                    </h3>
                  </div>
                  <span
                    className={`text-xs sm:text-sm font-mono px-3 py-1 rounded-full border w-fit ${
                      isDark
                        ? 'text-white/60 bg-white/5 border-white/10'
                        : 'text-slate-600 bg-slate-900/5 border-slate-900/10'
                    }`}
                  >
                    {exp.period}
                  </span>
                </div>

                <div className={`text-sm font-mono mb-4 ${isDark ? 'text-white/70' : 'text-slate-700'}`}>
                  {exp.company}
                </div>

                <ul className="space-y-2 mb-6">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className={`flex items-start text-sm leading-relaxed ${isDark ? 'text-white/80' : 'text-slate-700'}`}>
                      <span className={`mr-2 sm:mr-3 mt-1 text-xs ${isDark ? 'text-white/40' : 'text-slate-500'}`}>▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className={`flex flex-wrap gap-2 pt-4 border-t ${isDark ? 'border-white/10' : 'border-slate-900/10'}`}>
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`text-xs px-3 py-1 rounded-full border font-mono ${
                        isDark
                          ? 'bg-white/5 text-white/90 border-white/10'
                          : 'bg-slate-900/5 text-slate-800 border-slate-900/10'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

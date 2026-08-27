import React from 'react';

interface SkillCategory {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

export const SkillsSection: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      title: 'AI & Machine Learning',
      skills: ['Python', 'PyTorch', 'Scikit-learn', 'TensorFlow & Keras', 'Deep Learning', 'Computer Vision', 'NLP'],
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      title: 'Frontend & UI',
      skills: ['React', 'TypeScript', 'Next.js', 'HTML5 & CSS3', 'Tailwind CSS', 'Vanilla JS'],
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
          <line x1="12" y1="22" x2="12" y2="15.5" />
          <polyline points="22 8.5 12 15.5 2 8.5" />
          <polyline points="2 15.5 12 8.5 22 15.5" />
          <line x1="12" y1="2" x2="12" y2="8.5" />
        </svg>
      ),
    },
    {
      title: 'Backend & Databases',
      skills: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'RESTful APIs', 'SQL'],
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      ),
    },
    {
      title: 'Cloud & Infrastructure',
      skills: ['Docker', 'AWS', 'Git & GitHub', 'MLOps', 'CI/CD Pipelines', 'Linux'],
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="skills" className="relative z-10 w-full py-20 px-5 sm:px-8 md:px-12">
      <div className="max-w-6xl mx-auto bg-black/75 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl text-white">
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs uppercase tracking-widest font-mono text-white/70 bg-white/10 px-3 py-1 rounded-full border border-white/15">
              02 // SKILLS & TECH
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading tracking-tight text-white">
            My Technical Toolkit
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {categories.map((category, idx) => (
            <div
              key={idx}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/10 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="bg-white/5 group-hover:bg-white/10 text-white/95 text-sm px-4 py-2 rounded-full border border-white/5 hover:border-white/20 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

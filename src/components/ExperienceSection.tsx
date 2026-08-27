import React from 'react';

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
      <div className="max-w-6xl mx-auto bg-black/75 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl text-white">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs uppercase tracking-widest font-mono text-white/70 bg-white/10 px-3 py-1 rounded-full border border-white/15">
                06 // CAREER & EXPERIENCE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading tracking-tight text-white">
              Experience Timeline
            </h2>
          </div>
          <p className="max-w-md text-white/70 font-normal text-base sm:text-lg">
            My professional path and engineering journey building AI applications, software platforms, and cloud solutions.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l border-white/15 ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Point Bullet */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-white group-hover:scale-125 group-hover:bg-white transition-all duration-300 shadow-md" />

              {/* Card Container */}
              <div className="bg-white/5 border border-white/10 hover:border-white/30 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:bg-white/10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="text-xs font-mono uppercase bg-white/10 text-white/80 px-2.5 py-1 rounded-full border border-white/15 mr-3">
                      {exp.type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-heading font-semibold text-white inline-block mt-2 sm:mt-0">
                      {exp.role}
                    </h3>
                  </div>
                  <span className="text-xs sm:text-sm font-mono text-white/60 bg-white/5 px-3 py-1 rounded-full border border-white/10 w-fit">
                    {exp.period}
                  </span>
                </div>

                <div className="text-sm font-mono text-white/70 mb-4">
                  {exp.company}
                </div>

                <ul className="space-y-2 mb-6">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-white/80 leading-relaxed">
                      <span className="text-white/40 mr-2 sm:mr-3 mt-1 text-xs">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="bg-white/5 text-white/90 text-xs px-3 py-1 rounded-full border border-white/10 font-mono"
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

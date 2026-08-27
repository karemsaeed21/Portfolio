import React, { useState } from 'react';

export type Category = 'AI/ML' | 'Software' | 'Web' | 'App';

interface Project {
  id: number;
  title: string;
  category: Category | Category[];
  image: string;
  description: string;
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
  tags?: string[];
}

interface GridItem {
  project: Project;
  isFeatured: boolean;
  align: 'left' | 'right';
  fullRow: boolean;
}

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | Category>('All');

  const projects: Project[] = [
    {
      id: 1,
      title: 'DeepLearn',
      category: ['AI/ML', 'Web', 'Software'],
      image: '/assets/img/deeplearn.png',
      description:
        'A learning platform designed to help students follow structured technical roadmaps, learn through curated resources, build projects, and track their progress.',
      githubUrl: 'https://kareemmohamed.me/',
      liveUrl: 'https://kareemmohamed.me/',
      featured: true,
      tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    },
    {
      id: 2,
      title: 'The Day',
      category: ['Web'],
      image: '/assets/img/theday.png',
      description:
        'A platform built for AASTMT Computer Science students to organize academic resources, discover useful content, and improve their university experience.',
      githubUrl: 'https://github.com/DevAbdoTolba/theday',
      liveUrl: 'https://the-day.vercel.app/theday/q/default',
      featured: true,
      tags: ['React', 'TypeScript'],
    },
    {
      id: 3,
      title: 'Friend Recommendation System',
      category: ['AI/ML', 'Software'],
      image: '/assets/img/friend recommendation system.png',
      description: 'A graph-based recommendation system that analyzes relationships and network structure to suggest potential connections.',
      githubUrl: 'https://github.com/karemsaeed21/Friends_Recommendation_System',
      liveUrl: 'https://github.com/karemsaeed21/Friends_Recommendation_System',
      featured: false,
      tags: ['Graph Algorithms', 'Network Science', 'Machine Learning', 'Python'],
    },
    {
      id: 4,
      title: 'Asterisk* Web Development Agency',
      category: ['Web'],
      image: '/assets/img/asterisk.png',
      description: 'A web development agency specializing in building custom websites and web applications for businesses and organizations.',
      githubUrl: 'https://github.com/karemsaeed21/WebV2/',
      liveUrl: 'https://karemsaeed21.github.io/WebV2/',
      featured: false,
      tags: ['HTML', 'Tailwind CSS', 'Framer Motion'],
    },
  ];

  const getCategories = (project: Project): Category[] => {
    return Array.isArray(project.category) ? project.category : [project.category];
  };

  const filterOptions: ('All' | Category)[] = ['All', 'AI/ML', 'Software', 'Web', 'App'];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => getCategories(p).includes(activeFilter));

  const buildGridItems = (items: Project[]): GridItem[] => {
    // When filtering by specific category or if no featured item exists, just render linearly
    if (activeFilter !== 'All') {
      return items.map((p) => ({
        project: p,
        isFeatured: false,
        align: 'left',
        fullRow: false,
      }));
    }

    const featured = items.filter((p) => p.featured);
    const normal = items.filter((p) => !p.featured);

    const gridItems: GridItem[] = [];
    let fIdx = 0;
    let nIdx = 0;
    let rowCount = 0;

    while (fIdx < featured.length || nIdx < normal.length) {
      if (fIdx < featured.length && nIdx < normal.length) {
        const align = rowCount % 2 === 0 ? 'left' : 'right';
        if (align === 'left') {
          gridItems.push({ project: featured[fIdx], isFeatured: true, align: 'left', fullRow: false });
          gridItems.push({ project: normal[nIdx], isFeatured: false, align: 'right', fullRow: false });
        } else {
          gridItems.push({ project: normal[nIdx], isFeatured: false, align: 'left', fullRow: false });
          gridItems.push({ project: featured[fIdx], isFeatured: true, align: 'right', fullRow: false });
        }
        fIdx++;
        nIdx++;
        rowCount++;
      } else if (fIdx < featured.length) {
        gridItems.push({ project: featured[fIdx], isFeatured: true, align: 'left', fullRow: true });
        fIdx++;
        rowCount++;
      } else {
        gridItems.push({ project: normal[nIdx], isFeatured: false, align: 'left', fullRow: false });
        nIdx++;
      }
    }

    return gridItems;
  };

  const gridItems = buildGridItems(filteredProjects);

  return (
    <section id="projects" className="relative z-10 w-full py-20 px-5 sm:px-8 md:px-12">
      <div className="max-w-6xl mx-auto bg-black/75 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl text-white">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs uppercase tracking-widest font-mono text-white/70 bg-white/10 px-3 py-1 rounded-full border border-white/15">
                04 // PROJECTS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading tracking-tight text-white">
              Selected Projects
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-xs sm:text-sm px-4 py-2 rounded-full font-medium transition-all duration-200 cursor-pointer border ${
                  activeFilter === filter
                    ? 'bg-white text-black border-white shadow-sm'
                    : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/15'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gridItems.map((item) => {
            const project = item.project;
            const projectCategories = getCategories(project);

            if (item.isFeatured) {
              const spanClass = item.fullRow ? 'md:col-span-2 lg:col-span-3' : 'md:col-span-2 lg:col-span-2';

              return (
                <div
                  key={project.id}
                  className={`${spanClass} group bg-white/5 border border-white/15 hover:border-white/40 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 flex flex-col md:flex-row`}
                >
                  {/* Image Container */}
                  <div className="relative md:w-7/12 h-64 md:h-auto overflow-hidden bg-neutral-900 shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/assets/img/project-1.png';
                      }}
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="bg-white text-black font-mono text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full shadow-md">
                        ★ Featured
                      </span>
                    </div>

                    {/* Category Badges */}
                    <div className="absolute top-3 right-3 flex flex-wrap gap-1.5 justify-end max-w-[70%]">
                      {projectCategories.map((cat, cIdx) => (
                        <span
                          key={cIdx}
                          className="bg-black/80 backdrop-blur-md text-white text-[11px] font-mono px-2.5 py-0.5 rounded-full border border-white/20"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Body Container */}
                  <div className="p-6 sm:p-8 md:w-5/12 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-white mb-3 group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed mb-6 font-normal">
                        {project.description}
                      </p>

                      {/* Tech Tags */}
                      {project.tags && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[11px] font-mono bg-white/10 text-white/80 px-2.5 py-1 rounded-md border border-white/10"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Card Links */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs sm:text-sm font-semibold text-white group-hover:underline underline-offset-4"
                      >
                        View Project
                        <svg className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs text-white/60 hover:text-white transition-colors font-mono"
                      >
                        GitHub Code
                      </a>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={project.id}
                className="group bg-white/5 border border-white/10 hover:border-white/30 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:bg-white/10"
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden bg-neutral-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/img/project-1.png';
                    }}
                  />
                  {/* Category Badges */}
                  <div className="absolute top-3 right-3 flex flex-wrap gap-1.5 justify-end max-w-[70%]">
                    {projectCategories.map((cat, cIdx) => (
                      <span
                        key={cIdx}
                        className="bg-black/80 backdrop-blur-md text-white text-[11px] font-mono px-2.5 py-0.5 rounded-full border border-white/20"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-white mb-2 group-hover:text-white/90 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/75 text-sm leading-relaxed mb-6 font-normal">
                      {project.description}
                    </p>

                    {/* Tags */}
                    {project.tags && (
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] font-mono bg-white/5 text-white/70 px-2 py-0.5 rounded border border-white/5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Card Links */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-semibold text-white hover:opacity-75 transition-opacity"
                    >
                      View Project
                      <svg className="w-3.5 h-3.5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs text-white/50 hover:text-white transition-colors font-mono"
                    >
                      GitHub Code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

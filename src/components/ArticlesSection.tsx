import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  description: string;
  url: string;
}

export const ArticlesSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const articles: Article[] = [
    {
      id: '01',
      title: 'Demystifying CNNs: A Deep Dive into Convolutional Neural Network Fundamentals',
      category: 'DEEP LEARNING / AI',
      date: 'Mar 2025',
      readTime: '13 min read',
      description:
        'A practical deep dive into Convolutional Neural Networks, covering convolutions, kernels, stride, padding, feature extraction, receptive fields, and forward propagation with PyTorch examples.',
      url: 'https://medium.com/@karemsaeed2468/demystifying-cnns-a-deep-dive-into-convolutional-neural-network-fundamentals-0b9ed1d1d2fa?sharedUserId=karemsaeed2468',
    },
    {
      id: '02',
      title: 'Understanding Forward Propagation in Convolutional Neural Networks (CNNs)',
      category: 'DEEP LEARNING / AI',
      date: 'Apr 2025',
      readTime: '5 min read',
      description:
        'A step-by-step walkthrough of forward propagation in CNNs, covering input tensors, convolution, activation, pooling, flattening, and fully connected layers with practical PyTorch examples.',
      url: 'https://medium.com/@karemsaeed2468/understanding-forward-propagation-in-convolutional-neural-networks-cnns-a95f174a4e88?sharedUserId=karemsaeed2468',
    },
  ];

  return (
    <section id="articles" className="relative z-10 w-full py-20 px-5 sm:px-8 md:px-12">
      <div
        className={`max-w-6xl mx-auto backdrop-blur-2xl rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl transition-all duration-300 ${
          isDark
            ? 'bg-black/75 border border-white/10 text-white'
            : 'bg-white/85 border border-black/10 text-slate-900 shadow-xl'
        }`}
      >
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span
                className={`text-xs uppercase tracking-widest font-mono px-3 py-1 rounded-full border ${
                  isDark
                    ? 'text-white/70 bg-white/10 border-white/15'
                    : 'text-slate-700 bg-slate-900/10 border-slate-900/15'
                }`}
              >
                05 // ARTICLES & INSIGHTS
              </span>
            </div>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-heading tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Technical Writing
            </h2>
          </div>
          <p className={`max-w-md font-normal text-base sm:text-lg ${isDark ? 'text-white/70' : 'text-slate-700'}`}>
            Technical deep dives, experiments, and lessons from building AI and software systems.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {articles.map((article) => (
            <a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 border ${
                isDark
                  ? 'bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10'
                  : 'bg-slate-900/5 border-slate-900/10 hover:border-slate-900/30 hover:bg-slate-900/10 shadow-sm'
              }`}
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span
                    className={`text-[11px] font-mono uppercase px-2.5 py-1 rounded-full border ${
                      isDark
                        ? 'bg-white/10 text-white/80 border-white/15'
                        : 'bg-slate-900/10 text-slate-800 border-slate-900/15'
                    }`}
                  >
                    {article.category}
                  </span>
                  <span className={`font-mono text-xs ${isDark ? 'text-white/40' : 'text-slate-500'}`}>{article.readTime}</span>
                </div>

                <div className={`text-xs font-mono mb-2 ${isDark ? 'text-white/50' : 'text-slate-500'}`}>
                  {article.date}
                </div>

                <h3 className={`text-xl font-heading font-semibold mb-3 group-hover:translate-x-1 transition-all duration-300 leading-snug ${
                  isDark ? 'text-white group-hover:text-white/90' : 'text-slate-900 group-hover:text-slate-900'
                }`}>
                  {article.title}
                </h3>

                <p className={`text-sm leading-relaxed mb-6 font-normal ${isDark ? 'text-white/70' : 'text-slate-700'}`}>
                  {article.description}
                </p>
              </div>

              <div className={`pt-6 border-t flex items-center justify-between ${isDark ? 'border-white/10' : 'border-slate-900/10'}`}>
                <span className={`inline-flex items-center text-xs font-semibold group-hover:underline underline-offset-4 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  Read Article
                  <svg className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <span className={`text-xs font-mono ${isDark ? 'text-white/40' : 'text-slate-500'}`}>Medium</span>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className={`p-6 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 ${
          isDark ? 'bg-white/5 border-white/10' : 'bg-slate-900/5 border-slate-900/10'
        }`}>
          <div className="flex items-center gap-3">
            <svg className={`w-5 h-5 shrink-0 ${isDark ? 'text-white/80' : 'text-slate-800'}`} fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM21.54 12c0 3.61-1.5 6.54-3.37 6.54s-3.37-2.93-3.37-6.54 1.5-6.54 3.37-6.54 3.37 2.93 3.37 6.54zM24 12c0 3.17-.52 5.74-1.16 5.74s-1.16-2.57-1.16-5.74.52-5.74 1.16-5.74S24 8.83 24 12z" />
            </svg>
            <span className={`text-sm font-normal ${isDark ? 'text-white/80' : 'text-slate-800'}`}>
              Want to read more technical write-ups and AI insights?
            </span>
          </div>

          <a
            href="https://medium.com/@karemsaeed2468"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center text-xs font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md whitespace-nowrap ${
              isDark
                ? 'bg-white text-black hover:bg-white/90'
                : 'bg-slate-900 text-white hover:bg-slate-800'
            }`}
          >
            Visit Medium Profile
            <svg className="w-3.5 h-3.5 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

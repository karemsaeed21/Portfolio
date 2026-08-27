import React, { useState } from 'react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage('Please fill in all required fields ⚠️');
      return;
    }

    setStatusMessage('Message sent successfully! ✅');
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => {
      setStatusMessage(null);
    }, 5000);
  };

  const handleCopyEmail = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText('karemsaeed1035@gmail.com');
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    {
      name: 'Twitter / X',
      label: 'X (Twitter)',
      url: 'https://twitter.com/',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      label: 'GitHub',
      url: 'https://github.com/',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
        </svg>
      ),
    },
    {
      name: 'Medium',
      label: 'Medium',
      url: 'https://medium.com/',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42c1.87 0 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="relative z-10 w-full py-20 px-5 sm:px-8 md:px-12">
      <div className="max-w-6xl mx-auto bg-black/75 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl text-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs uppercase tracking-widest font-mono text-white/70 bg-white/10 px-3 py-1 rounded-full border border-white/15">
                  07 // GET IN TOUCH
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading tracking-tight text-white mb-6">
                Let's build something great together.
              </h2>

              <p className="text-white/80 text-base sm:text-lg font-normal leading-relaxed mb-6">
                Whether you have a project idea, want to collaborate, or simply want to connect, feel free to reach out. I'm always open to interesting ideas and conversations around AI, software, and technology.
              </p>

              {/* Quick Email Pill */}
              <div className="mb-8">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-3 text-white bg-white/5 border border-white/20 hover:border-white rounded-full text-sm px-5 py-2.5 transition-colors duration-200 cursor-pointer group"
                >
                  <span>
                    {copied ? 'Copied to clipboard!' : (
                      <>
                        Direct Email:{' '}
                        <span className="underline underline-offset-2">karemsaeed1035@gmail.com</span>
                      </>
                    )}
                  </span>
                  {!copied && (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0 stroke-current text-white group-hover:text-white"
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

            {/* Social Networks Section */}
            <div>
              <h3 className="text-xs uppercase font-mono tracking-wider text-white/50 mb-4">
                Connect on Social Platforms
              </h3>
              <div className="flex flex-wrap gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-black text-white text-xs font-mono transition-all duration-200 hover:scale-105 shadow-sm"
                  >
                    {social.icon}
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 border border-white/10 p-8 sm:p-10 rounded-2xl space-y-6"
            >
              <h3 className="text-xl font-heading font-semibold text-white mb-2">
                Send A Message
              </h3>

              {statusMessage && (
                <div className="p-4 rounded-xl text-sm font-medium bg-white/10 text-white border border-white/20">
                  {statusMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-mono text-white/60 mb-2">
                    First & Last Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    required
                    className="w-full bg-black/60 border border-white/20 focus:border-white rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono text-white/60 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@example.com"
                    required
                    className="w-full bg-black/60 border border-white/20 focus:border-white rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase font-mono text-white/60 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="New project inquiry / Studio discussion"
                  className="w-full bg-black/60 border border-white/20 focus:border-white rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-mono text-white/60 mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Describe your project ideas, questions, or specs..."
                  required
                  className="w-full bg-black/60 border border-white/20 focus:border-white rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black hover:bg-white/90 font-medium py-3.5 px-6 rounded-xl transition-all duration-200 text-sm cursor-pointer shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

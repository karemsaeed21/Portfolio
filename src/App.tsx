import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { BackgroundVideo } from './components/BackgroundVideo';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ArticlesSection } from './components/ArticlesSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

const AppContent: React.FC = () => {
  const { theme } = useTheme();

  return (
    <main
      className={`relative min-h-screen w-full overflow-x-hidden transition-colors duration-500 ${
        theme === 'dark' ? 'bg-black text-white' : 'bg-slate-100 text-slate-900'
      }`}
    >
      <BackgroundVideo />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <ProjectsSection />
      <ArticlesSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;

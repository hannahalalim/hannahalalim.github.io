import './index.css';
import { useEffect } from 'react';
import NavBar from './NavBar';
import HeroSection from './HeroSection';
import SummarySection from './SummarySection';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import CertificationsSection from './CertificationsSection';
import SkillsSection from './SkillsSection';
import DownloadSection from './DownloadSection';
import ContactSection from './ContactSection';

function App() {
  // Smooth scroll for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    // Custom scroll to center section on click
    const handleNavClick = (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        const id = e.target.getAttribute('href').slice(1);
        const section = document.getElementById(id);
        if (section) {
          e.preventDefault();
          section.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    };
    document.addEventListener('click', handleNavClick);
    return () => document.removeEventListener('click', handleNavClick);
  }, []);

  // Always-active scroll animations for all fade/scale classes
  useEffect(() => {
    const selectors = [
      '.fade-in-section', '.fade-up', '.fade-left', '.fade-right', '.scale-in'
    ];
    const elements = document.querySelectorAll(selectors.join(','));
    const observer = new window.IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.15 }
    );
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <NavBar />
      <div className="font-sans text-navy bg-light">
        <main>
          <HeroSection />
          <SummarySection />
          <ExperienceSection />
          <EducationSection />
          <CertificationsSection />
          <SkillsSection />
          <DownloadSection />
          <ContactSection />
        </main>
      </div>
    </>
  );
}

export default App;

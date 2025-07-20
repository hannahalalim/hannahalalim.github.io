import React, { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'summary', label: 'Summary' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'skills', label: 'Skills' },
  { id: 'download', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

const NavBar = () => {
  const [active, setActive] = useState('hero');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let current = 'hero';
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && window.scrollY + 80 >= el.offsetTop) {
          current = section.id;
        }
      }
      setActive(current);
      // Change navbar text color based on scroll position (light for top, dark for further down)
      setIsDark(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full font-sans">
      <div className="relative w-full">
        {/* Semi-transparent background for modern look */}
        <div className="absolute inset-0 w-full h-full bg-white/80 backdrop-blur border-b border-gray/40 shadow-sm" style={{WebkitBackdropFilter: 'blur(12px)', backdropFilter: 'blur(12px)', zIndex: 1}} />
        <div className="relative w-full flex items-center justify-between px-4 py-3" style={{zIndex: 2}}>
          <div className={`font-bold text-lg tracking-wide drop-shadow-sm font-sans transition-colors duration-300 ${isDark ? 'text-navy' : 'text-navy'}`}>Hanna Vanessa D. Alalim</div>
          <ul className="flex gap-2 md:gap-4">
            {sections.map((section) => (
              <li key={section.id} className="relative">
                <a
                  href={`#${section.id}`}
                  className={`px-3 py-1 rounded transition-colors duration-200 text-sm md:text-base font-medium relative font-sans ${
                    isDark ? 'text-navy' : 'text-navy'
                  } ${active === section.id ? 'font-bold underline underline-offset-8' : ''}`}
                  style={{zIndex: 2}}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar; 
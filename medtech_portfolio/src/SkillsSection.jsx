import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const skills = [
  {
    icon: '🧪',
    title: 'Testing Areas',
    desc: 'Core laboratory disciplines and specialties.',
    items: [
      'Hematology',
      'Blood Chemistry',
      'Blood Banking',
      'Microbiology',
      'Serology/Immunology',
      'Clinical Microscopy',
    ],
  },
  {
    icon: '💻',
    title: 'Systems / LIS',
    desc: 'Laboratory information systems and software.',
    items: [
      'Cerner',
      'Sunquest',
      'Epic',
    ],
  },
  {
    icon: '🔬',
    title: 'Analyzers & Devices',
    desc: 'Key analyzers and diagnostic equipment used.',
    items: [
      'Sysmex XN-9000, Beckman Coulter DxH 600/690T, Scopio, Siemens Hematek',
      'Platelet Function Assay, TEG 6s, STA Compact Max',
      'DxH 600i, Sysmex CS-2500, Model 3320 Osmometer, Tosoh G8',
      'Access 2, VIDAS 3, Hologic TLI',
      'Biofire, GeneXpert, Bact/Alert 3D',
      'Autioon Max AX-4030, DXU 840m Iris, Clinitek 500',
      'Grifols DG Therm, Grifols DG Spin, Cell Washer 2',
    ],
  },
];

const useScrollParallax = () => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return offset;
};

const SkillsSection = () => {
  const offset = useScrollParallax();
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const parallaxY = Math.max(0, Math.min((offset - 2400) * 0.2, 60));
  const parallaxOpacity = 1 - Math.max(0, Math.min((offset - 2400) / 400, 0.3));

  return (
    <section id="skills" className="w-full min-h-screen flex flex-col items-center justify-center bg-light px-4 py-20 fade-in-section relative overflow-hidden">
      <motion.h3
        className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-navy text-center mx-auto max-w-2xl fade-up"
        initial={{ opacity: 0, y: 40 }}
        animate={controls}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        style={{ transform: `translateY(${parallaxY}px)`, opacity: parallaxOpacity }}
      >
        Skills & Technical Proficiency
      </motion.h3>
      <p className="text-base text-darkgray text-center mx-auto max-w-2xl mb-8">Key areas of expertise, systems, and equipment proficiency.</p>
      <motion.div
        className="w-full grid md:grid-cols-3 gap-10"
        style={{ transform: `translateY(${parallaxY * 1.2}px)`, opacity: parallaxOpacity }}
      >
        {skills.map((cat, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-3xl shadow-2xl p-8 border border-gray flex flex-col items-center scale-in"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={controls}
            transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="w-14 h-14 mb-3 bg-gray rounded-full flex items-center justify-center text-3xl text-navy shadow-inner">{cat.icon}</div>
            <div className="font-semibold text-lg mb-1 text-navy text-center">{cat.title}</div>
            <div className="text-xs text-gray-500 mb-2 text-center">{cat.desc}</div>
            <ul className="list-disc list-inside text-base text-left text-darkgray">
              {cat.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsSection; 
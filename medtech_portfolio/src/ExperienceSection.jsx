import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const experiences = [
  {
    title: 'CLS Generalist – Per Diem',
    place: 'Sutter Health Memorial Medical Center',
    date: '2024 – Present',
    details: [
      'Performs cross-discipline testing (hematology, serology, microbiology, microscopy).',
      'Validates and communicates critical results.',
      'Maintains HIPAA/CLIA compliance.',
      'Participates in staff training and QA initiatives.'
    ],
    systems: 'Epic, Cerner, Sunquest',
    equipment: 'Sysmex XN-9000, SP-10, DI-60, TEG 6s, STA Compact Max, VIDAS 3'
  },
  {
    title: 'CLS Generalist',
    place: 'Adventist Health Sonora',
    date: '2024 – Present',
    details: [
      'Conducts specimen processing and testing across multiple disciplines.',
      'Manages lab equipment and inventory.',
      'Supports QA and clinical correlations.'
    ],
    equipment: 'Beckman Coulter DxH 600/690T, Scopio, Siemens Hematek, Access 2, Sysmex CS-2500, Biofire, GeneXpert'
  },
  { title: 'Registered Medical Technologist', place: 'AppleOne Brokenshire Medical Center, Davao', date: '2021 – 2022' },
  { title: 'Registered Medical Technologist', place: 'Allah Valley Medical Specialists Center, Koronadal', date: '2017 – 2021' },
  { title: 'Assistant Microbiology Head', place: 'Allah Valley Medical Specialists Center', date: '2019 – 2021' },
  { title: 'Assistant QA Officer', place: 'Philippine Red Cross – Sultan Kudarat', date: '2017' },
  { title: 'Volunteer Phlebotomist/Blood Donor Screener', place: 'Philippine Red Cross – Koronadal', date: '2016 – 2017' }
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

const ExperienceSection = () => {
  const offset = useScrollParallax();
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const parallaxY = Math.max(0, Math.min((offset - 600) * 0.2, 60));
  const parallaxOpacity = 1 - Math.max(0, Math.min((offset - 600) / 400, 0.3));

  return (
    <section id="experience" className="w-full min-h-screen flex flex-col items-center justify-center bg-light px-4 py-20 fade-in-section relative overflow-hidden">
      <motion.h3
        className="text-3xl md:text-4xl font-bold mb-8 tracking-tight text-navy text-center mx-auto max-w-3xl fade-up"
        initial={{ opacity: 0, y: 40 }}
        animate={controls}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        style={{
          transform: `translateY(${parallaxY}px)`,
          opacity: parallaxOpacity,
        }}
      >
        Experience
      </motion.h3>
      <motion.div
        className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 w-full"
        style={{
          transform: `translateY(${parallaxY * 1.2}px)`,
          opacity: parallaxOpacity,
        }}
      >
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-3xl shadow-2xl p-8 border border-gray flex flex-col scale-in"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={controls}
            transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: [0.4, 0, 0.2, 1] }}
          >
            <h4 className="font-semibold text-lg mb-1 text-navy">{exp.title}</h4>
            <div className="text-sm text-blue mb-1">{exp.place} | {exp.date}</div>
            {exp.details && (
              <ul className="list-disc list-inside text-base mb-2 text-darkgray">
                {exp.details.map((d, j) => <li key={j}>{d}</li>)}
              </ul>
            )}
            {exp.systems && <div className="text-xs text-gray-500 mb-1">Systems/Tools: {exp.systems}</div>}
            {exp.equipment && <div className="text-xs text-gray-500">Equipment: {exp.equipment}</div>}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ExperienceSection; 
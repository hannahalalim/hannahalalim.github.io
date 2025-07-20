import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const certificates = [
  { name: 'California CLS Generalist License', id: 'MTA-02283687', img: null },
  { name: 'ASCP Certification', id: '25772704', img: null },
  { name: 'Lean Healthcare Professional (CLHP)', id: '126828051', img: null },
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

const CertificationsSection = () => {
  const offset = useScrollParallax();
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const parallaxY = Math.max(0, Math.min((offset - 1800) * 0.2, 60));
  const parallaxOpacity = 1 - Math.max(0, Math.min((offset - 1800) / 400, 0.3));

  return (
    <section id="certifications" className="w-full min-h-screen flex flex-col items-center justify-center bg-light px-4 py-20 fade-in-section relative overflow-hidden">
      <motion.h3
        className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-navy text-center mx-auto max-w-2xl fade-up"
        initial={{ opacity: 0, y: 40 }}
        animate={controls}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        style={{ transform: `translateY(${parallaxY}px)`, opacity: parallaxOpacity }}
      >
        Certifications & Licensure
      </motion.h3>
      <motion.div
        className="grid gap-10 md:grid-cols-3 grid-cols-1 w-full"
        style={{ transform: `translateY(${parallaxY * 1.2}px)`, opacity: parallaxOpacity }}
      >
        {certificates.map((cert, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-3xl shadow-2xl p-8 border border-gray flex flex-col items-center scale-in"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={controls}
            transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="w-14 h-14 mb-3 bg-gray rounded-full flex items-center justify-center text-3xl text-navy shadow-inner">🏅</div>
            <div className="font-semibold text-lg text-navy mb-1 text-center">{cert.name}</div>
            <div className="text-xs bg-gray text-navy px-3 py-1 rounded-full">{cert.id}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CertificationsSection; 
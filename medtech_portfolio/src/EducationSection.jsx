

import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

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

const EducationSection = () => {
  const offset = useScrollParallax();
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const parallaxY = Math.max(0, Math.min((offset - 1200) * 0.2, 60));
  const parallaxOpacity = 1 - Math.max(0, Math.min((offset - 1200) / 400, 0.3));

  return (
    <section id="education" className="w-full min-h-screen flex flex-col items-center justify-center bg-light px-4 py-20 fade-in-section relative overflow-hidden">
      <motion.h3
        className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight text-navy text-center fade-up drop-shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={controls}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        style={{ transform: `translateY(${parallaxY}px)`, opacity: parallaxOpacity }}
      >
        Education
      </motion.h3>
      <motion.div
        className="text-3xl md:text-4xl font-extrabold text-navy drop-shadow-lg tracking-tight fade-right text-center mb-2"
        initial={{ opacity: 0, x: 40 }}
        animate={controls}
        transition={{ duration: 1, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
        style={{ transform: `translateY(${parallaxY * 0.7}px)`, opacity: parallaxOpacity }}
      >
        Bachelor of Science in Medical Technology
      </motion.div>
      <motion.div
        className="text-xl md:text-2xl text-blue mb-2 font-semibold fade-left text-center drop-shadow-sm"
        initial={{ opacity: 0, x: -40 }}
        animate={controls}
        transition={{ duration: 1, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        style={{ transform: `translateY(${parallaxY * 0.9}px)`, opacity: parallaxOpacity }}
      >
        Notre Dame of Marbel University
      </motion.div>
      <motion.div
        className="text-lg md:text-xl bg-gray text-navy px-6 py-2 rounded-full shadow-md mt-2 scale-in text-center font-semibold tracking-wide"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={controls}
        transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        style={{ transform: `translateY(${parallaxY * 1.1}px)`, opacity: parallaxOpacity }}
      >
        2012 – 2016
      </motion.div>
    </section>
  );
};

export default EducationSection; 
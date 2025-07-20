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

const SummarySection = () => {
  const offset = useScrollParallax();
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const parallaxY = Math.max(0, Math.min((offset - 200) * 0.2, 60));
  const parallaxOpacity = 1 - Math.max(0, Math.min((offset - 200) / 400, 0.3));

  return (
    <section id="summary" className="w-full min-h-screen flex flex-col items-center justify-center bg-light px-4 py-20 fade-in-section relative overflow-hidden">
      <motion.h3
        className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-navy text-center fade-up"
        initial={{ opacity: 0, y: 40 }}
        animate={controls}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        style={{
          transform: `translateY(${parallaxY}px)`,
          opacity: parallaxOpacity,
        }}
      >
        Professional Summary
      </motion.h3>
      <motion.p
        className="text-lg md:text-xl leading-relaxed text-darkgray font-light text-center fade-left max-w-4xl mx-auto"
        initial={{ opacity: 0, x: -40 }}
        animate={controls}
        transition={{ duration: 1, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        style={{
          transform: `translateY(${parallaxY * 1.2}px)`,
          opacity: parallaxOpacity,
        }}
      >
        Clinical Laboratory Scientist with over 8 years of generalist experience in both U.S. and Philippine clinical settings. Proficient in pre-analytic, analytic, and post-analytic lab procedures. Known for delivering timely and accurate results, supporting QA initiatives, and maintaining lab compliance. Passionate about laboratory operations, diagnostics, and quality assurance.
      </motion.p>
    </section>
  );
};

export default SummarySection; 
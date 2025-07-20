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

const HeroSection = () => {
  const offset = useScrollParallax();
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, scale: 1 });
  }, [controls]);

  // Parallax values
  const parallaxY = Math.min(offset * 0.3, 80);
  const parallaxOpacity = 1 - Math.min(offset / 400, 0.4);

  return (
    <section id="hero" className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center fade-in-section relative bg-light">
      <motion.div
        className="w-32 h-32 md:w-48 md:h-48 rounded-full mb-8 flex items-center justify-center relative z-10 shadow-lg bg-gray"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={controls}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        style={{
          transform: `translateY(${parallaxY}px)`,
          opacity: parallaxOpacity,
        }}
      >
        {/* Optionally add a portrait image here */}
      </motion.div>
      <motion.h1
        className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold mb-4 relative z-10 drop-shadow-lg tracking-tight text-navy"
        initial={{ opacity: 0, x: 40 }}
        animate={controls}
        transition={{ duration: 1, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
        style={{
          transform: `translateY(${parallaxY * 0.5}px)`,
          opacity: parallaxOpacity,
        }}
      >
        Hanna Vanessa D. Alalim
      </motion.h1>
      <motion.h2
        className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 relative z-10 text-darkgray"
        initial={{ opacity: 0, x: -40 }}
        animate={controls}
        transition={{ duration: 1, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        style={{
          transform: `translateY(${parallaxY * 0.7}px)`,
          opacity: parallaxOpacity,
        }}
      >
        Clinical Laboratory Scientist
      </motion.h2>
      <motion.p
        className="text-lg sm:text-xl md:text-2xl mb-8 relative z-10 text-darkgray font-light"
        initial={{ opacity: 0, y: 40 }}
        animate={controls}
        transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        style={{
          transform: `translateY(${parallaxY * 0.9}px)`,
          opacity: parallaxOpacity,
        }}
      >
        "Bringing precision and passion to clinical diagnostics."
      </motion.p>
      <motion.a
        href="#summary"
        className="inline-block bg-primary text-white px-10 py-4 rounded-2xl shadow-xl hover:bg-accent transition-all duration-300 text-lg font-semibold relative z-10 focus:outline-none focus:ring-4 focus:ring-blue fade-up"
        initial={{ opacity: 0, y: 40 }}
        animate={controls}
        transition={{ duration: 1, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
        style={{
          transform: `translateY(${parallaxY * 1.1}px)`,
          opacity: parallaxOpacity,
        }}
      >
        View My Credentials
      </motion.a>
    </section>
  );
};

export default HeroSection; 
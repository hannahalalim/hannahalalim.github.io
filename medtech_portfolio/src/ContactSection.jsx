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

const ContactSection = () => {
  const offset = useScrollParallax();
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const parallaxY = Math.max(0, Math.min((offset - 3000) * 0.2, 60));
  const parallaxOpacity = 1 - Math.max(0, Math.min((offset - 3000) / 400, 0.3));

  return (
    <section id="contact" className="w-full min-h-screen flex flex-col items-center justify-center bg-light px-4 py-20 fade-in-section relative overflow-hidden">
      <motion.h3
        className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-navy text-center fade-up"
        initial={{ opacity: 0, y: 40 }}
        animate={controls}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        style={{ transform: `translateY(${parallaxY}px)`, opacity: parallaxOpacity }}
      >
        Contact
      </motion.h3>
      <motion.form
        className="flex flex-col gap-6 mb-8 w-full max-w-xl items-center text-center fade-left"
        initial={{ opacity: 0, x: -40 }}
        animate={controls}
        transition={{ duration: 1, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        style={{ transform: `translateY(${parallaxY * 1.2}px)`, opacity: parallaxOpacity }}
      >
        <input type="text" name="name" placeholder="Full Name" className="bg-white text-darkgray border border-gray rounded-2xl px-5 py-4 text-lg shadow-inner focus:ring-4 focus:ring-blue focus:border-blue transition-all placeholder:text-gray w-full" required />
        <input type="email" name="email" placeholder="Email" className="bg-white text-darkgray border border-gray rounded-2xl px-5 py-4 text-lg shadow-inner focus:ring-4 focus:ring-blue focus:border-blue transition-all placeholder:text-gray w-full" required />
        <textarea name="message" placeholder="Message" className="bg-white text-darkgray border border-gray rounded-2xl px-5 py-4 text-lg shadow-inner focus:ring-4 focus:ring-blue focus:border-blue transition-all placeholder:text-gray w-full" rows={4} required />
        <button type="submit" className="bg-blue text-white px-10 py-4 rounded-2xl shadow-xl hover:bg-navy transition-colors focus:outline-none focus:ring-4 focus:ring-blue text-lg font-semibold w-full">Send Message</button>
      </motion.form>
      <motion.div
        className="text-center mb-8 text-darkgray w-full max-w-xl items-center mx-auto"
        style={{ transform: `translateY(${parallaxY * 1.3}px)`, opacity: parallaxOpacity }}
        initial={{ opacity: 0, y: 40 }}
        animate={controls}
        transition={{ duration: 1, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="mb-1">📧 <a href="mailto:alphavanessarmt@gmail.com" className="underline text-blue">alphavanessarmt@gmail.com</a></div>
        <div>📞 <a href="tel:12095910199" className="underline text-blue">(209) 591-0199</a></div>
      </motion.div>
    </section>
  );
};

export default ContactSection; 
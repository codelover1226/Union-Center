import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const VimeoSection = ({ children }) => {
  const [scrollOpacity, setScrollOpacity] = useState(0.1);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxOpacity = 0.6; // Maximum opacity you want to achieve
      const newOpacity = Math.min(scrollPosition / 1000, maxOpacity); // Adjust 1000 as needed
      setScrollOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    controls.start({ backgroundColor: `rgba(0, 0, 0, ${scrollOpacity})` });
  }, [scrollOpacity, controls]);

  return (
    <motion.section
      animate={controls}
      className="w-full h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url('your-background-image.jpg')`,
      }}
    >
    {/* <div className="absolute inset-0 bg-black opacity-0"></div> */}
        {children}
    </motion.section>
  );
};

export default VimeoSection;
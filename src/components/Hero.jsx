import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const Hero = () => {
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.1, ease: 'easeOut' }
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, delay: 0.7, ease: 'easeOut' }
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, delay: 0.9, ease: 'easeOut' }
    },
  };

  const buttonContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, delay: 1.1, ease: 'easeOut' }
    },
  };

  return (
    <motion.div className="hero">
      <motion.div className="content" variants={contentVariants} initial="hidden" animate="visible">
        <motion.span className="title" variants={titleVariants}>Full Stack Web Developer</motion.span>
        <motion.h1 variants={subtitleVariants}>Hello, I'm <span>Franco</span></motion.h1>
        <motion.p variants={subtitleVariants}>
          I love meeting new people and learning about their lives and their backgrounds.
          I can almost always find common ground with strangers, and I like making people feel comfortable in my presence.
        </motion.p>
        <motion.div className="button-container" variants={buttonContainerVariants} initial="hidden" animate="visible">
          <Button text="About me" svgPath="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z" />
          <Button text="View works" secondary />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;

// Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import SparkleIcon from '../icons/SparkleIcon.jsx';
import DevIcon from '../icons/DevIcon.jsx';

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
      transition: { duration: 0.2, delay: 0.2, ease: 'easeOut' }
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, delay: 0.3, ease: 'easeOut' }
    },
  };

  const buttonContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, delay: 0.4, ease: 'easeOut' }
    },
  };

  return (
    <motion.div id='home' className="hero">
      <motion.div className="content" variants={contentVariants} initial="hidden" animate="visible">
        <motion.span className="title" variants={titleVariants}>Full Stack Web Developer</motion.span>
        <motion.h1 variants={subtitleVariants}>Hello, I'm <span>Franco</span></motion.h1>
        <motion.p className='text-gray-300' variants={subtitleVariants}>
          My name is <span className='font-medium'>Franco Gilli</span>, residing in <span className="font-semibold">San Francisco, Córdoba, Argentina</span>.
          I have a strong passion for technology and computing, with a specialization in <span className='italic font-medium'>Web Development</span> within the IT field.
        </motion.p>
        <motion.div className="button-container" variants={buttonContainerVariants} initial="hidden" animate="visible">
          <Button >
            <SparkleIcon/>
            Contact
          </Button>
          <Button secondary>
            <DevIcon/>
            Explore
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;

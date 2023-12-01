import React from 'react';
import { skillsData } from '../lib/data';
import { motion } from "framer-motion";


const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.02 * index,
    },
  }),
};


function Skills({}) {
  return (
    <section className='mb-28 max-w-[53rem] mx-auto scroll-mt-28 text-center sm:mb-40 px-6'>
      <motion.h2 className='font-bold text-4xl text-white pb-16 items-center pt-10' variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}>Skills</motion.h2>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">

        {skillsData.map((skill, index) => (
        <motion.li
            className="bg-white font-semibold borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}>
          
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;

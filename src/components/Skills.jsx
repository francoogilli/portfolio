import React from 'react';
import { skillsData } from '../lib/data';
import { motion } from "framer-motion";
import Trending from '../icons/Trending';

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
    <section id="skills" className='mb-28 max-w-[53rem] mx-auto scroll-mt-28 text-center sm:mb-28 px-6'>
      <motion.h2 className='font-bold text-4xl text-white flex justify-center gap-3  pt-10 pb-10 items-center ' 
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            ><Trending/>Skills</motion.h2>
      <ul className="flex flex-wrap justify-center gap-1 text-lg text-gray-800">

        {skillsData.map((skill, index) => (
        <motion.li
              key={index}
              className={`text-white bg-white/5 border border-white/10 rounded-full inline-block mx-1 md:mx-1 py-1.5 px-2.5 md:py-2 md:px-4 text-xs md:text-sm transition hover:bg-white/10 mb-2 cursor-pointer`}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
      >
      {typeof skill === 'object' ? (
        <span  className='flex items-center justify-center gap-1.5 '>{skill.icon}{skill.name}</span>
      ) : (
        skill
      )}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;

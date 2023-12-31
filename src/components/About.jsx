import React from 'react';
import { motion } from "framer-motion";
import User from '../icons/User';
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
        duration: 0.5,  // Ajusta este valor según tus preferencias
      },
    }),
  };
function About({ }) {
    
    return(
        <section
            id="about" 
            className="mb-28 max-w-[45rem] mx-auto text-center leading-9 px-6 sm:mb-40 scroll-mt-28"
        >            
            <motion.h2 
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
            className='font-bold text-4xl text-white justify-center gap-3 flex pb-7 items-center pt-15'><><User/></>About me</motion.h2>
            <motion.p 
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className=" text-gray-300">
                After completing{" "}
                <span className="font-medium">Secondary School</span>, I decided to follow my passion for programming.
                I enrolled in a Programming Technician career, where I delved into the world of{" "}
                <span className="font-medium">Web Development</span>.{" "}
                <span className="italic">My favorite part of programming</span> is the
                problem-solving aspect. I love the
                feeling of finally figuring out a solution to a problem. My tech stack encompasses both{" "}
                <span className="font-medium">Frontend</span> and <span className="font-medium">Backend</span>,
                and I've applied the MVC architecture pattern in .NET, integrating external APIs and databases. 
            </motion.p>
            <motion.p
             variants={fadeInAnimationVariants}
             initial="initial"
             whileInView="animate"
             viewport={{
               once: true,
             }}
             className='mt-3 text-gray-300'>
                Always eager to acquire new skills. I am currently seeking a{" "}
                <span className="font-medium">full-time position</span> as a software developer.
            </motion.p>
        </section>
    );

}
export default About;
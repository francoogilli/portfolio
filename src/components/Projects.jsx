
import React, { useState } from "react";
import { PROJECTS } from "../lib/data"; 
import SectionContainer from "./SectionContainer";
import Brackets from '../icons/Brackets';
import Chevrons from "../icons/ChevronsDown";
import ChevronsUp from "../icons/ChevronsUp";
import { motion } from "framer-motion";
import GitHubIcon from "../icons/GitHubIcon";
import LiveProjectIcon from "../icons/LiveProjectIcon";
const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleDescription = (title) => {
    setExpandedProject((prevProject) => (prevProject === title ? null : title));
  };

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
        duration: 0.5,  
      },
    }),
  };
  return (
    <>
      <SectionContainer id='projects'>
        <motion.h2 
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className='font-bold text-4xl text-white justify-center gap-3 flex pb-16 items-center pt-16'><Brackets/>Projects</motion.h2>

        {PROJECTS.map(({ image, title, description, tags,github,link }) => (
          <motion.article 
            key={title} className="mb-36"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={title}

          >
            
            <h3 className="text-2xl font-semibold text-yellow-200 mb-2">{title}</h3>
            <div className={`text-base sm:text-base text-gray-200 mb-0 text-pretty ${expandedProject === title ? '' : 'line-clamp-2'}`}>
            {description.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line.split(/\*\*(.*?)\*\*/g).map((part, index) => (
        index % 2 === 1 ? (
          <span key={index} className="font-semibold">{part}</span>
        ) : (
          part
        )
      ))}
      <br />
      <br />
    </React.Fragment>
  ))}
            </div>
            {description.length > 100 && (
              <button
                onClick={() => toggleDescription(title)}
                className="flex items-center gap-1 text-blue-500 cursor-pointer"
              >
                {expandedProject === title ? 'Show Less' : 'Read More'}
                {expandedProject === title ? <ChevronsUp /> : <Chevrons />}
              </button>
            )}
            <ul className="flex gap-x-1 flex-row mb-3 pt-4">
              {tags.map((tech, index) => (
                <span
                  key={index}
                  className={`text-white bg-white/5 
                        border border-white/10 rounded-full
                        inline-block mx-1 md:mx-1
                        py-1 px-2 md:py-1 md:px-2.5
                        text-xs md:text-xs
                        transition
                        hover:bg-white/10`}
                >
                  {typeof tech === 'object' ? (
                    <span  className='flex items-center justify-center gap-1.5 cursor-pointer'>{tech.icon}{tech.name}</span>
                  ) : (
                    tech
                  )}
                </span>
              ))}
            </ul>
            <img
              loading="lazy"
              className="rounded-xl shadow-2xl shadow-white/10 aspect-video"
              src={image}
              alt={`Captura de pantalla del proyecto ${image}`}
            />
            <div className="flex items-center justify-center pt-10 gap-3">
                <a 
                  href={github} 
                  className="text-white flex justify-center items-center bg-white/5 border border-white/10 rounded-full gap-2 mx-1 md:mx-1 py-1 px-2 md:py-2 md:px-4 text-xs md:text-sm transition-all duration-200 hover:scale-110 hover:bg-white/10 mb-2 cursor-pointer"
                  target="_blank"
                >
                  <GitHubIcon />Source Code
                </a>
                <a 
                  href={link} 
                  className="text-white flex justify-center items-center bg-white/5 border border-white/10 rounded-full gap-2 mx-1 md:mx-1 py-1 px-2 md:py-2 md:px-4 text-xs md:text-sm transition-all duration-200 hover:scale-110 hover:bg-white/10  mb-2 cursor-pointer"
                  target="_blank"  
                >
                  <LiveProjectIcon />Live Demo
                </a>
            </div>
          </motion.article>
        ))}
      </SectionContainer>
    </>
  );
};

export default Projects;

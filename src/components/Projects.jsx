
import React, { useState } from "react";
import { PROJECTS } from "../lib/data"; 
import SectionContainer from "./SectionContainer";
import Brackets from '../icons/Brackets';
import Chevrons from "../icons/ChevronsDown";
import ChevronsUp from "../icons/ChevronsUp";
import GitHubIcon from "../icons/GitHubIcon";
import LiveProjectIcon from "../icons/LiveProjectIcon";
const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleDescription = (title) => {
    setExpandedProject((prevProject) => (prevProject === title ? null : title));
  };

  return (
    <>
      <SectionContainer id='projects'>
        <h2 className='font-bold text-4xl text-white justify-center gap-3 flex pb-16 items-center pt-16'><Brackets/>Projects</h2>

        {PROJECTS.map(({ image, title, description, tags,github,link }) => (
          <article key={title} className="mb-36 ">
            
            <h3 className="text-2xl font-semibold text-yellow-200 mb-2">{title}</h3>
            <div className={`text-lg text-white mb-0 text-pretty ${expandedProject === title ? '' : 'line-clamp-2'}`}>
            {description.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
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
          </article>
        ))}
      </SectionContainer>
    </>
  );
};

export default Projects;

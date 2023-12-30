// ProjectList.jsx
import React, { useState } from "react";
import { TAGS, PROJECTS } from "../lib/data"; // Actualiza la ruta de importación según tu estructura de archivos
import SectionContainer from "./SectionContainer";
import Brackets from '../icons/Brackets';
import Chevrons from "../icons/Chevrons";
import GitHubIcon from "../icons/GitHubIcon";
import LiveProjectIcon from "../icons/LiveProjectIcon";
const ProjectList = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleDescription = (title) => {
    setExpandedProject((prevProject) => (prevProject === title ? null : title));
  };

  return (
    <>
      <SectionContainer id='projects'>
        <h2 className='font-bold text-4xl text-white justify-center gap-3 flex pb-14 items-center pt-15'><Brackets/>Projects</h2>

        {PROJECTS.map(({ image, title, description, tags,github,link }) => (
          <article key={title} className="mb-32">
            <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-yellow-200 mb-2">{title}</h3>
                <div>
                <a href={github} className="text-white bg-white/5 
                        border border-white/10 rounded-full
                        inline-block mx-1 md:mx-1
                        py-1.5 px-1.5 md:py-2 md:px-2
                        text-xs md:text-sm
                        transition
                        hover:bg-white/10"><GitHubIcon/>
                </a>
                <a href={link} className="text-white bg-white/5 
                        border border-white/10 rounded-full
                        inline-block mx-1 md:mx-1
                        py-1.5 px-1.5 md:py-2 md:px-2
                        text-xs md:text-sm
                        transition
                        hover:bg-white/10"><LiveProjectIcon/>
                </a>
                </div>
                
            </div>
            <p className={`text-lg text-white mb-0 text-pretty ${expandedProject === title ? '' : 'line-clamp-2'}`}>
              {description}
            </p>
            {description.length > 100 && (
              <button
                onClick={() => toggleDescription(title)}
                className="flex items-center gap-1 text-blue-500 cursor-pointer"
              >
                {expandedProject === title ? 'Show Less' : 'Learn More'}<Chevrons/>
              </button>
            )}
            <ul className="flex gap-x-1 flex-row mb-3 pt-4">
              {tags.map((tech, index) => (
                <span
                  key={index}
                  className={`text-white bg-white/5 
                        border border-white/10 rounded-full
                        inline-block mx-1 md:mx-1
                        py-1 px-2 md:py-1 md:px-2
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
          </article>
        ))}
      </SectionContainer>
    </>
  );
};

export default ProjectList;

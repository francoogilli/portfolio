// Projects.jsx
import React from 'react';
import Project from './Project';
import {PROJECTS} from '../lib/data'; 
import Brackets from '../icons/Brackets';
function Projects() {
  return (
    <section id='projects' className='mb-7'>    
    <h2 className='font-bold text-4xl text-white justify-center gap-3 flex pb-2 items-center pt-15'><Brackets/>Projects</h2>
    <div className="projects-container">
      {PROJECTS.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          tags={project.tags}
          description={project.description}
          image={project.image}
          link={project.link}
          github={project.github}
        />
      ))}
    </div></section>

  );
}

export default Projects;

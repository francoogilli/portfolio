// Projects.jsx
import React from 'react';
import Project from './Project';
import {projectsData} from '../lib/data'; 
import Brackets from '../icons/Brackets';
function Projects() {
  return (
    <section id='projects' className='mb-7'>    
    <h2 className='font-bold text-4xl text-white justify-center gap-3 flex pb-2 items-center pt-15'><Brackets/>Projects</h2>
    <div className="projects-container">
      {projectsData.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          techStack={project.techStack}
          description={project.description}
          imageUrl={project.imageUrl}
          demoUrl={project.demoUrl}
          githubRepo={project.githubRepo}
        />
      ))}
    </div></section>

  );
}

export default Projects;

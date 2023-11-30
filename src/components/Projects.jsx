// Projects.jsx
import React from 'react';
import Project from './Project';
import {projectsData} from '../lib/data'; 

function Projects() {
  return (
    <section>    
    <h2 className='font-bold text-4xl text-white justify-center flex pb-16 items-center pt-15'>Projects</h2>
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

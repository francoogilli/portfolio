// src/components/Skills.js
import React from 'react';
import {skillsData} from '../lib/data'; 

const Skills = () => {


  return (
    <section>
      <h2 className='font-bold text-4xl text-white justify-center flex pb-16 items-center pt-10'>Skills</h2>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <li key={index} className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80">
            {skill.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;

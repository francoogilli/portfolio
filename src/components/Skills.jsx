// src/components/Skills.js
import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML' },
    { name: 'CSS'},
    { name: 'JavaScript'},
    { name: 'TypeScrypt'},
    // Agrega más habilidades según sea necesario
  ];

  return (
    <section className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>
      <h2 className="text-3xl capitalize mb-8 text-center text-white font-bold">My Skills</h2>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skills.map((skill, index) => (
          <li key={index} className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80">
            {skill.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;

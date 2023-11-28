// src/components/Skills.js
import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'React', level: 'Avanzado' },
    { name: 'JavaScript', level: 'Avanzado' },
    { name: 'HTML', level: 'Avanzado' },
    { name: 'CSS', level: 'Avanzado' },
    // Agrega más habilidades según sea necesario
  ];

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-semibold mb-5">Mis Habilidades</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">{skill.name}</h3>
            <p className="text-gray-600">{`Nivel: ${skill.level}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

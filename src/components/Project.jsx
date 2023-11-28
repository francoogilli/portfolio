// Portfolio.js
import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Proyecto 1',
    description: 'Descripción detallada del proyecto 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula neque nec dui commodo, vel aliquet libero pulvinar. Sed sit amet dapibus eros.',
    imageUrl: 'https://via.placeholder.com/1600x900', // URL de la imagen del proyecto con formato 16:9
    demoUrl: 'https://demo1.com', // Enlace a la demostración del proyecto
    githubUrl: 'https://github.com/proyecto1', // Enlace al repositorio de GitHub
  },
  // Agrega más proyectos según sea necesario
];

// En el archivo Project.jsx

function Project({ title, description, imageUrl, demoUrl, githubUrl }) {
  return (
    <div className="flex justify-center items-center h-screen px-6">
      <div className="max-w-lg"> {/* Agregado contenedor con ancho máximo */}
        <div className="bg-gray-800 p-4 rounded-3xl shadow-md">
          <div className="relative overflow-hidden rounded-xl aspect-w-16 aspect-h-9 mb-4">
            <img
              src={imageUrl}
              alt={title}
              className="object-cover w-full h-full rounded-sm"
            />
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
          <p className="text-gray-300 mb-6">{description}</p>
          <div className="flex justify-between">
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Ver Demo
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:underline"
            >
              Repositorio GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;


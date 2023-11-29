// Portfolio.js
import React from 'react';

// En el archivo Project.jsx

function Project({ title, description, imageUrl, demoUrl, githubRepo }) {
  return (
    <div className="flex justify-center items-center py-6 px-6">
      <div className="max-w-md">
        <div className="bg-zinc-800 p-4 rounded-3xl">
          <div className="relative overflow-hidden rounded-xl aspect-w-16 aspect-h-8 sm:aspect-w-4 sm:aspect-h-3 mb-4 drop-shadow-2xl">
            <img loading='lazy'
              src={imageUrl}
              alt={title}
              style={{ backgroundImage: `url('${imageUrl}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              className="w-full h-full object-cover rounded-sm"
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
              href={githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;



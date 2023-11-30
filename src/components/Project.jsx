// Project.jsx
import React, { useState } from 'react';
import Modal from './Modal'; // Importa el componente Modal

function Project({ title,techStack, description, imageUrl, demoUrl, githubRepo }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const maxDescriptionLength = 110;
  const truncatedDescription =
    description.length > maxDescriptionLength
      ? description.slice(0, maxDescriptionLength) + '...'
      : description;

  return (
    <div className="flex justify-center items-center py-6 px-6">
      <div className="max-w-md">
        <div className="bg-[#232323] p-4 rounded-3xl">
          <div
            className="relative overflow-hidden rounded-xl aspect-w-16 aspect-h-8 sm:aspect-w-4 sm:aspect-h-3 mb-4 drop-shadow-2xl cursor-pointer"
            onClick={openModal}
          >
            <img
              loading="lazy"
              src={imageUrl}
              alt={title}
              style={{ backgroundImage: `url('${imageUrl}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
          <div className="max-h-24 overflow-hidden mb-6 cursor-pointer" onClick={openModal}>
            <p className="text-gray-300">
              {truncatedDescription}{' '}
              {description.length > maxDescriptionLength && (
                <span className="text-[#0086ff] font-semibold m-1 cursor-pointer hover:underline" onClick={openModal}>
                  Learn More {">"} 
                </span>
              )}
            </p>
          </div>
          <div className="flex justify-evenly p-1">

                <a 
                  href={githubRepo} 
                  target="_blank" rel="noopener noreferrer" 
                  className="text-white text-sm bg-gradient-to-r from-black via-black to-black shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80  hover:bg-gradient-to-br focus:ring-4 font-medium rounded-xl first-letter:text-gray-400 px-3 py-2 flex items-center">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                  </svg>
                  <span className="ml-1">Source Code</span>
                </a>

                <a 
                  href={demoUrl} 
                  target="_blank" rel="noopener noreferrer" 
                  className="text-white text-sm bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 hover:bg-gradient-to-br focus:ring-4 font-medium rounded-xl px-3 py-2 flex items-center">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg"><path d="M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"></path>
                </svg>
                <span className="ml-1">Live Project</span>
                </a>

            </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          title={title}
          techStack={techStack}
          description={description}
          imageUrl={imageUrl}
          demoUrl={demoUrl}
          githubRepo={githubRepo}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default Project;

// Project.jsx
import React, { useState } from 'react';
import Modal from './Modal'; // Importa el componente Modal
import GitHubIcon from '../icons/GitHubIcon.jsx';
import LiveProjectIcon from '../icons/LiveProjectIcon.jsx';

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
      <div className="max-w-sm">
        <div className="bg-[#14181a] border-[#202328] border p-1 rounded-2xl">
          <div
            className="relative overflow-hidden rounded-xl aspect-w-16 aspect-h-8 sm:aspect-w-4 sm:aspect-h-3 mb-4 drop-shadow-2xl cursor-pointer"
            onClick={openModal}
          >
            <img
              loading="lazy"
              src={imageUrl}
              alt={title}
              style={{ backgroundImage: `url('${imageUrl}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              className="w-full h-full object-cover "
            />
          </div>
          <h3 className="text-xl font-bold mb-2 px-3 text-white">{title}</h3>
          <div className="max-h-24 overflow-hidden mb-6 cursor-pointer" onClick={openModal}>
            <p className="text-[#B0B5C0] text-[0.8125rem] px-3">
              {truncatedDescription}{' '}
              {description.length > maxDescriptionLength && (
                <span className="text-[#0086ff] font-semibold m-1 cursor-pointer hover:underline" onClick={openModal}>
                  Learn More {">"} 
                </span>
              )}
            </p>
          </div>
          <div className="flex justify-evenly px-3 py-2">

                <a 
                  href={githubRepo} 
                  target="_blank" rel="noopener noreferrer" 
                  className="text-white text-sm bg-gradient-to-r from-black via-black to-black shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80  hover:bg-gradient-to-br focus:ring-4 font-medium rounded-xl first-letter:text-gray-400 px-3 py-2 flex items-center">
                  <GitHubIcon />
                  <span className="ml-1">Source Code</span>
                </a>

                <a 
                  href={demoUrl} 
                  target="_blank" rel="noopener noreferrer" 
                  className="text-white text-sm bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 hover:bg-gradient-to-br focus:ring-4 font-medium rounded-xl px-3 py-2 flex items-center">
                  <LiveProjectIcon/>
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
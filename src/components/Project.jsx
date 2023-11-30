// Project.jsx
import React, { useState } from 'react';
import Modal from './Modal'; // Importa el componente Modal

function Project({ title, description, imageUrl, demoUrl, githubRepo }) {
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
        <div className="bg-zinc-800 p-4 rounded-3xl">
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
          <div className="max-h-24 overflow-hidden mb-6">
            <p className="text-gray-300">
              {truncatedDescription}{' '}
              {description.length > maxDescriptionLength && (
                <span className="text-blue-500 cursor-pointer hover:underline" onClick={openModal}>
                  Learn More 
                </span>
              )}
            </p>
          </div>
          <div className="flex justify-between">
            <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Ver Demo
            </a>
            <a href={githubRepo} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:underline">
              GitHub
            </a>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          title={title}
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

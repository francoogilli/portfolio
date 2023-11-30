import React, { useEffect } from 'react';

function Modal({ title, description, imageUrl, demoUrl, githubRepo, onClose }) {
  const paragraphs = description.split('\n');

  useEffect(() => {
    // Add overflow-hidden to body when the modal is open
    document.body.classList.add('overflow-hidden');

    // Remove overflow-hidden from body when the modal is closed
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 px-6 py-2 overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 focus:outline-none z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div className="relative max-w-3xl w-90vw h-full overflow-y-auto">
          <div className="bg-zinc-800 p-0 rounded-xl">
            <div className="relative overflow-hidden rounded-t-xl aspect-w-16 aspect-h-20 sm:aspect-w-4 sm:aspect-h-5 mb-4">
              <img
                loading="lazy"
                src={imageUrl}
                alt={title}
                style={{ backgroundImage: `url('${imageUrl}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                className="w-full h-full object-cover rounded-none"
              />
            </div>
            <h3 className="text-2xl text-white font-bold mb-2 px-5">{title}</h3>

            <div className="text-gray-300 mb-6 px-5">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex justify-between">
              <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline px-5 py-3">
                Ver Demo
              </a>
              <a href={githubRepo} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:underline px-5 py-3">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      <div onClick={onClose} className="fixed inset-0 z-40 bg-black bg-opacity-50 cursor-pointer"></div>
    </>
  );
}

export default Modal;

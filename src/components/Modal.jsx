import React, { useEffect, useRef } from 'react';
import GitHubIcon from '../icons/GitHubIcon.jsx';
import LiveProjectIcon from '../icons/LiveProjectIcon.jsx';

function Modal({ title, techStack, description, imageUrl, demoUrl, githubRepo, onClose }) {
  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  return (
    <>
      <div className="z-[999] fixed inset-0 px-3   flex items-center justify-center bg-black bg-opacity-70  overflow-y-auto">
      <button
          onClick={onClose}
          className="absolute top-1 right-0 p-2 text-gray-400 hover:text-gray-300 focus:outline-none z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div ref={modalRef} className="relative max-w-3xl w-90vw  h-full overflow-y-auto py-16" >
          <div className="bg-[#14181a]  p-0 rounded-3xl">
            <div className="relative overflow-auto rounded-t-3xl aspect-w-16 aspect-h-20 sm:aspect-w-4 sm:aspect-h-5 mb-4">
              <img
                loading="lazy"
                src={imageUrl}
                alt={title}
                style={{ backgroundImage: `url('${imageUrl}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                className="w-full h-full object-cover rounded-none"
              />
            </div>
            <h3 className="text-3xl text-white font-bold mb-2 px-5 pt-3">{title}</h3>
            <div className='text-[#0086ff]  mb-6 px-5'>
              {techStack.map((tech, index) => (
                <span key={index} className="inline-block bg-[#515157] rounded-full px-3 py-1 text-sm font-medium text-white mr-2 mb-2">
                  {tech}
                </span>
              ))}
            </div>
            <div className="text-[#B0B5C0] text-sm mb-6 px-5">
              {description.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex justify-evenly p-6">

                <a 
                    href={githubRepo} 
                    target="_blank" rel="noopener noreferrer" 
                    className="text-white bg-gradient-to-r from-black via-black to-black shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80 hover:bg-gradient-to-br focus:ring-4 font-semibold rounded-2xl first-letter:text-gray-400 px-5 py-3 flex items-center ">
                    <GitHubIcon/>
                <span className="ml-2">Source Code</span>
                </a>

                <a 
                    href={demoUrl} 
                    target="_blank" rel="noopener noreferrer" 
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 hover:bg-gradient-to-br focus:ring-4 font-semibold rounded-2xl px-5 py-3 flex items-center">
                    <LiveProjectIcon/>
                <span className="ml-2">Live Project</span>
                </a>

            </div>
          </div>
        </div>
      </div>
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black bg-opacity-50 cursor-pointer"
      ></div>
    </>
  );
}

export default Modal;

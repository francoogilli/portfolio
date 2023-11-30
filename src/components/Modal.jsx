import React, { useEffect, useRef } from 'react';

function Modal({ title, techStack, description, imageUrl, demoUrl, githubRepo, onClose }) {
  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.body.classList.add('overflow-hidden');
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.body.classList.remove('overflow-hidden');
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

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
        <div ref={modalRef} className="relative max-w-3xl w-90vw h-full overflow-y-auto">
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
            <h3 className="text-3xl text-white font-bold mb-2 px-5 pt-3">{title}</h3>
            <div className='text-yellow-300 mb-6 px-5'>
              <p>{techStack}</p>
            </div>
            <div className="text-slate-300 mb-6 px-5">
              {description.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex justify-between">
                <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline px-5 py-3">
                    Live Project
                </a>
                <a href={githubRepo} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:underline px-5 py-3 flex items-center">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                    </svg>
                    <span className="ml-2">Source Code</span>
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

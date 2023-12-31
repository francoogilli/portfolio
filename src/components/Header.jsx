import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from '../lib/data';

const Header = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [timeOfLastClick, setTimeOfLastClick] = useState(null);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      links.forEach((link) => {
        const section = document.querySelector(link.hash);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(link.name);
          }
        }
      });
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let timeoutId;
  
    const handleMouseActivity = () => {
      if (!isNavVisible) {
        setIsNavVisible(true);
      }
  
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
  
      timeoutId = setTimeout(() => {
        setIsNavVisible(false);
      }, 10000);
    };
  
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const scrollPosition = window.scrollY;
  
        links.forEach((link) => {
          const section = document.querySelector(link.hash);
          if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
  
            // Adjusted buffer to improve accuracy
            const buffer = 400;
  
            if (
              scrollPosition >= sectionTop - buffer &&
              scrollPosition < sectionTop + sectionHeight - buffer
            ) {
              setActiveSection(link.name);
            }
          }
        });
      });
    };
  
    document.addEventListener("mousemove", handleMouseActivity);
    document.addEventListener("scroll", handleScroll);
  
    return () => {
      document.removeEventListener("mousemove", handleMouseActivity);
      document.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [isNavVisible]);
  

  return (
    <header className="z-[999] relative">
      <AnimatePresence>
        {isNavVisible && (
          <motion.div
            className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-b-2xl  border-white border-opacity-40 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[28.8rem] sm:rounded-full bg-black/70 border-black/40 bg-opacity-80"
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1, transition: { duration: 0.5 } }}
            exit={{ y: -100, x: "-50%", opacity: 0 }}
          ></motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isNavVisible && (
          <nav
            ref={navRef}
            className="flex fixed top-[0.15rem] left-1/2 h-16 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0"
          >
            <ul className="flex gap-3 flex-nowrap sm:flex-nowrap w-full items-center justify-center gap-y-1 text-[1.1rem] sm:text-[0.9rem] md:text-[0.9rem] lg:text-[0.9rem] font-semibold text-gray-500 sm:w-[22rem] sm:gap-5">
              {links.map((link) => (
                <motion.li
                  className="h-3/4 flex items-center justify-center relative "
                  key={link.hash}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
                  exit={{ y: -100, opacity: 0 }}
                >
                  <a
                    href={link.hash}
                    className={`flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-400 dark:hover:text-gray-300 ${
                      activeSection === link.name ? " dark:text-white" : ""
                    }`}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    {link.name}

                    {link.name === activeSection && (
                      <motion.span
                        className="rounded-full absolute inset-0 -z-10 dark:bg-zinc-600 dark:bg-opacity-40"
                        layoutId="activeSection"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      ></motion.span>
                    )}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { links } from '../lib/data';

const Header = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [timeOfLastClick, setTimeOfLastClick] = useState(null);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const st = window.scrollY;

    if (st > lastScrollTop) {
      setScrollDirection("down");
      setIsVisible(false);
    } else {
      setScrollDirection("up");
      setIsVisible(st < 10); // Muestra el nav solo si el scroll es pequeño (puedes ajustar el valor según tus necesidades)
    }

    setLastScrollTop(st);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[28.8rem] sm:rounded-full dark:bg-[#202022] dark:border-black/40 dark:bg-opacity-90"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: isVisible ? 0 : -100, x: "-50%", opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
        }}
      ></motion.div>

      <nav
        className={`flex fixed top-[0.15rem] left-1/2 h-16 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 ${
          isVisible ? "" : "hidden"
        }`}
      >
        <ul className="flex gap-3 flex-nowrap sm:flex-nowrap w-full items-center justify-center gap-y-1 text-[1.1rem] sm:text-[0.9rem] md:text-[0.9rem] lg:text-[0.9rem] font-semibold text-gray-500 sm:w-[22rem] sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative "
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
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
                    className=" rounded-full absolute inset-0 -z-10 dark:bg-zinc-600 dark:bg-opacity-40"
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
    </header>
  );
};

export default Header;

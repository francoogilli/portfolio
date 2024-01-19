import React, { useEffect, useState } from "react";
import Close from "../icons/Close";
import Menu from "../icons/Menu";
import { links } from '../lib/data';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMenuInteracted, setMenuInteracted] = useState(false);

  useEffect(() => {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    if (!menuToggle || !mobileMenu) {
      return;
    }

    const handleMenuToggle = () => {
      setMenuOpen(!isMenuOpen);
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("flex");
    };

    menuToggle.addEventListener("click", handleMenuToggle);

    return () => {
      menuToggle.removeEventListener("click", handleMenuToggle);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (!isMenuInteracted) {
        const scrollPosition = window.scrollY;

        // Iterar sobre las secciones y determinar cuál está visible
        for (const link of links) {
          const sectionElement = document.getElementById(link.hash.substring(1));

          if (sectionElement) {
            const sectionTop = sectionElement.offsetTop - 200; // Ajuste para mejor detección
            const sectionBottom = sectionTop + sectionElement.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
              setActiveSection(link.hash);
              break;
            }
          }
        }
      }
    };

    // Escuchar el evento de desplazamiento
    window.addEventListener("scroll", handleScroll);

    // Eliminar el listener al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuInteracted]);

  const handleLinkClick = (linkHash) => {
    setMenuOpen(false);
    setActiveSection(linkHash);
    setMenuInteracted(true);

    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenu) {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("flex");
    }

    // Restablecer isMenuInteracted después de 500ms (ajusta el tiempo según sea necesario)
    setTimeout(() => {
      setMenuInteracted(false);
    }, 500);
  };

  return (
    <header id="header-nav" className="fixed top-0 z-50 w-full px-6 sm:py-2 py-2.5 ">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex flex-grow basis-0">
          <a href="/">
            {/* Contenido del logo */}
          </a>
        </div>

        {/* Menú de navegación para pantallas grandes */}
        <nav className="hidden md:flex flex-grow basis-0 items-center font-semibold  w-full gap-x-2 text-sm md:justify-center">
          {links.map((link) => (
            <a
              className={`px-4 py-2 text-white rounded-full ${link.hash === activeSection ? "bg-white/10" : ""}`}
              href={link.hash}
              key={link.hash}
              onClick={() => handleLinkClick(link.hash)}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* button menu mobile for small screen */}
        <button
          id="menu-toggle"
          className="flex flex-grow text-white basis-0 justify-end text-2xl md:hidden z-50"
        >
          <span id="menu-icon">{isMenuOpen ? <Close /> : <Menu />}</span>
        </button>

        <div className="hidden md:flex-grow md:basis-0 justify-end whitespace-nowrap md:flex md:text-base">
          <button className="md:text-sm lg:text-base md:py-2"></button>
        </div>
      </div>

      {/* Menú de navegación móvil para pantallas pequeñas */}
      <nav
        id="mobile-menu"
        className="bg-black/90 font-semibold text-white backdrop-blur-3xl hidden w-full flex-col items-center text-center text-2xl fixed top-0 left-0 right-0 h-screen place-content-center"
      >
        {links.map((link) => (
          <a
            className={`my-4 px-4 py-1 rounded-full ${link.hash === activeSection ? "bg-white/20" : ""}`}
            href={link.hash}
            key={link.hash}
            onClick={() => handleLinkClick(link.hash)}
          >
            {link.name}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;

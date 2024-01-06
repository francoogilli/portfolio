import React, { useEffect } from "react";
import Menu from "../icons/Menu";
const Header = () => {

  useEffect(() => {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuIcon = document.getElementById("menu-icon");

    if (!menuToggle || !mobileMenu || !menuIcon) {
      return;
    }

    const handleMenuToggle = () => {
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("flex");
      menuIcon.textContent = menuIcon.textContent === "☰" ? "✕" : "☰";
    };

    menuToggle.addEventListener("click", handleMenuToggle);

    return () => {
      menuToggle.removeEventListener("click", handleMenuToggle);
    };
  }, []);

  return (
    <header id="header-nav" className="fixed top-0 z-50 w-full px-6 sm:py-2 py-2.5 ">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex flex-grow basis-0">
          <a href="/">
          </a>
        </div>

        {/* Menú de navegación para pantallas grandes */}
        <nav className="hidden md:flex flex-grow basis-0 items-center font-semibold text-white w-full gap-x-2 text-sm md:justify-center">
          <a className="bg-transparent px-4 py-2 rounded-full" href="#">
            Home
          </a>
          <a className="bg-transparent px-4 py-2 rounded-full" href="#">
            About
          </a>
          <a className="bg-transparent px-4 py-2 rounded-full" href="#">
            Skills
          </a>
          <a className="bg-transparent px-4 py-2 rounded-full" href="#">
            Projects
          </a>
          <a className="bg-transparent px-4 py-2 rounded-full" href="#">
            Contact
          </a>
        </nav>

        {/* Botón de menú para pantallas pequeñas */}
        <button
          id="menu-toggle"
          className="flex flex-grow text-white basis-0 justify-end text-2xl md:hidden z-50"
        >
          <span id="menu-icon">☰</span>
        </button>

        <div className="hidden md:flex-grow md:basis-0 justify-end whitespace-nowrap md:flex md:text-base">
          <button className="md:text-sm lg:text-base md:py-2"></button>
        </div>
      </div>

      {/* Menú de navegación móvil para pantallas pequeñas */}
      <nav
        id="mobile-menu"
        className="bg-black/80 font-semibold text-white backdrop-blur-3xl hidden w-full flex-col items-center text-center text-2xl fixed top-0 left-0 right-0 h-screen place-content-center"
      >
        <a className="my-4" href="#">
          Home
        </a>
        <a className="my-4" href="#">
          About
        </a>
        <a className="my-4" href="#">
          Skills
        </a>
        <a className="my-4" href="#">
            Projects
        </a>
        <a className="my-4" href="#">
            Contact
        </a>
        
      </nav>
    </header>
  );
};

export default Header;

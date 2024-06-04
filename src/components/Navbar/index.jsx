"use client"
import { useEffect, useRef, useState } from "react";
import { RiCloseLine, RiMenuLine } from "@remixicon/react";
import animations from "@/utils/animations"

export default function Navbar({pages}) {

  // =============== SHOW MENU ===============
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // =============== ON SCROLL ===============
  const isScroll = useRef(false);

  const scrollHeader = () => { 
    window.scrollY >= 50 ? isScroll.current = true : isScroll.current = false; 
    updateHeaderBackground();
    updateActiveSections(); 
  };

 // =============== ADD BLUR TO HEADER ===============
  const updateHeaderBackground = () => {
    const HEADER = document.getElementById("header");
    if (HEADER) {
      // Si isScroll.current es verdadero
      HEADER.classList.toggle("isblur", Boolean(isScroll.current));
    }
  };

  // =============== SCROLL SECTIONS ACTIVE LINK ===============
  const updateActiveSections = () => {
    const SECTIONS = document.querySelectorAll("section[id]");
    const scrollY = window.pageYOffset;
    if(SECTIONS) {
      SECTIONS.forEach(el => {
        const sectionHght = el.offsetHeight,
        sectionTop = el.offsetTop -58,
        sectionId = el.getAttribute('id'),
        sectionClass = document.querySelector('.nav-item a[href*=' + sectionId + ']')
        if(sectionClass) {
          if(scrollY > sectionTop && scrollY < sectionTop + sectionHght) {
            sectionClass.classList.add('active-link')
          } else {
            sectionClass.classList.remove('active-link')
          }
        }
      })
    }
  };
  
  useEffect(() => {
    animations()
    window.addEventListener("scroll", scrollHeader);
    return () => {
      // limpia el evento de desplazamiento cuando el componente se desmonta para evitar posibles problemas de memoria.
      window.removeEventListener("scroll", scrollHeader);
    };
  });

  return (
    <header className="header fixed w-full top-0 left-0 z-50 after:transition-all after:duration-300" id="header">
      <nav className="nav section-container h-14 lg:h-[5.5rem] flex items-center justify-between">
        <a href="#" className="nav-logo text-xl lg:text-2xl font-semibold text-main">JBL</a>
        <div className={`navmenu ${isMenuOpen && 'isopen'} fixed lg:static left-0 top-[-100%] lg:top-0 w-full lg:w-max transition-all duration-500 bg-navmenu backdrop-blur-xl lg:bg-inherit lg:backdrop-blur-none`}>
           <ul className="nav-list text-center flex flex-col lg:flex-row gap-x-[4.5rem] gap-y-10">
              <li className="nav-item"><a onClick={toggleMenu} href="#home" className="nav-link active-link font-medium transition-colors duration-300 hover:text-main">Home</a></li>
              <li className="nav-item"><a onClick={toggleMenu} href="#about" className="nav-link font-medium transition-colors duration-300 hover:text-main">About</a></li>
              <li className="nav-item"><a onClick={toggleMenu} href="#favorite" className="nav-link font-medium transition-colors duration-300 hover:text-main">Favorites</a></li>
              <li className="nav-item"><a onClick={toggleMenu} href="#model" className="nav-link font-medium transition-colors duration-300 hover:text-main">Models</a></li>
           </ul>
         {/* <!-- close button --> */}
           <div className="nav-close flex lg:hidden text-2xl text-primary absolute top-4 right-6 pointer" onClick={toggleMenu}><RiCloseLine className="ri-close-line" /></div>
        </div>
         {/* <!-- toggle button --> */}
        <div className="nav-toggle lg:hidden text-2xl text-primary pointer" onClick={toggleMenu}><RiMenuLine className="ri-menu-line" /></div>
      </nav>
    </header>
  );
};

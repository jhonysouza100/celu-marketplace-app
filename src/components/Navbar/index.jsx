import { RiCloseLine, RiMenuLine } from "@remixicon/react";
import Link from "next/link";

export default function Navbar({pages}) {
  return (
    <header className="header fixed w-full top-0 left-0 bg-transparent z-50" id="header">
      <nav className="nav section-container h-14 lg:h-[5.5rem] flex justify-between items-center">
        <a href="#" className="nav-logo text-xl lg:text-2xl font-semibold text-main">JBL</a>
        {/* <div className="nav-menu fixed top[-100%] lg:top-0 left-0 w-full pt-[5.5rem] pb-[4.5rem]">
           <ul className="nav-list text-center flex flex-col lg:flex-row gx-[4.5rem] gap-y-10">
              <li className="nav-item"><a href="#home" className="nav-link active-link text-secondary font-medium transition-colors duration-300 hover:text-main">Home</a></li>
              <li className="nav-item"><a href="#about" className="nav-link text-secondary font-medium transition-colors duration-300 hover:text-main">About</a></li>
              <li className="nav-item"><a href="#favorite" className="nav-link text-secondary font-medium transition-colors duration-300 hover:text-main">Favorites</a></li>
              <li className="nav-item"><a href="#model" className="nav-link text-secondary font-medium transition-colors duration-300 hover:text-main">Models</a></li>
           </ul>
           <div className="nav-close flex lg:hidden text-2xl text-primary pointer absolute top-4 right-6"><RiCloseLine className="ri-close-line" /></div>
        </div> */}
         {/* <!-- toggle button --> */}
        <div className="nav-toggle lg:hidden text-2xl text-primary pointer"><RiMenuLine className="ri-menu-line" /></div>
      </nav>
    </header>
  );
};

import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="main w-full h-[15vh] bg-[#CADCFC] flex items-center justify-between shadow-lg relative px-5 md:px-10 py-5">
      <div className="left-content flex items-center">
        <img src="logo.png" alt="Logo" className="w-16 h-16 mr-4" />
        <a href="/"><span className="text-white text-2xl font-bold">Springdale Public School</span></a>
      </div>
      <div className="right-content hidden md:flex">
        <ul className="flex items-center justify-center gap-10 font-bold text-white">
          <li className="hover:text-[#9DB0EC] transition-colors duration-300">
            <a href="/about">About</a>
          </li>
          <li className="hover:text-[#9DB0EC] transition-colors duration-300">
            <a href="/academics">Academics</a>
          </li>
          <li className="hover:text-[#9DB0EC] transition-colors duration-300">
            <a href="/admissions">Admissions</a>
          </li>
          <li className="hover:text-[#9DB0EC] transition-colors duration-300">
            <a href="/faculty">Faculty</a>
          </li>
          <li className="hover:text-[#9DB0EC] transition-colors duration-300">
            <a href="/students">Students</a>
          </li>
          <li className="hover:text-[#9DB0EC] transition-colors duration-300">
            <a href="/gallery">Gallery</a>
          </li>
          <li className="hover:text-[#9DB0EC] transition-colors duration-300">
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white focus:outline-none ">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-[15vh] left-0 w-full bg-[#CADCFC] md:hidden flex flex-col items-center shadow-lg z-50 transform transition-transform duration-300">
          <ul className="flex flex-col items-center gap-5 py-5 font-bold text-white ">
            <li className="hover:text-[#9DB0EC] transition-colors duration-300">
              <a href="/about">About</a>
            </li>
            <li className="hover:text-[#9DB0EC] transition-colors duration-300">
              <a href="/academics">Academics</a>
            </li>
            <li className="hover:text-[#9DB0EC] transition-colors duration-300">
              <a href="/admissions">Admissions</a>
            </li>
            <li className="hover:text-[#9DB0EC] transition-colors duration-300">
              <a href="/faculty">Faculty</a>
            </li>
            <li className="hover:text-[#9DB0EC] transition-colors duration-300">
              <a href="/students">Students</a>
            </li>
            <li className="hover:text-[#9DB0EC] transition-colors duration-300">
              <a href="/gallery">Gallery</a>
            </li>
            <li className="hover:text-[#9DB0EC] transition-colors duration-300">
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;

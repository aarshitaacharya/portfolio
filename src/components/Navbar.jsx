import React, { useState } from 'react';
import StarIcon from '../assets/doodles/Star.svg'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#FFF8E1] border-b-2 border-black px-4 sm:px-6 py-3">
      <div className="flex items-center justify-between max-w-screen-lg mx-auto w-full">

        {/* Left: Star + Name */}
        <div className="flex items-center space-x-2">
          <img
            src={StarIcon}
            alt="logo star"
            className="w-5 h-5 hover:animate-spin-slow"
          />
          <span 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-bold text-black text-lg font-display pr-5 cursor-pointer hover:underline"
          >
            Aarshita
          </span>
        </div>

        {/* Hamburger Button (Always on Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black text-2xl focus:outline-none"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Nav Links (Desktop only) */}
        <ul className="hidden md:flex space-x-3 text-sm md:text-base font-medium text-black">
          <li><a href="#about" className="hover:bg-yellow-200 rounded-full px-3 py-2">About</a></li>
          <li><a href="#experience" className="hover:bg-yellow-200 rounded-full px-3 py-2">Experience</a></li>
          <li><a href="#projects" className="hover:bg-yellow-200 rounded-full px-3 py-2">Projects</a></li>
          <li><a href="#contact" className="hover:bg-yellow-200 rounded-full px-3 py-2">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden mt-2 space-y-2 text-sm font-medium text-black text-center">
          <li><a href="#about" onClick={() => setIsOpen(false)} className="block py-2 hover:bg-yellow-200 rounded">About</a></li>
          <li><a href="#experience" onClick={() => setIsOpen(false)} className="block py-2 hover:bg-yellow-200 rounded">Experience</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)} className="block py-2 hover:bg-yellow-200 rounded">Projects</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)} className="block py-2 hover:bg-yellow-200 rounded">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

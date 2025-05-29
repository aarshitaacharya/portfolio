import React from 'react';
import StarIcon from '../assets/doodles/Star.svg'; 

const Navbar = () => {
  return (
    <nav className="sticky top-0 flex justify-center z-50 mt-0 bg-[#FFF8E1]">
      <div className="flex items-center justify-between border-2 border-black max-w-[900px] px-6 py-3 bg-transparent">

        {/* Left: Star + Name */}
        <div className="flex items-center space-x-2">
          <img
            src={StarIcon}
            alt="logo star"
            className="w-5 h-5 hover:animate-spin-slow"
          />
          <span 
          onClick={()=> window.scrollTo({top:0, behavior:'smooth'})}
          className="font-bold text-black text-lg font-display pr-5 cursor-pointer hover:underline">Aarshita</span>
        </div>

        {/* Right: Nav Links */}
        <ul className="flex space-x-3 text-sm md:text-base font-medium text-black">
          <li><a href="#about" className="hover:bg-yellow-200 rounded-full px-3 py-2">About</a></li>
          <li><a href="#experience" className="hover:bg-yellow-200 rounded-full px-3 py-2">Experience</a></li>
          <li><a href="#projects" className="hover:bg-yellow-200 rounded-full px-3 py-2">Projects</a></li>
          <li><a href="#contact" className="hover:bg-yellow-200 rounded-full px-3 py-2">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

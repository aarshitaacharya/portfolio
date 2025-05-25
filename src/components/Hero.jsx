import React from 'react'
import Scribble from '../assets/doodles/3lines.svg'


const Hero = () => {
  return (
    <section className = "bg-[#FFF8E1] min-h-screen px-6 md: px-20 flex items-center">
      <div>
        <h1 className="text-4xl md:text-6xl font-semibold leading-snug font-display text-black">
          I design ✍🏻 top <br />
          notch{' '}
          <span className="relative inline-block px-1">
            <span className="absolute inset-0 bg-yellow-300 h-1/2 top-1/2 z-0 rounded-sm"></span>
            <span className="relative z-10">websites</span>
          </span>
        </h1>

        <div className = "relative inline-block">
          <button className = "mt-20 bg-white border-2 border-black text-black px-8 py-4 rounded-full font-semibold hover:bg-blue-200 transition-all">
          See Aarshita's Projects
        </button>

        <img src = {Scribble}
        alt = "scribble"
        className = "absolute -bottom-6 -right-7 w-8"
        />
        </div>

      </div>
    </section>
  )
}

export default Hero
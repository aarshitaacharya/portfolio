import React from 'react'
import Scribble from '../assets/doodles/3lines.svg'
import Rectange from '../assets/doodles/Rectangle.svg'
import ExplosionStar from '../assets/doodles/Explosion-star.svg'
import NameTag from '../assets/doodles/Name.svg'


const Hero = () => {
  return (
    <section className = "bg-[#FFF8E1] min-h-screen px-6 md:px-20 flex items-center">

      <div className = "grid grid-cols-1 md:grid-cols-2 items-center gap-8 w-full max-w-6xl mx-auto">
        
        {/* Left text content */}

        <div className = "text-center md:text-left">
        <div className="relative inline-block">
          <img
            src={ExplosionStar}
            alt="explosion star"
            className="absolute -top-20 left-6 w-20 md:-top-40 md:-left-10 md:w-40 z-10"
          />

          <h1 className="text-5xl md:text-6xl font-semibold leading-snug font-display text-black">
            I design ✍🏻 top <br />
            notch{' '}
            <span className="relative inline-block px-1">
              <span className="absolute inset-0 bg-yellow-300 h-1/2 top-1/2 z-0 rounded-sm"></span>
              <span className="relative z-10">websites</span>
            </span>
          </h1>
        </div>

        <div className="flex justify-center md:justify-start mt-6">
        <div className="relative w-fit">
          <button className="bg-white border-2 border-black text-sm md:text-base px-6 md:px-8 py-2 md:py-4 rounded-full font-semibold hover:bg-blue-200 transition-all">
            See Aarshita's Projects
          </button>

          <img
            src={Scribble}mt-4 w-20
            alt="scribble"
            className="absolute -bottom-5 -right-5 w-8"
          />
        </div>
      </div>


      </div>

            <img 
      src = {NameTag}
      alt="name tag - aarshita"
      className = "block md:hidden mx-auto mt-4 -mb-10 w-20"
      />

      <div className="relative flex justify-center mt-0">
        {/* Desktop: Name tag on left side of rectangle */}
        <img 
          src={NameTag}
          alt="name tag - aarshi"
          className="hidden md:block absolute -left-12 top-[40%] w-24"
        />

        {/* Rectangle image */}
        <img 
          src={Rectange}
          alt="hero illustration"
          className="w-[80%] max-w-[300px] sm:max-w-[380px]"
        />
      </div>

        
      </div> 
            

      
    </section>
  )
}

export default Hero
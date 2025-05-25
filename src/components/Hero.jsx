import React from 'react'
import Scribble from '../assets/doodles/3lines.svg'
import Rectange from '../assets/doodles/Rectangle.svg'
import ExplosionStar from '../assets/doodles/Explosion-star.svg'
import NameTag from '../assets/doodles/Name.svg'
import PinkStar from '../assets/doodles/Pink-Star-Bottom.svg'
import RedStar from '../assets/doodles/Red-Star.svg'
import Arrow from '../assets/doodles/Arrow.svg'


const Hero = () => {
  return (
    <section className = "relative bg-[#FFF8E1] min-h-screen px-6 md:px-20 flex items-center">

      <img src = {PinkStar}
      alt= "star"
      className='absolute top-0 left-0 w-12 md:top-0 md:left-0 md:w-16 z-0'
      />

      <img src = {PinkStar}
      alt = "star"
      className='absolute bottom-10 left-0 w-12 md:bottom-10 md:left-0 md:w-16 z-0'
      />

      <img src = {PinkStar}
      alt = "star"
      className='absolute top-0 right-0 w-12 md:top-10 md:right-0 md:w-16 z-0 rotate-[180deg]'
      />

      <img src = {RedStar}
      alt = "star"
      className='absolute bottom-20 right-0 w-12 md:bottom-20 md:right-40 md:w-24 z-0'
      />


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

      <img 
        src={Arrow}
        alt="arrow"
        className="block md:hidden mx-auto w-16 -mt-4 -mb-20 rotate-[-10deg]"
      />


      <div className="relative flex justify-center mt-0">
        {/* Desktop: Name tag on left side of rectangle */}


        <img 
          src={NameTag}
          alt="name tag - aarshi"
          className="hidden md:block absolute -left-12 top-[40%] w-24"
        />

      <img src = {Arrow}
          alt = "arrow"
          className='hidden md:block absolute left-[20%] top-[40%] w-20 rotate-[0deg]'
          />

        {/* Rectangle image */}
        <img 
          src={Rectange}
          alt="hero illustration"
          className="w-[85%] max-w-[300px] sm:max-w-[380px]"
        />
      </div>

        
      </div> 
            

      
    </section>
  )
}

export default Hero
import React from 'react';
import YourPhoto from '../assets/doodles/Aarshita.jpeg'; // update with your image
import Bulb from '../assets/doodles/Bulb.svg';

const About = () => {
  return (
    <section id="about" className="bg-[#fefef0] py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-black font-display text-center">
          About Me
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          
          {/* Left: Text */}
          <div>

            <p className="text-black text-base leading-relaxed text-justify mb-4">
              I’m Aarshita — currently pursuing my Master’s in Computer Science at the University of Houston.
              I specialize in building full stack applications with clean, scalable code and a touch of design flair.
            </p>

            <p className="text-black text-base mb-4 text-justify">
              I’ve worked on backend systems at <strong>Goldman Sachs</strong>, contributed to product innovation at <strong>IDO - a robotics startup</strong>, and presented ideas on national platforms like Shark Tank.
              My work bridges solid engineering with end-user focus.
            </p>

            <p className="text-black text-base mb-4 text-justify">
              I’m currently looking for full-time opportunities where I can contribute to impactful products, collaborate with passionate teams, and grow as a developer.
            </p>

            <p className="text-black text-base italic text-justify">
              Outside work, you’ll find me reading global news or jamming on my guitar — sometimes both at once.
            </p>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center">
          <div className="relative w-fit">
            <img
              src={YourPhoto}
              alt="Aarshi"
              className="border-4 border-black rounded-md w-full max-w-xs shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            />
            <img
              src={Bulb}
              alt="decoration"
              className="absolute -top-4 -left-4 w-10 md:w-12 rotate-[15deg]"
            />
            <div className="absolute bottom-2 right-2 bg-green-300 border-2 border-black text-sm px-3 py-1 rounded-full shadow font-medium">
              Open to Work
            </div>
          </div>
        </div>


        </div>
      </div>
    </section>
  );
};

export default About;

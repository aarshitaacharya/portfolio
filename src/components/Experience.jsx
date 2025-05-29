import React from 'react';
import RedStar from '../assets/doodles/Red-Star.svg';

const Experience = () => {
  const timeline = [
    {
      year: '2025',
      left: {
        title: 'University of Houston',
        subtitle: 'M.S. in CS',
        duration: 'Aug 2024 – May 2026',
        description: [
          'Pursuing advanced coursework in computer science with a focus on full stack development and scalable systems.'
        ]
      }
    },
    {
      year: '2023',
      right: {
        title: 'Goldman Sachs – Summer Analyst',
        duration: 'May 2023 – Jul 2023',
        description: [
          'Developed real-time data migration services using Java, Spring Boot, MongoDB.',
          'Reduced downtime from 11 hours to 0.3 seconds through migration trackers and schedulers.',
          'Achieved 90% test coverage using JUnit.'
        ]
      }
    },
    {
      year: '2021',
      right: {
        title: 'iDO – Software Developer',
        duration: 'May 2021 – Jan 2023',
        description: [
          'Built a responsive website with React and Node.js.',
          'Led iServe app development using React Native, Express.js, JWT, Stripe.',
          'Secured ₹500,000 in grants from national accelerators.'
        ]
      }
      
    },
    {
      year: '2021',
      right: {
        title: 'Microsoft – Project Intern',
        duration: 'Nov 2021 – Feb 2022',
        description: [
          'Deployed 2 cloud-based apps using Azure Functions, Blob Storage, and Cosmos DB.'
        ]
      }
    },
    {
      year: '2020',
      left: {
        title: 'Adani University',
        subtitle: 'B.E. in ICT',
        duration: 'Aug 2020 – May 2024',
        description: [
          'Graduated with Summa-cum-laude, won several hackathons, published papers in reputed journals and conferences.'
        ]
      }
    }
  ];

  return (
    <section id="experience" className="bg-[#FFF8E1] py-16 px-6 md:px-20">
      <h3 className="text-3xl font-display font-bold text-center mb-16">My Journey</h3>
      <p class="section-subtitle">Some places where I left a trail of commits and caffeine!</p>

      <div className="relative max-w-6xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-black"></div>

        {timeline.map((entry, index) => (
          <div key={index} className="relative mb-20 flex justify-between items-start w-full">
            {/* Left: Education */}
            <div className="w-5/12 text-right">
              {entry.left && (
                <>
                  <div className="inline-block border-2 border-black p-5 mb-4 bg-white shadow-[4px_4px_0px_0px_black] text-left float-right">
                    <img src={RedStar} alt="Red Star" className="absolute -top-3 -left-3 w-6 md:w-12" />
                    
                    <h4 className="font-bold text-black text-lg">{entry.left.title}</h4>
                    {entry.left.subtitle && <p className="text-sm">{entry.left.subtitle}</p>}
                    <p className="text-xs mt-1 font-mono">{entry.left.duration}</p>
                    <ul className="mt-2 list-disc list-inside text-sm text-gray-700">
                      {entry.left.description.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-sm font-mono text-black">{entry.year}</p>
                </>
              )}
            </div>

            {/* Center: Dot only */}
            <div className="w-1/12 flex flex-col items-center">
              <div className="w-4 h-4 bg-black rounded-full"></div>
            </div>

            {/* Right: Experience */}
            <div className="w-5/12 text-left space-y-6">
            
              {entry.right && (
                <>
                  <div className="inline-block border-2 border-black p-4 bg-white shadow-[4px_4px_0px_0px_black]">
                    <img src={RedStar} alt="Red Star" className="absolute -top-3 -right-3 w-6 md:w-12" />
                    
                    <h4 className="font-bold text-black text-lg">{entry.right.title}</h4>
                    <p className="text-xs mt-1 font-mono">{entry.right.duration}</p>
                    <ul className="mt-2 list-disc list-inside text-sm text-gray-700">
                      {entry.right.description.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-sm font-mono text-black mt-2 float-left">{entry.year}</p>
                </>
              )}
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

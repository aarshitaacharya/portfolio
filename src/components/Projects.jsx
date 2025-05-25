import React from 'react'
import ProjectHeading from '../assets/doodles/Projects.svg'

const Projects = () => {

 const projects = [
  {
    title: "AI Browser Agent",
    description: "Automates browser workflows using FastAPI, Playwright, React, Tailwind, and Ollama.",
    image: "https://img.icons8.com/fluency/240/ai.png",
    link: "https://github.com/aarshitaacharya/browser-agent"
  },
  {
    title: "Pixie Chat",
    description: "Chat app built with PHP, JavaScript, MySQL, and XAMPP.",
    image: "https://img.icons8.com/color/240/chat--v1.png",
    link: "https://github.com/aarshitaacharya/pixie-chat"
  },
  {
    title: "PEFT Techniques",
    description: "Compares LoRA, QLoRA, prompt tuning and more for efficient fine-tuning.",
    image: "https://img.icons8.com/doodle/240/settings--v1.png",
    link: "https://github.com/aarshitaacharya/peft-techniques"
  },
  {
    title: "CharityConnect",
    description: "Connects local charities with donors. Built with React Native, TypeScript, PostgreSQL. (under progress)",
    image: "https://img.icons8.com/color/240/heart-with-arrow.png",
    link: null // No link yet
  }
];
  return (
    <section id="projects" class="projects-section justify-content-between align-items-center">
    <img src={ProjectHeading} alt="Projects Heading" class="section-heading" />
    <p class="section-subtitle">A few little things I've built with a lot of love!</p>

    <div className="projects-grid">
            {projects.map((project, index) => (
            <div className="project-card" key={index}>
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.link ? (
                    <a
                    href={project.link}
                    className="external-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    ↗
                    </a>
                ) : (
                    <span className="external-link disabled-link">↗</span>
                )}
                </div>
            </div>
            ))}
        </div>
        </section>

  )
}

export default Projects
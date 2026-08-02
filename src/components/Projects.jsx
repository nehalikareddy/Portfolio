import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Portfolio",
      subtitle: "Responsive Developer Portfolio Experience",
      description: "A modern one-page portfolio built with React and Vite, designed to present my work, skills, and contact information with smooth animations, focused storytelling, and a polished visual identity.",
      tech: ["React", "Vite", "Framer Motion", "CSS"],
      image: "/portfolio-preview.png",
      github: "",
      external: ""
    },
    {
      title: "Clarix",
      subtitle: "AI-Powered Legal Intelligence Platform",
      description: "A secure, responsive web platform designed to demystify legal agreements. Built with React, Node.js, and MongoDB, it allows users to upload PDFs and uses Google Gemini 1.5 Flash to extract text, flag hidden liabilities, generate automated risk scores, and answer contextual questions via a built-in AI chat.",
      tech: ["React", "Node.js", "MongoDB", "Gemini API"],
      image: "/img.png",
      github: "https://github.com/nehalikareddy/Clarix",
      external: "https://clarix-psi.vercel.app"
    },
    {
      title: "Trace",
      subtitle: "Distributed Version Control System",
      description: "A full-stack, Git-inspired VCS with a custom CLI and web dashboard. Integrated AWS S3 for blob storage, MongoDB for commit metadata, and JWT/bcrypt for authentication. Real-time progress via Socket.IO and a React dashboard for commit graphs and analytics.",
      tech: ["React", "Node.js", "MongoDB", "Socket.IO", "AWS S3"],
      image: "/trace-preview.svg",
      github: "https://github.com/nehalikareddy/trace-backend",
      external: "https://trace-frontend-kappa.vercel.app/auth"
    },
    {
      title: "Nexus",
      subtitle: "AI-Integrated Video Conferencing Platform",
      description: "A real-time video conferencing app using MERN stack and WebRTC. Integrated Google Gemini 2.5 Flash for live transcript summaries and Web Speech API for live captions.",
      tech: ["MERN", "WebRTC", "Socket.IO", "Gemini API"],
      image: "/image copy.png",
      github: "https://github.com/nehalikareddy/Nexus-VideoCall",
      external: "https://nexus-videoconference-j11v.onrender.com"
    },
    {
      title: "Unshell",
      subtitle: "Autonomous AML & KYB Intelligence Graph",
      description: "React frontend and MERN backend for an AI-powered AML/KYB investigation platform. Built Express REST APIs, integrated MongoDB Atlas, and implemented investigation history and company workflow management.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      image: "/unshell-preview.svg",
      github: "https://github.com/nehalikareddy/unshell",
      external: "https://unshell-eight.vercel.app/"
    },
    {
      title: "Nestora",
      subtitle: "Full-Stack Accommodation Booking Platform",
      description: "A comprehensive property listing platform following MVC architecture with secure authentication via Passport.js, Mapbox Geocoding API for location mapping, and Cloudinary for image storage.",
      tech: ["Node.js", "Express.js", "MongoDB", "Mapbox"],
      image: "/image.png",
      github: "https://github.com/nehalikareddy/Nestora",
      external: "https://nestora-ms4s.onrender.com/listings"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title mono"
        >
          <span className="text-gradient">03.</span> Things I've Built
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="projects-intro"
        >
          A selection of projects where I combined product thinking, full-stack implementation, and thoughtful UX.
        </motion.p>

        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`project-feature-card ${index % 2 === 1 ? 'reverse' : ''}`}
            >
              {/* Image */}
              <div className="project-feature-image">
                <a href={project.external} target="_blank" rel="noreferrer">
                  <img src={project.image} alt={project.title} />
                  <div className="project-image-overlay">
                    <ExternalLink size={32} />
                  </div>
                </a>
              </div>

              {/* Content */}
              <div className="project-feature-content">
                <p className="project-number mono text-gradient">0{index + 1}.</p>
                <h3 className="project-feature-title">{project.title}</h3>
                <p className="project-feature-subtitle mono">{project.subtitle}</p>
                <div className="project-feature-desc card">
                  <p>{project.description}</p>
                </div>
                <ul className="project-tech mono">
                  {project.tech.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <div className="project-feature-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="proj-link">
                      <FaGithub size={22} />
                    </a>
                  )}
                  {project.external && (
                    <a href={project.external} target="_blank" rel="noreferrer" className="proj-link">
                      <ExternalLink size={22} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

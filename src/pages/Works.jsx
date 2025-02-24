import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion for animations
import ProjectModal from '../components/ProjectModal';
import './Works.css';

// Import project images
import comicCrafterImg from '../assets/project-image/comic-crafter-ai.png';
import passGeneratorImg from '../assets/project-image/pass-generator.png';
import spotifyPlayerImg from '../assets/project-image/spotify-music-player.png';

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = useMemo(() => [
    {
      category: 'ML Model',
      title: 'Comic Crafter Ai',
      description: 'AI-powered comic panel generator',
      longDescription: 'Comic Crafter AI is a web application that allows users to create custom comic strips using artificial intelligence. By leveraging OpenAI GPT-3.5 Turbo for story generation and DALL·E for image creation, the application transforms user prompts into visually engaging comics. Users can download their creations as PDFs or image files for sharing or printing.',
      image: comicCrafterImg,
      type: 'AI Application',
      client: 'Personal Project',
      tools: 'Python, Tailwind CSS, OpenAI GPT-3.5, DALL·E',
      tags: ['AI', 'ML', 'Web'],
      github: 'https://github.com/him4n-shu/comic_crafter_ai' // Re-added GitHub link
    },
    {
      category: 'Frontend',
      title: 'Password Generator',
      description: 'Secure password generator tool',
      longDescription: 'This project generates random passwords based on user-selected criteria like length, uppercase letters, numbers, and special characters. It helps users create strong and secure passwords for better online security.',
      image: passGeneratorImg,
      type: 'Web Tool',
      client: 'Open Source',
      tools: 'HTML, CSS, JavaScript',
      tags: ['Security', 'Web'],
      github: 'https://github.com/him4n-shu/Password-Generator' // Re-added GitHub link
    },
    {
      category: 'Frontend',
      title: 'Spotify Player',
      description: 'Music player with Spotify-like UI',
      longDescription: 'A Spotify-inspired music player that allows users to play, pause, and navigate through songs with a sleek UI. This project replicates some core Spotify features, enhancing the music streaming experience.',
      image: spotifyPlayerImg,
      type: 'Web App',
      client: 'Portfolio',
      tools: 'React, Tailwind CSS',
      tags: ['Music', 'React'],
      github: 'https://github.com/him4n-shu/Spotify-Music-Player' // Re-added GitHub link
    }
  ], []);

  return (
    <section id="works" className="works-section py-12" role="region" aria-label="Portfolio works">
      <div className="container">
        <div className="section-header text-center mb-8">
          <span className="subtitle text-green-500 text-lg font-semibold uppercase" role="heading" aria-level="3">PORTFOLIO</span>
          <motion.h2 
            className="title text-3xl font-bold text-gray-900 mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Recent Works
          </motion.h2>
        </div>

        <div className="works-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article 
              key={index} 
              className="work-item transition-all duration-300 hover:shadow-xl hover:scale-105" 
              role="article"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="work-content p-4 sm:p-6 bg-white rounded-lg border border-gray-100 shadow-md">
                <div className="project-info">
                  <div className="category">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="title-section mt-2">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <p className="description text-gray-600 mt-1">{project.description}</p>
                  </div>
                </div>
                <div className="image-wrapper mt-4 relative">
                  <motion.img 
                    src={project.image} 
                    alt={`${project.title} project thumbnail`}
                    loading="lazy"
                    className="project-image w-full h-auto object-cover rounded-lg"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 2, // Slight rotation for a dynamic effect
                      transition: { duration: 0.3 }
                    }}
                  />
                </div>
                <button 
                  className="expand-button absolute top-4 right-4 bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-green-600 transition"
                  onClick={() => setSelectedProject(project)}
                  onKeyPress={(e) => e.key === 'Enter' && setSelectedProject(project)}
                  aria-label={`View details for ${project.title}`}
                >
                  +
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Works;
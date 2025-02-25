import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    
    const modal = document.querySelector('[role="dialog"]');
    if (modal) {
      modal.focus();
      const closeButton = modal.querySelector('button[aria-label="Close project modal"]');
      if (closeButton) closeButton.focus();
    }

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isOpen]);

  const modalContent = (
    <div className="fixed inset-0 z-[9999]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="fixed inset-0 overflow-y-auto" style={{ scrollBehavior: 'smooth' }}>
        <div className="flex min-h-full items-start justify-center p-4 mt-24">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative bg-white rounded-xl overflow-hidden max-w-4xl w-full sm:max-w-lg md:max-w-2xl shadow-2xl border border-gray-100"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`project-modal-title-${project.title}`}
            style={{ maxHeight: 'calc(100vh - 12rem)' }}
            onClick={e => e.stopPropagation()}
          >
            {/* Image Section */}
            {project.image && (
              <div className="relative">
                <div className="w-full h-[40vh] sm:h-[30vh] bg-gray-100 animate-pulse">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </div>
                <button
                  onClick={onClose}
                  onKeyPress={(e) => e.key === 'Enter' && onClose()}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white hover:scale-105 transition-all duration-200"
                  aria-label="Close project modal"
                >
                  <span className="text-2xl text-gray-600">×</span>
                </button>
              </div>
            )}

            {/* Content Section */}
            <div className="overflow-y-auto p-8" style={{ maxHeight: project.image ? 'calc(60vh - 2rem)' : 'calc(80vh - 2rem)' }}>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-sm text-[#4ADE80] font-semibold tracking-wider" id={`project-modal-title-${project.title}`}>
                    {project.category}
                  </span>
                  <h2 className="text-2xl font-bold mt-2 text-gray-900">
                    {project.title}
                  </h2>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600 mb-1">Project Type - {project.type || 'Web Design'}</div>
                  <div className="text-sm text-gray-600 mb-1">Client - {project.client || 'eThemeStudio'}</div>
                  <div className="text-sm text-gray-600">Tools - {project.tools || 'React & Tailwind'}</div>
                </div>
              </div>

              <div className="prose max-w-none">
                <p className="text-gray-600 mb-6">
                  {project.longDescription || project.description}
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex gap-2">
                  {project.tags?.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-[#4ADE80] text-white rounded-lg font-medium hover:bg-green-600 transition-colors duration-200"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.604-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .319.218.694.825.576 4.765-1.589 8.199-6.086 8.199-11.387 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default ProjectModal;
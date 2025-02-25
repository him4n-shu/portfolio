import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import profilePic from '../assets/profile_pic.png';

const Herosection = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const navHeight = document.querySelector("nav")?.offsetHeight || 0; 
      const targetOffset = contactSection.offsetTop - navHeight; 
      window.scrollTo({
        top: targetOffset,
        behavior: 'smooth', 
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="flex flex-col md:flex-row items-center justify-center min-h-screen text-white bg-gradient-to-b from-transparent to-gray-900/50 p-8"
      role="banner"
    >
      {/* Left Section */}
      <motion.div 
        initial={{ opacity: 0, x: -100 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1, delay: 1 }} 
        style={{ willChange: "transform, opacity" }}
        className="text-center md:text-left md:mr-80 lg:mr-96"
      > 
        <motion.h3 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 0.5 }} 
          className="text-lg tracking-widest md:text-3xl font-bold"
        >
          HELLO I'M
        </motion.h3>
        <motion.h1 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 0.7 }} 
          className="text-4xl md:text-6xl font-bold text-green-500 tracking-wider"
        >
          Himanshu Kumar
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 0.9 }} 
          className="text-xl mt-4"
        >
          A Passionate{" "}
          <span className="text-green-500">
            <Typewriter
              words={["Software Engineer", "Web Developer", "Freelancer", "Tech Enthusiast"]}
              loop={true}
              cursor={true}
              cursorStyle="_"
              cursorClassName="text-green-500"
              typeSpeed={100}
              deleteSpeed={70}
              delaySpeed={1500}
            />
          </span>
        </motion.p>

        <motion.button 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 1.1 }} 
          className="mt-6 px-6 py-2 bg-green-500 rounded-lg text-lg font-semibold hover:bg-green-600 hover:shadow-md transition-all duration-300 relative group"
          onClick={handleScrollToContact} 
          aria-label="Scroll to Contact Himanshu Kumar"
        >
          SAY HELLO
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-sm text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Contact Me
          </span>
        </motion.button>
      </motion.div>

      {/* Right Section */}
      <div className="flex items-center mt-8 md:mt-0">
        {/* Profile Picture */}
        <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 overflow-hidden rounded-full mr-6 sm:mr-0 sm:mb-6">
          <img
            src={profilePic}
            alt="Himanshu Kumar"
            loading="lazy"
            onError={(e) => {
              e.target.src = '../assets/profile-pic.png'; 
            }}
            className="w-full h-full object-cover grayscale transition-all duration-500 hover:grayscale-0 hover:shadow-lg hover:scale-105"
          />
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col space-y-4">
          <a href="https://www.facebook.com/profile.php?id=100010182331281" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-300 hover:text-green-500 transition hover:scale-110">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.instagram.com/him4n_shu" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-300 hover:text-green-500 transition hover:scale-110">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.linkedin.com/in/himanshu-kumar-b4b799208" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-300 hover:text-green-500 transition hover:scale-110">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/him4n-shu" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-300 hover:text-green-500 transition hover:scale-110">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
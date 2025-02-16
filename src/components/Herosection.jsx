import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import profilePic from '../assets/profile-pic.png'; 

const Herosection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen text-white bg-transparent p-8">
      {/* Left Section: Heading and Subheading */}
      <div className="text-center md:text-left md:mr-65"> 
        {/* Heading */}
        <h3 className='text-l tracking-widest md:text-3xl font-bold'>HELLO I'M</h3>
        <h1 className="text-4xl md:text-6xl font-bold text-green-500 tracking-wider">Himanshu Kumar</h1>

        {/* Subheading with Typewriter Effect */}
        <p className="text-xl mt-4">
          A Passionate{" "}
          <span className="text-green-500">
            <Typewriter
              words={["Software Engineer", "Web Developer", "Freelancer"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </p>

        {/* Say Hello Button */}
        <button className="mt-6 px-6 py-2 bg-green-500 rounded-lg text-lg font-semibold hover:bg-green-600">
          SAY HELLO
        </button>
      </div>

      {/* Right Section: Profile Picture and Social Media Icons */}
      <div className="flex items-center mt-8 md:mt-0">
        {/* Profile Picture */}
        <div className="w-120 h-120  overflow-hidden"> 
          <img
            src={profilePic}
            alt="Himanshu Kumar"
            className="w-full h-full object-cover grayscale"
          />
        </div>

        {/* Social Media Section (Vertical) */}
        <div className="flex flex-col space-y-4 ml-6">
          <a href="https://www.facebook.com/profile.php?id=100010182331281" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-300 hover:text-green-500 transition">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.instagram.com/him4n_shu" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-300 hover:text-green-500 transition">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.linkedin.com/in/himanshu-kumar-b4b799208" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-300 hover:text-green-500 transition">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/him4n-shu" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-300 hover:text-green-500 transition">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
import React from "react";
import profilePic from "../assets/profile-pic.png";
import bgAbout from "../assets/bg-about.jpg";
import Skills from "../components/Skills";

const AboutSection = () => {
  return (
    <div id="about" className="about-area relative bg-white w-full min-h-screen z-10"
      style={{
        backgroundImage: `url(${bgAbout})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        paddingBottom: '2rem'
      }}
    >
      <div className="absolute inset-0 bg-white/90"></div>
      <div className="container relative mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row justify-center items-start gap-12">
          {/* Left Side - Profile Picture Section */}
          <div className="relative w-72 h-72 md:w-80 md:h-80 mb-8 lg:mb-0 mt-30">
            {/* Profile Picture Container */}
            <div className="relative w-full h-full z-10">
              <img
                src={profilePic}
                alt="Himanshu Kumar"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 shadow-xl"
              />
            </div>
          </div>

          {/* Right Side - About Me Section */}
          <div className="w-full lg:w-1/2 lg:pl-12 mt-5">
            <div className="about-content relative">
              {/* Title and Heading */}
              <div className="mb-6">
                <span className="text-green-500 text-lg font-semibold uppercase">
                  About Me
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mt-2">
                  Hi, I am Himanshu Kumar
                </h2>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-4 w-4/3">
              I am a passionate Web Developer with expertise in React, Tailwind CSS, and modern UI/UX design. I specialize in creating responsive, user-friendly, and high-performance applications.<br/>
               <br/>
               With a strong foundation in Artificial Intelligence & Machine Learning, I blend technology with creativity to build seamless digital experiences. Constantly learning and experimenting, I aim to develop innovative solutions that make an impact.<br/>
               <br/>
               🔹 <b>Skills:</b> React.js, Node.js, Tailwind CSS, JavaScript, Python, Firebase<br/>
               🔹 <b>Interests:</b> AI, Open-Source, Web Performance Optimization
              </p>

              {/* Horizontal Line */}
              <div className="w-4/3 h-px bg-gray-200 my-8"></div>

              {/* Personal Details Grid */}
              <div className="grid grid-cols-2 gap-4 w-4/3">
                <div className="flex items-center">
                  <span className="font-semibold w-32">Name:</span>
                  <span>Himanshu Kumar</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold w-32">Phone:</span>
                  <span>+91 7070464508</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold w-32">Age:</span>
                  <span>22 Years</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold w-32">Email:</span>
                  <span>himanshu7554@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold w-32">Occupation:</span>
                  <span>Web Developer</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold w-32">Nationality:</span>
                  <span>Indian</span>
                </div>
              </div>

              {/* Horizontal Line */}
              <div className=" h-px bg-gray-200 mb-4 w-4/3 mt-4"></div>
            </div>
          </div>
        </div>

        {/* Skills Section - Full Width */}
        <div className="w-full mt-8">
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

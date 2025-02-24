import React from 'react';
import tailwindLogo from '../assets/skills-logo/Tailwind-logo.webp';
import githubLogo from '../assets/skills-logo/github-logo.webp';
import javaLogo from '../assets/skills-logo/java-logo.webp';
import jsLogo from '../assets/skills-logo/js-logo.webp';
import nodejsLogo from '../assets/skills-logo/node-js-logo.webp';
import pythonLogo from '../assets/skills-logo/python-logo.webp';
import reactLogo from '../assets/skills-logo/react-logo.webp';
import sqlLogo from '../assets/skills-logo/sql-logo.webp';

const Skills = () => {
  const skills = [
    { name: 'React', logo: reactLogo },
    { name: 'JavaScript', logo: jsLogo },
    { name: 'Node.js', logo: nodejsLogo },
    { name: 'Python', logo: pythonLogo },
    { name: 'Java', logo: javaLogo },
    { name: 'SQL', logo: sqlLogo },
    { name: 'Tailwind CSS', logo: tailwindLogo },
    { name: 'GitHub', logo: githubLogo },
    // Duplicate for smooth infinite scroll
    { name: 'React', logo: reactLogo },
    { name: 'JavaScript', logo: jsLogo },
    { name: 'Node.js', logo: nodejsLogo },
    { name: 'Python', logo: pythonLogo },
    { name: 'Java', logo: javaLogo },
    { name: 'SQL', logo: sqlLogo },
    { name: 'Tailwind CSS', logo: tailwindLogo },
    { name: 'GitHub', logo: githubLogo },
  ];

  return (
    <div className="h-32 bg-transparent relative overflow-hidden">
      <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white,transparent)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:bg-[linear-gradient(to_left,white,transparent)] after:content-['']">
        <div className="animate-scroll flex w-[calc(320px*16)] gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-6 w-[320px] rounded-lg border border-gray-200 px-6 py-4 bg-white/80 backdrop-blur-sm shadow-sm hover:bg-white/90 transition-all duration-300"
            >
              <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                className="w-16 h-16 object-scale-down rounded-full bg-white p-2.5 flex items-center justify-center"
                style={{ objectFit: 'scale-down' }}
              />
              <p className="text-lg font-medium text-gray-800">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

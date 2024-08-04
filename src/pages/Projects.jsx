import React from 'react';
import mymedicalarchive from "../assets/mymedicalarchive.png";
import tacticmanager from "../assets/tacticmanager.png";
import mooddrivenmelodies from "../assets/mooddrivenmelodies.png";
import memorymatch from "../assets/memorymatch.png";

const projects = [
  {
    image: mymedicalarchive, 
    title: 'MyMedicalArchive',
    languages: ['React', 'Tailwind CSS', 'Cloudinary', 'Firebase'],
    github: 'https://github.com/linaabuelezz/myMedicalArchive',
    website: 'https://my-medical-archive.vercel.app/',
  },
  {
    image: tacticmanager, 
    title: 'Tactic-manager',
    languages: ['React', 'Tailwind CSS', 'React-Youtube'],
    github: 'https://github.com/linaabuelezz/tactic-manager',
    website: 'https://tactic-manager.vercel.app/',
  },
  {
    image: mooddrivenmelodies, 
    title: 'Mood-driven melodies',
    languages: ['React', 'Tailwind CSS', 'Google Cloud', 'Spotify API'],
    github: 'https://github.com/linaabuelezz/Mood-driven-Melodies',
    website: 'https://mood-driven-melodies.vercel.app/',
  },
  {
    image: memorymatch,
    title: 'Memory-match',
    languages: ['Next.js', 'Typescript', 'Tailwind CSS', 'Prisma','Node.js'],
    github: 'https://github.com/linaabuelezz/memory-match',
    website: 'https://memory-match-chi.vercel.app/'
  }
];

const Projects = () => {
  return (
    <div className="mt-16 max-w-7xl mx-auto p-6 bg-pink-100">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 relative group">
          Projects
          <span className="absolute left-0 bottom-0 w-0 h-1 bg-black transition-all duration-500 group-hover:w-36"></span>
        </h1>
        <p className="text-lg">A showcase of my projects, including technologies used and links to GitHub repositories and live demos.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="p-4 border border-gray-300 bg-white rounded-lg shadow-md">
            <img src={project.image} alt={`${project.title} screenshot`} className="w-full h-48 object-cover mb-4" />
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <div className="flex justify-between items-center mb-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                GitHub
              </a>
              <a href={project.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Website
              </a>
            </div>
            <div className="flex flex-wrap">
              {project.languages.map((language, i) => (
                <span key={i} className="bg-gray-200 text-gray-800 text-sm font-semibold mr-2 mb-2 p-1.5 rounded">
                  {language}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

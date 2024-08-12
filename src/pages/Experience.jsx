import React from 'react';
import iseelogo from "../assets/iseelogo.png";
import gcclogo from "../assets/gcclogo.jpg";
import smartlylogo from "../assets/smartlylogo.png";
import azlogo from "../assets/AZlogo.png";

const Experience = () => {
  const experiences = [
    {
      company: 'Astrazeneca',
      logo: azlogo, 
      title: 'Digital Health intern',
      duration: 'July 2024',
      description: [
        'Worked with Digital Health team to find new solutions and ensure requirements are met.',
        'Researched many topics and prepared presentations to talk about in front of team, as well as being present in important meetings and taking notes.',
        'Worked on many future projects and helped create plan and prepare team.',
      ],
    },
    {
      company: 'Smartly Techs',
      logo: smartlylogo, 
      title: 'Frontend Developer',
      duration: 'June 2024 - Aug 2024',
      description: [
        'Worked alongside a developer to learn and develop interactive websites.',
        'Worked with various frontend technologies and studied databases.',
        'Had deadlines to follow and studied hard javascript concepts.',
      ],
    },
    {
      company: 'Guelph Coding Club',
      logo: gcclogo, 
      title: 'Director of Communications',
      duration: 'Jun 2024 - present',
      description: [
        'Designed ads for GCC events.',
        'Shared advertising plan with platform details and potential costs.',
        'Coordinate with SOCIS for social media ads on GryphSlack, instagram, twitter, LinkedIn and discord servers.',
      ],
    },
    {
      company: 'The International School of Elite Education',
      logo: iseelogo, 
      title: 'English Teaching Assistant',
      duration: 'Nov 2022 - March 2023',
      description: [
        'Developed and maintained consistent, positive relationships with students.',
        'Corrected over 150 quizzes and tests, including writing assignments.',
        'Grew ability to work independently while completing assigned tasks without supervision.',
      ],
    },
  ];

  return (
    <div className="mt-16 max-w-7xl mx-auto p-6 bg-stone-200">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 relative group">
          Experience
          <span className="absolute left-0 bottom-0 w-0 h-1 bg-black transition-all duration-500 group-hover:w-48"></span>
        </h1>
        <p className="text-lg">Here is a summary of my professional experience and the roles I've undertaken over the years.</p>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-1/4 mb-8 md:mb-0">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-dotted border-gray-400"></div>
        </div>
        <div className="w-full md:w-1/2">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 p-4 border border-gray-300 bg-white rounded-lg shadow-md flex">
              <img src={exp.logo} alt={`${exp.company} logo`} className="w-12 h-12 mr-4" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold mb-2 flex items-center">
                    {exp.title}
                  </h2>
                  <span className="text-lg text-gray-500">{exp.duration}</span>
                </div>
                <hr className="border-b-2 border-black w-24 mb-4" />
                <ul className="list-disc list-inside ml-5 text-lg">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

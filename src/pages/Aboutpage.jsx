import React, { useState } from 'react';
import { Link, Element } from 'react-scroll';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const About = () => {
  const [openSections, setOpenSections] = useState({
    education: false,
    clubs: false,
    extracurriculars: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleFootballClick = () => {
    window.open(
      'https://drive.google.com/file/d/1E4oGtnGj5aAp7r2lJrxpttCgaBEUFMyL/view?usp=sharing',
      '_blank'
    );
  };

  return (
    <div className="mt-16 max-w-7xl mx-auto p-6 flex bg-violet-200">
      <div className="w-3/4 pr-6">
        <div className="mb-8 p-4">
          <h1 className="text-4xl font-semibold mb-4 relative group">
            About Me
          <span className="absolute left-0 bottom-0 w-0 h-1 bg-black transition-all duration-500 group-hover:w-40"></span>
          </h1>
          <p className="text-lg">
            Welcome to my About Me page! Here you'll find information about my education, involvement in clubs and organizations, and extracurricular activities. Click on the titles to expand each section and learn more about my experiences and interests.
          </p>
        </div>
        <Element name="education">
          <Section
            title="Education"
            isOpen={openSections.education}
            onToggle={() => toggleSection('education')}
          >
            <p>
              I was an IGCSE student in high school, so I took 3 A levels which
              are considered university-level courses and one of the hardest
              systems to be a part of. For university, I am attending the
              University of Guelph, majoring in Computer Science and minoring in
              Biology. Some relevant courses I've taken are:
            </p>
            <ul className="list-disc list-inside ml-5">
              <li>CIS*2500 - Intermediate Programming</li>
              <li>CIS*2910 - Discrete Mathematics 2</li>
              <li>MATH*1160 - Linear Algebra 1</li>
              <li>BIOL*1090 - Molecular and Cellular Biology</li>
              {/* Add more bullet points as needed */}
            </ul>
          </Section>
        </Element>
        <Element name="clubs">
          <Section
            title="Clubs and Organizations"
            isOpen={openSections.clubs}
            onToggle={() => toggleSection('clubs')}
          >
            <ul className="list-disc list-inside ml-5">
              <li>GCC (Guelph Coding Club) - Director of Communications</li>
              <li>MIT (Muslims In Tech) - Software Developer</li>
              <li>SOCIS (Society of Computing and Information Science) - Technology team member</li>
              <li>GDSC (Guelph Developer Student Club) - Member</li>
              <li>Guelph MSA (Muslim Student Association) - Member</li>
              {/* Add more bullet points as needed */}
            </ul>
          </Section>
        </Element>
        <Element name="extracurriculars">
          <Section
            title="Extracurriculars"
            isOpen={openSections.extracurriculars}
            onToggle={() => toggleSection('extracurriculars')}
          >
            <p>
              Currently, I play intramural soccer; however, I used to play soccer
              semi-professionally, playing in the Egyptian Women's League. You can
              see proof from the Egyptian Federation{' '}
              <span
                className="text-blue-500 hover:cursor-pointer"
                onClick={handleFootballClick}
              >
                here
              </span>
              . Not only do I play guitar occasionally, but I also love
              volunteering at various kinds of organizations to help out in any
              way I can. One example is the time I volunteered at Dar al Fotooh,
              which is an orphanage in Egypt.
            </p>
          </Section>
        </Element>
      </div>
    </div>
  );
};

const Section = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="mb-8 p-4 border border-gray-300 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <h2
          className="text-2xl font-semibold mb-2 hover:text-gray-500 hover:cursor-pointer"
          onClick={onToggle}
        >
          {title}
        </h2>
        <div onClick={onToggle} className="hover:cursor-pointer">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </div>
      <hr className="border-b-2 border-black w-24 mb-4" />
      {isOpen && <div className="text-lg">{children}</div>}
    </div>
  );
};

export default About;

import React, { useState } from 'react';
import { Element } from 'react-scroll';
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

  const handleClubClick = (club) => {
    if (club === 'SOCIS') {
      window.open('https://clubs.socis.ca/', '_blank');
    } else if (club === 'GCC') {
      window.open('https://linktr.ee/socis?lt_utm_source=lt_share_link#332480509', '_blank'); 
    } else if (club === 'GDSC') {
      window.open('https://www.gdscguelph.com/', '_blank'); 
    } else if (club === 'MSA') {
      window.open('https://www.uogmsa.com/', '_blank'); 
    }
  };

  const handleDarClick = () => {
    window.open('https://www.bizmideast.com/EG/dar-al-fotouh-for-orphans-0114-404-4957', '_blank');
  };

  const handleFootballClick = () => {
    window.open('https://drive.google.com/file/d/1E4oGtnGj5aAp7r2lJrxpttCgaBEUFMyL/view?usp=sharing', '_blank');
  };

  return (
    <div className="mt-16 max-w-7xl mx-auto p-6 flex flex-col lg:flex-row bg-violet-200">
      <div className="w-full lg:w-3/4 pr-0 lg:pr-6">
        <div className="mb-8 p-4">
          <h1 className="text-3xl lg:text-4xl mb-4 relative group font-bold">
            About Me
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-black transition-all duration-500 group-hover:w-40"></span>
          </h1>
          <p className="text-base lg:text-lg">
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
              I was an IGCSE student in high school, so I took 3 A levels which are considered university-level courses and one of the hardest systems to be a part of. For university, I am attending the University of Guelph, majoring in Computer Science and minoring in Biology. Some relevant courses I've taken are:
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
              <li><span className="text-blue-500 hover:cursor-pointer" onClick={() => handleClubClick('GCC')}>GCC</span> (Guelph Coding Community) - Director of Communications</li>
              <li><span className="text-blue-500 hover:cursor-pointer" onClick={() => handleClubClick('MIT')}>MIT</span> (Muslims In Tech) - Software Developer</li>
              <li><span className="text-blue-500 hover:cursor-pointer" onClick={() => handleClubClick('SOCIS')}>SOCIS</span> (Society of Computing and Information Science) - Technology team member</li>
              <li><span className="text-blue-500 hover:cursor-pointer" onClick={() => handleClubClick('GDSC')}>GDSC</span> (Guelph Developer Student Club) - Member</li>
              <li><span className="text-blue-500 hover:cursor-pointer" onClick={() => handleClubClick('MSA')}>Guelph MSA</span> (Muslim Student Association) - Member</li>
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
              Currently, I play intramural soccer; however, I used to play soccer semi-professionally, playing in the Egyptian Women's League. You can see proof from the Egyptian Federation{' '}
              <span className="text-blue-500 hover:cursor-pointer" onClick={handleFootballClick}>
                here
              </span>
              . Not only do I play guitar occasionally, but I also love volunteering at various kinds of organizations to help out in any way I can. One example is the time I volunteered at <span className='text-blue-500 hover:cursor-pointer' onClick={handleDarClick}>Dar al Fotooh</span>, which is an orphanage in Egypt.
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
          className="text-xl lg:text-2xl font-semibold mb-2 hover:text-gray-500 hover:cursor-pointer"
          onClick={onToggle}
        >
          {title}
        </h2>
        <div onClick={onToggle} className="hover:cursor-pointer">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </div>
      <hr className="border-b-2 border-black w-24 mb-4" />
      {isOpen && <div className="text-base lg:text-lg">{children}</div>}
    </div>
  );
};

export default About;

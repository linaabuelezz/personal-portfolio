import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleResumeClick = () => {
    window.open('https://drive.google.com/file/d/1K98QKfhA64irS7LK2dSMGNjE-QOIUKmJ/view?usp=sharing', '_blank');
  };

  return (
    <nav
    className={`fixed top-0 w-full z-50 transition-colors duration-300 ${ isScrolled ? 'bg-opacity-80 bg-white' : 'bg-transparent'}`}
    >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold">Lina Abu Elezz</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-gray-800 hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link to="/about" className="text-gray-800 hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium">About Me</Link>
                <Link to="/experience" className="text-gray-800 hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium">Experience</Link>
                <Link to="/projects" className="text-gray-800 hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium">Projects</Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button  onClick={handleResumeClick}  className="bg-blue-400 hover:bg-blue-700 hover:scale-110 text-white font-bold py-2 px-4 rounded">
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;

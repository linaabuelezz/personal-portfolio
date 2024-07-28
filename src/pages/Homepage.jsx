import React from 'react';
import myPhoto from '../assets/myPhoto.png';

const Home = () => {
  return (
    <div className="h-screen mt-16 bg-gray-300 flex items-center justify-center">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
        <img
          src={myPhoto}
          alt="Lina Abu Elezz"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-gray-300"
        />
        <div className="md:ml-8 text-center md:text-left mt-4 md:mt-0">
          <h1 className="text-4xl md:text-6xl font-bold">Lina Abu Elezz</h1>
          <p className="mt-4 text-lg md:text-xl">
            Hello! I'm a second year student at the <span className="font-bold">University of Guelph</span> currently completing a <span className="font-bold">bachelor of computing</span> with a <span className="font-bold">minor in biology</span>. I'm a girl from Egypt with a passion for coding, playing soccer and travelling. Feel free to reach out to me through any of the socials provided below!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

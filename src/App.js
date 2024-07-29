import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import About from './pages/Aboutpage';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about"
          element={<About />} />
        <Route path="/experience"
          element={<Experience />} />
        <Route path="/projects"
          element={<Projects />} />
        <Route path="/"
          element={<Homepage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

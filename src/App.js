import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';

const App = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default App;


import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';

const App = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Projects />
    </>
  );
}

export default App;


import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';

const App = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
    </>
  );
}

export default App;


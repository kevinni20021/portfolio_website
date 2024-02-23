import React from 'react';
import navbarpic from "./navbarpic.png";
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='container'>
          <img src = {navbarpic} alt ="Kevin Ni"></img>
          <div className='name'>
              Kevin Ni
          </div>
          <nav>
              <a href = "#about" className='links'>About Me</a>
              {/* <a href = "#projects"className='links'>Experience</a> */}
              <a href = "#projects"className='links'>Projects</a>
              <a href = "#contact"className='links'>Contact</a>
          </nav>
        </div>
    </div>
  )
}

export default Navbar
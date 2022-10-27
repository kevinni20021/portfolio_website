import React from 'react';
import navbarpic from "./navbarpic.png";
import './Navbar.css';

const Navbar = () => {
  return (
    <header>
        <div className='container'>
        <img src = {navbarpic} alt ="Kevin Ni"></img>
        <div className='name'>
            Kevin Ni
        </div>
        <nav>
            <a href = "#about">About Me</a>
            <a href = "projects">Projects</a>
            <a href = "contact">Contact</a>
        </nav>
        </div>
    </header>
  )
}

export default Navbar
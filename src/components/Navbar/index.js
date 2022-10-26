import React from 'react';
import navbarpic from "./navbarpic.png";
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <div>
        <img src = {navbarpic} alt ="Kevin Ni"></img>
        <div className='Name'>
            Kevin Ni
        </div>
        <nav>
            <a href = "about me">
                About Me
            </a>
            <a href = "projects">
                Projects
            </a>
            <a href = "contact">
                Contact
            </a>
        </nav>
        </div>
    </header>
  )
}

export default Navbar
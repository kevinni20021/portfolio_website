import React from 'react';
import './about.css';
import aboutpic from "./aboutpic.png";
function About() {
  return (
    <div id = "about" className='about-container'>
        <img src = {aboutpic} className='about-image' alt = 'about'>
        </img>
        <h1 className='about-title'>
            About
        </h1>
        <p1 className= 'about-p1'>
            I am a second-year student at the University of Toronto specializing in computer science, majoring in statistics and minoring in mathematics.
            <br></br>
            I am a member of Google Developer Student Club @ UTM and am also an anaylst for UTM Capital Management.
        </p1>
        <p2 className = 'about-p2'>
            I love to code, travel, cook, and learn about new things in my spare time. I especially enjoy attending hackathons as I get to challenge myself and learn new skills.
            <br></br>
            Whether its machine learning or web programming, I’m always willing to learn new skills and experiment with them.
        </p2>
    </div>
  )
}

export default About
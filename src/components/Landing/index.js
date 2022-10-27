import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import background from './background.jpg' 
import './landing.css'

function Landing() {
  return (
    <div className='landing-container'>
        <img src={background} alt="background" className='landing-background'>
        </img>
        <div className='landing-text'>
        Hi, my name is Kevin and I am passionate about <br></br>
        &nbsp;
        <Typewriter
            words={['Software Engineering.', 'Machine Learning.', 'Data Science.', 'Financial technology.', 'Computer Vision.']}
            loop={true}
            cursors
            cursorStyle='|'
            typeSpeed={80}
            deleteSpeed={100}
            delaySpeed={2000}
          />
        </div>
    </div>
  )
}

export default Landing
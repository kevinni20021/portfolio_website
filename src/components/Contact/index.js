import React from 'react'
import "./contact.css"
import emailpic from "./email.png"
import linkedinpic from "./linkedin.png"
import githubpic from "./github.png"
import resumepic from "./resume.svg"
import resume from "./resume.pdf"

function Contact() {
  return (
    <div className='contact-container' id = 'contact'>  
        <div className='contact-title'> Contact </div>
        <div className = 's-container'>
          <a href = "https://github.com/kevinni20021" target="_blank" rel="noopener noreferrer" className='contact-img'>
              <img src = {githubpic} alt = "github"></img>
          </a>
          <a href = "https://www.linkedin.com/in/kevin-ni-581454209/" target="_blank" rel="noopener noreferrer" className='contact-img'>
              <img src = {linkedinpic} alt = "linkedin"></img>
          </a>
          <a href = "mailto:kevin.lolni@gmail.com" className='contact-img'>
              <img src = {emailpic} alt = "email"></img>
          </a>
          <a href = {resume} target="_blank" rel="noopener noreferrer"  className='contact-img'>
              <img src = {resumepic} alt = "resume"></img>
          </a>
        </div>

    </div>
  )
}

export default Contact
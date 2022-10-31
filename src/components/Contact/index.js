import React from 'react'
import "./contact.css"
import emailpic from "./email.png"
import linkedinpic from "./linkedin.png"
import githubpic from "./github.png"

function Contact() {
  return (
    <div className='contact-container' id = 'contact'>
        <div className='contact-title'> Contact </div>
        <a href = "https://github.com/kevinni20021" className='contact-img'>
            <img src = {githubpic} alt = "github"></img>
        </a>
        <a href = "https://www.linkedin.com/in/kevin-ni-581454209/" className='contact-img'>
            <img src = {linkedinpic} alt = "linkedin"></img>
        </a>
        <a href = "mailto:kevin148.ni@gmail.com" className='contact-img'>
            <img src = {emailpic} alt = "email"></img>
        </a>
    </div>
  )
}

export default Contact
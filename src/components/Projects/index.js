import React from 'react'
import "./Projects.css"
import aslpic from "./ASL project.png"
import credablepic from "./Credable.png"
import chesspic from "./Chess.png"
import websitepic from "./website.png"

function Projectbox(props) {
    return (
            <div className='project-square'>
                <a href = {props.href}>
                    <div className='mask'></div>
                    <div className='project-txt'> {props.name}</div>
                    <img src = {props.img} alt= {props.name} className="project-img"></img>
                </a>
            </div>
    );
}

function Projects() {
  return (
    <div id= "projects" className='project-container'>
        <div className='project-title'>
            Projects
        </div>
        <div className='projects'>
            <Projectbox href = "https://github.com/kevinni20021/HackMIT_2022" img = {aslpic} name= "ASLearn Live: ASL Detector"/>
            <Projectbox href = "https://github.com/kevinni20021/Hack_The_Valley_2022_Fake_News_Detector" img = {credablepic} name= "Credable: Fake News Detector"/>
            <Projectbox href = "https://github.com/kevinni20021/Grade-12-Final-Project" img = {chesspic} name = "Chess: Grade 12 Final Project"/>
            <Projectbox href =  "https://github.com/kevinni20021/portfolio_website" img = {websitepic} name = "This Website :)" />
        </div>
    </div>
  )
}

export default Projects
import React from 'react'
import "./Projects.css"
import aslpic from "./ASL project.png"
import credablepic from "./Credable.png"
// import chesspic from "./Chess.png"
import websitepic from "./website.png"
import cardtelpic from "./PokeCardtel.png"
import stonkspic from "./stonks.jpg"
import chefpic from "./Chef.png"
import uoftpic from "./uoft.png"

function Projectbox(props) {
    return (
            <div className='project-square'>
                <img src = {props.img} alt= {props.name}></img>
                <a href = {props.href} className='project-square-container'>
                    <div className='mask'>
                        {props.name}
                    </div> 
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
            <Projectbox href = "https://github.com/kevinni20021/Deerhacks-2024_Poke_Cardtel" img={cardtelpic} name = "PokeCardtel: Grading Pokemon Cards" />
            <Projectbox href = "https://github.com/kevinni20021/StockThePast" img={stonkspic} name = "StockThePast: Stock Market Simulator"/>
            {/* <Projectbox href = "https://github.com/kevinni20021/Grade-12-Final-Project" img = {chesspic} name = "Chess: Grade 12 Final Project"/> */}
            <Projectbox href = "https://github.com/kevinni20021/UofT-Misc-School-Work" img={uoftpic} name = "UofT Stats and Math Assignments"/>
            <Projectbox href = "https://github.com/douglasquan/-CSC301-Project-Order-Management" img={chefpic} name = "weBite: Food Ordering for Friends and Family"/>
            <Projectbox href =  "https://github.com/kevinni20021/portfolio_website" img = {websitepic} name = "This Website :)" />
        </div>
    </div>
  )
}

export default Projects
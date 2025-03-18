import React from "react";
import './Experience.css';
import bofapic from "./bofa.png"


function Experience() {
    return (
        <div className='jobs-container'> 
            <div className='experience-title' >
                Work Experience
            </div>
            <div className='experience'>
                <div className="job-entry">
                    <img src = {bofapic} alt="bofa logo" className='job-entry-logo'></img>
                    <div className="job-entry-des">
                        <h2 className="job-entry-title"> Sales and Trading Intern @ BofA Securities</h2>
                        <div className="job-entry-time"> Toronto, ON | April 2024 - Present</div>
                        <ul className="job-entry-bullets">
                            <li className="bullet">Supporting Equity Derivatives Sales, Execution Trading and Advisory Sales.</li>
                            <li className="bullet">Assisted sales by writing insightful morning and EOD recap reports that highlight relevant trends, equity flows and macro events.</li> 
                            <li className="bullet">Improved team efficiency up to 80% using Python and VBA to automate tasks such as MOC imbalance reporting, trade tracking, and headline organization. </li>                       
                            <li className="bullet">Created custom baskets tracking themes on beta-adjusted market neutral terms.</li> 
                            <li className="bullet">Pitched both equities and derivatives, conducted analysis on trading signals, studied the correlation of commodities and miners, and worked on a variety of other projects</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
      )
}


export default Experience;
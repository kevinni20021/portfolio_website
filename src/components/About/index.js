import React from 'react';
import { useEffect, useRef, useState } from "react";
import './about.css';
import aboutpic from "./aboutpic.png";
import { animated, useSpring } from "react-spring";


function useIntersectionObserver(
    elementRef,
    { threshold = 0, root = null, rootMargin = "0%", freezeOnceVisible = false }
  ) {
    const [entry, setEntry] = useState();
  
    const frozen = entry?.isIntersecting && freezeOnceVisible;
  
    const updateEntry = ([entry]) => {
      setEntry(entry);
    };
  
    useEffect(() => {
      const node = elementRef?.current;
      const hasIOSupport = !!window.IntersectionObserver;
  
      if (!hasIOSupport || frozen || !node) return;
  
      const observerParams = { threshold, root, rootMargin };
      const observer = new IntersectionObserver(updateEntry, observerParams);
  
      observer.observe(node);
  
      return () => observer.disconnect();
    }, [elementRef, threshold, root, rootMargin, frozen]);
  
    return entry;
  }

function About() {
    const triggerRef = useRef();
    const dataRef = useIntersectionObserver(triggerRef, {
      freezeOnceVisible: false
    });
    
    const headerStyle1 = useSpring({
      config: { duration: 500 },
      from: { opacity: 0, left: "-500px" },
      to: {
        opacity: dataRef?.isIntersecting ? 1 : 0,
        left: dataRef?.isIntersecting ? "0px" : "-500px"
      }
    });

    const headerStyle2 = useSpring({
        config: { duration: 500 },
        from: { opacity: 0, left: "500px" },
        to: {
          opacity: dataRef?.isIntersecting ? 1 : 0,
          left: dataRef?.isIntersecting ? "0px" : "500px"
        }
      });

    const headerStyle3 = useSpring({
        config: { duration: 500 },
        from: { opacity: 0, bottom: "-0px" },
        to: {
            opacity: dataRef?.isIntersecting ? 1 : 0,
            bottom: dataRef?.isIntersecting ? "0px" : "0px"
        }
    });

    return (
      <div id = "about" className='about-container'>
          <animated.img src = {aboutpic} className='about-image' alt = 'about' ref= {triggerRef} style= {headerStyle2}></animated.img>
          <animated.div className='about-title' style={headerStyle3} ref ={triggerRef}>
              About Me
          </animated.div>
          <animated.div className= 'about-p1' ref = {triggerRef} style = {headerStyle1}>
              I am a fourth-year student at the University of Toronto specializing in computer science, majoring in statistics and minoring in mathematics.
              <br></br>
              <br></br>
              Currently, I am working as a Sales and Trading intern at BofA Securities. Supporting the execution trading, derivatives sales and advisory sales.
          </animated.div>
          <br></br>
          <br></br> 
          <animated.div className = 'about-p2' ref={triggerRef} style = {headerStyle1}>
              In my spare time, I love to cook, play video games, and learn about new things. I especially enjoy attending hackathons as I get to challenge myself, learn new skills, make friends.
              <br></br>
              <br></br>
              I’m always willing to learn something new whether its history, finance or programming. Feel free to reach out to me anytime, I would love to have a chat with you.
          </animated.div>
      </div>
    )
  }

export default About
/*

const About = () => {
    return (
        <ScrollContainer>
            <ScrollPage>
                <Animator animation={MoveIn(-1000, 0)}>
                    What is up
                </Animator>
            </ScrollPage>
        </ScrollContainer>
    )
}


*/
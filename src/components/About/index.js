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
        from: { opacity: 0, bottom: "-500px" },
        to: {
            opacity: dataRef?.isIntersecting ? 1 : 0,
            bottom: dataRef?.isIntersecting ? "0px" : "-500px"
        }
    });

    return (
      <div id = "about" className='about-container'>
          <animated.img src = {aboutpic} className='about-image' alt = 'about' ref= {triggerRef} style= {headerStyle2}></animated.img>
          <animated.div className='about-title' style={headerStyle1} ref ={triggerRef}>
              About Me
          </animated.div>
          <animated.div className= 'about-p1' ref = {triggerRef} style = {headerStyle1}>
              I am a second-year student at the University of Toronto specializing in computer science, majoring in statistics and minoring in mathematics.
              <br></br>
              <br></br>
              I am a member of Google Developer Student Club @ UTM and am also an anaylst for UTM Capital Management.
          </animated.div>
          <br></br>
          <br></br> 
          <animated.div className = 'about-p2' ref={triggerRef} style = {headerStyle1}>
              I love to code, travel, cook, and learn about new things in my spare time. I especially enjoy attending hackathons as I get to challenge myself and learn new skills.
              <br></br>
              <br></br>
              Whether its machine learning or web programming, I’m always willing to learn new skills and experiment with them. Feel free to reach out to me anytime.
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
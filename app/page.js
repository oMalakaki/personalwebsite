"use client";
import Cards from "./components/Cards";
import MakeBox from "./components/MakeBox";
import { useEffect, useState } from "react";
import GenerateBackground from "./components/GenerateBackground"; 
import ResumeModal from "./components/resumeModal"; 

const HomePage = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowPos, setWindowPos] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const handleScroll = () => {
      if(window.scrollY >= 100) {
        setWindowPos(100);
      } else {
        setWindowPos(window.scrollY);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {windowWidth > 744 && <div className="noise" />}
      <div className="pageContainerSplash">
        <div className="titleText cut-out-text">
          <div className="menu">
            <h2>
              <a href="#aboutLink">About</a>
            </h2>
            <h2>
              <a href="#resumeLink">Resume</a>
            </h2>
            <h2>
              <a href="#projectsLink">Projects</a>
            </h2>
          </div>
          <h1>
            Alex <br />
            Canfield
          </h1>
        </div>
        <div
          style={{
            position: "fixed",
            width: "100%",
            scale: "1.4",
            height: "100%",
            left: "0",
            top: "0",
            overflow: "hidden",
            
            filter: `blur(${ windowPos/2+ "px"})`,
          }}
        >
          <GenerateBackground />
        </div>
        {/* <div className="graffiti">
        <img src="alexgraffiti.svg"/>
        </div> */}
      </div>
      <div className="pageContainer about" id="aboutLink">
    
          <h2>About</h2>

            <p>
              I am a motivated and experienced graduate in Information Systems
              with a strong focus on project management and product development.
              Equipped with a blend of technical prowess and business acumen, I
              am passionate about utilizing technology to fuel innovation and
              streamline operations while fostering cross-functional teamwork to
              yield optimal business value.
              <br />
              <br />
              My professional journey includes diverse experiences, spanning
              nimble startups to a large international company, enabling me to
              excel in both agile and meticulously structured team dynamics.
              This adaptability has honed my ability to deliver impactful
              contributions within rapidly evolving business landscapes, while
              infusing creativity and pragmatism.
            </p>
         
   
        
      </div>
      <Cards />
      <div className="pageContainer resume" id="resumeLink">
    
          <h2>Resume</h2>
          <div className="resumeText">
            <MakeBox />
            
          </div>
          <ResumeModal />
        </div>

      <div className="pageContainer projects" id="projectsLink">
    
          <h2>Projects</h2>
          <div className="projectsText">
          
          </div>
        </div>
   
    </>
  );
};

export default HomePage;

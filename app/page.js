"use client";
import Cards from "./components/Cards";
import MakeBox from "./components/MakeBox";
import { useEffect, useState } from "react";
import GenerateBackground from "./components/GenerateBackground";
import Projects from "./components/Projects";
import { Link, Element } from 'react-scroll';

const HomePage = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowPos, setWindowPos] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const handleScroll = () => {
      if (window.scrollY >= 100) {
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
              <Link to="aboutLink" smooth={true} duration={500}>
                About
              </Link>
            </h2>
            <h2>
              <Link to="resumeLink" smooth={true} duration={500}>
                Resume
              </Link>
            </h2>
            <h2>
              <Link to="projectsLink" smooth={true} duration={500}>
                Projects
              </Link>
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
            width: "100vw",
            scale: "1.4",
            height: "100%",
            left: "0",
            top: "0",
            overflow: "hidden",

            filter: `blur(${windowPos / 2 + "px"})`,
          }}
        >
          <GenerateBackground />
        </div>
        {/* <div className="graffiti">
        <img src="alexgraffiti.svg"/>
        </div> */}
      </div>
      <div className="pageContainer about" name="aboutLink">
        <div className="sectionTitle">
          {" "}
          <h2>About</h2>
          <h2 className="titleDupe">About</h2>
        </div>

        <p>
          I am a motivated and experienced graduate in Information Systems with
          a strong focus on project management and product development. Equipped
          with a blend of technical prowess and business acumen, I am passionate
          about utilizing technology to fuel innovation and streamline
          operations while fostering cross-functional teamwork to yield optimal
          business value.
          <br />
          <br />
          My professional journey includes diverse experiences, spanning nimble
          startups to a large international company, enabling me to excel in
          both agile and meticulously structured team dynamics. This
          adaptability has honed my ability to deliver impactful contributions
          within rapidly evolving business landscapes, while infusing creativity
          and pragmatism.
        </p>
      </div>
      <Cards />
      <div className="pageContainer resume" name="resumeLink">
        <div className="sectionTitle">
          {" "}
          <h2>Resume</h2>
          <h2 className="titleDupe">Resume</h2>
        </div>
        <div className="resumeText">
          <MakeBox />
        </div>
      </div>

      <div className="pageContainer projects" name="projectsLink">
        <div className="sectionTitle">
          {" "}
          <h2>Projects</h2>
          <h2 className="titleDupe">Projects</h2>
        </div>

        <Projects />
      </div>
      <div className="pageContainer connect" style={{marginTop: "5rem", height: "50vh"}}>
       <h1 style={{fontSize: "6rem", mixBlendMode: "difference"}}>
        LET'S CONNECT!
       </h1>
       <p>james.alexander.canfield@gmail.com</p>
       <p><a
          href="https://www.linkedin.com/in/jamescanfield"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/jamescanfield
        </a></p>
        
      </div>
     
    </>
  );
};

export default HomePage;

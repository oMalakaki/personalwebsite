"use client";
import Cards from "./components/Cards";
import MakeBox from "./components/MakeBox";
import { useEffect, useState } from "react";
import GenerateBackground from "./components/GenerateBackground"; // Make sure to provide the correct path

const HomePage = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Update window width when the component mounts and on window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize(); // Set initial window width
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
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
            position: "absolute",
            width: "100%",
            scale: "1.4",
            height: "100%",
            left: "0",
            top: "0",
            overflow: "hidden",
            filter: "blur(50px)",
          }}
        >
          <GenerateBackground />
        </div>
        {/* <div className="graffiti">
        <img src="alexgraffiti.svg"/>
        </div> */}
      </div>
      <div className="pageContainer about" id="aboutLink">
        <div className="container">
          <h2>About</h2>
          <div className="aboutText">
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
        </div>
        <Cards />
      </div>
      <div className="pageContainer resume" id="resumeLink">
        <div className="container">
          <h2>Resume</h2>
          <div className="resumeText">
            <MakeBox />
          </div>
        </div>
      </div>
      <div className="pageContainer projects" id="projectsLink">
        <div className="container">
          <h2>Projects</h2>
          <div className="projectsText"></div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

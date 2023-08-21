
import Image from "next/image";
import Cards from "./components/Cards";
import MakeBox from "./components/MakeBox";
import ImageCarousel from "./components/ImageCarousel";
import GenerateBackground from "./components/GenerateBackground"; // Make sure to provide the correct path


const HomePage = () => {
  return (
    <>
      <div className="noise" />
      <div className="pageContainerSplash">
        <div className="titleText cut-out-text">
          <div className="menu">
            <h2><a href="#aboutLink">About</a></h2>
            <h2><a href="#resumeLink">Resume</a></h2>
            <h2><a href="#projectsLink">Projects</a></h2>

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
            filter: "blur(100px)",
            backgroundColor: "#e61f3a",
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
      <div className="pageContainer resume"id="resumeLink">
        <div className="container">
          <h2>Resume</h2>
          <div className="resumeText">
            <MakeBox />
          </div>
        </div>
      </div>
      <div className="pageContainer projects"id="projectsLink">
        <div className="container">
          <h2>Projects</h2>
          <div className="projectsText">

          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

"use client";
import Cards from "./components/Cards";
import MakeBox from "./components/MakeBox";
import { useEffect, useState, useRef } from "react";
import GenerateBackground from "./components/GenerateBackground";
import Projects from "./components/Projects";
import { Link } from "react-scroll";
import CircleNav from "./components/CircleNav";


const HomePage = () => {
  const [blurAmount, setBlurAmount] = useState(0);
  const [stopTranslations, setStopTranslations] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [activeCircleIndex, setActiveCircleIndex] = useState(null);
  const [showNav, setShowNav] = useState(null);
  const scrollState = useRef({
    previousPosition: 0,
    animationFrame: null,
    blurAmount: 0,
    buttonVisible: true,
    navVisible: false,
  });
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    resume: useRef(null),
    projects: useRef(null),
    connect: useRef(null),
  };
  const sectionTargets = [
 
    { ref: sectionRefs.home, index: 0 },
    { ref: sectionRefs.about, index: 1 },
    { ref: sectionRefs.resume, index: 2 },
    { ref: sectionRefs.projects, index: 3 },
    { ref: sectionRefs.connect, index: 4 },
  ];
  
  const callback = (entries) => {
    entries.forEach((entry) => {
      sectionTargets.forEach((section) => {
        if (entry.target === section.ref.current && entry.isIntersecting) {
          setActiveCircleIndex(section.index);
        }
      });
    });
  };

  useEffect(() => {
    const currentScrollState = scrollState.current;
    let thresholdValue =
    window.innerWidth < 600
      ? 0.1
      : window.innerWidth >= 600 && window.innerWidth <= 900
      ? 0.125
      : window.innerWidth >= 900 && window.innerWidth <= 1200
      ? 0.3
      : 0.5;
    const observer = new IntersectionObserver(callback, {
      threshold: thresholdValue,
    });
    Object.values(sectionRefs).forEach((sectionRef) => {
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
    });
    

    
 
  const updateScrollEffects = () => {
    const currentScrollPos = window.scrollY;
    const blurScrollLimit = window.innerWidth > 744 ? 200 : 150;
    const blurLimit = blurScrollLimit / 2;
    const blurSteps = [0, 0.2, 0.4, 0.65, 1];
    const blurProgress = Math.min(currentScrollPos / blurScrollLimit, 1);
    const blurStep = blurSteps[Math.floor(blurProgress * (blurSteps.length - 1))];
    const nextBlurAmount = Math.round(blurLimit * blurStep);
    const nextButtonVisible =
      currentScrollPos === 0 || currentScrollPos <= currentScrollState.previousPosition;
    const nextNavVisible = currentScrollPos > 300;

    if (nextBlurAmount !== currentScrollState.blurAmount) {
      currentScrollState.blurAmount = nextBlurAmount;
      setBlurAmount(nextBlurAmount);
    }
    if (nextButtonVisible !== currentScrollState.buttonVisible) {
      currentScrollState.buttonVisible = nextButtonVisible;
      setIsButtonVisible(nextButtonVisible);
    }
    if (nextNavVisible !== currentScrollState.navVisible) {
      currentScrollState.navVisible = nextNavVisible;
      setShowNav(nextNavVisible);
    }

    currentScrollState.previousPosition = currentScrollPos;
    currentScrollState.animationFrame = null;
  };

  const handleScroll = () => {
    if (currentScrollState.animationFrame === null) {
      currentScrollState.animationFrame = requestAnimationFrame(updateScrollEffects);
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  return () => {
 
    window.removeEventListener("scroll", handleScroll);
    if (currentScrollState.animationFrame !== null) {
      cancelAnimationFrame(currentScrollState.animationFrame);
      currentScrollState.animationFrame = null;
    }
  
      observer.disconnect();
   
  };
}, []);
  
  return (
    <>
    {/* Noise element */}
       <div className="noise" />
      <CircleNav activeCircleIndex={activeCircleIndex} showNav={showNav}></CircleNav>
      
 {/* Help Performance Button */}
        <button
        title="Help Performance"
        className={`animationBtn ${isButtonVisible ? "visible" : ""}`}
          onClick={() => setStopTranslations(!stopTranslations)}
        >Animations
          <div className={`sticky-button ${stopTranslations ? "off" : "on"}`}>
           
          <div className="slider"></div>
          </div>
        </button>
    
    {/* Left-hand nav */}
        <div className="pageContainerSplash" name="homeLink">
  <div ref={sectionRefs.home} style={{ position: "absolute", height: "10rem", width: "1rem", top: "0", left: "0" }}></div>
 
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
      <h2>
        <Link to="contactLink" smooth={true} duration={500}>
          Contact
        </Link>
      </h2>
    </div>

    {/* Home title */}
    <div className="cut-out-text">
      <h1>
        Alex <br />
        Canfield
      </h1>
  </div>


    {/* Blur element when scroll */}
        <div
          style={{
            position: "fixed",
            zIndex: "0",
            width: "100vw",
            scale: "1.5",
            height: "100vh",
            left: "0",
            top: "0",
            overflow: "hidden",
            filter: `blur(${blurAmount}px)`,
            transition: "filter 180ms ease-out",
          }}
        >
          <GenerateBackground stopTranslations={stopTranslations} />
        </div>
      </div>

      {/* About Section */}
      <div className="pageContainer about" name="aboutLink" ref={sectionRefs.about}>
        <div className="sectionTitle">
          {" "}
          <h2>About</h2>
          <h2 className="titleDupe">About</h2>
        </div>

        <p>
          Hi, I’m Alex! In 2023, I graduated from George Washington University's School of Business, where I studied Information Systems. As a student in the School of Business, my studies provided me with a comprehensive foundation in a diverse range of technologies, and more importantly, taught me how to leverage these technologies in novel situations to maximize business value. <br /> <br /> I was a Division I varsity athlete and executive board member of the GW Men’s Rowing team, where I built the dedication and resilience to strive to be faster every day, adapt to diverse team dynamics, and achieve common goals, such as becoming a championship-winning team. As one of the team’s leaders, I polished my teamwork skills and learned to bring innovative solutions to challenges to strengthen team performance. <br /> <br />I love to learn new things and take on new challenges, and my professional journey includes a diverse set of experiences. I have a background working in a variety of organizations, from a cybersecurity startup to a small family-owned business to a large international company, which has made me adaptable and able to deliver impactful contributions within rapidly evolving business landscapes. I am able to infuse creativity and pragmatism into my work, which has been beneficial in all of my roles.
        </p>
      </div>

      {/* Image slider/carousel */}
      <Cards stopTranslations={stopTranslations} />

      {/* Resume Section */}
      <div className="pageContainer resume" name="resumeLink" ref={sectionRefs.resume}>
        <div className="sectionTitle">
          {" "}
          <h2>Resume</h2>
          <h2 className="titleDupe">Resume</h2>
        </div>
        <div className="resumeText">
          <MakeBox />
        </div>
      </div>

      {/* Projects Section */}
      <div className="pageContainer projects" name="projectsLink" ref={sectionRefs.projects}>
        <div className="sectionTitle" >
          {" "}
          <h2>Projects</h2>
          <h2 className="titleDupe">Projects</h2>
        </div>

        <Projects />
      </div>

      {/* Footer/Let's connect section */}
      <div
        className="pageContainer connect"
        style={{ marginTop: "5rem", minHeight: "50vh" }}
        
        name="contactLink"
      >
        <div className="sectionTitle" ref={sectionRefs.connect}>
          <h2>LET'S CONNECT!</h2>
          <h2 className="titleDupe">LET'S CONNECT!</h2>
        </div>
        <p>
          I am always looking to meet new people and explore new opportunities. <br/>
          I would love to hear from you!
        </p>
        <div className="connectionInfo">
          <div>
            <h3>Email Me</h3>
            <p>james.alexander.canfield@gmail.com</p>
          </div>
          <div>
            <h3>Connect With Me</h3>
            <p>
              <a
                href="https://www.linkedin.com/in/jamescanfield"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/jamescanfield
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

import RandomSquare from "./components/getRandomFont";
import Image from "next/image";
import Cards from "./components/Cards";

const GenerateBackground = () => {
  const squares = [];

  for (let i = 0; i <= 10; i++) {
    squares.push(<RandomSquare key={i} />);
  }

  return squares;
};

const HomePage = () => {
  return (
    <>
      <div className="noise"></div>
      <div className="pageContainer">
        <div className="titleText cut-out-text">
          <div className="menu">
            <h2>About</h2>
            <h2>Resume</h2>
            <h2>Projects</h2>
          </div>
          <div className="name">
            <h1 className="alex">Alex</h1>
            <h1 className="canfield">Canfield</h1>
          </div>
        </div>
        <div
          style={{
            position: "relative",
            width: "100vw",
            scale: "1.4",
            height: "100vh",
            left: "0vw",
            top: "0vh",
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
      <div className="pageContainer about">
        <div className="container">
          <h2>About</h2>
          <p>
            I am a motivated and experienced graduate in Information Systems
            with a strong focus on project management and product development.
            Equipped with a blend of technical prowess and business acumen, I am
            passionate about utilizing technology to fuel innovation and
            streamline operations while fostering cross-functional teamwork to
            yield optimal business value.
            <br />
            <br />
            My professional journey includes diverse experiences, spanning
            nimble startups to a large international company, enabling me to
            excel in both agile and meticulously structured team dynamics. This
            adaptability has honed my ability to deliver impactful contributions
            within rapidly evolving business landscapes, while infusing
            creativity and pragmatism.
          </p>
        </div>
        <Cards />
      </div>
    </>
  );
};

export default HomePage;

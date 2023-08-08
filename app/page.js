import RandomSquare from "./components/getRandomFont";


  
const GenerateBackground = () => {

  const squares = [];

  for (let i = 0; i <= 15; i++) {
    squares.push(<RandomSquare key={i} />);
  }
  
  return squares;
  
};

const HomePage = () => {
  return (
    <>
        <h1 className="cut-out-text">Alex Canfield</h1>
      
        <div
          style={{
            position: "relative",
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            backgroundColor: "#e61f3a",
            
          }}
        >

          <GenerateBackground />
          
        </div>
    
    
    </>
  );
};

export default HomePage;

import React, { useState, useEffect } from "react";
import RandomSquare from "./lavaCircles";

const GenerateBackground = () => {
  const [numSquares, setNumSquares] = useState(4);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 800px)");

    const handleMediaChange = (e) => {
      
      if (e.matches) {
        
        setNumSquares(10);
      } else {
        
        setNumSquares(4);
      }

      // Remove the event listener after the initial check
      mediaQuery.removeEventListener("change", handleMediaChange);
    };

    // Initial check
    handleMediaChange(mediaQuery);
  }, []);

  const squares = [];

  for (let i = 0; i < numSquares; i++) {
    squares.push(<RandomSquare key={i} />);
  }

  return squares;
};

export default GenerateBackground;

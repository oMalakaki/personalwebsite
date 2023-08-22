"use client";
import React, { useState, useEffect } from "react";
import RandomSquare from "./lavaCircles"; // Make sure to provide the correct path

const GenerateBackground = () => {
  const [numSquares, setNumSquares] = useState(4); // Default to 4 squares

  useEffect(() => {
    // Define a media query for screens larger than 800px
    const mediaQuery = window.matchMedia("(min-width: 800px)");

    // Function to handle media query changes
    const handleMediaChange = (e) => {
      if (e.matches) {
        // Screen width is greater than 800px, set to 10 squares
        setNumSquares(10);
      } else {
        // Screen width is 800px or smaller, set to 4 squares
        setNumSquares(4);
      }
    };

    // Initially, check the media query and set the number of squares
    handleMediaChange(mediaQuery);


  }, []);

  const squares = [];

  console.log("Adding squares for screens:", numSquares);
  for (let i = 0; i < numSquares; i++) {
    squares.push(<RandomSquare key={i} />);
  }

  console.log("Squares:", squares);

  return squares;
};

export default GenerateBackground;

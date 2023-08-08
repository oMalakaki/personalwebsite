"use client";
import { useEffect, useState } from "react";
import {useWindowSize} from "rooks"

const getRandomSize = () => Math.floor(Math.random() * ((900-400) - 500 + 1)) + 500;
const getRandomColor = () => {
  var colors = ['#b30536', '#229b63', '#12918b', '#f25d0a', '#380d54'];
  let color = "#";
  color = colors[Math.floor(Math.random() * colors.length)];
  
  return color;
};

const RandomSquare = () => {
  const { innerWidth, innerHeight} = useWindowSize();
  const [objectSize] = useState(getRandomSize());

  
  const [position, setPosition] = useState({
    x: Math.random() * (innerWidth - objectSize),
    y: Math.random() * (innerHeight - objectSize),
  });

  const [direction, setDirection] = useState({
    x: Math.random() > 0.5 ? 1 : -1,
    y: Math.random() > 0.5 ? 1 : -1,
  });
  const [color] = useState(getRandomColor());

  useEffect(() => {
    const getRandomDirection = () => {
      const x = Math.random() > 0.5 ? 1 : -1;
      const y = Math.random() > 0.5 ? 1 : -1;
      return { x, y };
    };

    const moveSquare = () => {
      
      const newPosition = {
        x: position.x + direction.x * 1, // Adjust speed as needed
        y: position.y + direction.y * 1,
      };
      
      if (
        newPosition.x < 0- objectSize/2 ||
        newPosition.x > innerWidth - objectSize/2 ||
        newPosition.y < 0-objectSize/2 ||
        newPosition.y > innerHeight - objectSize/2
     ) {
        // If hitting the edge, change direction and continue moving
        const newDirection = getRandomDirection();
        setDirection(newDirection);
      } else {
        setPosition(newPosition);
      }
    };
   
    const handleResize = () => {

      if (position.x > innerWidth - objectSize/2) {
        // If over the boundary, keep inside
        position.x = innerWidth - position.x + position.x - objectSize/2;
      } else if (position.y > innerHeight - objectSize/2) {
        // If over the boundary, keep inside
        position.y = innerHeight - position.y + position.y - objectSize/2;
      } else if (position.y > innerHeight - objectSize/2 && position.x > innerWidth - objectSize/2)
        (position.x = innerWidth - position.x + position.x - objectSize/2),
          (position.y = innerHeight - position.y + position.y - objectSize/2);
    };

    // window.addEventListener("resize", handleResize);
    
  const interval = setInterval(moveSquare, 2); // Adjust interval as needed

    return () => {
    //   window.removeEventListener("resize", handleResize);
      clearInterval(interval);
     };
 
  }, [position, direction]);

  return (
    <div
      style={{
        position: "absolute",
        width: objectSize,
        height: objectSize,
        backgroundColor: color,
        opacity: "0.75",
        borderRadius: "50%",
        // filter: "blur(100px)",
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    />
  );
};

export default RandomSquare;

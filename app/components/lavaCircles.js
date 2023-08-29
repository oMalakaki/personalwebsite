"use client";
import { useEffect, useState, useLayoutEffect  } from "react";
import { useWindowSize } from "rooks";

const getRandomDirection = () => ({
  x: Math.random() > 0.5 ? 1 : -1,
  y: Math.random() > 0.5 ? 1 : -1,
})

const getRandomColor = () => {
  var colors = ["#0e0502", "#229b63", "#12918b", "#f25d0a", "#380d54"];
  let color = colors[Math.floor(Math.random() * colors.length)];
  return color;
};

const RandomSquare = () => {
  const { innerWidth, innerHeight } = useWindowSize();
  const [objectSize, setObjectSize] = useState(0);
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(0);
  const [color, setColor] = useState("");

 
  useLayoutEffect(() => {
    const minSize = 500;
    const maxSize = innerWidth - (innerWidth / 2.5);
    const randomSize = Math.random() * (maxSize - minSize) + minSize;
    setObjectSize(randomSize);

    setPosition({
      x: Math.random() * (innerWidth - randomSize),
      y: Math.random() * (innerHeight- randomSize),
    });

    setDirection(getRandomDirection());
    setColor(getRandomColor());
  }, []);
  
  
  useLayoutEffect (() => {
    const moveSquare = () => {
     
      const newPosition = {
        x: position.x + direction.x * .75, // Adjust speed as needed
        y: position.y + direction.y * .75,
      };

      if (
        newPosition.x < 0 - (objectSize / 2) ||
        newPosition.x > innerWidth - objectSize / 2 ||
        newPosition.y < 0 - (objectSize / 2) ||
        newPosition.y > innerHeight - objectSize / 2
      ) {
        // If hitting the edge, change direction and continue moving
        const newDirection = getRandomDirection();
        setDirection(newDirection);
      } else {
        setPosition(newPosition);
      }
    };

    const handleResize = () => {
      if (position.x > innerWidth - objectSize / 2) {
        // If over the boundary, keep inside
        position.x = innerWidth - position.x + position.x - objectSize / 2;
      } else if (position.y > innerHeight - objectSize / 2) {
        // If over the boundary, keep inside
        position.y = innerHeight - position.y + position.y - objectSize / 2;
      } else if (
        position.y > innerHeight - objectSize / 2 &&
        position.x > innerWidth - objectSize / 2
      )
        (position.x = innerWidth - position.x + position.x - objectSize / 2),
          (position.y = innerHeight - position.y + position.y - objectSize / 2);
    };




    if (typeof window !== "undefined") {
      
      window.addEventListener("resize", handleResize);
    }

    const interval = setInterval(moveSquare, 10); // Adjust interval as needed

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
    
      }
      clearInterval(interval);
    };
  }, [objectSize, position, direction]);
  return (
    <div
      id="blob"
      style={{
        position: "absolute",
        width: objectSize,
        height: objectSize,
        backgroundColor: color,
        borderRadius: "100%",
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    ></div>
  );
};

export default RandomSquare;

"use client";
import { useEffect, useState } from "react";
import { useWindowSize } from "rooks";


const getRandomColor = () => {
  var colors = ["#0e0502", "#229b63", "#12918b", "#f25d0a", "#380d54"];
  let color = "#";
  color = colors[Math.floor(Math.random() * colors.length)];

  return color;
};


const RandomSquare = () => {


  const [objectSize] = useState(Math.floor(Math.random() * (((innerWidth - (innerWidth/3))-500) + 500)));

  const [position, setPosition] = useState({
    x: Math.random() * (innerWidth - objectSize),
    y: Math.random() * (innerHeight - objectSize),
  });

  const [direction, setDirection] = useState({
    x: Math.random() > 0.5 ? 1 : -1,
    y: Math.random() > 0.5 ? 1 : -1,
  });
  const [color] = useState(getRandomColor());
  const [isTranslationsEnabled, setTranslationsEnabled] = useState(true);

  useEffect(() => {
    const getRandomDirection = () => {
      const x = Math.random() > 0.5 ? 1 : -1;
      const y = Math.random() > 0.5 ? 1 : -1;
      return { x, y };
    };

    const moveSquare = () => {
      if (!isTranslationsEnabled) return; // Check if translations are enabled
      const newPosition = {
        x: position.x + direction.x * 1, // Adjust speed as needed
        y: position.y + direction.y * 1,
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

    const handleScroll = () => {
      if (typeof window !== "undefined") {

      if (window.scrollY > 200) {
        // Stop translations
        setTranslationsEnabled(false);
      } else {
        // Enable translations again
        setTranslationsEnabled(true);
      }}
    };


    if (typeof window !== "undefined") {
      
      window.addEventListener("resize", handleResize);
      window.addEventListener("scroll", handleScroll); // Add scroll event listener
    }

    const interval = setInterval(moveSquare, 30); // Adjust interval as needed

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("scroll", handleScroll); // Remove scroll event listener
      }
      clearInterval(interval);
    };
  }, [objectSize, position, direction, isTranslationsEnabled]);

  return (
    <div
      style={{
        position: "absolute",
        width: objectSize,
        height: objectSize,
        backgroundColor: color,
      
        borderRadius: "100%",
        
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    />
  );
};

export default RandomSquare;

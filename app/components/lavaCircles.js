"use client";
import { useEffect, useState, useMemo } from "react";
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
  const [direction, setDirection] = useState({x: 1, y: 1});
  const [color, setColor] = useState("");
  const [isTranslationsEnabled, setTranslationsEnabled] = useState(true);

 
  useEffect(() => {
    const minSize = 500;
    const maxSize = innerWidth - (innerWidth / 2.5);
    const randomSize = Math.random() * (maxSize - minSize) + minSize;
    setObjectSize(randomSize);
  }, []);
  

  useEffect(() => {
    setPosition({
      x: Math.random() * (innerWidth/2 - objectSize),
      y: Math.random() * (innerHeight/2 - objectSize),
    });
    setDirection(getRandomDirection());
    setColor(getRandomColor());
  }, []);
  

  
  useEffect(() => {
    const moveSquare = () => {
      // if (!isTranslationsEnabled) return; // Check if translations are enabled
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

    const interval = setInterval(moveSquare, 10); // Adjust interval as needed

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

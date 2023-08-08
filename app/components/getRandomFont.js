"use client";
import React, { useEffect, useState } from "react";

const getRandomSize = () => Math.floor(Math.random() * (500 - 400 + 1)) + 400;

const getRandomColor = () => {
  var colors = ['#b30536', '#229b63', '#12918b', '#f25d0a', '#380d54'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const RandomSquare = () => {
  const [objectSize] = useState(getRandomSize());
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const [position, setPosition] = useState({
    x: Math.random() * (windowWidth - objectSize),
    y: Math.random() * (windowHeight - objectSize),
  });

  const [direction, setDirection] = useState({
    x: Math.random() > 0.5 ? 1 : -1,
    y: Math.random() > 0.5 ? 1 : -1,
  });

  const [color] = useState(getRandomColor());

  useEffect(() => {
    const getRandomDirection = () => ({
      x: Math.random() > 0.5 ? 1 : -1,
      y: Math.random() > 0.5 ? 1 : -1,
    });

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    const interval = setInterval(() => {
      const newPosition = {
        x: position.x + direction.x * 1,
        y: position.y + direction.y * 1,
      };

      if (
        newPosition.x < 0 ||
        newPosition.x > windowWidth - objectSize ||
        newPosition.y < 0 ||
        newPosition.y > windowHeight - objectSize
      ) {
        const newDirection = getRandomDirection();
        setDirection(newDirection);
      } else {
        setPosition(newPosition);
      }
    }, 2);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, [position.x, position.y, direction.x, direction.y, objectSize, windowWidth, windowHeight]);

  return (
    <div
      style={{
        position: "absolute",
        width: objectSize,
        height: objectSize,
        backgroundColor: color,
        opacity: "0.75",
        borderRadius: "50%",
   
        transform: `translate(${position.x - objectSize / 2}px, ${position.y - objectSize / 2}px)`,
      }}
    />
  );
};

export default RandomSquare;

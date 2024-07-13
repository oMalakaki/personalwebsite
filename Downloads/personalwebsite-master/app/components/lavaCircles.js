"use client";
import { useState, useLayoutEffect, useMemo, useCallback } from "react";
import { useWindowSize } from "rooks";

const COLORS = ["#000000", "#229b63", "#12918b", "#f25d0a", "#380d54"];
const MOVEMENT_SPEED = 0.75;
const UPDATE_INTERVAL = 10;

const getRandomDirection = () => ({
  x: Math.random() > 0.5 ? 1 : -1,
  y: Math.random() > 0.5 ? 1 : -1,
});

const getRandomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)];

const RandomSquare = ({ stopTranslations }) => {
  const { innerWidth, innerHeight } = useWindowSize();

  const initialState = useMemo(() => {
    const minSize = 500;
    const maxSize = innerWidth - innerWidth / 3;
    const objectSize = Math.random() * (maxSize - minSize) + minSize;
    return {
      objectSize,
      position: {
        x: Math.random() * (innerWidth - objectSize),
        y: Math.random() * (innerHeight - objectSize),
      },
      direction: getRandomDirection(),
      color: getRandomColor(),
    };
  }, [innerWidth, innerHeight]);

  const [state, setState] = useState(initialState);

  const moveSquare = useCallback(() => {
    setState((prevState) => {
      const newPosition = {
        x: prevState.position.x + prevState.direction.x * MOVEMENT_SPEED,
        y: prevState.position.y + prevState.direction.y * MOVEMENT_SPEED,
      };

      if (
        newPosition.x < 0 - prevState.objectSize / 2 ||
        newPosition.x > innerWidth - prevState.objectSize / 2 ||
        newPosition.y < 0 - prevState.objectSize / 2 ||
        newPosition.y > innerHeight - prevState.objectSize / 2
      ) {
        return { ...prevState, direction: getRandomDirection() };
      }

      return { ...prevState, position: newPosition };
    });
  }, [innerWidth, innerHeight]);

  const handleResize = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      position: {
        x: Math.min(prevState.position.x, innerWidth - prevState.objectSize / 2),
        y: Math.min(prevState.position.y, innerHeight - prevState.objectSize / 2),
      },
    }));
  }, [innerWidth, innerHeight]);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    window.addEventListener("resize", handleResize);
    
    let intervalId;
    if (!stopTranslations) {
      intervalId = setInterval(moveSquare, UPDATE_INTERVAL);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(intervalId);
    };
  }, [stopTranslations, moveSquare, handleResize]);

  return (
    <div
      id="blob"
      style={{
        position: "absolute",
        width: state.objectSize,
        height: state.objectSize,
        backgroundColor: state.color,
        borderRadius: "100%",
        transform: `translate(${state.position.x}px, ${state.position.y}px)`,
      }}
    />
  );
};

export default RandomSquare;
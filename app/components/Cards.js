"use client";
import styles from "../styles/Cards.module.css";
import { useEffect, useRef, useState } from "react";
import Cardo from "./CardTemplate";

export default function Cards({ stopTranslations }) {
  const scrollRef = useRef(null);
  const [direction, setDirection] = useState(1);
  const [isTranslationsEnabled, setTranslationsEnabled] = useState(true);
  let animationFrameId;
  const imageLinks = [
    "https://i.imgur.com/G0vkfZ7.jpg",
"https://i.imgur.com/ls4fphJ.jpg",
"https://i.imgur.com/0vpSDJF.jpg",
"https://i.imgur.com/PEyV8fY.jpg",
"https://i.imgur.com/PtxK0cd.jpg",
"https://i.imgur.com/83qUuwd.jpg",
"https://i.imgur.com/i9dMcKL.jpg",
"https://i.imgur.com/9WdgIB7.jpg",
"https://i.imgur.com/tmpK5tH.jpg",
"https://i.imgur.com/7xEr0qx.jpg",
"https://i.imgur.com/iGPuLZY.jpg",
"https://i.imgur.com/AxpwHAA.jpg"
  ];
  useEffect(() => {
    const container = scrollRef.current;
    let pos = { left: 0, x: 0 };

    const mouseDownHandler = function (e) {
      pos = {
        left: container.scrollLeft,
        x: e.clientX,
      };
      container.addEventListener("mousemove", mouseMoveHandler);
      container.addEventListener("mouseup", mouseUpHandler);
      setTranslationsEnabled(false);
    };

    const mouseMoveHandler = function (e) {
      const dx = e.clientX - pos.x;
      container.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = function () {
      container.removeEventListener("mousemove", mouseMoveHandler);
      container.removeEventListener("mouseup", mouseUpHandler);
    };

    const mouseEnterHandler = function () {
      setTranslationsEnabled(false);
    };

    const mouseLeaveHandler = function () {
      setTranslationsEnabled(true);
    };

    const handleTouchInteractionStart = () => {
      setTranslationsEnabled(false);
    };
    const handleTouchInteractionEnd = () => {
      setTranslationsEnabled(true);
    };

    container.addEventListener("mousedown", mouseDownHandler);
    container.addEventListener("mouseenter", mouseEnterHandler);
    container.addEventListener("mouseleave", mouseLeaveHandler);
    container.addEventListener("touchmove", handleTouchInteractionStart);
    document.body.addEventListener("touchstart", handleTouchInteractionEnd);

    const moveTrack = () => {
      pos = {
        left: container.scrollLeft,
      };

      const trackEnd =
        ((pos.left + window.innerWidth) / container.scrollWidth) * 100;

      if (trackEnd >= 100 && direction === 1) {
        setDirection(-1);
      } else if (container.scrollLeft === 0 && direction === -1) {
        setDirection(1);
      }
      container.scrollLeft += direction * 1;

      if (!stopTranslations && isTranslationsEnabled) {
        // Continue the animation using requestAnimationFrame
    
          animationFrameId = requestAnimationFrame(moveTrack);
      
      }
    };

    // Start the animation loop
    if (!stopTranslations && isTranslationsEnabled) {
      
        animationFrameId = requestAnimationFrame(moveTrack);
     
      
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mousedown", mouseDownHandler);
      container.removeEventListener("mouseenter", mouseEnterHandler);
      container.removeEventListener("mouseleave", mouseLeaveHandler);
      container.removeEventListener("touchmove", handleTouchInteractionStart);
    };
  }, [direction, isTranslationsEnabled, stopTranslations]);
  
  return (
    <div className={styles.scrollContainer} ref={scrollRef}>
      <div className={styles.imageTrack} id="imageTrack">
        {imageLinks.map((source, index) => (
          <Cardo key={index} source={source} loading="lazy"/>
        ))}
      </div>
    </div>
  );
}

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
    "https://i.imgur.com/Wwol4o6.jpg",
    "https://i.imgur.com/KqvP7LG.jpg",
    "https://i.imgur.com/RSJb66N.jpg",
    "https://i.imgur.com/ErvLyef.jpg",
    "https://i.imgur.com/ds0U0TT.jpg",
    "https://i.imgur.com/Ol7AB9K.jpg",
    "https://i.imgur.com/EKRJqHE.jpg",
    "https://i.imgur.com/iuJwYU1.jpg",
    "https://i.imgur.com/wSZ75M9.jpg",
    "https://i.imgur.com/y5TUTWD.jpg",
    "https://i.imgur.com/ldKSUfA.jpg",
    "https://i.imgur.com/hHdxFbm.jpg",
    "https://i.imgur.com/Oltuwk2.jpg",
    "https://i.imgur.com/s2YQVFd.jpg",
    "https://i.imgur.com/FwSMJvZ.jpg"
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

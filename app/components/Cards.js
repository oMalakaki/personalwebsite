"use client";
import styles from "../styles/Home.module.css";
import { useEffect, useRef, useState } from "react";
import Cardo from "./CardTemplate";

export default function Cards() {
  const scrollRef = useRef(null);
  const [direction, setDirection] = useState(1); // Initialize direction state
  const [isTranslationsEnabled, setTranslationsEnabled] = useState(true);

  useEffect(() => {
    
    const container = scrollRef.current;
    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler = function (e) {

      pos = {
        left: container.scrollLeft,
        x: e.clientX,
      };
      container.addEventListener('mousemove', mouseMoveHandler);
      container.addEventListener('mouseup', mouseUpHandler);
      setTranslationsEnabled(false);
    };

    const mouseMoveHandler = function (e) {
      const dx = e.clientX - pos.x;
      container.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = function () {
      container.removeEventListener('mousemove', mouseMoveHandler);
      container.removeEventListener('mouseup', mouseUpHandler);
  
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

    container.addEventListener('mousedown', mouseDownHandler);
    container.addEventListener('mouseenter', mouseEnterHandler);
    container.addEventListener('mouseleave', mouseLeaveHandler);
    container.addEventListener("touchmove", handleTouchInteractionStart);
    const moveTrack = () => {
      if (!isTranslationsEnabled) return;

      pos = {
        left: container.scrollLeft,
      };
      let scrollSpeed = 10; // Default scroll speed for desktop

      if (window.innerWidth <= 768) {
        // Adjust scroll speed for mobile devices
        scrollSpeed = 20;
      }

      const trackEnd = ((pos.left + window.innerWidth) / container.scrollWidth) * 100;

      if (trackEnd >= 100 && direction === 1) {
        setDirection(-1);
      } else if (container.scrollLeft === 0 && direction === -1) {
        setDirection(1);
      }

      container.scrollLeft += direction * scrollSpeed;
      console.log(scrollSpeed);
    };

    const interval = setInterval(moveTrack, 10);

    return () => {
      clearInterval(interval);
      container.removeEventListener('mousedown', mouseDownHandler);
      container.removeEventListener('mouseenter', mouseEnterHandler);
      container.removeEventListener('mouseleave', mouseLeaveHandler);
      container.removeEventListener("touchmove", handleTouchInteractionStart);
    };
  }, [direction, isTranslationsEnabled]);


  return (
    <div className={styles.scrollContainer} ref={scrollRef}>
      <div
        className={styles.imageTrack}
        id="imageTrack"
      >
        <Cardo source="https://i.imgur.com/Wwol4o6.jpg" />
        <Cardo source="https://i.imgur.com/KqvP7LG.jpg" />
        <Cardo source="https://i.imgur.com/RSJb66N.jpg" />
        <Cardo source="https://i.imgur.com/ErvLyef.jpg" />
        <Cardo source="https://i.imgur.com/ds0U0TT.jpg" />
        <Cardo source="https://i.imgur.com/Ol7AB9K.jpg" />
        <Cardo source="https://i.imgur.com/EKRJqHE.jpg" />
        <Cardo source="https://i.imgur.com/iuJwYU1.jpg" />
        <Cardo source="https://i.imgur.com/wSZ75M9.jpg" />
        <Cardo source="https://i.imgur.com/y5TUTWD.jpg" />
        <Cardo source="https://i.imgur.com/ldKSUfA.jpg" />
        <Cardo source="https://i.imgur.com/hHdxFbm.jpg" />
        <Cardo source="https://i.imgur.com/s2YQVFd.jpg" />
        <Cardo source="https://i.imgur.com/FwSMJvZ.jpg" />
      </div>
    </div>
  );
}

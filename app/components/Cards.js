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

      const trackEnd = ((pos.left + window.innerWidth) / container.scrollWidth) * 100;

      if (trackEnd >= 100 && direction === 1) {
        setDirection(-1);
      } else if (container.scrollLeft === 0 && direction === -1) {
        setDirection(1);
      }

      container.scrollLeft += direction * 10;
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
        <Cardo source="/selfPhotos/IMG-0092.jpg" />
        <Cardo source="/selfPhotos/IMG-8046.jpg" />
        <Cardo source="/selfPhotos/IMG-0199.jpg" />
        <Cardo source="/selfPhotos/2023-07-14 22 02 34.270.JPEG" />
        <Cardo source="/selfPhotos/IMG-2111.JPEG" />
        <Cardo source="/selfPhotos/DSCN0454.JPG" />
        <Cardo source="/selfPhotos/IMG-3922.jpg" />
        <Cardo source="/selfPhotos/IMG-7811.JPG" />
        <Cardo source="/selfPhotos/IMG-4304.JPEG" />
        <Cardo source="/selfPhotos/IMG-8401-Original.jpg" />
        <Cardo source="/selfPhotos/IMG-4881.jpg" />
        <Cardo source="/selfPhotos/IMG-8083-Original.jpg" />
        <Cardo source="/selfPhotos/IMG-8084-Original.jpg" />
        <Cardo source="/selfPhotos/IMG-5450.JPG" />
      </div>
    </div>
  );
}

"use client";
import styles from "../styles/Home.module.css";
import { useEffect, useRef, useState } from "react";
import Cardo from "./CardTemplate";

export default function Cards() {
  const scrollRef = useRef(null);
  const [userInteracted, setUserInteracted] = useState(false);

  let direction = 1;


  const [isTranslationsEnabled, setTranslationsEnabled] = useState(true);

  useEffect(() => {
    const container = scrollRef.current;


    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler = function (e) {
      
        pos = {
            left: container.scrollLeft,
            
            // Get the current mouse position
            x: e.clientX,
            
        };

        container.addEventListener('mousemove', mouseMoveHandler);
        container.addEventListener('mouseup', mouseUpHandler);
        setTranslationsEnabled(false);
    };

    const mouseMoveHandler = function (e) {
        // How far the mouse has been moved
        const dx = e.clientX - pos.x;
        

        // Scroll the element
        
        container.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = function () {
   
        container.removeEventListener('mousemove', mouseMoveHandler);
        container.removeEventListener('mouseup', mouseUpHandler);
    };

    // Attach the handler
    container.addEventListener('mousedown', mouseDownHandler);
  
   
    
    const moveTrack = () => {
      
      if (!isTranslationsEnabled) return;
      pos = {
        left: container.scrollLeft,
      };
      console.log(container.scrollLeft);
      console.log("direction " + direction);
      

 
      const trackEnd = ((pos.left + window.innerWidth) / container.scrollWidth) * 100;
     
      if (trackEnd >= 100 && direction === 1) {
        direction = -1;
        console.log("switch bitch")
      } else if (container.scrollLeft === 0 && direction === -1) {
        direction = 1;
      }
      container.scrollLeft += direction * 100;
      
    }
  

  const interval = setInterval(moveTrack, 10);

  return () => {
    clearInterval(interval);
    container.removeEventListener('mousedown', mouseDownHandler);
  }; 
}, [ isTranslationsEnabled]);

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

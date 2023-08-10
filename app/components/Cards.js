"use client";
import styles from "../styles/Home.module.css";
import { useEffect, useRef, useState } from "react";
import Cardo from "./CardTemplate";


export default function Cards() {
  const trackRef = useRef(null);
  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    
    const track = trackRef.current;
   

    const handleMouseDown = (e) => {

      setMouseDownAt(e.clientX);
    };

    const handleMouseUp = () => {
      setMouseDownAt(0);
      setPrevPercentage(percentage);
      
    };

    const handleMouseMove = (e) => {
      if (mouseDownAt === 0) return;

      var mouseDelta = mouseDownAt - e.clientX,
        maxDelta = track.scrollWidth;

      const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = prevPercentage + percentage,
        nextPercentage = Math.max(
          Math.min(nextPercentageUnconstrained, 0),
          -(100-(window.innerWidth / track.scrollWidth)*93)
        );

      setPercentage(nextPercentage);

      track.animate(
        {
          transform: `translate(${nextPercentage}%, 0%)`,
        },
        { duration: 1200, fill: "forwards" }
      );
            const images = track.querySelectorAll(".image");
            images.forEach((img) => {
              img.style.transform = `translateX(${nextPercentage*100}%)`;
            });

    };

       
    

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    track.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      track.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseDownAt, prevPercentage, percentage]);



  return (
    <div className={styles.imageTrack} id="imageTrack" ref={trackRef}>
      <Cardo
        source="/selfPhotos/IMG-0092.jpg"
        percentage={percentage}
      />
      <Cardo
        source="/selfPhotos/IMG-0199.jpg"
        percentage={percentage}
      />
      <Cardo
        source="/selfPhotos/IMG-2111.JPEG"
        percentage={percentage}
      />
      <Cardo
        source="/selfPhotos/IMG-3922.jpg"
        percentage={percentage}
      />
      <Cardo
        source="/selfPhotos/IMG-4304.JPEG"
        percentage={percentage}
      />
      <Cardo
        source="/selfPhotos/IMG-4881.jpg"
        percentage={percentage}
      />
      <Cardo
        source="/selfPhotos/IMG-8084-Original.jpg"
        percentage={percentage}
      />

    </div>
  );
}

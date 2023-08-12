"use client";
import styles from "../styles/Home.module.css";
import { useEffect, useRef, useState } from "react";
import Cardo from "./CardTemplate";

export default function Cards() {
  const trackRef = useRef(null);
  const [interactionStart, setInteractionStart] = useState(null);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const track = trackRef.current;

    const handleInteractionStart = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      setInteractionStart(clientX);
    };

    const handleInteractionEnd = () => {
      setInteractionStart(null);
      setPrevPercentage(percentage);
    };

    const handleInteractionMove = (e) => {
      if (interactionStart === null) return;

      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const interactionDelta = interactionStart - clientX;
      const maxDelta = track.scrollWidth;

      const percentage = (interactionDelta / maxDelta) * -100;
      const nextPercentageUnconstrained = prevPercentage + percentage;
      const nextPercentage = Math.max(
        Math.min(nextPercentageUnconstrained, 0),
        -(100 - (window.innerWidth / track.scrollWidth) * 100)
      );

      setPercentage(nextPercentage);

      track.style.transform = `translate(${nextPercentage}%, 0%)`;

      
    };

    const handleMouseOrTouchEnd = () => {
      if (interactionStart !== null) {
        handleInteractionEnd();
      }
    };

    const handleMouseOrTouchMove = (e) => {
      if (interactionStart !== null) {
        handleInteractionMove(e);
      }
    };

    window.addEventListener("mousedown", handleInteractionStart);
    window.addEventListener("touchstart", handleInteractionStart);

    window.addEventListener("mouseup", handleMouseOrTouchEnd);
    window.addEventListener("touchend", handleMouseOrTouchEnd);

    track.addEventListener("mousemove", handleMouseOrTouchMove);
    track.addEventListener("touchmove", handleMouseOrTouchMove);

    return () => {
      window.removeEventListener("mousedown", handleInteractionStart);
      window.removeEventListener("touchstart", handleInteractionStart);

      window.removeEventListener("mouseup", handleMouseOrTouchEnd);
      window.removeEventListener("touchend", handleMouseOrTouchEnd);

      track.removeEventListener("mousemove", handleMouseOrTouchMove);
      track.removeEventListener("touchmove", handleMouseOrTouchMove);
    };
  }, [interactionStart, prevPercentage, percentage]);

  return (
    <div className={styles.imageTrack} id="imageTrack" ref={trackRef}>
      <Cardo source="/selfPhotos/IMG-0092.jpg" />
      <Cardo source="/selfPhotos/IMG-0199.jpg" />
      <Cardo source="/selfPhotos/IMG-2111.JPEG" />
      <Cardo source="/selfPhotos/IMG-3922.jpg" />
      <Cardo source="/selfPhotos/IMG-4304.JPEG" />
      <Cardo source="/selfPhotos/IMG-4881.jpg" />
      <Cardo
        source="/selfPhotos/IMG-8084-Original.jpg"
       
      />
    </div>
  );
}

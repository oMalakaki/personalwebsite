"use client";
import styles from "../styles/Home.module.css";
import { useEffect, useRef, useState } from "react";
import Cardo from "./CardTemplate";

export default function Cards() {
  const trackRef = useRef(null);
  const scrollRef = useRef(null);
  const [interactionStart, setInteractionStart] = useState(null);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [position, setPosition] = useState({
    x: 0,
  });
  const [direction, setDirection] = useState({
    x: -1,
  });

  const [isTranslationsEnabled, setTranslationsEnabled] = useState(true);

  useEffect(() => {
    const track = trackRef.current;
    const container = scrollRef.current;

    const handleInteractionStart = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      setInteractionStart(clientX);
    };
    const handleTouchInteractionStart = (e) => {
      setTranslationsEnabled(false);
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

      const calculatedPercentage = (interactionDelta / maxDelta) * -100;
      const nextPercentageUnconstrained = prevPercentage + calculatedPercentage;
      const nextPercentage = Math.max(
        Math.min(nextPercentageUnconstrained, 0),
        -(100 - (window.innerWidth / maxDelta) * 100)
      );

      setPercentage(nextPercentage);
      setTranslationsEnabled(false);

      const newScrollLeft = (
        nextPercentage*100
      );
      container.scrollLeft = newScrollLeft;
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

    window.addEventListener("mouseup", handleMouseOrTouchEnd);

    track.addEventListener("mousemove", handleMouseOrTouchMove);
    track.addEventListener("touchmove", handleTouchInteractionStart);

    const getNewDirection = () => {
      return { x: direction.x === -1 ? 1 : -1 };
    };

    const moveTrack = () => {
      if (!isTranslationsEnabled) return;
      const maxDelta = (window.innerWidth / track.scrollWidth) * 100;

      const newPosition = {
        x: position.x + direction.x * 0.15, // Adjust speed as needed
      };

      setPosition(newPosition);
      setPrevPercentage(position.x);
      // Calculate the new scroll position based on the percentage
      console.log("track X pos: " + position.x);
      console.log(position.x / (-100+maxDelta));
      const newScrollLeft = (
        -(position.x / (-100+maxDelta))*100
      );
      scrollRef.scrollLeft = newScrollLeft;
      console.log("scroll left: " + newScrollLeft);

      if (
        (position.x < -100 + maxDelta && direction.x == -1) ||
        (position.x > 0 && direction.x === 1)
      ) {
        setDirection(getNewDirection());
      }
    };

    const interval = setInterval(moveTrack, 10); // Adjust interval as needed

    return () => {
      clearInterval(interval);

      window.removeEventListener("mousedown", handleInteractionStart);

      window.removeEventListener("mouseup", handleMouseOrTouchEnd);

      track.removeEventListener("mousemove", handleMouseOrTouchMove);
      track.removeEventListener("touchmove", handleTouchInteractionStart);
    };
  }, [
    interactionStart,
    prevPercentage,
    percentage,
    position,
    direction,
    isTranslationsEnabled,
  ]);

  return (
    <div className={styles.scrollContainer} ref={scrollRef}>
      <div
        className={styles.imageTrack}
        id="imageTrack"
        ref={trackRef}
        style={{
          transform: `translateX(${position.x}%)`,
          transition: "transform 0s ease-in-out",
        }}
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

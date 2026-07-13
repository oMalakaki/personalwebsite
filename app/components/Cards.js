"use client";
import styles from "../styles/Cards.module.css";
import { useEffect, useRef } from "react";
import Cardo from "./CardTemplate";

const IMAGE_LINKS = [
  "/projects/2023-07-14 22_02_34.270.webp",
  "/projects/IMG_7811.webp",
  "/projects/IMG_0092.webp",
  "/projects/IMG_4881.webp",
  "/projects/IMG_2111.webp",
  "/projects/IMG_0199.webp",
  "/projects/IMG_0686.webp",
  "/projects/IMG_3922.webp",
  "/projects/IMG_4694.webp",
  "/projects/IMG_1140.webp",
  "/projects/IMG_9997.webp",
  "/projects/6785068475500628437.webp",
  "/projects/IMG_1854.webp",
  "/projects/DSCN0454.webp",
  "/projects/IMG_2094.webp",
  "/projects/IMG_4520.webp",
  "/projects/IMG_8046.webp",
  "/projects/IMG_4576.webp",
  "/projects/IMG_7588.webp",
  "/projects/IMG_7594.webp",
];

export default function Cards({ stopTranslations }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    const track = container.firstElementChild;
    const state = {
      animationFrame: null,
      direction: 1,
      isPaused: false,
      isVisible: false,
      maxScrollLeft: 0,
      position: container.scrollLeft,
    };
    let dragStart = { left: 0, x: 0 };

    const canAnimate = () =>
      !stopTranslations && !state.isPaused && state.isVisible && state.maxScrollLeft > 0;

    const stopAnimation = () => {
      if (state.animationFrame !== null) {
        cancelAnimationFrame(state.animationFrame);
        state.animationFrame = null;
      }
    };

    const moveTrack = () => {
      if (!canAnimate()) {
        state.animationFrame = null;
        return;
      }

      let nextPosition = state.position + state.direction;
      if (nextPosition >= state.maxScrollLeft) {
        nextPosition = state.maxScrollLeft;
        state.direction = -1;
      } else if (nextPosition <= 0) {
        nextPosition = 0;
        state.direction = 1;
      }

      state.position = nextPosition;
      container.scrollLeft = nextPosition;
      state.animationFrame = requestAnimationFrame(moveTrack);
    };

    const startAnimation = () => {
      if (state.animationFrame === null && canAnimate()) {
        state.animationFrame = requestAnimationFrame(moveTrack);
      }
    };

    const measureTrack = () => {
      state.maxScrollLeft = Math.max(container.scrollWidth - container.clientWidth, 0);
      state.position = Math.min(state.position, state.maxScrollLeft);
      container.scrollLeft = state.position;
      startAnimation();
    };

    const pauseForInteraction = () => {
      state.isPaused = true;
      stopAnimation();
    };

    const mouseDownHandler = (event) => {
      pauseForInteraction();
      dragStart = { left: container.scrollLeft, x: event.clientX };
      container.addEventListener("mousemove", mouseMoveHandler);
      document.addEventListener("mouseup", mouseUpHandler, { once: true });
    };

    const mouseMoveHandler = (event) => {
      const nextPosition = Math.max(
        0,
        Math.min(state.maxScrollLeft, dragStart.left - (event.clientX - dragStart.x))
      );
      state.position = nextPosition;
      container.scrollLeft = nextPosition;
    };

    const mouseUpHandler = () => {
      container.removeEventListener("mousemove", mouseMoveHandler);
    };

    const mouseEnterHandler = pauseForInteraction;
    const mouseLeaveHandler = () => {
      state.isPaused = false;
      startAnimation();
    };
    const touchStartHandler = pauseForInteraction;
    const touchEndHandler = () => {
      state.position = container.scrollLeft;
      state.isPaused = false;
      startAnimation();
    };

    const resizeObserver = new ResizeObserver(measureTrack);
    resizeObserver.observe(container);
    resizeObserver.observe(track);

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        state.isVisible = entry.isIntersecting;
        if (state.isVisible) startAnimation();
        else stopAnimation();
      },
      { threshold: 0 }
    );
    visibilityObserver.observe(container);

    container.addEventListener("mousedown", mouseDownHandler);
    container.addEventListener("mouseenter", mouseEnterHandler);
    container.addEventListener("mouseleave", mouseLeaveHandler);
    container.addEventListener("touchstart", touchStartHandler, { passive: true });
    container.addEventListener("touchend", touchEndHandler, { passive: true });
    measureTrack();

    return () => {
      stopAnimation();
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      container.removeEventListener("mousedown", mouseDownHandler);
      container.removeEventListener("mouseenter", mouseEnterHandler);
      container.removeEventListener("mouseleave", mouseLeaveHandler);
      container.removeEventListener("touchstart", touchStartHandler);
      container.removeEventListener("touchend", touchEndHandler);
      container.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
    };
  }, [stopTranslations]);

  return (
    <div className={styles.scrollContainer} ref={scrollRef}>
      <div className={styles.imageTrack} id="imageTrack">
        {IMAGE_LINKS.map((source, index) => (
          <Cardo key={index} source={source} loading="lazy" />
        ))}
      </div>
    </div>
  );
}

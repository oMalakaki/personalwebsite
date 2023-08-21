"use client";
import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const ImageCarousel = ({ images }) => {
  const [dragging, setDragging] = useState(false);
  const x = useMotionValue(0);

  const spring = useSpring(x, {
    stiffness: 300,
    damping: 40,
  });

  const handleDrag = (e, { deltaX }) => {
    setDragging(true);
    x.set(x.get() + deltaX);
  };

  const handleDragEnd = (e, { velocityX }) => {
    setDragging(false);
    const boundary = document.getElementById('carousel-container').clientWidth;
    const targetX = x.get() + velocityX * 0.2;

    if (targetX > 0) {
        
      x.set(velocityX);
    } else if (targetX < -boundary) {
      x.set(velocityX);
    } else {
      x.set(velocityX);
    }
  
    
       
   
  };

  return (
    <div id="carousel-container" style={{ overflow: 'hidden', position: 'relative' }}>
      <Draggable
        axis="x"
        bounds={{ left: -10000, right: 0 }} // Adjust as per your needs
        onDrag={handleDrag}
        onStop={handleDragEnd}
      >
        <motion.div
          style={{
            display: 'flex',
            flexDirection: 'row',
            transform: dragging ? `translateX(${x}px)` : `translateX(${spring}px)`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} style={{ flex: '0 0 300px', marginRight: '10px' }}>
              <img src={image} alt={`Image ${index}`} draggable="false"/>
            </div>
          ))}
        </motion.div>
      </Draggable>
    </div>
  );
};

export default ImageCarousel;

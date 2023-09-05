import { useState } from 'react';
import { Link } from "react-scroll";

function CircleNav({ activeCircleIndex }) {


  const circles = [
    {  link: 'aboutLink' },
    {   link: 'resumeLink' },
    {  link: 'projectsLink' },
    {  link: 'contact' },
  ];

  return (
    <div className="navCircles">
      {circles.map((circle, index) => (
        <Link key={index} to={circle.link} smooth={true} duration={500}>
          <div
            className={`circleNav ${activeCircleIndex-1=== index ? 'active' : ''}`}
    
          ></div>
        </Link>
      ))}
    </div>
  );
}

export default CircleNav;
import { useState } from 'react';
import { Link } from "react-scroll";

function CircleNav({ activeCircleIndex }) {


  const circles = [
    {  link: 'aboutLink', title: 'About' },
    {   link: 'resumeLink',title: 'Resume' },
    {  link: 'projectsLink', title: 'Projects' },
    {  link: 'contactLink', title: 'Contact' },
  ];

  return (
    <div className="navCircles">
      {circles.map((circle, index) => (
        <Link key={index} to={circle.link} smooth={true} duration={500}>
          <div
            className={`circleNav ${activeCircleIndex-1=== index ? 'active' : ''}`}
            title={circle.title}
          ></div>
        </Link>
      ))}
    </div>
  );
}

export default CircleNav;
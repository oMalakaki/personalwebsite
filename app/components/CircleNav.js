import React from 'react';
import { Link } from 'react-scroll';

function CircleNav({ activeCircleIndex, showNav }) {
  const circles = [
    { link: 'homeLink', title: 'Home' },
    { link: 'aboutLink', title: 'About' },
    { link: 'resumeLink', title: 'Resume' },
    { link: 'projectsLink', title: 'Projects' },
    { link: 'contactLink', title: 'Contact' },
  ];

  return (
    <div className={`navCircles ${showNav ? 'show' : ''}`}>
      <div className="circlesContainer">
        {circles.map((circle, index) => (
          <Link key={index} to={circle.link} smooth={true} duration={500}>
            <div
              className={`circleNav ${activeCircleIndex === index ? 'active' : ''} ${
                index === 0 ? 'home' : '' // Apply class to the first circle (Home)
              }`}
              title={circle.title}
            ></div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CircleNav;

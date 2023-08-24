import React, { useState } from "react";

function ProjectDescription(props) {
  return (
    <div className="">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default function Projects() {
  const organizations = ["SONY", "MAG7", "SYNACK", "GW"];
  
  const organizationData = [
    {
      name: "SONY",
      projects: [
        { name: "KPI capstone", description: "Description" },
    
      ]
    },
    {
      name: "MAG7",
      projects: [
        { name: "mag7 website redesign", description: "Description" },

      ]
    },
    {
      name: "SYNACK",
      projects: [
        { name: "So fresh, so clean", description: "Description" },

      ]
    },
    {
      name: "GW",
      projects: [
        { name: "Noverint", description: "Description" },
        { name: "gwsafe", description: "Description" },
        
      ]
    },

  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleOrgContainerClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="projectsText">
        <div className="projectsHero">
        {organizationData[activeIndex].projects.map((project, index) => (
          <ProjectDescription
            key={index}
            name={project.name}
            description={project.description}
          />
          
        ))}
      </div>
      <div className="projectsList">
        {organizations.map((org, index) => (
          <div
            key={org}
            className={`orgContainer ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => handleOrgContainerClick(index)}
          >
            <h3>{org}</h3>
          </div>
        ))}
      </div>
      
    </div>
  );
}

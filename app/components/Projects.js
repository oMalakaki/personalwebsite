import React, { useState } from "react";

function ProjectDescription(props) {
  return (
    <>
      <div>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
      </div>
      <p>Skills Learned: {props.skills}</p>
    </>
  );
}

export default function Projects() {
  const organizations = ["SONY", "MAG7", "SYNACK", "GW"];

  const organizationData = [
    {
      name: "SONY",
      projects: [
        {
          name: "KPI capstone",
          description:
            "This capstone project spanned the length of my internship with Sony. When I started working, I was presented with a problem, the Program Management Office (PMO) team had risen to a level of maturity where the department wanted to start tracking portfolio metrics and performance over time. However, there was no set way of collecting our performance data or any measurements to compare them to. \nBy collaborating with the PMO team, I played a crucial role in coming up with a step-by-step solution to this problem and then implementing it. I researched industry trends and implemented best practices to develop Key Performance Indicators (KPIs) that aligned with departmental and company goals. Then, I employed my Excel skillset to automate the in-depth analysis of PMO data. This analysis included comprehensible visualizations of each KPI, allowing for actionable insights for the PMO team.",
          skills:
            "Excel, KPI Research and Development, Team Collaboration, Data Analysis, Daptiv, Sharepoint",
        },
      ],
    },
    {
      name: "MAG7",
      projects: [
        {
          name: "mag7 website redesign",
          description:
            "For this project, I collaborated with MAG7’s in-house UX/UI designers to build a new website for the company. The website in use was fairly outdated, so a complete design overhaul and a build from scratch were needed. I had the opportunity to sit in on design brainstorms and gain a deeper understanding of the complexities behind UX/UI design and content creation for professional websites. Employing Next.js, I took the designs and translated them into a functional website, integrating the usage of content management systems so the content of the website could be modified and updated with relative ease. ",
          skills:
            "Content Management Systems, Next.js, Debugging, UX Design, Figma, APIs, CSS, HTML, JS",
        },
      ],
    },
    {
      name: "SYNACK",
      projects: [
        {
          name: "So fresh, so clean",
          description:
            "While at Synack, I was working in a product team developing an OSINT reporting product for our clients. One of my responsibilities on the job was to extract the data from our OSINT tools, clean it, normalize it, and transform it into usable and presentable information in our reports. This process was long, tedious, and prone to errors. Eventually, I decided there had to be a better way to do this process. By leveraging my technical expertise in Python I had learned from my coursework in school, I innovated and improved upon our product by fully automating the cleaning, normalization, and transformation of data, resulting in fewer errors, and accelerated data analysis and reporting for client reports by hours. This not only saved valuable time but also enabled our team to provide swift and actionable insights to our clients, delivering our clients a clear and digestible security posture report for their organizations.",
          skills: "Python, Data Cleaning, Data Analysis",
        },
      ],
    },
    {
      name: "GW",
      projects: [
        {
          name: "Noverint",
          description:
            "My senior capstone project was to work in a group with other seniors and grad students to put our information system skills to work and design a new digital product, develop a business model for it, and fully design and implement it. My group decided to build an inventory management system aimed at small businesses that were hesitant to move to an existing solution, either due to the complexity, pricing, or inaccessibility of existing products in the current market. Using the Agile methodology we worked together to research the market, develop business assumptions and risks, create and system cost target, and come up with epics, user stories, use cases, data flow diagrams, data dictionaries, screen flows, wireframes, state charts, and more for our product. We then used HTML, CSS, JS, and PHP to fully design and build our MVP for the system.",
          skills:
            "Product Research, Design and Development, Product Analysis, Database Design and Development, HTML, CSS, JS, PHP, APIs",
        },
        {
          name: "gwsafe",
          description:
            "For this project, I worked with a classmate to develop a functional website for our final project in our web development class. We came up with the idea of redesigning GW’s emergency response website. Our goal was to make a user-friendly, clean website to intelligibly display and report crimes around and near GW’s campus. For the base of our application, we employed Google Map’s API to create an interactive map that displayed crimes in the area. The website also had a reporting feature to report crimes on campus, which had the intention of going through GWPD for confirmation and then displaying on the map for students and faculty to be aware of. Once displayed, users could interact with the posts, with the ability to comment and react to them.",
          skills: "Web Development, UX/UI Design, APIs, CSS, HTML, JS",
        },
      ],
    },
  ];

  const [activeOrgIndex, setActiveOrgIndex] = useState(0);
  const [activeProjIndex, setActiveProjIndex] = useState(0);

  const handleOrgContainerClick = (orgIndex) => {
    setActiveOrgIndex(orgIndex);
    setActiveProjIndex(0);
  };

  const handleNextProject = () => {
    setActiveProjIndex(
      (prevIndex) =>
        (prevIndex + 1) % organizationData[activeOrgIndex].projects.length
    );
  };

  const handlePrevProject = () => {
    setActiveProjIndex(
      (prevIndex) =>
        (prevIndex - 1 + organizationData[activeOrgIndex].projects.length) %
        organizationData[activeOrgIndex].projects.length
    );
  };

  const activeOrgProjects = organizationData[activeOrgIndex].projects;

  return (
    <div className="projectsText">
      <div className="projectsHero">
        <ProjectDescription
          name={activeOrgProjects[activeProjIndex].name}
          description={activeOrgProjects[activeProjIndex].description}
          skills={activeOrgProjects[activeProjIndex].skills}
        />
        {activeOrgProjects.length > 1 && (
          <div className="arrowButtons">
            <button onClick={handlePrevProject}>{"<"}</button>
            <h4>
              {activeProjIndex + 1} of {activeOrgProjects.length}
            </h4>
            <button onClick={handleNextProject}>{">"}</button>
          </div>
        )}
      </div>
      <div className="projectsList">
        {organizations.map((org, orgIndex) => (
          <div
            key={org}
            className={`orgContainer ${
              activeOrgIndex === orgIndex ? "active" : ""
            }`}
            onClick={() => handleOrgContainerClick(orgIndex)}
          >
            <h3>{org}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import styles from "../styles/Projects.module.css";

function ProjectDescription(props) {
  return (
    <>
     <div className={styles.projectsInfo}>
        <div>
          <h1>{props.name}</h1>
          <h2>{props.title}</h2>
          <p className={styles.description}>{props.description}</p>
        </div>
  
        <div>
          <h3>Skills Learned</h3>
          <p>{props.skills}</p>
        </div>
     </div>
     <div className={styles.projectsVisual}>
 
     <img
  className={styles.projectsImage}
  src={props.visual}

></img>

     </div>
    </>
  );
}
function ProjectDescriptionMobile(props) {
  return (
    <>
      <div>
        <h1>{props.org}</h1>
          <h2>{props.name}</h2>
          <h3>{props.title}</h3>

        <p className={styles.description}>{props.description}</p>
      </div>

      <div>
        <h4>Skills Learned</h4>
        <p>{props.skills}</p>
      </div>
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
          name: "Empowering PMO Performance Analysis",
          title: "KPI Capstone",
          description:
            "This capstone project spanned the length of my internship with Sony. When I started working, I was presented with a problem, the Program Management Office (PMO) team had risen to a level of maturity where the department wanted to start tracking portfolio metrics and performance over time. However, there was no set way of collecting our performance data or any measurements to compare them. \n\nBy collaborating with the PMO team, I played a crucial role in coming up with a step-by-step solution to this problem and then implementing it. I researched industry trends and implemented best practices to develop Key Performance Indicators (KPIs) that aligned with departmental and company goals. Then, I employed my Excel skillset to automate the in-depth analysis of PMO data. This analysis included comprehensible visualizations of each KPI, allowing for actionable insights for the PMO team. ",
          skills:
            "Excel, KPI Research and Development, Team Collaboration, Data Analysis, Daptiv, Sharepoint",
        visual: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjdqbHRpcXVtaW54aXRrcjA1eXB1NDl6Z2Q0c2ZjbGQxY2JkandjZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0Av2RhmBrxyTE8zCWp/giphy.gif"
          },
      ],
    },
    {
      name: "MAG7",
      projects: [
        {
          name: "Breathing New Life into design",
          title: "MAG7 Website Revamp",
          description:
            "For this project, I collaborated with MAG7’s in-house UX/UI designers to build a new website for the company. The website in use was fairly outdated, so a complete design overhaul and a build from scratch were needed. I had the opportunity to sit in on design brainstorms and gain a deeper understanding of the complexities behind UX/UI design and content creation for professional websites. \n\nEmploying Next.js, I took the designs and translated them into a functional website, integrating the usage of content management systems so the content of the website could be modified and updated with relative ease. ",
          skills:
            "Content Management Systems, Next.js, Debugging, UX Design, Figma, APIs, CSS, HTML, JS",
            visual: "https://media1.giphy.com/media/j6GPJzqAsY0s2dot24/giphy.gif"
          },
      ],
    },
    {
      name: "SYNACK",
      projects: [
        {
          name: "automating to enhance Insights",
          title: "Python Automation With OSINT Data",
          description:
            "While at Synack, I worked in a product team developing an OSINT reporting product for our clients. One of my responsibilities on the job was to extract the data from our OSINT tools, clean it, normalize it, and transform it into usable and presentable information in our reports. This process was long, tedious, and prone to errors. Eventually, I decided there had to be a better way to do this process. \n\nBy leveraging my technical expertise in Python I had learned from my coursework in school, I innovated and improved upon our product by fully automating the cleaning, normalization, and transformation of data, resulting in fewer errors, and accelerated data analysis and reporting for client reports by hours. This saved valuable time and enabled our team to provide swift and actionable insights to our clients, delivering a clear and digestible security posture report for their organizations.",
          skills: "Python, Data Cleaning, Data Analysis",
          visual: "https://media.giphy.com/media/aGBDRdqXv79DCIc8Sq/giphy.gif"
        },
      ],
    },
    {
      name: "GW",
      projects: [
        {
          name: "rethinking Inventory Management",
          title: "Noverint",
          description:
            "My senior capstone project was to work in a group with other seniors and grad students to put our information system skills to work and design a new digital product, develop a business model for it, and fully design and implement it. My group decided to build an inventory management system aimed at small businesses that were hesitant to move to an existing solution, either due to the complexity, pricing, or inaccessibility of existing products in the current market. \n\nUsing the Agile methodology we worked together to research the market, develop business assumptions and risks, create and system cost target, and come up with epics, user stories, use cases, data flow diagrams, data dictionaries, screen flows, wireframes, state charts, and more for our product. We then used HTML, CSS, JS, and PHP to fully design and build our MVP for the system.",
          skills:
            "Product Research, Design and Development, Product Analysis, Database Design and Development, HTML, CSS, JS, PHP, APIs",
        visual: "https://media.giphy.com/media/FEfDlWlsbRBrpcAl7c/giphy.gif"
          },
        {
          name: "Redesigning GW's Emergency Response",
          title: "GW Safe",
          description:
            "For this project, I worked with a classmate to develop a functional website for our final project in our web development class. We came up with the idea of redesigning GW’s emergency response website. Our goal was to make a user-friendly, clean website to intelligibly display and report crimes around and near GW’s campus. \n\nFor the base of our application, we employed Google Maps’ API to create an interactive map that displayed crimes in the area. The website also had a reporting feature to report crimes on campus, which had the intention of going through GWPD for confirmation and then displaying on the map for students and faculty to be aware of. Once displayed, users could interact with the posts, with the ability to comment and react to them.",
          skills: "Web Development, UX/UI Design, APIs, CSS, HTML, JS",
          visual: "https://media.giphy.com/media/ONCt60mEsrKEtlpGpH/giphy.gif"
        },
      ],
    },
  ];

  const [activeOrgIndex, setActiveOrgIndex] = useState(0);
  const [activeProjIndex, setActiveProjIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0); // State to store window width

  useEffect(() => {
    // Update window width on mount and when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    setWindowWidth(window.innerWidth); // Set initial width
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
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
    <div className={styles.projectsText}>
      {windowWidth >= 900 ? (
        <>
          <div className={styles.projectsList}>
            {organizations.map((org, orgIndex) => (
              <div
                key={org}
                className={`${styles.orgContainer} ${
                  activeOrgIndex === orgIndex ? styles.active : ""
                }`}
                onClick={() => handleOrgContainerClick(orgIndex)}
              >
                <h3>{org}</h3>
              </div>
            ))}
          </div>
          <div className={styles.projectsHero}>
            <ProjectDescription
              name={activeOrgProjects[activeProjIndex].name}
              title={activeOrgProjects[activeProjIndex].title}
              description={activeOrgProjects[activeProjIndex].description}
              skills={activeOrgProjects[activeProjIndex].skills}
              visual={activeOrgProjects[activeProjIndex].visual}
            />

          </div>
          
          <div className={styles.arrowButtons}>
              {activeOrgProjects.length > 1 && (
                <>
                  <button onClick={handlePrevProject}>{"<"}</button>
                  <h4>
                    {activeProjIndex + 1} of {activeOrgProjects.length}
                  </h4>
                  <button onClick={handleNextProject}>{">"}</button>
                </>
              )}
            </div>
        </>
      ) : (
        <>
          <div className={styles.mobileProjectList}>
            {organizations.map((org, orgIndex) => {
              const projects = organizationData[orgIndex].projects; // Get all projects for the current organization
              return projects.map((activeProject, projectIndex) => (
                <ProjectDescriptionMobile
                  key={`${orgIndex}-${projectIndex}`}
                  org={org}
                  name={activeProject.name}
                  title={activeProject.title}
                  description={activeProject.description}
                  skills={activeProject.skills}
                  
                />
              ));
            })}
          </div>
        </>
      )}
    </div>
  );
}

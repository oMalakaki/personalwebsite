import React, { useState, useEffect } from "react";
import styles from "../styles/Projects.module.css";
import { Link } from "react-scroll";

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
      {/* <div className={styles.projectsVisual}>
 
     <img
  className={styles.projectsImage}
  src={props.visual}

></img>

     </div> */}
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
  const organizations = ["POTOMACWAVE", "SONY", "MAG7", "SYNACK", "GW"];

  const organizationData = [
    {
      name: "PotomacWave (FedDataCheck)",
      projects: [
        {
          name: "Elevating Federal Data Reporting",
          title: "FedDataCheck",
          description:
            "At PotomacWave, I joined a tight-knit, agile product team to develop FedDataCheck, a web-based solution that provides ad hoc reports focused on federal procurement for federal agencies.\n\nIn my multifaceted role, I contributed to the development of the frontend, backend, and database components of the product. Historically, reports were built using SQL Server Reporting Services (SSRS). However, maintaining FedDataCheck’s extensive library of reports became cumbersome, and loading reports often took minutes. To address these issues, our team sought a more modern and sustainable solution.\n\nLeveraging my frontend experience, I honed my expertise in Angular and collaborated closely with a skilled backend engineer to revolutionize FedDataCheck reports. Given that the rest of the team was most comfortable with SQL, we designed a completely dynamic solution in which reports could be created and edited entirely in SQL, with no need for redeployment of frontend or backend code. By focusing on the presentation layer while my coworker developed our API, we created a highly reusable, component-based application that was both intuitive and user-friendly while reducing report load times from minutes to seconds for clients.",
          skills:
            "Angular, SQL Server, Data Integration, Backend Development, Web-Based Solutions, Performance Optimization, Report Automation",
          visual:
            "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjdqbHRpcXVtaW54aXRrcjA1eXB1NDl6Z2Q0c2ZjbGQxY2JkandjZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0Av2RhmBrxyTE8zCWp/giphy.gif",
        },
      ],
    },
    {
      name: "SONY",
      projects: [
        {
          name: "Empowering PMO Performance Analysis",
          title: "KPI Capstone",
          description:
            "During my internship with Sony, I undertook a pivotal capstone project. Upon my onboarding, I was presented with a challenge: the Program Management Office (PMO) had matured to a point where there was a desire to monitor portfolio metrics and track performance over time. Yet, there lacked a standardized method for data collection and benchmarking metrics.\n\nIn collaboration with the PMO team, I spearheaded the development and execution of a comprehensive solution. By researching industry trends and incorporating best practices, I devised Key Performance Indicators (KPIs) that aligned with both departmental objectives and broader company goals. Teaching myself new Excel techniques, I automated a detailed analysis of the PMO data, crafting intuitive visual representations for each KPI. These visual aids facilitated discernible, actionable insights for the PMO team's strategic decisions.",
          skills:
            "Excel, KPI Research and Development, Team Collaboration, Data Analysis, Daptiv, Sharepoint",
          visual:
            "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjdqbHRpcXVtaW54aXRrcjA1eXB1NDl6Z2Q0c2ZjbGQxY2JkandjZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0Av2RhmBrxyTE8zCWp/giphy.gif",
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
            "For this project, I embarked on a collaborative journey with MAG7's in-house UX/UI designers to breathe new life into the company's website. Recognizing the outdated nature of the existing platform, we set out to reimagine and rebuild it entirely from the ground up. This endeavor allowed me to actively participate in collaborative design brainstorming sessions, affording me a profound insight into the intricate facets of UX/UI design and the nuances of crafting content for professional websites.\n\nLeveraging the power of Next.js, I meticulously transformed the design concepts into a fully functional website. This undertaking entailed seamless integration of content management systems, empowering users to effortlessly modify and update website content as needed, ensuring a dynamic and adaptable digital presence for MAG7.",
          skills:
            "Content Management Systems, Next.js, Debugging, UX Design, Figma, APIs, CSS, HTML, JS",
          visual: "https://media1.giphy.com/media/j6GPJzqAsY0s2dot24/giphy.gif",
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
            "While at Synack, I worked in a product team developing an Open-Source Intelligence (OSINT) reporting product for our clients. One of my responsibilities on the job was to extract the data from our OSINT tools, clean it, normalize it, and transform it into usable and presentable information in our reports. The existing process was long, tedious, and prone to errors. Eventually, I decided there had to be a better approach. \n\nDrawing upon my Python knowledge I had learned through my coursework, I innovated and improved upon our product by fully automating the cleaning, normalization, and transformation of our export data. This automation resulted in fewer errors and accelerated data analysis and reporting, enabling our team to swiftly deliver a clear and digestible security posture report for our clients.",
          skills: "Python, Data Cleaning, Data Analysis",
          visual: "https://media.giphy.com/media/aGBDRdqXv79DCIc8Sq/giphy.gif",
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
            "For my senior capstone project, I collaborated with a diverse team of senior undergraduates and graduate students. Our collective goal was to leverage our information system expertise to conceive, develop a business model for, and execute the design and implementation of an innovative digital product. After careful deliberation, our team settled on crafting an inventory management system tailored specifically for small businesses. We recognized that many of these enterprises hesitated to adopt existing solutions due to their complexity, pricing structures, or limited accessibility in the current market.\n\nUsing Agile methodology, we worked in sprints to complete our project. Our process included extensive market research, the identification of key business assumptions and risks, the establishment of a system cost target, and the creation of a comprehensive suite of assets such as epics, user stories, use cases, data flow diagrams, data dictionaries, screen flows, wireframes, state charts, and more. These assets formed the foundation upon which our product would thrive.\n\nWe translated our well-structured vision into reality, employing a skill set encompassing HTML, CSS, JavaScript, and PHP. Through collaborative ingenuity and effort, we brought our MVP to life, crafting a robust and accessible inventory management system poised to address the inventory needs of small businesses.",
          skills:
            "Product Research, Design and Development, Product Analysis, Database Design and Development, HTML, CSS, JS, PHP, APIs",
          visual: "https://media.giphy.com/media/FEfDlWlsbRBrpcAl7c/giphy.gif",
        },
        {
          name: "Redesigning GW's Emergency Response",
          title: "GW Safe",
          description:
            "For this project, I collaborated with a classmate to develop a functional website as our final project for our web development class. Our concept revolved around the redesign of GW's emergency response website. Our primary goal was to create a clean, user-friendly platform for transparently displaying and reporting crimes occurring in and around GW's campus.\n\nTo lay the foundation for our application, we utilized the Google Maps API, which allowed us to craft an interactive map to showcase reported incidents in the area. Additionally, our website featured a reporting function designed for users to submit on-campus crime reports. These reports were intended to undergo a confirmation process by GWPD before being displayed on the map, serving as a valuable resource for students and faculty to stay informed about campus safety. Once an incident was on display, users could actively engage with the posts by leaving comments and reactions, fostering a sense of community and enhancing the sharing of critical information.",
          skills: "Web Development, UX/UI Design, APIs, CSS, HTML, JS",
          visual: "https://media.giphy.com/media/ONCt60mEsrKEtlpGpH/giphy.gif",
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
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
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
          <div className={styles.projectsList} name="projectTitlesLink">
            {organizations.map((org, orgIndex) => (
              <div
                key={org}
                className={`${styles.orgContainer} ${
                  activeOrgIndex === orgIndex ? styles.active : ""
                }`}
                onClick={() => handleOrgContainerClick(orgIndex)}
              >
                <h3>{org.toUpperCase()}</h3>
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
                {" "}
                <Link
                  style={{ all: "unset" }}
                  to="projectTitlesLink"
                  smooth={true}
                  duration={10}
                >
                  <button onClick={handlePrevProject}>{"<"}</button>
                </Link>
                <h4>
                  {activeProjIndex + 1} of {activeOrgProjects.length}
                </h4>
                <Link
                  style={{ all: "unset" }}
                  to="projectTitlesLink"
                  smooth={true}
                  duration={10}
                >
                  <button onClick={handleNextProject}>{">"}</button>
                </Link>
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

import React from "react";
import ResumeModal from "./resumeModal"; 
const data = [
  {
    title: "EDUCATION",
    content: {
      College: "George Washington University",
      Graduation: "May 2023",
      School: "School of Business",
      Degree: "Bachelor of Science",
      Major: "Information Systems",
      Minor: "Psychological and Brain Sciences",
    },
  },
  {
    title: "EXPERIENCE",
    content: {
      Sony: "Program Management Intern",
      MAG7: "Frontend Web Developer",
      Synack: "Product Management Intern",
    },
  },
  {
    title: "SKILLS",
    content: [
      "JavaScript",
      "React",
      "Next.js",
      "HTML",
      "CSS",
      "PHP",
      "SQL",
      "MySQL",
      "Adobe Suite",
      "Excel",
      "Word",
      "Figma",
      "Databricks",
      "Java (Basic)",
      "R (Basic)",
      "React",
      "Jira",
      "Daptiv",
      "Sharepoint",
      "Lucid",
      "Splunk (Basic)",
    ],
  },

  {
    title: "Interests",
    content: [
      "Rowing",
      "Cycling",
      "Hiking",
      "Sustainability",
      "Music",
      "Design",
      "Web Dev",
      "Data Analysis",
      "Product Dev",
      "Formula 1"

    ],
  },
  {
    title: "CONTACT",
    content: {
      Email: "james.alexander.canfield@gmail.com",
      Phone: "571-218-7379",
      LinkedIn: (
        <a
          href="https://www.linkedin.com/in/jamescanfield"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/jamescanfield
        </a>
      ),
    },
  },
  {
    title: "VIEW PDF",
    content: ""
  },
];

export default function MakeBox() {
  return (
    <>
      {data.map((item, index) => (
        <div className="resumeBox" key={index}>
          <h3>{item.title}</h3>
          {Array.isArray(item.content) ? (
            <div className="boxList">
              {item.content.map((skill, subIndex) => (
                <p key={subIndex}>{skill}</p>
              ))}
            </div>
          ) : (
            Object.keys(item.content).map((key, subIndex) => (
              <div key={subIndex} className="pair">
                <h4>{key}</h4>
                  <p>{item.content[key]}</p>
          
              </div>
            ))
          )}
          {item.title === "VIEW PDF" && <ResumeModal />}
        </div>
      ))}
    </>
  );
}
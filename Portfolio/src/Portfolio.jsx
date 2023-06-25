import React from "react";
import projectsData from "./projectsData";
import ProjectCard from "./ProjectCard.jsx";
import "./App.css";

const Portfolio = () => {
  return (
    <div className="portfolio-body">
      <div className="portfolio-hd">
        <h1>Recent Projects</h1>
      </div>
      <div className="card-container">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

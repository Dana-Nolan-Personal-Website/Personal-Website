import React from "react";
import projectsData from "./projectsData";
import ProjectCard from "./ProjectCard.jsx";

const Portfolio = () => {
  return (
    <div>
      <h1>My Portfolio</h1>
      <div>
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

import React from "react";

const ProjectCard = ({ project }) => {
  const { title, description, imageURL } = project;

  return (
    <div className="card">
      <img src={imageURL} alt={title} />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href="#" className="card-button">
          Find out more
          <span class="symbols">arrow_right_alt</span>
        </a>
      </div>
    </div>
  );
};
export default ProjectCard;

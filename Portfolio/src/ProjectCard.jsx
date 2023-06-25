import React, { useState } from "react";
import "./App.css";

const ProjectCard = ({ project }) => {
  const { title, description, imageURL } = project;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`card ${isHovered ? "card-hovered" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={imageURL} alt={title} />
      <div className="card-content">
        <div className="content-hovered">
          <h2>{title}</h2>
          <p>{description}</p>
          <a href="#" className="card-button">
            Find out more
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

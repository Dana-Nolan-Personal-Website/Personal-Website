import React from "react";

const ProjectCard = ({ project }) => {
  const { title, description, imageURL } = project;

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <img
        className="w-full h-48 object-cover mb-4"
        src={imageURL}
        alt={title}
      />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ProjectCard;

import React from "react";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <a href={props.projectDemo} title="Live Demo">
        <img src={props.image} alt={props.title} className="project-image" />
      </a>
      <h1 className="project-title">{props.title}</h1>
      <p>{props.description}</p>

      <div className="project-links">
        <a
          href={props.githubLink}
          title="Github"
          className="project-link-github"
        >
          <i class="bx bxl-github"></i>
        </a>
        <a href={props.projectDemo} title="Live Demo">
          <i class="bx bx-code-alt"></i>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

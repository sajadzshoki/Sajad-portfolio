import React from "react";

const ProjectGallery = (props) => {
  return (
    <div className="all-project-card">
      <a href={props.projectDemo} title="Live Demo">
        <img
          src={props.image}
          alt={props.title}
          className="all-project-image"
        />
      </a>
      <div className="all-projects-info">
        <h1 className="all-project-title">{props.title}</h1>
        <p>{props.description}</p>
        <p className="techs-used">
          <span>Technologies Used : </span> {props.techs}
        </p>
      </div>
      <div className="all-project-links">
        <a
          href={props.githubLink}
          title="Github"
          className="all-project-btn"
        >
            Repository
          <i class="bx bxl-github"></i>
        </a>
        <a href={props.projectDemo} title="Live Demo"
        className="all-project-btn">
            Live Demo <br/>
          <i class="bx bx-code-alt"></i>
        </a>
      </div>
    </div>
  );
};

export default ProjectGallery;

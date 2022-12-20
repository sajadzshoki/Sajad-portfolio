import React from "react";

const Projects = (props) => {
  return (
    
    <div>

        <div className="project-card">
          <img src={`../images/${props.image}`}  alt={props.title} className="project-image" />
          <h2 className="project-title">{props.title}</h2>
          <p>
            {props.description}
          </p>
          <div className="project-links">
            <a href={props.githubLink} title="Github" className="project-link-github">
              <i class="bx bxl-github"></i>
            </a>
            <a href={props.projectDemo} title="Source Code">
              <i class="bx bx-code-alt"></i>
            </a>
          </div>
        </div>
       </div>
    
  );
};

export default Projects;

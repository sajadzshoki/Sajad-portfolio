import React from "react";
import mui from "../images/mui.png";
import projectsData from '../projectsData.js'
const Projects = (id,image,title,description) => {
  return (
    <>
      <h1 className="projects-header">My Projects</h1>
      <div className="projects">
        <div className="project-card">
          <img src={mui} alt="project1" className="project-image" />
          <h2 className="project-title">2</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
            accusantium dolorum ut, cupiditate
          </p>
          <div className="project-links">
            <a href="https://github.com/sajadzshoki" title="Github" className="project-link-github">
              <i class="bx bxl-github"></i>
            </a>
            <a href="https://github.com/sajadzshoki" title="Source Code">
              <i class="bx bx-code-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

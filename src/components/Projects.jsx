import React from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../projectsData";
import { Link } from "react-router-dom";
import mytones2 from "../images/mytones2.png";
import iphone from "../images/iphone.png";

const Projects = () => {
  // const projects = projectsData.map((item) => {
  //   return (
  //     <ProjectCard
  //       key={item.id}
  //       image={item.image}
  //       title={item.title}
  //       description={item.description}
  //       githubLink={item.githubLink}
  //       projectDemo={item.projectDemo}
  //       techs={item.Technologies}
  //     />
  //   );
  // });
  return (
    <div className="main-project-container" id="project">
      <h1 className="header">My Project</h1>
      <div className="main-project">
        <a href="https://sajadzshoki.github.io/Mytones/">
          <img alt="project" src={mytones2} className="main-project-image" title="go to website" />
        </a>
        <a href="https://sajadzshoki.github.io/Mytones/">
          <img alt="project" src={iphone} className="iphone" title="go to website"/>
        </a>
      </div>
      <Link to="/all_projects">
        <button className="btn all-projects-link">
          See all of my Projects
        </button>
      </Link>
    </div>
  );
};

export default Projects;

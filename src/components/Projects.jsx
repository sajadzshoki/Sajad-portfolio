import React from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../projectsData";
import { Link } from "react-router-dom";
const Projects = () => {
  const projects = projectsData.map((item) => {
    return (
      <ProjectCard
        key={item.id}
        image={item.image}
        title={item.title}
        description={item.description}
        githubLink={item.githubLink}
        projectDemo={item.projectDemo}
        techs={item.Technologies}
      />
    );
  });
  return (
    <div className="project" id="project">
      <h1 className="projects-header header">My Recent Projects</h1>
      <section className="Info-card">{projects}</section>
      <Link to="/all_projects">
        <button className="btn all-projects-link">
          See all of my Projects
        </button>
      </Link>
    </div>
  );
};

export default Projects;

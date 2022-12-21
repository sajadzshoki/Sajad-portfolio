import React from "react";
import ProjectCard from "./ProjectCard";
import projectsData from '../projectsData';

const Projects = () => {
  const projects = projectsData.map(item=>{
    return(
      <ProjectCard
      key={item.id}
      image={item.image}
      title={item.title}
      description={item.description}
      githubLink={item.githubLink}
      projectDemo={item.projectDemo}
      />
    )
  })
  return (
    <div className="project">
      <h1 className="projects-header">My Recent Projects</h1>
      <section className="Info-card">{projects}</section>
      <button className="btn all-projects-link">See all of my Projects</button>
    </div>
  );
};

export default Projects;

import React from "react";
import ProjectCard from "../components/ProjectCard";
import projectsData from '../projectsData';
const AllProjects = () => {
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
    <div >
      <h1>My projects</h1>
      <section className="all-projects">{projects}</section>
    </div>
  );
  }

export default AllProjects;
import React from "react";

import projectsData from '../projectsData';
import ProjectGallery from "../components/ProjectGallery";
const AllProjects = () => {
  const projects = projectsData.map(item=>{
    return(
      <ProjectGallery
      key={item.id}
      image={item.image}
      title={item.title}
      description={item.description}
      githubLink={item.githubLink}
      projectDemo={item.projectDemo}
      techs={item.Technologies}
      />
    )
  })
  return (
    <div >
      <h1 className="all-projects-header header">All Of My Projects</h1>
      <section className="all-projects">{projects}</section>
    </div>
  );
  }

export default AllProjects;

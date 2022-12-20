import React from 'react';
import './App.css';
import './media-query.css'
import Home from './components/Home';
/* ------------------------------------ Components ----------------------------------- */
import Navbar from "./components/Navbar"
import SocialMedia from './components/SocialMedia';
import Skills from './components/Skills';
import Projects from './components/Projects';
import projectsData from './projectsData';
import Footer from './components/Footer';
function App() {
  const projects = projectsData.map(item=>{
    return(
      <Projects
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
    <React.Fragment >
      <Navbar/>
      <SocialMedia/>
      <Home/>
      <Skills/>
      <h1 className="projects-header">My Projects</h1>
      <section className="Info-card">{projects}</section>
      <Footer/>
    </React.Fragment>
  );
}

export default App;

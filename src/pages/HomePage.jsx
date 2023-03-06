import React from "react";
// import './App.css';
// import './media-query.css'

/* ------------------------------------ Components ----------------------------------- */
import Hero from "../components/Hero";


import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";

function HomePage() {
  return (
    <React.Fragment>
      <Hero />
      <Skills />
      <Projects />
      <AboutMe/>
    </React.Fragment>
  );
}

export default HomePage;

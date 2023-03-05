import React from "react";
// import './App.css';
// import './media-query.css'

/* ------------------------------------ Components ----------------------------------- */
import Hero from "../components/Hero";


import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";
import Skills2 from "../components/Skills2";

function HomePage() {
  return (
    <React.Fragment>
      <Hero />
      <Skills2 />
      <Projects />
      <AboutMe/>
    </React.Fragment>
  );
}

export default HomePage;

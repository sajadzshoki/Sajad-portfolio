import React from "react";
// import './App.css';
// import './media-query.css'

/* ------------------------------------ Components ----------------------------------- */
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SocialMedia from "../components/SocialMedia";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";

function HomePage() {
  return (
    <React.Fragment>
      <Navbar />
      <SocialMedia />
      <Hero />
      <Skills />
      <Projects />
      <AboutMe/>
      <Footer />
    </React.Fragment>
  );
}

export default HomePage;

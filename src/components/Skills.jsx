import React from "react";
import html from "../images/logos/html.png";
import css from "../images/logos/css.png";
import js from "../images/logos/js.png";
import nextjs from "../images/logos/nextjs.png";
import git from "../images/logos/git.png";
import react from "../images/logos/react.png";
import zustand from "../images/logos/zustand.svg";
import tailwind from "../images/logos/tailwind.png";
const Skills = () => {
  return (
    <>
      <h1 className="skills-header header" id="skill">My Skills</h1>
    <div className="skills">
      <div className="skills-icons">
        <div className="logo-container html">
          <img src={html} alt="html" className="logo" title="html"/>
        </div>
        <div className="logo-container css">
          <img src={css} alt="css" className="logo" title="css"/>
        </div>
        <div className="logo-container react">
          <img src={react} alt="react" className="logo" title="react"/>
        </div>
        <div className="logo-container js">
          <img src={js} alt="js" className="logo" title="java script"/>
        </div>
        <div className="logo-container zustand">
          <img src={zustand} alt="zustand" className="logo" title="zustand"/>
        </div>
        <div className="logo-container git">
          <img src={git} alt="git" className="logo" title="git"/>
        </div>
        <div className="logo-container tailwind">
          <img src={tailwind} alt="tailwind" className="logo" title="tailwind"/>
        </div>
        <div className="logo-container nextjs">
          <img src={nextjs} alt="nextjs" className="logo" title="nextjs"/>
        </div>
        <div className="cirlce-line"></div>
        

      </div>
      <div className="skills-info">
        <p>
          <h2>HTML | CSS | JAVASCRIPT </h2>
          Every web developer must know atleast basics of this three technologies , as well as I know <i class='bx bx-wink-smile'></i>
        </p>
        <p>
          <h2>REACTJS</h2>
          I use React as my framework due to it Possibilities and different open-source libraries so it always meets your needs in the best way possible. 
        </p>
        <p>
          <h2>ZUSTAND</h2>
          When it comes to Real and big projects , I can manage the States with zustand .
        </p>
        <p>
          <h2>NEXTJS</h2>
          If you need a full-stack high quality web applications with fast renderings I can handle that with NextJS for you  
        </p>
        <p>
          <h2>TAILWIND | BOOTSTRAP | MATERIAL UI . . .</h2>
          I've worked with all of this styling frameworks and libraries so if you need any of them in your project I can use them properly .
        </p>
        <p>
          <h2>GIT | GITHUB</h2>
          I know excatly how to control the version of your project and I'm ready to work with your team .
        </p>
      </div>
    </div>
    </>
  );
};

export default Skills;

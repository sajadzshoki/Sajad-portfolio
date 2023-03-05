import React from "react";
import html from "../images/logos/html.png";
import css from "../images/logos/css.png";
import js from "../images/logos/js.png";
import bootstrap from "../images/logos/bootstrap.png";
import git from "../images/logos/git.png";
import react from "../images/logos/react.png";
import redux from "../images/logos/redux.png";
import tailwind from "../images/logos/tailwind.png";
const Skills2 = () => {
  return (
    <>
      <h1 className="skills-header header" id="skill">My Skills</h1>
    <div className="skills2">
      <div className="skills2-icons">
        <div className="logo-container html">
          <img src={html} alt="html" className="logo" />
        </div>
        <div className="logo-container css">
          <img src={css} alt="css" className="logo" />
        </div>
        <div className="logo-container react">
          <img src={react} alt="react" className="logo" />
        </div>
        <div className="logo-container js">
          <img src={js} alt="js" className="logo" />
        </div>
        <div className="logo-container redux">
          <img src={redux} alt="redux" className="logo" />
        </div>
        <div className="logo-container git">
          <img src={git} alt="git" className="logo" />
        </div>
        <div className="logo-container tailwind">
          <img src={tailwind} alt="tailwind" className="logo" />
        </div>
        <div className="logo-container bootstrap">
          <img src={bootstrap} alt="bootstrap" className="logo" />
        </div>
        <div className="cirlce-line"></div>

        {/* <button className="btn animation-btn">Stop<br/> Animation</button> */}
      </div>
      <div className="skills2-info">
        <p>
          <h2>HTML | CSS | JAVASCRIPT </h2>
          Every web developer must know atleast basics of this three technologies , as well as I know <i class='bx bx-wink-smile'></i>
        </p>
        <p>
          <h2>REACT-JS</h2>
          I use React as my framework due to it Possibilities and different open-source libraries so it always meets your needs in the best way possible. 
        </p>
        <p>
          <h2>REDUX</h2>
          When it comes to Real and big projects , I can manage the States with redux that is officially for react .
        </p>
        <p>
          <h2>BOOTSTRAP | TAILWIND | MATERIAL UI</h2>
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

export default Skills2;

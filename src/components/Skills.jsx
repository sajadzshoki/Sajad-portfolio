import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Skills = () => {
  return (
    <div className="skills">
      <h1 className="skills-header">My Skills</h1>
      <AnimationOnScroll animateIn="animate__bounceIn">
        <div className="skills-box">
          <div className="skills-container">
            <i class="bx bxl-html5"></i>
            <p>HTML</p>
          </div>
          <div className="skills-container">
            <i class="bx bxl-css3"></i>
            <p>CSS</p>
          </div>
          <div className="skills-container">
            <i class="bx bxl-javascript"></i>
            <p>JAVA SCRIPT</p>
          </div>
          <div className="skills-container">
            <i class="bx bxl-react"></i>
            <p>REACT</p>
          </div>
          <div className="skills-container">
            <i class="bx bxl-git"></i>
            <p>GIT</p>
          </div>
          <div className="skills-container">
            <i class="bx bxl-python"></i>
            <p>PYTHON</p>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Skills;

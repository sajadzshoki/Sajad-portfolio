import React from "react";
import { Link } from "react-router-dom";
import mytones2 from "../images/mytones2.png";
import youtube from "../images/youtube.png";
import mui from "../images/mui.png";
import iphone from "../images/iphone.png";

const Projects = () => {

  const goRight =()=>{
    document.getElementById('project').scrollLeft +=1100;
    
  }
  const goLeft =()=>{
    document.getElementById('project').scrollLeft -=1100;
    
  }
  return (
    <div className="projects">
      <button className="arrow-r btn" onClick={goRight} onScroll>
        <i
          class="bx bxs-chevron-right"
          style={{ fontSize: "3rem", color: "var(--white)" }}
        ></i>
      </button>
      <button className="arrow-l btn" onClick={goLeft} onScroll>
        <i
          class="bx bxs-chevron-left"
          style={{ fontSize: "3rem", color: "var(--white)" }}
        ></i>
      </button>
      <h1 className="header">My Project</h1>
      <div className="main-project-container" id="project">
        <div className="main-project" >
          <a href="https://sajadzshoki.github.io/Mytones/">
            <img
              alt="project"
              src={mytones2}
              className="main-project-image"
              title="go to website"
            />
          </a>
          <a href="https://sajadzshoki.github.io/Mytones/">
            <img
              alt="project"
              src={iphone}
              className="iphone"
              title="go to website"
            />
          </a>
        </div>

        <div className="main-project">
          <a href="https://sajadzshoki.github.io/Youtube-Clone/">
            <img
              alt="project"
              src={youtube}
              className="main-project-image"
              title="go to website"
            />
          </a>
          <a href="https://sajadzshoki.github.io/Mytones/">
            <img
              alt="project"
              src={iphone}
              className="iphone"
              title="go to website"
            />
          </a>
        </div>

        <div className="main-project">
          <a href="https://sajadzshoki.github.io/Youtube-Clone/">
            <img
              alt="project"
              src={mui}
              className="main-project-image"
              title="go to website"
            />
          </a>
          <a href="https://sajadzshoki.github.io/Mytones/">
            <img
              alt="project"
              src={iphone}
              className="iphone"
              title="go to website"
            />
          </a>
        </div>
      </div>
      <Link to="/all_projects">
        <button className="btn all-projects-link">
          See all of my Projects
        </button>
      </Link>
    </div>
  );
};

export default Projects;

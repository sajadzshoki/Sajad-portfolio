import React from "react";
import { Link } from "react-router-dom";
import mytones2 from "../images/mytones2.png";
import youtube from "../images/youtube.png";
import mui from "../images/mui.png";
import quizzical from "../images/quizzical.png";
import mui_phone from "../images/mui_phone.png";
import mytones_phone from "../images/mytones_phone.png";
import quizzical_phone from "../images/quizzical_phone.png";
import youtube_phone from "../images/youtube_phone.png";

const Projects = () => {

  const goRight =()=>{
    document.getElementById('project').scrollLeft +=1000;
    
  }
  const goLeft =()=>{
    document.getElementById('project').scrollLeft -=1000;
    
  }
  return (
    <div className="projects">
      {/* <button className="arrow-r btn" onClick={goRight}>
        <i
          class="bx bxs-chevron-right"
          style={{color: "var(--white)" }}
        ></i>
      </button>
      <button className="arrow-l btn" onClick={goLeft} >
        <i
          class="bx bxs-chevron-left"
          style={{ color: "var(--white)" }}
        ></i>
      </button> */}
      <h1 className="header">My Projects</h1>
      <div className="main-project-container" id="project">
    {/*     <div className="main-project" >
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
              src={mytones_phone}
              className="iphone"
              title="go to website"
            />
          </a>
        </div>

        <div className="main-project">
          <a href="https://socialmedia-react-materialui.netlify.app/">
            <img
              alt="project"
              src={mui}
              className="main-project-image"
              title="go to website"
            />
          </a>
          <a href="https://socialmedia-react-materialui.netlify.app/">
            <img
              alt="project"
              src={mui_phone}
              className="iphone"
              title="go to website"
            />
          </a>
        </div>
        <div className="main-project">
          <a href="https://youtube-clone-sajad.vercel.app">
            <img
              alt="project"
              src={youtube}
              className="main-project-image"
              title="go to website"
            />
          </a>
          <a href="https://youtube-clone-sajad.vercel.app">
            <img
              alt="project"
              src={youtube_phone}
              className="iphone"
              title="go to website"
            />
          </a>
        </div>
        */}
        <div className="main-project">
          <a href="https://quizzical-sajad.vercel.app">
            <img
              alt="project"
              src={quizzical}
              className="main-project-image"
              title="go to website"
            />
          </a>
          <a href="https://quizzical-sajad.vercel.app">
            <img
              alt="project"
              src={quizzical_phone}
              className="iphone"
              title="go to website"
            />
          </a>
        </div> 

      </div>
      <Link to="/all_projects" className="projects-btn">
        <button className="btn all-projects-link">
          See all of my Projects
        </button>
      </Link>
    </div>
  );
};

export default Projects;

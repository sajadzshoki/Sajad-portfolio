/* eslint-disable jsx-a11y/anchor-is-valid */
import React
//{ useState } 
from "react";
import { Link } from "react-router-dom";
import projectsData from "../projectsData";
const Navbar = () => {
  // const [showNavbar, setShowNavbar] = useState(true);

  // const styles = {
  //   display: showNavbar ? "none" : "flex",
  //   flexDirection: showNavbar ? "row" : "column",
  // };

  // const handleOnClick = () => {
  //   setShowNavbar((prevState) => !prevState);
  // };
  const goToTop = () => {
    window.scroll({
      top: 0,
    });
  };

  return (
    <nav
      className="navbar"
      //style={{ justifyContent: showNavbar ? "flex-start" : "flex-start" }}
    >
      {/* <i class="bx bx-menu" onClick={handleOnClick}></i> */}
      <ul
      //style={styles}
      >
        <li onClick={goToTop}>
          
          <Link to="/">
            <a href="#home">HOME</a>
          </Link>
        </li>
        <li className="nav-skills">
          <a href="/#skill">MY SKILLS</a>
        </li>
        <li className="dropdown">
          <a href="/#project">MY PROJECTS</a>
          <ul className="dropdown-menu">
            {projectsData.map((project) => (
              <li>
                <a href={project.projectDemo} key={project.id}>
                  {project.title}
                </a>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <a href="/#about-me">ABOUT ME</a>
        </li>
        <li>
          <Link to="contact_me">
            <a href="/#footer">CONTACT ME</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

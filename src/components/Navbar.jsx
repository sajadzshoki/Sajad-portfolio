/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {


  const goToTop =()=>{
    window.scroll({
      top: 0, 
      behavior: 'smooth' 
     });
  }

  return (                        
    <nav className="navbar">
      <ul>
        <li onClick={goToTop}>
          <Link to="/">
            <a href="#home">HOME</a>
          </Link>
        </li>
        <li className="nav-skills">
          <a href="/#skill" >MY SKILLS</a>
        </li>
        <li>
          <a href="/#project">MY PROJECTS</a>
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

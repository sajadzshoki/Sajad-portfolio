/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">
            <a href="">HOME</a>
          </Link>
        </li>
        <li className="nav-skills">
          <a href="#skill" >MY SKILLS</a>
        </li>
        <li>
          <a href="#project">MY PROJECTS</a>
        </li>
        <li>
          <a href="#about-me">ABOUT ME</a>
        </li>
        <li>
          <a href="#footer">CONTACT ME</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

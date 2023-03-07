/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import projectsData from '../projectsData';
const Navbar = () => {
  const goToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="navbar">
      <ul>
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
            <li>
              <a href="#">Youtube Clone</a>
            </li>
            <li>
              <a href="#">budget manager</a>
            </li>
            <li>
              <a href="#">mytones</a>
            </li>
            <li>
              <a href="#">mytones</a>
            </li>
            <li>
              <a href="#">mytones</a>
            </li>
            <li>
              <a href="#">mytones</a>
            </li>
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
